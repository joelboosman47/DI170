import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Square from "./Square";
import { getGameStatus, type Cell } from "../utils/gameLogic";

export default function Board() {
	const [squares, setSquares] = useState<Cell[]>(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	const { winner, isDraw } = getGameStatus(squares);
	const gameOver = winner !== null || isDraw;

	function handleClick(index: number) {
		if (gameOver || squares[index]) return;

		const next = squares.slice();
		next[index] = xIsNext ? "X" : "O";
		setSquares(next);
		setXIsNext(!xIsNext);
	}

	let status: string;
	if (winner) {
		status = `Winner: ${winner}`;
	} else if (isDraw) {
		status = "Draw";
	} else {
		status = `Next: ${xIsNext ? "X" : "O"}`;
	}

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
		</Stack>
	);
}
