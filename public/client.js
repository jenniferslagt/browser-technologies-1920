const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteButton = document.querySelector('[delete-btn]')
const shareButton = document.querySelector('[share-btn]')
// Save and store things on the user's browsers
// Create keys to store information
// Make a name space, it prevents you from overwriting information that is already in the local storage 
const LOCAL_STORAGE_LIST_KEY = 'task.lists'


// the list is getting stored in task.lists
// get the information from the localstorage with json.parse
// it's getting out in a object or give us a empty array to start (default)
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

newListForm.addEventListener('submit', element => {
    // every time when you click on enter, the pages refreshed, preventDefault prevents this
    element.preventDefault()
    const listName = newListInput.value
    // user have to type something
    if (listName == null || listName === " ") return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

function createList(name) {
    return {
        id: Date.now().toString(),
        name: name
    }
}

function render() {
    clearElement(listsContainer)
    renderLists()
}


function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.classList.add('list-name')
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)
    })
}

function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render();
saveAndRender();

function deleteList() {
    deleteButton.addEventListener('click', function () {
        if (confirm('Are you sure you want to delete this list?')) {
            // Delete it!
            clearElement(listsContainer);
            localStorage.clear();
        } else {
            // Do nothing!
        }
    })
}
deleteList();

// var sharethis = lists[0].name

// function shareList(sharethis) {
//     console.log('clicked and list:', sharethis)
//     shareButton.addEventListener('click', async () => {
//         try {
//             await navigator.share(sharethis)
//             console.log('MDN shared successfully')
//         } catch (err) {
//             console.log('Error: ')
//         }
//     });
// }

// shareList();
// get all the names?
console.log('saved data-list:', lists)

// Use JSON.stringify(array). This will return you with a string that you can save somewhere,
//  say, on the server, and then re-use it as javascript array again.

// sharebutton
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');

const title = window.document.title;
const url = window.document.location.href;


shareButton.addEventListener('click', function () {
    console.log('its clicked')
})

shareButton.addEventListener('click', function () {
    if (navigator.share) {
        save()
        navigator.share({
            title: `${title}`,
            url: `${url}`
        }).then(function () {
            console.log("Thanks for sharing!");
        }).catch(console.error);
    } else {
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');
        console.log('ahai')
    }
})


overlay.addEventListener('click', function () {
    overlay.classList.remove('show-share')
    shareModal.classList.remove('show-share');
})