import SendMail from "@/components/contact/SendMail";
import SeoMeta from "@/components/SeoMeta";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <SeoMeta
        title="Contáctanos"
        description="Contacto a través del formulario, pronto te contactaremos."
        keywords="Bax, Bax soluciones, contact, contacto, form, formulario de contacto"
      />
      <section className="mt-28 mb-52 relative">
        <div className="mx-16 tablet:mx-8 phone:mx-4 flex justify-center items-center flex-wrap gap-16">
          <div className="max-w-[550px]">
            <Image
              src="/img/couple-entrepreneurs.png"
              alt="couple entrepreneurs"
              width={714}
              height={540}
              className="img_full"
            />
          </div>

          <div className="w-[450px]">
            <SendMail />
          </div>
        </div>
        <Image
          src="/img/curveLU.svg"
          alt="curve left up"
          width={1349}
          height={556}
          className="absolute top-2/4 -z-10 tablet:hidden"
        />
      </section>
      <section className="mt-28 mb-52">
        <div className="mx-16 flex content-center items-center flex-col justify-center gap-16 tablet:mx-8 phone:mx-4">
          <h1 className="mb-14 text-[3.125rem] font-extrabold leading-[3.75rem] text-color_primary_2 tablet:text-center phone:text-[2.5rem]">
            Otros canales de comunicación
          </h1>
          <div className="w-full grid gap-16 grid-cols-3-auto justify-items-center items-stretch">
            <div className="flex items-center flex-col">
              <Image
                src="/img/channel-phone.png"
                alt="channel phone"
                width={108}
                height={108}
              />
              <p className="text-color_primary_2 text-lg leading-[34px] tablet:text-center tablet:break-all">
                (+52) 22-2365- 8547
              </p>
            </div>
            <div className="flex items-center flex-col">
              <Image
                src="/img/channel-email.png"
                alt="channel email"
                width={108}
                height={108}
              />
              <p className="text-color_primary_2 text-lg leading-[34px]">
                E-mail:
              </p>
              <p className="text-color_primary_2 text-lg leading-[34px] tablet:text-center tablet:break-all">
                baxsoluciones@escueladenegocio.com.mx
              </p>
            </div>
            <div className="flex items-center flex-col">
              <Image
                src="/img/channel-place.png"
                alt="channel place"
                width={108}
                height={108}
              />
              <p className="text-color_primary_2 text-lg leading-[34px] tablet:text-center tablet:break-all">
                Av. Tulugar Gander 152, CDMX.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
