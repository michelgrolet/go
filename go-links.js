const goLinks = {
	'insta': 'https://www.instagram.com/michelgrolet.photographe/',
	'add': 'https://github.com/MichelGrolet/go/edit/main/go-links.js',
  };
  
  function redirect() {
	const basePath = 'liteLinker'; // repository name
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
