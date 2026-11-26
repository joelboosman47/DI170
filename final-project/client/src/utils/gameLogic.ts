export type Cell = "X" | "O" | null;

export type GameStatus = {
	winner: "X" | "O" | null;
	isDraw: boolean;
};

const WIN_LINES: number[][] = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export function getGameStatus(squares: Cell[]): GameStatus {
	for (const [a, b, c] of WIN_LINES) {
		const mark = squares[a];
		if (mark && mark === squares[b] && mark === squares[c]) {
			return { winner: mark, isDraw: false };
		}
	}

	const isDraw = squares.every((cell) => cell !== null);
	return { winner: null, isDraw };
}
