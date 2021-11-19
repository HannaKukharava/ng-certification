import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {ActionReducer, MetaReducer, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CoreModuleState, reducers} from "./store/reducers";
import {effects} from "./store/effects";
import {HttpClientModule} from "@angular/common/http";
import {localStorageSync} from "ngrx-store-localstorage";


export const STORE_CONFIG = {
    runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
    }
};

function localStorageSyncReducer(reducer: ActionReducer<CoreModuleState>): ActionReducer<CoreModuleState> {
    return localStorageSync({
        keys: [
            {
                weather: ['weather']
            }
        ],
        rehydrate: true
    })(reducer);
}


const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {...STORE_CONFIG, metaReducers}),
        EffectsModule.forRoot(effects)],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
