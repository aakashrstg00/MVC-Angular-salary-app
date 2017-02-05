//logic js
app.factory("Sfactory",function(){
    var salaryOperations={};
    salaryOperations.calcHRA=function(sal){
        return 0.3*parseInt(sal);
    };
    salaryOperations.calcDA=function(sal){
        return 0.2*parseInt(sal);
    };
    salaryOperations.calcTA=function(sal){
        return 0.1*parseInt(sal);
    };
    salaryOperations.calcGS=function(sal){
        return (parseInt(sal)+this.calcHRA(sal)+this.calcDA(sal)+this.calcTA(sal));
    };
    salaryOperations.calcNS=function(sal,pf){
        return (this.calcGS(sal)-parseInt(pf));
    };
    return salaryOperations;
});