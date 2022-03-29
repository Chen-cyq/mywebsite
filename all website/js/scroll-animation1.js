
function test(){
const background = document.querySelector(".background");

        /*获取当前滚轮位置*/
        document.addEventListener('scroll', () => {
            const scrollY = window.scrollY

            /*if判断当滚轮的位置不等于0的时候，修改背景的定位加上滚轮的值*/
            if (scrollY !== 0 && scrollY <=644) {
                // console.log(scrollY);
                background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
            }else{
                background.style.backgroundPosition = ''
            }
        })
}



/*卡片划入动画*/
/*const boxes=document.querySelecAll('.bbox');
console.log(boxes)
window.addEventListener('scrollY',()=>{
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(bbox => {
        const bboxTop = bbox.getBoundingClientRect().top

        if(bboxTop < triggerBottom) {
            bbox.classList.add('show')
        } else {
            bbox.classList.remove('show')
        }
    })

})*/


// const boxes=document.querySelecAll('.bbox');
// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//     console.log("执行")
//     const boxes=document.getElementsByClassName('.bbox');
//     window.addEventListener('scroll', checkBoxes)
//     const triggerBottom = window.innerHeight / 5 * 4
//     console.log(boxes)
//     boxes.forEach(bbox => {
//         const boxTop = bbox.getBoundingClientRect().top

//         if(boxTop < triggerBottom) {
//             bbox.classList.add('show')
//         } else {
//             bbox.classList.remove('show')
//         }
//     })
// }


/*const boxes = document.querySelectorAll('.bbox')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(bbox => {
        const bboxTop = bbox.getBoundingClientRect().top

        if(bboxTop < triggerBottom) {
            bbox.classList.add('show')
        } else {
            bbox.classList.remove('show')
        }
    })
}*/



/*const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}*/