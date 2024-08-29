import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVodComponent } from './all-vod.component';

describe('AllVodComponent', () => {
  let component: AllVodComponent;
  let fixture: ComponentFixture<AllVodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllVodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
