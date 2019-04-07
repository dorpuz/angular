import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../services/logger.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private logService: LoggerService) { }

  ngOnInit() {
  }

  logToService(){

    this.logService.logger('Contact component');
  }
}
