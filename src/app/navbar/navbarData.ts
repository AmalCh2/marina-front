import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routerLink: '/menu_general',
        icon: 'fal fa-home',
        label: 'Menu Général'
    },

    {
        routerLink: '/client',
        icon: 'fal fa-user',
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
        icon: 'fal fa-ship',
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

    {
        routerLink: '/réservation',
        icon: 'fal fa-file-invoice',
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

            {
                routerLink: '/archives_réservations',
                label: 'Archive des réservations'
            },

            {
                routerLink: '/etat_réservation_arrivées',
                label: 'Etat des réservations (Arrivées)'
            },
        ]
    },

    {
        routerLink: '/plan_d_eau',
        icon: 'fal fa-water',
        label: 'Plan d\'eau'
    },

    {
        routerLink: '/séjour',
        icon: 'fal  fa-anchor',
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

            {
                routerLink: '/annuler_séjour',
                label: 'Annuler un séjour'
            },
        ]
    },

    {
        routerLink: '/facturation',
        icon: 'fa fa-credit-card',
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
        icon:'fal fa-arrows-alt',
        //icon: 'fal fa-map-marker-alt',
        label: 'Amodiation',
        items: [
            {
                routerLink: '/ajouter_mvt_bateau',
                label: 'Ajouter les mouvements du bateau'
            },

            {
                routerLink: '/afficher_mvt_bateaux',
                label: 'Afficher les mouvements des bateaux'
            },
        ]
    },

    {
        routerLink: '/admin',
        icon: 'fal fa-user-shield',
        label: 'Admin',
        items: [

            {
                routerLink: '/',
                label: 'Comptes Utilisateurs',
                items: [
                    {
                        routerLink: '/',
                        label: 'Ajouter un Compte'
                    },
        
                    {
                        routerLink: '/',
                        label: 'Afficher les Comptes'
                    },
                ]
            },
            
            {
                routerLink: '/',
                label: 'Tarifs',
                items: [
                    {
                        routerLink: '/',
                        label: 'Ajouter une Tarif'
                    },
        
                    {
                        routerLink: '/',
                        label: 'Afficher les Tarifs'
                    },
                ]
            },

            {
                routerLink: '/',
                label: 'Emplacements',
                items: [
                    {
                        routerLink: '/',
                        label: 'Ajouter un Emplacement'
                    },
        
                    {
                        routerLink: '/',
                        label: 'Afficher les Emplacements'
                    },
                ]
            },

            {
                routerLink: '/',
                label: 'Droits d\'accès',
                items: [
                    {
                        routerLink: '/',
                        label: 'Modifier les Droits d\'accès'
                    },
                ]
            },
        ]
    },

];
