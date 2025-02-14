import {Img} from '../Img';

export default function Background() {
  return (
    <div className="absolute top-0 z-0 h-screen w-full">
      <div className="relative left-[6%] top-[20%] h-[50%]">
        <Img
          src="/images/main/background_page1_1.png"
          alt="bg text"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="relative right-[6%] top-[20%] h-[50%]">
        <Img
          src="/images/main/background_page1_2.png"
          alt="bg text"
          className="object-contain w-full h-full"
        />
      </div>
      <Img
        src="/images/main/gradient_page1.png"
        alt=""
        className="absolute bottom-[-28%] left-[5%] w-[89%] h-[69%]"
      />
    </div>
  );
}
