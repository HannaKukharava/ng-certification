import { Actions, ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {messageError, messageSuccess} from "../store/actions/message.actions";

export const successMessageEffect = (actions$: Actions, action: ActionCreator<any>, message: string) => {
  return actions$.pipe(
    ofType(action),
    map(_ => messageSuccess({ message }))
  );
};

export const errorsMessageEffect = (actions$: Actions, action: ActionCreator<any>, message: string) => {
  return actions$.pipe(
    ofType(action),
    map(_ => messageError({ message }))
  );
};
