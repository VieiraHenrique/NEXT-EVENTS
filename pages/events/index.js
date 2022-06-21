import axios from "axios";
import EventList from "../../components/EventList";
import { CMS_URL } from "../../lib/variables";

export default function EventsPage({events}) {
    return (
        <div className="container">
            <div className="wrapper">
                <h2 className="my-1 page-title">List of all events</h2>
                <EventList events={events} />
            </div>
        </div>
    );
}

export async function getStaticProps(context) {
    const { data } = await axios.get(CMS_URL + "/events");

    return {
        props: {
            events: data.data,
        },
    };
}