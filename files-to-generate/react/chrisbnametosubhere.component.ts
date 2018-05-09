import * as React from 'react';
import { connect } from 'react-redux';
import {
  Dispatch,
} from 'redux';

import {
  StateInterface,
} from './../../models';

import {
  Action,
} from './../../store';

import {
  chrisbnametosubhereCamelCaseDispatchProps,
  chrisbnametosubhereCamelCasePresentation,
  chrisbnametosubhereCamelCaseStateProps,
} from './';

const mapStateToProps = (
  state: StateInterface,
): chrisbnametosubhereCamelCaseStateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
): chrisbnametosubhereCamelCaseDispatchProps => {
  return {};
};

export const chrisbnametosubhereCamelCaseComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(chrisbnametosubhereCamelCasePresentation);
