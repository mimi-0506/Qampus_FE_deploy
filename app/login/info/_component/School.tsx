'use client';

import {univcertApi} from '@/app/api/univcert';
import {Dispatch, SetStateAction} from 'react';

async function postSchoolCheck(search: string) {
  const data = await univcertApi('check', {
    univName: search,
  });

  return data.success;
}

export default function School({
  setSchool,
  school,
}: {
  setSchool: Dispatch<SetStateAction<string>>;
  school: string;
}) {
  const handleSchoolSearch = async e => {
    const searchSchool = e.target.value;

    if (searchSchool !== '' && searchSchool !== school) {
      const isValid = await postSchoolCheck(searchSchool);

      if (!isValid) {
        alert('인증되지 않은 대학입니다.'); //나중에 모달로 바꾸기
        e.target.value = '';
      } else setSchool(searchSchool);
    }
  };

  return (
    <div className="flex flex-col text-[1.14vw] text-grey4 gap-[0.6vw]">
      <label className="ml-[0.7vw]">학교</label>
      <input
        className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py=[0.2vw]"
        placeholder="학교 이름을 입력해주세요  ex)서울대학교"
        onBlur={handleSchoolSearch}
      />
    </div>
  );
}
