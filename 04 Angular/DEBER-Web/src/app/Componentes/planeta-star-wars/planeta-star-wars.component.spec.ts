import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { planetaStarWars } from './planeta-star-wars.component';

describe('planetaStarWars', () => {
  let component: planetaStarWars;
  let fixture: ComponentFixture<planetaStarWars>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ planetaStarWars ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(planetaStarWars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
