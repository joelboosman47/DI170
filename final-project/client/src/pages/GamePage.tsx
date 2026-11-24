import { Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function GamePage() {
	const { user, loading } = useAuth();

	return (
		<>
			<Typography variant="h4">Game</Typography>

			<p>
				{loading
					? "Checking login..."
					: user
						? `Hi, ${user.username}`
						: "Not logged in"}
			</p>
		</>
	);
}
