import UserDetailPage from '@/layouts/pages/Users/Detail';
import PrivateLayout from '@/layouts/templates/Private';
import { Params } from '@/types/interface';

export default function Page({ params }: Params) {
  return (
    <PrivateLayout>
      <UserDetailPage params={params} />
    </PrivateLayout>
  );
}
