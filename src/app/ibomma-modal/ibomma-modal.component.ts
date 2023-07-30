import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ibomma-modal',
  templateUrl: './ibomma-modal.component.html',
  styleUrls: ['./ibomma-modal.component.css']
})
export class IbommaModalComponent {
  constructor(private matdialog: MatDialog,private router : Router) {}
  close() {
    this.matdialog.closeAll();
    this.router.navigate(['/homepage']);
  }
}
