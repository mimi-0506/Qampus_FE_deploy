import {createInfoStore} from '@/stores/search/infoStore';
// import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export default async function Page() {
  // 1. Zustand 초기화
  const store = createInfoStore();
  const {logout} = store.getState();

  // 상태 초기화 (로그아웃 처리)
  logout();

  // 2. 쿠키에서 액세스 토큰 삭제
  // const cookieStore = cookies();
  // (await cookieStore).delete('accessToken');

  // 3. 완료되면 /login으로 이동
  redirect('/login');

  return <div>로그아웃 중...</div>;
}
