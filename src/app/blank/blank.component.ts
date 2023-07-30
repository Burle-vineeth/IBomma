import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IbommaModalComponent } from '../ibomma-modal/ibomma-modal.component';
import { LocalStorageToken } from '../localStorage.token';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
  constructor(private matdialog : MatDialog,@Inject(LocalStorageToken) private dd: Storage) {}
  ngModalOptions: any = {
    backdrop : 'static',
    keyboard : false,
  }
  ngOnInit() {
    setTimeout( () => {
      // console.log("ibomma");
      this.matdialog.open(IbommaModalComponent,{disableClose:true});
      // console.log(this.matdialog);
    },500);
  }

}
