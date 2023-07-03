import PrivateLayout from '@/layouts/templates/Private';
import { Params } from '@/types/interface';

export default function Page({ params }: Params) {
  return (
    <PrivateLayout>My Post {decodeURIComponent(params.slug)}</PrivateLayout>
  );
}
