import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const icons = { ...fas, ...far, ...fab };

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})

export class IconComponent {
  count: number = 0;
  iconValue: any;
  iconsToShow: any[] = [];
  isProcessingClick: boolean = false;

  showRandomIcon() {
    this.count++;
    this.iconsToShow.push(this.getRandomIcon());
    if (!this.isProcessingClick) {
      this.processIcons();
    }
  }

  processIcons() {
    if (this.iconsToShow.length > 0) {
      this.isProcessingClick = true;
      const icon = this.iconsToShow.shift();
      setTimeout(() => {
        this.iconValue = icon;
        this.isProcessingClick = false;
        this.count--;
        this.processIcons();
      }, 3000)
    }
  }

  getRandomIcon() {
    const iconNames = Object.keys(icons);
    let randomNum = Math.floor(Math.random() * iconNames.length);
    const randomIconKey = iconNames[randomNum];
    return icons[randomIconKey];
  }
}
