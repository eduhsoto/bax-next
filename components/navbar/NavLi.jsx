import Link from "next/link"

export default function NavLi({route, linkName}) {
    return (
        <Link href={route}>{linkName}</Link>
    )
}