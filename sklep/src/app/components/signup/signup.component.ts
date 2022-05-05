import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private service:SharedService,
    // private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email:[''],
      pass: [''],
      repass: ['']
    }
    )
  }



  signUp(){
    let x = { Email: this.signupForm.get('email')?.value,
              Pass: this.signupForm.get('pass')?.value}
    console.log(x);

    this.service.register(x).subscribe(res=>{
      if (res != 'Failed to Add'){
        console.log(res)
        this.router.navigate(['../signin'])
      }

      })
}
get email() { return this.signupForm.get('email'); }
get pass() { return this.signupForm.get('pass'); }
get repass() { return this.signupForm.get('repass'); }
}






