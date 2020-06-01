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
    },

    // LIFE-CYCLE CALLBACKS:
    //加载和显示资源
     onLoad () {

     },
    init(contenurl,headurl, title, user, watchno, time) {
        this.contenurl = contenurl;
        this.headurl = headurl;
        this.title = title;
        this.user = user;
        this.watchno = watchno;
        this.time = time;
        this.Title_label.String = title;
        this.User_label.String = user;
        this.WatchNo_label.String = watchno;
        this.Time_label.String = time;

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
