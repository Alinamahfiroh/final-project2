import React from "react";
import Navbar from "./Navbar";
import Tabel from "./Tabel";
import Form from "./FormPeminjam";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Crud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peminjaman: [],
      nama: "",
      judul: "",
      tglKeluar: "",
      tglMasuk: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      peminjamBuku: [
        ...this.state.peminjamBuku,
        {
          id: this.state.peminjamBuku.length + 1,
          nama: this.state.nama,
          judul: this.state.judul,
          tglKeluar: this.state.tglKeluar,
          tglMasuk: this.state.tglMasuk,
        },
      ],
    });

    this.state({
      id: "",
      nama: "",
      judul: "",
      tglKeluar: "",
      tglMasuk: "",
    });
  };
  render() {
    console.log(this.state.peminjamBuku);
    return (
      <div>
        <div className="container mt-4">
          <Navbar />
          <Tabel peminjamBuku={this.state.peminjamBuku} />
          <Form
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
