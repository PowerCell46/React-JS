import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardElement({todo}) {
  return (
    <Card style={{ width: '18rem', margin: "1rem" }}>
      <Card.Body>
        <Card.Title>{todo.text}</Card.Title>
        <Card.Text>
          Is Completed? <b>{todo.isCompleted ? "Yes" : "No"}</b>
        </Card.Text>
        {/*     <Button variant="primary">Details</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardElement;