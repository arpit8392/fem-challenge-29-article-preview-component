import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata = {
	title: 'Article Preview Component',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind UI and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${manrope.className} bg-lightGrayishBlue`}>
				{children}
			</body>
		</html>
	)
}
