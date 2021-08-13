import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;


  gutterCheck(width,height){
    if(width > 26000 || width < 0 || height < 0 || height>34000){
      this.color ='orange'
      
    }else {
      this.color= 'blue'
    }
    
  }


  moveRocket(rocketImage, direction){
    if(direction === 'right'){
      const movement = parseInt(rocketImage.style.left)+10+'px';
      rocketImage.style.left= movement;
      this.width= this.width +10000
    }
    if(direction === 'left'){
      const movement = parseInt(rocketImage.style.left)-10+'px';
      rocketImage.style.left= movement;
      this.width= this.width -10000
    }
    if(direction === 'up'){
      const movement = parseInt(rocketImage.style.bottom)+10+'px';
      rocketImage.style.bottom = movement;
      this.width= this.width +10000
    }

    if(direction === 'down'){
      const movement = parseInt(rocketImage.style.bottom)-10+'px';
      rocketImage.style.bottom= movement;
      this.width= this.width -10000
    }

    this.gutterCheck(this.width, this.height);
    
  }

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

 handleLand(rocketImage) {
  let result = window.confirm('Are you sure you wantt to return to earth?');
  if (result) {
     this.color = 'green';
     this.height = 0;
     this.width = 0;
     this.message = 'Shuttle has landed.';
     rocketImage.style.bottom = '0px'
     this.takeOffEnabled = true;
  }
}

handleMissionAbort(rocketImage) {
  let result = window.confirm('Are you sure you want to abort the mission');
  if (result) {
     this.color = 'red';
     this.height = 0;
     this.width = 0;
     this.message = 'Mission Aborted';
     rocketImage.style.bottom = '0px'
     this.takeOffEnabled = true;
  }
}





}
