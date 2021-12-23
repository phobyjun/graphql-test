export const people = [
    {
        id: "1",
        name: "phobyjun",
        age: 23,
        gender: "male"
    },
    {
        id: "2",
        name: "junseok",
        age: 20,
        gender: "female"
    },
    {
        id: "3",
        name: "jake",
        age: 25,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => people.id === id);
    return filteredPeople[0];
};
