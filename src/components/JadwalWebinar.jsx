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
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="label-webinar">Kartu Tanda Belajar akan dikirim melalui email</label>
              <input type="email" className="input-webinar" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukkan Email"/>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <input type="checkbox" className="check-input" id="exampleCheck1" />
              <label className="check-label" for="exampleCheck1">Pastikan email yang anda masukan benar</label>
            </div>
            <button className="btn-konfirm">Konfirmasi</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JadwalWebinar;