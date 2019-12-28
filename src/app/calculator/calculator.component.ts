import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numm='0';
  firstnumm=null;
  operator=null;
  secnumm=false;



  constructor() { }

  ngOnInit() {
  }

  public getnum(n: String){
    
    if(this.secnumm){
      this.numm=n;
      this.secnumm=false;

    }
    else{
      this.numm==='0'?this.numm=n:this.numm+=n;
    }
  }

  public getdec(){
    if(!this.numm.includes('.')){
      this.numm+='.';

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

  public getoper(op: String){
    
    if(this.operator===null){
      this.firstnumm=Number(this.numm);
    }
    else if(this.operator){
      const res=this.calculate(this.operator,Number(this.numm));
      this.numm=res;
      this.firstnumm=res;

    }

    this.operator=op;
    this.secnumm=true;
    

  }
  public clear(){
    this.numm='0';
    this.firstnumm=null;
    this.operator=null;
    this.secnumm=false;
  }
}


