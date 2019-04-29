window.onload = function(){
    // console.log("hello");
//这个其实主要是判断option的selected状态如果选中就移动（即添加到另一边即可），
// 而移动所有就不需要判断这一步即可。
    // 给左移按钮绑定点击事件，先获取按钮
    var moveleft = document.getElementById("moveLeft");
    moveleft.onclick = function(){
        // alert("hello");测试是否组测成功
        // 获取右边的select为之后的移动准备
        var right = document.getElementById("right");
        // 获取左边select里面的option
        var left = document.getElementById("left");
        var options = left.getElementsByTagName("option");
        //利用一个循环判断options的选中状态，选中则左移
        for(var i=0;i<options.length;i++){
            // 判断每一个option的状态
            var option = options[i];
            if(option.selected==true ){
                //把这一项添加到右边的select中
                right.appendChild(option);
                i--;
            }
        }
    };
    
    // 左移所有
    var moveLeftAll = document.getElementById("moveLeftAll");
    moveLeftAll.onclick = function(){
        // alert("hello");测试是否组测成功
        // 获取右边的select为之后的移动准备
        var right = document.getElementById("right");
        // 获取左边select里面的option
        var left = document.getElementById("left");
        var options = left.getElementsByTagName("option");
        //利用一个循环判断options的选中状态，选中则左移
        for(var i=0;i<options.length;i++){
            // 判断每一个option的状态
            var option = options[i];
            right.appendChild(option);
            i--; 
        }
    };
    
    // 给右移按钮绑定点击事件
    var moveright = document.getElementById("moveRight");
    moveright.onclick = function(){
        // 获取左边的
        var left = document.getElementById("left");
        // 获取右边select里的option
        var options = document.getElementById("right").getElementsByTagName("option");
        // 循环判断状态并移动
        for(var i=0;i<options.length;i++){
            // 每一个判断状态
            var option= options[i];
            if(option.selected == true){
                left.appendChild(option);
                i--;
            }
        }
    };

    // 右移所有
    var moverightAllt = document.getElementById("moverightAll");
    moverightAll.onclick = function(){
        // 获取左边的
        var left = document.getElementById("left");
        // 获取右边select里的option
        var options = document.getElementById("right").getElementsByTagName("option");
        // 循环判断状态并移动
        for(var i=0;i<options.length;i++){
            // 每一个判断状态
            var option= options[i];
            left.appendChild(option);
            i--;
        } 
    };
    
    




};