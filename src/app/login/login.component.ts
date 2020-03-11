import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  })

  constructor(private fb: FormBuilder,private loginService: LoginService,private route:Router) { }

  ngOnInit(): void {}

  onSubmit(){
    this.loginService.validateUser(this.form.value).subscribe((user) =>
      this.route.navigateByUrl('/clientes')
     );
  }

}
