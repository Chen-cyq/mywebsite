const boxes=document.querySelecAll('.box');
window.addEventListener('scroll',()=>{
	const triggleBottom=window.innerHeight*4/5;
	boxes.forEach((item)=>{
		const boxTop=item.getBoundingClientRect().top;
		if(boxTop<triggleBottom){
			box.classList.add('show');
		}else{
			box.classList.remove('show');
		}
	})
});