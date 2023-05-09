import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbNavConfig]
})
export class LoginComponent {
  title = 'SmartSave';
  welcome = 'Welcome Back';
  welcome_paragraph = 'Welcome Back, Please enter Your details';
  description = 'Join the millions of smart investors who trust us to manage their finances. Login to access your personalized dashboard, track your portfolio performance, and make informed investment decisions.'

  signinForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(config: NgbNavConfig){
    config.destroyOnHide = false;
    config.roles = false;
  }
}
