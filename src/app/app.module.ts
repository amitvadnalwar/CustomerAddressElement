import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injector } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from "@angular/elements";

// form modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
 // bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injectr: Injector) {}
   
 // constructor(private injector: Injector) {    
    //The customElements is used for defining a custom element globaly.
  //  const customElement = createCustomElement(AppComponent, { injector });
    //Defining a new element
  // customElements.define('address-comp', customElement);
  //}
  
 //ngDoBootstrap() {
 // }

  ngDoBootstrap() {
   const adrel = createCustomElement(AppComponent, { injector: this.injectr });
    customElements.define('address-comp', adrel);
   }
 }
