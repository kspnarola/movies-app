import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import DefaultImg from '../assets/images/default.webp';
import CustomPopup from "./CustomPopup";
import { useState } from "react";

export default function MoviesListItem({ movie }) {
    const [show, setShow] = useState(false);

    const openPopup = () => {
        setShow(true);
    }

    const closePopup = () => {
        setShow(false);
    }

    return (
        <>
            <Card style={{ marginBottom: "20px", cursor: "pointer" }} onClick={() => openPopup()}>
                <img className="card-img-top" src={movie.posterUrl} width="250px" height={"250px"} onError={(e) => { e.target.src = 'default.webp'; }} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text style={{ marginBottom: 0, fontSize: '14px' }}>
                        Year: {movie.year}
                    </Card.Text>
                    <Card.Text style={{ marginBottom: 0, fontSize: '14px' }}>
                        Genres: {movie.genres.join(", ")}
                    </Card.Text>
                </Card.Body>
            </Card>
            <CustomPopup show={show} data={movie} handleClose={closePopup} />
        </>
    )
}
