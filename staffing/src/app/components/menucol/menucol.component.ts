import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menucol',
  templateUrl: './menucol.component.html',
  styleUrls: ['./menucol.component.css']
})
export class MenucolComponent implements OnInit {
  private rut: string;
  constructor(    
    private activeRouter: ActivatedRoute    
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(res => {
      this.rut = res.rut
    })
  }

}
