import Link from "next/link";
import { useRouter } from "next/router";

const activeClass = {
  backgroundColor: "#F4CF2F",
  padding: "10px 15px",
  borderRadius: "20px 20px 20px 20px",
  color: "#002360",
};

export default function NavLi({ route, linkName }) {
  const { asPath } = useRouter();

  return (
    <Link
      href={route}
      className="transition-all duration-300 mx-5 my-0 text-lg font-extrabold leading-7 text-menu_item_default relative after:absolute after:w-0 after:h-0.5 after:left-1/2 after:top-full after:bg-color_secondary_1 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:text-color_secondary_1"
      style={asPath === route ? activeClass : undefined}
    >
      {linkName}
    </Link>
  );
}
