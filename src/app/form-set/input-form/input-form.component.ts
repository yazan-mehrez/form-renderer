import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {FormType} from "../form-set";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputFormComponent),
    },
  ],
})
export class InputFormComponent implements OnInit, ControlValueAccessor {
  @Input() inputControl: FormControl = new FormControl();
  @Input() inputType: string = FormType.text;
  @Input() inputLabel: string = '';
  @Input() inputHidden: boolean = false;
  @Input() inputMandatory: boolean = false;
  @Input() formControlName: any;
  @Output() setValidators = new EventEmitter();
  FormType = FormType;

  constructor() {
  }


  /**
   * @description Register any changes to the input control
   */
  ngOnInit(): void {
    this.inputControl.valueChanges.subscribe((value) => {
      this.valueSelected(value);
    });

    if (this.inputMandatory) {
      this.inputControl.setValidators([Validators.required]);
      this.inputControl.updateValueAndValidity();
      this.setValidators.emit(this.inputMandatory);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  propagateChange = (_: any) => {
  };

  registerOnTouched(): void {
  }

  valueSelected(value: any) {
    this.propagateChange(value);
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputControl.disable();
    } else {
      this.inputControl.enable();
    }
  }

  writeValue(value: any) {
    if (value === null) {
      this.inputControl.reset();
    }
    this.inputControl.setValue(value);
    return value;
  }

}
