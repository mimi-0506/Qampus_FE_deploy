import {useState} from 'react';
import Image from 'next/image';

export default function MainCircle({image}: {image: number | undefined}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-[13vw] aspect-[1/1] rounded-full bg-gradient-to-b from-white to-blue-600 flex items-center justify-center shadow-2xl border-[0.6vw] border-blue-800">
      <div className="w-[83%] aspect-[1/1] bg-page5roundbg border border-white rounded-full flex items-center justify-center">
        <div className="w-[82%] aspect-[1/1] overflow-hidden relative rounded-full bg-white flex items-center justify-center">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={`/images/univ/${image}.png`}
            alt="univ logo"
            fill
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
