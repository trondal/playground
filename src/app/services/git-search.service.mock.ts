import { of } from 'rxjs';

export class GitSearchServiceMock {
  searchRepositories = (query: string) => {
    return of([]);
  };

  searchUsers = (query: string) => {
    return of([]);
  };
}
