import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormSetService {

  constructor(private http: HttpClient) { }

  /**
   * @description Get form data using Http Request
   * @param url
   */
  public getFormSet(url: string): Observable<any> {
    return this.http.get(url);
  }
}
