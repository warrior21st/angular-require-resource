﻿define(['services'], function (services) {
    'use strict';

    return ['$scope', 'service', 'utils', '$stateParams',  function ($scope, service, utils, $stateParams) {

        $scope.msg = "welcome";
        
        //utils.alert1();
        console.log($scope.msg)
    }];
});



