function openRecentKeyword() {
    const recentListDOM = document.querySelector(".recent-list");
    if(!recentListDOM.classList.contains("visible")) {
        recentListDOM.classList.add("visible");
    } 
}

function closeRecentKeyword() {
    const recentListDOM = document.querySelector(".recent-list");
    if(recentListDOM.classList.contains("visible")) {
        recentListDOM.classList.remove("visible");
    } 
}