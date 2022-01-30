import faker from "faker";

export const userBody = [
    {
      id: 0,
      username: "some_user",
      firstName:  faker.name.firstName(),
      lastName:  faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.phoneNumber(),
      userStatus: 0
    }
  ]