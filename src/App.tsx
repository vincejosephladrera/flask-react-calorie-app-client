import './index.css';
import AdminLogin from '@/pages/admin-login/index';

import useAdminLogin from './hooks/use-admin-login';
import { UserContext } from './pages/admin-login/UserContext';

export default function App() {
	const { user, loginAdmin, error, loading } = useAdminLogin();

	return (
		<>
			<UserContext.Provider value={{ user, loginAdmin, error, loading }}>
				<AdminLogin />
			</UserContext.Provider>
		</>
	);
}
