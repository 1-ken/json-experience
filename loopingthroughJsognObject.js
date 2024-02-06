function tryingToLoop (){
    const myObject = { name: "John", DOB: "2002-08-19", city: "nairobi" };
for (const key in myObject){
    const value  = myObject[key]
    console.log(key+" "+value)
}
}
tryingToLoop()
