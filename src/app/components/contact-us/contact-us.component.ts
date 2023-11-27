import { Component } from '@angular/core';
import { ContactUsService } from 'src/app/services/contactus-services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private contactUsService : ContactUsService){} 
  name !: string 
  subject !: string 
  message !: string

 
  sendMessage(){
    this.contactUsService.sendMessage(this.name, this.subject, this.message).subscribe(
      (response)=>{
        console.log('Message sent successfully !! ', response)
        this.name =''
        this.subject = ''
        this.message = ''
      },(err)=>{
        console.error('Error sending message : ', err)
      }
    )
  }

}
