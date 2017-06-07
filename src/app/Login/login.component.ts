import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
userList: any[] = [
 {username:'rmannuru', password:'drsk@328'},
  {username:'sdande', password:'drsk@328'},
];
    user: FormGroup;
  constructor(private fb: FormBuilder,private _router: Router) {};
  validMessage: string;
  viewDiv:boolean;

    ngOnInit() {
        this.user = this.fb.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]      
        });
    };

    onSubmit(login) {
        let matchedUser = this.userList.filter(user => user.username === login.username && user.password == login.password);
        // for(let entry of this.userList){
        //     if(entry.username == login.username && entry.password == login.password){
        //         //console.log('Success');
        //         this._router.navigate(['/account/dashboard']);
        //     }            
        // }
        //console.log('fail');
        if(matchedUser.length > 0) {
            this._router.navigate(['/account/dashboard']);
        }
        else{
            this.viewDiv = true;
             this.validMessage ="Invalid Credentails";
        }
    }
    
}