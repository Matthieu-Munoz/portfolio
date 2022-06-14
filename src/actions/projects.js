export const TOGGLE_PROJECTS_INDEX = "TOGGLE_PROJECTS_INDEX";
export const toggleProjectsIndex = (value) => ({
  type: TOGGLE_PROJECTS_INDEX,
  value,
});
export const TOGGLE_PROJECT_INFO = "TOGGLE_PROJECT_INFO";
export const toggleProjectInfo = (project) => ({
  type: TOGGLE_PROJECT_INFO,
  project,
});
