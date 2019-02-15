import { Component, OnInit } from '@angular/core';
import { GitSearchService } from 'src/app/git-search.service';
import { GitSearch } from 'src/app/git-search';
import { GitUsers } from 'src/app/git-users';
import { Event } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  searchForm: FormGroup;

  searchUsersResult: GitUsers;
  searchRepositoriesResult: GitSearch;

  constructor(private gitSearchService: GitSearchService) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      usersQuery: new FormControl(''),
      repositoriesQuery: new FormControl(''),
    });
  }

  searchUsers() {
    const query = this.searchForm.get('usersQuery').value;
    if (!query || query.length < 2) {
      return;
    }
    this.gitSearchService.searchUsers(query).subscribe( response => {
      this.searchUsersResult = response;
    });
  }

  searchRepositories() {
    const query = this.searchForm.get('repositoriesQuery').value;
    if (!query || query.length < 2) {
      return;
    }
    this.gitSearchService.searchRepositories(query).subscribe( response => {
      this.searchRepositoriesResult = response;
    });
  }

}
