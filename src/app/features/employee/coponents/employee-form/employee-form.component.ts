import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { lastValueFrom, take } from 'rxjs';
import { formatDate } from '@angular/common';
import { Employee } from '../../../../core/models/employe';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  id: string = '';
  fieldList = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Input Username',
    },
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Input First Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Input Last Name',
    },
    { name: 'email', label: 'Email', type: 'text', placeholder: 'Input Email' },
    {
      name: 'birthDate',
      label: 'Birth Date',
      type: 'date',
      placeholder: 'Input Birth Date',
    },
    {
      name: 'basicSalary',
      label: 'Basic Salary',
      type: 'number',
      placeholder: 'Input Salary',
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      placeholder: 'Input Status',
      options: ['AKTIF', 'NON AKTIF'],
    },
    {
      name: 'group',
      label: 'Group',
      type: 'select',
      placeholder: 'Input Group',
      options: ['1', '2', '3'],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'date',
      placeholder: 'Input Description',
    },
  ];

  employeeInput: FormGroup;
  submitted: boolean = false

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.employeeInput = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthDate: new FormControl(null, [Validators.required]),
      basicSalary: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      const allEmployee = [{id:'ded'}]
      const employee = allEmployee.find((e) => e.id === this.id);

      if (employee) {
        this.employeeInput.patchValue({
          ...employee,
        //   birthDate: formatDate(employee.birthDate, 'YYYY-MM-dd', this.locale),
        //   description: formatDate(
        //     employee.description,
        //     'YYYY-MM-dd',
        //     this.locale
        //   ),
        });
      } else return;
      console.log(employee);
    }
  }

  submit() {
    this.submitted = true
    if (this.employeeInput.status === 'VALID') {
      const employee: Employee = this.employeeInput.value;
    //   employee.birthDate = new Date(employee.birthDate).toLocaleDateString();
      employee.description = new Date(
        employee.description
      ).toLocaleDateString();
      if (this.id) {
        employee.id = this.id;
        // this.store.dispatch(editEmployee({ employee }));
      } else {
        employee.id = crypto.randomUUID();
        // this.store.dispatch(addEmployee({ employee }));
      }
      this.router.navigate(['']);
    }
  }
}
