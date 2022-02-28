import { Row, Col, Alert } from 'react-bootstrap'
import MoviesListItem from './MoviesListItem'

export default function MoviesList({ movies }) {
    return (
        <div className='movies-list'>
            <Row >
                {movies.map((movie, key) =>
                    <Col md={4} sm={6} xl={3} key={key}>
                        <MoviesListItem movie={movie} />
                    </Col>
                )}
                {movies.length === 0 &&
                    <Col md={6}>
                        <Alert variant={"info"}>
                            No movies found
                        </Alert>
                    </Col>
                }
            </Row>
        </div>
    )
}
