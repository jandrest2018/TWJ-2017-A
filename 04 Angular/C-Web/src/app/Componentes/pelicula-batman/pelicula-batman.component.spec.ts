import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaBatmanComponent } from './pelicula-batman.component';

describe('PeliculaBatmanComponent', () => {
  let component: PeliculaBatmanComponent;
  let fixture: ComponentFixture<PeliculaBatmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaBatmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaBatmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
