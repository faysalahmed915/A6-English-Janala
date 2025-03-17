
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
        <button onclick = "allWords('${element.level_no}')" class = "btn btn-primary btn-outline">
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
            // console.log(element.id)
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
                                
                                <button id="${element.id}"  class="btn bg-blue-100"><i class="fa-solid fa-circle-info"></i></button>
                                    

                                    <button class="btn bg-blue-100"><i class="fa-solid fa-volume-high"></i></button>

                                </div>
                            </div>
                        </div>
                    `
            wordContainer.appendChild(div)
            addModal(`${element.id}`)



            /*
                        const lessonWords = async () => {
                            const response = await fetch(`https://openapi.programming-hero.com/api/word/${element.id}`);
                            const data = await response.json();
                            // console.log(data.data)
                            // wordDetails(data.data)
                        }
            
            
                        lessonWords()
            */
        });
    }

}


// const wordDetails (details) => {
//     alert("hello", details)
// }
// allWords()

const lessonDetails = (details) => {
    // console.log(details)
    details.forEach(element => {
        const wordId = element.id;
        // console.log(wordId)
        // collectDetails(wordId)
        // console.log("success")
    });
}



// const collectDetails = async (wordId) => {
//     // console.log(wordId)
//     const response = await fetch(`https://openapi.programming-hero.com/api/word/${wordId}`);
//     const data = await response.json();
//     const wordDetails = data.data;
//     // showDetails(wordDetails)
//     // console.log(wordDetails)
//     // (data.data)
// }

// const showDetails = (wordDetails) => {
//     const modalSection = document.getElementById("my_modal_3");
//     const modalDiv = document.createElement("div");
//     modalDiv.innerHTML = `
//                         <div class="modal-box">
//                             <form method="dialog">
//                                 <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                             </form>
//                                 <h3 class="text-lg font-bold">Hello! ${wordDetails.word}</h3>
//                                 <p class="py-4">Press ESC key or click on ✕ button to close</p>
//                         </div>
//                         `
//     modalSection.appendChild(modalDiv)

// }



// test

// const words = async (Id) => {
//     console.log(Id)
//     const response = await fetch(`https://openapi.programming-hero.com/api/word/${Id}`);
//     const data = await response.json();
//     console.log(data)
// }



