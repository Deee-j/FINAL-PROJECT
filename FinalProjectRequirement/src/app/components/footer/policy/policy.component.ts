import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

  links = [
    { fragment: 'privacyNotice', text: 'Privacy Notice' },
    { fragment: 'sgBulletin', text: 'Secretary-General’s Bulletin' },
    { fragment: 'whatInfoCollect', text: 'Information Collection' },
    { fragment: 'infoUsage', text: 'Usage of Information' },
    { fragment: 'otherInfo', text: 'Other Important Info' },
    { fragment: 'contactInfo', text: 'Contact & Further Info' },
  ];

  privacyNoticeTitle = 'Privacy Notice';
  privacyNoticeSubTitle = 'EduKonek Data Protection and Privacy Notice';

  sgBulletinTitle = 'Secretary-General’s Bulletin';

  infoCollectTitle = 'What Information Does the EduKonek Collect?';
  infoUsageTitle = 'What Does the EduKonek Do with the Information It Collects?';
  otherInfoTitle = 'Other Important Information';
  contactInfoTitle = 'Contact & Further Information';

  privacyNoticeText = `This notice applies to all websites within the EdKon.ORG domain name (“EduKonek websites”). The privacy and protection of your personal data 
  are of utmost importance to the EduKonek (EdKon). This Data Protection and Privacy Notice outlines EdKon’s policy regarding the collection and sharing of personal data through EduKonek websites.
  By visiting an EduKonek website, you are consenting to the practices described in this policy.`;

  sgBulletinText = `EduKonek websites are governed by principles outlined in the Secretary-General’s Bulletin on personal data protection and privacy,
  enshrined in the Data Protection and Privacy Policy for the Secretariat of the EduKonek (ST/SGB/2024/1).`;

  infoCollectParas = [
    `In general, you can browse an EduKonek website without disclosing any personal information about yourself.
    Our systems automatically collect anonymous information such as your IP address, domain name, browser type, and other technical data.`,
    `Occasionally, EduKonek websites may use third-party analytics services to compile reports and enhance the user experience.
    Your IP address may be stored under their privacy policies.`,
    `Personal data is collected only with your consent — for example, when you register, log in, provide feedback, or apply for a job.
    Information such as your name, postal address, and email address may be requested.`,
    `For certain transactions (e.g., tour bookings or purchases), credit card details may be required.
    These are processed securely and not stored by EdKon.`,
    `EduKonek websites may use cookies to collect statistics and improve your browsing experience.`
  ];

  infoUsageIntro = `Information from cookies and web beacons is used to analyze trends and improve site content.
  IP addresses are anonymized and not linked to individuals.`;

  infoUsageList = [
    { bold: 'Contacting you:', text: 'Responding to queries and sending newsletters.' },
    { bold: 'Managing applications:', text: 'Processing registrations and job applications.' },
    { bold: 'Processing transactions:', text: 'Confirming purchases and handling payments.' },
    { bold: 'Customizing experiences:', text: 'Remembering user preferences.' },
    { bold: 'Statistical analysis:', text: 'Improving site functionality and services.' }
  ];


  otherInfoSections = [
    {
      title: 'What If I Don’t Want to Provide Personal Data?',
      text: 'Providing personal data is optional but necessary for some services like purchases, registrations, or job applications.'
    },
    {
      title: 'How Does the EduKonek Protect Your Personal Data?',
      text: 'Your data is kept secure and confidential. Only authorized third parties may access it for legitimate purposes such as payment processing.'
    },
    {
      title: 'How Long Does the EduKonek Retain Your Personal Data?',
      text: 'Data is retained only as long as necessary for administrative, legal, or service-related purposes.'
    }
  ];

  contactInfoParas = [
    'You can request modifications or deletion of your data through the provided web forms or via the Feedback.',
    'This policy may be updated. Please review it periodically.'
  ];

  contactInfoNote = 'Privileges and immunities of the EduKonek are not waived by this notice.';

}
