import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormSetComponent} from './form-set.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('FormSetComponent', () => {
  let component: FormSetComponent;
  let fixture: ComponentFixture<FormSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSetComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
