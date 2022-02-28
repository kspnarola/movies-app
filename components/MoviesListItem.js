import { Card, Button } from "react-bootstrap";
import Image from "next/image";
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
                <Image
                    className="card-img-top"
                    src={movie.posterUrl.src}
                    placeholder="blur"
                    blurDataURL={movie.posterUrl.src}
                    width={250}
                    alt={movie.title}
                    height={250}
                    onError={(e) => { e.target.src = 'default.webp'; }}

                />
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
