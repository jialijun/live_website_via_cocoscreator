cc.Class({
    extends: cc.Component,

    properties: {
        ConTent_LayOut: {
            default: null,
            type: cc.Layout
        },
        View_Iteam_Prefab: {
            default: null,
            type: cc.Prefab
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        //this.label.string = this.text;
       
    },
    start:function()
    {
        for( let i=0;i<20;i++)
        {
            let mView_Iteam_Prefab = cc.instantiate(this.View_Iteam_Prefab);
            var newMyPrefabScript = mView_Iteam_Prefab.getComponent('View_Iteam_Node_Script');//获取预制体绑定脚本
            newMyPrefabScript.init("https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg",
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg",
            "aaaaa",
            "bbb",
            "ccc",
            "ddd"
            )
            this.ConTent_LayOut.node.addChild(mView_Iteam_Prefab);
        }
    },

    // called every frame
    update: function (dt) {

    },
});
