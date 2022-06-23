import Link from "next/link";
import { useContext } from "react";
import InternalError from "../components/InternalError";
import ShowCase from "../components/ShowCase";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
    const { user } = useContext(AuthContext);

    return (
        <div className="home">
            <ShowCase title={"Welcome to DJ Events"} subtitle={"The place to be in order to know about the hottest parties"} img={"/images/home-cover.jpg"} />
            <div className="container">
                <div className="wrapper">
                    <h2>Welcome {user ? user.username : ""} !</h2>
                    {user ? (
                        <p>Go to the all events page to see the events</p>
                    ) : (
                        <p>
                            {" "}
                            You must be logged in to see the events Login <Link href={"/login"}>here</Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
