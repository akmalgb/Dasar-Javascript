const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const moment = require("moment")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rent_car"
})

db.connect(error => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("MySQL Connected")
    }
})

//==============MOBIL===============

app.get("/mobil", (req, res) => {
    let sql = "select * from mobil"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                mobil: result 
            }            
        }
        res.json(response) 
    })
})

app.post("/mobil", (req,res) => {

    let data = {
        nomor_mobil: req.body.nomor_mobil,
        merk: req.body.merk,
        jenis: req.body.jenis,
        warna: req.body.warna,
        biaya_sewa_per_hari: req.body.biaya_sewa_per_hari,
        image: req.body.image
    }

    let sql = "insert into mobil set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/mobil", (req,res) => {

    let data = [
        {
            nomor_mobil: req.body.nomor_mobil,
        merk: req.body.merk,
        jenis: req.body.jenis,
        warna: req.body.warna,
        biaya_sewa_per_hari: req.body.biaya_sewa_per_hari,
        image: req.body.image
        },

        {
            id_mobil: req.body.id_mobil
        }
    ]

    let sql = "update mobil set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })
})

app.delete("/mobil/:id", (req,res) => {
    let data = {
        id_mobil: req.params.id
    }

    let sql = "delete from mobil where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

//==============PELANGGAN===============

app.get("/pelanggan", (req, res) => {
    let sql = "select * from pelanggan"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                pelanggan: result 
            }            
        }
        res.json(response) 
    })
})

app.post("/pelanggan", (req,res) => {

    let data = {
        nama_pelanggan: req.body.nama_pelanggan,
        alamat_pelanggan: req.body.alamat_pelanggan,
        kontak: req.body.kontak
    }

    let sql = "insert into pelanggan set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/pelanggan", (req,res) => {

    let data = [
        {
            nama_pelanggan: req.body.nama_pelanggan,
            alamat_pelanggan: req.body.alamat_pelanggan,
            kontak: req.body.kontak
        },

        {
            id_pelanggan: req.body.id_pelanggan
        }
    ]

    let sql = "update pelanggan set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response) 
    })
})

app.delete("/pelanggan/:id", (req,res) => {
    let data = {
        id_pelanggan: req.params.id
    }

    let sql = "delete from pelanggan where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

//==============KARYAWAN===============

app.get("/karyawan", (req, res) => {
    let sql = "select * from karyawan"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                karyawan: result 
            }            
        }
        res.json(response) 
    })
})

app.post("/karyawan", (req,res) => {

    let data = {
        nama_karyawan: req.body.nama_karyawan,
        alamat_karyawan: req.body.alamat_karyawan,
        kontak: req.body.kontak,
        username: req.body.username,
        password: req.body.password
    }

    let sql = "insert into karyawan set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data inserted"
            }
        }
        res.json(response) 
    })
})

app.put("/karyawan", (req,res) => {

    let data = [
        {
            nama_karyawan: req.body.nama_karyawan,
        alamat_karyawan: req.body.alamat_karyawan,
        kontak: req.body.kontak,
        username: req.body.username,
        password: req.body.password
        },

        {
            id_karyawan: req.body.id_karyawan
        }
    ]

    let sql = "update karyawan set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })
})

app.delete("/karyawan/:id", (req,res) => {
    let data = {
        id_karyawan: req.params.id
    }
    
    let sql = "delete from karyawan where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

//==============TRANSAKSI===============
app.post("/sewa",(req,res) => {
    var a = moment(req.body.tgl_sewa)
    var b = moment(req.body.tgl_kembali)
    var hari = b.diff(a, 'days')

    let id_mobil = {
        id_mobil: req.body.id_mobil
    }

    let sql = "SELECT biaya_sewa_per_hari FROM mobil where ?"
    db.query(sql, id_mobil, (error,result) => {
        var string = JSON.stringify(result);
        var json = JSON.parse(string);
        let total = json[0].biaya_sewa_per_hari*hari
        let data = {
            id_sewa: req.body.id_sewa,
            id_mobil: req.body.id_mobil,
            id_karyawan: req.body.id_karyawan,
            id_pelanggan: req.body.id_pelanggan,
            tgl_sewa: req.body.tgl_sewa,
            tgl_kembali: req.body.tgl_kembali,
            total_bayar : total
        }

        let sql1 = "insert into sewa set ?"
        db.query(sql1, data, (error,result) => {
            if (error) {
                res.json({message: error.message})
            } else {
                res.json({message: "Data has been inserted"})
            }
        })

    })

})

app.get("/sewa", (req, res) => {
    let sql = "select * from sewa"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message 
            }            
        } else {
            response = {
                count: result.length, 
                sewa: result 
            }            
        }
        res.json(response) 
    })
})

app.get("/sewa/:id",(req,res)=>{
    let data = {
        id_pelanggan: req.params.id
    }
    let sql = "SELECT p.id_pelanggan,s.id_sewa,p.nama_pelanggan,m.id_mobil,m.nomor_mobil,m.merk,k.id_karyawan,k.nama_karyawan " +
    "FROM sewa s JOIN pelanggan p ON s.id_pelanggan = p.id_pelanggan "+
    "JOIN mobil m ON s.id_mobil = m.id_mobil " +
    "JOIN karyawan k ON s.id_karyawan = k.id_karyawan WHERE p.?"
    db.query(sql,data,(error,result)=>{
        if(error){
            response = {
                message: error.message
            }
        }else{
            response = {
                count: result.length,
                data: result
            }
        }
        res.json(response)
    })
})

app.delete("/sewa/:id", (req,res) => {
    let data = {
        id_sewa: req.params.id
    }

    let sql = "delete from sewa where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        } else {
            response = {
                message: result.affectedRows + " data deleted"
            }
        }
        res.json(response) 
    })
})

app.listen(8000, () => {
    console.log("Run on port 8000")
})