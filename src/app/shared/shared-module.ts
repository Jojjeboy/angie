import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeDisplayComponent } from './code-display/code-display.component';
import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'javascript', func: javascript},
    {name: 'css', func: css},
    {name: 'xml', func: xml}
  ];
}


@NgModule({
  declarations: [CodeDisplayComponent],
  imports: [
    CommonModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  exports: [
    CodeDisplayComponent
  ],
})
export class SharedModule { }
