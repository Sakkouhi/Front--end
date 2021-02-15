import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-provider-edit',
  templateUrl: './provider-edit.component.html',
  styleUrls: ['./provider-edit.component.css']
})
export class ProviderEditComponent implements OnInit {
  public providerForm: FormGroup;
  private providerId: string;

  constructor(
    private providerService: ProviderService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.providerId = '';
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
    this.activatedRoute.params.subscribe(params => {
      this.providerId = params['id'];
      this
        .providerService
        .getProviderById(this.providerId)
        .subscribe((response) => {
          console.log(response);
          this.providerForm.setValue({
            contacts: {
              type: response.contacts[0].type,
              address: {
                streetAddress: response.contacts[0].address.street_address,
                subdivision: response.contacts[0].address.subdivision,
                postalCode: response.contacts[0].address.postal_code,
                locality: response.contacts[0].address.locality,
                country: response.contacts[0].address.country
              },
              email: response.contacts[0].email,
              mobilePhoneNumber: response.contacts[0].mobile_phone_number
            },
            openingDaysHours: {
              dayOfTheWeek: response.opening_days_hours[0].day_of_week,
              hourPeriods: response.opening_days_hours[0].hour_periods[0]
            },
            services: response.services,
            isAutoAssignable: response.is_auto_assignable,
            ranking: {
              rating: response.rating.ranking
            }
          });
        });
    });
  }

  public submit(): void {
    if (this.providerForm.valid) {
      this
        .providerService
        .editProvider(this.providerId, this.providerForm.value)
        .subscribe(console.log);
    }
  }

}
