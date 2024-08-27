import { Component } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //FormGroup
  loginForm!: FormGroup;
// สร้างตัวแปร
  submitted = false;
  //ตัวแปรสำหรับผูกกับform
  userlogin ={
    "email":"",
    "password":"",
  }

  constructor(private formbuilder: FormBuilder) {

  }
  ngOnInit(){
    this.loginForm = this.formbuilder.group({
email:['',[Validators.required, Validators.email]],
password:['',[Validators.required, Validators.minLength(8)]],
    })
  }

  //ปุ่มล็อดอิน
  submitlogin(){
    this.submitted = true;
    //ถ้าฟอร์มไม่ถูกต้อง (Invalid)
    if(this.loginForm.invalid){
      return;
    }
    else{
      this.userlogin.email = this.loginForm.value.email
      this.userlogin.password = this.loginForm.value.password
      if(this.userlogin.email=="admin@gmail.com" && this.userlogin.password == "123456789"){
        alert("welcome to hell")
      }
  else
  {
    alert("เข้าสู้ระบบไม่สำเร๊จ")
  }
   }
  }

  //ปุ่มรีเซ้ตฟอร์ม
  resetForm(){
    this.submitted = false,
    this.loginForm.reset();
  }
}
