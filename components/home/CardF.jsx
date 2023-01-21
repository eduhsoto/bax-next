import Image from "next/image";

export default function CardF({ title, img, alt, paragraph }) {
  return (
    <div className="flex items-center flex-col">
      <h3 className="uppercase">{title}</h3>
      <Image
        src={img}
        alt={alt}
        className="rounded-tr-[50px]"
        width={458}
        height={312}
      />
      <p className="bg-color_primary_1 rounded-b-[40px] px-8 py-8 h-full text-color_default text-lg leading-[34px] font-normal">
        {paragraph}
      </p>
    </div>
  );
}
