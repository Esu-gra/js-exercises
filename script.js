// 

for (let i = 0; i <=100; i++) {
    // if (i%15==0) {
    //     console.log("javascript");
        
    // } else if(i%3==0){
    //     console.log("java");
    // }else if(i%5==0){
    //     console.log("scrit");
    // }else{
    //     console.log(i);
    // }
    
}




// fibonacci



// function fibonacci(n) {

//     if(n==1) return [1]

//     let final=[1,1]
//     for (let i = 2; i < n; i++) {
//        final.push(final[i-2] + [i-1])
        
//     }

//     return final
    
// }

// console.log(fibonacci(4));
// console.log(fibonacci(8));


function isPrime(n){
    if(n==1) return false
    if (n==2) return true


    for (let i = 2; i < n; i++) {
      if (n%i==0) return false
        
    }

    return true
}

// console.log(isPrime(7));



// 
function stringSum(str) {
    return str.split("").filter(el=>Number(el)).map(el=>Number(el)).reduce(
        (t,n)=>t+n   )
 
    
}

// console.log(stringSum("sono 1 stringa di 6 parole"));

function over(array,soglia) {

    let final=[]
    for (let i = 0; i < array.length; i++) {
        
        if(array[i]>soglia) final.push(array[i])
    }
    return final
}

// console.log(over([3,4,5,5,6,76],2));


// orologio

function orologio(num){
    let ore= Math.floor(num/60)
    if (ore<10) ore="0"+ ore

    let minuti = num%60
    if (minuti<10) minuti= "0" + minuti

return `${ore} : ${minuti}`
}

// console.log(orologio(45));



// 


function randomArray(n,min,max){
    let final =[]
    for (let i = 0; i < n; i++) {
        final.push(Math.round(Math.random()*(max-min)+min))
        
    }
    return final
}

// console.log(randomArray(12,34,5));

// 


// function arrayObject(array) {

//    let final={}
//    array.forEach(el=>final[el[0]]=el[1])
//    return final
    
// }

function arrayObject(array) {

    return Object.fromEntries(array)
    
}



// console.log(arrayObject([["nome","mario"],["cognome","rossi"],["anni",32]]));

// 



function stringToObject(string) {
    let unici = Array.from(new Set(string.split("")))
    let arrayDiArray = unici.map(el=>[el,string.split("").filter(e=>e==el).length])
    return Object.fromEntries(arrayDiArray)
}

// console.log(stringToObject("tutto sembra veramente tutto "));

function capitlizer(string) {

    let array = string.split("")

    for (let i = 0; i < array.length; i++) {
        array[i]=array[i][0].toUpperCase()  + array[i].substr(1)
        
    }
    return array.join("")
}

// console.log(capitlizer("ciao a tutti"));




function grabDoll(dolls) {

    let bag=[];
    for (let i = 0; i < array.length; i++) {
    
        if (dolls[i]==="Hello Kitty" || dolls[i]==="Barbie doll") {
          bag.push(dolls[i])  
        }else{
            continue;
        }

        if(bag.length===3){
            break;
        }
        
    }
   return bag  
}







let dolls=["Hello Kitty", "Barbie doll", "Other doll", "Another doll", "Barbie doll"];
console.log(grabDoll(dolls));