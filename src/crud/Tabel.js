import React from 'react';
import { Table } from 'react-bootstrap';

const Tabel = ({peminjamBuku}) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Peminjam</th>
          <th>Judul Buku</th>
          <th>Tanggal Keluar</th>
          <th>Tanggal Masuk</th>
        </tr>
      </thead>
      <tbody>
        {((peminjam, index) => {
            return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{peminjam.nama}</td>
                    <td>{peminjam.judul}</td>
                    <td>{peminjam.tglKeluar}</td>
                    <td>{peminjam.tglMasuk}</td>
                    <td></td>
                </tr>
            );
        })}
      </tbody>
    </Table>
  );
}

export default Tabel;