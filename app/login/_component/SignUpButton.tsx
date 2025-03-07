import Image from 'next/image';

export default function SignUpButton() {
  return (
    <button className="relative w-[20.4vw] aspect-[392/63] rounded-[0.468vw] bg-black text-white  flex justify-center items-center box-border">
      <div className="absolute left-[1.1vw]">
        <div className="relative w-[1.25vw] aspect-[24/22]">
          <Image src="/svg/user.svg" fill alt="user icon" />
        </div>
      </div>
      회원가입
    </button>
  );
}
