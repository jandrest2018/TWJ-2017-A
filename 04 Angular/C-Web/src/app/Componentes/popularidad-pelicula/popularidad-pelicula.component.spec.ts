import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularidadPeliculaComponent } from './popularidad-pelicula.component';

describe('PopularidadPeliculaComponent', () => {
  let component: PopularidadPeliculaComponent;
  let fixture: ComponentFixture<PopularidadPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularidadPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularidadPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
