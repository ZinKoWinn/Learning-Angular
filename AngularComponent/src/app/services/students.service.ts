import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private list: Array<any>

  constructor() {
    this.list = [
      {
        id: 1,
        name: 'Zin Ko Winn',
        phone: '09797256920',
        email: 'zinko.developer@gmail.com',
        address: 'Tanyaung, Salin, Magwe'
      },
      {
        id: 2,
        name: 'Khin Suu Suu Nwe',
        phone: '09797256920',
        email: 'khinsuusuunwe@gmail.com',
        address: 'Taunggyi, Shan'
      }
    ]
  }

  getStudentList() {
    return this.list
  }

  save(student: any) {
    this.list.push(student)
  }
}
