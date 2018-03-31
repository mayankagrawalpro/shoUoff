import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service'// import admin services
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-countries-management',
  templateUrl: './countries-management.component.html',
  styleUrls: ['./countries-management.component.scss']
})
export class CountriesManagementComponent implements OnInit {
	countriesForm: FormGroup;
	countriesData;
	countryName;
	countryId;
	editFlag=false;
	p: number = 1;
	constructor(private formBuilder: FormBuilder,private adminService:AdminService) { 
		this.countriesForm = formBuilder.group({
	      'country': [null, Validators.compose([Validators.required])]
	    })
	}

	ngOnInit() {
		this.fetchCountryList();
	}


	// -----21-3-2018--mukul----

	// ---------------method for fetching countries list----------

	fetchCountryList(){
		this.adminService.fetchCoutriesList()
		.subscribe(data=>{
        	this.countriesData=data.data;
		},err=>{
		    console.log(err);
		})
	}

	// -------------------invokes on submit button to addCountry----------------

	onSubmit(){
		// alert(this.countryName)
		let countryData={
			country_name:this.countryName
		}
		this.adminService.addCountry(countryData).subscribe(data=>{
			console.log(data);
			if (data.response==true) {
				this.countryName="";
				this.editFlag=false
				this.fetchCountryList();
			}
		},err=>{
			console.log(err);
		})
	}

	// -----------------------invoke on edit icon to edit the name of country-------

	onEditIcon(countryData){
		this.editFlag=true
		this.countryName=countryData.name;
		this.countryId=countryData.id;
	}


	// -----------------invoke on edit Button to Submit the name of country to server--------
	onEditButton(){
		document.getElementById("countryname").focus();
		let countryData={
			country_id:this.countryId,
			country_name:this.countryName
		}
		this.adminService.editCountryDetails(countryData).subscribe(data=>{
			console.log(data);
			if (data.response==true) {
				this.countryName="";
				this.fetchCountryList();
			}
		},err=>{
			console.log(err);
		})
	}

	// ------------invokes on reset button to reset the form---------------

	onResetButton(){
		this.countryName="";
		this.editFlag=false
		this.countriesForm.reset();
	}

	// -----------invokes on delete icon to delete the country------------

	onDeleteIcon(countryData){
		// alert(JSON.stringify(countryData))
		this.adminService.deleteCountry(countryData.id).subscribe(data=>{
			console.log(data);
			if (data.response==true) {
				// code...
				this.fetchCountryList();
			}
		},err=>{
			console.log(err);
		})
	}

	// ------------------invokes on toggle button to enable disable status of country-------------
	onToggle(countryData){
		// alert(countryData.status)
        let countryStatus
        if (countryData.status==true) {
          countryStatus=1;
        }else if(countryData.status==false){
          countryStatus=0;
        }
        let data={
            country_id:countryData.id,
            country_status:countryStatus
        }
        this.adminService.EditUserStatus(data).subscribe(updatedData=>{
            console.log(updatedData);
            this.fetchCountryList()
        },err=>{
            console.log(err);
        })
	}

}
