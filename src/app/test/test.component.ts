import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() { }

  onToggleDtails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  ngOnInit(): void {
  }

}
