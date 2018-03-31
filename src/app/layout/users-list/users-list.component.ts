import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userData=[];
  userDataBackup
  searchInput
    constructor(private adminService:AdminService) { }

    ngOnInit() {
    	this.getAppUserS()
    }


    getAppUserS() {
        this.adminService.AppUsersList().subscribe(data=>{
            this.userData=data.data;
            this.userDataBackup=data.data;
         },err=>{
            console.log(err);
        })
    }

    onToggle(user){
        // alert(user.status)
        let userStatus
        if (user.status==true) {
          userStatus=1;
        }else if(user.status==false){
          userStatus=0;
        }
        let data={
            user_id:user.id,
            user_status:userStatus
        }
        this.adminService.EditUserStatus(data).subscribe(updatedData=>{
            console.log(updatedData);
            this.getAppUserS()
        },err=>{
            console.log(err);
        })
    }

    // ---22-3-2018----

    // -----------invokes on delete icon to delete the country------------

    onDeleteIcon(userData){
        // alert(JSON.stringify(countryData))
        this.adminService.deleteUser(userData.id).subscribe(data=>{
          console.log(data);
          if (data.response==true) {
            // code...
            this.getAppUserS();
          }
        },err=>{
          console.log(err);
        })
    }

    // ------------to search user by user name and nick name-------------------

    onSearch(){
        this.userData= this.userDataBackup.filter(item =>{
            console.log(item)
            let b = item.first_name+item.nick_name;
            //let c=b.toString()
            return b.toLowerCase().includes(this.searchInput.toLowerCase())
        })
    }

}
