import faker from 'faker';
import { postNewPet, postPetImage, getPetByStatus, getPetById, postUpdatesPet, updateExistingPet, deletePet, availablePets } from './pets/pets.js';
import { image, pet, petPostBody } from './pets/pets_mock.js';
import { deleteOrder, postCreatePetOrder,getOrderById, getInventory } from './store/store.js';
import { orderBody } from './store/store_mock.js';
import { createNewUser, deleteUser, getUserByUserName, logOutUser, logUserIntoTheSystem, postCreateUserWithArray, postCreateUserWithList, updateUser } from './user/user.js';
import { userBody } from './user/user_mock.js';

await updateExistingPet(pet);

await postNewPet(petPostBody);

await getPetById(pet.id);
 
await getPetByStatus('avaliable');

await postPetImage(pet.id);


//postUpdatesPet(pet);

//await deletePet(petPostBody.id);

await postCreatePetOrder(orderBody);

await getOrderById(orderBody.id);

await deleteOrder(orderBody.id)

await getInventory();


await postCreateUserWithArray(userBody);

await postCreateUserWithList(userBody);

await getUserByUserName(userBody[0].username);

await updateUser(userBody[0]);

await deleteUser(userBody[0].username);

await logUserIntoTheSystem(userBody[0]);

await logOutUser();

await createNewUser(userBody[0]);