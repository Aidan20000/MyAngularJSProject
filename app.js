(function () {
    'use strict';

    angular.module('NameCalculator', [])

    .controller("NameCalculatorController", ($scope) => {
        $scope.name = document.getElementById("nameInput").value;
        $scope.value = 0;

        $scope.displayNumeric = function () {
            $scope.value = calculateNumericForString($scope.name);
        }

        function calculateNumericForString(string) {
            let stringNumeric = 0;

            for (let i = 0; i < string.length; i++) {
                stringNumeric += string.charCodeAt(i);
            }
            return stringNumeric;
        }
    })
})()