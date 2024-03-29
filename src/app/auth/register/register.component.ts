import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { matchPasswords } from 'src/app/shared/validators/match-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  mismatchError: boolean = false;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
  this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {  validators: matchPasswords  })
   }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(err => console.log(err))
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
    this.mismatchError = !this.registerForm?.hasError('mismatch');
    delete this.registerForm.value.confirmPassword
    this.authService.register(this.registerForm.value).subscribe((response: any) => console.log(response))
    return this.router.navigate(['/auth/login'])
  }

}
