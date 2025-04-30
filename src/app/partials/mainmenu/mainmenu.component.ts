import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  imports: [RouterLink, RouterLinkActive], //Importing RouterLink and RouterLinkActive for links
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {

  navStyle: string = "block";
  openBtn: string = "none";
  closeBtn: string = "none";

  //Adjusting menu after screen size
  ngOnInit(): void {
    const smallScreen: number = window.innerWidth;

    if(smallScreen < 640) {
      this.navStyle = "none";
      this.openBtn = "block";
      this.closeBtn = "flex";
    }
  }
  
  //Toggle menu
  displayNav(): void {
    if (this.navStyle === "none") {
      this.navStyle = "block";
      this.openBtn = "none";
    } else {
      this.navStyle = "none";
      this.openBtn = "block";
    }
  }
}
