import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GitSearch } from 'src/app/services/git-search';
import { GitSearchService } from 'src/app/services/git-search.service';
import { GitUsers } from 'src/app/services/git-users';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    usersQuery: new FormControl(''),
    repositoriesQuery: new FormControl(''),
  });

  searchUsersResult: GitUsers;
  searchRepositoriesResult: GitSearch;

  constructor(private gitSearchService: GitSearchService) {
    /* this.searchForm = new FormGroup({
      usersQuery: new FormControl(''),
      repositoriesQuery: new FormControl(''),
    }); */
  }

  ngOnInit() {}

  searchUsers() {
    const query = this.searchForm.get('usersQuery').value;
    if (!query || query.length < 2) {
      return;
    }
    this.gitSearchService.searchUsers(query).subscribe(response => {
      this.searchUsersResult = response;
    });
  }

  searchRepositories() {
    const query = this.searchForm.get('repositoriesQuery').value;
    if (!query || query.length < 2) {
      return;
    }
    this.gitSearchService.searchRepositories(query).subscribe(response => {
      this.searchRepositoriesResult = response;
    });
  }
}
