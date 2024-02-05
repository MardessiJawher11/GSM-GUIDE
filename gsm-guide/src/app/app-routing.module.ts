import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AllphonetsComponent } from './allphonets/allphonets.component';
import { AddphonetComponent } from './addphonet/addphonet.component';
import { ModifphonetComponent } from './modifphonet/modifphonet.component';
import { TrackComponent } from './track/track.component';
import { RecupererComponent } from './recuperer/recuperer.component';
import { AuthGuard } from './services/auth-guard.service';
import { ProfilComponent } from './profil/profil.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'signup', component: InscriptionComponent},
  { path: 'login', component: ConnexionComponent},
  { path: 'allphones', component: AllphonetsComponent ,canActivate: [AuthGuard]},
  { path: 'addphone', component: AddphonetComponent,canActivate: [AuthGuard]},
  { path: 'updatephonet/:id', component: ModifphonetComponent,canActivate: [AuthGuard]},
  { path: 'track', component: TrackComponent},
  { path: 'recover password', component: RecupererComponent},
  { path: 'profil/:id', component: ProfilComponent,canActivate: [AuthGuard]},
  { path: 'updateprofil/:id', component: UpdateprofilComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
