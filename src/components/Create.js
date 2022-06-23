import { useState } from 'react';
import env from '../env.json';
import { Form, Button, Container, Card } from 'react-bootstrap';

function Create() {
    const [url, setUrl] = useState('');
    const [hashUrl, setHashUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    const loadDataFromForm = (event) => {
        setFormClass('hide');
        setLineClass('');
        event.preventDefault();
        let note = event.target.note.value;
        note = note.trim();
        if (note === '') {
            alert('Введите текст');
            return false;
        }
        sendData({ 'note': note });
    }

    const sendData = (obj) => {
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.result) {
                    setUrl(env.url + '/' + data.url);
                    setHashUrl(data.url);
                }
            })
    }

    return (
        <div className='mt-4'>
            <Container>
                <Form onSubmit={loadDataFromForm} className={formClass}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="note">Notes text: </Form.Label>
                        <Form.Control as="textarea" placeholder="Enter notes" name="note" id="note" />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Create
                    </Button>
                </Form>
                <div className={lineClass}>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-4'>{url}</Card.Title>
                            <footer className="blockquote-footer">
                                Copy URL
                            </footer>
                            <hr />
                            <Card.Title className='mb-4'>{hashUrl}</Card.Title>
                            <footer className="blockquote-footer">
                                Copy Hash
                            </footer>
                            <hr />
                            <Button onClick={() => window.location.reload()} variant="outline-dark">Create new notes</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default Create;