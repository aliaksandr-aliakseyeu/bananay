import './globals.css';
import { getLocale } from 'next-intl/server';

export const metadata = {
  title: 'Bananay — One network for modern supply distribution',
  description:
    'Bananay connects producers, truck drivers, distribution hubs, couriers and delivery points into one coordinated delivery network across Greater Sochi.',
  icons: {
    icon: '/bananay-icon-transparent.png',
    apple: '/bananay-icon-transparent.png',
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
