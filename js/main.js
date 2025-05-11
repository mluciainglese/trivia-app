document.querySelectorAll(".category-buttons button").forEach(button =>{
  button.addEventListener("click", getFetch)
 })

function getFetch(event){
  let category = event.target.classList[0]
  let categoryID
  let url
  
  if(category === "general"){
    categoryID = 9
  } else if(category === "entertainment"){
    categoryID = Math.floor(Math.random() * (16 - 10 + 1)) + 10
  } else if(category === "science"){
    categoryID = Math.floor(Math.random() * (19 - 17 + 1)) + 10
  } else if (category === "geography"){
    categoryID = 22
  } else if (category === "history"){
    categoryID = 23
  } else if (category === "sports"){
    categoryID = 21
  }

  const difficulties = ["easy", "medium", "hard"]
  const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)]

  url = `https://opentdb.com/api.php?amount=1&category=${categoryID}&difficulty=${randomDifficulty}&type=multiple`

  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const question = decodeHTML(data.results[0].question)
        const correctAnswer = decodeHTML(data.results[0].correct_answer)
        const incorrectAnswers = data.results[0].incorrect_answers.map(ans => decodeHTML(ans))
        const answers = [...incorrectAnswers, correctAnswer]

        //This randomises all answers
        
        for (let i = answers.length - 1; i >= 0; i--) {
          let j = Math.floor(Math.random() * (i + 1))

          let temp = answers[i]
          answers[i] = answers[j]
          answers[j] = temp
        }

        document.querySelector(".info").innerText = "Category: " + category + " - Difficulty: " + randomDifficulty
        document.querySelector(".question").innerText = question
        
        const answerContainer = document.querySelector(".answers")
        answerContainer.innerHTML = ""

        answers.forEach(answer =>{
          const button = document.createElement("button")
          button.innerText = answer
          button.addEventListener("click", () => {
            if(answer === correctAnswer){
              alert("Correct!")
            } else {
              alert("Nope!")
            }
          })
          answerContainer.appendChild(button)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}