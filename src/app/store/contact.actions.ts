import { Action } from "@ngrx/store";
import { Contact } from "./contact.reducer";

// export const CREATE = "[Contacts] Create";
// export const UPDATE = "[Contacts] Update";
// export const DELETE = "[Contacts] Delete";


// export class Create implements Action {
//   readonly type = CREATE;
//   constructor(public contact: Contact) {}
// }

// export class Update implements Action {
//   readonly type = UPDATE;
//   constructor(public id: string, public changes: Partial<Contact>) {}
// }

// export class Delete implements Action {
//   readonly type = DELETE;
//   constructor(public id: string) {}
// }

// export type ContactActions = Create | Update | Delete;



export const QUERY = "[Contacts] query contacts";
export const ADD_ALL = "[Contacts] Add All";


export const ADDED = "[Contacts] added";
export const MODIFIED = "[Contacts] modified";
export const REMOVED = "[Contacts] removed";
export const UPDATE = "[Contacts] update";
export const SUCCESS = "[Contacts] update success";

// Initial query


export class Query implements Action {
  readonly type = QUERY;
  constructor(){}
}

export class AddAll implements Action {
         readonly type = ADD_ALL;
         constructor(public contacts: Contact[]) {}
       }

export class Modified implements Action {
         readonly type = MODIFIED;
         constructor(public payload?: Contact) {}
       }


       export class Removed implements Action {
                readonly type = REMOVED;
                constructor(public payload?: Contact) {}
              }

              
 export class Update implements Action {
          readonly type = UPDATE;
          constructor(public id: string,
            public changes: Partial<Contact>) {}
        }

         export class Success implements Action {
                  readonly type = SUCCESS;
                  constructor() {}
                }



                export type ContactActions =
                  | Query
                  | Update
                  | Modified
                  | Removed
                  | Success
                  | AddAll;
