import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatainfoService } from './datainfo.service';
import { IndexComponent } from './post/index/index.component';
import { EditComponent } from './post/edit/edit.component';
import { PostModule } from './post/post.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule
  ],
  providers: [DatainfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
