import HomePage from '@/layouts/pages/Home';
import PrivateLayout from '@/layouts/templates/Private';

export default async function Home() {
  return (
    <PrivateLayout>
      <HomePage />
    </PrivateLayout>
  );
}
