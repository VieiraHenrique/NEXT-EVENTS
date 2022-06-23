import axios from "axios";
import { CMS_URL } from "../../lib/variables";

export default async function handleRegister(req, res) {
    const { username, email, password } = req.body;

    if (req.method !== "POST") {
        res.status(405).json({ message: "Must be a POST request" });
        return;
    }

    if (!username || !email || !password) {
        res.status(400).json({ message: "Must contain a username, email and password in the body" });
        return;
    }

    try {
        const { data } = await axios.post(CMS_URL + "/auth/local/register", {
            username,
            email,
            password,
        });

        res.status(200).json(data.user);
        return;
    } catch (err) {
        res.status(err.response.status).json(err.response.data.error.message);
        return;
    }
}
