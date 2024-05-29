import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaysComponent } from './pays/pays.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { SublevelMenuComponent } from './navbar/sublevel-menu.component';
import { BodyComponent } from './body/body.component';
import { MenuGeneralComponent } from './menu-general/menu-general.component';
import { AjouterBateauComponent } from './bateau/ajouter-bateau/ajouter-bateau.component';
import { FicheBateauChoisitComponent } from './bateau/fiche-bateau-choisit/fiche-bateau-choisit.component';
import { FicheBateauModifierComponent } from './bateau/fiche-bateau-modifier/fiche-bateau-modifier.component';
import { RechercherBateauComponent } from './bateau/rechercher-bateau/rechercher-bateau.component';
import { AmodiationComponent } from './amodiation/amodiation.component';
import { ClientComponent } from './client/client.component';
import { FacturationComponent } from './facturation/facturation.component';
import { PlanDEauComponent } from './plan-d-eau/plan-d-eau.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SejourComponent } from './sejour/sejour.component';
import { AjouterClientComponent } from './client/ajouter-client/ajouter-client.component';
import { FicheClientComponent } from './client/fiche-client/fiche-client.component';
import { RechercherClientComponent } from './client/rechercher-client/rechercher-client.component';
import { FicheClientModifierComponent } from './client/fiche-client-modifier/fiche-client-modifier.component';
import { AjouterReservationComponent } from './reservation/ajouter-reservation/ajouter-reservation.component';
import { ArchiveReservationComponent } from './reservation/archive-reservation/archive-reservation.component';
import { EtatReservationArriveesComponent } from './reservation/etat-reservation-arrivees/etat-reservation-arrivees.component';
import { FicheReservationComponent } from './reservation/fiche-reservation/fiche-reservation.component';
import { FicheReservationModifierComponent } from './reservation/fiche-reservation-modifier/fiche-reservation-modifier.component';
import { RechercherReservationComponent } from './reservation/rechercher-reservation/rechercher-reservation.component';
import { AjouterSejourComponent } from './sejour/ajouter-sejour/ajouter-sejour.component';
import { AnnulerSejourComponent } from './sejour/annuler-sejour/annuler-sejour.component';
import { ArchiveSejourComponent } from './sejour/archive-sejour/archive-sejour.component';
import { FicheSejourComponent } from './sejour/fiche-sejour/fiche-sejour.component';
import { FicheSejourModifierComponent } from './sejour/fiche-sejour-modifier/fiche-sejour-modifier.component';
import { RechercherSejourComponent } from './sejour/rechercher-sejour/rechercher-sejour.component';
import { ModifierMvtBateauComponent } from './amodiation/modifier-mvt-bateau/modifier-mvt-bateau.component';
import { AjouterMvtBateauComponent } from './amodiation/ajouter-mvt-bateau/ajouter-mvt-bateau.component';
import { ListeMvtBateauComponent } from './amodiation/liste-mvt-bateau/liste-mvt-bateau.component';
import { AjouterConsommationComponent } from './facturation/consommation/ajouter-consommation/ajouter-consommation.component';
import { RechercherConsommationComponent } from './facturation/consommation/rechercher-consommation/rechercher-consommation.component';
import { AjouterFactureComponent } from './facturation/facture/ajouter-facture/ajouter-facture.component';
import { RechercherFacturesComponent } from './facturation/facture/rechercher-factures/rechercher-factures.component';
import { AjouterCompteUtilisateurComponent } from './admin/compte-utilisateurs/ajouter-compte-utilisateur/ajouter-compte-utilisateur.component';
import { AfficherComptesUtilisateursComponent } from './admin/compte-utilisateurs/afficher-comptes-utilisateurs/afficher-comptes-utilisateurs.component';
import { ModifierDroitsDAccesComponent } from './admin/droit-d-acces/modifier-droits-d-acces/modifier-droits-d-acces.component';
import { ModifierConsommationComponent } from './facturation/consommation/modifier-consommation/modifier-consommation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CalendrierComponent } from './menu-general/calendrier/calendrier.component';
import { AproposPageComponent } from './accueil/apropos-page/apropos-page.component';
import { HomePageComponent } from './accueil/home-page/home-page.component';
import { HomePageHeaderComponent } from './accueil/home-page-header/home-page-header.component';
import { ConnexionComponent } from './accueil/connexion/connexion.component';
import { ModifierFactureComponent } from './facturation/facture/modifier-facture/modifier-facture.component';
import { ImprimerFactureComponent } from './facturation/facture/imprimer-facture/imprimer-facture.component';
import { AjouterTarifPrestationComponent } from './admin/tarif/ajouter-tarif/ajouter-tarif-prestation/ajouter-tarif-prestation.component';
import { AjouterTarifAmmarageComponent } from './admin/tarif/ajouter-tarif/ajouter-tarif-ammarage/ajouter-tarif-ammarage.component';
import { AjouterTarifForfaitComponent } from './admin/tarif/ajouter-tarif/ajouter-tarif-forfait/ajouter-tarif-forfait.component';
import { AfficherTarifAmmarageComponent } from './admin/tarif/afficher-tarifs/afficher-tarif-ammarage/afficher-tarif-ammarage.component';
import { AfficherTarifPrestationComponent } from './admin/tarif/afficher-tarifs/afficher-tarif-prestation/afficher-tarif-prestation.component';
import { ModifierTarifAmmarageComponent } from './admin/tarif/modifier-tarif/modifier-tarif-ammarage/modifier-tarif-ammarage.component';
import { ModifierTarifForfaitComponent } from './admin/tarif/modifier-tarif/modifier-tarif-forfait/modifier-tarif-forfait.component';
import { ModifierTarifPrestationComponent } from './admin/tarif/modifier-tarif/modifier-tarif-prestation/modifier-tarif-prestation.component';
import { AfficherTarifForfaitComponent } from './admin/tarif/afficher-tarifs/afficher-tarif-forfait/afficher-tarif-forfait.component';
import { RechercherEmplacementComponent } from './admin/emplacement/rechercher-emplacement/rechercher-emplacement.component';
import { ModifierEmplacementComponent } from './admin/emplacement/modifier-emplacement/modifier-emplacement.component';
import { AjouterEmplacementComponent } from './admin/emplacement/ajouter-emplacement/ajouter-emplacement.component';
import { ModifierCompteUtilisateurComponent } from './admin/compte-utilisateurs/modifier-compte-utilisateur/modifier-compte-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    NavbarComponent,
    SublevelMenuComponent,
    BodyComponent,
    MenuGeneralComponent,
    AjouterBateauComponent,
    FicheBateauChoisitComponent,
    FicheBateauModifierComponent,
    RechercherBateauComponent,
    AmodiationComponent,
    ClientComponent,
    FacturationComponent,
    PlanDEauComponent,
    ReservationComponent,
    SejourComponent,
    AjouterClientComponent,
    FicheClientComponent,
    RechercherClientComponent,
    FicheClientModifierComponent,
    AjouterReservationComponent,
    ArchiveReservationComponent,
    EtatReservationArriveesComponent,
    FicheReservationComponent,
    FicheReservationModifierComponent,
    RechercherReservationComponent,
    AjouterSejourComponent,
    AnnulerSejourComponent,
    ArchiveSejourComponent,
    FicheSejourComponent,
    FicheSejourModifierComponent,
    RechercherSejourComponent,
    ModifierMvtBateauComponent,
    AjouterMvtBateauComponent,
    ListeMvtBateauComponent,
    AjouterConsommationComponent,
    RechercherConsommationComponent,
    AjouterFactureComponent,
    RechercherFacturesComponent,
    AjouterCompteUtilisateurComponent,
    AfficherComptesUtilisateursComponent,
    ModifierDroitsDAccesComponent,
    ModifierConsommationComponent,
    CalendrierComponent,
    AproposPageComponent,
    HomePageComponent,
    HomePageHeaderComponent,
    ConnexionComponent,
    ModifierFactureComponent,
    ImprimerFactureComponent,
    AjouterTarifPrestationComponent,
    AjouterTarifAmmarageComponent,
    AjouterTarifForfaitComponent,
    AfficherTarifAmmarageComponent,
    AfficherTarifPrestationComponent,
    AfficherTarifPrestationComponent,
    ModifierTarifAmmarageComponent,
    ModifierTarifForfaitComponent,
    ModifierTarifPrestationComponent,
    AfficherTarifAmmarageComponent,
    AfficherTarifPrestationComponent,
    AfficherTarifForfaitComponent,
    RechercherEmplacementComponent,
    ModifierEmplacementComponent,
    AjouterEmplacementComponent,
    ModifierCompteUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    CommonModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
