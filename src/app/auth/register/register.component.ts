import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    if(this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      this.authService.register(this.registerForm.value).subscribe((response: any) => console.log(response))
      return this.router.navigate(['/login'])
    } else {
      return undefined
    }
  }

}
