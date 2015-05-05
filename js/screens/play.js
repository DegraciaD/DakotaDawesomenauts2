game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function () {
    me.audio.playTrack("payback");  
 

        // reset the score
        game.data.score = 0;
        me.levelDirector.loadLevel("level01");
        this.resetPlayer(0,420);


        var gameTimerManager = me.pool.pull("GameTimerManager", 0, 0, {});
        me.game.world.addChild(gameTimerManager, 0);
        
        var HeroDeathManger = me.pool.pull("HeroDeathManger", 0, 0, {});
        me.game.world.addChild(HeroDeathManger, 0);
        
         var experienceManager = me.pool.pull("ExperienceManager", 0, 0, {});
         me.game.world.addChild(experienceManager, 0);
        
         var SpendGold  = me.pool.pull("SpendGold", 0, 0, {});
         me.game.world.addChild(SpendGold, 0);
         
        game.data.minimap = me.pool.pull("minimap", 10, 10, {});
        me.game.world.addChild(game.data.minimap, 30);



        me.input.bindKey(me.input.KEY.ENTER, "buy");
        me.input.bindKey(me.input.KEY.D, "skill1");
        me.input.bindKey(me.input.KEY.A, "skill2");
        me.input.bindKey(me.input.KEY.C, "skill3");
        me.input.bindKey(me.input.KEY.D, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.W, "jump", true);
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.SPACE, "jump", true);
        me.input.bindKey(me.input.KEY.UP, "jump", true);
        me.input.bindKey(me.input.KEY.S, "Attack");
        me.input.bindKey(me.input.KEY.DOWN, "Attack"); 

        // add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
    },
    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function () {
        me.audio.stopTrack();
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    },
    
    resetPlayer: function(x, y){
       game.data.player = me.pool.pull("player", x, y, {});
        me.game.world.addChild(game.data.player, 10); 
       game.data.miniPlayer = me.pool.pull("miniplayer", 10, 10, {});
       me.game.world.addChild(game.data.miniPlayer, 31);

    }
});
