function getStoredList(key) {
    const storedListStr = localStorage.getItem(key);
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
}

function addToList(key, id) {
    const storedList = getStoredList(key);

    if (storedList.includes(id)) {
        console.log(id, 'already exists in', key);
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem(key, storedListStr);
    }
}

// function to add an item to the Read List
const addToReadList = (id) => {
    addToList('read-list', id);
}

// function to add an item to the Wishlist
const addToWishlist = (id) => {
    addToList('wish-list', id);
}

export { addToReadList, addToWishlist };
