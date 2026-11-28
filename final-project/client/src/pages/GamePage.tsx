import { useCallback, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Board from "../components/Board";
import LeaderboardPanel from "../components/LeaderboardPanel";

export default function GamePage() {
	const { user } = useAuth();
	const [leaderboardKey, setLeaderboardKey] = useState(0);

	const handleGameSaved = useCallback(() => {
		setLeaderboardKey((key) => key + 1);
	}, []);

	return (
		<Box
			sx={{
				p: 2,
				display: "flex",
				gap: 3,
				alignItems: "flex-start",
				justifyContent: "space-between",
				flexWrap: "wrap",
			}}
		>
			<Stack spacing={2} sx={{ flex: "1 1 280px" }}>
				<Typography variant="h4">Game</Typography>
				{user && (
					<Typography color="text.secondary">
						Playing as {user.username} (X)
					</Typography>
				)}
				<Board onGameSaved={handleGameSaved} />
			</Stack>

			<LeaderboardPanel refreshKey={leaderboardKey} />
		</Box>
	);
}
