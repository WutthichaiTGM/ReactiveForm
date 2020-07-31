import { Component, OnInit } from '@angular/core';
// เรียกใช้งาน FormBuilder และ FormGroup
import { FormGroup, FormBuilder } from '@angular/forms';
/*
FormGroup import มาเพื่อเก็บข้อมูลของฟอร์มในรูปแบบกลุ่ม
FormBuilder import มาเพื่อที่จะใช้งาน Group เพื่อจะgroupข้อมูลภายในฟอร์ม
*/
@Component({
  selector: 'app-formtitle',
  templateUrl: './formtitle.component.html',
  styleUrls: ['./formtitle.component.css']
})
export class FormtitleComponent implements OnInit {
 // สร้างตัวแปรมาชื่อว่า myForm โดยเก็บเป็นรูปแบบ FormGroup 
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // เรียกใช้ myForm โดยจะเก็บข้อมูลของ email , password
    this.myForm = this.fb.group({
      email: '',
      password: '',
    });
  }
}