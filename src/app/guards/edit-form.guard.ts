import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EditComponent } from '../event/edit/edit.component';

@Injectable({
  providedIn: 'root',
})
export class EditFormGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent): Observable<boolean> | boolean {
    if (component.form.pristine || component.isComplete) {
      return true;
    }

    const confirmation = window.confirm(
      '作業中の内容が失われますがよろしいですか？'
    );

    return of(confirmation);
  }
}
