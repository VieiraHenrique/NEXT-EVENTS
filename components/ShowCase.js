export default function ShowCase({ title, subtitle, img }) {
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})` }} className="showcase">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}
