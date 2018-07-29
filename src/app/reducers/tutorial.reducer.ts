import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

const initialState: Tutorial = {
	name: 'Initial Tutorial',
	url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
	switch (action.type) {
		case TutorialActions.ADD_TUTORIAL:
			return [...state, action.payload];

		case TutorialActions.REMOVE_TUTORIAL:
			const index = action.payload;
			return [...state.slice(0, index), ...state.slice(index + 1)];
		default:
			return state;
	}
}
