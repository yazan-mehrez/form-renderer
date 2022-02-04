import {Pipe, PipeTransform} from '@angular/core';
import {FormType} from "../form-set";

@Pipe({
  name: 'inputForm'
})
export class InputFormPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    /**
     * @description To map any different names that coming as an input type
     * @example There is nothing called "check" in input types, but in case we have it then we
     * have to map it to the proper name which is "checkbox"
     */
    if (args[0] === 'inputType') {
      if (!value) {
        return null;
      }
      if (value === 'check') {
        return FormType.checkbox;
      }
    }

    /**
     * @description To map any string to boolean
     */
    if (args[0] === 'inputHidden') {
      if (!value) {
        return null;
      }
      return value === 'true';
    }
    return null;
  }

}
