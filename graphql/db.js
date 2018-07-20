export const people = [
  {
    id: "0",
    name: "donghoon",
    age: 20,
    gender: "male"
  },
  {
    id: "1",
    name: "gyuhwan",
    age: 20,
    gender: "male"
  },
  {
    id: "2",
    name: "jungho",
    age: 20,
    gender: "male"
  },
  {
    id: "3",
    name: "myunggyu",
    age: 20,
    gender: "male"
  }
];

export const getById = (id) =>{
  const filteredPeople = people.filter(person => person.id === String(id));

  return filteredPeople[0]
}
