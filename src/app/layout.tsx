import { RootLayout as RootLayoutComponent } from '@/layouts/templates/Root';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://i.pinimg.com'),
  title: 'Next 13',
  description: 'Generated by create next app',
  openGraph: {
    siteName: 'My Site',
    title: 'You are my bad girl',
    description: 'Vinagangz',
    images: [
      {
        url: '/564x/bf/8e/ae/bf8eae58f9ee14b39306e509eebe2bf2.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </body>
    </html>
  );
}
