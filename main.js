searchKP = function(word){
    var query = word.selectionText;
    chrome.tabs.create({"url": "https://www.kinopoisk.ru/search/?query=" + query});
 };
//https://www.kinopoisk.ru/search/?query=
//https://www.kinopoisk.ru/index.php?first=no&kp_query=
var id =  chrome.contextMenus.create({
 "title": " Найти в Кинопоиске!",
 "contexts":["selection"],  // ContextType
 "onclick": searchKP // A callback function
});
console.log("'" + "selection" + "' item:" + id);
