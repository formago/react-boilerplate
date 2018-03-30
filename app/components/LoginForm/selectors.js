/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

debugger
const makeSelectUsername = () => createSelector(  
  selectHome,
  (homeState) => "trgtr"
);

export {
  selectHome,
  makeSelectUsername,
};
