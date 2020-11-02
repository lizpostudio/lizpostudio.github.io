(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'klock-root-klock', 'korim-root-korim', 'kds-root-kds', 'korge-root-korge', 'korio-root-korio', 'korau-root-korau', 'korma-root-korma', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('klock-root-klock'), require('korim-root-korim'), require('kds-root-kds'), require('korge-root-korge'), require('korio-root-korio'), require('korau-root-korau'), require('korma-root-korma'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Physics'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'Physics'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'Physics'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'Physics'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'Physics'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'Physics'.");
    }if (typeof this['korau-root-korau'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'korau-root-korau' was not found. Please, check whether 'korau-root-korau' is loaded prior to 'Physics'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'Physics'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Physics'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Physics'.");
    }root.Physics = factory(typeof Physics === 'undefined' ? {} : Physics, kotlin, this['klock-root-klock'], this['korim-root-korim'], this['kds-root-kds'], this['korge-root-korge'], this['korio-root-korio'], this['korau-root-korau'], this['korma-root-korma'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$klock_root_klock, $module$korim_root_korim, $module$kds_root_kds, $module$korge_root_korge, $module$korio_root_korio, $module$korau_root_korau, $module$korma_root_korma, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var DateTime = $module$klock_root_klock.com.soywiz.klock.DateTime;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var properties = Kotlin.kotlin.properties;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var Extra$PropertyThis = $module$kds_root_kds.com.soywiz.kds.Extra.PropertyThis;
  var L0 = Kotlin.Long.ZERO;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readBitmapFont = $module$korim_root_korim.com.soywiz.korim.font.readBitmapFont_2axf5n$;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var readSound = $module$korau_root_korau.com.soywiz.korau.sound.readSound_rbebel$;
  var xy = $module$korge_root_korge.com.soywiz.korge.view.xy_ajix5r$;
  var alpha = $module$korge_root_korge.com.soywiz.korge.view.alpha_k0wlkj$;
  var Unit = Kotlin.kotlin.Unit;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var SpriteAnimation = $module$korge_root_korge.com.soywiz.korge.view.SpriteAnimation;
  var xy_0 = $module$korge_root_korge.com.soywiz.korge.view.xy_2cbtc5$;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var ensureNative = $module$korim_root_korim.com.soywiz.korim.bitmap.ensureNative_p18lal$;
  var get_degrees = $module$korma_root_korma.com.soywiz.korma.geom.get_degrees_s8ev3n$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var onMouseDrag = $module$korge_root_korge.com.soywiz.korge.input.onMouseDrag_ylcuxg$;
  var L4000 = Kotlin.Long.fromInt(4000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var launchImmediately = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_hilpzi$;
  var size = $module$korge_root_korge.com.soywiz.korge.view.size_2cbtc5$;
  var centerOn = $module$korge_root_korge.com.soywiz.korge.view.centerOn_apzp43$;
  var Pair = Kotlin.kotlin.Pair;
  var Random = Kotlin.kotlin.random.Random_za3lpa$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var get_0 = $module$korma_root_korma.com.soywiz.korma.random.get_18cute$;
  var get_degrees_0 = $module$korma_root_korma.com.soywiz.korma.geom.get_degrees_yrwdxr$;
  var addUpdater = $module$korge_root_korge.com.soywiz.korge.view.addUpdater_t24ukx$;
  var L750 = Kotlin.Long.fromInt(750);
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var get_hrMilliseconds = $module$klock_root_klock.com.soywiz.klock.hr.get_hrMilliseconds_s8ev3n$;
  var addHrUpdater = $module$korge_root_korge.com.soywiz.korge.view.addHrUpdater_klr9dr$;
  var Html$FontFace$Bitmap = $module$korge_root_korge.com.soywiz.korge.html.Html.FontFace.Bitmap;
  var TextFormat = $module$korge_root_korge.com.soywiz.korge.ui.TextFormat;
  var TextSkin = $module$korge_root_korge.com.soywiz.korge.ui.TextSkin;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var centerBetween = $module$korge_root_korge.com.soywiz.korge.view.centerBetween_wgq76x$;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var anchor = $module$korge_root_korge.com.soywiz.korge.view.anchor_11wmr3$;
  var get_cosine = $module$korma_root_korma.com.soywiz.korma.geom.get_cosine_72g52s$;
  var get_sine = $module$korma_root_korma.com.soywiz.korma.geom.get_sine_72g52s$;
  var plus = $module$korma_root_korma.com.soywiz.korma.geom.plus_e486mh$;
  var Image = $module$korge_root_korge.com.soywiz.korge.view.Image;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var RoundRect_init = $module$korge_root_korge.com.soywiz.korge.view.RoundRect;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately_0 = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var Container_init = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var Random_0 = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var Sprite_init = $module$korge_root_korge.com.soywiz.korge.view.Sprite_init_i2lxqn$;
  var Circle_init = $module$korge_root_korge.com.soywiz.korge.view.Circle;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var UIText_init = $module$korge_root_korge.com.soywiz.korge.ui.UIText;
  var get_keys = $module$korge_root_korge.com.soywiz.korge.input.get_keys_gohfi1$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Bitmap32 = $module$korim_root_korim.com.soywiz.korim.bitmap.Bitmap32;
  var circle = $module$korma_root_korma.com.soywiz.korma.geom.vector.circle_m5r0a8$;
  var ColorPaint = $module$korim_root_korim.com.soywiz.korim.vector.paint.ColorPaint;
  var numberToDouble = Kotlin.numberToDouble;
  var Matrix_init = $module$korim_root_korim.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.Matrix;
  var NativeImage = $module$korim_root_korim.com.soywiz.korim.bitmap.NativeImage_vux9f0$;
  var LineCap = $module$korma_root_korma.com.soywiz.korma.geom.vector.LineCap;
  var rect = $module$korma_root_korma.com.soywiz.korma.geom.vector.rect_clsz36$;
  var roundRect = $module$korim_root_korim.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.vector.roundRect_eslsqu$;
  TrainingShape.prototype = Object.create(Image.prototype);
  TrainingShape.prototype.constructor = TrainingShape;
  FlyingShape.prototype = Object.create(Image.prototype);
  FlyingShape.prototype.constructor = FlyingShape;
  ShapeForm.prototype = Object.create(Enum.prototype);
  ShapeForm.prototype.constructor = ShapeForm;
  ShapeColor.prototype = Object.create(Enum.prototype);
  ShapeColor.prototype.constructor = ShapeColor;
  ShapeSize.prototype = Object.create(Enum.prototype);
  ShapeSize.prototype.constructor = ShapeSize;
  ShapeSpeed.prototype = Object.create(Enum.prototype);
  ShapeSpeed.prototype.constructor = ShapeSpeed;
  function GamePlay(initLevel) {
    if (initLevel === void 0)
      initLevel = 0;
    this.level = initLevel;
    this.trainingShapes = 0;
    this.backlog = ArrayList_init();
    this.startTime = DateTime.Companion.nowUnixLong();
  }
  Object.defineProperty(GamePlay.prototype, 'numberOfForms', {
    get: function () {
      switch (this.level) {
        case 0:
          return 15;
        case 1:
          return 50;
        default:return 70;
      }
    }
  });
  GamePlay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePlay',
    interfaces: []
  };
  function image$lambda($receiver) {
    return Unit;
  }
  function roundRect$lambda($receiver) {
    return Unit;
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda;
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately_0(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
      return Unit;
    };
  }
  function container$lambda($receiver) {
    return Unit;
  }
  function sprite$lambda($receiver) {
    return Unit;
  }
  function circle$lambda($receiver) {
    return Unit;
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function uiText$lambda($receiver) {
    return Unit;
  }
  var font;
  var font_metadata = new PropertyMetadata('font');
  function get_font() {
    return font.getValue_lrcp0p$(this, font_metadata);
  }
  function set_font(font_0) {
    font.setValue_9rddgb$(this, font_metadata, font_0);
  }
  var WIDTH;
  var HEIGHT;
  var BOXTOPX;
  var BOXTOPY;
  var BOXWIDTH;
  var BOXHEIGHT;
  var TR_WIDTH;
  var TR_HEIGHT;
  var TR_X0;
  var TR_Y0;
  var TR_SLIDER_SIZE;
  var TR_SLIDER_LINE;
  var KEYWIDTH;
  var KEYHEIGHT;
  var KEYBOARDX;
  var KEYBOARDY;
  var MARGIN;
  var ACCEPTY;
  var ACCEPTX;
  var SYMBOL_SIZE;
  var FONT_SIZE;
  var PLAY_AGAIN_HEIGHT;
  var MAX_NUMBER;
  var MAX_SIZE;
  var MAX_SPEED;
  var MAX_COLOR;
  var MAX_SHAPE;
  var MAX_SYMBOLS;
  var cartoucheBackColor;
  function boxShapes$lambda($receiver) {
    return new SymbolsBuilder($receiver.views, 48);
  }
  var boxShapes;
  var boxShapes_metadata = new PropertyMetadata('boxShapes');
  function get_boxShapes($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = boxShapes.name) != null ? tmp$ : boxShapes_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = boxShapes.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = boxShapes.name) != null ? tmp$_3 : boxShapes_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var stageShapes;
  var correctAnswers;
  var wrongAnswers;
  var gameTime;
  var nowStarting;
  function Coroutine$main$lambda$lambda(closure$selectedLanguage_0, closure$supportedLanguages_0, closure$language_0, closure$nationsFlags_0, this$_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
    this.local$closure$supportedLanguages = closure$supportedLanguages_0;
    this.local$closure$language = closure$language_0;
    this.local$closure$nationsFlags = closure$nationsFlags_0;
    this.local$this$ = this$_0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$closure$selectedLanguage.v === get_lastIndex(this.local$closure$supportedLanguages))
              this.local$closure$selectedLanguage.v = 0;
            else {
              tmp$ = this.local$closure$selectedLanguage.v;
              this.local$closure$selectedLanguage.v = tmp$ + 1 | 0;
            }

            this.local$closure$language.removeChildren();
            var tmp$_0 = this.local$closure$language;
            var $receiver = this.local$this$;
            var $receiver_0 = addTo(Image_init(this.local$closure$nationsFlags.get_za3lpa$(this.local$closure$selectedLanguage.v), 0.0, 0.0), $receiver);
            image$lambda($receiver_0);
            return tmp$_0.addChild_l5rad2$(xy($receiver_0, 10, 10)), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda(closure$selectedLanguage_0, closure$supportedLanguages_0, closure$language_0, closure$nationsFlags_0, this$_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$selectedLanguage_0, closure$supportedLanguages_0, closure$language_0, closure$nationsFlags_0, this$_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$main$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$lambda_0;
  Coroutine$main$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main$lambda$createNewShapeSize(closure$trainingShapesList, closure$newRandomShape, this$) {
    return function (newSize) {
      first(closure$trainingShapesList).removeFromParent();
      var newShapeX = first(closure$trainingShapesList).x;
      var newShapeY = first(closure$trainingShapesList).y;
      var newShapeAngle = first(closure$trainingShapesList).angle;
      closure$newRandomShape.v.size = newSize;
      closure$trainingShapesList.clear();
      var newTrainingShape_0 = newTrainingShape(this$, newShapeX, newShapeY, closure$newRandomShape.v, get_boxShapes(this$).eyeSymbol, 0, newShapeAngle);
      closure$trainingShapesList.add_11rb$(newTrainingShape_0);
    };
  }
  function main$lambda$lambda_1(this$, closure$sizeCircle, closure$createNewShapeSize, closure$trainingY) {
    return function ($receiver, it) {
      var tmp$;
      tmp$ = this$.mouseY;
      if (rangeTo(closure$trainingY.get_za3lpa$(3), closure$trainingY.get_za3lpa$(2)).contains_mef7kx$(tmp$)) {
        closure$sizeCircle.y = this$.mouseY;
        closure$createNewShapeSize(ShapeSize$LARGE_getInstance());
      } else if (rangeTo(closure$trainingY.get_za3lpa$(2), closure$trainingY.get_za3lpa$(1)).contains_mef7kx$(tmp$)) {
        closure$createNewShapeSize(ShapeSize$MEDIUM_getInstance());
        closure$sizeCircle.y = this$.mouseY;
      } else if (rangeTo(closure$trainingY.get_za3lpa$(1), closure$trainingY.get_za3lpa$(0) - TR_SLIDER_SIZE).contains_mef7kx$(tmp$)) {
        closure$createNewShapeSize(ShapeSize$SMALL_getInstance());
        closure$sizeCircle.y = this$.mouseY;
      } else
        println('size out of bounds');
      return Unit;
    };
  }
  function main$lambda$lambda_2(this$, closure$trainingShape, closure$speedCircle, closure$trainingX) {
    return function ($receiver, it) {
      var tmp$;
      tmp$ = this$.mouseX;
      if (rangeTo(closure$trainingX.get_za3lpa$(0), closure$trainingX.get_za3lpa$(1)).contains_mef7kx$(tmp$)) {
        closure$trainingShape.v.shapeParams.speed = ShapeSpeed$SLOW_getInstance();
        closure$speedCircle.x = this$.mouseX;
      } else if (rangeTo(closure$trainingX.get_za3lpa$(1), closure$trainingX.get_za3lpa$(2)).contains_mef7kx$(tmp$)) {
        closure$trainingShape.v.shapeParams.speed = ShapeSpeed$MEDIUM_getInstance();
        closure$speedCircle.x = this$.mouseX;
      } else if (rangeTo(closure$trainingX.get_za3lpa$(2), closure$trainingX.get_za3lpa$(3) - TR_SLIDER_SIZE).contains_mef7kx$(tmp$)) {
        closure$trainingShape.v.shapeParams.speed = ShapeSpeed$FAST_getInstance();
        closure$speedCircle.x = this$.mouseX;
      } else
        println('speed out of bounds');
      return Unit;
    };
  }
  function Coroutine$main$lambda$lambda_1(closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
    this.local$closure$letsStartTrainingSw = closure$letsStartTrainingSw_0;
    this.local$closure$letsStartTrainingEn = closure$letsStartTrainingEn_0;
    this.local$index = void 0;
  }
  Coroutine$main$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda_1.prototype.constructor = Coroutine$main$lambda$lambda_1;
  Coroutine$main$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$index = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$index > 2) {
              this.state_0 = 5;
              continue;
            }
            if (this.local$closure$selectedLanguage.v === 1)
              this.local$closure$letsStartTrainingSw.get_za3lpa$(this.local$index).play_gfl8bq$();
            else
              this.local$closure$letsStartTrainingEn.get_za3lpa$(this.local$index).play_gfl8bq$();
            this.state_0 = 3;
            this.result_0 = delay(L4000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$index++;
            this.state_0 = 2;
            continue;
          case 5:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda_3(closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda_1(closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$buildCartouche$lambda$lambda$lambda(closure$soundsProperties_0, closure$selectedLanguage_0, closure$keyIndex_0, closure$keyROWIndex_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$soundsProperties = closure$soundsProperties_0;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
    this.local$closure$keyIndex = closure$keyIndex_0;
    this.local$closure$keyROWIndex = closure$keyROWIndex_0;
  }
  Coroutine$main$lambda$buildCartouche$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$buildCartouche$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$buildCartouche$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$buildCartouche$lambda$lambda$lambda;
  Coroutine$main$lambda$buildCartouche$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$soundsProperties.get_za3lpa$(this.local$closure$selectedLanguage.v).get_za3lpa$(this.local$closure$keyIndex).get_za3lpa$(this.local$closure$keyROWIndex.get_za3lpa$(this.local$closure$keyIndex) - 1 | 0).play_gfl8bq$();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$buildCartouche$lambda$lambda$lambda(closure$soundsProperties_0, closure$selectedLanguage_0, closure$keyIndex_0, closure$keyROWIndex_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$buildCartouche$lambda$lambda$lambda(closure$soundsProperties_0, closure$selectedLanguage_0, closure$keyIndex_0, closure$keyROWIndex_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$buildCartouche$lambda$lambda(closure$keyROWIndex_0, closure$keyIndex_0, closure$cartoucheSets_0, closure$soundsProperties_0, closure$selectedLanguage_0, this$_1, closure$valueRects_0, this$_2, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$keyROWIndex = closure$keyROWIndex_0;
    this.local$closure$keyIndex = closure$keyIndex_0;
    this.local$closure$cartoucheSets = closure$cartoucheSets_0;
    this.local$closure$soundsProperties = closure$soundsProperties_0;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
    this.local$this$ = this$_1;
    this.local$closure$valueRects = closure$valueRects_0;
    this.local$this$_0 = this$_2;
  }
  Coroutine$main$lambda$buildCartouche$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$buildCartouche$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$buildCartouche$lambda$lambda.prototype.constructor = Coroutine$main$lambda$buildCartouche$lambda$lambda;
  Coroutine$main$lambda$buildCartouche$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$closure$keyROWIndex.get_za3lpa$(this.local$closure$keyIndex) === this.local$closure$cartoucheSets.get_za3lpa$(this.local$closure$keyIndex).maxValues)
              this.local$closure$keyROWIndex.set_wxm5ur$(this.local$closure$keyIndex, 1);
            else {
              this.local$closure$keyROWIndex.set_wxm5ur$(this.local$closure$keyIndex, this.local$closure$keyROWIndex.get_za3lpa$(this.local$closure$keyIndex) + 1 | 0);
            }

            launchImmediately(this.local$this$, main$lambda$buildCartouche$lambda$lambda$lambda(this.local$closure$soundsProperties, this.local$closure$selectedLanguage, this.local$closure$keyIndex, this.local$closure$keyROWIndex));
            if (this.local$closure$valueRects.size >= 6) {
              this.local$closure$cartoucheSets.get_za3lpa$(this.local$closure$keyIndex).imageHolder.removeFromParent();
              var $receiver = this.local$this$_0;
              var $receiver_0 = addTo(Image_init(this.local$closure$cartoucheSets.get_za3lpa$(this.local$closure$keyIndex).nativeImage.get_za3lpa$(this.local$closure$keyROWIndex.get_za3lpa$(this.local$closure$keyIndex) - 1 | 0), 0.0, 0.0), $receiver);
              var closure$valueRects = this.local$closure$valueRects;
              var closure$keyIndex = this.local$closure$keyIndex;
              size($receiver_0, (KEYWIDTH - KEYWIDTH / 3 - 18) * 0.5, (KEYWIDTH - KEYWIDTH / 3 - 18) * 0.5);
              centerOn($receiver_0, closure$valueRects.get_za3lpa$(closure$keyIndex));
              var newImageSet = $receiver_0;
              return this.local$closure$cartoucheSets.get_za3lpa$(this.local$closure$keyIndex).imageHolder = newImageSet, Unit;
            }
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$buildCartouche$lambda$lambda(closure$keyROWIndex_0, closure$keyIndex_0, closure$cartoucheSets_0, closure$soundsProperties_0, closure$selectedLanguage_0, this$_1, closure$valueRects_0, this$_2) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$buildCartouche$lambda$lambda(closure$keyROWIndex_0, closure$keyIndex_0, closure$cartoucheSets_0, closure$soundsProperties_0, closure$selectedLanguage_0, this$_1, closure$valueRects_0, this$_2, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$buildCartouche(closure$valueRects, closure$groupSymbols, closure$keyROWIndex, closure$cartoucheSets, closure$soundsProperties, closure$selectedLanguage, this$, closure$keyBoard) {
    return function () {
      for (var keyIndex = 0; keyIndex <= 5; keyIndex++) {
        var $receiver = this$;
        var $receiver_0_0 = addTo(new Container_init(), $receiver);
        var closure$valueRects_0 = closure$valueRects;
        var closure$groupSymbols_0 = closure$groupSymbols;
        var closure$keyROWIndex_0 = closure$keyROWIndex;
        var closure$cartoucheSets_0 = closure$cartoucheSets;
        var closure$soundsProperties_0 = closure$soundsProperties;
        var closure$selectedLanguage_0 = closure$selectedLanguage;
        var this$_0 = this$;
        var $receiver_0_1 = addTo(new RoundRect_init(KEYWIDTH, KEYHEIGHT, 16.0, 16.0, cartoucheBackColor, true), $receiver_0_0);
        roundRect$lambda($receiver_0_1);
        var $receiver_0_2 = addTo(new RoundRect_init(KEYWIDTH / 3, KEYHEIGHT - 12, 16.0, 16.0, color.Colors.get_61zpoe$('#EFD2AB'), true), $receiver_0_0);
        roundRect$lambda($receiver_0_2);
        var groupRect = xy($receiver_0_2, 6, 6);
        var $receiver_0_3 = addTo(new RoundRect_init(KEYWIDTH - KEYWIDTH / 3 - 18, KEYHEIGHT - 12, 16.0, 16.0, color.Colors.get_61zpoe$('#EFD2AB'), true), $receiver_0_0);
        roundRect$lambda($receiver_0_3);
        closure$valueRects_0.add_11rb$(xy($receiver_0_3, 78, 6));
        var $receiver_0_4 = addTo(Image_init(closure$groupSymbols_0.get_za3lpa$(keyIndex), 0.0, 0.0), $receiver_0_0);
        size($receiver_0_4, (KEYWIDTH - KEYWIDTH / 3 - 18) * 0.35, (KEYWIDTH - KEYWIDTH / 3 - 18) * 0.35);
        centerOn($receiver_0_4, groupRect);
        closure$keyROWIndex_0.set_wxm5ur$(keyIndex, 1);
        var $receiver_0_5 = addTo(Image_init(closure$cartoucheSets_0.get_za3lpa$(keyIndex).nativeImage.get_za3lpa$(closure$keyROWIndex_0.get_za3lpa$(keyIndex) - 1 | 0), 0.0, 0.0), $receiver_0_0);
        size($receiver_0_5, (KEYWIDTH - KEYWIDTH / 3 - 18) * 0.5, (KEYWIDTH - KEYWIDTH / 3 - 18) * 0.5);
        centerOn($receiver_0_5, closure$valueRects_0.get_za3lpa$(keyIndex));
        var newImage = $receiver_0_5;
        closure$cartoucheSets_0.get_za3lpa$(keyIndex).imageHolder = newImage;
        var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
          return $receiver_0.click;
        });
        var tmp$;
        if ((tmp$ = $receiver_0_0 != null ? get_mouse($receiver_0_0) : null) != null) {
          prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, main$lambda$buildCartouche$lambda$lambda(closure$keyROWIndex_0, keyIndex, closure$cartoucheSets_0, closure$soundsProperties_0, closure$selectedLanguage_0, this$_0, closure$valueRects_0, $receiver_0_0)));
        }var newKey = xy($receiver_0_0, 200 + (keyIndex * 220 | 0) + 6 | 0, 858);
        closure$keyBoard.add_11rb$(newKey);
      }
    };
  }
  function main$lambda$resetGamePlay(closure$spriteHeroGoRight, closure$gamePlay, closure$customShapes, closure$extraSetsCount, closure$countShapes, closure$cannonShots) {
    return function () {
      closure$spriteHeroGoRight.x = 50.0;
      closure$customShapes.v = listOf([createRandomShapeBasedOnLevel(closure$gamePlay.level), createRandomShapeBasedOnLevel(closure$gamePlay.level), createRandomShapeBasedOnLevel(closure$gamePlay.level), createRandomShapeBasedOnLevel(closure$gamePlay.level)]);
      createRandomShapeBasedOnLevel(closure$gamePlay.level);
      closure$extraSetsCount.v = 0;
      nowStarting = DateTime.Companion.nowUnixLong();
      closure$countShapes.v = mutableListOf([0, 0, 0, 0]);
      closure$cannonShots.v = mutableListOf([0, 0, 0, 0]);
    };
  }
  function Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda(closure$cannonSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cannonSound = closure$cannonSound_0;
  }
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda.prototype.constructor = Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda;
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$cannonSound.play_gfl8bq$();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$launchSetsBasedOnTimer$lambda$lambda(closure$cannonSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda(closure$cannonSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda_0(closure$cannonSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cannonSound = closure$cannonSound_0;
  }
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda_0.prototype.constructor = Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda_0;
  Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$cannonSound.play_gfl8bq$();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$launchSetsBasedOnTimer$lambda$lambda_0(closure$cannonSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$launchSetsBasedOnTimer$lambda$lambda_0(closure$cannonSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$launchSetsBasedOnTimer$lambda(closure$startUpDelay100Ms, closure$backGroundImage, closure$cannonAnimation, closure$maxIndex, closure$countShapes, closure$cannonShots, closure$cannonSound, closure$customNumberAndShape, closure$shapeX, closure$shapeY, closure$customShapes, closure$random, closure$extraSetsCount, closure$isGameOver, closure$gamePlay, closure$symbolsList) {
    return function ($receiver, it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var timePassed = DateTime.Companion.nowUnixLong().subtract(nowStarting).div(Kotlin.Long.fromInt(100)).toInt();
      if (1 <= timePassed && timePassed < closure$startUpDelay100Ms) {
        closure$backGroundImage.alpha = 0.8 * timePassed / closure$startUpDelay100Ms;
        closure$cannonAnimation.alpha = 1.0 * timePassed / closure$startUpDelay100Ms;
      }if (timePassed < Kotlin.imul(closure$startUpDelay100Ms, closure$maxIndex + 2 | 0)) {
        for (var customIndex = 0; customIndex <= 3; customIndex++) {
          tmp$ = Kotlin.imul(closure$startUpDelay100Ms, customIndex + 1 | 0) + 1 - 20 | 0;
          tmp$_0 = Kotlin.imul(closure$startUpDelay100Ms, customIndex + 2 | 0) - 20 | 0;
          if (tmp$ <= timePassed && timePassed <= tmp$_0) {
            if (closure$countShapes.v.get_za3lpa$(customIndex) === 0 && closure$cannonShots.v.get_za3lpa$(customIndex) === 0) {
              closure$cannonAnimation.playAnimation_hcsbl9$(1, void 0, TimeSpan.Companion.fromMilliseconds_14dthe$(330));
              launchImmediately($receiver, main$lambda$launchSetsBasedOnTimer$lambda$lambda(closure$cannonSound));
              var tmp$_4;
              tmp$_4 = closure$cannonShots.v;
              tmp$_4.set_wxm5ur$(customIndex, tmp$_4.get_za3lpa$(customIndex) + 1 | 0);
            }}tmp$_1 = Kotlin.imul(closure$startUpDelay100Ms, customIndex + 1 | 0) + 1 | 0;
          tmp$_2 = Kotlin.imul(closure$startUpDelay100Ms, customIndex + 2 | 0);
          if (tmp$_1 <= timePassed && timePassed <= tmp$_2) {
            if (closure$countShapes.v.get_za3lpa$(customIndex) < closure$customNumberAndShape.get_za3lpa$(customIndex).first) {
              var shapeNew = newShape($receiver, closure$shapeX, closure$shapeY, closure$customShapes.v.get_za3lpa$(customIndex), closure$customNumberAndShape.get_za3lpa$(customIndex).second, customIndex);
              shapeNew.angle = get_degrees_0(get_0(closure$random, 0.0, 360.0));
              stageShapes.add_11rb$(shapeNew);
              var tmp$_5;
              tmp$_5 = closure$countShapes.v;
              tmp$_5.set_wxm5ur$(customIndex, tmp$_5.get_za3lpa$(customIndex) + 1 | 0);
            }}}
      }if ((timePassed / 900 | 0) > closure$extraSetsCount.v && !closure$isGameOver.v) {
        closure$cannonAnimation.playAnimation_hcsbl9$(1, void 0, TimeSpan.Companion.fromMilliseconds_14dthe$(330));
        launchImmediately($receiver, main$lambda$launchSetsBasedOnTimer$lambda$lambda_0(closure$cannonSound));
        tmp$_3 = closure$extraSetsCount.v;
        closure$extraSetsCount.v = tmp$_3 + 1 | 0;
        println(closure$extraSetsCount.v);
        var newSetShape = createRandomShapeBasedOnLevel(closure$gamePlay.level);
        var rndSymbol = first(shuffled(closure$symbolsList));
        var symbolNumber = closure$symbolsList.indexOf_11rb$(rndSymbol);
        var rndCount = random(new IntRange(0, 4), Random_0.Default);
        for (var i = 0; i <= rndCount; i++) {
          var shapeNew_0 = newShape($receiver, closure$shapeX, closure$shapeY, newSetShape, rndSymbol, symbolNumber);
          shapeNew_0.angle = get_degrees_0(get_0(closure$random, 0.0, 360.0));
          stageShapes.add_11rb$(shapeNew_0);
        }
      }return Unit;
    };
  }
  function main$lambda$launchSetsBasedOnTimer(closure$gamePlay, closure$startUpDelay100Ms, closure$backGroundImage, closure$cannonAnimation, closure$countShapes, closure$cannonShots, closure$cannonSound, closure$customNumberAndShape, closure$shapeX, closure$shapeY, closure$customShapes, closure$extraSetsCount, closure$isGameOver, closure$symbolsList, this$) {
    return function () {
      var random = Random(closure$gamePlay.level);
      var maxIndex = 4;
      addUpdater(this$, main$lambda$launchSetsBasedOnTimer$lambda(closure$startUpDelay100Ms, closure$backGroundImage, closure$cannonAnimation, maxIndex, closure$countShapes, closure$cannonShots, closure$cannonSound, closure$customNumberAndShape, closure$shapeX, closure$shapeY, closure$customShapes, random, closure$extraSetsCount, closure$isGameOver, closure$gamePlay, closure$symbolsList));
    };
  }
  function Coroutine$main$lambda$acceptCheckPlayLevel$lambda(closure$soundsProperties_0, closure$selectedLanguage_0, closure$keyROWIndex_0, closure$goodJobSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$soundsProperties = closure$soundsProperties_0;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
    this.local$closure$keyROWIndex = closure$keyROWIndex_0;
    this.local$closure$goodJobSound = closure$goodJobSound_0;
    this.local$i = void 0;
  }
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda.prototype.constructor = Coroutine$main$lambda$acceptCheckPlayLevel$lambda;
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$i = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$i > 5) {
              this.state_0 = 5;
              continue;
            }
            this.local$closure$soundsProperties.get_za3lpa$(this.local$closure$selectedLanguage.v).get_za3lpa$(this.local$i).get_za3lpa$(this.local$closure$keyROWIndex.get_za3lpa$(this.local$i) - 1 | 0).play_gfl8bq$();
            this.state_0 = 3;
            this.result_0 = delay(L750, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$i++;
            this.state_0 = 2;
            continue;
          case 5:
            return this.local$closure$goodJobSound.get_za3lpa$(this.local$closure$selectedLanguage.v).play_gfl8bq$();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$acceptCheckPlayLevel$lambda(closure$soundsProperties_0, closure$selectedLanguage_0, closure$keyROWIndex_0, closure$goodJobSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$acceptCheckPlayLevel$lambda(closure$soundsProperties_0, closure$selectedLanguage_0, closure$keyROWIndex_0, closure$goodJobSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$acceptCheckPlayLevel$lambda$lambda(closure$spriteHeroGoRight) {
    return function ($receiver, time) {
      var scale = time.div_seyb0p$(get_hrMilliseconds(18));
      if (closure$spriteHeroGoRight.x < TR_X0) {
        advance(closure$spriteHeroGoRight, 3.0 * scale, get_degrees(0));
        closure$spriteHeroGoRight.playAnimation_hcsbl9$(1, void 0, TimeSpan.Companion.fromMilliseconds_14dthe$(90));
      }return Unit;
    };
  }
  function main$lambda$acceptCheckPlayLevel$lambda_0(closure$isGameOver, closure$spriteHeroGoRight, this$, closure$resetGamePlay) {
    return function () {
      closure$isGameOver.v = false;
      addHrUpdater(this$, main$lambda$acceptCheckPlayLevel$lambda$lambda(closure$spriteHeroGoRight));
      closure$resetGamePlay();
      restart(this$);
      return Unit;
    };
  }
  function Coroutine$main$lambda$acceptCheckPlayLevel$lambda_0(closure$klackSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$klackSound = closure$klackSound_0;
  }
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda_0.prototype.constructor = Coroutine$main$lambda$acceptCheckPlayLevel$lambda_0;
  Coroutine$main$lambda$acceptCheckPlayLevel$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            wrongAnswers = wrongAnswers + 1 | 0;
            return this.local$closure$klackSound.play_gfl8bq$();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$acceptCheckPlayLevel$lambda_1(closure$klackSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$acceptCheckPlayLevel$lambda_0(closure$klackSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$acceptCheckPlayLevel(closure$keyROWIndex, closure$soundsProperties, closure$selectedLanguage, closure$goodJobSound, this$, closure$isGameOver, closure$cannonAnimation, closure$spriteHeroGoRight, closure$resetGamePlay, closure$klackSound) {
    return function () {
      var selectedNumber = closure$keyROWIndex.get_za3lpa$(0);
      var selectedSize = ShapeSize$values()[closure$keyROWIndex.get_za3lpa$(1) - 1 | 0];
      var selectedSpeed = ShapeSpeed$values()[closure$keyROWIndex.get_za3lpa$(2) - 1 | 0];
      var selectedColor = ShapeColor$values()[closure$keyROWIndex.get_za3lpa$(3) - 1 | 0];
      var selectedShape = ShapeForm$values()[closure$keyROWIndex.get_za3lpa$(4) - 1 | 0];
      var selectedSymbol = closure$keyROWIndex.get_za3lpa$(5) - 1 | 0;
      var $receiver = stageShapes;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.shapeParams.size === selectedSize)
          destination.add_11rb$(element);
      }
      var destination_0 = ArrayList_init();
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.shapeParams.speed === selectedSpeed)
          destination_0.add_11rb$(element_0);
      }
      var destination_1 = ArrayList_init();
      var tmp$_1;
      tmp$_1 = destination_0.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        if (element_1.shapeParams.color === selectedColor)
          destination_1.add_11rb$(element_1);
      }
      var destination_2 = ArrayList_init();
      var tmp$_2;
      tmp$_2 = destination_1.iterator();
      while (tmp$_2.hasNext()) {
        var element_2 = tmp$_2.next();
        if (element_2.shapeParams.form === selectedShape)
          destination_2.add_11rb$(element_2);
      }
      var destination_3 = ArrayList_init();
      var tmp$_3;
      tmp$_3 = destination_2.iterator();
      while (tmp$_3.hasNext()) {
        var element_3 = tmp$_3.next();
        if (element_3.shapeSymbol === selectedSymbol)
          destination_3.add_11rb$(element_3);
      }
      var checkShapes = destination_3.size;
      if (checkShapes === selectedNumber) {
        correctAnswers = correctAnswers + 1 | 0;
        launchImmediately(this$, main$lambda$acceptCheckPlayLevel$lambda(closure$soundsProperties, closure$selectedLanguage, closure$keyROWIndex, closure$goodJobSound));
        var tmp$_4;
        tmp$_4 = stageShapes.iterator();
        while (tmp$_4.hasNext()) {
          var element_4 = tmp$_4.next();
          if (element_4.shapeParams.size === selectedSize && element_4.shapeParams.speed === selectedSpeed && element_4.shapeParams.color === selectedColor && element_4.shapeParams.form === selectedShape && element_4.shapeSymbol === selectedSymbol)
            element_4.removeFromParent();
        }
        var $receiver_0 = stageShapes;
        var destination_4 = ArrayList_init();
        var tmp$_5;
        tmp$_5 = $receiver_0.iterator();
        while (tmp$_5.hasNext()) {
          var element_5 = tmp$_5.next();
          if (!(element_5.shapeParams.size === selectedSize && element_5.shapeParams.speed === selectedSpeed && element_5.shapeParams.color === selectedColor && element_5.shapeParams.form === selectedShape && element_5.shapeSymbol === selectedSymbol))
            destination_4.add_11rb$(element_5);
        }
        stageShapes = toMutableList(destination_4);
        if (stageShapes.size === 0) {
          closure$isGameOver.v = true;
          closure$cannonAnimation.alpha = 0.0;
          showGameOver(this$, main$lambda$acceptCheckPlayLevel$lambda_0(closure$isGameOver, closure$spriteHeroGoRight, this$, closure$resetGamePlay));
        }} else {
        launchImmediately(this$, main$lambda$acceptCheckPlayLevel$lambda_1(closure$klackSound));
      }
    };
  }
  function Coroutine$main$lambda$acceptCheckTrainingLevel$lambda(closure$goodJobSound_0, closure$selectedLanguage_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$goodJobSound = closure$goodJobSound_0;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
  }
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda.prototype.constructor = Coroutine$main$lambda$acceptCheckTrainingLevel$lambda;
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$goodJobSound.get_za3lpa$(this.local$closure$selectedLanguage.v).play_gfl8bq$();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$acceptCheckTrainingLevel$lambda(closure$goodJobSound_0, closure$selectedLanguage_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$acceptCheckTrainingLevel$lambda(closure$goodJobSound_0, closure$selectedLanguage_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$acceptCheckTrainingLevel$lambda_0(closure$klackSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$klackSound = closure$klackSound_0;
  }
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda_0.prototype.constructor = Coroutine$main$lambda$acceptCheckTrainingLevel$lambda_0;
  Coroutine$main$lambda$acceptCheckTrainingLevel$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$klackSound.play_gfl8bq$();
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$acceptCheckTrainingLevel$lambda_0(closure$klackSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$acceptCheckTrainingLevel$lambda_0(closure$klackSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda$acceptCheckTrainingLevel(closure$trainingShapesList, closure$trainingStageShapesList, closure$goodJobSound, closure$selectedLanguage, this$, closure$gamePlay, closure$acceptButton, closure$trainingBox, closure$sizeCircle, closure$speedCircle, closure$buildCartouche, closure$launchSetsBasedOnTimer, closure$newRandomShape, closure$trainingX, closure$trainingY, closure$trainingShape, closure$newStageShape, closure$shapeX, closure$shapeY, closure$trainingStageShape, closure$sizeY, closure$speedX, closure$klackSound) {
    return function () {
      var tmp$, tmp$_0;
      var checkShape = first(closure$trainingShapesList).shapeParams.size === first(closure$trainingStageShapesList).shapeParams.size && first(closure$trainingShapesList).shapeParams.speed === first(closure$trainingStageShapesList).shapeParams.speed;
      if (checkShape) {
        launchImmediately(this$, main$lambda$acceptCheckTrainingLevel$lambda(closure$goodJobSound, closure$selectedLanguage));
        closure$gamePlay.trainingShapes = closure$gamePlay.trainingShapes + 1 | 0;
        first(closure$trainingShapesList).removeFromParent();
        first(closure$trainingStageShapesList).removeFromParent();
        if (closure$gamePlay.trainingShapes >= 5) {
          closure$gamePlay.level = 1;
          closure$acceptButton.x = ACCEPTX;
          closure$acceptButton.y = ACCEPTY;
          closure$trainingBox.removeFromParent();
          closure$sizeCircle.removeFromParent();
          closure$speedCircle.removeFromParent();
          closure$buildCartouche();
          nowStarting = DateTime.Companion.nowUnixLong();
          closure$launchSetsBasedOnTimer();
        } else {
          closure$newRandomShape.v = createRandomShapeBasedOnLevel(closure$gamePlay.level);
          closure$trainingShape.v = newTrainingShape(this$, closure$trainingX.get_za3lpa$(1), closure$trainingY.get_za3lpa$(1), closure$newRandomShape.v, get_boxShapes(this$).eyeSymbol, 0, get_degrees(30));
          closure$trainingShapesList.clear();
          closure$trainingShapesList.add_11rb$(closure$trainingShape.v);
          closure$newStageShape.v = new ShapeInTheBox(closure$newRandomShape.v.form, first(shuffled(toList(ShapeSize$values()))), closure$newRandomShape.v.color, first(shuffled(toList(ShapeSpeed$values()))));
          closure$trainingStageShape.v = newShape(this$, closure$shapeX, closure$shapeY, closure$newStageShape.v, get_boxShapes(this$).eyeSymbol, 0);
          closure$trainingStageShapesList.clear();
          closure$trainingStageShapesList.add_11rb$(closure$trainingStageShape.v);
          switch (closure$newRandomShape.v.size.name) {
            case 'SMALL':
              tmp$ = closure$trainingY.get_za3lpa$(0) - (closure$trainingY.get_za3lpa$(0) - closure$trainingY.get_za3lpa$(1)) / 2;
              break;
            case 'MEDIUM':
              tmp$ = closure$trainingY.get_za3lpa$(1) - (closure$trainingY.get_za3lpa$(0) - closure$trainingY.get_za3lpa$(1)) / 2;
              break;
            default:tmp$ = closure$trainingY.get_za3lpa$(2) - (closure$trainingY.get_za3lpa$(0) - closure$trainingY.get_za3lpa$(1)) / 2;
              break;
          }
          closure$sizeY.v = tmp$;
          switch (closure$newRandomShape.v.speed.name) {
            case 'SLOW':
              tmp$_0 = closure$trainingX.get_za3lpa$(0) + (closure$trainingX.get_za3lpa$(1) - closure$trainingX.get_za3lpa$(0)) / 2;
              break;
            case 'MEDIUM':
              tmp$_0 = closure$trainingX.get_za3lpa$(1) + (closure$trainingX.get_za3lpa$(1) - closure$trainingX.get_za3lpa$(0)) / 2;
              break;
            default:tmp$_0 = closure$trainingX.get_za3lpa$(2) + (closure$trainingX.get_za3lpa$(1) - closure$trainingX.get_za3lpa$(0)) / 2;
              break;
          }
          closure$speedX.v = tmp$_0;
          closure$sizeCircle.y = closure$sizeY.v;
          closure$speedCircle.x = closure$speedX.v;
        }
      } else {
        launchImmediately(this$, main$lambda$acceptCheckTrainingLevel$lambda_0(closure$klackSound));
      }
    };
  }
  function Coroutine$main$lambda$lambda$lambda(closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
    this.local$closure$letsStartTrainingSw = closure$letsStartTrainingSw_0;
    this.local$closure$letsStartTrainingEn = closure$letsStartTrainingEn_0;
    this.local$index = void 0;
  }
  Coroutine$main$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$index = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$index > 2) {
              this.state_0 = 5;
              continue;
            }
            if (this.local$closure$selectedLanguage.v === 1)
              this.local$closure$letsStartTrainingSw.get_za3lpa$(this.local$index).play_gfl8bq$();
            else
              this.local$closure$letsStartTrainingEn.get_za3lpa$(this.local$index).play_gfl8bq$();
            this.state_0 = 3;
            this.result_0 = delay(L4000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$index++;
            this.state_0 = 2;
            continue;
          case 5:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda$lambda(closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda(closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda$lambda_2(closure$gamePlay_0, closure$infoMessage_0, closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0, this$_0, closure$acceptCheckTrainingLevel_0, closure$acceptCheckPlayLevel_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$gamePlay = closure$gamePlay_0;
    this.local$closure$infoMessage = closure$infoMessage_0;
    this.local$closure$selectedLanguage = closure$selectedLanguage_0;
    this.local$closure$letsStartTrainingSw = closure$letsStartTrainingSw_0;
    this.local$closure$letsStartTrainingEn = closure$letsStartTrainingEn_0;
    this.local$this$ = this$_0;
    this.local$closure$acceptCheckTrainingLevel = closure$acceptCheckTrainingLevel_0;
    this.local$closure$acceptCheckPlayLevel = closure$acceptCheckPlayLevel_0;
  }
  Coroutine$main$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda_2.prototype.constructor = Coroutine$main$lambda$lambda_2;
  Coroutine$main$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$closure$gamePlay.level === 0) {
              if (this.local$closure$infoMessage.v) {
                launchImmediately(this.local$this$, main$lambda$lambda$lambda(this.local$closure$selectedLanguage, this.local$closure$letsStartTrainingSw, this.local$closure$letsStartTrainingEn));
                this.local$closure$infoMessage.v = false;
              }return this.local$closure$acceptCheckTrainingLevel(), Unit;
            } else {
              return this.local$closure$acceptCheckPlayLevel(), Unit;
            }

          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda$lambda_4(closure$gamePlay_0, closure$infoMessage_0, closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0, this$_0, closure$acceptCheckTrainingLevel_0, closure$acceptCheckPlayLevel_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda_2(closure$gamePlay_0, closure$infoMessage_0, closure$selectedLanguage_0, closure$letsStartTrainingSw_0, closure$letsStartTrainingEn_0, this$_0, closure$acceptCheckTrainingLevel_0, closure$acceptCheckPlayLevel_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$tmp$_9 = void 0;
    this.local$tmp$_10 = void 0;
    this.local$infoMessage = void 0;
    this.local$gamePlay = void 0;
    this.local$startUpDelay100Ms = void 0;
    this.local$keyROWIndex = void 0;
    this.local$backgroundImage = void 0;
    this.local$acceptButtonImage = void 0;
    this.local$spriteMap = void 0;
    this.local$nationsFlags = void 0;
    this.local$earImage = void 0;
    this.local$spriteCannon = void 0;
    this.local$klackSound = void 0;
    this.local$cannonSound = void 0;
    this.local$letsStartTrainingEn = void 0;
    this.local$letsStartTrainingSw = void 0;
    this.local$goodJobSound = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.local$infoMessage = {v: true};
            this.local$gamePlay = new GamePlay(0);
            this.local$startUpDelay100Ms = 30;
            this.local$keyROWIndex = mutableListOf([0, 0, 0, 0, 0, 0]);
            this.state_0 = 2;
            this.result_0 = readBitmapFont(std.resourcesVfs.get_61zpoe$('fonts/clear_sans.fnt'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            set_font(this.result_0);
            this.state_0 = 3;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('background_phw.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$backgroundImage = this.result_0;
            this.state_0 = 4;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('accept_enter.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$acceptButtonImage = this.result_0;
            this.state_0 = 5;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('sprites/hero_inch_right.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$spriteMap = this.result_0;
            this.state_0 = 6;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('flags/uk_flag.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$ = this.result_0;
            this.state_0 = 7;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('flags/sw_flag.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('flags/oj_flag.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$nationsFlags = listOf([this.local$tmp$, this.local$tmp$_0, this.result_0]);
            this.state_0 = 9;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('bliss_symbols/ear.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$earImage = this.result_0;
            this.state_0 = 10;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('sprites/cannon_x.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.local$spriteCannon = this.result_0;
            this.state_0 = 11;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/klack_1.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.local$klackSound = this.result_0;
            this.state_0 = 12;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/cannon_fire.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.local$cannonSound = this.result_0;
            this.state_0 = 13;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/lets_start_training_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 14;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/drag_slider_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 15;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/click_accept_when_the_same_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
            this.local$letsStartTrainingEn = listOf([this.local$tmp$_1, this.local$tmp$_2, this.result_0]);
            this.state_0 = 16;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/lets_start_training_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_3 = this.result_0;
            this.state_0 = 17;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/drag_slider_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.local$tmp$_4 = this.result_0;
            this.state_0 = 18;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/click_accept_when_same_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 18:
            this.local$letsStartTrainingSw = listOf([this.local$tmp$_3, this.local$tmp$_4, this.result_0]);
            this.state_0 = 19;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/ok_lets_go_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            this.local$tmp$_5 = this.result_0;
            this.state_0 = 20;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/ok_lets_go_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.local$tmp$_6 = this.result_0;
            this.state_0 = 21;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/ok_lets_go_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            var letsStartSound = listOf([this.local$tmp$_5, this.local$tmp$_6, this.result_0]);
            this.state_0 = 22;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/good_job_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$tmp$_7 = this.result_0;
            this.state_0 = 23;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/good_job_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            this.local$tmp$_8 = this.result_0;
            this.state_0 = 24;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/good_job_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            this.local$goodJobSound = listOf([this.local$tmp$_7, this.local$tmp$_8, this.result_0]);
            this.state_0 = 25;
            this.result_0 = loadAudioPropsEn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            this.local$tmp$_9 = this.result_0;
            this.state_0 = 26;
            this.result_0 = loadAudioPropsSw(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            this.local$tmp$_10 = this.result_0;
            this.state_0 = 27;
            this.result_0 = loadAudioPropsOj(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 27:
            var soundsProperties = listOf([this.local$tmp$_9, this.local$tmp$_10, this.result_0]);
            var supportedLanguages = listOf(['EN', 'SW', 'OJ']);
            var selectedLanguage = {v: 0};
            var $receiver_0_0 = addTo(Image_init(this.local$backgroundImage, 0.0, 0.0), this.local$$receiver);
            image$lambda($receiver_0_0);
            var backGroundImage = alpha(xy($receiver_0_0, 0, 0), 0.7);
            var $receiver_0_1 = addTo(new Container_init(), this.local$$receiver);
            var $receiver_0_2 = addTo(Image_init(this.local$nationsFlags.get_za3lpa$(selectedLanguage.v), 0.0, 0.0), $receiver_0_1);
            image$lambda($receiver_0_2);
            xy($receiver_0_2, 10, 10);
            var language = $receiver_0_1;
            var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_1;
            if ((tmp$_1 = language != null ? get_mouse(language) : null) != null) {
              prop.get(tmp$_1).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_1, main$lambda$lambda(selectedLanguage, supportedLanguages, language, this.local$nationsFlags, this.local$$receiver)));
            }
            var moveRightAnimation = SpriteAnimation.Companion.invoke_1yoynw$(this.local$spriteMap, 150, 188, 0, 0, 2, 2);
            var $receiver_0_3 = addTo(Sprite_init(moveRightAnimation, 0.0, 0.0), this.local$$receiver);
            sprite$lambda($receiver_0_3);
            var spriteHeroGoRight = alpha(xy_0($receiver_0_3, 50.0, 660.0), 1.0);
            var cannonAnimationSprite = SpriteAnimation.Companion.invoke_1yoynw$(this.local$spriteCannon, 300, 300, 0, 0, 3, 2);
            var $receiver_0_4 = addTo(Sprite_init(cannonAnimationSprite, 0.0, 0.0), this.local$$receiver);
            sprite$lambda($receiver_0_4);
            var cannonAnimation = alpha(xy_0($receiver_0_4, BOXWIDTH - 180, BOXHEIGHT - 75), 1.0);
            var isGameOver = {v: false};
            var prop_0 = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_2;
            if ((tmp$_2 = spriteHeroGoRight != null ? get_mouse(spriteHeroGoRight) : null) != null) {
              prop_0.get(tmp$_2).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_2, main$lambda$lambda_0));
            }
            this.local$$receiver.views.gameWindow.icon = get_boxShapes(this.local$$receiver).eyeSymbol;
            var emptyImage = get_boxShapes(this.local$$receiver).emptySymbol;
            var groupSymbols = listOf([get_boxShapes(this.local$$receiver).numberGroupSymbol, get_boxShapes(this.local$$receiver).sizeGroupSymbol, get_boxShapes(this.local$$receiver).speedGroupSymbol, get_boxShapes(this.local$$receiver).colorGroupSymbol, get_boxShapes(this.local$$receiver).shapeGroupSymbol, get_boxShapes(this.local$$receiver).faceGroupSymbol]);
            var keyBoard = ArrayList_init();
            var valueRects = ArrayList_init();
            var cartoucheNumber = new CartoucheKey(5, Image_init(emptyImage), listOf([get_boxShapes(this.local$$receiver).numberOneSymbol, get_boxShapes(this.local$$receiver).numberTwoSymbol, get_boxShapes(this.local$$receiver).numberThreeSymbol, get_boxShapes(this.local$$receiver).numberFourSymbol, get_boxShapes(this.local$$receiver).numberGroupSymbol]));
            var cartoucheSize = new CartoucheKey(3, Image_init(emptyImage), listOf([get_boxShapes(this.local$$receiver).sizeSmall, get_boxShapes(this.local$$receiver).sizeMedium, get_boxShapes(this.local$$receiver).sizeLarge]));
            var cartoucheSpeed = new CartoucheKey(3, Image_init(emptyImage), listOf([get_boxShapes(this.local$$receiver).slowSpeedSymbol, get_boxShapes(this.local$$receiver).midSpeedSymbol, get_boxShapes(this.local$$receiver).highSpeedSymbol]));
            var cartoucheColor = new CartoucheKey(6, Image_init(emptyImage), listOf([get_boxShapes(this.local$$receiver).colorBLUESymbol, get_boxShapes(this.local$$receiver).colorGREENSymbol, get_boxShapes(this.local$$receiver).colorREDSymbol, get_boxShapes(this.local$$receiver).colorYELLOWSymbol, get_boxShapes(this.local$$receiver).colorBLACKSymbol, get_boxShapes(this.local$$receiver).colorWHITESymbol]));
            var cartoucheShapes = new CartoucheKey(5, Image_init(emptyImage), listOf([ensureNative(get_boxShapes(this.local$$receiver).triangleSymbol), ensureNative(get_boxShapes(this.local$$receiver).squareSymbol), ensureNative(get_boxShapes(this.local$$receiver).circleSymbol), ensureNative(get_boxShapes(this.local$$receiver).polygonSymbol), ensureNative(get_boxShapes(this.local$$receiver).pentagonSymbol)]));
            var cartoucheSymbols = new CartoucheKey(4, Image_init(emptyImage), listOf([get_boxShapes(this.local$$receiver).noseSymbol, get_boxShapes(this.local$$receiver).mouthSymbol, ensureNative(this.local$earImage), get_boxShapes(this.local$$receiver).eyeSymbol]));
            var shapeX = BOXWIDTH - (ShapeSize$MEDIUM_getInstance().size * 3 | 0);
            var shapeY = BOXHEIGHT - ShapeSize$MEDIUM_getInstance().size;
            var trainingX = listOf([TR_X0, TR_WIDTH / 3 + TR_X0, 2 * TR_WIDTH / 3 + TR_X0, TR_X0 + TR_WIDTH]);
            var trainingY = listOf([TR_Y0 + TR_HEIGHT, 2 * TR_HEIGHT / 3 + TR_Y0, TR_HEIGHT / 3 + TR_Y0, TR_Y0]);
            var $receiver_0_5 = addTo(new Container_init(), this.local$$receiver);
            var $receiver_0_6 = addTo(new RoundRect_init(TR_WIDTH, TR_HEIGHT, 16.0, 16.0, color.Colors.DARKBLUE, true), $receiver_0_5);
            roundRect$lambda($receiver_0_6);
            xy_0($receiver_0_6, trainingX.get_za3lpa$(0), trainingY.get_za3lpa$(3));
            var $receiver_0_7 = addTo(new RoundRect_init(TR_WIDTH - 12, TR_HEIGHT - 12, 16.0, 16.0, color.Colors.LIGHTBLUE, true), $receiver_0_5);
            roundRect$lambda($receiver_0_7);
            xy_0($receiver_0_7, trainingX.get_za3lpa$(0) + 6, trainingY.get_za3lpa$(3) + 6);
            var $receiver_0_8 = addTo(new RoundRect_init(TR_SLIDER_SIZE, TR_HEIGHT, 16.0, 16.0, color.Colors.LIGHTBLUE, true), $receiver_0_5);
            roundRect$lambda($receiver_0_8);
            xy_0($receiver_0_8, trainingX.get_za3lpa$(3) + 6, trainingY.get_za3lpa$(3));
            var $receiver_0_9 = addTo(new RoundRect_init(TR_WIDTH, TR_SLIDER_SIZE, 16.0, 16.0, color.Colors.LIGHTBLUE, true), $receiver_0_5);
            roundRect$lambda($receiver_0_9);
            xy_0($receiver_0_9, trainingX.get_za3lpa$(0), trainingY.get_za3lpa$(0) + 6);
            for (var lines = 1; lines <= 2; lines++) {
              var $receiver_0_10 = addTo(new RoundRect_init(TR_SLIDER_LINE, TR_SLIDER_SIZE, 2.0, 2.0, color.Colors.DARKBLUE, true), $receiver_0_5);
              roundRect$lambda($receiver_0_10);
              xy_0($receiver_0_10, trainingX.get_za3lpa$(lines), trainingY.get_za3lpa$(0) + 6);
              var $receiver_0_11 = addTo(new RoundRect_init(TR_SLIDER_SIZE, TR_SLIDER_LINE, 2.0, 2.0, color.Colors.DARKBLUE, true), $receiver_0_5);
              roundRect$lambda($receiver_0_11);
              xy_0($receiver_0_11, trainingX.get_za3lpa$(3) + 6, trainingY.get_za3lpa$(lines));
            }

            var trainingBox = $receiver_0_5;
            var newRandomShape = {v: createRandomShapeBasedOnLevel(this.local$gamePlay.level)};
            var trainingShape = {v: newTrainingShape(this.local$$receiver, trainingX.get_za3lpa$(1), trainingY.get_za3lpa$(1), newRandomShape.v, get_boxShapes(this.local$$receiver).eyeSymbol, 0, get_degrees(30))};
            var trainingShapesList = mutableListOf([trainingShape.v]);
            var createNewShapeSize = main$lambda$createNewShapeSize(trainingShapesList, newRandomShape, this.local$$receiver);
            var newStageShape = {v: new ShapeInTheBox(newRandomShape.v.form, first(shuffled(toList(ShapeSize$values()))), newRandomShape.v.color, first(shuffled(toList(ShapeSpeed$values()))))};
            var trainingStageShape = {v: newShape(this.local$$receiver, shapeX, shapeY, newStageShape.v, get_boxShapes(this.local$$receiver).eyeSymbol, 0)};
            var trainingStageShapesList = mutableListOf([trainingStageShape.v]);
            switch (newRandomShape.v.size.name) {
              case 'SMALL':
                tmp$ = trainingY.get_za3lpa$(0) - (trainingY.get_za3lpa$(0) - trainingY.get_za3lpa$(1)) / 2;
                break;
              case 'MEDIUM':
                tmp$ = trainingY.get_za3lpa$(1) - (trainingY.get_za3lpa$(0) - trainingY.get_za3lpa$(1)) / 2;
                break;
              default:tmp$ = trainingY.get_za3lpa$(2) - (trainingY.get_za3lpa$(0) - trainingY.get_za3lpa$(1)) / 2;
                break;
            }

            var sizeY = {v: tmp$};
            switch (newRandomShape.v.speed.name) {
              case 'SLOW':
                tmp$_0 = trainingX.get_za3lpa$(0) + (trainingX.get_za3lpa$(1) - trainingX.get_za3lpa$(0)) / 2;
                break;
              case 'MEDIUM':
                tmp$_0 = trainingX.get_za3lpa$(1) + (trainingX.get_za3lpa$(1) - trainingX.get_za3lpa$(0)) / 2;
                break;
              default:tmp$_0 = trainingX.get_za3lpa$(2) + (trainingX.get_za3lpa$(1) - trainingX.get_za3lpa$(0)) / 2;
                break;
            }

            var speedX = {v: tmp$_0};
            var $receiver_0_12 = addTo(new Circle_init(TR_SLIDER_SIZE / 2, color.Colors.DARKBLUE, true), this.local$$receiver);
            circle$lambda($receiver_0_12);
            var sizeCircle = xy_0($receiver_0_12, trainingX.get_za3lpa$(3) + 6, sizeY.v);
            var $receiver_0_13 = addTo(new Circle_init(TR_SLIDER_SIZE / 2, color.Colors.DARKBLUE, true), this.local$$receiver);
            circle$lambda($receiver_0_13);
            var speedCircle = xy_0($receiver_0_13, speedX.v, trainingY.get_za3lpa$(0) + 6);
            onMouseDrag(sizeCircle, main$lambda$lambda_1(this.local$$receiver, sizeCircle, createNewShapeSize, trainingY));
            onMouseDrag(speedCircle, main$lambda$lambda_2(this.local$$receiver, trainingShape, speedCircle, trainingX));
            launchImmediately(this.local$$receiver, main$lambda$lambda_3(selectedLanguage, this.local$letsStartTrainingSw, this.local$letsStartTrainingEn));
            var cartoucheSets = listOf([cartoucheNumber, cartoucheSize, cartoucheSpeed, cartoucheColor, cartoucheShapes, cartoucheSymbols]);
            var buildCartouche = main$lambda$buildCartouche(valueRects, groupSymbols, this.local$keyROWIndex, cartoucheSets, soundsProperties, selectedLanguage, this.local$$receiver, keyBoard);
            var customShapes = {v: listOf([createRandomShapeBasedOnLevel(this.local$gamePlay.level), createRandomShapeBasedOnLevel(this.local$gamePlay.level), createRandomShapeBasedOnLevel(this.local$gamePlay.level), createRandomShapeBasedOnLevel(this.local$gamePlay.level)])};
            createRandomShapeBasedOnLevel(this.local$gamePlay.level);
            var symbolsList = listOf([get_boxShapes(this.local$$receiver).noseSymbol, get_boxShapes(this.local$$receiver).mouthSymbol, ensureNative(this.local$earImage), get_boxShapes(this.local$$receiver).eyeSymbol]);
            var earSymbol = ensureNative(this.local$earImage);
            var customNumberAndShape = listOf([new Pair(4, get_boxShapes(this.local$$receiver).noseSymbol), new Pair(2, get_boxShapes(this.local$$receiver).mouthSymbol), new Pair(3, earSymbol), new Pair(1, get_boxShapes(this.local$$receiver).eyeSymbol)]);
            var letsGo = true;
            var extraSetsCount = {v: 0};
            var countShapes = {v: mutableListOf([0, 0, 0, 0])};
            var cannonShots = {v: mutableListOf([0, 0, 0, 0])};
            var resetGamePlay = main$lambda$resetGamePlay(spriteHeroGoRight, this.local$gamePlay, customShapes, extraSetsCount, countShapes, cannonShots);
            var launchSetsBasedOnTimer = main$lambda$launchSetsBasedOnTimer(this.local$gamePlay, this.local$startUpDelay100Ms, backGroundImage, cannonAnimation, countShapes, cannonShots, this.local$cannonSound, customNumberAndShape, shapeX, shapeY, customShapes, extraSetsCount, isGameOver, symbolsList, this.local$$receiver);
            var $receiver_0_14 = addTo(new Container_init(), this.local$$receiver);
            var $receiver_0_15 = addTo(Image_init(this.local$acceptButtonImage, 0.0, 0.0), $receiver_0_14);
            image$lambda($receiver_0_15);
            var acceptButton = alpha(xy_0($receiver_0_14, TR_X0 + TR_WIDTH + 6 + this.local$acceptButtonImage.width, trainingY.get_za3lpa$(0) - this.local$acceptButtonImage.height), 1.0);
            var acceptCheckPlayLevel = main$lambda$acceptCheckPlayLevel(this.local$keyROWIndex, soundsProperties, selectedLanguage, this.local$goodJobSound, this.local$$receiver, isGameOver, cannonAnimation, spriteHeroGoRight, resetGamePlay, this.local$klackSound);
            var acceptCheckTrainingLevel = main$lambda$acceptCheckTrainingLevel(trainingShapesList, trainingStageShapesList, this.local$goodJobSound, selectedLanguage, this.local$$receiver, this.local$gamePlay, acceptButton, trainingBox, sizeCircle, speedCircle, buildCartouche, launchSetsBasedOnTimer, newRandomShape, trainingX, trainingY, trainingShape, newStageShape, shapeX, shapeY, trainingStageShape, sizeY, speedX, this.local$klackSound);
            var prop_1 = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$_3;
            if ((tmp$_3 = acceptButton != null ? get_mouse(acceptButton) : null) != null) {
              prop_1.get(tmp$_3).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$_3, main$lambda$lambda_4(this.local$gamePlay, this.local$infoMessage, selectedLanguage, this.local$letsStartTrainingSw, this.local$letsStartTrainingEn, this.local$$receiver, acceptCheckTrainingLevel, acceptCheckPlayLevel)));
            }
            return acceptButton;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main(continuation) {
    return korge.Korge.invoke_hyfg37$(void 0, 1920, 1000, 1920, 1000, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, true, color.Colors.get_61zpoe$('#5a5a5a'), void 0, void 0, void 0, void 0, void 0, void 0, main$lambda, continuation);
  }
  function showGameOver$lambda$restart(this$, closure$onRestart) {
    return function () {
      this$.removeFromParent();
      closure$onRestart();
    };
  }
  function Coroutine$showGameOver$lambda$lambda$lambda(closure$restart_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$restart = closure$restart_0;
  }
  Coroutine$showGameOver$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showGameOver$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showGameOver$lambda$lambda$lambda.prototype.constructor = Coroutine$showGameOver$lambda$lambda$lambda;
  Coroutine$showGameOver$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$restart(), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function showGameOver$lambda$lambda$lambda(closure$restart_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$showGameOver$lambda$lambda$lambda(closure$restart_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$showGameOver$lambda$lambda(closure$restart_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$restart = closure$restart_0;
    this.local$it = it_0;
  }
  Coroutine$showGameOver$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showGameOver$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showGameOver$lambda$lambda.prototype.constructor = Coroutine$showGameOver$lambda$lambda;
  Coroutine$showGameOver$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            switch (this.local$it.key.name) {
              case 'ENTER':
              case 'SPACE':
                return this.local$closure$restart(), Unit;
              default:return Unit;
            }

            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function showGameOver$lambda$lambda(closure$restart_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$showGameOver$lambda$lambda(closure$restart_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function showGameOver($receiver_1, onRestart) {
    var $receiver_0_0 = addTo(new Container_init(), $receiver_1);
    var format = new TextFormat(color.Colors.YELLOW, 50, new Html$FontFace$Bitmap(get_font()));
    var timeElapsed = DateTime.Companion.nowUnixLong().subtract(nowStarting).div(Kotlin.Long.fromInt(1000));
    var minutesElapsed = timeElapsed.div(Kotlin.Long.fromInt(60)).toInt();
    var secondsElapsed = timeElapsed.subtract(Kotlin.Long.fromInt(minutesElapsed * 60 | 0)).toString();
    if (secondsElapsed.length === 1)
      secondsElapsed += '0';
    var finalScore = (correctAnswers + wrongAnswers | 0) !== 0 ? (100 * correctAnswers | 0) / (correctAnswers + wrongAnswers | 0) | 0 : 0;
    var skin = new TextSkin(format, format.copy_op6hx2$(color.Colors.LIGHTGREEN), format.copy_op6hx2$(color.Colors.WHITE));
    var restart = showGameOver$lambda$restart($receiver_0_0, onRestart);
    position($receiver_0_0, 960 - TR_WIDTH / 2, TR_Y0);
    var text = 'SCORE: ' + finalScore;
    var color_0 = color.Colors.WHITE;
    var font = get_font();
    var $receiver_0_1 = addTo(Text.Companion.invoke_8ii8iq$(text, 50, color_0, font), $receiver_0_0);
    centerBetween($receiver_0_1, 0.0, 0.0, 100.0, 50.0);
    $receiver_0_1.y -= 10;
    var text_0 = 'TIME: ' + minutesElapsed + ':' + secondsElapsed;
    var color_0_0 = color.Colors.WHITE;
    var font_0 = get_font();
    var $receiver_0_2 = addTo(Text.Companion.invoke_8ii8iq$(text_0, 50, color_0_0, font_0), $receiver_0_0);
    centerBetween($receiver_0_2, 0.0, 0.0, 100.0, 50.0);
    $receiver_0_2.y += 40;
    var $receiver_0_3 = addTo(new UIText_init('Try again', 120.0, 50.0, skin), $receiver_0_0);
    centerBetween($receiver_0_3, 0.0, 0.0, 50.0, 50.0);
    $receiver_0_3.y += 90;
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = $receiver_0_3 != null ? get_mouse($receiver_0_3) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, showGameOver$lambda$lambda$lambda(restart)));
    }var prop_0 = getPropertyCallableRef('onKeyDown', 1, function ($receiver) {
      return $receiver.onKeyDown;
    });
    var tmp$_0;
    if ((tmp$_0 = $receiver_0_0 != null ? get_keys($receiver_0_0) : null) != null) {
      prop_0.get(tmp$_0).add_25kf2w$(showGameOver$lambda$lambda(restart));
    }return $receiver_0_0;
  }
  function restart($receiver) {
    correctAnswers = 0;
    wrongAnswers = 0;
    gameTime = 0;
  }
  function Coroutine$loadAudioPropsEn(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$tmp$_9 = void 0;
    this.local$tmp$_10 = void 0;
    this.local$tmp$_11 = void 0;
    this.local$tmp$_12 = void 0;
    this.local$tmp$_13 = void 0;
    this.local$tmp$_14 = void 0;
    this.local$tmp$_15 = void 0;
    this.local$tmp$_16 = void 0;
    this.local$tmp$_17 = void 0;
    this.local$tmp$_18 = void 0;
    this.local$tmp$_19 = void 0;
    this.local$tmp$_20 = void 0;
    this.local$tmp$_21 = void 0;
    this.local$tmp$_22 = void 0;
    this.local$tmp$_23 = void 0;
  }
  Coroutine$loadAudioPropsEn.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadAudioPropsEn.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadAudioPropsEn.prototype.constructor = Coroutine$loadAudioPropsEn;
  Coroutine$loadAudioPropsEn.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/one_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/two_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/three_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/four_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 6;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/five_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_3 = listOf([this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.local$tmp$_2, this.result_0]);
            this.state_0 = 7;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/small_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_4 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mid_size_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_5 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/large_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$tmp$_6 = listOf([this.local$tmp$_4, this.local$tmp$_5, this.result_0]);
            this.state_0 = 10;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/slow_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.local$tmp$_7 = this.result_0;
            this.state_0 = 11;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mid_speed_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.local$tmp$_8 = this.result_0;
            this.state_0 = 12;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/fast_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.local$tmp$_9 = listOf([this.local$tmp$_7, this.local$tmp$_8, this.result_0]);
            this.state_0 = 13;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/blue_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_10 = this.result_0;
            this.state_0 = 14;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/green_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.local$tmp$_11 = this.result_0;
            this.state_0 = 15;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/red_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
            this.local$tmp$_12 = this.result_0;
            this.state_0 = 16;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/yellow_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_13 = this.result_0;
            this.state_0 = 17;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/black_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.local$tmp$_14 = this.result_0;
            this.state_0 = 18;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/white_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 18:
            this.local$tmp$_15 = listOf([this.local$tmp$_10, this.local$tmp$_11, this.local$tmp$_12, this.local$tmp$_13, this.local$tmp$_14, this.result_0]);
            this.state_0 = 19;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/triangle_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            this.local$tmp$_16 = this.result_0;
            this.state_0 = 20;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/square_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.local$tmp$_17 = this.result_0;
            this.state_0 = 21;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/circle_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            this.local$tmp$_18 = this.result_0;
            this.state_0 = 22;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/polygon_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$tmp$_19 = this.result_0;
            this.state_0 = 23;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/pentagon_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            this.local$tmp$_20 = listOf([this.local$tmp$_16, this.local$tmp$_17, this.local$tmp$_18, this.local$tmp$_19, this.result_0]);
            this.state_0 = 24;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/nose_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            this.local$tmp$_21 = this.result_0;
            this.state_0 = 25;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mouth_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            this.local$tmp$_22 = this.result_0;
            this.state_0 = 26;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/ear_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            this.local$tmp$_23 = this.result_0;
            this.state_0 = 27;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/eye_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 27:
            return listOf([this.local$tmp$_3, this.local$tmp$_6, this.local$tmp$_9, this.local$tmp$_15, this.local$tmp$_20, listOf([this.local$tmp$_21, this.local$tmp$_22, this.local$tmp$_23, this.result_0])]);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function loadAudioPropsEn(continuation_0, suspended) {
    var instance = new Coroutine$loadAudioPropsEn(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$loadAudioPropsSw(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$tmp$_9 = void 0;
    this.local$tmp$_10 = void 0;
    this.local$tmp$_11 = void 0;
    this.local$tmp$_12 = void 0;
    this.local$tmp$_13 = void 0;
    this.local$tmp$_14 = void 0;
    this.local$tmp$_15 = void 0;
    this.local$tmp$_16 = void 0;
    this.local$tmp$_17 = void 0;
    this.local$tmp$_18 = void 0;
    this.local$tmp$_19 = void 0;
    this.local$tmp$_20 = void 0;
    this.local$tmp$_21 = void 0;
    this.local$tmp$_22 = void 0;
    this.local$tmp$_23 = void 0;
  }
  Coroutine$loadAudioPropsSw.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadAudioPropsSw.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadAudioPropsSw.prototype.constructor = Coroutine$loadAudioPropsSw;
  Coroutine$loadAudioPropsSw.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/one_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/two_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/three_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/four_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 6;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/five_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_3 = listOf([this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.local$tmp$_2, this.result_0]);
            this.state_0 = 7;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/small_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_4 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mid_size_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_5 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/large_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$tmp$_6 = listOf([this.local$tmp$_4, this.local$tmp$_5, this.result_0]);
            this.state_0 = 10;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/slow_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.local$tmp$_7 = this.result_0;
            this.state_0 = 11;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mid_speed_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.local$tmp$_8 = this.result_0;
            this.state_0 = 12;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/fast_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.local$tmp$_9 = listOf([this.local$tmp$_7, this.local$tmp$_8, this.result_0]);
            this.state_0 = 13;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/blue_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_10 = this.result_0;
            this.state_0 = 14;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/green_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.local$tmp$_11 = this.result_0;
            this.state_0 = 15;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/red_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
            this.local$tmp$_12 = this.result_0;
            this.state_0 = 16;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/yellow_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_13 = this.result_0;
            this.state_0 = 17;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/black_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.local$tmp$_14 = this.result_0;
            this.state_0 = 18;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/white_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 18:
            this.local$tmp$_15 = listOf([this.local$tmp$_10, this.local$tmp$_11, this.local$tmp$_12, this.local$tmp$_13, this.local$tmp$_14, this.result_0]);
            this.state_0 = 19;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/triangle_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            this.local$tmp$_16 = this.result_0;
            this.state_0 = 20;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/square_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.local$tmp$_17 = this.result_0;
            this.state_0 = 21;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/circle_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            this.local$tmp$_18 = this.result_0;
            this.state_0 = 22;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/polygon_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$tmp$_19 = this.result_0;
            this.state_0 = 23;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/pentagon_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            this.local$tmp$_20 = listOf([this.local$tmp$_16, this.local$tmp$_17, this.local$tmp$_18, this.local$tmp$_19, this.result_0]);
            this.state_0 = 24;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/nose_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            this.local$tmp$_21 = this.result_0;
            this.state_0 = 25;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mouth_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            this.local$tmp$_22 = this.result_0;
            this.state_0 = 26;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/ear_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            this.local$tmp$_23 = this.result_0;
            this.state_0 = 27;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/eye_sw.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 27:
            return listOf([this.local$tmp$_3, this.local$tmp$_6, this.local$tmp$_9, this.local$tmp$_15, this.local$tmp$_20, listOf([this.local$tmp$_21, this.local$tmp$_22, this.local$tmp$_23, this.result_0])]);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function loadAudioPropsSw(continuation_0, suspended) {
    var instance = new Coroutine$loadAudioPropsSw(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$loadAudioPropsOj(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$tmp$_9 = void 0;
    this.local$tmp$_10 = void 0;
    this.local$tmp$_11 = void 0;
    this.local$tmp$_12 = void 0;
    this.local$tmp$_13 = void 0;
    this.local$tmp$_14 = void 0;
    this.local$tmp$_15 = void 0;
    this.local$tmp$_16 = void 0;
    this.local$tmp$_17 = void 0;
    this.local$tmp$_18 = void 0;
    this.local$tmp$_19 = void 0;
    this.local$tmp$_20 = void 0;
    this.local$tmp$_21 = void 0;
    this.local$tmp$_22 = void 0;
    this.local$tmp$_23 = void 0;
  }
  Coroutine$loadAudioPropsOj.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadAudioPropsOj.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadAudioPropsOj.prototype.constructor = Coroutine$loadAudioPropsOj;
  Coroutine$loadAudioPropsOj.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/one_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/two_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/three_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/four_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 6;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/five_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_3 = listOf([this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.local$tmp$_2, this.result_0]);
            this.state_0 = 7;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/small_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_4 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mid_size_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_5 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/large_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$tmp$_6 = listOf([this.local$tmp$_4, this.local$tmp$_5, this.result_0]);
            this.state_0 = 10;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/slow_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.local$tmp$_7 = this.result_0;
            this.state_0 = 11;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mid_speed_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.local$tmp$_8 = this.result_0;
            this.state_0 = 12;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/fast_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.local$tmp$_9 = listOf([this.local$tmp$_7, this.local$tmp$_8, this.result_0]);
            this.state_0 = 13;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/blue_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_10 = this.result_0;
            this.state_0 = 14;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/green_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.local$tmp$_11 = this.result_0;
            this.state_0 = 15;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/red_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
            this.local$tmp$_12 = this.result_0;
            this.state_0 = 16;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/yellow_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_13 = this.result_0;
            this.state_0 = 17;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/black_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 17:
            this.local$tmp$_14 = this.result_0;
            this.state_0 = 18;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/white_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 18:
            this.local$tmp$_15 = listOf([this.local$tmp$_10, this.local$tmp$_11, this.local$tmp$_12, this.local$tmp$_13, this.local$tmp$_14, this.result_0]);
            this.state_0 = 19;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/triangle_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 19:
            this.local$tmp$_16 = this.result_0;
            this.state_0 = 20;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/square_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 20:
            this.local$tmp$_17 = this.result_0;
            this.state_0 = 21;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/circle_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            this.local$tmp$_18 = this.result_0;
            this.state_0 = 22;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/polygon_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$tmp$_19 = this.result_0;
            this.state_0 = 23;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/pentagon_en.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            this.local$tmp$_20 = listOf([this.local$tmp$_16, this.local$tmp$_17, this.local$tmp$_18, this.local$tmp$_19, this.result_0]);
            this.state_0 = 24;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/nose_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            this.local$tmp$_21 = this.result_0;
            this.state_0 = 25;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/mouth_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            this.local$tmp$_22 = this.result_0;
            this.state_0 = 26;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/ear_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            this.local$tmp$_23 = this.result_0;
            this.state_0 = 27;
            this.result_0 = readSound(std.resourcesVfs.get_61zpoe$('audio/eye_oj.mp3'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 27:
            return listOf([this.local$tmp$_3, this.local$tmp$_6, this.local$tmp$_9, this.local$tmp$_15, this.local$tmp$_20, listOf([this.local$tmp$_21, this.local$tmp$_22, this.local$tmp$_23, this.result_0])]);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function loadAudioPropsOj(continuation_0, suspended) {
    var instance = new Coroutine$loadAudioPropsOj(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function populateBox($receiver, gamePlay) {
    var tmp$;
    var numberOfForms = 0;
    var random = Random(gamePlay.level);
    while (numberOfForms < gamePlay.numberOfForms) {
      var boxShape = createRandomShapeBasedOnLevel(gamePlay.level);
      var shapeX = get_0(random, BOXTOPX + boxShape.size.size, BOXTOPX + BOXWIDTH - boxShape.size.size);
      var shapeY = get_0(random, BOXTOPY + boxShape.size.size, BOXTOPY + BOXHEIGHT - boxShape.size.size);
      var tmp$_0;
      if (!stageShapes.isEmpty()) {
        var $receiver_0 = stageShapes;
        var destination = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element.shapeParams.color === boxShape.color)
            destination.add_11rb$(element);
        }
        tmp$_0 = destination.size;
      } else
        tmp$_0 = 0;
      var howManyColors = tmp$_0;
      var tmp$_2;
      if (!stageShapes.isEmpty()) {
        var $receiver_1 = stageShapes;
        var destination_0 = ArrayList_init();
        var tmp$_3;
        tmp$_3 = $receiver_1.iterator();
        while (tmp$_3.hasNext()) {
          var element_0 = tmp$_3.next();
          if (element_0.shapeParams.color === boxShape.color && element_0.shapeParams.size === boxShape.size)
            destination_0.add_11rb$(element_0);
        }
        tmp$_2 = destination_0.size;
      } else
        tmp$_2 = 0;
      var howManyOfThisSizeAndColor = tmp$_2;
      if (gamePlay.level === 0) {
        switch (boxShape.color.name) {
          case 'RED':
            tmp$ = 1;
            break;
          case 'GREEN':
            tmp$ = 2;
            break;
          case 'YELLOW':
            tmp$ = 3;
            break;
          case 'BLUE':
            tmp$ = 4;
            break;
          case 'WHITE':
            tmp$ = 5;
            break;
          default:tmp$ = 0;
            break;
        }
      } else
        tmp$ = 15;
      var allowedNumberPerColor = tmp$;
      if (howManyColors < allowedNumberPerColor && howManyOfThisSizeAndColor < 5) {
        var shapeNew = newShape($receiver, shapeX, shapeY, boxShape, get_boxShapes($receiver).eyeSymbol, 0);
        shapeNew.angle = get_degrees_0(get_0(random, 0.0, 360.0));
        stageShapes.add_11rb$(shapeNew);
        numberOfForms = numberOfForms + 1 | 0;
      }}
  }
  function newTrainingShape($receiver, x, y, boxShape, shapeSymbol, symbolOrdinal, angle) {
    var shape = shapeConstructor(boxShape, shapeSymbol);
    return xy_0(addTo(new TrainingShape(boxShape, shape, symbolOrdinal, angle), $receiver), x, y);
  }
  function newShape($receiver, x, y, boxShape, shapeSymbol, symbolOrdinal) {
    var shape = shapeConstructor(boxShape, shapeSymbol);
    return xy_0(addTo(new FlyingShape(boxShape, shape, symbolOrdinal), $receiver), x, y);
  }
  function TrainingShape(boxShape, shapeImage, symbolOrdinal, newAngle) {
    Image_init(shapeImage, void 0, void 0, void 0, void 0, this);
    this.boxShape_0 = boxShape;
    this.shapeImage_0 = shapeImage;
    this.symbolOrdinal_0 = symbolOrdinal;
    this.newAngle_0 = newAngle;
    this.random_0 = Random(0);
    this.angle = this.newAngle_0;
    this.shapeParams = this.boxShape_0;
    this.shapeSymbol = this.symbolOrdinal_0;
    anchor(this, 0.5, 0.5);
    addHrUpdater(this, TrainingShape_init$lambda);
  }
  function TrainingShape_init$lambda($receiver, time) {
    var speed = $receiver.shapeParams.speed.speed * time.div_seyb0p$(get_hrMilliseconds(18));
    var dx = get_cosine($receiver.angle) * speed;
    var dy = get_sine($receiver.angle) * speed;
    $receiver.x = $receiver.x + dx;
    $receiver.y = $receiver.y + dy;
    $receiver.rotationDegrees = $receiver.rotationDegrees + speed / 2;
    if ($receiver.y < TR_Y0 + $receiver.height / 2 && dy < 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    if ($receiver.x < TR_X0 + $receiver.width / 2 && dx < 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    if ($receiver.x > TR_X0 + TR_WIDTH - $receiver.width / 2 && dx > 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    if ($receiver.y > TR_Y0 + TR_HEIGHT - $receiver.height / 2 && dy > 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    return Unit;
  }
  TrainingShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TrainingShape',
    interfaces: [Image]
  };
  function FlyingShape(boxShape, shapeImage, symbolOrdinal) {
    Image_init(shapeImage, void 0, void 0, void 0, void 0, this);
    this.boxShape_0 = boxShape;
    this.shapeImage_0 = shapeImage;
    this.symbolOrdinal_0 = symbolOrdinal;
    this.random_0 = Random(0);
    this.angle = get_degrees(30);
    this.shapeParams = this.boxShape_0;
    this.shapeSymbol = this.symbolOrdinal_0;
    anchor(this, 0.5, 0.5);
    addHrUpdater(this, FlyingShape_init$lambda);
  }
  function FlyingShape_init$lambda($receiver, time) {
    var speed = $receiver.shapeParams.speed.speed * time.div_seyb0p$(get_hrMilliseconds(18));
    var dx = get_cosine($receiver.angle) * speed;
    var dy = get_sine($receiver.angle) * speed;
    $receiver.x = $receiver.x + dx;
    $receiver.y = $receiver.y + dy;
    $receiver.rotationDegrees = $receiver.rotationDegrees + speed / 2;
    if ($receiver.y < BOXTOPY + $receiver.height / 2 && dy < 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    if ($receiver.x < BOXTOPX + $receiver.width / 2 && dx < 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    if ($receiver.x > BOXTOPX + BOXWIDTH - $receiver.width / 2 && dx > 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    if ($receiver.y > BOXTOPY + BOXHEIGHT - $receiver.height / 2 && dy > 0)
      $receiver.angle = plus($receiver.angle, get_degrees_0(get_0($receiver.random_0, 45.0, 60.0)));
    return Unit;
  }
  FlyingShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlyingShape',
    interfaces: [Image]
  };
  function distanceTo($receiver, other) {
    return Point.Companion.distance_6y0v78$($receiver.x, $receiver.y, other.x, other.y);
  }
  function advance($receiver, amount, rot) {
    if (rot === void 0)
      rot = get_degrees(-90);
    $receiver.x += get_cosine(plus($receiver.rotation, rot)) * amount;
    $receiver.y += get_sine(plus($receiver.rotation, rot)) * amount;
    return $receiver;
  }
  function CartoucheKey(maxValues, imageHolder, nativeImage) {
    if (maxValues === void 0)
      maxValues = 0;
    this.maxValues = maxValues;
    this.imageHolder = imageHolder;
    this.nativeImage = nativeImage;
  }
  CartoucheKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CartoucheKey',
    interfaces: []
  };
  CartoucheKey.prototype.component1 = function () {
    return this.maxValues;
  };
  CartoucheKey.prototype.component2 = function () {
    return this.imageHolder;
  };
  CartoucheKey.prototype.component3 = function () {
    return this.nativeImage;
  };
  CartoucheKey.prototype.copy_3vk9si$ = function (maxValues, imageHolder, nativeImage) {
    return new CartoucheKey(maxValues === void 0 ? this.maxValues : maxValues, imageHolder === void 0 ? this.imageHolder : imageHolder, nativeImage === void 0 ? this.nativeImage : nativeImage);
  };
  CartoucheKey.prototype.toString = function () {
    return 'CartoucheKey(maxValues=' + Kotlin.toString(this.maxValues) + (', imageHolder=' + Kotlin.toString(this.imageHolder)) + (', nativeImage=' + Kotlin.toString(this.nativeImage)) + ')';
  };
  CartoucheKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.maxValues) | 0;
    result = result * 31 + Kotlin.hashCode(this.imageHolder) | 0;
    result = result * 31 + Kotlin.hashCode(this.nativeImage) | 0;
    return result;
  };
  CartoucheKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.maxValues, other.maxValues) && Kotlin.equals(this.imageHolder, other.imageHolder) && Kotlin.equals(this.nativeImage, other.nativeImage)))));
  };
  function ShapeInTheBox(form, size, color, speed) {
    if (form === void 0)
      form = ShapeForm$CIRCLE_getInstance();
    if (size === void 0)
      size = ShapeSize$SMALL_getInstance();
    if (color === void 0)
      color = ShapeColor$BLUE_getInstance();
    if (speed === void 0)
      speed = ShapeSpeed$SLOW_getInstance();
    this.form = form;
    this.size = size;
    this.color = color;
    this.speed = speed;
  }
  ShapeInTheBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeInTheBox',
    interfaces: []
  };
  ShapeInTheBox.prototype.component1 = function () {
    return this.form;
  };
  ShapeInTheBox.prototype.component2 = function () {
    return this.size;
  };
  ShapeInTheBox.prototype.component3 = function () {
    return this.color;
  };
  ShapeInTheBox.prototype.component4 = function () {
    return this.speed;
  };
  ShapeInTheBox.prototype.copy_o3zd33$ = function (form, size, color, speed) {
    return new ShapeInTheBox(form === void 0 ? this.form : form, size === void 0 ? this.size : size, color === void 0 ? this.color : color, speed === void 0 ? this.speed : speed);
  };
  ShapeInTheBox.prototype.toString = function () {
    return 'ShapeInTheBox(form=' + Kotlin.toString(this.form) + (', size=' + Kotlin.toString(this.size)) + (', color=' + Kotlin.toString(this.color)) + (', speed=' + Kotlin.toString(this.speed)) + ')';
  };
  ShapeInTheBox.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.form) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    result = result * 31 + Kotlin.hashCode(this.speed) | 0;
    return result;
  };
  ShapeInTheBox.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.form, other.form) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.color, other.color) && Kotlin.equals(this.speed, other.speed)))));
  };
  function ShapeForm(name, ordinal, formIndex) {
    Enum.call(this);
    this.formIndex = formIndex;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShapeForm_initFields() {
    ShapeForm_initFields = function () {
    };
    ShapeForm$TRIANGLE_instance = new ShapeForm('TRIANGLE', 0, 1);
    ShapeForm$SQUARE_instance = new ShapeForm('SQUARE', 1, 2);
    ShapeForm$CIRCLE_instance = new ShapeForm('CIRCLE', 2, 3);
    ShapeForm$POLYGON_instance = new ShapeForm('POLYGON', 3, 4);
    ShapeForm$PENTAGON_instance = new ShapeForm('PENTAGON', 4, 5);
    ShapeForm$OCTAHEDRON_instance = new ShapeForm('OCTAHEDRON', 5, 6);
  }
  var ShapeForm$TRIANGLE_instance;
  function ShapeForm$TRIANGLE_getInstance() {
    ShapeForm_initFields();
    return ShapeForm$TRIANGLE_instance;
  }
  var ShapeForm$SQUARE_instance;
  function ShapeForm$SQUARE_getInstance() {
    ShapeForm_initFields();
    return ShapeForm$SQUARE_instance;
  }
  var ShapeForm$CIRCLE_instance;
  function ShapeForm$CIRCLE_getInstance() {
    ShapeForm_initFields();
    return ShapeForm$CIRCLE_instance;
  }
  var ShapeForm$POLYGON_instance;
  function ShapeForm$POLYGON_getInstance() {
    ShapeForm_initFields();
    return ShapeForm$POLYGON_instance;
  }
  var ShapeForm$PENTAGON_instance;
  function ShapeForm$PENTAGON_getInstance() {
    ShapeForm_initFields();
    return ShapeForm$PENTAGON_instance;
  }
  var ShapeForm$OCTAHEDRON_instance;
  function ShapeForm$OCTAHEDRON_getInstance() {
    ShapeForm_initFields();
    return ShapeForm$OCTAHEDRON_instance;
  }
  ShapeForm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeForm',
    interfaces: [Enum]
  };
  function ShapeForm$values() {
    return [ShapeForm$TRIANGLE_getInstance(), ShapeForm$SQUARE_getInstance(), ShapeForm$CIRCLE_getInstance(), ShapeForm$POLYGON_getInstance(), ShapeForm$PENTAGON_getInstance(), ShapeForm$OCTAHEDRON_getInstance()];
  }
  ShapeForm.values = ShapeForm$values;
  function ShapeForm$valueOf(name) {
    switch (name) {
      case 'TRIANGLE':
        return ShapeForm$TRIANGLE_getInstance();
      case 'SQUARE':
        return ShapeForm$SQUARE_getInstance();
      case 'CIRCLE':
        return ShapeForm$CIRCLE_getInstance();
      case 'POLYGON':
        return ShapeForm$POLYGON_getInstance();
      case 'PENTAGON':
        return ShapeForm$PENTAGON_getInstance();
      case 'OCTAHEDRON':
        return ShapeForm$OCTAHEDRON_getInstance();
      default:throwISE('No enum constant ShapeForm.' + name);
    }
  }
  ShapeForm.valueOf_61zpoe$ = ShapeForm$valueOf;
  function ShapeColor(name, ordinal, color) {
    Enum.call(this);
    this.color = color;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShapeColor_initFields() {
    ShapeColor_initFields = function () {
    };
    ShapeColor$BLUE_instance = new ShapeColor('BLUE', 0, color.Colors.BLUE);
    ShapeColor$GREEN_instance = new ShapeColor('GREEN', 1, color.Colors.GREEN);
    ShapeColor$RED_instance = new ShapeColor('RED', 2, color.Colors.RED);
    ShapeColor$YELLOW_instance = new ShapeColor('YELLOW', 3, color.Colors.YELLOW);
    ShapeColor$BLACK_instance = new ShapeColor('BLACK', 4, color.Colors.BLACK);
    ShapeColor$WHITE_instance = new ShapeColor('WHITE', 5, color.Colors.WHITE);
    ShapeColor$DARKGRAY_instance = new ShapeColor('DARKGRAY', 6, color.Colors.DARKGRAY);
  }
  var ShapeColor$BLUE_instance;
  function ShapeColor$BLUE_getInstance() {
    ShapeColor_initFields();
    return ShapeColor$BLUE_instance;
  }
  var ShapeColor$GREEN_instance;
  function ShapeColor$GREEN_getInstance() {
    ShapeColor_initFields();
    return ShapeColor$GREEN_instance;
  }
  var ShapeColor$RED_instance;
  function ShapeColor$RED_getInstance() {
    ShapeColor_initFields();
    return ShapeColor$RED_instance;
  }
  var ShapeColor$YELLOW_instance;
  function ShapeColor$YELLOW_getInstance() {
    ShapeColor_initFields();
    return ShapeColor$YELLOW_instance;
  }
  var ShapeColor$BLACK_instance;
  function ShapeColor$BLACK_getInstance() {
    ShapeColor_initFields();
    return ShapeColor$BLACK_instance;
  }
  var ShapeColor$WHITE_instance;
  function ShapeColor$WHITE_getInstance() {
    ShapeColor_initFields();
    return ShapeColor$WHITE_instance;
  }
  var ShapeColor$DARKGRAY_instance;
  function ShapeColor$DARKGRAY_getInstance() {
    ShapeColor_initFields();
    return ShapeColor$DARKGRAY_instance;
  }
  ShapeColor.prototype.nextColor = function () {
    return ShapeColor$values()[(this.ordinal + 1 | 0) % ShapeColor$values().length];
  };
  ShapeColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeColor',
    interfaces: [Enum]
  };
  function ShapeColor$values() {
    return [ShapeColor$BLUE_getInstance(), ShapeColor$GREEN_getInstance(), ShapeColor$RED_getInstance(), ShapeColor$YELLOW_getInstance(), ShapeColor$BLACK_getInstance(), ShapeColor$WHITE_getInstance(), ShapeColor$DARKGRAY_getInstance()];
  }
  ShapeColor.values = ShapeColor$values;
  function ShapeColor$valueOf(name) {
    switch (name) {
      case 'BLUE':
        return ShapeColor$BLUE_getInstance();
      case 'GREEN':
        return ShapeColor$GREEN_getInstance();
      case 'RED':
        return ShapeColor$RED_getInstance();
      case 'YELLOW':
        return ShapeColor$YELLOW_getInstance();
      case 'BLACK':
        return ShapeColor$BLACK_getInstance();
      case 'WHITE':
        return ShapeColor$WHITE_getInstance();
      case 'DARKGRAY':
        return ShapeColor$DARKGRAY_getInstance();
      default:throwISE('No enum constant ShapeColor.' + name);
    }
  }
  ShapeColor.valueOf_61zpoe$ = ShapeColor$valueOf;
  function ShapeSize(name, ordinal, size) {
    Enum.call(this);
    this.size = size;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShapeSize_initFields() {
    ShapeSize_initFields = function () {
    };
    ShapeSize$SMALL_instance = new ShapeSize('SMALL', 0, 75);
    ShapeSize$MEDIUM_instance = new ShapeSize('MEDIUM', 1, 130);
    ShapeSize$LARGE_instance = new ShapeSize('LARGE', 2, 210);
  }
  var ShapeSize$SMALL_instance;
  function ShapeSize$SMALL_getInstance() {
    ShapeSize_initFields();
    return ShapeSize$SMALL_instance;
  }
  var ShapeSize$MEDIUM_instance;
  function ShapeSize$MEDIUM_getInstance() {
    ShapeSize_initFields();
    return ShapeSize$MEDIUM_instance;
  }
  var ShapeSize$LARGE_instance;
  function ShapeSize$LARGE_getInstance() {
    ShapeSize_initFields();
    return ShapeSize$LARGE_instance;
  }
  ShapeSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeSize',
    interfaces: [Enum]
  };
  function ShapeSize$values() {
    return [ShapeSize$SMALL_getInstance(), ShapeSize$MEDIUM_getInstance(), ShapeSize$LARGE_getInstance()];
  }
  ShapeSize.values = ShapeSize$values;
  function ShapeSize$valueOf(name) {
    switch (name) {
      case 'SMALL':
        return ShapeSize$SMALL_getInstance();
      case 'MEDIUM':
        return ShapeSize$MEDIUM_getInstance();
      case 'LARGE':
        return ShapeSize$LARGE_getInstance();
      default:throwISE('No enum constant ShapeSize.' + name);
    }
  }
  ShapeSize.valueOf_61zpoe$ = ShapeSize$valueOf;
  function ShapeSpeed(name, ordinal, speed) {
    Enum.call(this);
    this.speed = speed;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShapeSpeed_initFields() {
    ShapeSpeed_initFields = function () {
    };
    ShapeSpeed$SLOW_instance = new ShapeSpeed('SLOW', 0, 1);
    ShapeSpeed$MEDIUM_instance = new ShapeSpeed('MEDIUM', 1, 3);
    ShapeSpeed$FAST_instance = new ShapeSpeed('FAST', 2, 9);
  }
  var ShapeSpeed$SLOW_instance;
  function ShapeSpeed$SLOW_getInstance() {
    ShapeSpeed_initFields();
    return ShapeSpeed$SLOW_instance;
  }
  var ShapeSpeed$MEDIUM_instance;
  function ShapeSpeed$MEDIUM_getInstance() {
    ShapeSpeed_initFields();
    return ShapeSpeed$MEDIUM_instance;
  }
  var ShapeSpeed$FAST_instance;
  function ShapeSpeed$FAST_getInstance() {
    ShapeSpeed_initFields();
    return ShapeSpeed$FAST_instance;
  }
  ShapeSpeed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeSpeed',
    interfaces: [Enum]
  };
  function ShapeSpeed$values() {
    return [ShapeSpeed$SLOW_getInstance(), ShapeSpeed$MEDIUM_getInstance(), ShapeSpeed$FAST_getInstance()];
  }
  ShapeSpeed.values = ShapeSpeed$values;
  function ShapeSpeed$valueOf(name) {
    switch (name) {
      case 'SLOW':
        return ShapeSpeed$SLOW_getInstance();
      case 'MEDIUM':
        return ShapeSpeed$MEDIUM_getInstance();
      case 'FAST':
        return ShapeSpeed$FAST_getInstance();
      default:throwISE('No enum constant ShapeSpeed.' + name);
    }
  }
  ShapeSpeed.valueOf_61zpoe$ = ShapeSpeed$valueOf;
  function shapeConstructor(boxShape, shapeSymbol) {
    var bitmapSize = boxShape.size.size;
    var bitmapColor = boxShape.color.color;
    var $receiver = new Bitmap32(bitmapSize, bitmapSize);
    $receiver.lock();
    try {
      var ctx = $receiver.getContext2d_6taknv$(true);
      try {
        ctx.lineWidth = 0.01;
        switch (boxShape.form.name) {
          case 'POLYGON':
            var lineWidth;
            var lineCap;
            var lineJoin;
            lineWidth = ctx.lineWidth;
            lineCap = ctx.lineCap;
            lineJoin = ctx.lineJoin;
            ctx.scale_lu1900$(numberToDouble(bitmapSize), numberToDouble(bitmapSize));
            ctx.moveTo_lu1900$(0.7, 0.0);
            ctx.lineTo_lu1900$(0.63, 0.25);
            ctx.lineTo_lu1900$(0.95, 0.5);
            ctx.lineTo_lu1900$(0.87, 0.78);
            ctx.lineTo_lu1900$(0.4, 1.0);
            ctx.lineTo_lu1900$(0.28, 0.68);
            ctx.lineTo_lu1900$(0.07, 0.63);
            ctx.lineTo_lu1900$(0.18, 0.16);
            ctx.close();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = lineCap;
            ctx.lineJoin = lineJoin;
            ctx.stroke_9bhh2t$(new ColorPaint(bitmapColor));
            break;
          case 'OCTAHEDRON':
            var lineWidth_0;
            var lineCap_0;
            var lineJoin_0;
            lineWidth_0 = ctx.lineWidth;
            lineCap_0 = ctx.lineCap;
            lineJoin_0 = ctx.lineJoin;
            ctx.scale_lu1900$(numberToDouble(bitmapSize), numberToDouble(bitmapSize));
            ctx.moveTo_lu1900$(0.0, 0.5);
            ctx.lineTo_lu1900$(0.15, 0.15);
            ctx.lineTo_lu1900$(0.5, 0.0);
            ctx.lineTo_lu1900$(0.85, 0.15);
            ctx.lineTo_lu1900$(1.0, 0.5);
            ctx.lineTo_lu1900$(0.85, 0.85);
            ctx.lineTo_lu1900$(0.5, 1.0);
            ctx.lineTo_lu1900$(0.15, 0.85);
            ctx.close();
            ctx.lineWidth = lineWidth_0;
            ctx.lineCap = lineCap_0;
            ctx.lineJoin = lineJoin_0;
            ctx.stroke_9bhh2t$(new ColorPaint(bitmapColor));
            break;
          case 'PENTAGON':
            var lineWidth_1;
            var lineCap_1;
            var lineJoin_1;
            lineWidth_1 = ctx.lineWidth;
            lineCap_1 = ctx.lineCap;
            lineJoin_1 = ctx.lineJoin;
            ctx.scale_lu1900$(numberToDouble(bitmapSize), numberToDouble(bitmapSize));
            ctx.moveTo_lu1900$(0.03, 0.67);
            ctx.lineTo_lu1900$(0.18, 0.12);
            ctx.lineTo_lu1900$(0.82, 0.12);
            ctx.lineTo_lu1900$(0.97, 0.67);
            ctx.lineTo_lu1900$(0.5, 1.0);
            ctx.close();
            ctx.lineWidth = lineWidth_1;
            ctx.lineCap = lineCap_1;
            ctx.lineJoin = lineJoin_1;
            ctx.stroke_9bhh2t$(new ColorPaint(bitmapColor));
            break;
          case 'SQUARE':
            var lineWidth_2;
            var lineCap_2;
            var lineJoin_2;
            lineWidth_2 = ctx.lineWidth;
            lineCap_2 = ctx.lineCap;
            lineJoin_2 = ctx.lineJoin;
            ctx.scale_lu1900$(numberToDouble(bitmapSize), numberToDouble(bitmapSize));
            ctx.moveTo_lu1900$(0.1, 0.1);
            ctx.lineTo_lu1900$(0.9, 0.1);
            ctx.lineTo_lu1900$(0.9, 0.9);
            ctx.lineTo_lu1900$(0.1, 0.9);
            ctx.close();
            ctx.lineWidth = lineWidth_2;
            ctx.lineCap = lineCap_2;
            ctx.lineJoin = lineJoin_2;
            ctx.stroke_9bhh2t$(new ColorPaint(bitmapColor));
            break;
          case 'TRIANGLE':
            var lineWidth_3;
            var lineCap_3;
            var lineJoin_3;
            lineWidth_3 = ctx.lineWidth;
            lineCap_3 = ctx.lineCap;
            lineJoin_3 = ctx.lineJoin;
            ctx.scale_lu1900$(numberToDouble(bitmapSize), numberToDouble(bitmapSize));
            ctx.moveTo_lu1900$(0.08, 0.23);
            ctx.lineTo_lu1900$(0.92, 0.23);
            ctx.lineTo_lu1900$(0.5, 1.0);
            ctx.close();
            ctx.lineWidth = lineWidth_3;
            ctx.lineCap = lineCap_3;
            ctx.lineJoin = lineJoin_3;
            ctx.stroke_9bhh2t$(new ColorPaint(bitmapColor));
            break;
          default:var lineWidth_4;
            var lineCap_4;
            var lineJoin_4;
            lineWidth_4 = ctx.lineWidth;
            lineCap_4 = ctx.lineCap;
            lineJoin_4 = ctx.lineJoin;
            ctx.scale_lu1900$(numberToDouble(bitmapSize), numberToDouble(bitmapSize));
            circle(ctx, 0.5, 0.5, 0.4);
            ctx.lineWidth = lineWidth_4;
            ctx.lineCap = lineCap_4;
            ctx.lineJoin = lineJoin_4;
            ctx.stroke_9bhh2t$(new ColorPaint(bitmapColor));
            break;
        }
        ctx.fill_9bhh2t$(new ColorPaint(bitmapColor));
        var $this = ctx.renderer;
        var x = (ctx.width / 2 | 0) - (shapeSymbol.width / 2 | 0) | 0;
        var y = (ctx.height / 2 | 0) - (shapeSymbol.height / 2 | 0) | 0;
        var width;
        var height;
        var transform;
        width = shapeSymbol.width;
        height = shapeSymbol.height;
        transform = new Matrix_init();
        $this.drawImage_r3wwxz$(shapeSymbol, numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height), transform);
      }finally {
        ctx.dispose();
      }
    }finally {
      $receiver.unlock_2epnwg$(null);
    }
    return $receiver;
  }
  function SymbolsBuilder(views, symbolSize) {
    if (symbolSize === void 0)
      symbolSize = 48;
    this.views = views;
    this.symbolSize = symbolSize;
    var $receiver = NativeImage(0, 0);
    $receiver.lock();
    try {
      var ctx = $receiver.getContext2d_6taknv$(true);
      try {
        ctx.lineWidth = 0.0;
        ctx.lineCap = LineCap.ROUND;
        var color_0 = color.Colors.BLACK;
        var lineWidth;
        var lineCap;
        var lineJoin;
        lineWidth = ctx.lineWidth;
        lineCap = ctx.lineCap;
        lineJoin = ctx.lineJoin;
        var sx = this.symbolSize;
        ctx.scale_lu1900$(numberToDouble(sx), numberToDouble(sx));
        ctx.moveTo_lu1900$(0.0, 0.8);
        ctx.lineTo_lu1900$(1.0, 0.8);
        ctx.close();
        ctx.lineWidth = lineWidth;
        ctx.lineCap = lineCap;
        ctx.lineJoin = lineJoin;
        ctx.stroke_9bhh2t$(new ColorPaint(color_0));
      }finally {
        ctx.dispose();
      }
    }finally {
      $receiver.unlock_2epnwg$(null);
    }
    this.emptySymbol = $receiver;
    var $receiver_0 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_0.lock();
    try {
      var ctx_0 = $receiver_0.getContext2d_6taknv$(true);
      try {
        ctx_0.lineWidth = 0.08;
        ctx_0.lineCap = LineCap.ROUND;
        var color_1 = color.Colors.BLACK;
        var lineWidth_0;
        var lineCap_0;
        var lineJoin_0;
        lineWidth_0 = ctx_0.lineWidth;
        lineCap_0 = ctx_0.lineCap;
        lineJoin_0 = ctx_0.lineJoin;
        var sx_0 = this.symbolSize;
        ctx_0.scale_lu1900$(numberToDouble(sx_0), numberToDouble(sx_0));
        ctx_0.moveTo_lu1900$(0.3, 0.7);
        ctx_0.lineTo_lu1900$(0.7, 0.7);
        ctx_0.moveTo_lu1900$(0.5, 0.7);
        ctx_0.lineTo_lu1900$(0.5, 0.2);
        circle(ctx_0, 0.5, 0.5, 0.45);
        ctx_0.lineWidth = lineWidth_0;
        ctx_0.lineCap = lineCap_0;
        ctx_0.lineJoin = lineJoin_0;
        ctx_0.stroke_9bhh2t$(new ColorPaint(color_1));
      }finally {
        ctx_0.dispose();
      }
    }finally {
      $receiver_0.unlock_2epnwg$(null);
    }
    this.faceGroupSymbol = $receiver_0;
    var $receiver_1 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_1.lock();
    try {
      var ctx_1 = $receiver_1.getContext2d_6taknv$(true);
      try {
        ctx_1.lineWidth = 0.08;
        ctx_1.lineCap = LineCap.ROUND;
        var color_2 = color.Colors.BLACK;
        var lineWidth_1;
        var lineCap_1;
        var lineJoin_1;
        lineWidth_1 = ctx_1.lineWidth;
        lineCap_1 = ctx_1.lineCap;
        lineJoin_1 = ctx_1.lineJoin;
        var sx_1 = this.symbolSize;
        ctx_1.scale_lu1900$(numberToDouble(sx_1), numberToDouble(sx_1));
        circle(ctx_1, 0.5, 0.5, 0.4);
        circle(ctx_1, 0.5, 0.5, 0.05);
        ctx_1.lineWidth = lineWidth_1;
        ctx_1.lineCap = lineCap_1;
        ctx_1.lineJoin = lineJoin_1;
        ctx_1.stroke_9bhh2t$(new ColorPaint(color_2));
      }finally {
        ctx_1.dispose();
      }
    }finally {
      $receiver_1.unlock_2epnwg$(null);
    }
    this.eyeSymbol = $receiver_1;
    var $receiver_2 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_2.lock();
    try {
      var ctx_2 = $receiver_2.getContext2d_6taknv$(true);
      try {
        ctx_2.lineWidth = 0.08;
        ctx_2.lineCap = LineCap.ROUND;
        var color_3 = color.Colors.BLACK;
        var lineWidth_2;
        var lineCap_2;
        var lineJoin_2;
        lineWidth_2 = ctx_2.lineWidth;
        lineCap_2 = ctx_2.lineCap;
        lineJoin_2 = ctx_2.lineJoin;
        var sx_2 = this.symbolSize;
        ctx_2.scale_lu1900$(numberToDouble(sx_2), numberToDouble(sx_2));
        circle(ctx_2, 0.5, 0.5, 0.4);
        ctx_2.lineWidth = lineWidth_2;
        ctx_2.lineCap = lineCap_2;
        ctx_2.lineJoin = lineJoin_2;
        ctx_2.stroke_9bhh2t$(new ColorPaint(color_3));
      }finally {
        ctx_2.dispose();
      }
    }finally {
      $receiver_2.unlock_2epnwg$(null);
    }
    this.mouthSymbol = $receiver_2;
    var $receiver_3 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_3.lock();
    try {
      var ctx_3 = $receiver_3.getContext2d_6taknv$(true);
      try {
        ctx_3.lineWidth = 0.08;
        ctx_3.lineCap = LineCap.ROUND;
        var color_4 = color.Colors.BLACK;
        var lineWidth_3;
        var lineCap_3;
        var lineJoin_3;
        lineWidth_3 = ctx_3.lineWidth;
        lineCap_3 = ctx_3.lineCap;
        lineJoin_3 = ctx_3.lineJoin;
        var sx_3 = this.symbolSize;
        ctx_3.scale_lu1900$(numberToDouble(sx_3), numberToDouble(sx_3));
        ctx_3.moveTo_lu1900$(0.7, 0.9);
        ctx_3.lineTo_lu1900$(0.25, 0.9);
        ctx_3.lineTo_lu1900$(0.7, 0.0);
        ctx_3.lineWidth = lineWidth_3;
        ctx_3.lineCap = lineCap_3;
        ctx_3.lineJoin = lineJoin_3;
        ctx_3.stroke_9bhh2t$(new ColorPaint(color_4));
      }finally {
        ctx_3.dispose();
      }
    }finally {
      $receiver_3.unlock_2epnwg$(null);
    }
    this.noseSymbol = $receiver_3;
    var $receiver_4 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_4.lock();
    try {
      var ctx_4 = $receiver_4.getContext2d_6taknv$(true);
      try {
        ctx_4.lineWidth = 0.08;
        ctx_4.lineCap = LineCap.ROUND;
        var color_5 = color.Colors.BLACK;
        var lineWidth_4;
        var lineCap_4;
        var lineJoin_4;
        lineWidth_4 = ctx_4.lineWidth;
        lineCap_4 = ctx_4.lineCap;
        lineJoin_4 = ctx_4.lineJoin;
        var sx_4 = this.symbolSize;
        ctx_4.scale_lu1900$(numberToDouble(sx_4), numberToDouble(sx_4));
        ctx_4.moveTo_lu1900$(0.7, 0.7);
        ctx_4.lineTo_lu1900$(0.95, 0.5);
        ctx_4.lineTo_lu1900$(0.7, 0.3);
        ctx_4.moveTo_lu1900$(0.3, 0.7);
        ctx_4.lineTo_lu1900$(0.05, 0.5);
        ctx_4.lineTo_lu1900$(0.3, 0.3);
        ctx_4.moveTo_lu1900$(0.05, 0.5);
        ctx_4.lineTo_lu1900$(0.95, 0.5);
        ctx_4.moveTo_lu1900$(0.5, 0.7);
        ctx_4.lineTo_lu1900$(0.5, 0.3);
        ctx_4.lineWidth = lineWidth_4;
        ctx_4.lineCap = lineCap_4;
        ctx_4.lineJoin = lineJoin_4;
        ctx_4.stroke_9bhh2t$(new ColorPaint(color_5));
      }finally {
        ctx_4.dispose();
      }
    }finally {
      $receiver_4.unlock_2epnwg$(null);
    }
    this.speedGroupSymbol = $receiver_4;
    var $receiver_5 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_5.lock();
    try {
      var ctx_5 = $receiver_5.getContext2d_6taknv$(true);
      try {
        ctx_5.lineWidth = 0.08;
        ctx_5.lineCap = LineCap.ROUND;
        var color_6 = color.Colors.BLACK;
        var lineWidth_5;
        var lineCap_5;
        var lineJoin_5;
        lineWidth_5 = ctx_5.lineWidth;
        lineCap_5 = ctx_5.lineCap;
        lineJoin_5 = ctx_5.lineJoin;
        var sx_5 = this.symbolSize;
        ctx_5.scale_lu1900$(numberToDouble(sx_5), numberToDouble(sx_5));
        ctx_5.moveTo_lu1900$(0.05, 0.7);
        ctx_5.lineTo_lu1900$(0.05, 0.3);
        ctx_5.moveTo_lu1900$(0.05, 0.5);
        ctx_5.lineTo_lu1900$(0.95, 0.5);
        ctx_5.moveTo_lu1900$(0.95, 0.7);
        ctx_5.lineTo_lu1900$(0.95, 0.3);
        ctx_5.lineWidth = lineWidth_5;
        ctx_5.lineCap = lineCap_5;
        ctx_5.lineJoin = lineJoin_5;
        ctx_5.stroke_9bhh2t$(new ColorPaint(color_6));
      }finally {
        ctx_5.dispose();
      }
    }finally {
      $receiver_5.unlock_2epnwg$(null);
    }
    this.slowSpeedSymbol = $receiver_5;
    var $receiver_6 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_6.lock();
    try {
      var ctx_6 = $receiver_6.getContext2d_6taknv$(true);
      try {
        ctx_6.lineWidth = 0.08;
        ctx_6.lineCap = LineCap.ROUND;
        var color_7 = color.Colors.BLACK;
        var lineWidth_6;
        var lineCap_6;
        var lineJoin_6;
        lineWidth_6 = ctx_6.lineWidth;
        lineCap_6 = ctx_6.lineCap;
        lineJoin_6 = ctx_6.lineJoin;
        var sx_6 = this.symbolSize;
        ctx_6.scale_lu1900$(numberToDouble(sx_6), numberToDouble(sx_6));
        ctx_6.moveTo_lu1900$(0.05, 0.7);
        ctx_6.lineTo_lu1900$(0.05, 0.3);
        ctx_6.moveTo_lu1900$(0.05, 0.5);
        ctx_6.lineTo_lu1900$(0.95, 0.5);
        ctx_6.moveTo_lu1900$(0.95, 0.7);
        ctx_6.lineTo_lu1900$(0.95, 0.3);
        ctx_6.moveTo_lu1900$(0.5, 0.7);
        ctx_6.lineTo_lu1900$(0.5, 0.3);
        ctx_6.lineWidth = lineWidth_6;
        ctx_6.lineCap = lineCap_6;
        ctx_6.lineJoin = lineJoin_6;
        ctx_6.stroke_9bhh2t$(new ColorPaint(color_7));
      }finally {
        ctx_6.dispose();
      }
    }finally {
      $receiver_6.unlock_2epnwg$(null);
    }
    this.midSpeedSymbol = $receiver_6;
    var $receiver_7 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_7.lock();
    try {
      var ctx_7 = $receiver_7.getContext2d_6taknv$(true);
      try {
        ctx_7.lineWidth = 0.08;
        ctx_7.lineCap = LineCap.ROUND;
        var color_8 = color.Colors.BLACK;
        var lineWidth_7;
        var lineCap_7;
        var lineJoin_7;
        lineWidth_7 = ctx_7.lineWidth;
        lineCap_7 = ctx_7.lineCap;
        lineJoin_7 = ctx_7.lineJoin;
        var sx_7 = this.symbolSize;
        ctx_7.scale_lu1900$(numberToDouble(sx_7), numberToDouble(sx_7));
        ctx_7.moveTo_lu1900$(0.05, 0.7);
        ctx_7.lineTo_lu1900$(0.05, 0.3);
        ctx_7.moveTo_lu1900$(0.05, 0.5);
        ctx_7.lineTo_lu1900$(0.95, 0.5);
        ctx_7.moveTo_lu1900$(0.95, 0.7);
        ctx_7.lineTo_lu1900$(0.95, 0.3);
        ctx_7.moveTo_lu1900$(0.35, 0.7);
        ctx_7.lineTo_lu1900$(0.35, 0.3);
        ctx_7.moveTo_lu1900$(0.65, 0.7);
        ctx_7.lineTo_lu1900$(0.65, 0.3);
        ctx_7.lineWidth = lineWidth_7;
        ctx_7.lineCap = lineCap_7;
        ctx_7.lineJoin = lineJoin_7;
        ctx_7.stroke_9bhh2t$(new ColorPaint(color_8));
      }finally {
        ctx_7.dispose();
      }
    }finally {
      $receiver_7.unlock_2epnwg$(null);
    }
    this.highSpeedSymbol = $receiver_7;
    var $receiver_8 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_8.lock();
    try {
      var ctx_8 = $receiver_8.getContext2d_6taknv$(true);
      try {
        ctx_8.lineWidth = 0.08;
        ctx_8.lineCap = LineCap.ROUND;
        var sx_8 = this.symbolSize;
        ctx_8.scale_lu1900$(numberToDouble(sx_8), numberToDouble(sx_8));
        ctx_8.beginPath();
        roundRect(ctx_8, numberToDouble(0.0), numberToDouble(0.0), numberToDouble(1.0), numberToDouble(1.0), numberToDouble(0.25), numberToDouble(0.25));
        ctx_8.fill();
        ctx_8.fill_9bhh2t$(new ColorPaint(color.Colors.RED));
      }finally {
        ctx_8.dispose();
      }
    }finally {
      $receiver_8.unlock_2epnwg$(null);
    }
    this.colorREDSymbol = $receiver_8;
    var $receiver_9 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_9.lock();
    try {
      var ctx_9 = $receiver_9.getContext2d_6taknv$(true);
      try {
        ctx_9.lineWidth = 0.08;
        ctx_9.lineCap = LineCap.ROUND;
        var sx_9 = this.symbolSize;
        ctx_9.scale_lu1900$(numberToDouble(sx_9), numberToDouble(sx_9));
        ctx_9.beginPath();
        roundRect(ctx_9, numberToDouble(0.0), numberToDouble(0.0), numberToDouble(1.0), numberToDouble(1.0), numberToDouble(0.25), numberToDouble(0.25));
        ctx_9.fill();
        ctx_9.fill_9bhh2t$(new ColorPaint(color.Colors.BLUE));
      }finally {
        ctx_9.dispose();
      }
    }finally {
      $receiver_9.unlock_2epnwg$(null);
    }
    this.colorBLUESymbol = $receiver_9;
    var $receiver_10 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_10.lock();
    try {
      var ctx_10 = $receiver_10.getContext2d_6taknv$(true);
      try {
        ctx_10.lineWidth = 0.08;
        ctx_10.lineCap = LineCap.ROUND;
        var sx_10 = this.symbolSize;
        ctx_10.scale_lu1900$(numberToDouble(sx_10), numberToDouble(sx_10));
        ctx_10.beginPath();
        roundRect(ctx_10, numberToDouble(0.0), numberToDouble(0.0), numberToDouble(1.0), numberToDouble(1.0), numberToDouble(0.25), numberToDouble(0.25));
        ctx_10.fill();
        ctx_10.fill_9bhh2t$(new ColorPaint(color.Colors.GREEN));
      }finally {
        ctx_10.dispose();
      }
    }finally {
      $receiver_10.unlock_2epnwg$(null);
    }
    this.colorGREENSymbol = $receiver_10;
    var $receiver_11 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_11.lock();
    try {
      var ctx_11 = $receiver_11.getContext2d_6taknv$(true);
      try {
        ctx_11.lineWidth = 0.08;
        ctx_11.lineCap = LineCap.ROUND;
        var sx_11 = this.symbolSize;
        ctx_11.scale_lu1900$(numberToDouble(sx_11), numberToDouble(sx_11));
        ctx_11.beginPath();
        roundRect(ctx_11, numberToDouble(0.0), numberToDouble(0.0), numberToDouble(1.0), numberToDouble(1.0), numberToDouble(0.25), numberToDouble(0.25));
        ctx_11.fill();
        ctx_11.fill_9bhh2t$(new ColorPaint(color.Colors.YELLOW));
      }finally {
        ctx_11.dispose();
      }
    }finally {
      $receiver_11.unlock_2epnwg$(null);
    }
    this.colorYELLOWSymbol = $receiver_11;
    var $receiver_12 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_12.lock();
    try {
      var ctx_12 = $receiver_12.getContext2d_6taknv$(true);
      try {
        ctx_12.lineWidth = 0.08;
        ctx_12.lineCap = LineCap.ROUND;
        var sx_12 = this.symbolSize;
        ctx_12.scale_lu1900$(numberToDouble(sx_12), numberToDouble(sx_12));
        ctx_12.beginPath();
        roundRect(ctx_12, numberToDouble(0.0), numberToDouble(0.0), numberToDouble(1.0), numberToDouble(1.0), numberToDouble(0.25), numberToDouble(0.25));
        ctx_12.fill();
        ctx_12.fill_9bhh2t$(new ColorPaint(color.Colors.BLACK));
      }finally {
        ctx_12.dispose();
      }
    }finally {
      $receiver_12.unlock_2epnwg$(null);
    }
    this.colorBLACKSymbol = $receiver_12;
    var $receiver_13 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_13.lock();
    try {
      var ctx_13 = $receiver_13.getContext2d_6taknv$(true);
      try {
        ctx_13.lineWidth = 0.08;
        ctx_13.lineCap = LineCap.ROUND;
        var sx_13 = this.symbolSize;
        ctx_13.scale_lu1900$(numberToDouble(sx_13), numberToDouble(sx_13));
        ctx_13.beginPath();
        roundRect(ctx_13, numberToDouble(0.0), numberToDouble(0.0), numberToDouble(1.0), numberToDouble(1.0), numberToDouble(0.25), numberToDouble(0.25));
        ctx_13.fill();
        ctx_13.fill_9bhh2t$(new ColorPaint(color.Colors.WHITE));
      }finally {
        ctx_13.dispose();
      }
    }finally {
      $receiver_13.unlock_2epnwg$(null);
    }
    this.colorWHITESymbol = $receiver_13;
    var $receiver_14 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_14.lock();
    try {
      var ctx_14 = $receiver_14.getContext2d_6taknv$(true);
      try {
        ctx_14.lineWidth = 0.05;
        ctx_14.lineCap = LineCap.ROUND;
        var sx_14 = this.symbolSize;
        ctx_14.scale_lu1900$(numberToDouble(sx_14), numberToDouble(sx_14));
        ctx_14.beginPath();
        roundRect(ctx_14, numberToDouble(0.1), numberToDouble(0.5), numberToDouble(0.4), numberToDouble(0.4), numberToDouble(0.25), numberToDouble(0.25));
        ctx_14.fill();
        ctx_14.fill_9bhh2t$(new ColorPaint(color.Colors.RED));
        ctx_14.beginPath();
        roundRect(ctx_14, numberToDouble(0.5), numberToDouble(0.5), numberToDouble(0.4), numberToDouble(0.4), numberToDouble(0.25), numberToDouble(0.25));
        ctx_14.fill();
        ctx_14.fill_9bhh2t$(new ColorPaint(color.Colors.BLUE));
        ctx_14.beginPath();
        roundRect(ctx_14, numberToDouble(0.3), numberToDouble(0.1), numberToDouble(0.4), numberToDouble(0.4), numberToDouble(0.25), numberToDouble(0.25));
        ctx_14.fill();
        ctx_14.fill_9bhh2t$(new ColorPaint(color.Colors.GREEN));
      }finally {
        ctx_14.dispose();
      }
    }finally {
      $receiver_14.unlock_2epnwg$(null);
    }
    this.colorGroupSymbol = $receiver_14;
    this.pentagonSymbol = shapeConstructor(new ShapeInTheBox(ShapeForm$PENTAGON_getInstance(), void 0, ShapeColor$DARKGRAY_getInstance()), this.emptySymbol);
    this.circleSymbol = shapeConstructor(new ShapeInTheBox(ShapeForm$CIRCLE_getInstance(), void 0, ShapeColor$DARKGRAY_getInstance()), this.emptySymbol);
    this.squareSymbol = shapeConstructor(new ShapeInTheBox(ShapeForm$SQUARE_getInstance(), void 0, ShapeColor$DARKGRAY_getInstance()), this.emptySymbol);
    this.triangleSymbol = shapeConstructor(new ShapeInTheBox(ShapeForm$TRIANGLE_getInstance(), void 0, ShapeColor$DARKGRAY_getInstance()), this.emptySymbol);
    this.polygonSymbol = shapeConstructor(new ShapeInTheBox(ShapeForm$POLYGON_getInstance(), void 0, ShapeColor$DARKGRAY_getInstance()), this.emptySymbol);
    var $receiver_15 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_15.lock();
    try {
      var ctx_15 = $receiver_15.getContext2d_6taknv$(true);
      try {
        ctx_15.lineWidth = 0.03;
        ctx_15.lineCap = LineCap.ROUND;
        var sx_15 = this.symbolSize;
        ctx_15.scale_lu1900$(numberToDouble(sx_15), numberToDouble(sx_15));
        var color_9 = color.Colors.BLACK;
        var lineWidth_8;
        var lineCap_8;
        var lineJoin_8;
        lineWidth_8 = ctx_15.lineWidth;
        lineCap_8 = ctx_15.lineCap;
        lineJoin_8 = ctx_15.lineJoin;
        ctx_15.moveTo_lu1900$(0.1, 0.9);
        ctx_15.lineTo_lu1900$(0.4, 0.4);
        ctx_15.lineTo_lu1900$(0.6, 0.9);
        ctx_15.close();
        rect(ctx_15, 0.2, 0.1, 0.4, 0.4);
        circle(ctx_15, 0.7, 0.5, 0.2);
        ctx_15.lineWidth = lineWidth_8;
        ctx_15.lineCap = lineCap_8;
        ctx_15.lineJoin = lineJoin_8;
        ctx_15.stroke_9bhh2t$(new ColorPaint(color_9));
      }finally {
        ctx_15.dispose();
      }
    }finally {
      $receiver_15.unlock_2epnwg$(null);
    }
    this.shapeGroupSymbol = $receiver_15;
    var $receiver_16 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_16.lock();
    try {
      var ctx_16 = $receiver_16.getContext2d_6taknv$(true);
      try {
        ctx_16.lineWidth = 0.08;
        ctx_16.lineCap = LineCap.ROUND;
        var color_10 = color.Colors.BLACK;
        var lineWidth_9;
        var lineCap_9;
        var lineJoin_9;
        lineWidth_9 = ctx_16.lineWidth;
        lineCap_9 = ctx_16.lineCap;
        lineJoin_9 = ctx_16.lineJoin;
        var sx_16 = this.symbolSize;
        ctx_16.scale_lu1900$(numberToDouble(sx_16), numberToDouble(sx_16));
        ctx_16.moveTo_lu1900$(0.5, 0.0);
        ctx_16.lineTo_lu1900$(0.5, 1.0);
        ctx_16.lineWidth = lineWidth_9;
        ctx_16.lineCap = lineCap_9;
        ctx_16.lineJoin = lineJoin_9;
        ctx_16.stroke_9bhh2t$(new ColorPaint(color_10));
      }finally {
        ctx_16.dispose();
      }
    }finally {
      $receiver_16.unlock_2epnwg$(null);
    }
    this.numberOneSymbol = $receiver_16;
    var $receiver_17 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_17.lock();
    try {
      var ctx_17 = $receiver_17.getContext2d_6taknv$(true);
      try {
        ctx_17.lineWidth = 0.08;
        ctx_17.lineCap = LineCap.ROUND;
        var color_11 = color.Colors.BLACK;
        var lineWidth_10;
        var lineCap_10;
        var lineJoin_10;
        lineWidth_10 = ctx_17.lineWidth;
        lineCap_10 = ctx_17.lineCap;
        lineJoin_10 = ctx_17.lineJoin;
        var sx_17 = this.symbolSize;
        ctx_17.scale_lu1900$(numberToDouble(sx_17), numberToDouble(sx_17));
        ctx_17.moveTo_lu1900$(0.4, 0.0);
        ctx_17.lineTo_lu1900$(0.4, 1.0);
        ctx_17.moveTo_lu1900$(0.6, 0.0);
        ctx_17.lineTo_lu1900$(0.6, 1.0);
        ctx_17.lineWidth = lineWidth_10;
        ctx_17.lineCap = lineCap_10;
        ctx_17.lineJoin = lineJoin_10;
        ctx_17.stroke_9bhh2t$(new ColorPaint(color_11));
      }finally {
        ctx_17.dispose();
      }
    }finally {
      $receiver_17.unlock_2epnwg$(null);
    }
    this.numberTwoSymbol = $receiver_17;
    var $receiver_18 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_18.lock();
    try {
      var ctx_18 = $receiver_18.getContext2d_6taknv$(true);
      try {
        ctx_18.lineWidth = 0.08;
        ctx_18.lineCap = LineCap.ROUND;
        var color_12 = color.Colors.BLACK;
        var lineWidth_11;
        var lineCap_11;
        var lineJoin_11;
        lineWidth_11 = ctx_18.lineWidth;
        lineCap_11 = ctx_18.lineCap;
        lineJoin_11 = ctx_18.lineJoin;
        var sx_18 = this.symbolSize;
        ctx_18.scale_lu1900$(numberToDouble(sx_18), numberToDouble(sx_18));
        ctx_18.moveTo_lu1900$(0.3, 0.0);
        ctx_18.lineTo_lu1900$(0.3, 1.0);
        ctx_18.moveTo_lu1900$(0.5, 0.0);
        ctx_18.lineTo_lu1900$(0.5, 1.0);
        ctx_18.moveTo_lu1900$(0.7, 0.0);
        ctx_18.lineTo_lu1900$(0.7, 1.0);
        ctx_18.lineWidth = lineWidth_11;
        ctx_18.lineCap = lineCap_11;
        ctx_18.lineJoin = lineJoin_11;
        ctx_18.stroke_9bhh2t$(new ColorPaint(color_12));
      }finally {
        ctx_18.dispose();
      }
    }finally {
      $receiver_18.unlock_2epnwg$(null);
    }
    this.numberThreeSymbol = $receiver_18;
    var $receiver_19 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_19.lock();
    try {
      var ctx_19 = $receiver_19.getContext2d_6taknv$(true);
      try {
        ctx_19.lineWidth = 0.08;
        ctx_19.lineCap = LineCap.ROUND;
        var color_13 = color.Colors.BLACK;
        var lineWidth_12;
        var lineCap_12;
        var lineJoin_12;
        lineWidth_12 = ctx_19.lineWidth;
        lineCap_12 = ctx_19.lineCap;
        lineJoin_12 = ctx_19.lineJoin;
        var sx_19 = this.symbolSize;
        ctx_19.scale_lu1900$(numberToDouble(sx_19), numberToDouble(sx_19));
        ctx_19.moveTo_lu1900$(0.4, 0.0);
        ctx_19.lineTo_lu1900$(0.4, 1.0);
        ctx_19.moveTo_lu1900$(0.6, 0.0);
        ctx_19.lineTo_lu1900$(0.6, 1.0);
        ctx_19.moveTo_lu1900$(0.2, 0.0);
        ctx_19.lineTo_lu1900$(0.2, 1.0);
        ctx_19.moveTo_lu1900$(0.8, 0.0);
        ctx_19.lineTo_lu1900$(0.8, 1.0);
        ctx_19.lineWidth = lineWidth_12;
        ctx_19.lineCap = lineCap_12;
        ctx_19.lineJoin = lineJoin_12;
        ctx_19.stroke_9bhh2t$(new ColorPaint(color_13));
      }finally {
        ctx_19.dispose();
      }
    }finally {
      $receiver_19.unlock_2epnwg$(null);
    }
    this.numberFourSymbol = $receiver_19;
    var $receiver_20 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_20.lock();
    try {
      var ctx_20 = $receiver_20.getContext2d_6taknv$(true);
      try {
        ctx_20.lineWidth = 0.08;
        ctx_20.lineCap = LineCap.ROUND;
        var color_14 = color.Colors.BLACK;
        var lineWidth_13;
        var lineCap_13;
        var lineJoin_13;
        lineWidth_13 = ctx_20.lineWidth;
        lineCap_13 = ctx_20.lineCap;
        lineJoin_13 = ctx_20.lineJoin;
        var sx_20 = this.symbolSize;
        ctx_20.scale_lu1900$(numberToDouble(sx_20), numberToDouble(sx_20));
        ctx_20.moveTo_lu1900$(1.0, 0.8);
        ctx_20.lineTo_lu1900$(0.1, 0.8);
        ctx_20.lineTo_lu1900$(0.1, 0.3);
        ctx_20.lineTo_lu1900$(0.6, 0.3);
        ctx_20.lineTo_lu1900$(0.6, 0.8);
        ctx_20.close();
        ctx_20.lineWidth = lineWidth_13;
        ctx_20.lineCap = lineCap_13;
        ctx_20.lineJoin = lineJoin_13;
        ctx_20.stroke_9bhh2t$(new ColorPaint(color_14));
      }finally {
        ctx_20.dispose();
      }
    }finally {
      $receiver_20.unlock_2epnwg$(null);
    }
    this.numberGroupSymbol = $receiver_20;
    var $receiver_21 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_21.lock();
    try {
      var ctx_21 = $receiver_21.getContext2d_6taknv$(true);
      try {
        ctx_21.lineWidth = 0.08;
        ctx_21.lineCap = LineCap.ROUND;
        var color_15 = color.Colors.BLACK;
        var lineWidth_14;
        var lineCap_14;
        var lineJoin_14;
        lineWidth_14 = ctx_21.lineWidth;
        lineCap_14 = ctx_21.lineCap;
        lineJoin_14 = ctx_21.lineJoin;
        var sx_21 = this.symbolSize;
        ctx_21.scale_lu1900$(numberToDouble(sx_21), numberToDouble(sx_21));
        ctx_21.moveTo_lu1900$(0.8, 0.05);
        ctx_21.lineTo_lu1900$(0.2, 0.05);
        ctx_21.moveTo_lu1900$(0.7, 0.3);
        ctx_21.lineTo_lu1900$(0.5, 0.05);
        ctx_21.lineTo_lu1900$(0.3, 0.3);
        ctx_21.moveTo_lu1900$(0.5, 0.05);
        ctx_21.lineTo_lu1900$(0.5, 0.95);
        ctx_21.moveTo_lu1900$(0.7, 0.7);
        ctx_21.lineTo_lu1900$(0.5, 0.95);
        ctx_21.lineTo_lu1900$(0.3, 0.7);
        ctx_21.moveTo_lu1900$(0.8, 0.95);
        ctx_21.lineTo_lu1900$(0.2, 0.95);
        ctx_21.moveTo_lu1900$(0.7, 0.5);
        ctx_21.lineTo_lu1900$(0.3, 0.5);
        ctx_21.close();
        ctx_21.lineWidth = lineWidth_14;
        ctx_21.lineCap = lineCap_14;
        ctx_21.lineJoin = lineJoin_14;
        ctx_21.stroke_9bhh2t$(new ColorPaint(color_15));
      }finally {
        ctx_21.dispose();
      }
    }finally {
      $receiver_21.unlock_2epnwg$(null);
    }
    this.sizeGroupSymbol = $receiver_21;
    var $receiver_22 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_22.lock();
    try {
      var ctx_22 = $receiver_22.getContext2d_6taknv$(true);
      try {
        ctx_22.lineWidth = 0.08;
        ctx_22.lineCap = LineCap.ROUND;
        var color_16 = color.Colors.BLACK;
        var lineWidth_15;
        var lineCap_15;
        var lineJoin_15;
        lineWidth_15 = ctx_22.lineWidth;
        lineCap_15 = ctx_22.lineCap;
        lineJoin_15 = ctx_22.lineJoin;
        var sx_22 = this.symbolSize;
        ctx_22.scale_lu1900$(numberToDouble(sx_22), numberToDouble(sx_22));
        ctx_22.moveTo_lu1900$(0.8, 0.05);
        ctx_22.lineTo_lu1900$(0.2, 0.05);
        ctx_22.moveTo_lu1900$(0.5, 0.05);
        ctx_22.lineTo_lu1900$(0.5, 0.95);
        ctx_22.moveTo_lu1900$(0.8, 0.95);
        ctx_22.lineTo_lu1900$(0.2, 0.95);
        ctx_22.close();
        ctx_22.lineWidth = lineWidth_15;
        ctx_22.lineCap = lineCap_15;
        ctx_22.lineJoin = lineJoin_15;
        ctx_22.stroke_9bhh2t$(new ColorPaint(color_16));
      }finally {
        ctx_22.dispose();
      }
    }finally {
      $receiver_22.unlock_2epnwg$(null);
    }
    this.sizeSmall = $receiver_22;
    var $receiver_23 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_23.lock();
    try {
      var ctx_23 = $receiver_23.getContext2d_6taknv$(true);
      try {
        ctx_23.lineWidth = 0.08;
        ctx_23.lineCap = LineCap.ROUND;
        var color_17 = color.Colors.BLACK;
        var lineWidth_16;
        var lineCap_16;
        var lineJoin_16;
        lineWidth_16 = ctx_23.lineWidth;
        lineCap_16 = ctx_23.lineCap;
        lineJoin_16 = ctx_23.lineJoin;
        var sx_23 = this.symbolSize;
        ctx_23.scale_lu1900$(numberToDouble(sx_23), numberToDouble(sx_23));
        ctx_23.moveTo_lu1900$(0.8, 0.05);
        ctx_23.lineTo_lu1900$(0.2, 0.05);
        ctx_23.moveTo_lu1900$(0.5, 0.05);
        ctx_23.lineTo_lu1900$(0.5, 0.95);
        ctx_23.moveTo_lu1900$(0.8, 0.95);
        ctx_23.lineTo_lu1900$(0.2, 0.95);
        ctx_23.moveTo_lu1900$(0.7, 0.5);
        ctx_23.lineTo_lu1900$(0.3, 0.5);
        ctx_23.close();
        ctx_23.lineWidth = lineWidth_16;
        ctx_23.lineCap = lineCap_16;
        ctx_23.lineJoin = lineJoin_16;
        ctx_23.stroke_9bhh2t$(new ColorPaint(color_17));
      }finally {
        ctx_23.dispose();
      }
    }finally {
      $receiver_23.unlock_2epnwg$(null);
    }
    this.sizeMedium = $receiver_23;
    var $receiver_24 = NativeImage(this.symbolSize, this.symbolSize);
    $receiver_24.lock();
    try {
      var ctx_24 = $receiver_24.getContext2d_6taknv$(true);
      try {
        ctx_24.lineWidth = 0.08;
        ctx_24.lineCap = LineCap.ROUND;
        var color_18 = color.Colors.BLACK;
        var lineWidth_17;
        var lineCap_17;
        var lineJoin_17;
        lineWidth_17 = ctx_24.lineWidth;
        lineCap_17 = ctx_24.lineCap;
        lineJoin_17 = ctx_24.lineJoin;
        var sx_24 = this.symbolSize;
        ctx_24.scale_lu1900$(numberToDouble(sx_24), numberToDouble(sx_24));
        ctx_24.moveTo_lu1900$(0.8, 0.05);
        ctx_24.lineTo_lu1900$(0.2, 0.05);
        ctx_24.moveTo_lu1900$(0.5, 0.05);
        ctx_24.lineTo_lu1900$(0.5, 0.95);
        ctx_24.moveTo_lu1900$(0.8, 0.95);
        ctx_24.lineTo_lu1900$(0.2, 0.95);
        ctx_24.moveTo_lu1900$(0.7, 0.35);
        ctx_24.lineTo_lu1900$(0.3, 0.35);
        ctx_24.moveTo_lu1900$(0.7, 0.65);
        ctx_24.lineTo_lu1900$(0.3, 0.65);
        ctx_24.close();
        ctx_24.lineWidth = lineWidth_17;
        ctx_24.lineCap = lineCap_17;
        ctx_24.lineJoin = lineJoin_17;
        ctx_24.stroke_9bhh2t$(new ColorPaint(color_18));
      }finally {
        ctx_24.dispose();
      }
    }finally {
      $receiver_24.unlock_2epnwg$(null);
    }
    this.sizeLarge = $receiver_24;
  }
  SymbolsBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SymbolsBuilder',
    interfaces: []
  };
  function createRandomShapeBasedOnLevel(level) {
    var shapeInTheBox = new ShapeInTheBox();
    var $receiver = toList(ShapeColor$values());
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!(element === ShapeColor$DARKGRAY_getInstance() || element === ShapeColor$BLACK_getInstance()))
        destination.add_11rb$(element);
    }
    shapeInTheBox.color = first(shuffled(destination));
    shapeInTheBox.size = first(shuffled(toList(ShapeSize$values())));
    var $receiver_0 = toList(ShapeForm$values());
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0 !== ShapeForm$OCTAHEDRON_getInstance())
        destination_0.add_11rb$(element_0);
    }
    shapeInTheBox.form = first(shuffled(destination_0));
    shapeInTheBox.speed = first(shuffled(toList(ShapeSpeed$values())));
    return shapeInTheBox;
  }
  _.GamePlay = GamePlay;
  Object.defineProperty(_, 'font', {
    get: get_font,
    set: set_font
  });
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  _.get_boxShapes_im1zk2$ = get_boxShapes;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  _.main = main;
  _.showGameOver_9iq5xi$ = showGameOver;
  _.restart_st8p7j$ = restart;
  _.newTrainingShape_lyaqyg$ = newTrainingShape;
  _.newShape_9bpwip$ = newShape;
  _.TrainingShape = TrainingShape;
  _.FlyingShape = FlyingShape;
  _.distanceTo_ow9aoh$ = distanceTo;
  _.advance_ehkn7o$ = advance;
  _.CartoucheKey = CartoucheKey;
  _.ShapeInTheBox = ShapeInTheBox;
  Object.defineProperty(ShapeForm, 'TRIANGLE', {
    get: ShapeForm$TRIANGLE_getInstance
  });
  Object.defineProperty(ShapeForm, 'SQUARE', {
    get: ShapeForm$SQUARE_getInstance
  });
  Object.defineProperty(ShapeForm, 'CIRCLE', {
    get: ShapeForm$CIRCLE_getInstance
  });
  Object.defineProperty(ShapeForm, 'POLYGON', {
    get: ShapeForm$POLYGON_getInstance
  });
  Object.defineProperty(ShapeForm, 'PENTAGON', {
    get: ShapeForm$PENTAGON_getInstance
  });
  Object.defineProperty(ShapeForm, 'OCTAHEDRON', {
    get: ShapeForm$OCTAHEDRON_getInstance
  });
  _.ShapeForm = ShapeForm;
  Object.defineProperty(ShapeColor, 'BLUE', {
    get: ShapeColor$BLUE_getInstance
  });
  Object.defineProperty(ShapeColor, 'GREEN', {
    get: ShapeColor$GREEN_getInstance
  });
  Object.defineProperty(ShapeColor, 'RED', {
    get: ShapeColor$RED_getInstance
  });
  Object.defineProperty(ShapeColor, 'YELLOW', {
    get: ShapeColor$YELLOW_getInstance
  });
  Object.defineProperty(ShapeColor, 'BLACK', {
    get: ShapeColor$BLACK_getInstance
  });
  Object.defineProperty(ShapeColor, 'WHITE', {
    get: ShapeColor$WHITE_getInstance
  });
  Object.defineProperty(ShapeColor, 'DARKGRAY', {
    get: ShapeColor$DARKGRAY_getInstance
  });
  _.ShapeColor = ShapeColor;
  Object.defineProperty(ShapeSize, 'SMALL', {
    get: ShapeSize$SMALL_getInstance
  });
  Object.defineProperty(ShapeSize, 'MEDIUM', {
    get: ShapeSize$MEDIUM_getInstance
  });
  Object.defineProperty(ShapeSize, 'LARGE', {
    get: ShapeSize$LARGE_getInstance
  });
  _.ShapeSize = ShapeSize;
  Object.defineProperty(ShapeSpeed, 'SLOW', {
    get: ShapeSpeed$SLOW_getInstance
  });
  Object.defineProperty(ShapeSpeed, 'MEDIUM', {
    get: ShapeSpeed$MEDIUM_getInstance
  });
  Object.defineProperty(ShapeSpeed, 'FAST', {
    get: ShapeSpeed$FAST_getInstance
  });
  _.ShapeSpeed = ShapeSpeed;
  $$importsForInline$$['korim-root-korim'] = $module$korim_root_korim;
  _.shapeConstructor_6nplsl$ = shapeConstructor;
  _.SymbolsBuilder = SymbolsBuilder;
  var package$utils = _.utils || (_.utils = {});
  package$utils.createRandomShapeBasedOnLevel_za3lpa$ = createRandomShapeBasedOnLevel;
  font = properties.Delegates.notNull_30y1fr$();
  WIDTH = 1920;
  HEIGHT = 1000;
  BOXTOPX = 120.0;
  BOXTOPY = 0.0;
  BOXWIDTH = 1800.0;
  BOXHEIGHT = 590.0;
  TR_WIDTH = 400.0;
  TR_HEIGHT = 250.0;
  TR_X0 = 420.0;
  TR_Y0 = 650.0;
  TR_SLIDER_SIZE = 20.0;
  TR_SLIDER_LINE = 4.0;
  KEYWIDTH = 200.0;
  KEYHEIGHT = 95.0;
  KEYBOARDX = 200;
  KEYBOARDY = 858;
  MARGIN = 6;
  ACCEPTY = 845.0;
  ACCEPTX = 1530.0;
  SYMBOL_SIZE = 48;
  FONT_SIZE = 50;
  PLAY_AGAIN_HEIGHT = 50.0;
  MAX_NUMBER = 5;
  MAX_SIZE = 3;
  MAX_SPEED = 3;
  MAX_COLOR = 6;
  MAX_SHAPE = 5;
  MAX_SYMBOLS = 4;
  cartoucheBackColor = color.Colors.get_61zpoe$('#0a1204ff');
  boxShapes = new Extra$PropertyThis(void 0, boxShapes$lambda);
  stageShapes = ArrayList_init();
  correctAnswers = 0;
  wrongAnswers = 0;
  gameTime = 0;
  nowStarting = L0;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('Physics', _);
  return _;
}));

//# sourceMappingURL=Physics.js.map
