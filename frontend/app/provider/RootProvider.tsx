'use client';

import { useEffect } from 'react';

import { getHealth } from '@/entities/health';

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const healthCheck = async () => {
      try {
        const response = await getHealth();
        console.warn('서버 상태:', response.status);
      } catch (error) {
        console.warn(error);
      }
    };
    healthCheck();
  }, []);

  return <>{children}</>;
}
