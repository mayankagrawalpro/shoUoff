import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service'// import admin services
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email;
	forgotPassword=false;
    password;
    myFirstForm: FormGroup;
    myForgotForm: FormGroup;
     loginData
  constructor(private router:Router,private formBuilder: FormBuilder,private adminService:AdminService) { 
  	this.loginData={}
	 this.myFirstForm = this.formBuilder.group({
        'email': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'), Validators.minLength(10)])],
        'password': [null, Validators.compose([Validators.required])]
      })
	 this.myForgotForm = this.formBuilder.group({
        'email': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'), Validators.minLength(10)])]
      })
  }

  ngOnInit() {
  }
  
  // -----------------------invoke on submit icon to submit the login details ----------------

 // 	onSubmitIcon(login){
	// 	//this.editFlag=true
	// 	this.emailId=login.email;
	// 	this.password=login.pass;
	// }
  
  // -----------------------invoke on Submit Button to Submit the details of login--------------

  onLogin(){
  	//console.log(this.email)
 
  	this.adminService.AdminLogin(this.loginData).subscribe(data =>{
  		if (data.response==true) {
  			this.router.navigate(['/layout'])
  		}else{
  			alert(JSON.stringify("invalid credential"));
  		}
  	    }, err =>{
  			console.log(err)
  		}
  	)

  }

//routerLink="/layout"
 // -----------------------invoke on forgot icon to got to forgot page  ----------------

  onForgotPassword(){
  	this.forgotPassword=true;
  }

// -----------------------invoke on forgot icon to got to forgot page  ----------------

  onCancel(){
  	this.forgotPassword=false;
  }

  // -----------------------on Submit for forget password------------------

  	onSubmit(){
  		let dataToSend={
  			email:this.email,
  		}
  		// alert("hi")
  		this.adminService.ForgetAdmin_password(this.email).subscribe(data=>{
  			if (data.response == true) {
  				alert(JSON.stringify('Reset password sent to your email'));
  				this.forgotPassword=false;
  			}else{
  				alert(JSON.stringify('this is not the correct Admin Email'));
  			}
  		},err=>{
  			console.log(err)
  		})
  	}


// if (data) {
//   				alert(JSON.stringify(data));
//   			}
  



}
