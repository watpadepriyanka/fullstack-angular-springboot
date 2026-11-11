import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

    username ='';
    password='';
    invalidLogin = false;
    successMesage = 'Login success';
    errorMessage = 'invalid crediantial';
    loginpress = false;


    constructor(
      private router: Router,
      private hardcodedAuthentication :HardcodedAuthentication)
      {}

    HandleLogin(){


      
      this.loginpress = true; 

      if(this.hardcodedAuthentication.authenticate(this.username, this.password))
      {

        //this.router.navigate(['/welcome', state: {username : this.username}]);
        this.router.navigate(['/welcome'], {
        state: { name: this.username }
      });

        
        this.invalidLogin = false;
        console.log(this.successMesage);
      }
      else{
        this.invalidLogin = true;
        console.log(this.errorMessage);
      }
    }

}
