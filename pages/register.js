import Link from "next/link";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user, register } = useContext(AuthContext);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        register(username, email, password);
    };

    return (
        <div className="container">
            <div className="wrapper">
                <h2>Register</h2>
                <form onSubmit={handleRegisterSubmit}>
                    <p>
                        <label htmlFor="username">
                            Username
                            <br />
                            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="email">
                            Email
                            <br />
                            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </p>
                    <p>
                        <label htmlFor="password">
                            Password
                            <br />
                            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </p>
                    <button>Register</button>
                </form>
                <p>
                    Already registered ? <Link href={"/login"}>Login</Link>
                </p>
            </div>
        </div>
    );
}
