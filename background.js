let storedPlaylistId = "";

// Listen for changes to the active tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url.includes("youtube.com/playlist")) {
        const currentPlaylistId = new URL(tab.url).searchParams.get("list");
        
        chrome.storage.sync.get("playlistId", (data) => {
            storedPlaylistId = data.playlistId || "";
            if (storedPlaylistId && currentPlaylistId !== storedPlaylistId) {
                chrome.notifications.create({
                    type: "basic",
                    iconUrl: "icon.png",
                    title: "Playlist Focus Alert",
                    message: "You're switching playlists! Stay focused!"
                });
            }
        });
    }
});console.log("Current URL:", tab.url);
console.log("Stored Playlist ID:", storedPlaylistId);
chrome.notifications.create({
  type: "basic",
  iconUrl: "icon.png",
  title: "Test Notification",
  message: "This is a test notification."
});
chrome.storage.sync.set({ playlistId: "YOUR_PLAYLIST_ID" });
