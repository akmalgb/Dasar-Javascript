function count(p,l) {
    let hargatanah = p * l * 1500000
    let total = hargatanah * 15 / 100

    return hargatanah + total 
}
console.log("total harga tanah: " + count(30,20.5) + " rupiah")
