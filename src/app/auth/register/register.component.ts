import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { matchPasswords } from 'src/app/shared/validators/match-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: any;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
  this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    }, {  validator: matchPasswords  })
   }

  ngOnInit(): void {
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  onRegister() {
    const password = this.registerForm.value.password
    const confirmPassword = this.registerForm.value.confirmPassword;
    const mismatchError = this.registerForm.mismatchError
    console.log(this.registerForm)
    // delete this.registerForm.value.confirmPassword
    this.authService.register(this.registerForm.value).subscribe((response: any) => console.log(response))
    
    if(mismatchError) {
      return undefined
    } else {
      return this.router.navigate(['/auth/login'])
    }
  }

}
