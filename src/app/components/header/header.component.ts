import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fullName: string = "";
  constructor() { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('FullName') as string;
  }

}
