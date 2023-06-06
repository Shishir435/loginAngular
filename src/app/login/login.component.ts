import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
 removeClassFromComponent() {
  document.getElementById('container')?.classList.remove('right-panel-active');
 }  
 addClassFromComponent(){
  document.getElementById('container')?.classList.add('right-panel-active');
 }
}
