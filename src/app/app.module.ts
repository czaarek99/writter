import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPencilAlt, faUser, faUserEdit, faBook, faClock} from '@fortawesome/free-solid-svg-icons';
import {BlogPostComponent} from './blog-post/blog-post.component';

library.add(faPencilAlt);
library.add(faUser);
library.add(faUserEdit);
library.add(faBook);
library.add(faClock);

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        BlogPostComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
