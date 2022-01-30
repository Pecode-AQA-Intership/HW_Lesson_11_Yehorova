import request from 'supertest';
import { environment } from '../environments/envirompment.js';
import { success,started } from '../utils/suitesFlow.js';



export function postCreatePetOrder(newOrder) {
    const suiteName = 'Post Create Pet Order '
    started(suiteName)
    return request(environment.baseUrl)
    .post('/store/order')
    .send(newOrder)
    .set('Accept','application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response =>{
        success(suiteName)
    });

} 

export function getOrderById(id) {
    const suiteName = 'Get Order by Id '
    started(suiteName)
    return request(environment.baseUrl)
    .get('/store/order/'+ id)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then(response => {
            success(suiteName)
        });
}

export function deleteOrder(id) {
    const suiteName = 'Delete Order Id '
    started(suiteName)
    console.log(id)
    return request(environment.baseUrl)
    .delete('/store/order/'+ id)
    .set('Accept','application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
        success(suiteName)
    });

}

export function getInventory() {
    const suiteName = 'Get Inventory '
    started(suiteName)
    return request(environment.baseUrl)
    .get('/store/inventory/')
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then(response => {
            success(suiteName)
        });

}




