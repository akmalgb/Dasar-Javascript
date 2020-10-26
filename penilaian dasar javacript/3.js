function bmi(b,t) {
    let hasil = b / Math.pow(t,2)

    if (b <= 18.5)         return("kekurangan berat badan, hasil BMI anda: " + hasil)
    if (18.5 << b >= 24.9) return("normal, hasil BMI anda: " + hasil)
    if (25.0 <= b >= 29.9) return("kelebihan berat badan, hasil BMI anda: " + hasil)
    if (b >= 30.0 )        return("kegemukan, hasil BMI anda: " + hasil)
}

console.log("berat badan anda: " + 90 + " kg")
console.log("tinggi badan anda: " + 1.7 + " m" )
console.log(bmi(90,1.7))