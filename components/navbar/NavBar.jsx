import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLi from "./NavLi";
import NavHambur from "./NavHambur";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="sticky top-0 bg-white z-10">
      <div className="mx-16 my-2.5 flex justify-between items-center tablet:mx-8 tablet:my-3 phone:mx-4">
          <Link href="/">
            <Image
              src="/img/brand-logo.jpg"
              alt="logo brand"
              width={126}
              height={50}
              sizes="responsive"
              className="w-full my-3 tablet:w-28"
              priority
            />
          </Link>

          <NavHambur clicked={clicked} handleClick={handleClick} />

          <div className={`tablet:fixed tablet:top-20 tablet:w-2/4 tablet:left-1/3 tablet:bg-color_default tablet:py-5 tablet:px-5 tablet:shadow-bax-shadow tablet:rounded-bax-radius duration-500 ${
            clicked
              ? "opacity-100 visible"
              : "tablet:opacity-0 tablet:invisible"
          }`}>
          <div className="tablet:flex tablet:flex-col tablet:justify-between tablet:items-center tablet:gap-8">
            <NavLi route="/" linkName="Inicio" />
            <NavLi route="/courses" linkName="Cursos" />
            <NavLi route="/#testimonials" linkName="Testimonios" />
            <NavLi route="/#about" linkName="Nosotros" />
            <NavLi route="/contact" linkName="Contacto" />
          </div>
        </div>
      </div>
    </nav>
  );
}
