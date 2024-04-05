import React, {ReactChild} from 'react';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import messages_en from '../../assets/translation/en.json';
import messages_ru from '../../assets/translation/ru.json';
import {createStructuredSelector} from 'reselect';
import {selectLanguage} from '../../redux/settings/selectors';

export const messages = {
  en: messages_en,
  ru: messages_ru,
};

// type
type IProps = {
  lng: string;
  children: ReactChild;
};

// @ts-ignore
const flattenMessages = (nestedMessages: any, prefix = '') =>
  // eslint-disable-next-line @typescript-eslint/no-shadow
  Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      // @ts-ignore
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});

const TranslateProvider = (props: IProps) => {
  const {lng} = props;
  // @ts-ignore
  const message = messages[lng];

  return (
    <IntlProvider locale={lng} messages={flattenMessages(message)}>
      {props.children}
    </IntlProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  lng: selectLanguage,
});

export default connect(mapStateToProps)(TranslateProvider);
