import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the BuddiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-newgroup',
  templateUrl: 'newgroup.html',
})
export class NewgroupPage {
  temparr = [];
  filteredusers = [];
  groupData=[];
  evntFlag=0;
  evtChecked=false;
  callback: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userservice: UserProvider) {
    
  }

  ionViewDidLoad() {
    this.userservice.getallusers().then((res: any) => {
      this.filteredusers = res;
      this.temparr = res;
   })
  }

  isInArray(displayName) {
    return this.groupData.some(function (el) {
      return el.displayName === displayName;
  });
  }

  checkEvents(evt, displayName, photoUrl){
    console.log(evt.checked, displayName, photoUrl);
    if(this.evntFlag!=0){
       console.log("hey",this.groupData);
       this.evtChecked = this.isInArray(displayName);
       console.log(this.evtChecked);
    }
    if(evt.checked && !this.evtChecked){
      this.groupData.push({'displayName': displayName, 'photoUrl': photoUrl})
      console.log(this.groupData);
      this.evntFlag = 1;
    }
    if(!evt.checked){
      this.groupData = this.groupData.filter(function(el) {
              console.log("el", el, displayName);
              return el.displayName !== displayName;
          });
    }
  }

  addMembers(){
    this.callback = this.navParams.get('callback');
    this.callback(this.groupData).then(()=>{
      this.navCtrl.pop();
    })
  }

  // searchuser(searchbar) {
  //   this.filteredusers = this.temparr;
  //   var q = searchbar.target.value;
  //   if (q.trim() == '') {
  //     return;
  //   }

  //   this.filteredusers = this.filteredusers.filter((v) => {
  //     if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
  //       return true;
  //     }
  //     return false;
  //   })
  // }

}

