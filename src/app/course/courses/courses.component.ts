import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course=[
  {'id':1,'name':'learn HTML','desp':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','img':'../../assets/images/html.png'},
  {'id':2,'name':'learn CSS','desp':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','img':'../../assets/images/css.jpg'},
  {'id':3,'name':'learn TypeScript','desp':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','img':'../../assets/images/typeScript.png'},
  {'id':4,'name':'learn NodeJS','desp':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','img':'../../assets/images/nodeJs.png'},
]
}
