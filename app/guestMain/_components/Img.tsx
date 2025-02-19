import Image from 'next/image';

export const Img = ({
  className,
  src,
  alt,
}: {
  className: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};
