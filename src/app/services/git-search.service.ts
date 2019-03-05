import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitUsers } from 'src/app/services/git-users';

import { GitSearch } from './git-search';

@Injectable({
  providedIn: 'root',
})
export class GitSearchService {
  cachedValues: Array<{ [query: string]: GitSearch }> = [];
  cachedSearches: Array<{
    [query: string]: GitSearch;
  }> = [];
  constructor(private http: HttpClient) {}

  searchRepositories = (query: string): Observable<GitSearch> => {
    return this.http.get<GitSearch>('https://api.github.com/search/repositories?q=' + query);
  };

  searchUsers = (query: string): Observable<GitUsers> => {
    return this.http.get<GitUsers>('https://api.github.com/search/users?q=' + query);
  };

  gitSearch = (query: string): Promise<GitSearch> => {
    const promise = new Promise<GitSearch>((resolve, reject) => {
      if (this.cachedSearches[query]) {
        resolve(this.cachedSearches[query]);
      } else {
        this.http
          .get('https://api.github.com/search/repositories?q=' + query)
          .toPromise()
          .then(
            response => {
              resolve(response as GitSearch);
            },
            error => {
              reject(error);
            }
          );
      }
    });
    return promise;
  };
}
