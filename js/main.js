const progress_range_input = document.getElementById("progress-range-input");
const progress = document.getElementById("progress");

progress_range_input.addEventListener("change",(e) => {
    anime({
        targets:progress,
        width:`${progress_range_input.value}%`,
        duration:500,
        easing:"easeInOutQuad"
    })

    if(progress_range_input.value != 0)
        progress.innerText = `${progress_range_input.value}%`;
    else
        progress.innerText = "";


    e.preventDefault();
});