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
    var flag=false;
    var magicmove=function(n,dir){
        flag=true;
        var active=$('.lunbo-inner .active');
        active
            .addClass(dir)
            .delay(600)
            .queue(function(){
                flag=false;
                $(this).removeClass('active')
                    .removeClass(dir)
                    .dequeue();
            })
        var op=(dir=='left')?'right':'left';
        $(n).addClass(op);
        $(n).get(0).offsetWidth;
        $(n).removeClass(op).addClass('active');
        $('.zhishi li').removeClass('active').eq(items.index(n)).addClass('active');
    }
    var you=$('.lunbo .lyou');
    var zuo=$('.lunbo .lzuo');
    var items=$('.lunbo-inner .item');
    you.on('click',function(){
        if(flag){
            return;
        }
        var active=$('.lunbo-inner .active');
        if(active.next().length){
            var n=active.next();
        }else{
            var n=items.eq(0);
        }
        magicmove(n,'left');
    })
    zuo.on('click',function(){
        if(flag){
            return;
        }
        var active=$('.lunbo-inner .active');
        if(active.prev().length){
            var n=active.prev();
        }else{
            var n=items.eq(-1);
        }
        magicmove(n,'right');
    })

    // 点点点动
    $('.zhishi li').on('click',function(){
        if($(this).index()>items.index($('.lunbo-inner .active'))){
            var d='left';
        }else{
            var d='right';
        }
        var n=items.eq($(this).index());
        magicmove(n,d);
    })

    var t=setInterval(function(){
        you.trigger('click');
    },2000);
    $('.lunbo').on('mouseover',function(){
        you.css('display','block');
        zuo.css('display','block');
        clearInterval(t);
    })
    $('.lunbo').on('mouseout',function(){
        you.css('display','none');
        zuo.css('display','none');
        t=setInterval(function(){
            you.trigger('click');
        },2000);
    })
    
})