const express = require("express"); // memanggil library express js
const bodyParser = require("body-parser"); // memanggil library body-parser
const cors = require("cors"); // memanggil library cors

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/bangun/kubus", (req, res) => {
  let sisi = Number(req.body.sisi);

  let volume = sisi ** 3;
  let lperm = 6 * sisi ** 2;

  let response = {
    sisi: sisi,
    volume: volume,
    luasperm: lperm,
  };
  res.json(response);
});

app.post("/bangun/balok", (req, res) => {
  let panjang = Number(req.body.panjang);
  let lebar = Number(req.body.lebar);
  let tinggi = Number(req.body.tinggi);

  let volume = panjang * lebar * tinggi;
  let luasperm = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

  let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    volume: volume,
    luasperm: luasperm,
  };
  res.json(response);
});

app.post("/bangun/bola", (req,res) => {
  let radius = Number(req.body.radius)

  let volume = Math.PI * radius * radius * 4/3
  let luasperm = Math.PI * radius * radius * 4

  let response = {
    radius: radius,
    volume: volume,
    luasperm: luasperm
  }
  res.json(response)
})

app.post("/bangun/tabung", (req,res) => {
  let radius = Number(req.body.radius)
  let tinggi = Number(req.body.tinggi)

  let volume = Math.PI * radius * radius * tinggi
  let luasperm = Math.PI * 2 * radius * (radius + tinggi)

  let response = {
    radius: radius,
    tinggi: tinggi,
    volume: volume,
    luasperm: luasperm
  }
  res.json(response)
})

app.get("/convert/celcius/:derajat", (req,res) => {
  let derajat = req.params.derajat

  let reamur = 4/5 * derajat
  let fahrenheit = (9/5 * derajat) + 32
  let kelvin = 273 + derajat * 1

  let response = {
      celcius: derajat,
      result: {
          reamur: reamur,
          fahrenheit: fahrenheit,
          kelvin: kelvin
      }
  }

  res.json(response)
})

app.get("/convert/reamur/:derajat", (req,res) => {
  let derajat = req.params.derajat

  let celcius = 5/4 * derajat
  let fahrenheit = (9/4 * derajat) + 32
  let kelvin = (5/4 * derajat) + 273

  let response = {
      reamur: derajat,
      result: {
          celcius: celcius,
          fahrenheit: fahrenheit,
          kelvin: kelvin
      }
  }

  res.json(response)
})

app.get("/convert/kelvin/:derajat", (req,res) => {
  let derajat = req.params.derajat

  let celcius = derajat - 273
  let fahrenheit = (derajat - 273) * 9/5 + 32
  let reamur = (derajat - 273) * 4/5

  let response = {
      kelvin: derajat,
      result: {
          celcius: celcius,
          fahrenheit: fahrenheit,
          reamur: reamur
      }
  }

  res.json(response)
})

app.get("/convert/fahrenheit/:derajat", (req,res) => {
  let derajat = req.params.derajat

  let celcius = (derajat - 32) * 5/9
  let reamur = (derajat - 32) * 4/9
  let kelvin = (derajat - 32) * 5/9 + 273

  let response = {
      fahrenheit: derajat,
      result: {
          celcius: celcius,
          reamur: reamur,
          kelvin: kelvin
      }
  }

  res.json(response)
})

app.post("/decimal", (req,res) => {
  let angka = Number(req.body.angka)

  let binary = angka.toString(2)
  let octal = angka.toString(8)
  let hexadecimal = angka.toString(16)

  let response = {
      decimal: angka,
      result: {
          binary: binary,
          octal: octal,
          hexadecimal: hexadecimal
      }
  }
  res.json(response)
})

app.post("/binary", (req,res) => {
  let angka = Number(req.body.angka)

  let decimal = parseInt(angka,2)
  let octal = parseInt(angka,2).toString(8)
  let hexadecimal = parseInt(angka,2).toString(16)

  let response = {
      binary: angka,
      result: {
          decimal: decimal,
          octal: octal,
          hexadecimal: hexadecimal
      }
  }
  res.json(response)
})

app.post("/octal", (req,res) => {
  let angka = Number(req.body.angka)

  let decimal = parseInt(angka,8)
  let binary = parseInt(angka,8).toString(2)
  let hexadecimal = parseInt(angka,8).toString(16)

  let response = {
      octal: angka,
      result: {
          decimal: decimal,
          binary: binary,
          hexadecimal: hexadecimal
      }
  }
  res.json(response)
})

app.post("/hexadecimal", (req,res) => {
  let angka = Number(req.body.angka)

  let decimal = parseInt(angka,16)
  let binary = parseInt(angka,16).toString(2)
  let octal = parseInt(angka,16).toString(8)

  let response = {
      hexadecimal: angka,
      result: {
          decimal: decimal,
          binary: binary,
          octal: octal
      }
  }
  res.json(response)
})

app.post("/bmi", (req,res) => {
  let berat = Number(req.body.berat)
  let tinggi = Number(req.body.tinggi)

  let bmi = berat / tinggi ** 2
  let status = null
  
  if (bmi < 18.5 ) {
      status = "underweight"
  } else if (bmi >= 18.5 && bmi < 25 ) {
      status = "ideal"
  } else if (bmi >= 25 && bmi <30 ) {
      status = "overweight"
  } else if (bmi >= 30 ) {
      status = "obesitas"
  }

  let response = {
      tinggi: tinggi,
      berat: berat,
      bmi: bmi,
      status: status
  }

  res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
  console.log("Server run on port 8000");
});
