import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  private qArr:[questionModule]

  constructor() { }

  ngOnInit() {
    let json = '[ { "question": "Do you believe in meteorological predictions?", "answers": [ "yes", "no" ] }, { "question": "Do you believe in astrological predictions?",'
      + ' "answers": [ "yes", "no" ] } ]';

    this.qArr = JSON.parse(json)

  }

}

interface questionModule {

  question:String;
  answers:[String];


}
