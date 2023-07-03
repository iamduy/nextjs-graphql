'use client';
import { swrOptions } from '@/constants/swr-config';
import { useAuthentication } from '@/hooks';
import '@/i18n';
import { SWRConfig } from 'swr';
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useAuthentication();
  return <SWRConfig value={swrOptions}>{children}</SWRConfig>;
};
