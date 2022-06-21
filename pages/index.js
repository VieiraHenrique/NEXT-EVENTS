import axios from "axios";
import EventList from "../components/EventList";
import ShowCase from "../components/ShowCase";
import { CMS_URL } from "../lib/variables";

export default function HomePage({ events }) {
    console.log(events);
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
}

export async function getStaticProps(context) {
    const { data } = await axios.get(CMS_URL + "/events");

    return {
        props: {
            events: data.data.slice(0,3),
        },
    };
}
