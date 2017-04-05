import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

	public data: any;
	public fireAuth: any;
	public firedatabase: any;
	public userprofile: any;

	constructor(public http: Http) {
		this.fireAuth =  firebase.auth();
    	this.userprofile = firebase.database().ref('users'); 
    	this.firedatabase = firebase.database();
	}

	getDummy(){
		return this.http.get('http://localhost:3000/nextLevel?id=1')
				.subscribe(data =>{
					console.log(data);
				});
	}

	getNextLevel(id:string){
		return new Promise(resolve =>{
			this.http.get('http://192.168.40.177:3000/nextLevel?id='+id)
				.subscribe(data =>{
					resolve(data.json());
				});
		});
	}

	loginUser(email:string, password:string) : any{
 		return firebase.auth().signInWithEmailAndPassword(email, password);
	}

	logoutUser(){
		return this.fireAuth.signOut();
	}

	writePosts(header:string, description: string, postedby: string){
		var postsref = this.firedatabase.ref('posts/');
		return postsref.push().set({
			header: header,
			description: description,
			postedby: postedby
		});
	}

	readPosts(){
		var ref=this.firedatabase.ref('posts/');
		return ref.orderByKey();
	}
}
