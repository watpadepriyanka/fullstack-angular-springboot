import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthentication {



  authenticate(username :string, password: string){

    if(username === 'priya' && password==='123'){

      sessionStorage.setItem('authenticatedUser', username); 
      return true ;
    }
      return false;
      
  }
}
