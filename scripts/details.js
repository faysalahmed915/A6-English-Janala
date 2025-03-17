const addModal = (id) => {
    // console.log(id)
    document.getElementById(id).addEventListener("click", function () {
        console.log("clicked", id)
        my_modal_3.showModal()
        singleWord(id)
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
    // console.log(id)
    const ModalDiv = document.createElement("div");
    ModalDiv.innerHTML = `<div class="modal-box">
                                <form method="dialog">
                                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 class="text-lg font-bold">${details.word} <span><i class="fa-solid fa-microphone"></i></span> ${details.pronunciation}</h3>
                                <p class="font-semibold">meaning</p>
                                <h3 class="text-lg font-bold">${details.meaning}</h3>
                                <p class="font-semibold">Example</p>
                                <h3 class="text-lg font-bold">${details.sentence}</h3>
                                <p class="font-semibold">Synonyms</p>
                                <h3 class="text-lg font-bold">${details.synonyms}</h3>
                                <h3 class="text-lg font-bold">Hello!</h3>
                                
                            </div>
    `
    modalBox.appendChild(ModalDiv)
}



{/* <button id="${element.id}"  onclick="my_modal_3.showModal(), collectDetails('${element.id}')" class="btn bg-blue-100"><i class="fa-solid fa-circle-info"></i></button> */ }

