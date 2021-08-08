import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://pbs.twimg.com/media/E8NGQfKWEAEiOMm.png';
  image3 = 'https://2.bp.blogspot.com/--00gZMQbdvU/UyJ0PFNsVuI/AAAAAAAAAeI/P0ms31K-p1Q/s1600/Peducar+color+back.JPG';

  constructor() { }

  ngOnInit() {
  }

}