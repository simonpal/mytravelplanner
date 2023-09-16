// import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { Providers } from '@/lib/Providers';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import '@/styles/styles.scss';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | MyTravelPlanner',
    default: 'MyTravelPlanner', // a default is required when creating a template
  },
  description: 'Plan your next journey',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={sora.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
