export const getHealth = async (): Promise<{ status: string }> => {
  const response = await fetch('/api/health');

  if (!response.ok) {
    throw new Error('서버 상태를 불러오지 못했습니다.');
  }

  const data = await response.json();
  return data;
};
