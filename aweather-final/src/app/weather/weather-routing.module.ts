import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';

const weatherRoutes: Routes = [
    {
        path: 'weather',
        component: MainLayoutComponent,
        children: [
            { path: 'search', component: WeatherSearchComponent },
            { path: 'info/:cityName', component: WeatherCardComponent, canActivate: [AuthGuardService] }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(weatherRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class WeatherRoutingModule { }
