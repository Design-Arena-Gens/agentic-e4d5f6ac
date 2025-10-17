import './globals.css';
import { Montserrat, Lato } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body'
});

export const metadata = {
  title: 'Claim Your $100 Crumbl Gift Card | Sweet Survey Rewards',
  description:
    'Complete a quick survey and a few simple offers to unlock a $100 Crumbl gift card. Limited-time reward for cookie lovers and online deal hunters.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
