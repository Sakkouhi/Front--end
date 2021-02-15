import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-provider-add',
  templateUrl: './provider-add.component.html',
  styleUrls: ['./provider-add.component.css']
})
export class ProviderAddComponent implements OnInit {
  public providerForm: FormGroup;

  constructor(private providerService: ProviderService, private formBuilder: FormBuilder) {
    this.providerForm = this.formBuilder.group({
      contacts: this.formBuilder.group({
        type: ['', Validators.maxLength(100)],
        address: this.formBuilder.group({
          streetAddress: ['', Validators.maxLength(1024)],
          subdivision: ['', Validators.maxLength(50)],
          postalCode: ['', Validators.maxLength(20)],
          locality: ['', Validators.maxLength(50)],
          country: ['', Validators.compose([Validators.maxLength(2), Validators.minLength(2)])]
        }),
        email: ['', Validators.email],
        mobilePhoneNumber: ['', Validators.maxLength(20)]
      }),
      openingDaysHours: this.formBuilder.group({
        dayOfTheWeek: ['', Validators.required],
        hourPeriods: ['', Validators.required]
      }),
      services: [''],
      isAutoAssignable: [''],
      ranking: this.formBuilder.group({
        rating: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.providerForm.valid) {
      this
        .providerService
        .addProvider(this.providerForm.value)
        .subscribe(console.log);
    }
  }
}
