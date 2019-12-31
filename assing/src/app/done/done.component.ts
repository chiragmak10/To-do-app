import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  @Input() value: any ;
  KeyName: any;
constructor() {
  }
ngOnInit() {
       //this.KeyName = JSON.parse(window.localStorage.getItem('names'));
  }
}
