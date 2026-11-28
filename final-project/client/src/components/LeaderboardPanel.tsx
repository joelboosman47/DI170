import { useEffect, useRef, useState } from "react";
import { keyframes } from "@emotion/react";
import {
	Alert,
	CircularProgress,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { apiFetch } from "../api/client";
import { useAuth } from "../context/AuthContext";

type LeaderboardRow = {
	userId: number;
	username: string;
	wins: number;
	losses: number;
	draws: number;
	lastPlayedAt: string;
	gameCount: number;
};

type LeaderboardPanelProps = {
	/** Change this after a game is saved to refetch */
	refreshKey?: number;
};

/** -1 means not in the top list */
function rankOf(rows: LeaderboardRow[], userId: number | undefined): number {
	if (userId == null) return -1;
	return rows.findIndex((row) => row.userId === userId);
}

const celebratePulse = keyframes`
	0% { background-color: rgba(255, 193, 7, 0.55); }
	50% { background-color: rgba(255, 193, 7, 0.2); }
	100% { background-color: rgba(255, 193, 7, 0.4); }
`;

const celebratePop = keyframes`
	0% { transform: scale(0.4); opacity: 0; }
	40% { transform: scale(1.35); opacity: 1; }
	100% { transform: scale(1); opacity: 1; }
`;

export default function LeaderboardPanel({
	refreshKey = 0,
}: LeaderboardPanelProps) {
	const { user } = useAuth();
	const [rows, setRows] = useState<LeaderboardRow[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [celebrating, setCelebrating] = useState(false);

	const prevRankRef = useRef<number | null>(null);
	const celebrateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
		null,
	);

	useEffect(() => {
		let cancelled = false;

		// Don't setLoading(true) here — that sync setState in an effect
		// triggers a React compiler/linter warning, and flashing a spinner
		// on every refresh is worse UX than keeping the previous rows.
		apiFetch<LeaderboardRow[]>("/api/leaderboard")
			.then((data) => {
				if (cancelled) return;

				const nextRank = rankOf(data, user?.id);
				const prevRank = prevRankRef.current;

				// Only after a post-game refresh (refreshKey > 0). Skip the
				// initial load and the refetch when auth user.id first appears.
				const shouldCelebrate =
					refreshKey > 0 &&
					prevRank !== null &&
					nextRank >= 0 &&
					(prevRank < 0 || nextRank < prevRank);

				if (user?.id != null) {
					prevRankRef.current = nextRank;
				}
				setRows(data);
				setError(null);

				if (shouldCelebrate) {
					if (celebrateTimerRef.current) {
						clearTimeout(celebrateTimerRef.current);
					}
					setCelebrating(true);
					celebrateTimerRef.current = setTimeout(() => {
						setCelebrating(false);
						celebrateTimerRef.current = null;
					}, 2200);
				}
			})
			.catch((err: unknown) => {
				if (!cancelled) {
					setError(
						err instanceof Error ? err.message : "Failed to load",
					);
				}
			})
			.finally(() => {
				if (!cancelled) setLoading(false);
			});

		return () => {
			cancelled = true;
		};
	}, [refreshKey, user?.id]);

	useEffect(() => {
		return () => {
			if (celebrateTimerRef.current) {
				clearTimeout(celebrateTimerRef.current);
			}
		};
	}, []);

	return (
		<Paper
			elevation={2}
			sx={{
				p: 1.5,
				minWidth: 280,
				maxWidth: 340,
				flexShrink: 0,
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
				Leaderboard
				{celebrating ? " 🎉" : ""}
			</Typography>
			<Typography
				variant="caption"
				color="text.secondary"
				sx={{ display: "block", mb: 1 }}
			>
				Top 5
			</Typography>

			{loading && (
				<Stack sx={{ alignItems: "center", py: 2 }}>
					<CircularProgress size={24} />
				</Stack>
			)}

			{error && (
				<Alert severity="error" sx={{ py: 0 }}>
					{error}
				</Alert>
			)}

			{!loading && !error && rows.length === 0 && (
				<Typography variant="body2" color="text.secondary">
					No games yet
				</Typography>
			)}

			{!loading && !error && rows.length > 0 && (
				<TableContainer>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell sx={{ py: 0.5 }}>#</TableCell>
								<TableCell sx={{ py: 0.5 }}>Player</TableCell>
								<TableCell align="right" sx={{ py: 0.5 }}>
									W
								</TableCell>
								<TableCell align="right" sx={{ py: 0.5 }}>
									L
								</TableCell>
								<TableCell align="right" sx={{ py: 0.5 }}>
									D
								</TableCell>
								<TableCell align="right" sx={{ py: 0.5 }}>
									G
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => {
								const isCurrentUser = row.userId === user?.id;
								const isCelebratingRow =
									isCurrentUser && celebrating;

								return (
									<TableRow
										key={row.userId}
										selected={isCurrentUser}
										sx={
											isCelebratingRow
												? {
														animation: `${celebratePulse} 0.7s ease-in-out 3`,
														"&:hover": {
															bgcolor:
																"rgba(255, 193, 7, 0.35)",
														},
													}
												: isCurrentUser
													? {
															bgcolor:
																"action.selected",
															"&:hover": {
																bgcolor:
																	"action.selected",
															},
														}
													: undefined
										}
									>
										<TableCell sx={{ py: 0.5 }}>
											{index + 1}
										</TableCell>
										<TableCell sx={{ py: 0.5 }}>
											{row.username}
											{isCurrentUser ? " (you)" : ""}
											{isCelebratingRow && (
												<Typography
													component="span"
													sx={{
														display: "inline-block",
														ml: 0.5,
														animation: `${celebratePop} 0.45s ease-out`,
													}}
													aria-hidden
												>
													🎉
												</Typography>
											)}
										</TableCell>
										<TableCell
											align="right"
											sx={{ py: 0.5 }}
										>
											{Number(row.wins)}
										</TableCell>
										<TableCell
											align="right"
											sx={{ py: 0.5 }}
										>
											{Number(row.losses)}
										</TableCell>
										<TableCell
											align="right"
											sx={{ py: 0.5 }}
										>
											{Number(row.draws)}
										</TableCell>
										<TableCell
											align="right"
											sx={{ py: 0.5 }}
										>
											{Number(row.gameCount)}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Paper>
	);
}
