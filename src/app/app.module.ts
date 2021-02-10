import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyNavComponent } from './my-nav/my-nav.component';
import {TarjetasComponent} from './tarjetas/tarjetas.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
<<<<<<< HEAD
<<<<<<< HEAD
import {MenuComponent} from './menu/menu.component';
=======
import {AcordionComponent} from './acordion/acordion.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { MycardsComponent } from './mycards/mycards.component';
import { MymenuComponent } from './mymenu/mymenu.component';

>>>>>>> 6520f5eb8f58cac93a829d54a8a9839a08da1962
=======

>>>>>>> parent of 5568d0a (footer)


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
<<<<<<< HEAD
    TarjetasComponent,
<<<<<<< HEAD
    MenuComponent
=======
    TarjetasComponent
>>>>>>> parent of 5568d0a (footer)

=======
    AcordionComponent,
    TableComponent,
    ToolbarComponent,
    TopBannerComponent,
    MycardsComponent,
    MymenuComponent,
<<<<<<< HEAD
    MyformComponent,
>>>>>>> 6520f5eb8f58cac93a829d54a8a9839a08da1962
=======
>>>>>>> parent of cce1ba5 (Form)
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
