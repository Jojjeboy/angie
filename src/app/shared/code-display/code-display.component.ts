import { Component } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
  styleUrls: ['./code-display.component.scss']
})
export class CodeDisplayComponent {

  response: HighlightResult;

  code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;

  codeCss = `
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  margin: 1em;
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

}
