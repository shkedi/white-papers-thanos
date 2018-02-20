import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromEvent'
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
@Injectable()
export class QuestionnaireComponent implements OnInit {

  private qArr:[questionModule]
  private config = "https://2hzw87gv9e.execute-api.us-east-1.amazonaws.com/dev/questionnaire?id=q1w2e3";

  /*
  private httpOptions = {
    headers: new HttpHeaders({
      :  ,
      'Access-Control-Allow-Origin': '*'
    })
  };
*/

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let json = '[ { "question": "Do you believe in meteorological predictions?", "answers": [ "yes", "no" ] }, { "question": "Do you believe in astrological predictions?",'
      + ' "answers": [ "yes", "no" ] } ]';

    //this.qArr = JSON.parse(json)



    this.getConfig()
      .subscribe(data => {
        console.log(data['questions'])

        this.qArr = JSON.parse(data['questions'])
      });


  }

  getConfig() {
    const headers =  new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    return this.http.get(this.config, { headers });
  }

}


interface questionModule {

  question:String;
  answers:[String];


}
