import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Title } from '@angular/platform-browser';
import { Series } from '../shared/series/series.model';
import { Comic } from '../shared/comics/comic.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  library: Series[];
  featuredComics: Comic[];

  constructor(private navService: NavService, private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Comic Cloud - Library' );
    this.navService.navState = NavState.Authorised;
    this.library = this.getSeries();
    this.featuredComics = this.getFeaturedComics();
  }

  private getSeries(): Series[] {
    const testSeries = new Series();
    const testSeries2 = new Series();
    testSeries.id = '1';
    testSeries.image = 'http://cdn2-www.superherohype.com/assets/uploads/gallery/' +
      'the-15-best-superhero-comic-book-covers/x-men_vol_1_141.jpg';

    testSeries2.id = '2';
    testSeries2.image = 'http://static1.gamespot.com/uploads/original/1562/15626911/2991050-4996630-04-variant.jpg';

    return [
      testSeries,
      testSeries2,
      testSeries,
      testSeries2,
      testSeries,
      testSeries2,
      testSeries,
      testSeries2,
    ];

  }

  private getFeaturedComics(featuredType?: String): Comic[] {

    const testComic = new Comic();
    const testComic2 = new Comic();
    testComic.id = '1';
    testComic.image = 'http://cdn2-www.superherohype.com/assets/uploads/gallery/' +
      'the-15-best-superhero-comic-book-covers/x-men_vol_1_141.jpg';

    testComic2.id = '2';
    testComic2.image = 'http://static1.gamespot.com/uploads/original/1562/15626911/2991050-4996630-04-variant.jpg';

    return [
      testComic,
      testComic2,
      testComic,
      testComic2
    ];

  }

}
