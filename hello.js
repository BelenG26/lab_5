console.log('hello world')

let name = 'Belen'
let todayTemp = 71

console.log(name)
console.log(todayTemp)

//GPA checking function
function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4){
    return true
}
return false
}

// two parameter -> city and a state
// State has to be capitalized
function cityStateAddress(city, state){
    state = state.toUpperCase()
    address =city + ', ' + state
    return address
}
address = citySTateAddress('Minneapolis', 'mn')
console.log(address)

