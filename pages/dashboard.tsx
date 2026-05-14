import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './dashboard/Sidebar';

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center flex-start">
        <div className="flex flex-start relative justify-between">
            <Sidebar />
        </div>
    </div>
  );
}
