// scroll to faq section

const scroll = (from, to) => {
    document.getElementById(from).addEventListener("click", function () {
        document.getElementById(to).scrollIntoView({ behavior: "smooth" });
    });
}

scroll("to-faq", "faq")
scroll("to-learn", "learn")


