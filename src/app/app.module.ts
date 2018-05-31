import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HtmlEventsComponent } from './html-events/html-events.component';
import { RouterModule, Routes  } from '@angular/router';
import { Ej2EventsComponent } from './ej2-events/ej2-events.component';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { ListViewModule } from '@syncfusion/ej2-ng-lists';
import {DropDownListAllModule} from '@syncfusion/ej2-ng-dropdowns';
const ROUTES: Routes = [
  {path: 'html-events' , component: HtmlEventsComponent },
  {path: 'ej2-events' , component: Ej2EventsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HtmlEventsComponent,
    Ej2EventsComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(ROUTES, {enableTracing: true}),
    ButtonModule, ListViewModule, DropDownListAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
