import { useEffect, useState } from "react";
import Card from "./Card";

export default function EventList({ events }) {
    const [searchValue, setSearchValue] = useState("");
    const [displayedEvt, setDisplayedEvt] = useState(events);

    useEffect(() => {
        setDisplayedEvt(events.filter((evt) => evt.attributes.title.toLowerCase().includes(searchValue.toLowerCase())));
    }, [searchValue, events]);

    return (
        <>
            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search events"/>
            <div className="event-list">
                {events &&
                    displayedEvt.map((evt) => {
                        return <Card key={evt.id} evt={evt} />;
                    })}
            </div>
        </>
    );
}
