let satHeadTitle = document.querySelector(".satellite-heading-container span")
let satHeadSubTitle = document.querySelector(".satellite-heading-container h2")
let satHeadPara = document.querySelector(".satellite-heading-container p")
let satSlideOverlay = document.querySelector(".satellite-slider-overlay")
let satContSlider = document.querySelector(".satellite-content-slider")
let contSliderTitle = document.querySelectorAll(".content-slider strong")
let contSliderPara = document.querySelectorAll(".content-slider p")
let videoSlider = document.querySelectorAll(".video-slider")
let videoSliderVid = document.querySelectorAll(".video-slider video")


roundVideo()

function roundVideo(){
    videoSliderVid.forEach(e => {
        e.parentElement.style.opacity = "0";
        e.volume = 0
    })
    videoSliderVid[0].parentElement.style.opacity = "1"
    satHeadTitle.style.color = "#222222"
    satHeadSubTitle.style.color = "#222222"
    satHeadPara.style.color = "#222222"
    satSlideOverlay.style.background = "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(0, 0, 0, 0))"
    satContSlider.style.background = "rgba(255, 255, 255, 0.8)"
    document.querySelectorAll(".content-slider").forEach(e => {
        e.style.opacity = "0.5"
    })
    document.querySelector(".content-slider-1").style.opacity = "1"
    contSliderTitle.forEach(e=>{
        e.style.color = "#222222"
    })
    contSliderPara.forEach(e=>{
        e.style.color = "#222222"
    })
    videoSliderVid[0].currentTime = 0
    videoSliderVid[0].play()
    videoSliderVid[0].addEventListener("timeupdate", function () {
        if (videoSliderVid[0].currentTime >= videoSliderVid[0].duration) {
            videoSliderVid[0].pause()
            videoSliderVid[0].parentElement.style.opacity = "0"
            videoSliderVid[1].parentElement.style.opacity = "1"
            satHeadTitle.style.color = "rgb(255, 255, 255)"
            satHeadSubTitle.style.color = "rgb(255, 255, 255)"
            satHeadPara.style.color = "rgb(255, 255, 255)"
            satSlideOverlay.style.background = "linear-gradient(to bottom, rgba(19,76,7,1) 0%, rgba(19,76,7,1) 65%, rgba(0,0,0,0))"
            satContSlider.style.background = "rgba(19,76,7, 0.8)"
            document.querySelectorAll(".content-slider").forEach(e => {
                e.style.opacity = "0.5"
            })
            document.querySelector(".content-slider-2").style.opacity = "1"
            contSliderTitle.forEach(e => {
                e.style.color = "rgb(255, 255, 255)"
            })
            contSliderPara.forEach(e => {
                e.style.color = "rgb(255, 255, 255)"
            })
            videoSliderVid[1].currentTime = 0
            videoSliderVid[1].play()
            videoSliderVid[1].loop = true
            setTimeout(() => {
                videoSliderVid[1].loop = false
                videoSliderVid[1].addEventListener("timeupdate", function () {
                    if (videoSliderVid[1].currentTime >= videoSliderVid[1].duration) {
                        videoSliderVid[1].pause()
                        videoSliderVid[1].parentElement.style.opacity = "0"
                        videoSliderVid[2].parentElement.style.opacity = "1"
                        satHeadTitle.style.color = "rgb(255, 255, 255)"
                        satHeadSubTitle.style.color = "rgb(255, 255, 255)"
                        satHeadPara.style.color = "rgb(255, 255, 255)"
                        satSlideOverlay.style.background = "linear-gradient(to bottom, rgba(36,54,25,0.8) 0%, rgba(36,54,25,0.8) 65%, rgba(0,0,0,0))"
                        satContSlider.style.background = "rgba(36,54,25, 0.8)"
                        document.querySelectorAll(".content-slider").forEach(e => {
                            e.style.opacity = "0.5"
                        })
                        document.querySelector(".content-slider-3").style.opacity = "1"
                        contSliderTitle.forEach(e => {
                            e.style.color = "rgb(255, 255, 255)"
                        })
                        contSliderPara.forEach(e => {
                            e.style.color = "rgb(255, 255, 255)"
                        })
                        videoSliderVid[2].currentTime = 0
                        videoSliderVid[2].play()
                        videoSliderVid[2].loop = true
                        setTimeout(() => {
                            videoSliderVid[2].loop = false
                            videoSliderVid[2].addEventListener("timeupdate", function () {
                                if (videoSliderVid[2].currentTime >= videoSliderVid[2].duration) {
                                    videoSliderVid[2].pause()
                                    videoSliderVid[2].parentElement.style.opacity = "0"
                                    roundVideo()
                                }
                            }, false)
                        }, 20000);
                    }
                }, false)
            }, 20000);
        }
    }, false);
}


// background: rgba(36, 54, 25, 0.8);