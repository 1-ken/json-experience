const myarrays = ['alex',5,'john',6,'keen']
myarrays.splice(2, 0, 3); 
myarrays.splice(2,3)

{/*fetching data fom an array*/}
function fetcher (myarrays){
    for (let i = 0;i<5;i++){
    console.log(myarrays[i])
} 
}

{/*adding and removing from an array*/}
var arrayadded
function addAtTheEnd(){
    myarrays.push(arrayadded)
} 
function addAtTheBeggining (){
    myarrays.unshift(arrayadded)
}



console.log(myarrays)
{/* the foolowing inbuilt functions are used in arrays:
1.shift and unshift
2.pop and push
3.splice can be sued to add or remove an element from a certain position in an array
*/}
