import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitSearchServiceMock } from 'src/app/services/git-search.service.mock';
import { GitSearchService } from 'src/app/services/git-search.service';
import { RouterTestingModule } from '@angular/router/testing';
import { GitSearchComponent } from './git-search.component';

describe('GithubComponent', () => {
  let component: GitSearchComponent;
  let fixture: ComponentFixture<GitSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GitSearchComponent],
      imports: [
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatListModule,
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: GitSearchService, useClass: GitSearchServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
