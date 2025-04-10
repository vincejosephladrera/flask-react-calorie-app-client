import { Apple } from 'lucide-react';

import { LoginForm } from './LoginForm';
import img from '@/assets/admin-login-img.webp';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function AdminLogin() {
	const { user } = useContext(UserContext)!;

	if (user) {
		return <div>Already Login</div>;
	}

	return (
		<div className='grid min-h-svh lg:grid-cols-2'>
			<div className='flex flex-col gap-4 p-6 md:p-10 border-black border-r '>
				<div className='flex justify-center gap-2 md:justify-start '>
					<a href='#' className='flex items-center gap-2 font-medium'>
						<div className='flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground'>
							<Apple className='size-4' />
						</div>
						Calorie App
					</a>
				</div>
				<div className='flex flex-1 items-center justify-center'>
					<div className='w-full max-w-xs'>
						<LoginForm />
					</div>
				</div>
			</div>
			<div className='relative hidden bg-muted lg:block '>
				<img
					src={img}
					alt='Image'
					className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
				/>
			</div>
		</div>
	);
}
