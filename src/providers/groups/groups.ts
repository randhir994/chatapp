import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the GroupsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GroupsProvider {

  firedata = firebase.database().ref('/users');
  constructor(public afireauth: AngularFireAuth) {
   
  }

  addGroup(group, groupName){
    console.log("groupNamedfadsfads", groupName);
    var obj = { [groupName]: group};
    var promise = new Promise((resolve, reject) => {
      this.firedata.child(firebase.auth().currentUser.uid+'/groups/').update({
         [groupName]: group
      }).then(() => {
      resolve(true);
    }).catch(err => {
      reject(err);
       })
    })
    return promise;
  }

  getGroups(){
    var promise = new Promise((resolve, reject) => {
    this.firedata.child(firebase.auth().currentUser.uid+'/groups/').once('value', (snapshot) => {
      resolve(snapshot.val());
    }).catch((err) => {
      reject(err);
      })
    })
    return promise;
  }

}
