window.onload = function(){
    // 给每一个按钮绑定事件，这其实是很多重复的代码的。
    // 变高
    // var btn1 = document.getElementById("btn1");
    // btn1.onclick = function(){
    //     // alert("hello");
    //     document.getElementById("box").style.height="500px";
        
    // };

    // // 变宽
    // var btn2 = document.getElementById("btn2");
    // btn2.onclick = function(){
    //     document.getElementById("box").style.width="600px";
    // };

    // // 变背景颜色
    // var btn3 = document.getElementById("btn3");
    // btn3.onclick = function (){
    //     document.getElementById("box").style.backgroundColor="#B8BFD8";
    // };

    // // 隐藏
    // var btn4 = document.getElementById("btn4");
    // btn4.onclick = function (){
    //     document.getElementById("box").style.display="none";
    // };

    // // 重置
    // var btn5 = document.getElementById("btn5");
    // btn5.onclick = function (){
    //     document.getElementById("box").style.height="300px";
    //     document.getElementById("box").style.width="300px";
    //     document.getElementById("box").style.backgroundColor="skyblue";
    //     document.getElementById("box").style.display="block";
    // };

    // 上面的写法其实是挺多重复的代码的，用面向对象编程封装到函数里可以变得简单高效很多。
    // 定义一个函数用来改变样式。对象.style.要改变的样式类型 = "属性值"；
    // obj要改变样式的对象
    // sty要改变的样式类型
    // arr要改变的属性值放到一个数组中保存
    function changeStyle(obj,sty,arr){
        obj.style[sty] = arr;
    }
    // 获取需要改变样式的对象
    var box = document.getElementById("box");
    // 定义一个数组用来存放要改变的属性类型
    var atr = ['width','height','backgroundColor',"display"];
    // 定义一个数组用来存放要改变的属性值
    var val = ['500px','600px','red',"none"];
    // 遍历循环btn并绑定点击事件调用changeStyle函数
    var btns = document.getElementsByTagName("button");
    for(var i=0;i<btns.length;i++){
        // 获取i的值与每一个要更改的属性和属性值对应
        btns[i].index = i;
        btns[i].onclick = function(){
            // alert("hello");
            // 这里的this指的是当前点击的那个btn对象
            // 判断是否需要重置
            if(this.index===btns.length-1){
                // 把box的css样式设置为空,这里为空后，会自己从样式表中寻找
                box.style.cssText="";
            }else{
                changeStyle(box,atr[this.index],val[this.index]);
            }
         };
    }


};