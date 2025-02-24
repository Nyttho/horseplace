"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";


export default function NavLink({text, path}) {
    const pathName = usePathname()
    const active = path === pathName

    return(
        <li className={active ? "text-primary-dark" : "text-gray-700 hover:text-black"}>
            <Link href={path}>{text}</Link>
          </li>
    )
}