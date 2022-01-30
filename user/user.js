import request from 'supertest';
import { environment } from '../environments/envirompment.js';
import { success,started } from '../utils/suitesFlow.js';


export function postCreateUserWithArray(userArray) {
    const suiteName = 'Post Create User With Array '
    started(suiteName)
    return request(environment.baseUrl)
    .post('/user/createWithArray')
    .send(userArray)
    .set('Accept','application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response =>{
        success(suiteName)
    });
}

export function postCreateUserWithList(userArray) {
    const suiteName = 'Post Create User With List '
    started(suiteName)
    return request(environment.baseUrl)
    .post('/user/createWithList')
    .send(userArray)
    .set('Accept','application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response =>{
        success(suiteName)
    });  
}


export function getUserByUserName(username) {
    const suiteName = 'Get User By User Name '
    started(suiteName)
    return request(environment.baseUrl)
    .get('/user/'+ username)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then(response => {
            success(suiteName)
        });
}

export function updateUser(user) {
    const suitName = 'update existing user via put '
    started(suitName)
    return request(environment.baseUrl)
    .put('/user/'+ user.username)
    .set('Accept','application/json')
    .expect("Content-Type", /json/)
    .send(user)
    .expect(200)
    .then(response => {
        success(suitName)
    });
}

export function deleteUser(username){
    const suitName = 'delete user '
    started(suitName)
    return request(environment.baseUrl)
    .delete('/user/'+ username)
    .set('Accept','application/json')
    .expect("Content-Type", /json/)
    .expect(200)
    .then(response => {
        success(suitName)
    });
}

export function logUserIntoTheSystem(user){
    const suitName = 'log User Into The System '
    started(suitName)
    return request(environment.baseUrl)
    .get(`/user/login?username=${user.username}&password=${user.password}`)
    .set('Accept','application/json')
    .expect("Content-Type", /json/)
    .expect(200)
    .then(response => {
        success(suitName)
    });

}

export function logOutUser(){
    const suitName = 'log Out User '
    started(suitName)
    return request(environment.baseUrl)
    .get(`/user/logout`)
    .set('Accept','application/json')
    .expect("Content-Type", /json/)
    .expect(200)
    .then(response => {
        success(suitName)
    });


}

export function createNewUser(user){
const suiteName = 'Post Create New User '
    started(suiteName)
    return request(environment.baseUrl)
    .post('/user')
    .send(user)
    .set('Accept','application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response =>{
        success(suiteName)
    });
}