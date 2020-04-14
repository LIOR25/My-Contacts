import * as actions from "./contact.actions";
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, ActionsSubject } from "@ngrx/store";

export interface Contact {
  id?: string;
  name: string;
  email: string;
  city: string;
}

export const contactAdapter = createEntityAdapter<Contact>();
export interface State extends EntityState<Contact> {}

// inital state

// const defaultContact = {
//   ids: ["1"],
//   entities: {
//     "1": {
//       id: "1",
//       name: "Lior",
//       email: "Lior@gmail.com",
//       city: "Tel Aviv",
//     },
//   },
// };

// export const initialState: State = contactAdapter.getInitialState(defaultContact );

// Reducer

// export function contactReducer(
//   state: State = initialState,
//   action: actions.ContactActions
// ) {
//   switch (action.type) {
//     case actions.CREATE:
//       return contactAdapter.addOne(action.contact, state);

//     case actions.UPDATE:
//       return contactAdapter.updateOne(
//         {
//           id: action.id,
//           changes: action.changes,
//         },
//         state
//       );

//     case actions.DELETE:
//       return contactAdapter.removeOne(action.id, state);

//     default:
//       return state;
//   }
// }

export const initialState: State = contactAdapter.getInitialState();


export function contactReducer(
  state: State = initialState,
  action: actions.ContactActions
) {
  switch (action.type) {
    case actions.ADD_ALL:
      return contactAdapter.addAll(action.contacts, state);
    case actions.MODIFIED:
      return contactAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload,
        },
        state
      );

    case actions.REMOVED:
      return contactAdapter.removeOne(action.payload.id, state);

    default:
      return state;
  }
}

// Create the default selectors

export const getContactState = createFeatureSelector<State>('contact');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = contactAdapter.getSelectors(getContactState);