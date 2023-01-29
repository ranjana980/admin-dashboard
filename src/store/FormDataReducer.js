

var initialVal = {
  Menu: false,
  isMobile: false,
}

export default function FormDataRaducer(state = initialVal, action) {
  switch (action.type) {
    case "MENU":
      state = { Menu: action.payload }
      return (state);
    case "MOBILE":
      state = { isMobile: action.payload }
      return (state);
    default:
      return state;
  }
}