import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { Issue } from '../../issue.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'description','severity', 'status', 'actions'];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }








  displayCounter(p){
    console.log("Child is implementing parent method");
    console.log(p.count);
  }








  fetchIssues() {
    this.apiService.getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      console.log("Data receieved...");
      console.log(this.issues);
    });
  }

  editIssue(id){
    this.router.navigate([`/edit/${id}`])
  }
  deleteIssue(id) {
    this.apiService.deleteIssue(id).subscribe(() => {
    this.fetchIssues();
    });
  }

}
