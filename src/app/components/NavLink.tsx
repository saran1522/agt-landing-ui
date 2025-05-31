import React from "react";

export type NavLinkType = {
  text: string;
  href: string;
};

function NavLink({ href, text }: NavLinkType) {
  return (
    <a href={href} className="text-[#4787FF] hover:text-gray-900">
      {text}
    </a>
  );
}

export default NavLink;
