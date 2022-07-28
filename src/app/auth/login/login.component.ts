import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/model/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.watchFormControl();
  }

  watchFormControl() {
    this.loginForm.controls['email'].valueChanges.subscribe(value => this.logValue(value));
    this.loginForm.controls['password'].valueChanges.subscribe(value => this.logValue(value));
  }

  validatorForm(value: string) {
    
  }
  
  onLogin() {
    this.authService.login(this.loginForm.value).subscribe((user: any) => console.log(user))
  }

  logValue(value: string) {
    console.log(value)
  }

}
