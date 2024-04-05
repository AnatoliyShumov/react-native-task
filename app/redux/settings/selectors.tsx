import {createSelector} from 'reselect';

const selectMain = (state: any) => state.get('settings');

export const selectIsLoading = createSelector(selectMain, substate =>
  substate.get('isLoading'),
);

export const selectLanguage = createSelector(selectMain, substate =>
  substate.get('lang'),
);
