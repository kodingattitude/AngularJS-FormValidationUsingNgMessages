var app = angular.module('angularformvalidationusingngmessage', ['ngMessages']);
app.controller('FormValidationNgMessageController', function ($scope, $window) {

    $scope.SubmitForm = function () {
        debugger;
        if ($scope.formvalidation.$valid) {
            $scope.submitted = false;
            alert("Submitted!!");
        }
        else {
            //if $scope.formvalidation.$valid is not true then it submitted= true i.e., the submitted attribute should work
            $scope.submitted = true;
        }

    }

});