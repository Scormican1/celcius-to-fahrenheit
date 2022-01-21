const tempc = 8.5

function convertCtoF (celcius){
    return celcius * 1.8 + 32
}

console.log(`${tempc} is equivalent to ${convertCtoF(tempc)}`)


const tips =[5, 8, 13, 2, 14, 27, 9, 18] 
function calcTips(arr){
    let sum = 0
    for (let i=0; i <arr.length; i++){
        sum = sum + arr[i]
    
    }
    return sum
}

console.log(calcTips(tips))

