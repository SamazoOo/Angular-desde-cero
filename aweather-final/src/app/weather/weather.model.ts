import { Forescast } from './forescast.model';

export class Weather {
    city: string;
    date: string;
    temperature: number;
    info: string;
    windspeed: number;
    winddirection: number;
    humidity: number;
    pressure: number;
    maxtemperature: number;
    mintemperature: number;
    sunrise: string;
    sunset: string;
    forecasts: Array<Forescast>;

    get percentToSunset(): number {
        if (this.sunrise === undefined) {
            return 0;
        }

        const sunriseHours = this.sunrise.replace(' am', '').split(':');
        const sunsetHours = this.sunset.replace(' pm', '').split(':');
        let percentToSunset = 0;
        const today = new Date();

        const sunriseDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
            Number(sunriseHours[0]), Number(sunriseHours[1]), 0);

        const sunsetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(),
            Number(sunsetHours[0]) + 12, Number(sunsetHours[1]), 0);

        const minutesSunAllDay = Math.abs(sunsetDate.getTime() - sunriseDate.getTime());
        const minutesToSunset = today.getTime() - sunsetDate.getTime();

        if (minutesToSunset > 0) {
            return percentToSunset;
        }

        percentToSunset = 50 - ((Math.abs(minutesToSunset) * 50) / minutesSunAllDay);
        return Math.round(percentToSunset);
    }

    get hourMessure(): string {
        if (this.date === undefined) {
            return '';
        }
        const dateMeassure = new Date(this.date.split(', ')[1].substring(0, this.date.split(', ')[1].lastIndexOf(' ')));
        return `${dateMeassure.getHours().toString().padStart(2, '0')}:${dateMeassure.getMinutes().toString().padStart(2, '0')} ${dateMeassure.getHours() > 14 ? 'pm' : 'am'}`;
    }

    constructor() { }
}
