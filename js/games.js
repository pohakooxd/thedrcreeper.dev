/*
const indexedDb = window.indexedDB || window.webkitIndexedDB || window.msIndexedDB;
const compiledDatabases = []

indexedDb.databases()
  .then(databases => {
    databases.forEach((rawDatabase) => {
      const database = indexedDB.open(rawDatabase.name);
      database.onsuccess = () => {
        compiledDatabases.push(database.result.objectStoreNames);
      }
    });
  })
*/

const gamesContainer = document.querySelector('.games');
const searchBar = document.querySelector('.searchbar');
const gameContainer = document.querySelector('.gamecontainer');
const gameFrame = gameContainer.querySelector('.frame');
const gameNav = gameContainer.querySelector('.nav');

searchBar.addEventListener('input', (e) => {
  const query = searchBar.value.trim().toLowerCase();

  for (let game in gamesContainer.children) {
    if (gamesContainer.children[game] instanceof Element) {
      if (query) {
        const gameName = gamesContainer.children[game].querySelector('span').innerText.trim().toLowerCase();
        if (gameName.includes(query)) {
          gamesContainer.children[game].removeAttribute('hidden');
        } else {
          gamesContainer.children[game].setAttribute('hidden', '');
        }
      } else {
        gamesContainer.children[game].removeAttribute('hidden');
      }
    }
  }

  if (document.querySelectorAll('.game:not([hidden])').length == 0) {
    document.querySelector('.nogames').style.display = 'initial';
  } else {
    document.querySelector('.nogames').style.display = 'none';
  }
})

fetch('./assets/json/games.json')
  .then(res => res.json())
  .then(games => {
    games.forEach(game => {
      const gameEl = document.createElement('div');
      gameEl.className = 'game';
      gameEl.innerHTML = `<img src="${cdn+'/'+game.root+'/'+game.img}" onerror="this.src='./assets/globe.svg'"/><span>${game.name}</span>`
      gamesContainer.appendChild(gameEl);

      gameEl.onclick = (e) => {
        gamesContainer.classList.add('hidden');
        searchBar.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        document.querySelector('.saveItems').classList.add('hidden');
        document.querySelector('.navbar').classList.add('noshadow');
        gameFrame.querySelector('iframe').src = `./assets/game?game=${game.root}`;
      }

      gameNav.querySelector('#back').addEventListener('click', (e) => {
        gamesContainer.classList.remove('hidden');
        searchBar.classList.remove('hidden');
        gameContainer.classList.add('hidden');
        document.querySelector('.saveItems').classList.remove('hidden');
        document.querySelector('.navbar').classList.remove('noshadow');
      })

      gameNav.querySelector('#fullscreen').addEventListener('click', (e) => {
        if (!document.fullscreenElement) {
          gameFrame.requestFullscreen();
        }
      })
    })
  }).catch(e => {
    alert('Could not load games');
    alert(e)
  })

document.querySelector('.spinner').style.display = 'none';

function getMainSave() {
  var mainSave = {};

  var localStorageDontSave = ['theme', 'tab', 'nebelung'];

  localStorageSave = Object.entries(localStorage);

  for (let entry in localStorageSave) {
    if (localStorageDontSave.includes(localStorageSave[entry][0])) {
      localStorageSave.splice(entry, 1);
    }
  }

  localStorageSave = btoa(JSON.stringify(localStorageSave));

  mainSave.localStorage = localStorageSave;

  cookiesSave = document.cookie;

  cookiesSave = btoa(cookiesSave);

  mainSave.cookies = cookiesSave;

  mainSave = btoa(JSON.stringify(mainSave));

  mainSave = CryptoJS.AES.encrypt(mainSave, 'save').toString();

  return mainSave;
}

function downloadMainSave() {
  var data = new Blob([getMainSave()]);
  var dataURL = URL.createObjectURL(data);

  var fakeElement = document.createElement('a');
  fakeElement.href = dataURL;
  fakeElement.download = 'games.save';
  fakeElement.click();
  URL.revokeObjectURL(dataURL);
}

function getMainSaveFromUpload(data) {
  data = CryptoJS.AES.decrypt(data, 'save').toString(CryptoJS.enc.Utf8);

  var mainSave = JSON.parse(atob(data));
  var mainLocalStorageSave = JSON.parse(atob(mainSave.localStorage));
  var cookiesSave = atob(mainSave.cookies);

  for (let item in mainLocalStorageSave) {
    localStorage.setItem(mainLocalStorageSave[item][0], mainLocalStorageSave[item][1]);
  }

  document.cookie = cookiesSave;
}

function uploadMainSave() {
  var hiddenUpload = document.querySelector('.hiddenUpload');
  hiddenUpload.click();

  hiddenUpload.addEventListener('change', function (e) {
    var files = e.target.files;
    var file = files[0];

    if (!file) {
      return;
    }

    var reader = new FileReader();

    reader.onload = function (e) {
      getMainSaveFromUpload(e.target.result);

      var uploadResult = document.querySelector('.uploadResult');
      uploadResult.innerText = 'Uploaded save!';
      uploadResult.style.display = 'initial';
      setTimeout(function () {
        uploadResult.style.display = 'none';
      }, 3000);
    };

    reader.readAsText(file);
  });
}

var hiiPattern = ['h', 'i', 'i'];
var hiiCurrent = 0;

document.addEventListener('keydown', function (e) {
  if (e.key !== hiiPattern[hiiCurrent]) {
    return (hiiCurrent = 0);
  }

  hiiCurrent++;

  if (hiiPattern.length == hiiCurrent) {
    hiiCurrent = 0;
    document.querySelector('.hii').removeAttribute('hidden');
  }
});