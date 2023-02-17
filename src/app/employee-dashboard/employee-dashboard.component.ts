import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeDashboardModule } from './employee-dashboard.module';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue ! : FormGroup;
  employeeModuleObj:EmployeeDashboardModule=new EmployeeDashboardModule();
  constructor(private formBuilder : FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName :[''],
      lastName :[''],
      email :[''],
      mobile :[''],
      salary :['']
    })
  }

  postEmployeeDetails(){
    this.employeeModuleObj.firstName=this.formValue.value.firstName;
    this.employeeModuleObj.lastName=this.formValue.value.lastName;
    this.employeeModuleObj.email=this.formValue.value.email;
    this.employeeModuleObj.mobile=this.formValue.value.mobile;
    this.employeeModuleObj.salary=this.formValue.value.salary;

    this.api.postEmployee(this.employeeModuleObj).subscribe(res=>{
      console.log(res); 
      alert("Employee Details Added Successfully");  
      this.formValue.reset();   
    },
    err=>{
      alert("Some error will be defined let me check it once....!");
    })
  } 

}
