import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { privateRoutes } from '@/constants/routes';
import { parseUrl } from '@/utils';

export const useAuthentication = () => {
  const router = useRouter();
  const params = useParams();
  const handleAuth = () => {
    const isAuthenticated = localStorage.getItem('token');
    setTimeout(() => {
      if (isAuthenticated == '1' && privateRoutes.includes(parseUrl(params))) {
        router.push('/login');
      }
      if (isAuthenticated == '0' && location.pathname === '/login') {
        router.push('/');
      }
    }, 300);
  };
  useEffect(() => {
    handleAuth();
    window.addEventListener('storage', handleAuth);
    return () => window.removeEventListener('storage', handleAuth);
  });
};
