const navbarSection =document.getElementById("navbar-section");
const banner =document.getElementById("banner-section");
const loginSection = document.getElementById("login-section");
const mainbody =document.getElementById("main-body");

// Toggle section


// button section
const allLesson = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/levels/all`);

    const data = await response.json();
    showButton(data.data)
    return data;
}

const showButton = (lessonButton) => {
    lessonButton.forEach(element => {
        const buttonContainer = document.getElementById("button-container");

        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="allWords('${element.level_no}')" class="btn btn-primary btn-outline">
        <span><i class="fa-solid fa-book-open text-primary"></i></span> Lesson -${element.level_no}</button>
        `
        buttonContainer.appendChild(div)
    });



}
allLesson()


// vocabulary box section
const allWords = async (lessonId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/level/${lessonId}`);

    const data = await response.json();
    showWords(data.data)
}

const showWords = (words) => {
    const wordContainer = document.getElementById("word-container");

    wordContainer.innerHTML = ""
    if (words.length < 1) {
        // const nextLessonContainer = document.getElementById("next-lesson-container");

        const div = document.createElement("div");
        div.innerHTML = `
                <div class="card bg-base-100 shadow-lg w-1/2 mx-auto my-2 card-body text-center col-span-3">
                    <h2>
                        <i class="fa-solid fa-triangle-exclamation text-5xl text-red-700"></i>
                    </h2>
                    <p class="my-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                    <h2 class="font-bold text-xl">নেক্সট Lesson এ যান</h2>
                </div>
        `
        wordContainer.appendChild(div)
    }
    else {

        words.forEach(element => {
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="card bg-base-100 shadow-lg">
                            <div class="card-body text-center">
                                <h2 class="font-bold text-xl">
                                ${element.word}
                                </h2>
                                <p>Meaning /Pronounciation</p>
                                <h2 class="font-bold text-xl">${element.meaning}</h2>
                                <div class="flex justify-between ">
                                    <button class="btn bg-blue-100"><i class="fa-solid fa-circle-info"></i></button>
                                    <button class="btn bg-blue-100"><i class="fa-solid fa-volume-high"></i></button>
                                </div>
                            </div>
                        </div>
                    `
            wordContainer.appendChild(div)

        });
    }
}
// allWords()


