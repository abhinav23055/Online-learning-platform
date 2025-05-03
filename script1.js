function checkquizanswers(prefix, correctanswers) {
    let score = 0;

    for (let i = 1; i <= correctanswers.length; i++){
        const selected = document.querySelector(`input[name="${prefix}${i}"]:checked`);
        if (selected && selected.value === correctanswers[i - 1]){
            score++;
        }
    }
    document.getElementById('result').innerText = `you scored ${score}/${correctanswers.length}`;
}