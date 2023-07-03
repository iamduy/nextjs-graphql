import UsersPage from '@/layouts/pages/Users';
import PrivateLayout from '@/layouts/templates/Private';

export default function Users() {
  return (
    <PrivateLayout>
      <UsersPage />
    </PrivateLayout>
  );
}
