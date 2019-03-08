import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GitSearch } from 'src/app/services/git-search';
import { GitSearchService } from 'src/app/services/git-search.service';
import { GitUsers } from 'src/app/services/git-users';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AdvancedSearchModel } from '../advanced-search-model';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss'],
})
export class GitSearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    usersQuery: new FormControl(''),
    repositoriesQuery: new FormControl(''),
  });

  searchUsersResult: GitUsers;
  searchRepositoriesResult: GitSearch;
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  title: string;

  constructor(private gitSearchService: GitSearchService, private route: ActivatedRoute, private router: Router) {
    this.searchForm = new FormGroup({
      usersQuery: new FormControl(''),
      repositoriesQuery: new FormControl(''),
    });
  }

  model = new AdvancedSearchModel('', '', '', null, null, '');
  modelKeys = Object.keys(this.model);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.gitSearch();
    });
  }

  gitSearch() {
    this.gitSearchService.gitSearch(this.searchQuery).then(
      response => {
        this.searchResults = response;
      },
      error => {
        alert('Error: ' + error.statusText);
      }
    );
  }

  sendQuery = () => {
    this.searchResults = null;

    const search: string = this.model.q;
    let params = '';
    this.modelKeys.forEach(elem => {
      if (elem === 'q') {
        return false;
      }
      if (this.model[elem]) {
        params += '+' + elem + ':' + this.model[elem];
      }
    });
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = search + '+' + params;
    }
    this.displayQuery = this.searchQuery;

    this.gitSearch();
    //this.router.navigate(['/search' + this.searchQuery]);
  };

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
