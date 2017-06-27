import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { peopleStarWars } from './people-star-wars.component';

describe('peopleStarWars', () => {
  let component: peopleStarWars;
  let fixture: ComponentFixture<peopleStarWars>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ peopleStarWars ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(peopleStarWars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
