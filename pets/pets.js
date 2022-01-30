import request from 'supertest';
import { environment } from '../environments/envirompment.js';
import{success,started} from '../utils/suitesFlow.js';
export let availablePets;


//done
export function getPetById(id) {
    const suitName = 'Get Pet By Id '
    started(suitName)
    return request(environment.baseUrl)
        .get('/pet/' + id)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
            success(suitName)
        });
}
    // done
export function getPetByStatus(status) {
    const suitName = 'Get Pets by status '
    started(suitName)
     return request(environment.baseUrl)
        .get('/pet/findByStatus?status=' + status)
        .set("Accept", "application/json")
        .expect(200)
        .expect("Content-Type", /json/)
        .then(response => {
            availablePets = response.body
            success(suitName)
        });
    };
 // done
    export function postPetImage(id) {
        const suitName = 'Post pets image '
    started(suitName)
        return request(environment.baseUrl)
            .post(`/pet/${id}/uploadImage`)
            .set('Accept', 'application/json')
            .attach('file','./pets/cat.JPG')
            .set('Content-Type', 'multipart/form-data')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                success(suitName)
            });
    };

    // done
    export function postNewPet(pet) {
        const suitName = 'Post new pet '
    started(suitName)
        return request(environment.baseUrl)
            .post("/pet")
            .send(pet)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then(response => {
                success(suitName)
            });
    };
//not working
    export function postUpdatesPet(pet) {
        const suitName = 'Post uodate pet '
    started(suitName)
        return request(environment.baseUrl)
            .post('/pet/' + pet.id)
            .send(pet)
            .set('Accept','application/json')
            .set('Content-type', 'application-json')
            .expect(200)
            .then(response => {
                success(suitName)
            });
    };

// 

export function updateExistingPet(pet) {
    const suitName = 'update existing pet via put '
    started(suitName)
    return request(environment.baseUrl)
    .put('/pet')
    .set('Accept','application/json')
    .send(pet)
    .expect(200)
    .expect(pet)
    .then(response => {
        success(suitName)
    });
}

//

export function deletePet(id) {
    const suitName = 'delete pet '
    started(suitName)
    console.log(id)
    return request(environment.baseUrl)
    .delete('/pet'+id)
    .set('Accept','application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        success(suitName)
    });
}

