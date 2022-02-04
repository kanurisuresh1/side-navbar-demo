import { Routes } from'@angular/router';

export const BackEnd_Routes : Routes = [
// {
//     path: 'home' , loadChildren: () => import('../home/home.module')
//     .then(m => m.HomeModule)
// },
{
    path: 'course' , loadChildren: () => import('../course/course.module')
    .then(m => m.CourseModule)
}
]