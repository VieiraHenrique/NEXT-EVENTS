export default function Card({evt}) {
  return (
    <div className="card">
        <h3>{evt.attributes.title}</h3>
    </div>
  )
}