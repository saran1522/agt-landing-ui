import Image from "next/image";
import React from "react";

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { title: string; url: string }[];
}) {
  return (
    <div className="font-medium">
      <h3 className="text-[#02061799] font-medium">{title}</h3>
      <ul className="mt-4 space-y-1">
        {links.map((link) => (
          <li key={link.title} className="flex items-center gap-2">
            {link.title === "LinkedIn" && (
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={15}
                height={15}
              />
            )}
            {link.title === "Twitter / X" && (
              <Image src="/twitter.svg" alt="twitter" width={13} height={13} />
            )}
            <a href={link.url} className="text-[#8EB5FB] hover:text-gray-800">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
