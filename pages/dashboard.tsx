import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './dashboard/Sidebar';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center flex-start">
        <div className="flex flex-start relative justify-between">
            <Sidebar />
        </div>
    </div>
  );
}
