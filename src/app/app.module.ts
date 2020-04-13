import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { RecommendedVideosComponent } from './components/home-page/recommended-videos/recommended-videos.component';
import { PopularChannelsComponent } from './components/home-page/popular-channels/popular-channels.component';
import { YoutubeMixesComponent } from './components/home-page/youtube-mixes/youtube-mixes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    RecommendedVideosComponent,
    PopularChannelsComponent,
    YoutubeMixesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
