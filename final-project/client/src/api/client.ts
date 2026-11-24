// Empty in prod (same origin via Express). Override with VITE_API_BASE if needed.
const API_BASE = import.meta.env.VITE_API_BASE ?? "";

type ApiErrorBody = {
	error?: string;
};

export async function apiFetch<T>(
	path: string,
	options: RequestInit = {},
): Promise<T> {
	const response = await fetch(`${API_BASE}${path}`, {
		...options,
		credentials: "include", // send/receive the httpOnly cookie
		headers: {
			"Content-Type": "application/json",
			...(options.headers ?? {}),
		},
	});

	if (!response.ok) {
		let message = "Request failed";
		try {
			const body = (await response.json()) as ApiErrorBody;
			if (body.error) message = body.error;
		} catch {
			// response was not JSON
		}
		throw new Error(message);
	}

	// 204 or empty body
	if (response.status === 204) {
		return undefined as T;
	}

	return (await response.json()) as T;
}
