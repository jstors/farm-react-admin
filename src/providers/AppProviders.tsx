import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type React from 'react';
import { useMemo } from 'react';

const QUERY_STALE_TIME_MS = 30 * 1000;

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: QUERY_STALE_TIME_MS,
            retry: 1,
          },
        },
      }),
    [],
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default AppProviders;
