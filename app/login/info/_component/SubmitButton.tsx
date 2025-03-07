export default function SubmitButton({isAuthValid}: {isAuthValid: boolean}) {
  return (
    <button
      disabled={!isAuthValid}
      className={`mt-[2.5vw] aspect-[475/63] w-[24.7vw] flex justify-center items-center text-white 
    ${isAuthValid ? 'bg-main' : 'bg-grey2'} rounded-[0.468vw]`}
    >
      다음으로
    </button>
  );
}
