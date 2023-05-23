import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <Link href={'/'}>Home </Link>
            <Link href={'/'}>New Blog </Link>
            <Link href={'/auth'}>Sign In</Link>
        </nav>
    )
}