const myData = {
    nombre: "Emilio",
    apellido: "Rinaudo",
    edad: 35,
    altura: 1.80,
    isDeveloper: true
}
console.log(myData);

var age = "edad"

console.log(myData[age]);

friend1Data = {...myData}

const groupData = [
    myData,
    {nombre: "Luciano", Apellido: "Sufia", edad: 34, altura: 1.60, isDeveloper: false},
    {nombre: " Mauro", Apellido: "Maggi", edad: 36, altura: 1.90, isDeveloper: false}
]

console.log(groupData);

groupOrderData = groupData.sort((a, b) => a.edad - b.edad)

console.log(groupOrderData);
