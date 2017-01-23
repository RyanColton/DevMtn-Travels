angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html",
                controller: 'aboutController'
            })
            .state('contact',{
              url: '/contact',
              templateUrl:'../views/contact.html',
              parent: 'home',
              controller:'contactController'
            })
            .state('adventures',{
              url: '/adventures',
              templateUrl:'../views/about-adventurers.html',
              parent: 'home',
              controller: 'about-adventuresController'
            })
            .state('packages',{
              url:'/packages',
              templateUrl:'../views/packages.html',
              controller:'packagesController'
            })
            .state('locations',{
              url:'/locations',
              templateUrl:'../views/locations.html',
              controller:'locationsController'
            })
            .state('booked',{
              url:'/booked/:id',
              templateUrl:'../views/booked.html',
              controller: 'bookedController'
            })

            .state('about',{
              url:'/about',
              controller:'aboutController',
              templateUrl:'../views/about.html'
            })


        $urlRouterProvider
            .otherwise('/');
    });
