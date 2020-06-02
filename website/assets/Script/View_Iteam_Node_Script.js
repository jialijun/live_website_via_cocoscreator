// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        contenurl:{
            default: null,  
            type: cc.String,
        },
        headurl:{
            default: null,  
            type: cc.String,
        },
        hlsurl:{
            default: null,  
            type: cc.String,
        },
        title:{
            default: null,  
            type: cc.String,
        },
        user:{
            default: null,  
            type: cc.String,
        },
        watchno:{
            default: null,  
            type: cc.String,
        },
        time:{
            default: null,  
            type: cc.String,
        },
        Title_label:{
            default: null,  
            type: cc.Label,
        },
        User_label:{
            default: null,  
            type: cc.Label,
        },
        WatchNo_label:{
            default: null,  
            type: cc.Label,
        },
        Time_label:{
            default: null,  
            type: cc.Label,
        },
        Content_sprite:{
            default: null,  
            type: cc.Sprite,
        },
        Head_sprite:{
            default: null,  
            type: cc.Sprite,
        },
        Play_video_Prefab: {
            default: null,
            type: cc.Prefab
        },
        Canvas_Node: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:
    //加载和显示资源
     onLoad () {

     },
     popstatehandle:function(e)
     {
        alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能 
        if(window.Play_video_Node!=null)
        {
            window.Play_video_Node.removeFromParent();
            window.Play_video_Node.destroy();
        let msate=window.history.state;//当前页面的参数，可以用这个参数，回复这个页面
        }
        window.removeEventListener("popstate",this.popstatehandle);
     },
     //被点击
     ClickButton: function () {
         //保证只有一个在播放
        if(this.Canvas_Node.Play_video_Node!=null)
        {
            this.Canvas_Node.Play_video_Node.removeFromParent();
            this.Canvas_Node.Play_video_Node.destroy();
            this.Canvas_Node.Play_video_Node=null;
        }
        var mPlay_video_Prefab = cc.instantiate(this.Play_video_Prefab);
        var mWidget = mPlay_video_Prefab.getComponent(cc.Widget);
        mWidget.top=56;
        mWidget.left=0;
        mWidget.right=0;
        mPlay_video_Prefab.active=true;
        this.Canvas_Node.addChild(mPlay_video_Prefab);
        this.Canvas_Node.Play_video_Node=mPlay_video_Prefab;
        window.addEventListener("popstate", this.popstatehandle, false); 

        //压入当前页面的参数，可以使用这个参数，回复当前页面
        var state = {  
            title: "title",  
            url: "#"  
          };  
        window.history.pushState(state, "Play_video", "/Play_video.html");
        window.Play_video_Node=mPlay_video_Prefab;
        //window.history.state=state;
    },
    init(contenurl,headurl,hlsurl, title, user, watchno, time,CanvasNode) {
        this.contenurl = contenurl;
        this.headurl = headurl;
        this.hlsurl = hlsurl;//视频的地址
        this.hlsurl = hlsurl;//视频的地址
        this.title = title;
        this.user = user;
        this.watchno = watchno;
        this.time = time;
        this.Title_label.String = title;
        this.User_label.String = user;
        this.WatchNo_label.String = watchno;
        this.Time_label.String = time;
        this.Canvas_Node = CanvasNode;

    },
    start () {
        var Content_sprite = this.Content_sprite;
        if(this.contenurl!=null)
        {
        cc.loader.load(this.contenurl, function (err, texture) {
            var sprite  = new cc.SpriteFrame(texture);
            Content_sprite.spriteFrame = sprite;
        });
        }
        if (this.headurl != null) {
            var Head_sprite = this.Head_sprite;
            cc.loader.load(this.headurl, function (err, texture) {
                var sprite = new cc.SpriteFrame(texture);
                Head_sprite.spriteFrame = sprite;
            });
        }
    },

    // update (dt) {},
});
