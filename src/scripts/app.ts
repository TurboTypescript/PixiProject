// app.ts







// ==============
// === STATES ===
// ==============




import {scratchcard} from "../advanced/scratchcard";
import {mouseTrail} from "../advanced/mouseTrail";
import {starWrap} from "../advanced/starWrap";
import {screenshot} from "../advanced/screenshot";
import {collision} from "../advanced/collision";
import {spinners} from "../advanced/spinners";
import {basic} from "../sprite/basic";
import {textureSwap} from "../sprite/textureSwap";
import {explosion} from "../sprite/explosion";
import {jet} from "../sprite/jet";
import {speed} from "../sprite/speed";
import {tiling} from "../sprite/tiling";
import {video} from "../sprite/video";
import {text} from "../text/text";
import {bitmapText} from "../text/bitmapText";
import {webfont} from "../text/webfont";
import {simple} from "../graphics/simple";
import {advanced} from "../graphics/advanced";
import {dynamic} from "../graphics/dynamic";
import {click} from "../interaction/click";
import {interactivity} from "../interaction/interactivity";
import {dragging} from "../interaction/dragging";
import {customMouseIcon} from "../interaction/customMouseIcon";
import {customHitarea} from "../interaction/customHitarea";
import {graphics} from "../masks/graphics";
import {sprite} from "../masks/sprite";
import {filter} from "../masks/filter";
import {blur} from "../filtersBasic/blur";
import {colorMatrix} from "../filtersBasic/colorMatrix";
import {displacementMapCrawlies} from "../filtersBasic/displacementMapCrawlies";
import {mouseBlending} from "../filtersAdvanced/mouseBlending";
import {customFilter} from "../filtersAdvanced/customFilter";
import {shadertoyFilter} from "../filtersAdvanced/shadertoyFilter";
import {texturedMeshBasic} from "../meshAndShaders/texturedMeshBasic";
import {texturedMeshAdvanced} from "../meshAndShaders/texturedMeshAdvanced";
import {triangle} from "../meshAndShaders/triangle";
import {coloredTriangle} from "../meshAndShaders/coloredTriangle";
import {texturedTriangle} from "../meshAndShaders/texturedTriangle";
import {uniforms} from "../meshAndShaders/uniforms";
import {sharingGeometry} from "../meshAndShaders/sharingGeometry";
import {sharingShader} from "../meshAndShaders/sharingShader";
import {mergingGeometry} from "../meshAndShaders/mergingGeometry";
import {interleavingGeometry} from "../meshAndShaders/interleavingGeometry";
import {instancedGeometry} from "../meshAndShaders/instancedGeometry";
import {shadertoy} from "../meshAndShaders/shadertoy";
import {multiPassShaderGeneratedMesh} from "../meshAndShaders/multiPassShaderGeneratedMesh";
import {textureRotate} from "../textures/textureRotate";
import {renderTextureBasic} from "../textures/renderTextureBasic";
import {gradientBasic} from "../textures/gradientBasic";
import {gradientResource} from "../textures/gradientResource";
import {outline} from "../pluginFilters/outline";
import {dragon} from "../pluginSpine/dragon";
import {goblin} from "../pluginSpine/goblin";
import {pixie} from "../pluginSpine/pixie";
import {spineboyWalking} from "../pluginSpine/spineboyWalking";
import {spineboyPro} from "../pluginSpine/spineboyPro";
import {robot} from "../plugin-dragonbones/robot";
import {twoDBasics} from "../plugin-projuction/2dBasics";
import {twoDPlane} from "../plugin-projuction/2dPlane";
import {twoDPlaneTiling} from "../plugin-projuction/2dPlaneTiling";
import {twoDQuadProjective} from "../plugin-projuction/2dQuadProjective";
import {twoDQuadBilinear} from "../plugin-projuction/2dQuadbilinear";
import {isometryBasics} from "../plugin-projuction/isometryBasics";
import {threeDCards} from "../plugin-projuction/3dCards";
import {threeDRunner} from "../plugin-projuction/3dRunner";
import {bunniesPacker} from "../plugin-projuction/bunniesPacker";
import {lighting} from "../plugin-layers/lighting";
import {zOrder} from "../plugin-layers/zOrder";
import {bringToTop} from "../plugin-layers/bringToTop";
import {moreBlendModes} from "../plugin-picture/moreBlendModes";
import {backdrop} from "../plugin-picture/backdrop";

window.onload = load;

function load() {
    // create();
    // container();
    // transparentBackground();
    // tinting();
    // cacheAsBitmap()
    // particleContainer();
    // require('../basic/blendModes').blendModes();
    // require('../basic/simplePane').simplePane();
    // require('../advanced/slots').slots();
    // scratchcard();
    // mouseTrail();
    // starWrap();
    // screenshot();
    // collision();
    // spinners();
    // basic();
    // textureSwap();
    // explosion();
    // jet();
    // speed();
    // tiling();
    // video();
    // text();
    // bitmapText();
    // webfont();
    // simple();
    // advanced();
    // dynamic();
    //====interaction begin
    // click();
    // interactivity();
    // dragging();
    // customMouseIcon();
    // customHitarea();
    // graphics();
    // sprite();
    // filter();
    //====interaction end
    //====filters basic begin
    // blur();
    // colorMatrix();
    // displacementMapCrawlies();
    //====filters basic end
    //====filters advanced begin
    // mouseBlending();
    // customFilter();
    // shadertoyFilter();
    //====filters advanced end
    //====mesh and shaders begin
    // texturedMeshBasic()
    // texturedMeshAdvanced();
    // triangle();
    // coloredTriangle()
    // texturedTriangle()
    // uniforms()
    // sharingGeometry()
    // sharingShader()
    // mergingGeometry();
    // interleavingGeometry()
    // instancedGeometry();
    // shadertoy()
    // multiPassShaderGeneratedMesh()
    //====mesh and shaders end
    //====textures begin
    // textureRotate()
    // renderTextureBasic()
    // gradientBasic()
    // gradientResource()
    //====textures end
    //====plugin filters begin
    // outline()
    //====plugin filters end
    //====plugin spine begin
    // dragon()
    // goblin()
    // pixie()
    // spineboyWalking();
    // spineboyPro();
    //====plugin spine end
    //====plugin dragonbones begin
    // robot();
    //====plugin dragonbones end
    //====plugin projection begin
    // twoDBasics();
    // twoDPlane()
    // twoDPlaneTiling()
    // twoDQuadProjective()
    // twoDQuadBilinear()
    // isometryBasics()
    // threeDCards()
    // threeDRunner()
    // bunniesPacker()
    //====plugin projection end
    //====plugin layers begin
    // lighting()
    // zOrder()
    // bringToTop()
    //====plugin layers end
    //====plugin picture begin
    moreBlendModes()
    backdrop()
    //====plugin picture end

} // load
