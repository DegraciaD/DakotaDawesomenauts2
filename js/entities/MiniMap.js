game.MiniMap = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, "init", [x, y, {
            image: "map",
            width: 884,
            height: 40,
            spritewidth: "884",
            spriteheight: "40",
            getShape: function(){
                return(new me.Rect(0, 0, 884, 40)).toPolygon();
            }
        }]);
    this.floating = true;
    }
});