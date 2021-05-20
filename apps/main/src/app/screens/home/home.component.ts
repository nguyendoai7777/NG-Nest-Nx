import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      phone: ['']
    });
  }

}
