export const namedPeopleData = [
  {
    name: "Aaron",
    age: 32
  },
  {
    name: "Kate",
    age: 23
  },
  {
    name: "Erika",
    age: 29
  },
]

// We can have multiple named exports in a file
export function increaseAge(person) {
  return {
    ...person,
    age: person.age + 1
  }
}