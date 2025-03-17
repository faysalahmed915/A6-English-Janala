// for card
const meaning = (id, meaning) => {

    const meaningId = document.getElementById(`meaning-${id}`);
    // meaningId.innerHTML = ""
    if (meaning === null) {
        meaningId.innerHTML = "অর্থ নেই"
    }


}
// for modals
// meaning()