/* Turbo Play game list.
   To add a game: put its files in games/<id>/ (index.html + thumb.jpg), then add one entry below.
   The newest game marked featured:true is shown big on the home page. */
window.TURBO_GAMES = [
  {
    id: 'lane-rush',
    title: 'Lane Rush',
    tag: 'Racing',
    added: '2026-11-12',
    featured: true,
    url: 'games/lane-rush/index.html',
    thumb: 'games/lane-rush/thumb.jpg',
    blurb: 'Race five rivals down a six-lane highway. Dodge wrong-way traffic and angry bullies, grab coins, and buy faster cars and cooler drivers.',
    about: 'Lane Rush is a 3D racing game. Drive from a pine forest to the beach, the desert, snowy mountains and New York City. Finish in the top three to earn the most coins, beat your best time for a bonus, then spend your coins on new cars and drivers. Pick Medium mode for mystery boxes that either slow you down or give you a boost, or unlock Impossible mode for curvy roads, potholes and surprise boxes.',
    keys: [['↑', 'Drive'], ['↓', 'Brake'], ['← →', 'Change lanes'], ['C', 'Change camera']]
  }
];

/* shared helpers for the pages */
window.TP = {
  isNew(g){ return (Date.now() - new Date(g.added + 'T00:00:00').getTime()) < 21 * 864e5; },
  card(g){
    return '<a class="card" href="play.html#' + g.id + '">' +
      '<div class="thumb"><img src="' + g.thumb + '" alt="' + g.title + ' screenshot" loading="lazy" width="640" height="360">' +
      (TP.isNew(g) ? '<span class="badge">NEW</span>' : '') + '</div>' +
      '<div class="meta"><h3>' + g.title + '</h3><span class="tag">' + g.tag + '</span></div></a>';
  },
  soon(){ return '<div class="card soon"><b>More games coming</b><span>New games are added here regularly.</span></div>'; }
};
