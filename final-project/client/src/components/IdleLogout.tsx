import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const IDLE_TIMEOUT_MS = 5 * 60 * 1000;
const CHECK_INTERVAL_MS = 10_000;

const ACTIVITY_EVENTS = [
	"mousedown",
	"mousemove",
	"keydown",
	"scroll",
	"touchstart",
] as const;

/** When logged in, log out and redirect after 5 minutes of no activity. */
export default function IdleLogout() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) return;

		let lastActivity = Date.now();
		let loggingOut = false;

		const markActivity = () => {
			lastActivity = Date.now();
		};

		const forceLogout = async () => {
			if (loggingOut) return;
			loggingOut = true;
			try {
				await logout();
			} finally {
				navigate("/login", { replace: true });
			}
		};

		const checkIdle = () => {
			if (Date.now() - lastActivity >= IDLE_TIMEOUT_MS) {
				void forceLogout();
			}
		};

		for (const event of ACTIVITY_EVENTS) {
			window.addEventListener(event, markActivity, { passive: true });
		}
		document.addEventListener("visibilitychange", checkIdle);

		const intervalId = window.setInterval(checkIdle, CHECK_INTERVAL_MS);

		return () => {
			for (const event of ACTIVITY_EVENTS) {
				window.removeEventListener(event, markActivity);
			}
			document.removeEventListener("visibilitychange", checkIdle);
			window.clearInterval(intervalId);
		};
	}, [user, logout, navigate]);

	return null;
}
