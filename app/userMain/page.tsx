import {fetchWithAuth} from '../server/actions/serverFetch';
import ActInfo from './_components/ActInfo';
import UserInfo from './_components/UserInfo';
import {userMainDataType} from '@/type';

const preload = async () => {
  void fetchWithAuth({method: 'GET', url: '/home'});
};

export default async function UserMainPage() {
  preload();
  const data: userMainDataType = await fetchWithAuth({
    method: 'GET',
    url: '/home',
  });

  return (
    <main className=" bg-usermainbg2 flex overflow-hidden flex-col aspect-[1922/3500] w-screen items-center justify-center relative">
      <UserInfo userHomeDto={data?.userHomeDto} />
      <ActInfo
        weeklyQuestions={data?.weeklyQuestions}
        popularAnswer={data?.weeklyAnswers}
      />
    </main>
  );
}
