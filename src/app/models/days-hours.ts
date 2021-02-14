import {DayOfTheWeek} from './day-of-the-week';

export class DaysHours {

  constructor(
    public dayOfTheWeek: DayOfTheWeek,
    public hourPeriods: string[],
    public id?: string
  ) {
  }
}
