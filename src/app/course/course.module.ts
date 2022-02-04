import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SearchdataComponent } from './searchdata/searchdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  declarations: [CoursesComponent, SearchdataComponent, LazyComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CourseModule { }
