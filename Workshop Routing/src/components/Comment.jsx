export default function Comment({comment}) {
    return (
        <li className="comment">
            <p>Content: {comment}</p>
        </li>
    );
}