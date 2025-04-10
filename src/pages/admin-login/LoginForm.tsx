import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
	const { loginAdmin } = useContext(UserContext)!;

	const adminFormSchema = z.object({
		username: z.string().min(1, { message: 'Username is required.' }),
		password: z.string().min(1, { message: 'Password is required.' }),
	});

	const form = useForm<z.infer<typeof adminFormSchema>>({
		resolver: zodResolver(adminFormSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const { handleSubmit } = form;

	function onSubmit({ username, password }: z.infer<typeof adminFormSchema>) {
		loginAdmin({ username, password });
	}

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cn('flex flex-col gap-6 p-8', className)}
				{...props}
			>
				<div className='grid gap-6'>
					<div className='grid gap-2'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder='Username' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='mr-6'>Password</FormLabel>
									<a href='#' className='ml-auto text-sm underline-offset-4 hover:underline'>
										Forgot your password?
									</a>
									<FormControl>
										<Input placeholder='****' type='password' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className='grid gap-2'></div>
					<Button type='submit' className='w-full'>
						Login
					</Button>
				</div>
				<div className='text-center text-sm'>
					Don&apos;t have an account?{' '}
					<a href='#' className='underline underline-offset-4'>
						Sign up
					</a>
				</div>
			</form>
		</Form>
	);
}
