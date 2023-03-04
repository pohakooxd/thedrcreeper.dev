var hasInstalled = false;

navigator.serviceWorker.register(`${location.origin}/sw.js`)
  .then((reg) => {
    if (!hasInstalled) {
      window.location.reload();
    }
  }).catch(e => {
    alert(e);
    console.log(`${location.origin}/sw.js`);
    throw new Error(e);
  })


navigator.serviceWorker.getRegistrations()
  .then((registrations) => {
    for (let registration of registrations) {
      if (registration.active.scriptURL == `${location.origin}/sw.js`) {
        hasInstalled = true;
      }
    }
  });