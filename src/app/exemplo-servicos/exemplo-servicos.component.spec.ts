import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicosComponent } from './exemplo-servicos.component';

describe('ExemploServicosComponent', () => {
  let component: ExemploServicosComponent;
  let fixture: ComponentFixture<ExemploServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
