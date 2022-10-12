import { FormGroup } from "@angular/forms";
export function matchPasswords(password: string, confirmPassword: string) {
  console.log('here')
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password]
      const confirmPasswordControl = formGroup.controls[confirmPassword]
      
      console.log(passwordControl !== confirmPasswordControl)

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['matchPasswords']) {
        return
      }
      if (passwordControl !== confirmPasswordControl ) {
        return confirmPasswordControl.setErrors({ matchPasswords: true })
      } else {
        return confirmPasswordControl.setErrors(null)
      }
    };
  }