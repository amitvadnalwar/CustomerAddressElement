import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';
import { Address } from './Models/Address';     // used to set control data with model data
import { viewModel } from './Models/ViewModel'; // used for setting control properties based on country


@Component({
  selector: 'address-comp',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public titledata :any;
  public invoicedeliverydata :any;
  public addres:Address=<Address>{};
  public State:String;
  public Country:String;
  public errMsg:String;
  
  public ViewModel:viewModel=<viewModel>{};


  @Input() params: string;
  @Input() address: string;
  @Output('submitAddress') submitAddress = new EventEmitter<any>();


  ngOnInit() { 
    this.titledata = [
          {"text" :"Mr","value" :"Mr"},
          {"text" :"Mrs","value":"Mrs"},
          {"text" :"Title1","value":"title"}
        ];

        this.invoicedeliverydata = [
          {"text" :"Email","value" :"Email"},
          {"text" :"Others","value":"Others"},
         ];
       
        //set values of view model based on api call
        this.ViewModel.FirstName= { visible:true,disabled:true,required:true};
     
        this.ViewModel.LastName={ visible:true,disabled:false,required:true};
              
  }
  

  // get data from react App
  ngOnChanges() {
           
      console.log("Data from React App : "+this.params);   
         
    
  }
 // ngAfterContentChecked() {
  //  console.log("ngAfterContentChecked :" + this.params);
  //}

  
 // ngAfterViewChecked() {
  //  console.log("ngAfterViewChecked:" +this.params);
  //}


  // create address based on input data
  onSubmit() {
    
   this.validateInput();

   let addrs: Address = {
    Title:this.addres.Title,
    FirstName : this.addres.FirstName,
    LastName:this.addres.LastName,
    MiddleInitial:this.addres.MiddleInitial,
    Department:this.addres.Department,
    InvoicingEmail:this.addres.InvoicingEmail,
    MobilePhone:this.addres.MobilePhone,
    WorkPhone:this.addres.WorkPhone,
    Fax:this.addres.Fax,
    InvoiceDelivery:this.addres.InvoiceDelivery
    };
   
   if(this.errMsg=='')
   {
     let adr = {
      "address":  JSON.stringify(addrs)
   
    };
     
    // pass zz
     this.submitAddress.emit(adr);
     alert('emitting event:'+JSON.stringify(addrs));
     console.log('emitting event:'+JSON.stringify(addrs));
  
  }

else
{
  alert(this.errMsg);
}

  }
  
  //clear fields
  onCancel() {
    this.addres.FirstName='';
    this.addres.LastName='';
    this.addres.MiddleInitial='';
    this.addres.Department='';
    this.addres.Fax=null;
    this.addres.WorkPhone=null;
    this.addres.MobilePhone=null;
    this.addres.InvoicingEmail='';
  }
   
  //validate input before creating address
  validateInput()
  {
    //alert(this.params);  --to check for value being passed from react
    this.errMsg='';
    if(this.addres.Title==null||this.addres.FirstName==null||this.addres.LastName==null||this.addres.MiddleInitial==null||this.addres.Department==null||this.addres.Fax==null||this.addres.WorkPhone==null||this.addres.MobilePhone==null||this.addres.InvoicingEmail==null)
    this.errMsg=this.errMsg+'Please fill all the fields';
    
    else if(!(this.addres.MobilePhone.toString().match(/^\d{10}$/)))
    
      this.errMsg=this.errMsg+' Please enter valid mobile number';
  }

  //  listner method from child component which is used to update model with user data
  setModelValue(data)
  {
    if(data.model=="Title")
      this.addres.Title=data.value;
    else if(data.model=="FirstName")
      this.addres.FirstName=data.value; 
     else if(data.model=="LastName")
      this.addres.LastName=data.value;
     else if(data.model=="MiddleInitial")
      this.addres.MiddleInitial=data.value; 
      else if(data.model=="Department")
      this.addres.Department=data.value; 
      else if(data.model=="InvoicingEmail")
      this.addres.InvoicingEmail=data.value; 
      else if(data.model=="MobilePhone")
      this.addres.MobilePhone=data.value; 
      else if(data.model=="WorkPhone")
      this.addres.WorkPhone=data.value; 
      else if(data.model=="Fax")
      this.addres.Fax=data.value; 
      else if(data.model=="InvoiceDelivery")
      this.addres.InvoiceDelivery=data.value;  
  }

}

