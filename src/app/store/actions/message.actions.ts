import { createAction, props } from '@ngrx/store';

export enum MessageActionTypes {
  ERROR = '[Message] Error',
  SUCCESS = '[Message] Success',
}

export const messageSuccess = createAction(MessageActionTypes.SUCCESS, props<{ message: string; title?: string }>());

export const messageError = createAction(MessageActionTypes.ERROR, props<{ message: string; title?: string }>());
