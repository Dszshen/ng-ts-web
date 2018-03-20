import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.pug',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  disableOther(button) {
    if (button !== 'showLeft') {
      classie.toggle(showLeft, 'disabled');
    }
    if (button !== 'showRight') {
      classie.toggle(showRight, 'disabled');
    }
    if (button !== 'showTop') {
      classie.toggle(showTop, 'disabled');
    }
    if (button !== 'showBottom') {
      classie.toggle(showBottom, 'disabled');
    }
    if (button !== 'showLeftPush') {
      classie.toggle(showLeftPush, 'disabled');
    }
    if (button !== 'showRightPush') {
      classie.toggle(showRightPush, 'disabled');
    }
  }

  /**
   * 左侧菜单显示
   */
  showMenu(button) {
    if (button === 'showLeft') {
      const menuLeft = document.getElementById('cbp-spmenu-s1');
      classie.toggle(menuLeft, 'cbp-spmenu-open');
    }
  }

}
