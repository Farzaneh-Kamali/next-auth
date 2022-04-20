import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {
  const { data: session, status } = useSession();
  console.log(status);
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#"> NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          {status === 'unauthenticated' && (
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault;
                  signIn('google');
                }}
              >
                Sign In
              </a>
            </Link>
          )}
        </li>
        <li>
          {status === 'authenticated' && (
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault;
                  signOut('google');
                }}
              >
                Sign Out
              </a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
