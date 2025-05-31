import Image from "next/image";

interface TestimonialCardProps {
  img: string;
  description: string;
  pfp?: string;
  name: string;
  about: string;
}

export default function TestimonialCard({
  img,
  description,
  pfp,
  name,
  about,
}: TestimonialCardProps) {
  return (
    <div className="relative h-fit bg-white border-l border-r border-purple-200 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <div className="space-y-12 p-6 text-[#322E4A]">
        <Image src={img} alt={`${name} icon`} width={58} height={58} />
        <p className="leading-relaxed">{description}</p>
        <div className="flex items-center gap-4">
          {pfp && (
            <Image src={pfp} alt={`${name} icon`} width={54} height={54} />
          )}
          <div className="flex flex-col text-sm">
            <h3 className="font-medium">{name}</h3>
            <p className="">{about}</p>
          </div>
        </div>
      </div>
      <span className="h-1 w-1 bg-purple-200 absolute -left-0.5 -top-0.5"></span>
      <span className="h-1 w-1 bg-purple-200 absolute -right-0.5 -top-0.5"></span>
      <span className="h-1 w-1 bg-purple-200 absolute -left-0.5 -bottom-0.5"></span>
      <span className="h-1 w-1 bg-purple-200 absolute -right-0.5 -bottom-0.5"></span>
    </div>
  );
}
