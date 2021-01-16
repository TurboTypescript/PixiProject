import * as PIXI from 'pixi.js'
export function scratchcard() {
    const app = new PIXI.Application();
    document.body.appendChild(app.view);
    const { stage } = app;

// prepare circle texture, that will be our brush
    const brush = new PIXI.Graphics();
    brush.beginFill(0xffffff);
    brush.drawCircle(0, 0, 50);
    brush.endFill();

    app.loader.add('t1', 'examples/assets/bg_grass.jpg');
    app.loader.add('t2', 'examples/assets/bg_rotate.jpg');
    app.loader.load(setup);

    // @ts-ignore
    function setup(loader, resources) {
        const background = new PIXI.Sprite(resources.t1.texture);
        stage.addChild(background);
        background.width = app.screen.width;
        background.height = app.screen.height;

        const imageToReveal = new PIXI.Sprite(resources.t2.texture);
        stage.addChild(imageToReveal);
        imageToReveal.width = app.screen.width;
        imageToReveal.height = app.screen.height;

        // @ts-ignore
        const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

        const renderTextureSprite = new PIXI.Sprite(renderTexture);
        stage.addChild(renderTextureSprite);
        imageToReveal.mask = renderTextureSprite;

        app.stage.interactive = true;
        app.stage.on('pointerdown', pointerDown);
        app.stage.on('pointerup', pointerUp);
        app.stage.on('pointermove', pointerMove);

        let dragging = false;

        function pointerMove(event: { data: { global: PIXI.IPoint; }; }) {
            if (dragging) {
                brush.position.copyFrom(event.data.global);
                app.renderer.render(brush, renderTexture, false, undefined, false);
            }
        }

        function pointerDown(event: { data: { global: PIXI.IPoint; }; }) {
            dragging = true;
            pointerMove(event);
        }

        function pointerUp(event: any) {
            dragging = false;
        }
    }
}
