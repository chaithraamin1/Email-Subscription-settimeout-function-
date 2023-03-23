import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'email-subscription';
  ngOnInit(){
    let msg:any=document.getElementById("msg")
    msg.innerHTML="Thank You For Suscribing!";
    setTimeout(function(){
      msg.innerHTML=""
    },3000)
  }
}
