import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent {
  imageUrl = 'https://www.voicesofyouth.org/sites/voy/files/styles/full_width_image/public/images/2021-01/21431207238_5eb3d94814_b_0.jpg?itok=1yZF-n8I';
  title = 'Copyright Notice';
  companyName = 'EduKonek';
  copyrightText = 'Copyright © EduKonek\nAll rights reserved.';
  termsText = 'None of the materials provided on this web site may be used, reproduced or transmitted, in whole or in part, in any form or by any means, electronic or mechanical, including photocopying, recording or the use of any information storage and retrieval system, except as provided for in the Terms and Conditions of Use of EduKonek Web Sites, without permission in writing from the publisher.';
  newsUsageText = 'News-related material can be used as long as the appropriate credit is given and the EduKonek is advised.';
  permissionRequestText = 'To request such permission or for further enquiries, please visit:';
  permissionsLinkText = 'EduKonek Publications: Rights and Permissions';
}
