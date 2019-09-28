import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:4000';
  constructor(private httpClient: HttpClient) { }
  getIssues(){
    return this.httpClient.get(`${this.API_URL}/issues`);
    }
  getIssueById(id){
    return this.httpClient.get(`${this.API_URL}/issues/${id}`);
    }
  addIssue(title, responsible, description, severity){
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.httpClient.post(`${this.API_URL}/issues/add`, issue);
  }
  updateIssue(id, title, responsible, description, severity, status){
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.httpClient.post(`${this.API_URL}/issues/update/${id}`, issue);
  }
  deleteIssue(id){
    return this.httpClient.get(`${this.API_URL}/issues/delete/${id}`);
  };
    
}
