import { AbstractControl } from "@angular/forms";

export function matchPasswords(group: AbstractControl) {
  return group.get('password')?.value === group.get('confirmPassword')?.value ? null : { 'mismatch': true }
}