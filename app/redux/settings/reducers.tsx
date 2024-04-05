import {
  authActionTypes,
} from "@redux/auth/constants";
import {Reducer} from "redux";
import {fromJS, Map} from "immutable";
import {settingsActionTypes} from "@redux/settings/constants";


interface initialStateInterface {
  lang: string
  isLoading: boolean;

}


const initialState: initialStateInterface = {
  lang: 'en',
  isLoading: false,
};

// @ts-ignore
const settingReducer: Reducer<Map<string, any>, settingsActionTypes> = (
  state = fromJS(initialState),
  { type, payload }
) => {
  switch (type) {
    case settingsActionTypes.CHANGE_LANGUAGE_SUCCESS:
      return state.merge({
        isLoading: false,
        lang: payload,
      });

    case authActionTypes.RESET_ALL:
      return initialState;


    default:
      return state;
  }
};

export default settingReducer;
