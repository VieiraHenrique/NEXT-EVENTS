import Layout from "../components/layout/Layout";
import AuthContextProvider from "../context/AuthContext";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthContextProvider>
    );
}

export default MyApp;
