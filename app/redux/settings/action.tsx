import {Dispatch} from 'redux';
import {settingsActionTypes} from './constants';
import {setValueToLocalStorage} from '../../services/tokenStorageService';

export const settingsActions = {
  // SIGN IN
  changeLanguageSuccessAction: (lang: string) => ({
    type: settingsActionTypes.CHANGE_LANGUAGE_SUCCESS,
    payload: lang,
  }),

  // CLEAR ERROR
  clearErrorMessageAction: () => ({
    type: settingsActionTypes.CLEAR_ERROR,
  }),
};

export const changeLanguageAction =
  (lang: string) => async (dispatch: Dispatch) => {
    try {
      setValueToLocalStorage('lang', lang);
      dispatch(settingsActions.changeLanguageSuccessAction(lang));
    } catch (error) {
      console.log('error', error);
    }
  };
