// Detect if the playlist or video content changes on the page
const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach(mutation => {
      if (mutation.type === 'childList') {
        // Check if the playlist changed (by detecting playlist ID in the page content)
        const playlistId = window.location.search.match(/list=([^&]+)/);
        if (playlistId && playlistId[1] !== currentPlaylist) {
          currentPlaylist = playlistId[1];
          chrome.runtime.sendMessage({ type: 'alert', message: 'Playlist switched' });
        }
      }
    });
  });
  
  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);

  