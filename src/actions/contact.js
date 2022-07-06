// Handle a change inside an input
export const CHANGE_FIELD = "CHANGE_FIELD";
export const changeField = (value, field) => ({
  type: CHANGE_FIELD,
  value,
  field,
});
export const CONFIRM_SENDING = "CONFIRM_SENDING";
export const confirmSending = (value) => ({
  type: CONFIRM_SENDING,
  value,
});
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const toggleLoading = (value) => ({
  type: TOGGLE_LOADING,
  value,
});
export const TOGGLE_ERROR = "TOGGLE_ERROR";
export const toggleError = (name, value) => ({
  type: TOGGLE_ERROR,
  name,
  value,
});
export const SAVE_LEAFLET_CSS = 'SAVE_LEAFLET_CSS';
export const saveLeafletCss = (data) => ({
  type: SAVE_LEAFLET_CSS,
  data,
});
