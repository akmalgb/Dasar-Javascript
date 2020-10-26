class lingkaran{
    constructor(r){

        this.jari = r
    }
    luas = () => {
        return Math.PI * Math.pow(this.jari, 2)
    }
    keliling = () => {
        return 2 * Math.PI * this.jari
    }
}

/*let lingkaranini = new lingkaran(14)
console.log("luas lingkaran: " + lingkaranini.luas())
console.log("keliling lingkaran: " + lingkaranini.keliling())*/

class tabung extends lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () => {
        return Math.PI * Math.pow(this.jari, 2) * this.tinggi
    }
    lperm = () => {
        return 2 * Math.PI * this.jari * (this.jari + this.tinggi)
    }
    lselimut = () => {
        return 2 * Math.PI * this.jari * this.tinggi
    }
}

let tabungini = new tabung(7.5,50)
console.log("------------------------------")
console.log("volume tabung: " + Math.round(tabungini.volume()) + " cm")
console.log("luas permukaan tabung: " + Math.round(tabungini.lperm()) + " cm")
console.log("luas selimut tabung: " + Math.round(tabungini.lselimut()) + " cm")

class kerucut extends lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () => {
        return 1/3 * Math.PI * Math.pow(this.jari, 2) * this.tinggi
    }
    lperm = () => {
        return Math.PI * this.jari * (this.jari + Math.sqrt(Math.pow(this.jari, 2) + Math.pow(this.tinggi, 2)))
    }
    lselimut = () => {
        return Math.PI * this.jari * Math.sqrt(Math.pow(this.jari, 2) + Math.pow(this.tinggi, 2))
    }
}

let kerucutini = new kerucut(10,40)
console.log("------------------------------")
console.log("volume kerucut: " + Math.round(kerucutini.volume()) + " cm")
console.log("luas permukaan kerucut: " + Math.round(kerucutini.lperm()) + " cm")
console.log("luas selimut kerucut: " + Math.round(kerucutini.lselimut()) + " cm")

class bola extends lingkaran{
    constructor(r){
        super(r)
    }
    volume = () => {
        return 4/3 * Math.PI * Math.pow(this.jari, 3)
    }
    lperm = () => {
        return 4 * Math.PI * Math.pow(this.jari, 2)
    }
}

let bolaini = new bola(15)
console.log("------------------------------")
console.log("volume bola: " + Math.round(bolaini.volume()) + " cm")
console.log("luas permukaan bola: " + Math.round(bolaini.lperm()) + " cm")