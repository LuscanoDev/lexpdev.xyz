async function loadPhotos() {
    try {
      const response = await fetch('/global/gallery/photos.json');
      if (!response.ok) {
        throw new Error('Erro ao carregar o JSON');
      }
      const photos = await response.json();
  
      photos.sort((a, b) => b.date - a.date);
  
      const album = document.getElementById('album');
      photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'imageAlbum';
        photoDiv.innerHTML = `
          <a href="${photo.path}">
            <img src="${photo.path}" class="albumImage" title="${photo.br.info}">
          </a>
          <span class="titleImage">${new Date(photo.date * 1000).toLocaleDateString('pt-BR')} - ${photo.br.state}, ${photo.br.country}</span><br>
          <span class="noteImage">${photo.br.title}</span>
        `;
        album.appendChild(photoDiv);
      });
    } catch (error) {
      console.error('Erro ao carregar as fotos:', error);
    }
  }
  window.addEventListener('load', loadPhotos);
  