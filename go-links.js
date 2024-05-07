const goLinks = {
	'insta': 'https://www.instagram.com/mi.grlt/',
	'add': 'https://github.com/MichelGrolet/go/edit/main/go-links.js',
	'new': 'https://github.com/MichelGrolet/go/edit/main/go-links.js',
	'denaro': 'https://michelgrolet.notion.site/Denaro-a23a0dcbebce4f7c80cd7f17ad5c0078',
	'islam': 'https://drive.google.com/file/d/172MvsrDKxzeINuGkWMYg6a7D9RMvFkHR/view?usp=sharing',
	'profil': 'https://photos.google.com/photo/AF1QipO0p4nNp3_mjnvLPjOtJRIo-gVXuNFMu7tIoqiE',
	'tarifs-photo': 'https://photographe.michelgrolet.fr/tarifs',
  };
  
  function redirect() {
	const basePath = 'go'; // repository name
	let path = window.location.pathname.substr(1); // get the part after the initial slash
	
	if (path.startsWith(basePath)) {
	  path = path.substr(basePath.length + 1); // +1 to account for the slash
	}
  
	const redirectURL = goLinks[path];
	if (redirectURL) {
	  window.location.href = redirectURL;
	} else {
	  window.location.href = "https://michelgrolet.fr/?msg=This+link+does+not+exist."
	}
  }
