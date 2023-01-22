import Image from "next/image";
import NavLi from "./NavLi";

export default function NavBar() {
  return (
    <nav>
      <div>
        <div>
          <a href="/">
            <Image
              src="/img/brand-logo.jpg"
              alt="logo brand"
              width={126}
              height={50}
              sizes="responsive"
              priority
            />
          </a>
          <div>
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
