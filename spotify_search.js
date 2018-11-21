var contextMenuItem = {
    "id": "spotifySearch",
    "title": "Spotify Search",
    "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(element){
    if (element.menuItemId== "spotifySearch" && element.selectionText){
        //alert("spotify:search:"+element.selectionText);
        var temporaryWindow =window.open("spotify:search:"+element.selectionText, '', 'width=10,height=10');
        setTimeout(function(){ temporaryWindow.close(); }, 3000);
        
    }
});