import ShowCase from "../components/ShowCase";

export default function HomePage() {
    return (
        <div>
            <ShowCase title={"Welcome to DJ Events"} subtitle={"The place to be in order to know about the hottest parties"} img={"/images/home-cover.jpg"} />
            <h2>Upcoming events</h2>
        </div>
    );
}
