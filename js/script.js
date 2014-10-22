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

     this.custom_specs = {
      'step2': {'fheight': 0, 
                'flength': 0 },
      'step3': {'material': ''}
     };
     this.material = ['wood','metal', 'plastic', 'random', 'cardboard'];

     this.set_custom_specs_height = function(furniture_height){
        this.custom_specs['step2']['fheight'] = furniture_height;
     };
          this.get_custom_specs_height = function(){
              return this.custom_specs['step2']['fheight'];
          };
     this.set_custom_specs_length = function(furniture_length){
        this.custom_specs['step2']['flength'] = furniture_length;
     };
          this.get_custom_specs_length = function(){
              return this.custom_specs['step2']['flength'];
          };
     //CHECK STEPS
     this.check_step2 = function(){
        if ( this.custom_specs['step2']['fheight'] > 0 && this.custom_specs['step2']['flength'] > 0){
          return true;
        }else{ 
          return false;
        }
     };
     this.check_step3 = function(){
      console.log(this.custom_specs['step3']['material']);
      if ( this.custom_specs['step3']['material'] )
          return true;
      else
          return false;
     };

    this.get_custom_specs = function(){
      console.log('H:'+this.custom_specs['step2']['fheight'] + '\nL:' +this.custom_specs['step2']['flength']);
      // console.log(x);
    };
  });
  // modalController
})();
