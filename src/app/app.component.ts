import {Component, OnInit} from '@angular/core';
import {FormSet} from "./form-set/form-set";
import {FormSetService} from "./form-set/form-set.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'form-renderer';
  private _formSetUrl = 'assets/to-render.json';
  public _formDetails: FormSet[] = [];

  constructor(private formSetService: FormSetService) {
  }

  /**
   * @description
   */
  ngOnInit() {
    this.getFormSet();
  }

  /**
   * @description To Call the form you want to append in the page.
   * @private
   */
  private getFormSet(){
    this.formSetService.getFormSet(this._formSetUrl).subscribe((response: FormSet[]) => {
      this._formDetails = response;
    })
  }
}
