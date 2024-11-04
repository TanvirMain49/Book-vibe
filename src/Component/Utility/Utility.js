// Function to get the stored Read List
function getStoredReadList() {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
}

// Function to add an item to the Read List
const addToReadList = (id) => {
    const storedList = getStoredReadList();

    if (storedList.includes(id)) {
        console.log(id, 'already exists in read list');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

// Function to get the stored Wishlist
function getStoredWishlist() {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
}

// Function to add an item to the Wishlist
const addToWishlist = (id) => {
    const storedList = getStoredWishlist();

    if (storedList.includes(id)) {
        console.log(id, 'already exists in wishlist');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}

export { addToReadList, addToWishlist, getStoredReadList, getStoredWishlist};
