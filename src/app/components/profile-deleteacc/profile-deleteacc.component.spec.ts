import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDeleteaccComponent } from './profile-deleteacc.component';

describe('ProfileDeleteaccComponent', () => {
  let component: ProfileDeleteaccComponent;
  let fixture: ComponentFixture<ProfileDeleteaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDeleteaccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDeleteaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
