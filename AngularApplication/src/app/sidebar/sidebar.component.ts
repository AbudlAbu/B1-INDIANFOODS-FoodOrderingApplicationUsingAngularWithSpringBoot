import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
r1 : string = "adigas";
r2 : string = "rotighar";
r3 : string = "punjabirasoi";
r4 : string = "udupi";

//This Constructor is used for routing to restaurant and divide it on the basis of id 
  constructor( public router :Router) {
    this.router.navigate(['/restaurant1',this.r1]);
    this.router.navigate(['/restaurant2',this.r2]);
    this.router.navigate(['/restaurant3',this.r3]);
    this.router.navigate(['/restaurant4',this.r4]);
    this.router.navigateByUrl('');
   }


  ngOnInit(): void {
  }

}
