import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { AllphonetsComponent } from './allphonets/allphonets.component';
import { AddphonetComponent } from './addphonet/addphonet.component';
import { ModifphonetComponent } from './modifphonet/modifphonet.component';
import { TrackComponent } from './track/track.component';
import { AuthService } from './services/auth.service';
import { RecupererComponent } from './recuperer/recuperer.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    InscriptionComponent,
    ConnexionComponent,
    AllphonetsComponent,
    AddphonetComponent,
    ModifphonetComponent,
    TrackComponent,
    RecupererComponent,
    ProfilComponent,
    UpdateprofilComponent,

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
