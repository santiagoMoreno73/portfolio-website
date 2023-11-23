import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          className="rounded-full"
          alt="logo"
          src="/images/logo.png"
          width={50}
          height={50}
        />
        <p className="text-slate-600">Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
