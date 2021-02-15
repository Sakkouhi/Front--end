import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Provider} from '../models/provider';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private readonly uri: string;

  constructor(private httpClient: HttpClient) {
    this.uri = 'providers/';
  }

  public addProvider(provider: any): Observable<any> {
    const address = {
      street_address: provider.contacts.address.streetAddress,
      subdivision: provider.contacts.address.subdivision,
      postal_code: provider.contacts.address.postalCode,
      locality: provider.contacts.address.locality,
      country: provider.contacts.address.country
    };
    const contacts = [{
      type: provider.contacts.type,
      address,
      email: provider.contacts.email,
      mobile_phone_number: provider.contacts.mobilePhoneNumber
    }];
    const opening_days_hours = [{
      day_of_week: provider.openingDaysHours.dayOfTheWeek,
      hour_periods: provider.openingDaysHours.hourPeriods
    }];
    if (provider.isAutoAssignable.length === 0) {
      provider.isAutoAssignable = false;
    } else {
      provider.isAutoAssignable = true;
    }
    const p = {
      contacts,
      opening_days_hours,
      services: provider.services,
      is_auto_assignable: provider.isAutoAssignable,
      rating: {ranking: provider.ranking.rating}
    };

    return this
      .httpClient
      .post(`${environment.server_url + this.uri}`, p);
  }

  public deleteProvider(id: string): Observable<any> {
    return this
      .httpClient
      .delete(`${environment.server_url + this.uri + id}`);
  }

  public editProvider(id: string, provider: any): Observable<any> {
    const address = {
      street_address: provider.contacts.address.streetAddress,
      subdivision: provider.contacts.address.subdivison,
      postal_code: provider.contacts.address.postalCode,
      locality: provider.contacts.address.locality,
      country: provider.contacts.address.country
    };
    const contacts = [{
      type: provider.contacts.type,
      address,
      email: provider.contacts.email,
      mobile_phone_number: provider.contacts.mobilePhoneNumber
    }];
    const opening_days_hours = [{
      day_of_week: provider.openingDaysHours.dayOfTheWeek,
      hour_periods: provider.openingDaysHours.hourPeriods
    }];
    const p = {
      contacts,
      opening_days_hours,
      services: provider.services,
      is_auto_assignable: provider.isAutoAssignable,
      rating: {ranking: provider.ranking.rating}
    };
    console.log(p);
    return this
      .httpClient
      .put(`${environment.server_url + this.uri + id}`, p);
  }

  public getProviderById(id: string): Observable<any> {
    return this
      .httpClient
      .get(`${environment.server_url + this.uri + id}`);
  }
}
