'use client';

import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        router.push('/question/questionDone');
      }, 300);

      return () => clearTimeout(timeout);
    }

    const timer = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 30);

    return () => clearInterval(timer);
  }, [progress, router]);

  return (
    <div className="w-[400px] h-2.5 bg-[#F4F4F4] mt-4 mb-20 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#7BA1FF] rounded-full transition-all duration-[30ms] ease-linear"
        style={{width: `${progress}%`}}
      />
    </div>
  );
}
