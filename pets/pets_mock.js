import faker from 'faker'

export const image = faker.image.image(300, 300, true);
export const petPostBody = {id: 3242345476, name: faker.name.firstName() , status: 'available'};

export const pet = {
    id: 34111957,
    category: {
        id: -86892175,
        name: "meyn-kyn"
    },
    name: "Cat",
    photoUrls: [
        "cupidat",
        "pariatur adipisicing nulla"
    ],
    tags: [
        {
            id: -58990681,
            name: "ut ex officia in"
        },
        {
            id: 8069285,
            name: "elit nostrud"
        }
    ],
    status: "available"
}
