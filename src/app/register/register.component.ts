import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppValidator } from '../validator/app-validator';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    username: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.email, Validators.required]),
    cpf: this.fb.control('', AppValidator.cpfValidator),
    password: this.fb.control('', Validators.required)
  })

  constructor(private fb: FormBuilder, private registerService: RegisterService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.registerService.addRegister(this.form.value).subscribe(console.log);
    this.route.navigate(['login']);
  }
}
