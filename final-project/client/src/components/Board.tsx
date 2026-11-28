import { useEffect, useRef, useState } from "react";
import { Alert, Box, Button, Stack, Typography } from "@mui/material";
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

type BoardProps = {
	onGameSaved?: () => void;
};

export default function Board({ onGameSaved }: BoardProps) {
	const [squares, setSquares] = useState<Cell[]>(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
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
				onGameSaved?.();
			})
			.catch((err: unknown) => {
				setSaveError(
					err instanceof Error ? err.message : "Could not save game",
				);
			});
	}, [gameOver, squares, winner, isDraw, onGameSaved]);

	function resetGame() {
		setSquares(Array(9).fill(null));
		setXIsNext(true);
		savedRef.current = false;
		startedAtRef.current = Date.now();
		setSaveError(null);
	}

	let resultMessage: string | null = null;
	if (isDraw) resultMessage = "Draw";
	else if (winner === "X") resultMessage = "You won!";
	else if (winner === "O") resultMessage = "You lost";

	return (
		<Stack spacing={2} sx={{ alignItems: "center" }}>
			{!gameOver && (
				<Typography>Next: {xIsNext ? "X" : "O"}</Typography>
			)}

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

			{gameOver && resultMessage && (
				<Stack spacing={1.5} sx={{ alignItems: "center", mt: 0.5 }}>
					<Typography variant="h6">{resultMessage}</Typography>
					{saveError && (
						<Alert severity="error" sx={{ py: 0 }}>
							{saveError}
						</Alert>
					)}
					<Button onClick={resetGame} variant="contained">
						Play another game?
					</Button>
				</Stack>
			)}
		</Stack>
	);
}
