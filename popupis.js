const popupisInit = (wins) => {
  wins.forEach(win => {
    $('#'+win).css({
      'display': 'none',
      'width': '100vw',
      'height': '100vh',
      'position': 'absolute',
      'backgroundColor': 'black',
      'background': 'rgba(0, 0, 0, 0.8)',
    })
    $('#'+win+' div').css({
      'maxWidth': '700px',
      'height': '500px',
      'backgroundColor': 'white',
      'borderRadius': '20px',
      'marginLeft': '30%',
      'padding': '10px',
      'transition': 'all 0.4s',
    })
  })
}

const popup5 = (win) => {
  const popup = '#'+win+' div'
  const popupBg = '#'+win
  $(popup).css({
    'marginTop': '10%',
    'height': '-500px',
  })
  setTimeout(() => {
    $(popup).css({
      'opacity': '1',
      'height': '500px',
    })
  }, 1)


  $(popupBg).css({
    'display': 'block',
  })
  $(popup).on('click', () => {})
  $(popupBg).on('click', () => {
    $(popupBg).css({
      'display': 'none'
    })
  });
}


const popup4 = (win) => {
  const popup = '#'+win+' div'
  const popupBg = '#'+win
  $(popup).css({
    'opacity': '0',
    'marginTop': '10%',
  })
  setTimeout(() => {
    $(popup).css({
      'opacity': '1',
    })
  }, 1)


  $(popupBg).css({
    'display': 'block',
  })
  $(popup).on('click', () => {})
  $(popupBg).on('click', () => {
    $(popupBg).css({
      'display': 'none'
    })
  });
}


const popup3 = (win) => {
  const popup = '#'+win+' div'
  const popupBg = '#'+win
  $(popup).css({
    'transform': 'scale(0, 0)',
    'marginTop': '10%',
  })
  setTimeout(() => {
    $(popup).css({
      'transform': 'scale(1, 1)',
    })
  }, 1)


  $(popupBg).css({
    'display': 'block',
  })
  $(popup).on('click', () => {})
  $(popupBg).on('click', () => {
    $(popupBg).css({
      'display': 'none'
    })
  });
}


const popup2 = (win) => {
  const popup = '#'+win+' div'
  const popupBg = '#'+win
  $(popup).css({
    'marginTop': '-500px',
  })
  setTimeout(() => {
    $(popup).css({
      'marginTop': '10%',
    })
  }, 1)


  $(popupBg).css({
    'display': 'block',
  })
  $(popup).on('click', () => {})
  $(popupBg).on('click', () => {
    $(popupBg).css({
      'display': 'none'
    })
  });
}

const popup1 = (win) => {
  const popup = '#'+win+' div'
  const popupBg = '#'+win
  $(popup).css({
    'marginTop': '10%',
  })
  $(popupBg).css({
    'display': 'block',
  })
  $(popup).on('click', () => {})
  $(popupBg).on('click', () => {
    $(popupBg).css({
      'display': 'none'
    })
  });
}
