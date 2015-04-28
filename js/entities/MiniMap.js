game.MiniMap = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, "init", [x, y, {
            image: "minimap",
            width: 352,
            height: 146,
            spritewidth: "352",
            spriteheight: "147",
            getShape: function(){
                return(new me.Rect(0, 0, 352, 147)).toPolygon();
            }
        }]);
    this.floating = true;
    }
});


