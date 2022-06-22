export default async function handleRevalidate(req, res) {
    await res.unstable_revalidate(`/events/${req.body.entry.id}`);
    await res.unstable_revalidate(`/events`);
    await res.unstable_revalidate(`/`);
    return res.json({ revalidated: true });
}
