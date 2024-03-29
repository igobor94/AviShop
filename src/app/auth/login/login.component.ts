import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  currentUser = {}
  emptyForm: boolean = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.watchFormControl();
    
  }

  watchFormControl() {
    this.loginForm.controls['email'].valueChanges.subscribe(value => this.logValue(value));
    this.loginForm.controls['password'].valueChanges.subscribe(value => this.logValue(value));
    this.loginForm.statusChanges.subscribe(value => this.validatorForm(value))
  }

  validatorForm(value: string) {
    if(value === 'VALID') {
      return this.emptyForm = false;
    } else {
      return this.emptyForm = true;
    }
  }
  
  onLogin() {
    this.authService.login(this.loginForm.value)
    this.router.navigate(['/home'])
  }

  getUserFromLogin(id: number) {
    console.log('xxx')
  }

  getToken() {
    return localStorage.getItem('access_token')
  }

  logValue(value: string) {
    console.log(value)
  }

}
