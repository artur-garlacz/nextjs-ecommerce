import { useAuth } from '@components/auth/hooks/useAuth';
import Link from 'next/link';
import { Logo } from '../logo/Logo';
import DropdownMenu from './DropdownMenu';

export const Header = () => {
  const { session } = useAuth();

  return (
    <header className="relative bg-white border-b-1 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <Logo />
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {session && session?.user?.image && <DropdownMenu userImage={session?.user?.image} />}
            {!session && <Link href="/auth/signin">Zaloguj się</Link>}
          </div>
        </nav>
      </div>
    </header>
  );
};
