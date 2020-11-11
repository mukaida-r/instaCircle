import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteParamsService {
  eventIdSubject = new BehaviorSubject(undefined);

  constructor() {}
}
