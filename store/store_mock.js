import faker from "faker";



export const orderBody = {
    id: 5,
    petId: 0,
    quantity: faker.datatype.number({min: 1, max: 10}),
    shipDate: "2022-01-30T13:47:56.331Z",
    status: "placed",
    complete: true
  }