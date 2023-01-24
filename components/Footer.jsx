import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-color_tertiary mt-36 py-8">
      <div className="mx-16 grid grid-cols-3-auto gap-16 justify-items-center items-center pb-5 border-b-2 border-color_secondary_2 tablet:mx-8 phone:mx-4">
        <div className="flex flex-col gap-4 phone:items-center">
          <Link
            href="/courses"
            className="font-roboto text-base leading-[19px] font-normal text-color_default"
          >
            Cursos
          </Link>
          <Link
            href="/#testimonials"
            className="font-roboto text-base leading-[19px] font-normal text-color_default"
          >
            Testimonios
          </Link>
          <Link
            href="/#about"
            className="font-roboto text-base leading-[19px] font-normal text-color_default"
          >
            Nosotros
          </Link>
          <Link
            href="/contact"
            className="font-roboto text-base leading-[19px] font-normal text-color_default"
          >
            Contacto
          </Link>
        </div>

        <Image
          src="/img/brand-logo-footer.png"
          alt="brand logo footer"
          width={195}
          height={246}
          className="w-[40%]"
        />

        <div className="flex gap-4">
          <a href="">
            <Image
              src="/img/facebook-icon.png"
              alt="facebook icon"
              width={48}
              height={48}
              className="w-10"
            />
          </a>
          <a href="">
            <Image
              src="/img/instagram-icon.png"
              alt="instagram icon"
              width={48}
              height={48}
              className="w-10"
            />
          </a>
          <a href="">
            <Image
              src="/img/linkedin-icon.png"
              alt="linkedin icon"
              width={48}
              height={48}
              className="w-10"
            />
          </a>
          <a href="">
            <Image
              src="/img/email-icon.png"
              alt="email icon"
              width={48}
              height={48}
              className="w-10"
            />
          </a>
          <a href="">
            <Image
              src="/img/twitter-icon.png"
              alt="twitter icon"
              width={48}
              height={48}
              className="w-10"
            />
          </a>
        </div>
      </div>
      <p className="mx-[60px] my-5 font-roboto text-base font-normal leading-[19px] text-color_default">
        Copyright Inc. Bax. © 2022. Design by{" "}
        <a
          href="https://www.linkedin.com/in/debora-migliani/"
          className="font-roboto text-base font-normal leading-[19px] text-color_default"
          target="_blank"
          rel="noreferrer"
        >
          Debora Migliani Diseñadora UX/UI
        </a>
      </p>
    </footer>
  );
}
