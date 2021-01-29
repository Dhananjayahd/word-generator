import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import randomArrayWords from '../utils/random';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  maxRandomWords = 27;

  limitUpdater = (newLimit : number)=>{
    this.limit = newLimit;
  }

  generateWords = ()=>{
    this.words = arrayWords.slice(0,this.limit).join(" ");
  }

  generateRandomWords = ()=>{
    let randomArray = [];
    for(let i=0; i<this.limit; i++){
      let index = Math.floor(Math.random()*(this.maxRandomWords+1));
      randomArray.push(randomArrayWords[index]);
    }
    this.words = randomArray.join(" ");
  }
}
