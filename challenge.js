var input = "any sentence here"
//format the string to remove spaces and punctuation
input = input.toLowerCase().replace(/,/g, "").replace(/ /g, "").replace(/\./g, "")
let finalPair
//the class for the pairs
function pair(a,b){
  this.a = a
  this.b = b
}

let cryptoStrings  = []
//this function finds the optimal grid size for the final product by finding the closest pair of numbers that multiply too the string length eg a string of 64 returns 8/8
function findPairs(length) {
  let pairs = [];
  //only need to run the first half of the length or we get repeating pairs
for(x=0;x<length/2;x++){
 if(length%x === 0){
   let newPair = new pair(x, length/x)
   pairs.push(newPair)

 }

}
//sort the pairs so the pair with the lowest difference is first in the list, also the first number of the pair should be higher than the second
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
//format the rows so that the input is readable in the columns
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
