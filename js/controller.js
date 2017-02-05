// controller ia a glue b/w view and model

// $scope acts as a glue b/w view and controller

app.controller("Sctrl",function($scope,Sfactory){
    $scope.compute=function(){
        $scope.hra=Sfactory.calcHRA($scope.sal);
        $scope.da=Sfactory.calcDA($scope.sal);
        $scope.ta=Sfactory.calcTA($scope.sal);
        $scope.gs=Sfactory.calcGS($scope.sal);
        $scope.ns=Sfactory.calcNS($scope.sal,$scope.pf);
    }
});