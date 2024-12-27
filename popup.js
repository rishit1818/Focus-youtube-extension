document.getElementById("save").addEventListener("click", () => {
    const playlistId = document.getElementById("playlistInput").value.trim();
    if (playlistId) {
        chrome.storage.sync.set({ playlistId: playlistId }, () => {
            alert("Playlist ID saved successfully!");
        });
    } else {
        alert("Please enter a valid playlist ID.");
    }
});
