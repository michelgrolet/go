const goLinks = {
	// settings
	'add': 'https://github.com/MichelGrolet/go/edit/main/go-links.js',
	'new': 'add',
	'edit': 'add',
	// socials
	'insta': 'https://www.instagram.com/mi.grlt/',
	'linkedin': 'https://www.linkedin.com/in/michel-grolet/',
	// photo
	'tarifs-photo': 'https://photographe.michelgrolet.fr/tarifs',
	// perso misc
	'calendar': 'https://calendar.google.com/calendar/embed?src=Z3JvbGV0QGdvb2dsZS5jb20&src=bDBwMHNjOW1obWtqOXBydHR2ZWplZnRicjFraWtiZGNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=bWljaGVsZ3JvbGV0QGdtYWlsLmNvbQ&ctz=Europe/Paris',
	'oo': 'calendar',
	'denaro': 'https://michelgrolet.notion.site/Denaro-a23a0dcbebce4f7c80cd7f17ad5c0078',
	'islam': 'https://drive.google.com/file/d/172MvsrDKxzeINuGkWMYg6a7D9RMvFkHR/view?usp=sharing',
	'profil': 'https://photos.app.goo.gl/maDYfXWnCPSMFkTA8',
	'profile': 'profil',
	'edit-profile': 'https://docs.google.com/document/d/1Rw3iPQPOCEOUOB8BrgImoyNzDoYbZrSg_Z0aQieyMyg/edit?usp=sharing',
	'edit-profil': 'edit-profile',
	'new-profil': 'edit-profile',
	'abs': 'https://youtu.be/8PwoytUU06g'
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
	  window.location.href = `https://michelgrolet.fr/?msg=This+link+does+not+exist.&url=${redirectURL}`;
	}
  }
