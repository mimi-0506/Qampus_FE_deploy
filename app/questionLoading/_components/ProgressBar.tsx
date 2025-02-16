'use client';

import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            router.push('/questionDone');
          });
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="w-[400px] h-2.5 bg-[#F4F4F4] mt-4 mb-20 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#7BA1FF] rounded-full transition-all duration-30 ease-linear"
        style={{width: `${progress}%`}}
      />
    </div>
  );
}
