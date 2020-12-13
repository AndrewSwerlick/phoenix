
/* SCREENS */

setKeyHandler ( 'return', HYPER, () => {

  shell ( 'resolution-set' );

});

setKeyHandler ( 'z', HYPER, () => {

  const currentScreenIndex = Screen.all().findIndex(s=> s.identifier() == Window.focused ().screen().identifier());
  const nextScreenIndex = (currentScreenIndex + 1) % Screen.all().length;
  setScreen ( Screen.all()[nextScreenIndex] );

});
