import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaysComponent } from './pays/pays.component';
import { MenuGeneralComponent } from './menu-general/menu-general.component';
import { BateauComponent } from './bateau/bateau.component';
import { AjouterBateauComponent } from './bateau/ajouter-bateau/ajouter-bateau.component';
import { RechercherBateauComponent } from './bateau/rechercher-bateau/rechercher-bateau.component';
import { FicheBateauModifierComponent } from './bateau/fiche-bateau-modifier/fiche-bateau-modifier.component';
import { FicheBateauChoisitComponent } from './bateau/fiche-bateau-choisit/fiche-bateau-choisit.component';
import { AjouterClientComponent } from './client/ajouter-client/ajouter-client.component';
import { FicheClientComponent } from './client/fiche-client/fiche-client.component';
import { RechercherClientComponent } from './client/rechercher-client/rechercher-client.component';
import { FicheClientModifierComponent } from './client/fiche-client-modifier/fiche-client-modifier.component';
import { RechercherReservationComponent } from './reservation/rechercher-reservation/rechercher-reservation.component';
import { AjouterReservationComponent } from './reservation/ajouter-reservation/ajouter-reservation.component';
import { FicheReservationComponent } from './reservation/fiche-reservation/fiche-reservation.component';
import { FicheReservationModifierComponent } from './reservation/fiche-reservation-modifier/fiche-reservation-modifier.component';
import { EtatReservationArriveesComponent } from './reservation/etat-reservation-arrivees/etat-reservation-arrivees.component';
import { ArchiveReservationComponent } from './reservation/archive-reservation/archive-reservation.component';
import { PlanDEauComponent } from './plan-d-eau/plan-d-eau.component';
import { SejourComponent } from './sejour/sejour.component';
import { RechercherSejourComponent } from './sejour/rechercher-sejour/rechercher-sejour.component';
import { AjouterSejourComponent } from './sejour/ajouter-sejour/ajouter-sejour.component';
import { FicheSejourComponent } from './sejour/fiche-sejour/fiche-sejour.component';
import { FicheSejourModifierComponent } from './sejour/fiche-sejour-modifier/fiche-sejour-modifier.component';
import { ArchiveSejourComponent } from './sejour/archive-sejour/archive-sejour.component';
import { AnnulerSejourComponent } from './sejour/annuler-sejour/annuler-sejour.component';
import { AjouterMvtBateauComponent } from './amodiation/ajouter-mvt-bateau/ajouter-mvt-bateau.component';
import { ListeMvtBateauComponent } from './amodiation/liste-mvt-bateau/liste-mvt-bateau.component';
import { ModifierMvtBateauComponent } from './amodiation/modifier-mvt-bateau/modifier-mvt-bateau.component';
import { AjouterConsommationComponent } from './facturation/consommation/ajouter-consommation/ajouter-consommation.component';
import { RechercherConsommationComponent } from './facturation/consommation/rechercher-consommation/rechercher-consommation.component';
import { ModifierConsommationComponent } from './facturation/consommation/modifier-consommation/modifier-consommation.component';
import { CalendrierComponent } from './menu-general/calendrier/calendrier.component';
import { HomePageComponent } from './accueil/home-page/home-page.component';
import { AproposPageComponent } from './accueil/apropos-page/apropos-page.component';
import { ConnexionComponent } from './accueil/connexion/connexion.component';
import { AjouterFactureComponent } from './facturation/facture/ajouter-facture/ajouter-facture.component';
import { ModifierFactureComponent } from './facturation/facture/modifier-facture/modifier-facture.component';
import { ImprimerFactureComponent } from './facturation/facture/imprimer-facture/imprimer-facture.component';
import { RechercherFacturesComponent } from './facturation/facture/rechercher-factures/rechercher-factures.component';
import { AjouterTarifPrestationComponent } from './admin/tarif/ajouter-tarif/ajouter-tarif-prestation/ajouter-tarif-prestation.component';
import { AjouterTarifForfaitComponent } from './admin/tarif/ajouter-tarif/ajouter-tarif-forfait/ajouter-tarif-forfait.component';
import { AjouterTarifAmmarageComponent } from './admin/tarif/ajouter-tarif/ajouter-tarif-ammarage/ajouter-tarif-ammarage.component';
import { AfficherTarifAmmarageComponent } from './admin/tarif/afficher-tarifs/afficher-tarif-ammarage/afficher-tarif-ammarage.component';
import { AfficherTarifForfaitComponent } from './admin/tarif/afficher-tarifs/afficher-tarif-forfait/afficher-tarif-forfait.component';
import { AfficherTarifPrestationComponent } from './admin/tarif/afficher-tarifs/afficher-tarif-prestation/afficher-tarif-prestation.component';
import { ModifierTarifAmmarageComponent } from './admin/tarif/modifier-tarif/modifier-tarif-ammarage/modifier-tarif-ammarage.component';
import { ModifierTarifForfaitComponent } from './admin/tarif/modifier-tarif/modifier-tarif-forfait/modifier-tarif-forfait.component';
import { ModifierTarifPrestationComponent } from './admin/tarif/modifier-tarif/modifier-tarif-prestation/modifier-tarif-prestation.component';
import { RechercherEmplacementComponent } from './admin/emplacement/rechercher-emplacement/rechercher-emplacement.component';
import { ModifierEmplacementComponent } from './admin/emplacement/modifier-emplacement/modifier-emplacement.component';
import { AjouterEmplacementComponent } from './admin/emplacement/ajouter-emplacement/ajouter-emplacement.component';
import { AfficherComptesUtilisateursComponent } from './admin/compte-utilisateurs/afficher-comptes-utilisateurs/afficher-comptes-utilisateurs.component';
import { AjouterCompteUtilisateurComponent } from './admin/compte-utilisateurs/ajouter-compte-utilisateur/ajouter-compte-utilisateur.component';
import { ModifierCompteUtilisateurComponent } from './admin/compte-utilisateurs/modifier-compte-utilisateur/modifier-compte-utilisateur.component';


const routes: Routes =[



  { path: '', redirectTo: '/Page_d_accueil', pathMatch: 'full' },
    {data: { title: 'Marina Yasmine Hammamet | Accueil générale' },path:'Page_d_accueil', component: HomePageComponent},
    {data: { title: 'Marina Yasmine Hammamet | A propos' },path:'A_Propos', component: AproposPageComponent},
    {data: { title: 'Marina Yasmine Hammamet | Se connecter' }, path:'Se_connecter', component: ConnexionComponent},







  { path: 'pays',  component: PaysComponent },
  {path:'menu_general', component: MenuGeneralComponent},

  {path:'bateau', component: BateauComponent},

  {path:'ajouter_bateau', component: AjouterBateauComponent},



    {/*title:"Marina Yasmine Hammamet | Fiche du client",*/path:'fiche_client', component: FicheClientComponent},

    {/*title:"Marina Yasmine Hammamet | Ajouter un client",*/path:'ajouter_client', component: AjouterClientComponent},

  {data: { title: 'Marina Yasmine Hammamet | Rechercher un bateau' },path:'rechercher_bateau', component: RechercherBateauComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier une fiche du bateau' },path:'modifier_fiche_bateau', component: FicheBateauModifierComponent},
  {data: { title: 'Marina Yasmine Hammamet | Imrimer fiche du bateau' },path:'fiche_bateau', component: FicheBateauChoisitComponent},


  {data: { title: 'Marina Yasmine Hammamet | Rechercher un client' },path:'rechercher_client', component: RechercherClientComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier une fiche client' },path:'modifier_fiche_client', component: FicheClientModifierComponent},
  {data: { title: 'Marina Yasmine Hammamet | Imprimer une fiche client' },path:'fiche_client', component: FicheClientComponent},


  {data: { title: 'Marina Yasmine Hammamet | Rechercher un emplacement' },path:'rechercher_emplacement', component: RechercherEmplacementComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier un emplacement' },path:'modifier_emplacement', component: ModifierEmplacementComponent},
  {data: { title: 'Marina Yasmine Hammamet | Ajouter un emplacement' },path:'ajouter_emplacement', component: AjouterEmplacementComponent},

  {data: { title: 'Marina Yasmine Hammamet | Rechercher un Compte Utilisateur' },path:'rechercher_utilisateur', component: AfficherComptesUtilisateursComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier un Compte Utilisateur' },path:'modifier_utilisateur', component: ModifierCompteUtilisateurComponent},
  {data: { title: 'Marina Yasmine Hammamet | Ajouter un Compte Utilisateur' },path:'ajouter_utilisateur', component: AjouterCompteUtilisateurComponent},



  {data: { title: 'Marina Yasmine Hammamet | Ajouter les mouvements du bateau' },path:'ajouter_mvt_bateau', component: AjouterMvtBateauComponent},
  {data: { title: 'Marina Yasmine Hammamet | Afficher les mouvements des bateaux' },path:'afficher_mvt_bateaux', component: ListeMvtBateauComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier les mouvements du bateau' },path:'modifier_mvt_bateau', component: ModifierMvtBateauComponent},


  {data: { title: 'Marina Yasmine Hammamet | Ajouter une consommation' },path:'ajouter_consommation', component: AjouterConsommationComponent},
  {data: { title: 'Marina Yasmine Hammamet | Rechercher une consommation' },path:'rechercher_consommation', component: RechercherConsommationComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier une fiche consommation' },path:'modifier_fiche_consommation', component: ModifierConsommationComponent},

  {path:'calendrier', component: CalendrierComponent},

  {data: { title: 'Marina Yasmine Hammamet | Ajouter une Facturation & Reglement' },path:'ajouter_facture', component: AjouterFactureComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier une Facturation & Reglement' },path:'modifier_facture', component: ModifierFactureComponent},
  {data: { title: 'Marina Yasmine Hammamet | Imprimer une Facturation & Reglement' },path:'imprimer_facture', component: ImprimerFactureComponent},
  {data: { title: 'Marina Yasmine Hammamet | Rechercher une Facturation & Reglement' },path:'rechercher_facture', component: RechercherFacturesComponent},

  {data: { title: 'Marina Yasmine Hammamet | Ajouter un Tarif de Prestation' },path:'ajouter_tarif_prestation', component: AjouterTarifPrestationComponent},
  {data: { title: 'Marina Yasmine Hammamet | Ajouter un Tarif Forfait' },path:'ajouter_tarif_forfait', component: AjouterTarifForfaitComponent},
  {data: { title: 'Marina Yasmine Hammamet | Ajouter un Tarif Ammarage' },path:'ajouter_tarif_ammarage', component: AjouterTarifAmmarageComponent},

  {data: { title: 'Marina Yasmine Hammamet | Afficher un Tarif Ammarage' },path:'afficher_tarif_ammarage', component: AfficherTarifAmmarageComponent},
  {data: { title: 'Marina Yasmine Hammamet | Afficher un Tarif Forfait' },path:'afficher_tarif_forfait', component: AfficherTarifForfaitComponent},
  {data: { title: 'Marina Yasmine Hammamet | Afficher un Tarif de Prestation' },path:'afficher_tarif_prestation', component: AfficherTarifPrestationComponent},


  {data: { title: 'Marina Yasmine Hammamet | Modifier un Tarif Ammarage' },path:'modifier_tarif_ammarage', component: ModifierTarifAmmarageComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier un Tarif Forfait' },path:'modifier_tarif_forfait', component: ModifierTarifForfaitComponent},
  {data: { title: 'Marina Yasmine Hammamet | Modifier un Tarif de Prestation' },path:'modifier_tarif_prestation', component: ModifierTarifPrestationComponent},


      {/*title:"Marina Yasmine Hammamet | Ajouter une réservation",*/path:'ajouter_réservation', component: AjouterReservationComponent},
    {/*title:"Marina Yasmine Hammamet | Rechercher une réservation",*/path:'rechercher_réservation', component: RechercherReservationComponent},
    {/*title:"Marina Yasmine Hammamet | Imprimer fiche d'une réservation",*/path:'fiche_réservation', component: FicheReservationComponent},
    {/*title:"Marina Yasmine Hammamet | Modifier une fiche d'une réservation",*/path:'modifier_fiche_réservation', component: FicheReservationModifierComponent},
    {/*title:"Marina Yasmine Hammamet | Etat des réservations (Arrivées)",*/path:'etat_réservation_arrivées', component: EtatReservationArriveesComponent},
    {/*title:"Marina Yasmine Hammamet | Archive des réservations",*/path:'archives_réservations', component: ArchiveReservationComponent},

        {/*title:"Marina Yasmine Hammamet | Plan d'eau",*/path:'plan_d_eau', component: PlanDEauComponent},

  {/*title:"Marina Yasmine Hammamet | Séjour",*/path:'séjour', component: SejourComponent},
  {/*title:"Marina Yasmine Hammamet | Rechercher un séjour",*/path:'rechercher_séjour', component: RechercherSejourComponent},
  {/*title:"Marina Yasmine Hammamet | Ajouter un séjour",*/path:'ajouter_séjour', component: AjouterSejourComponent},
  {/*title:"Marina Yasmine Hammamet | Imprimer fiche du séjou",*/path:'fiche_séjour', component: FicheSejourComponent},
  {/*title:"Marina Yasmine Hammamet | Modifier une fiche du séjour",*/path:'modifier_fiche_séjour', component: FicheSejourModifierComponent},
  {/*title:"Marina Yasmine Hammamet | Archive des séjours",*/path:'archives_séjours', component: ArchiveSejourComponent},
  {/*title:"Marina Yasmine Hammamet | Annuler un séjour",*/path:'annuler_séjour', component: AnnulerSejourComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
