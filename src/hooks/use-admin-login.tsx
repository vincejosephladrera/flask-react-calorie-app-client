import { useState, useCallback } from 'react';
import { AdminUser } from '@/pages/admin-login/UserContext'; // Ensure the correct path for AdminUser

export default function useAdminLogin() {
	const [user, setUser] = useState<AdminUser | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const loginAdmin = useCallback(
		async ({ username, password }: { username: string; password: string }) => {
			setLoading(true);
			setError(null);

			console.log('test');

			try {
				const response = await fetch('http://127.0.0.1:5000/api/admin/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ username, password }),
				});

				if (!response.ok) {
					throw new Error('Login failed');
				}

				const data: AdminUser = await response.json();
				setUser(data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message || 'Something went wrong');
				} else {
					setError('An unknown error occurred');
				}
			} finally {
				setLoading(false);
			}
		},
		[]
	);

	return { user, loginAdmin, error, loading };
}
