import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.css'
})
export class CopyrightComponent {
  title = 'Copyright Notice';

  sectionContent: string[] = [
    `Copyright © <strong class="text-primary">EduKonek</strong><br>All rights reserved.`,
    `None of the materials provided on this web site may be used, reproduced or transmitted, in whole or in part, in any form or by any means, electronic or mechanical, including photocopying, recording or the use of any information storage and retrieval system, except as provided for in the <strong class="text-danger">Terms and Conditions of Use</strong> of <strong class="text-primary">EduKonek Web Sites</strong>, without permission in writing from the publisher.`,
    `News-related material can be used as long as the appropriate credit is given and the <strong class="text-primary">EduKonek</strong> is advised.`,
    `To request such permission or for further enquiries, please visit: <strong class="text-warning">EduKonek Publications: Rights and Permissions</strong>.`
  ];
}
