// banner部分效果
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pargerbox li");
	let banner=document.querySelector("#banner");
	let left=document.querySelector(".btn_left");
	let right=document.querySelector(".btn_right");
	//通过点击实现轮播
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			// 删除、添加类名
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("imgbox1");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("imgbox1");
			n=index;
		}
	});
	// 自动执行代码，让图片自动播放
	var n=0;
	let t=setInterval(move,2000);
	function move(){
		n++;
		if(n==imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("imgbox1");
				pagers[i].classList.remove("active");
			}
			pagers[n].classList.add("active");
			imgs[n].classList.add("imgbox1");
	}
	//鼠标移入轮播停止
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	};

	let flag=true;
	// 左右箭头
	right.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	left.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();//move中n++,效果是n-1
		}
	}
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})
}

//闪购效果
{
	function content(parent){
		const left=parent.querySelector(".star_btn1");
		const right=parent.querySelector(".star_btn2");
		const inner=parent.querySelector(".bottom_inner");
		let n=0;
		right.onclick=function(){
			n++;
			left.classList.remove("disable");
			if(n==2){
				right.classList.add("disable");
			}
			if(n===3){
				n=2;
				return;
			}
			inner.style.marginLeft=-1240*n+"px";
		}
		left.onclick=function(){
			n--;
			right.classList.remove("disable");
			if(n==0){
				left.classList.add("disable");
			}
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-1240*n+"px";
		}
	}
	const star=document.querySelectorAll(".star");
	star.forEach(function(ele){
		content(ele);
	});
}

//搭配效果
{
	function content(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".two_bottom_right");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		});
	}
	const contentList=document.querySelectorAll(".two");
	contentList.forEach(function(ele){
		content(ele);
	});
}

//内容效果
{
	function content(parent){
		let next=parent.querySelector(".next");
		let prev=parent.querySelector(".prev");
		let inner=parent.querySelector(".content_inner");
		let item=parent.querySelectorAll(".item");
		let parges=parent.querySelectorAll(".dian1");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===item.length){
				n=item.length-1;
				return;
			}
			inner.style.marginLeft=n*-296+"px";
			parges[n].classList.add("dian2");
			parges[n-1].classList.remove("dian2");
			obj=parges[n];
		}
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
				return;
			}
			inner.style.marginLeft=n*-296+"px";
			parges[n+1].classList.remove("dian2");
			parges[n].classList.add("dian2");
			obj=parges[n];
		}
		let obj=parges[0];
		parges.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("dian2");
				ele.classList.add("dian2");
				obj=ele;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		});
	}
	const contentList=document.querySelectorAll(".neirong_bottom_item1");
	contentList.forEach(function(ele){
		content(ele);
	});
	// content(contentList[0]);
}

//banner侧滑效果
{
	var li=document.querySelectorAll(".banner_label");
	var inner=document.querySelectorAll(".banner_inner");
	let obj=inner[0]
	li.forEach(function(ele,index){
		ele.onmouseover=function(){
			// for(var i=0;i<inner.length;i++) {
			// 	inner[i].style.display="none";
			// }
			obj.style.display="none";
			inner[index].style.display="block";
			obj=inner[index];
		}
		ele.onmouseleave=function(){
			inner[index].style.display="none";
		}
	})
}

//导航选项卡效果
{

    const navspans=document.querySelectorAll(".nav_span");
    const navbox=document.querySelector(".nav_xiala");
    const navitem=document.querySelectorAll(".nav_xiala_content");
    const nav=document.querySelector(".daohang");
    // console.log(nav);
    // console.log(navitem);
    navspans.forEach(function(ele,index){
        ele.onmouseenter=function(){
            navbox.style.height="229px";
            navbox.style.display="block";
            for(var i=0;i<navitem.length;i++)
            {
                navitem[i].classList.remove("nav_content1");
            }
            navitem[index].classList.add("nav_content1");
        }
        ele.onmouseleave=function(){
        	navbox.style.height="0";
            navbox.style.display="none";
        }

    })
}
