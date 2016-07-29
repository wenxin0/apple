$(function(){
    $('.header .nav .search').on('click',function(e){
        e.preventDefault();
        $('.header .searchbox,.xiaoshi,.zhezhao,body').addClass('searching');
    })
    $('.searchbox .cuohao').on('click',function(e){
        e.preventDefault();
        $('.header .searchbox,.xiaoshi,.zhezhao,body').removeClass('searching');
    })
    $('.nav-iphone .menu').on('click',function(e){
        e.preventDefault();
        $('.menu .hang,.menu .lie').toggleClass('zhuan');
        $('.xiaozhezhao,body,.nav-iphone .bag').toggleClass('searching');
    })

    $('.foot1,.foot2,.foot3,.foot4,.foot5,.foot6,.foot7').on('click',function(e){
        e.preventDefault();
        $(this).find('.jiahao').toggleClass('xuanzhuan');
        $(this).find('.shop').toggleClass('bianda');
        $(this).find('ul').slideToggle();
    })

    //轮播
    var win=$(".banner")[0];
    var as=$("li",$(".content"));
    var lis=$("li",$(".paganation")[0]);
    var btnl=$(".moveleft",win)[0];
    var btnr=$(".moveright",win)[0];
    var widths=parseInt(getStyle(as[0],"width"));//获取图片尺寸
    var num=0;//定义双下标
    var next=0;//定义双下标
    for(i=0;i<as.length;i++){
        if(i==0){
            continue;
        }
        as[i].style.left=widths+"px";
    }
    win.onmouseover=function(){
        btnl.style.display="block";
        btnr.style.display="block";
        clearInterval(t);
    }
    win.onmouseout=function(){
        btnl.style.display="none";
        btnr.style.display="none";
        t=setInterval(moveL,2000)
    }
//自动轮播
    var t=setInterval(moveL,2000);
    as[0].style.zIndex=10;
    //选项卡
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){//当前num，下一张this.index
            if(num==this.index){return;}
            as[this.index].style.left=widths+"px";
            lis[num].className="";//将清空此时的颜色类名
            lis[this.index].className="dian";//下一个上色
            animate(as[num],{left:-widths});
            animate(as[this.index],{left:0});
            next=this.index;
            num=this.index;
        }
    }
//右边按钮  左边按钮
    var flag=true;
    btnr.onclick=function(e){
        e.preventDefault();
        if(flag){
            flag=false;
            moveL();
        }
    }
    btnl.onclick=function(e){
        e.preventDefault();
        if(flag){
            flag=false;
            moveR();
        }
    }
//动起来
    function moveL(){
        next++;
        if(next==as.length){//限定边界
            next=0;
        }
        as[next].style.left=widths+"px";//就位，在右边就位

        //按钮动画
        lis[num].className="";//将清空此时的颜色类名
        lis[next].className="dian";//下一个上色

        animate(as[num],{left:-widths},function(){flag=true});//动画：当前的图片向左动画-widths
        animate(as[next],{left:0},function(){flag=true});//动画：下一张图片向左动画left=0
        num=next;//更新num=next
    }
    function moveR(){
        next--;
        if(next<0){//限定边界
            next=as.length-1;
        }
        as[next].style.left=-widths+"px";//就位，在右边就位
        //按钮动画
        lis[num].className="";//将清空此时的颜色类名
        lis[next].className="dian";//下一个上色
        animate(as[num],{left:widths},function(){flag=true});//动画：当前的图片向左动画-widths
        animate(as[next],{left:0},function(){flag=true});//动画：下一张图片向左动画left=0
        num=next;//更新num=next
    }


})