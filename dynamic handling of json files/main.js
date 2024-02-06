const dynamicData = {
[prompt('Eter a property name')]:prompt('Enter property value')
}
const jsonString = JSON.stringify(dynamicData)
console.log(jsonString)