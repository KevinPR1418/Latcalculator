import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  input(x){
    let y = document.getElementById("isi");
    y.innerHTML+=x;
  }
  calcu(){
    this.router.navigate(['/hasil']);
    let y : string  = document.getElementById("isi").innerHTML;
    let hasil = eval(y)
    return hasil;
  }
}