import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/datepicker.css';

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
