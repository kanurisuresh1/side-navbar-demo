import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchdataComponent } from '../course/searchdata/searchdata.component';
import { CurdOprationComponent } from './curd-opration/curd-opration.component';
import { DropdownsearchComponent } from './dropdownsearch/dropdownsearch.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavBarComponent,
    children: [
      {
        path: 'home', component: HomepageComponent
      },
      {
        path: 'table', component: TableComponent
      },
      {
        path: 'searchData', component: SearchdataComponent
      },
      {
        path: 'dropdownsearch', component: DropdownsearchComponent
      },
      {
        path: 'reactiveform', component: ReactiveFormValidationComponent
      },
      {
        path: 'curdopration', component: CurdOprationComponent
      },
      {
        path: 'course',
        loadChildren: () => import('../course/course.module')
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
