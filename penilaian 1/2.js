const barang = [
    {nama: "beras", harga: 10000, jumlah: 5},
    {nama: "gula", harga: 14000, jumlah: 5},
    {nama: "telur", harga: 20000, jumlah: 2},
    {nama: "minyak goreng", harga: 9000, jumlah: 10}
]

function count(hargabarang){

    const anjay = hargabarang.reduce((total, hargabarang) => {
        return total + hargabarang.harga * hargabarang.jumlah
    }, 0)
    return anjay 
}

console.log(barang)
console.log("total biaya belanjaan: " + count(barang))
//console.log(barang[0])
