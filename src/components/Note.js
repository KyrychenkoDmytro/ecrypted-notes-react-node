import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';
import { Button, Container, Card, Form, Alert } from 'react-bootstrap';


function Note() {
    let { noteURL } = useParams();

    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.result) {
                        setNoteText(data.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!data.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, [noteURL]);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Введите url');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }


    return (
        <div className="mt-4">
            <Container>
                <div className={lineClass}>
                    <Card className="mt-4">
                        <Card.Header as="h5"><i>Note: </i>{noteText}</Card.Header>
                        <Card.Body>
                            <Card.Text>See another note?</Card.Text>
                            <Button onClick={() => { window.location.href = env.url }} variant="outline-dark">Look</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={formClass}>
                    <Form onSubmit={getNote}>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="url">Hash: </Form.Label>
                            <Form.Control type="text" name="url" id="url" placeholder="Enter hash" />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">
                            Search
                        </Button>
                    </Form>
                </div>
                <div className={errorClass}>
                    <Alert variant='danger'>
                        <Alert.Heading>Not correct hash!</Alert.Heading>
                        <Button href={env.url} variant="outline-danger">
                        Try again
                        </Button>
                    </Alert>
                </div>
            </Container>
        </div>
    );
}

export default Note;