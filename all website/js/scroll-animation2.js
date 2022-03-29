var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var box5 = document.getElementById('box5')
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    console.log("调用")
    const triggerBottom = window.innerHeight / 5 * 4
        var boxTop1 = box1.getBoundingClientRect().top
        var boxTop2 = box2.getBoundingClientRect().top
        var boxTop3 = box3.getBoundingClientRect().top
        var boxTop4 = box4.getBoundingClientRect().top
        var boxTop5 = box5.getBoundingClientRect().top

        if(boxTop1 < triggerBottom) {
            box1.classList.add('show')
        } else {
            box1.classList.remove('show')
        }
        if(boxTop2 < triggerBottom) {
            box2.classList.add('show')
        } else {
            box2.classList.remove('show')
        }
        if(boxTop3 < triggerBottom) {
            box3.classList.add('show')
        } else {
            box3.classList.remove('show')
        }
        if(boxTop4 < triggerBottom) {
            box4.classList.add('show')
        } else {
            box4.classList.remove('show')
        }
        if(boxTop5 < triggerBottom) {
            box5.classList.add('show')
        } else {
            box5.classList.remove('show')
        }

}


