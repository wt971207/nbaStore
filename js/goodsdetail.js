	$("#imgs a").click(function(){
		let iTdenx = $(this).index()+1;
		$("#box").css("background-image"," url(img/bigdetail"+iTdenx+".jpg)")
	})
	
    $("#box").mouseover(function () {
        singleton.getIntance({
            "$Obj": $("#box"),
            "bigMirrorWidth": 100,
            "bigMirrorHeight": 100,
            "multiple": 4
        });
    });

    let singleton = (function () {
        //一、构造函数和原型（类的代码）
        //放大镜做成面向对象的方式
        function BigMirror() {
            //放大镜的html对象
            this.$bigMirror =null;
            //放大效果的html对象
            this.$bigShow = null;
            //放大图片的html对象
            this.$bigImg = null;
        }

        BigMirror.prototype.updateAttr=function (obj) {
            //要放大的图片的dom元素
            this.$Obj = obj.$Obj;

            //放大镜本身的宽和高
            this.bigMirrorWidth = obj.bigMirrorWidth;
            this.bigMirrorHeight = obj.bigMirrorHeight;

            //放大的倍数
            this.multiple = obj.multiple;
        }

        //创建dom元素
        BigMirror.prototype.createUI=function () {
            //1、创建放大镜
            this.$bigMirror = $("<div id='bigMirror'></div>");

            //2、创建放大效果
            this.$bigShow = $("<div></div>");
        }

        //改变dom元素的属性
        BigMirror.prototype.updateUI=function () {
            //1、放大镜
            this.$bigMirror.css({
                position:"absolute",
                left:0,
                top:0,
                width:this.bigMirrorWidth,
                height:this.bigMirrorHeight,
                "border":"1px solid gray",
                "box-shadow":"2px 2px 2px #999",
                opacity:0.4,
                "display":"block"
            });
            this.$Obj.append(this.$bigMirror);

            //2、放大效果
            this.$bigShow.css({
                position:"absolute",
	            "background-image":this.$Obj.css("background-image"),
                "background-size": this.$Obj.width()*this.multiple+"px "+this.$Obj.height()*this.multiple+"px",
                left:400,
                top:0,
                width:this.bigMirrorWidth*this.multiple,
                height:this.bigMirrorHeight*this.multiple,
                border:"1px solid gray",
                overflow:"hidden",
                "display":"block"
            });
            this.$Obj.append(this.$bigShow);
        }

        BigMirror.prototype.big = function (evt) {
            //一、放大镜跟着鼠标走
            //计算鼠标距离box左上角的位置
            let left = evt.pageX-this.$Obj.offset().left;//鼠标距离页面的横向距离-box距离页面的横向距离
            let top = evt.pageY-this.$Obj.offset().top;

            //计算放大镜的位置
            let bigMirrorLeft = left-this.bigMirrorWidth/2;
            let bigMirrorTop = top-this.bigMirrorHeight/2;

            //边界处理
            //if(left>=小图的宽度-放大镜的宽度){
            if(bigMirrorLeft>=this.$Obj.width()-this.$bigMirror.width()){
                bigMirrorLeft =this.$Obj.width()-this.$bigMirror.width();
            }else if(bigMirrorLeft<=0){
                bigMirrorLeft =0;
            }

            if(bigMirrorTop>=this.$Obj.height()-this.$bigMirror.height()){
                bigMirrorTop =this.$Obj.height()-this.$bigMirror.height();
            }else if(bigMirrorTop<=0){
                bigMirrorTop =0;
            }

            this.$bigMirror.css({
                "left":bigMirrorLeft,
                "top":bigMirrorTop
            });

            //二、大图的移动
            this.$bigShow.css({
            "background-position":-1*this.multiple*bigMirrorLeft+"px "+-1*this.multiple*bigMirrorTop+"px"
            });
        }

        BigMirror.prototype.initEvent=function(){
            let that = this;
            this.$Obj.mouseout(function () {
                that.$bigMirror.css("display","none");
                that.$bigShow.css("display","none");
            });

            this.$Obj.mousemove(function (evt) {
                that.big(evt);
            });
        }

        //二、定义一个变量表示单例对象
        let instance;

        //三、对外开放一个函数，获取单例对象
        return {
            getIntance:function(obj){
                if(!instance){
                    instance =new BigMirror();
                    instance.updateAttr(obj);
                    instance.createUI();
                    instance.updateUI();
                    instance.initEvent();
                }else{
                    //不创建，只修改。
                    instance.updateAttr(obj);
                    instance.updateUI();
                    instance.initEvent();
                }
                return instance;
            }
        }
    })();
