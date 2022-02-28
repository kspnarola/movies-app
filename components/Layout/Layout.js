import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'

export default function ({ children }) {
    return (
        <div className="app-layout">
            <Header />
            <Container fluid>
                {children}
            </Container>
        </div>
    )
}
