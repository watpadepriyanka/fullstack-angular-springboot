import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Login } from './login/login';
import { Footer } from './footer/footer';
import { Menu } from './menu/menu';
import { HardcodedAuthentication } from './service/hardcoded-authentication';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Login,Footer, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
  message = "Welcome to priyas project "
}
