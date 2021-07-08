import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent implements OnInit {

  list:Array<any> = []

  constructor(service: StudentsService) {
    this.list = service.getStudentList()
    console.log('Constructor is working.')
  }

  ngOnInit() {
    console.log('OnInit function is working.')
  }

}
