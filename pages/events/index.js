import axios from "axios";
import { useContext } from "react";
import EventList from "../../components/EventList";
import InternalError from "../../components/InternalError";
import { AuthContext } from "../../context/AuthContext";
import { ADMIN_TOKEN, CMS_URL } from "../../lib/variables";

export default function EventsPage({ events }) {
    const { user } = useContext(AuthContext);

    if (events && user) {
        return (
            <div className="container">
                <div className="wrapper">
                    <h2 className="my-1 page-title">List of all events</h2>
                    <EventList events={events} />
                </div>
            </div>
        );
    } else {
        return <InternalError />;
    }
}

export async function getStaticProps(context) {
    try {
        const { data } = await axios.get(CMS_URL + "/events", { headers: { Authorization: "Bearer " + ADMIN_TOKEN } });

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
