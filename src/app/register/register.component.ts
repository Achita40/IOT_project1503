import { Component } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
//registergroup
registerform!: FormGroup;
submitted = false;
userregister ={
  "email":"",
  "username":"",
  "password":"",
}
constructor(private formbuilder: FormBuilder) {

}
ngOnInit(){
  this.registerform = this.formbuilder.group({
email:['',[Validators.required, Validators.email]],
username:['',[Validators.required, Validators.minLength(12)]],
password:['',[Validators.required, Validators.minLength(8)]],
  })
}
submitregister(){
  this.submitted = true;
  //ถ้าฟอร์มไม่ถูกต้อง (Invalid)
  if(this.registerform.invalid){
    return;
  }
}

 //ปุ่มรีเซ้ตฟอร์ม
 resetForm(){
  this.submitted = false,
  this.registerform.reset();
}
}
