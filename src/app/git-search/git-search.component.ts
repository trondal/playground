import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  searchUsersResult: GitUsers;
  searchRepositoriesResult: GitSearch;
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  title: string;

  form: FormGroup;
  formControls = {};

  constructor(private gitSearchService: GitSearchService, private route: ActivatedRoute, private router: Router) {
    this.modelKeys.forEach(key => {
      const validators = [];
      if (key === 'q') {
        validators.push(Validators.required);
      }
      if (key === 'stars') {
        validators.push(Validators.maxLength(4));
      }
      validators.push(this.noSpecialChars);
      this.formControls[key] = new FormControl(this.model[key], validators);
    });
    this.form = new FormGroup(this.formControls);
  }

  model = new AdvancedSearchModel('', '', '', null, null, '');
  modelKeys = Object.keys(this.model);
  noSpecialChars(c: FormControl) {
    const REGEXP = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);

    return REGEXP.test(c.value)
      ? {
          validateEmail: {
            valid: false,
          },
        }
      : null;
  }

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

  sendQueryReactive = () => {
    this.searchResults = null;
    const search: string = this.form.value['q'];
    let params = '';
    this.modelKeys.forEach(elem => {
      if (elem === 'q') {
        return false;
      }
      if (this.form.value[elem]) {
        params += '+' + elem + ':' + this.form.value[elem];
      }
    });
    this.searchQuery = search;
    if (params !== '') {
      this.searchQuery = search + params;
    }
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  };

  sendQueryTemplate = () => {
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
  };

  searchUsers() {
    const query = this.form.get('usersQuery').value;
    if (!query || query.length < 2) {
      return;
    }
    this.gitSearchService.searchUsers(query).subscribe(response => {
      this.searchUsersResult = response;
    });
  }

  searchRepositories() {
    const query = this.form.get('repositoriesQuery').value;
    if (!query || query.length < 2) {
      return;
    }
    this.gitSearchService.searchRepositories(query).subscribe(response => {
      this.searchRepositoriesResult = response;
    });
  }
}
