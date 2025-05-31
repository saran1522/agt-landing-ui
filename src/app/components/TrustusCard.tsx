import Image from "next/image";

interface TrustusCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function TrustusCard({
  title,
  description,
  icon,
}: TrustusCardProps) {
  return (
    <div className="rounded-3xl px-6 py-2 bg-white">
      <Image
        src={icon}
        alt={`${title} icon`}
        width={30}
        height={24}
        className="my-4"
      />
      <h3 className="font-semibold text-[#4787FF] mb-3">{title}</h3>
      <p className="text-[#6B7280] leading-relaxed lg:max-w-[193px]">
        {description}
      </p>
    </div>
  );
}
