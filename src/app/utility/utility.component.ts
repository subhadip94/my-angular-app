import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})

export class UtilityComponent {
  str: string = '';
  upperStr: string = '';
  stringArray: string[] = [];
  upperStringArray: string[] = [];

  capital_letter(value: string) {
    this.stringArray = value.trim().split(" ");
    for (var i = 0, x = this.stringArray.length; i < x; i++) {
      this.stringArray[i] = this.stringArray[i][0].toUpperCase() + this.stringArray[i].substr(1);
    }
    this.str = this.stringArray.join(' ');

    this.upperStringArray = this.stringArray;
    for (var i = 0, x = this.upperStringArray.length; i < x; i++) {
      this.upperStringArray[i] = this.upperStringArray[i].toUpperCase();
    }
    this.upperStr = this.upperStringArray.join(' ');
  }
}


