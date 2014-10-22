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
    'step1': {'type': ''},
    'step2': {'fheight': 0, 
              'flength': 0 },
    'step3': {'material': ''},
    'step4': {'name': '',
              'address': '',
              'email': ''}
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
    // EMAIL
    this.set_custom_specs_name = function(name){
        this.custom_specs['step4']['name'] = name;
    }; 
    this.set_custom_specs_address = function(address){
        this.custom_specs['step4']['address'] = address;
    };
    this.set_custom_specs_email = function(email){
        this.custom_specs['step4']['email'] = email;
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
      if ( this.custom_specs['step3']['material'] )
          return true;
      else
          return false;
     };

     this.ok = {
      'name': true,
      'address': true,
      'email': true
     };
     this.check_step4 = function(){
      oks = true;
      if(this.custom_specs['step4']['name'] != null && this.custom_specs['step4']['name'] != ''){
        this.ok['name'] = oks = true;
      }else { this.ok['name'] = oks = false; }

      if (this.custom_specs['step4']['address'] != null && this.custom_specs['step4']['address'] != ''){
        this.ok['address'] = oks = true;
      }else{ this.ok['address'] = oks = false; }

      if (validateEmail( this.custom_specs['step4']['email'] )){
        this.ok['email'] = oks = true;
      }else{ this.ok['email'] = oks = false; }

        console.log(this.ok);
        console.log('ok: ' + oks);
      return oks;  
     };

     function validateEmail(email) { 
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      } 

    this.get_custom_specs = function(){
      console.log(this.custom_specs);
      // console.log(x);
    };
    this.showObject = function(customObj){
      console.log(customObj);
    };
  });
  // modalController
})();
