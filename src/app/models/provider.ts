import {Contact} from './contact';
import {DaysHours} from './days-hours';
import {Rating} from './rating';

export class Provider {

  constructor(
    public contacts: Contact[],
    public openingDaysHours: DaysHours[],
    public services: string,
    public isAutoAssignable: boolean,
    public rating: Rating,
  ) {
  }
}
