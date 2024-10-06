async function loadPhotos() {
    try {
      const response = await fetch('/global/gallery/photos.json');
      if (!response.ok) {
        throw new Error('Error loading json');
      }
      const photos = await response.json();
  
      photos.sort((a, b) => b.date - a.date);
  
      const album = document.getElementById('album');
      photos.forEach(photo => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'imageAlbum';
        photoDiv.innerHTML = `
          <a href="${photo.path}">
            <img src="${photo.path}" class="albumImage" title="${photo.en.info}">
          </a>
          <span class="titleImage">${new Date(photo.date * 1000).toLocaleDateString('en')} - ${photo.en.state}, ${photo.en.country}</span><br>
          <span class="noteImage">${photo.en.title}</span>
        `;
        album.appendChild(photoDiv);
      });
    } catch (error) {
      console.error('Error loading photos:', error);
    }
  }
  window.addEventListener('load', loadPhotos);
  