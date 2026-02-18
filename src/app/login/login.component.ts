import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  @ViewChild('loginFormHTMLElement', {
    read : ElementRef,
    static : true,
  }) loginFormHTMLElement: ElementRef;

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const htmlFormElement = this.loginFormHTMLElement.nativeElement;
      let actionUrl = (window as { [key: string]: any })["g_urlLoginAction"] as string;
      actionUrl = actionUrl.replace( /&amp;/g, '&');
      htmlFormElement.action = actionUrl;
      // console.log('g_urlLoginAction: ', actionUrl);
      htmlFormElement.submit();
    }
  }
}
