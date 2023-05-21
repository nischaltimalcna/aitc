import { SiteNavbar } from '@/components';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import Head from './head';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head/>
			<body className={`${poppins.className} bg-primary`}>
				<SiteNavbar/>
			{children}</body>
		</html>
	);
}
