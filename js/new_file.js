window.onload = function(){
	
	var timer = null;
	var isMoving = false;
	var banner3p = document.getElementById("banner3p");
	
	onscroll = function(){
     var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	
		if(scrollTop>=300){
			banner3p.style.position = "fixed";
			banner3p.style.top = 0;
		}else{
			banner3p.style.position = "static";
		}
	}

//吸顶菜单
//		if(scrollTop > 670){
//			if(isMoving){
//				return 0;
//			}
//			isMoving = true;
//			timer = setInterval(function(){
//				if(banner3p.style.top == 0){
//					clearInterval(timer);
//					isMoving=false;
//				}else{
//					banner3p.style.top= banner3p.offsetTop +5+ "px";
//				}
//			},30); 
//		}else{
//			if(isMoving){
//				return 0;
//			}
//			isMoving = true;
//			
//			timer = setInterval(function(){
//				if(banner3p.style.top == -55){
//					clearInterval(timer);
//					isMoving = false;
//				}else{
//					banner3p.style.top = banner3p.offsetTop - 5+ "px"; 
//				}
//			},30);
//		}
		
// 置顶按钮
            if(scrollTop >= 670){
                goTop.className = "goTop active";    
            }else{
                goTop.className = "goTop";
            }

            if(scrollTop >= 3840 - clientHeight){
                goTop.className = "goTop";
            }
       
        goTop_icon.onclick = function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
	}    
	
	//滑到头像出现相关信息
	var top = document.getElementsByClassName("top");
	var topBtn =document.getElementsByClassName("topBtn");
//	console.log(top[1])
	for(var i = 0; i < top.length - 1; i++){
//			var t.index=i;
			topBtn[i].onmousemove = function(){
				top[i].style.display = "block";
			}
			var timer = null;
			topBtn[i].onmouseout = function(){
				clearInterval(timer);
				var timer = setInterval(function(){
					top[i].style.display = "none";
				},300)	
			}
			top[i].onmousemove=function(){
				top[i].style.display = "block";
				
				clearTimeout(timer);
			}
			top[i].onmouseout=function(){
				top[i].style.display = "none";
			} 
	}
	

}












