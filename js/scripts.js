window.addEventListener("load", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        let question1 = document.getElementById("question1");
        let question2 = document.getElementById("question2");
        let question3 = document.getElementById("question3");
        let question4 = document.getElementById("question4");
        let question5 = document.getElementById("question5");

        question1.setAttribute("class", "hidden");
        question2.setAttribute("class", "hidden");
        question3.setAttribute("class", "hidden");
        question4.setAttribute("class", "hidden");
        question5.setAttribute("class", "hidden");
    });

    


});
  