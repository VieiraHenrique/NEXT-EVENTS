import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { NEXT_URL } from "../lib/variables";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const router = useRouter();

    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const { data } = await axios.post(NEXT_URL + "/api/user");
            setUser(data);
        } catch (err) {
            console.log(err.response.data.message);
        }
    };

    const login = async (identifier, password) => {
        try {
            const { data } = await axios.post(NEXT_URL + "/api/login", {
                identifier,
                password,
            });
            router.push("/");
            checkUser();
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const register = async (username, email, password) => {
        try {
            const { data } = await axios.post(NEXT_URL + "/api/register", {
                username,
                email,
                password,
            });
            router.push("/login");
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const logout = async () => {
        try {
            const { data } = await axios.post(NEXT_URL + "/api/logout");
            setUser(null)
            router.push("/");
            checkUser();
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const authValues = {
        user,
        login,
        register,
        logout,
    };

    return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
}
