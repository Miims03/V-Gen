import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePermComponent } from './profile-perm.component';

describe('ProfilePermComponent', () => {
  let component: ProfilePermComponent;
  let fixture: ComponentFixture<ProfilePermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
