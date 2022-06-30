export const TOGGLE_SECTION_PROP = "TOGGLE_SECTION_PROP";
export const toggleSectionProp = (prop, value) => ({
  type: TOGGLE_SECTION_PROP,
  prop,
  value,
});
export const SECTIONS_SCROLL = "SECTIONS_SCROLL";
export const sectionsScroll = (data) => ({
  type: SECTIONS_SCROLL,
  data,
});
