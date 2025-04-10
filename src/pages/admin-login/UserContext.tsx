import { createContext } from 'react';

export type AdminUser = {
	accessToken: string;
};

type UserContextType = {
	user: AdminUser | null;
	loginAdmin: (params: { username: string; password: string }) => Promise<void>;
	error: string | null;
	loading: boolean;
};

export const UserContext = createContext<UserContextType | null>(null);
