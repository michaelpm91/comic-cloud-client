/**
 * Created by Michael on 08/05/2016.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {OnActivate, Router, RouteSegment} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {Comic} from "./../comic/comic.model";
import {SeriesService} from "./series.service";
import {Series} from "./series.model";
import {StackComponent} from "../shared/stack/stack.component";
import {NavigationService} from "../shared/navigation/navigation.service";
import {NavigationType} from "../shared/navigation/navigation.type";

@Component({
    selector: 'library',
    host: { 'class' : "shelf" },
    templateUrl: "/app/series/series.component.html",
    providers: [Title, HTTP_PROVIDERS, SeriesService],
    directives: [StackComponent]
})

export class SeriesComponent implements OnActivate{
    currentSeries: Series;
    comics: Comic[];
    title: Title;


    constructor(private _seriesService: SeriesService, title:Title, navigationService: NavigationService) {
        this.title = title;
        navigationService.changeMode(NavigationType.Library);
    }

    routerOnActivate(curr: RouteSegment): void {
        var series_id = curr.getParam('id');
        this.currentSeries = this.getSeries(series_id);
        this.title.setTitle("Comic Cloud - " + this.currentSeries.title + " (" + this.currentSeries.start_year + ")");
        this.comics = this.getComics(series_id);
    }

    getComics(series_id: string){
        console.log("series_id " + series_id);
        console.log("comic call");
        return [
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
            new Comic("905B5C64-1560-11E6-A89C-564E36676F51", 1, null,["http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg"], "8C3D3E48-155D-11E6-8248-564E36676F51", "1", "complete"),
        ];
    }

    getSeries(series_id: string){
        return new Series(series_id, "Spider-Man", 2014, "Marvel", "1", "http://cdn1-www.superherohype.com/assets/uploads/2014/01/file_181109_0_amazingspidey1.jpg");
    }

}