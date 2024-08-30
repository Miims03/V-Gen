import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsCardComponent } from './produits-card.component';

describe('ProduitsCardComponent', () => {
  let component: ProduitsCardComponent;
  let fixture: ComponentFixture<ProduitsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
