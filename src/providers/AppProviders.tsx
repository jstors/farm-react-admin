import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type React from 'react';
import { useMemo } from 'react';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 30,
            retry: 1,
          },
        },
      }),
    [],
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default AppProviders;
