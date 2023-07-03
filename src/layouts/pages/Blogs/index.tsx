'use client';
import { useTranslation } from '@/hooks';

const BlogPage = () => {
  const { t } = useTranslation();
  return <div>{t('footer')}</div>;
};
export default BlogPage;
