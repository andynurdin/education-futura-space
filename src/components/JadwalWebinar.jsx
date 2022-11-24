import { Form } from "react-bootstrap";
import "./JadwalWebinar.css";

const JadwalWebinar = () => {
  return (
    <div className="card-jadwal-webinar">
      <div className="table">
        <div className="row">
          <div className="col-5">waktu pembelajaran</div>
          <div className="col-6">Selasa, 15 november 2022 08:00 - 10:00</div>
        </div>
        <div className="row">
          <div className="col-5">apl yang dibutuhkan</div>
          <div className="col-6">kine master dan capcut</div>
        </div>
        <div className="row">
          <div className="col-5">pakaian</div>
          <div className="col-6">Sopan dan rapih</div>
        </div>
        <div className="row">
          <div className="col-5">Pengajar</div>
          <div className="col-6">prof. einstein</div>
        </div>
      </div>
      <div className="form-webinar row">
        <div className="col-7">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label-webinar">Link Kartu Tanda Belajar akan dikirim melalui email</Form.Label>
              <Form.Control className="input-webinar" type="email" placeholder="Masukkan Email" />
            </Form.Group>
            <div className="form-check mb-3 ">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Pastikan email yang anda masukan benar</label>
            </div>
            <button className="btn-konfirm">Konfirmasi</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default JadwalWebinar;