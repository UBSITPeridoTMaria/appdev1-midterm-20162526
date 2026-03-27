import { Routes } from '@angular/router';
import { AppComponent } from './app-component/app-component';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { TaskListComponent } from './task-list-component/task-list-component';
import { TaskDetailComponent } from './task-detail-component/task-detail-component';
import { TaskInfoComponent } from './task-info-component/task-info-component';
import { TaskEditComponent } from './task-edit-component/task-edit-component';
import { TaskAddComponent } from './task-add-component/task-add-component';

export const routes: Routes = [{path: 'app', component: AppComponent},
{path: 'navbar', component: NavBarComponent},
{path: 'tasklist', component: TaskListComponent},
{path: 'taskdetail', component: TaskDetailComponent},
{path: 'taskinfo', component: TaskInfoComponent},
{path: 'taskedit', component: TaskEditComponent},
{path: 'taskadd', component: TaskAddComponent},
{path: 't-list', component: TaskListComponent, children: [{ path: ':id/t-detail', component: TaskDetailComponent }]},
{path: 't-list', component: TaskListComponent, children: [{ path: ':id/t-edit', component: TaskEditComponent }]}];