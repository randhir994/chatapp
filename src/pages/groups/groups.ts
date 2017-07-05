import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroupsProvider } from '../../providers/groups/groups'
/**
 * Generated class for the GroupsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  groupData: any=[];
  myCallbackFunction: any;
  constructor(public groupsProvider: GroupsProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.myCallbackFunction = (_params) => {
      return new Promise((resolve, reject) => {
        // this.members = _params;
        this.groupData = [];
        this.groupsProvider.getGroups().then((val) => {
      console.log(val);
      if(val){
        for (const key of Object.keys(val)) {
        console.log(key, val[key]);
          this.groupData.push({'groupName':key, 'groupUrl':"https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e"});
        
      }
      }
      
    })
        console.log("macao", _params);
        resolve();
      })
    }
    console.log('ionViewDidLoad GroupsPage');
    this.groupsProvider.getGroups().then((val) => {
      console.log(val);
      if(val){
        for (const key of Object.keys(val)) {
        console.log(key, val[key]);
          this.groupData.push({'groupName':key, 'groupUrl':"https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e"});
        
      }
      }
      
    })
  }

  addGroup(){
    this.navCtrl.push('AddgroupPage', {
      callback: this.myCallbackFunction
    });
  }

}
