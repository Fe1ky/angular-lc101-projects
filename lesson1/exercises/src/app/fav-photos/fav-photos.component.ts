import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos!';
  image1 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.theblackvault.com%2Fdocumentarchive%2Fwp-content%2Fuploads%2F2015%2F02%2Flun_03.jpg&f=1&nofb=1';
  image2 = 'https://pbs.twimg.com/media/E8NGQfKWEAEiOMm.png';
  image3 = 'https://2.bp.blogspot.com/--00gZMQbdvU/UyJ0PFNsVuI/AAAAAAAAAeI/P0ms31K-p1Q/s1600/Peducar+color+back.JPG';

  constructor() { }

  ngOnInit() {
  }

}