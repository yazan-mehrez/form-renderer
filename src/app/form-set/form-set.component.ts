import {Component, Input, OnInit} from '@angular/core';
import {FormSet} from "./form-set";
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-set',
  templateUrl: './form-set.component.html',
  styleUrls: ['./form-set.component.scss']
})
export class FormSetComponent implements OnInit {
  public rendererFormGroup: FormGroup;
  public _formDetails: FormSet[] = [];

  constructor(private _fb: FormBuilder) {
  }

  /**
   * @description Assign the upcoming form details, that would allow us listening to any changes
   * @param formSet
   */
  @Input() set appendFormSet(formSet: FormSet[]) {
    if (formSet) {
      this._formDetails = formSet;
    }
  }

  /**
   * @description Get access to the fields as a form array
   */
  public get f() {
    return this.rendererFormGroup.get('form') as FormArray;
  }

  /**
   * @description The Main Results for the form
   */
  public submit() {
    console.log('All Information');
    console.log(this.rendererFormGroup.getRawValue());
    console.log('*******');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('Only Values');
    let results: any = [];
    this.rendererFormGroup.getRawValue().form.map((obj: any) => {
      results.push({value: obj.value});
    })
    console.log(results);
    console.log('*******');
  }

  /**
   * @description
   */
  ngOnInit() {
    this.prepareForm();
  }

  /**
   * @description
   * 1- Prepare the form.
   * 2- Map the created form to our json array. (We can avoid this step in case we want to show only values)
   * 3- Patch the values from json array to our form. (We can avoid this step in case we want to show only values)
   * @private
   */
  private prepareForm() {
    this.rendererFormGroup = this._fb.group({
      form: this._fb.array([])
    });

    this._formDetails.forEach(() => {
      this.f.push(this.createForm());
    });

    this.f.patchValue(this._formDetails);
  }

  /**
   * @description What should each item in the array have
   * @private
   */
  private createForm(): FormGroup {
    return this._fb.group({
      field: {value: null, disabled: false},
      label: {value: null, disabled: false},
      type: {value: null, disabled: false},
      hidden: {value: null, disabled: false},
      mandatory: {value: null, disabled: false},
      value: {value: null, disabled: false}
    });
  }

  /**
   * @description Validator to bind mandatory fields
   * @param mandatory
   * @param form
   */
  setValidators(mandatory: boolean, form: AbstractControl) {
    if (mandatory) {
      if (form.get('value')) {
        form.get('value')?.setValidators(Validators.required)
      }
      form.setValidators([Validators.required]);
      form.updateValueAndValidity();
    }
  }
}
