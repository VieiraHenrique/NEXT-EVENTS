import axios from "axios";
import EventList from "../components/EventList";
import InternalError from "../components/InternalError";
import ShowCase from "../components/ShowCase";
import { ADMIN_TOKEN, CMS_URL } from "../lib/variables";

export default function HomePage({ events }) {
    if (events) {
        return (
            <div className="home">
                <ShowCase title={"Welcome to DJ Events"} subtitle={"The place to be in order to know about the hottest parties"} img={"/images/home-cover.jpg"} />
                <div className="container">
                    <div className="wrapper">
                        <h2 className="my-1 page-title">Upcoming events</h2>
                        <EventList events={events} />
                    </div>
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
                events: data.data.slice(0, 3),
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
