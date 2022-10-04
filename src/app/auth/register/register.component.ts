import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    email: ["", { validators: [Validators.required, Validators.email]}],
    password: ['', { validators: [Validators.required] }],
    confirmPassword: ["", { validators: [Validators.required] }]
  })

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onRegister() {
    const password = this.registerForm.value.password
    const confirmPassword = this.registerForm.value.confirmPassword;
    const isMatched = this.authService.matchPasswords(password, confirmPassword)
    delete this.registerForm.value.confirmPassword
    this.authService.register(this.registerForm.value).subscribe((response: any) => console.log(response))
    
    if(isMatched) {
      return this.router.navigate(['/auth/login'])
    } else {
      return undefined
    }
  }

}
