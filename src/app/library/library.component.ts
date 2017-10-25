import { Component, OnInit } from '@angular/core';
import { NavService } from '../core/nav/shared/nav.service';
import { NavState } from '../core/nav/shared/nav-state.enum';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private navService: NavService, private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Comic Cloud - Library' );
    this.navService.navState = NavState.Authorised;
  }

}
