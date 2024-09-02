import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChangemdpComponent } from './profile-changemdp.component';

describe('ProfileChangemdpComponent', () => {
  let component: ProfileChangemdpComponent;
  let fixture: ComponentFixture<ProfileChangemdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileChangemdpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileChangemdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
