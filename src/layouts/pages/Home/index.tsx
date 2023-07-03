'use client';
import { useTranslation } from '@/hooks';

const HomePage = () => {
  const { t } = useTranslation();
  return <div>{t('header')}</div>;
};
export default HomePage;
