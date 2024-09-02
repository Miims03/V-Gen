import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChangeinfoComponent } from './profile-changeinfo.component';

describe('ProfileChangeinfoComponent', () => {
  let component: ProfileChangeinfoComponent;
  let fixture: ComponentFixture<ProfileChangeinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileChangeinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileChangeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
