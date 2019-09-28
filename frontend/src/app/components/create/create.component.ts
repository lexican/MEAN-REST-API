import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

createForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder ) { 
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      severity: '',
      description: ''
    })
  }

  addIssue(title, responsible, description, severity){
    console.log(title);
    console.log(responsible);
    console.log(description);
    console.log(severity);
    this.apiService.addIssue(title, responsible, description, severity).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }


  ngOnInit() {
  }

}
