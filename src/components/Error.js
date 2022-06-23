import { Alert, Button, Container } from 'react-bootstrap';
import env from '../env.json';

function Error() {
    return (
        <div className="mt-4">
            <Container>
                <Alert variant='danger'>
                    <Alert.Heading>Not correct address</Alert.Heading>
                    <Button href={env.urlHome} variant="outline-danger">
                        Try again
                    </Button>
                </Alert>
            </Container>
        </div>
    );
}

export default Error;