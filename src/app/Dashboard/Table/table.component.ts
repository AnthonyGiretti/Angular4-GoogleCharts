import { Component, OnInit } from '@angular/core';

import { DataTableResource } from 'angular-4-data-table';
import persons from './table-data';

@Component({
  selector: 'table-data',
    providers: [],
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})
export class TableComponent {

    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
      console.log(params);
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
    
}