'use client';
import {useInfoStore} from '@/providers/store-provider';
import Image from 'next/image';
import {useState} from 'react';

// interface InfoCardProps {
//   name: string;
//   university: string;
//   department: string;
//   profileImage?: string;
// }

export default function InfoCard() {
  const {name, universityName, major, profileImageUrl} = useInfoStore(
    state => state,
  );
  const [profileSrc, setProfileSrc] = useState(profileImageUrl);

  return (
    <div className="flex h-[140px] w-[70%] mt-10 flex-col items-center justify-center rounded-2xl bg-[#F8F8F8]">
      <div className="w-full px-[30px] py-[30px]">
        <p className="font-[600] text-[16px] text-black">내 정보</p>
        <p className="text-[13px] font-[200] text-[#8D8D8D]">
          로그인시 입력한 나의 학교/학과 정보입니다.
        </p>
        {/* 사용자 정보 */}
        <div className="h-[20px] w-full"></div>
        <div className="flex items-center gap-3">
          {/* 프로필 이미지 */}
          <Image
            src={profileSrc || '/images/question/profile-example.png'}
            alt="profile image"
            className="rounded-full object-cover"
            width={40}
            height={40}
            onError={() =>
              setProfileSrc('/images/question/profile-example.png')
            }
            unoptimized
          />
          <div>
            <p className="text-[14px] font-[600] text-black">{name}</p>
            <div className="mt-[2px] flex items-center">
              <Image
                src="/images/question/cap.svg"
                width={15}
                height={15}
                alt="school cap image"
                className="mr-[4px]"
              />
              <p className="text-sm font-[300] text-black">
                {universityName} {major} 소속
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
