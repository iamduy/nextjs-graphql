import Link from 'next/link';

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='text-3xl text-red-900'>Private Layout</div>
      <div className='flex justify-center gap-5'>
        <Link href={'/users/1'}>User 1</Link>
        <Link href={'/users'}>Users</Link>
        <Link href={'/blogs'}>Blogs</Link>
        <Link href={'/blogs/1'}>Users</Link>
        <Link href={'/'}>Home</Link>
      </div>
      {children}
    </>
  );
};

export default PrivateLayout;
