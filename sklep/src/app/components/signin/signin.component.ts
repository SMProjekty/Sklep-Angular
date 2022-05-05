import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   public signinForm !: FormGroup;


  constructor(private formBuilder : FormBuilder,
    private service:SharedService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email:[''],
      pass: ['']
    })
  }

  signIn(){
    let x = { Email: this.signinForm.get('email')?.value,
              Pass: this.signinForm.get('pass')?.value}

    this.service.login(x).subscribe(res=>{
      if (res != 'Failed to Add'){
        this.service.setUserId(res);
        this.router.navigate(['../userpanel'])
      }
      else {
        console.log('login error')
        this.signinForm.reset()
      }

      })
}

}
