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

  registerForm: FormGroup = this.fb.group({
    email: ["", { validators: [Validators.required, Validators.email]}],
    password: ['', { validators: [Validators.required] }],
    confirmPassword: ["", { validators: [Validators.required] }]
  })

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

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
    console.log(this.registerForm)
    delete this.registerForm.value.confirmPassword
    this.registerForm.reset()
    // this.authService.register(this.registerForm.value).subscribe((response: any) => console.log(response))
    
    // if(isMatched) {
    //   return this.router.navigate(['/auth/login'])
    // } else {
    //   return undefined
    // }
  }

}
