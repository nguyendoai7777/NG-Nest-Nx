import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

function validateLength(c: AbstractControl) {
  return c.value.length !== 10 ? {
    isInvalidLength: true
  } : null;
}

@Component({
  selector: 'ns-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  registerForm: FormGroup;
  check1null = true;
  check2null = true;
  submitted = false;
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      mobile: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
