import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISingleRepo} from "../../model/github";

@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit, OnChanges {
  @Input()
  repository: Array<ISingleRepo>;

  constructor() {
  }

  ngOnInit(): void {
    this.repository = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('repository' in changes) {
      console.log(this.repository);
    }
  }

}
