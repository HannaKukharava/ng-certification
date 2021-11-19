import { Location } from "./location.model";

export interface Weather extends Location{
    temperature: number,
    minTemperature: number,
    maxTemperature: number,
    timestamp: string;
    conditions: string
}

export interface Forecast extends Location {
    forecast: Weather[]
}
