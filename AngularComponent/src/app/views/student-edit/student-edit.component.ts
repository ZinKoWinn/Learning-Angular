import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { StudentsService } from 'src/app/services/students.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})



export class StudentEditComponent implements OnInit {

  studentForm: FormGroup

  constructor(private service: StudentsService, formBuilder: FormBuilder, private route: Router) {
    this.studentForm = formBuilder.group({
      id: service.getStudentList().length + 1,
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: '',
    })
  }

  save() {
    this.service.save(this.studentForm.value)
    this.route.navigateByUrl('/list')
  }

  get name() {
    return this.studentForm.controls['name']
  }

  get phone() {
    return this.studentForm.controls['phone']
  }

  get email() {
    return this.studentForm.controls['email']
  }


  ngOnInit(): void {
  }

}
