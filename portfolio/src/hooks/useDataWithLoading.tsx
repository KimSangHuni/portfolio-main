import { ReactNode } from 'react';
import useSWR from 'swr';

interface Props<T> {
  key: string;
  fetcher: () => Promise<T>;
  loadingComponent?: ReactNode;
  dataComponent: (data:T) => ReactNode;
}

export function useDataWithLoading<T,>({
  key,
  fetcher,
  loadingComponent,
  dataComponent,
}: Props<T>) {
  const { data, error } = useSWR(key, fetcher);

  if (error) {
    // 처리할 에러 상태에 대한 로직 추가
    return <div>Error loading data</div>;
  }

  if (!data) {
    // 로딩 중일 때 로딩 컴포넌트 반환
    return loadingComponent ?? <div>loading...</div>;
  }

  // 데이터가 있을 때 선택한 컴포넌트 반환
  return dataComponent(data);
};
