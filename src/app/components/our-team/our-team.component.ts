import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {
  team1: any=
    {
      teamName: 'Nipun',
      teamProfile:'CTO/Co-founder',
      teamImage:'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png',
      facebook:'https://www.facebook.com/srijan.lal',
      instagram:'https://www.facebook.com/srijan.lal',
      linkedin:'https://www.facebook.com/srijan.lal',
      twitter:'https://www.facebook.com/srijan.lal'
    }
   team2 : any = {
      teamName: 'Sristhi',
      teamProfile:'Graphics Designer',
      teamImage:'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png',
      facebook:'https://www.facebook.com/srijan.lal',
      instagram:'https://www.facebook.com/srijan.lal',
      linkedin:'https://www.facebook.com/srijan.lal',
      twitter:'https://www.facebook.com/srijan.lal'
    }

    team3 : any = {
      teamName: 'Srijan',
      teamProfile:'Software Developer',
      teamImage:'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
      facebook:'https://www.facebook.com/srijan.lal',
      instagram:'https://www.facebook.com/srijan.lal',
      linkedin:'https://www.facebook.com/srijan.lal',
      twitter:'https://www.facebook.com/srijan.lal'
    }
  
}
