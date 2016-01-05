(function(){
    'use strict';

    angular
        .module('app.nav')
        .directive('navbar', navbar);
    function navbar(){
        var directive = {
            templateUrl: '/app/nav/templates/nav.tpl.html',
            restrict: 'EA',
            controller: 'navController',
            controllerAs: 'vm'
        };
        return directive;
    }
})();