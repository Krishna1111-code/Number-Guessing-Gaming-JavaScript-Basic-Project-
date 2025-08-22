let button = document.querySelector("button") // number gen button 
let submit = document.querySelector("#submit") // submit button 
let input = document.querySelector("input") // input box 
let Random_number = Math.floor(Math.random() * 10) + 5 // Random Number Will be Gen from here
let main = document.querySelector("#main") // main body 
let p = document.querySelector("#message") // Show the final result

// Celebration 
let body = document.querySelector("body")
let good_job = document.querySelector("#good_job")

submit.addEventListener("click", function () {

        if (input.value > Random_number) {

            p.innerText = "GUESS LESS 👇"
            p.className = "final_ans_right"
        }

        else if (input.value < Random_number) {

            p.innerText = "GUESS MORE 👆"
            p.className = "final_ans_right"
        }

        else if (Number(Random_number) == Number(input.value))  {

            p.innerText = "✅ CORRECT GUESS ✅"
            p.className = "final_ans_right"
            body.style.backgroundColor = "green"
            good_job.style.display = "block"
        }

        

    // After 1 sec Display : None

    setTimeout(() => {
        p.innerText = ""
    },1000)


    input.value = "" // Empty input Box

})