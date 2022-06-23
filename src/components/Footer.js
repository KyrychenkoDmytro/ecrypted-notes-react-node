import { Card, Container } from 'react-bootstrap';

function Footer() {
    return (
        <div className="fixed-bottom">
            
            <Card bg="dark" style={{'color': 'grey'}}>
                <Container>
                <Card.Body>
                    <Card.Text>
                    Copyright © 2022 SecretNotes. All rights reserved.
                    </Card.Text>
                </Card.Body>
                </Container>
            </Card>
        </div>
    );
}

export default Footer;