import { useState, type SubmitEvent } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
	Alert,
	Box,
	Button,
	IconButton,
	InputAdornment,
	Link,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
	const { register } = useAuth();
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);

	async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault(); // don't reload the page
		setError(null);

		if (!username.trim() || !email.trim() || !password) {
			setError("All fields are required");
			return;
		}
		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}

		setSubmitting(true);
		try {
			await register(username.trim(), email.trim(), password);
			navigate("/game");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Registration failed");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<Box
			sx={{
				minHeight: "70vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				px: 2,
			}}
		>
			<Paper sx={{ p: 4, width: "100%", maxWidth: 420 }}>
				<Typography variant="h4" gutterBottom>
					Register
				</Typography>

				<Stack component="form" spacing={2} onSubmit={handleSubmit}>
					{error && <Alert severity="error">{error}</Alert>}

					<TextField
						label="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						autoComplete="username"
						fullWidth
						required
					/>

					<TextField
						label="Email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="email"
						fullWidth
						required
					/>

					<TextField
						label="Password"
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="new-password"
						fullWidth
						required
						slotProps={{
							input: {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label={
												showPassword ? "Hide password" : "Show password"
											}
											onClick={() => setShowPassword((prev) => !prev)}
											onMouseDown={(e) => e.preventDefault()}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							},
						}}
					/>

					<Button
						type="submit"
						variant="contained"
						disabled={submitting}
						fullWidth
					>
						{submitting ? "Registering..." : "Register"}
					</Button>

					<Typography variant="body2">
						Already have an account?{" "}
						<Link component={RouterLink} to="/login">
							Login
						</Link>
					</Typography>
				</Stack>
			</Paper>
		</Box>
	);
}
