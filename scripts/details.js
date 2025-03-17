const addModal = (id) => {
    // console.log(id)
    document.getElementById(id).addEventListener("click", function () {
        // console.log("clicked", id)
        my_modal_3.showModal()
        singleWord(id)
    });

}
const readLoud = (loudId, id) => {
    document.getElementById(loudId).addEventListener("click", function () {
        console.log("clicked", id)
        pronounceWord(id)
    });
}

const singleWord = async (word) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/word/${word}`);
    const data = await response.json();
    const wordDetails = data.data;
    addModalDetails(wordDetails)
}

const modalBox = document.getElementById("my_modal_3");
const addModalDetails = (details) => {
    modalBox.innerHTML = ""
    // console.log(details.id)
    const ModalDiv = document.createElement("div");
    ModalDiv.innerHTML = `<div class="modal-box">
                                <form method="dialog">
                                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 class="text-2xl font-bold">${details.word} <span><i class="fa-solid fa-microphone"></i></span> ${details.pronunciation}</h3>
                                <p class="font-semibold">meaning</p>
                                <h3 class="text-lg font-bold">${details.meaning}</h3>
                                <p class="font-semibold">Example</p>
                                <h3 class="text-lg font-bold">${details.sentence}</h3>
                                <p class="font-semibold">Synonyms</p>
                                <h3 id="synomyms-${details.id}" class="text-lg font-bold">good</h3>
                                
                            </div>
    `
    modalBox.appendChild(ModalDiv)
    synonyms(details.synonyms, details.id)
}



// null



// synonyms
const synonyms = (word, id) => {
    const synonymsId = document.getElementById(`synomyms-${id}`)
    synonymsId.innerHTML = ""
    if (word.length <1) {
        synonymsId.innerHTML = "সমার্থক শব্দ নেই"
    }
    else {
        word.forEach(element => {
        
            const div = document.createElement("div");
            div.classList.add("flex")
            div.innerHTML = `<button class="btn">${element}</button>`
            synonymsId.appendChild(div)
            
        console.log(element)
    })
    }
}


// loud function
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN'; // English
    window.speechSynthesis.speak(utterance);
    console.log("pronouncing", word)
}



