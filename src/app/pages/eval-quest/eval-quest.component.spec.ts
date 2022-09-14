import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalQuestComponent } from './eval-quest.component';

describe('EvalQuestComponent', () => {
  let component: EvalQuestComponent;
  let fixture: ComponentFixture<EvalQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
