import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  pdfLists = [
	{id:1, file:'sample-1.pdf'},
	{id:2, file:'sample-2.pdf'},
	{id:3, file:'sample-1.pdf'},
	{id:4, file:'sample-1.pdf'},
  ];

  ngOnInit(){
    
  }

  viewPDF(myid:number){
    this.router.navigate(['/pdf/view/'+myid]);
  }
}
