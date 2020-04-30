import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";

// @Component({
//   selector: 'app-database',
//   templateUrl: './database.component.html',
//   styleUrls: ['./database.component.scss']
// })
// export class DatabaseComponent implements OnInit {




@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() tableData;
  @Input() columnHeader;
  objectKeys = Object.keys;
  dataSource;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.tableData)
    //     this.dataSource = new MatTableDataSource(this.tableData);

  }

  ngOnChanges() {
    if(this.tableData) {
      this.dataSource = new MatTableDataSource(this.tableData);
    }

  }
}
