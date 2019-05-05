var input = "aaaaabbbbbcccccdddddfffffgggggaaaaabbbbbcccccdddddfffffgggggaaaaabbbbbcccccdddddfffffgggggaaaaabbbbbcccccdddddfffffgggggaaaaabbbbbcccccdddddfffffggggg"
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//format the string to remove spaces and punctuation
input = input.toLowerCase().replace(/,/g, "").replace(/ /g, "").replace(/\./g, "")
let gridSize
let coordinateList = []
//the class for the pairs
function pair(a,b){
  this.column = a
  this.row = b
}
function coordinate(ori,shuf){
  this.originalPoint = ori;
  this.newPoint = shuf
}
function shuffle(array) {
    var m = array.length,
        t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
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
let difference1 = x.column - x.row
let difference2 = y.column - y.row
if(difference1 < 0){difference1 = x.row - x.column}
if(difference2 < 0){difference2 = y.row - y.column}
return difference1 > difference2
})

let idealPair = pairs[0]
if(idealPair.column === idealPair.row){
  idealPair.column++
  idealPair.row--
}
if(idealPair.column < idealPair.row){
  let newRow = idealPair.column
  let newColumn = idealPair.row
  idealPair = new pair(newColumn,newRow)


}
while(idealPair.column > idealPair.row+1){

  idealPair.column--
  idealPair.row++
}
gridSize = idealPair
}
findPairs(input.length)

//format the rows so that the input is readable in the columns
for(k = 0; k<=gridSize.row; k++){
  let thisString = ""
  for(m=k;m<input.length;m+=gridSize.column){
    thisString += input.charAt(m)
  }

while (thisString.length < gridSize.column){
  thisString += " "
}
cryptoStrings.push(thisString)
}
let encodedArray = []
for(q=0;q<cryptoStrings.length;q++){

  encodedArray.push( cryptoStrings[q])

}

shuffle(encodedArray)

for(g=0;g<cryptoStrings.length;g++){

  let coordinates = new coordinate(g,encodedArray.indexOf(cryptoStrings[g]))
 coordinateList.push(coordinates)
}
console.log(coordinateList)
for(m=0;m<coordinateList.length;m++){
  let thisCoordinate = coordinateList[m]
  console.log(`check ${m} ${cryptoStrings[thisCoordinate.originalPoint]===encodedArray[thisCoordinate.newPoint]}`)

}
