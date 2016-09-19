/**
 * Created by Michael on 27/08/2016.
 */
import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

import {NavigationService, Navigation} from "../shared";

@Component({
    selector: 'home',
    templateUrl: "home.component.html",
    styleUrls: ['home.component.css'],
    providers: [],
})

export class HomeComponent{

    constructor(title:Title, navigationService: NavigationService) {
        title.setTitle("Comic Cloud");
        navigationService.changeMode(Navigation.Disabled);
    }

}