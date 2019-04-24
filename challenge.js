var input = "Im sorry I want to be out of these clothes so wait"

input = input.toLowerCase().replace(/,/g, "").replace(/ /g, "").replace(/\./g, "")
let finalPair
function pair(a,b){
  this.a = a
  this.b = b
}

let cryptoStrings  = []

function findPairs(length) {
  let pairs = [];
for(x=0;x<length/2;x++){
 if(length%x === 0){
   let newPair = new pair(x, length/x)
   pairs.push(newPair)

 }

}
pairs = pairs.sort(function(x,y){
let difference1 = x.a - x.b
let difference2 = y.a - y.b
if(difference1 < 0){difference1 = 1000000}
if(difference2 < 0){difference2 = 1000000}
return difference1 > difference2
})

let idealPair = pairs[0]
while(idealPair.a > idealPair.b+1){
  idealPair.a--
  idealPair.b++
}
finalPair = idealPair
}
findPairs(input.length)
console.log("*")
for(k = 0; k<=finalPair.b; k++){
  let thisString = ""
  for(m=k;m<input.length;m+=finalPair.a){
    thisString += input.charAt(m)
  }

while (thisString.length < finalPair.a){
  thisString += " "
}
cryptoStrings.push(thisString)
}
for(q=0;q<cryptoStrings.length;q++){
  console.log(cryptoStrings[q])
}
