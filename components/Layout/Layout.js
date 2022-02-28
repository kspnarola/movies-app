import { Container } from 'react-bootstrap'
import Header from './Header'

export default function Layout(props) {
    return (
        <div className="app-layout">
            <Header />
            <Container fluid>
                {props.children}
            </Container>
        </div>
    )
}
