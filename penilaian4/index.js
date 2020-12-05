const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const moment = require("moment")

const md5 = require("md5")
const Cryptr = require("cryptr")
const crypt = new Cryptr("140533601726")

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

//=======Authentication and Authorization=========

validateToken = () => {
    return (req, res, next) => {
            if (!req.get("Token")) {
            res.json({
                message: "Access Forbidden"
            })
            } else {
            let token  = req.get("Token")

            let decryptToken = crypt.decrypt(token)

            let sql = "select * from karyawan where ?"

            let param = { id_karyawan: decryptToken}

            db.query(sql, param, (error, result) => {
                if (error) throw error
                if (result.length > 0) {
                    next()
                } else {
                    res.json({
                        message: "Invalid Token"
                    })
                }
            })
        }
    }
}

app.post("/karyawan/auth", (req, res) => {
    let param = [
        req.body.username, 
        md5(req.body.password) 
    ]
    

    let sql = "select * from karyawan where username = ? and password = ?"

    db.query(sql, param, (error, result) => {
        if (error) throw error

        if (result.length > 0) {
            res.json({
                message: "Logged",
                token: crypt.encrypt(result[0].id_karyawan), 
                data: result
            })
        } else {
            res.json({
                message: "Invalid username/password"
            })
        }
    })
})