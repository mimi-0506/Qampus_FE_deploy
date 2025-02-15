'use client';
import Image from 'next/image';
import {useState} from 'react';

interface InfoCardProps {
  name: string;
  university: string;
  department: string;
  profileImage?: string;
}

export default function InfoCard({
  name,
  university,
  department,
  profileImage = '/images/question/profile-example.png',
}: InfoCardProps) {
  const [profileSrc, setProfileSrc] = useState(profileImage);

  return (
    <div className="bg-[#F8F8F8] w-full h-[140px] flex flex-col items-center rounded-2xl justify-center">
      <div className="w-full px-[30px] py-[30px]">
        <p className="text-black font-bold">작성자 관련 정보</p>
        <p className="text-[#8D8D8D] font-normal text-xs">
          해당 정보는 비공개 처리되며, 소속 학교만 보여지게 됩니다.
        </p>
        {/* 사용자 정보 */}
        <div className=" w-full h-[20px]"></div>
        <div className="flex items-center gap-3">
          {/* 프로필 이미지 */}
          <Image
            src={profileSrc}
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
            <p className="font-semibold text-sm text-black">{name}</p>
            <div className="flex items-center mt-[2px]">
              <Image
                src="/images/question/cap.svg"
                width={15}
                height={15}
                alt="school cap image"
                className="mr-[4px]"
              />
              <p className="text-xs font-medium text-black text-sm">
                {university} {department} 소속
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
