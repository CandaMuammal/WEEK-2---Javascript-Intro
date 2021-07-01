divideAndSort = (number) => {
    if(typeof(number) === "number"){ 
        const temporaryNumber1 = number.toString().split(0) 
        // console.log(temporaryNumber1);
        const temporaryNumber2 = temporaryNumber1.map((item) => {
            return item.split('').sort().join('')
        })
        // console.log(temporaryNumber2)
        let sortedNumber = temporaryNumber2.join('')
        // console.log(sortedNumber)
        // console.log(typeof(sortedNumber))
        sortedNumber = parseInt(sortedNumber) 

        console.log(`The sorted number is ${sortedNumber}`)

    }else{ 
        console.log("input must be a line of numbers")
    }
}
// divideAndSort(5956560159466056)
// divideAndSort(98709870987)
divideAndSort(43210765098)
// divideAndSort('qwerty')