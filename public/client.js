// Add share button as enhancement
const lists = document.querySelectorAll('input')
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');


const shareList = lists.forEach(function (item) {
    console.log(item.defaultValue)
});

console.log('input', shareList)
console.log("SHARE LIST", lists)

const shareButton = document.querySelector('[share-btn]');
shareButton.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            url: url,
            text: shareList
        }).then(function () {
            console.log("Thanks for sharing!");
        }).catch(console.error);
    } else {
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');
        window.open('mailto:?subject=My grocery list!&body=This is my grocery list: ' + shareList);
    }
})

overlay.addEventListener('click', function () {
    overlay.classList.remove('show-share');
    shareModal.classList.remove('show-share');
})


var list = document.querySelectorAll("li");
console.log("the list", list)
// Delete product
const deleteItemBtn = document.querySelector(".clear")
deleteItemBtn.addEventListener('click', function () {
    var child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    };
})


// Delete the list
const deleteBtn = document.querySelector(".btn-delete")

deleteBtn.addEventListener("click", function () {
    lists.clear();
})