import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson1';
  fname:string = "beka baghaturia"
  adress:string = "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  arr:any[] = []
  z!:string;
  x(){
    
    this.arr.push(this.info)
    let main = document.querySelector(".main") as HTMLDivElement
    main.innerHTML = ""
    for(var i of this.arr){
        var tmp = `
        <h1>${i}</h1>
        `
        main.innerHTML += tmp
    }
  }
  info:string="hello"
  btntext:string = "hide"
  show:boolean = true;
  showhide(){
     this.show = !this.show
    //  if(this.show == true){
    //   this.btntext = "hide"
    //  }
    //  else{
    //   this.btntext  = "show"
    //  }
    this.show ? this.btntext = "hide" : this.btntext = "show"
  }
}
