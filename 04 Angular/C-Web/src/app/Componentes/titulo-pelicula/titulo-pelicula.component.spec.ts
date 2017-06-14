import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPeliculaComponent } from './titulo-pelicula.component';

describe('TituloPeliculaComponent', () => {
  let component: TituloPeliculaComponent;
  let fixture: ComponentFixture<TituloPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
