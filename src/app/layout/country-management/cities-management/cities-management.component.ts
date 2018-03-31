import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service'// import admin services
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cities-management',
  templateUrl: './cities-management.component.html',
  styleUrls: ['./cities-management.component.scss']
})
export class CitiesManagementComponent implements OnInit {
	citiesForm: FormGroup;
	citiesData;
	countriesData;
	selectedCountry;
	cityName;
	editFlag=false;
	cityId;
	countryId;

	constructor(private formBuilder: FormBuilder,private adminService:AdminService) { 
		this.citiesForm = formBuilder.group({
	      'country': [null, Validators.compose([Validators.required])],
	      'city': [null, Validators.compose([Validators.required])],
	    })
	}

	ngOnInit() {
		this.fetchCitiesList();
		this.fetchCountryList();
	}

  // -----21-3-2018--mukul----

	// ---------------method for fetching Cities list----------

	fetchCitiesList(){
		this.adminService.fetchCitiesList()
		.subscribe(data=>{
        	this.citiesData=data.data;
        	console.log(this.citiesData)
		},err=>{
		    console.log(err);
		})
	}

	// ---------------method for fetching countries list----------

	fetchCountryList(){
		this.adminService.fetchCoutriesList()
		.subscribe(data=>{
        	this.countriesData=data.data;
		},err=>{
		    console.log(err);
		})
	}

	// ------------invokes on editIcon-----------------
	onEditIcon(cityData){
		this.editFlag=true
		this.selectedCountry=cityData.countryDetails.name;
		this.cityId=cityData.id;
		this.countryId=cityData.country_id;
		this.cityName=cityData.name
	}

	// ----------------------invokes on selecting Country--------------
	onSelectCountry(country_id){
		this.countryId=country_id
	}

	// -------------------invokes on submit button to addCountry----------------
	onSubmit(){
		// alert(this.countryName)
		let cityData={
			country_id:this.countryId,
			city_name:this.cityName
		}
		this.adminService.addCity(cityData).subscribe(data=>{
			console.log(data);
			if (data.response==true) {
				this.cityName="";
				this.editFlag=false;
				this.selectedCountry="";
				this.fetchCitiesList();
			}
		},err=>{
			console.log(err);
		})
	}

	// ---------------invokes on reset button to reset the form------------
	onResetButton(){
		this.cityName="";
		this.editFlag=false;
		this.selectedCountry="";
		this.citiesForm.reset();
	}

	// ---------------invokes on edit button to edit the details------------

	onEditButton(){
		let cityData={
			city_id:this.cityId,
			city_name:this.cityName
		}
		this.adminService.editCityDetails(cityData).subscribe(data=>{
			console.log(data);
			if (data.response==true) {
				this.cityName="";
				this.editFlag=false;
				this.selectedCountry="";
				this.fetchCitiesList();
			}
		},err=>{
			console.log(err);
		})
	}

	// -----------invokes on delete icon to delete the city------------

	onDeleteIcon(cityData){
		this.adminService.deleteCity(cityData.id).subscribe(data=>{
			console.log(data);
			if (data.response==true) {
				this.fetchCitiesList();
			}
		},err=>{
			console.log(err);
		})
	}

	// ------------------invokes on toggle button to enable disable status of city-------------
	onToggle(cityData){
		// alert(cityData.status)
        let cityStatus
        if (cityData.status==true) {
          cityStatus=1;
        }else if(cityData.status==false){
          cityStatus=0;
        }
        let data={
            city_id:cityData.id,
            city_status:cityStatus
        }
        this.adminService.EditUserStatus(data).subscribe(updatedData=>{
            console.log(updatedData);
            this.fetchCitiesList()
        },err=>{
            console.log(err);
        })
	}


}
