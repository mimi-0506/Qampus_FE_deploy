import {univcertApi} from '@/app/apis/univcert';
import {Dispatch, SetStateAction, ChangeEvent} from 'react';

async function postUniversityCheck(search: string) {
  const data = await univcertApi('check', {
    univName: search,
  });

  return data.success;
}

export default function University({
  setUniversity,
  university,
}: {
  setUniversity: Dispatch<SetStateAction<string>>;
  university: string;
}) {
  const handleUniversitySearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchUniversity = e.target.value;

    if (searchUniversity !== '' && searchUniversity !== university) {
      const isValid = await postUniversityCheck(searchUniversity);

      if (!isValid) {
        toast.error('인증되지 않은 대학입니다.');
        setUniversity('');
        e.target.value = '';
      } else setUniversity(searchUniversity);
    }
  };

  return (
    <div className="flex flex-col text-[1.14vw] text-grey4 gap-[0.6vw]">
      <label className="ml-[0.7vw]">학교</label>
      <input
        name="universityName"
        className="bg-semiBlack w-[24.7vw] aspect-[475/45] rounded-lg text-grey3 text-[0.9vw] box-border px-[0.7vw] py-[0.2vw]"
        placeholder="학교 이름을 입력해주세요  ex)서울대학교"
        onBlur={handleUniversitySearch}
      />
    </div>
  );
}
