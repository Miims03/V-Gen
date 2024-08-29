import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevodComponent } from './createvod.component';

describe('CreatevodComponent', () => {
  let component: CreatevodComponent;
  let fixture: ComponentFixture<CreatevodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatevodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
