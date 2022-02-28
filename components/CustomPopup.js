import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function CustomPopup(
    {
        show = false,
        data = null,
        handleClose = () => { }
    }
) {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>Name:</b> {data.title}</p>
                    <p><b>Director:</b> {data.director}</p>
                    <p><b>Actors:</b> {data.actors}</p>
                    <p><b>Description:</b> {data.plot}</p>
                    <p><b>Year:</b> {data.year}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
