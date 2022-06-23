import axios from "axios";
import InternalError from "../../components/InternalError";
import ShowCase from "../../components/ShowCase";
import { CMS_URL } from "../../lib/variables";

export default function SingleEvent({ evt }) {
    if (evt) {
        return (
            <div className="single-event">
                <ShowCase title={evt.attributes.title} subtitle={evt.attributes.subtitle} img={evt.attributes.cover.data.attributes.formats.large.url} />
                <div className="container">
                    <div className="wrapper">
                        <p>{evt.attributes.date}</p>
                        <p>{evt.attributes.venue}</p>
                        <div dangerouslySetInnerHTML={{ __html: evt.attributes.description }}></div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <InternalError />;
    }
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
            props: {
                evt: null,
            },
            notFound: true,
        };
    }
}

export async function getStaticPaths() {
    try {
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
    } catch (err) {
        return {
            paths: [{ params: { id: "1" } }],
            fallback: true,
        };
    }
}
