import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/config/login/account.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
 public form: FormGroup;
  

  constructor(private fb:FormBuilder, private _accouunt:AccountService , private router:Router ) {
    this.form=this.fb.group({
      email: ['',[Validators.required]], 
      password: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  fields(name: string) {
		return this.form.get(name)

	}


  onLogin(){
    if(this.form.valid){
 this._accouunt.postLogin(this.form.value).subscribe(suc=>{
 localStorage.setItem('token',suc.token);
 this.router.navigateByUrl('dashboard')
},
(err)=>{
  alert('Sorry email id or Password wrong')


})

         this.form.reset()
    }
    else{
      this.form.markAllAsTouched();
      this.form.markAsTouched()

    }

    
  }

  errorMessages = {
    email: [
      { type: "required", message: "Email is required" }

    ],
    password: [
      { type: "required", message: "Password is required" }

    ],

  }


}
