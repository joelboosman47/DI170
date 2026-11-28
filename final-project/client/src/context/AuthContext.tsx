/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from "react";
import { apiFetch } from "../api/client";

export type User = {
	id: number;
	username: string;
	email: string;
};

type AuthContextValue = {
	user: User | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<void>;
	register: (
		username: string,
		email: string,
		password: string,
	) => Promise<void>;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	// On app load: ask the server "who am I?" using the cookie
	useEffect(() => {
		apiFetch<User>("/api/users/me")
			.then((me) => setUser(me))
			.catch(() => setUser(null))
			.finally(() => setLoading(false));
	}, []);

	const login = useCallback(async (email: string, password: string) => {
		const me = await apiFetch<User>("/api/auth/login", {
			method: "POST",
			body: JSON.stringify({
				email: email.trim().toLowerCase(),
				password,
			}),
		});
		setUser(me);
	}, []);

	const register = useCallback(
		async (username: string, email: string, password: string) => {
			const me = await apiFetch<User>("/api/auth/register", {
				method: "POST",
				body: JSON.stringify({
					username,
					email: email.trim().toLowerCase(),
					password,
				}),
			});
			setUser(me);
		},
		[],
	);

	const logout = useCallback(async () => {
		try {
			await apiFetch("/api/auth/logout", { method: "POST" });
		} finally {
			setUser(null);
		}
	}, []);

	const value = useMemo(
		() => ({ user, loading, login, register, logout }),
		[user, loading, login, register, logout],
	);

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) {
		throw new Error("useAuth must be used inside AuthProvider");
	}
	return ctx;
}