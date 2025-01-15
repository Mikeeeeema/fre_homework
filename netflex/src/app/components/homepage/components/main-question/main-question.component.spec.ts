import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuestionComponent } from './main-question.component';

describe('MainQuestionComponent', () => {
  let component: MainQuestionComponent;
  let fixture: ComponentFixture<MainQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
