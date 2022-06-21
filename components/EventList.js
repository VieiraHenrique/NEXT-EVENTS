import Card from "./Card";

export default function EventList({ events }) {
    return (
        <div className="event-list">
            {events &&
                events.map((evt) => {
                    return <Card key={evt.id} evt={evt} />;
                })}
        </div>
    );
}
