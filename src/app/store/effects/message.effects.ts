import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {messageError, messageSuccess} from 'src/app/store/actions/message.actions';

@Injectable()
export class MessageEffects {
  constructor(private actions$: Actions, private service: ToastrService) {}

  success$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(messageSuccess),
        tap(({ message, title }) => {
          this.service.success(message, title);
        })
      ),
    { dispatch: false }
  );

  error$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(messageError),
        tap(({ message, title }) => {
          this.service.error(message, title);
        })
      ),
    { dispatch: false }
  );
}
