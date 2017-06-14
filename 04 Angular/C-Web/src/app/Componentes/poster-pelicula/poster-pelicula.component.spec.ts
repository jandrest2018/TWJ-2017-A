import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterPeliculaComponent } from './poster-pelicula.component';

describe('PosterPeliculaComponent', () => {
  let component: PosterPeliculaComponent;
  let fixture: ComponentFixture<PosterPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
