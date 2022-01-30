import { Layout } from '@components/layout/Layout';
import { SignInButton } from '@components/auth/SignInButton';
import { useAuth } from '@components/auth/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function SignIn() {
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);

  return (
    <Layout>
      <SignInButton />
    </Layout>
  );
}
