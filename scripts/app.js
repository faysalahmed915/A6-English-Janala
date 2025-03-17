
// button section
const allLesson = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/levels/all`);

    const data = await response.json();
    showButton(data.data)
}

const showButton = (lessonButton) => {
    lessonButton.forEach(element => {
        // console.log(element.level_no)
        const buttonContainer = document.getElementById("button-container");
        const div = document.createElement("div");
        div.innerHTML = `
        <button id="btn-${element.level_no}" onclick = "allWords('${element.level_no}')" class = "btn btn-primary btn-outline btn-selection">
        <span><i class="fa-solid fa-book-open text-primary"></i></span> Lesson -${element.level_no}</button>
        `
        buttonContainer.appendChild(div)
        // console.log(element.level_no)
    });
    

    // active lesson



}
allLesson()



// vocabulary box section                      

// fetch all words
const allWords = async (lessonId) => {
    makeShow("spinner")
    showSelectedLesson(`btn-${lessonId}`)
    const response = await fetch(`https://openapi.programming-hero.com/api/level/${lessonId}`);
    const data = await response.json();
    if (data.data) {
        showWords(data.data)
        lessonDetails(data.data)
        makeHide("spinner")
        
    }
    
    // singleWord(data.data)

    // console.log(lessonId)
    
}



// show all words
const selectLesson = document.getElementById("select-lesson");


const showWords = (words) => {   // words is data.data

    const wordContainer = document.getElementById("word-container");
    selectLesson.classList.add("hidden")
    wordContainer.classList.add("bg-base-200")
    wordContainer.innerHTML = ""

    // // active lesson
    // words.forEach(element => {

    // )

    // No words found
    if (words.length < 1) {
        makeHide("spinner")
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
            console.log(element)
            const div = document.createElement("div");
            div.innerHTML = `
                    <div class="card bg-base-100 shadow-lg">
                            <div class="card-body text-center">
                                <h2 class="font-bold text-xl">
                                ${element.word}
                                </h2>
                                <p>Meaning /Pronounciation</p>
                                <div><p><span id="meaning-${element.id}" class="font-bold text-xl">${element.meaning}</span> / <span class="font-bold text-xl">${element.pronunciation}</span></p></div>
                                
                                <div class="flex justify-between ">
                                
                                <button id="${element.id}"  class="btn bg-blue-100"><i class="fa-solid fa-circle-info"></i></button>
                                    

                                    <button id="loud-${element.id}" class="btn bg-blue-100"><i class="fa-solid fa-volume-high"></i></button>

                                </div>
                            </div>
                        </div>
                    `
            wordContainer.appendChild(div)
            addModal(`${element.id}`)
            meaning(`${element.id}`, element.meaning)
            readLoud(`loud-${element.id}`, element.word)

        });
    }

}



const lessonDetails = (details) => {
    // console.log(details)
    details.forEach(element => {
        const wordId = element.id;
    });
}





