import { AngularFireDatabase } from  'angularfire2/database'; 

import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFire } from 'angular';
// import {MessageToMikeService} from "../services/message-to-mike.service";
import { Component, OnInit } from '@angular/core';

import  { Observable } from  'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


   // Adding variables
   itemName = '';
   itemEmail = '';
   itemFormSelect = '';
   itemTextarea = '';
   items: Observable<any[]>;
   contactForm: FormGroup;

// Setting the database 
   constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
     this.items = db.list('messages').valueChanges()
// Passing in MD_Bootstrap form validation 
     this.contactForm = fb.group({
     contactFormName: ['', Validators.required],
     contactFormEmail: ['', [Validators.required, Validators.email]],
     contactFormSelect: ['', Validators.required],
     contactFormTextarea: ['', Validators.required]
  });
}
// Pushing the contact-form to the firebase data base
    onSubmit()  {
      console.log("HEEEELLLOOO");

    this.db.list('/messages').push({ name: this.itemName, email: this.itemEmail, select: this.itemFormSelect, text: this.itemTextarea});
//Popup message
    alert('Thank you for contacting us, your message has gone through!')
   }
   clearForm() {
    this.contactForm.reset();
   }

   ngOnInit() {

   }
}
// Clearing the form after submit


