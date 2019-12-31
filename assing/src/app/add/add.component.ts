import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  constructor() { }
  post = "";
  parentpost: any[] = [];
  previous_Value: any;
  ngOnInit() { }

  AddPost(post) {
    if (post == "") {
      alert(" Please enter valid value");
    } else {
      this.parentpost.push(post);
      // tslint:disable-next-line: align
        if(localStorage.length>0){
          localStorage.setItem('delpost',JSON.stringify(this.parentpost));
          console.log(this.previous_Value) ;
      }
    }
  }
}
