import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Stack, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
import ProtectedRoute from "./components/ProtectedRoute";
import IdleLogout from "./components/IdleLogout";

function App() {
	return (
		<BrowserRouter>
			<IdleLogout />
			<Stack direction="row" spacing={2} sx={{ p: 2 }}>
				<MuiLink component={RouterLink} to="/login">
					Login
				</MuiLink>
				<MuiLink component={RouterLink} to="/register">
					Register
				</MuiLink>
				<MuiLink component={RouterLink} to="/game">
					Game
				</MuiLink>
			</Stack>

			<Routes>
				<Route path="/" element={<Navigate to="/login" replace />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route
					path="/game"
					element={
						<ProtectedRoute>
							<GamePage />
						</ProtectedRoute>
					}
				/>
				<Route path="/leaderboard" element={<Navigate to="/game" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
