// Add share button as enhancement 
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');
const productNames = document.querySelectorAll('label')

// // Save and store things on the user's browsers with localStorage
// // Create keys to store information
// // Make a name space, it prevents you from overwriting information that is already in the local storage 

const shareButton = document.querySelector('[share-btn]');
shareButton.style.display = "inline";
shareButton.addEventListener("click", function () {
    if (navigator.share) {
        navigator.share({
            url: url,
            text: productNames
        }).then(function () {
            console.log("Thanks for sharing!");
        }).catch(console.error);
    } else {
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');
        window.open('mailto:?subject=My grocery list!&body=This is my grocery list: ' + productNames);
    }
});

overlay.addEventListener('click', function () {
    overlay.classList.remove('show-share');
    shareModal.classList.remove('show-share');
});

// Delete list
const deleteListBtn = document.querySelector('.btn-delete');
deleteListBtn.style.display = "inline";
deleteListBtn.addEventListener("click", function () {
    allListItems.forEach(function (element) {
        element.remove();
    });
});