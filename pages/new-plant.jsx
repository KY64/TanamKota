import React from "react";
import { relative } from "path";

const NewPlant = () => {
  return (
    <div style={{marginTop:"30px",fontFamily:"arial"}}>
      <form id="input-form">
        <label htmlFor="tanaman" style={{position:"relative"}}>Nama tanaman</label>
        <input type="text" id="tanaman" className="text-form" name="tanaman" />
        <label htmlFor="jumlah" style={{position:"relative"}}>Jumlah</label>
        <input type="number" id="jumlah" className="text-form" name="jumlah" />
        <label htmlFor="tanaman" style={{position:"relative"}}>PH</label>
        <div className="minmax">
        <input type="number" id="tanaman" className="range" name="tanaman" placeholder="min" />
        <input type="number" id="tanaman" className="range" name="tanaman" placeholder="max" />
        </div>
        <label htmlFor="tanaman" style={{position:"relative"}}>Suhu</label>
        <div className="minmax">
        <input type="number" id="tanaman" className="range" name="tanaman" placeholder="min" />
        <input type="number" id="tanaman" className="range" name="tanaman" placeholder="max" />
        </div>
        <label htmlFor="tanaman" style={{position:"relative"}}>PPM</label>
        <div className="minmax">
        <input type="number" id="tanaman" className="range" name="tanaman" placeholder="min" />
        <input type="number" id="tanaman" className="range" name="tanaman" placeholder="max" />
        </div>
        <label htmlFor="waktuTanam" style={{position:"relative"}}>Waktu tanam</label>
        <input type="date" id="waktuTanam" className="date-form" name="waktuTanam" />
        <label htmlFor="waktuPanen" style={{position:"relative"}}>Waktu panen</label>
        <input type="text" id="waktuPanen" className="text-form" name="waktuPanen" readOnly />
        <input type="submit" id="tambah-btn" value="Tambah tanaman"/>
      </form>

      <style>
        {`
          label {
            display: inline-block;
            font-size: 12pt;
            margin-left: 50px;
            margin-top: 10px;
            color: #0EBD1C;
          }
          #tambah-btn {
            display: block;
            color: white;
            outline: none;
            margin: 40px auto 0 auto;
            border: none;
            padding: 12px;
            font-size: 12pt;
            border-radius: 10px;
            background: #77E681;
          }
          .minmax {
            display: flex;
          }
          .text-form {
            width: 240px;
            border: none;
            padding: 7px;
            outline: none;
            margin: 0 auto;
            display: block;
            font-size: 14pt;
            border-bottom: 1px solid #0EBD1C;
          }
          .date-form {
            width: 120px;
            padding: 6px;
            display: block;
            font-size: 12pt;
            border: 1px solid #77E681;
            margin-left: 55px;
            margin-top: 10px;
            background: none;
          }
          .range {
            width: 90px;
            padding: 6px;
            display: block;
            font-size: 12pt;
            border: 1px solid #77E681;
            margin-left: 50px;
            margin-top: 10px;
            background: none;
          }
        `}
      </style>
    </div>
  );
};

export default NewPlant;
