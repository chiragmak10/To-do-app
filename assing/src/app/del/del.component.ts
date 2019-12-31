import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']

})
export class DelComponent implements OnInit {
  @Input() delPost: any[] = [];
  val: any [] = [];
  pend_task:any;
  constructor() { }
  ngOnInit() {
    //this.pend_task = JSON.parse(window.localStorage.getItem('delpost'));
  }
  removeitem = function(index, p) {
    this.val.push(p);
    this.delPost.splice(index, 1);
    localStorage.setItem('names', JSON.stringify(this.val));

  };

}
