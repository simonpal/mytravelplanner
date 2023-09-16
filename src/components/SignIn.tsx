'use client';
import { redirect } from 'next/navigation';
import '@/styles/components/button.scss';
import { useSession } from 'next-auth/react';

const SignIn = () => {
  const { data: session } = useSession();
  //   const session = getServerSession(authOptions);
  if (session && (session as any)?.user) {
    redirect('/mypage');
  }
  return (
    <a className="button primary" href="/api/auth/signin">
      Sign in
    </a>
  );
  // return <Button onClick={() => signIn()}>Sign in</Button>;
};

export default SignIn;
