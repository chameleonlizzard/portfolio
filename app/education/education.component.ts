import {Component} from "@angular/core";
import {EDUCATIONS} from "./data-educations";



@Component({
    selector: "education",
    templateUrl: "./app/education/education.html"
})

export class EducationComponent {
    title = "Mijn opleidingen";
    educations = EDUCATIONS;
}