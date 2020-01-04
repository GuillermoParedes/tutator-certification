import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-project';

  constructor(private loadingService: NgxSpinnerService) {

  }

  ngOnInit() {
    console.log('asdasdasdasdasd');
    this.loadingService.show();

    setTimeout(() => this.loadingService.hide(), 10000);
  }

}
