import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LazyComponent } from './lazy/lazy.component';
import { SearchdataComponent } from './searchdata/searchdata.component';

const routes: Routes = [
  {
    path: '', component: CoursesComponent
  },
  {
    path: 'course', component: CoursesComponent
  },
  {
    path: 'lazy', component: LazyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
