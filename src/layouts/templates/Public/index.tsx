const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='text-3xl text-blue-900'>Public Layout</div>
      {children}
    </>
  );
};

export default PublicLayout;
