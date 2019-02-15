import { TestBed } from '@angular/core/testing';
import { GitSearchService } from 'src/app/services/git-search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('GitSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: GitSearchService = TestBed.get(GitSearchService);
    expect(service).toBeTruthy();
  });
});
