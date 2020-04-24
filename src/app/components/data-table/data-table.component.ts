import { Component, OnInit, Input } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

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
export class DataTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnHeader;
  objectKeys = Object.keys;
  dataSource;

  constructor() {}

  ngOnInit(): void {
    console.log(this.tableData);
        this.dataSource = new MatTableDataSource(this.tableData);

  }
}
