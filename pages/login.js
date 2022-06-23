import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const { user, login } = useContext(AuthContext);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(identifier, password);
    };

    return (
        <div className="container">
            <div className="wrapper">
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <p>
                        <label htmlFor="identifier">
                            Identifier
                            <br />
                            <input type="text" id="identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="password">
                            Password
                            <br />
                            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </p>
                    <button>Login</button>
                </form>
                <p>
                    Not registered yet ? <Link href={"/register"}>Register</Link>
                </p>
            </div>
        </div>
    );
}
