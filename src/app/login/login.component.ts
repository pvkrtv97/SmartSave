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

  signinForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(config: NgbNavConfig){
    config.destroyOnHide = false;
    config.roles = false;
  }
}
