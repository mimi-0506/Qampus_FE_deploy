import Image from 'next/image';

export default function BoxSlider({
  items,
  move,
}: {
  items: {title: string; description: string; image?: string}[];
  move: string;
}) {
  return (
    <div className="relative z-10">
      <div className="flex justify-center gap-[2vw] text-center">
        {items.map((item, i) => {
          return (
            <div
              key={'item2' + i}
              className={`
                  ${
                    move === 'next'
                      ? 'transition-transform duration-500 -translate-x-[43vw]'
                      : move === 'prev'
                        ? 'transition-transform duration-500 -translate-x-[-43vw]'
                        : ''
                  }
            w-[41vw] aspect-[781/203] rounded-[1.8vw] p-[34px] box-border gap-[0.6vw] bg-page3divbg border border-page3divborder flex flex-col justify-start items-center`}
            >
              <h3 className="text-[1.25vw] text-semiBlack font-semibold">
                {item.title}
              </h3>
              <p className="text-[1vw] whitespace-pre-line text-grey2 ">
                {item.image && (
                  <Image
                    src={item.image}
                    alt="logo"
                    width={65.6}
                    height={14}
                    className="inline-block align-middle"
                  />
                )}
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
