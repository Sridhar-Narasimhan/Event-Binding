import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-events',
  templateUrl: './html-events.component.html',
  styleUrls: ['./html-events.component.css']
})
export class HtmlEventsComponent implements OnInit {
  public item: string;
  public items: string[];
  constructor() { }

  ngOnInit() {
    this.items = ['Angular Event Binding', 'EJS treeview demo ', 'EJS toolbar demo']
  }

  onClick(event: any) {
    this.items.unshift(this.item);
    this.items = this.items.slice(0);
  }
}
