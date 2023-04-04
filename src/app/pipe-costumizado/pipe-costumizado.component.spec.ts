import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCostumizadoComponent } from './pipe-costumizado.component';

describe('PipeCostumizadoComponent', () => {
  let component: PipeCostumizadoComponent;
  let fixture: ComponentFixture<PipeCostumizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCostumizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCostumizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
