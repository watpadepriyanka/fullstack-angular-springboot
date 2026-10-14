import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome  implements OnInit
{

  message = "Welcome---- "
  ngOnInit(): void {
    
  }
}
