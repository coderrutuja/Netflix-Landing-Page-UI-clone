// Question 1
const targetDiv = document.getElementById('answer1');
const btn = document.getElementById('question1');
btn.onclick = function() {
    if(targetDiv.style.display !== "none")
    {
        targetDiv.style.display = "none";
    }
    else
    {
        targetDiv.style.display = "block";
    }
}

// Question 2
const question2 = document.getElementById('answer2');
const btn = document.getElementById('question1');
btn.onclick = function() {
    if(targetDiv.style.display !== "none")
    {
        question2.style.display = "none";
    }
    else
    {
        question2.style.display = "block";
    }
}