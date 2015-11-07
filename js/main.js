(function () {
    'use strict';

    var moduleFormApp = angular.module('storeApp', []);

    moduleFormApp.controller('mainController', function ($scope, $http) {

        $scope.fields = [
            {placeholder: ''},
            {placeholder: 'Enter name of item'},
            {placeholder: 'Enter url of item. Please insert correct!!!.'},
            {placeholder: 'Enter description, options of item'},
            {placeholder: 'Enter quantity of item. Please insert correct!!!.'},
            {placeholder: 'Enter price of item. Please insert correct!!!.'},
            {placeholder: ''},
            {placeholder: ''}
        ];

        $scope.category = [
            'Car',
            'Book',
            'Phone',
            'Book',
            'Other'
        ];

        $scope.currency = [
            'USD',
            'RUR',
            'EUR',
            'GBP',
            'CAD'
        ];

        $scope.hidden = true;
        $scope.accept = true;
        $scope.visible = false;

//============== Registration form hidden ===============
        $scope.display = function () {
            $scope.visible = !$scope.visible;

            $scope.dataCategory = '';
            $scope.dataTitle = '';
            $scope.dataPic = '';
            $scope.dataDescription = '';
            $scope.dataQuantity = '';
            $scope.dataPrice = '';
            $scope.dataCurrency = '';
            $scope.dataCheckIn = '';

            $scope.accept = true;
            $scope.hidden = true;
        };

//============== Registration new goods ===============
        $scope.dataSave = function () {

            $scope.save = {};

            $scope.save.category = $scope.dataCategory;
            $scope.save.title = $scope.dataTitle;
            $scope.save.pic = $scope.dataPic;
            $scope.save.description = $scope.dataDescription;
            $scope.save.quantity = $scope.dataQuantity;
            $scope.save.price = $scope.dataPrice;
            $scope.save.currency = $scope.dataCurrency;
            $scope.save.checkIn = $scope.dataCheckIn;

            $scope.dataCategory = '';
            $scope.dataTitle = '';
            $scope.dataPic = '';
            $scope.dataDescription = '';
            $scope.dataQuantity = '';
            $scope.dataPrice = '';
            $scope.dataCurrency = '';
            $scope.dataCheckIn = '';

            $scope.hidden = true;
            $scope.accept = true;
            $scope.goods.push($scope.save);
        };

//============ data validation ==================
        $scope.preDataValid = function () {

            if ($scope.dataCategory && $scope.dataTitle &&
                $scope.dataDescription && $scope.dataQuantity &&
                $scope.dataPrice && $scope.dataCurrency &&
                $scope.dataPic && $scope.dataCheckIn) {

                $scope.accept = false;
                $scope.hidden = true;

            } else {
                $scope.accept = true;
                $scope.hidden = false;
                $scope.dataError = 'Field is required. Please fill in.';
            }
        };

//============ Get goods from database ==================
        $http.get('database.json').success(function (data) {

            $scope.goods = data;

        }).error(function () {
            console.log('Get error');
        });

//=== END Controller =====
    });

//================= THE END =======================
})();