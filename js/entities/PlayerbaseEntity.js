game.PlayerbaseEntity = me.Entity.extend({
    init: function (x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
                width: 100,
                height: 100,
                spritewidth: "100",
                spritehieght: "100",
                getShape: function () {
                    return (new me.Rect(0, 0, 100, 70)).toPolygon();
                }
            }]);
        this.broken = false;
        this.health = game.data.playerBaseHealth;
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
        this.type = "Playerbase";

        this.renderable.addAnimation("idle", [0]);
        this.renderable.addAnimation("broken", [1]);
        this.renderable.setCurrentAnimation("idle");


    },
    update: function (delta) {
        if (this.health <= 0) {
            this.broken = true;
            game.data.win = false;
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);

        this._super(me.Entity, "update", [delta]);
        return true;
    },
    loseHealth: function (damage) {
        this.health = this.health - damage;
    },
    onCollision: function () {

    }
});
game.LevelTrigger = me.Entity.extend({
    init: function(x, y, settings){
        this._super(me.Entity, "init", [x, y, settings]);
        this.body.onCollision = this.onCollision.bind(this);
      this.level = settings.level;
      this.xSpawn = settings.xSpawn;
      this.ySpawn = settings.ySpawn;
    },
    onCollision: function(){
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer(this.xSpawn, this.ySpawn);
        me.audio.playTrack("go");  
    }
});


