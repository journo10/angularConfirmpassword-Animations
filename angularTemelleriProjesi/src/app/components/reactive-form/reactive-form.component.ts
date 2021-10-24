import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public reactiveForm: FormGroup;
  submitted: boolean = false; //bilgiler girilmeden butonuna tıklayınca valid erroru veriyor onun için.

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        confirmpassword: new FormControl('', [Validators.required]),
        checkbox: new FormControl(''),
        comment: new FormControl(''),
      },
      {
        //Şifre onay
        validators: this.MustMatch('password', 'confirmpassword'),
      }
    );
  }
  //onSubmit
  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
      return;
    }
  }

  //Validation
  get f() {
    return this.reactiveForm.controls;
  }

  //Şifre Onay
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  //Checkbox
  ch(e: any) {
    console.log('Checked tıklandı: ', e.checked);
    if (e.checked) {
      this.reactiveForm.controls['comment'].setValidators([
        Validators.required,
      ]);
      this.reactiveForm.controls['comment'].updateValueAndValidity();
    } else {
      this.reactiveForm.controls['comment'].setValidators(null);
      this.reactiveForm.controls['comment'].updateValueAndValidity();
    }
  }
}
