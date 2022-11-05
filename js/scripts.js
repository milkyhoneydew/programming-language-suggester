window.addEventListener("load", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        let javascript = document.getElementById("javascript");
        let python = document.getElementById("python");
        let sql = document.getElementById("sql");

        javascript.setAttribute("class", "hidden");
        python.setAttribute("class", "hidden");
        sql.setAttribute("class", "hidden");
        
        const question1 = document.querySelector("input#question1").value;
        const question2 = document.querySelector("input#question2").value;
        const question3 = document.querySelector("input#question3").value;
        const question4 = document.querySelector("input#question4").value;
        const question5 = document.querySelector("input#question5").value;

        if (question1 === "front-end" && question3 === "cake" && question4 === "true") {
            javascript.removeAttribute("class");
        } else if (question2 === "Christmas" && question3 === "pie") {
            python.removeAttribute("class", "hidden");
        } else if (question1 === "back-end" || question5 === "over-easy") {
            sql.removeAttribute("class", "hidden");
        };

        event.preventDefault();

    });
});
  