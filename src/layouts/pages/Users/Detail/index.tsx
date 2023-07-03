'use client';

import { Params } from '@/types/interface';
import { endPoint } from '@/utils';
import useSWR from 'swr';

export default function UserDetailPage({ params }: Params) {
  const { data, isLoading } = useSWR(endPoint.GET_USER(+params.slug));

  if (isLoading) return <div>Loading....</div>;

  return (
    <div>
      {data.name} | {data.email}
    </div>
  );
}
