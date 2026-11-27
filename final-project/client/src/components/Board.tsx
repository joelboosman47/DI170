import { useEffect, useRef, useState } from "react";
import {
	Alert,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
	Typography,
} from "@mui/material";
import Square from "./Square";
import { apiFetch } from "../api/client";
import { getGameStatus, type Cell } from "../utils/gameLogic";

function toApiResult(
	winner: "X" | "O" | null,
	isDraw: boolean,
): "win" | "loss" | "draw" {
	if (isDraw) return "draw";
	if (winner === "X") return "win";
	return "loss"; // O won — logged-in player is X
}

export default function Board() {
	const [squares, setSquares] = useState<Cell[]>(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [saveError, setSaveError] = useState<string | null>(null);

	const startedAtRef = useRef<number | null>(null);
	const savedRef = useRef(false);

	const { winner, isDraw } = getGameStatus(squares);
	const gameOver = winner !== null || isDraw;

	useEffect(() => {
		if (startedAtRef.current === null) {
			startedAtRef.current = Date.now();
		}
	}, []);

	function handleClick(index: number) {
		if (gameOver || squares[index]) return;

		const next = squares.slice();
		next[index] = xIsNext ? "X" : "O";
		setSquares(next);
		setXIsNext(!xIsNext);
	}

	useEffect(() => {
		if (!gameOver || savedRef.current) return;
		savedRef.current = true;

		const movesCount = squares.filter((cell) => cell !== null).length;
		const result = toApiResult(winner, isDraw);
		const startedAt = startedAtRef.current ?? Date.now();
		const durationSeconds = Math.max(
			1,
			Math.round((Date.now() - startedAt) / 1000),
		);

		apiFetch("/api/games", {
			method: "POST",
			body: JSON.stringify({ result, movesCount, durationSeconds }),
		})
			.then(() => {
				setDialogOpen(true);
			})
			.catch((err: unknown) => {
				setSaveError(
					err instanceof Error ? err.message : "Could not save game",
				);
				setDialogOpen(true);
			});
	}, [gameOver, squares, winner, isDraw]);

	function resetGame() {
		setSquares(Array(9).fill(null));
		setXIsNext(true);
		savedRef.current = false;
		startedAtRef.current = Date.now();
		setDialogOpen(false);
		setSaveError(null);
	}

	let status: string;
	if (winner) {
		status = `Winner: ${winner}`;
	} else if (isDraw) {
		status = "Draw";
	} else {
		status = `Next: ${xIsNext ? "X" : "O"}`;
	}

	let dialogTitle = "Game over";
	if (isDraw) dialogTitle = "Draw";
	else if (winner === "X") dialogTitle = "You won!";
	else if (winner === "O") dialogTitle = "You lost";

	return (
		<Stack spacing={2} sx={{ alignItems: "center" }}>
			<Typography>{status}</Typography>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 80px)",
					gap: 1,
				}}
			>
				{squares.map((value, index) => (
					<Square
						key={index}
						value={value}
						onClick={() => handleClick(index)}
						disabled={gameOver}
					/>
				))}
			</Box>

			<Dialog open={dialogOpen} onClose={resetGame}>
				<DialogTitle>{dialogTitle}</DialogTitle>
				<DialogContent>
					{saveError ? (
						<Alert severity="error">{saveError}</Alert>
					) : (
						<Typography>Result saved. Ready for another round?</Typography>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={resetGame} variant="contained">
						Play again
					</Button>
				</DialogActions>
			</Dialog>
		</Stack>
	);
}
