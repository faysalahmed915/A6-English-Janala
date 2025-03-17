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


// show selected lesson
const showSelectedLesson = (btnSelection) => {
    const element = document.getElementsByClassName("btn-selection");
    // console.log(typeof element)
    for (let i = 0; i < element.length; i++) {
        element[i].classList.add("btn-outline");
    }
    document.getElementById(btnSelection).classList.remove("btn-outline");
}