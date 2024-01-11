let x = BigInt(5646654645646546)
let y = BigInt(-465465465465465456456)
let z = BigInt(4564654654654564)

console.log(x * x * x + y * y * y + z * z * z)

let uniqueNumber = Symbol(9)
let uniqueWord = Symbol('let´s get then')
    // console.log(uniqueNumber)
    // console.log(uniqueWord)

const uniqueall = {

}
uniqueall.uniqueNumber = uniqueNumber
uniqueall.uniqueWord = uniqueWord
Object.entries(uniqueall).forEach((value) => {
    console.log(value)
})