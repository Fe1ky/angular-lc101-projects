import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://neuralink.com/","https://www.undiscoveredclassics.com/","https://www.inputmag.com/s"]
  constructor() { }

  ngOnInit() {
  }

}
