import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavBarComponent,
    children: [
      {
        path: '', component: HomepageComponent
      },
      {
        path: 'home', component: HomepageComponent
      },
      {
        path: 'table', component: TableComponent
      },
      {
        path: 'course',
        loadChildren: () => import('../../app/course/course.module')
          .then(m => m.CourseModule)
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
