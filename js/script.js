(function(){
  var app = angular.module("mainMod", []);
  app.controller("mainController", function(){
    this.createTable = false;
    this.showTable = function(){
      this.createTable = true;
    }
    this.hideTable = function(){
      this.createTable = false;
    }
    this.isActive = function(){
      return ( this.createTable )? true : false;
    }
  });
  // mainController

  app.controller("modalController", function(){
    this.step = {
      'step1': 'popup/page1.html',
      'step2': 'popup/page2.html',
      'step3': 'popup/page3.html',
      'step4': 'popup/page4.html',
    };

    this.current_step = this.step['step1'];

    this.custom_specs = [
      { 'step1': '', }, //furniture type
    ];


    this.step1 = function(){

    }
  });
  // modalController
})();
