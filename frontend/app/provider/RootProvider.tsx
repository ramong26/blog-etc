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
        console.info('서버 상태:', response.status);
      } catch (error) {
        console.warn(error);
      }
    };
    healthCheck();

    // TODO: 추후 서버 부하가 생길경우 해당 로직을 삭제하도록 함
    const intervalId = setInterval(healthCheck, 10 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <>{children}</>;
}
