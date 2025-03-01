import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="h-[14.8vw] w-screen bg-black text-white py-[2vw] px-[13.5vw] text-[0.7vw] flex justify-center items-start overflow-hidden">
      <div className="mr-[26.45vw]">
        <div className="relative w-[6.5vw] aspect-[125/27]">
          <Image
            src="/images/logo/logo_mini_white.png"
            fill
            alt="logo"
            sizes="9vw"
          />
        </div>
        <p className="text-gray-400 mt-2">대학생 질의응답 서비스</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[3.6vw] mt-6 md:mt-0">
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Desktop App
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mobile App
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Compare</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Everytime
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Chegg
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                경쟁사 조사 다시
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                경쟁사 조사 다시
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Abuse
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Tools · Stack</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Figma</li>
            <li>NextJS15</li>
            <li>React18</li>
            <li>Tailwind</li>
            <li>Spring Boot</li>
            <li>JPA</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
