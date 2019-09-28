import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  count = 0;

 name: String = '';
  constructor() { }
  
  ngOnInit() {
    this.name = "kunle";
  }

  counter(){
    this.count = this.count + 1;
    this.valueChange.emit({count: this.count});
  }

}
