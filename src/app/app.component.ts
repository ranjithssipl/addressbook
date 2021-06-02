import { getLocaleNumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import studentsData from './people.json';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'addressbook';
  people = studentsData['people'];
  selected = [];
  addressInfo;
  sortType = "DSC";

  constructor() {
    this.checkInitialData();
  }
  checkInitialData() {
    this.selected = [this.people[0].name];
    this.addressInfo = this.people[0];
  }

  selectedItem(event) {
    this.selected = [event.name];
    this.addressInfo = event;
  }

  uploadFile() {
    console.log("click")
    $('#image-type').trigger('click');

  }
  onSelectFile(event) {
    // Image Upload pending
    // I try to upload image and store it locally, 
    // can't able to store locally but I get file info, we can send to backend and store
    // I tried Blob for storing locally but it's also failed

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
    }
  }
  sorting() {
    if (this.sortType == "ASC") {
      this.people.sort((a, b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0));
      this.sortType = "DSC";
    }
    else {
      this.people.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      this.sortType = "ASC";
    }
  }

}
