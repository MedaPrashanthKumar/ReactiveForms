import { Component ,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities=["Hyderabad","Chennai","Pune","banglore","Kochi"];
  states=["US","NON-US"];
  skills=["Html","sass","es5","bootstrap","angular","react","vue","typescript","express","Node","Mongodb"]
  handsonform: any;
  display: string[] | undefined;
   
  ngOnInit():void {

  this.handsonform = new FormGroup({
    'AssociateName' : new FormControl(null, [Validators.minLength(5), Validators.maxLength(30) ,Validators.pattern('^[a-z A-Z ]*$')]   ),
    'AssociateId' : new FormControl(null,  [Validators.minLength(6), Validators.maxLength(6) ,Validators.pattern('^[0-9 ]*$')   ]  ),
    'ProjectID' :new FormControl(null, [Validators.minLength(12), Validators.maxLength(12) ,Validators.pattern('^[a-zA-Z0-9 ]*$') ] ),
    'location':new FormControl(null,Validators.required),
     'place':new FormControl(null,Validators.required),
    myCheckboxGroup: new FormGroup({
        
      html: new FormControl(false),
      sass: new FormControl(false),
      es5: new FormControl(false),
      bootstrap: new FormControl(false),
      angular: new FormControl(false),
      react: new FormControl(false),
      vue: new FormControl(false),
      typescript: new FormControl(false),
      express: new FormControl(false),
      node: new FormControl(false),
      mongo: new FormControl(false),
    }),
    

    'UploadProfile':new FormControl(null, Validators.required),
     
    'Comments' : new FormControl(null, Validators.required)
  });
  }

  clicksub() {
    console.log(this.handsonform.value);
    
  }
  clickreset(){
    this.handsonform.reset();
  }

  getControls(){
    return this.handsonform.controls;
  }
  get AssociateName() {
    return this.handsonform.get('AssociateName');
  }
  get AssociateId() {
    return this.handsonform.get('AssociateId');
  }
  get ProjectID() {
    return this.handsonform.get('ProjectID');
  }
  get Offshore(){
    return this.handsonform.get('Offshore');
  }
  get Onshore(){
    return this.handsonform.get('Onshore');
  }

  get UploadProfile() {
    return this.handsonform.get('UploadProfile');
  }

  get Comments() {
    return this.handsonform.get('Comments');
  }
  
  offLoc(){
    this.display=this.cities;
   }
 
   onLoc(){
     this.display=this.states;
   }
  
    
}