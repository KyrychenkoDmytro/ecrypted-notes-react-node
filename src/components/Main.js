import { Container, Card, ListGroup } from "react-bootstrap";

function Main() {
    return (
        <div className="m-5">
            <Container>
                <Card border="dark">
                    <Card.Header style={{"fontSize":"18px"}}><b>EcryptedNotes</b> - сервис для обмена заметками. Создайте заметку, отправте ссылку на заметку и ваш знакомый сможет посмотреть ее.</Card.Header>
                    <Card.Body>
                        <Card.Title>Как создать заметку?</Card.Title>
                        <Card.Text as="div">
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item as="li">Нажмите "Создать заметку"</ListGroup.Item>
                                <ListGroup.Item as="li">Напишите текст который хотите отправить и нажмите "Создать"</ListGroup.Item>
                                <ListGroup.Item as="li">Полученную ссылку отправте вашему знакомому</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        <Card.Title>Как прочитать заметку?</Card.Title>
                        <Card.Text as="div">
                            <ListGroup>
                                <ListGroup.Item as="li">Перейдите по полученной ссылке либо нажмите "посмотреть заметку" и введите хеш заметки.</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Main;