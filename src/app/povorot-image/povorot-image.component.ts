import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, group, query, stagger} from '@angular/animations';
import {interval} from 'rxjs';
import {repeat, switchMap} from 'rxjs/operators';


export const fade = trigger('fade', [
  state('inactive', style({ opacity: 0 })),
  state('active', style({ opacity: 1 })),
  transition('* <=> *', [
    animate(2000)
  ])
]);

@Component({
  selector: 'app-povorot-image',
  templateUrl: './povorot-image.component.html',
  styleUrls: ['./povorot-image.component.css'],
  animations: [
    trigger('descriptionState', [
      transition('void => *', [
        // 'From' Style
        style({ opacity: 1, transform: 'rotateY(180deg)',
          backgroundColor: 'red'
        }),
        animate('1500ms ease-in')
      ]),
      transition('* => void', [
        animate('1500ms ease-in',
          // 'To' Style
          style({ opacity: 1, transform: 'rotateY(-180deg)',
            backgroundColor: 'yellow'}),
        )
      ])
    ])
  ],
})
export class PovorotImageComponent implements OnInit {

  constructor() { }
  name: string;
  x=false;

//   let i = 0;
// (function repeat(times){
//     if (++i > 5) return;
//     setTimeout(function(){
//       console.log("Iteration: " + i);
//       repeat();
//     }, 5000);
//   })();

  ngOnInit(): void {
    if(this.x=true){
    setTimeout(() => {
        this.name = '<img src="../../assets/mesimages/logoCompany/Otis"/>' ;
        this.x=false;
    }, 1500);
      }else if(this.x=false){
        setTimeout(() => {
          this.name="YYYY";
        this.x=true;
      },1500);
    }
    console.log(this.x);

  }




//   this.changed = 'false';
//
//   setTimeout(() => {
//   this.cd.detach();
//   this.changed = 'true';
// }, 2000);



// const intervalTime = 4*60*1000;
  // interval(intervalTime).pipe(switchMap(() => this.refreshToken(token))).subscribe(()=>{





}
