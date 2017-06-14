import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotosPeliculaComponent } from './votos-pelicula.component';

describe('VotosPeliculaComponent', () => {
  let component: VotosPeliculaComponent;
  let fixture: ComponentFixture<VotosPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotosPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
