import cookie from "cookie";

export default async function handleLogout(req, res) {
    console.log(req.cookies);

    const JWTcookie = cookie.serialize("token", "", {
        path: "/",
        httpOnly: true,
        maxAge: new Date(0),
    });

    res.setHeader("Set-Cookie", JWTcookie);

    res.status(200).json({ message: "session ended" });
}
