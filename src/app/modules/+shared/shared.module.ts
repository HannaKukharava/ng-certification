import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WeatherImagePipe} from "./pipes/weather-image.pipe";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        // angular material
        MatToolbarModule,
        MatChipsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        // forms
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [WeatherImagePipe],
    exports: [
        WeatherImagePipe,

        //modules
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatChipsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [DatePipe]
})
export class SharedModule {
}
