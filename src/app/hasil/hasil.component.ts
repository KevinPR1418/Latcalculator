import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {hasil} from '@./input.component.ts';

@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.css']
})
export class HasilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    let y = document.getElementById("isi");
    y.innerHTML+=x;
  }
  back(){
    this.router.navigate(['/input']);
  }

}