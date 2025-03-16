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

// fetch all words
const allWords = async (lessonId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/level/${lessonId}`);

    const data = await response.json();
    showWords(data.data)
}
// show all words
const showWords = (words) => {
    const wordContainer = document.getElementById("word-container");
do
    wordContainer.innerHTML = ""
    // No words found
    if (words.length < 1) {
        const nextLessonContainer = document.getElementById("word-container");
        nextLessonContainer.innerHTML = `
                <div class=" col-span-full content-center mx-auto justify-center">
                            <div class="card bg-base-100 shadow-lg mx-auto my-2">
                                <div class="card-body text-center">
                                    <h2>
                                        <i class="fa-solid fa-triangle-exclamation text-5xl text-red-700"></i>
                                    </h2>
                                    <p class="my-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                                    <h2 class="font-bold text-xl">নেক্সট Lesson এ যান</h2>
                                </div>
                            </div>
                        </div>
        `
        wordContainer.appendChild(div)
    }
    // Words found
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


