import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const form = ({Nama, Judul, tglKeluar, tglMasuk, handleChange, handleSubmit }) => {
  return (
    <div className="mt-5">
        <Row>
            <Col>
            <h4>Tambah List Peminjaman</h4>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form onSubmit={handleSubmit}></Form>
                <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" name="nama" value={Nama} onChange={(event) => handleChange(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="judul">
                    <Form.Label>Judul Buku</Form.Label>
                    <Form.Control type="text" name="judul" value={Judul} onChange={(event) => handleChange(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="tglKeluar">
                    <Form.Label>Tanggal keluar</Form.Label>
                    <Form.Control type="date" name="tglKeluar" value={tglKeluar} onChange={(event) => handleChange(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="tglMasuk">
                    <Form.Label>Tanggal Masuk</Form.Label>
                    <Form.Control type="date" name="tglMasuk" value={tglMasuk} onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Col>
        </Row>
    </div>
  );
}

export default form;