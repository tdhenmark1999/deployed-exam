import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'exam1';
  constructor( ) { }
  form:any
  save() {
    alert("save")
  }
}
