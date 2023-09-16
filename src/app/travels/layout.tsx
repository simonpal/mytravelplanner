// import Header from '@/components/Header';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import '@/styles/components/page.scss';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/api/auth/signin');
  return (
    <>
      <div className="page-wrapper">
        <Header user={session?.user} />
        {children}
      </div>
    </>
  );
}
