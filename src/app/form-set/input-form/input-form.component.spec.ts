import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputFormComponent} from './input-form.component';
import {InputFormPipe} from "./input-form.pipe";

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFormComponent, InputFormPipe],
      imports: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
