import axios from "axios";
import { CMS_URL } from "../../lib/variables";

export default async function testUser(req, res) {
    const { token } = req.cookies;

    if (token) {
        const { data } = await axios.get(CMS_URL + "/users/me", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: "No user is logged in" });
    }
}
