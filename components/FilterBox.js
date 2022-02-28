import { Col, FormControl, InputGroup, Row } from "react-bootstrap";


export default function FilterBox({ setSearchMovie, searchMovie }) {
    return (
        <div className="filterbox-wrapper">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <InputGroup className="mb-3 filter-input">
                        <FormControl name="search" value={searchMovie} onChange={e => setSearchMovie(e.target.value)} />
                        <InputGroup.Text>Search</InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    )
}
