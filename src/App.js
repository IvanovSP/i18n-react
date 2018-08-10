import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import { welcomeMessage, peopleMessage } from './message';
import logo from './logo.svg';
import './App.css';

import ComponentUsingMacro from './ComponentUsingMacro';

class App extends Component {
  render() {
    console.log(welcomeMessage.id, welcomeMessage.defaultMessage);

    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{
            t([welcomeMessage.id, welcomeMessage.defaultMessage])
          }</h2>
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div className="App-intro">
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div>{t('description.part2')}</div>
        <hr />
        <Trans
          i18nKey={peopleMessage.id}
          defaults={peopleMessage.defaultMessage}
          values={{ numPersons: 1000 }}
        >
        </Trans>
      </div>
    );
  }
}

export default translate('translations')(App);
