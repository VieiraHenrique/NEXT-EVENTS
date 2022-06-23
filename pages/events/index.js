import axios from "axios";
import EventList from "../../components/EventList";
import InternalError from "../../components/InternalError";
import { CMS_URL } from "../../lib/variables";

export default function EventsPage({ events }) {
    if (events) {
        return (
            <div className="container">
                <div className="wrapper">
                    <h2 className="my-1 page-title">List of all events</h2>
                    <EventList events={events} />
                </div>
            </div>
        );
    } else {
        return <InternalError/>
    }
}

export async function getStaticProps(context) {
    try {
        const { data } = await axios.get(CMS_URL + "/events");

        return {
            props: {
                events: data.data,
            },
        };
    } catch (err) {
        return {
            props: {
                events: null,
            },
        };
    }
}
