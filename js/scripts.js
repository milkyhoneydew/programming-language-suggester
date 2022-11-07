window.addEventListener("load", function() {
  const form = document.querySelector("form");
  const resetBtn = document.getElementById("resetBtn");
  const javascript = document.getElementById("javascript");
  const python = document.getElementById("python");
  const sql = document.getElementById("sql");
  const error = document.getElementById("error");

  function revealSuggestions(e) {
    let question1 = document.querySelector("input#question1").value.toLowerCase();
    let question2 = document.querySelector("input#question2").value.toLowerCase();
    let question3 = document.querySelector("input#question3").value.toLowerCase();
    let question4 = document.querySelector("input#question4").value.toLowerCase();
    let question5 = document.querySelector("input#question5").value.toLowerCase();

    javascript.classList.add("hidden");
    python.classList.add("hidden");
    sql.classList.add("hidden");
    error.classList.add("hidden");

    if (question1 === "front-end" && question3 === "cake" && question4 === "true") {
      javascript.classList.remove("hidden");
      } else if (question2 === "christmas" && question3 === "pie" || question5 === "poached") {
          python.classList.remove("hidden");
      } else if (question1 === "back-end" || question5 === "over-easy" || question4 === "false" && question2 === "halloween") {
          sql.classList.remove("hidden");
      } else {
          error.classList.remove("hidden");
      };
    
    document.querySelector("input#question1").value = "";
    document.querySelector("input#question2").value = "";
    document.querySelector("input#question3").value = "";
    document.querySelector("input#question4").value = "";
    document.querySelector("input#question5").value = "";
  

    e.preventDefault();
  };

  function resetForm() {
    document.querySelector("input#question1").value = "";
    document.querySelector("input#question2").value = "";
    document.querySelector("input#question3").value = "";
    document.querySelector("input#question4").value = "";
    document.querySelector("input#question5").value = "";

    javascript.classList.add("hidden");
    python.classList.add("hidden");
    sql.classList.add("hidden");
    error.classList.add("hidden");
  };
    
  form.addEventListener("submit", revealSuggestions);
  resetBtn.addEventListener("click", resetForm);
});
  