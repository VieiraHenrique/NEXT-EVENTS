import Link from "next/link";

export default function NavMenu() {
    return (
        <ul className="menu">
            <li>
                <Link href={"/about"}>About</Link>
            </li>
            <li>
                <Link href={"/events"}>All Events</Link>
            </li>
            <li>
                <Link href={"/login"}>Login</Link>
            </li>
            <li>
                <button>Logout</button>
            </li>
        </ul>
    );
}
