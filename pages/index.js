import { Inter } from "@next/font/google";
import SeoMeta from "@/components/SeoMeta";
import CardF from "@/components/home/CardF";
import Course from "@/components/home/Course";
import Image from "next/image";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import Qa from "@/components/Qa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SeoMeta
        title="Bax - Capacitamos personas para que cumplan su sueño emprendedor"
        description="Te acompañamos en tu camino con profesionales experimentados y las mejores herramientas."
        keywords="Bax, Bax soluciones, Capacitamos emprendedores, emprendedores"
      />
      <section className="mt-28 mb-52">
        <div className="mx-16 flex justify-center items-center gap-16 flex-wrap tablet:mx-8 phone:mx-4">
          <div className="max-w-xl">
            <h1 className="mb-14 text-[3.125rem] font-extrabold leading-[3.75rem] text-color_primary_2 tablet:text-center phone:text-[2.5rem]">
              Capacitamos personas para que cumplan su sueño emprendedor
            </h1>
            <p className="mb-14 text-[1.125rem] font-semibold leading-7 text-color_primary_2 tablet:text-center">
              Te acompañamos en tu camino con profesionales experimentados y las
              mejores herramientas.
            </p>
            <Link href="/courses" className="button-cta tablet:hidden">
              Conoce nuestros cursos
            </Link>
          </div>

          <div className="max-w-lg">
            <Image
              src="/img/enterprising-couple-in-cafeteria.png"
              alt="enterprising couple in cafeteria"
              width={803}
              height={576}
              className="w-full"
            />
          </div>

          <div className="hidden tablet:block tablet:mt-5">
            <Link href="/courses" className="button-cta phone:py-5 phone:px-4">
              Conoce nuestros cursos
            </Link>
          </div>
        </div>
        <Image
          src="/img/curveRU.svg"
          alt="curve right up"
          width={1349}
          height={509}
          className="absolute top-1/2 -z-10 tablet:hidden"
        />
      </section>
      <section className="mt-28 mb-52">
        <div className="mx-16 grid gap-16 grid-cols-3-auto justify-items-center items-stretch tablet:mx-8 phone:mx-4">
          <CardF
            title="Misión"
            img="/img/mission-image.jpg"
            alt="mision woman on computer"
            paragraph="Nos enfocadamos en la educación de alto nivel para los pequeños y medianos emprendedores en México."
          />
          <CardF
            title="Visión"
            img="/img/vision-image.jpg"
            alt="owner local clothing"
            paragraph="Aportar valor a la mayor cantidad posible de pequeños emprendedores."
          />
          <CardF
            title="Valores"
            img="/img/values-image.jpg"
            alt="team meeting"
            paragraph="Creemos en el potencial de cada persona, en la superación personal y la determinación."
          />
        </div>
      </section>
      <section className="mt-28 mb-52 relative">
        <div className="mx-16 flex flex-col gap-4 items-start tablet:mx-8 phone:mx-4 phone:items-center">
          <h2 className="text-color_primary_2 after:bg-color_secondary_2">
            Nuestros cursos
          </h2>
          <p className="text-color_primary_2 font-semibold leading-[45px] text-[1.375rem]">
            Nuestra oferta académica te permitirá desempeñarte en las áreas de:
          </p>

          <div className="grid grid-cols-4 mt-20 phone:flex phone:flex-col phone:items-center">
            <Course
              title="Administración"
              img="/img/management-course.png"
              alt="management course image"
              paragraph="Suma conocimientos de gestión y administración altamente útiles y requeridos en toda empresa."
              columnPos="col-start-2 col-span-3"
            />
            <Course
              title="Contabilidad"
              img="/img/accounting-course.png"
              alt="accounting course image"
              paragraph="Aprende la mejor manera de atender las cuentas de tu negocio o de la empresa que vayas a trabajar."
              columnPos="col-start-1 col-span-3"
            />
            <Course
              title="Marketing"
              img="/img/marketing-course.png"
              alt="marketing course image"
              paragraph="Gestiona, planifica y crea las mejores y mas nuevas estrategias de publicidad y promoción para tu emprendimiento o para clientes."
              columnPos="col-start-2 col-span-3"
            />
          </div>
        </div>
        <Image
          src="/img/curveRD.svg"
          alt="curve right down"
          width={1349}
          height={729}
          className="absolute top-2/4 -z-10 tablet:hidden"
        />{" "}
      </section>
      <section className="mt-28 mb-52 relative">
        <div className="mx-16 flex flex-wrap items-center justify-center gap-16 tablet:mx-8 phone:mx-4">
          <p className="font-gilgory text-2xl	leading-[49px] font-extrabold text-color_primary_2 tablet:text-center">
            De 1,038 egresados de la carrera de Administración, 919 se
            encuentran trabajando.
          </p>
          <div className="grid gap-16 grid-cols-3-auto justify-items-center items-stretch">
            <div className="card__item">
              <Image
                src="/img/student-boy-on-notebook.png"
                alt="student boy on notebook"
                className="img_full"
                width={458}
                height={376}
              />
              <p className="text-lg leading-[34px] font-semibold text-color_primary_2">
                ¿Sabías que tener conocimientos de Administración te permite
                contar con herramientas para gestionar de manera eficiente tu
                negocio?
              </p>
            </div>

            <div className="card__item">
              <Image
                src="/img/img-porcentage.png"
                alt="porcentage imgage"
                className="img_full"
                width={400}
                height={400}
              />
            </div>

            <div className="card__item">
              <Image
                src="/img/laughing-girl.png"
                alt="laughing girl"
                className="img_full"
                width={458}
                height={376}
              />
              <p className="text-lg leading-[34px] font-semibold text-color_primary_2 text-center">
                ¿Quieres ser Contador/a?
              </p>
              <p className="text-lg leading-[34px] font-semibold text-color_primary_2">
                Contaduría está entre las carreras con menor porcentaje de
                informalidad y de desempleo en México.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/img/curveLU.svg"
          alt="curve left up"
          width={1349}
          height={556}
          className="absolute top-1/3 -z-10 tablet:hidden"
        />{" "}
      </section>
      <Testimonials />
      <section className="mt-28 mb-52 relative">
        <div className="mx-16 flex flex-wrap items-center justify-between gap-4 tablet:mx-8 tablet:justify-center phone:mx-4">
          <h2 className="text-[50px] mb-14 text-color_primary_2 max-w-[600px] tablet:text-center phone:text-[2.5rem]">
            Aprende las mejores herramientas para hacer crecer tu negocio.
          </h2>

          <Link href="/contact" className="button-cta phone:py-5 phone:px-4">
            Consulta Inscriciones
          </Link>
        </div>
        <Image
          src="/img/curveLD.svg"
          alt="curve left down"
          width={1349}
          height={791}
          className="absolute -top-[450px] -z-10 tablet:hidden"
        />
      </section>
      <About />
      <section className="mt-28 mb-52 relative">
        <div className="mx-16 grid gap-16 grid-cols-3-auto justify-items-center items-stretch tablet:mx-8 phone:mx-4">
          <div>
            <h3 className="title__course title__capitalize">Staff</h3>
            <p className="text-color_primary_2 text-lg font-normal leading-[34px]">
              Contamos con un plantel de profesionales experimentados en las
              áreas dictadas. Cada miembro se desempeña en guiar, brindar los
              conocimiemtos y acompañar a cada estudiante en su proceso de
              aprendizaje.
            </p>
          </div>

          <div className="flex items-center flex-row ">
            <Image
              src="/img/staff-member-1.png"
              alt="staff member 1"
              width={100}
              height={100}
            />
            <Image
              src="/img/staff-member-2.png"
              alt="staff member 2"
              width={100}
              height={100}
            />
            <Image
              src="/img/staff-member-3.png"
              alt="staff member 3"
              width={100}
              height={100}
            />
          </div>

          <div className="flex items-center flex-col">
            <Image
              src="/img/ceo-director.png"
              alt="ceo director"
              width={100}
              height={100}
            />
            <p className="text-color_primary_2 text-[1.375rem] font-semibold leading-[45px]">
              Carlos Carrera
            </p>
            <p className="text-color_primary_2 text-lg font-normal leading-[34px] tablet:text-center">
              CEO/Director BAX Soluciones
            </p>
          </div>
        </div>
        <Image
          src="/img/curveLU.svg"
          alt="curve left up"
          width={1349}
          height={556}
          className="absolute -top-3/4 -z-10 tablet:hidden"
        />
      </section>
      <section className="mt-28 mb-52">
        <div className="mx-16 tablet:mx-8 phone:mx-4">
          <div className="flex flex-col items-center content-center gap-16">
            <h2 className="text-[50px] text-color_primary_2 text-center phone:text-[2.5rem]">
              Si quieres potenciarte y capacitarte, este es tu lugar.
            </h2>
            <Link href="/contact" className="button-cta phone:py-5 phone:px-4">
              Quiero inscribirme
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-28 mb-52 relative">
        <div className="mx-16 flex justify-center tablet:mx-8 phone:mr-8">
          <Qa
            q1="¿Entregan certificaciones?"
            q2="¿Como puedo inscribirme?"
            q3="¿Necesito conocimientos previos para cursar"
          />
        </div>
        <Image
          src="/img/curveRD.svg"
          alt="curve right down"
          width={1349}
          height={729}
          className="absolute -top-48 -z-10 tablet:hidden"
        />
      </section>
      <div className="mx-16 flex justify-center">
        <h2 className="text-color_primary_2 tablet:text-center phone:text-[2.5rem]">
          Tu futuro es hoy
        </h2>
      </div>
    </>
  );
}
