import { FormGroup } from "@angular/forms";

export function matchPasswords(form: FormGroup) {
  return form.controls['password'].value === form.controls['confirmPassword'].value ? null : {'mismatch': true};
}