import {Injectable} from "@angular/core";

import {Education} from "./education";
import {EDUCATIONS} from "./data-educations";

@Injectable()
export class EducationService {
    getEducations(): Education[] {
        return EDUCATIONS;
    }
}