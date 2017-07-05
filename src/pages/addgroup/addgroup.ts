import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groups/groups';
/**
 * Generated class for the AddgroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addgroup',
  templateUrl: 'addgroup.html',
})
export class AddgroupPage {
  members: any;
  myCallbackFunction: any;
  groupName: 'Group1';
  callback: any;
  constructor(public groupsProvider: GroupsProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddgroupPage');
    this.myCallbackFunction = (_params) => {
      return new Promise((resolve, reject) => {
        this.members = _params;
        console.log("macao", _params);
        resolve();
      })
    }
  
    // console.log("hey", this.myCallbackFunction)
  }

  addBuddy() {
    this.navCtrl.push('NewgroupPage', {
      callback: this.myCallbackFunction
    });
  }

  editImage(){
    console.log("edit Image");
  }

  addGroup(){
    console.log("add Group", this.members);
    this.members.push({'groupUrl': 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'});
    // console.log(groupPush);
    this.groupsProvider.addGroup(this.members, this.groupName).then((val) => {
      this.callback = this.navParams.get('callback');
      this.callback().then(()=>{
        this.navCtrl.pop();
      })
      alert("Group added successfully");
    }).catch((err) => {
      alert(err);
    })
  }
}
