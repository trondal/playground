import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GitSearchServiceMock } from 'src/app/services/git-search.service.mock';
import { GitSearchService } from 'src/app/services/git-search.service';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GithubComponent],
      imports: [
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatListModule,

        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: GitSearchService, useClass: GitSearchServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
