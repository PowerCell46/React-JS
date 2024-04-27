export default function Movie(props) {
    return (
        <article style={{ border: '1px solid black', margin: "1rem", borderRadius: '0.2rem' }}>
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </article>
    );
}
