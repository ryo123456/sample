import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

export interface Usertip {
  name: string;
}

@Component({
  selector: 'app-user-tip',
  templateUrl: './user-tip.component.html',
  styleUrls: ['./user-tip.component.css']
})
export class UserTipComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  usertips: Usertip[] = [
    {name: 'example'},
  ];


  constructor() {
  }

  ngOnInit() {

  }

  

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.usertips.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(usertip: Usertip): void {
    const index = this.usertips.indexOf(usertip);

    if (index >= 0) {
      this.usertips.splice(index, 1);
    }
  }



}
