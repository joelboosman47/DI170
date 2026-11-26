import { Button } from "@mui/material";

type SquareProps = {
	value: "X" | "O" | null;
	onClick: () => void;
	disabled?: boolean;
};

export default function Square({ value, onClick, disabled }: SquareProps) {
	return (
		<Button
			variant="outlined"
			onClick={onClick}
			disabled={disabled || value !== null}
			sx={{
				width: 80,
				height: 80,
				minWidth: 80,
				fontSize: "1.75rem",
				fontWeight: 700,
			}}
		>
			{value ?? ""}
		</Button>
	);
}
