import Image from 'next/image';
export default function Success() {
  return (
    <div>
      <Image src="" alt="character" width={194} height={196} />
      <p>로그인 완료!</p>
      <p>
        ~와 함께 <Image src="" width={176} height={38} alt="logo" />를
        즐겨보세요
      </p>
    </div>
  );
}
