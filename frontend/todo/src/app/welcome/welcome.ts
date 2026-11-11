import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})


export class Welcome  implements OnInit
{
   // name = history.state.username ?? '';
      name = '';

    constructor(private router: ActivatedRoute){}

 
      ngOnInit(): void {

        this.name =  history.state.name ?? '';
        
      }

  

}
