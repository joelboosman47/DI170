import { Stack, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import Board from "../components/Board";

export default function GamePage() {
	const { user } = useAuth();

	return (
		<Stack spacing={2} sx={{ p: 2 }}>
			<Typography variant="h4">Game</Typography>
			{user && (
				<Typography color="textSecondary">
					Playing as {user.username}
				</Typography>
			)}
			<Board />
		</Stack>
	);
}
