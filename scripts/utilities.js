const makeHide = (id) => {
    const element = document.getElementById(id);
    element.classList.add("hidden");
}

const makeShow = (id) => {
    const element = document.getElementById(id);
    element.classList.remove("hidden");
}


// bg-color

const addBgColor = (tag) => {
    const element = document.querySelector(tag);
    element.classList.add("bg-primary");
}

const removeBgColor = (tag) => {
    const element = document.querySelector(tag);
    element.classList.remove("bg-primary");
}


