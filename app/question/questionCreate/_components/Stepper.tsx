interface Step {
  number: number;
  text: string;
  isActive: boolean;
}

interface StepperProps {
  selectedStep: number | null;
}

export default function Stepper({selectedStep}: StepperProps) {
  const steps: Step[] = [
    {
      number: 1,
      text: '질문 카테고리',
      isActive: selectedStep === 1,
    },
    {
      number: 2,
      text: '질문 내용 입력',
      isActive: selectedStep === 2,
    },
  ];

  return (
    <div className="flex items-center h-[120px] w-full">
      <div className="flex flex-col gap-4 items-center">
        {steps.map(step => (
          <StepItem key={step.number} step={step} />
        ))}
      </div>
    </div>
  );
}

function StepItem({step}: {step: Step}) {
  const styles = {
    bgColor: step.isActive ? 'bg-[#D7E3FF]' : 'bg-[#E8E8E8]',
    textColor: step.isActive ? 'text-[#3765D6]' : 'text-[#8D8D8D]',
    fontWeight: step.isActive ? 'font-bold' : 'font-medium',
  };

  return (
    <div className="flex items-center gap-3 transition-all duration-100 ease-in-out">
      {/* 숫자 동그라미 */}
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-md transition-all duration-100 ease-in-out ${styles.bgColor} ${styles.textColor}`}
      >
        {step.number}
      </div>

      {/* 텍스트 */}
      <p
        className={`w-[100px] text-md transition-all duration-100 ease-in-out ${styles.fontWeight} ${styles.textColor}`}
      >
        {step.text}
      </p>
    </div>
  );
}
