import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() public btnName!: string;
  @Input() public route!: string;
  constructor() {
    // this.btnName = 'Nom du bouton';
  }

  ngOnInit(): void {}
}
