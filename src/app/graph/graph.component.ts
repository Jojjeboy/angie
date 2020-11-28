import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit{

  @Input() xaxis: [];
  @Input() yaxis: [];



  
  
  
  
  ngOnInit(): void {
  }

}
