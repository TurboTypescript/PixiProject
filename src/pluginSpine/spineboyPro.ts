import * as PIXI from 'pixi.js'
window.PIXI = PIXI;
import "../pixi-plugins/pixi-spine";
export function spineboyPro() {
    const app = new PIXI.Application();
    document.body.appendChild(app.view);

// load spine data
    app.loader
        .add('spineboypro', 'examples/assets/pixi-spine/spineboy-pro.json')
        .load(onAssetsLoaded);

    app.stage.interactive = true;

    function onAssetsLoaded(loader, res) {
        // create a spine boy
        const spineBoyPro = new PIXI.spine.Spine(res.spineboypro.spineData);

        // set the position
        spineBoyPro.x = app.screen.width / 2;
        spineBoyPro.y = app.screen.height;

        spineBoyPro.scale.set(0.5);

        app.stage.addChild(spineBoyPro);

        const singleAnimations: any[] = ['aim', 'death', 'jump', 'portal'];
        const loopAnimations: any[] = ['hoverboard', 'idle', 'run', 'shoot', 'walk'];
        const allAnimations: any[] = singleAnimations.concat(loopAnimations);

        let lastAnimation = '';

        // Press the screen to play a random animation
        app.stage.on('pointerdown', () => {
            let animation = '';
            do {
                animation = allAnimations[Math.floor(Math.random() * allAnimations.length)];
            } while (animation === lastAnimation);

            spineBoyPro.state.setAnimation(0, animation, loopAnimations.includes(animation));

            lastAnimation = animation;
        });
    }
}
