import * as React from 'react';

import './chrisbnametosubhere.scss';

import {
  chrisbnametosubhereCamelCaseDispatchProps,
  chrisbnametosubhereCamelCaseStateProps,
} from './';

interface chrisbnametosubhereCamelCaseCombinedProps
  extends chrisbnametosubhereCamelCaseStateProps,
  chrisbnametosubhereCamelCaseDispatchProps {}

export const chrisbnametosubhereCamelCasePresentation: React.SFC<chrisbnametosubhereCamelCaseCombinedProps> =
() => {
  return (
    <div className='c-chrisbnametosubhere'>
      chrisbnametosubhereCamelCase
    </div>
  );
};
