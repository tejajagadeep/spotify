import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';
import { FavoriteListComponent as FavoriteListComponent } from './favorite-list/favorite-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodayTopHitsPlaylistComponent } from './spotify/today-top-hits-playlist/today-top-hits-playlist.component';
import { BillBoard100PlaylistComponent } from './spotify/bill-board100-playlist/bill-board100-playlist.component';
import { MillisecondsToMinutesPipe } from './app-parsers/pipe-calculate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateFormatPipe } from './app-parsers/pipe-date';
import { RemoveTimePipe } from './app-parsers/pipe-remove';
import { DiscoverWeeklyPlaylistComponent } from './spotify/discover-weekly-playlist/discover-weekly-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteListComponent,
    HomeComponent,
    LoginComponent,
    TodayTopHitsPlaylistComponent,
    BillBoard100PlaylistComponent,
    MillisecondsToMinutesPipe,
    DateFormatPipe,
    RemoveTimePipe,
    DiscoverWeeklyPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [{

    provide: HTTP_INTERCEPTORS,
  
    useClass: HttpInterceptorBasicAuthService,
  
    multi: true
  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
