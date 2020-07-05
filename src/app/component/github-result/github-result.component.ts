import {Component, Input, OnInit} from '@angular/core';
import {ISingleRepo} from '../../model/github';

@Component({
  selector: 'app-github-result',
  templateUrl: './github-result.component.html',
  styleUrls: ['./github-result.component.css']
})
export class GithubResultComponent implements OnInit {
  @Input()
  repository: Array<ISingleRepo>;

  @Input()
  count: number;

  constructor() {
  }

  ngOnInit(): void {
    this.repository = [];
  }

}
