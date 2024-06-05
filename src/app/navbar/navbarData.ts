import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routerLink: '/menu_general',
        icon: 'fas fa-home',
        label: 'Menu Général'
    },

    {
        routerLink: '/client',
        icon: 'fas fa-user',
        label: 'Client',
        items: [
            {
                routerLink: '/ajouter_client',
                label: 'Ajouter un client'
            },

            {
                routerLink: '/rechercher_client',
                label: 'Rechercher un client'
            },
        ]
    },

    {
        routerLink: '/bateau',
        icon: 'fas fa-ship',
        label: 'Bateau',
        items: [
            {
                routerLink: '/ajouter_bateau',
                label: 'Ajouter un bateau'
            },

            {
                routerLink: '/rechercher_bateau',
                label: 'Rechercher un bateau'
            },
        ]
    },

   /* {
        routerLink: '/réservation',
        icon: 'fas fa-file-invoice',
        label: 'Réservation',
        items: [
            {
                routerLink: '/ajouter_réservation',
                label: 'Ajouter une réservation'
            },

            {
                routerLink: '/rechercher_réservation',
                label: 'Rechercher une réservation'
            },
            /*
            {
                routerLink: '/archives_réservations',
                label: 'Archive des réservations'
            },
            */
           /* {
                routerLink: '/etat_réservation_arrivées',
                label: 'Etat des réservations (Arrivées)'
            },
        ]
    },*/

    {
        routerLink: '/plan_d_eau',
        icon: 'fas fa-water',
        label: 'Plan d\'eau'
    },

    {
        routerLink: '/séjour',
        icon: 'fas fa-anchor',
        label: 'Séjour',
        items: [
            {
                routerLink: '/ajouter_séjour',
                label: 'Ajouter un séjour'
            },

            {
                routerLink: '/rechercher_séjour',
                label: 'Rechercher un séjour'
            },

            {
                routerLink: '/archives_séjours',
                label: 'Archive des séjours'
            },
        ]
    },

    {
        routerLink: '/facturation',
        icon: 'fas fa-credit-card',
        label: 'Facturation',
        items: [
            {
                routerLink: '/consommation',
                label: 'Consommation',
                items: [
                    {
                        routerLink: '/ajouter_consommation',
                        label: 'Ajouter une Consommation'
                    },

                    {
                        routerLink: '/rechercher_consommation',
                        label: 'Rechercher les Consommations'
                    },
                ]
            },

            {
                routerLink: '/facturation',
                label: 'Facture',
                items: [
                    {
                        routerLink: '/ajouter_facture',
                        label: 'Ajouter une Facture'
                    },

                    {
                        routerLink: '/rechercher_facture',
                        label: 'Rechercher les Factures'
                    },
                ]
            },
        ]
    },

    {
        routerLink: '/amodiation',
        icon: 'fas fa-arrows-alt',
        //icon: 'fas fa-map-marker-alt',
        label: 'Amodiation',
        items: [
            

            {
                routerLink: '/afficher_mvt_bateaux',
                label: 'Rechercher les mouvements des bateaux'
            },
        ]
    },

    {
        routerLink: '/adminn',
        icon: 'fas fa-user-shield',
        label: 'Admin',
        items: [
            {
                routerLink: '/',
                label: 'Comptes Utilisateurs',
                items: [
                    {
                        routerLink: '/ajouter_utilisateur',
                        label: 'Ajouter un Compte'
                    },

                    {
                        routerLink: '/rechercher_utilisateur',
                        label: 'Rechercher les Comptes'
                    },
                ]
            },

            {
                routerLink: '/',
                label: 'Tarifs',
                items: [
                    {
                        routerLink: '/',
                        label: 'Ajouter un Tarif',
                        items: [
                            {
                                routerLink: '/ajouter_tarif_prestation',
                                label: 'Tarif Prestation'
                            },

                            {
                                routerLink: '/ajouter_tarif_ammarage',
                                label: 'Tarif Ammarage'
                            },
                            /*
                            {
                                routerLink: '/ajouter_tarif_forfait',
                                label: 'Tarif Forfait'
                            },
                            */
                        ]
                    },

                    {
                        routerLink: '/jj',
                        label: 'Rechercher les Tarifs',
                        items: [
                            {
                                routerLink: '/afficher_tarif_prestation',
                                label: 'Tarif Prestation'
                            },

                            {
                                routerLink: '/afficher_tarif_ammarage',
                                label: 'Tarif Ammarage'
                            },

                        ]
                    },
                ]
            },

            {
                routerLink: '/',
                label: 'Emplacements',
                items: [
                    {
                        routerLink: '/ajouter_emplacement',
                        label: 'Ajouter un Emplacement'
                    },

                    {
                        routerLink: '/rechercher_emplacement',
                        label: 'Rechercher les Emplacements'
                    },
                ]
            },
        ]
    },
];
