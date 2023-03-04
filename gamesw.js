/*let subpath;

self.addEventListener('fetch', async (e) => {
  const path = new URL(e.request.url).pathname;
  console.log(path.startsWith(subpath + 'games/'));
  console.log(path)

  if (path.startsWith(subpath + 'games/')) {
    const gameData = await fetch(`http://10.82.7.62:9000${path.replace(subpath, '').replace('', '')}/index.html`);
    return e.respondWith(new Response(`<script>window.location.href = '${subpath}/assets/game?game=${path.replace(subpath, '').replace('game/', '')}'</script>`, {
      status: gameData.status,
      headers: gameData.headers,
    }));
    console.log('Service worker activated');
    console.log(subpath);
  } else {
    return e.respondWith(new Response('nooo', {
      status: 404
    }));
  }
});

self.addEventListener('activate', (e) => {
  console.log('Service worker activated');
  console.log(subpath);
});

self.addEventListener('install', (e) => {
  subpath = new URL(location).searchParams.get('instancepath');

  if (!subpath) {
    throw new Error('Value subpath could not be found');
  }
});*/