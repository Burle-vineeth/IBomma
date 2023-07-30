import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private ac: ActivatedRoute) {}
  contact : boolean = false;
  dmca : boolean = false;
  tc : boolean= false;
  ngOnInit() {
    this.ac.queryParamMap.subscribe( (qparam) => {
      let footer = qparam.get('footer');
      // console.log(footer);
      if(footer == 'contact') {
        this.contact = true;
        this.dmca = false;
        this.tc = false;
      } else if(footer == 'DMCA') {
        this.dmca = true;
        this.tc = false;
        this.contact = false;
      } else if (footer == 'T&C') {
        this.tc = true;
        this.dmca = false;
        this.contact = false;
      }
    })
  }
}
