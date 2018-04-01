/**
 * Homepage selectors
 */

import { createSelector } from "reselect";

const selectHome = state => state.get("loginform");

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.formState.username);

const makeSelectPassword = () =>
  createSelector(selectHome, homeState => homeState.formState.password);

export { selectHome, makeSelectUsername, makeSelectPassword };
