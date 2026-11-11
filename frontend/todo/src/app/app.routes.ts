import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Error } from './error/error';
import { ListTodo } from './list-todo/list-todo';


export const routes: Routes = [
    {path: '', component: Login },
    {path: 'welcome' , component: Welcome},
    {path: 'login', component: Login},
    {path: 'todo' , component: ListTodo },
    {path: '**', component: Error}
];
