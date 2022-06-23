import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function NavMenu() {
    const { logout, user } = useContext(AuthContext);

    return (
        <ul className="menu">
            <li>
                <Link href={"/about"}>About</Link>
            </li>
            
            {user ? (
                <li>
                    <Link href={"/events"}>All Events</Link>
                </li>
            ) : (
                ""
            )}

            {user ? (
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            ) : (
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
            )}
        </ul>
    );
}
