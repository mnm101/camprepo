/*let garage = {
    item: " Ferrari",
    toBeginning: false,
    items: ["lambo","merc","fiat"]
}

if(garage.toBeginning)
{
    let temp = [];
    temp.push(garage.item,...garage.items);
    garage.items=temp;
}
else
    garage.items.push(garage.item);
console.log(garage.items)


const p1 = {name: "Cathy", age: 24, city: "Ohiio"}
const p2 = {name: "Mark", age: 24, city: "Ohio"}

if(p1.city==p2.city)
    console.log(p1.name + " can date " + p2.name)
else
    console.log(p1.name + " cannot date " + p2.name)
 */

 let myList = [
     {name: "Fares", age: 30},
     {name: "Mustafa", age: 29}
 ]
 console.log(myList[0])
 console.log(myList[1])

myList[0].name = "Moran"
console.log(myList[0])
/*
myList.splice(1,1)
console.log(...myList)
*/

let myList2 = [
    {name: "Anna", age: 30},
    {name: "Maria", age: 29}
]

myList.push(...myList2)
console.log(...myList)

let library = {
    books: [
    {book:"Red Planet", author: "Zeke"},
    {book:"Blue Planet", author: "Zeku" }
    ]
}
myList.push(...library.books)
console.log(...myList)


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');
/*
  if(name == "Bob")
  {
      if(!reservations.Bob.claimed)
        alert("Welcome To the Hotel Bob")
        else
            alert("Your reservation has been claimed Bob")

  }
  else
  {
      if(name == "Ted"){
        if(!reservations.Ted.claimed)
            alert("Welcome To the Hotel Ted")
            else
                alert("Your reservation has been claimed Ted")
      }
      else
         alert("There is no reservation under this name")
  }
*/
if(name == "Bob")
  {
      if(!reservations.Bob.claimed)
        alert("Welcome To the Hotel Bob")
        else
            alert("Your reservation has been claimed Bob")

  }
  else
  {
      if(name == "Ted"){
        if(!reservations.Ted.claimed)
            alert("Welcome To the Hotel Ted")
            else
                alert("Your reservation has been claimed Ted")
      }
      else{
        let clmObject = {claimed: true}
         reservations[name]= clmObject
         alert("enjoy a free table "+ name)}
         console.log(reservations)

  }
  let x = [ {human: {name: 'Daena', age: 31} } ][0].human.age
  console.log(x)