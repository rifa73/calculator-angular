import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
   stat="";
   numm="0";
  firstnumm=null;
  operator=null;
  secnumm=false;
  check=false;
  hold="";

  constructor() { }

  ngOnInit() {
  }

  public getnum(n: string){
    //console.log(n)
    if(this.secnumm){
      this.numm=n;
      //stat+=n;
      
      this.stat+=n;
      this.secnumm=false;
      

    }
    else{
      this.numm==='0'?this.numm=n:this.numm+=n;
      this.stat+=n;
      
     //stat+=n;
    }
  }

  public getdec(){
    if(!this.numm.includes('.')){
      this.numm+='.';
      this.stat+='.';

    }
  }

  private calculate(oper,secnummber){
    switch(oper){
      case '+':
        return this.firstnumm+=secnummber;
      case '-':
          return this.firstnumm-=secnummber;
      case '*':
        return this.firstnumm*=secnummber;
      case '/':
        return this.firstnumm/=secnummber;
      case '=':
        return secnummber;

    }
  }

  public getoper(op: string){
    //this.stat+=op;
    if(this.check){
      
      this.stat="";
      this.check=false;
    }
    
    if(op==='='){
      this.stat="";
    }
    if(this.operator===null){
      this.firstnumm=Number(this.numm);
    }
    else if(this.operator){
      
      this.stat="";
      const res=this.calculate(this.operator,Number(this.numm));
      
      this.numm=res;
      this.stat+=res;
      
      this.firstnumm=res;
      this.check=true;
      
    }
    if(op!='='){
    this.stat+=op;
    }
    this.operator=op;
    this.secnumm=true;
    

  }
  public clear(){
    this.numm='0';
    this.firstnumm=null;
    this.operator=null;
    this.secnumm=false;
    this.stat="";
    this.check=false;
  }
}


