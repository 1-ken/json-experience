{/* creating data a json file*/}
const myInfor = {
    "name":"Ken MWirigi",
    "Age":"21",
    "height":"5`4 ft",
    "weight":"59 kg",
}
{/*adding data to the local storage*/}
function addToLocalStorage (myInfor){
localStorage.setItem('USer infor',JSON.stringify(myInfor))
console.log("data added successfully")
}
/*retriving data from the local storage*/
function retrive (){
    const storedData = JSON.parse(localStorage.getItem('USer infor'))
    console.log(storedData + "data fetched succefully")
}
addToLocalStorage (myInfor)
retrive()