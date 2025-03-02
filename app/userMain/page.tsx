'use client';

import {useEffect, useState} from 'react';
import ActInfo from './_components/ActInfo';
import UserInfo from './_components/UserInfo';
import {userMainDataType} from '@/type';
import {fetchWithAuth} from '../apis/clientFetch';

export default function UserMainPage() {
  const [data, setData] = useState<userMainDataType | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetchWithAuth({method: 'GET', url: '/home'});

    setData(response);
  };

  return (
    <main className=" bg-usermainbg2 flex overflow-hidden flex-col aspect-[1922/3500] w-screen items-center justify-center relative">
      <UserInfo userHomeDto={data?.userHomeDto} />
      <ActInfo
        weeklyQuestions={data?.weeklyQuestions}
        popularAnswer={data?.popularAnswers}
      />
    </main>
  );
}
