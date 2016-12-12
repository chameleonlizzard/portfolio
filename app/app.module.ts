import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent}  from './app.component';
import {EducationComponent} from "./education/education.component";

const appRoutes: Routes = [
    {path: 'education', component: EducationComponent},
    {path: '', component: EducationComponent},
    {path: '**', component: EducationComponent}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EducationComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
