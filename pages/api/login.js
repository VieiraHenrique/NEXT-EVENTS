import axios from "axios";
import { CMS_URL } from "../../lib/variables";
import cookie from "cookie";

export default async function handleLogin(req, res) {
    const { identifier, password } = req.body;

    if (req.method !== "POST") {
        res.status(405).json({ message: "Must be a POST request" });
        return;
    }

    if (!identifier || !password) {
        res.status(400).json({ message: "Must contain an identifier and a password" });
        return;
    }

    try {
        const { data } = await axios.post(CMS_URL + "/auth/local", {
            identifier,
            password,
        });

        const JWTcookie = cookie.serialize("token", data.jwt, {
            path: "/",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
        });

        res.setHeader("Set-Cookie", JWTcookie);

        res.status(200).json(data.user);
        return;
    } catch (err) {
        res.status(err.response.status).json(err.response.data.error.message);
        return;
    }
}
