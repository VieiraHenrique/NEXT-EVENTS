import axios from "axios";
import ShowCase from "../../components/ShowCase";
import { CMS_URL } from "../../lib/variables";

export default function SingleEvent({ evt }) {
    return (
        <div className="single-event">
            <ShowCase title={evt.attributes.title} subtitle={evt.attributes.subtitle} img={evt.attributes.cover.data.attributes.formats.large.url} />
            <div className="container">
                <div className="wrapper"></div>
            </div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    try {
        const { data } = await axios.get(CMS_URL + "/events/" + params.id + "?populate=*");
        return {
            props: {
                evt: data.data,
            },
        };
    } catch (err) {
        return {
            notFound: true
        }
    }
}

export async function getStaticPaths() {
    const { data } = await axios.get(CMS_URL + "/events");

    const params = data.data.map((elem) => {
        return {
            params: { id: `${elem.id}` },
        };
    });

    return {
        paths: params,
        fallback: "blocking",
    };
}
