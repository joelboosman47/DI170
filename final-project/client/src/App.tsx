import { Button, Stack, Typography } from "@mui/material";

function App() {
	return (
		<Stack spacing={2} sx={{ p: 4 }}>
			<Typography variant="h4">Tic-Tac-Toe</Typography>
			<Button variant="contained" color="primary">
				Primary
			</Button>
			<Button variant="contained" color="secondary">
				Secondary
			</Button>
		</Stack>
	);
}

export default App;
