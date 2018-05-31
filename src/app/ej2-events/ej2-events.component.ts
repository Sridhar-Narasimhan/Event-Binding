import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChangeEventArgs  as DropdownChangeEventArgs} from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-ej2-events',
  templateUrl: './ej2-events.component.html',
  styleUrls: ['./ej2-events.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Ej2EventsComponent implements OnInit {

  public item: string;
  public items: string[];
  public sportsData: Object[] = [
    { Id: 'Item1', Game: 'Angular Event Binding' },
    { Id: 'Item2', Game: 'EJS treeview demo' },
    { Id: 'Item3', Game: 'EJS toolbar demo' },
];
public fields: Object = { text: 'Game', value: 'Id' };
  constructor() { }

  ngOnInit() {
    this.items = ['Angular Event Binding', 'EJS treeview demo ', 'EJS toolbar demo']
  }

  onClick(event: any) {
    this.items.unshift(this.item);
    this.items = this.items.slice(0);
  }

  onChange(event: DropdownChangeEventArgs)  {

    
    console.log(event.value);
  }

  }

