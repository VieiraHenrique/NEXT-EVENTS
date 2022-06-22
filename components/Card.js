import Link from "next/link";

export default function Card({ evt }) {
    return (
        <div className="card">
            <h3>{evt.attributes.title}</h3>
            <h4>{evt.attributes.subtitle}</h4>
            <p className="mt-1">{evt.attributes.date}</p>
            <p> {evt.attributes.venue}</p>
            <Link href={`/events/${evt.id}`}>
                <a className="btn mt-1">Show event</a>
            </Link>
        </div>
    );
}
