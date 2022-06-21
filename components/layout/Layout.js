import Head from "next/head";
import Link from "next/link";
import NavMenu from "../header/NavMenu";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>DJ Events | Find the hottest parties</title>
                <meta name="description" content="A website to check the best dj events around. For djs you can post your event so everybody can know about it" />
                <meta name="keywords" content="music, dj, events, party" />
            </Head>
            <header className="header">
                <div className="wrapper">
                    <Link href={"/"}>
                        <a className="logo">
                            DJ <span>Events</span>
                        </a>
                    </Link>
                    <NavMenu />
                </div>
            </header>

            {children}

            <footer className="footer mt-2">
                <hr />
                <p className="mt-2 mb-2">@Copyright 2022. DJ Events</p>
            </footer>
        </>
    );
}
