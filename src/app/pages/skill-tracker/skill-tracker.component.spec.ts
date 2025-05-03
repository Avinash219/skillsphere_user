import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTrackerComponent } from './skill-tracker.component';

describe('SkillTrackerComponent', () => {
  let component: SkillTrackerComponent;
  let fixture: ComponentFixture<SkillTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
