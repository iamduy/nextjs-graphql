import BlogPage from '@/layouts/pages/Blogs';
import PrivateLayout from '@/layouts/templates/Private';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://i.pinimg.com'),
  title: 'Blog',
  openGraph: {
    title: 'Hiphop never die yeu em never sai',
    images: [
      {
        url: '/564x/df/a9/64/dfa9647dc7861a8ddb6767c1590ec519.jpg',
      },
    ],
  },
};
export default function Blog() {
  return (
    <PrivateLayout>
      <BlogPage />
    </PrivateLayout>
  );
}
