(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kds-root-kds', 'kmem-root-kmem', 'klock-root-klock', 'korio-root-korio', 'korim-root-korim', 'korge-root-korge', 'korma-root-korma'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kds-root-kds'), require('kmem-root-kmem'), require('klock-root-klock'), require('korio-root-korio'), require('korim-root-korim'), require('korge-root-korge'), require('korma-root-korma'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-root-korge-dragonbones'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korge-root-korge-dragonbones'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korge-root-korge-dragonbones'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korge-root-korge-dragonbones'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korge-root-korge-dragonbones'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'korge-root-korge-dragonbones'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korge-root-korge-dragonbones'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-dragonbones'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korge-root-korge-dragonbones'.");
    }root['korge-root-korge-dragonbones'] = factory(typeof this['korge-root-korge-dragonbones'] === 'undefined' ? {} : this['korge-root-korge-dragonbones'], kotlin, this['kds-root-kds'], this['kmem-root-kmem'], this['klock-root-klock'], this['korio-root-korio'], this['korim-root-korim'], this['korge-root-korge'], this['korma-root-korma']);
  }
}(this, function (_, Kotlin, $module$kds_root_kds, $module$kmem_root_kmem, $module$klock_root_klock, $module$korio_root_korio, $module$korim_root_korim, $module$korge_root_korge, $module$korma_root_korma) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var FastStringMap = $module$kds_root_kds.com.soywiz.kds.FastStringMap_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var IntArrayList = $module$kds_root_kds.com.soywiz.kds.IntArrayList;
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Math_0 = Math;
  var math = Kotlin.kotlin.math;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var DateTime = $module$klock_root_klock.com.soywiz.klock.DateTime;
  var TimeSpan = $module$klock_root_klock.com.soywiz.klock.TimeSpan;
  var getCallableRef = Kotlin.getCallableRef;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var Comparator = Kotlin.kotlin.Comparator;
  var throwUPAE = Kotlin.throwUPAE;
  var DoubleArrayList = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList;
  var indexOf = Kotlin.kotlin.collections.indexOf_bv23uc$;
  var Pool_init = $module$kds_root_kds.com.soywiz.kds.Pool_init_rz0iom$;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var indexOf_0 = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var toChar = Kotlin.toChar;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var sliceInt16Buffer = $module$kmem_root_kmem.com.soywiz.kmem.sliceInt16Buffer_3gn6rj$;
  var sliceFloat32Buffer = $module$kmem_root_kmem.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$;
  var sliceUint16Buffer = $module$kmem_root_kmem.com.soywiz.kmem.sliceUint16Buffer_3gn6rj$;
  var NewUint8Buffer = $module$kmem_root_kmem.com.soywiz.kmem.NewUint8Buffer_qmgm5g$;
  var NewInt32Buffer = $module$kmem_root_kmem.com.soywiz.kmem.NewInt32Buffer_qmgm5g$;
  var json = $module$korio_root_korio.com.soywiz.korio.serialization.json;
  var Uint16Buffer = $module$kmem_root_kmem.com.soywiz.kmem.Uint16Buffer;
  var ArrayBuffer_init = ArrayBuffer;
  var Map = Kotlin.kotlin.collections.Map;
  var List = Kotlin.kotlin.collections.List;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var numberToDouble = Kotlin.numberToDouble;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var DoubleArrayList_init = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList_init_yqxtqz$;
  var IntArrayList_init = $module$kds_root_kds.com.soywiz.kds.IntArrayList_init_pmhfmb$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var indexOf_1 = Kotlin.kotlin.collections.indexOf_taaqy$;
  var sliceInt16BufferByteOffset = $module$kmem_root_kmem.com.soywiz.kmem.sliceInt16BufferByteOffset_3gn6rj$;
  var sliceFloat32BufferByteOffset = $module$kmem_root_kmem.com.soywiz.kmem.sliceFloat32BufferByteOffset_3gn6rj$;
  var sliceUint16BufferByteOffset = $module$kmem_root_kmem.com.soywiz.kmem.sliceUint16BufferByteOffset_3gn6rj$;
  var toShort = Kotlin.toShort;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init_pdl1vj$;
  var bitmap = $module$korim_root_korim.com.soywiz.korim.bitmap;
  var Image = $module$korge_root_korge.com.soywiz.korge.view.Image;
  var Graphics = $module$korge_root_korge.com.soywiz.korge.view.Graphics;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var circle = $module$korma_root_korma.com.soywiz.korma.geom.vector.circle_m5r0a8$;
  var rect = $module$korma_root_korma.com.soywiz.korma.geom.vector.rect_clsz36$;
  var Matrix = $module$korma_root_korma.com.soywiz.korma.geom.Matrix;
  var Container = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var Bitmap = $module$korim_root_korim.com.soywiz.korim.bitmap.Bitmap;
  var Mesh$DrawModes = $module$korge_root_korge.com.soywiz.korge.view.Mesh.DrawModes;
  var Mesh = $module$korge_root_korge.com.soywiz.korge.view.Mesh;
  var View = $module$korge_root_korge.com.soywiz.korge.view.View;
  var BlendMode = $module$korge_root_korge.com.soywiz.korge.view.BlendMode;
  var RGBA = $module$korim_root_korim.com.soywiz.korim.color.RGBA;
  var Uint16BufferAlloc = $module$kmem_root_kmem.com.soywiz.kmem.Uint16BufferAlloc_za3lpa$;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_2cbtc5$;
  var scale = $module$korge_root_korge.com.soywiz.korge.view.scale_2cbtc5$;
  var skew = $module$korge_root_korge.com.soywiz.korge.view.skew_2cbtc5$;
  var Rectangle = $module$korma_root_korma.com.soywiz.korma.geom.Rectangle;
  var BitmapSliceCompat = $module$korim_root_korim.com.soywiz.korim.bitmap.BitmapSliceCompat_qpf1ss$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var KDynamic = $module$korio_root_korio.com.soywiz.korio.dynamic.KDynamic;
  var readBitmapOptimized = $module$korim_root_korim.com.soywiz.korim.format.readBitmapOptimized_c6jndg$;
  var mipmaps = $module$korim_root_korim.com.soywiz.korim.bitmap.mipmaps_6tbmt4$;
  var get_baseName = $module$korio_root_korio.com.soywiz.korio.file.get_baseName_hsf53c$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  Animation.prototype = Object.create(BaseObject.prototype);
  Animation.prototype.constructor = Animation;
  AnimationState.prototype = Object.create(BaseObject.prototype);
  AnimationState.prototype.constructor = AnimationState;
  BlendState.prototype = Object.create(BaseObject.prototype);
  BlendState.prototype.constructor = BlendState;
  TimelineState.prototype = Object.create(BaseObject.prototype);
  TimelineState.prototype.constructor = TimelineState;
  TweenTimelineState.prototype = Object.create(TimelineState.prototype);
  TweenTimelineState.prototype.constructor = TweenTimelineState;
  SingleValueTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  SingleValueTimelineState.prototype.constructor = SingleValueTimelineState;
  DoubleValueTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  DoubleValueTimelineState.prototype.constructor = DoubleValueTimelineState;
  MutilpleValueTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  MutilpleValueTimelineState.prototype.constructor = MutilpleValueTimelineState;
  ActionTimelineState.prototype = Object.create(TimelineState.prototype);
  ActionTimelineState.prototype.constructor = ActionTimelineState;
  ZOrderTimelineState.prototype = Object.create(TimelineState.prototype);
  ZOrderTimelineState.prototype.constructor = ZOrderTimelineState;
  BoneAllTimelineState.prototype = Object.create(MutilpleValueTimelineState.prototype);
  BoneAllTimelineState.prototype.constructor = BoneAllTimelineState;
  BoneTranslateTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  BoneTranslateTimelineState.prototype.constructor = BoneTranslateTimelineState;
  BoneRotateTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  BoneRotateTimelineState.prototype.constructor = BoneRotateTimelineState;
  BoneScaleTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  BoneScaleTimelineState.prototype.constructor = BoneScaleTimelineState;
  SurfaceTimelineState.prototype = Object.create(MutilpleValueTimelineState.prototype);
  SurfaceTimelineState.prototype.constructor = SurfaceTimelineState;
  AlphaTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  AlphaTimelineState.prototype.constructor = AlphaTimelineState;
  SlotDisplayTimelineState.prototype = Object.create(TimelineState.prototype);
  SlotDisplayTimelineState.prototype.constructor = SlotDisplayTimelineState;
  SlotColorTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  SlotColorTimelineState.prototype.constructor = SlotColorTimelineState;
  SlotZIndexTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  SlotZIndexTimelineState.prototype.constructor = SlotZIndexTimelineState;
  DeformTimelineState.prototype = Object.create(MutilpleValueTimelineState.prototype);
  DeformTimelineState.prototype.constructor = DeformTimelineState;
  IKConstraintTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  IKConstraintTimelineState.prototype.constructor = IKConstraintTimelineState;
  AnimationProgressTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  AnimationProgressTimelineState.prototype.constructor = AnimationProgressTimelineState;
  AnimationWeightTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  AnimationWeightTimelineState.prototype.constructor = AnimationWeightTimelineState;
  AnimationParametersTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  AnimationParametersTimelineState.prototype.constructor = AnimationParametersTimelineState;
  Armature.prototype = Object.create(BaseObject.prototype);
  Armature.prototype.constructor = Armature;
  TransformObject.prototype = Object.create(BaseObject.prototype);
  TransformObject.prototype.constructor = TransformObject;
  Bone.prototype = Object.create(TransformObject.prototype);
  Bone.prototype.constructor = Bone;
  Constraint.prototype = Object.create(BaseObject.prototype);
  Constraint.prototype.constructor = Constraint;
  IKConstraint.prototype = Object.create(Constraint.prototype);
  IKConstraint.prototype.constructor = IKConstraint;
  PathConstraint.prototype = Object.create(Constraint.prototype);
  PathConstraint.prototype.constructor = PathConstraint;
  DisplayFrame.prototype = Object.create(BaseObject.prototype);
  DisplayFrame.prototype.constructor = DisplayFrame;
  Slot.prototype = Object.create(TransformObject.prototype);
  Slot.prototype.constructor = Slot;
  Surface.prototype = Object.create(Bone.prototype);
  Surface.prototype.constructor = Surface;
  ArmatureType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  ArmatureType$Companion.prototype.constructor = ArmatureType$Companion;
  ArmatureType.prototype = Object.create(Enum.prototype);
  ArmatureType.prototype.constructor = ArmatureType;
  DisplayType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  DisplayType$Companion.prototype.constructor = DisplayType$Companion;
  DisplayType.prototype = Object.create(Enum.prototype);
  DisplayType.prototype.constructor = DisplayType;
  BoundingBoxType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  BoundingBoxType$Companion.prototype.constructor = BoundingBoxType$Companion;
  BoundingBoxType.prototype = Object.create(Enum.prototype);
  BoundingBoxType.prototype.constructor = BoundingBoxType;
  ActionType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  ActionType$Companion.prototype.constructor = ActionType$Companion;
  ActionType.prototype = Object.create(Enum.prototype);
  ActionType.prototype.constructor = ActionType;
  BlendMode$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  BlendMode$Companion.prototype.constructor = BlendMode$Companion;
  BlendMode_0.prototype = Object.create(Enum.prototype);
  BlendMode_0.prototype.constructor = BlendMode_0;
  TweenType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  TweenType$Companion.prototype.constructor = TweenType$Companion;
  TweenType.prototype = Object.create(Enum.prototype);
  TweenType.prototype.constructor = TweenType;
  TimelineType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  TimelineType$Companion.prototype.constructor = TimelineType$Companion;
  TimelineType.prototype = Object.create(Enum.prototype);
  TimelineType.prototype.constructor = TimelineType;
  OffsetMode.prototype = Object.create(Enum.prototype);
  OffsetMode.prototype.constructor = OffsetMode;
  AnimationFadeOutMode$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  AnimationFadeOutMode$Companion.prototype.constructor = AnimationFadeOutMode$Companion;
  AnimationFadeOutMode.prototype = Object.create(Enum.prototype);
  AnimationFadeOutMode.prototype.constructor = AnimationFadeOutMode;
  AnimationBlendType.prototype = Object.create(Enum.prototype);
  AnimationBlendType.prototype.constructor = AnimationBlendType;
  AnimationBlendMode.prototype = Object.create(Enum.prototype);
  AnimationBlendMode.prototype.constructor = AnimationBlendMode;
  ConstraintType.prototype = Object.create(Enum.prototype);
  ConstraintType.prototype.constructor = ConstraintType;
  PositionMode.prototype = Object.create(Enum.prototype);
  PositionMode.prototype.constructor = PositionMode;
  SpacingMode.prototype = Object.create(Enum.prototype);
  SpacingMode.prototype.constructor = SpacingMode;
  RotateMode.prototype = Object.create(Enum.prototype);
  RotateMode.prototype.constructor = RotateMode;
  EventObject.prototype = Object.create(BaseObject.prototype);
  EventObject.prototype.constructor = EventObject;
  AnimationConfig.prototype = Object.create(BaseObject.prototype);
  AnimationConfig.prototype.constructor = AnimationConfig;
  AnimationData.prototype = Object.create(BaseObject.prototype);
  AnimationData.prototype.constructor = AnimationData;
  TimelineData.prototype = Object.create(BaseObject.prototype);
  TimelineData.prototype.constructor = TimelineData;
  AnimationTimelineData.prototype = Object.create(TimelineData.prototype);
  AnimationTimelineData.prototype.constructor = AnimationTimelineData;
  ArmatureData.prototype = Object.create(BaseObject.prototype);
  ArmatureData.prototype.constructor = ArmatureData;
  BoneData.prototype = Object.create(BaseObject.prototype);
  BoneData.prototype.constructor = BoneData;
  SurfaceData.prototype = Object.create(BoneData.prototype);
  SurfaceData.prototype.constructor = SurfaceData;
  SlotData.prototype = Object.create(BaseObject.prototype);
  SlotData.prototype.constructor = SlotData;
  BoundingBoxData.prototype = Object.create(BaseObject.prototype);
  BoundingBoxData.prototype.constructor = BoundingBoxData;
  RectangleBoundingBoxData.prototype = Object.create(BoundingBoxData.prototype);
  RectangleBoundingBoxData.prototype.constructor = RectangleBoundingBoxData;
  EllipseBoundingBoxData.prototype = Object.create(BoundingBoxData.prototype);
  EllipseBoundingBoxData.prototype.constructor = EllipseBoundingBoxData;
  PolygonBoundingBoxData.prototype = Object.create(BoundingBoxData.prototype);
  PolygonBoundingBoxData.prototype.constructor = PolygonBoundingBoxData;
  CanvasData.prototype = Object.create(BaseObject.prototype);
  CanvasData.prototype.constructor = CanvasData;
  ConstraintData.prototype = Object.create(BaseObject.prototype);
  ConstraintData.prototype.constructor = ConstraintData;
  IKConstraintData.prototype = Object.create(ConstraintData.prototype);
  IKConstraintData.prototype.constructor = IKConstraintData;
  PathConstraintData.prototype = Object.create(ConstraintData.prototype);
  PathConstraintData.prototype.constructor = PathConstraintData;
  DisplayData.prototype = Object.create(BaseObject.prototype);
  DisplayData.prototype.constructor = DisplayData;
  GeometryDisplayData.prototype = Object.create(DisplayData.prototype);
  GeometryDisplayData.prototype.constructor = GeometryDisplayData;
  ImageDisplayData.prototype = Object.create(DisplayData.prototype);
  ImageDisplayData.prototype.constructor = ImageDisplayData;
  ArmatureDisplayData.prototype = Object.create(DisplayData.prototype);
  ArmatureDisplayData.prototype.constructor = ArmatureDisplayData;
  MeshDisplayData.prototype = Object.create(GeometryDisplayData.prototype);
  MeshDisplayData.prototype.constructor = MeshDisplayData;
  BoundingBoxDisplayData.prototype = Object.create(DisplayData.prototype);
  BoundingBoxDisplayData.prototype.constructor = BoundingBoxDisplayData;
  PathDisplayData.prototype = Object.create(GeometryDisplayData.prototype);
  PathDisplayData.prototype.constructor = PathDisplayData;
  WeightData.prototype = Object.create(BaseObject.prototype);
  WeightData.prototype.constructor = WeightData;
  DragonBonesData.prototype = Object.create(BaseObject.prototype);
  DragonBonesData.prototype.constructor = DragonBonesData;
  SkinData.prototype = Object.create(BaseObject.prototype);
  SkinData.prototype.constructor = SkinData;
  TextureAtlasData.prototype = Object.create(BaseObject.prototype);
  TextureAtlasData.prototype.constructor = TextureAtlasData;
  TextureData.prototype = Object.create(BaseObject.prototype);
  TextureData.prototype.constructor = TextureData;
  UserData.prototype = Object.create(BaseObject.prototype);
  UserData.prototype.constructor = UserData;
  ActionData.prototype = Object.create(BaseObject.prototype);
  ActionData.prototype.constructor = ActionData;
  ObjectDataParser.prototype = Object.create(DataParser.prototype);
  ObjectDataParser.prototype.constructor = ObjectDataParser;
  BinaryDataParser.prototype = Object.create(ObjectDataParser.prototype);
  BinaryDataParser.prototype.constructor = BinaryDataParser;
  FrameValueType.prototype = Object.create(Enum.prototype);
  FrameValueType.prototype.constructor = FrameValueType;
  KorgeDbArmatureDisplay.prototype = Object.create(Container.prototype);
  KorgeDbArmatureDisplay.prototype.constructor = KorgeDbArmatureDisplay;
  KorgeDbFactory.prototype = Object.create(BaseFactory.prototype);
  KorgeDbFactory.prototype.constructor = KorgeDbFactory;
  KorgeDbSlot.prototype = Object.create(Slot.prototype);
  KorgeDbSlot.prototype.constructor = KorgeDbSlot;
  KorgeDbTextureAtlasData.prototype = Object.create(TextureAtlasData.prototype);
  KorgeDbTextureAtlasData.prototype.constructor = KorgeDbTextureAtlasData;
  KorgeDbTextureData.prototype = Object.create(TextureData.prototype);
  KorgeDbTextureData.prototype.constructor = KorgeDbTextureData;
  function Animation(pool) {
    BaseObject.call(this, pool);
    this.timeScale = 1.0;
    this._animationDirty_0 = false;
    this._inheritTimeScale_0 = 1.0;
    this._animationNames_0 = ArrayList_init();
    this._animationStates_0 = ArrayList_init();
    this._animations_0 = FastStringMap();
    this._blendStates_0 = FastStringMap();
    this._armature_0 = null;
    this._animationConfig_0 = null;
    this._lastAnimationState_0 = null;
  }
  Animation.prototype.toString = function () {
    return '[class dragonBones.Animation]';
  };
  Animation.prototype._onClear = function () {
    var tmp$;
    var $receiver = this._animationStates_0;
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)).returnToPool();
    }
    this._animations_0.clear();
    var $receiver_0 = this._blendStates_0;
    var mapIterator = $receiver_0.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var blendStates = ensureNotNull($receiver_0.get(v.value));
      var mapIterator_0 = blendStates.keys();
      while (true) {
        var v_0 = mapIterator_0.next();
        if (v_0.done)
          break;
        var kB = v_0.value;
        var tmp$_1;
        (tmp$_1 = blendStates.get(kB)) != null ? (tmp$_1.returnToPool(), Unit) : null;
      }
    }
    this._blendStates_0.clear();
    (tmp$ = this._animationConfig_0) != null ? (tmp$.returnToPool(), Unit) : null;
    this.timeScale = 1.0;
    this._animationDirty_0 = false;
    this._inheritTimeScale_0 = 1.0;
    this._animationNames_0.clear();
    this._animationStates_0.clear();
    this._armature_0 = null;
    this._animationConfig_0 = null;
    this._lastAnimationState_0 = null;
  };
  Animation.prototype._fadeOut_0 = function (animationConfig) {
    switch (animationConfig.fadeOutMode.name) {
      case 'SameLayer':
        var $receiver = this._animationStates_0;
        var tmp$;
        var n = 0;
        while (n < $receiver.size) {
          var animationState = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
          if (animationState._parent == null) {
            if (animationState.layer === animationConfig.layer) {
              animationState.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
            }}}

        break;
      case 'SameGroup':
        var $receiver_0 = this._animationStates_0;
        var tmp$_0;
        var n_0 = 0;
        while (n_0 < $receiver_0.size) {
          var animationState_0 = $receiver_0.get_za3lpa$((tmp$_0 = n_0, n_0 = tmp$_0 + 1 | 0, tmp$_0));
          if (animationState_0._parent == null) {
            if (equals(animationState_0.group, animationConfig.group)) {
              animationState_0.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
            }}}

        break;
      case 'SameLayerAndGroup':
        var $receiver_1 = this._animationStates_0;
        var tmp$_1;
        var n_1 = 0;
        while (n_1 < $receiver_1.size) {
          var animationState_1 = $receiver_1.get_za3lpa$((tmp$_1 = n_1, n_1 = tmp$_1 + 1 | 0, tmp$_1));
          if (animationState_1._parent == null) {
            if (animationState_1.layer === animationConfig.layer && equals(animationState_1.group, animationConfig.group)) {
              animationState_1.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
            }}}

        break;
      case 'All':
        var $receiver_2 = this._animationStates_0;
        var tmp$_2;
        var n_2 = 0;
        while (n_2 < $receiver_2.size) {
          var animationState_2 = $receiver_2.get_za3lpa$((tmp$_2 = n_2, n_2 = tmp$_2 + 1 | 0, tmp$_2));
          if (animationState_2._parent == null) {
            animationState_2.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
          }}

        break;
      case 'Single':
        break;
      default:break;
    }
  };
  Animation.prototype.init_9a3g6p$ = function (armature) {
    if (this._armature_0 != null) {
      return;
    }this._armature_0 = armature;
    this._animationConfig_0 = this.pool.animationConfig.borrow();
  };
  Animation.prototype.advanceTime_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var passedTime_0 = passedTime;
    if (passedTime_0 < 0.0) {
      passedTime_0 = -passedTime_0;
    }if (ensureNotNull(this._armature_0).inheritAnimation && ((tmp$ = this._armature_0) != null ? tmp$._parent : null) != null) {
      this._inheritTimeScale_0 = ensureNotNull(ensureNotNull(ensureNotNull(this._armature_0)._parent)._armature).animation._inheritTimeScale_0 * this.timeScale;
    } else {
      this._inheritTimeScale_0 = this.timeScale;
    }
    if (this._inheritTimeScale_0 !== 1.0) {
      passedTime_0 *= this._inheritTimeScale_0;
    }var $receiver = this._blendStates_0;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var blendStates = ensureNotNull($receiver.get(v.value));
      var mapIterator_0 = blendStates.keys();
      while (true) {
        var v_0 = mapIterator_0.next();
        if (v_0.done)
          break;
        ensureNotNull(blendStates.get(v_0.value)).reset();
      }
    }
    var animationStateCount = get_length_1(this._animationStates_0);
    if (animationStateCount === 1) {
      var animationState = this._animationStates_0.get_za3lpa$(0);
      if (animationState._fadeState > 0 && animationState._subFadeState > 0) {
        animationState.returnToPool();
        set_length_1(this._animationStates_0, 0);
        this._lastAnimationState_0 = null;
      } else {
        var animationData = animationState.animationData;
        var cacheFrameRate = animationData.cacheFrameRate;
        if (this._animationDirty_0 && cacheFrameRate > 0.0) {
          this._animationDirty_0 = false;
          var $receiver_0 = ensureNotNull(this._armature_0).getBones();
          var tmp$_3;
          var n = 0;
          while (n < $receiver_0.size) {
            var bone = $receiver_0.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
            bone._cachedFrameIndices = animationData.getBoneCachedFrameIndices_61zpoe$(bone.name);
          }
          var $receiver_1 = ensureNotNull(this._armature_0).getSlots();
          var tmp$_4;
          var n_0 = 0;
          loop_label: while (n_0 < $receiver_1.size) {
            var slot = $receiver_1.get_za3lpa$((tmp$_4 = n_0, n_0 = tmp$_4 + 1 | 0, tmp$_4));
            callback$break: do {
              if (slot.displayFrameCount > 0) {
                var rawDisplayData = slot.getDisplayFrameAt_za3lpa$(0).rawDisplayData;
                if (rawDisplayData != null && equals(rawDisplayData.parent, ensureNotNull(this._armature_0).armatureData.defaultSkin)) {
                  slot._cachedFrameIndices = animationData.getSlotCachedFrameIndices_61zpoe$(slot.name);
                  break callback$break;
                }}slot._cachedFrameIndices = null;
            }
             while (false);
          }
        }animationState.advanceTime_lu1900$(passedTime_0, cacheFrameRate);
      }
    } else if (animationStateCount > 1) {
      var r = 0;
      for (var i = 0; i < animationStateCount; i++) {
        var animationState_0 = this._animationStates_0.get_za3lpa$(i);
        if (animationState_0._fadeState > 0 && animationState_0._subFadeState > 0) {
          r = r + 1 | 0;
          animationState_0.returnToPool();
          this._animationDirty_0 = true;
          if (equals(this._lastAnimationState_0, animationState_0)) {
            this._lastAnimationState_0 = null;
          }} else {
          if (r > 0) {
            this._animationStates_0.set_wxm5ur$(i - r | 0, animationState_0);
          }animationState_0.advanceTime_lu1900$(passedTime_0, 0.0);
        }
        if (i === (animationStateCount - 1 | 0) && r > 0) {
          tmp$_0 = this._animationStates_0;
          set_length_1(tmp$_0, get_length_1(tmp$_0) - r | 0);
          if (this._lastAnimationState_0 == null && get_length_1(this._animationStates_0) > 0) {
            this._lastAnimationState_0 = this._animationStates_0.get_za3lpa$(get_length_1(this._animationStates_0) - 1 | 0);
          }}}
      (tmp$_1 = this._armature_0) != null ? (tmp$_1._cacheFrameIndex = -1) : null;
    } else {
      (tmp$_2 = this._armature_0) != null ? (tmp$_2._cacheFrameIndex = -1) : null;
    }
  };
  Animation.prototype.reset = function () {
    var tmp$;
    var $receiver = this._animationStates_0;
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)).returnToPool();
    }
    this._animationDirty_0 = false;
    (tmp$ = this._animationConfig_0) != null ? (tmp$.clear(), Unit) : null;
    this._animationStates_0.clear();
    this._lastAnimationState_0 = null;
  };
  Animation.prototype.stop_pdl1vj$ = function (animationName) {
    if (animationName === void 0)
      animationName = null;
    if (animationName != null) {
      var animationState = this.getState_bm4lxs$(animationName);
      if (animationState != null) {
        animationState.stop();
      }} else {
      var $receiver = this._animationStates_0;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).stop();
      }
    }
  };
  Animation.prototype.playConfig_1e5lcy$ = function (animationConfig) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var animationName = animationConfig.animation;
    if (!this._animations_0.has(animationName)) {
      console_getInstance().warn_vqirvp$(['Non-existent animation.\n', 'DragonBones name: ' + ((tmp$_1 = (tmp$_0 = (tmp$ = this._armature_0) != null ? tmp$.armatureData : null) != null ? tmp$_0.parent : null) != null ? tmp$_1.name : null), 'Armature name: ' + ((tmp$_2 = this._armature_0) != null ? tmp$_2.name : null), 'Animation name: ' + animationName]);
      return null;
    }var animationData = ensureNotNull(this._animations_0.get(animationName));
    if (animationConfig.fadeOutMode === AnimationFadeOutMode$Single_getInstance()) {
      var tmp$_5;
      tmp$_5 = this._animationStates_0.iterator();
      while (tmp$_5.hasNext()) {
        var element = tmp$_5.next();
        if (element._fadeState < 1 && element.layer === animationConfig.layer && equals(element.animationData, animationData)) {
          return element;
        }}
    }if (this._animationStates_0.size === 0) {
      animationConfig.fadeInTime = 0.0;
    } else if (animationConfig.fadeInTime < 0.0) {
      animationConfig.fadeInTime = animationData.fadeInTime;
    }if (animationConfig.fadeOutTime < 0.0) {
      animationConfig.fadeOutTime = animationConfig.fadeInTime;
    }if (animationConfig.timeScale <= -100.0) {
      animationConfig.timeScale = 1.0 / animationData.scale;
    }if (animationData.frameCount > 0) {
      if (animationConfig.position < 0.0) {
        animationConfig.position = animationConfig.position % animationData.duration;
        animationConfig.position = animationData.duration - animationConfig.position;
      } else if (animationConfig.position === animationData.duration) {
        animationConfig.position = animationConfig.position - 1.0E-6;
      } else if (animationConfig.position > animationData.duration) {
        animationConfig.position = animationConfig.position % animationData.duration;
      }if (animationConfig.duration > 0.0 && animationConfig.position + animationConfig.duration > animationData.duration) {
        animationConfig.duration = animationData.duration - animationConfig.position;
      }if (animationConfig.playTimes < 0) {
        animationConfig.playTimes = animationData.playTimes;
      }} else {
      animationConfig.playTimes = 1;
      animationConfig.position = 0.0;
      if (animationConfig.duration > 0.0) {
        animationConfig.duration = 0.0;
      }}
    if (animationConfig.duration === 0.0) {
      animationConfig.duration = -1.0;
    }this._fadeOut_0(animationConfig);
    var animationState = this.pool.animationState.borrow();
    animationState.init_wjllgj$(ensureNotNull(this._armature_0), animationData, animationConfig);
    this._animationDirty_0 = true;
    (tmp$_3 = this._armature_0) != null ? (tmp$_3._cacheFrameIndex = -1) : null;
    if (this._animationStates_0.size > 0) {
      var added = false;
      var l = this._animationStates_0.size;
      tmp$_4 = this._animationStates_0.size;
      for (var i = 0; i < tmp$_4; i++) {
        if (animationState.layer > this._animationStates_0.get_za3lpa$(i).layer) {
          added = true;
          splice(this._animationStates_0, i, 0, [animationState]);
          break;
        } else if (i !== (l - 1 | 0) && animationState.layer > this._animationStates_0.get_za3lpa$(i + 1 | 0).layer) {
          added = true;
          splice(this._animationStates_0, i + 1 | 0, 0, [animationState]);
          break;
        }}
      if (!added) {
        this._animationStates_0.add_11rb$(animationState);
      }} else {
      this._animationStates_0.add_11rb$(animationState);
    }
    var $receiver = ensureNotNull(this._armature_0).getSlots();
    var tmp$_6;
    var n = 0;
    while (n < $receiver.size) {
      var childArmature = $receiver.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6)).childArmature;
      if (childArmature != null && childArmature.inheritAnimation && childArmature.animation.hasAnimation_61zpoe$(animationName) && childArmature.animation.getState_bm4lxs$(animationName) == null) {
        childArmature.animation.fadeIn_qtlk36$(animationName);
      }}
    var mapIterator = animationData.animationTimelines.keys();
    loop_label: while (true) {
      var v = mapIterator.next();
      if (v.done)
        break loop_label;
      var k = v.value;
      callback$break: do {
        var tmp$_7;
        tmp$_7 = this.fadeIn_qtlk36$(k, 0.0, 1, animationState.layer, '', AnimationFadeOutMode$Single_getInstance());
        if (tmp$_7 == null) {
          break callback$break;
        }var childAnimationState = tmp$_7;
        var timelines = animationData.animationTimelines.get(k);
        childAnimationState.actionEnabled = false;
        childAnimationState.resetToPose = false;
        childAnimationState.stop();
        animationState.addState_uxc1bv$(childAnimationState, timelines);
        var index = this._animationStates_0.indexOf_11rb$(animationState);
        var childIndex = this._animationStates_0.indexOf_11rb$(childAnimationState);
        if (childIndex < index) {
          splice(this._animationStates_0, index, 1, []);
          splice(this._animationStates_0, childIndex, 0, [animationState]);
        }}
       while (false);
    }
    this._lastAnimationState_0 = animationState;
    return animationState;
  };
  Animation.prototype.play_9d67ql$ = function (animationName, playTimes) {
    if (animationName === void 0)
      animationName = null;
    if (playTimes === void 0)
      playTimes = -1;
    var tmp$, tmp$_0, tmp$_1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName != null ? animationName : '';
    var tmp$_2 = animationName != null;
    if (tmp$_2) {
      tmp$_2 = animationName.length > 0;
    }if (tmp$_2) {
      this.playConfig_1e5lcy$(_animationConfig1);
    } else if (this._lastAnimationState_0 == null) {
      var defaultAnimation = (tmp$_0 = (tmp$ = this._armature_0) != null ? tmp$.armatureData : null) != null ? tmp$_0.defaultAnimation : null;
      if (defaultAnimation != null) {
        _animationConfig1.animation = defaultAnimation.name;
        this.playConfig_1e5lcy$(_animationConfig1);
      }} else if (!ensureNotNull(this._lastAnimationState_0).isPlaying && !ensureNotNull(this._lastAnimationState_0).isCompleted) {
      (tmp$_1 = this._lastAnimationState_0) != null ? (tmp$_1.play(), Unit) : null;
    } else {
      _animationConfig1.animation = ensureNotNull(this._lastAnimationState_0).name;
      this.playConfig_1e5lcy$(_animationConfig1);
    }
    return this._lastAnimationState_0;
  };
  Animation.prototype.fadeIn_qtlk36$ = function (animationName, fadeInTime, playTimes, layer, group, fadeOutMode) {
    if (fadeInTime === void 0)
      fadeInTime = -1.0;
    if (playTimes === void 0)
      playTimes = -1;
    if (layer === void 0)
      layer = 0;
    if (group === void 0)
      group = null;
    if (fadeOutMode === void 0)
      fadeOutMode = AnimationFadeOutMode$SameLayerAndGroup_getInstance();
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.fadeOutMode = fadeOutMode;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.layer = layer;
    _animationConfig1.fadeInTime = fadeInTime;
    _animationConfig1.animation = animationName;
    _animationConfig1.group = group != null ? group : '';
    return this.playConfig_1e5lcy$(_animationConfig1);
  };
  Animation.prototype.gotoAndPlayByTime_euqqgu$ = function (animationName, time, playTimes) {
    if (time === void 0)
      time = 0.0;
    if (playTimes === void 0)
      playTimes = -1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.position = time;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName;
    return this.playConfig_1e5lcy$(_animationConfig1);
  };
  Animation.prototype.gotoAndPlayByFrame_3m52m6$ = function (animationName, frame, playTimes) {
    if (frame === void 0)
      frame = 0;
    if (playTimes === void 0)
      playTimes = -1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName;
    var animationData = this._animations_0.has(animationName) ? this._animations_0.get(animationName) : null;
    if (animationData != null) {
      _animationConfig1.position = animationData.frameCount > 0 ? animationData.duration * frame / animationData.frameCount : 0.0;
    }return this.playConfig_1e5lcy$(ensureNotNull(_animationConfig1));
  };
  Animation.prototype.gotoAndPlayByProgress_euqqgu$ = function (animationName, progress, playTimes) {
    if (progress === void 0)
      progress = 0.0;
    if (playTimes === void 0)
      playTimes = -1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName;
    var animationData = this._animations_0.has(animationName) ? this._animations_0.get(animationName) : null;
    if (animationData != null) {
      _animationConfig1.position = animationData.duration * (progress > 0.0 ? progress : 0.0);
    }return this.playConfig_1e5lcy$(ensureNotNull(_animationConfig1));
  };
  Animation.prototype.gotoAndStopByTime_io5o9c$ = function (animationName, time) {
    if (time === void 0)
      time = 0.0;
    var animationState = this.gotoAndPlayByTime_euqqgu$(animationName, time, 1);
    if (animationState != null) {
      animationState.stop();
    }return animationState;
  };
  Animation.prototype.gotoAndStopByFrame_bm4lxs$ = function (animationName, frame) {
    if (frame === void 0)
      frame = 0;
    var animationState = this.gotoAndPlayByFrame_3m52m6$(animationName, frame, 1);
    if (animationState != null) {
      animationState.stop();
    }return animationState;
  };
  Animation.prototype.gotoAndStopByProgress_io5o9c$ = function (animationName, progress) {
    if (progress === void 0)
      progress = 0.0;
    var animationState = this.gotoAndPlayByProgress_euqqgu$(animationName, progress, 1);
    animationState != null ? (animationState.stop(), Unit) : null;
    return animationState;
  };
  Animation.prototype.getBlendState_8oivov$ = function (type, name, target) {
    if (!this._blendStates_0.has(type)) {
      var $receiver = this._blendStates_0;
      var value = FastStringMap();
      $receiver.set(type, value);
    }var blendStates = ensureNotNull(this._blendStates_0.get(type));
    if (!blendStates.has(name)) {
      var res = this.pool.blendState.borrow();
      var blendState = res;
      blendStates.set(name, res);
      blendState.targetTransformObject = target;
      if (Kotlin.isType(target, Slot))
        blendState.targetSlot = target;
      if (Kotlin.isType(target, Surface))
        blendState.targetSurface = target;
      if (Kotlin.isType(target, Bone))
        blendState.targetBone = target;
    }return ensureNotNull(blendStates.get(name));
  };
  Animation.prototype.getState_bm4lxs$ = function (animationName, layer) {
    if (layer === void 0)
      layer = -1;
    for (var i = this._animationStates_0.size - 1 | 0; i >= 0; i--) {
      var animationState = this._animationStates_0.get_za3lpa$(i);
      if (equals(animationState.name, animationName) && (layer < 0 || animationState.layer === layer)) {
        return animationState;
      }}
    return null;
  };
  Animation.prototype.hasAnimation_61zpoe$ = function (animationName) {
    return this._animations_0.has(animationName);
  };
  Animation.prototype.getStates = function () {
    return this._animationStates_0;
  };
  Object.defineProperty(Animation.prototype, 'isPlaying', {
    get: function () {
      var $receiver = this._animationStates_0;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        if ($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).isPlaying) {
          return true;
        }}
      return false;
    }
  });
  Object.defineProperty(Animation.prototype, 'isCompleted', {
    get: function () {
      var $receiver = this._animationStates_0;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        if (!$receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).isCompleted) {
          return false;
        }}
      return get_length_1(this._animationStates_0) > 0;
    }
  });
  Object.defineProperty(Animation.prototype, 'lastAnimationName', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._lastAnimationState_0) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Animation.prototype, 'animationNames', {
    get: function () {
      return this._animationNames_0;
    }
  });
  Object.defineProperty(Animation.prototype, 'animations', {
    get: function () {
      return this._animations_0;
    },
    set: function (value) {
      if (equals(this._animations_0, value)) {
        return;
      }set_length_1(this._animationNames_0, 0);
      this._animations_0.clear();
      var mapIterator = value.keys();
      while (true) {
        var v = mapIterator.next();
        if (v.done)
          break;
        var k = v.value;
        push(this._animationNames_0, k);
        var tmp$ = this._animations_0;
        var value_0 = ensureNotNull(value.get(k));
        tmp$.set(k, value_0);
      }
    }
  });
  Object.defineProperty(Animation.prototype, 'animationConfig', {
    get: function () {
      var tmp$;
      (tmp$ = this._animationConfig_0) != null ? (tmp$.clear(), Unit) : null;
      return ensureNotNull(this._animationConfig_0);
    }
  });
  Object.defineProperty(Animation.prototype, 'lastAnimationState', {
    get: function () {
      return ensureNotNull(this._lastAnimationState_0);
    }
  });
  Animation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animation',
    interfaces: [BaseObject]
  };
  function AnimationState(pool) {
    BaseObject.call(this, pool);
    this.actionEnabled = false;
    this.additive = false;
    this.displayControl = false;
    this.resetToPose = false;
    this.blendType = AnimationBlendType$None_getInstance();
    this.playTimes = 1;
    this.layer = 0;
    this.timeScale = 1.0;
    this.parameterX = 0.0;
    this.parameterY = 0.0;
    this.positionX = 0.0;
    this.positionY = 0.0;
    this.autoFadeOutTime = 0.0;
    this.fadeTotalTime = 0.0;
    this.name = '';
    this.group = '';
    this._timelineDirty_0 = 2;
    this._playheadState = 0;
    this._fadeState = -1;
    this._subFadeState = -1;
    this._position = 0.0;
    this._duration = 0.0;
    this._weight_0 = 1.0;
    this._fadeTime_0 = 0.0;
    this._time_0 = 0.0;
    this._fadeProgress = 0.0;
    this._weightResult = 0.0;
    this._boneMask_0 = ArrayList_init();
    this._boneTimelines_0 = ArrayList_init();
    this._boneBlendTimelines_0 = ArrayList_init();
    this._slotTimelines_0 = ArrayList_init();
    this._slotBlendTimelines_0 = ArrayList_init();
    this._constraintTimelines_0 = ArrayList_init();
    this._animationTimelines_0 = ArrayList_init();
    this._poseTimelines_0 = ArrayList_init();
    this._animationData_0 = null;
    this._armature_0 = null;
    this._actionTimeline = null;
    this._zOrderTimeline_0 = null;
    this._activeChildA_0 = null;
    this._activeChildB_0 = null;
    this._parent = null;
  }
  AnimationState.prototype.toString = function () {
    return '[class dragonBones.AnimationState]';
  };
  AnimationState.prototype._onClear = function () {
    var tmp$, tmp$_0;
    var $receiver = this._boneTimelines_0;
    var tmp$_1;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1)).returnToPool();
    }
    var $receiver_0 = this._boneBlendTimelines_0;
    var tmp$_2;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      $receiver_0.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2)).returnToPool();
    }
    var $receiver_1 = this._slotTimelines_0;
    var tmp$_3;
    var n_1 = 0;
    while (n_1 < $receiver_1.size) {
      $receiver_1.get_za3lpa$((tmp$_3 = n_1, n_1 = tmp$_3 + 1 | 0, tmp$_3)).returnToPool();
    }
    var $receiver_2 = this._slotBlendTimelines_0;
    var tmp$_4;
    var n_2 = 0;
    while (n_2 < $receiver_2.size) {
      $receiver_2.get_za3lpa$((tmp$_4 = n_2, n_2 = tmp$_4 + 1 | 0, tmp$_4)).returnToPool();
    }
    var $receiver_3 = this._constraintTimelines_0;
    var tmp$_5;
    var n_3 = 0;
    while (n_3 < $receiver_3.size) {
      $receiver_3.get_za3lpa$((tmp$_5 = n_3, n_3 = tmp$_5 + 1 | 0, tmp$_5)).returnToPool();
    }
    var $receiver_4 = this._animationTimelines_0;
    var tmp$_6;
    var n_4 = 0;
    while (n_4 < $receiver_4.size) {
      var timeline = $receiver_4.get_za3lpa$((tmp$_6 = n_4, n_4 = tmp$_6 + 1 | 0, tmp$_6));
      var animationState = ensureNotNull(timeline.targetAnimationState);
      if (equals(animationState._parent, this)) {
        animationState._fadeState = 1;
        animationState._subFadeState = 1;
        animationState._parent = null;
      }timeline.returnToPool();
    }
    (tmp$ = this._actionTimeline) != null ? (tmp$.returnToPool(), Unit) : null;
    (tmp$_0 = this._zOrderTimeline_0) != null ? (tmp$_0.returnToPool(), Unit) : null;
    this.actionEnabled = false;
    this.additive = false;
    this.displayControl = false;
    this.resetToPose = false;
    this.blendType = AnimationBlendType$None_getInstance();
    this.playTimes = 1;
    this.layer = 0;
    this.timeScale = 1.0;
    this._weight_0 = 1.0;
    this.parameterX = 0.0;
    this.parameterY = 0.0;
    this.positionX = 0.0;
    this.positionY = 0.0;
    this.autoFadeOutTime = 0.0;
    this.fadeTotalTime = 0.0;
    this.name = '';
    this.group = '';
    this._timelineDirty_0 = 2;
    this._playheadState = 0;
    this._fadeState = -1;
    this._subFadeState = -1;
    this._position = 0.0;
    this._duration = 0.0;
    this._fadeTime_0 = 0.0;
    this._time_0 = 0.0;
    this._fadeProgress = 0.0;
    this._weightResult = 0.0;
    this._boneMask_0.clear();
    this._boneTimelines_0.clear();
    this._boneBlendTimelines_0.clear();
    this._slotTimelines_0.clear();
    this._slotBlendTimelines_0.clear();
    this._constraintTimelines_0.clear();
    this._animationTimelines_0.clear();
    this._poseTimelines_0.clear();
    this._animationData_0 = null;
    this._armature_0 = null;
    this._actionTimeline = null;
    this._zOrderTimeline_0 = null;
    this._activeChildA_0 = null;
    this._activeChildB_0 = null;
    this._parent = null;
  };
  AnimationState.prototype._updateTimelines_0 = function () {
    var $receiver = ensureNotNull(this._armature_0)._constraints;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var constraint = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      var tmp$_0, tmp$_1;
      var timelineDatas = (tmp$_0 = this._animationData_0) != null ? tmp$_0.getConstraintTimelines_61zpoe$(constraint.name) : null;
      if (timelineDatas != null) {
        var tmp$_2;
        var n_0 = 0;
        while (n_0 < timelineDatas.size) {
          var timelineData = timelineDatas.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2));
          var tmp$_3;
          if (equals(timelineData.type, TimelineType$IKConstraint_getInstance())) {
            var timeline = this.pool.iKConstraintTimelineState.borrow();
            timeline.targetIKConstraint = Kotlin.isType(tmp$_3 = constraint, IKConstraint) ? tmp$_3 : throwCCE();
            timeline.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._constraintTimelines_0, timeline);
          }}
      } else if (this.resetToPose) {
        var timeline_0 = this.pool.iKConstraintTimelineState.borrow();
        timeline_0.targetIKConstraint = Kotlin.isType(tmp$_1 = constraint, IKConstraint) ? tmp$_1 : throwCCE();
        timeline_0.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
        push(this._constraintTimelines_0, timeline_0);
        push(this._poseTimelines_0, timeline_0);
      }}
  };
  AnimationState.prototype._updateBoneAndSlotTimelines_0 = function () {
    var boneTimelines = FastStringMap();
    var $receiver = this._boneTimelines_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var timeline = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      var tmp$_0;
      var timelineName = ensureNotNull(ensureNotNull(timeline.targetBlendState).targetBone).name;
      if (!boneTimelines.has(timelineName)) {
        var value = ArrayList_init();
        boneTimelines.set(timelineName, value);
      }(tmp$_0 = boneTimelines.get(timelineName)) != null ? (push(tmp$_0, timeline), Unit) : null;
    }
    var $receiver_0 = this._boneBlendTimelines_0;
    var tmp$_1;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      var timeline_0 = $receiver_0.get_za3lpa$((tmp$_1 = n_0, n_0 = tmp$_1 + 1 | 0, tmp$_1));
      var tmp$_2;
      var timelineName_0 = ensureNotNull(ensureNotNull(timeline_0.targetBlendState).targetBone).name;
      if (!boneTimelines.has(timelineName_0)) {
        var value_0 = ArrayList_init();
        boneTimelines.set(timelineName_0, value_0);
      }(tmp$_2 = boneTimelines.get(timelineName_0)) != null ? (push(tmp$_2, timeline_0), Unit) : null;
    }
    var $receiver_1 = ensureNotNull(this._armature_0).getBones();
    var tmp$_3;
    var n_1 = 0;
    loop_label: while (n_1 < $receiver_1.size) {
      var bone = $receiver_1.get_za3lpa$((tmp$_3 = n_1, n_1 = tmp$_3 + 1 | 0, tmp$_3));
      callback$break: do {
        var tmp$_4, tmp$_5;
        var timelineName_1 = bone.name;
        if (!this.containsBoneMask_61zpoe$(timelineName_1)) {
          break callback$break;
        }if (boneTimelines.has(timelineName_1)) {
          boneTimelines.delete(timelineName_1);
        } else {
          var timelineDatas = (tmp$_4 = this._animationData_0) != null ? tmp$_4.getBoneTimelines_61zpoe$(timelineName_1) : null;
          var blendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().BONE_TRANSFORM, bone.name, bone);
          if (timelineDatas != null) {
            var tmp$_6;
            var n_2 = 0;
            while (n_2 < timelineDatas.size) {
              var timelineData = timelineDatas.get_za3lpa$((tmp$_6 = n_2, n_2 = tmp$_6 + 1 | 0, tmp$_6));
              switch (timelineData.type.name) {
                case 'BoneAll':
                  var timeline_1 = this.pool.boneAllTimelineState.borrow();
                  timeline_1.targetBlendState = blendState;
                  timeline_1.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                  push(this._boneTimelines_0, timeline_1);
                  break;
                case 'BoneTranslate':
                  var timeline_2 = this.pool.boneTranslateTimelineState.borrow();
                  timeline_2.targetBlendState = blendState;
                  timeline_2.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                  push(this._boneTimelines_0, timeline_2);
                  break;
                case 'BoneRotate':
                  var timeline_3 = this.pool.boneRotateTimelineState.borrow();
                  timeline_3.targetBlendState = blendState;
                  timeline_3.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                  push(this._boneTimelines_0, timeline_3);
                  break;
                case 'BoneScale':
                  var timeline_4 = this.pool.boneScaleTimelineState.borrow();
                  timeline_4.targetBlendState = blendState;
                  timeline_4.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                  push(this._boneTimelines_0, timeline_4);
                  break;
                case 'BoneAlpha':
                  var timeline_5 = this.pool.alphaTimelineState.borrow();
                  timeline_5.targetBlendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().BONE_ALPHA, bone.name, bone);
                  timeline_5.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                  push(this._boneBlendTimelines_0, timeline_5);
                  break;
                case 'Surface':
                  var timeline_6 = this.pool.surfaceTimelineState.borrow();
                  timeline_6.targetBlendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().SURFACE, bone.name, bone);
                  timeline_6.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                  push(this._boneBlendTimelines_0, timeline_6);
                  break;
                default:break;
              }
            }
          } else if (this.resetToPose) {
            if (((tmp$_5 = bone._boneData) != null ? tmp$_5.isBone : null) === true) {
              var timeline_7 = this.pool.boneAllTimelineState.borrow();
              timeline_7.targetBlendState = blendState;
              timeline_7.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
              push(this._boneTimelines_0, timeline_7);
              push(this._poseTimelines_0, timeline_7);
            } else {
              var timeline_8 = this.pool.surfaceTimelineState.borrow();
              timeline_8.targetBlendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().SURFACE, bone.name, bone);
              timeline_8.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
              push(this._boneBlendTimelines_0, timeline_8);
              push(this._poseTimelines_0, timeline_8);
            }
          }}
      }
       while (false);
    }
    var mapIterator = boneTimelines.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var k = v.value;
      var $receiver_2 = ensureNotNull(boneTimelines.get(k));
      var tmp$_7;
      var n_3 = 0;
      while (n_3 < $receiver_2.size) {
        var timeline_9 = $receiver_2.get_za3lpa$((tmp$_7 = n_3, n_3 = tmp$_7 + 1 | 0, tmp$_7));
        var index = this._boneTimelines_0.indexOf_11rb$(timeline_9);
        if (index >= 0) {
          splice(this._boneTimelines_0, index, 1, []);
          timeline_9.returnToPool();
        }index = this._boneBlendTimelines_0.indexOf_11rb$(timeline_9);
        if (index >= 0) {
          splice(this._boneBlendTimelines_0, index, 1, []);
          timeline_9.returnToPool();
        }}
    }
    var slotTimelines = FastStringMap();
    var ffdFlags = new IntArrayList();
    var $receiver_3 = this._slotTimelines_0;
    var tmp$_8;
    var n_4 = 0;
    while (n_4 < $receiver_3.size) {
      var timeline_10 = $receiver_3.get_za3lpa$((tmp$_8 = n_4, n_4 = tmp$_8 + 1 | 0, tmp$_8));
      var tmp$_9;
      var timelineName_2 = ensureNotNull(timeline_10.targetSlot).name;
      if (!slotTimelines.has(timelineName_2)) {
        var value_1 = ArrayList_init();
        slotTimelines.set(timelineName_2, value_1);
      }(tmp$_9 = slotTimelines.get(timelineName_2)) != null ? (push(tmp$_9, timeline_10), Unit) : null;
    }
    var $receiver_4 = this._slotBlendTimelines_0;
    var tmp$_10;
    var n_5 = 0;
    while (n_5 < $receiver_4.size) {
      var timeline_11 = $receiver_4.get_za3lpa$((tmp$_10 = n_5, n_5 = tmp$_10 + 1 | 0, tmp$_10));
      var tmp$_11;
      var timelineName_3 = ensureNotNull(ensureNotNull(timeline_11.targetBlendState).targetSlot).name;
      if (!slotTimelines.has(timelineName_3)) {
        var value_2 = ArrayList_init();
        slotTimelines.set(timelineName_3, value_2);
      }(tmp$_11 = slotTimelines.get(timelineName_3)) != null ? (push(tmp$_11, timeline_11), Unit) : null;
    }
    var $receiver_5 = ensureNotNull(this._armature_0).getSlots();
    var tmp$_12;
    var n_6 = 0;
    loop_label: while (n_6 < $receiver_5.size) {
      var slot = $receiver_5.get_za3lpa$((tmp$_12 = n_6, n_6 = tmp$_12 + 1 | 0, tmp$_12));
      callback$break: do {
        var tmp$_13, tmp$_14;
        var boneName = slot.parent.name;
        if (!this.containsBoneMask_61zpoe$(boneName)) {
          break callback$break;
        }var timelineName_4 = slot.name;
        if (slotTimelines.has(timelineName_4)) {
          slotTimelines.delete(timelineName_4);
        } else {
          var displayIndexFlag = {v: false};
          var colorFlag = {v: false};
          set_length(ffdFlags, 0);
          var timelineDatas_0 = (tmp$_13 = this._animationData_0) != null ? tmp$_13.getSlotTimelines_61zpoe$(timelineName_4) : null;
          if (timelineDatas_0 != null) {
            var tmp$_15;
            var n_7 = 0;
            while (n_7 < timelineDatas_0.size) {
              var timelineData_0 = timelineDatas_0.get_za3lpa$((tmp$_15 = n_7, n_7 = tmp$_15 + 1 | 0, tmp$_15));
              switch (timelineData_0.type.name) {
                case 'SlotDisplay':
                  var timeline_12 = this.pool.slotDisplayTimelineState.borrow();
                  timeline_12.targetSlot = slot;
                  timeline_12.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                  push(this._slotTimelines_0, timeline_12);
                  displayIndexFlag.v = true;
                  break;
                case 'SlotZIndex':
                  var timeline_13 = this.pool.slotZIndexTimelineState.borrow();
                  timeline_13.targetBlendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().SLOT_Z_INDEX, slot.name, slot);
                  timeline_13.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                  push(this._slotBlendTimelines_0, timeline_13);
                  break;
                case 'SlotColor':
                  var timeline_14 = this.pool.slotColorTimelineState.borrow();
                  timeline_14.targetSlot = slot;
                  timeline_14.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                  push(this._slotTimelines_0, timeline_14);
                  colorFlag.v = true;
                  break;
                case 'SlotDeform':
                  var timeline_15 = this.pool.deformTimelineState.borrow();
                  timeline_15.targetBlendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().SLOT_DEFORM, slot.name, slot);
                  timeline_15.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                  if (timeline_15.targetBlendState != null) {
                    push(this._slotBlendTimelines_0, timeline_15);
                    push_1(ffdFlags, timeline_15.geometryOffset);
                  } else {
                    timeline_15.returnToPool();
                  }

                  break;
                case 'SlotAlpha':
                  var timeline_16 = this.pool.alphaTimelineState.borrow();
                  timeline_16.targetBlendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().SLOT_ALPHA, slot.name, slot);
                  timeline_16.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                  push(this._slotBlendTimelines_0, timeline_16);
                  break;
                default:break;
              }
            }
          }if (this.resetToPose) {
            if (!displayIndexFlag.v) {
              var timeline_17 = this.pool.slotDisplayTimelineState.borrow();
              timeline_17.targetSlot = slot;
              timeline_17.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
              push(this._slotTimelines_0, timeline_17);
              push(this._poseTimelines_0, timeline_17);
            }if (!colorFlag.v) {
              var timeline_18 = this.pool.slotColorTimelineState.borrow();
              timeline_18.targetSlot = slot;
              timeline_18.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
              push(this._slotTimelines_0, timeline_18);
              push(this._poseTimelines_0, timeline_18);
            }tmp$_14 = slot.displayFrameCount;
            for (var i = 0; i < tmp$_14; i++) {
              var displayFrame = slot.getDisplayFrameAt_za3lpa$(i);
              if (displayFrame.deformVertices.length === 0) {
                continue;
              }var geometryData = displayFrame.getGeometryData();
              if (geometryData != null && ffdFlags.indexOf_11rb$(geometryData.offset) < 0) {
                var timeline_19 = this.pool.deformTimelineState.borrow();
                timeline_19.geometryOffset = geometryData.offset;
                timeline_19.displayFrame = displayFrame;
                timeline_19.targetBlendState = ensureNotNull(this._armature_0).animation.getBlendState_8oivov$(BlendState$Companion_getInstance().SLOT_DEFORM, slot.name, slot);
                timeline_19.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
                push(this._slotBlendTimelines_0, timeline_19);
                push(this._poseTimelines_0, timeline_19);
              }}
          }}
      }
       while (false);
    }
    var mapIterator_0 = slotTimelines.keys();
    while (true) {
      var v_0 = mapIterator_0.next();
      if (v_0.done)
        break;
      var slotTimelines2 = ensureNotNull(slotTimelines.get(v_0.value));
      var tmp$_16;
      var n_8 = 0;
      while (n_8 < slotTimelines2.size) {
        var timeline_20 = slotTimelines2.get_za3lpa$((tmp$_16 = n_8, n_8 = tmp$_16 + 1 | 0, tmp$_16));
        var index_0 = this._slotTimelines_0.indexOf_11rb$(timeline_20);
        if (index_0 >= 0) {
          splice(this._slotTimelines_0, index_0, 1, []);
          timeline_20.returnToPool();
        }index_0 = this._slotBlendTimelines_0.indexOf_11rb$(timeline_20);
        if (index_0 >= 0) {
          splice(this._slotBlendTimelines_0, index_0, 1, []);
          timeline_20.returnToPool();
        }}
    }
  };
  AnimationState.prototype._advanceFadeTime_0 = function (passedTime) {
    var passedTime_0 = passedTime;
    var isFadeOut = this._fadeState > 0;
    if (this._subFadeState < 0) {
      this._subFadeState = 0;
      var eventActive = this._parent == null && this.actionEnabled;
      if (eventActive) {
        var eventType = isFadeOut ? EventObject$Companion_getInstance().FADE_OUT : EventObject$Companion_getInstance().FADE_IN;
        if (ensureNotNull(this._armature_0).eventDispatcher.hasDBEventListener_61zpoe$(eventType)) {
          var eventObject = this.pool.eventObject.borrow();
          eventObject.type = eventType;
          eventObject.armature = ensureNotNull(this._armature_0);
          eventObject.animationState = this;
          ensureNotNull(ensureNotNull(this._armature_0).eventDispatcher).queueEvent_vah34q$(eventObject);
        }}}if (passedTime_0 < 0.0) {
      passedTime_0 = -passedTime_0;
    }this._fadeTime_0 = this._fadeTime_0 + passedTime_0;
    if (this._fadeTime_0 >= this.fadeTotalTime) {
      this._subFadeState = 1;
      this._fadeProgress = isFadeOut ? 0.0 : 1.0;
    } else if (this._fadeTime_0 > 0.0) {
      this._fadeProgress = isFadeOut ? 1.0 - this._fadeTime_0 / this.fadeTotalTime : this._fadeTime_0 / this.fadeTotalTime;
    } else {
      this._fadeProgress = isFadeOut ? 1.0 : 0.0;
    }
    if (this._subFadeState > 0) {
      if (!isFadeOut) {
        this._playheadState = this._playheadState | 1;
        this._fadeState = 0;
      }var eventActive_0 = this._parent == null && this.actionEnabled;
      if (eventActive_0) {
        var eventType_0 = isFadeOut ? EventObject$Companion_getInstance().FADE_OUT_COMPLETE : EventObject$Companion_getInstance().FADE_IN_COMPLETE;
        if (ensureNotNull(this._armature_0).eventDispatcher.hasDBEventListener_61zpoe$(eventType_0)) {
          var eventObject_0 = this.pool.eventObject.borrow();
          eventObject_0.type = eventType_0;
          eventObject_0.armature = ensureNotNull(this._armature_0);
          eventObject_0.animationState = this;
          ensureNotNull(ensureNotNull(this._armature_0).eventDispatcher).queueEvent_vah34q$(eventObject_0);
        }}}};
  AnimationState.prototype.init_wjllgj$ = function (armature, animationData, animationConfig) {
    var tmp$;
    if (this._armature_0 != null) {
      return;
    }this._armature_0 = armature;
    this._animationData_0 = animationData;
    this.resetToPose = animationConfig.resetToPose;
    this.additive = animationConfig.additive;
    this.displayControl = animationConfig.displayControl;
    this.actionEnabled = animationConfig.actionEnabled;
    this.blendType = animationData.blendType;
    this.layer = animationConfig.layer;
    this.playTimes = animationConfig.playTimes;
    this.timeScale = animationConfig.timeScale;
    this.fadeTotalTime = animationConfig.fadeInTime;
    this.autoFadeOutTime = animationConfig.autoFadeOutTime;
    this.name = animationConfig.name.length > 0 ? animationConfig.name : animationConfig.animation;
    this.group = animationConfig.group;
    this._weight_0 = animationConfig.weight;
    if (animationConfig.pauseFadeIn) {
      this._playheadState = 2;
    } else {
      this._playheadState = 3;
    }
    if (animationConfig.duration < 0.0) {
      this._position = 0.0;
      this._duration = ensureNotNull(this._animationData_0).duration;
      if (animationConfig.position !== 0.0) {
        if (this.timeScale >= 0.0) {
          this._time_0 = animationConfig.position;
        } else {
          this._time_0 = animationConfig.position - this._duration;
        }
      } else {
        this._time_0 = 0.0;
      }
    } else {
      this._position = animationConfig.position;
      this._duration = animationConfig.duration;
      this._time_0 = 0.0;
    }
    if (this.timeScale < 0.0 && this._time_0 === 0.0) {
      this._time_0 = -1.0E-6;
    }if (this.fadeTotalTime <= 0.0) {
      this._fadeProgress = 0.999999;
    }if (get_length_1(animationConfig.boneMask) > 0) {
      set_lengthSet_1(this._boneMask_0, get_length_1(animationConfig.boneMask));
      tmp$ = get_length_1(this._boneMask_0);
      for (var i = 0; i < tmp$; i++) {
        this._boneMask_0.set_wxm5ur$(i, animationConfig.boneMask.get_za3lpa$(i));
      }
    }this._actionTimeline = this.pool.actionTimelineState.borrow();
    ensureNotNull(this._actionTimeline).init_b5te3t$(ensureNotNull(this._armature_0), this, ensureNotNull(this._animationData_0).actionTimeline);
    ensureNotNull(this._actionTimeline)._currentTime = this._time_0;
    if (ensureNotNull(this._actionTimeline)._currentTime < 0.0) {
      ensureNotNull(this._actionTimeline)._currentTime = this._duration - ensureNotNull(this._actionTimeline)._currentTime;
    }if (ensureNotNull(this._animationData_0).zOrderTimeline != null) {
      this._zOrderTimeline_0 = this.pool.zOrderTimelineState.borrow();
      ensureNotNull(this._zOrderTimeline_0).init_b5te3t$(ensureNotNull(this._armature_0), this, ensureNotNull(this._animationData_0).zOrderTimeline);
    }};
  AnimationState.prototype.advanceTime_lu1900$ = function (passedTime, cacheFrameRate) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var passedTime_0 = passedTime;
    if (this._fadeState !== 0 || this._subFadeState !== 0) {
      this._advanceFadeTime_0(passedTime_0);
    }if (this._playheadState === 3) {
      if (this.timeScale !== 1.0) {
        passedTime_0 *= this.timeScale;
      }this._time_0 = this._time_0 + passedTime_0;
    }if (this._timelineDirty_0 !== 0) {
      if (this._timelineDirty_0 === 2) {
        this._updateTimelines_0();
      }this._timelineDirty_0 = 0;
      this._updateBoneAndSlotTimelines_0();
    }var isBlendDirty = this._fadeState !== 0 || this._subFadeState === 0;
    var isCacheEnabled = this._fadeState === 0 && cacheFrameRate > 0.0;
    var isUpdateTimeline = true;
    var isUpdateBoneTimeline = true;
    var time = this._time_0;
    this._weightResult = this._weight_0 * this._fadeProgress;
    if (this._parent != null) {
      this._weightResult = this._weightResult * ensureNotNull(this._parent)._weightResult;
    }if (ensureNotNull(this._actionTimeline).playState <= 0) {
      (tmp$ = this._actionTimeline) != null ? (tmp$.update_14dthe$(time), Unit) : null;
    }if (this._weight_0 === 0.0) {
      return;
    }if (isCacheEnabled) {
      var internval = cacheFrameRate * 2.0;
      var tmp$_9 = ensureNotNull(this._actionTimeline);
      var x = ensureNotNull(this._actionTimeline)._currentTime * internval;
      tmp$_9._currentTime = Math_0.floor(x) / internval;
    }if (this._zOrderTimeline_0 != null && ensureNotNull(this._zOrderTimeline_0).playState <= 0) {
      (tmp$_0 = this._zOrderTimeline_0) != null ? (tmp$_0.update_14dthe$(time), Unit) : null;
    }if (isCacheEnabled) {
      var x_0 = ensureNotNull(this._actionTimeline)._currentTime * cacheFrameRate;
      var cacheFrameIndex = numberToInt(Math_0.floor(x_0));
      if (((tmp$_1 = this._armature_0) != null ? tmp$_1._cacheFrameIndex : null) === cacheFrameIndex) {
        isUpdateTimeline = false;
        isUpdateBoneTimeline = false;
      } else {
        (tmp$_2 = this._armature_0) != null ? (tmp$_2._cacheFrameIndex = cacheFrameIndex) : null;
        if (ensureNotNull(this._animationData_0).cachedFrames.get_za3lpa$(cacheFrameIndex)) {
          isUpdateBoneTimeline = false;
        } else {
          ensureNotNull(this._animationData_0).cachedFrames.set_wxm5ur$(cacheFrameIndex, true);
        }
      }
    }if (isUpdateTimeline) {
      var isBlend = false;
      var prevTarget = null;
      if (isUpdateBoneTimeline) {
        tmp$_3 = get_length_1(this._boneTimelines_0);
        for (var i = 0; i < tmp$_3; i++) {
          var timeline = this._boneTimelines_0.get_za3lpa$(i);
          if (timeline.playState <= 0) {
            timeline.update_14dthe$(time);
          }if (!equals(timeline.targetBlendState, prevTarget)) {
            var blendState = timeline.targetBlendState;
            isBlend = ensureNotNull(blendState).update_ojq8y2$(this);
            prevTarget = blendState;
            if (blendState.dirty === 1) {
              var pose = ensureNotNull(blendState.targetBone).animationPose;
              pose.x = 0.0;
              pose.y = 0.0;
              pose.rotation = 0.0;
              pose.skew = 0.0;
              pose.scaleX = 1.0;
              pose.scaleY = 1.0;
            }}if (isBlend) {
            timeline.blend_6taknv$(isBlendDirty);
          }}
      }tmp$_4 = get_length_1(this._boneBlendTimelines_0);
      for (var i_0 = 0; i_0 < tmp$_4; i_0++) {
        var timeline_0 = this._boneBlendTimelines_0.get_za3lpa$(i_0);
        if (timeline_0.playState <= 0) {
          timeline_0.update_14dthe$(time);
        }if (ensureNotNull(timeline_0.targetBlendState).update_ojq8y2$(this)) {
          timeline_0.blend_6taknv$(isBlendDirty);
        }}
      if (this.displayControl) {
        tmp$_5 = get_length_1(this._slotTimelines_0);
        for (var i_1 = 0; i_1 < tmp$_5; i_1++) {
          var timeline_1 = this._slotTimelines_0.get_za3lpa$(i_1);
          if (timeline_1.playState <= 0) {
            var slot = timeline_1.targetSlot;
            var displayController = ensureNotNull(slot).displayController;
            if (displayController == null || equals(displayController, this.name) || equals(displayController, this.group)) {
              timeline_1.update_14dthe$(time);
            }}}
      }tmp$_6 = get_length_1(this._slotBlendTimelines_0);
      for (var i_2 = 0; i_2 < tmp$_6; i_2++) {
        var timeline_2 = this._slotBlendTimelines_0.get_za3lpa$(i_2);
        if (timeline_2.playState <= 0) {
          var blendState_0 = timeline_2.targetBlendState;
          timeline_2.update_14dthe$(time);
          if (ensureNotNull(blendState_0).update_ojq8y2$(this)) {
            timeline_2.blend_6taknv$(isBlendDirty);
          }}}
      tmp$_7 = get_length_1(this._constraintTimelines_0);
      for (var i_3 = 0; i_3 < tmp$_7; i_3++) {
        var timeline_3 = this._constraintTimelines_0.get_za3lpa$(i_3);
        if (timeline_3.playState <= 0) {
          timeline_3.update_14dthe$(time);
        }}
      if (get_lengthSet_1(this._animationTimelines_0) > 0) {
        var dL = 100.0;
        var dR = 100.0;
        var leftState = null;
        var rightState = null;
        tmp$_8 = get_length_1(this._animationTimelines_0);
        for (var i_4 = 0; i_4 < tmp$_8; i_4++) {
          var timeline_4 = this._animationTimelines_0.get_za3lpa$(i_4);
          if (timeline_4.playState <= 0) {
            timeline_4.update_14dthe$(time);
          }if (this.blendType === AnimationBlendType$E1D_getInstance()) {
            var animationState = timeline_4.targetAnimationState;
            var d = this.parameterX - ensureNotNull(animationState).positionX;
            if (d >= 0.0) {
              if (d < dL) {
                dL = d;
                leftState = animationState;
              }} else {
              if (-d < dR) {
                dR = -d;
                rightState = animationState;
              }}
          }}
        if (leftState != null) {
          if (!equals(this._activeChildA_0, leftState)) {
            if (this._activeChildA_0 != null) {
              ensureNotNull(this._activeChildA_0).weight = 0.0;
            }this._activeChildA_0 = leftState;
            ensureNotNull(this._activeChildA_0).activeTimeline();
          }if (!equals(this._activeChildB_0, rightState)) {
            if (this._activeChildB_0 != null) {
              ensureNotNull(this._activeChildB_0).weight = 0.0;
            }this._activeChildB_0 = rightState;
          }leftState.weight = dR / (dL + dR);
          if (rightState != null) {
            rightState.weight = 1.0 - leftState.weight;
          }}}}if (this._fadeState === 0) {
      if (this._subFadeState > 0) {
        this._subFadeState = 0;
        if (get_lengthSet_1(this._poseTimelines_0) > 0) {
          var $receiver = this._poseTimelines_0;
          var tmp$_10;
          var n = 0;
          loop_label: while (n < $receiver.size) {
            var timeline_5 = $receiver.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
            callback$break: do {
              var index = this._boneTimelines_0.indexOf_11rb$(timeline_5);
              if (index >= 0) {
                splice(this._boneTimelines_0, index, 1, []);
                timeline_5.returnToPool();
                break callback$break;
              }index = this._boneBlendTimelines_0.indexOf_11rb$(timeline_5);
              if (index >= 0) {
                splice(this._boneBlendTimelines_0, index, 1, []);
                timeline_5.returnToPool();
                break callback$break;
              }index = this._slotTimelines_0.indexOf_11rb$(timeline_5);
              if (index >= 0) {
                splice(this._slotTimelines_0, index, 1, []);
                timeline_5.returnToPool();
                break callback$break;
              }index = this._slotBlendTimelines_0.indexOf_11rb$(timeline_5);
              if (index >= 0) {
                splice(this._slotBlendTimelines_0, index, 1, []);
                timeline_5.returnToPool();
                break callback$break;
              }index = this._constraintTimelines_0.indexOf_11rb$(timeline_5);
              if (index >= 0) {
                splice(this._constraintTimelines_0, index, 1, []);
                timeline_5.returnToPool();
              }}
             while (false);
          }
          set_lengthSet_1(this._poseTimelines_0, 0);
        }}if (ensureNotNull(this._actionTimeline).playState > 0) {
        if (this.autoFadeOutTime >= 0.0) {
          this.fadeOut_8555vt$(this.autoFadeOutTime);
        }}}};
  AnimationState.prototype.play = function () {
    this._playheadState = 3;
  };
  AnimationState.prototype.stop = function () {
    this._playheadState = this._playheadState & 1;
  };
  AnimationState.prototype.fadeOut_8555vt$ = function (fadeOutTime, pausePlayhead) {
    if (pausePlayhead === void 0)
      pausePlayhead = true;
    var fadeOutTime_0 = fadeOutTime;
    if (fadeOutTime_0 < 0.0) {
      fadeOutTime_0 = 0.0;
    }if (pausePlayhead) {
      this._playheadState = this._playheadState & 2;
    }if (this._fadeState > 0) {
      if (fadeOutTime_0 > this.fadeTotalTime - this._fadeTime_0) {
        return;
      }} else {
      this._fadeState = 1;
      this._subFadeState = -1;
      if (fadeOutTime_0 <= 0.0 || this._fadeProgress <= 0.0) {
        this._fadeProgress = 1.0E-6;
      }var $receiver = this._boneTimelines_0;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).fadeOut();
      }
      var $receiver_0 = this._boneBlendTimelines_0;
      var tmp$_0;
      var n_0 = 0;
      while (n_0 < $receiver_0.size) {
        $receiver_0.get_za3lpa$((tmp$_0 = n_0, n_0 = tmp$_0 + 1 | 0, tmp$_0)).fadeOut();
      }
      var $receiver_1 = this._slotTimelines_0;
      var tmp$_1;
      var n_1 = 0;
      while (n_1 < $receiver_1.size) {
        $receiver_1.get_za3lpa$((tmp$_1 = n_1, n_1 = tmp$_1 + 1 | 0, tmp$_1)).fadeOut();
      }
      var $receiver_2 = this._slotBlendTimelines_0;
      var tmp$_2;
      var n_2 = 0;
      while (n_2 < $receiver_2.size) {
        $receiver_2.get_za3lpa$((tmp$_2 = n_2, n_2 = tmp$_2 + 1 | 0, tmp$_2)).fadeOut();
      }
      var $receiver_3 = this._constraintTimelines_0;
      var tmp$_3;
      var n_3 = 0;
      while (n_3 < $receiver_3.size) {
        $receiver_3.get_za3lpa$((tmp$_3 = n_3, n_3 = tmp$_3 + 1 | 0, tmp$_3)).fadeOut();
      }
      var $receiver_4 = this._animationTimelines_0;
      var tmp$_4;
      var n_4 = 0;
      while (n_4 < $receiver_4.size) {
        var timeline = $receiver_4.get_za3lpa$((tmp$_4 = n_4, n_4 = tmp$_4 + 1 | 0, tmp$_4));
        timeline.fadeOut();
        var animaitonState = timeline.targetAnimationState;
        ensureNotNull(animaitonState).fadeOut_8555vt$(999999.0, true);
      }
    }
    this.displayControl = false;
    this.fadeTotalTime = this._fadeProgress > 1.0E-6 ? fadeOutTime_0 / this._fadeProgress : 0.0;
    this._fadeTime_0 = this.fadeTotalTime * (1.0 - this._fadeProgress);
  };
  AnimationState.prototype.containsBoneMask_61zpoe$ = function (boneName) {
    return get_lengthSet_1(this._boneMask_0) === 0 || this._boneMask_0.indexOf_11rb$(boneName) >= 0;
  };
  AnimationState.prototype.addBoneMask_ivxn3r$ = function (boneName, recursive) {
    if (recursive === void 0)
      recursive = true;
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = this._armature_0) != null ? tmp$.getBone_pdl1vj$(boneName) : null;
    if (tmp$_0 == null) {
      return;
    }var currentBone = tmp$_0;
    if (this._boneMask_0.indexOf_11rb$(boneName) < 0) {
      push(this._boneMask_0, boneName);
    }if (recursive) {
      var $receiver = ensureNotNull(this._armature_0).getBones();
      var tmp$_1;
      var n = 0;
      while (n < $receiver.size) {
        var bone = $receiver.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
        if (this._boneMask_0.indexOf_11rb$(bone.name) < 0 && currentBone.contains_vcc4uy$(bone)) {
          push(this._boneMask_0, bone.name);
        }}
    }this._timelineDirty_0 = 1;
  };
  AnimationState.prototype.removeBoneMask_ivxn3r$ = function (boneName, recursive) {
    if (recursive === void 0)
      recursive = true;
    var tmp$;
    var index = this._boneMask_0.indexOf_11rb$(boneName);
    if (index >= 0) {
      splice(this._boneMask_0, index, 1, []);
    }if (recursive) {
      var currentBone = (tmp$ = this._armature_0) != null ? tmp$.getBone_pdl1vj$(boneName) : null;
      if (currentBone != null) {
        var bones = ensureNotNull(this._armature_0).getBones();
        if (get_lengthSet_1(this._boneMask_0) > 0) {
          var tmp$_0;
          var n = 0;
          while (n < bones.size) {
            var bone = bones.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
            var index_0 = this._boneMask_0.indexOf_11rb$(bone.name);
            if (index_0 >= 0 && currentBone.contains_vcc4uy$(bone)) {
              splice(this._boneMask_0, index_0, 1, []);
            }}
        } else {
          var tmp$_1;
          var n_0 = 0;
          loop_label: while (n_0 < bones.size) {
            var bone_0 = bones.get_za3lpa$((tmp$_1 = n_0, n_0 = tmp$_1 + 1 | 0, tmp$_1));
            callback$break: do {
              if (equals(bone_0, currentBone)) {
                break callback$break;
              }if (!currentBone.contains_vcc4uy$(bone_0)) {
                push(this._boneMask_0, bone_0.name);
              }}
             while (false);
          }
        }
      }}this._timelineDirty_0 = 1;
  };
  AnimationState.prototype.removeAllBoneMask = function () {
    set_lengthSet_1(this._boneMask_0, 0);
    this._timelineDirty_0 = 1;
  };
  AnimationState.prototype.addState_uxc1bv$ = function (animationState, timelineDatas) {
    if (timelineDatas === void 0)
      timelineDatas = null;
    if (timelineDatas != null) {
      var tmp$;
      var n = 0;
      while (n < timelineDatas.size) {
        var timelineData = timelineDatas.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
        var tmp$_0;
        switch (timelineData.type.name) {
          case 'AnimationProgress':
            var timeline = this.pool.animationProgressTimelineState.borrow();
            timeline.targetAnimationState = animationState;
            timeline.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._animationTimelines_0, timeline);
            if (this.blendType !== AnimationBlendType$None_getInstance()) {
              var animaitonTimelineData = Kotlin.isType(tmp$_0 = timelineData, AnimationTimelineData) ? tmp$_0 : throwCCE();
              animationState.positionX = animaitonTimelineData.x;
              animationState.positionY = animaitonTimelineData.y;
              animationState.weight = 0.0;
            }
            animationState._parent = this;
            this.resetToPose = false;
            break;
          case 'AnimationWeight':
            var timeline_0 = this.pool.animationWeightTimelineState.borrow();
            timeline_0.targetAnimationState = animationState;
            timeline_0.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._animationTimelines_0, timeline_0);
            break;
          case 'AnimationParameter':
            var timeline_1 = this.pool.animationParametersTimelineState.borrow();
            timeline_1.targetAnimationState = animationState;
            timeline_1.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._animationTimelines_0, timeline_1);
            break;
          default:break;
        }
      }
    }if (animationState._parent == null) {
      animationState._parent = this;
    }};
  AnimationState.prototype.activeTimeline = function () {
    var $receiver = this._slotTimelines_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var timeline = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      timeline.dirty = true;
      timeline._currentTime = -1.0;
    }
  };
  Object.defineProperty(AnimationState.prototype, 'isFadeIn', {
    get: function () {
      return this._fadeState < 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isFadeOut', {
    get: function () {
      return this._fadeState > 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isFadeComplete', {
    get: function () {
      return this._fadeState === 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isPlaying', {
    get: function () {
      return (this._playheadState & 2) !== 0 && ensureNotNull(this._actionTimeline).playState <= 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isCompleted', {
    get: function () {
      return ensureNotNull(this._actionTimeline).playState > 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'currentPlayTimes', {
    get: function () {
      return ensureNotNull(this._actionTimeline).currentPlayTimes;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'totalTime', {
    get: function () {
      return this._duration;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'currentTime', {
    get: function () {
      return ensureNotNull(this._actionTimeline)._currentTime;
    },
    set: function (value) {
      var tmp$;
      var value_0 = value;
      var currentPlayTimes = ensureNotNull(this._actionTimeline).currentPlayTimes - (ensureNotNull(this._actionTimeline).playState > 0 ? 1 : 0) | 0;
      if (value_0 < 0 || this._duration < value_0) {
        value_0 = value_0 % this._duration + currentPlayTimes * this._duration;
        if (value_0 < 0) {
          value_0 += this._duration;
        }}if (this.playTimes > 0 && currentPlayTimes === (this.playTimes - 1 | 0) && value_0 === this._duration && this._parent == null) {
        value_0 = this._duration - 1.0E-6;
      }if (this._time_0 === value_0) {
        return;
      }this._time_0 = value_0;
      ensureNotNull(this._actionTimeline).setCurrentTime_14dthe$(this._time_0);
      (tmp$ = this._zOrderTimeline_0) != null ? (tmp$.playState = -1) : null;
      var $receiver = this._boneTimelines_0;
      var tmp$_0;
      var n = 0;
      while (n < $receiver.size) {
        $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)).playState = -1;
      }
      var $receiver_0 = this._slotTimelines_0;
      var tmp$_1;
      var n_0 = 0;
      while (n_0 < $receiver_0.size) {
        $receiver_0.get_za3lpa$((tmp$_1 = n_0, n_0 = tmp$_1 + 1 | 0, tmp$_1)).playState = -1;
      }
    }
  });
  Object.defineProperty(AnimationState.prototype, 'weight', {
    get: function () {
      return this._weight_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      if (this._weight_0 === value)
        return;
      this._weight_0 = value;
      tmp$ = this._boneTimelines_0.size;
      for (var n = 0; n < tmp$; n++)
        this._boneTimelines_0.get_za3lpa$(n).dirty = true;
      tmp$_0 = this._boneBlendTimelines_0.size;
      for (var n_0 = 0; n_0 < tmp$_0; n_0++)
        this._boneBlendTimelines_0.get_za3lpa$(n_0).dirty = true;
      tmp$_1 = this._slotBlendTimelines_0.size;
      for (var n_1 = 0; n_1 < tmp$_1; n_1++)
        this._slotBlendTimelines_0.get_za3lpa$(n_1).dirty = true;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'animationData', {
    get: function () {
      return ensureNotNull(this._animationData_0);
    }
  });
  AnimationState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationState',
    interfaces: [BaseObject]
  };
  function BlendState(pool) {
    BlendState$Companion_getInstance();
    BaseObject.call(this, pool);
    this.dirty = 0;
    this.layer = 0;
    this.leftWeight = 0.0;
    this.layerWeight = 0.0;
    this.blendWeight = 0.0;
    this.targetSlot = null;
    this.targetBone = null;
    this.targetSurface = null;
    this.targetTransformObject = null;
  }
  function BlendState$Companion() {
    BlendState$Companion_instance = this;
    this.BONE_TRANSFORM = 'boneTransform';
    this.BONE_ALPHA = 'boneAlpha';
    this.SURFACE = 'surface';
    this.SLOT_DEFORM = 'slotDeform';
    this.SLOT_ALPHA = 'slotAlpha';
    this.SLOT_Z_INDEX = 'slotZIndex';
  }
  BlendState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BlendState$Companion_instance = null;
  function BlendState$Companion_getInstance() {
    if (BlendState$Companion_instance === null) {
      new BlendState$Companion();
    }return BlendState$Companion_instance;
  }
  BlendState.prototype.toString = function () {
    return '[class dragonBones.BlendState]';
  };
  Object.defineProperty(BlendState.prototype, 'targetCommon', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = this.targetSlot) != null ? tmp$ : this.targetBone) != null ? tmp$_0 : this.targetSurface) != null ? tmp$_1 : this.targetTransformObject;
    }
  });
  BlendState.prototype._onClear = function () {
    this.reset();
    this.targetSlot = null;
    this.targetBone = null;
    this.targetSurface = null;
    this.targetTransformObject = null;
  };
  BlendState.prototype.reset = function () {
    this.dirty = 0;
    this.layer = 0;
    this.leftWeight = 0.0;
    this.layerWeight = 0.0;
    this.blendWeight = 0.0;
  };
  BlendState.prototype.update_ojq8y2$ = function (animationState) {
    var animationLayer = animationState.layer;
    var animationWeight = animationState._weightResult;
    if (this.dirty > 0) {
      if (this.leftWeight > 0.0) {
        if (this.layer !== animationLayer) {
          if (this.layerWeight >= this.leftWeight) {
            this.dirty = this.dirty + 1 | 0;
            this.layer = animationLayer;
            this.leftWeight = 0.0;
            this.blendWeight = 0.0;
            return false;
          }this.layer = animationLayer;
          this.leftWeight = this.leftWeight - this.layerWeight;
          this.layerWeight = 0.0;
        }animationWeight *= this.leftWeight;
        this.dirty = this.dirty + 1 | 0;
        this.blendWeight = animationWeight;
        this.layerWeight = this.layerWeight + this.blendWeight;
        return true;
      }return false;
    }this.dirty = this.dirty + 1 | 0;
    this.layer = animationLayer;
    this.leftWeight = 1.0;
    this.blendWeight = animationWeight;
    this.layerWeight = animationWeight;
    return true;
  };
  BlendState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendState',
    interfaces: [BaseObject]
  };
  function TimelineState(pool) {
    BaseObject.call(this, pool);
    this.dirty = false;
    this.playState = -1;
    this.currentPlayTimes = -1;
    this._currentTime = -1.0;
    this.targetAnimationState = null;
    this.targetBlendState = null;
    this.targetSlot = null;
    this.targetIKConstraint = null;
    this._isTween = false;
    this._valueOffset = 0;
    this._frameValueOffset = 0;
    this._frameOffset = 0;
    this._frameRate = 0;
    this._frameCount = 0;
    this._frameIndex = -1;
    this._frameRateR = 0.0;
    this._position = 0.0;
    this._duration = 0.0;
    this._timeScale = 1.0;
    this._timeOffset = 0.0;
    this._animationData = null;
    this._timelineData = null;
    this._armature = null;
    this._animationState = null;
    this._actionTimeline = null;
    this._timelineArray = null;
    this._frameArray = null;
    this._valueArray = null;
    this._frameIndices = null;
  }
  TimelineState.prototype._onClear = function () {
    this.dirty = false;
    this.playState = -1;
    this.currentPlayTimes = -1;
    this._currentTime = -1.0;
    this.targetAnimationState = null;
    this.targetBlendState = null;
    this.targetSlot = null;
    this.targetIKConstraint = null;
    this._isTween = false;
    this._valueOffset = 0;
    this._frameValueOffset = 0;
    this._frameOffset = 0;
    this._frameRate = 0;
    this._frameCount = 0;
    this._frameIndex = -1;
    this._frameRateR = 0.0;
    this._position = 0.0;
    this._duration = 0.0;
    this._timeScale = 1.0;
    this._timeOffset = 0.0;
    this._animationData = null;
    this._timelineData = null;
    this._armature = null;
    this._animationState = null;
    this._actionTimeline = null;
    this._frameArray = null;
    this._valueArray = null;
    this._timelineArray = null;
    this._frameIndices = null;
  };
  TimelineState.prototype._setCurrentTime_14dthe$ = function (passedTime) {
    var passedTime_0 = passedTime;
    var prevState = this.playState;
    var prevPlayTimes = this.currentPlayTimes;
    var prevTime = this._currentTime;
    if (this._actionTimeline != null && this._frameCount <= 1) {
      this.playState = ensureNotNull(this._actionTimeline).playState >= 0 ? 1 : -1;
      this.currentPlayTimes = 1;
      this._currentTime = ensureNotNull(this._actionTimeline)._currentTime;
    } else if (this._actionTimeline == null || this._timeScale !== 1.0 || this._timeOffset !== 0.0) {
      var playTimes = ensureNotNull(this._animationState).playTimes;
      var totalTime = playTimes * this._duration;
      passedTime_0 *= this._timeScale;
      if (this._timeOffset !== 0.0) {
        passedTime_0 += this._timeOffset * ensureNotNull(this._animationData).duration;
      }if (playTimes > 0 && (passedTime_0 >= totalTime || passedTime_0 <= -totalTime)) {
        if (this.playState <= 0 && ensureNotNull(this._animationState)._playheadState === 3) {
          this.playState = 1;
        }this.currentPlayTimes = playTimes;
        if (passedTime_0 < 0.0) {
          this._currentTime = 0.0;
        } else {
          this._currentTime = this.playState === 1 ? this._duration + 1.0E-6 : this._duration;
        }
      } else {
        if (this.playState !== 0 && ensureNotNull(this._animationState)._playheadState === 3) {
          this.playState = 0;
        }if (passedTime_0 < 0.0) {
          passedTime_0 = -passedTime_0;
          var x = passedTime_0 / this._duration;
          this.currentPlayTimes = numberToInt(Math_0.floor(x));
          this._currentTime = this._duration - passedTime_0 % this._duration;
        } else {
          var x_0 = passedTime_0 / this._duration;
          this.currentPlayTimes = numberToInt(Math_0.floor(x_0));
          this._currentTime = passedTime_0 % this._duration;
        }
      }
      this._currentTime = this._currentTime + this._position;
    } else {
      this.playState = ensureNotNull(this._actionTimeline).playState;
      this.currentPlayTimes = ensureNotNull(this._actionTimeline).currentPlayTimes;
      this._currentTime = ensureNotNull(this._actionTimeline)._currentTime;
    }
    if (this.currentPlayTimes === prevPlayTimes && this._currentTime === prevTime) {
      return false;
    }if (prevState < 0 && this.playState !== prevState || (this.playState <= 0 && this.currentPlayTimes !== prevPlayTimes)) {
      this._frameIndex = -1;
    }return true;
  };
  TimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    this._armature = armature;
    this._animationState = animationState;
    this._timelineData = timelineData;
    this._actionTimeline = ensureNotNull(this._animationState)._actionTimeline;
    if (equals(this, this._actionTimeline)) {
      this._actionTimeline = null;
    }this._animationData = ensureNotNull(this._animationState).animationData;
    this._frameRate = ensureNotNull(ensureNotNull(this._animationData).parent).frameRate;
    this._frameRateR = 1.0 / this._frameRate;
    this._position = ensureNotNull(this._animationState)._position;
    this._duration = ensureNotNull(this._animationState)._duration;
    var _timelineData = this._timelineData;
    if (_timelineData != null) {
      var dragonBonesData = ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent);
      this._frameArray = dragonBonesData.frameArray;
      this._timelineArray = dragonBonesData.timelineArray;
      this._frameIndices = dragonBonesData.frameIndices;
      this._frameCount = ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + 2 | 0);
      this._frameValueOffset = ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + 4 | 0);
      this._timeScale = 100.0 / ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + 0 | 0);
      this._timeOffset = ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + 1 | 0) * 0.01;
    }};
  TimelineState.prototype.fadeOut = function () {
    this.dirty = false;
  };
  TimelineState.prototype.update_14dthe$ = function (passedTime) {
    var tmp$;
    if (this._setCurrentTime_14dthe$(passedTime)) {
      if (this._frameCount > 1) {
        var x = this._currentTime * this._frameRate;
        var timelineFrameIndex = numberToInt(Math_0.floor(x));
        var frameIndex = ensureNotNull(this._frameIndices).get_za3lpa$(ensureNotNull(this._timelineData).frameIndicesOffset + timelineFrameIndex | 0);
        if (this._frameIndex !== frameIndex) {
          this._frameIndex = frameIndex;
          this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$((Kotlin.isType(tmp$ = this._timelineData, TimelineData) ? tmp$ : throwCCE()).offset + 5 + this._frameIndex | 0) | 0;
          this._onArriveAtFrame();
        }} else if (this._frameIndex < 0) {
        this._frameIndex = 0;
        if (this._timelineData != null) {
          this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + 5 | 0) | 0;
        }this._onArriveAtFrame();
      }if (this._isTween || this.dirty) {
        this._onUpdateFrame();
      }}};
  TimelineState.prototype.blend_6taknv$ = function (_isDirty) {
  };
  TimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineState',
    interfaces: [BaseObject]
  };
  function TweenTimelineState(pool) {
    TweenTimelineState$Companion_getInstance();
    TimelineState.call(this, pool);
    this._tweenType = TweenType$None_getInstance();
    this._curveCount = 0;
    this._framePosition = 0.0;
    this._frameDurationR = 0.0;
    this._tweenEasing = 0.0;
    this._tweenProgress = 0.0;
    this._valueScale = 1.0;
  }
  function TweenTimelineState$Companion() {
    TweenTimelineState$Companion_instance = this;
  }
  TweenTimelineState$Companion.prototype._getEasingValue_0 = function (tweenType, progress, easing) {
    var value = progress;
    switch (tweenType.name) {
      case 'QuadIn':
        value = Math_0.pow(progress, 2.0);
        break;
      case 'QuadOut':
        var $receiver = 1.0 - progress;
        value = 1.0 - Math_0.pow($receiver, 2.0);
        break;
      case 'QuadInOut':
        var x = progress * math.PI;
        value = 0.5 * (1.0 - Math_0.cos(x));
        break;
      default:break;
    }
    return (value - progress) * easing + progress;
  };
  TweenTimelineState$Companion.prototype._getEasingCurveValue_0 = function (progress, samples, count, offset) {
    if (progress <= 0.0) {
      return 0.0;
    } else if (progress >= 1.0) {
      return 1.0;
    }var isOmited = count > 0;
    var segmentCount = count + 1 | 0;
    var x = progress * segmentCount;
    var valueIndex = numberToInt(Math_0.floor(x));
    var fromValue;
    var toValue;
    if (isOmited) {
      fromValue = valueIndex === 0 ? 0.0 : samples[offset + valueIndex - 1 | 0];
      toValue = valueIndex === (segmentCount - 1 | 0) ? 10000.0 : samples[offset + valueIndex | 0];
    } else {
      fromValue = samples[offset + valueIndex - 1 | 0];
      toValue = samples[offset + valueIndex | 0];
    }
    return (fromValue + (toValue - fromValue) * (progress * segmentCount - valueIndex)) * 1.0E-4;
  };
  TweenTimelineState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TweenTimelineState$Companion_instance = null;
  function TweenTimelineState$Companion_getInstance() {
    if (TweenTimelineState$Companion_instance === null) {
      new TweenTimelineState$Companion();
    }return TweenTimelineState$Companion_instance;
  }
  TweenTimelineState.prototype._onClear = function () {
    TimelineState.prototype._onClear.call(this);
    this._tweenType = TweenType$None_getInstance();
    this._curveCount = 0;
    this._framePosition = 0.0;
    this._frameDurationR = 0.0;
    this._tweenEasing = 0.0;
    this._tweenProgress = 0.0;
    this._valueScale = 1.0;
  };
  TweenTimelineState.prototype._onArriveAtFrame = function () {
    if (this._frameCount > 1 && (this._frameIndex !== (this._frameCount - 1 | 0) || ensureNotNull(this._animationState).playTimes === 0 || ensureNotNull(this._animationState).currentPlayTimes < (ensureNotNull(this._animationState).playTimes - 1 | 0))) {
      this._tweenType = TweenType$Companion_getInstance().get_za3lpa$(ensureNotNull(this._frameArray)[this._frameOffset + 1 | 0]);
      this._isTween = this._tweenType !== TweenType$None_getInstance();
      if (this._isTween) {
        if (this._tweenType === TweenType$Curve_getInstance()) {
          this._curveCount = ensureNotNull(this._frameArray)[this._frameOffset + 2 | 0];
        } else if (this._tweenType !== TweenType$None_getInstance() && this._tweenType !== TweenType$Line_getInstance()) {
          this._tweenEasing = ensureNotNull(this._frameArray)[this._frameOffset + 2 | 0] * 0.01;
        }} else {
        this.dirty = true;
      }
      this._framePosition = ensureNotNull(this._frameArray)[this._frameOffset] * this._frameRateR;
      if (this._frameIndex === (this._frameCount - 1 | 0)) {
        this._frameDurationR = 1.0 / (ensureNotNull(this._animationData).duration - this._framePosition);
      } else {
        var nextFrameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + 5 + this._frameIndex + 1 | 0) | 0;
        var frameDuration = ensureNotNull(this._frameArray)[nextFrameOffset] * this._frameRateR - this._framePosition;
        if (frameDuration > 0) {
          this._frameDurationR = 1.0 / frameDuration;
        } else {
          this._frameDurationR = 0.0;
        }
      }
    } else {
      this.dirty = true;
      this._isTween = false;
    }
  };
  TweenTimelineState.prototype._onUpdateFrame = function () {
    if (this._isTween) {
      this.dirty = true;
      this._tweenProgress = (this._currentTime - this._framePosition) * this._frameDurationR;
      if (this._tweenType === TweenType$Curve_getInstance()) {
        this._tweenProgress = TweenTimelineState$Companion_getInstance()._getEasingCurveValue_0(this._tweenProgress, ensureNotNull(this._frameArray), this._curveCount, this._frameOffset + 3 | 0);
      } else if (this._tweenType !== TweenType$Line_getInstance()) {
        this._tweenProgress = TweenTimelineState$Companion_getInstance()._getEasingValue_0(this._tweenType, this._tweenProgress, this._tweenEasing);
      }}};
  TweenTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweenTimelineState',
    interfaces: [TimelineState]
  };
  function SingleValueTimelineState(pool) {
    TweenTimelineState.call(this, pool);
    this._current = 0.0;
    this._difference = 0.0;
    this._result = 0.0;
  }
  SingleValueTimelineState.prototype._onClear = function () {
    TweenTimelineState.prototype._onClear.call(this);
    this._current = 0.0;
    this._difference = 0.0;
    this._result = 0.0;
  };
  SingleValueTimelineState.prototype._onArriveAtFrame = function () {
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData != null) {
      var valueScale = this._valueScale;
      var valueArray = ensureNotNull(this._valueArray);
      var valueOffset = this._valueOffset + this._frameValueOffset + this._frameIndex | 0;
      if (this._isTween) {
        var nextValueOffset = this._frameIndex === (this._frameCount - 1 | 0) ? this._valueOffset + this._frameValueOffset | 0 : valueOffset + 1 | 0;
        if (valueScale === 1.0) {
          this._current = valueArray[valueOffset];
          this._difference = valueArray[nextValueOffset] - this._current;
        } else {
          this._current = valueArray[valueOffset] * valueScale;
          this._difference = valueArray[nextValueOffset] * valueScale - this._current;
        }
      } else {
        this._result = valueArray[valueOffset] * valueScale;
      }
    } else {
      this._result = 0.0;
    }
  };
  SingleValueTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      this._result = this._current + this._difference * this._tweenProgress;
    }};
  SingleValueTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleValueTimelineState',
    interfaces: [TweenTimelineState]
  };
  function DoubleValueTimelineState(pool) {
    TweenTimelineState.call(this, pool);
    this._currentA = 0.0;
    this._currentB = 0.0;
    this._differenceA = 0.0;
    this._differenceB = 0.0;
    this._resultA = 0.0;
    this._resultB = 0.0;
  }
  DoubleValueTimelineState.prototype._onClear = function () {
    TweenTimelineState.prototype._onClear.call(this);
    this._currentA = 0.0;
    this._currentB = 0.0;
    this._differenceA = 0.0;
    this._differenceB = 0.0;
    this._resultA = 0.0;
    this._resultB = 0.0;
  };
  DoubleValueTimelineState.prototype._onArriveAtFrame = function () {
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData != null) {
      var valueScale = this._valueScale;
      var valueArray = ensureNotNull(this._valueArray);
      var valueOffset = this._valueOffset + this._frameValueOffset + (this._frameIndex * 2 | 0) | 0;
      if (this._isTween) {
        var nextValueOffset = this._frameIndex === (this._frameCount - 1 | 0) ? this._valueOffset + this._frameValueOffset | 0 : valueOffset + 2 | 0;
        if (valueScale === 1.0) {
          this._currentA = valueArray[valueOffset];
          this._currentB = valueArray[valueOffset + 1 | 0];
          this._differenceA = valueArray[nextValueOffset] - this._currentA;
          this._differenceB = valueArray[nextValueOffset + 1 | 0] - this._currentB;
        } else {
          this._currentA = valueArray[valueOffset] * valueScale;
          this._currentB = valueArray[valueOffset + 1 | 0] * valueScale;
          this._differenceA = valueArray[nextValueOffset] * valueScale - this._currentA;
          this._differenceB = valueArray[nextValueOffset + 1 | 0] * valueScale - this._currentB;
        }
      } else {
        this._resultA = valueArray[valueOffset] * valueScale;
        this._resultB = valueArray[valueOffset + 1 | 0] * valueScale;
      }
    } else {
      this._resultA = 0.0;
      this._resultB = 0.0;
    }
  };
  DoubleValueTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      this._resultA = this._currentA + this._differenceA * this._tweenProgress;
      this._resultB = this._currentB + this._differenceB * this._tweenProgress;
    }};
  DoubleValueTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleValueTimelineState',
    interfaces: [TweenTimelineState]
  };
  function MutilpleValueTimelineState(pool) {
    TweenTimelineState.call(this, pool);
    this._valueCount = 0;
    this._rd = new Float64Array(0);
  }
  MutilpleValueTimelineState.prototype._onClear = function () {
    TweenTimelineState.prototype._onClear.call(this);
    this._valueCount = 0;
    this._rd = new Float64Array(0);
  };
  MutilpleValueTimelineState.prototype._onArriveAtFrame = function () {
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    var valueCount = this._valueCount;
    this._rd = this._rd.length < valueCount ? new Float64Array(valueCount) : this._rd;
    var rd = this._rd;
    if (this._timelineData != null) {
      var valueScale = this._valueScale;
      var valueArray = ensureNotNull(this._valueArray);
      var valueOffset = this._valueOffset + this._frameValueOffset + Kotlin.imul(this._frameIndex, valueCount) | 0;
      if (this._isTween) {
        var nextValueOffset = this._frameIndex === (this._frameCount - 1 | 0) ? this._valueOffset + this._frameValueOffset | 0 : valueOffset + valueCount | 0;
        for (var i = 0; i < valueCount; i++) {
          rd[valueCount + i | 0] = (valueArray[nextValueOffset + i | 0] - valueArray[valueOffset + i | 0]) * valueScale;
        }
      } else {
        for (var i_0 = 0; i_0 < valueCount; i_0++) {
          rd[i_0] = valueArray[valueOffset + i_0 | 0] * valueScale;
        }
      }
    } else {
      for (var i_1 = 0; i_1 < valueCount; i_1++)
        rd[i_1] = 0.0;
    }
  };
  MutilpleValueTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      var valueCount = this._valueCount;
      var valueScale = this._valueScale;
      var tweenProgress = this._tweenProgress;
      var valueArray = ensureNotNull(this._valueArray);
      var rd = this._rd;
      var valueOffset = this._valueOffset + this._frameValueOffset + Kotlin.imul(this._frameIndex, valueCount) | 0;
      if (valueScale === 1.0) {
        for (var i = 0; i < valueCount; i++) {
          rd[i] = valueArray[valueOffset + i | 0] + rd[valueCount + i | 0] * tweenProgress;
        }
      } else {
        for (var i_0 = 0; i_0 < valueCount; i_0++) {
          rd[i_0] = valueArray[valueOffset + i_0 | 0] * valueScale + rd[valueCount + i_0 | 0] * tweenProgress;
        }
      }
    }};
  MutilpleValueTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutilpleValueTimelineState',
    interfaces: [TweenTimelineState]
  };
  function IAnimatable() {
  }
  IAnimatable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IAnimatable',
    interfaces: []
  };
  function ActionTimelineState(pool) {
    TimelineState.call(this, pool);
  }
  ActionTimelineState.prototype.toString = function () {
    return '[class dragonBones.ActionTimelineState]';
  };
  ActionTimelineState.prototype._onCrossFrame_0 = function (frameIndex) {
    var tmp$, tmp$_0;
    var eventDispatcher = ensureNotNull(this._armature).eventDispatcher;
    if (ensureNotNull(this._animationState).actionEnabled) {
      var frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + 5 + frameIndex | 0) | 0;
      var actionCount = ensureNotNull(this._frameArray)[frameOffset + 1 | 0];
      var actions = ensureNotNull(ensureNotNull(this._animationData).parent).actions;
      for (var i = 0; i < actionCount; i++) {
        var actionIndex = ensureNotNull(this._frameArray)[frameOffset + 2 + i | 0];
        var action = actions.get_za3lpa$(actionIndex);
        if (action.type === ActionType$Play_getInstance()) {
          var eventObject = this.pool.eventObject.borrow();
          eventObject.time = ensureNotNull(this._frameArray)[frameOffset] / this._frameRate;
          eventObject.animationState = ensureNotNull(this._animationState);
          EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject, ensureNotNull(this._armature));
          ensureNotNull(this._armature)._bufferAction_8f84tb$(eventObject, true);
        } else {
          var eventType = action.type === ActionType$Frame_getInstance() ? EventObject$Companion_getInstance().FRAME_EVENT : EventObject$Companion_getInstance().SOUND_EVENT;
          if (action.type === ActionType$Sound_getInstance() || eventDispatcher.hasDBEventListener_61zpoe$(eventType)) {
            var eventObject_0 = this.pool.eventObject.borrow();
            eventObject_0.time = ensureNotNull(this._frameArray)[frameOffset] / this._frameRate;
            eventObject_0.animationState = ensureNotNull(this._animationState);
            EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject_0, ensureNotNull(this._armature));
            (tmp$_0 = (tmp$ = this._armature) != null ? tmp$.eventDispatcher : null) != null ? (tmp$_0.queueEvent_vah34q$(eventObject_0), Unit) : null;
          }}
      }
    }};
  ActionTimelineState.prototype._onArriveAtFrame = function () {
  };
  ActionTimelineState.prototype._onUpdateFrame = function () {
  };
  ActionTimelineState.prototype.update_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var prevState = this.playState;
    var prevPlayTimes = this.currentPlayTimes;
    var prevTime = this._currentTime;
    if (this._setCurrentTime_14dthe$(passedTime)) {
      var eventActive = ((tmp$ = this._animationState) != null ? tmp$._parent : null) == null && ensureNotNull(this._animationState).actionEnabled;
      var eventDispatcher = (tmp$_0 = this._armature) != null ? tmp$_0.eventDispatcher : null;
      if (prevState < 0) {
        if (this.playState !== prevState) {
          if (ensureNotNull(this._animationState).displayControl && ensureNotNull(this._animationState).resetToPose) {
            (tmp$_1 = this._armature) != null ? (tmp$_1._sortZOrder_o65udl$(null, 0), Unit) : null;
          }prevPlayTimes = this.currentPlayTimes;
          if (eventActive && ensureNotNull(eventDispatcher).hasDBEventListener_61zpoe$(EventObject$Companion_getInstance().START)) {
            var eventObject = this.pool.eventObject.borrow();
            eventObject.type = EventObject$Companion_getInstance().START;
            eventObject.armature = ensureNotNull(this._armature);
            eventObject.animationState = ensureNotNull(this._animationState);
            (tmp$_3 = (tmp$_2 = this._armature) != null ? tmp$_2.eventDispatcher : null) != null ? (tmp$_3.queueEvent_vah34q$(eventObject), Unit) : null;
          }} else {
          return;
        }
      }var isReverse = ensureNotNull(this._animationState).timeScale < 0.0;
      var loopCompleteEvent = null;
      var completeEvent = null;
      if (eventActive && this.currentPlayTimes !== prevPlayTimes) {
        if (ensureNotNull(eventDispatcher).hasDBEventListener_61zpoe$(EventObject$Companion_getInstance().LOOP_COMPLETE)) {
          loopCompleteEvent = this.pool.eventObject.borrow();
          loopCompleteEvent.type = EventObject$Companion_getInstance().LOOP_COMPLETE;
          loopCompleteEvent.armature = ensureNotNull(this._armature);
          loopCompleteEvent.animationState = ensureNotNull(this._animationState);
        }if (this.playState > 0) {
          if (eventDispatcher.hasDBEventListener_61zpoe$(EventObject$Companion_getInstance().COMPLETE)) {
            completeEvent = this.pool.eventObject.borrow();
            completeEvent.type = EventObject$Companion_getInstance().COMPLETE;
            completeEvent.armature = ensureNotNull(this._armature);
            completeEvent.animationState = ensureNotNull(this._animationState);
          }}}if (this._frameCount > 1) {
        var timelineData = Kotlin.isType(tmp$_4 = this._timelineData, TimelineData) ? tmp$_4 : throwCCE();
        var x = this._currentTime * this._frameRate;
        var timelineFrameIndex = numberToInt(Math_0.floor(x));
        var frameIndex = ensureNotNull(this._frameIndices).get_za3lpa$(timelineData.frameIndicesOffset + timelineFrameIndex | 0);
        if (this._frameIndex !== frameIndex) {
          var crossedFrameIndex = this._frameIndex;
          this._frameIndex = frameIndex;
          if (this._timelineArray != null) {
            this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + 5 + this._frameIndex | 0) | 0;
            if (isReverse) {
              if (crossedFrameIndex < 0) {
                var x_0 = prevTime * this._frameRate;
                var prevFrameIndex = numberToInt(Math_0.floor(x_0));
                crossedFrameIndex = ensureNotNull(this._frameIndices).get_za3lpa$(timelineData.frameIndicesOffset + prevFrameIndex | 0);
                if (this.currentPlayTimes === prevPlayTimes) {
                  if (crossedFrameIndex === frameIndex) {
                    crossedFrameIndex = -1;
                  }}}while (crossedFrameIndex >= 0) {
                var frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + 5 + crossedFrameIndex | 0) | 0;
                var framePosition = ensureNotNull(this._frameArray)[frameOffset] / this._frameRate | 0;
                if (this._position <= framePosition && framePosition <= this._position + this._duration) {
                  this._onCrossFrame_0(crossedFrameIndex);
                }if (loopCompleteEvent != null && crossedFrameIndex === 0) {
                  (tmp$_6 = (tmp$_5 = this._armature) != null ? tmp$_5.eventDispatcher : null) != null ? (tmp$_6.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
                  loopCompleteEvent = null;
                }if (crossedFrameIndex > 0) {
                  crossedFrameIndex = crossedFrameIndex - 1 | 0;
                } else {
                  crossedFrameIndex = this._frameCount - 1 | 0;
                }
                if (crossedFrameIndex === frameIndex) {
                  break;
                }}
            } else {
              if (crossedFrameIndex < 0) {
                var x_1 = prevTime * this._frameRate;
                var prevFrameIndex_0 = numberToInt(Math_0.floor(x_1));
                crossedFrameIndex = ensureNotNull(this._frameIndices).get_za3lpa$(timelineData.frameIndicesOffset + prevFrameIndex_0 | 0);
                var frameOffset_0 = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + 5 + crossedFrameIndex | 0) | 0;
                var framePosition_0 = ensureNotNull(this._frameArray)[frameOffset_0] / this._frameRate;
                if (this.currentPlayTimes === prevPlayTimes) {
                  if (prevTime <= framePosition_0) {
                    if (crossedFrameIndex > 0) {
                      crossedFrameIndex = crossedFrameIndex - 1 | 0;
                    } else {
                      crossedFrameIndex = this._frameCount - 1 | 0;
                    }
                  } else if (crossedFrameIndex === frameIndex) {
                    crossedFrameIndex = -1;
                  }}}while (crossedFrameIndex >= 0) {
                if (crossedFrameIndex < (this._frameCount - 1 | 0)) {
                  crossedFrameIndex = crossedFrameIndex + 1 | 0;
                } else {
                  crossedFrameIndex = 0;
                }
                var frameOffset_1 = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + 5 + crossedFrameIndex | 0) | 0;
                var framePosition_1 = ensureNotNull(this._frameArray)[frameOffset_1] / this._frameRate;
                if (this._position <= framePosition_1 && framePosition_1 <= this._position + this._duration) {
                  this._onCrossFrame_0(crossedFrameIndex);
                }if (loopCompleteEvent != null && crossedFrameIndex === 0) {
                  (tmp$_8 = (tmp$_7 = this._armature) != null ? tmp$_7.eventDispatcher : null) != null ? (tmp$_8.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
                  loopCompleteEvent = null;
                }if (crossedFrameIndex === frameIndex) {
                  break;
                }}
            }
          }}} else if (this._frameIndex < 0) {
        this._frameIndex = 0;
        if (this._timelineData != null) {
          this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + 5 | 0) | 0;
          var framePosition_2 = ensureNotNull(this._frameArray)[this._frameOffset] / this._frameRate;
          if (this.currentPlayTimes === prevPlayTimes) {
            if (prevTime <= framePosition_2) {
              this._onCrossFrame_0(this._frameIndex);
            }} else if (this._position <= framePosition_2) {
            if (!isReverse && loopCompleteEvent != null) {
              (tmp$_10 = (tmp$_9 = this._armature) != null ? tmp$_9.eventDispatcher : null) != null ? (tmp$_10.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
              loopCompleteEvent = null;
            }this._onCrossFrame_0(this._frameIndex);
          }}}if (loopCompleteEvent != null) {
        (tmp$_12 = (tmp$_11 = this._armature) != null ? tmp$_11.eventDispatcher : null) != null ? (tmp$_12.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
      }if (completeEvent != null) {
        (tmp$_14 = (tmp$_13 = this._armature) != null ? tmp$_13.eventDispatcher : null) != null ? (tmp$_14.queueEvent_vah34q$(completeEvent), Unit) : null;
      }}};
  ActionTimelineState.prototype.setCurrentTime_14dthe$ = function (value) {
    this._setCurrentTime_14dthe$(value);
    this._frameIndex = -1;
  };
  ActionTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionTimelineState',
    interfaces: [TimelineState]
  };
  function ZOrderTimelineState(pool) {
    TimelineState.call(this, pool);
  }
  ZOrderTimelineState.prototype.toString = function () {
    return '[class dragonBones.ZOrderTimelineState]';
  };
  ZOrderTimelineState.prototype._onArriveAtFrame = function () {
    var tmp$, tmp$_0;
    if (this.playState >= 0) {
      var count = ensureNotNull(this._frameArray)[this._frameOffset + 1 | 0];
      if (count > 0) {
        (tmp$ = this._armature) != null ? (tmp$._sortZOrder_o65udl$(ensureNotNull(this._frameArray), this._frameOffset + 2 | 0), Unit) : null;
      } else {
        (tmp$_0 = this._armature) != null ? (tmp$_0._sortZOrder_o65udl$(null, 0), Unit) : null;
      }
    }};
  ZOrderTimelineState.prototype._onUpdateFrame = function () {
  };
  ZOrderTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZOrderTimelineState',
    interfaces: [TimelineState]
  };
  function BoneAllTimelineState(pool) {
    MutilpleValueTimelineState.call(this, pool);
  }
  BoneAllTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneAllTimelineState]';
  };
  BoneAllTimelineState.prototype._onArriveAtFrame = function () {
    MutilpleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._isTween && this._frameIndex === (this._frameCount - 1 | 0)) {
      this._rd[2] = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd[2]);
      this._rd[3] = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd[3]);
    }if (this._timelineData == null) {
      this._rd[4] = 1.0;
      this._rd[5] = 1.0;
    }};
  BoneAllTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    var tmp$, tmp$_0, tmp$_1;
    MutilpleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueCount = 6;
    this._valueArray = ensureNotNull((tmp$_1 = (tmp$_0 = (tmp$ = this._animationData) != null ? tmp$.parent : null) != null ? tmp$_0.parent : null) != null ? tmp$_1.frameFloatArray : null);
  };
  BoneAllTimelineState.prototype.fadeOut = function () {
    this.dirty = false;
    this._rd[2] = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd[2]);
    this._rd[3] = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd[3]);
  };
  BoneAllTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var valueScale = ensureNotNull(this._armature).armatureData.scale;
    var rd = this._rd;
    var blendState = ensureNotNull(this.targetBlendState);
    var bone = ensureNotNull(blendState.targetBone);
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.x = result.x + rd[0] * blendWeight * valueScale;
      result.y = result.y + rd[1] * blendWeight * valueScale;
      result.rotation = result.rotation + rd[2] * blendWeight;
      result.skew = result.skew + rd[3] * blendWeight;
      result.scaleX = result.scaleX + (rd[4] - 1.0) * blendWeight;
      result.scaleY = result.scaleY + (rd[5] - 1.0) * blendWeight;
    } else {
      result.x = rd[0] * blendWeight * valueScale;
      result.y = rd[1] * blendWeight * valueScale;
      result.rotation = rd[2] * blendWeight;
      result.skew = rd[3] * blendWeight;
      result.scaleX = (rd[4] - 1.0) * blendWeight + 1.0;
      result.scaleY = (rd[5] - 1.0) * blendWeight + 1.0;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }};
  BoneAllTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneAllTimelineState',
    interfaces: [MutilpleValueTimelineState]
  };
  function BoneTranslateTimelineState(pool) {
    DoubleValueTimelineState.call(this, pool);
  }
  BoneTranslateTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneTranslateTimelineState]';
  };
  BoneTranslateTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueScale = ensureNotNull(this._armature).armatureData.scale;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameFloatArray);
  };
  BoneTranslateTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var blendState = ensureNotNull(this.targetBlendState);
    var bone = ensureNotNull(blendState.targetBone);
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.x = result.x + this._resultA * blendWeight;
      result.y = result.y + this._resultB * blendWeight;
    } else if (blendWeight !== 1.0) {
      result.x = this._resultA * blendWeight;
      result.y = this._resultB * blendWeight;
    } else {
      result.x = this._resultA;
      result.y = this._resultB;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }};
  BoneTranslateTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneTranslateTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function BoneRotateTimelineState(pool) {
    DoubleValueTimelineState.call(this, pool);
  }
  BoneRotateTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneRotateTimelineState]';
  };
  BoneRotateTimelineState.prototype._onArriveAtFrame = function () {
    DoubleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._isTween && this._frameIndex === (this._frameCount - 1 | 0)) {
      this._differenceA = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._differenceA);
      this._differenceB = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._differenceB);
    }};
  BoneRotateTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameFloatArray);
  };
  BoneRotateTimelineState.prototype.fadeOut = function () {
    this.dirty = false;
    this._resultA = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._resultA);
    this._resultB = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._resultB);
  };
  BoneRotateTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var blendState = ensureNotNull(this.targetBlendState);
    var bone = ensureNotNull(blendState.targetBone);
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.rotation = result.rotation + this._resultA * blendWeight;
      result.skew = result.skew + this._resultB * blendWeight;
    } else if (blendWeight !== 1.0) {
      result.rotation = this._resultA * blendWeight;
      result.skew = this._resultB * blendWeight;
    } else {
      result.rotation = this._resultA;
      result.skew = this._resultB;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }};
  BoneRotateTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneRotateTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function BoneScaleTimelineState(pool) {
    DoubleValueTimelineState.call(this, pool);
  }
  BoneScaleTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneScaleTimelineState]';
  };
  BoneScaleTimelineState.prototype._onArriveAtFrame = function () {
    DoubleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData == null) {
      this._resultA = 1.0;
      this._resultB = 1.0;
    }};
  BoneScaleTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameFloatArray);
  };
  BoneScaleTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var blendState = ensureNotNull(this.targetBlendState);
    var bone = ensureNotNull(blendState.targetBone);
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.scaleX = result.scaleX + (this._resultA - 1.0) * blendWeight;
      result.scaleY = result.scaleY + (this._resultB - 1.0) * blendWeight;
    } else if (blendWeight !== 1.0) {
      result.scaleX = (this._resultA - 1.0) * blendWeight + 1.0;
      result.scaleY = (this._resultB - 1.0) * blendWeight + 1.0;
    } else {
      result.scaleX = this._resultA;
      result.scaleY = this._resultB;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }};
  BoneScaleTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneScaleTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function SurfaceTimelineState(pool) {
    MutilpleValueTimelineState.call(this, pool);
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  }
  SurfaceTimelineState.prototype.toString = function () {
    return '[class dragonBones.SurfaceTimelineState]';
  };
  SurfaceTimelineState.prototype._onClear = function () {
    MutilpleValueTimelineState.prototype._onClear.call(this);
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  };
  SurfaceTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    MutilpleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    if (this._timelineData != null) {
      var dragonBonesData = ensureNotNull(ensureNotNull(this._animationData).parent).parent;
      var frameIntArray = ensureNotNull(ensureNotNull(dragonBonesData).frameIntArray);
      var frameIntOffset = ensureNotNull(this._animationData).frameIntOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + 3 | 0) | 0;
      this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
      this._valueCount = numberToInt(frameIntArray[frameIntOffset + 2 | 0]);
      this._deformCount_0 = numberToInt(frameIntArray[frameIntOffset + 1 | 0]);
      this._deformOffset_0 = numberToInt(frameIntArray[frameIntOffset + 3 | 0]);
      this._sameValueOffset_0 = numberToInt(frameIntArray[frameIntOffset + 4 | 0]) + ensureNotNull(this._animationData).frameFloatOffset | 0;
      this._valueScale = ensureNotNull(this._armature).armatureData.scale;
      this._valueArray = ensureNotNull(dragonBonesData.frameFloatArray);
      this._rd = new Float64Array(this._valueCount * 2 | 0);
    } else {
      this._deformCount_0 = ensureNotNull(ensureNotNull(this.targetBlendState).targetSurface)._deformVertices.length;
    }
  };
  SurfaceTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var blendState = ensureNotNull(this.targetBlendState);
    var tmp$_3;
    if ((tmp$ = blendState.targetSurface) != null)
      tmp$_3 = tmp$;
    else {
      throw IllegalStateException_init(('blendState.targetSurface=null: target=' + toString(blendState.targetCommon)).toString());
    }
    var surface = tmp$_3;
    var blendWeight = blendState.blendWeight;
    var result = surface._deformVertices;
    var valueArray = this._valueArray;
    if (valueArray != null) {
      var valueCount = this._valueCount;
      var deformOffset = this._deformOffset_0;
      var sameValueOffset = this._sameValueOffset_0;
      var rd = this._rd;
      tmp$_0 = this._deformCount_0;
      for (var i = 0; i < tmp$_0; i++) {
        var value;
        if (i < deformOffset) {
          tmp$_1 = valueArray[sameValueOffset + i | 0];
        } else if (i < (deformOffset + valueCount | 0)) {
          tmp$_1 = rd[i - deformOffset | 0];
        } else {
          tmp$_1 = valueArray[sameValueOffset + i - valueCount | 0];
        }
        value = tmp$_1;
        if (blendState.dirty > 1) {
          result[i] = result[i] + value * blendWeight;
        } else {
          result[i] = value * blendWeight;
        }
      }
    } else if (blendState.dirty === 1) {
      tmp$_2 = this._deformCount_0;
      for (var i_0 = 0; i_0 < tmp$_2; i_0++) {
        result[i_0] = 0.0;
      }
    }if (_isDirty || this.dirty) {
      this.dirty = false;
      surface._transformDirty = true;
    }};
  SurfaceTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SurfaceTimelineState',
    interfaces: [MutilpleValueTimelineState]
  };
  function AlphaTimelineState(pool) {
    SingleValueTimelineState.call(this, pool);
  }
  AlphaTimelineState.prototype.toString = function () {
    return '[class dragonBones.AlphaTimelineState]';
  };
  AlphaTimelineState.prototype._onArriveAtFrame = function () {
    SingleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData == null) {
      this._result = 1.0;
    }};
  AlphaTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 0.01;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray);
  };
  AlphaTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$;
    var blendState = ensureNotNull(this.targetBlendState);
    var alphaTarget = ensureNotNull(blendState.targetTransformObject);
    var blendWeight = blendState.blendWeight;
    if (blendState.dirty > 1) {
      alphaTarget._alpha = alphaTarget._alpha + this._result * blendWeight;
      if (alphaTarget._alpha > 1.0) {
        alphaTarget._alpha = 1.0;
      }} else {
      alphaTarget._alpha = this._result * blendWeight;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      (tmp$ = this._armature) != null ? (tmp$._alphaDirty = true) : null;
    }};
  AlphaTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlphaTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function SlotDisplayTimelineState(pool) {
    TimelineState.call(this, pool);
  }
  SlotDisplayTimelineState.prototype.toString = function () {
    return '[class dragonBones.SlotDisplayTimelineState]';
  };
  SlotDisplayTimelineState.prototype._onArriveAtFrame = function () {
    if (this.playState >= 0) {
      var slot = ensureNotNull(this.targetSlot);
      var displayIndex = this._timelineData != null ? ensureNotNull(this._frameArray)[this._frameOffset + 1 | 0] : ensureNotNull(slot._slotData).displayIndex;
      if (slot.displayIndex !== displayIndex) {
        slot._setDisplayIndex_fzusl$(displayIndex, true);
      }}};
  SlotDisplayTimelineState.prototype._onUpdateFrame = function () {
  };
  SlotDisplayTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotDisplayTimelineState',
    interfaces: [TimelineState]
  };
  function SlotColorTimelineState(pool) {
    TweenTimelineState.call(this, pool);
    this._current_0 = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0]);
    this._difference_0 = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0]);
    this._result_0 = new Float64Array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
  }
  SlotColorTimelineState.prototype.toString = function () {
    return '[class dragonBones.SlotColorTimelineState]';
  };
  SlotColorTimelineState.prototype._onArriveAtFrame = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23;
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData != null) {
      var dragonBonesData = ensureNotNull(ensureNotNull(this._animationData).parent).parent;
      var colorArray = ensureNotNull(ensureNotNull(dragonBonesData).colorArray);
      var frameIntArray = ensureNotNull(dragonBonesData.frameIntArray);
      var valueOffset = ensureNotNull(this._animationData).frameIntOffset + this._frameValueOffset + this._frameIndex | 0;
      var colorOffset = numberToInt(frameIntArray[valueOffset]);
      if (colorOffset < 0) {
        colorOffset = colorOffset + 65536 | 0;
      }if (this._isTween) {
        this._current_0[0] = colorArray[tmp$ = colorOffset, colorOffset = tmp$ + 1 | 0, tmp$];
        this._current_0[1] = colorArray[tmp$_0 = colorOffset, colorOffset = tmp$_0 + 1 | 0, tmp$_0];
        this._current_0[2] = colorArray[tmp$_1 = colorOffset, colorOffset = tmp$_1 + 1 | 0, tmp$_1];
        this._current_0[3] = colorArray[tmp$_2 = colorOffset, colorOffset = tmp$_2 + 1 | 0, tmp$_2];
        this._current_0[4] = colorArray[tmp$_3 = colorOffset, colorOffset = tmp$_3 + 1 | 0, tmp$_3];
        this._current_0[5] = colorArray[tmp$_4 = colorOffset, colorOffset = tmp$_4 + 1 | 0, tmp$_4];
        this._current_0[6] = colorArray[tmp$_5 = colorOffset, colorOffset = tmp$_5 + 1 | 0, tmp$_5];
        this._current_0[7] = colorArray[tmp$_6 = colorOffset, colorOffset = tmp$_6 + 1 | 0, tmp$_6];
        if (this._frameIndex === (this._frameCount - 1 | 0)) {
          tmp$_7 = numberToInt(frameIntArray[ensureNotNull(this._animationData).frameIntOffset + this._frameValueOffset | 0]);
        } else {
          tmp$_7 = numberToInt(frameIntArray[valueOffset + 1 | 0]);
        }
        colorOffset = tmp$_7;
        if (colorOffset < 0) {
          colorOffset = colorOffset + 65536 | 0;
        }this._difference_0[0] = colorArray[tmp$_8 = colorOffset, colorOffset = tmp$_8 + 1 | 0, tmp$_8] - this._current_0[0];
        this._difference_0[1] = colorArray[tmp$_9 = colorOffset, colorOffset = tmp$_9 + 1 | 0, tmp$_9] - this._current_0[1];
        this._difference_0[2] = colorArray[tmp$_10 = colorOffset, colorOffset = tmp$_10 + 1 | 0, tmp$_10] - this._current_0[2];
        this._difference_0[3] = colorArray[tmp$_11 = colorOffset, colorOffset = tmp$_11 + 1 | 0, tmp$_11] - this._current_0[3];
        this._difference_0[4] = colorArray[tmp$_12 = colorOffset, colorOffset = tmp$_12 + 1 | 0, tmp$_12] - this._current_0[4];
        this._difference_0[5] = colorArray[tmp$_13 = colorOffset, colorOffset = tmp$_13 + 1 | 0, tmp$_13] - this._current_0[5];
        this._difference_0[6] = colorArray[tmp$_14 = colorOffset, colorOffset = tmp$_14 + 1 | 0, tmp$_14] - this._current_0[6];
        this._difference_0[7] = colorArray[tmp$_15 = colorOffset, colorOffset = tmp$_15 + 1 | 0, tmp$_15] - this._current_0[7];
      } else {
        this._result_0[0] = colorArray[tmp$_16 = colorOffset, colorOffset = tmp$_16 + 1 | 0, tmp$_16] * 0.01;
        this._result_0[1] = colorArray[tmp$_17 = colorOffset, colorOffset = tmp$_17 + 1 | 0, tmp$_17] * 0.01;
        this._result_0[2] = colorArray[tmp$_18 = colorOffset, colorOffset = tmp$_18 + 1 | 0, tmp$_18] * 0.01;
        this._result_0[3] = colorArray[tmp$_19 = colorOffset, colorOffset = tmp$_19 + 1 | 0, tmp$_19] * 0.01;
        this._result_0[4] = colorArray[tmp$_20 = colorOffset, colorOffset = tmp$_20 + 1 | 0, tmp$_20];
        this._result_0[5] = colorArray[tmp$_21 = colorOffset, colorOffset = tmp$_21 + 1 | 0, tmp$_21];
        this._result_0[6] = colorArray[tmp$_22 = colorOffset, colorOffset = tmp$_22 + 1 | 0, tmp$_22];
        this._result_0[7] = colorArray[tmp$_23 = colorOffset, colorOffset = tmp$_23 + 1 | 0, tmp$_23];
      }
    } else {
      var slot = ensureNotNull(this.targetSlot);
      var color = ensureNotNull(slot.slotData.color);
      this._result_0[0] = color.alphaMultiplier;
      this._result_0[1] = color.redMultiplier;
      this._result_0[2] = color.greenMultiplier;
      this._result_0[3] = color.blueMultiplier;
      this._result_0[4] = color.alphaOffset;
      this._result_0[5] = color.redOffset;
      this._result_0[6] = color.greenOffset;
      this._result_0[7] = color.blueOffset;
    }
  };
  SlotColorTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      this._result_0[0] = (this._current_0[0] + this._difference_0[0] * this._tweenProgress) * 0.01;
      this._result_0[1] = (this._current_0[1] + this._difference_0[1] * this._tweenProgress) * 0.01;
      this._result_0[2] = (this._current_0[2] + this._difference_0[2] * this._tweenProgress) * 0.01;
      this._result_0[3] = (this._current_0[3] + this._difference_0[3] * this._tweenProgress) * 0.01;
      this._result_0[4] = this._current_0[4] + this._difference_0[4] * this._tweenProgress;
      this._result_0[5] = this._current_0[5] + this._difference_0[5] * this._tweenProgress;
      this._result_0[6] = this._current_0[6] + this._difference_0[6] * this._tweenProgress;
      this._result_0[7] = this._current_0[7] + this._difference_0[7] * this._tweenProgress;
    }};
  SlotColorTimelineState.prototype.fadeOut = function () {
    this._isTween = false;
  };
  SlotColorTimelineState.prototype.update_14dthe$ = function (passedTime) {
    TweenTimelineState.prototype.update_14dthe$.call(this, passedTime);
    if (this._isTween || this.dirty) {
      var slot = ensureNotNull(this.targetSlot);
      var result = slot._colorTransform;
      if (ensureNotNull(this._animationState)._fadeState !== 0 || ensureNotNull(this._animationState)._subFadeState !== 0) {
        if (result.alphaMultiplier !== this._result_0[0] || result.redMultiplier !== this._result_0[1] || result.greenMultiplier !== this._result_0[2] || result.blueMultiplier !== this._result_0[3] || result.alphaOffset !== numberToInt(this._result_0[4]) || result.redOffset !== numberToInt(this._result_0[5]) || result.greenOffset !== numberToInt(this._result_0[6]) || result.blueOffset !== numberToInt(this._result_0[7])) {
          var $receiver = ensureNotNull(this._animationState)._fadeProgress;
          var fadeProgress = Math_0.pow($receiver, 4.0);
          result.alphaMultiplier = result.alphaMultiplier + (this._result_0[0] - result.alphaMultiplier) * fadeProgress;
          result.redMultiplier = result.redMultiplier + (this._result_0[1] - result.redMultiplier) * fadeProgress;
          result.greenMultiplier = result.greenMultiplier + (this._result_0[2] - result.greenMultiplier) * fadeProgress;
          result.blueMultiplier = result.blueMultiplier + (this._result_0[3] - result.blueMultiplier) * fadeProgress;
          result.alphaOffset = result.alphaOffset + numberToInt((this._result_0[4] - result.alphaOffset) * fadeProgress) | 0;
          result.redOffset = result.redOffset + numberToInt((this._result_0[5] - result.redOffset) * fadeProgress) | 0;
          result.greenOffset = result.greenOffset + numberToInt((this._result_0[6] - result.greenOffset) * fadeProgress) | 0;
          result.blueOffset = result.blueOffset + numberToInt((this._result_0[7] - result.blueOffset) * fadeProgress) | 0;
          slot._colorDirty = true;
        }} else if (this.dirty) {
        this.dirty = false;
        if (result.alphaMultiplier !== this._result_0[0] || result.redMultiplier !== this._result_0[1] || result.greenMultiplier !== this._result_0[2] || result.blueMultiplier !== this._result_0[3] || result.alphaOffset !== numberToInt(this._result_0[4]) || result.redOffset !== numberToInt(this._result_0[5]) || result.greenOffset !== numberToInt(this._result_0[6]) || result.blueOffset !== numberToInt(this._result_0[7])) {
          result.alphaMultiplier = this._result_0[0];
          result.redMultiplier = this._result_0[1];
          result.greenMultiplier = this._result_0[2];
          result.blueMultiplier = this._result_0[3];
          result.alphaOffset = numberToInt(this._result_0[4]);
          result.redOffset = numberToInt(this._result_0[5]);
          result.greenOffset = numberToInt(this._result_0[6]);
          result.blueOffset = numberToInt(this._result_0[7]);
          slot._colorDirty = true;
        }}}};
  SlotColorTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotColorTimelineState',
    interfaces: [TweenTimelineState]
  };
  function SlotZIndexTimelineState(pool) {
    SingleValueTimelineState.call(this, pool);
  }
  SlotZIndexTimelineState.prototype.toString = function () {
    return '[class dragonBones.SlotZIndexTimelineState]';
  };
  SlotZIndexTimelineState.prototype._onArriveAtFrame = function () {
    SingleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData == null) {
      var blendState = ensureNotNull(this.targetBlendState);
      var slot = ensureNotNull(blendState.targetSlot);
      this._result = slot.slotData.zIndex;
    }};
  SlotZIndexTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray);
  };
  SlotZIndexTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$;
    var blendState = ensureNotNull(this.targetBlendState);
    var slot = ensureNotNull(blendState.targetSlot);
    var blendWeight = blendState.blendWeight;
    if (blendState.dirty > 1) {
      slot._zIndex = slot._zIndex + numberToInt(this._result * blendWeight) | 0;
    } else {
      slot._zIndex = numberToInt(this._result * blendWeight);
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      (tmp$ = this._armature) != null ? (tmp$._zIndexDirty = true) : null;
    }};
  SlotZIndexTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotZIndexTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function DeformTimelineState(pool) {
    MutilpleValueTimelineState.call(this, pool);
    this.geometryOffset = 0;
    this.displayFrame = null;
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  }
  DeformTimelineState.prototype.toString = function () {
    return '[class dragonBones.DeformTimelineState]';
  };
  DeformTimelineState.prototype._onClear = function () {
    MutilpleValueTimelineState.prototype._onClear.call(this);
    this.geometryOffset = 0;
    this.displayFrame = null;
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  };
  DeformTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    MutilpleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    if (this._timelineData != null) {
      var frameIntOffset = ensureNotNull(this._animationData).frameIntOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + 3 | 0) | 0;
      var dragonBonesData = (tmp$_0 = (tmp$ = this._animationData) != null ? tmp$.parent : null) != null ? tmp$_0.parent : null;
      var frameIntArray = ensureNotNull(dragonBonesData).frameIntArray;
      var slot = ensureNotNull(ensureNotNull(this.targetBlendState).targetSlot);
      this.geometryOffset = numberToInt(ensureNotNull(frameIntArray)[frameIntOffset + 0 | 0]);
      if (this.geometryOffset < 0) {
        this.geometryOffset = this.geometryOffset + 65536 | 0;
      }tmp$_1 = slot.displayFrameCount;
      for (var i = 0; i < tmp$_1; i++) {
        var displayFrame = slot.getDisplayFrameAt_za3lpa$(i);
        tmp$_2 = displayFrame.getGeometryData();
        if (tmp$_2 == null) {
          continue;
        }var geometryData = tmp$_2;
        if (geometryData.offset === this.geometryOffset) {
          this.displayFrame = displayFrame;
          (tmp$_3 = this.displayFrame) != null ? (tmp$_3.updateDeformVertices(), Unit) : null;
          break;
        }}
      if (this.displayFrame == null) {
        this.returnToPool();
        return;
      }this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
      this._valueCount = numberToInt(frameIntArray[frameIntOffset + 2 | 0]);
      this._deformCount_0 = numberToInt(frameIntArray[frameIntOffset + 1 | 0]);
      this._deformOffset_0 = numberToInt(frameIntArray[frameIntOffset + 3 | 0]);
      this._sameValueOffset_0 = numberToInt(frameIntArray[frameIntOffset + 4 | 0]) + ensureNotNull(this._animationData).frameFloatOffset | 0;
      this._valueScale = ensureNotNull(this._armature).armatureData.scale;
      this._valueArray = ensureNotNull(dragonBonesData.frameFloatArray);
      this._rd = new Float64Array(this._valueCount * 2 | 0);
    } else {
      this._deformCount_0 = ensureNotNull(this.displayFrame).deformVertices.length;
    }
  };
  DeformTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0, tmp$_1;
    var blendState = ensureNotNull(this.targetBlendState);
    var slot = ensureNotNull(blendState.targetSlot);
    var blendWeight = blendState.blendWeight;
    var result = ensureNotNull(this.displayFrame).deformVertices;
    var valueArray = this._valueArray;
    if (valueArray != null) {
      var valueCount = this._valueCount;
      var deformOffset = this._deformOffset_0;
      var sameValueOffset = this._sameValueOffset_0;
      var rd = this._rd;
      tmp$ = this._deformCount_0;
      for (var i = 0; i < tmp$; i++) {
        if (i < deformOffset) {
          tmp$_0 = valueArray[sameValueOffset + i | 0];
        } else if (i < (deformOffset + valueCount | 0))
          tmp$_0 = rd[i - deformOffset | 0];
        else {
          tmp$_0 = valueArray[sameValueOffset + i - valueCount | 0];
        }
        var value = tmp$_0;
        if (blendState.dirty > 1) {
          result[i] = result[i] + value * blendWeight;
        } else {
          result[i] = value * blendWeight;
        }
      }
    } else if (blendState.dirty === 1) {
      tmp$_1 = this._deformCount_0;
      for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
        result[i_0] = 0.0;
      }
    }if (_isDirty || this.dirty) {
      this.dirty = false;
      if (equals(slot._geometryData, ensureNotNull(this.displayFrame).getGeometryData())) {
        slot._verticesDirty = true;
      }}};
  DeformTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeformTimelineState',
    interfaces: [MutilpleValueTimelineState]
  };
  function IKConstraintTimelineState(pool) {
    DoubleValueTimelineState.call(this, pool);
  }
  IKConstraintTimelineState.prototype.toString = function () {
    return '[class dragonBones.IKConstraintTimelineState]';
  };
  IKConstraintTimelineState.prototype._onUpdateFrame = function () {
    var tmp$;
    DoubleValueTimelineState.prototype._onUpdateFrame.call(this);
    var ikConstraint = ensureNotNull(this.targetIKConstraint);
    if (this._timelineData != null) {
      ikConstraint._bendPositive = this._currentA > 0.0;
      ikConstraint._weight = this._currentB;
    } else {
      var ikConstraintData = Kotlin.isType(tmp$ = ikConstraint._constraintData, IKConstraintData) ? tmp$ : throwCCE();
      ikConstraint._bendPositive = ikConstraintData.bendPositive;
      ikConstraint._weight = ikConstraintData.weight;
    }
    ikConstraint.invalidUpdate();
    this.dirty = false;
  };
  IKConstraintTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 0.01;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray);
  };
  IKConstraintTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IKConstraintTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function AnimationProgressTimelineState(pool) {
    SingleValueTimelineState.call(this, pool);
  }
  AnimationProgressTimelineState.prototype.toString = function () {
    return '[class dragonBones.AnimationProgressTimelineState]';
  };
  AnimationProgressTimelineState.prototype._onUpdateFrame = function () {
    SingleValueTimelineState.prototype._onUpdateFrame.call(this);
    var animationState = ensureNotNull(this.targetAnimationState);
    if (animationState._parent != null) {
      animationState.currentTime = this._result * animationState.totalTime;
    }this.dirty = false;
  };
  AnimationProgressTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 1.0E-4;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray);
  };
  AnimationProgressTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationProgressTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function AnimationWeightTimelineState(pool) {
    SingleValueTimelineState.call(this, pool);
  }
  AnimationWeightTimelineState.prototype.toString = function () {
    return '[class dragonBones.AnimationWeightTimelineState]';
  };
  AnimationWeightTimelineState.prototype._onUpdateFrame = function () {
    SingleValueTimelineState.prototype._onUpdateFrame.call(this);
    var animationState = ensureNotNull(this.targetAnimationState);
    if (animationState._parent != null) {
      animationState.weight = this._result;
    }this.dirty = false;
  };
  AnimationWeightTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 1.0E-4;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray);
  };
  AnimationWeightTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationWeightTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function AnimationParametersTimelineState(pool) {
    DoubleValueTimelineState.call(this, pool);
  }
  AnimationParametersTimelineState.prototype.toString = function () {
    return '[class dragonBones.AnimationParametersTimelineState]';
  };
  AnimationParametersTimelineState.prototype._onUpdateFrame = function () {
    DoubleValueTimelineState.prototype._onUpdateFrame.call(this);
    var animationState = ensureNotNull(this.targetAnimationState);
    if (animationState._parent != null) {
      animationState.parameterX = this._resultA;
      animationState.parameterY = this._resultB;
    }this.dirty = false;
  };
  AnimationParametersTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 1.0E-4;
    this._valueArray = ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray);
  };
  AnimationParametersTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationParametersTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function WorldClock() {
    this.time = TimeSpan.Companion.fromSeconds_14dthe$(0);
    this.timeScale = 1.0;
    this._systemTime_0 = DateTime.Companion.EPOCH;
    this._animatebles_0 = ArrayList_init();
    this._clock_0 = null;
  }
  WorldClock.prototype.advanceTime_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1;
    var passedTime_0 = TimeSpan.Companion.fromSeconds_14dthe$(passedTime);
    if (!(passedTime_0 != null ? passedTime_0.equals(passedTime_0) : null)) {
      passedTime_0 = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }var currentTime = DateTime.Companion.now();
    if (passedTime_0.compareTo_11rb$(TimeSpan.Companion.fromSeconds_14dthe$(0)) < 0) {
      passedTime_0 = currentTime.minus_mw5vjr$(this._systemTime_0);
    }this._systemTime_0 = currentTime;
    if (this.timeScale !== 1.0) {
      passedTime_0 = passedTime_0.times_14dthe$(this.timeScale);
    }if (passedTime_0 != null ? passedTime_0.equals(TimeSpan.Companion.fromSeconds_14dthe$(0)) : null) {
      return;
    }if (passedTime_0.compareTo_11rb$(TimeSpan.Companion.fromSeconds_14dthe$(0)) < 0) {
      this.time = this.time.minus_fv8bff$(passedTime_0);
    } else {
      this.time = this.time.plus_fv8bff$(passedTime_0);
    }
    var r = 0;
    tmp$ = this._animatebles_0.size;
    for (var i = 0; i < tmp$; i++) {
      var animatable = this._animatebles_0.get_za3lpa$(i);
      if (animatable != null) {
        if (r > 0) {
          this._animatebles_0.set_wxm5ur$(i - r | 0, animatable);
          this._animatebles_0.set_wxm5ur$(i, null);
        }animatable.advanceTime_14dthe$(passedTime_0.seconds);
      } else {
        r = r + 1 | 0;
      }
    }
    if (r > 0) {
      tmp$_0 = this._animatebles_0.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        var animateble = this._animatebles_0.get_za3lpa$(i_0);
        if (animateble != null) {
          this._animatebles_0.set_wxm5ur$(i_0 - r | 0, animateble);
        } else {
          r = r + 1 | 0;
        }
      }
      tmp$_1 = this._animatebles_0;
      set_lengthSet_1(tmp$_1, get_lengthSet_1(tmp$_1) - r | 0);
    }};
  WorldClock.prototype.contains_tgyvsu$ = function (value) {
    if (equals(value, this)) {
      return false;
    }var ancestor = value;
    while (!equals(ancestor, this) && ancestor != null) {
      ancestor = ancestor.clock;
    }
    return equals(ancestor, this);
  };
  WorldClock.prototype.add_tgyvsu$ = function (value) {
    if (this._animatebles_0.indexOf_11rb$(value) < 0) {
      this._animatebles_0.add_11rb$(value);
      value.clock = this;
    }};
  WorldClock.prototype.remove_tgyvsu$ = function (value) {
    var index = this._animatebles_0.indexOf_11rb$(value);
    if (index >= 0) {
      this._animatebles_0.set_wxm5ur$(index, null);
      value.clock = null;
    }};
  WorldClock.prototype.clear = function () {
    var $receiver = this._animatebles_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var animatable = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (animatable != null) {
        animatable.clock = null;
      }}
  };
  Object.defineProperty(WorldClock.prototype, 'clock', {
    get: function () {
      return this._clock_0;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      if (equals(this._clock_0, value)) {
        return;
      }(tmp$ = this._clock_0) != null ? (tmp$.remove_tgyvsu$(this), Unit) : null;
      this._clock_0 = value;
      (tmp$_0 = this._clock_0) != null ? (tmp$_0.add_tgyvsu$(this), Unit) : null;
    }
  });
  WorldClock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorldClock',
    interfaces: [IAnimatable]
  };
  function WorldClock_init(time, $this) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromSeconds_14dthe$(0);
    }$this = $this || Object.create(WorldClock.prototype);
    WorldClock.call($this);
    $this.time = time;
    $this._systemTime_0 = DateTime.Companion.now();
    return $this;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function Armature(pool) {
    Armature$Companion_getInstance();
    BaseObject.call(this, pool);
    this.inheritAnimation = true;
    this.userData = null;
    this._lockUpdate = false;
    this._slotsDirty_0 = true;
    this._zOrderDirty_0 = false;
    this._zIndexDirty = false;
    this._alphaDirty = true;
    this._flipX_0 = false;
    this._flipY_0 = false;
    this._cacheFrameIndex = -1;
    this._alpha_0 = 1.0;
    this._globalAlpha = 1.0;
    this._bones_0 = ArrayList_init();
    this._slots_0 = ArrayList_init();
    this._constraints = ArrayList_init();
    this._actions_0 = ArrayList_init();
    this._armatureData = null;
    this._animation_0 = null;
    this._proxy_0 = null;
    this._display_0 = null;
    this._replaceTextureAtlasData = null;
    this._replacedTexture_0 = null;
    this._dragonBones = null;
    this._clock_0 = null;
    this._parent = null;
  }
  Armature.prototype.toString = function () {
    return '[class dragonBones.Armature]';
  };
  function Armature$Companion() {
    Armature$Companion_instance = this;
  }
  Armature$Companion.prototype._onSortSlots_oqrh8c$ = function (a, b) {
    var aa = (a._zIndex * 1000 | 0) + a._zOrder | 0;
    var bb = (b._zIndex * 1000 | 0) + b._zOrder | 0;
    return Kotlin.primitiveCompareTo(aa, bb);
  };
  Armature$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Armature$Companion_instance = null;
  function Armature$Companion_getInstance() {
    if (Armature$Companion_instance === null) {
      new Armature$Companion();
    }return Armature$Companion_instance;
  }
  Armature.prototype._onClear = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    (tmp$ = this._clock_0) != null ? (tmp$.remove_tgyvsu$(this), Unit) : null;
    var $receiver = this._bones_0;
    var tmp$_3;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3)).returnToPool();
    }
    var $receiver_0 = this._slots_0;
    var tmp$_4;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      $receiver_0.get_za3lpa$((tmp$_4 = n_0, n_0 = tmp$_4 + 1 | 0, tmp$_4)).returnToPool();
    }
    var $receiver_1 = this._constraints;
    var tmp$_5;
    var n_1 = 0;
    while (n_1 < $receiver_1.size) {
      $receiver_1.get_za3lpa$((tmp$_5 = n_1, n_1 = tmp$_5 + 1 | 0, tmp$_5)).returnToPool();
    }
    var $receiver_2 = this._actions_0;
    var tmp$_6;
    var n_2 = 0;
    while (n_2 < $receiver_2.size) {
      $receiver_2.get_za3lpa$((tmp$_6 = n_2, n_2 = tmp$_6 + 1 | 0, tmp$_6)).returnToPool();
    }
    (tmp$_0 = this._animation_0) != null ? (tmp$_0.returnToPool(), Unit) : null;
    (tmp$_1 = this._proxy_0) != null ? (tmp$_1.dbClear(), Unit) : null;
    (tmp$_2 = this._replaceTextureAtlasData) != null ? (tmp$_2.returnToPool(), Unit) : null;
    this.inheritAnimation = true;
    this.userData = null;
    this._lockUpdate = false;
    this._slotsDirty_0 = true;
    this._zOrderDirty_0 = false;
    this._zIndexDirty = false;
    this._alphaDirty = true;
    this._flipX_0 = false;
    this._flipY_0 = false;
    this._cacheFrameIndex = -1;
    this._alpha_0 = 1.0;
    this._globalAlpha = 1.0;
    set_lengthSet_1(this._bones_0, 0);
    set_lengthSet_1(this._slots_0, 0);
    set_lengthSet_1(this._constraints, 0);
    set_lengthSet_1(this._actions_0, 0);
    this._armatureData = null;
    this._animation_0 = null;
    this._proxy_0 = null;
    this._display_0 = null;
    this._replaceTextureAtlasData = null;
    this._replacedTexture_0 = null;
    this._dragonBones = null;
    this._clock_0 = null;
    this._parent = null;
  };
  Armature.prototype._sortZOrder_o65udl$ = function (slotIndices, offset) {
    var slotDatas = ensureNotNull(this._armatureData).sortedSlots;
    if (this._zOrderDirty_0 || slotIndices != null) {
      var l = get_lengthSet_1(slotDatas);
      for (var i = 0; i < l; i++) {
        var slotIndex = slotIndices == null ? i : slotIndices[offset + i | 0];
        if (slotIndex < 0 || slotIndex >= l) {
          continue;
        }var slotData = slotDatas.get_za3lpa$(slotIndex);
        var slot = this.getSlot_pdl1vj$(slotData.name);
        if (slot != null) {
          slot._setZOrder_za3lpa$(i);
        }}
      this._slotsDirty_0 = true;
      this._zOrderDirty_0 = slotIndices != null;
    }};
  Armature.prototype._addBone_vcc4uy$ = function (value) {
    if (this._bones_0.indexOf_11rb$(value) < 0) {
      this._bones_0.add_11rb$(value);
    }};
  Armature.prototype._addSlot_vcmxg4$ = function (value) {
    if (this._slots_0.indexOf_11rb$(value) < 0) {
      this._slots_0.add_11rb$(value);
    }};
  Armature.prototype._addConstraint_ineuod$ = function (value) {
    if (this._constraints.indexOf_11rb$(value) < 0) {
      this._constraints.add_11rb$(value);
    }};
  Armature.prototype._bufferAction_8f84tb$ = function (action, append) {
    if (this._actions_0.indexOf_11rb$(action) < 0) {
      if (append) {
        push(this._actions_0, action);
      } else {
        unshift(this._actions_0, action);
      }
    }};
  Armature.prototype.dispose = function () {
    if (this._armatureData != null) {
      this._lockUpdate = true;
      this.returnToPool();
    }};
  Armature.prototype.init_ns4wie$ = function (armatureData, proxy, display, dragonBones) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this._armatureData != null) {
      return;
    }this._armatureData = armatureData;
    this._animation_0 = this.pool.animation.borrow();
    this._proxy_0 = proxy;
    this._display_0 = display;
    this._dragonBones = dragonBones;
    (tmp$ = this._proxy_0) != null ? (tmp$.dbInit_9a3g6p$(this), Unit) : null;
    (tmp$_0 = this._animation_0) != null ? (tmp$_0.init_9a3g6p$(this), Unit) : null;
    (tmp$_2 = this._animation_0) != null ? (tmp$_2.animations = ensureNotNull((tmp$_1 = this._armatureData) != null ? tmp$_1.animations : null)) : null;
  };
  Armature.prototype.advanceTime_14dthe$ = function (passedTime) {
    this._advanceTime_0(passedTime);
    var $receiver = this._slots_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var tmp$_0;
      (tmp$_0 = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).childArmature) != null ? (tmp$_0.advanceTime_14dthe$(passedTime), Unit) : null;
    }
  };
  Armature.prototype._advanceTime_0 = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (this._lockUpdate) {
      return;
    }this._lockUpdate = true;
    if (this._armatureData == null) {
      console_getInstance().warn_vqirvp$(['The armature has been disposed.']);
      return;
    } else if (((tmp$ = this._armatureData) != null ? tmp$.parent : null) == null) {
      console_getInstance().warn_vqirvp$(['The armature data has been disposed.\nPlease make sure dispose armature before call factory.clear().']);
      return;
    }var prevCacheFrameIndex = this._cacheFrameIndex;
    (tmp$_0 = this._animation_0) != null ? (tmp$_0.advanceTime_14dthe$(passedTime), Unit) : null;
    if (this._slotsDirty_0 || this._zIndexDirty) {
      sortWith(this._slots_0, new Comparator$ObjectLiteral(getCallableRef('_onSortSlots', function ($receiver, a, b) {
        return $receiver._onSortSlots_oqrh8c$(a, b);
      }.bind(null, Armature$Companion_getInstance()))));
      if (this._zIndexDirty) {
        tmp$_1 = this._slots_0.size;
        for (var i = 0; i < tmp$_1; i++) {
          this._slots_0.get_za3lpa$(i)._setZOrder_za3lpa$(i);
        }
      }this._slotsDirty_0 = false;
      this._zIndexDirty = false;
    }if (this._alphaDirty) {
      this._alphaDirty = false;
      this._globalAlpha = this._alpha_0 * ((tmp$_3 = (tmp$_2 = this._parent) != null ? tmp$_2._globalAlpha : null) != null ? tmp$_3 : 1.0);
      tmp$_4 = this._bones_0.size;
      for (var n = 0; n < tmp$_4; n++) {
        this._bones_0.get_za3lpa$(n)._updateAlpha();
      }
      tmp$_5 = this._slots_0.size;
      for (var n_0 = 0; n_0 < tmp$_5; n_0++) {
        this._slots_0.get_za3lpa$(n_0)._updateAlpha();
      }
    }if (this._cacheFrameIndex < 0 || this._cacheFrameIndex !== prevCacheFrameIndex) {
      tmp$_6 = get_length_1(this._bones_0);
      for (var i_0 = 0; i_0 < tmp$_6; i_0++) {
        this._bones_0.get_za3lpa$(i_0).update_za3lpa$(this._cacheFrameIndex);
      }
      tmp$_7 = get_length_1(this._slots_0);
      for (var i_1 = 0; i_1 < tmp$_7; i_1++) {
        this._slots_0.get_za3lpa$(i_1).update_za3lpa$(this._cacheFrameIndex);
      }
    }if (get_lengthSet_1(this._actions_0) > 0) {
      var $receiver = this._actions_0;
      var tmp$_9;
      var n_1 = 0;
      while (n_1 < $receiver.size) {
        var action = $receiver.get_za3lpa$((tmp$_9 = n_1, n_1 = tmp$_9 + 1 | 0, tmp$_9));
        var tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
        var actionData = action.actionData;
        if (actionData != null) {
          if (actionData.type === ActionType$Play_getInstance()) {
            if (action.slot != null) {
              var childArmature = (tmp$_10 = action.slot) != null ? tmp$_10.childArmature : null;
              (tmp$_11 = childArmature != null ? childArmature.animation : null) != null ? tmp$_11.fadeIn_qtlk36$(actionData.name) : null;
            } else if (action.bone != null) {
              tmp$_12 = this._slots_0.size;
              for (var n_2 = 0; n_2 < tmp$_12; n_2++) {
                var slot = this._slots_0.get_za3lpa$(n_2);
                if (equals(slot.parent, action.bone)) {
                  var childArmature_0 = slot.childArmature;
                  (tmp$_13 = childArmature_0 != null ? childArmature_0.animation : null) != null ? tmp$_13.fadeIn_qtlk36$(actionData.name) : null;
                }}
            } else {
              (tmp$_14 = this._animation_0) != null ? tmp$_14.fadeIn_qtlk36$(actionData.name) : null;
            }
          }}action.returnToPool();
      }
      set_lengthSet_1(this._actions_0, 0);
    }this._lockUpdate = false;
    (tmp$_8 = this._proxy_0) != null ? (tmp$_8.dbUpdate(), Unit) : null;
  };
  Armature.prototype.invalidUpdate_4mavae$ = function (boneName, updateSlot) {
    if (boneName === void 0)
      boneName = null;
    if (updateSlot === void 0)
      updateSlot = false;
    if (boneName != null && boneName.length > 0) {
      var bone = this.getBone_pdl1vj$(boneName);
      if (bone != null) {
        bone.invalidUpdate();
        if (updateSlot) {
          var $receiver = this._slots_0;
          var tmp$;
          var n = 0;
          while (n < $receiver.size) {
            var slot = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
            if (equals(slot.parent, bone)) {
              slot.invalidUpdate();
            }}
        }}} else {
      var $receiver_0 = this._bones_0;
      var tmp$_0;
      var n_0 = 0;
      while (n_0 < $receiver_0.size) {
        $receiver_0.get_za3lpa$((tmp$_0 = n_0, n_0 = tmp$_0 + 1 | 0, tmp$_0)).invalidUpdate();
      }
      if (updateSlot) {
        var $receiver_1 = this._slots_0;
        var tmp$_1;
        var n_1 = 0;
        while (n_1 < $receiver_1.size) {
          $receiver_1.get_za3lpa$((tmp$_1 = n_1, n_1 = tmp$_1 + 1 | 0, tmp$_1)).invalidUpdate();
        }
      }}
  };
  Armature.prototype.containsPoint_lu1900$ = function (x, y) {
    var $receiver = this._slots_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var slot = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (slot.containsPoint_lu1900$(x, y)) {
        return slot;
      }}
    return null;
  };
  Armature.prototype.intersectsSegment_e4ky6u$ = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var tmp$;
    var isV = xA === xB;
    var dMin = 0.0;
    var dMax = 0.0;
    var intXA = 0.0;
    var intYA = 0.0;
    var intXB = 0.0;
    var intYB = 0.0;
    var intAN = 0.0;
    var intBN = 0.0;
    var intSlotA = null;
    var intSlotB = null;
    tmp$ = this._slots_0.size;
    for (var n = 0; n < tmp$; n++) {
      var slot = this._slots_0.get_za3lpa$(n);
      var intersectionCount = slot.intersectsSegment_e4ky6u$(xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians);
      if (intersectionCount > 0) {
        if (intersectionPointA != null || intersectionPointB != null) {
          if (intersectionPointA != null) {
            var d = isV ? intersectionPointA.y - yA : intersectionPointA.x - xA;
            if (d < 0.0) {
              d = -d;
            }if (intSlotA == null || d < dMin) {
              dMin = d;
              intXA = intersectionPointA.x;
              intYA = intersectionPointA.y;
              intSlotA = slot;
              if (normalRadians != null) {
                intAN = normalRadians.x;
              }}}if (intersectionPointB != null) {
            var d_0 = intersectionPointB.x - xA;
            if (d_0 < 0.0) {
              d_0 = -d_0;
            }if (intSlotB == null || d_0 > dMax) {
              dMax = d_0;
              intXB = intersectionPointB.x;
              intYB = intersectionPointB.y;
              intSlotB = slot;
              if (normalRadians != null) {
                intBN = normalRadians.y;
              }}}} else {
          intSlotA = slot;
          break;
        }
      }}
    if (intSlotA != null && intersectionPointA != null) {
      intersectionPointA.x = intXA;
      intersectionPointA.y = intYA;
      if (normalRadians != null) {
        normalRadians.x = intAN;
      }}if (intSlotB != null && intersectionPointB != null) {
      intersectionPointB.x = intXB;
      intersectionPointB.y = intYB;
      if (normalRadians != null) {
        normalRadians.y = intBN;
      }}return intSlotA;
  };
  Armature.prototype.getBone_pdl1vj$ = function (name) {
    var $receiver = this._bones_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var bone = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (equals(bone.name, name)) {
        return bone;
      }}
    return null;
  };
  Armature.prototype.getBoneByDisplay_za3rmp$ = function (display) {
    var slot = this.getSlotByDisplay_s8jyv4$(display);
    return slot != null ? slot.parent : null;
  };
  Armature.prototype.getSlot_pdl1vj$ = function (name) {
    var $receiver = this._slots_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var slot = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (equals(slot.name, name)) {
        return slot;
      }}
    return null;
  };
  Armature.prototype.getSlotByDisplay_s8jyv4$ = function (display) {
    if (display != null) {
      var $receiver = this._slots_0;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        var slot = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
        if (equals(slot.display, display)) {
          return slot;
        }}
    }return null;
  };
  Armature.prototype.getBones = function () {
    return this._bones_0;
  };
  Armature.prototype.getSlots = function () {
    return this._slots_0;
  };
  Object.defineProperty(Armature.prototype, 'flipX', {
    get: function () {
      return this._flipX_0;
    },
    set: function (value) {
      if (this._flipX_0 === value) {
        return;
      }this._flipX_0 = value;
      this.invalidUpdate_4mavae$();
    }
  });
  Object.defineProperty(Armature.prototype, 'flipY', {
    get: function () {
      return this._flipY_0;
    },
    set: function (value) {
      if (this._flipY_0 === value) {
        return;
      }this._flipY_0 = value;
      this.invalidUpdate_4mavae$();
    }
  });
  Object.defineProperty(Armature.prototype, 'cacheFrameRate', {
    get: function () {
      return ensureNotNull(this._armatureData).cacheFrameRate;
    },
    set: function (value) {
      if (ensureNotNull(this._armatureData).cacheFrameRate !== value) {
        ensureNotNull(this._armatureData).cacheFrames_za3lpa$(value);
        var $receiver = this._slots_0;
        var tmp$;
        var n = 0;
        while (n < $receiver.size) {
          var childArmature = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).childArmature;
          if (childArmature != null) {
            childArmature.cacheFrameRate = value;
          }}
      }}
  });
  Object.defineProperty(Armature.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._armatureData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Armature.prototype, 'armatureData', {
    get: function () {
      return ensureNotNull(this._armatureData);
    }
  });
  Object.defineProperty(Armature.prototype, 'animation', {
    get: function () {
      return ensureNotNull(this._animation_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'proxy', {
    get: function () {
      return ensureNotNull(this._proxy_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'eventDispatcher', {
    get: function () {
      return ensureNotNull(this._proxy_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'display', {
    get: function () {
      return ensureNotNull(this._display_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'replacedTexture', {
    get: function () {
      return this._replacedTexture_0;
    },
    set: function (value) {
      var tmp$;
      if (!equals(this._replacedTexture_0, value)) {
        (tmp$ = this._replaceTextureAtlasData) != null ? (tmp$.returnToPool(), Unit) : null;
        this._replaceTextureAtlasData = null;
        this._replacedTexture_0 = value;
        var $receiver = this._slots_0;
        var tmp$_0;
        var n = 0;
        while (n < $receiver.size) {
          var slot = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          slot.invalidUpdate();
          slot.update_za3lpa$(-1);
        }
      }}
  });
  Object.defineProperty(Armature.prototype, 'clock', {
    get: function () {
      return this._clock_0;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      if (equals(this._clock_0, value)) {
        return;
      }(tmp$ = this._clock_0) != null ? (tmp$.remove_tgyvsu$(this), Unit) : null;
      this._clock_0 = value;
      (tmp$_0 = this._clock_0) != null ? (tmp$_0.add_tgyvsu$(this), Unit) : null;
      var $receiver = this._slots_0;
      var tmp$_1;
      var n = 0;
      while (n < $receiver.size) {
        var childArmature = $receiver.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1)).childArmature;
        if (childArmature != null) {
          childArmature.clock = this._clock_0;
        }}
    }
  });
  Armature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Armature',
    interfaces: [IAnimatable, BaseObject]
  };
  function Bone(pool) {
    TransformObject.call(this, pool);
    this.offsetMode = OffsetMode$Additive_getInstance();
    this.animationPose = new Transform();
    this._transformDirty = false;
    this._childrenTransformDirty = false;
    this._localDirty = true;
    this._hasConstraint = false;
    this._visible = true;
    this._cachedFrameIndex = -1;
    this._boneData = null;
    this._parent = null;
    this._cachedFrameIndices = null;
  }
  Bone.prototype.toString = function () {
    return '[class dragonBones.Bone]';
  };
  Bone.prototype._onClear = function () {
    TransformObject.prototype._onClear.call(this);
    this.offsetMode = OffsetMode$Additive_getInstance();
    this.animationPose.identity();
    this._transformDirty = false;
    this._childrenTransformDirty = false;
    this._localDirty = true;
    this._hasConstraint = false;
    this._visible = true;
    this._cachedFrameIndex = -1;
    this._boneData = null;
    this._parent = null;
    this._cachedFrameIndices = null;
  };
  Bone.prototype._updateGlobalTransformMatrix_6taknv$ = function (isCache) {
    var tmp$, tmp$_0, tmp$_1;
    var boneData = this._boneData;
    var global = this.global;
    var globalTransformMatrix = this.globalTransformMatrix;
    var origin = this.origin;
    var offset = this.offset;
    var animationPose = this.animationPose;
    var parent = this._parent;
    var flipX = ensureNotNull(this._armature).flipX;
    var flipY = ensureNotNull(this._armature).flipY === DragonBones$Companion_getInstance().yDown;
    var inherit = parent != null;
    var rotation = 0.0;
    if (this.offsetMode === OffsetMode$Additive_getInstance()) {
      if (origin != null) {
        global.x = origin.x + offset.x + animationPose.x;
        global.scaleX = origin.scaleX * offset.scaleX * animationPose.scaleX;
        global.scaleY = origin.scaleY * offset.scaleY * animationPose.scaleY;
        if (DragonBones$Companion_getInstance().yDown) {
          global.y = origin.y + offset.y + animationPose.y;
          global.skew = origin.skew + offset.skew + animationPose.skew;
          global.rotation = origin.rotation + offset.rotation + animationPose.rotation;
        } else {
          global.y = origin.y - offset.y + animationPose.y;
          global.skew = origin.skew - offset.skew + animationPose.skew;
          global.rotation = origin.rotation - offset.rotation + animationPose.rotation;
        }
      } else {
        global.copyFrom_scgbvr$(offset);
        if (!DragonBones$Companion_getInstance().yDown) {
          global.y = -global.y;
          global.skew = -global.skew;
          global.rotation = -global.rotation;
        }global.add_scgbvr$(animationPose);
      }
    } else if (this.offsetMode === OffsetMode$None_getInstance()) {
      if (origin != null) {
        global.copyFrom_scgbvr$(origin).add_scgbvr$(animationPose);
      } else {
        global.copyFrom_scgbvr$(animationPose);
      }
    } else {
      inherit = false;
      global.copyFrom_scgbvr$(offset);
      if (!DragonBones$Companion_getInstance().yDown) {
        global.y = -global.y;
        global.skew = -global.skew;
        global.rotation = -global.rotation;
      }}
    if (inherit) {
      var parent_0 = ensureNotNull(parent);
      var isSurface = ensureNotNull(parent_0._boneData).isSurface;
      var surfaceBone = isSurface ? (Kotlin.isType(tmp$ = parent_0, Surface) ? tmp$ : throwCCE())._bone : null;
      var parentMatrix = isSurface ? (Kotlin.isType(tmp$_0 = parent_0, Surface) ? tmp$_0 : throwCCE())._getGlobalTransformMatrix_dleff0$(global.x, global.y) : parent_0.globalTransformMatrix;
      if (ensureNotNull(boneData).inheritScale && (!isSurface || surfaceBone != null)) {
        if (isSurface) {
          if (boneData.inheritRotation) {
            global.rotation = global.rotation + parent_0.global.rotation;
          }(Kotlin.isType(tmp$_1 = surfaceBone, Bone) ? tmp$_1 : throwCCE()).updateGlobalTransform();
          global.scaleX = global.scaleX * surfaceBone.global.scaleX;
          global.scaleY = global.scaleY * surfaceBone.global.scaleY;
          parentMatrix.transformPoint_cck2st$(global.x, global.y, global);
          global.toMatrix_dyon7w$(globalTransformMatrix);
          if (boneData.inheritTranslation) {
            global.x = globalTransformMatrix.tx;
            global.y = globalTransformMatrix.ty;
          } else {
            globalTransformMatrix.tx = global.x;
            globalTransformMatrix.ty = global.y;
          }
        } else {
          if (!boneData.inheritRotation) {
            parent_0.updateGlobalTransform();
            if (flipX && flipY) {
              rotation = global.rotation - (parent_0.global.rotation + math.PI);
            } else if (flipX) {
              rotation = global.rotation + parent_0.global.rotation + math.PI;
            } else if (flipY) {
              rotation = global.rotation + parent_0.global.rotation;
            } else {
              rotation = global.rotation - parent_0.global.rotation;
            }
            global.rotation = rotation;
          }global.toMatrix_dyon7w$(globalTransformMatrix);
          globalTransformMatrix.concat_dyon7w$(parentMatrix);
          if (boneData.inheritTranslation) {
            global.x = globalTransformMatrix.tx;
            global.y = globalTransformMatrix.ty;
          } else {
            globalTransformMatrix.tx = global.x;
            globalTransformMatrix.ty = global.y;
          }
          if (isCache) {
            global.fromMatrix_dyon7w$(globalTransformMatrix);
          } else {
            this._globalDirty = true;
          }
        }
      } else {
        if (boneData.inheritTranslation) {
          var x = global.x;
          var y = global.y;
          global.x = parentMatrix.a * x + parentMatrix.c * y + parentMatrix.tx;
          global.y = parentMatrix.b * x + parentMatrix.d * y + parentMatrix.ty;
        } else {
          if (flipX) {
            global.x = -global.x;
          }if (flipY) {
            global.y = -global.y;
          }}
        if (boneData.inheritRotation) {
          parent_0.updateGlobalTransform();
          if (parent_0.global.scaleX < 0.0) {
            rotation = global.rotation + parent_0.global.rotation + math.PI;
          } else {
            rotation = global.rotation + parent_0.global.rotation;
          }
          if (parentMatrix.a * parentMatrix.d - parentMatrix.b * parentMatrix.c < 0.0) {
            rotation -= global.rotation * 2.0;
            if (flipX !== flipY || boneData.inheritReflection) {
              global.skew = global.skew + math.PI;
            }if (!DragonBones$Companion_getInstance().yDown) {
              global.skew = -global.skew;
            }}global.rotation = rotation;
        } else if (flipX || flipY) {
          if (flipX && flipY) {
            rotation = global.rotation + math.PI;
          } else {
            if (flipX) {
              rotation = math.PI - global.rotation;
            } else {
              rotation = -global.rotation;
            }
            global.skew = global.skew + math.PI;
          }
          global.rotation = rotation;
        }global.toMatrix_dyon7w$(globalTransformMatrix);
      }
    } else {
      if (flipX || flipY) {
        if (flipX) {
          global.x = -global.x;
        }if (flipY) {
          global.y = -global.y;
        }if (flipX && flipY) {
          rotation = global.rotation + math.PI;
        } else {
          if (flipX) {
            rotation = math.PI - global.rotation;
          } else {
            rotation = -global.rotation;
          }
          global.skew = global.skew + math.PI;
        }
        global.rotation = rotation;
      }global.toMatrix_dyon7w$(globalTransformMatrix);
    }
  };
  Bone.prototype._updateAlpha = function () {
    if (this._parent != null) {
      this._globalAlpha = this._alpha * ensureNotNull(this._parent)._globalAlpha;
    } else {
      this._globalAlpha = this._alpha * ensureNotNull(this._armature)._globalAlpha;
    }
  };
  Bone.prototype.init_7qxzn9$ = function (boneData, armatureValue) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (this._boneData != null) {
      return;
    }this._boneData = boneData;
    this._armature = armatureValue;
    this._alpha = ensureNotNull(this._boneData).alpha;
    if (((tmp$ = this._boneData) != null ? tmp$.parent : null) != null) {
      tmp$_3 = this._armature;
      tmp$_2 = (tmp$_1 = (tmp$_0 = this._boneData) != null ? tmp$_0.parent : null) != null ? tmp$_1.name : null;
      this._parent = tmp$_3 != null ? tmp$_3.getBone_pdl1vj$(tmp$_2) : null;
    }(tmp$_4 = this._armature) != null ? (tmp$_4._addBone_vcc4uy$(this), Unit) : null;
    this.origin = (tmp$_5 = this._boneData) != null ? tmp$_5.transform : null;
  };
  Bone.prototype.update_za3lpa$ = function (cacheFrameIndex) {
    var tmp$, tmp$_0;
    var cacheFrameIndex_0 = cacheFrameIndex;
    if (cacheFrameIndex_0 >= 0 && this._cachedFrameIndices != null) {
      var cachedFrameIndex = ensureNotNull(this._cachedFrameIndices).get_za3lpa$(cacheFrameIndex_0);
      if (cachedFrameIndex >= 0 && this._cachedFrameIndex === cachedFrameIndex) {
        this._transformDirty = false;
      } else if (cachedFrameIndex >= 0) {
        this._transformDirty = true;
        this._cachedFrameIndex = cachedFrameIndex;
      } else {
        if (this._hasConstraint) {
          var $receiver = ensureNotNull(this._armature)._constraints;
          var tmp$_1;
          var n = 0;
          while (n < $receiver.size) {
            var constraint = $receiver.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
            if (equals(constraint._root, this)) {
              constraint.update();
            }}
        }if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        } else if (this._cachedFrameIndex >= 0) {
          this._transformDirty = false;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, this._cachedFrameIndex);
        } else {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        }
      }
    } else {
      if (this._hasConstraint) {
        var $receiver_0 = ensureNotNull(this._armature)._constraints;
        var tmp$_2;
        var n_0 = 0;
        while (n_0 < $receiver_0.size) {
          var constraint_0 = $receiver_0.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2));
          if (equals(constraint_0._root, this)) {
            constraint_0.update();
          }}
      }if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
        cacheFrameIndex_0 = -1;
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      }}
    if (this._transformDirty) {
      this._transformDirty = false;
      this._childrenTransformDirty = true;
      if (this._cachedFrameIndex < 0) {
        var isCache = cacheFrameIndex_0 >= 0;
        if (this._localDirty) {
          this._updateGlobalTransformMatrix_6taknv$(isCache);
        }if (isCache && this._cachedFrameIndices != null) {
          var res = ensureNotNull(ensureNotNull(this._armature)._armatureData).setCacheFrame_eeuvpt$(this.globalTransformMatrix, this.global);
          this._cachedFrameIndex = res;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, res);
        }} else {
        (tmp$_0 = (tmp$ = this._armature) != null ? tmp$._armatureData : null) != null ? (tmp$_0.getCacheFrame_bqh3xf$(this.globalTransformMatrix, this.global, this._cachedFrameIndex), Unit) : null;
      }
    } else if (this._childrenTransformDirty) {
      this._childrenTransformDirty = false;
    }this._localDirty = true;
  };
  Bone.prototype.updateByConstraint = function () {
    if (this._localDirty) {
      this._localDirty = false;
      if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
        this._updateGlobalTransformMatrix_6taknv$(true);
      }this._transformDirty = true;
    }};
  Bone.prototype.invalidUpdate = function () {
    this._transformDirty = true;
  };
  Bone.prototype.contains_vcc4uy$ = function (value) {
    if (equals(value, this)) {
      return false;
    }var ancestor = value;
    while (!equals(ancestor, this) && ancestor != null) {
      ancestor = ancestor.parent;
    }
    return equals(ancestor, this);
  };
  Object.defineProperty(Bone.prototype, 'boneData', {
    get: function () {
      return ensureNotNull(this._boneData);
    }
  });
  Object.defineProperty(Bone.prototype, 'visible', {
    get: function () {
      return this._visible;
    },
    set: function (value) {
      if (this._visible === value) {
        return;
      }this._visible = value;
      var $receiver = ensureNotNull(this._armature).getSlots();
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        var slot = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
        if (equals(slot.parent, this)) {
          slot._updateVisible();
        }}
    }
  });
  Object.defineProperty(Bone.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._boneData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Bone.prototype, 'parent', {
    get: function () {
      return this._parent;
    }
  });
  Bone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bone',
    interfaces: [TransformObject]
  };
  function Constraint(pool) {
    BaseObject.call(this, pool);
    this._constraintData = null;
    this._armature_9bx2pv$_0 = this._armature_9bx2pv$_0;
    this._target_e1oqg5$_0 = this._target_e1oqg5$_0;
    this._root_uvx9ro$_0 = this._root_uvx9ro$_0;
    this._bone = null;
  }
  Object.defineProperty(Constraint.prototype, '_armature', {
    get: function () {
      if (this._armature_9bx2pv$_0 == null)
        return throwUPAE('_armature');
      return this._armature_9bx2pv$_0;
    },
    set: function (_armature) {
      this._armature_9bx2pv$_0 = _armature;
    }
  });
  Object.defineProperty(Constraint.prototype, '_target', {
    get: function () {
      if (this._target_e1oqg5$_0 == null)
        return throwUPAE('_target');
      return this._target_e1oqg5$_0;
    },
    set: function (_target) {
      this._target_e1oqg5$_0 = _target;
    }
  });
  Object.defineProperty(Constraint.prototype, '_root', {
    get: function () {
      if (this._root_uvx9ro$_0 == null)
        return throwUPAE('_root');
      return this._root_uvx9ro$_0;
    },
    set: function (_root) {
      this._root_uvx9ro$_0 = _root;
    }
  });
  Constraint.prototype._onClear = function () {
    this._bone = null;
  };
  Object.defineProperty(Constraint.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._constraintData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Constraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Constraint',
    interfaces: [BaseObject]
  };
  function IKConstraint(pool) {
    Constraint.call(this, pool);
    this._scaleEnabled_0 = false;
    this._bendPositive = false;
    this._weight = 1.0;
  }
  IKConstraint.prototype.toString = function () {
    return '[class dragonBones.IKConstraint]';
  };
  IKConstraint.prototype._onClear = function () {
    Constraint.prototype._onClear.call(this);
    this._scaleEnabled_0 = false;
    this._bendPositive = false;
    this._weight = 1.0;
  };
  IKConstraint.prototype._computeA_0 = function () {
    var ikGlobal = this._target.global;
    var global = this._root.global;
    var globalTransformMatrix = this._root.globalTransformMatrix;
    var y = ikGlobal.y - global.y;
    var x = ikGlobal.x - global.x;
    var radian = Math_0.atan2(y, x);
    if (global.scaleX < 0.0) {
      radian += math.PI;
    }global.rotation = global.rotation + Transform$Companion_getInstance().normalizeRadian_14dthe$(radian - global.rotation) * this._weight;
    global.toMatrix_dyon7w$(globalTransformMatrix);
  };
  IKConstraint.prototype._computeB_0 = function () {
    var boneLength = ensureNotNull(ensureNotNull(this._bone)._boneData).length;
    var parent = this._root;
    var ikGlobal = this._target.global;
    var parentGlobal = parent.global;
    var global = ensureNotNull(this._bone).global;
    var globalTransformMatrix = ensureNotNull(this._bone).globalTransformMatrix;
    var x = globalTransformMatrix.a * boneLength;
    var y = globalTransformMatrix.b * boneLength;
    var lLL = x * x + y * y;
    var lL = Math_0.sqrt(lLL);
    var dX = global.x - parentGlobal.x;
    var dY = global.y - parentGlobal.y;
    var lPP = dX * dX + dY * dY;
    var lP = Math_0.sqrt(lPP);
    var rawRadian = global.rotation;
    var rawParentRadian = parentGlobal.rotation;
    var y_0 = dY;
    var x_0 = dX;
    var rawRadianA = Math_0.atan2(y_0, x_0);
    dX = ikGlobal.x - parentGlobal.x;
    dY = ikGlobal.y - parentGlobal.y;
    var lTT = dX * dX + dY * dY;
    var lT = Math_0.sqrt(lTT);
    var radianA;
    if (lL + lP <= lT || lT + lL <= lP || lT + lP <= lL) {
      var y_1 = ikGlobal.y - parentGlobal.y;
      var x_1 = ikGlobal.x - parentGlobal.x;
      radianA = Math_0.atan2(y_1, x_1);
      if (lL + lP > lT)
        if (lP < lL) {
          radianA += math.PI;
        }} else {
      var h = (lPP - lLL + lTT) / (2.0 * lTT);
      var x_2 = lPP - h * h * lTT;
      var r = Math_0.sqrt(x_2) / lT;
      var hX = parentGlobal.x + dX * h;
      var hY = parentGlobal.y + dY * h;
      var rX = -dY * r;
      var rY = dX * r;
      var isPPR = false;
      var parentParent = parent.parent;
      if (parentParent != null) {
        var parentParentMatrix = parentParent.globalTransformMatrix;
        isPPR = parentParentMatrix.a * parentParentMatrix.d - parentParentMatrix.b * parentParentMatrix.c < 0.0;
      }if (isPPR !== this._bendPositive) {
        global.x = hX - rX;
        global.y = hY - rY;
      } else {
        global.x = hX + rX;
        global.y = hY + rY;
      }
      var y_2 = global.y - parentGlobal.y;
      var x_3 = global.x - parentGlobal.x;
      radianA = Math_0.atan2(y_2, x_3);
    }
    var dR = Transform$Companion_getInstance().normalizeRadian_14dthe$(radianA - rawRadianA);
    parentGlobal.rotation = rawParentRadian + dR * this._weight;
    parentGlobal.toMatrix_dyon7w$(parent.globalTransformMatrix);
    var currentRadianA = rawRadianA + dR * this._weight;
    global.x = parentGlobal.x + Math_0.cos(currentRadianA) * lP;
    global.y = parentGlobal.y + Math_0.sin(currentRadianA) * lP;
    var y_3 = ikGlobal.y - global.y;
    var x_4 = ikGlobal.x - global.x;
    var radianB = Math_0.atan2(y_3, x_4);
    if (global.scaleX < 0.0) {
      radianB += math.PI;
    }global.rotation = parentGlobal.rotation + rawRadian - rawParentRadian + Transform$Companion_getInstance().normalizeRadian_14dthe$(radianB - dR - rawRadian) * this._weight;
    global.toMatrix_dyon7w$(globalTransformMatrix);
  };
  IKConstraint.prototype.init_jwnilu$ = function (constraintData, armature) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (this._constraintData != null) {
      return;
    }this._constraintData = constraintData;
    this._armature = armature;
    this._target = ensureNotNull(this._armature.getBone_pdl1vj$((tmp$_0 = (tmp$ = this._constraintData) != null ? tmp$.target : null) != null ? tmp$_0.name : null));
    this._root = ensureNotNull(this._armature.getBone_pdl1vj$((tmp$_2 = (tmp$_1 = this._constraintData) != null ? tmp$_1.root : null) != null ? tmp$_2.name : null));
    this._bone = this._armature.getBone_pdl1vj$((tmp$_4 = (tmp$_3 = this._constraintData) != null ? tmp$_3.bone : null) != null ? tmp$_4.name : null);
    var tmp$_5;
    var ikConstraintData = Kotlin.isType(tmp$_5 = this._constraintData, IKConstraintData) ? tmp$_5 : throwCCE();
    this._scaleEnabled_0 = ikConstraintData.scaleEnabled;
    this._bendPositive = ikConstraintData.bendPositive;
    this._weight = ikConstraintData.weight;
    this._root._hasConstraint = true;
  };
  IKConstraint.prototype.update = function () {
    var tmp$;
    this._root.updateByConstraint();
    if (this._bone != null) {
      (tmp$ = this._bone) != null ? (tmp$.updateByConstraint(), Unit) : null;
      this._computeB_0();
    } else {
      this._computeA_0();
    }
  };
  IKConstraint.prototype.invalidUpdate = function () {
    var tmp$;
    this._root.invalidUpdate();
    (tmp$ = this._bone) != null ? (tmp$.invalidUpdate(), Unit) : null;
  };
  IKConstraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IKConstraint',
    interfaces: [Constraint]
  };
  function PathConstraint(pool) {
    Constraint.call(this, pool);
    this.dirty = false;
    this.pathOffset = 0;
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 1.0;
    this.translateMix = 1.0;
    this._pathSlot_0 = null;
    this._bones_0 = ArrayList_init();
    this._spaces_0 = new Float64Array(0);
    this._positions_0 = new Float64Array(0);
    this._curves_0 = new Float64Array(0);
    this._boneLengths_0 = new Float64Array(0);
    this._pathGlobalVertices_0 = new Float64Array(0);
    var array = new Float64Array(1);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = 10.0;
    }
    this._segments_0 = array;
  }
  PathConstraint.prototype.toString = function () {
    return '[class dragonBones.PathConstraint]';
  };
  PathConstraint.prototype._onClear = function () {
    Constraint.prototype._onClear.call(this);
    this.dirty = false;
    this.pathOffset = 0;
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 1.0;
    this.translateMix = 1.0;
    this._pathSlot_0 = null;
    this._bones_0.clear();
    this._spaces_0 = new Float64Array(0);
    this._positions_0 = new Float64Array(0);
    this._curves_0 = new Float64Array(0);
    this._boneLengths_0 = new Float64Array(0);
    this._pathGlobalVertices_0 = new Float64Array(0);
  };
  PathConstraint.prototype._updatePathVertices_0 = function (verticesData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var armature = this._armature;
    var dragonBonesData = ensureNotNull(armature.armatureData.parent);
    var scale = armature.armatureData.scale;
    var intArray = ensureNotNull(dragonBonesData.intArray);
    var floatArray = ensureNotNull(dragonBonesData.floatArray);
    var pathOffset = verticesData.offset;
    var pathVertexCount = intArray[pathOffset + 0 | 0];
    var pathVertexOffset = intArray[pathOffset + 2 | 0];
    this._pathGlobalVertices_0 = new Float64Array(pathVertexCount * 2);
    var weightData = verticesData.weight;
    if (weightData == null) {
      var parentBone = ensureNotNull(this._pathSlot_0).parent;
      parentBone.updateByConstraint();
      var matrix = parentBone.globalTransformMatrix;
      var iV = pathVertexOffset;
      for (var i = 0; i < pathVertexCount; i += 2) {
        var vx = floatArray[tmp$ = iV, iV = tmp$ + 1 | 0, tmp$] * scale;
        var vy = floatArray[tmp$_0 = iV, iV = tmp$_0 + 1 | 0, tmp$_0] * scale;
        var x = matrix.a * vx + matrix.c * vy + matrix.tx;
        var y = matrix.b * vx + matrix.d * vy + matrix.ty;
        this._pathGlobalVertices_0[i] = x;
        this._pathGlobalVertices_0[i + 1 | 0] = y;
      }
      return;
    }var bones = ensureNotNull(this._pathSlot_0)._geometryBones;
    var weightBoneCount = weightData.bones.size;
    var weightOffset = weightData.offset;
    var floatOffset = intArray[weightOffset + 1 | 0];
    var iV_0 = floatOffset;
    var iB = weightOffset + 2 + weightBoneCount | 0;
    var iW = 0;
    for (var i_0 = 0; i_0 < pathVertexCount; i_0++) {
      var vertexBoneCount = intArray[tmp$_1 = iB, iB = tmp$_1 + 1 | 0, tmp$_1];
      var xG = 0.0;
      var yG = 0.0;
      for (var ii = 0; ii < vertexBoneCount; ii++) {
        var boneIndex = intArray[tmp$_2 = iB, iB = tmp$_2 + 1 | 0, tmp$_2];
        tmp$_3 = bones.get_za3lpa$(boneIndex);
        if (tmp$_3 == null) {
          continue;
        }var bone = tmp$_3;
        bone.updateByConstraint();
        var matrix_0 = bone.globalTransformMatrix;
        var weight = floatArray[tmp$_4 = iV_0, iV_0 = tmp$_4 + 1 | 0, tmp$_4];
        var vx_0 = floatArray[tmp$_5 = iV_0, iV_0 = tmp$_5 + 1 | 0, tmp$_5] * scale;
        var vy_0 = floatArray[tmp$_6 = iV_0, iV_0 = tmp$_6 + 1 | 0, tmp$_6] * scale;
        xG += (matrix_0.a * vx_0 + matrix_0.c * vy_0 + matrix_0.tx) * weight;
        yG += (matrix_0.b * vx_0 + matrix_0.d * vy_0 + matrix_0.ty) * weight;
      }
      this._pathGlobalVertices_0[tmp$_7 = iW, iW = tmp$_7 + 1 | 0, tmp$_7] = xG;
      this._pathGlobalVertices_0[tmp$_8 = iW, iW = tmp$_8 + 1 | 0, tmp$_8] = yG;
    }
  };
  PathConstraint.prototype._computeVertices_0 = function (start, count, offset, out) {
    var tmp$, tmp$_0;
    var iW = start;
    for (var i = offset; i < count; i += 2) {
      out.set_5wr77w$(i, this._pathGlobalVertices_0[tmp$ = iW, iW = tmp$ + 1 | 0, tmp$]);
      out.set_5wr77w$(i + 1 | 0, this._pathGlobalVertices_0[tmp$_0 = iW, iW = tmp$_0 + 1 | 0, tmp$_0]);
    }
  };
  PathConstraint.prototype._computeBezierCurve_0 = function (pathDisplayDta, spaceCount, tangents, percentPosition, percentSpacing) {
    var tmp$;
    var armature = this._armature;
    var intArray = ensureNotNull(ensureNotNull(armature.armatureData.parent).intArray);
    var vertexCount = intArray[pathDisplayDta.geometry.offset + 0 | 0];
    this._positions_0 = new Float64Array((spaceCount * 3 | 0) + 2 | 0);
    var positions = this._positions_0;
    var spaces = this._spaces_0;
    var isClosed = pathDisplayDta.closed;
    var curveVertices = new DoubleArrayList();
    var verticesLength = vertexCount * 2 | 0;
    var curveCount = verticesLength / 6 | 0;
    var preCurve = -1;
    var position = this.position;
    var pathLength;
    if (!pathDisplayDta.constantSpeed) {
      var lenghts = pathDisplayDta.curveLengths;
      curveCount = curveCount - (isClosed ? 1 : 2) | 0;
      pathLength = lenghts[curveCount];
      if (percentPosition) {
        position *= pathLength;
      }if (percentSpacing) {
        for (var i = 0; i < spaceCount; i++) {
          spaces[i] = spaces[i] * pathLength;
        }
      }set_lengthSet_0(curveVertices, 8);
      var curve = 0;
      for (var i_0 = 0; i_0 < spaceCount; i_0++) {
        var o = i_0 * 3 | 0;
        var space = spaces[i_0];
        position += space;
        if (isClosed) {
          position %= pathLength;
          if (position < 0) {
            position += pathLength;
          }curve = 0;
        } else if (position < 0) {
          continue;
        } else if (position > pathLength) {
          continue;
        }var percent;
        while (true) {
          var len = lenghts[curve];
          if (position > len) {
            curve = curve + 1 | 0;
            continue;
          }if (curve === 0) {
            percent = position / len;
          } else {
            var preLen = lenghts[curve - 1 | 0];
            percent = (position - preLen) / (len - preLen);
          }
          break;
        }
        if (curve !== preCurve) {
          preCurve = curve;
          if (isClosed && curve === curveCount) {
            this._computeVertices_0(verticesLength - 4 | 0, 4, 0, curveVertices);
            this._computeVertices_0(0, 4, 4, curveVertices);
          } else {
            this._computeVertices_0((curve * 6 | 0) + 2 | 0, 8, 0, curveVertices);
          }
        }this.addCurvePosition_0(percent, curveVertices.get_za3lpa$(0), curveVertices.get_za3lpa$(1), curveVertices.get_za3lpa$(2), curveVertices.get_za3lpa$(3), curveVertices.get_za3lpa$(4), curveVertices.get_za3lpa$(5), curveVertices.get_za3lpa$(6), curveVertices.get_za3lpa$(7), positions, o, tangents);
      }
      return;
    }if (isClosed) {
      verticesLength = verticesLength + 2 | 0;
      set_lengthSet_0(curveVertices, vertexCount);
      this._computeVertices_0(2, verticesLength - 4 | 0, 0, curveVertices);
      this._computeVertices_0(0, 2, verticesLength - 4 | 0, curveVertices);
      curveVertices.set_5wr77w$(verticesLength - 2 | 0, curveVertices.get_za3lpa$(0));
      curveVertices.set_5wr77w$(verticesLength - 1 | 0, curveVertices.get_za3lpa$(1));
    } else {
      curveCount = curveCount - 1 | 0;
      verticesLength = verticesLength - 4 | 0;
      set_lengthSet_0(curveVertices, verticesLength);
      this._computeVertices_0(2, verticesLength, 0, curveVertices);
    }
    var curves = new DoubleArrayList(curveCount);
    pathLength = 0.0;
    var x1 = curveVertices.get_za3lpa$(0);
    var y1 = curveVertices.get_za3lpa$(1);
    var cx1 = 0.0;
    var cy1 = 0.0;
    var cx2 = 0.0;
    var cy2 = 0.0;
    var x2 = 0.0;
    var y2 = 0.0;
    var tmpx;
    var tmpy;
    var dddfx;
    var dddfy;
    var ddfx;
    var ddfy;
    var dfx;
    var dfy;
    tmp$ = curveCount;
    for (var i_1 = 0; i_1 < tmp$; i_1++) {
      var w = 2 + (i_1 * 6 | 0) | 0;
      cx1 = curveVertices.get_za3lpa$(w);
      cy1 = curveVertices.get_za3lpa$(w + 1 | 0);
      cx2 = curveVertices.get_za3lpa$(w + 2 | 0);
      cy2 = curveVertices.get_za3lpa$(w + 3 | 0);
      x2 = curveVertices.get_za3lpa$(w + 4 | 0);
      y2 = curveVertices.get_za3lpa$(w + 5 | 0);
      tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
      tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
      dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
      dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
      ddfx = tmpx * 2 + dddfx;
      ddfy = tmpy * 2 + dddfy;
      dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
      dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
      var x = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x);
      dfx += ddfx;
      dfy += ddfy;
      ddfx += dddfx;
      ddfy += dddfy;
      var x_0 = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x_0);
      dfx += ddfx;
      dfy += ddfy;
      var x_1 = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x_1);
      dfx += ddfx + dddfx;
      dfy += ddfy + dddfy;
      var x_2 = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x_2);
      curves.set_5wr77w$(i_1, pathLength);
      x1 = x2;
      y1 = y2;
    }
    if (percentPosition) {
      position *= pathLength;
    }if (percentSpacing) {
      for (var i_2 = 0; i_2 < spaceCount; i_2++) {
        spaces[i_2] = spaces[i_2] * pathLength;
      }
    }var segments = this._segments_0;
    var curveLength = 0.0;
    var curve_0 = 0;
    var segment = 0;
    for (var i_3 = 0; i_3 < spaceCount; i_3++) {
      var o_0 = i_3 * 3 | 0;
      var space_0 = spaces[i_3];
      position += space_0;
      var p = position;
      if (isClosed) {
        p %= pathLength;
        if (p < 0)
          p += pathLength;
        curve_0 = 0;
      } else if (p < 0) {
        continue;
      } else if (p > pathLength) {
        continue;
      }while (true) {
        var length = curves.get_za3lpa$(curve_0);
        if (p > length) {
          curve_0 = curve_0 + 1 | 0;
          continue;
        }if (curve_0 === 0)
          p /= length;
        else {
          var prev = curves.get_za3lpa$(curve_0 - 1 | 0);
          p = (p - prev) / (length - prev);
        }
        break;
      }
      if (curve_0 !== preCurve) {
        preCurve = curve_0;
        var ii = curve_0 * 6 | 0;
        x1 = curveVertices.get_za3lpa$(ii);
        y1 = curveVertices.get_za3lpa$(ii + 1 | 0);
        cx1 = curveVertices.get_za3lpa$(ii + 2 | 0);
        cy1 = curveVertices.get_za3lpa$(ii + 3 | 0);
        cx2 = curveVertices.get_za3lpa$(ii + 4 | 0);
        cy2 = curveVertices.get_za3lpa$(ii + 5 | 0);
        x2 = curveVertices.get_za3lpa$(ii + 6 | 0);
        y2 = curveVertices.get_za3lpa$(ii + 7 | 0);
        tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
        tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
        ddfx = tmpx * 2 + dddfx;
        ddfy = tmpy * 2 + dddfy;
        dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
        dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
        var x_3 = dfx * dfx + dfy * dfy;
        curveLength = Math_0.sqrt(x_3);
        segments[0] = curveLength;
        for (var ii_0 = 1; ii_0 < 8; ii_0++) {
          dfx += ddfx;
          dfy += ddfy;
          ddfx += dddfx;
          ddfy += dddfy;
          var x_4 = dfx * dfx + dfy * dfy;
          curveLength += Math_0.sqrt(x_4);
          segments[ii_0] = curveLength;
        }
        dfx += ddfx;
        dfy += ddfy;
        var x_5 = dfx * dfx + dfy * dfy;
        curveLength += Math_0.sqrt(x_5);
        segments[8] = curveLength;
        dfx += ddfx + dddfx;
        dfy += ddfy + dddfy;
        var x_6 = dfx * dfx + dfy * dfy;
        curveLength += Math_0.sqrt(x_6);
        segments[9] = curveLength;
        segment = 0;
      }p *= curveLength;
      while (true) {
        var length_0 = segments[segment];
        if (p > length_0) {
          segment = segment + 1 | 0;
          continue;
        }if (segment === 0)
          p /= length_0;
        else {
          var prev_0 = segments[segment - 1 | 0];
          p = segment + (p - prev_0) / (length_0 - prev_0);
        }
        break;
      }
      this.addCurvePosition_0(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, positions, o_0, tangents);
    }
  };
  PathConstraint.prototype.addCurvePosition_0 = function (t, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, offset, tangents) {
    if (t === 0.0) {
      out[offset] = x1;
      out[offset + 1 | 0] = y1;
      out[offset + 2 | 0] = 0.0;
      return;
    }if (t === 1.0) {
      out[offset] = x2;
      out[offset + 1 | 0] = y2;
      out[offset + 2 | 0] = 0.0;
      return;
    }var mt = 1 - t;
    var mt2 = mt * mt;
    var t2 = t * t;
    var a = mt2 * mt;
    var b = mt2 * t * 3;
    var c = mt * t2 * 3;
    var d = t * t2;
    var x = a * x1 + b * cx1 + c * cx2 + d * x2;
    var y = a * y1 + b * cy1 + c * cy2 + d * y2;
    out[offset] = x;
    out[offset + 1 | 0] = y;
    if (tangents) {
      var y_0 = y - (a * y1 + b * cy1 + c * cy2);
      var x_0 = x - (a * x1 + b * cx1 + c * cx2);
      out[offset + 2 | 0] = Math_0.atan2(y_0, x_0);
    } else {
      out[offset + 2 | 0] = 0.0;
    }
  };
  PathConstraint.prototype.init_jwnilu$ = function (constraintData, armature) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this._constraintData = constraintData;
    this._armature = armature;
    var data = Kotlin.isType(tmp$ = constraintData, PathConstraintData) ? tmp$ : throwCCE();
    this.pathOffset = ensureNotNull(data.pathDisplayData).geometry.offset;
    this.position = data.position;
    this.spacing = data.spacing;
    this.rotateOffset = data.rotateOffset;
    this.rotateMix = data.rotateMix;
    this.translateMix = data.translateMix;
    this._root = ensureNotNull(this._armature.getBone_pdl1vj$((tmp$_0 = data.root) != null ? tmp$_0.name : null));
    this._target = ensureNotNull(this._armature.getBone_pdl1vj$((tmp$_1 = data.target) != null ? tmp$_1.name : null));
    this._pathSlot_0 = this._armature.getSlot_pdl1vj$((tmp$_2 = data.pathSlot) != null ? tmp$_2.name : null);
    tmp$_3 = get_length_1(data.bones);
    for (var i = 0; i < tmp$_3; i++) {
      var bone = this._armature.getBone_pdl1vj$(data.bones.get_za3lpa$(i).name);
      if (bone != null) {
        push(this._bones_0, bone);
      }}
    if (data.rotateMode === RotateMode$ChainScale_getInstance()) {
      this._boneLengths_0 = new Float64Array(get_length_1(this._bones_0));
    }this._root._hasConstraint = true;
  };
  PathConstraint.prototype.update = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var pathSlot = this._pathSlot_0;
    if ((pathSlot != null ? pathSlot._geometryData : null) == null || ((tmp$ = pathSlot._geometryData) != null ? tmp$.offset : null) !== this.pathOffset) {
      return;
    }var constraintData = Kotlin.isType(tmp$_0 = this._constraintData, PathConstraintData) ? tmp$_0 : throwCCE();
    var isPathVerticeDirty = false;
    if (this._root._childrenTransformDirty) {
      this._updatePathVertices_0(ensureNotNull(pathSlot._geometryData));
      isPathVerticeDirty = true;
    } else if (pathSlot._verticesDirty || pathSlot._isBonesUpdate()) {
      this._updatePathVertices_0(ensureNotNull(pathSlot._geometryData));
      pathSlot._verticesDirty = false;
      isPathVerticeDirty = true;
    }if (!isPathVerticeDirty && !this.dirty) {
      return;
    }var positionMode = constraintData.positionMode;
    var spacingMode = constraintData.spacingMode;
    var rotateMode = constraintData.rotateMode;
    var bones = this._bones_0;
    var isLengthMode = spacingMode === SpacingMode$Length_getInstance();
    var isChainScaleMode = rotateMode === RotateMode$ChainScale_getInstance();
    var isTangentMode = rotateMode === RotateMode$Tangent_getInstance();
    var boneCount = get_length_1(bones);
    var spacesCount = isTangentMode ? boneCount : boneCount + 1 | 0;
    var spacing = this.spacing;
    this._spaces_0 = new Float64Array(spacesCount);
    var spaces = this._spaces_0;
    if (isChainScaleMode || isLengthMode) {
      spaces[0] = 0.0;
      tmp$_1 = spacesCount - 1 | 0;
      for (var i = 0; i < tmp$_1; i++) {
        var bone = bones.get_za3lpa$(i);
        bone.updateByConstraint();
        var boneLength = numberToInt(ensureNotNull(bone._boneData).length);
        var matrix = bone.globalTransformMatrix;
        var x = boneLength * matrix.a;
        var y = boneLength * matrix.b;
        var x_0 = x * x + y * y;
        var len = Math_0.sqrt(x_0);
        if (isChainScaleMode) {
          this._boneLengths_0[i] = len;
        }spaces[i + 1 | 0] = (boneLength + spacing) * len / boneLength;
      }
    } else {
      for (var i_0 = 0; i_0 < spacesCount; i_0++) {
        spaces[i_0] = spacing;
      }
    }
    this._computeBezierCurve_0(Kotlin.isType(tmp$_3 = (Kotlin.isType(tmp$_2 = pathSlot._displayFrame, DisplayFrame) ? tmp$_2 : throwCCE()).rawDisplayData, PathDisplayData) ? tmp$_3 : throwCCE(), spacesCount, isTangentMode, positionMode === PositionMode$Percent_getInstance(), spacingMode === SpacingMode$Percent_getInstance());
    var positions = this._positions_0;
    var rotateOffset = this.rotateOffset;
    var boneX = positions[0];
    var boneY = positions[1];
    var tip;
    if (rotateOffset === 0.0) {
      tip = rotateMode === RotateMode$Chain_getInstance();
    } else {
      tip = false;
      var bone_0 = pathSlot._parent_8be2vx$;
      if (bone_0 != null) {
        var matrix_0 = bone_0.globalTransformMatrix;
        rotateOffset *= matrix_0.a * matrix_0.d - matrix_0.b * matrix_0.c > 0 ? Transform$Companion_getInstance().DEG_RAD : -Transform$Companion_getInstance().DEG_RAD;
      }}
    var rotateMix = this.rotateMix;
    var translateMix = this.translateMix;
    for (var i_1 = 0; i_1 < boneCount; i_1++) {
      var p = i_1 * 3 | 0;
      var bone_1 = bones.get_za3lpa$(i_1);
      bone_1.updateByConstraint();
      var matrix_1 = bone_1.globalTransformMatrix;
      matrix_1.tx = matrix_1.tx + (boneX - matrix_1.tx) * translateMix;
      matrix_1.ty = matrix_1.ty + (boneY - matrix_1.ty) * translateMix;
      var x_1 = positions[p];
      var y_0 = positions[p + 1 | 0];
      var dx = x_1 - boneX;
      var dy = y_0 - boneY;
      if (isChainScaleMode) {
        var lenght = this._boneLengths_0[i_1];
        var x_2 = dx * dx + dy * dy;
        var s = (Math_0.sqrt(x_2) / lenght - 1) * rotateMix + 1;
        matrix_1.a = matrix_1.a * s;
        matrix_1.b = matrix_1.b * s;
      }boneX = x_1;
      boneY = y_0;
      if (rotateMix > 0) {
        var a = matrix_1.a;
        var b = matrix_1.b;
        var c = matrix_1.c;
        var d = matrix_1.d;
        var cos;
        var sin;
        if (isTangentMode) {
          tmp$_4 = positions[p - 1 | 0];
        } else {
          tmp$_4 = Math_0.atan2(dy, dx);
        }
        var r = tmp$_4;
        r -= Math_0.atan2(b, a);
        if (tip) {
          cos = Math_0.cos(r);
          sin = Math_0.sin(r);
          var length = ensureNotNull(bone_1._boneData).length;
          boneX += (length * (cos * a - sin * b) - dx) * rotateMix;
          boneY += (length * (sin * a + cos * b) - dy) * rotateMix;
        } else {
          r += rotateOffset;
        }
        if (r > Transform$Companion_getInstance().PI) {
          r -= Transform$Companion_getInstance().PI_D;
        } else if (r < -Transform$Companion_getInstance().PI) {
          r += Transform$Companion_getInstance().PI_D;
        }r *= rotateMix;
        cos = Math_0.cos(r);
        sin = Math_0.sin(r);
        matrix_1.a = cos * a - sin * b;
        matrix_1.b = sin * a + cos * b;
        matrix_1.c = cos * c - sin * d;
        matrix_1.d = sin * c + cos * d;
      }bone_1.global.fromMatrix_dyon7w$(matrix_1);
    }
    this.dirty = false;
  };
  PathConstraint.prototype.invalidUpdate = function () {
  };
  PathConstraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathConstraint',
    interfaces: [Constraint]
  };
  function IArmatureProxy() {
  }
  IArmatureProxy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IArmatureProxy',
    interfaces: [IEventDispatcher]
  };
  function DisplayFrame(pool) {
    BaseObject.call(this, pool);
    this.rawDisplayData = null;
    this.displayData = null;
    this._textureData = null;
    this.display = null;
    this.deformVertices = new Float64Array(0);
  }
  DisplayFrame.prototype.toString = function () {
    return '[class dragonBones.DisplayFrame]';
  };
  Object.defineProperty(DisplayFrame.prototype, 'rawGeometryDisplayData', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.rawDisplayData, GeometryDisplayData) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(DisplayFrame.prototype, 'rawMeshDisplayData', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.rawDisplayData, MeshDisplayData) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(DisplayFrame.prototype, 'rawPathDisplayData', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.rawDisplayData, PathDisplayData) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(DisplayFrame.prototype, 'geometryDisplayData', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.displayData, GeometryDisplayData) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(DisplayFrame.prototype, 'meshDisplayData', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.displayData, MeshDisplayData) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(DisplayFrame.prototype, 'pathDisplayData', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.displayData, PathDisplayData) ? tmp$ : throwCCE();
    }
  });
  DisplayFrame.prototype._onClear = function () {
    this.rawDisplayData = null;
    this.displayData = null;
    this._textureData = null;
    this.display = null;
    this.deformVertices = new Float64Array(0);
  };
  DisplayFrame.prototype.updateDeformVertices = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.rawDisplayData == null || this.deformVertices.length !== 0) {
      return;
    }tmp$_0 = (tmp$ = this.rawDisplayData) != null ? tmp$.type : null;
    if (equals(tmp$_0, DisplayType$Mesh_getInstance()))
      tmp$_1 = this.rawMeshDisplayData.geometry;
    else if (equals(tmp$_0, DisplayType$Path_getInstance()))
      tmp$_1 = this.rawPathDisplayData.geometry;
    else
      return;
    var rawGeometryData = tmp$_1;
    var vertexCount = 0;
    if (rawGeometryData.weight != null) {
      vertexCount = ensureNotNull(rawGeometryData.weight).count * 2 | 0;
    } else {
      vertexCount = ensureNotNull(ensureNotNull(rawGeometryData.data).intArray)[rawGeometryData.offset + 0 | 0] * 2;
    }
    this.deformVertices = new Float64Array(vertexCount);
    tmp$_2 = this.deformVertices.length;
    for (var i = 0; i < tmp$_2; i++) {
      this.deformVertices[i] = 0.0;
    }
  };
  DisplayFrame.prototype.getGeometryData = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (this.displayData != null) {
      if (equals((tmp$ = this.displayData) != null ? tmp$.type : null, DisplayType$Mesh_getInstance())) {
        return (Kotlin.isType(tmp$_0 = this.displayData, MeshDisplayData) ? tmp$_0 : throwCCE()).geometry;
      }if (equals((tmp$_1 = this.displayData) != null ? tmp$_1.type : null, DisplayType$Path_getInstance())) {
        return (Kotlin.isType(tmp$_2 = this.displayData, PathDisplayData) ? tmp$_2 : throwCCE()).geometry;
      }}if (this.rawDisplayData != null) {
      if (equals((tmp$_3 = this.rawDisplayData) != null ? tmp$_3.type : null, DisplayType$Mesh_getInstance())) {
        return this.rawMeshDisplayData.geometry;
      }if (equals((tmp$_4 = this.rawDisplayData) != null ? tmp$_4.type : null, DisplayType$Path_getInstance())) {
        return this.rawPathDisplayData.geometry;
      }}return null;
  };
  DisplayFrame.prototype.getBoundingBox = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.displayData != null && equals((tmp$ = this.displayData) != null ? tmp$.type : null, DisplayType$BoundingBox_getInstance())) {
      return (Kotlin.isType(tmp$_0 = this.displayData, BoundingBoxDisplayData) ? tmp$_0 : throwCCE()).boundingBox;
    }if (this.rawDisplayData != null && equals((tmp$_1 = this.rawDisplayData) != null ? tmp$_1.type : null, DisplayType$BoundingBox_getInstance())) {
      return (Kotlin.isType(tmp$_2 = this.rawDisplayData, BoundingBoxDisplayData) ? tmp$_2 : throwCCE()).boundingBox;
    }return null;
  };
  DisplayFrame.prototype.getTextureData = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (this.displayData != null) {
      if (equals((tmp$ = this.displayData) != null ? tmp$.type : null, DisplayType$Image_getInstance())) {
        return (Kotlin.isType(tmp$_0 = this.displayData, ImageDisplayData) ? tmp$_0 : throwCCE()).texture;
      }if (equals((tmp$_1 = this.displayData) != null ? tmp$_1.type : null, DisplayType$Mesh_getInstance())) {
        return (Kotlin.isType(tmp$_2 = this.displayData, MeshDisplayData) ? tmp$_2 : throwCCE()).texture;
      }}if (this._textureData != null) {
      return this._textureData;
    }if (this.rawDisplayData != null) {
      if (equals((tmp$_3 = this.rawDisplayData) != null ? tmp$_3.type : null, DisplayType$Image_getInstance())) {
        return (Kotlin.isType(tmp$_4 = this.rawDisplayData, ImageDisplayData) ? tmp$_4 : throwCCE()).texture;
      }if (equals((tmp$_5 = this.rawDisplayData) != null ? tmp$_5.type : null, DisplayType$Mesh_getInstance())) {
        return (Kotlin.isType(tmp$_6 = this.rawDisplayData, MeshDisplayData) ? tmp$_6 : throwCCE()).texture;
      }}return null;
  };
  DisplayFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayFrame',
    interfaces: [BaseObject]
  };
  function Slot(pool) {
    TransformObject.call(this, pool);
    this.displayController = null;
    this._displayDataDirty = false;
    this._displayDirty = false;
    this._geometryDirty = false;
    this._textureDirty = false;
    this._visibleDirty = false;
    this._blendModeDirty = false;
    this._zOrderDirty = false;
    this._colorDirty = false;
    this._verticesDirty = false;
    this._transformDirty = false;
    this._visible = true;
    this._blendMode = BlendMode$Normal_getInstance();
    this._displayIndex = -1;
    this._animationDisplayIndex = -1;
    this._cachedFrameIndex = -1;
    this._zOrder = 0;
    this._zIndex = 0;
    this._pivotX = 0.0;
    this._pivotY = 0.0;
    this._localMatrix = new Matrix_0();
    this._colorTransform = new ColorTransform();
    this._displayFrames = ArrayList_init();
    this._geometryBones = ArrayList_init();
    this._slotData = null;
    this._displayFrame = null;
    this._geometryData = null;
    this._boundingBoxData = null;
    this._textureData = null;
    this._rawDisplay = null;
    this._meshDisplay = null;
    this._display = null;
    this._childArmature = null;
    this._parent_8be2vx$ = null;
    this._cachedFrameIndices = null;
  }
  Slot.prototype._onClear = function () {
    TransformObject.prototype._onClear.call(this);
    var disposeDisplayList = ArrayList_init();
    var $receiver = this._displayFrames;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var dispayFrame = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      var display = dispayFrame.display;
      if (!equals(display, this._rawDisplay) && !equals(display, this._meshDisplay) && indexOf(disposeDisplayList, display) < 0) {
        push(disposeDisplayList, ensureNotNull(display));
      }dispayFrame.returnToPool();
    }
    var tmp$_0;
    var n_0 = 0;
    while (n_0 < disposeDisplayList.size) {
      var eachDisplay = disposeDisplayList.get_za3lpa$((tmp$_0 = n_0, n_0 = tmp$_0 + 1 | 0, tmp$_0));
      if (Kotlin.isType(eachDisplay, Armature)) {
        eachDisplay.dispose();
      } else {
        this._disposeDisplay_j44yyw$(eachDisplay, true);
      }
    }
    if (this._meshDisplay != null && !equals(this._meshDisplay, this._rawDisplay)) {
      this._disposeDisplay_j44yyw$(ensureNotNull(this._meshDisplay), false);
    }if (this._rawDisplay != null) {
      this._disposeDisplay_j44yyw$(ensureNotNull(this._rawDisplay), false);
    }this.displayController = null;
    this._displayDataDirty = false;
    this._displayDirty = false;
    this._geometryDirty = false;
    this._textureDirty = false;
    this._visibleDirty = false;
    this._blendModeDirty = false;
    this._zOrderDirty = false;
    this._colorDirty = false;
    this._verticesDirty = false;
    this._transformDirty = false;
    this._visible = true;
    this._blendMode = BlendMode$Normal_getInstance();
    this._displayIndex = -1;
    this._animationDisplayIndex = -1;
    this._zOrder = 0;
    this._zIndex = 0;
    this._cachedFrameIndex = -1;
    this._pivotX = 0.0;
    this._pivotY = 0.0;
    this._localMatrix.identity();
    this._colorTransform.identity();
    this._displayFrames.clear();
    this._geometryBones.clear();
    this._slotData = null;
    this._displayFrame = null;
    this._geometryData = null;
    this._boundingBoxData = null;
    this._textureData = null;
    this._rawDisplay = null;
    this._meshDisplay = null;
    this._display = null;
    this._childArmature = null;
    this._parent_8be2vx$ = null;
    this._cachedFrameIndices = null;
  };
  Slot.prototype._hasDisplay_s8jyv4$ = function (display) {
    var $receiver = this._displayFrames;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      if (equals($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).display, display)) {
        return true;
      }}
    return false;
  };
  Slot.prototype._isBonesUpdate = function () {
    var $receiver = this._geometryBones;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var bone = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (bone != null && bone._childrenTransformDirty) {
        return true;
      }}
    return false;
  };
  Slot.prototype._updateAlpha = function () {
    var globalAlpha = this._alpha * ensureNotNull(this._parent_8be2vx$)._globalAlpha;
    if (this._globalAlpha !== globalAlpha) {
      this._globalAlpha = globalAlpha;
      this._colorDirty = true;
    }};
  Slot.prototype._updateDisplayData = function () {
    var tmp$, tmp$_0;
    var prevDisplayFrame = this._displayFrame;
    var prevGeometryData = this._geometryData;
    var prevTextureData = this._textureData;
    var rawDisplayData = null;
    var displayData = null;
    this._displayFrame = null;
    this._geometryData = null;
    this._boundingBoxData = null;
    this._textureData = null;
    if (this._displayIndex >= 0 && this._displayIndex < get_lengthSet_1(this._displayFrames)) {
      this._displayFrame = this._displayFrames.get_za3lpa$(this._displayIndex);
      rawDisplayData = ensureNotNull(this._displayFrame).rawDisplayData;
      displayData = ensureNotNull(this._displayFrame).displayData;
      this._geometryData = ensureNotNull(this._displayFrame).getGeometryData();
      this._boundingBoxData = ensureNotNull(this._displayFrame).getBoundingBox();
      this._textureData = ensureNotNull(this._displayFrame).getTextureData();
    }var _textureData = this._textureData;
    if (!equals(this._displayFrame, prevDisplayFrame) || !equals(this._geometryData, prevGeometryData) || !equals(_textureData, prevTextureData)) {
      if (this._geometryData == null && _textureData != null) {
        var imageDisplayData = Kotlin.isType(tmp$ = displayData != null && displayData.type === DisplayType$Image_getInstance() ? displayData : rawDisplayData, ImageDisplayData) ? tmp$ : throwCCE();
        var scale = ensureNotNull(_textureData.parent).scale * ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
        var frame = _textureData.frame;
        this._pivotX = imageDisplayData.pivot.x;
        this._pivotY = imageDisplayData.pivot.y;
        var rect = frame != null ? frame : _textureData.region;
        var width = rect.width;
        var height = rect.height;
        if (_textureData.rotated && frame == null) {
          width = rect.height;
          height = rect.width;
        }this._pivotX = this._pivotX * (width * scale);
        this._pivotY = this._pivotY * (height * scale);
        if (frame != null) {
          this._pivotX = this._pivotX + frame.x * scale;
          this._pivotY = this._pivotY + frame.y * scale;
        }if (rawDisplayData != null && !equals(imageDisplayData, rawDisplayData)) {
          rawDisplayData.transform.toMatrix_dyon7w$(this._helpMatrix_8be2vx$);
          this._helpMatrix_8be2vx$.invert();
          this._helpMatrix_8be2vx$.transformPoint_cck2st$(0.0, 0.0, this._helpPoint_8be2vx$);
          this._pivotX = this._pivotX - this._helpPoint_8be2vx$.x;
          this._pivotY = this._pivotY - this._helpPoint_8be2vx$.y;
          imageDisplayData.transform.toMatrix_dyon7w$(this._helpMatrix_8be2vx$);
          this._helpMatrix_8be2vx$.invert();
          this._helpMatrix_8be2vx$.transformPoint_cck2st$(0.0, 0.0, this._helpPoint_8be2vx$);
          this._pivotX = this._pivotX + this._helpPoint_8be2vx$.x;
          this._pivotY = this._pivotY + this._helpPoint_8be2vx$.y;
        }if (!DragonBones$Companion_getInstance().yDown) {
          this._pivotY = (_textureData.rotated ? _textureData.region.width : _textureData.region.height) * scale - this._pivotY;
        }} else {
        this._pivotX = 0.0;
        this._pivotY = 0.0;
      }
      if (rawDisplayData != null) {
        this.origin = rawDisplayData.transform;
      } else if (displayData != null) {
        this.origin = displayData.transform;
      } else {
        this.origin = null;
      }
      if (this.origin != null) {
        this.global.copyFrom_scgbvr$(ensureNotNull(this.origin)).add_scgbvr$(this.offset).toMatrix_dyon7w$(this._localMatrix);
      } else {
        this.global.copyFrom_scgbvr$(this.offset).toMatrix_dyon7w$(this._localMatrix);
      }
      if (!equals(this._geometryData, prevGeometryData)) {
        this._geometryDirty = true;
        this._verticesDirty = true;
        if (this._geometryData != null) {
          this._geometryBones.clear();
          var gd = ensureNotNull(this._geometryData).weight;
          if (gd != null) {
            tmp$_0 = get_lengthSet_1(gd.bones);
            for (var i = 0; i < tmp$_0; i++) {
              var bone = ensureNotNull(this._armature).getBone_pdl1vj$(gd.bones.get_za3lpa$(i).name);
              push(this._geometryBones, bone);
            }
          }} else {
          set_lengthSet_1(this._geometryBones, 0);
          this._geometryData = null;
        }
      }this._textureDirty = !equals(_textureData, prevTextureData);
      this._transformDirty = true;
    }};
  Slot.prototype._updateDisplay = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var prevDisplay = (tmp$ = this._display) != null ? tmp$ : this._rawDisplay;
    var prevChildArmature = this._childArmature;
    var _displayFrame1 = this._displayFrame;
    if (_displayFrame1 != null) {
      this._display = _displayFrame1.display;
      if (this._display != null && Kotlin.isType(this._display, Armature)) {
        this._childArmature = Kotlin.isType(tmp$_0 = this._display, Armature) ? tmp$_0 : throwCCE();
        this._display = (tmp$_1 = this._childArmature) != null ? tmp$_1.display : null;
      } else {
        this._childArmature = null;
      }
    } else {
      this._display = null;
      this._childArmature = null;
    }
    var currentDisplay = (tmp$_2 = this._display) != null ? tmp$_2 : this._rawDisplay;
    if (!equals(currentDisplay, prevDisplay)) {
      this._textureDirty = true;
      this._visibleDirty = true;
      this._blendModeDirty = true;
      this._colorDirty = true;
      this._transformDirty = true;
      this._onUpdateDisplay();
      this._replaceDisplay_za3rmp$(ensureNotNull(prevDisplay));
    }var _childArmature = this._childArmature;
    if (!equals(_childArmature, prevChildArmature)) {
      if (prevChildArmature != null) {
        prevChildArmature._parent = null;
        prevChildArmature.clock = null;
        if (prevChildArmature.inheritAnimation) {
          prevChildArmature.animation.reset();
        }}if (_childArmature != null) {
        _childArmature._parent = this;
        _childArmature.clock = ensureNotNull(this._armature).clock;
        if (_childArmature.inheritAnimation) {
          if (_childArmature.cacheFrameRate === 0) {
            var cacheFrameRate = ensureNotNull(this._armature).cacheFrameRate;
            if (cacheFrameRate !== 0) {
              _childArmature.cacheFrameRate = cacheFrameRate;
            }}if (_displayFrame1 != null) {
            var actions = null;
            var displayData = (tmp$_3 = ensureNotNull(this._displayFrame).displayData) != null ? tmp$_3 : ensureNotNull(this._displayFrame).rawDisplayData;
            if (displayData != null && displayData.type === DisplayType$Armature_getInstance()) {
              actions = (Kotlin.isType(tmp$_4 = displayData, ArmatureDisplayData) ? tmp$_4 : throwCCE()).actions;
            }if (actions != null && get_lengthSet_1(actions) > 0) {
              var $receiver = actions;
              var tmp$_5;
              var n = 0;
              while (n < $receiver.size) {
                var action = $receiver.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
                var eventObject = this.pool.eventObject.borrow();
                EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject, ensureNotNull(this._armature));
                eventObject.slot = this;
                ensureNotNull(this._armature)._bufferAction_8f84tb$(eventObject, false);
              }
            } else {
              _childArmature.animation.play_9d67ql$();
            }
          }}}}};
  Slot.prototype._updateGlobalTransformMatrix_6taknv$ = function (isCache) {
    var tmp$;
    var parentMatrix = ensureNotNull(ensureNotNull(this._parent_8be2vx$)._boneData).isBone ? ensureNotNull(this._parent_8be2vx$).globalTransformMatrix : (Kotlin.isType(tmp$ = this._parent_8be2vx$, Surface) ? tmp$ : throwCCE())._getGlobalTransformMatrix_dleff0$(this.global.x, this.global.y);
    this.globalTransformMatrix.copyFrom_dyon7w$(this._localMatrix);
    this.globalTransformMatrix.concat_dyon7w$(parentMatrix);
    if (isCache) {
      this.global.fromMatrix_dyon7w$(this.globalTransformMatrix);
    } else {
      this._globalDirty = true;
    }
  };
  Slot.prototype._setDisplayIndex_fzusl$ = function (value, isAnimation) {
    if (isAnimation === void 0)
      isAnimation = false;
    if (isAnimation) {
      if (this._animationDisplayIndex === value) {
        return;
      }this._animationDisplayIndex = value;
    }if (this._displayIndex === value) {
      return;
    }this._displayIndex = value < get_lengthSet_1(this._displayFrames) ? value : get_lengthSet_1(this._displayFrames) - 1 | 0;
    this._displayDataDirty = true;
    this._displayDirty = this._displayIndex < 0 || !equals(this._display, this._displayFrames.get_za3lpa$(this._displayIndex).display);
  };
  Slot.prototype._setZOrder_za3lpa$ = function (value) {
    this._zOrder = value;
    this._zOrderDirty = true;
    return this._zOrderDirty;
  };
  Slot.prototype._setColor_rr69z0$ = function (value) {
    this._colorTransform.copyFrom_rr69z0$(value);
    this._colorDirty = true;
    return true;
  };
  Slot.prototype.init_vpgcwf$ = function (slotData, armatureValue, rawDisplay, meshDisplay) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this._slotData != null) {
      return;
    }this._slotData = slotData;
    this._colorDirty = true;
    this._blendModeDirty = true;
    this._blendMode = slotData.blendMode;
    this._zOrder = slotData.zOrder;
    this._zIndex = slotData.zIndex;
    this._alpha = slotData.alpha;
    this._colorTransform.copyFrom_rr69z0$(ensureNotNull(slotData.color));
    this._rawDisplay = rawDisplay;
    this._meshDisplay = meshDisplay;
    this._armature = armatureValue;
    tmp$_1 = this._armature;
    tmp$_0 = (tmp$ = slotData.parent) != null ? tmp$.name : null;
    var slotParent = tmp$_1 != null ? tmp$_1.getBone_pdl1vj$(tmp$_0) : null;
    if (slotParent != null) {
      this._parent_8be2vx$ = slotParent;
    }(tmp$_2 = this._armature) != null ? (tmp$_2._addSlot_vcmxg4$(this), Unit) : null;
    this._initDisplay_j44yyw$(ensureNotNull(this._rawDisplay), false);
    if (!equals(this._rawDisplay, this._meshDisplay)) {
      this._initDisplay_j44yyw$(ensureNotNull(this._meshDisplay), false);
    }this._onUpdateDisplay();
    this._addDisplay();
  };
  Slot.prototype.update_za3lpa$ = function (cacheFrameIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var cacheFrameIndex_0 = cacheFrameIndex;
    if (this._displayDataDirty) {
      this._updateDisplayData();
      this._displayDataDirty = false;
    }if (this._displayDirty) {
      this._updateDisplay();
      this._displayDirty = false;
    }if (this._geometryDirty || this._textureDirty) {
      if (this._display == null || equals(this._display, this._rawDisplay) || equals(this._display, this._meshDisplay)) {
        this._updateFrame();
      }this._geometryDirty = false;
      this._textureDirty = false;
    }if (this._display == null) {
      return;
    }if (this._visibleDirty) {
      this._updateVisible();
      this._visibleDirty = false;
    }if (this._blendModeDirty) {
      this._updateBlendMode();
      this._blendModeDirty = false;
    }if (this._colorDirty) {
      this._updateColor();
      this._colorDirty = false;
    }if (this._zOrderDirty) {
      this._updateZOrder();
      this._zOrderDirty = false;
    }if (this._geometryData != null && equals(this._display, this._meshDisplay)) {
      var isSkinned = ensureNotNull(this._geometryData).weight != null;
      var isSurface = (tmp$_0 = (tmp$ = ensureNotNull(this._parent_8be2vx$)._boneData) != null ? tmp$.isSurface : null) != null ? tmp$_0 : false;
      if (this._verticesDirty || (isSkinned && this._isBonesUpdate()) || (isSurface && ensureNotNull(this._parent_8be2vx$)._childrenTransformDirty)) {
        this._verticesDirty = false;
        this._updateMesh();
      }if (isSkinned || isSurface) {
        return;
      }}if (cacheFrameIndex_0 >= 0 && this._cachedFrameIndices != null) {
      var cachedFrameIndex = ensureNotNull(this._cachedFrameIndices).get_za3lpa$(cacheFrameIndex_0);
      if (cachedFrameIndex >= 0 && this._cachedFrameIndex === cachedFrameIndex) {
        this._transformDirty = false;
      } else if (cachedFrameIndex >= 0) {
        this._transformDirty = true;
        this._cachedFrameIndex = cachedFrameIndex;
      } else if (this._transformDirty || ensureNotNull(this._parent_8be2vx$)._childrenTransformDirty) {
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      } else if (this._cachedFrameIndex >= 0) {
        this._transformDirty = false;
        ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, this._cachedFrameIndex);
      } else {
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      }
    } else if (this._transformDirty || ensureNotNull(this._parent_8be2vx$)._childrenTransformDirty) {
      cacheFrameIndex_0 = -1;
      this._transformDirty = true;
      this._cachedFrameIndex = -1;
    }if (this._transformDirty) {
      if (this._cachedFrameIndex < 0) {
        var isCache = cacheFrameIndex_0 >= 0;
        this._updateGlobalTransformMatrix_6taknv$(isCache);
        if (isCache && this._cachedFrameIndices != null) {
          var res = ensureNotNull(ensureNotNull(this._armature)._armatureData).setCacheFrame_eeuvpt$(this.globalTransformMatrix, this.global);
          this._cachedFrameIndex = res;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, res);
        }} else {
        (tmp$_2 = (tmp$_1 = this._armature) != null ? tmp$_1._armatureData : null) != null ? (tmp$_2.getCacheFrame_bqh3xf$(this.globalTransformMatrix, this.global, this._cachedFrameIndex), Unit) : null;
      }
      this._updateTransform();
      this._transformDirty = false;
    }};
  Slot.prototype.invalidUpdate = function () {
    this._displayDataDirty = true;
    this._displayDirty = true;
    this._transformDirty = true;
  };
  Slot.prototype.updateTransformAndMatrix = function () {
    if (this._transformDirty) {
      this._updateGlobalTransformMatrix_6taknv$(false);
      this._transformDirty = false;
    }};
  Slot.prototype.replaceRawDisplayData_4o5vqv$ = function (displayData, index) {
    if (index === void 0)
      index = -1;
    var tmp$, tmp$_0, tmp$_1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    } else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame.rawDisplayData, displayData)) {
      displayFrame.deformVertices = new Float64Array(0);
      displayFrame.rawDisplayData = displayData;
      if (displayFrame.rawDisplayData == null) {
        var defaultSkin = (tmp$_0 = (tmp$ = this._armature) != null ? tmp$._armatureData : null) != null ? tmp$_0.defaultSkin : null;
        if (defaultSkin != null) {
          var defaultRawDisplayDatas = defaultSkin.getDisplays_pdl1vj$((tmp$_1 = this._slotData) != null ? tmp$_1.name : null);
          if (defaultRawDisplayDatas != null && index_0 < get_lengthSet_1(defaultRawDisplayDatas)) {
            displayFrame.rawDisplayData = defaultRawDisplayDatas.get_za3lpa$(index_0);
          }}}if (index_0 === this._displayIndex) {
        this._displayDataDirty = true;
      }}};
  Slot.prototype.replaceDisplayData_4o5vqv$ = function (displayData, index) {
    if (index === void 0)
      index = -1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    } else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame.displayData, displayData) && !equals(displayFrame.rawDisplayData, displayData)) {
      displayFrame.displayData = displayData;
      if (index_0 === this._displayIndex) {
        this._displayDataDirty = true;
      }}};
  Slot.prototype.replaceTextureData_vue3bk$ = function (textureData, index) {
    if (index === void 0)
      index = -1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    } else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame._textureData, textureData)) {
      displayFrame._textureData = textureData;
      if (index_0 === this._displayIndex) {
        this._displayDataDirty = true;
      }}};
  Slot.prototype.replaceDisplay_cypnoy$ = function (value, index) {
    if (index === void 0)
      index = -1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    } else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame.display, value)) {
      var prevDisplay = displayFrame.display;
      displayFrame.display = value;
      if (prevDisplay != null && !equals(prevDisplay, this._rawDisplay) && !equals(prevDisplay, this._meshDisplay) && !this._hasDisplay_s8jyv4$(prevDisplay)) {
        if (!Kotlin.isType(prevDisplay, Armature)) {
          this._disposeDisplay_j44yyw$(prevDisplay, true);
        }}if (value != null && !equals(value, this._rawDisplay) && !equals(value, this._meshDisplay) && !this._hasDisplay_s8jyv4$(prevDisplay) && !Kotlin.isType(value, Armature)) {
        this._initDisplay_j44yyw$(value, true);
      }if (index_0 === this._displayIndex) {
        this._displayDirty = true;
      }}};
  Slot.prototype.containsPoint_lu1900$ = function (x, y) {
    if (this._boundingBoxData == null) {
      return false;
    }this.updateTransformAndMatrix();
    this._helpMatrix_8be2vx$.copyFrom_dyon7w$(this.globalTransformMatrix);
    this._helpMatrix_8be2vx$.invert();
    this._helpMatrix_8be2vx$.transformPoint_hd5a0h$(x, y, this._helpPoint_8be2vx$);
    return ensureNotNull(this._boundingBoxData).containsPoint_lu1900$(this._helpPoint_8be2vx$.x, this._helpPoint_8be2vx$.y);
  };
  Slot.prototype.intersectsSegment_e4ky6u$ = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    if (this._boundingBoxData == null) {
      return 0;
    }this.updateTransformAndMatrix();
    this._helpMatrix_8be2vx$.copyFrom_dyon7w$(this.globalTransformMatrix);
    this._helpMatrix_8be2vx$.invert();
    this._helpMatrix_8be2vx$.transformPoint_hd5a0h$(xA, yA, this._helpPoint_8be2vx$);
    var xA_0 = this._helpPoint_8be2vx$.x;
    var yA_0 = this._helpPoint_8be2vx$.y;
    this._helpMatrix_8be2vx$.transformPoint_hd5a0h$(xB, yB, this._helpPoint_8be2vx$);
    var xB_0 = this._helpPoint_8be2vx$.x;
    var yB_0 = this._helpPoint_8be2vx$.y;
    var intersectionCount = ensureNotNull(this._boundingBoxData).intersectsSegment_e4ky6u$(xA_0, yA_0, xB_0, yB_0, intersectionPointA, intersectionPointB, normalRadians);
    if (intersectionCount > 0) {
      if (intersectionCount === 1 || intersectionCount === 2) {
        if (intersectionPointA != null) {
          this.globalTransformMatrix.transformPoint_cck2st$(intersectionPointA.x, intersectionPointA.y, intersectionPointA);
          if (intersectionPointB != null) {
            intersectionPointB.x = intersectionPointA.x;
            intersectionPointB.y = intersectionPointA.y;
          }} else if (intersectionPointB != null) {
          this.globalTransformMatrix.transformPoint_cck2st$(intersectionPointB.x, intersectionPointB.y, intersectionPointB);
        }} else {
        if (intersectionPointA != null) {
          this.globalTransformMatrix.transformPoint_cck2st$(intersectionPointA.x, intersectionPointA.y, intersectionPointA);
        }if (intersectionPointB != null) {
          this.globalTransformMatrix.transformPoint_cck2st$(intersectionPointB.x, intersectionPointB.y, intersectionPointB);
        }}
      if (normalRadians != null) {
        var tmp$ = this.globalTransformMatrix;
        var x = normalRadians.x;
        var tmp$_0 = Math_0.cos(x);
        var x_0 = normalRadians.x;
        tmp$.transformPoint_cck2st$(tmp$_0, Math_0.sin(x_0), this._helpPoint_8be2vx$, true);
        var y = this._helpPoint_8be2vx$.y;
        var x_1 = this._helpPoint_8be2vx$.x;
        normalRadians.x = Math_0.atan2(y, x_1);
        var tmp$_1 = this.globalTransformMatrix;
        var x_2 = normalRadians.y;
        var tmp$_2 = Math_0.cos(x_2);
        var x_3 = normalRadians.y;
        tmp$_1.transformPoint_cck2st$(tmp$_2, Math_0.sin(x_3), this._helpPoint_8be2vx$, true);
        var y_0 = this._helpPoint_8be2vx$.y;
        var x_4 = this._helpPoint_8be2vx$.x;
        normalRadians.y = Math_0.atan2(y_0, x_4);
      }}return intersectionCount;
  };
  Slot.prototype.getDisplayFrameAt_za3lpa$ = function (index) {
    return this._displayFrames.get_za3lpa$(index);
  };
  Object.defineProperty(Slot.prototype, 'visible', {
    get: function () {
      return this._visible;
    },
    set: function (value) {
      if (this._visible === value) {
        return;
      }this._visible = value;
      this._updateVisible();
    }
  });
  Object.defineProperty(Slot.prototype, 'displayFrameCount', {
    get: function () {
      return get_lengthSet_1(this._displayFrames);
    },
    set: function (value) {
      var prevCount = get_lengthSet_1(this._displayFrames);
      if (prevCount < value) {
        set_lengthSet_1(this._displayFrames, value);
        for (var i = prevCount; i < value; i++) {
          this._displayFrames.set_wxm5ur$(i, this.pool.displayFrame.borrow());
        }
      } else if (prevCount > value) {
        var i_0 = prevCount - 1 | 0;
        while (i_0 < value) {
          this.replaceDisplay_cypnoy$(null, i_0);
          this._displayFrames.get_za3lpa$(i_0).returnToPool();
          i_0 = i_0 - 1 | 0;
        }
        set_lengthSet_1(this._displayFrames, value);
      }}
  });
  Object.defineProperty(Slot.prototype, 'displayIndex', {
    get: function () {
      return this._displayIndex;
    },
    set: function (value) {
      this._setDisplayIndex_fzusl$(value);
      this.update_za3lpa$(-1);
    }
  });
  Object.defineProperty(Slot.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._slotData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Slot.prototype, 'displayList', {
    get: function () {
      var displays = ArrayList_init();
      var $receiver = this._displayFrames;
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        push(displays, $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).display);
      }
      return displays;
    },
    set: function (value) {
      this.displayFrameCount = get_length_1(value);
      var index = {v: 0};
      var tmp$;
      var n = 0;
      while (n < value.size) {
        var tmp$_0;
        this.replaceDisplay_cypnoy$(value.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)), (tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0));
      }
    }
  });
  Object.defineProperty(Slot.prototype, 'slotData', {
    get: function () {
      return ensureNotNull(this._slotData);
    }
  });
  Object.defineProperty(Slot.prototype, 'boundingBoxData', {
    get: function () {
      return this._boundingBoxData;
    }
  });
  Object.defineProperty(Slot.prototype, 'rawDisplay', {
    get: function () {
      return ensureNotNull(this._rawDisplay);
    }
  });
  Object.defineProperty(Slot.prototype, 'meshDisplay', {
    get: function () {
      return ensureNotNull(this._meshDisplay);
    }
  });
  Object.defineProperty(Slot.prototype, 'display', {
    get: function () {
      return ensureNotNull(this._display);
    },
    set: function (value) {
      if (equals(this._display, value)) {
        return;
      }if (get_lengthSet_1(this._displayFrames) === 0) {
        this.displayFrameCount = 1;
        this._displayIndex = 0;
      }this.replaceDisplay_cypnoy$(value, this._displayIndex);
    }
  });
  Object.defineProperty(Slot.prototype, 'childArmature', {
    get: function () {
      return this._childArmature;
    },
    set: function (value) {
      if (equals(this._childArmature, value)) {
        return;
      }this.display = ensureNotNull(value);
    }
  });
  Object.defineProperty(Slot.prototype, 'parent', {
    get: function () {
      return ensureNotNull(this._parent_8be2vx$);
    }
  });
  Slot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slot',
    interfaces: [TransformObject]
  };
  function Surface(pool) {
    Bone.call(this, pool);
    this._dX_0 = 0.0;
    this._dY_0 = 0.0;
    this._k_0 = 0.0;
    this._kX_0 = 0.0;
    this._kY_0 = 0.0;
    this._vertices = new Float32Array(0);
    this._deformVertices = new Float32Array(0);
    this._hullCache0_0 = 0.0;
    this._hullCache1_0 = 0.0;
    this._hullCache2_0 = 0.0;
    this._hullCache3_0 = 0.0;
    this._hullCache4_0 = 0.0;
    this._hullCache5_0 = 0.0;
    this._hullCache6_0 = 0.0;
    this._hullCache7_0 = 0.0;
    this._hullCache8_0 = 0.0;
    this._hullCache9_0 = 0.0;
    this._hullCache10_0 = 0.0;
    this._hullCache11_0 = 0.0;
    this._matrixCache_0 = new Float32Array(0);
    this._bone = null;
  }
  Surface.prototype.toString = function () {
    return '[class dragonBones.Surface]';
  };
  Surface.prototype._onClear = function () {
    Bone.prototype._onClear.call(this);
    this._dX_0 = 0.0;
    this._dY_0 = 0.0;
    this._k_0 = 0.0;
    this._kX_0 = 0.0;
    this._kY_0 = 0.0;
    this._vertices = new Float32Array(0);
    this._deformVertices = new Float32Array(0);
    this._matrixCache_0 = new Float32Array(0);
    this._bone = null;
  };
  Surface.prototype._getAffineTransform_0 = function (x, y, lX, lY, aX, aY, bX, bY, cX, cY, transform, matrix, isDown) {
    var dabX = bX - aX;
    var dabY = bY - aY;
    var dacX = cX - aX;
    var dacY = cY - aY;
    transform.rotation = Math_0.atan2(dabY, dabX);
    transform.skew = Math_0.atan2(dacY, dacX) - math.PI * 0.5 - transform.rotation;
    if (isDown) {
      transform.rotation = transform.rotation + math.PI;
    }var x_0 = dabX * dabX + dabY * dabY;
    transform.scaleX = Math_0.sqrt(x_0) / lX;
    var x_1 = dacX * dacX + dacY * dacY;
    transform.scaleY = Math_0.sqrt(x_1) / lY;
    transform.toMatrix_dyon7w$(matrix);
    var rx = aX - (matrix.a * x + matrix.c * y);
    transform.x = rx;
    matrix.tx = rx;
    var ry = aY - (matrix.b * x + matrix.d * y);
    transform.y = ry;
    matrix.ty = ry;
  };
  Surface.prototype._updateVertices_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var data = ensureNotNull(ensureNotNull(this._armature).armatureData.parent);
    var geometry = ensureNotNull(this._boneData).geometry;
    var intArray = ensureNotNull(data.intArray);
    var floatArray = ensureNotNull(data.floatArray);
    var vertexCount = intArray[geometry.offset + 0 | 0];
    var verticesOffset = intArray[geometry.offset + 2 | 0];
    var vertices = this._vertices;
    var animationVertices = this._deformVertices;
    if (this._parent != null) {
      if (((tmp$_0 = (tmp$ = this._parent) != null ? tmp$._boneData : null) != null ? tmp$_0.isSurface : null) === true) {
        var surface = Kotlin.isType(tmp$_1 = this._parent, Surface) ? tmp$_1 : throwCCE();
        for (var i = 0; i < vertexCount; i++) {
          var iD = i * 2 | 0;
          var x = floatArray[verticesOffset + iD + 0 | 0] + animationVertices[iD + 0 | 0];
          var y = floatArray[verticesOffset + iD + 1 | 0] + animationVertices[iD + 1 | 0];
          var matrix = surface._getGlobalTransformMatrix_dleff0$(x, y);
          vertices[iD + 0 | 0] = matrix.transformX_dleff0$(x, y);
          vertices[iD + 1 | 0] = matrix.transformY_dleff0$(x, y);
        }
      } else {
        var parentMatrix = ensureNotNull(this._parent).globalTransformMatrix;
        for (var i_0 = 0; i_0 < vertexCount; i_0++) {
          var iD_0 = i_0 * 2 | 0;
          var x_0 = floatArray[verticesOffset + iD_0 + 0 | 0] + animationVertices[iD_0 + 0 | 0];
          var y_0 = floatArray[verticesOffset + iD_0 + 1 | 0] + animationVertices[iD_0 + 1 | 0];
          vertices[iD_0 + 0 | 0] = parentMatrix.transformX_dleff0$(x_0, y_0);
          vertices[iD_0 + 1 | 0] = parentMatrix.transformY_dleff0$(x_0, y_0);
        }
      }
    } else {
      for (var i_1 = 0; i_1 < vertexCount; i_1++) {
        var iD_1 = i_1 * 2 | 0;
        vertices[iD_1 + 0 | 0] = floatArray[verticesOffset + iD_1 + 0 | 0] + animationVertices[iD_1 + 0 | 0];
        vertices[iD_1 + 1 | 0] = floatArray[verticesOffset + iD_1 + 1 | 0] + animationVertices[iD_1 + 1 | 0];
      }
    }
  };
  Surface.prototype._updateGlobalTransformMatrix_6taknv$ = function (isCache) {
    var segmentXD = ensureNotNull(this._boneData).segmentX * 2 | 0;
    var lastIndex = this._vertices.length - 2 | 0;
    var lA = 200.0;
    var raX = this._vertices[0];
    var raY = this._vertices[1];
    var rbX = this._vertices[segmentXD + 0 | 0];
    var rbY = this._vertices[segmentXD + 1 | 0];
    var rcX = this._vertices[lastIndex + 0 | 0];
    var rcY = this._vertices[lastIndex + 1 | 0];
    var rdX = this._vertices[lastIndex - segmentXD + 0 | 0];
    var rdY = this._vertices[lastIndex - segmentXD + 1 | 0];
    var dacX = raX + (rcX - raX) * 0.5;
    var dacY = raY + (rcY - raY) * 0.5;
    var dbdX = rbX + (rdX - rbX) * 0.5;
    var dbdY = rbY + (rdY - rbY) * 0.5;
    var aX = dacX + (dbdX - dacX) * 0.5;
    var aY = dacY + (dbdY - dacY) * 0.5;
    var bX = rbX + (rcX - rbX) * 0.5;
    var bY = rbY + (rcY - rbY) * 0.5;
    var cX = rdX + (rcX - rdX) * 0.5;
    var cY = rdY + (rcY - rdY) * 0.5;
    this._getAffineTransform_0(0.0, 0.0, lA, lA, aX, aY, bX, bY, cX, cY, this.global, this.globalTransformMatrix, false);
    this._globalDirty = false;
  };
  Surface.prototype._getGlobalTransformMatrix_dleff0$ = function (x, y) {
    var lA = 200.0;
    var lB = 1000.0;
    if (x < -lB || lB < x || y < -lB || lB < y) {
      return this.globalTransformMatrix;
    }var isDown;
    var surfaceData = ensureNotNull(this._boneData);
    var segmentX = surfaceData.segmentX;
    var segmentY = surfaceData.segmentY;
    var segmentXD = surfaceData.segmentX * 2 | 0;
    var dX = this._dX_0;
    var dY = this._dY_0;
    var indexX = numberToInt((x + lA) / dX);
    var indexY = numberToInt((y + lA) / dY);
    var matrixIndex;
    var pX = indexX * dX - lA;
    var pY = indexY * dY - lA;
    var matrices = this._matrixCache_0;
    var helpMatrix = this._helpMatrix_8be2vx$;
    if (x < -lA) {
      if (y < -lA || y >= lA) {
        return this.globalTransformMatrix;
      }isDown = y > this._kX_0 * (x + lA) + pY;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + segmentX + segmentY + segmentY + indexY | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices[matrixIndex] > 0.0) {
        helpMatrix.copyFromArray_9752rg$(matrices, matrixIndex + 1 | 0);
      } else {
        var vertexIndex = Kotlin.imul(indexY, segmentXD + 2 | 0);
        var ddX = this._hullCache4_0;
        var ddY = this._hullCache5_0;
        var sX = this._hullCache2_0 - (segmentY - indexY | 0) * ddX;
        var sY = this._hullCache3_0 - (segmentY - indexY | 0) * ddY;
        var vertices = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(-lA, pY + dY, lB - lA, dY, vertices[vertexIndex + segmentXD + 2 | 0], vertices[vertexIndex + segmentXD + 3 | 0], sX + ddX, sY + ddY, vertices[vertexIndex], vertices[vertexIndex + 1 | 0], this._helpTransform_8be2vx$, helpMatrix, true);
        } else {
          this._getAffineTransform_0(-lB, pY, lB - lA, dY, sX, sY, vertices[vertexIndex], vertices[vertexIndex + 1 | 0], sX + ddX, sY + ddY, this._helpTransform_8be2vx$, helpMatrix, false);
        }
        this.setMatricesFromHelp_0(matrices, matrixIndex, helpMatrix);
      }
    } else if (x >= lA) {
      if (y < -lA || y >= lA) {
        return this.globalTransformMatrix;
      }isDown = y > this._kX_0 * (x - lB) + pY;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + segmentX + indexY | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices[matrixIndex] > 0.0) {
        helpMatrix.copyFromArray_9752rg$(matrices, matrixIndex + 1 | 0);
      } else {
        var vertexIndex_0 = Kotlin.imul(indexY + 1 | 0, segmentXD + 2 | 0) - 2 | 0;
        var ddX_0 = this._hullCache4_0;
        var ddY_0 = this._hullCache5_0;
        var sX_0 = this._hullCache0_0 + indexY * ddX_0;
        var sY_0 = this._hullCache1_0 + indexY * ddY_0;
        var vertices_0 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(lB, pY + dY, lB - lA, dY, sX_0 + ddX_0, sY_0 + ddY_0, vertices_0[vertexIndex_0 + segmentXD + 2 | 0], vertices_0[vertexIndex_0 + segmentXD + 3 | 0], sX_0, sY_0, this._helpTransform_8be2vx$, helpMatrix, true);
        } else {
          this._getAffineTransform_0(lA, pY, lB - lA, dY, vertices_0[vertexIndex_0], vertices_0[vertexIndex_0 + 1 | 0], sX_0, sY_0, vertices_0[vertexIndex_0 + segmentXD + 2 | 0], vertices_0[vertexIndex_0 + segmentXD + 3 | 0], this._helpTransform_8be2vx$, helpMatrix, false);
        }
        this.setMatricesFromHelp_0(matrices, matrixIndex, helpMatrix);
      }
    } else if (y < -lA) {
      if (x < -lA || x >= lA) {
        return this.globalTransformMatrix;
      }isDown = y > this._kY_0 * (x - pX - dX) - lB;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + indexX | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices[matrixIndex] > 0.0) {
        helpMatrix.copyFromArray_9752rg$(matrices, matrixIndex + 1 | 0);
      } else {
        var vertexIndex_1 = indexX * 2 | 0;
        var ddX_1 = this._hullCache10_0;
        var ddY_1 = this._hullCache11_0;
        var sX_1 = this._hullCache8_0 + indexX * ddX_1;
        var sY_1 = this._hullCache9_0 + indexX * ddY_1;
        var vertices_1 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(pX + dX, -lA, dX, lB - lA, vertices_1[vertexIndex_1 + 2 | 0], vertices_1[vertexIndex_1 + 3 | 0], vertices_1[vertexIndex_1], vertices_1[vertexIndex_1 + 1 | 0], sX_1 + ddX_1, sY_1 + ddY_1, this._helpTransform_8be2vx$, helpMatrix, true);
        } else {
          this._getAffineTransform_0(pX, -lB, dX, lB - lA, sX_1, sY_1, sX_1 + ddX_1, sY_1 + ddY_1, vertices_1[vertexIndex_1], vertices_1[vertexIndex_1 + 1 | 0], this._helpTransform_8be2vx$, helpMatrix, false);
        }
        this.setMatricesFromHelp_0(matrices, matrixIndex, helpMatrix);
      }
    } else if (y >= lA) {
      if (x < -lA || x >= lA) {
        return this.globalTransformMatrix;
      }isDown = y > this._kY_0 * (x - pX - dX) + lA;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + segmentX + segmentY + indexX | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices[matrixIndex] > 0.0) {
        helpMatrix.copyFromArray_9752rg$(matrices, matrixIndex + 1 | 0);
      } else {
        var vertexIndex_2 = Kotlin.imul(segmentY, segmentXD + 2 | 0) + (indexX * 2 | 0) | 0;
        var ddX_2 = this._hullCache10_0;
        var ddY_2 = this._hullCache11_0;
        var sX_2 = this._hullCache6_0 - (segmentX - indexX | 0) * ddX_2;
        var sY_2 = this._hullCache7_0 - (segmentX - indexX | 0) * ddY_2;
        var vertices_2 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(pX + dX, lB, dX, lB - lA, sX_2 + ddX_2, sY_2 + ddY_2, sX_2, sY_2, vertices_2[vertexIndex_2 + 2 | 0], vertices_2[vertexIndex_2 + 3 | 0], this._helpTransform_8be2vx$, helpMatrix, true);
        } else {
          this._getAffineTransform_0(pX, lA, dX, lB - lA, vertices_2[vertexIndex_2], vertices_2[vertexIndex_2 + 1 | 0], vertices_2[vertexIndex_2 + 2 | 0], vertices_2[vertexIndex_2 + 3 | 0], sX_2, sY_2, this._helpTransform_8be2vx$, helpMatrix, false);
        }
        this.setMatricesFromHelp_0(matrices, matrixIndex, helpMatrix);
      }
    } else {
      isDown = y > this._k_0 * (x - pX - dX) + pY;
      matrixIndex = (((Kotlin.imul(segmentX, indexY) + indexX | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices[matrixIndex] > 0.0) {
        helpMatrix.copyFromArray_9752rg$(matrices, matrixIndex + 1 | 0);
      } else {
        var vertexIndex_3 = (indexX * 2 | 0) + Kotlin.imul(indexY, segmentXD + 2 | 0) | 0;
        var vertices_3 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(pX + dX, pY + dY, dX, dY, vertices_3[vertexIndex_3 + segmentXD + 4 | 0], vertices_3[vertexIndex_3 + segmentXD + 5 | 0], vertices_3[vertexIndex_3 + segmentXD + 2 | 0], vertices_3[vertexIndex_3 + segmentXD + 3 | 0], vertices_3[vertexIndex_3 + 2 | 0], vertices_3[vertexIndex_3 + 3 | 0], this._helpTransform_8be2vx$, helpMatrix, true);
        } else {
          this._getAffineTransform_0(pX, pY, dX, dY, vertices_3[vertexIndex_3], vertices_3[vertexIndex_3 + 1 | 0], vertices_3[vertexIndex_3 + 2 | 0], vertices_3[vertexIndex_3 + 3 | 0], vertices_3[vertexIndex_3 + segmentXD + 2 | 0], vertices_3[vertexIndex_3 + segmentXD + 3 | 0], this._helpTransform_8be2vx$, helpMatrix, false);
        }
        this.setMatricesFromHelp_0(matrices, matrixIndex, helpMatrix);
      }
    }
    return helpMatrix;
  };
  Surface.prototype.setMatricesFromHelp_0 = function (matrices, matrixIndex, helpMatrix) {
    matrices[matrixIndex] = 1.0;
    matrices[matrixIndex + 1 | 0] = helpMatrix.a;
    matrices[matrixIndex + 2 | 0] = helpMatrix.b;
    matrices[matrixIndex + 3 | 0] = helpMatrix.c;
    matrices[matrixIndex + 4 | 0] = helpMatrix.d;
    matrices[matrixIndex + 5 | 0] = helpMatrix.tx;
    matrices[matrixIndex + 6 | 0] = helpMatrix.ty;
  };
  Surface.prototype.init_7qxzn9$ = function (boneData, armatureValue) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var surfaceData = boneData;
    if (this._boneData != null) {
      return;
    }Bone.prototype.init_7qxzn9$.call(this, surfaceData, armatureValue);
    var segmentX = surfaceData.segmentX;
    var segmentY = surfaceData.segmentY;
    var vertexCount = ensureNotNull(ensureNotNull(ensureNotNull(this._armature).armatureData.parent).intArray)[surfaceData.geometry.offset + 0 | 0];
    var lB = 1000.0;
    var lA = 200.0;
    this._dX_0 = lA * 2.0 / segmentX;
    this._dY_0 = lA * 2.0 / segmentY;
    this._k_0 = -this._dY_0 / this._dX_0;
    this._kX_0 = -this._dY_0 / (lB - lA);
    this._kY_0 = -(lB - lA) / this._dX_0;
    this._vertices = new Float32Array(vertexCount * 2);
    this._deformVertices = new Float32Array(vertexCount * 2);
    this._matrixCache_0 = new Float32Array(((Kotlin.imul(segmentX, segmentY) + (segmentX * 2 | 0) + (segmentY * 2 | 0) | 0) * 2 | 0) * 7 | 0);
    tmp$ = vertexCount * 2;
    for (var i = 0; i < tmp$; i++) {
      this._deformVertices[i] = 0.0;
    }
    if (this._parent != null) {
      if (((tmp$_1 = (tmp$_0 = this._parent) != null ? tmp$_0.boneData : null) != null ? tmp$_1.isBone : null) === true) {
        this._bone = this._parent;
      } else {
        this._bone = (Kotlin.isType(tmp$_2 = this._parent, Surface) ? tmp$_2 : throwCCE())._bone;
      }
    }};
  Surface.prototype.update_za3lpa$ = function (cacheFrameIndex) {
    var tmp$, tmp$_0, tmp$_1;
    var cacheFrameIndex_0 = cacheFrameIndex;
    if (cacheFrameIndex_0 >= 0 && this._cachedFrameIndices != null) {
      var cachedFrameIndex = ensureNotNull(this._cachedFrameIndices).get_za3lpa$(cacheFrameIndex_0);
      if (cachedFrameIndex >= 0 && this._cachedFrameIndex === cachedFrameIndex) {
        this._transformDirty = false;
      } else if (cachedFrameIndex >= 0) {
        this._transformDirty = true;
        this._cachedFrameIndex = cachedFrameIndex;
      } else {
        if (this._hasConstraint) {
          var $receiver = ensureNotNull(this._armature)._constraints;
          var tmp$_2;
          var n = 0;
          while (n < $receiver.size) {
            var constraint = $receiver.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
            if (equals(constraint._root, this)) {
              constraint.update();
            }}
        }if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        } else if (this._cachedFrameIndex >= 0) {
          this._transformDirty = false;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, this._cachedFrameIndex);
        } else {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        }
      }
    } else {
      if (this._hasConstraint) {
        var $receiver_0 = ensureNotNull(this._armature)._constraints;
        var tmp$_3;
        var n_0 = 0;
        while (n_0 < $receiver_0.size) {
          var constraint_0 = $receiver_0.get_za3lpa$((tmp$_3 = n_0, n_0 = tmp$_3 + 1 | 0, tmp$_3));
          if (equals(constraint_0._root, this)) {
            constraint_0.update();
          }}
      }if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
        cacheFrameIndex_0 = -1;
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      }}
    if (this._transformDirty) {
      this._transformDirty = false;
      this._childrenTransformDirty = true;
      tmp$ = this._matrixCache_0.length;
      for (var i = 0; i < tmp$; i += 7) {
        this._matrixCache_0[i] = -1.0;
      }
      this._updateVertices_0();
      if (this._cachedFrameIndex < 0) {
        var isCache = cacheFrameIndex_0 >= 0;
        if (this._localDirty) {
          this._updateGlobalTransformMatrix_6taknv$(isCache);
        }if (isCache && this._cachedFrameIndices != null) {
          var res = ensureNotNull(ensureNotNull(this._armature)._armatureData).setCacheFrame_eeuvpt$(this.globalTransformMatrix, this.global);
          this._cachedFrameIndex = res;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, res);
        }} else {
        (tmp$_1 = (tmp$_0 = this._armature) != null ? tmp$_0._armatureData : null) != null ? (tmp$_1.getCacheFrame_bqh3xf$(this.globalTransformMatrix, this.global, this._cachedFrameIndex), Unit) : null;
      }
      var lB = 1000.0;
      var lA = 200.0;
      var ddX = 2 * this.global.x;
      var ddY = 2 * this.global.y;
      var helpPoint = this._helpPoint_8be2vx$;
      this.globalTransformMatrix.transformPoint_cck2st$(lB, -lA, helpPoint);
      this._hullCache0_0 = helpPoint.x;
      this._hullCache1_0 = helpPoint.y;
      this._hullCache2_0 = ddX - helpPoint.x;
      this._hullCache3_0 = ddY - helpPoint.y;
      this.globalTransformMatrix.transformPoint_cck2st$(0.0, this._dY_0, helpPoint, true);
      this._hullCache4_0 = helpPoint.x;
      this._hullCache5_0 = helpPoint.y;
      this.globalTransformMatrix.transformPoint_cck2st$(lA, lB, helpPoint);
      this._hullCache6_0 = helpPoint.x;
      this._hullCache7_0 = helpPoint.y;
      this._hullCache8_0 = ddX - helpPoint.x;
      this._hullCache9_0 = ddY - helpPoint.y;
      this.globalTransformMatrix.transformPoint_cck2st$(this._dX_0, 0.0, helpPoint, true);
      this._hullCache10_0 = helpPoint.x;
      this._hullCache11_0 = helpPoint.y;
    } else if (this._childrenTransformDirty) {
      this._childrenTransformDirty = false;
    }this._localDirty = true;
  };
  Surface.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Surface',
    interfaces: [Bone]
  };
  function TransformObject(pool) {
    BaseObject.call(this, pool);
    this.globalTransformMatrix = new Matrix_0();
    this.global = new Transform();
    this.offset = new Transform();
    this.origin = null;
    this.userData = null;
    this._globalDirty = false;
    this._alpha = 1.0;
    this._globalAlpha = 1.0;
    this._armature = null;
  }
  Object.defineProperty(TransformObject.prototype, '_helpMatrix_8be2vx$', {
    get: function () {
      return this.pool._helpMatrix_8be2vx$;
    }
  });
  Object.defineProperty(TransformObject.prototype, '_helpTransform_8be2vx$', {
    get: function () {
      return this.pool._helpTransform_8be2vx$;
    }
  });
  Object.defineProperty(TransformObject.prototype, '_helpPoint_8be2vx$', {
    get: function () {
      return this.pool._helpPoint_8be2vx$;
    }
  });
  TransformObject.prototype._onClear = function () {
    this.globalTransformMatrix.identity();
    this.global.identity();
    this.offset.identity();
    this.origin = null;
    this.userData = null;
    this._globalDirty = false;
    this._alpha = 1.0;
    this._globalAlpha = 1.0;
    this._armature = null;
  };
  TransformObject.prototype.updateGlobalTransform = function () {
    if (this._globalDirty) {
      this._globalDirty = false;
      this.global.fromMatrix_dyon7w$(this.globalTransformMatrix);
    }};
  Object.defineProperty(TransformObject.prototype, 'armature', {
    get: function () {
      return ensureNotNull(this._armature);
    }
  });
  TransformObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransformObject',
    interfaces: [BaseObject]
  };
  function BaseObject(sopool) {
    this.sopool = sopool;
    this.pool = this.sopool.base;
    var tmp$, tmp$_0;
    this.ipool_m11bz1$_0 = Kotlin.isType(tmp$ = this.sopool, SingleObjectPool) ? tmp$ : throwCCE();
    var tmp$_1;
    tmp$_1 = this.pool;
    tmp$_0 = tmp$_1.__hashCode;
    tmp$_1.__hashCode = tmp$_0 + 1 | 0;
    this._hashCode = tmp$_0;
    this._isInPool_8be2vx$ = false;
  }
  BaseObject.prototype.toString = function () {
    return 'BaseObject.Unknown';
  };
  BaseObject.prototype.returnToPool = function () {
    this._onClear();
    this.ipool_m11bz1$_0.returnObject_95m3kg$(this);
  };
  BaseObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseObject',
    interfaces: []
  };
  function SingleObjectPool(base, gen) {
    this.base = base;
    this.pool_0 = Pool_init(void 0, SingleObjectPool$pool$lambda(gen, this));
  }
  SingleObjectPool.prototype.returnObject_95m3kg$ = function (obj) {
    this.pool_0.free_11rb$(obj);
  };
  SingleObjectPool.prototype.borrow = function () {
    var $receiver = this.pool_0.alloc();
    $receiver._onClear();
    $receiver._isInPool_8be2vx$ = false;
    return $receiver;
  };
  function SingleObjectPool$pool$lambda(closure$gen, this$SingleObjectPool) {
    return function (it) {
      return closure$gen(this$SingleObjectPool);
    };
  }
  SingleObjectPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleObjectPool',
    interfaces: []
  };
  function BaseObjectPool() {
    this.__hashCode = 0;
    this._helpMatrix_8be2vx$ = new Matrix_0();
    this._helpTransform_8be2vx$ = new Transform();
    this._helpPoint_8be2vx$ = new Point();
    this.DEFAULT_COLOR = new ColorTransform();
    this.animation = this.objPool_jdi6sj$(BaseObjectPool$animation$lambda);
    this.eventObject = this.objPool_jdi6sj$(BaseObjectPool$eventObject$lambda);
    this.displayFrame = this.objPool_jdi6sj$(BaseObjectPool$displayFrame$lambda);
    this.animationConfig = this.objPool_jdi6sj$(BaseObjectPool$animationConfig$lambda);
    this.blendState = this.objPool_jdi6sj$(BaseObjectPool$blendState$lambda);
    this.iKConstraintTimelineState = this.objPool_jdi6sj$(BaseObjectPool$iKConstraintTimelineState$lambda);
    this.boneAllTimelineState = this.objPool_jdi6sj$(BaseObjectPool$boneAllTimelineState$lambda);
    this.boneTranslateTimelineState = this.objPool_jdi6sj$(BaseObjectPool$boneTranslateTimelineState$lambda);
    this.boneRotateTimelineState = this.objPool_jdi6sj$(BaseObjectPool$boneRotateTimelineState$lambda);
    this.boneScaleTimelineState = this.objPool_jdi6sj$(BaseObjectPool$boneScaleTimelineState$lambda);
    this.slotDisplayTimelineState = this.objPool_jdi6sj$(BaseObjectPool$slotDisplayTimelineState$lambda);
    this.slotZIndexTimelineState = this.objPool_jdi6sj$(BaseObjectPool$slotZIndexTimelineState$lambda);
    this.slotColorTimelineState = this.objPool_jdi6sj$(BaseObjectPool$slotColorTimelineState$lambda);
    this.deformTimelineState = this.objPool_jdi6sj$(BaseObjectPool$deformTimelineState$lambda);
    this.alphaTimelineState = this.objPool_jdi6sj$(BaseObjectPool$alphaTimelineState$lambda);
    this.zOrderTimelineState = this.objPool_jdi6sj$(BaseObjectPool$zOrderTimelineState$lambda);
    this.surfaceTimelineState = this.objPool_jdi6sj$(BaseObjectPool$surfaceTimelineState$lambda);
    this.animationProgressTimelineState = this.objPool_jdi6sj$(BaseObjectPool$animationProgressTimelineState$lambda);
    this.animationWeightTimelineState = this.objPool_jdi6sj$(BaseObjectPool$animationWeightTimelineState$lambda);
    this.animationParametersTimelineState = this.objPool_jdi6sj$(BaseObjectPool$animationParametersTimelineState$lambda);
    this.armatureData = this.objPool_jdi6sj$(BaseObjectPool$armatureData$lambda);
    this.canvasData = this.objPool_jdi6sj$(BaseObjectPool$canvasData$lambda);
    this.boneData = this.objPool_jdi6sj$(BaseObjectPool$boneData$lambda);
    this.surfaceData = this.objPool_jdi6sj$(BaseObjectPool$surfaceData$lambda);
    this.surface = this.objPool_jdi6sj$(BaseObjectPool$surface$lambda);
    this.bone = this.objPool_jdi6sj$(BaseObjectPool$bone$lambda);
    this.iKConstraint = this.objPool_jdi6sj$(BaseObjectPool$iKConstraint$lambda);
    this.pathConstraint = this.objPool_jdi6sj$(BaseObjectPool$pathConstraint$lambda);
    this.iKConstraintData = this.objPool_jdi6sj$(BaseObjectPool$iKConstraintData$lambda);
    this.pathConstraintData = this.objPool_jdi6sj$(BaseObjectPool$pathConstraintData$lambda);
    this.slotData = this.objPool_jdi6sj$(BaseObjectPool$slotData$lambda);
    this.skinData = this.objPool_jdi6sj$(BaseObjectPool$skinData$lambda);
    this.imageDisplayData = this.objPool_jdi6sj$(BaseObjectPool$imageDisplayData$lambda);
    this.armatureDisplayData = this.objPool_jdi6sj$(BaseObjectPool$armatureDisplayData$lambda);
    this.meshDisplayData = this.objPool_jdi6sj$(BaseObjectPool$meshDisplayData$lambda);
    this.boundingBoxDisplayData = this.objPool_jdi6sj$(BaseObjectPool$boundingBoxDisplayData$lambda);
    this.pathDisplayData = this.objPool_jdi6sj$(BaseObjectPool$pathDisplayData$lambda);
    this.rectangleBoundingBoxData = this.objPool_jdi6sj$(BaseObjectPool$rectangleBoundingBoxData$lambda);
    this.ellipseBoundingBoxData = this.objPool_jdi6sj$(BaseObjectPool$ellipseBoundingBoxData$lambda);
    this.polygonBoundingBoxData = this.objPool_jdi6sj$(BaseObjectPool$polygonBoundingBoxData$lambda);
    this.animationData = this.objPool_jdi6sj$(BaseObjectPool$animationData$lambda);
    this.animationTimelineData = this.objPool_jdi6sj$(BaseObjectPool$animationTimelineData$lambda);
    this.timelineData = this.objPool_jdi6sj$(BaseObjectPool$timelineData$lambda);
    this.actionData = this.objPool_jdi6sj$(BaseObjectPool$actionData$lambda);
    this.userData = this.objPool_jdi6sj$(BaseObjectPool$userData$lambda);
    this.weightData = this.objPool_jdi6sj$(BaseObjectPool$weightData$lambda);
    this.dragonBonesData = this.objPool_jdi6sj$(BaseObjectPool$dragonBonesData$lambda);
    this.armature = this.objPool_jdi6sj$(BaseObjectPool$armature$lambda);
    this.animationState = this.objPool_jdi6sj$(BaseObjectPool$animationState$lambda);
    this.actionTimelineState = this.objPool_jdi6sj$(BaseObjectPool$actionTimelineState$lambda);
    this.textureAtlasData = this.objPool_jdi6sj$(BaseObjectPool$textureAtlasData$lambda);
    this.textureData = this.objPool_jdi6sj$(BaseObjectPool$textureData$lambda);
    this.slot = this.objPool_jdi6sj$(BaseObjectPool$slot$lambda);
  }
  BaseObjectPool.prototype.objPool_jdi6sj$ = function (gen) {
    return new SingleObjectPool(this, gen);
  };
  function BaseObjectPool$animation$lambda(it) {
    return new Animation(it);
  }
  function BaseObjectPool$eventObject$lambda(it) {
    return new EventObject(it);
  }
  function BaseObjectPool$displayFrame$lambda(it) {
    return new DisplayFrame(it);
  }
  function BaseObjectPool$animationConfig$lambda(it) {
    return new AnimationConfig(it);
  }
  function BaseObjectPool$blendState$lambda(it) {
    return new BlendState(it);
  }
  function BaseObjectPool$iKConstraintTimelineState$lambda(it) {
    return new IKConstraintTimelineState(it);
  }
  function BaseObjectPool$boneAllTimelineState$lambda(it) {
    return new BoneAllTimelineState(it);
  }
  function BaseObjectPool$boneTranslateTimelineState$lambda(it) {
    return new BoneTranslateTimelineState(it);
  }
  function BaseObjectPool$boneRotateTimelineState$lambda(it) {
    return new BoneRotateTimelineState(it);
  }
  function BaseObjectPool$boneScaleTimelineState$lambda(it) {
    return new BoneScaleTimelineState(it);
  }
  function BaseObjectPool$slotDisplayTimelineState$lambda(it) {
    return new SlotDisplayTimelineState(it);
  }
  function BaseObjectPool$slotZIndexTimelineState$lambda(it) {
    return new SlotZIndexTimelineState(it);
  }
  function BaseObjectPool$slotColorTimelineState$lambda(it) {
    return new SlotColorTimelineState(it);
  }
  function BaseObjectPool$deformTimelineState$lambda(it) {
    return new DeformTimelineState(it);
  }
  function BaseObjectPool$alphaTimelineState$lambda(it) {
    return new AlphaTimelineState(it);
  }
  function BaseObjectPool$zOrderTimelineState$lambda(it) {
    return new ZOrderTimelineState(it);
  }
  function BaseObjectPool$surfaceTimelineState$lambda(it) {
    return new SurfaceTimelineState(it);
  }
  function BaseObjectPool$animationProgressTimelineState$lambda(it) {
    return new AnimationProgressTimelineState(it);
  }
  function BaseObjectPool$animationWeightTimelineState$lambda(it) {
    return new AnimationWeightTimelineState(it);
  }
  function BaseObjectPool$animationParametersTimelineState$lambda(it) {
    return new AnimationParametersTimelineState(it);
  }
  function BaseObjectPool$armatureData$lambda(it) {
    return new ArmatureData(it);
  }
  function BaseObjectPool$canvasData$lambda(it) {
    return new CanvasData(it);
  }
  function BaseObjectPool$boneData$lambda(it) {
    return new BoneData(it);
  }
  function BaseObjectPool$surfaceData$lambda(it) {
    return new SurfaceData(it);
  }
  function BaseObjectPool$surface$lambda(it) {
    return new Surface(it);
  }
  function BaseObjectPool$bone$lambda(it) {
    return new Bone(it);
  }
  function BaseObjectPool$iKConstraint$lambda(it) {
    return new IKConstraint(it);
  }
  function BaseObjectPool$pathConstraint$lambda(it) {
    return new PathConstraint(it);
  }
  function BaseObjectPool$iKConstraintData$lambda(it) {
    return new IKConstraintData(it);
  }
  function BaseObjectPool$pathConstraintData$lambda(it) {
    return new PathConstraintData(it);
  }
  function BaseObjectPool$slotData$lambda(it) {
    return new SlotData(it);
  }
  function BaseObjectPool$skinData$lambda(it) {
    return new SkinData(it);
  }
  function BaseObjectPool$imageDisplayData$lambda(it) {
    return new ImageDisplayData(it);
  }
  function BaseObjectPool$armatureDisplayData$lambda(it) {
    return new ArmatureDisplayData(it);
  }
  function BaseObjectPool$meshDisplayData$lambda(it) {
    return new MeshDisplayData(it);
  }
  function BaseObjectPool$boundingBoxDisplayData$lambda(it) {
    return new BoundingBoxDisplayData(it);
  }
  function BaseObjectPool$pathDisplayData$lambda(it) {
    return new PathDisplayData(it);
  }
  function BaseObjectPool$rectangleBoundingBoxData$lambda(it) {
    return new RectangleBoundingBoxData(it);
  }
  function BaseObjectPool$ellipseBoundingBoxData$lambda(it) {
    return new EllipseBoundingBoxData(it);
  }
  function BaseObjectPool$polygonBoundingBoxData$lambda(it) {
    return new PolygonBoundingBoxData(it);
  }
  function BaseObjectPool$animationData$lambda(it) {
    return new AnimationData(it);
  }
  function BaseObjectPool$animationTimelineData$lambda(it) {
    return new AnimationTimelineData(it);
  }
  function BaseObjectPool$timelineData$lambda(it) {
    return new TimelineData(it);
  }
  function BaseObjectPool$actionData$lambda(it) {
    return new ActionData(it);
  }
  function BaseObjectPool$userData$lambda(it) {
    return new UserData(it);
  }
  function BaseObjectPool$weightData$lambda(it) {
    return new WeightData(it);
  }
  function BaseObjectPool$dragonBonesData$lambda(it) {
    return new DragonBonesData(it);
  }
  function BaseObjectPool$armature$lambda(it) {
    return new Armature(it);
  }
  function BaseObjectPool$animationState$lambda(it) {
    return new AnimationState(it);
  }
  function BaseObjectPool$actionTimelineState$lambda(it) {
    return new ActionTimelineState(it);
  }
  function BaseObjectPool$textureAtlasData$lambda(it) {
    return new KorgeDbTextureAtlasData(it);
  }
  function BaseObjectPool$textureData$lambda(it) {
    return new KorgeDbTextureData(it);
  }
  function BaseObjectPool$slot$lambda(it) {
    return new KorgeDbSlot(it);
  }
  BaseObjectPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseObjectPool',
    interfaces: []
  };
  function IntEnum() {
  }
  IntEnum.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IntEnum',
    interfaces: []
  };
  function IntEnumCompanion(rawValues) {
    this.rawValues_9lc836$_0 = rawValues;
    var $receiver = this.rawValues_9lc836$_0;
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.values_gew8cq$_0 = destination;
  }
  IntEnumCompanion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.values_gew8cq$_0.get_11rb$(index)) != null ? tmp$ : first(this.rawValues_9lc836$_0);
  };
  IntEnumCompanion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntEnumCompanion',
    interfaces: []
  };
  function BinaryOffset() {
    BinaryOffset_instance = this;
    this.WeigthBoneCount = 0;
    this.WeigthFloatOffset = 1;
    this.WeigthBoneIndices = 2;
    this.GeometryVertexCount = 0;
    this.GeometryTriangleCount = 1;
    this.GeometryFloatOffset = 2;
    this.GeometryWeightOffset = 3;
    this.GeometryVertexIndices = 4;
    this.TimelineScale = 0;
    this.TimelineOffset = 1;
    this.TimelineKeyFrameCount = 2;
    this.TimelineFrameValueCount = 3;
    this.TimelineFrameValueOffset = 4;
    this.TimelineFrameOffset = 5;
    this.FramePosition = 0;
    this.FrameTweenType = 1;
    this.FrameTweenEasingOrCurveSampleCount = 2;
    this.FrameCurveSamples = 3;
    this.DeformVertexOffset = 0;
    this.DeformCount = 1;
    this.DeformValueCount = 2;
    this.DeformValueOffset = 3;
    this.DeformFloatOffset = 4;
  }
  BinaryOffset.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BinaryOffset',
    interfaces: []
  };
  var BinaryOffset_instance = null;
  function BinaryOffset_getInstance() {
    if (BinaryOffset_instance === null) {
      new BinaryOffset();
    }return BinaryOffset_instance;
  }
  function ArmatureType(name, ordinal, id) {
    Enum.call(this);
    this.id_5e5mxg$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ArmatureType_initFields() {
    ArmatureType_initFields = function () {
    };
    ArmatureType$Armature_instance = new ArmatureType('Armature', 0, 0);
    ArmatureType$MovieClip_instance = new ArmatureType('MovieClip', 1, 1);
    ArmatureType$Stage_instance = new ArmatureType('Stage', 2, 2);
    ArmatureType$Companion_getInstance();
  }
  Object.defineProperty(ArmatureType.prototype, 'id', {
    get: function () {
      return this.id_5e5mxg$_0;
    }
  });
  var ArmatureType$Armature_instance;
  function ArmatureType$Armature_getInstance() {
    ArmatureType_initFields();
    return ArmatureType$Armature_instance;
  }
  var ArmatureType$MovieClip_instance;
  function ArmatureType$MovieClip_getInstance() {
    ArmatureType_initFields();
    return ArmatureType$MovieClip_instance;
  }
  var ArmatureType$Stage_instance;
  function ArmatureType$Stage_getInstance() {
    ArmatureType_initFields();
    return ArmatureType$Stage_instance;
  }
  function ArmatureType$Companion() {
    ArmatureType$Companion_instance = this;
    IntEnumCompanion.call(this, ArmatureType$values());
  }
  ArmatureType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var ArmatureType$Companion_instance = null;
  function ArmatureType$Companion_getInstance() {
    ArmatureType_initFields();
    if (ArmatureType$Companion_instance === null) {
      new ArmatureType$Companion();
    }return ArmatureType$Companion_instance;
  }
  ArmatureType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmatureType',
    interfaces: [IntEnum, Enum]
  };
  function ArmatureType$values() {
    return [ArmatureType$Armature_getInstance(), ArmatureType$MovieClip_getInstance(), ArmatureType$Stage_getInstance()];
  }
  ArmatureType.values = ArmatureType$values;
  function ArmatureType$valueOf(name) {
    switch (name) {
      case 'Armature':
        return ArmatureType$Armature_getInstance();
      case 'MovieClip':
        return ArmatureType$MovieClip_getInstance();
      case 'Stage':
        return ArmatureType$Stage_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.ArmatureType.' + name);
    }
  }
  ArmatureType.valueOf_61zpoe$ = ArmatureType$valueOf;
  function DisplayType(name, ordinal, id) {
    Enum.call(this);
    this.id_9hiibn$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DisplayType_initFields() {
    DisplayType_initFields = function () {
    };
    DisplayType$None_instance = new DisplayType('None', 0, -1);
    DisplayType$Image_instance = new DisplayType('Image', 1, 0);
    DisplayType$Armature_instance = new DisplayType('Armature', 2, 1);
    DisplayType$Mesh_instance = new DisplayType('Mesh', 3, 2);
    DisplayType$BoundingBox_instance = new DisplayType('BoundingBox', 4, 3);
    DisplayType$Path_instance = new DisplayType('Path', 5, 4);
    DisplayType$Companion_getInstance();
  }
  Object.defineProperty(DisplayType.prototype, 'id', {
    get: function () {
      return this.id_9hiibn$_0;
    }
  });
  var DisplayType$None_instance;
  function DisplayType$None_getInstance() {
    DisplayType_initFields();
    return DisplayType$None_instance;
  }
  var DisplayType$Image_instance;
  function DisplayType$Image_getInstance() {
    DisplayType_initFields();
    return DisplayType$Image_instance;
  }
  var DisplayType$Armature_instance;
  function DisplayType$Armature_getInstance() {
    DisplayType_initFields();
    return DisplayType$Armature_instance;
  }
  var DisplayType$Mesh_instance;
  function DisplayType$Mesh_getInstance() {
    DisplayType_initFields();
    return DisplayType$Mesh_instance;
  }
  var DisplayType$BoundingBox_instance;
  function DisplayType$BoundingBox_getInstance() {
    DisplayType_initFields();
    return DisplayType$BoundingBox_instance;
  }
  var DisplayType$Path_instance;
  function DisplayType$Path_getInstance() {
    DisplayType_initFields();
    return DisplayType$Path_instance;
  }
  function DisplayType$Companion() {
    DisplayType$Companion_instance = this;
    IntEnumCompanion.call(this, DisplayType$values());
  }
  DisplayType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var DisplayType$Companion_instance = null;
  function DisplayType$Companion_getInstance() {
    DisplayType_initFields();
    if (DisplayType$Companion_instance === null) {
      new DisplayType$Companion();
    }return DisplayType$Companion_instance;
  }
  DisplayType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayType',
    interfaces: [IntEnum, Enum]
  };
  function DisplayType$values() {
    return [DisplayType$None_getInstance(), DisplayType$Image_getInstance(), DisplayType$Armature_getInstance(), DisplayType$Mesh_getInstance(), DisplayType$BoundingBox_getInstance(), DisplayType$Path_getInstance()];
  }
  DisplayType.values = DisplayType$values;
  function DisplayType$valueOf(name) {
    switch (name) {
      case 'None':
        return DisplayType$None_getInstance();
      case 'Image':
        return DisplayType$Image_getInstance();
      case 'Armature':
        return DisplayType$Armature_getInstance();
      case 'Mesh':
        return DisplayType$Mesh_getInstance();
      case 'BoundingBox':
        return DisplayType$BoundingBox_getInstance();
      case 'Path':
        return DisplayType$Path_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.DisplayType.' + name);
    }
  }
  DisplayType.valueOf_61zpoe$ = DisplayType$valueOf;
  function BoundingBoxType(name, ordinal, id) {
    Enum.call(this);
    this.id_axyrum$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BoundingBoxType_initFields() {
    BoundingBoxType_initFields = function () {
    };
    BoundingBoxType$None_instance = new BoundingBoxType('None', 0, -1);
    BoundingBoxType$Rectangle_instance = new BoundingBoxType('Rectangle', 1, 0);
    BoundingBoxType$Ellipse_instance = new BoundingBoxType('Ellipse', 2, 1);
    BoundingBoxType$Polygon_instance = new BoundingBoxType('Polygon', 3, 2);
    BoundingBoxType$Companion_getInstance();
  }
  Object.defineProperty(BoundingBoxType.prototype, 'id', {
    get: function () {
      return this.id_axyrum$_0;
    }
  });
  var BoundingBoxType$None_instance;
  function BoundingBoxType$None_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$None_instance;
  }
  var BoundingBoxType$Rectangle_instance;
  function BoundingBoxType$Rectangle_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$Rectangle_instance;
  }
  var BoundingBoxType$Ellipse_instance;
  function BoundingBoxType$Ellipse_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$Ellipse_instance;
  }
  var BoundingBoxType$Polygon_instance;
  function BoundingBoxType$Polygon_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$Polygon_instance;
  }
  function BoundingBoxType$Companion() {
    BoundingBoxType$Companion_instance = this;
    IntEnumCompanion.call(this, BoundingBoxType$values());
  }
  BoundingBoxType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var BoundingBoxType$Companion_instance = null;
  function BoundingBoxType$Companion_getInstance() {
    BoundingBoxType_initFields();
    if (BoundingBoxType$Companion_instance === null) {
      new BoundingBoxType$Companion();
    }return BoundingBoxType$Companion_instance;
  }
  BoundingBoxType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundingBoxType',
    interfaces: [IntEnum, Enum]
  };
  function BoundingBoxType$values() {
    return [BoundingBoxType$None_getInstance(), BoundingBoxType$Rectangle_getInstance(), BoundingBoxType$Ellipse_getInstance(), BoundingBoxType$Polygon_getInstance()];
  }
  BoundingBoxType.values = BoundingBoxType$values;
  function BoundingBoxType$valueOf(name) {
    switch (name) {
      case 'None':
        return BoundingBoxType$None_getInstance();
      case 'Rectangle':
        return BoundingBoxType$Rectangle_getInstance();
      case 'Ellipse':
        return BoundingBoxType$Ellipse_getInstance();
      case 'Polygon':
        return BoundingBoxType$Polygon_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.BoundingBoxType.' + name);
    }
  }
  BoundingBoxType.valueOf_61zpoe$ = BoundingBoxType$valueOf;
  function ActionType(name, ordinal, id) {
    Enum.call(this);
    this.id_w098tr$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ActionType_initFields() {
    ActionType_initFields = function () {
    };
    ActionType$Play_instance = new ActionType('Play', 0, 0);
    ActionType$Frame_instance = new ActionType('Frame', 1, 10);
    ActionType$Sound_instance = new ActionType('Sound', 2, 11);
    ActionType$Companion_getInstance();
  }
  Object.defineProperty(ActionType.prototype, 'id', {
    get: function () {
      return this.id_w098tr$_0;
    }
  });
  var ActionType$Play_instance;
  function ActionType$Play_getInstance() {
    ActionType_initFields();
    return ActionType$Play_instance;
  }
  var ActionType$Frame_instance;
  function ActionType$Frame_getInstance() {
    ActionType_initFields();
    return ActionType$Frame_instance;
  }
  var ActionType$Sound_instance;
  function ActionType$Sound_getInstance() {
    ActionType_initFields();
    return ActionType$Sound_instance;
  }
  function ActionType$Companion() {
    ActionType$Companion_instance = this;
    IntEnumCompanion.call(this, ActionType$values());
  }
  ActionType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var ActionType$Companion_instance = null;
  function ActionType$Companion_getInstance() {
    ActionType_initFields();
    if (ActionType$Companion_instance === null) {
      new ActionType$Companion();
    }return ActionType$Companion_instance;
  }
  ActionType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionType',
    interfaces: [IntEnum, Enum]
  };
  function ActionType$values() {
    return [ActionType$Play_getInstance(), ActionType$Frame_getInstance(), ActionType$Sound_getInstance()];
  }
  ActionType.values = ActionType$values;
  function ActionType$valueOf(name) {
    switch (name) {
      case 'Play':
        return ActionType$Play_getInstance();
      case 'Frame':
        return ActionType$Frame_getInstance();
      case 'Sound':
        return ActionType$Sound_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.ActionType.' + name);
    }
  }
  ActionType.valueOf_61zpoe$ = ActionType$valueOf;
  function BlendMode_0(name, ordinal, id) {
    Enum.call(this);
    this.id_or4t6z$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BlendMode_initFields() {
    BlendMode_initFields = function () {
    };
    BlendMode$Normal_instance = new BlendMode_0('Normal', 0, 0);
    BlendMode$Add_instance = new BlendMode_0('Add', 1, 1);
    BlendMode$Alpha_instance = new BlendMode_0('Alpha', 2, 2);
    BlendMode$Darken_instance = new BlendMode_0('Darken', 3, 3);
    BlendMode$Difference_instance = new BlendMode_0('Difference', 4, 4);
    BlendMode$Erase_instance = new BlendMode_0('Erase', 5, 5);
    BlendMode$HardLight_instance = new BlendMode_0('HardLight', 6, 6);
    BlendMode$Invert_instance = new BlendMode_0('Invert', 7, 7);
    BlendMode$Layer_instance = new BlendMode_0('Layer', 8, 8);
    BlendMode$Lighten_instance = new BlendMode_0('Lighten', 9, 9);
    BlendMode$Multiply_instance = new BlendMode_0('Multiply', 10, 10);
    BlendMode$Overlay_instance = new BlendMode_0('Overlay', 11, 11);
    BlendMode$Screen_instance = new BlendMode_0('Screen', 12, 12);
    BlendMode$Subtract_instance = new BlendMode_0('Subtract', 13, 13);
    BlendMode$Companion_getInstance();
  }
  Object.defineProperty(BlendMode_0.prototype, 'id', {
    get: function () {
      return this.id_or4t6z$_0;
    }
  });
  var BlendMode$Normal_instance;
  function BlendMode$Normal_getInstance() {
    BlendMode_initFields();
    return BlendMode$Normal_instance;
  }
  var BlendMode$Add_instance;
  function BlendMode$Add_getInstance() {
    BlendMode_initFields();
    return BlendMode$Add_instance;
  }
  var BlendMode$Alpha_instance;
  function BlendMode$Alpha_getInstance() {
    BlendMode_initFields();
    return BlendMode$Alpha_instance;
  }
  var BlendMode$Darken_instance;
  function BlendMode$Darken_getInstance() {
    BlendMode_initFields();
    return BlendMode$Darken_instance;
  }
  var BlendMode$Difference_instance;
  function BlendMode$Difference_getInstance() {
    BlendMode_initFields();
    return BlendMode$Difference_instance;
  }
  var BlendMode$Erase_instance;
  function BlendMode$Erase_getInstance() {
    BlendMode_initFields();
    return BlendMode$Erase_instance;
  }
  var BlendMode$HardLight_instance;
  function BlendMode$HardLight_getInstance() {
    BlendMode_initFields();
    return BlendMode$HardLight_instance;
  }
  var BlendMode$Invert_instance;
  function BlendMode$Invert_getInstance() {
    BlendMode_initFields();
    return BlendMode$Invert_instance;
  }
  var BlendMode$Layer_instance;
  function BlendMode$Layer_getInstance() {
    BlendMode_initFields();
    return BlendMode$Layer_instance;
  }
  var BlendMode$Lighten_instance;
  function BlendMode$Lighten_getInstance() {
    BlendMode_initFields();
    return BlendMode$Lighten_instance;
  }
  var BlendMode$Multiply_instance;
  function BlendMode$Multiply_getInstance() {
    BlendMode_initFields();
    return BlendMode$Multiply_instance;
  }
  var BlendMode$Overlay_instance;
  function BlendMode$Overlay_getInstance() {
    BlendMode_initFields();
    return BlendMode$Overlay_instance;
  }
  var BlendMode$Screen_instance;
  function BlendMode$Screen_getInstance() {
    BlendMode_initFields();
    return BlendMode$Screen_instance;
  }
  var BlendMode$Subtract_instance;
  function BlendMode$Subtract_getInstance() {
    BlendMode_initFields();
    return BlendMode$Subtract_instance;
  }
  function BlendMode$Companion() {
    BlendMode$Companion_instance = this;
    IntEnumCompanion.call(this, BlendMode$values());
  }
  BlendMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var BlendMode$Companion_instance = null;
  function BlendMode$Companion_getInstance() {
    BlendMode_initFields();
    if (BlendMode$Companion_instance === null) {
      new BlendMode$Companion();
    }return BlendMode$Companion_instance;
  }
  BlendMode_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendMode',
    interfaces: [IntEnum, Enum]
  };
  function BlendMode$values() {
    return [BlendMode$Normal_getInstance(), BlendMode$Add_getInstance(), BlendMode$Alpha_getInstance(), BlendMode$Darken_getInstance(), BlendMode$Difference_getInstance(), BlendMode$Erase_getInstance(), BlendMode$HardLight_getInstance(), BlendMode$Invert_getInstance(), BlendMode$Layer_getInstance(), BlendMode$Lighten_getInstance(), BlendMode$Multiply_getInstance(), BlendMode$Overlay_getInstance(), BlendMode$Screen_getInstance(), BlendMode$Subtract_getInstance()];
  }
  BlendMode_0.values = BlendMode$values;
  function BlendMode$valueOf(name) {
    switch (name) {
      case 'Normal':
        return BlendMode$Normal_getInstance();
      case 'Add':
        return BlendMode$Add_getInstance();
      case 'Alpha':
        return BlendMode$Alpha_getInstance();
      case 'Darken':
        return BlendMode$Darken_getInstance();
      case 'Difference':
        return BlendMode$Difference_getInstance();
      case 'Erase':
        return BlendMode$Erase_getInstance();
      case 'HardLight':
        return BlendMode$HardLight_getInstance();
      case 'Invert':
        return BlendMode$Invert_getInstance();
      case 'Layer':
        return BlendMode$Layer_getInstance();
      case 'Lighten':
        return BlendMode$Lighten_getInstance();
      case 'Multiply':
        return BlendMode$Multiply_getInstance();
      case 'Overlay':
        return BlendMode$Overlay_getInstance();
      case 'Screen':
        return BlendMode$Screen_getInstance();
      case 'Subtract':
        return BlendMode$Subtract_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.BlendMode.' + name);
    }
  }
  BlendMode_0.valueOf_61zpoe$ = BlendMode$valueOf;
  function TweenType(name, ordinal, id) {
    Enum.call(this);
    this.id_42bpui$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TweenType_initFields() {
    TweenType_initFields = function () {
    };
    TweenType$None_instance = new TweenType('None', 0, 0);
    TweenType$Line_instance = new TweenType('Line', 1, 1);
    TweenType$Curve_instance = new TweenType('Curve', 2, 2);
    TweenType$QuadIn_instance = new TweenType('QuadIn', 3, 3);
    TweenType$QuadOut_instance = new TweenType('QuadOut', 4, 4);
    TweenType$QuadInOut_instance = new TweenType('QuadInOut', 5, 5);
    TweenType$Companion_getInstance();
  }
  Object.defineProperty(TweenType.prototype, 'id', {
    get: function () {
      return this.id_42bpui$_0;
    }
  });
  var TweenType$None_instance;
  function TweenType$None_getInstance() {
    TweenType_initFields();
    return TweenType$None_instance;
  }
  var TweenType$Line_instance;
  function TweenType$Line_getInstance() {
    TweenType_initFields();
    return TweenType$Line_instance;
  }
  var TweenType$Curve_instance;
  function TweenType$Curve_getInstance() {
    TweenType_initFields();
    return TweenType$Curve_instance;
  }
  var TweenType$QuadIn_instance;
  function TweenType$QuadIn_getInstance() {
    TweenType_initFields();
    return TweenType$QuadIn_instance;
  }
  var TweenType$QuadOut_instance;
  function TweenType$QuadOut_getInstance() {
    TweenType_initFields();
    return TweenType$QuadOut_instance;
  }
  var TweenType$QuadInOut_instance;
  function TweenType$QuadInOut_getInstance() {
    TweenType_initFields();
    return TweenType$QuadInOut_instance;
  }
  function TweenType$Companion() {
    TweenType$Companion_instance = this;
    IntEnumCompanion.call(this, TweenType$values());
  }
  TweenType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var TweenType$Companion_instance = null;
  function TweenType$Companion_getInstance() {
    TweenType_initFields();
    if (TweenType$Companion_instance === null) {
      new TweenType$Companion();
    }return TweenType$Companion_instance;
  }
  TweenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweenType',
    interfaces: [IntEnum, Enum]
  };
  function TweenType$values() {
    return [TweenType$None_getInstance(), TweenType$Line_getInstance(), TweenType$Curve_getInstance(), TweenType$QuadIn_getInstance(), TweenType$QuadOut_getInstance(), TweenType$QuadInOut_getInstance()];
  }
  TweenType.values = TweenType$values;
  function TweenType$valueOf(name) {
    switch (name) {
      case 'None':
        return TweenType$None_getInstance();
      case 'Line':
        return TweenType$Line_getInstance();
      case 'Curve':
        return TweenType$Curve_getInstance();
      case 'QuadIn':
        return TweenType$QuadIn_getInstance();
      case 'QuadOut':
        return TweenType$QuadOut_getInstance();
      case 'QuadInOut':
        return TweenType$QuadInOut_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.TweenType.' + name);
    }
  }
  TweenType.valueOf_61zpoe$ = TweenType$valueOf;
  function TimelineType(name, ordinal, id) {
    Enum.call(this);
    this.id_oqrtwc$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TimelineType_initFields() {
    TimelineType_initFields = function () {
    };
    TimelineType$Action_instance = new TimelineType('Action', 0, 0);
    TimelineType$ZOrder_instance = new TimelineType('ZOrder', 1, 1);
    TimelineType$BoneAll_instance = new TimelineType('BoneAll', 2, 10);
    TimelineType$BoneTranslate_instance = new TimelineType('BoneTranslate', 3, 11);
    TimelineType$BoneRotate_instance = new TimelineType('BoneRotate', 4, 12);
    TimelineType$BoneScale_instance = new TimelineType('BoneScale', 5, 13);
    TimelineType$Surface_instance = new TimelineType('Surface', 6, 50);
    TimelineType$BoneAlpha_instance = new TimelineType('BoneAlpha', 7, 60);
    TimelineType$SlotDisplay_instance = new TimelineType('SlotDisplay', 8, 20);
    TimelineType$SlotColor_instance = new TimelineType('SlotColor', 9, 21);
    TimelineType$SlotDeform_instance = new TimelineType('SlotDeform', 10, 22);
    TimelineType$SlotZIndex_instance = new TimelineType('SlotZIndex', 11, 23);
    TimelineType$SlotAlpha_instance = new TimelineType('SlotAlpha', 12, 24);
    TimelineType$IKConstraint_instance = new TimelineType('IKConstraint', 13, 30);
    TimelineType$AnimationProgress_instance = new TimelineType('AnimationProgress', 14, 40);
    TimelineType$AnimationWeight_instance = new TimelineType('AnimationWeight', 15, 41);
    TimelineType$AnimationParameter_instance = new TimelineType('AnimationParameter', 16, 42);
    TimelineType$Companion_getInstance();
  }
  Object.defineProperty(TimelineType.prototype, 'id', {
    get: function () {
      return this.id_oqrtwc$_0;
    }
  });
  var TimelineType$Action_instance;
  function TimelineType$Action_getInstance() {
    TimelineType_initFields();
    return TimelineType$Action_instance;
  }
  var TimelineType$ZOrder_instance;
  function TimelineType$ZOrder_getInstance() {
    TimelineType_initFields();
    return TimelineType$ZOrder_instance;
  }
  var TimelineType$BoneAll_instance;
  function TimelineType$BoneAll_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneAll_instance;
  }
  var TimelineType$BoneTranslate_instance;
  function TimelineType$BoneTranslate_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneTranslate_instance;
  }
  var TimelineType$BoneRotate_instance;
  function TimelineType$BoneRotate_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneRotate_instance;
  }
  var TimelineType$BoneScale_instance;
  function TimelineType$BoneScale_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneScale_instance;
  }
  var TimelineType$Surface_instance;
  function TimelineType$Surface_getInstance() {
    TimelineType_initFields();
    return TimelineType$Surface_instance;
  }
  var TimelineType$BoneAlpha_instance;
  function TimelineType$BoneAlpha_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneAlpha_instance;
  }
  var TimelineType$SlotDisplay_instance;
  function TimelineType$SlotDisplay_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotDisplay_instance;
  }
  var TimelineType$SlotColor_instance;
  function TimelineType$SlotColor_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotColor_instance;
  }
  var TimelineType$SlotDeform_instance;
  function TimelineType$SlotDeform_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotDeform_instance;
  }
  var TimelineType$SlotZIndex_instance;
  function TimelineType$SlotZIndex_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotZIndex_instance;
  }
  var TimelineType$SlotAlpha_instance;
  function TimelineType$SlotAlpha_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotAlpha_instance;
  }
  var TimelineType$IKConstraint_instance;
  function TimelineType$IKConstraint_getInstance() {
    TimelineType_initFields();
    return TimelineType$IKConstraint_instance;
  }
  var TimelineType$AnimationProgress_instance;
  function TimelineType$AnimationProgress_getInstance() {
    TimelineType_initFields();
    return TimelineType$AnimationProgress_instance;
  }
  var TimelineType$AnimationWeight_instance;
  function TimelineType$AnimationWeight_getInstance() {
    TimelineType_initFields();
    return TimelineType$AnimationWeight_instance;
  }
  var TimelineType$AnimationParameter_instance;
  function TimelineType$AnimationParameter_getInstance() {
    TimelineType_initFields();
    return TimelineType$AnimationParameter_instance;
  }
  function TimelineType$Companion() {
    TimelineType$Companion_instance = this;
    IntEnumCompanion.call(this, TimelineType$values());
  }
  TimelineType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var TimelineType$Companion_instance = null;
  function TimelineType$Companion_getInstance() {
    TimelineType_initFields();
    if (TimelineType$Companion_instance === null) {
      new TimelineType$Companion();
    }return TimelineType$Companion_instance;
  }
  TimelineType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineType',
    interfaces: [IntEnum, Enum]
  };
  function TimelineType$values() {
    return [TimelineType$Action_getInstance(), TimelineType$ZOrder_getInstance(), TimelineType$BoneAll_getInstance(), TimelineType$BoneTranslate_getInstance(), TimelineType$BoneRotate_getInstance(), TimelineType$BoneScale_getInstance(), TimelineType$Surface_getInstance(), TimelineType$BoneAlpha_getInstance(), TimelineType$SlotDisplay_getInstance(), TimelineType$SlotColor_getInstance(), TimelineType$SlotDeform_getInstance(), TimelineType$SlotZIndex_getInstance(), TimelineType$SlotAlpha_getInstance(), TimelineType$IKConstraint_getInstance(), TimelineType$AnimationProgress_getInstance(), TimelineType$AnimationWeight_getInstance(), TimelineType$AnimationParameter_getInstance()];
  }
  TimelineType.values = TimelineType$values;
  function TimelineType$valueOf(name) {
    switch (name) {
      case 'Action':
        return TimelineType$Action_getInstance();
      case 'ZOrder':
        return TimelineType$ZOrder_getInstance();
      case 'BoneAll':
        return TimelineType$BoneAll_getInstance();
      case 'BoneTranslate':
        return TimelineType$BoneTranslate_getInstance();
      case 'BoneRotate':
        return TimelineType$BoneRotate_getInstance();
      case 'BoneScale':
        return TimelineType$BoneScale_getInstance();
      case 'Surface':
        return TimelineType$Surface_getInstance();
      case 'BoneAlpha':
        return TimelineType$BoneAlpha_getInstance();
      case 'SlotDisplay':
        return TimelineType$SlotDisplay_getInstance();
      case 'SlotColor':
        return TimelineType$SlotColor_getInstance();
      case 'SlotDeform':
        return TimelineType$SlotDeform_getInstance();
      case 'SlotZIndex':
        return TimelineType$SlotZIndex_getInstance();
      case 'SlotAlpha':
        return TimelineType$SlotAlpha_getInstance();
      case 'IKConstraint':
        return TimelineType$IKConstraint_getInstance();
      case 'AnimationProgress':
        return TimelineType$AnimationProgress_getInstance();
      case 'AnimationWeight':
        return TimelineType$AnimationWeight_getInstance();
      case 'AnimationParameter':
        return TimelineType$AnimationParameter_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.TimelineType.' + name);
    }
  }
  TimelineType.valueOf_61zpoe$ = TimelineType$valueOf;
  function OffsetMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OffsetMode_initFields() {
    OffsetMode_initFields = function () {
    };
    OffsetMode$None_instance = new OffsetMode('None', 0);
    OffsetMode$Additive_instance = new OffsetMode('Additive', 1);
    OffsetMode$Override_instance = new OffsetMode('Override', 2);
  }
  var OffsetMode$None_instance;
  function OffsetMode$None_getInstance() {
    OffsetMode_initFields();
    return OffsetMode$None_instance;
  }
  var OffsetMode$Additive_instance;
  function OffsetMode$Additive_getInstance() {
    OffsetMode_initFields();
    return OffsetMode$Additive_instance;
  }
  var OffsetMode$Override_instance;
  function OffsetMode$Override_getInstance() {
    OffsetMode_initFields();
    return OffsetMode$Override_instance;
  }
  OffsetMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OffsetMode',
    interfaces: [Enum]
  };
  function OffsetMode$values() {
    return [OffsetMode$None_getInstance(), OffsetMode$Additive_getInstance(), OffsetMode$Override_getInstance()];
  }
  OffsetMode.values = OffsetMode$values;
  function OffsetMode$valueOf(name) {
    switch (name) {
      case 'None':
        return OffsetMode$None_getInstance();
      case 'Additive':
        return OffsetMode$Additive_getInstance();
      case 'Override':
        return OffsetMode$Override_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.OffsetMode.' + name);
    }
  }
  OffsetMode.valueOf_61zpoe$ = OffsetMode$valueOf;
  function AnimationFadeOutMode(name, ordinal, id) {
    Enum.call(this);
    this.id_iau1n6$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationFadeOutMode_initFields() {
    AnimationFadeOutMode_initFields = function () {
    };
    AnimationFadeOutMode$SameLayer_instance = new AnimationFadeOutMode('SameLayer', 0, 1);
    AnimationFadeOutMode$SameGroup_instance = new AnimationFadeOutMode('SameGroup', 1, 2);
    AnimationFadeOutMode$SameLayerAndGroup_instance = new AnimationFadeOutMode('SameLayerAndGroup', 2, 3);
    AnimationFadeOutMode$All_instance = new AnimationFadeOutMode('All', 3, 4);
    AnimationFadeOutMode$Single_instance = new AnimationFadeOutMode('Single', 4, 5);
    AnimationFadeOutMode$Companion_getInstance();
  }
  Object.defineProperty(AnimationFadeOutMode.prototype, 'id', {
    get: function () {
      return this.id_iau1n6$_0;
    }
  });
  var AnimationFadeOutMode$SameLayer_instance;
  function AnimationFadeOutMode$SameLayer_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$SameLayer_instance;
  }
  var AnimationFadeOutMode$SameGroup_instance;
  function AnimationFadeOutMode$SameGroup_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$SameGroup_instance;
  }
  var AnimationFadeOutMode$SameLayerAndGroup_instance;
  function AnimationFadeOutMode$SameLayerAndGroup_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$SameLayerAndGroup_instance;
  }
  var AnimationFadeOutMode$All_instance;
  function AnimationFadeOutMode$All_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$All_instance;
  }
  var AnimationFadeOutMode$Single_instance;
  function AnimationFadeOutMode$Single_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$Single_instance;
  }
  function AnimationFadeOutMode$Companion() {
    AnimationFadeOutMode$Companion_instance = this;
    IntEnumCompanion.call(this, AnimationFadeOutMode$values());
  }
  AnimationFadeOutMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var AnimationFadeOutMode$Companion_instance = null;
  function AnimationFadeOutMode$Companion_getInstance() {
    AnimationFadeOutMode_initFields();
    if (AnimationFadeOutMode$Companion_instance === null) {
      new AnimationFadeOutMode$Companion();
    }return AnimationFadeOutMode$Companion_instance;
  }
  AnimationFadeOutMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationFadeOutMode',
    interfaces: [IntEnum, Enum]
  };
  function AnimationFadeOutMode$values() {
    return [AnimationFadeOutMode$SameLayer_getInstance(), AnimationFadeOutMode$SameGroup_getInstance(), AnimationFadeOutMode$SameLayerAndGroup_getInstance(), AnimationFadeOutMode$All_getInstance(), AnimationFadeOutMode$Single_getInstance()];
  }
  AnimationFadeOutMode.values = AnimationFadeOutMode$values;
  function AnimationFadeOutMode$valueOf(name) {
    switch (name) {
      case 'SameLayer':
        return AnimationFadeOutMode$SameLayer_getInstance();
      case 'SameGroup':
        return AnimationFadeOutMode$SameGroup_getInstance();
      case 'SameLayerAndGroup':
        return AnimationFadeOutMode$SameLayerAndGroup_getInstance();
      case 'All':
        return AnimationFadeOutMode$All_getInstance();
      case 'Single':
        return AnimationFadeOutMode$Single_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.AnimationFadeOutMode.' + name);
    }
  }
  AnimationFadeOutMode.valueOf_61zpoe$ = AnimationFadeOutMode$valueOf;
  function AnimationBlendType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationBlendType_initFields() {
    AnimationBlendType_initFields = function () {
    };
    AnimationBlendType$None_instance = new AnimationBlendType('None', 0);
    AnimationBlendType$E1D_instance = new AnimationBlendType('E1D', 1);
  }
  var AnimationBlendType$None_instance;
  function AnimationBlendType$None_getInstance() {
    AnimationBlendType_initFields();
    return AnimationBlendType$None_instance;
  }
  var AnimationBlendType$E1D_instance;
  function AnimationBlendType$E1D_getInstance() {
    AnimationBlendType_initFields();
    return AnimationBlendType$E1D_instance;
  }
  AnimationBlendType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationBlendType',
    interfaces: [Enum]
  };
  function AnimationBlendType$values() {
    return [AnimationBlendType$None_getInstance(), AnimationBlendType$E1D_getInstance()];
  }
  AnimationBlendType.values = AnimationBlendType$values;
  function AnimationBlendType$valueOf(name) {
    switch (name) {
      case 'None':
        return AnimationBlendType$None_getInstance();
      case 'E1D':
        return AnimationBlendType$E1D_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.AnimationBlendType.' + name);
    }
  }
  AnimationBlendType.valueOf_61zpoe$ = AnimationBlendType$valueOf;
  function AnimationBlendMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationBlendMode_initFields() {
    AnimationBlendMode_initFields = function () {
    };
    AnimationBlendMode$Additive_instance = new AnimationBlendMode('Additive', 0);
    AnimationBlendMode$Override_instance = new AnimationBlendMode('Override', 1);
  }
  var AnimationBlendMode$Additive_instance;
  function AnimationBlendMode$Additive_getInstance() {
    AnimationBlendMode_initFields();
    return AnimationBlendMode$Additive_instance;
  }
  var AnimationBlendMode$Override_instance;
  function AnimationBlendMode$Override_getInstance() {
    AnimationBlendMode_initFields();
    return AnimationBlendMode$Override_instance;
  }
  AnimationBlendMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationBlendMode',
    interfaces: [Enum]
  };
  function AnimationBlendMode$values() {
    return [AnimationBlendMode$Additive_getInstance(), AnimationBlendMode$Override_getInstance()];
  }
  AnimationBlendMode.values = AnimationBlendMode$values;
  function AnimationBlendMode$valueOf(name) {
    switch (name) {
      case 'Additive':
        return AnimationBlendMode$Additive_getInstance();
      case 'Override':
        return AnimationBlendMode$Override_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.AnimationBlendMode.' + name);
    }
  }
  AnimationBlendMode.valueOf_61zpoe$ = AnimationBlendMode$valueOf;
  function ConstraintType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ConstraintType_initFields() {
    ConstraintType_initFields = function () {
    };
    ConstraintType$IK_instance = new ConstraintType('IK', 0);
    ConstraintType$Path_instance = new ConstraintType('Path', 1);
  }
  var ConstraintType$IK_instance;
  function ConstraintType$IK_getInstance() {
    ConstraintType_initFields();
    return ConstraintType$IK_instance;
  }
  var ConstraintType$Path_instance;
  function ConstraintType$Path_getInstance() {
    ConstraintType_initFields();
    return ConstraintType$Path_instance;
  }
  ConstraintType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstraintType',
    interfaces: [Enum]
  };
  function ConstraintType$values() {
    return [ConstraintType$IK_getInstance(), ConstraintType$Path_getInstance()];
  }
  ConstraintType.values = ConstraintType$values;
  function ConstraintType$valueOf(name) {
    switch (name) {
      case 'IK':
        return ConstraintType$IK_getInstance();
      case 'Path':
        return ConstraintType$Path_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.ConstraintType.' + name);
    }
  }
  ConstraintType.valueOf_61zpoe$ = ConstraintType$valueOf;
  function PositionMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PositionMode_initFields() {
    PositionMode_initFields = function () {
    };
    PositionMode$Fixed_instance = new PositionMode('Fixed', 0);
    PositionMode$Percent_instance = new PositionMode('Percent', 1);
  }
  var PositionMode$Fixed_instance;
  function PositionMode$Fixed_getInstance() {
    PositionMode_initFields();
    return PositionMode$Fixed_instance;
  }
  var PositionMode$Percent_instance;
  function PositionMode$Percent_getInstance() {
    PositionMode_initFields();
    return PositionMode$Percent_instance;
  }
  PositionMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionMode',
    interfaces: [Enum]
  };
  function PositionMode$values() {
    return [PositionMode$Fixed_getInstance(), PositionMode$Percent_getInstance()];
  }
  PositionMode.values = PositionMode$values;
  function PositionMode$valueOf(name) {
    switch (name) {
      case 'Fixed':
        return PositionMode$Fixed_getInstance();
      case 'Percent':
        return PositionMode$Percent_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.PositionMode.' + name);
    }
  }
  PositionMode.valueOf_61zpoe$ = PositionMode$valueOf;
  function SpacingMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SpacingMode_initFields() {
    SpacingMode_initFields = function () {
    };
    SpacingMode$Length_instance = new SpacingMode('Length', 0);
    SpacingMode$Fixed_instance = new SpacingMode('Fixed', 1);
    SpacingMode$Percent_instance = new SpacingMode('Percent', 2);
  }
  var SpacingMode$Length_instance;
  function SpacingMode$Length_getInstance() {
    SpacingMode_initFields();
    return SpacingMode$Length_instance;
  }
  var SpacingMode$Fixed_instance;
  function SpacingMode$Fixed_getInstance() {
    SpacingMode_initFields();
    return SpacingMode$Fixed_instance;
  }
  var SpacingMode$Percent_instance;
  function SpacingMode$Percent_getInstance() {
    SpacingMode_initFields();
    return SpacingMode$Percent_instance;
  }
  SpacingMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpacingMode',
    interfaces: [Enum]
  };
  function SpacingMode$values() {
    return [SpacingMode$Length_getInstance(), SpacingMode$Fixed_getInstance(), SpacingMode$Percent_getInstance()];
  }
  SpacingMode.values = SpacingMode$values;
  function SpacingMode$valueOf(name) {
    switch (name) {
      case 'Length':
        return SpacingMode$Length_getInstance();
      case 'Fixed':
        return SpacingMode$Fixed_getInstance();
      case 'Percent':
        return SpacingMode$Percent_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.SpacingMode.' + name);
    }
  }
  SpacingMode.valueOf_61zpoe$ = SpacingMode$valueOf;
  function RotateMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RotateMode_initFields() {
    RotateMode_initFields = function () {
    };
    RotateMode$Tangent_instance = new RotateMode('Tangent', 0);
    RotateMode$Chain_instance = new RotateMode('Chain', 1);
    RotateMode$ChainScale_instance = new RotateMode('ChainScale', 2);
  }
  var RotateMode$Tangent_instance;
  function RotateMode$Tangent_getInstance() {
    RotateMode_initFields();
    return RotateMode$Tangent_instance;
  }
  var RotateMode$Chain_instance;
  function RotateMode$Chain_getInstance() {
    RotateMode_initFields();
    return RotateMode$Chain_instance;
  }
  var RotateMode$ChainScale_instance;
  function RotateMode$ChainScale_getInstance() {
    RotateMode_initFields();
    return RotateMode$ChainScale_instance;
  }
  RotateMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RotateMode',
    interfaces: [Enum]
  };
  function RotateMode$values() {
    return [RotateMode$Tangent_getInstance(), RotateMode$Chain_getInstance(), RotateMode$ChainScale_getInstance()];
  }
  RotateMode.values = RotateMode$values;
  function RotateMode$valueOf(name) {
    switch (name) {
      case 'Tangent':
        return RotateMode$Tangent_getInstance();
      case 'Chain':
        return RotateMode$Chain_getInstance();
      case 'ChainScale':
        return RotateMode$ChainScale_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.RotateMode.' + name);
    }
  }
  RotateMode.valueOf_61zpoe$ = RotateMode$valueOf;
  function DragonBones(eventManager) {
    DragonBones$Companion_getInstance();
    this._clock_0 = WorldClock_init();
    this._eventManager_0 = eventManager;
  }
  function DragonBones$Companion() {
    DragonBones$Companion_instance = this;
    this.VERSION = '5.7.000';
    this.yDown = true;
    this.debug = false;
    this.debugDraw = false;
  }
  DragonBones$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DragonBones$Companion_instance = null;
  function DragonBones$Companion_getInstance() {
    if (DragonBones$Companion_instance === null) {
      new DragonBones$Companion();
    }return DragonBones$Companion_instance;
  }
  Object.defineProperty(DragonBones.prototype, 'clock', {
    get: function () {
      return this._clock_0;
    }
  });
  Object.defineProperty(DragonBones.prototype, 'eventManager', {
    get: function () {
      return this._eventManager_0;
    }
  });
  DragonBones.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragonBones',
    interfaces: []
  };
  function EventObject(pool) {
    EventObject$Companion_getInstance();
    BaseObject.call(this, pool);
    this.time = 0.0;
    this.type = '';
    this.name = '';
    this.armature_hj6x21$_0 = this.armature_hj6x21$_0;
    this.bone = null;
    this.slot = null;
    this.animationState_taxp5n$_0 = this.animationState_taxp5n$_0;
    this.actionData = null;
    this.data = null;
  }
  function EventObject$Companion() {
    EventObject$Companion_instance = this;
    this.START = 'start';
    this.LOOP_COMPLETE = 'loopComplete';
    this.COMPLETE = 'complete';
    this.FADE_IN = 'fadeIn';
    this.FADE_IN_COMPLETE = 'fadeInComplete';
    this.FADE_OUT = 'fadeOut';
    this.FADE_OUT_COMPLETE = 'fadeOutComplete';
    this.FRAME_EVENT = 'frameEvent';
    this.SOUND_EVENT = 'soundEvent';
  }
  EventObject$Companion.prototype.actionDataToInstance_knn78h$ = function (data, instance, armature) {
    var tmp$, tmp$_0;
    if (data.type === ActionType$Play_getInstance()) {
      instance.type = EventObject$Companion_getInstance().FRAME_EVENT;
    } else {
      instance.type = data.type === ActionType$Frame_getInstance() ? EventObject$Companion_getInstance().FRAME_EVENT : EventObject$Companion_getInstance().SOUND_EVENT;
    }
    instance.name = data.name;
    instance.armature = armature;
    instance.actionData = data;
    instance.data = data.data;
    if (data.bone != null) {
      instance.bone = armature.getBone_pdl1vj$((tmp$ = data.bone) != null ? tmp$.name : null);
    }if (data.slot != null) {
      instance.slot = armature.getSlot_pdl1vj$((tmp$_0 = data.slot) != null ? tmp$_0.name : null);
    }};
  EventObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EventObject$Companion_instance = null;
  function EventObject$Companion_getInstance() {
    if (EventObject$Companion_instance === null) {
      new EventObject$Companion();
    }return EventObject$Companion_instance;
  }
  EventObject.prototype.toString = function () {
    return '[class dragonBones.EventObject]';
  };
  Object.defineProperty(EventObject.prototype, 'armature', {
    get: function () {
      if (this.armature_hj6x21$_0 == null)
        return throwUPAE('armature');
      return this.armature_hj6x21$_0;
    },
    set: function (armature) {
      this.armature_hj6x21$_0 = armature;
    }
  });
  Object.defineProperty(EventObject.prototype, 'animationState', {
    get: function () {
      if (this.animationState_taxp5n$_0 == null)
        return throwUPAE('animationState');
      return this.animationState_taxp5n$_0;
    },
    set: function (animationState) {
      this.animationState_taxp5n$_0 = animationState;
    }
  });
  EventObject.prototype._onClear = function () {
    this.time = 0.0;
    this.type = '';
    this.name = '';
    this.bone = null;
    this.slot = null;
    this.actionData = null;
    this.data = null;
  };
  EventObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventObject',
    interfaces: [BaseObject]
  };
  function IEventDispatcher() {
  }
  IEventDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IEventDispatcher',
    interfaces: []
  };
  function BaseFactory(pool, dataParser) {
    if (dataParser === void 0)
      dataParser = new ObjectDataParser(pool);
    this.pool = pool;
    this.autoSearch = false;
    this._binaryDataParser_zfa8eh$_tko052$_0 = lazy(BaseFactory$_binaryDataParser$lambda(this));
    this._dragonBonesDataMap = FastStringMap();
    this._textureAtlasDataMap = FastStringMap();
    this._dragonBones_uxvdzv$_0 = this._dragonBones_uxvdzv$_0;
    this._dataParser = dataParser;
  }
  Object.defineProperty(BaseFactory.prototype, '_binaryDataParser_zfa8eh$_0', {
    get: function () {
      return this._binaryDataParser_zfa8eh$_tko052$_0.value;
    }
  });
  Object.defineProperty(BaseFactory.prototype, '_dragonBones', {
    get: function () {
      if (this._dragonBones_uxvdzv$_0 == null)
        return throwUPAE('_dragonBones');
      return this._dragonBones_uxvdzv$_0;
    },
    set: function (_dragonBones) {
      this._dragonBones_uxvdzv$_0 = _dragonBones;
    }
  });
  BaseFactory.prototype._isSupportMesh = function () {
    return true;
  };
  BaseFactory.prototype._getTextureData_puj7f4$ = function (textureAtlasName, textureName) {
    if (this._textureAtlasDataMap.has(textureAtlasName)) {
      var $receiver = ensureNotNull(this._textureAtlasDataMap.get(textureAtlasName));
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        var textureData = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).getTexture_61zpoe$(textureName);
        if (textureData != null) {
          return textureData;
        }}
    }if (this.autoSearch) {
      var mapIterator = this._textureAtlasDataMap.keys();
      while (true) {
        var v = mapIterator.next();
        if (v.done)
          break;
        var k = v.value;
        var $receiver_0 = ensureNotNull(this._textureAtlasDataMap.get(k));
        var tmp$_0;
        var n_0 = 0;
        while (n_0 < $receiver_0.size) {
          var textureAtlasData = $receiver_0.get_za3lpa$((tmp$_0 = n_0, n_0 = tmp$_0 + 1 | 0, tmp$_0));
          if (textureAtlasData.autoSearch) {
            var textureData_0 = textureAtlasData.getTexture_61zpoe$(textureName);
            if (textureData_0 != null) {
              return textureData_0;
            }}}
      }
    }return null;
  };
  BaseFactory.prototype._fillBuildArmaturePackage_j0qmm3$_0 = function (dataPackage, dragonBonesName, armatureName, skinName, textureAtlasName) {
    var tmp$;
    var mdragonBonesName = {v: dragonBonesName};
    var dragonBonesData = {v: null};
    var armatureData = {v: null};
    if (mdragonBonesName.v.length > 0) {
      var $receiver = this._dragonBonesDataMap;
      var key = mdragonBonesName.v;
      if ($receiver.has(key)) {
        var $receiver_0 = this._dragonBonesDataMap;
        var key_0 = mdragonBonesName.v;
        dragonBonesData.v = $receiver_0.get(key_0);
        armatureData.v = (tmp$ = dragonBonesData.v) != null ? tmp$.getArmature_61zpoe$(armatureName) : null;
      }}var tmp$_0 = armatureData.v == null;
    if (tmp$_0) {
      tmp$_0 = mdragonBonesName.v.length === 0 || this.autoSearch;
    }if (tmp$_0) {
      var completed = {v: false};
      var mapIterator = this._dragonBonesDataMap.keys();
      loop_label: while (true) {
        var v = mapIterator.next();
        if (v.done)
          break loop_label;
        var k = v.value;
        callback$break: do {
          var tmp$_1;
          if (completed.v)
            break callback$break;
          dragonBonesData.v = this._dragonBonesDataMap.get(k);
          if (mdragonBonesName.v.length === 0 || ensureNotNull(dragonBonesData.v).autoSearch) {
            armatureData.v = (tmp$_1 = dragonBonesData.v) != null ? tmp$_1.getArmature_61zpoe$(armatureName) : null;
            if (armatureData.v != null) {
              mdragonBonesName.v = k;
              completed.v = true;
            }}}
         while (false);
      }
    }if (armatureData.v != null) {
      dataPackage.dataName = mdragonBonesName.v;
      dataPackage.textureAtlasName = textureAtlasName;
      dataPackage.data = dragonBonesData.v;
      dataPackage.armature = armatureData.v;
      dataPackage.skin = null;
      if (skinName.length > 0) {
        dataPackage.skin = ensureNotNull(armatureData.v).getSkin_61zpoe$(skinName);
        if (dataPackage.skin == null && this.autoSearch) {
          dataPackage.skin = this.__findDataPackageSkin_r95my4$_0(skinName);
        }}if (dataPackage.skin == null) {
        dataPackage.skin = ensureNotNull(armatureData.v).defaultSkin;
      }return true;
    }return false;
  };
  BaseFactory.prototype.__findDataPackageSkin_r95my4$_0 = function (skinName) {
    var mapIterator = this._dragonBonesDataMap.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var k = v.value;
      var skinDragonBonesData = ensureNotNull(this._dragonBonesDataMap.get(k));
      var skinArmatureData = skinDragonBonesData.getArmature_61zpoe$(skinName);
      if (skinArmatureData != null) {
        return skinArmatureData.defaultSkin;
      }}
    return null;
  };
  BaseFactory.prototype._buildBones_tztsvr$_0 = function (dataPackage, armature) {
    var $receiver = ensureNotNull(dataPackage.armature).sortedBones;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      var boneData = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      var bone = boneData.isBone ? this.pool.bone.borrow() : this.pool.surface.borrow();
      bone.init_7qxzn9$(boneData, armature);
    }
  };
  BaseFactory.prototype._buildSlots_u4mvrj$_0 = function (dataPackage, armature) {
    var tmp$;
    var currentSkin = dataPackage.skin;
    var defaultSkin = (tmp$ = dataPackage.armature) != null ? tmp$.defaultSkin : null;
    if (currentSkin == null || defaultSkin == null) {
      return;
    }var skinSlots = FastStringMap();
    var mapIterator = defaultSkin.displays.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var k = v.value;
      var displays = defaultSkin.getDisplays_pdl1vj$(k);
      var value = ensureNotNull(displays);
      skinSlots.set(k, value);
    }
    if (!equals(currentSkin, defaultSkin)) {
      var mapIterator_0 = currentSkin.displays.keys();
      while (true) {
        var v_0 = mapIterator_0.next();
        if (v_0.done)
          break;
        var k_0 = v_0.value;
        var displays_0 = currentSkin.getDisplays_pdl1vj$(k_0);
        var value_0 = ensureNotNull(displays_0);
        skinSlots.set(k_0, value_0);
      }
    }var $receiver = ensureNotNull(dataPackage.armature).sortedSlots;
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      var slotData = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
      var tmp$_1;
      var key = slotData.name;
      var displayDatas = skinSlots.get(key);
      var slot = this._buildSlot_fs0k2h$(dataPackage, slotData, armature);
      if (displayDatas != null) {
        slot.displayFrameCount = get_length_1(displayDatas);
        tmp$_1 = slot.displayFrameCount;
        for (var i = 0; i < tmp$_1; i++) {
          var displayData = displayDatas.get_za3lpa$(i);
          slot.replaceRawDisplayData_4o5vqv$(displayData, i);
          if (displayData != null) {
            if (dataPackage.textureAtlasName.length > 0) {
              var textureData = this._getTextureData_puj7f4$(dataPackage.textureAtlasName, displayData.path);
              slot.replaceTextureData_vue3bk$(textureData, i);
            }var display = this._getSlotDisplay_dyniis$_0(dataPackage, displayData, slot);
            slot.replaceDisplay_cypnoy$(display, i);
          } else {
            slot.replaceDisplay_cypnoy$(null);
          }
        }
      }slot._setDisplayIndex_fzusl$(slotData.displayIndex, true);
    }
  };
  BaseFactory.prototype._buildConstraints_4o3flc$_0 = function (dataPackage, armature) {
    var constraints = ensureNotNull(dataPackage.armature).constraints;
    var mapIterator = constraints.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var k = v.value;
      var constraintData = constraints.get(k);
      switch (ensureNotNull(constraintData).type.name) {
        case 'IK':
          var ikConstraint = this.pool.iKConstraint.borrow();
          ikConstraint.init_jwnilu$(constraintData, armature);
          armature._addConstraint_ineuod$(ikConstraint);
          break;
        case 'Path':
          var pathConstraint = this.pool.pathConstraint.borrow();
          pathConstraint.init_jwnilu$(constraintData, armature);
          armature._addConstraint_ineuod$(pathConstraint);
          break;
      }
    }
  };
  BaseFactory.prototype._buildChildArmature_glvc90$_0 = function (dataPackage, _slot, displayData) {
    return this.buildArmature_w74nik$(displayData.path, ensureNotNull(dataPackage).dataName, '', dataPackage.textureAtlasName);
  };
  BaseFactory.prototype._getSlotDisplay_dyniis$_0 = function (dataPackage, displayData, slot) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var dataName = (tmp$ = dataPackage != null ? dataPackage.dataName : null) != null ? tmp$ : ensureNotNull(ensureNotNull(displayData.parent.parent).parent).name;
    var display = null;
    switch (displayData.type.name) {
      case 'Image':
        var imageDisplayData = Kotlin.isType(tmp$_0 = displayData, ImageDisplayData) ? tmp$_0 : throwCCE();
        if (imageDisplayData.texture == null) {
          imageDisplayData.texture = this._getTextureData_puj7f4$(dataName, displayData.path);
        }
        display = slot.rawDisplay;
        break;
      case 'Mesh':
        var meshDisplayData = Kotlin.isType(tmp$_1 = displayData, MeshDisplayData) ? tmp$_1 : throwCCE();
        if (meshDisplayData.texture == null) {
          meshDisplayData.texture = this._getTextureData_puj7f4$(dataName, meshDisplayData.path);
        }
        display = this._isSupportMesh() ? slot.meshDisplay : slot.rawDisplay;
        break;
      case 'Armature':
        var armatureDisplayData = Kotlin.isType(tmp$_2 = displayData, ArmatureDisplayData) ? tmp$_2 : throwCCE();
        var childArmature = this._buildChildArmature_glvc90$_0(dataPackage, slot, armatureDisplayData);
        if (childArmature != null) {
          childArmature.inheritAnimation = armatureDisplayData.inheritAnimation;
          if (!childArmature.inheritAnimation) {
            var actions = get_length_1(armatureDisplayData.actions) > 0 ? armatureDisplayData.actions : childArmature.armatureData.defaultActions;
            if (get_length_1(actions) > 0) {
              var tmp$_3;
              var n = 0;
              while (n < actions.size) {
                var action = actions.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
                var eventObject = this.pool.eventObject.borrow();
                EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject, slot.armature);
                eventObject.slot = slot;
                slot.armature._bufferAction_8f84tb$(eventObject, false);
              }
            } else {
              childArmature.animation.play_9d67ql$();
            }
          }armatureDisplayData.armature = childArmature.armatureData;
        }
        display = childArmature;
        break;
      case 'BoundingBox':
        break;
      default:break;
    }
    return ensureNotNull(display);
  };
  BaseFactory.prototype.parseDragonBonesData_md6wsg$ = function (rawData, name, scale) {
    if (name === void 0)
      name = null;
    if (scale === void 0)
      scale = 1.0;
    var dataParser = Kotlin.isType(rawData, ArrayBuffer) ? this._binaryDataParser_zfa8eh$_0 : this._dataParser;
    var dragonBonesData = dataParser.parseDragonBonesData_p20sj2$(rawData, scale);
    while (true) {
      var textureAtlasData = this._buildTextureAtlasData_dju0lx$(null, null);
      if (dataParser.parseTextureAtlasData_fec78$(null, textureAtlasData, scale)) {
        this.addTextureAtlasData_xtit01$(textureAtlasData, name);
      } else {
        textureAtlasData.returnToPool();
        break;
      }
    }
    if (dragonBonesData != null) {
      this.addDragonBonesData_y2pl9x$(dragonBonesData, name);
    }return dragonBonesData;
  };
  BaseFactory.prototype.parseDragonBonesDataJson_4aqnz$ = function (json, name, scale) {
    if (name === void 0)
      name = null;
    if (scale === void 0)
      scale = 1.0;
    return this.parseDragonBonesData_md6wsg$(json, name, scale);
  };
  BaseFactory.prototype.parseTextureAtlasData_go2jhv$ = function (rawData, textureAtlas, name, scale) {
    if (name === void 0)
      name = null;
    if (scale === void 0)
      scale = 1.0;
    var textureAtlasData = this._buildTextureAtlasData_dju0lx$(null, null);
    this._dataParser.parseTextureAtlasData_fec78$(rawData, textureAtlasData, scale);
    this._buildTextureAtlasData_dju0lx$(textureAtlasData, textureAtlas);
    this.addTextureAtlasData_xtit01$(textureAtlasData, name);
    return textureAtlasData;
  };
  BaseFactory.prototype.updateTextureAtlases_3r0dep$ = function (textureAtlases, name) {
    var tmp$;
    var textureAtlasDatas = this.getTextureAtlasData_61zpoe$(name);
    if (textureAtlasDatas != null) {
      tmp$ = textureAtlasDatas.size;
      for (var i = 0; i < tmp$; i++) {
        if (i < textureAtlases.length) {
          this._buildTextureAtlasData_dju0lx$(textureAtlasDatas.get_za3lpa$(i), textureAtlases[i]);
        }}
    }};
  BaseFactory.prototype.getDragonBonesData_61zpoe$ = function (name) {
    return this._dragonBonesDataMap.get(name);
  };
  BaseFactory.prototype.addDragonBonesData_y2pl9x$ = function (data, name) {
    if (name === void 0)
      name = null;
    var rname = name != null ? name : data.name;
    if (this._dragonBonesDataMap.has(rname)) {
      if (equals(this._dragonBonesDataMap.get(rname), data))
        return;
      console_getInstance().warn_vqirvp$(['Can not add same name data: ' + rname]);
      return;
    }this._dragonBonesDataMap.set(rname, data);
  };
  BaseFactory.prototype.removeDragonBonesData_ivxn3r$ = function (name, disposeData) {
    if (disposeData === void 0)
      disposeData = true;
    var tmp$;
    if (this._dragonBonesDataMap.has(name)) {
      if (disposeData) {
        (tmp$ = this._dragonBonesDataMap.get(name)) != null ? (tmp$.returnToPool(), Unit) : null;
      }this._dragonBonesDataMap.delete(name);
    }};
  BaseFactory.prototype.getTextureAtlasData_61zpoe$ = function (name) {
    return ensureNotNull(this._textureAtlasDataMap.get(name));
  };
  BaseFactory.prototype.addTextureAtlasData_xtit01$ = function (data, name) {
    if (name === void 0)
      name = null;
    var rname = name != null ? name : data.name;
    var $receiver = this._textureAtlasDataMap;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(rname);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }var out = ArrayList_init();
      $receiver.set(rname, out);
      getOrPut$result = out;
    }
     while (false);
    var textureAtlasList = getOrPut$result;
    if (textureAtlasList.indexOf_11rb$(data) < 0) {
      push(textureAtlasList, data);
    }};
  BaseFactory.prototype.removeTextureAtlasData_ivxn3r$ = function (name, disposeData) {
    if (disposeData === void 0)
      disposeData = true;
    if (this._textureAtlasDataMap.has(name)) {
      var textureAtlasDataList = ensureNotNull(this._textureAtlasDataMap.get(name));
      if (disposeData) {
        var tmp$;
        var n = 0;
        while (n < textureAtlasDataList.size) {
          textureAtlasDataList.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).returnToPool();
        }
      }this._textureAtlasDataMap.delete(name);
    }};
  BaseFactory.prototype.getArmatureData_puj7f4$ = function (name, dragonBonesName) {
    if (dragonBonesName === void 0)
      dragonBonesName = '';
    var dataPackage = new BuildArmaturePackage();
    if (!this._fillBuildArmaturePackage_j0qmm3$_0(dataPackage, dragonBonesName, name, '', '')) {
      return null;
    }return dataPackage.armature;
  };
  BaseFactory.prototype.clear_6taknv$ = function (disposeData) {
    if (disposeData === void 0)
      disposeData = true;
    var mapIterator = this._dragonBonesDataMap.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var k = v.value;
      var tmp$;
      if (disposeData) {
        (tmp$ = this._dragonBonesDataMap.get(k)) != null ? (tmp$.returnToPool(), Unit) : null;
      }}
    this._dragonBonesDataMap.clear();
    var mapIterator_0 = this._textureAtlasDataMap.keys();
    while (true) {
      var v_0 = mapIterator_0.next();
      if (v_0.done)
        break;
      var k_0 = v_0.value;
      if (disposeData) {
        var textureAtlasDataList = ensureNotNull(this._textureAtlasDataMap.get(k_0));
        var tmp$_0;
        var n = 0;
        while (n < textureAtlasDataList.size) {
          textureAtlasDataList.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0)).returnToPool();
        }
      }}
    this._textureAtlasDataMap.clear();
  };
  BaseFactory.prototype.buildArmature_w74nik$ = function (armatureName, dragonBonesName, skinName, textureAtlasName) {
    if (dragonBonesName === void 0)
      dragonBonesName = '';
    if (skinName === void 0)
      skinName = '';
    if (textureAtlasName === void 0)
      textureAtlasName = '';
    var dataPackage = new BuildArmaturePackage();
    if (!this._fillBuildArmaturePackage_j0qmm3$_0(dataPackage, dragonBonesName, armatureName, skinName, textureAtlasName)) {
      console_getInstance().warn_vqirvp$(['No armature data: ' + armatureName + ', ' + dragonBonesName]);
      return null;
    }var armature = this._buildArmature_mgwu66$(dataPackage);
    this._buildBones_tztsvr$_0(dataPackage, armature);
    this._buildSlots_u4mvrj$_0(dataPackage, armature);
    this._buildConstraints_4o3flc$_0(dataPackage, armature);
    armature.invalidUpdate_4mavae$(null, true);
    armature.advanceTime_14dthe$(0.0);
    return armature;
  };
  BaseFactory.prototype.replaceDisplay_fp2gwv$ = function (slot, displayData, displayIndex) {
    if (displayIndex === void 0)
      displayIndex = -1;
    var mdisplayIndex = displayIndex;
    if (mdisplayIndex < 0) {
      mdisplayIndex = slot.displayIndex;
    }if (mdisplayIndex < 0) {
      mdisplayIndex = 0;
    }slot.replaceDisplayData_4o5vqv$(displayData, mdisplayIndex);
    if (displayData != null) {
      var display = this._getSlotDisplay_dyniis$_0(null, displayData, slot);
      if (displayData.type === DisplayType$Image_getInstance()) {
        var rawDisplayData = slot.getDisplayFrameAt_za3lpa$(mdisplayIndex).rawDisplayData;
        if (rawDisplayData != null && rawDisplayData.type === DisplayType$Mesh_getInstance()) {
          display = slot.meshDisplay;
        }}slot.replaceDisplay_cypnoy$(display, mdisplayIndex);
    } else {
      slot.replaceDisplay_cypnoy$(null, mdisplayIndex);
    }
  };
  BaseFactory.prototype.replaceSlotDisplay_k2nawi$ = function (dragonBonesName, armatureName, slotName, displayName, slot, displayIndex) {
    if (displayIndex === void 0)
      displayIndex = -1;
    var armatureData = this.getArmatureData_puj7f4$(armatureName, dragonBonesName);
    if ((armatureData != null ? armatureData.defaultSkin : null) == null) {
      return false;
    }var displayData = ensureNotNull(armatureData.defaultSkin).getDisplay_puj7f4$(slotName, displayName);
    this.replaceDisplay_fp2gwv$(slot, displayData, displayIndex);
    return true;
  };
  BaseFactory.prototype.replaceSlotDisplayList_51qq0j$ = function (dragonBonesName, armatureName, slotName, slot) {
    var tmp$, tmp$_0;
    var armatureData = this.getArmatureData_puj7f4$(armatureName, dragonBonesName != null ? dragonBonesName : '');
    if ((armatureData != null ? armatureData.defaultSkin : null) == null) {
      return false;
    }tmp$ = ensureNotNull(armatureData.defaultSkin).getDisplays_pdl1vj$(slotName);
    if (tmp$ == null) {
      return false;
    }var displayDatas = tmp$;
    slot.displayFrameCount = displayDatas.size;
    tmp$_0 = slot.displayFrameCount;
    for (var i = 0; i < tmp$_0; i++) {
      var displayData = ensureNotNull(displayDatas.get_za3lpa$(i));
      this.replaceDisplay_fp2gwv$(slot, displayData, i);
    }
    return true;
  };
  BaseFactory.prototype.replaceSkin_s4r90c$ = function (armature, skin, isOverride, exclude) {
    if (isOverride === void 0)
      isOverride = false;
    if (exclude === void 0)
      exclude = null;
    var success = {v: false};
    var defaultSkin = ensureNotNull(skin.parent).defaultSkin;
    var $receiver = armature.getSlots();
    var tmp$;
    var n = 0;
    loop_label: while (n < $receiver.size) {
      var slot = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      callback$break: do {
        var tmp$_0;
        if (exclude != null && indexOf_0(exclude, slot.name) >= 0) {
          break callback$break;
        }var displayDatas = skin.getDisplays_pdl1vj$(slot.name);
        if (displayDatas == null) {
          if (defaultSkin != null && !equals(skin, defaultSkin)) {
            displayDatas = defaultSkin.getDisplays_pdl1vj$(slot.name);
          }if (displayDatas == null) {
            if (isOverride) {
              slot.displayFrameCount = 0;
            }break callback$break;
          }}slot.displayFrameCount = get_lengthSet_1(displayDatas);
        tmp$_0 = slot.displayFrameCount;
        for (var i = 0; i < tmp$_0; i++) {
          var displayData = displayDatas.get_za3lpa$(i);
          slot.replaceRawDisplayData_4o5vqv$(displayData, i);
          if (displayData != null) {
            slot.replaceDisplay_cypnoy$(this._getSlotDisplay_dyniis$_0(null, displayData, slot), i);
          } else {
            slot.replaceDisplay_cypnoy$(null, i);
          }
        }
        success.v = true;
      }
       while (false);
    }
    return success.v;
  };
  BaseFactory.prototype.replaceAnimation_44zfr7$ = function (armature, armatureData, isOverride) {
    if (isOverride === void 0)
      isOverride = true;
    var tmp$;
    tmp$ = armatureData.defaultSkin;
    if (tmp$ == null) {
      return false;
    }var skinData = tmp$;
    if (isOverride) {
      armature.animation.animations = armatureData.animations;
    } else {
      var rawAnimations = armature.animation.animations;
      var animations = FastStringMap();
      var mapIterator = rawAnimations.keys();
      while (true) {
        var v = mapIterator.next();
        if (v.done)
          break;
        var k = v.value;
        var value = ensureNotNull(rawAnimations.get(k));
        animations.set(k, value);
      }
      var mapIterator_0 = armatureData.animations.keys();
      while (true) {
        var v_0 = mapIterator_0.next();
        if (v_0.done)
          break;
        var k_0 = v_0.value;
        var value_0 = ensureNotNull(armatureData.animations.get(k_0));
        animations.set(k_0, value_0);
      }
      armature.animation.animations = animations;
    }
    var $receiver = armature.getSlots();
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      var slot = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
      var index = 0;
      for (var tmp$_1 = slot.displayList.iterator(); tmp$_1.hasNext(); ++index) {
        var display = tmp$_1.next();
        if (Kotlin.isType(display, Armature)) {
          var displayDatas = skinData.getDisplays_pdl1vj$(slot.name);
          if (displayDatas != null && index < get_lengthSet_1(displayDatas)) {
            var displayData = displayDatas.get_za3lpa$(index);
            if (displayData != null && displayData.type === DisplayType$Armature_getInstance()) {
              var childArmatureData = this.getArmatureData_puj7f4$(displayData.path, ensureNotNull(ensureNotNull(displayData.parent.parent).parent).name);
              if (childArmatureData != null) {
                this.replaceAnimation_44zfr7$(display, childArmatureData, isOverride);
              }}}}}
    }
    return true;
  };
  BaseFactory.prototype.getAllDragonBonesData = function () {
    return this._dragonBonesDataMap;
  };
  BaseFactory.prototype.getAllTextureAtlasData = function () {
    return this._textureAtlasDataMap;
  };
  Object.defineProperty(BaseFactory.prototype, 'clock', {
    get: function () {
      return this._dragonBones.clock;
    }
  });
  Object.defineProperty(BaseFactory.prototype, 'dragonBones', {
    get: function () {
      return this._dragonBones;
    }
  });
  function BaseFactory$_binaryDataParser$lambda(this$BaseFactory) {
    return function () {
      return new BinaryDataParser(this$BaseFactory.pool);
    };
  }
  BaseFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseFactory',
    interfaces: []
  };
  function BuildArmaturePackage() {
    this.dataName = '';
    this.textureAtlasName = '';
    this.data = null;
    this.armature = null;
    this.skin = null;
  }
  BuildArmaturePackage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildArmaturePackage',
    interfaces: []
  };
  function ColorTransform(alphaMultiplier, redMultiplier, greenMultiplier, blueMultiplier, alphaOffset, redOffset, greenOffset, blueOffset) {
    if (alphaMultiplier === void 0)
      alphaMultiplier = 1.0;
    if (redMultiplier === void 0)
      redMultiplier = 1.0;
    if (greenMultiplier === void 0)
      greenMultiplier = 1.0;
    if (blueMultiplier === void 0)
      blueMultiplier = 1.0;
    if (alphaOffset === void 0)
      alphaOffset = 0;
    if (redOffset === void 0)
      redOffset = 0;
    if (greenOffset === void 0)
      greenOffset = 0;
    if (blueOffset === void 0)
      blueOffset = 0;
    this.alphaMultiplier = alphaMultiplier;
    this.redMultiplier = redMultiplier;
    this.greenMultiplier = greenMultiplier;
    this.blueMultiplier = blueMultiplier;
    this.alphaOffset = alphaOffset;
    this.redOffset = redOffset;
    this.greenOffset = greenOffset;
    this.blueOffset = blueOffset;
  }
  ColorTransform.prototype.copyFrom_rr69z0$ = function (value) {
    this.alphaMultiplier = value.alphaMultiplier;
    this.redMultiplier = value.redMultiplier;
    this.greenMultiplier = value.greenMultiplier;
    this.blueMultiplier = value.blueMultiplier;
    this.alphaOffset = value.alphaOffset;
    this.redOffset = value.redOffset;
    this.greenOffset = value.greenOffset;
    this.blueOffset = value.blueOffset;
  };
  ColorTransform.prototype.identity = function () {
    this.alphaMultiplier = 1.0;
    this.redMultiplier = 1.0;
    this.greenMultiplier = 1.0;
    this.blueMultiplier = 1.0;
    this.alphaOffset = 0;
    this.redOffset = 0;
    this.greenOffset = 0;
    this.blueOffset = 0;
  };
  ColorTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorTransform',
    interfaces: []
  };
  function Matrix_0(a, b, c, d, tx, ty) {
    if (a === void 0)
      a = 1.0;
    if (b === void 0)
      b = 0.0;
    if (c === void 0)
      c = 0.0;
    if (d === void 0)
      d = 1.0;
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = 0.0;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }
  Matrix_0.prototype.toString = function () {
    return '[object dragonBones.Matrix] a:' + toString(this.a) + ' b:' + toString(this.b) + ' c:' + toString(this.c) + ' d:' + toString(this.d) + ' tx:' + toString(this.tx) + ' ty:' + toString(this.ty);
  };
  Matrix_0.prototype.copyFrom_dyon7w$ = function (value) {
    this.a = value.a;
    this.b = value.b;
    this.c = value.c;
    this.d = value.d;
    this.tx = value.tx;
    this.ty = value.ty;
    return this;
  };
  Matrix_0.prototype.setTo_w8lrqs$ = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  };
  Matrix_0.prototype.copyFromArray_9752rg$ = function (value, offset) {
    if (offset === void 0)
      offset = 0;
    return this.setTo_w8lrqs$(value[offset + 0 | 0], value[offset + 1 | 0], value[offset + 2 | 0], value[offset + 3 | 0], value[offset + 4 | 0], value[offset + 5 | 0]);
  };
  Matrix_0.prototype.copyFromArray_fcbbnx$ = function (value, offset) {
    if (offset === void 0)
      offset = 0;
    return this.setTo_w8lrqs$(value[offset + 0 | 0], value[offset + 1 | 0], value[offset + 2 | 0], value[offset + 3 | 0], value[offset + 4 | 0], value[offset + 5 | 0]);
  };
  Matrix_0.prototype.identity = function () {
    this.a = 1.0;
    this.b = 0.0;
    this.d = 1.0;
    this.c = 0.0;
    this.tx = 0.0;
    this.ty = 0.0;
    return this;
  };
  Matrix_0.prototype.concat_dyon7w$ = function (value) {
    var aA = this.a * value.a;
    var bA = 0.0;
    var cA = 0.0;
    var dA = this.d * value.d;
    var txA = this.tx * value.a + value.tx;
    var tyA = this.ty * value.d + value.ty;
    if (this.b !== 0.0 || this.c !== 0.0) {
      aA += this.b * value.c;
      bA += this.b * value.d;
      cA += this.c * value.a;
      dA += this.c * value.b;
    }if (value.b !== 0.0 || value.c !== 0.0) {
      bA += this.a * value.b;
      cA += this.d * value.c;
      txA += this.ty * value.c;
      tyA += this.tx * value.b;
    }this.a = aA;
    this.b = bA;
    this.c = cA;
    this.d = dA;
    this.tx = txA;
    this.ty = tyA;
    return this;
  };
  Matrix_0.prototype.invert = function () {
    var aA = this.a;
    var bA = this.b;
    var cA = this.c;
    var dA = this.d;
    var txA = this.tx;
    var tyA = this.ty;
    if (bA === 0.0 && cA === 0.0) {
      this.b = 0.0;
      this.c = 0.0;
      if (aA === 0.0 || dA === 0.0) {
        this.a = 0.0;
        this.b = 0.0;
        this.tx = 0.0;
        this.ty = 0.0;
      } else {
        aA = 1.0 / aA;
        dA = 1.0 / dA;
        this.a = aA;
        this.d = dA;
        this.tx = -aA * txA;
        this.ty = -dA * tyA;
      }
      return this;
    }var determinant = aA * dA - bA * cA;
    if (determinant === 0.0) {
      this.a = 1.0;
      this.b = 0.0;
      this.c = 0.0;
      this.d = 1.0;
      this.tx = 0.0;
      this.ty = 0.0;
      return this;
    }determinant = 1.0 / determinant;
    var k = dA * determinant;
    this.a = k;
    bA = -bA * determinant;
    this.b = bA;
    cA = -cA * determinant;
    this.c = cA;
    dA = aA * determinant;
    this.d = dA;
    this.tx = -(k * txA + cA * tyA);
    this.ty = -(bA * txA + dA * tyA);
    return this;
  };
  Matrix_0.prototype.transformPoint_cck2st$ = function (x, y, result, delta) {
    if (delta === void 0)
      delta = false;
    result.x = this.a * x + this.c * y;
    result.y = this.b * x + this.d * y;
    if (!delta) {
      result.x = result.x + this.tx;
      result.y = result.y + this.ty;
    }};
  Matrix_0.prototype.transformPoint_hd5a0h$ = function (x, y, result, delta) {
    if (delta === void 0)
      delta = false;
    this.transformPoint_cck2st$(x, y, result, delta);
  };
  Matrix_0.prototype.transformX_dleff0$ = function (x, y) {
    return this.a * x + this.c * y + this.tx;
  };
  Matrix_0.prototype.transformY_dleff0$ = function (x, y) {
    return this.b * x + this.d * y + this.ty;
  };
  Matrix_0.prototype.transformRectangle_z8gjdh$ = function (rectangle, delta) {
    if (delta === void 0)
      delta = false;
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var tx = delta ? 0.0 : this.tx;
    var ty = delta ? 0.0 : this.ty;
    var x = rectangle.x;
    var y = rectangle.y;
    var xMax = x + rectangle.width;
    var yMax = y + rectangle.height;
    var x0 = a * x + c * y + tx;
    var y0 = b * x + d * y + ty;
    var x1 = a * xMax + c * y + tx;
    var y1 = b * xMax + d * y + ty;
    var x2 = a * xMax + c * yMax + tx;
    var y2 = b * xMax + d * yMax + ty;
    var x3 = a * x + c * yMax + tx;
    var y3 = b * x + d * yMax + ty;
    var tmp = 0.0;
    if (x0 > x1) {
      tmp = x0;
      x0 = x1;
      x1 = tmp;
    }if (x2 > x3) {
      tmp = x2;
      x2 = x3;
      x3 = tmp;
    }var x_0 = x0 < x2 ? x0 : x2;
    rectangle.x = Math_0.floor(x_0);
    var x_1 = (x1 > x3 ? x1 : x3) - rectangle.x;
    rectangle.width = Math_0.ceil(x_1);
    if (y0 > y1) {
      tmp = y0;
      y0 = y1;
      y1 = tmp;
    }if (y2 > y3) {
      tmp = y2;
      y2 = y3;
      y3 = tmp;
    }var x_2 = y0 < y2 ? y0 : y2;
    rectangle.y = Math_0.floor(x_2);
    var x_3 = (y1 > y3 ? y1 : y3) - rectangle.y;
    rectangle.height = Math_0.ceil(x_3);
  };
  Matrix_0.prototype.toMatrix2d_1ktkmn$ = function (m) {
    m.a = this.a;
    m.b = this.b;
    m.c = this.c;
    m.d = this.d;
    m.tx = this.tx;
    m.ty = this.ty;
  };
  Matrix_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix',
    interfaces: []
  };
  function Point(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x_8iuac3$_0 = x;
    this.y_8iuacy$_0 = y;
  }
  Object.defineProperty(Point.prototype, 'x', {
    get: function () {
      return this.x_8iuac3$_0;
    },
    set: function (x) {
      this.x_8iuac3$_0 = x;
    }
  });
  Object.defineProperty(Point.prototype, 'y', {
    get: function () {
      return this.y_8iuacy$_0;
    },
    set: function (y) {
      this.y_8iuacy$_0 = y;
    }
  });
  Point.prototype.copyFrom_u6ntkz$ = function (value) {
    this.x = value.x;
    this.y = value.y;
  };
  Point.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: [XY]
  };
  function Rectangle_0(x, y, width, height) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  Rectangle_0.prototype.copyFrom_r7la90$ = function (value) {
    this.x = value.x;
    this.y = value.y;
    this.width = value.width;
    this.height = value.height;
  };
  Rectangle_0.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.width = 0.0;
    this.height = 0.0;
  };
  Rectangle_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rectangle',
    interfaces: []
  };
  function Transform(x, y, skew, rotation, scaleX, scaleY) {
    Transform$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (skew === void 0)
      skew = 0.0;
    if (rotation === void 0)
      rotation = 0.0;
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = 1.0;
    this.x_wqkqgn$_0 = x;
    this.y_wqkqhi$_0 = y;
    this.skew = skew;
    this.rotation = rotation;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
  Object.defineProperty(Transform.prototype, 'x', {
    get: function () {
      return this.x_wqkqgn$_0;
    },
    set: function (x) {
      this.x_wqkqgn$_0 = x;
    }
  });
  Object.defineProperty(Transform.prototype, 'y', {
    get: function () {
      return this.y_wqkqhi$_0;
    },
    set: function (y) {
      this.y_wqkqhi$_0 = y;
    }
  });
  function Transform$Companion() {
    Transform$Companion_instance = this;
    this.PI = math.PI;
    this.PI_D = this.PI * 2.0;
    this.PI_H = this.PI / 2.0;
    this.PI_Q = this.PI / 4.0;
    this.RAD_DEG = 180.0 / this.PI;
    this.DEG_RAD = this.PI / 180.0;
  }
  Transform$Companion.prototype.normalizeRadian_14dthe$ = function (value) {
    var value_0 = (value + this.PI) % (this.PI * 2.0);
    value_0 += value_0 > 0.0 ? -this.PI : this.PI;
    return value_0;
  };
  Transform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transform$Companion_instance = null;
  function Transform$Companion_getInstance() {
    if (Transform$Companion_instance === null) {
      new Transform$Companion();
    }return Transform$Companion_instance;
  }
  Transform.prototype.toString = function () {
    return '[object dragonBones.Transform] x:' + toString(this.x) + ' y:' + toString(this.y) + ' skewX:' + toString(this.skew * 180.0 / Transform$Companion_getInstance().PI) + ' skewY:' + toString(this.rotation * 180.0 / Transform$Companion_getInstance().PI) + ' scaleX:' + toString(this.scaleX) + ' scaleY:' + toString(this.scaleY);
  };
  Transform.prototype.setTo_w8lrqs$ = function (x, y, skew, rotation, scaleX, scaleY) {
    this.x = x;
    this.y = y;
    this.skew = skew;
    this.rotation = rotation;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    if (isNaN_0(x) || isNaN_0(y) || isNaN_0(skew) || isNaN_0(rotation) || isNaN_0(scaleX) || isNaN_0(scaleY)) {
      throw IllegalStateException_init('WARNING! NaN detected in Transform'.toString());
    }return this;
  };
  Transform.prototype.copyFrom_scgbvr$ = function (value) {
    this.setTo_w8lrqs$(value.x, value.y, value.skew, value.rotation, value.scaleX, value.scaleY);
    return value;
  };
  Transform.prototype.identity = function () {
    return this.setTo_w8lrqs$(0.0, 0.0, 0.0, 0.0, 1.0, 1.0);
  };
  Transform.prototype.add_scgbvr$ = function (value) {
    return this.setTo_w8lrqs$(this.x + value.x, this.y + value.y, this.skew + value.skew, this.rotation + value.rotation, this.scaleX * value.scaleX, this.scaleY * value.scaleY);
  };
  Transform.prototype.minus_scgbvr$ = function (value) {
    return this.setTo_w8lrqs$(this.x - value.x, this.y - value.y, this.skew - value.skew, this.rotation - value.rotation, this.scaleX / value.scaleX, this.scaleY / value.scaleY);
  };
  Transform.prototype.fromMatrix_dyon7w$ = function (matrix) {
    var backupScaleX = this.scaleX;
    var backupScaleY = this.scaleY;
    var PI_Q = Transform$Companion_getInstance().PI_Q;
    this.x = matrix.tx;
    this.y = matrix.ty;
    var x = matrix.b / matrix.a;
    this.rotation = Math_0.atan(x);
    var x_0 = -matrix.c / matrix.d;
    var skewX = Math_0.atan(x_0);
    var tmp$;
    if (this.rotation > -PI_Q && this.rotation < PI_Q) {
      var tmp$_0 = matrix.a;
      var x_1 = this.rotation;
      tmp$ = tmp$_0 / Math_0.cos(x_1);
    } else {
      var tmp$_1 = matrix.b;
      var x_2 = this.rotation;
      tmp$ = tmp$_1 / Math_0.sin(x_2);
    }
    this.scaleX = tmp$;
    this.scaleY = skewX > -PI_Q && skewX < PI_Q ? matrix.d / Math_0.cos(skewX) : -matrix.c / Math_0.sin(skewX);
    if (backupScaleX >= 0.0 && this.scaleX < 0.0) {
      this.scaleX = -this.scaleX;
      this.rotation = this.rotation - Transform$Companion_getInstance().PI;
    }if (backupScaleY >= 0.0 && this.scaleY < 0.0) {
      this.scaleY = -this.scaleY;
      skewX -= Transform$Companion_getInstance().PI;
    }this.skew = skewX - this.rotation;
    return this;
  };
  Transform.prototype.toMatrix_dyon7w$ = function (matrix) {
    if (this.rotation === 0.0) {
      matrix.a = 1.0;
      matrix.b = 0.0;
    } else {
      var x = this.rotation;
      matrix.a = Math_0.cos(x);
      var x_0 = this.rotation;
      matrix.b = Math_0.sin(x_0);
    }
    if (this.skew === 0.0) {
      matrix.c = -matrix.b;
      matrix.d = matrix.a;
    } else {
      var x_1 = this.skew + this.rotation;
      matrix.c = -Math_0.sin(x_1);
      var x_2 = this.skew + this.rotation;
      matrix.d = Math_0.cos(x_2);
    }
    if (this.scaleX !== 1.0) {
      matrix.a = matrix.a * this.scaleX;
      matrix.b = matrix.b * this.scaleX;
    }if (this.scaleY !== 1.0) {
      matrix.c = matrix.c * this.scaleY;
      matrix.d = matrix.d * this.scaleY;
    }matrix.tx = this.x;
    matrix.ty = this.y;
    return this;
  };
  Transform.prototype.toMatrix2d_1ktkmn$ = function (matrix) {
    if (this.rotation === 0.0) {
      matrix.a = 1.0;
      matrix.b = 0.0;
    } else {
      var x = this.rotation;
      matrix.a = Math_0.cos(x);
      var x_0 = this.rotation;
      matrix.b = Math_0.sin(x_0);
    }
    if (this.skew === 0.0) {
      matrix.c = -matrix.b;
      matrix.d = matrix.a;
    } else {
      var x_1 = this.skew + this.rotation;
      matrix.c = -Math_0.sin(x_1);
      var x_2 = this.skew + this.rotation;
      matrix.d = Math_0.cos(x_2);
    }
    if (this.scaleX !== 1.0) {
      matrix.a = matrix.a * this.scaleX;
      matrix.b = matrix.b * this.scaleX;
    }if (this.scaleY !== 1.0) {
      matrix.c = matrix.c * this.scaleY;
      matrix.d = matrix.d * this.scaleY;
    }matrix.tx = this.x;
    matrix.ty = this.y;
    return this;
  };
  Transform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transform',
    interfaces: [XY]
  };
  function XY() {
  }
  XY.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'XY',
    interfaces: []
  };
  var fastForEach = defineInlineFunction('korge-root-korge-dragonbones.com.dragonbones.internal.fastForEach_qvzyjf$', function ($receiver, callback) {
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      callback($receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)));
    }
  });
  var fastForEach_0 = defineInlineFunction('korge-root-korge-dragonbones.com.dragonbones.internal.fastForEach_5hcql4$', function ($receiver, callback) {
    var tmp$;
    var n = 0;
    while (n < $receiver.length) {
      callback($receiver[tmp$ = n, n = tmp$ + 1 | 0, tmp$]);
    }
  });
  function AnimationConfig(pool) {
    BaseObject.call(this, pool);
    this.pauseFadeOut = true;
    this.fadeOutMode = AnimationFadeOutMode$All_getInstance();
    this.fadeOutTweenType = TweenType$Line_getInstance();
    this.fadeOutTime = -1.0;
    this.pauseFadeIn = true;
    this.actionEnabled = true;
    this.additive = false;
    this.displayControl = true;
    this.resetToPose = true;
    this.fadeInTweenType = TweenType$Line_getInstance();
    this.playTimes = -1;
    this.layer = 0;
    this.position = 0.0;
    this.duration = -1.0;
    this.timeScale = -100.0;
    this.weight = 1.0;
    this.fadeInTime = -1.0;
    this.autoFadeOutTime = -1.0;
    this.name = '';
    this.animation = '';
    this.group = '';
    this.boneMask = ArrayList_init();
  }
  AnimationConfig.prototype.toString = function () {
    return '[class dragonBones.AnimationConfig]';
  };
  AnimationConfig.prototype._onClear = function () {
    this.pauseFadeOut = true;
    this.fadeOutMode = AnimationFadeOutMode$All_getInstance();
    this.fadeOutTweenType = TweenType$Line_getInstance();
    this.fadeOutTime = -1.0;
    this.actionEnabled = true;
    this.additive = false;
    this.displayControl = true;
    this.pauseFadeIn = true;
    this.resetToPose = true;
    this.fadeInTweenType = TweenType$Line_getInstance();
    this.playTimes = -1;
    this.layer = 0;
    this.position = 0.0;
    this.duration = -1.0;
    this.timeScale = -100.0;
    this.weight = 1.0;
    this.fadeInTime = -1.0;
    this.autoFadeOutTime = -1.0;
    this.name = '';
    this.animation = '';
    this.group = '';
    this.boneMask.clear();
  };
  AnimationConfig.prototype.clear = function () {
    this._onClear();
  };
  AnimationConfig.prototype.copyFrom_1e5lcy$ = function (value) {
    var tmp$;
    this.pauseFadeOut = value.pauseFadeOut;
    this.fadeOutMode = value.fadeOutMode;
    this.autoFadeOutTime = value.autoFadeOutTime;
    this.fadeOutTweenType = value.fadeOutTweenType;
    this.actionEnabled = value.actionEnabled;
    this.additive = value.additive;
    this.displayControl = value.displayControl;
    this.pauseFadeIn = value.pauseFadeIn;
    this.resetToPose = value.resetToPose;
    this.playTimes = value.playTimes;
    this.layer = value.layer;
    this.position = value.position;
    this.duration = value.duration;
    this.timeScale = value.timeScale;
    this.fadeInTime = value.fadeInTime;
    this.fadeOutTime = value.fadeOutTime;
    this.fadeInTweenType = value.fadeInTweenType;
    this.weight = value.weight;
    this.name = value.name;
    this.animation = value.animation;
    this.group = value.group;
    set_lengthSet_1(this.boneMask, value.boneMask.size);
    tmp$ = this.boneMask.size;
    for (var i = 0; i < tmp$; i++) {
      this.boneMask.set_wxm5ur$(i, value.boneMask.get_za3lpa$(i));
    }
  };
  AnimationConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationConfig',
    interfaces: [BaseObject]
  };
  function AnimationData(pool) {
    BaseObject.call(this, pool);
    this.frameIntOffset = 0;
    this.frameFloatOffset = 0;
    this.frameOffset = 0;
    this.blendType = AnimationBlendType$None_getInstance();
    this.frameCount = 0;
    this.playTimes = 0;
    this.duration = 0.0;
    this.scale = 1.0;
    this.fadeInTime = 0.0;
    this.cacheFrameRate = 0.0;
    this.name = '';
    this.cachedFrames = ArrayList_init();
    this.boneTimelines = FastStringMap();
    this.slotTimelines = FastStringMap();
    this.constraintTimelines = FastStringMap();
    this.animationTimelines = FastStringMap();
    this.boneCachedFrameIndices = FastStringMap();
    this.slotCachedFrameIndices = FastStringMap();
    this.actionTimeline = null;
    this.zOrderTimeline = null;
    this.parent = null;
  }
  AnimationData.prototype.toString = function () {
    return '[class dragonBones.AnimationData]';
  };
  AnimationData.prototype._onClear = function () {
    var tmp$, tmp$_0;
    var $receiver = this.boneTimelines;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var tl = ensureNotNull($receiver.get(v.value));
      var tmp$_1;
      var n = 0;
      while (n < tl.size) {
        tl.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1)).returnToPool();
      }
    }
    this.boneTimelines.clear();
    var $receiver_0 = this.slotTimelines;
    var mapIterator_0 = $receiver_0.keys();
    while (true) {
      var v_0 = mapIterator_0.next();
      if (v_0.done)
        break;
      var tl_0 = ensureNotNull($receiver_0.get(v_0.value));
      var tmp$_2;
      var n_0 = 0;
      while (n_0 < tl_0.size) {
        tl_0.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2)).returnToPool();
      }
    }
    this.slotTimelines.clear();
    var $receiver_1 = this.constraintTimelines;
    var mapIterator_1 = $receiver_1.keys();
    while (true) {
      var v_1 = mapIterator_1.next();
      if (v_1.done)
        break;
      var tl_1 = ensureNotNull($receiver_1.get(v_1.value));
      var tmp$_3;
      var n_1 = 0;
      while (n_1 < tl_1.size) {
        tl_1.get_za3lpa$((tmp$_3 = n_1, n_1 = tmp$_3 + 1 | 0, tmp$_3)).returnToPool();
      }
    }
    this.constraintTimelines.clear();
    var $receiver_2 = this.animationTimelines;
    var mapIterator_2 = $receiver_2.keys();
    while (true) {
      var v_2 = mapIterator_2.next();
      if (v_2.done)
        break;
      var tl_2 = ensureNotNull($receiver_2.get(v_2.value));
      var tmp$_4;
      var n_2 = 0;
      while (n_2 < tl_2.size) {
        tl_2.get_za3lpa$((tmp$_4 = n_2, n_2 = tmp$_4 + 1 | 0, tmp$_4)).returnToPool();
      }
    }
    this.animationTimelines.clear();
    this.boneCachedFrameIndices.clear();
    this.slotCachedFrameIndices.clear();
    (tmp$ = this.actionTimeline) != null ? (tmp$.returnToPool(), Unit) : null;
    (tmp$_0 = this.zOrderTimeline) != null ? (tmp$_0.returnToPool(), Unit) : null;
    this.frameIntOffset = 0;
    this.frameFloatOffset = 0;
    this.frameOffset = 0;
    this.blendType = AnimationBlendType$None_getInstance();
    this.frameCount = 0;
    this.playTimes = 0;
    this.duration = 0.0;
    this.scale = 1.0;
    this.fadeInTime = 0.0;
    this.cacheFrameRate = 0.0;
    this.name = '';
    set_length_1(this.cachedFrames, 0);
    this.actionTimeline = null;
    this.zOrderTimeline = null;
    this.parent = null;
  };
  AnimationData.prototype.cacheFrames_za3lpa$ = function (frameRate) {
    var tmp$;
    if (this.cacheFrameRate > 0.0) {
      return;
    }var x = frameRate * this.scale;
    var a = Math_0.ceil(x);
    this.cacheFrameRate = Math_0.max(a, 1.0);
    var x_0 = this.cacheFrameRate * this.duration;
    var cacheFrameCount = numberToInt(Math_0.ceil(x_0)) + 1 | 0;
    set_length_1(this.cachedFrames, cacheFrameCount);
    tmp$ = get_length_1(this.cachedFrames);
    for (var i = 0; i < tmp$; i++) {
      this.cachedFrames.set_wxm5ur$(i, false);
    }
    var $receiver = ensureNotNull(this.parent).sortedBones;
    var tmp$_0;
    var n = 0;
    while (n < $receiver.size) {
      var bone = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
      var tmp$_1;
      var indices = new IntArrayList(cacheFrameCount);
      tmp$_1 = get_length(indices);
      for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
        indices.set_vux9f0$(i_0, -1);
      }
      var $receiver_0 = this.boneCachedFrameIndices;
      var key = bone.name;
      $receiver_0.set(key, indices);
    }
    var $receiver_1 = ensureNotNull(this.parent).sortedSlots;
    var tmp$_2;
    var n_0 = 0;
    while (n_0 < $receiver_1.size) {
      var slot = $receiver_1.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2));
      var tmp$_3;
      var indices_0 = new IntArrayList(cacheFrameCount);
      tmp$_3 = get_length(indices_0);
      for (var i_1 = 0; i_1 < tmp$_3; i_1++) {
        indices_0.set_vux9f0$(i_1, -1);
      }
      var $receiver_2 = this.slotCachedFrameIndices;
      var key_0 = slot.name;
      $receiver_2.set(key_0, indices_0);
    }
  };
  AnimationData.prototype.addBoneTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.boneTimelines;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(timelineName);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }var out = ArrayList_init();
      $receiver.set(timelineName, out);
      getOrPut$result = out;
    }
     while (false);
    var timelines = getOrPut$result;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }};
  AnimationData.prototype.addSlotTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.slotTimelines;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(timelineName);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }var out = ArrayList_init();
      $receiver.set(timelineName, out);
      getOrPut$result = out;
    }
     while (false);
    var timelines = getOrPut$result;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }};
  AnimationData.prototype.addConstraintTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.constraintTimelines;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(timelineName);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }var out = ArrayList_init();
      $receiver.set(timelineName, out);
      getOrPut$result = out;
    }
     while (false);
    var timelines = getOrPut$result;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }};
  AnimationData.prototype.addAnimationTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.animationTimelines;
    var getOrPut$result;
    getOrPut$break: do {
      var res = $receiver.get(timelineName);
      if (res != null) {
        getOrPut$result = res;
        break getOrPut$break;
      }var out = ArrayList_init();
      $receiver.set(timelineName, out);
      getOrPut$result = out;
    }
     while (false);
    var timelines = getOrPut$result;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }};
  AnimationData.prototype.getBoneTimelines_61zpoe$ = function (timelineName) {
    return this.boneTimelines.get(timelineName);
  };
  AnimationData.prototype.getSlotTimelines_61zpoe$ = function (timelineName) {
    return this.slotTimelines.get(timelineName);
  };
  AnimationData.prototype.getConstraintTimelines_61zpoe$ = function (timelineName) {
    return this.constraintTimelines.get(timelineName);
  };
  AnimationData.prototype.getAnimationTimelines_61zpoe$ = function (timelineName) {
    return this.animationTimelines.get(timelineName);
  };
  AnimationData.prototype.getBoneCachedFrameIndices_61zpoe$ = function (boneName) {
    return this.boneCachedFrameIndices.get(boneName);
  };
  AnimationData.prototype.getSlotCachedFrameIndices_61zpoe$ = function (slotName) {
    return this.slotCachedFrameIndices.get(slotName);
  };
  AnimationData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationData',
    interfaces: [BaseObject]
  };
  function TimelineData(pool) {
    BaseObject.call(this, pool);
    this.type = TimelineType$BoneAll_getInstance();
    this.offset = 0;
    this.frameIndicesOffset = -1;
  }
  TimelineData.prototype.toString = function () {
    return '[class dragonBones.TimelineData]';
  };
  TimelineData.prototype._onClear = function () {
    this.type = TimelineType$BoneAll_getInstance();
    this.offset = 0;
    this.frameIndicesOffset = -1;
  };
  TimelineData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineData',
    interfaces: [BaseObject]
  };
  function AnimationTimelineData(pool) {
    TimelineData.call(this, pool);
    this.x = 0.0;
    this.y = 0.0;
  }
  AnimationTimelineData.prototype.toString = function () {
    return '[class dragonBones.AnimationTimelineData]';
  };
  AnimationTimelineData.prototype._onClear = function () {
    TimelineData.prototype._onClear.call(this);
    this.x = 0.0;
    this.y = 0.0;
  };
  AnimationTimelineData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationTimelineData',
    interfaces: [TimelineData]
  };
  function ArmatureData(pool) {
    BaseObject.call(this, pool);
    this.type = ArmatureType$Armature_getInstance();
    this.frameRate = 0;
    this.cacheFrameRate = 0;
    this.scale = 1.0;
    this.name = '';
    this.aabb = new Rectangle_0();
    this.animationNames = ArrayList_init();
    this.sortedBones = ArrayList_init();
    this.sortedSlots = ArrayList_init();
    this.defaultActions = ArrayList_init();
    this.actions = ArrayList_init();
    this.bones = FastStringMap();
    this.slots = FastStringMap();
    this.constraints = FastStringMap();
    this.skins = FastStringMap();
    this.animations = FastStringMap();
    this.defaultSkin = null;
    this.defaultAnimation = null;
    this.canvas = null;
    this.userData = null;
    this.parent = null;
  }
  ArmatureData.prototype.toString = function () {
    return '[class dragonBones.ArmatureData]';
  };
  ArmatureData.prototype._onClear = function () {
    var tmp$, tmp$_0;
    var $receiver = this.defaultActions;
    var tmp$_1;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1)).returnToPool();
    }
    var $receiver_0 = this.actions;
    var tmp$_2;
    var n_0 = 0;
    while (n_0 < $receiver_0.size) {
      $receiver_0.get_za3lpa$((tmp$_2 = n_0, n_0 = tmp$_2 + 1 | 0, tmp$_2)).returnToPool();
    }
    var $receiver_1 = this.bones;
    var mapIterator = $receiver_1.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      ensureNotNull($receiver_1.get(v.value)).returnToPool();
    }
    this.bones.clear();
    var $receiver_2 = this.slots;
    var mapIterator_0 = $receiver_2.keys();
    while (true) {
      var v_0 = mapIterator_0.next();
      if (v_0.done)
        break;
      ensureNotNull($receiver_2.get(v_0.value)).returnToPool();
    }
    this.slots.clear();
    var $receiver_3 = this.constraints;
    var mapIterator_1 = $receiver_3.keys();
    while (true) {
      var v_1 = mapIterator_1.next();
      if (v_1.done)
        break;
      ensureNotNull($receiver_3.get(v_1.value)).returnToPool();
    }
    this.constraints.clear();
    var $receiver_4 = this.skins;
    var mapIterator_2 = $receiver_4.keys();
    while (true) {
      var v_2 = mapIterator_2.next();
      if (v_2.done)
        break;
      ensureNotNull($receiver_4.get(v_2.value)).returnToPool();
    }
    this.skins.clear();
    var $receiver_5 = this.animations;
    var mapIterator_3 = $receiver_5.keys();
    while (true) {
      var v_3 = mapIterator_3.next();
      if (v_3.done)
        break;
      ensureNotNull($receiver_5.get(v_3.value)).returnToPool();
    }
    this.animations.clear();
    (tmp$ = this.canvas) != null ? (tmp$.returnToPool(), Unit) : null;
    (tmp$_0 = this.userData) != null ? (tmp$_0.returnToPool(), Unit) : null;
    this.type = ArmatureType$Armature_getInstance();
    this.frameRate = 0;
    this.cacheFrameRate = 0;
    this.scale = 1.0;
    this.name = '';
    this.aabb.clear();
    this.animationNames.clear();
    this.sortedBones.clear();
    this.sortedSlots.clear();
    this.defaultActions.clear();
    this.actions.clear();
    this.defaultSkin = null;
    this.defaultAnimation = null;
    this.canvas = null;
    this.userData = null;
    this.parent = null;
  };
  ArmatureData.prototype.sortBones = function () {
    var tmp$;
    var total = this.sortedBones.size;
    if (total <= 0) {
      return;
    }var sortHelper = toList(this.sortedBones);
    var index = 0;
    var count = 0;
    set_lengthSet_1(this.sortedBones, 0);
    while (count < total) {
      var bone = sortHelper.get_za3lpa$((tmp$ = index, index = tmp$ + 1 | 0, tmp$));
      if (index >= total) {
        index = 0;
      }if (this.sortedBones.indexOf_11rb$(bone) >= 0) {
        continue;
      }if (this.__hasFlag_0(bone)) {
        continue;
      }if (bone.parent != null && this.sortedBones.indexOf_11rb$(ensureNotNull(bone.parent)) < 0) {
        continue;
      }this.sortedBones.add_11rb$(bone);
      count = count + 1 | 0;
    }
  };
  ArmatureData.prototype.__hasFlag_0 = function (bone) {
    var $receiver = this.constraints;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var constraint = ensureNotNull($receiver.get(v.value));
      if (equals(constraint.root, bone) && indexOf(this.sortedBones, constraint.target) < 0) {
        return true;
      }}
    return false;
  };
  ArmatureData.prototype.cacheFrames_za3lpa$ = function (frameRate) {
    if (this.cacheFrameRate > 0) {
      return;
    }this.cacheFrameRate = frameRate;
    var mapIterator = this.animations.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var k = v.value;
      ensureNotNull(this.animations.get(k)).cacheFrames_za3lpa$(this.cacheFrameRate);
    }
  };
  ArmatureData.prototype.setCacheFrame_eeuvpt$ = function (globalTransformMatrix, transform) {
    var dataArray = ensureNotNull(this.parent).cachedFrames;
    var arrayOffset = dataArray.size;
    set_lengthSet_0(dataArray, get_lengthSet_0(dataArray) + 10 | 0);
    dataArray.set_5wr77w$(arrayOffset, globalTransformMatrix.a);
    dataArray.set_5wr77w$(arrayOffset + 1 | 0, globalTransformMatrix.b);
    dataArray.set_5wr77w$(arrayOffset + 2 | 0, globalTransformMatrix.c);
    dataArray.set_5wr77w$(arrayOffset + 3 | 0, globalTransformMatrix.d);
    dataArray.set_5wr77w$(arrayOffset + 4 | 0, globalTransformMatrix.tx);
    dataArray.set_5wr77w$(arrayOffset + 5 | 0, globalTransformMatrix.ty);
    dataArray.set_5wr77w$(arrayOffset + 6 | 0, transform.rotation);
    dataArray.set_5wr77w$(arrayOffset + 7 | 0, transform.skew);
    dataArray.set_5wr77w$(arrayOffset + 8 | 0, transform.scaleX);
    dataArray.set_5wr77w$(arrayOffset + 9 | 0, transform.scaleY);
    return arrayOffset;
  };
  ArmatureData.prototype.getCacheFrame_bqh3xf$ = function (globalTransformMatrix, transform, arrayOffset) {
    var dataArray = ensureNotNull(this.parent).cachedFrames;
    globalTransformMatrix.a = dataArray.get_za3lpa$(arrayOffset);
    globalTransformMatrix.b = dataArray.get_za3lpa$(arrayOffset + 1 | 0);
    globalTransformMatrix.c = dataArray.get_za3lpa$(arrayOffset + 2 | 0);
    globalTransformMatrix.d = dataArray.get_za3lpa$(arrayOffset + 3 | 0);
    globalTransformMatrix.tx = dataArray.get_za3lpa$(arrayOffset + 4 | 0);
    globalTransformMatrix.ty = dataArray.get_za3lpa$(arrayOffset + 5 | 0);
    transform.rotation = dataArray.get_za3lpa$(arrayOffset + 6 | 0);
    transform.skew = dataArray.get_za3lpa$(arrayOffset + 7 | 0);
    transform.scaleX = dataArray.get_za3lpa$(arrayOffset + 8 | 0);
    transform.scaleY = dataArray.get_za3lpa$(arrayOffset + 9 | 0);
    transform.x = globalTransformMatrix.tx;
    transform.y = globalTransformMatrix.ty;
  };
  ArmatureData.prototype.addBone_ejz9f2$ = function (value) {
    var $receiver = this.bones;
    var key = value.name;
    if ($receiver.has(key)) {
      console_getInstance().warn_vqirvp$(['Same bone: ' + value.name]);
      return;
    }var $receiver_0 = this.bones;
    var key_0 = value.name;
    $receiver_0.set(key_0, value);
    push(this.sortedBones, value);
  };
  ArmatureData.prototype.addSlot_5x25e4$ = function (value) {
    var $receiver = this.slots;
    var key = value.name;
    if ($receiver.has(key)) {
      console_getInstance().warn_vqirvp$(['Same slot: ' + value.name]);
      return;
    }var $receiver_0 = this.slots;
    var key_0 = value.name;
    $receiver_0.set(key_0, value);
    push(this.sortedSlots, value);
  };
  ArmatureData.prototype.addConstraint_9jmsph$ = function (value) {
    var $receiver = this.constraints;
    var key = value.name;
    if ($receiver.has(key)) {
      console_getInstance().warn_vqirvp$(['Same constraint: ' + value.name]);
      return;
    }var $receiver_0 = this.constraints;
    var key_0 = value.name;
    $receiver_0.set(key_0, value);
  };
  ArmatureData.prototype.addSkin_bowmr9$ = function (value) {
    var $receiver = this.skins;
    var key = value.name;
    if ($receiver.has(key)) {
      console_getInstance().warn_vqirvp$(['Same skin: ' + value.name]);
      return;
    }value.parent = this;
    var $receiver_0 = this.skins;
    var key_0 = value.name;
    $receiver_0.set(key_0, value);
    if (this.defaultSkin == null) {
      this.defaultSkin = value;
    }if (equals(value.name, 'default')) {
      this.defaultSkin = value;
    }};
  ArmatureData.prototype.addAnimation_w03ody$ = function (value) {
    var $receiver = this.animations;
    var key = value.name;
    if ($receiver.has(key)) {
      console_getInstance().warn_vqirvp$(['Same animation: ' + value.name]);
      return;
    }value.parent = this;
    var $receiver_0 = this.animations;
    var key_0 = value.name;
    $receiver_0.set(key_0, value);
    push(this.animationNames, value.name);
    if (this.defaultAnimation == null) {
      this.defaultAnimation = value;
    }};
  ArmatureData.prototype.addAction_uup9kz$ = function (value, isDefault) {
    if (isDefault) {
      push(this.defaultActions, value);
    } else {
      push(this.actions, value);
    }
  };
  ArmatureData.prototype.getBone_pdl1vj$ = function (boneName) {
    var $receiver = this.bones;
    return boneName == null ? null : $receiver.get(boneName);
  };
  ArmatureData.prototype.getSlot_pdl1vj$ = function (slotName) {
    var $receiver = this.slots;
    return slotName == null ? null : $receiver.get(slotName);
  };
  ArmatureData.prototype.getConstraint_61zpoe$ = function (constraintName) {
    return this.constraints.get(constraintName);
  };
  ArmatureData.prototype.getSkin_61zpoe$ = function (skinName) {
    return this.skins.get(skinName);
  };
  ArmatureData.prototype.getMesh_6hosri$ = function (skinName, slotName, meshName) {
    var tmp$, tmp$_0;
    tmp$ = this.getSkin_61zpoe$(skinName);
    if (tmp$ == null) {
      return null;
    }var skin = tmp$;
    return (tmp$_0 = skin.getDisplay_puj7f4$(slotName, meshName)) == null || Kotlin.isType(tmp$_0, MeshDisplayData) ? tmp$_0 : throwCCE();
  };
  ArmatureData.prototype.getAnimation_61zpoe$ = function (animationName) {
    return this.animations.has(animationName) ? this.animations.get(animationName) : null;
  };
  ArmatureData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmatureData',
    interfaces: [BaseObject]
  };
  function BoneData(pool) {
    BaseObject.call(this, pool);
    this.inheritTranslation = false;
    this.inheritRotation = false;
    this.inheritScale = false;
    this.inheritReflection = false;
    this.isSurface = false;
    this.length = 0.0;
    this.alpha = 1.0;
    this.name = '';
    this.transform = new Transform();
    this.userData = null;
    this.parent = null;
    this.segmentX = 0;
    this.segmentY = 0;
    this.geometry = new GeometryData();
  }
  BoneData.prototype.toString = function () {
    return '[class dragonBones.BoneData]';
  };
  Object.defineProperty(BoneData.prototype, 'isBone', {
    get: function () {
      return !this.isSurface;
    }
  });
  BoneData.prototype._onClear = function () {
    var tmp$;
    (tmp$ = this.userData) != null ? (tmp$.returnToPool(), Unit) : null;
    this.inheritTranslation = false;
    this.inheritRotation = false;
    this.inheritScale = false;
    this.inheritReflection = false;
    this.isSurface = false;
    this.length = 0.0;
    this.alpha = 1.0;
    this.name = '';
    this.transform.identity();
    this.userData = null;
    this.parent = null;
  };
  BoneData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneData',
    interfaces: [BaseObject]
  };
  function SurfaceData(pool) {
    BoneData.call(this, pool);
  }
  SurfaceData.prototype.toString = function () {
    return '[class dragonBones.SurfaceData]';
  };
  SurfaceData.prototype._onClear = function () {
    BoneData.prototype._onClear.call(this);
    this.isSurface = true;
    this.segmentX = 0;
    this.segmentY = 0;
    this.geometry.clear();
  };
  SurfaceData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SurfaceData',
    interfaces: [BoneData]
  };
  function SlotData(pool) {
    SlotData$Companion_getInstance();
    BaseObject.call(this, pool);
    this.blendMode = BlendMode$Normal_getInstance();
    this.displayIndex = 0;
    this.zOrder = 0;
    this.zIndex = 0;
    this.alpha = 1.0;
    this.name = '';
    this.color = null;
    this.userData = null;
    this.parent = null;
  }
  function SlotData$Companion() {
    SlotData$Companion_instance = this;
  }
  SlotData$Companion.prototype.createColor = function () {
    return new ColorTransform();
  };
  SlotData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SlotData$Companion_instance = null;
  function SlotData$Companion_getInstance() {
    if (SlotData$Companion_instance === null) {
      new SlotData$Companion();
    }return SlotData$Companion_instance;
  }
  SlotData.prototype.toString = function () {
    return '[class dragonBones.SlotData]';
  };
  SlotData.prototype._onClear = function () {
    var tmp$;
    (tmp$ = this.userData) != null ? (tmp$.returnToPool(), Unit) : null;
    this.blendMode = BlendMode$Normal_getInstance();
    this.displayIndex = 0;
    this.zOrder = 0;
    this.zIndex = 0;
    this.alpha = 1.0;
    this.name = '';
    this.color = null;
    this.userData = null;
    this.parent = null;
  };
  SlotData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotData',
    interfaces: [BaseObject]
  };
  function BoundingBoxData(pool) {
    BaseObject.call(this, pool);
    this.type = BoundingBoxType$None_getInstance();
    this.color = 0;
    this.width = 0.0;
    this.height = 0.0;
  }
  BoundingBoxData.prototype._onClear = function () {
    this.color = 0;
    this.width = 0.0;
    this.height = 0.0;
  };
  BoundingBoxData.prototype.intersectsSegment_e4ky6u$ = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians, callback$default) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    return callback$default ? callback$default(xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) : this.intersectsSegment_e4ky6u$$default(xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians);
  };
  BoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundingBoxData',
    interfaces: [BaseObject]
  };
  function OutCode() {
    OutCode_instance = this;
    this.InSide = 0;
    this.Left = 1;
    this.Right = 2;
    this.Top = 4;
    this.Bottom = 8;
  }
  OutCode.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OutCode',
    interfaces: []
  };
  var OutCode_instance = null;
  function OutCode_getInstance() {
    if (OutCode_instance === null) {
      new OutCode();
    }return OutCode_instance;
  }
  function RectangleBoundingBoxData(pool) {
    RectangleBoundingBoxData$Companion_getInstance();
    BoundingBoxData.call(this, pool);
  }
  RectangleBoundingBoxData.prototype.toString = function () {
    return '[class dragonBones.RectangleBoundingBoxData]';
  };
  function RectangleBoundingBoxData$Companion() {
    RectangleBoundingBoxData$Companion_instance = this;
  }
  RectangleBoundingBoxData$Companion.prototype._computeOutCode_0 = function (x, y, xMin, yMin, xMax, yMax) {
    var code = 0;
    if (x < xMin) {
      code = code | 1;
    } else if (x > xMax) {
      code = code | 2;
    }if (y < yMin) {
      code = code | 4;
    } else if (y > yMax) {
      code = code | 8;
    }return code;
  };
  RectangleBoundingBoxData$Companion.prototype.rectangleIntersectsSegment_gqu942$ = function (xA, yA, xB, yB, xMin, yMin, xMax, yMax, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var xA_0 = xA;
    var yA_0 = yA;
    var xB_0 = xB;
    var yB_0 = yB;
    var inSideA = xA_0 > xMin && xA_0 < xMax && yA_0 > yMin && yA_0 < yMax;
    var inSideB = xB_0 > xMin && xB_0 < xMax && yB_0 > yMin && yB_0 < yMax;
    if (inSideA && inSideB) {
      return -1;
    }var intersectionCount = 0;
    var outcode0 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xA_0, yA_0, xMin, yMin, xMax, yMax);
    var outcode1 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xB_0, yB_0, xMin, yMin, xMax, yMax);
    while (true) {
      if ((outcode0 | outcode1) === 0) {
        intersectionCount = 2;
        break;
      } else if ((outcode0 & outcode1) !== 0) {
        break;
      }var x = 0.0;
      var y = 0.0;
      var normalRadian = 0.0;
      var outcodeOut = outcode0 !== 0 ? outcode0 : outcode1;
      if ((outcodeOut & 4) !== 0) {
        x = xA_0 + (xB_0 - xA_0) * (yMin - yA_0) / (yB_0 - yA_0);
        y = yMin;
        if (normalRadians != null) {
          normalRadian = -math.PI * 0.5;
        }} else if ((outcodeOut & 8) !== 0) {
        x = xA_0 + (xB_0 - xA_0) * (yMax - yA_0) / (yB_0 - yA_0);
        y = yMax;
        if (normalRadians != null) {
          normalRadian = math.PI * 0.5;
        }} else if ((outcodeOut & 2) !== 0) {
        y = yA_0 + (yB_0 - yA_0) * (xMax - xA_0) / (xB_0 - xA_0);
        x = xMax;
        if (normalRadians != null) {
          normalRadian = 0.0;
        }} else if ((outcodeOut & 1) !== 0) {
        y = yA_0 + (yB_0 - yA_0) * (xMin - xA_0) / (xB_0 - xA_0);
        x = xMin;
        if (normalRadians != null) {
          normalRadian = math.PI;
        }}if (outcodeOut === outcode0) {
        xA_0 = x;
        yA_0 = y;
        outcode0 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xA_0, yA_0, xMin, yMin, xMax, yMax);
        if (normalRadians != null) {
          normalRadians.x = normalRadian;
        }} else {
        xB_0 = x;
        yB_0 = y;
        outcode1 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xB_0, yB_0, xMin, yMin, xMax, yMax);
        if (normalRadians != null) {
          normalRadians.y = normalRadian;
        }}
    }
    if (intersectionCount !== 0) {
      if (inSideA) {
        intersectionCount = 2;
        if (intersectionPointA != null) {
          intersectionPointA.x = xB_0;
          intersectionPointA.y = yB_0;
        }if (intersectionPointB != null) {
          intersectionPointB.x = xB_0;
          intersectionPointB.y = xB_0;
        }if (normalRadians != null) {
          normalRadians.x = normalRadians.y + math.PI;
        }} else if (inSideB) {
        intersectionCount = 1;
        if (intersectionPointA != null) {
          intersectionPointA.x = xA_0;
          intersectionPointA.y = yA_0;
        }if (intersectionPointB != null) {
          intersectionPointB.x = xA_0;
          intersectionPointB.y = yA_0;
        }if (normalRadians != null) {
          normalRadians.y = normalRadians.x + math.PI;
        }} else {
        intersectionCount = 3;
        if (intersectionPointA != null) {
          intersectionPointA.x = xA_0;
          intersectionPointA.y = yA_0;
        }if (intersectionPointB != null) {
          intersectionPointB.x = xB_0;
          intersectionPointB.y = yB_0;
        }}
    }return intersectionCount;
  };
  RectangleBoundingBoxData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RectangleBoundingBoxData$Companion_instance = null;
  function RectangleBoundingBoxData$Companion_getInstance() {
    if (RectangleBoundingBoxData$Companion_instance === null) {
      new RectangleBoundingBoxData$Companion();
    }return RectangleBoundingBoxData$Companion_instance;
  }
  RectangleBoundingBoxData.prototype._onClear = function () {
    BoundingBoxData.prototype._onClear.call(this);
    this.type = BoundingBoxType$Rectangle_getInstance();
  };
  RectangleBoundingBoxData.prototype.containsPoint_lu1900$ = function (pX, pY) {
    var widthH = this.width * 0.5;
    if (pX >= -widthH && pX <= widthH) {
      var heightH = this.height * 0.5;
      if (pY >= -heightH && pY <= heightH) {
        return true;
      }}return false;
  };
  RectangleBoundingBoxData.prototype.intersectsSegment_e4ky6u$$default = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    var widthH = this.width * 0.5;
    var heightH = this.height * 0.5;
    var intersectionCount = RectangleBoundingBoxData$Companion_getInstance().rectangleIntersectsSegment_gqu942$(xA, yA, xB, yB, -widthH, -heightH, widthH, heightH, intersectionPointA, intersectionPointB, normalRadians);
    return intersectionCount;
  };
  RectangleBoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectangleBoundingBoxData',
    interfaces: [BoundingBoxData]
  };
  function EllipseBoundingBoxData(pool) {
    EllipseBoundingBoxData$Companion_getInstance();
    BoundingBoxData.call(this, pool);
  }
  EllipseBoundingBoxData.prototype.toString = function () {
    return '[class dragonBones.EllipseData]';
  };
  function EllipseBoundingBoxData$Companion() {
    EllipseBoundingBoxData$Companion_instance = this;
  }
  EllipseBoundingBoxData$Companion.prototype.ellipseIntersectsSegment_gqu942$ = function (xA, yA, xB, yB, xC, yC, widthH, heightH, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var xA_0 = xA;
    var xB_0 = xB;
    var yA_0 = yA;
    var yB_0 = yB;
    var d = widthH / heightH;
    var dd = d * d;
    yA_0 *= d;
    yB_0 *= d;
    var dX = xB_0 - xA_0;
    var dY = yB_0 - yA_0;
    var x = dX * dX + dY * dY;
    var lAB = Math_0.sqrt(x);
    var xD = dX / lAB;
    var yD = dY / lAB;
    var a = (xC - xA_0) * xD + (yC - yA_0) * yD;
    var aa = a * a;
    var ee = xA_0 * xA_0 + yA_0 * yA_0;
    var rr = widthH * widthH;
    var dR = rr - ee + aa;
    var intersectionCount = 0;
    if (dR >= 0.0) {
      var dT = Math_0.sqrt(dR);
      var sA = a - dT;
      var sB = a + dT;
      var inSideA = sA < 0.0 ? -1 : sA <= lAB ? 0 : 1;
      var inSideB = sB < 0.0 ? -1 : sB <= lAB ? 0 : 1;
      var sideAB = Kotlin.imul(inSideA, inSideB);
      if (sideAB < 0) {
        return -1;
      } else if (sideAB === 0) {
        if (inSideA === -1) {
          intersectionCount = 2;
          xB_0 = xA_0 + sB * xD;
          yB_0 = (yA_0 + sB * yD) / d;
          if (intersectionPointA != null) {
            intersectionPointA.x = xB_0;
            intersectionPointA.y = yB_0;
          }if (intersectionPointB != null) {
            intersectionPointB.x = xB_0;
            intersectionPointB.y = yB_0;
          }if (normalRadians != null) {
            var y = yB_0 / rr * dd;
            var x_0 = xB_0 / rr;
            normalRadians.x = Math_0.atan2(y, x_0);
            normalRadians.y = normalRadians.x + math.PI;
          }} else if (inSideB === 1) {
          intersectionCount = 1;
          xA_0 = xA_0 + sA * xD;
          yA_0 = (yA_0 + sA * yD) / d;
          if (intersectionPointA != null) {
            intersectionPointA.x = xA_0;
            intersectionPointA.y = yA_0;
          }if (intersectionPointB != null) {
            intersectionPointB.x = xA_0;
            intersectionPointB.y = yA_0;
          }if (normalRadians != null) {
            var y_0 = yA_0 / rr * dd;
            var x_1 = xA_0 / rr;
            normalRadians.x = Math_0.atan2(y_0, x_1);
            normalRadians.y = normalRadians.x + math.PI;
          }} else {
          intersectionCount = 3;
          if (intersectionPointA != null) {
            intersectionPointA.x = xA_0 + sA * xD;
            intersectionPointA.y = (yA_0 + sA * yD) / d;
            if (normalRadians != null) {
              var y_1 = intersectionPointA.y / rr * dd;
              var x_2 = intersectionPointA.x / rr;
              normalRadians.x = Math_0.atan2(y_1, x_2);
            }}if (intersectionPointB != null) {
            intersectionPointB.x = xA_0 + sB * xD;
            intersectionPointB.y = (yA_0 + sB * yD) / d;
            if (normalRadians != null) {
              var y_2 = intersectionPointB.y / rr * dd;
              var x_3 = intersectionPointB.x / rr;
              normalRadians.y = Math_0.atan2(y_2, x_3);
            }}}
      }}return intersectionCount;
  };
  EllipseBoundingBoxData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EllipseBoundingBoxData$Companion_instance = null;
  function EllipseBoundingBoxData$Companion_getInstance() {
    if (EllipseBoundingBoxData$Companion_instance === null) {
      new EllipseBoundingBoxData$Companion();
    }return EllipseBoundingBoxData$Companion_instance;
  }
  EllipseBoundingBoxData.prototype._onClear = function () {
    BoundingBoxData.prototype._onClear.call(this);
    this.type = BoundingBoxType$Ellipse_getInstance();
  };
  EllipseBoundingBoxData.prototype.containsPoint_lu1900$ = function (pX, pY) {
    var pY_0 = pY;
    var widthH = this.width * 0.5;
    if (pX >= -widthH && pX <= widthH) {
      var heightH = this.height * 0.5;
      if (pY_0 >= -heightH && pY_0 <= heightH) {
        pY_0 *= widthH / heightH;
        var x = pX * pX + pY_0 * pY_0;
        return Math_0.sqrt(x) <= widthH;
      }}return false;
  };
  EllipseBoundingBoxData.prototype.intersectsSegment_e4ky6u$$default = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    var intersectionCount = EllipseBoundingBoxData$Companion_getInstance().ellipseIntersectsSegment_gqu942$(xA, yA, xB, yB, 0.0, 0.0, this.width * 0.5, this.height * 0.5, intersectionPointA, intersectionPointB, normalRadians);
    return intersectionCount;
  };
  EllipseBoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EllipseBoundingBoxData',
    interfaces: [BoundingBoxData]
  };
  function PolygonBoundingBoxData(pool) {
    BoundingBoxData.call(this, pool);
    this.x = 0.0;
    this.y = 0.0;
    this.vertices = new Float64Array(0);
  }
  PolygonBoundingBoxData.prototype.toString = function () {
    return '[class dragonBones.PolygonBoundingBoxData]';
  };
  PolygonBoundingBoxData.prototype.polygonIntersectsSegment_aod4bv$ = function (xA, yA, xB, yB, vertices, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var xA_0 = xA;
    var yA_0 = yA;
    if (xA_0 === xB)
      xA_0 = xB + 1.0E-6;
    if (yA_0 === yB)
      yA_0 = yB + 1.0E-6;
    var count = vertices.length;
    var dXAB = xA_0 - xB;
    var dYAB = yA_0 - yB;
    var llAB = xA_0 * yB - yA_0 * xB;
    var intersectionCount = 0;
    var xC = vertices[count - 2 | 0];
    var yC = vertices[count - 1 | 0];
    var dMin = 0.0;
    var dMax = 0.0;
    var xMin = 0.0;
    var yMin = 0.0;
    var xMax = 0.0;
    var yMax = 0.0;
    for (var i = 0; i < count; i += 2) {
      var xD = vertices[i + 0 | 0];
      var yD = vertices[i + 1 | 0];
      if (xC === xD) {
        xC = xD + 1.0E-4;
      }if (yC === yD) {
        yC = yD + 1.0E-4;
      }var dXCD = xC - xD;
      var dYCD = yC - yD;
      var llCD = xC * yD - yC * xD;
      var ll = dXAB * dYCD - dYAB * dXCD;
      var x = (llAB * dXCD - dXAB * llCD) / ll;
      if ((x >= xC && x <= xD || (x >= xD && x <= xC)) && (dXAB === 0.0 || (x >= xA_0 && x <= xB) || (x >= xB && x <= xA_0))) {
        var y = (llAB * dYCD - dYAB * llCD) / ll;
        if ((y >= yC && y <= yD || (y >= yD && y <= yC)) && (dYAB === 0.0 || (y >= yA_0 && y <= yB) || (y >= yB && y <= yA_0))) {
          if (intersectionPointB != null) {
            var d = x - xA_0;
            if (d < 0.0) {
              d = -d;
            }if (intersectionCount === 0) {
              dMin = d;
              dMax = d;
              xMin = x;
              yMin = y;
              xMax = x;
              yMax = y;
              if (normalRadians != null) {
                var y_0 = yD - yC;
                var x_0 = xD - xC;
                normalRadians.x = Math_0.atan2(y_0, x_0) - math.PI * 0.5;
                normalRadians.y = normalRadians.x;
              }} else {
              if (d < dMin) {
                dMin = d;
                xMin = x;
                yMin = y;
                if (normalRadians != null) {
                  var y_1 = yD - yC;
                  var x_1 = xD - xC;
                  normalRadians.x = Math_0.atan2(y_1, x_1) - math.PI * 0.5;
                }}if (d > dMax) {
                dMax = d;
                xMax = x;
                yMax = y;
                if (normalRadians != null) {
                  var y_2 = yD - yC;
                  var x_2 = xD - xC;
                  normalRadians.y = Math_0.atan2(y_2, x_2) - math.PI * 0.5;
                }}}
            intersectionCount = intersectionCount + 1 | 0;
          } else {
            xMin = x;
            yMin = y;
            xMax = x;
            yMax = y;
            intersectionCount = intersectionCount + 1 | 0;
            if (normalRadians != null) {
              var y_3 = yD - yC;
              var x_3 = xD - xC;
              normalRadians.x = Math_0.atan2(y_3, x_3) - math.PI * 0.5;
              normalRadians.y = normalRadians.x;
            }break;
          }
        }}xC = xD;
      yC = yD;
    }
    if (intersectionCount === 1) {
      if (intersectionPointA != null) {
        intersectionPointA.x = xMin;
        intersectionPointA.y = yMin;
      }if (intersectionPointB != null) {
        intersectionPointB.x = xMin;
        intersectionPointB.y = yMin;
      }if (normalRadians != null) {
        normalRadians.y = normalRadians.x + math.PI;
      }} else if (intersectionCount > 1) {
      intersectionCount = intersectionCount + 1 | 0;
      if (intersectionPointA != null) {
        intersectionPointA.x = xMin;
        intersectionPointA.y = yMin;
      }if (intersectionPointB != null) {
        intersectionPointB.x = xMax;
        intersectionPointB.y = yMax;
      }}return intersectionCount;
  };
  PolygonBoundingBoxData.prototype._onClear = function () {
    BoundingBoxData.prototype._onClear.call(this);
    this.type = BoundingBoxType$Polygon_getInstance();
    this.x = 0.0;
    this.y = 0.0;
    this.vertices = new Float64Array(0);
  };
  PolygonBoundingBoxData.prototype.containsPoint_lu1900$ = function (pX, pY) {
    var tmp$;
    var isInSide = false;
    if (pX >= this.x && pX <= this.width && pY >= this.y && pY <= this.height) {
      var iP = this.vertices.length - 2 | 0;
      tmp$ = this.vertices.length;
      for (var i = 0; i < tmp$; i += 2) {
        var yA = this.vertices[iP + 1 | 0];
        var yB = this.vertices[i + 1 | 0];
        if (yB < pY && yA >= pY || (yA < pY && yB >= pY)) {
          var xA = this.vertices[iP];
          var xB = this.vertices[i];
          if ((pY - yB) * (xA - xB) / (yA - yB) + xB < pX) {
            isInSide = !isInSide;
          }}iP = i;
      }
    }return isInSide;
  };
  PolygonBoundingBoxData.prototype.intersectsSegment_e4ky6u$$default = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    var intersectionCount = 0;
    if (RectangleBoundingBoxData$Companion_getInstance().rectangleIntersectsSegment_gqu942$(xA, yA, xB, yB, this.x, this.y, this.x + this.width, this.y + this.height, null, null, null) !== 0) {
      intersectionCount = this.polygonIntersectsSegment_aod4bv$(xA, yA, xB, yB, this.vertices, intersectionPointA, intersectionPointB, normalRadians);
    }return intersectionCount;
  };
  PolygonBoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolygonBoundingBoxData',
    interfaces: [BoundingBoxData]
  };
  function CanvasData(pool) {
    BaseObject.call(this, pool);
    this.hasBackground = false;
    this.color = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
  CanvasData.prototype.toString = function () {
    return '[class dragonBones.CanvasData]';
  };
  CanvasData.prototype._onClear = function () {
    this.hasBackground = false;
    this.color = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  CanvasData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasData',
    interfaces: [BaseObject]
  };
  function ConstraintData(pool) {
    BaseObject.call(this, pool);
    this.order = 0;
    this.name = '';
    this.type = ConstraintType$IK_getInstance();
    this.target = null;
    this.root = null;
    this.bone = null;
  }
  ConstraintData.prototype._onClear = function () {
    this.order = 0;
    this.name = '';
    this.type = ConstraintType$IK_getInstance();
    this.target = null;
    this.root = null;
    this.bone = null;
  };
  ConstraintData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstraintData',
    interfaces: [BaseObject]
  };
  function IKConstraintData(pool) {
    ConstraintData.call(this, pool);
    this.scaleEnabled = false;
    this.bendPositive = false;
    this.weight = 1.0;
  }
  IKConstraintData.prototype.toString = function () {
    return '[class dragonBones.IKConstraintData]';
  };
  IKConstraintData.prototype._onClear = function () {
    ConstraintData.prototype._onClear.call(this);
    this.scaleEnabled = false;
    this.bendPositive = false;
    this.weight = 1.0;
  };
  IKConstraintData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IKConstraintData',
    interfaces: [ConstraintData]
  };
  function PathConstraintData(pool) {
    ConstraintData.call(this, pool);
    this.pathSlot = null;
    this.pathDisplayData = null;
    this.bones = ArrayList_init();
    this.positionMode = PositionMode$Fixed_getInstance();
    this.spacingMode = SpacingMode$Fixed_getInstance();
    this.rotateMode = RotateMode$Chain_getInstance();
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 0.0;
    this.translateMix = 0.0;
  }
  PathConstraintData.prototype.toString = function () {
    return '[class dragonBones.PathConstraintData]';
  };
  PathConstraintData.prototype._onClear = function () {
    ConstraintData.prototype._onClear.call(this);
    this.pathSlot = null;
    this.pathDisplayData = null;
    set_lengthSet_1(this.bones, 0);
    this.positionMode = PositionMode$Fixed_getInstance();
    this.spacingMode = SpacingMode$Fixed_getInstance();
    this.rotateMode = RotateMode$Chain_getInstance();
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 0.0;
    this.translateMix = 0.0;
  };
  PathConstraintData.prototype.AddBone_ejz9f2$ = function (value) {
    push(this.bones, value);
  };
  PathConstraintData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathConstraintData',
    interfaces: [ConstraintData]
  };
  function GeometryData() {
    this.isShared = false;
    this.inheritDeform = false;
    this.offset = 0;
    this.data = null;
    this.weight = null;
  }
  GeometryData.prototype.clear = function () {
    var tmp$;
    if (!this.isShared && this.weight != null) {
      (tmp$ = this.weight) != null ? (tmp$.returnToPool(), Unit) : null;
    }this.isShared = false;
    this.inheritDeform = false;
    this.offset = 0;
    this.data = null;
    this.weight = null;
  };
  GeometryData.prototype.shareFrom_xkji8$ = function (value) {
    this.isShared = true;
    this.offset = value.offset;
    this.weight = value.weight;
  };
  Object.defineProperty(GeometryData.prototype, 'vertexCount', {
    get: function () {
      var intArray = ensureNotNull(this.data).intArray;
      return ensureNotNull(intArray)[this.offset + 0 | 0];
    }
  });
  Object.defineProperty(GeometryData.prototype, 'triangleCount', {
    get: function () {
      var intArray = ensureNotNull(this.data).intArray;
      return ensureNotNull(intArray)[this.offset + 1 | 0];
    }
  });
  GeometryData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeometryData',
    interfaces: []
  };
  function DisplayData(pool) {
    BaseObject.call(this, pool);
    this.type = DisplayType$None_getInstance();
    this.name = '';
    this.path = '';
    this.transform = new Transform();
    this.parent_f23t2i$_0 = this.parent_f23t2i$_0;
  }
  Object.defineProperty(DisplayData.prototype, 'parent', {
    get: function () {
      if (this.parent_f23t2i$_0 == null)
        return throwUPAE('parent');
      return this.parent_f23t2i$_0;
    },
    set: function (parent) {
      this.parent_f23t2i$_0 = parent;
    }
  });
  DisplayData.prototype._onClear = function () {
    this.name = '';
    this.path = '';
    this.transform.identity();
  };
  DisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayData',
    interfaces: [BaseObject]
  };
  function GeometryDisplayData(pool) {
    DisplayData.call(this, pool);
    this.geometry = new GeometryData();
  }
  GeometryDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeometryDisplayData',
    interfaces: [DisplayData]
  };
  function ImageDisplayData(pool) {
    DisplayData.call(this, pool);
    this.pivot = new Point();
    this.texture = null;
  }
  ImageDisplayData.prototype.toString = function () {
    return '[class dragonBones.ImageDisplayData]';
  };
  ImageDisplayData.prototype._onClear = function () {
    DisplayData.prototype._onClear.call(this);
    this.type = DisplayType$Image_getInstance();
    this.pivot.clear();
    this.texture = null;
  };
  ImageDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageDisplayData',
    interfaces: [DisplayData]
  };
  function ArmatureDisplayData(pool) {
    DisplayData.call(this, pool);
    this.inheritAnimation = false;
    this.actions = ArrayList_init();
    this.armature = null;
  }
  ArmatureDisplayData.prototype.toString = function () {
    return '[class dragonBones.ArmatureDisplayData]';
  };
  ArmatureDisplayData.prototype._onClear = function () {
    DisplayData.prototype._onClear.call(this);
    var $receiver = this.actions;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).returnToPool();
    }
    this.type = DisplayType$Armature_getInstance();
    this.inheritAnimation = false;
    set_length_1(this.actions, 0);
    this.armature = null;
  };
  ArmatureDisplayData.prototype.addAction_je7dvg$ = function (value) {
    push(this.actions, value);
  };
  ArmatureDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmatureDisplayData',
    interfaces: [DisplayData]
  };
  function MeshDisplayData(pool) {
    GeometryDisplayData.call(this, pool);
    this.texture = null;
  }
  MeshDisplayData.prototype.toString = function () {
    return '[class dragonBones.MeshDisplayData]';
  };
  MeshDisplayData.prototype._onClear = function () {
    GeometryDisplayData.prototype._onClear.call(this);
    this.type = DisplayType$Mesh_getInstance();
    this.geometry.clear();
    this.texture = null;
  };
  MeshDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeshDisplayData',
    interfaces: [GeometryDisplayData]
  };
  function BoundingBoxDisplayData(pool) {
    DisplayData.call(this, pool);
    this.boundingBox = null;
  }
  BoundingBoxDisplayData.prototype.toString = function () {
    return '[class dragonBones.BoundingBoxDisplayData]';
  };
  BoundingBoxDisplayData.prototype._onClear = function () {
    var tmp$;
    DisplayData.prototype._onClear.call(this);
    if (this.boundingBox != null) {
      (tmp$ = this.boundingBox) != null ? (tmp$.returnToPool(), Unit) : null;
    }this.type = DisplayType$BoundingBox_getInstance();
    this.boundingBox = null;
  };
  BoundingBoxDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundingBoxDisplayData',
    interfaces: [DisplayData]
  };
  function PathDisplayData(pool) {
    GeometryDisplayData.call(this, pool);
    this.closed = false;
    this.constantSpeed = false;
    this.curveLengths = new Float64Array(0);
  }
  PathDisplayData.prototype.toString = function () {
    return '[class dragonBones.PathDisplayData]';
  };
  PathDisplayData.prototype._onClear = function () {
    GeometryDisplayData.prototype._onClear.call(this);
    this.type = DisplayType$Path_getInstance();
    this.closed = false;
    this.constantSpeed = false;
    this.geometry.clear();
    this.curveLengths = new Float64Array(0);
  };
  PathDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathDisplayData',
    interfaces: [GeometryDisplayData]
  };
  function WeightData(pool) {
    BaseObject.call(this, pool);
    this.count = 0;
    this.offset = 0;
    this.bones = ArrayList_init();
  }
  WeightData.prototype.toString = function () {
    return '[class dragonBones.WeightData]';
  };
  WeightData.prototype._onClear = function () {
    this.count = 0;
    this.offset = 0;
    set_lengthSet_1(this.bones, 0);
  };
  WeightData.prototype.addBone_ejz9f2$ = function (value) {
    push(this.bones, value);
  };
  WeightData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeightData',
    interfaces: [BaseObject]
  };
  function DragonBonesData(pool) {
    BaseObject.call(this, pool);
    this.autoSearch = false;
    this.frameRate = 0;
    this.version = '';
    this.name = '';
    this.stage = null;
    this.frameIndices = new IntArrayList();
    this.cachedFrames = new DoubleArrayList();
    this.armatureNames = ArrayList_init();
    this.armatures = FastStringMap();
    this.binary = null;
    this.intArray = null;
    this.floatArray = null;
    this.frameIntArray = null;
    this.frameFloatArray = null;
    this.frameArray = null;
    this.timelineArray = null;
    this.colorArray = null;
    this.userData = null;
  }
  DragonBonesData.prototype.toString = function () {
    return '[class dragonBones.DragonBonesData]';
  };
  DragonBonesData.prototype._onClear = function () {
    var tmp$;
    var $receiver = this.armatures;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      ensureNotNull($receiver.get(v.value)).returnToPool();
    }
    this.armatures.clear();
    (tmp$ = this.userData) != null ? (tmp$.returnToPool(), Unit) : null;
    this.autoSearch = false;
    this.frameRate = 0;
    this.version = '';
    this.name = '';
    this.stage = null;
    this.frameIndices.clear();
    this.cachedFrames.clear();
    this.armatureNames.clear();
    this.binary = null;
    this.intArray = null;
    this.floatArray = null;
    this.frameIntArray = null;
    this.frameFloatArray = null;
    this.frameArray = null;
    this.timelineArray = null;
    this.colorArray = null;
    this.userData = null;
  };
  DragonBonesData.prototype.addArmature_ecf29l$ = function (value) {
    var $receiver = this.armatures;
    var key = value.name;
    if ($receiver.has(key)) {
      console_getInstance().warn_vqirvp$(['Same armature: ' + value.name]);
      return;
    }value.parent = this;
    var $receiver_0 = this.armatures;
    var key_0 = value.name;
    $receiver_0.set(key_0, value);
    this.armatureNames.add_11rb$(value.name);
  };
  DragonBonesData.prototype.getArmature_61zpoe$ = function (armatureName) {
    return this.armatures.has(armatureName) ? this.armatures.get(armatureName) : null;
  };
  DragonBonesData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragonBonesData',
    interfaces: [BaseObject]
  };
  function SkinData(pool) {
    BaseObject.call(this, pool);
    this.name = '';
    this.displays = FastStringMap();
    this.parent = null;
  }
  SkinData.prototype.toString = function () {
    return '[class dragonBones.SkinData]';
  };
  SkinData.prototype._onClear = function () {
    var $receiver = this.displays;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var slotDisplays = ensureNotNull($receiver.get(v.value));
      var tmp$;
      var n = 0;
      while (n < slotDisplays.size) {
        var display = slotDisplays.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
        if (display != null) {
          display.returnToPool();
        }}
    }
    this.displays.clear();
    this.name = '';
  };
  SkinData.prototype.addDisplay_j2ttk5$ = function (slotName, value) {
    if (!this.displays.has(slotName)) {
      var tmp$ = this.displays;
      var value_0 = ArrayList_init();
      tmp$.set(slotName, value_0);
    }if (value != null) {
      value.parent = this;
    }var slotDisplays = this.displays.get(slotName);
    slotDisplays != null ? slotDisplays.add_11rb$(value) : null;
  };
  SkinData.prototype.getDisplay_puj7f4$ = function (slotName, displayName) {
    var tmp$;
    if ((tmp$ = this.getDisplays_pdl1vj$(slotName)) != null) {
      var tmp$_0;
      var n = 0;
      while (n < tmp$.size) {
        var display = tmp$.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        if (display != null && equals(display.name, displayName)) {
          return display;
        }}
    }return null;
  };
  SkinData.prototype.getDisplays_pdl1vj$ = function (slotName) {
    var $receiver = this.displays;
    return slotName == null ? null : $receiver.get(slotName);
  };
  SkinData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkinData',
    interfaces: [BaseObject]
  };
  function TextureAtlasData(pool) {
    BaseObject.call(this, pool);
    this.autoSearch = false;
    this.width = 0;
    this.height = 0;
    this.scale = 1.0;
    this.name = '';
    this.imagePath = '';
    this.textures = FastStringMap();
  }
  TextureAtlasData.prototype._onClear = function () {
    var $receiver = this.textures;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      ensureNotNull($receiver.get(v.value)).returnToPool();
    }
    this.textures.clear();
    this.autoSearch = false;
    this.width = 0;
    this.height = 0;
    this.scale = 1.0;
    this.name = '';
    this.imagePath = '';
  };
  TextureAtlasData.prototype.copyFrom_igjpxe$ = function (value) {
    this.autoSearch = value.autoSearch;
    this.scale = value.scale;
    this.width = value.width;
    this.height = value.height;
    this.name = value.name;
    this.imagePath = value.imagePath;
    var $receiver = this.textures;
    var mapIterator = $receiver.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      ensureNotNull($receiver.get(v.value)).returnToPool();
    }
    this.textures.clear();
    var mapIterator_0 = value.textures.keys();
    while (true) {
      var v_0 = mapIterator_0.next();
      if (v_0.done)
        break;
      var k = v_0.value;
      var texture = this.createTexture();
      texture.copyFrom_w2prfj$(ensureNotNull(value.textures.get(k)));
      this.textures.set(k, texture);
    }
  };
  TextureAtlasData.prototype.addTexture_w2prfj$ = function (value) {
    var $receiver = this.textures;
    var key = value.name;
    if ($receiver.has(key)) {
      console_getInstance().warn_vqirvp$(['Same texture: ' + value.name]);
      return;
    }value.parent = this;
    var $receiver_0 = this.textures;
    var key_0 = value.name;
    $receiver_0.set(key_0, value);
  };
  TextureAtlasData.prototype.getTexture_61zpoe$ = function (textureName) {
    return this.textures.has(textureName) ? this.textures.get(textureName) : null;
  };
  TextureAtlasData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureAtlasData',
    interfaces: [BaseObject]
  };
  function TextureData(pool) {
    TextureData$Companion_getInstance();
    BaseObject.call(this, pool);
    this.rotated = false;
    this.name = '';
    this.region = new Rectangle_0();
    this.parent = null;
    this.frame = null;
  }
  function TextureData$Companion() {
    TextureData$Companion_instance = this;
  }
  TextureData$Companion.prototype.createRectangle = function () {
    return new Rectangle_0();
  };
  TextureData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextureData$Companion_instance = null;
  function TextureData$Companion_getInstance() {
    if (TextureData$Companion_instance === null) {
      new TextureData$Companion();
    }return TextureData$Companion_instance;
  }
  TextureData.prototype._onClear = function () {
    this.rotated = false;
    this.name = '';
    this.region.clear();
    this.parent = null;
    this.frame = null;
  };
  TextureData.prototype.copyFrom_w2prfj$ = function (value) {
    this.rotated = value.rotated;
    this.name = value.name;
    this.region.copyFrom_r7la90$(value.region);
    this.parent = value.parent;
    if (this.frame == null && value.frame != null) {
      this.frame = TextureData$Companion_getInstance().createRectangle();
    } else if (this.frame != null && value.frame == null) {
      this.frame = null;
    }if (this.frame != null && value.frame != null) {
      ensureNotNull(this.frame).copyFrom_r7la90$(ensureNotNull(value.frame));
    }};
  TextureData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureData',
    interfaces: [BaseObject]
  };
  function UserData(pool) {
    BaseObject.call(this, pool);
    this.ints = new IntArrayList();
    this.floats = new DoubleArrayList();
    this.strings = ArrayList_init();
  }
  UserData.prototype.toString = function () {
    return '[class dragonBones.UserData]';
  };
  UserData.prototype._onClear = function () {
    this.ints.clear();
    this.floats.clear();
    this.strings.clear();
  };
  UserData.prototype.addInt_za3lpa$ = function (value) {
    push_1(this.ints, value);
  };
  UserData.prototype.addFloat_14dthe$ = function (value) {
    push_0(this.floats, value);
  };
  UserData.prototype.addString_61zpoe$ = function (value) {
    push(this.strings, value);
  };
  UserData.prototype.getInt_za3lpa$ = function (index) {
    if (index === void 0)
      index = 0;
    return index >= 0 && index < get_length(this.ints) ? this.ints.get_za3lpa$(index) : 0;
  };
  UserData.prototype.getFloat_za3lpa$ = function (index) {
    if (index === void 0)
      index = 0;
    return index >= 0 && index < get_length_0(this.floats) ? this.floats.get_za3lpa$(index) : 0.0;
  };
  UserData.prototype.getString_za3lpa$ = function (index) {
    if (index === void 0)
      index = 0;
    return index >= 0 && index < get_length_1(this.strings) ? this.strings.get_za3lpa$(index) : '';
  };
  UserData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserData',
    interfaces: [BaseObject]
  };
  function ActionData(pool) {
    BaseObject.call(this, pool);
    this.type = ActionType$Play_getInstance();
    this.name = '';
    this.bone = null;
    this.slot = null;
    this.data = null;
  }
  ActionData.prototype.toString = function () {
    return '[class dragonBones.ActionData]';
  };
  ActionData.prototype._onClear = function () {
    var tmp$;
    (tmp$ = this.data) != null ? (tmp$.returnToPool(), Unit) : null;
    this.type = ActionType$Play_getInstance();
    this.name = '';
    this.bone = null;
    this.slot = null;
    this.data = null;
  };
  ActionData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionData',
    interfaces: [BaseObject]
  };
  function BinaryDataParser(pool) {
    if (pool === void 0)
      pool = new BaseObjectPool();
    ObjectDataParser.call(this, pool);
    this._binaryOffset_0 = 0;
    this._binary_44amlu$_0 = this._binary_44amlu$_0;
    this._intArrayBuffer_gfey05$_0 = this._intArrayBuffer_gfey05$_0;
    this._frameArrayBuffer_aat8gt$_0 = this._frameArrayBuffer_aat8gt$_0;
    this._timelineArrayBuffer_0 = new Uint16Buffer(sliceInt16Buffer(new ArrayBuffer_init(0 * 2 | 0)));
  }
  Object.defineProperty(BinaryDataParser.prototype, '_binary_0', {
    get: function () {
      if (this._binary_44amlu$_0 == null)
        return throwUPAE('_binary');
      return this._binary_44amlu$_0;
    },
    set: function (_binary) {
      this._binary_44amlu$_0 = _binary;
    }
  });
  Object.defineProperty(BinaryDataParser.prototype, '_intArrayBuffer_0', {
    get: function () {
      if (this._intArrayBuffer_gfey05$_0 == null)
        return throwUPAE('_intArrayBuffer');
      return this._intArrayBuffer_gfey05$_0;
    },
    set: function (_intArrayBuffer) {
      this._intArrayBuffer_gfey05$_0 = _intArrayBuffer;
    }
  });
  Object.defineProperty(BinaryDataParser.prototype, '_frameArrayBuffer_0', {
    get: function () {
      if (this._frameArrayBuffer_aat8gt$_0 == null)
        return throwUPAE('_frameArrayBuffer');
      return this._frameArrayBuffer_aat8gt$_0;
    },
    set: function (_frameArrayBuffer) {
      this._frameArrayBuffer_aat8gt$_0 = _frameArrayBuffer;
    }
  });
  BinaryDataParser.prototype._inRange_0 = function (a, min, max) {
    return min <= a && a <= max;
  };
  BinaryDataParser.prototype._decodeUTF8_0 = function (data) {
    var tmp$;
    var EOF_byte = -1;
    var EOF_code_point = -1;
    var FATAL_POINT = 65533;
    var pos = 0;
    var result = '';
    var code_point;
    var utf8_code_point = 0;
    var utf8_bytes_needed = 0;
    var utf8_bytes_seen = 0;
    var utf8_lower_boundary = 0;
    while (data.size > pos) {
      var _byte = data.get_za3lpa$((tmp$ = pos, pos = tmp$ + 1 | 0, tmp$));
      if (_byte === EOF_byte) {
        if (utf8_bytes_needed !== 0) {
          code_point = FATAL_POINT;
        } else {
          code_point = EOF_code_point;
        }
      } else {
        if (utf8_bytes_needed === 0) {
          if (this._inRange_0(_byte, 0, 127)) {
            code_point = _byte;
          } else {
            if (this._inRange_0(_byte, 194, 223)) {
              utf8_bytes_needed = 1;
              utf8_lower_boundary = 128;
              utf8_code_point = _byte - 192 | 0;
            } else if (this._inRange_0(_byte, 224, 239)) {
              utf8_bytes_needed = 2;
              utf8_lower_boundary = 2048;
              utf8_code_point = _byte - 224 | 0;
            } else if (this._inRange_0(_byte, 240, 244)) {
              utf8_bytes_needed = 3;
              utf8_lower_boundary = 65536;
              utf8_code_point = _byte - 240 | 0;
            }var tmp$_0 = utf8_code_point;
            var x = utf8_bytes_needed;
            utf8_code_point = numberToInt(tmp$_0 * Math_0.pow(64.0, x));
            code_point = null;
          }
        } else if (!this._inRange_0(_byte, 128, 191)) {
          utf8_code_point = 0;
          utf8_bytes_needed = 0;
          utf8_bytes_seen = 0;
          utf8_lower_boundary = 0;
          pos = pos - 1 | 0;
          code_point = _byte;
        } else {
          utf8_bytes_seen = utf8_bytes_seen + 1 | 0;
          var tmp$_1 = utf8_code_point;
          var tmp$_2 = _byte - 128 | 0;
          var x_0 = utf8_bytes_needed - utf8_bytes_seen | 0;
          utf8_code_point = tmp$_1 + numberToInt(tmp$_2 * Math_0.pow(64.0, x_0)) | 0;
          if (utf8_bytes_seen !== utf8_bytes_needed) {
            code_point = null;
          } else {
            var cp = utf8_code_point;
            var lower_boundary = utf8_lower_boundary;
            utf8_code_point = 0;
            utf8_bytes_needed = 0;
            utf8_bytes_seen = 0;
            utf8_lower_boundary = 0;
            if (this._inRange_0(cp, lower_boundary, 1114111) && !this._inRange_0(cp, 55296, 57343)) {
              code_point = cp;
            } else {
              code_point = _byte;
            }
          }
        }
      }
      if (code_point != null && code_point !== EOF_code_point) {
        if (code_point <= 65535) {
          if (code_point > 0)
            result += String.fromCharCode(toChar(code_point));
        } else {
          code_point = code_point - 65536 | 0;
          result += String.fromCharCode(toChar(55296 + (code_point >> 10 & 1023) | 0));
          result += String.fromCharCode(toChar(56320 + (code_point & 1023) | 0));
        }
      }}
    return result;
  };
  BinaryDataParser.prototype._parseBinaryTimeline_0 = function (type, offset, timelineData) {
    if (timelineData === void 0)
      timelineData = null;
    var timeline = timelineData != null ? timelineData : this.pool.timelineData.borrow();
    timeline.type = type;
    timeline.offset = offset;
    this._timeline = timeline;
    var keyFrameCount = this._timelineArrayBuffer_0.get_za3lpa$(timeline.offset + 2 | 0);
    if (keyFrameCount === 1) {
      timeline.frameIndicesOffset = -1;
    } else {
      var frameIndicesOffset = 0;
      var totalFrameCount = ensureNotNull(this._animation).frameCount + 1 | 0;
      var frameIndices = ensureNotNull(this._data).frameIndices;
      frameIndicesOffset = get_length(frameIndices);
      set_length(frameIndices, get_length(frameIndices) + totalFrameCount | 0);
      timeline.frameIndicesOffset = frameIndicesOffset;
      var iK = 0;
      var frameStart = 0;
      var frameCount = 0;
      for (var i = 0; i < totalFrameCount; i++) {
        if ((frameStart + frameCount | 0) <= i && iK < keyFrameCount) {
          frameStart = this._frameArrayBuffer_0[ensureNotNull(this._animation).frameOffset + this._timelineArrayBuffer_0.get_za3lpa$(timeline.offset + 5 + iK | 0) | 0];
          if (iK === (keyFrameCount - 1 | 0)) {
            frameCount = ensureNotNull(this._animation).frameCount - frameStart | 0;
          } else {
            frameCount = this._frameArrayBuffer_0[ensureNotNull(this._animation).frameOffset + this._timelineArrayBuffer_0.get_za3lpa$(timeline.offset + 5 + iK + 1 | 0) | 0] - frameStart;
          }
          iK = iK + 1 | 0;
        }frameIndices.set_vux9f0$(frameIndicesOffset + i | 0, iK - 1 | 0);
      }
    }
    this._timeline = null;
    return timeline;
  };
  BinaryDataParser.prototype._parseAnimation_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var animation = this.pool.animationData.borrow();
    animation.blendType = DataParser$Companion_getInstance()._getAnimationBlendType_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().BLEND_TYPE, ''));
    animation.frameCount = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().DURATION, 0);
    animation.playTimes = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().PLAY_TIMES, 1);
    animation.duration = animation.frameCount / ensureNotNull(this._armature).frameRate;
    animation.fadeInTime = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().FADE_IN_TIME, 0.0);
    animation.scale = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0);
    animation.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, DataParser$Companion_getInstance().DEFAULT_NAME);
    if (animation.name.length === 0) {
      animation.name = DataParser$Companion_getInstance().DEFAULT_NAME;
    }var offsets = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().OFFSET), IntArrayList) ? tmp$ : throwCCE();
    animation.frameIntOffset = offsets.get_za3lpa$(0);
    animation.frameFloatOffset = offsets.get_za3lpa$(1);
    animation.frameOffset = offsets.get_za3lpa$(2);
    this._animation = animation;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION) != null) {
      animation.actionTimeline = this._parseBinaryTimeline_0(TimelineType$Action_getInstance(), typeof (tmp$_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION)) === 'number' ? tmp$_0 : throwCCE());
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER) != null) {
      animation.zOrderTimeline = this._parseBinaryTimeline_0(TimelineType$ZOrder_getInstance(), typeof (tmp$_1 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER)) === 'number' ? tmp$_1 : throwCCE());
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE) != null) {
      var rawTimeliness = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE);
      var $receiver = ObjectDataParser$Companion_getInstance().get_dynKeys_ntq51o$(rawTimeliness);
      var tmp$_3;
      var n = 0;
      loop_label: while (n < $receiver.size) {
        var k = $receiver.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
        callback$break: do {
          var tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
          var rawTimelines = Kotlin.isType(tmp$_4 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawTimeliness, k), IntArrayList) ? tmp$_4 : throwCCE();
          tmp$_6 = (tmp$_5 = this._armature) != null ? tmp$_5.getBone_pdl1vj$(k) : null;
          if (tmp$_6 == null) {
            break callback$break;
          }var bone = tmp$_6;
          tmp$_7 = rawTimelines.size;
          for (var i = 0; i < tmp$_7; i += 2) {
            var timelineType = TimelineType$Companion_getInstance().get_za3lpa$(rawTimelines.get_za3lpa$(i));
            var timelineOffset = rawTimelines.get_za3lpa$(i + 1 | 0);
            var timeline = this._parseBinaryTimeline_0(timelineType, timelineOffset);
            (tmp$_8 = this._animation) != null ? (tmp$_8.addBoneTimeline_h179rx$(bone.name, timeline), Unit) : null;
          }
        }
         while (false);
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT) != null) {
      var rawTimeliness_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT);
      var $receiver_0 = ObjectDataParser$Companion_getInstance().get_dynKeys_ntq51o$(rawTimeliness_0);
      var tmp$_9;
      var n_0 = 0;
      loop_label: while (n_0 < $receiver_0.size) {
        var k_0 = $receiver_0.get_za3lpa$((tmp$_9 = n_0, n_0 = tmp$_9 + 1 | 0, tmp$_9));
        callback$break: do {
          var tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
          var rawTimelines_0 = Kotlin.isType(tmp$_10 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawTimeliness_0, k_0), IntArrayList) ? tmp$_10 : throwCCE();
          tmp$_12 = (tmp$_11 = this._armature) != null ? tmp$_11.getSlot_pdl1vj$(k_0) : null;
          if (tmp$_12 == null) {
            break callback$break;
          }var slot = tmp$_12;
          tmp$_13 = rawTimelines_0.size;
          for (var i_0 = 0; i_0 < tmp$_13; i_0 += 2) {
            var timelineType_0 = TimelineType$Companion_getInstance().get_za3lpa$(rawTimelines_0.get_za3lpa$(i_0));
            var timelineOffset_0 = rawTimelines_0.get_za3lpa$(i_0 + 1 | 0);
            var timeline_0 = this._parseBinaryTimeline_0(timelineType_0, timelineOffset_0);
            (tmp$_14 = this._animation) != null ? (tmp$_14.addSlotTimeline_h179rx$(slot.name, timeline_0), Unit) : null;
          }
        }
         while (false);
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().CONSTRAINT) != null) {
      var rawTimeliness_1 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().CONSTRAINT);
      var $receiver_1 = ObjectDataParser$Companion_getInstance().get_dynKeys_ntq51o$(rawTimeliness_1);
      var tmp$_15;
      var n_1 = 0;
      loop_label: while (n_1 < $receiver_1.size) {
        var k_1 = $receiver_1.get_za3lpa$((tmp$_15 = n_1, n_1 = tmp$_15 + 1 | 0, tmp$_15));
        callback$break: do {
          var tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20;
          var rawTimelines_1 = Kotlin.isType(tmp$_16 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawTimeliness_1, k_1), IntArrayList) ? tmp$_16 : throwCCE();
          tmp$_18 = (tmp$_17 = this._armature) != null ? tmp$_17.getConstraint_61zpoe$(k_1) : null;
          if (tmp$_18 == null) {
            break callback$break;
          }var constraint = tmp$_18;
          tmp$_19 = rawTimelines_1.size;
          for (var i_1 = 0; i_1 < tmp$_19; i_1 += 2) {
            var timelineType_1 = TimelineType$Companion_getInstance().get_za3lpa$(rawTimelines_1.get_za3lpa$(i_1));
            var timelineOffset_1 = rawTimelines_1.get_za3lpa$(i_1 + 1 | 0);
            var timeline_1 = this._parseBinaryTimeline_0(timelineType_1, timelineOffset_1);
            (tmp$_20 = this._animation) != null ? (tmp$_20.addConstraintTimeline_h179rx$(constraint.name, timeline_1), Unit) : null;
          }
        }
         while (false);
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE) != null) {
      var rawTimelines_2 = Kotlin.isType(tmp$_2 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE), ArrayList) ? tmp$_2 : throwCCE();
      var tmp$_21;
      var n_2 = 0;
      while (n_2 < rawTimelines_2.size) {
        var rawTimeline = rawTimelines_2.get_za3lpa$((tmp$_21 = n_2, n_2 = tmp$_21 + 1 | 0, tmp$_21));
        var tmp$_22, tmp$_23, tmp$_24, tmp$_25;
        var timelineOffset_2 = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawTimeline, DataParser$Companion_getInstance().OFFSET, 0);
        if (timelineOffset_2 >= 0) {
          var timelineType_2 = TimelineType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawTimeline, DataParser$Companion_getInstance().TYPE, TimelineType$Action_getInstance().id));
          var timelineName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline, DataParser$Companion_getInstance().NAME, '');
          var timeline_2 = null;
          if (timelineType_2 === TimelineType$AnimationProgress_getInstance() && animation.blendType !== AnimationBlendType$None_getInstance()) {
            timeline_2 = this.pool.animationTimelineData.borrow();
            var animaitonTimeline = timeline_2;
            animaitonTimeline.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline, DataParser$Companion_getInstance().X, 0.0);
            animaitonTimeline.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline, DataParser$Companion_getInstance().Y, 0.0);
          }timeline_2 = this._parseBinaryTimeline_0(timelineType_2, timelineOffset_2, timeline_2);
          switch (timelineType_2.name) {
            case 'Action':
              break;
            case 'ZOrder':
              break;
            case 'BoneTranslate':
            case 'BoneRotate':
            case 'BoneScale':
            case 'Surface':
            case 'BoneAlpha':
              (tmp$_22 = this._animation) != null ? (tmp$_22.addBoneTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
            case 'SlotDisplay':
            case 'SlotColor':
            case 'SlotDeform':
            case 'SlotZIndex':
            case 'SlotAlpha':
              (tmp$_23 = this._animation) != null ? (tmp$_23.addSlotTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
            case 'IKConstraint':
              (tmp$_24 = this._animation) != null ? (tmp$_24.addConstraintTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
            case 'AnimationProgress':
            case 'AnimationWeight':
            case 'AnimationParameter':
              (tmp$_25 = this._animation) != null ? (tmp$_25.addAnimationTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
          }
        }}
    }this._animation = null;
    return animation;
  };
  BinaryDataParser.prototype._parseGeometry_9lxtbg$ = function (rawData, geometry) {
    var tmp$, tmp$_0;
    geometry.offset = typeof (tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().OFFSET)) === 'number' ? tmp$ : throwCCE();
    geometry.data = this._data;
    var weightOffset = this._intArrayBuffer_0[geometry.offset + 3 | 0];
    if (weightOffset >= 0) {
      var weight = this.pool.weightData.borrow();
      var vertexCount = this._intArrayBuffer_0[geometry.offset + 0 | 0];
      var boneCount = this._intArrayBuffer_0[weightOffset + 0 | 0];
      weight.offset = weightOffset;
      for (var i = 0; i < boneCount; i++) {
        var boneIndex = this._intArrayBuffer_0[weightOffset + 2 + i | 0];
        weight.addBone_ejz9f2$(this._rawBones.get_za3lpa$(boneIndex));
      }
      var boneIndicesOffset = (weightOffset + 2 | 0) + boneCount;
      var weightCount = 0;
      for (var i_0 = 0; i_0 < vertexCount; i_0++) {
        var vertexBoneCount = this._intArrayBuffer_0[tmp$_0 = boneIndicesOffset, boneIndicesOffset = tmp$_0 + 1 | 0, tmp$_0];
        weightCount = weightCount + vertexBoneCount;
        boneIndicesOffset = boneIndicesOffset + vertexBoneCount;
      }
      weight.count = weightCount;
      geometry.weight = weight;
    }};
  BinaryDataParser.prototype._parseArray_s8jyv4$ = function (rawData) {
    var tmp$;
    var offsets = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().OFFSET), IntArrayList) ? tmp$ : throwCCE();
    var l1 = offsets.get_za3lpa$(1);
    var l2 = offsets.get_za3lpa$(3);
    var l3 = offsets.get_za3lpa$(5);
    var l4 = offsets.get_za3lpa$(7);
    var l5 = offsets.get_za3lpa$(9);
    var l6 = offsets.get_za3lpa$(11);
    var l7 = offsets.size > 12 ? offsets.get_za3lpa$(13) : 0;
    var binary = this._binary_0;
    var intArray = sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(0) | 0, l1 / 2 | 0);
    var floatArray = sliceFloat32Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(2) | 0, l2 / 4 | 0);
    var frameIntArray = sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(4) | 0, l3 / 2 | 0);
    var frameFloatArray = sliceFloat32Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(6) | 0, l4 / 4 | 0);
    var frameArray = sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(8) | 0, l5 / 2 | 0);
    var timelineArray = sliceUint16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(10) | 0, l6 / 2 | 0);
    var colorArray = l7 > 0 ? sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(12) | 0, l7 / 2 | 0) : intArray;
    ensureNotNull(this._data).binary = this._binary_0;
    ensureNotNull(this._data).intArray = intArray;
    this._intArrayBuffer_0 = intArray;
    ensureNotNull(this._data).floatArray = floatArray;
    ensureNotNull(this._data).frameIntArray = toFloat(frameIntArray);
    ensureNotNull(this._data).frameFloatArray = frameFloatArray;
    ensureNotNull(this._data).frameArray = frameArray;
    this._frameArrayBuffer_0 = frameArray;
    ensureNotNull(this._data).timelineArray = timelineArray;
    this._timelineArrayBuffer_0 = timelineArray;
    ensureNotNull(this._data).colorArray = colorArray;
  };
  BinaryDataParser.prototype.parseDragonBonesData_p20sj2$$default = function (rawData, scale) {
    var tmp$;
    var tag = NewUint8Buffer(Kotlin.isType(tmp$ = rawData, ArrayBuffer) ? tmp$ : throwCCE(), 0, 8);
    if (tag.get_za3lpa$(0) !== 68 || tag.get_za3lpa$(1) !== 66 || tag.get_za3lpa$(2) !== 68 || tag.get_za3lpa$(3) !== 84) {
      console_getInstance().assert_8kj6y5$(false, 'Nonsupport data.');
      return null;
    }var headerLength = NewInt32Buffer(rawData, 8, 1)[0];
    var headerBytes = NewUint8Buffer(rawData, 12, headerLength);
    var headerString = this._decodeUTF8_0(headerBytes);
    var header = json.Json.parse_61zpoe$(headerString);
    this._binaryOffset_0 = 12 + headerLength | 0;
    this._binary_0 = rawData;
    return this.parseDragonBonesData_p20sj2$(header, scale, ObjectDataParser.prototype.parseDragonBonesData_p20sj2$$default.bind(this));
  };
  BinaryDataParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryDataParser',
    interfaces: [ObjectDataParser]
  };
  function DataParser(pool) {
    DataParser$Companion_getInstance();
    this.pool = pool;
  }
  function DataParser$Companion() {
    DataParser$Companion_instance = this;
    this.DATA_VERSION_2_3 = '2.3';
    this.DATA_VERSION_3_0 = '3.0';
    this.DATA_VERSION_4_0 = '4.0';
    this.DATA_VERSION_4_5 = '4.5';
    this.DATA_VERSION_5_0 = '5.0';
    this.DATA_VERSION_5_5 = '5.5';
    this.DATA_VERSION_5_6 = '5.6';
    this.DATA_VERSION = DataParser$Companion_getInstance().DATA_VERSION_5_6;
    this.DATA_VERSIONS = [DataParser$Companion_getInstance().DATA_VERSION_4_0, DataParser$Companion_getInstance().DATA_VERSION_4_5, DataParser$Companion_getInstance().DATA_VERSION_5_0, DataParser$Companion_getInstance().DATA_VERSION_5_5, DataParser$Companion_getInstance().DATA_VERSION_5_6];
    this.TEXTURE_ATLAS = 'textureAtlas';
    this.SUB_TEXTURE = 'SubTexture';
    this.FORMAT = 'format';
    this.IMAGE_PATH = 'imagePath';
    this.WIDTH = 'width';
    this.HEIGHT = 'height';
    this.ROTATED = 'rotated';
    this.FRAME_X = 'frameX';
    this.FRAME_Y = 'frameY';
    this.FRAME_WIDTH = 'frameWidth';
    this.FRAME_HEIGHT = 'frameHeight';
    this.DRADON_BONES = 'dragonBones';
    this.USER_DATA = 'userData';
    this.ARMATURE = 'armature';
    this.CANVAS = 'canvas';
    this.BONE = 'bone';
    this.SURFACE = 'surface';
    this.SLOT = 'slot';
    this.CONSTRAINT = 'constraint';
    this.SKIN = 'skin';
    this.DISPLAY = 'display';
    this.FRAME = 'frame';
    this.IK = 'ik';
    this.PATH_CONSTRAINT = 'path';
    this.ANIMATION = 'animation';
    this.TIMELINE = 'timeline';
    this.FFD = 'ffd';
    this.TRANSLATE_FRAME = 'translateFrame';
    this.ROTATE_FRAME = 'rotateFrame';
    this.SCALE_FRAME = 'scaleFrame';
    this.DISPLAY_FRAME = 'displayFrame';
    this.COLOR_FRAME = 'colorFrame';
    this.DEFAULT_ACTIONS = 'defaultActions';
    this.ACTIONS = 'actions';
    this.EVENTS = 'events';
    this.INTS = 'ints';
    this.FLOATS = 'floats';
    this.STRINGS = 'strings';
    this.TRANSFORM = 'transform';
    this.PIVOT = 'pivot';
    this.AABB = 'aabb';
    this.COLOR = 'color';
    this.VERSION = 'version';
    this.COMPATIBLE_VERSION = 'compatibleVersion';
    this.FRAME_RATE = 'frameRate';
    this.TYPE = 'type';
    this.SUB_TYPE = 'subType';
    this.NAME = 'name';
    this.PARENT = 'parent';
    this.TARGET = 'target';
    this.STAGE = 'stage';
    this.SHARE = 'share';
    this.PATH = 'path';
    this.LENGTH = 'length';
    this.DISPLAY_INDEX = 'displayIndex';
    this.Z_ORDER = 'zOrder';
    this.Z_INDEX = 'zIndex';
    this.BLEND_MODE = 'blendMode';
    this.INHERIT_TRANSLATION = 'inheritTranslation';
    this.INHERIT_ROTATION = 'inheritRotation';
    this.INHERIT_SCALE = 'inheritScale';
    this.INHERIT_REFLECTION = 'inheritReflection';
    this.INHERIT_ANIMATION = 'inheritAnimation';
    this.INHERIT_DEFORM = 'inheritDeform';
    this.SEGMENT_X = 'segmentX';
    this.SEGMENT_Y = 'segmentY';
    this.BEND_POSITIVE = 'bendPositive';
    this.CHAIN = 'chain';
    this.WEIGHT = 'weight';
    this.BLEND_TYPE = 'blendType';
    this.FADE_IN_TIME = 'fadeInTime';
    this.PLAY_TIMES = 'playTimes';
    this.SCALE = 'scale';
    this.OFFSET = 'offset';
    this.POSITION = 'position';
    this.DURATION = 'duration';
    this.TWEEN_EASING = 'tweenEasing';
    this.TWEEN_ROTATE = 'tweenRotate';
    this.TWEEN_SCALE = 'tweenScale';
    this.CLOCK_WISE = 'clockwise';
    this.CURVE = 'curve';
    this.SOUND = 'sound';
    this.EVENT = 'event';
    this.ACTION = 'action';
    this.X = 'x';
    this.Y = 'y';
    this.SKEW_X = 'skX';
    this.SKEW_Y = 'skY';
    this.SCALE_X = 'scX';
    this.SCALE_Y = 'scY';
    this.VALUE = 'value';
    this.ROTATE = 'rotate';
    this.SKEW = 'skew';
    this.ALPHA = 'alpha';
    this.ALPHA_OFFSET = 'aO';
    this.RED_OFFSET = 'rO';
    this.GREEN_OFFSET = 'gO';
    this.BLUE_OFFSET = 'bO';
    this.ALPHA_MULTIPLIER = 'aM';
    this.RED_MULTIPLIER = 'rM';
    this.GREEN_MULTIPLIER = 'gM';
    this.BLUE_MULTIPLIER = 'bM';
    this.UVS = 'uvs';
    this.VERTICES = 'vertices';
    this.TRIANGLES = 'triangles';
    this.WEIGHTS = 'weights';
    this.SLOT_POSE = 'slotPose';
    this.BONE_POSE = 'bonePose';
    this.BONES = 'bones';
    this.POSITION_MODE = 'positionMode';
    this.SPACING_MODE = 'spacingMode';
    this.ROTATE_MODE = 'rotateMode';
    this.SPACING = 'spacing';
    this.ROTATE_OFFSET = 'rotateOffset';
    this.ROTATE_MIX = 'rotateMix';
    this.TRANSLATE_MIX = 'translateMix';
    this.TARGET_DISPLAY = 'targetDisplay';
    this.CLOSED = 'closed';
    this.CONSTANT_SPEED = 'constantSpeed';
    this.VERTEX_COUNT = 'vertexCount';
    this.LENGTHS = 'lengths';
    this.GOTO_AND_PLAY = 'gotoAndPlay';
    this.DEFAULT_NAME = 'default';
  }
  DataParser$Companion.prototype._getArmatureType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = ArmatureType$Armature_getInstance();
    else
      switch (tmp$) {
        case 'stage':
          tmp$_0 = ArmatureType$Stage_getInstance();
          break;
        case 'armature':
          tmp$_0 = ArmatureType$Armature_getInstance();
          break;
        case 'movieclip':
          tmp$_0 = ArmatureType$MovieClip_getInstance();
          break;
        default:tmp$_0 = ArmatureType$Armature_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getBoneTypeIsSurface_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = false;
    else
      switch (tmp$) {
        case 'bone':
          tmp$_0 = false;
          break;
        case 'surface':
          tmp$_0 = true;
          break;
        default:tmp$_0 = false;
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getPositionMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = PositionMode$Percent_getInstance();
    else
      switch (tmp$) {
        case 'percent':
          tmp$_0 = PositionMode$Percent_getInstance();
          break;
        case 'fixed':
          tmp$_0 = PositionMode$Fixed_getInstance();
          break;
        default:tmp$_0 = PositionMode$Percent_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getSpacingMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = SpacingMode$Length_getInstance();
    else
      switch (tmp$) {
        case 'length':
          tmp$_0 = SpacingMode$Length_getInstance();
          break;
        case 'percent':
          tmp$_0 = SpacingMode$Percent_getInstance();
          break;
        case 'fixed':
          tmp$_0 = SpacingMode$Fixed_getInstance();
          break;
        default:tmp$_0 = SpacingMode$Length_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getRotateMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = RotateMode$Tangent_getInstance();
    else
      switch (tmp$) {
        case 'tangent':
          tmp$_0 = RotateMode$Tangent_getInstance();
          break;
        case 'chain':
          tmp$_0 = RotateMode$Chain_getInstance();
          break;
        case 'chainscale':
          tmp$_0 = RotateMode$ChainScale_getInstance();
          break;
        default:tmp$_0 = RotateMode$Tangent_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getDisplayType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = DisplayType$Image_getInstance();
    else
      switch (tmp$) {
        case 'image':
          tmp$_0 = DisplayType$Image_getInstance();
          break;
        case 'mesh':
          tmp$_0 = DisplayType$Mesh_getInstance();
          break;
        case 'armature':
          tmp$_0 = DisplayType$Armature_getInstance();
          break;
        case 'boundingbox':
          tmp$_0 = DisplayType$BoundingBox_getInstance();
          break;
        case 'path':
          tmp$_0 = DisplayType$Path_getInstance();
          break;
        default:tmp$_0 = DisplayType$Image_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getBoundingBoxType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = BoundingBoxType$Rectangle_getInstance();
    else
      switch (tmp$) {
        case 'rectangle':
          tmp$_0 = BoundingBoxType$Rectangle_getInstance();
          break;
        case 'ellipse':
          tmp$_0 = BoundingBoxType$Ellipse_getInstance();
          break;
        case 'polygon':
          tmp$_0 = BoundingBoxType$Polygon_getInstance();
          break;
        default:tmp$_0 = BoundingBoxType$Rectangle_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getBlendMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = BlendMode$Normal_getInstance();
    else
      switch (tmp$) {
        case 'normal':
          tmp$_0 = BlendMode$Normal_getInstance();
          break;
        case 'add':
          tmp$_0 = BlendMode$Add_getInstance();
          break;
        case 'alpha':
          tmp$_0 = BlendMode$Alpha_getInstance();
          break;
        case 'darken':
          tmp$_0 = BlendMode$Darken_getInstance();
          break;
        case 'difference':
          tmp$_0 = BlendMode$Difference_getInstance();
          break;
        case 'erase':
          tmp$_0 = BlendMode$Erase_getInstance();
          break;
        case 'hardlight':
          tmp$_0 = BlendMode$HardLight_getInstance();
          break;
        case 'invert':
          tmp$_0 = BlendMode$Invert_getInstance();
          break;
        case 'layer':
          tmp$_0 = BlendMode$Layer_getInstance();
          break;
        case 'lighten':
          tmp$_0 = BlendMode$Lighten_getInstance();
          break;
        case 'multiply':
          tmp$_0 = BlendMode$Multiply_getInstance();
          break;
        case 'overlay':
          tmp$_0 = BlendMode$Overlay_getInstance();
          break;
        case 'screen':
          tmp$_0 = BlendMode$Screen_getInstance();
          break;
        case 'subtract':
          tmp$_0 = BlendMode$Subtract_getInstance();
          break;
        default:tmp$_0 = BlendMode$Normal_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getAnimationBlendType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = AnimationBlendType$None_getInstance();
    else
      switch (tmp$) {
        case 'none':
          tmp$_0 = AnimationBlendType$None_getInstance();
          break;
        case '1d':
          tmp$_0 = AnimationBlendType$E1D_getInstance();
          break;
        default:tmp$_0 = AnimationBlendType$None_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getActionType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = ActionType$Play_getInstance();
    else
      switch (tmp$) {
        case 'play':
          tmp$_0 = ActionType$Play_getInstance();
          break;
        case 'frame':
          tmp$_0 = ActionType$Frame_getInstance();
          break;
        case 'sound':
          tmp$_0 = ActionType$Sound_getInstance();
          break;
        default:tmp$_0 = ActionType$Play_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype.parseDragonBonesDataJson_k15og$ = function (data, scale, pool) {
    if (scale === void 0)
      scale = 1.0;
    if (pool === void 0)
      pool = new BaseObjectPool();
    return (new ObjectDataParser(pool)).parseDragonBonesData_p20sj2$(json.Json.parse_61zpoe$(data), scale);
  };
  DataParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DataParser$Companion_instance = null;
  function DataParser$Companion_getInstance() {
    if (DataParser$Companion_instance === null) {
      new DataParser$Companion();
    }return DataParser$Companion_instance;
  }
  DataParser.prototype.parseDragonBonesData_p20sj2$ = function (rawData, scale, callback$default) {
    if (scale === void 0)
      scale = 1.0;
    return callback$default ? callback$default(rawData, scale) : this.parseDragonBonesData_p20sj2$$default(rawData, scale);
  };
  DataParser.prototype.parseTextureAtlasData_fec78$ = function (rawData, textureAtlasData, scale, callback$default) {
    if (scale === void 0)
      scale = 1.0;
    return callback$default ? callback$default(rawData, textureAtlasData, scale) : this.parseTextureAtlasData_fec78$$default(rawData, textureAtlasData, scale);
  };
  DataParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataParser',
    interfaces: []
  };
  function FrameValueType(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FrameValueType_initFields() {
    FrameValueType_initFields = function () {
    };
    FrameValueType$STEP_instance = new FrameValueType('STEP', 0, 0);
    FrameValueType$INT_instance = new FrameValueType('INT', 1, 1);
    FrameValueType$FLOAT_instance = new FrameValueType('FLOAT', 2, 2);
  }
  var FrameValueType$STEP_instance;
  function FrameValueType$STEP_getInstance() {
    FrameValueType_initFields();
    return FrameValueType$STEP_instance;
  }
  var FrameValueType$INT_instance;
  function FrameValueType$INT_getInstance() {
    FrameValueType_initFields();
    return FrameValueType$INT_instance;
  }
  var FrameValueType$FLOAT_instance;
  function FrameValueType$FLOAT_getInstance() {
    FrameValueType_initFields();
    return FrameValueType$FLOAT_instance;
  }
  FrameValueType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameValueType',
    interfaces: [Enum]
  };
  function FrameValueType$values() {
    return [FrameValueType$STEP_getInstance(), FrameValueType$INT_getInstance(), FrameValueType$FLOAT_getInstance()];
  }
  FrameValueType.values = FrameValueType$values;
  function FrameValueType$valueOf(name) {
    switch (name) {
      case 'STEP':
        return FrameValueType$STEP_getInstance();
      case 'INT':
        return FrameValueType$INT_getInstance();
      case 'FLOAT':
        return FrameValueType$FLOAT_getInstance();
      default:throwISE('No enum constant com.dragonbones.parser.FrameValueType.' + name);
    }
  }
  FrameValueType.valueOf_61zpoe$ = FrameValueType$valueOf;
  function ObjectDataParser(pool) {
    ObjectDataParser$Companion_getInstance();
    if (pool === void 0)
      pool = new BaseObjectPool();
    DataParser.call(this, pool);
    this._rawTextureAtlasIndex = 0;
    this._rawBones = ArrayList_init();
    this._data = null;
    this._armature = null;
    this._bone = null;
    this._geometry = null;
    this._slot = null;
    this._skin = null;
    this._mesh = null;
    this._animation = null;
    this._timeline = null;
    this._rawTextureAtlases = null;
    this._frameValueType_ucgpqr$_0 = FrameValueType$STEP_getInstance();
    this._defaultColorOffset_1uxjcs$_0 = -1;
    this._prevClockwise_hkgu6c$_0 = 0.0;
    this._prevRotation_6xu96o$_0 = 0.0;
    this._frameDefaultValue_3xk5qe$_0 = 0.0;
    this._frameValueScale_giiyd9$_0 = 1.0;
    this._helpMatrixA_y87r8k$_0 = new Matrix_0();
    this._helpMatrixB_y87r9f$_0 = new Matrix_0();
    this._helpTransform_9prt94$_0 = new Transform();
    this._helpColorTransform_ymc72f$_0 = new ColorTransform();
    this._helpPoint_jjup10$_0 = new Point();
    this._helpArray_chz897$_0 = new DoubleArrayList();
    this._intArray_9mqhtz$_0 = new IntArrayList();
    this._floatArray_brc40c$_0 = new DoubleArrayList();
    this._frameIntArray_4wyde4$_0 = new IntArrayList();
    this._frameFloatArray_204v09$_0 = new DoubleArrayList();
    this._frameArray_fpzfut$_0 = new DoubleArrayList();
    this._timelineArray_a4oiyd$_0 = new DoubleArrayList();
    this._colorArray_y9qg6z$_0 = new IntArrayList();
    this._cacheRawMeshes_xt63f4$_0 = ArrayList_init();
    this._cacheMeshes_kkxcli$_0 = ArrayList_init();
    this._actionFrames_eyxsnf$_0 = ArrayList_init();
    this._weightSlotPose_ms86fe$_0 = LinkedHashMap_init_0();
    this._weightBonePoses_3ak4ir$_0 = LinkedHashMap_init_0();
    this._cacheBones_romzic$_0 = LinkedHashMap_init_0();
    this._slotChildActions_t29hla$_0 = LinkedHashMap_init_0();
  }
  function ObjectDataParser$Companion() {
    ObjectDataParser$Companion_instance = this;
  }
  ObjectDataParser$Companion.prototype.getDynamic_s5ds1e$ = function ($receiver, key) {
    var tmp$;
    if ($receiver == null)
      return null;
    else if (Kotlin.isType($receiver, Map))
      return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(key);
    else {
      throw IllegalStateException_init(("Can't getDynamic " + toString($receiver) + "['" + key + "'] (" + Kotlin.getKClassFromExpression($receiver) + ')').toString());
    }
  };
  ObjectDataParser$Companion.prototype.containsDynamic_s5ds1e$ = defineInlineFunction('korge-root-korge-dragonbones.com.dragonbones.parser.ObjectDataParser.Companion.containsDynamic_s5ds1e$', function ($receiver, key) {
    return this.getDynamic_s5ds1e$($receiver, key) != null;
  });
  ObjectDataParser$Companion.prototype.get_dynKeys_ntq51o$ = function ($receiver) {
    if ($receiver == null) {
      return emptyList();
    } else if (Kotlin.isType($receiver, Map)) {
      var $receiver_0 = $receiver.keys;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(toString(item));
      }
      return destination;
    } else {
      throw IllegalStateException_init(("Can't get keys of " + toString($receiver) + ' (' + Kotlin.getKClassFromExpression($receiver) + ')').toString());
    }
  };
  ObjectDataParser$Companion.prototype.get_dynList_ntq51o$ = function ($receiver) {
    if ($receiver == null) {
      return emptyList();
    } else if (Kotlin.isType($receiver, List))
      return $receiver;
    else if (Kotlin.isType($receiver, Iterable))
      return toList($receiver);
    else {
      throw IllegalStateException_init(('Not a list ' + toString($receiver) + ' (' + Kotlin.getKClassFromExpression($receiver) + ')').toString());
    }
  };
  ObjectDataParser$Companion.prototype.get_doubleArray_ntq51o$ = function ($receiver) {
    if (Kotlin.isDoubleArray($receiver))
      return $receiver;
    if (Kotlin.isType($receiver, DoubleArrayList))
      return $receiver.toDoubleArray();
    if (Kotlin.isType($receiver, List)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$(numberToDouble(Kotlin.isNumber(tmp$_0 = item) ? tmp$_0 : throwCCE()));
      }
      return toDoubleArray(destination);
    }throw IllegalStateException_init(("Can't cast '" + toString($receiver) + "' to doubleArray").toString());
  };
  ObjectDataParser$Companion.prototype.get_doubleArrayList_ntq51o$ = function ($receiver) {
    if (Kotlin.isDoubleArray($receiver))
      return DoubleArrayList_init($receiver.slice());
    if (Kotlin.isType($receiver, DoubleArrayList))
      return $receiver;
    if (Kotlin.isType($receiver, List)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$(numberToDouble(Kotlin.isNumber(tmp$_0 = item) ? tmp$_0 : throwCCE()));
      }
      return DoubleArrayList_init(toDoubleArray(destination).slice());
    }throw IllegalStateException_init(("Can't cast '" + toString($receiver) + "' to doubleArrayList").toString());
  };
  ObjectDataParser$Companion.prototype.get_intArrayList_ntq51o$ = function ($receiver) {
    if (Kotlin.isIntArray($receiver))
      return IntArrayList_init($receiver.slice());
    if (Kotlin.isType($receiver, IntArrayList))
      return $receiver;
    if (Kotlin.isType($receiver, List)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$(numberToInt(Kotlin.isNumber(tmp$_0 = item) ? tmp$_0 : throwCCE()));
      }
      return IntArrayList_init(toIntArray(destination).slice());
    }throw IllegalStateException_init(("Can't '" + toString($receiver) + "' cast to intArrayList").toString());
  };
  ObjectDataParser$Companion.prototype._getBoolean_bttdmd$ = function (rawData, key, defaultValue) {
    var tmp$;
    var value = this.getDynamic_s5ds1e$(rawData, key);
    if (value == null)
      tmp$ = defaultValue;
    else if (typeof value === 'boolean')
      tmp$ = value;
    else if (Kotlin.isNumber(value))
      tmp$ = numberToDouble(value) !== 0.0;
    else if (typeof value === 'string') {
      switch (value) {
        case '0':
        case 'NaN':
        case '':
        case 'false':
        case 'null':
        case 'undefined':
          tmp$ = false;
          break;
        default:tmp$ = true;
          break;
      }
    } else
      tmp$ = defaultValue;
    return tmp$;
  };
  ObjectDataParser$Companion.prototype._getNumber_5jja3g$ = function (rawData, key, defaultValue) {
    var tmp$, tmp$_0;
    var value = (tmp$ = this.getDynamic_s5ds1e$(rawData, key)) == null || Kotlin.isNumber(tmp$) ? tmp$ : null;
    if (value != null && !equals(value, kotlin_js_internal_DoubleCompanionObject.NaN)) {
      tmp$_0 = numberToDouble(value);
    } else {
      tmp$_0 = defaultValue;
    }
    return tmp$_0;
  };
  ObjectDataParser$Companion.prototype._getInt_n87918$ = function (rawData, key, defaultValue) {
    var tmp$, tmp$_0;
    var value = (tmp$ = this.getDynamic_s5ds1e$(rawData, key)) == null || Kotlin.isNumber(tmp$) ? tmp$ : null;
    if (value != null && !equals(value, kotlin_js_internal_DoubleCompanionObject.NaN)) {
      tmp$_0 = numberToInt(value);
    } else {
      tmp$_0 = defaultValue;
    }
    return tmp$_0;
  };
  ObjectDataParser$Companion.prototype._getString_1mu92c$ = function (rawData, key, defaultValue) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.getDynamic_s5ds1e$(rawData, key)) != null ? tmp$.toString() : null) != null ? tmp$_0 : defaultValue;
  };
  ObjectDataParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ObjectDataParser$Companion_instance = null;
  function ObjectDataParser$Companion_getInstance() {
    if (ObjectDataParser$Companion_instance === null) {
      new ObjectDataParser$Companion();
    }return ObjectDataParser$Companion_instance;
  }
  ObjectDataParser.prototype._getCurvePoint_vusyvb$_0 = function (x1, y1, x2, y2, x3, y3, x4, y4, t, result) {
    var l_t = 1.0 - t;
    var powA = l_t * l_t;
    var powB = t * t;
    var kA = l_t * powA;
    var kB = 3.0 * t * powA;
    var kC = 3.0 * l_t * powB;
    var kD = t * powB;
    result.x = kA * x1 + kB * x2 + kC * x3 + kD * x4;
    result.y = kA * y1 + kB * y2 + kC * y3 + kD * y4;
  };
  ObjectDataParser.prototype._samplingEasingCurve_bwr4ee$_0 = function (curve, samples) {
    var tmp$, tmp$_0;
    var curveCount = curve.size;
    if (curveCount % 3 === 1) {
      var stepIndex = -2;
      var l = samples.size;
      tmp$ = samples.size;
      for (var i = 0; i < tmp$; i++) {
        var t = (i + 1 | 0) / (l + 1);
        while (((stepIndex + 6 | 0) < curveCount ? curve.get_za3lpa$(stepIndex + 6 | 0) : 1.0) < t) {
          stepIndex = stepIndex + 6 | 0;
        }
        var isInCurve = stepIndex >= 0 && (stepIndex + 6 | 0) < curveCount;
        var x1 = isInCurve ? curve.get_za3lpa$(stepIndex) : 0.0;
        var y1 = isInCurve ? curve.get_za3lpa$(stepIndex + 1 | 0) : 0.0;
        var x2 = curve.get_za3lpa$(stepIndex + 2 | 0);
        var y2 = curve.get_za3lpa$(stepIndex + 3 | 0);
        var x3 = curve.get_za3lpa$(stepIndex + 4 | 0);
        var y3 = curve.get_za3lpa$(stepIndex + 5 | 0);
        var x4 = isInCurve ? curve.get_za3lpa$(stepIndex + 6 | 0) : 1.0;
        var y4 = isInCurve ? curve.get_za3lpa$(stepIndex + 7 | 0) : 1.0;
        var lower = 0.0;
        var higher = 1.0;
        while (higher - lower > 1.0E-4) {
          var percentage = (higher + lower) * 0.5;
          this._getCurvePoint_vusyvb$_0(x1, y1, x2, y2, x3, y3, x4, y4, percentage, this._helpPoint_jjup10$_0);
          if (t - this._helpPoint_jjup10$_0.x > 0.0) {
            lower = percentage;
          } else {
            higher = percentage;
          }
        }
        samples.set_5wr77w$(i, this._helpPoint_jjup10$_0.y);
      }
      return true;
    } else {
      var stepIndex_0 = 0;
      var l_0 = samples.size;
      tmp$_0 = samples.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        var t_0 = (i_0 + 1 | 0) / (l_0 + 1 | 0) | 0;
        while (curve.get_za3lpa$(stepIndex_0 + 6 | 0) < t_0) {
          stepIndex_0 = stepIndex_0 + 6 | 0;
        }
        var x1_0 = curve.get_za3lpa$(stepIndex_0);
        var y1_0 = curve.get_za3lpa$(stepIndex_0 + 1 | 0);
        var x2_0 = curve.get_za3lpa$(stepIndex_0 + 2 | 0);
        var y2_0 = curve.get_za3lpa$(stepIndex_0 + 3 | 0);
        var x3_0 = curve.get_za3lpa$(stepIndex_0 + 4 | 0);
        var y3_0 = curve.get_za3lpa$(stepIndex_0 + 5 | 0);
        var x4_0 = curve.get_za3lpa$(stepIndex_0 + 6 | 0);
        var y4_0 = curve.get_za3lpa$(stepIndex_0 + 7 | 0);
        var lower_0 = 0.0;
        var higher_0 = 1.0;
        while (higher_0 - lower_0 > 1.0E-4) {
          var percentage_0 = (higher_0 + lower_0) * 0.5;
          this._getCurvePoint_vusyvb$_0(x1_0, y1_0, x2_0, y2_0, x3_0, y3_0, x4_0, y4_0, percentage_0, this._helpPoint_jjup10$_0);
          if (t_0 - this._helpPoint_jjup10$_0.x > 0.0) {
            lower_0 = percentage_0;
          } else {
            higher_0 = percentage_0;
          }
        }
        samples.set_5wr77w$(i_0, this._helpPoint_jjup10$_0.y);
      }
      return false;
    }
  };
  ObjectDataParser.prototype._parseActionDataInFrame_2hm7da$_0 = function (rawData, frameStart, bone, slot) {
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENT) != null) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENT)), frameStart, ActionType$Frame_getInstance(), bone, slot);
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SOUND) != null) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SOUND)), frameStart, ActionType$Sound_getInstance(), bone, slot);
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION) != null) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION)), frameStart, ActionType$Play_getInstance(), bone, slot);
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENTS) != null) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENTS)), frameStart, ActionType$Frame_getInstance(), bone, slot);
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS) != null) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS)), frameStart, ActionType$Play_getInstance(), bone, slot);
    }};
  ObjectDataParser.prototype._mergeActionFrame_xa41qc$_0 = function (rawData, frameStart, type, bone, slot) {
    var tmp$, tmp$_0;
    var actionOffset = ensureNotNull(this._armature).actions.size;
    var actions = this._parseActionData_vpjj18$(rawData, type, bone, slot);
    var frameIndex = 0;
    var frame = null;
    var tmp$_1;
    var n = 0;
    while (n < actions.size) {
      var action = actions.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
      var tmp$_2;
      (tmp$_2 = this._armature) != null ? (tmp$_2.addAction_uup9kz$(action, false), Unit) : null;
    }
    if (this._actionFrames_eyxsnf$_0.size === 0) {
      frame = new ActionFrame();
      frame.frameStart = 0;
      push(this._actionFrames_eyxsnf$_0, frame);
      frame = null;
    }tmp$ = this._actionFrames_eyxsnf$_0.iterator();
    while (tmp$.hasNext()) {
      var eachFrame = tmp$.next();
      if (eachFrame.frameStart === frameStart) {
        frame = eachFrame;
        break;
      } else if (eachFrame.frameStart > frameStart) {
        break;
      }frameIndex = frameIndex + 1 | 0;
    }
    if (frame == null) {
      frame = new ActionFrame();
      frame.frameStart = frameStart;
      splice(this._actionFrames_eyxsnf$_0, frameIndex, 0, [frame]);
    }tmp$_0 = actions.size;
    for (var i = 0; i < tmp$_0; i++) {
      push_1(frame.actions, actionOffset + i | 0);
    }
  };
  ObjectDataParser.prototype._parseArmature_p20sj2$ = function (rawData, scale) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var armature = this.pool.armatureData.borrow();
    armature.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    armature.frameRate = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().FRAME_RATE, ensureNotNull(this._data).frameRate);
    armature.scale = scale;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) != null && typeof ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) === 'string') {
      armature.type = DataParser$Companion_getInstance()._getArmatureType_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE)) != null ? tmp$.toString() : null);
    } else {
      armature.type = ArmatureType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().TYPE, ArmatureType$Armature_getInstance().id));
    }
    if (armature.frameRate === 0) {
      armature.frameRate = 24;
    }this._armature = armature;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().CANVAS) != null) {
      var rawCanvas = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().CANVAS);
      var canvas = this.pool.canvasData.borrow();
      canvas.hasBackground = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawCanvas, DataParser$Companion_getInstance().COLOR) != null;
      canvas.color = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().COLOR, 0);
      canvas.x = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().X, 0) * armature.scale);
      canvas.y = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().Y, 0) * armature.scale);
      canvas.width = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().WIDTH, 0) * armature.scale);
      canvas.height = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().HEIGHT, 0) * armature.scale);
      armature.canvas = canvas;
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().AABB) != null) {
      var rawAABB = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().AABB);
      armature.aabb.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().X, 0.0) * armature.scale;
      armature.aabb.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().Y, 0.0) * armature.scale;
      armature.aabb.width = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().WIDTH, 0.0) * armature.scale;
      armature.aabb.height = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().HEIGHT, 0.0) * armature.scale;
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE) != null) {
      var rawBones = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE);
      var $receiver = Kotlin.isType(tmp$_0 = rawBones, List) ? tmp$_0 : throwCCE();
      var tmp$_7;
      var n = 0;
      while (n < $receiver.size) {
        var rawBone = $receiver.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
        var tmp$_8, tmp$_9;
        var parentName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawBone, DataParser$Companion_getInstance().PARENT, '');
        var bone = this._parseBone_s8jyv4$(rawBone);
        if (parentName.length > 0) {
          var parent = armature.getBone_pdl1vj$(parentName);
          if (parent != null) {
            bone.parent = parent;
          } else {
            if (!(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(this._cacheBones_romzic$_0, parentName) != null)) {
              var tmp$_10 = this._cacheBones_romzic$_0;
              var value = ArrayList_init();
              tmp$_10.put_xwzc9p$(parentName, value);
            }(tmp$_8 = this._cacheBones_romzic$_0.get_11rb$(parentName)) != null ? (push(tmp$_8, bone), Unit) : null;
          }
        }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(this._cacheBones_romzic$_0, bone.name) != null) {
          tmp$_9 = ensureNotNull(this._cacheBones_romzic$_0.get_11rb$(bone.name)).iterator();
          while (tmp$_9.hasNext()) {
            var child = tmp$_9.next();
            child.parent = bone;
          }
          this._cacheBones_romzic$_0.remove_11rb$(bone.name);
        }armature.addBone_ejz9f2$(bone);
        push(this._rawBones, bone);
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().IK) != null) {
      var rawIKS = Kotlin.isType(tmp$_1 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().IK), List) ? tmp$_1 : throwCCE();
      var tmp$_11;
      var n_0 = 0;
      while (n_0 < rawIKS.size) {
        var constraint = this._parseIKConstraint_s8jyv4$(rawIKS.get_za3lpa$((tmp$_11 = n_0, n_0 = tmp$_11 + 1 | 0, tmp$_11)));
        if (constraint != null) {
          armature.addConstraint_9jmsph$(constraint);
        }}
    }armature.sortBones();
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT) != null) {
      var zOrder = {v: 0};
      var rawSlots = Kotlin.isType(tmp$_2 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT), List) ? tmp$_2 : throwCCE();
      var tmp$_12;
      var n_1 = 0;
      while (n_1 < rawSlots.size) {
        var tmp$_13;
        armature.addSlot_5x25e4$(this._parseSlot_cypnoy$(rawSlots.get_za3lpa$((tmp$_12 = n_1, n_1 = tmp$_12 + 1 | 0, tmp$_12)), (tmp$_13 = zOrder.v, zOrder.v = tmp$_13 + 1 | 0, tmp$_13)));
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SKIN) != null) {
      var rawSkins = Kotlin.isType(tmp$_3 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SKIN), List) ? tmp$_3 : throwCCE();
      var tmp$_14;
      var n_2 = 0;
      while (n_2 < rawSkins.size) {
        armature.addSkin_bowmr9$(this._parseSkin_s8jyv4$(rawSkins.get_za3lpa$((tmp$_14 = n_2, n_2 = tmp$_14 + 1 | 0, tmp$_14))));
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().PATH_CONSTRAINT) != null) {
      var rawPaths = Kotlin.isType(tmp$_4 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().PATH_CONSTRAINT), List) ? tmp$_4 : throwCCE();
      var tmp$_15;
      var n_3 = 0;
      while (n_3 < rawPaths.size) {
        var constraint_0 = this._parsePathConstraint_s8jyv4$(rawPaths.get_za3lpa$((tmp$_15 = n_3, n_3 = tmp$_15 + 1 | 0, tmp$_15)));
        if (constraint_0 != null) {
          armature.addConstraint_9jmsph$(constraint_0);
        }}
    }tmp$_5 = get_length_1(this._cacheRawMeshes_xt63f4$_0);
    for (var i = 0; i < tmp$_5; i++) {
      var rawData_0 = this._cacheRawMeshes_xt63f4$_0.get_za3lpa$(i);
      var shareName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData_0, DataParser$Companion_getInstance().SHARE, '');
      if (shareName.length === 0) {
        continue;
      }var skinName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData_0, DataParser$Companion_getInstance().SKIN, DataParser$Companion_getInstance().DEFAULT_NAME);
      if (skinName.length === 0) {
        skinName = DataParser$Companion_getInstance().DEFAULT_NAME;
      }var shareMesh = armature.getMesh_6hosri$(skinName, '', shareName);
      if (shareMesh == null) {
        continue;
      }var mesh = this._cacheMeshes_kkxcli$_0.get_za3lpa$(i);
      mesh.geometry.shareFrom_xkji8$(shareMesh.geometry);
    }
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ANIMATION) != null) {
      var rawAnimations = Kotlin.isType(tmp$_6 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ANIMATION), List) ? tmp$_6 : throwCCE();
      var tmp$_16;
      var n_4 = 0;
      while (n_4 < rawAnimations.size) {
        var animation = this._parseAnimation_s8jyv4$(rawAnimations.get_za3lpa$((tmp$_16 = n_4, n_4 = tmp$_16 + 1 | 0, tmp$_16)));
        armature.addAnimation_w03ody$(animation);
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().DEFAULT_ACTIONS) != null) {
      var actions = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().DEFAULT_ACTIONS), ActionType$Play_getInstance(), null, null);
      var tmp$_17;
      var n_5 = 0;
      while (n_5 < actions.size) {
        var action = actions.get_za3lpa$((tmp$_17 = n_5, n_5 = tmp$_17 + 1 | 0, tmp$_17));
        armature.addAction_uup9kz$(action, true);
        if (action.type === ActionType$Play_getInstance()) {
          var animation_0 = armature.getAnimation_61zpoe$(action.name);
          if (animation_0 != null) {
            armature.defaultAnimation = animation_0;
          }}}
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS) != null) {
      var actions_0 = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS), ActionType$Play_getInstance(), null, null);
      var tmp$_18;
      var n_6 = 0;
      while (n_6 < actions_0.size) {
        armature.addAction_uup9kz$(actions_0.get_za3lpa$((tmp$_18 = n_6, n_6 = tmp$_18 + 1 | 0, tmp$_18)), false);
      }
    }set_lengthSet_1(this._rawBones, 0);
    set_length_1(this._cacheRawMeshes_xt63f4$_0, 0);
    set_length_1(this._cacheMeshes_kkxcli$_0, 0);
    this._armature = null;
    this._weightSlotPose_ms86fe$_0.clear();
    this._weightBonePoses_3ak4ir$_0.clear();
    this._cacheBones_romzic$_0.clear();
    this._slotChildActions_t29hla$_0.clear();
    return armature;
  };
  ObjectDataParser.prototype._parseBone_s8jyv4$ = function (rawData) {
    var tmp$;
    var isSurface;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) != null && typeof ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) === 'string') {
      isSurface = DataParser$Companion_getInstance()._getBoneTypeIsSurface_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE)) != null ? tmp$.toString() : null);
    } else {
      isSurface = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().TYPE, 0) === 1;
    }
    if (!isSurface) {
      var scale = ensureNotNull(this._armature).scale;
      var bone = this.pool.boneData.borrow();
      bone.inheritTranslation = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_TRANSLATION, true);
      bone.inheritRotation = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_ROTATION, true);
      bone.inheritScale = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_SCALE, true);
      bone.inheritReflection = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_REFLECTION, true);
      bone.length = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().LENGTH, 0.0) * scale;
      bone.alpha = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA, 1.0);
      bone.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
      if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM) != null) {
        this._parseTransform_hr8bzd$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM), bone.transform, scale);
      }return bone;
    } else {
      var surface = this.pool.surfaceData.borrow();
      surface.alpha = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA, 1.0);
      surface.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
      surface.segmentX = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().SEGMENT_X, 0);
      surface.segmentY = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().SEGMENT_Y, 0);
      this._parseGeometry_9lxtbg$(rawData, surface.geometry);
      return surface;
    }
  };
  ObjectDataParser.prototype._parseIKConstraint_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().BONE, '')) : null;
    if (tmp$_0 == null) {
      return null;
    }var bone = tmp$_0;
    tmp$_2 = (tmp$_1 = this._armature) != null ? tmp$_1.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().TARGET, '')) : null;
    if (tmp$_2 == null) {
      return null;
    }var target = tmp$_2;
    var chain = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().CHAIN, 0);
    var constraint = this.pool.iKConstraintData.borrow();
    constraint.scaleEnabled = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().SCALE, false);
    constraint.bendPositive = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().BEND_POSITIVE, true);
    constraint.weight = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().WEIGHT, 1.0);
    constraint.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    constraint.type = ConstraintType$IK_getInstance();
    constraint.target = target;
    if (chain > 0 && bone.parent != null) {
      constraint.root = bone.parent;
      constraint.bone = bone;
    } else {
      constraint.root = bone;
      constraint.bone = null;
    }
    return constraint;
  };
  ObjectDataParser.prototype._parsePathConstraint_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getSlot_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().TARGET, '')) : null;
    if (tmp$_0 == null) {
      return null;
    }var target = tmp$_0;
    tmp$_2 = (tmp$_1 = this._armature) != null ? tmp$_1.defaultSkin : null;
    if (tmp$_2 == null) {
      return null;
    }var defaultSkin = tmp$_2;
    var targetDisplay = defaultSkin.getDisplay_puj7f4$(target.name, ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().TARGET_DISPLAY, target.name));
    if (targetDisplay == null || !Kotlin.isType(targetDisplay, PathDisplayData)) {
      return null;
    }var bones = (tmp$_3 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONES)) == null || Kotlin.isType(tmp$_3, List) ? tmp$_3 : null;
    if (bones == null || bones.isEmpty()) {
      return null;
    }var constraint = this.pool.pathConstraintData.borrow();
    constraint.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    constraint.type = ConstraintType$Path_getInstance();
    constraint.pathSlot = target;
    constraint.pathDisplayData = targetDisplay;
    constraint.target = target.parent;
    constraint.positionMode = DataParser$Companion_getInstance()._getPositionMode_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().POSITION_MODE, ''));
    constraint.spacingMode = DataParser$Companion_getInstance()._getSpacingMode_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().SPACING_MODE, ''));
    constraint.rotateMode = DataParser$Companion_getInstance()._getRotateMode_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().ROTATE_MODE, ''));
    constraint.position = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().POSITION, 0.0);
    constraint.spacing = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SPACING, 0.0);
    constraint.rotateOffset = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE_OFFSET, 0.0);
    constraint.rotateMix = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE_MIX, 1.0);
    constraint.translateMix = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().TRANSLATE_MIX, 1.0);
    var tmp$_4;
    var n = 0;
    while (n < bones.size) {
      var boneName = bones.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
      var tmp$_5;
      var bone = (tmp$_5 = this._armature) != null ? tmp$_5.getBone_pdl1vj$(boneName) : null;
      if (bone != null) {
        constraint.AddBone_ejz9f2$(bone);
        if (constraint.root == null) {
          constraint.root = bone;
        }}}
    return constraint;
  };
  ObjectDataParser.prototype._parseSlot_cypnoy$ = function (rawData, zOrder) {
    var tmp$, tmp$_0, tmp$_1;
    var slot = this.pool.slotData.borrow();
    slot.displayIndex = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().DISPLAY_INDEX, 0);
    slot.zOrder = zOrder;
    slot.zIndex = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().Z_INDEX, 0);
    slot.alpha = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA, 1.0);
    slot.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    slot.parent = (tmp$ = this._armature) != null ? tmp$.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().PARENT, '')) : null;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BLEND_MODE) != null && typeof ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BLEND_MODE) === 'string') {
      slot.blendMode = DataParser$Companion_getInstance()._getBlendMode_pdl1vj$((tmp$_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BLEND_MODE)) != null ? tmp$_0.toString() : null);
    } else {
      slot.blendMode = BlendMode$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().BLEND_MODE, BlendMode$Normal_getInstance().id));
    }
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR) != null) {
      slot.color = SlotData$Companion_getInstance().createColor();
      this._parseColorTransform_lkycw$(Kotlin.isType(tmp$_1 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR), Map) ? tmp$_1 : throwCCE(), ensureNotNull(slot.color));
    } else {
      slot.color = this.pool.DEFAULT_COLOR;
    }
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS) != null) {
      var $receiver = this._slotChildActions_t29hla$_0;
      var key = slot.name;
      var value = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS), ActionType$Play_getInstance(), null, null);
      $receiver.put_xwzc9p$(key, value);
    }return slot;
  };
  ObjectDataParser.prototype._parseSkin_s8jyv4$ = function (rawData) {
    var skin = this.pool.skinData.borrow();
    skin.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, DataParser$Companion_getInstance().DEFAULT_NAME);
    if (skin.name.length === 0) {
      skin.name = DataParser$Companion_getInstance().DEFAULT_NAME;
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT) != null) {
      var rawSlots = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT);
      this._skin = skin;
      var $receiver = ObjectDataParser$Companion_getInstance().get_dynList_ntq51o$(rawSlots);
      var tmp$;
      var n = 0;
      while (n < $receiver.size) {
        var rawSlot = $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
        var tmp$_0, tmp$_1;
        var slotName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawSlot, DataParser$Companion_getInstance().NAME, '');
        var slot = (tmp$_0 = this._armature) != null ? tmp$_0.getSlot_pdl1vj$(slotName) : null;
        if (slot != null) {
          this._slot = slot;
          if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawSlot, DataParser$Companion_getInstance().DISPLAY) != null) {
            var rawDisplays = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawSlot, DataParser$Companion_getInstance().DISPLAY);
            tmp$_1 = ObjectDataParser$Companion_getInstance().get_dynList_ntq51o$(rawDisplays).iterator();
            while (tmp$_1.hasNext()) {
              var rawDisplay = tmp$_1.next();
              if (rawDisplay != null) {
                skin.addDisplay_j2ttk5$(slotName, this._parseDisplay_s8jyv4$(rawDisplay));
              } else {
                skin.addDisplay_j2ttk5$(slotName, null);
              }
            }
          }this._slot = null;
        }}
      this._skin = null;
    }return skin;
  };
  ObjectDataParser.prototype._parseDisplay_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    var path = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().PATH, '');
    var type = DisplayType$Image_getInstance();
    var display = null;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) != null && typeof ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) === 'string') {
      type = DataParser$Companion_getInstance()._getDisplayType_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE)) != null ? tmp$.toString() : null);
    } else {
      type = DisplayType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().TYPE, type.id));
    }
    switch (type.name) {
      case 'Image':
        display = this.pool.imageDisplayData.borrow();
        var imageDisplay = display;
        imageDisplay.name = name;
        imageDisplay.path = path.length > 0 ? path : name;
        this._parsePivot_lhqbvl$(rawData, imageDisplay);
        break;
      case 'Armature':
        display = this.pool.armatureDisplayData.borrow();
        var armatureDisplay = display;
        armatureDisplay.name = name;
        armatureDisplay.path = path.length > 0 ? path : name;
        armatureDisplay.inheritAnimation = true;
        if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS) != null) {
          var actions = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS), ActionType$Play_getInstance(), null, null);
          var tmp$_9;
          var n = 0;
          while (n < actions.size) {
            armatureDisplay.addAction_je7dvg$(actions.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9)));
          }
        } else {
          tmp$_1 = this._slotChildActions_t29hla$_0;
          var key = (tmp$_0 = this._slot) != null ? tmp$_0.name : null;
          var tmp$_10;
          if ((Kotlin.isType(tmp$_10 = tmp$_1, Map) ? tmp$_10 : throwCCE()).containsKey_11rb$(key)) {
            tmp$_4 = this._skin;
            tmp$_3 = (tmp$_2 = this._slot) != null ? tmp$_2.name : null;
            var displays = tmp$_4 != null ? tmp$_4.getDisplays_pdl1vj$(tmp$_3) : null;
            if (displays == null ? ensureNotNull(this._slot).displayIndex === 0 : ensureNotNull(this._slot).displayIndex === get_length_1(displays)) {
              tmp$_6 = this._slotChildActions_t29hla$_0;
              var key_0 = (tmp$_5 = this._slot) != null ? tmp$_5.name : null;
              var tmp$_11;
              var $receiver = ensureNotNull((Kotlin.isType(tmp$_11 = tmp$_6, Map) ? tmp$_11 : throwCCE()).get_11rb$(key_0));
              var tmp$_12;
              var n_0 = 0;
              while (n_0 < $receiver.size) {
                armatureDisplay.addAction_je7dvg$($receiver.get_za3lpa$((tmp$_12 = n_0, n_0 = tmp$_12 + 1 | 0, tmp$_12)));
              }
              tmp$_8 = this._slotChildActions_t29hla$_0;
              var key_1 = (tmp$_7 = this._slot) != null ? tmp$_7.name : null;
              var tmp$_13;
              (Kotlin.isType(tmp$_13 = tmp$_8, MutableMap) ? tmp$_13 : throwCCE()).remove_11rb$(key_1);
            }}}

        break;
      case 'Mesh':
        var meshDisplay = this.pool.meshDisplayData.borrow();
        display = meshDisplay;
        meshDisplay.geometry.inheritDeform = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_DEFORM, true);
        meshDisplay.name = name;
        meshDisplay.path = path.length > 0 ? path : name;
        if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SHARE) != null) {
          meshDisplay.geometry.data = this._data;
          push(this._cacheRawMeshes_xt63f4$_0, ensureNotNull(rawData));
          push(this._cacheMeshes_kkxcli$_0, meshDisplay);
        } else {
          this._parseMesh_x19l9r$(rawData, meshDisplay);
        }

        break;
      case 'BoundingBox':
        var boundingBox = this._parseBoundingBox_s8jyv4$(rawData);
        if (boundingBox != null) {
          var boundingBoxDisplay = this.pool.boundingBoxDisplayData.borrow();
          display = boundingBoxDisplay;
          boundingBoxDisplay.name = name;
          boundingBoxDisplay.path = path.length > 0 ? path : name;
          boundingBoxDisplay.boundingBox = boundingBox;
        }
        break;
      case 'Path':
        var rawCurveLengths = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().LENGTHS));
        var pathDisplay = this.pool.pathDisplayData.borrow();
        display = pathDisplay;
        pathDisplay.closed = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().CLOSED, false);
        pathDisplay.constantSpeed = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().CONSTANT_SPEED, false);
        pathDisplay.name = name;
        pathDisplay.path = path.length > 0 ? path : name;
        pathDisplay.curveLengths = new Float64Array(rawCurveLengths.length);
        for (var i = 0; i < rawCurveLengths.length; i++) {
          pathDisplay.curveLengths[i] = rawCurveLengths[i];
        }

        this._parsePath_5mzgi1$(rawData, pathDisplay);
        break;
      default:break;
    }
    var tmp$_14 = display != null;
    if (tmp$_14) {
      tmp$_14 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM) != null;
    }if (tmp$_14) {
      this._parseTransform_hr8bzd$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM), display.transform, ensureNotNull(this._armature).scale);
    }return display;
  };
  ObjectDataParser.prototype._parsePath_5mzgi1$ = function (rawData, display) {
    this._parseGeometry_9lxtbg$(rawData, display.geometry);
  };
  ObjectDataParser.prototype._parsePivot_lhqbvl$ = function (rawData, display) {
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().PIVOT) != null) {
      var rawPivot = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().PIVOT);
      display.pivot.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawPivot, DataParser$Companion_getInstance().X, 0.0);
      display.pivot.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawPivot, DataParser$Companion_getInstance().Y, 0.0);
    } else {
      display.pivot.x = 0.5;
      display.pivot.y = 0.5;
    }
  };
  ObjectDataParser.prototype._parseMesh_x19l9r$ = function (rawData, mesh) {
    var tmp$, tmp$_0;
    this._parseGeometry_9lxtbg$(rawData, mesh.geometry);
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().WEIGHTS) != null) {
      var rawSlotPose = ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT_POSE));
      var rawBonePoses = ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE_POSE));
      var meshName = '' + ((tmp$ = this._skin) != null ? tmp$.name : null) + '_' + ((tmp$_0 = this._slot) != null ? tmp$_0.name : null) + '_' + mesh.name;
      this._weightSlotPose_ms86fe$_0.put_xwzc9p$(meshName, rawSlotPose);
      this._weightBonePoses_3ak4ir$_0.put_xwzc9p$(meshName, rawBonePoses);
    }};
  ObjectDataParser.prototype._parseBoundingBox_s8jyv4$ = function (rawData) {
    var tmp$;
    var boundingBox = null;
    var type = BoundingBoxType$Rectangle_getInstance();
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TYPE) != null && typeof ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TYPE) === 'string') {
      type = DataParser$Companion_getInstance()._getBoundingBoxType_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TYPE)) != null ? tmp$.toString() : null);
    } else {
      type = BoundingBoxType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().SUB_TYPE, type.id));
    }
    switch (type.name) {
      case 'Rectangle':
        boundingBox = this.pool.rectangleBoundingBoxData.borrow();
        break;
      case 'Ellipse':
        boundingBox = this.pool.ellipseBoundingBoxData.borrow();
        break;
      case 'Polygon':
        boundingBox = this._parsePolygonBoundingBox_s8jyv4$(rawData);
        break;
      default:break;
    }
    if (boundingBox != null) {
      boundingBox.color = numberToInt(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().COLOR, 0));
      if (boundingBox.type === BoundingBoxType$Rectangle_getInstance() || boundingBox.type === BoundingBoxType$Ellipse_getInstance()) {
        boundingBox.width = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().WIDTH, 0.0);
        boundingBox.height = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().HEIGHT, 0.0);
      }}return boundingBox;
  };
  ObjectDataParser.prototype._parsePolygonBoundingBox_s8jyv4$ = function (rawData) {
    var polygonBoundingBox = this.pool.polygonBoundingBoxData.borrow();
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES) != null) {
      var scale = ensureNotNull(this._armature).scale;
      var rawVertices = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES));
      polygonBoundingBox.vertices = new Float64Array(rawVertices.length);
      var vertices = polygonBoundingBox.vertices;
      for (var i = 0; i < rawVertices.length; i += 2) {
        var x = rawVertices[i] * scale;
        var y = rawVertices[i + 1 | 0] * scale;
        vertices[i] = x;
        vertices[i + 1 | 0] = y;
        if (i === 0) {
          polygonBoundingBox.x = x;
          polygonBoundingBox.y = y;
          polygonBoundingBox.width = x;
          polygonBoundingBox.height = y;
        } else {
          if (x < polygonBoundingBox.x) {
            polygonBoundingBox.x = x;
          } else if (x > polygonBoundingBox.width) {
            polygonBoundingBox.width = x;
          }if (y < polygonBoundingBox.y) {
            polygonBoundingBox.y = y;
          } else if (y > polygonBoundingBox.height) {
            polygonBoundingBox.height = y;
          }}
      }
      polygonBoundingBox.width = polygonBoundingBox.width - polygonBoundingBox.x;
      polygonBoundingBox.height = polygonBoundingBox.height - polygonBoundingBox.y;
    } else {
      console_getInstance().warn_vqirvp$(['Data error.\n Please reexport DragonBones Data to fixed the bug.']);
    }
    return polygonBoundingBox;
  };
  ObjectDataParser.prototype.findGeometryInTimeline_g4bg7p$_0 = function (timelineName) {
    var mapIterator = ensureNotNull(this._armature).skins.keys();
    while (true) {
      var v = mapIterator.next();
      if (v.done)
        break;
      var skinName = v.value;
      var $receiver = ensureNotNull(this._armature).skins;
      var skin = skinName == null ? null : $receiver.get(skinName);
      var mapIterator_0 = ensureNotNull(skin).displays.keys();
      while (true) {
        var v_0 = mapIterator_0.next();
        if (v_0.done)
          break;
        var slontName = v_0.value;
        var $receiver_0 = skin.displays;
        var displays = ensureNotNull(slontName == null ? null : $receiver_0.get(slontName));
        var tmp$;
        var n = 0;
        while (n < displays.size) {
          var display = displays.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
          var tmp$_0;
          if (display != null && equals(display.name, timelineName)) {
            return (Kotlin.isType(tmp$_0 = display, MeshDisplayData) ? tmp$_0 : throwCCE()).geometry;
          }}
      }
    }
    return null;
  };
  ObjectDataParser.prototype._parseAnimation_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var animation = this.pool.animationData.borrow();
    animation.blendType = DataParser$Companion_getInstance()._getAnimationBlendType_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().BLEND_TYPE, ''));
    animation.frameCount = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().DURATION, 0);
    animation.playTimes = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().PLAY_TIMES, 1);
    animation.duration = animation.frameCount / ensureNotNull(this._armature).frameRate;
    animation.fadeInTime = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().FADE_IN_TIME, 0.0);
    animation.scale = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0);
    animation.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, DataParser$Companion_getInstance().DEFAULT_NAME);
    if (animation.name.length === 0) {
      animation.name = DataParser$Companion_getInstance().DEFAULT_NAME;
    }animation.frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
    animation.frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    animation.frameOffset = get_length_0(this._frameArray_fpzfut$_0);
    this._animation = animation;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().FRAME) != null) {
      var rawFrames = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().FRAME), List) ? tmp$ : throwCCE();
      var keyFrameCount = rawFrames.size;
      if (keyFrameCount > 0) {
        var frameStart = 0;
        for (var i = 0; i < keyFrameCount; i++) {
          var rawFrame = rawFrames.get_za3lpa$(i);
          this._parseActionDataInFrame_2hm7da$_0(rawFrame, frameStart, null, null);
          frameStart = frameStart + ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawFrame, DataParser$Companion_getInstance().DURATION, 1) | 0;
        }
      }}if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER) != null) {
      ensureNotNull(this._animation).zOrderTimeline = this._parseTimeline_xmmrf7$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER), null, DataParser$Companion_getInstance().FRAME, TimelineType$ZOrder_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseZOrderFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseZOrderFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE) != null) {
      var rawTimelines = Kotlin.isType(tmp$_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE), List) ? tmp$_0 : throwCCE();
      var tmp$_5;
      var n = 0;
      while (n < rawTimelines.size) {
        this._parseBoneTimeline_s8jyv4$(rawTimelines.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5)));
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT) != null) {
      var rawTimelines_0 = Kotlin.isType(tmp$_1 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT), List) ? tmp$_1 : throwCCE();
      var tmp$_6;
      var n_0 = 0;
      while (n_0 < rawTimelines_0.size) {
        this._parseSlotTimeline_s8jyv4$(rawTimelines_0.get_za3lpa$((tmp$_6 = n_0, n_0 = tmp$_6 + 1 | 0, tmp$_6)));
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().FFD) != null) {
      var rawTimelines_1 = Kotlin.isType(tmp$_2 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().FFD), List) ? tmp$_2 : throwCCE();
      var tmp$_7;
      var n_1 = 0;
      loop_label: while (n_1 < rawTimelines_1.size) {
        var rawTimeline = rawTimelines_1.get_za3lpa$((tmp$_7 = n_1, n_1 = tmp$_7 + 1 | 0, tmp$_7));
        callback$break: do {
          var tmp$_8, tmp$_9, tmp$_10;
          var skinName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline, DataParser$Companion_getInstance().SKIN, DataParser$Companion_getInstance().DEFAULT_NAME);
          var slotName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline, DataParser$Companion_getInstance().SLOT, '');
          var displayName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline, DataParser$Companion_getInstance().NAME, '');
          if (skinName.length === 0) {
            skinName = DataParser$Companion_getInstance().DEFAULT_NAME;
          }this._slot = (tmp$_8 = this._armature) != null ? tmp$_8.getSlot_pdl1vj$(slotName) : null;
          this._mesh = (tmp$_9 = this._armature) != null ? tmp$_9.getMesh_6hosri$(skinName, slotName, displayName) : null;
          if (this._slot == null || this._mesh == null) {
            break callback$break;
          }var timeline = this._parseTimeline_xmmrf7$(rawTimeline, null, DataParser$Companion_getInstance().FRAME, TimelineType$SlotDeform_getInstance(), FrameValueType$FLOAT_getInstance(), 0, getCallableRef('_parseSlotDeformFrame', function ($receiver, rawData, frameStart, frameCount) {
            return $receiver._parseSlotDeformFrame_nxjb40$(rawData, frameStart, frameCount);
          }.bind(null, this)));
          if (timeline != null) {
            (tmp$_10 = this._animation) != null ? (tmp$_10.addSlotTimeline_h179rx$(slotName, timeline), Unit) : null;
          }this._slot = null;
          this._mesh = null;
        }
         while (false);
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().IK) != null) {
      var rawTimelines_2 = Kotlin.isType(tmp$_3 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().IK), List) ? tmp$_3 : throwCCE();
      var tmp$_11;
      var n_2 = 0;
      loop_label: while (n_2 < rawTimelines_2.size) {
        var rawTimeline_0 = rawTimelines_2.get_za3lpa$((tmp$_11 = n_2, n_2 = tmp$_11 + 1 | 0, tmp$_11));
        callback$break: do {
          var tmp$_12, tmp$_13;
          var constraintName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline_0, DataParser$Companion_getInstance().NAME, '');
          tmp$_12 = ensureNotNull(this._armature).getConstraint_61zpoe$(constraintName);
          if (tmp$_12 == null) {
            break callback$break;
          }var constraint = tmp$_12;
          var timeline_0 = this._parseTimeline_xmmrf7$(rawTimeline_0, null, DataParser$Companion_getInstance().FRAME, TimelineType$IKConstraint_getInstance(), FrameValueType$INT_getInstance(), 2, getCallableRef('_parseIKConstraintFrame', function ($receiver, rawData, frameStart, frameCount) {
            return $receiver._parseIKConstraintFrame_nxjb40$(rawData, frameStart, frameCount);
          }.bind(null, this)));
          if (timeline_0 != null) {
            (tmp$_13 = this._animation) != null ? (tmp$_13.addConstraintTimeline_h179rx$(constraintName, timeline_0), Unit) : null;
          }}
         while (false);
      }
    }if (get_length_1(this._actionFrames_eyxsnf$_0) > 0) {
      ensureNotNull(this._animation).actionTimeline = this._parseTimeline_xmmrf7$(null, (tmp$_4 = this._actionFrames_eyxsnf$_0) == null || Kotlin.isType(tmp$_4, ArrayList) ? tmp$_4 : throwCCE(), '', TimelineType$Action_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseActionFrameRaw', function ($receiver, frame, frameStart, frameCount) {
        return $receiver._parseActionFrameRaw_nxjb40$(frame, frameStart, frameCount);
      }.bind(null, this)));
      set_length_1(this._actionFrames_eyxsnf$_0, 0);
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE) != null) {
      var rawTimelines_3 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE);
      var $receiver = ObjectDataParser$Companion_getInstance().get_dynList_ntq51o$(rawTimelines_3);
      var tmp$_14;
      var n_3 = 0;
      loop_label: while (n_3 < $receiver.size) {
        var rawTimeline_1 = $receiver.get_za3lpa$((tmp$_14 = n_3, n_3 = tmp$_14 + 1 | 0, tmp$_14));
        callback$break: do {
          var tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20;
          var timelineType = TimelineType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawTimeline_1, DataParser$Companion_getInstance().TYPE, TimelineType$Action_getInstance().id));
          var timelineName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline_1, DataParser$Companion_getInstance().NAME, '');
          var timeline_1 = null;
          switch (timelineType.name) {
            case 'Action':
              break;
            case 'SlotDisplay':
            case 'SlotZIndex':
            case 'BoneAlpha':
            case 'SlotAlpha':
            case 'AnimationProgress':
            case 'AnimationWeight':
              if (timelineType === TimelineType$SlotDisplay_getInstance()) {
                this._frameValueType_ucgpqr$_0 = FrameValueType$STEP_getInstance();
                this._frameValueScale_giiyd9$_0 = 1.0;
              } else {
                this._frameValueType_ucgpqr$_0 = FrameValueType$INT_getInstance();
                if (timelineType === TimelineType$SlotZIndex_getInstance()) {
                  this._frameValueScale_giiyd9$_0 = 1.0;
                } else if (timelineType === TimelineType$AnimationProgress_getInstance() || timelineType === TimelineType$AnimationWeight_getInstance()) {
                  this._frameValueScale_giiyd9$_0 = 10000.0;
                } else {
                  this._frameValueScale_giiyd9$_0 = 100.0;
                }
              }

              if (timelineType === TimelineType$BoneAlpha_getInstance() || timelineType === TimelineType$SlotAlpha_getInstance() || timelineType === TimelineType$AnimationWeight_getInstance()) {
                this._frameDefaultValue_3xk5qe$_0 = 1.0;
              } else {
                this._frameDefaultValue_3xk5qe$_0 = 0.0;
              }

              if (timelineType === TimelineType$AnimationProgress_getInstance() && animation.blendType !== AnimationBlendType$None_getInstance()) {
                timeline_1 = this.pool.animationTimelineData.borrow();
                var animaitonTimeline = timeline_1;
                animaitonTimeline.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline_1, DataParser$Companion_getInstance().X, 0.0);
                animaitonTimeline.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline_1, DataParser$Companion_getInstance().Y, 0.0);
              }
              timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_1, null, DataParser$Companion_getInstance().FRAME, timelineType, this._frameValueType_ucgpqr$_0, 1, getCallableRef('_parseSingleValueFrame', function ($receiver, rawData, frameStart, frameCount) {
                return $receiver._parseSingleValueFrame_nxjb40$(rawData, frameStart, frameCount);
              }.bind(null, this)), timeline_1);
              break;
            case 'BoneTranslate':
            case 'BoneRotate':
            case 'BoneScale':
            case 'IKConstraint':
            case 'AnimationParameter':
              if (timelineType === TimelineType$IKConstraint_getInstance() || timelineType === TimelineType$AnimationParameter_getInstance()) {
                this._frameValueType_ucgpqr$_0 = FrameValueType$INT_getInstance();
                if (timelineType === TimelineType$AnimationParameter_getInstance()) {
                  this._frameValueScale_giiyd9$_0 = 10000.0;
                } else {
                  this._frameValueScale_giiyd9$_0 = 100.0;
                }
              } else {
                if (timelineType === TimelineType$BoneRotate_getInstance()) {
                  this._frameValueScale_giiyd9$_0 = Transform$Companion_getInstance().DEG_RAD;
                } else {
                  this._frameValueScale_giiyd9$_0 = 1.0;
                }
                this._frameValueType_ucgpqr$_0 = FrameValueType$FLOAT_getInstance();
              }

              if (timelineType === TimelineType$BoneScale_getInstance() || timelineType === TimelineType$IKConstraint_getInstance()) {
                this._frameDefaultValue_3xk5qe$_0 = 1.0;
              } else {
                this._frameDefaultValue_3xk5qe$_0 = 0.0;
              }

              timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_1, null, DataParser$Companion_getInstance().FRAME, timelineType, this._frameValueType_ucgpqr$_0, 2, getCallableRef('_parseDoubleValueFrame', function ($receiver, rawData, frameStart, frameCount) {
                return $receiver._parseDoubleValueFrame_nxjb40$(rawData, frameStart, frameCount);
              }.bind(null, this)));
              break;
            case 'ZOrder':
              break;
            case 'Surface':
              tmp$_16 = (tmp$_15 = this._armature) != null ? tmp$_15.getBone_pdl1vj$(timelineName) : null;
              if (tmp$_16 == null) {
                break callback$break;
              }
              var surface = tmp$_16;
              this._geometry = surface.geometry;
              timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_1, null, DataParser$Companion_getInstance().FRAME, timelineType, FrameValueType$FLOAT_getInstance(), 0, getCallableRef('_parseDeformFrame', function ($receiver, rawData, frameStart, frameCount) {
                return $receiver._parseDeformFrame_nxjb40$(rawData, frameStart, frameCount);
              }.bind(null, this)));
              this._geometry = null;
              break;
            case 'SlotDeform':
              this._geometry = this.findGeometryInTimeline_g4bg7p$_0(timelineName);
              if (this._geometry == null) {
                break callback$break;
              }
              timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_1, null, DataParser$Companion_getInstance().FRAME, timelineType, FrameValueType$FLOAT_getInstance(), 0, getCallableRef('_parseDeformFrame', function ($receiver, rawData, frameStart, frameCount) {
                return $receiver._parseDeformFrame_nxjb40$(rawData, frameStart, frameCount);
              }.bind(null, this)));
              this._geometry = null;
              break;
            case 'SlotColor':
              timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_1, null, DataParser$Companion_getInstance().FRAME, timelineType, FrameValueType$INT_getInstance(), 1, getCallableRef('_parseSlotColorFrame', function ($receiver, rawData, frameStart, frameCount) {
                return $receiver._parseSlotColorFrame_nxjb40$(rawData, frameStart, frameCount);
              }.bind(null, this)));
              break;
            default:break;
          }
          if (timeline_1 != null) {
            switch (timelineType.name) {
              case 'Action':
                break;
              case 'ZOrder':
                break;
              case 'BoneTranslate':
              case 'BoneRotate':
              case 'BoneScale':
              case 'Surface':
              case 'BoneAlpha':
                (tmp$_17 = this._animation) != null ? (tmp$_17.addBoneTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
                break;
              case 'SlotDisplay':
              case 'SlotColor':
              case 'SlotDeform':
              case 'SlotZIndex':
              case 'SlotAlpha':
                (tmp$_18 = this._animation) != null ? (tmp$_18.addSlotTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
                break;
              case 'IKConstraint':
                (tmp$_19 = this._animation) != null ? (tmp$_19.addConstraintTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
                break;
              case 'AnimationProgress':
              case 'AnimationWeight':
              case 'AnimationParameter':
                (tmp$_20 = this._animation) != null ? (tmp$_20.addAnimationTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
                break;
              default:break;
            }
          }}
         while (false);
      }
    }this._animation = null;
    return animation;
  };
  ObjectDataParser.prototype._parseTimeline_xmmrf7$ = function (rawData, rawFrames, framesKey, timelineType, frameValueType, frameValueCount, frameParser, timeline) {
    if (timeline === void 0)
      timeline = null;
    var tmp$, tmp$_0;
    var timeline_0 = timeline;
    var frameParser_0 = frameParser;
    var rawFrames_0 = rawFrames;
    var tmp$_1 = rawData != null;
    if (tmp$_1) {
      tmp$_1 = framesKey.length > 0;
    }var tmp$_2 = tmp$_1;
    if (tmp$_2) {
      tmp$_2 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, framesKey) != null;
    }if (tmp$_2) {
      rawFrames_0 = (tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, framesKey)) == null || Kotlin.isType(tmp$, ArrayList) ? tmp$ : throwCCE();
    }if (rawFrames_0 == null) {
      return null;
    }var keyFrameCount = get_length_1(rawFrames_0);
    if (keyFrameCount === 0) {
      return null;
    }var frameIntArrayLength = get_length(this._frameIntArray_4wyde4$_0);
    var frameFloatArrayLength = get_length_0(this._frameFloatArray_204v09$_0);
    var timelineOffset = get_length_0(this._timelineArray_a4oiyd$_0);
    if (timeline_0 == null) {
      timeline_0 = this.pool.timelineData.borrow();
    }timeline_0.type = timelineType;
    timeline_0.offset = timelineOffset;
    this._frameValueType_ucgpqr$_0 = frameValueType;
    this._timeline = timeline_0;
    tmp$_0 = this._timelineArray_a4oiyd$_0;
    set_length_0(tmp$_0, get_length_0(tmp$_0) + (5 + keyFrameCount) | 0);
    if (rawData != null) {
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 0 | 0, round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0) * 100));
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 1 | 0, round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().OFFSET, 0.0) * 100));
    } else {
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 0 | 0, 100.0);
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 1 | 0, 0.0);
    }
    this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 2 | 0, keyFrameCount);
    this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 3 | 0, frameValueCount);
    switch (this._frameValueType_ucgpqr$_0.name) {
      case 'STEP':
        this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 4 | 0, 0.0);
        break;
      case 'INT':
        this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 4 | 0, frameIntArrayLength - ensureNotNull(this._animation).frameIntOffset | 0);
        break;
      case 'FLOAT':
        this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 4 | 0, frameFloatArrayLength - ensureNotNull(this._animation).frameFloatOffset | 0);
        break;
    }
    if (keyFrameCount === 1) {
      timeline_0.frameIndicesOffset = -1;
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 5 + 0 | 0, frameParser_0(rawFrames_0.get_za3lpa$(0), 0, 0) - ensureNotNull(this._animation).frameOffset | 0);
    } else {
      var totalFrameCount = ensureNotNull(this._animation).frameCount + 1 | 0;
      var frameIndices = ensureNotNull(this._data).frameIndices;
      var frameIndicesOffset = get_length(frameIndices);
      set_length(frameIndices, get_length(frameIndices) + totalFrameCount | 0);
      timeline_0.frameIndicesOffset = frameIndicesOffset;
      var iK = 0;
      var frameStart = 0;
      var frameCount = 0;
      for (var i = 0; i < totalFrameCount; i++) {
        if ((frameStart + frameCount | 0) <= i && iK < keyFrameCount) {
          var rawFrame = rawFrames_0.get_za3lpa$(iK);
          frameStart = i;
          if (iK === (keyFrameCount - 1 | 0)) {
            frameCount = ensureNotNull(this._animation).frameCount - frameStart | 0;
          } else {
            if (Kotlin.isType(rawFrame, ActionFrame)) {
              frameCount = this._actionFrames_eyxsnf$_0.get_za3lpa$(iK + 1 | 0).frameStart - frameStart | 0;
            } else {
              frameCount = numberToInt(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawFrame, DataParser$Companion_getInstance().DURATION, 1.0));
            }
          }
          this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + 5 + iK | 0, frameParser_0(rawFrame, frameStart, frameCount) - ensureNotNull(this._animation).frameOffset | 0);
          iK = iK + 1 | 0;
        }frameIndices.set_vux9f0$(frameIndicesOffset + i | 0, iK - 1 | 0);
      }
    }
    this._timeline = null;
    return timeline_0;
  };
  ObjectDataParser.prototype._parseBoneTimeline_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '')) : null;
    if (tmp$_0 == null) {
      return;
    }var bone = tmp$_0;
    this._bone = bone;
    tmp$_3 = this._armature;
    tmp$_2 = (tmp$_1 = this._bone) != null ? tmp$_1.name : null;
    this._slot = tmp$_3 != null ? tmp$_3.getSlot_pdl1vj$(tmp$_2) : null;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSLATE_FRAME) != null) {
      this._frameDefaultValue_3xk5qe$_0 = 0.0;
      this._frameValueScale_giiyd9$_0 = 1.0;
      var timeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().TRANSLATE_FRAME, TimelineType$BoneTranslate_getInstance(), FrameValueType$FLOAT_getInstance(), 2, getCallableRef('_parseDoubleValueFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseDoubleValueFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline != null) {
        (tmp$_4 = this._animation) != null ? (tmp$_4.addBoneTimeline_h179rx$(bone.name, timeline), Unit) : null;
      }}if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ROTATE_FRAME) != null) {
      this._frameDefaultValue_3xk5qe$_0 = 0.0;
      this._frameValueScale_giiyd9$_0 = 1.0;
      var timeline_0 = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().ROTATE_FRAME, TimelineType$BoneRotate_getInstance(), FrameValueType$FLOAT_getInstance(), 2, getCallableRef('_parseBoneRotateFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseBoneRotateFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline_0 != null) {
        (tmp$_5 = this._animation) != null ? (tmp$_5.addBoneTimeline_h179rx$(bone.name, timeline_0), Unit) : null;
      }}if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SCALE_FRAME) != null) {
      this._frameDefaultValue_3xk5qe$_0 = 1.0;
      this._frameValueScale_giiyd9$_0 = 1.0;
      var timeline_1 = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().SCALE_FRAME, TimelineType$BoneScale_getInstance(), FrameValueType$FLOAT_getInstance(), 2, getCallableRef('_parseBoneScaleFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseBoneScaleFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline_1 != null) {
        (tmp$_6 = this._animation) != null ? (tmp$_6.addBoneTimeline_h179rx$(bone.name, timeline_1), Unit) : null;
      }}if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().FRAME) != null) {
      var timeline_2 = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().FRAME, TimelineType$BoneAll_getInstance(), FrameValueType$FLOAT_getInstance(), 6, getCallableRef('_parseBoneAllFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseBoneAllFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline_2 != null) {
        (tmp$_7 = this._animation) != null ? (tmp$_7.addBoneTimeline_h179rx$(bone.name, timeline_2), Unit) : null;
      }}this._bone = null;
    this._slot = null;
  };
  ObjectDataParser.prototype._parseSlotTimeline_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getSlot_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '')) : null;
    if (tmp$_0 == null) {
      return;
    }var slot = tmp$_0;
    var displayTimeline;
    var colorTimeline;
    this._slot = slot;
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().DISPLAY_FRAME) != null) {
      displayTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().DISPLAY_FRAME, TimelineType$SlotDisplay_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseSlotDisplayFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotDisplayFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    } else {
      displayTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().FRAME, TimelineType$SlotDisplay_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseSlotDisplayFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotDisplayFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR_FRAME) != null) {
      colorTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().COLOR_FRAME, TimelineType$SlotColor_getInstance(), FrameValueType$INT_getInstance(), 1, getCallableRef('_parseSlotColorFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotColorFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    } else {
      colorTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().FRAME, TimelineType$SlotColor_getInstance(), FrameValueType$INT_getInstance(), 1, getCallableRef('_parseSlotColorFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotColorFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }
    if (displayTimeline != null) {
      (tmp$_1 = this._animation) != null ? (tmp$_1.addSlotTimeline_h179rx$(slot.name, displayTimeline), Unit) : null;
    }if (colorTimeline != null) {
      (tmp$_2 = this._animation) != null ? (tmp$_2.addSlotTimeline_h179rx$(slot.name, colorTimeline), Unit) : null;
    }this._slot = null;
  };
  ObjectDataParser.prototype._parseFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$;
    var frameOffset = get_length_0(this._frameArray_fpzfut$_0);
    tmp$ = this._frameArray_fpzfut$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 1 | 0);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 0 | 0, frameStart);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseTweenFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
    if (frameCount > 0) {
      if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().CURVE) != null) {
        var sampleCount = frameCount + 1 | 0;
        set_length_0(this._helpArray_chz897$_0, sampleCount);
        var isOmited = this._samplingEasingCurve_bwr4ee$_0(ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().CURVE)), this._helpArray_chz897$_0);
        tmp$ = this._frameArray_fpzfut$_0;
        set_length_0(tmp$, get_length_0(tmp$) + (2 + get_length_0(this._helpArray_chz897$_0)) | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, TweenType$Curve_getInstance().id);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 | 0, isOmited ? sampleCount : -sampleCount | 0);
        for (var i = 0; i < sampleCount; i++) {
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 3 + i | 0, round(this._helpArray_chz897$_0.get_za3lpa$(i) * 10000.0));
        }
      } else {
        var noTween = -2.0;
        var tweenEasing = noTween;
        if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TWEEN_EASING) != null) {
          tweenEasing = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().TWEEN_EASING, noTween);
        }if (tweenEasing === noTween) {
          tmp$_0 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_0, get_length_0(tmp$_0) + 1 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, TweenType$None_getInstance().id);
        } else if (tweenEasing === 0.0) {
          tmp$_1 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_1, get_length_0(tmp$_1) + 1 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, TweenType$Line_getInstance().id);
        } else if (tweenEasing < 0.0) {
          tmp$_2 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_2, get_length_0(tmp$_2) + 2 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, TweenType$QuadIn_getInstance().id);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 | 0, round(-tweenEasing * 100.0));
        } else if (tweenEasing <= 1.0) {
          tmp$_3 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_3, get_length_0(tmp$_3) + 2 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, TweenType$QuadOut_getInstance().id);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 | 0, round(tweenEasing * 100.0));
        } else {
          tmp$_4 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_4, get_length_0(tmp$_4) + 2 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, TweenType$QuadInOut_getInstance().id);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 | 0, round(tweenEasing * 100.0 - 100.0));
        }
      }
    } else {
      tmp$_5 = this._frameArray_fpzfut$_0;
      set_length_0(tmp$_5, get_length_0(tmp$_5) + 1 | 0);
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, TweenType$None_getInstance().id);
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSingleValueFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = 0;
    switch (this._frameValueType_ucgpqr$_0.name) {
      case 'STEP':
        frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
        tmp$ = this._frameArray_fpzfut$_0;
        set_length_0(tmp$, get_length_0(tmp$) + 1 | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, this._frameDefaultValue_3xk5qe$_0));
        break;
      case 'INT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset = get_length(this._frameIntArray_4wyde4$_0);
        tmp$_0 = this._frameIntArray_4wyde4$_0;
        set_length(tmp$_0, get_length(tmp$_0) + 1 | 0);
        this._frameIntArray_4wyde4$_0.set_vux9f0$(frameValueOffset, numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0)));
        break;
      case 'FLOAT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset_0 = get_length_0(this._frameFloatArray_204v09$_0);
        tmp$_1 = this._frameFloatArray_204v09$_0;
        set_length_0(tmp$_1, get_length_0(tmp$_1) + 1 | 0);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameValueOffset_0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0);
        break;
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseDoubleValueFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = 0;
    switch (this._frameValueType_ucgpqr$_0.name) {
      case 'STEP':
        frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
        tmp$ = this._frameArray_fpzfut$_0;
        set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, this._frameDefaultValue_3xk5qe$_0));
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, this._frameDefaultValue_3xk5qe$_0));
        break;
      case 'INT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset = get_length(this._frameIntArray_4wyde4$_0);
        tmp$_0 = this._frameIntArray_4wyde4$_0;
        set_length(tmp$_0, get_length(tmp$_0) + 2 | 0);
        this._frameIntArray_4wyde4$_0.set_vux9f0$(frameValueOffset, numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0)));
        this._frameIntArray_4wyde4$_0.set_vux9f0$(frameValueOffset + 1 | 0, numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0)));
        break;
      case 'FLOAT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset_0 = get_length_0(this._frameFloatArray_204v09$_0);
        tmp$_1 = this._frameFloatArray_204v09$_0;
        set_length_0(tmp$_1, get_length_0(tmp$_1) + 2 | 0);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameValueOffset_0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameValueOffset_0 + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0);
        break;
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseActionFrameRaw_nxjb40$ = function (frame, frameStart, frameCount) {
    var tmp$;
    return this._parseActionFrame_e3a4yv$(Kotlin.isType(tmp$ = frame, ActionFrame) ? tmp$ : throwCCE(), frameStart, frameCount);
  };
  ObjectDataParser.prototype._parseActionFrame_e3a4yv$ = function (frame, frameStart, frameCount) {
    var tmp$;
    var frameOffset = get_length_0(this._frameArray_fpzfut$_0);
    var actionCount = get_length(frame.actions);
    tmp$ = this._frameArray_fpzfut$_0;
    set_length_0(tmp$, get_length_0(tmp$) + (2 + actionCount) | 0);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 0 | 0, frameStart);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 0 + 1 | 0, actionCount);
    for (var i = 0; i < actionCount; i++) {
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 0 + 2 + i | 0, frame.actions.get_za3lpa$(i));
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseZOrderFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var rawData_0 = Kotlin.isType(tmp$ = rawData, Map) ? tmp$ : throwCCE();
    var frameOffset = this._parseFrame_nxjb40$(rawData_0, frameStart, frameCount);
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData_0, DataParser$Companion_getInstance().Z_ORDER) != null) {
      var rawZOrder = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(rawData_0.get_11rb$(DataParser$Companion_getInstance().Z_ORDER));
      if (rawZOrder.length > 0) {
        var slotCount = get_length_1(ensureNotNull(this._armature).sortedSlots);
        var unchanged = new Int32Array(slotCount - (rawZOrder.length / 2 | 0) | 0);
        var zOrders = new Int32Array(slotCount);
        for (var i = 0; i < unchanged.length; i++) {
          unchanged[i] = 0;
        }
        for (var i_0 = 0; i_0 < slotCount; i_0++) {
          zOrders[i_0] = -1;
        }
        var originalIndex = 0;
        var unchangedIndex = 0;
        for (var i_1 = 0; i_1 < rawZOrder.length; i_1 += 2) {
          var slotIndex = numberToInt(rawZOrder[i_1]);
          var zOrderOffset = numberToInt(rawZOrder[i_1 + 1 | 0]);
          while (originalIndex !== slotIndex) {
            unchanged[tmp$_1 = unchangedIndex, unchangedIndex = tmp$_1 + 1 | 0, tmp$_1] = (tmp$_0 = originalIndex, originalIndex = tmp$_0 + 1 | 0, tmp$_0);
          }
          var index = originalIndex + zOrderOffset | 0;
          zOrders[index] = (tmp$_2 = originalIndex, originalIndex = tmp$_2 + 1 | 0, tmp$_2);
        }
        while (originalIndex < slotCount) {
          unchanged[tmp$_4 = unchangedIndex, unchangedIndex = tmp$_4 + 1 | 0, tmp$_4] = (tmp$_3 = originalIndex, originalIndex = tmp$_3 + 1 | 0, tmp$_3);
        }
        tmp$_5 = this._frameArray_fpzfut$_0;
        set_length_0(tmp$_5, get_length_0(tmp$_5) + (1 + slotCount) | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, slotCount);
        var i_2 = slotCount;
        while ((tmp$_6 = i_2, i_2 = tmp$_6 - 1 | 0, tmp$_6) > 0) {
          if (zOrders[i_2] === -1) {
            this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 + i_2 | 0, unchanged[unchangedIndex = unchangedIndex - 1 | 0, unchangedIndex]);
          } else {
            this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 + i_2 | 0, zOrders[i_2]);
          }
        }
        return frameOffset;
      }}tmp$_7 = this._frameArray_fpzfut$_0;
    set_length_0(tmp$_7, get_length_0(tmp$_7) + 1 | 0);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, 0.0);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneAllFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    this._helpTransform_9prt94$_0.identity();
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM) != null) {
      this._parseTransform_hr8bzd$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM), this._helpTransform_9prt94$_0, 1.0);
    }var rotation = this._helpTransform_9prt94$_0.rotation;
    if (frameStart !== 0) {
      if (this._prevClockwise_hkgu6c$_0 === 0.0) {
        rotation = this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().normalizeRadian_14dthe$(rotation - this._prevRotation_6xu96o$_0);
      } else {
        if (this._prevClockwise_hkgu6c$_0 > 0 ? rotation >= this._prevRotation_6xu96o$_0 : rotation <= this._prevRotation_6xu96o$_0) {
          this._prevClockwise_hkgu6c$_0 = this._prevClockwise_hkgu6c$_0 > 0 ? this._prevClockwise_hkgu6c$_0 - 1 : this._prevClockwise_hkgu6c$_0 + 1;
        }rotation = this._prevRotation_6xu96o$_0 + rotation - this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().PI_D * this._prevClockwise_hkgu6c$_0;
      }
    }this._prevClockwise_hkgu6c$_0 = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().TWEEN_ROTATE, 0.0);
    this._prevRotation_6xu96o$_0 = rotation;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 6 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), this._helpTransform_9prt94$_0.x);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), this._helpTransform_9prt94$_0.y);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_2 = frameFloatOffset, frameFloatOffset = tmp$_2 + 1 | 0, tmp$_2), rotation);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_3 = frameFloatOffset, frameFloatOffset = tmp$_3 + 1 | 0, tmp$_3), this._helpTransform_9prt94$_0.skew);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_4 = frameFloatOffset, frameFloatOffset = tmp$_4 + 1 | 0, tmp$_4), this._helpTransform_9prt94$_0.scaleX);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_5 = frameFloatOffset, frameFloatOffset = tmp$_5 + 1 | 0, tmp$_5), this._helpTransform_9prt94$_0.scaleY);
    this._parseActionDataInFrame_2hm7da$_0(rawData, frameStart, this._bone, this._slot);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneTranslateFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, 0.0));
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, 0.0));
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneRotateFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var rotation = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE, 0.0) * Transform$Companion_getInstance().DEG_RAD;
    if (frameStart !== 0) {
      if (this._prevClockwise_hkgu6c$_0 === 0.0) {
        rotation = this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().normalizeRadian_14dthe$(rotation - this._prevRotation_6xu96o$_0);
      } else {
        if (this._prevClockwise_hkgu6c$_0 > 0 ? rotation >= this._prevRotation_6xu96o$_0 : rotation <= this._prevRotation_6xu96o$_0) {
          this._prevClockwise_hkgu6c$_0 = this._prevClockwise_hkgu6c$_0 > 0 ? this._prevClockwise_hkgu6c$_0 - 1 : this._prevClockwise_hkgu6c$_0 + 1;
        }rotation = this._prevRotation_6xu96o$_0 + rotation - this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().PI_D * this._prevClockwise_hkgu6c$_0;
      }
    }this._prevClockwise_hkgu6c$_0 = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().CLOCK_WISE, 0.0);
    this._prevRotation_6xu96o$_0 = rotation;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), rotation);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW, 0.0) * Transform$Companion_getInstance().DEG_RAD);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneScaleFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, 1.0));
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, 1.0));
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSlotDisplayFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0;
    var frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
    tmp$ = this._frameArray_fpzfut$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 1 | 0);
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE) != null) {
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, 0.0));
    } else {
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().DISPLAY_INDEX, 0.0));
    }
    this._parseActionDataInFrame_2hm7da$_0(rawData, frameStart, (tmp$_0 = this._slot) != null ? tmp$_0.parent : null, this._slot);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSlotColorFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var colorOffset = -1;
    var tmp$_20 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE) != null;
    if (!tmp$_20) {
      tmp$_20 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR) != null;
    }if (tmp$_20) {
      var rawColor = (tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE)) != null ? tmp$ : ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR);
      tmp$_0 = ObjectDataParser$Companion_getInstance().get_dynKeys_ntq51o$(rawColor).iterator();
      while (tmp$_0.hasNext()) {
        var k = tmp$_0.next();
        this._parseColorTransform_lkycw$(rawColor, this._helpColorTransform_ymc72f$_0);
        colorOffset = get_length(this._colorArray_y9qg6z$_0);
        tmp$_1 = this._colorArray_y9qg6z$_0;
        set_length(tmp$_1, get_length(tmp$_1) + 8 | 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_2 = colorOffset, colorOffset = tmp$_2 + 1 | 0, tmp$_2), numberToInt(round(this._helpColorTransform_ymc72f$_0.alphaMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_3 = colorOffset, colorOffset = tmp$_3 + 1 | 0, tmp$_3), numberToInt(round(this._helpColorTransform_ymc72f$_0.redMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_4 = colorOffset, colorOffset = tmp$_4 + 1 | 0, tmp$_4), numberToInt(round(this._helpColorTransform_ymc72f$_0.greenMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_5 = colorOffset, colorOffset = tmp$_5 + 1 | 0, tmp$_5), numberToInt(round(this._helpColorTransform_ymc72f$_0.blueMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_6 = colorOffset, colorOffset = tmp$_6 + 1 | 0, tmp$_6), numberToInt(round(this._helpColorTransform_ymc72f$_0.alphaOffset)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_7 = colorOffset, colorOffset = tmp$_7 + 1 | 0, tmp$_7), numberToInt(round(this._helpColorTransform_ymc72f$_0.redOffset)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_8 = colorOffset, colorOffset = tmp$_8 + 1 | 0, tmp$_8), numberToInt(round(this._helpColorTransform_ymc72f$_0.greenOffset)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_9 = colorOffset, colorOffset = tmp$_9 + 1 | 0, tmp$_9), numberToInt(round(this._helpColorTransform_ymc72f$_0.blueOffset)));
        colorOffset = colorOffset - 8 | 0;
        break;
      }
    }if (colorOffset < 0) {
      if (this._defaultColorOffset_1uxjcs$_0 < 0) {
        colorOffset = get_length(this._colorArray_y9qg6z$_0);
        this._defaultColorOffset_1uxjcs$_0 = colorOffset;
        tmp$_10 = this._colorArray_y9qg6z$_0;
        set_length(tmp$_10, get_length(tmp$_10) + 8 | 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_11 = colorOffset, colorOffset = tmp$_11 + 1 | 0, tmp$_11), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_12 = colorOffset, colorOffset = tmp$_12 + 1 | 0, tmp$_12), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_13 = colorOffset, colorOffset = tmp$_13 + 1 | 0, tmp$_13), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_14 = colorOffset, colorOffset = tmp$_14 + 1 | 0, tmp$_14), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_15 = colorOffset, colorOffset = tmp$_15 + 1 | 0, tmp$_15), 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_16 = colorOffset, colorOffset = tmp$_16 + 1 | 0, tmp$_16), 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_17 = colorOffset, colorOffset = tmp$_17 + 1 | 0, tmp$_17), 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_18 = colorOffset, colorOffset = tmp$_18 + 1 | 0, tmp$_18), 0);
      }colorOffset = this._defaultColorOffset_1uxjcs$_0;
    }var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
    tmp$_19 = this._frameIntArray_4wyde4$_0;
    set_length(tmp$_19, get_length(tmp$_19) + 1 | 0);
    this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset, colorOffset);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSlotDeformFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var rawVertices = (tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES)) != null ? ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(tmp$) : null;
    var offset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().OFFSET, 0);
    var vertexCount = this._intArray_9mqhtz$_0.get_za3lpa$(ensureNotNull(this._mesh).geometry.offset + 0 | 0);
    var meshName = '' + ((tmp$_1 = (tmp$_0 = this._mesh) != null ? tmp$_0.parent : null) != null ? tmp$_1.name : null) + '_' + ((tmp$_2 = this._slot) != null ? tmp$_2.name : null) + '_' + ((tmp$_3 = this._mesh) != null ? tmp$_3.name : null);
    var weight = ensureNotNull((tmp$_4 = this._mesh) != null ? tmp$_4.geometry : null).weight;
    var x;
    var y;
    var iB = 0;
    var iV = 0;
    if (weight != null) {
      var rawSlotPose = this._weightSlotPose_ms86fe$_0.get_11rb$(meshName);
      this._helpMatrixA_y87r8k$_0.copyFromArray_fcbbnx$(ensureNotNull(rawSlotPose).data, 0);
      tmp$_5 = this._frameFloatArray_204v09$_0;
      set_length_0(tmp$_5, get_length_0(tmp$_5) + (weight.count * 2 | 0) | 0);
      iB = weight.offset + 2 + get_length_1(weight.bones) | 0;
    } else {
      tmp$_6 = this._frameFloatArray_204v09$_0;
      set_length_0(tmp$_6, get_length_0(tmp$_6) + (vertexCount * 2 | 0) | 0);
    }
    tmp$_7 = vertexCount * 2 | 0;
    for (var i = 0; i < tmp$_7; i += 2) {
      if (rawVertices == null) {
        x = 0.0;
        y = 0.0;
      } else {
        if (i < offset || (i - offset | 0) >= rawVertices.length) {
          x = 0.0;
        } else {
          x = rawVertices[i - offset | 0];
        }
        if ((i + 1 | 0) < offset || (i + 1 - offset | 0) >= rawVertices.length) {
          y = 0.0;
        } else {
          y = rawVertices[i + 1 - offset | 0];
        }
      }
      if (weight != null) {
        var rawBonePoses = ensureNotNull(this._weightBonePoses_3ak4ir$_0.get_11rb$(meshName));
        var vertexBoneCount = this._intArray_9mqhtz$_0.get_za3lpa$((tmp$_8 = iB, iB = tmp$_8 + 1 | 0, tmp$_8));
        this._helpMatrixA_y87r8k$_0.transformPoint_cck2st$(x, y, this._helpPoint_jjup10$_0, true);
        x = this._helpPoint_jjup10$_0.x;
        y = this._helpPoint_jjup10$_0.y;
        for (var j = 0; j < vertexBoneCount; j++) {
          var boneIndex = this._intArray_9mqhtz$_0.get_za3lpa$((tmp$_9 = iB, iB = tmp$_9 + 1 | 0, tmp$_9));
          this._helpMatrixB_y87r9f$_0.copyFromArray_fcbbnx$(rawBonePoses.data, (boneIndex * 7 | 0) + 1 | 0);
          this._helpMatrixB_y87r9f$_0.invert();
          this._helpMatrixB_y87r9f$_0.transformPoint_cck2st$(x, y, this._helpPoint_jjup10$_0, true);
          this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + (tmp$_10 = iV, iV = tmp$_10 + 1 | 0, tmp$_10) | 0, this._helpPoint_jjup10$_0.x);
          this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + (tmp$_11 = iV, iV = tmp$_11 + 1 | 0, tmp$_11) | 0, this._helpPoint_jjup10$_0.y);
        }
      } else {
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i | 0, x);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i + 1 | 0, y);
      }
    }
    if (frameStart === 0) {
      var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
      tmp$_12 = this._frameIntArray_4wyde4$_0;
      set_length(tmp$_12, get_length(tmp$_12) + 5 | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 0 | 0, ensureNotNull(this._mesh).geometry.offset);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 1 | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 2 | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 3 | 0, 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 4 | 0, frameFloatOffset - ensureNotNull(this._animation).frameFloatOffset | 0);
      this._timelineArray_a4oiyd$_0.set_5wr77w$(ensureNotNull(this._timeline).offset + 3 | 0, frameIntOffset - ensureNotNull(this._animation).frameIntOffset | 0);
    }return frameOffset;
  };
  ObjectDataParser.prototype._parseIKConstraintFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
    tmp$ = this._frameIntArray_4wyde4$_0;
    set_length(tmp$, get_length(tmp$) + 2 | 0);
    this._frameIntArray_4wyde4$_0.set_vux9f0$((tmp$_0 = frameIntOffset, frameIntOffset = tmp$_0 + 1 | 0, tmp$_0), ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().BEND_POSITIVE, true) ? 1 : 0);
    this._frameIntArray_4wyde4$_0.set_vux9f0$((tmp$_1 = frameIntOffset, frameIntOffset = tmp$_1 + 1 | 0, tmp$_1), numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().WEIGHT, 1.0) * 100.0)));
    return frameOffset;
  };
  ObjectDataParser.prototype._parseActionData_vpjj18$ = function (rawData, type, bone, slot) {
    var tmp$;
    var actions = ArrayList_init();
    if (typeof rawData === 'string') {
      var action = this.pool.actionData.borrow();
      action.type = type;
      action.name = rawData;
      action.bone = bone;
      action.slot = slot;
      push(actions, action);
    } else if (Kotlin.isType(rawData, List)) {
      var $receiver = Kotlin.isType(tmp$ = rawData, List) ? tmp$ : throwCCE();
      var tmp$_0;
      var n = 0;
      while (n < $receiver.size) {
        var rawAction = $receiver.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        var action_0 = this.pool.actionData.borrow();
        if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawAction, DataParser$Companion_getInstance().GOTO_AND_PLAY) != null) {
          action_0.type = ActionType$Play_getInstance();
          action_0.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().GOTO_AND_PLAY, '');
        } else {
          if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawAction, DataParser$Companion_getInstance().TYPE) != null && typeof rawAction.get_11rb$(DataParser$Companion_getInstance().TYPE) === 'string') {
            action_0.type = DataParser$Companion_getInstance()._getActionType_pdl1vj$((tmp$_1 = rawAction.get_11rb$(DataParser$Companion_getInstance().TYPE)) != null ? tmp$_1.toString() : null);
          } else {
            action_0.type = ActionType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawAction, DataParser$Companion_getInstance().TYPE, type.id));
          }
          action_0.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().NAME, '');
        }
        if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawAction, DataParser$Companion_getInstance().BONE) != null) {
          var boneName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().BONE, '');
          action_0.bone = (tmp$_2 = this._armature) != null ? tmp$_2.getBone_pdl1vj$(boneName) : null;
        } else {
          action_0.bone = bone;
        }
        if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawAction, DataParser$Companion_getInstance().SLOT) != null) {
          var slotName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().SLOT, '');
          action_0.slot = (tmp$_3 = this._armature) != null ? tmp$_3.getSlot_pdl1vj$(slotName) : null;
        } else {
          action_0.slot = slot;
        }
        var userData = null;
        if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawAction, DataParser$Companion_getInstance().INTS) != null) {
          if (userData == null) {
            userData = this.pool.userData.borrow();
          }var rawInts = ObjectDataParser$Companion_getInstance().get_intArrayList_ntq51o$(rawAction.get_11rb$(DataParser$Companion_getInstance().INTS));
          tmp$_4 = rawInts.iterator();
          while (tmp$_4.hasNext()) {
            var rawValue = tmp$_4.next();
            userData.addInt_za3lpa$(rawValue);
          }
        }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawAction, DataParser$Companion_getInstance().FLOATS) != null) {
          if (userData == null) {
            userData = this.pool.userData.borrow();
          }var rawFloats = ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(rawAction.get_11rb$(DataParser$Companion_getInstance().FLOATS));
          tmp$_5 = rawFloats.iterator();
          while (tmp$_5.hasNext()) {
            var rawValue_0 = tmp$_5.next();
            userData.addFloat_14dthe$(rawValue_0);
          }
        }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawAction, DataParser$Companion_getInstance().STRINGS) != null) {
          if (userData == null) {
            userData = this.pool.userData.borrow();
          }var rawStrings = Kotlin.isType(tmp$_6 = rawAction.get_11rb$(DataParser$Companion_getInstance().STRINGS), ArrayList) ? tmp$_6 : throwCCE();
          tmp$_7 = rawStrings.iterator();
          while (tmp$_7.hasNext()) {
            var rawValue_1 = tmp$_7.next();
            userData.addString_61zpoe$(rawValue_1);
          }
        }action_0.data = userData;
        push(actions, action_0);
      }
    }return actions;
  };
  ObjectDataParser.prototype._parseDeformFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var rawVertices = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES) != null ? (tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES)) != null ? ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(tmp$) : null : (tmp$_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE)) != null ? ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(tmp$_0) : null;
    var offset = numberToInt(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().OFFSET, 0.0));
    var vertexCount = this._intArray_9mqhtz$_0.get_za3lpa$(ensureNotNull(this._geometry).offset + 0 | 0);
    var weight = ensureNotNull(this._geometry).weight;
    var x;
    var y;
    if (weight == null) {
      tmp$_1 = this._frameFloatArray_204v09$_0;
      set_length_0(tmp$_1, get_length_0(tmp$_1) + (vertexCount * 2 | 0) | 0);
      tmp$_2 = vertexCount * 2 | 0;
      for (var i = 0; i < tmp$_2; i += 2) {
        if (rawVertices != null) {
          if (i < offset || (i - offset | 0) >= get_length_0(rawVertices)) {
            x = 0.0;
          } else {
            x = rawVertices.get_za3lpa$(i - offset | 0);
          }
          if ((i + 1 | 0) < offset || (i + 1 - offset | 0) >= get_length_0(rawVertices)) {
            y = 0.0;
          } else {
            y = rawVertices.get_za3lpa$(i + 1 - offset | 0);
          }
        } else {
          x = 0.0;
          y = 0.0;
        }
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i | 0, x);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i + 1 | 0, y);
      }
    }if (frameStart === 0) {
      var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
      tmp$_3 = this._frameIntArray_4wyde4$_0;
      set_length(tmp$_3, get_length(tmp$_3) + 5 | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 0 | 0, ensureNotNull(this._geometry).offset);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 1 | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 2 | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 3 | 0, 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + 4 | 0, frameFloatOffset - ensureNotNull(this._animation).frameFloatOffset | 0);
      this._timelineArray_a4oiyd$_0.set_5wr77w$(ensureNotNull(this._timeline).offset + 3 | 0, frameIntOffset - ensureNotNull(this._animation).frameIntOffset | 0);
    }return frameOffset;
  };
  ObjectDataParser.prototype._parseTransform_hr8bzd$ = function (rawData, transform, scale) {
    transform.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, 0.0) * scale;
    transform.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, 0.0) * scale;
    var tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ROTATE) != null;
    if (!tmp$) {
      tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SKEW) != null;
    }if (tmp$) {
      transform.rotation = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE, 0.0) * Transform$Companion_getInstance().DEG_RAD);
      transform.skew = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW, 0.0) * Transform$Companion_getInstance().DEG_RAD);
    } else {
      var tmp$_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SKEW_X) != null;
      if (!tmp$_0) {
        tmp$_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SKEW_Y) != null;
      }if (tmp$_0) {
        transform.rotation = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW_Y, 0.0) * Transform$Companion_getInstance().DEG_RAD);
        transform.skew = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW_X, 0.0) * Transform$Companion_getInstance().DEG_RAD) - transform.rotation;
      }}
    transform.scaleX = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE_X, 1.0);
    transform.scaleY = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE_Y, 1.0);
  };
  ObjectDataParser.prototype._parseColorTransform_lkycw$ = function (rawData, color) {
    color.alphaMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA_MULTIPLIER, 100.0) * 0.01;
    color.redMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().RED_MULTIPLIER, 100.0) * 0.01;
    color.greenMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().GREEN_MULTIPLIER, 100.0) * 0.01;
    color.blueMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().BLUE_MULTIPLIER, 100.0) * 0.01;
    color.alphaOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().ALPHA_OFFSET, 0);
    color.redOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().RED_OFFSET, 0);
    color.greenOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().GREEN_OFFSET, 0);
    color.blueOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().BLUE_OFFSET, 0);
  };
  ObjectDataParser.prototype._parseGeometry_9lxtbg$ = function (rawData, geometry) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29;
    var rawVertices = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES));
    var vertexCount = rawVertices.length / 2 | 0;
    var triangleCount = 0;
    var geometryOffset = get_length(this._intArray_9mqhtz$_0);
    var verticesOffset = get_length_0(this._floatArray_brc40c$_0);
    geometry.offset = geometryOffset;
    geometry.data = this._data;
    tmp$ = this._intArray_9mqhtz$_0;
    set_length(tmp$, get_length(tmp$) + 4 | 0);
    this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + 0 | 0, vertexCount);
    this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + 2 | 0, verticesOffset);
    this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + 3 | 0, -1);
    tmp$_0 = this._floatArray_brc40c$_0;
    set_length_0(tmp$_0, get_length_0(tmp$_0) + (vertexCount * 2 | 0) | 0);
    tmp$_1 = vertexCount * 2 | 0;
    for (var i = 0; i < tmp$_1; i++) {
      this._floatArray_brc40c$_0.set_5wr77w$(verticesOffset + i | 0, rawVertices[i]);
    }
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRIANGLES) != null) {
      var rawTriangles = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TRIANGLES));
      triangleCount = rawTriangles.length / 3 | 0;
      tmp$_2 = this._intArray_9mqhtz$_0;
      set_length(tmp$_2, get_length(tmp$_2) + (triangleCount * 3 | 0) | 0);
      tmp$_3 = triangleCount * 3 | 0;
      for (var i_0 = 0; i_0 < tmp$_3; i_0++) {
        this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + 4 + i_0 | 0, numberToInt(rawTriangles[i_0]));
      }
    }this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + 1 | 0, triangleCount);
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().UVS) != null) {
      var rawUVs = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().UVS));
      var uvOffset = verticesOffset + (vertexCount * 2 | 0) | 0;
      tmp$_4 = this._floatArray_brc40c$_0;
      set_length_0(tmp$_4, get_length_0(tmp$_4) + (vertexCount * 2 | 0) | 0);
      tmp$_5 = vertexCount * 2 | 0;
      for (var i_1 = 0; i_1 < tmp$_5; i_1++) {
        this._floatArray_brc40c$_0.set_5wr77w$(uvOffset + i_1 | 0, rawUVs[i_1]);
      }
    }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().WEIGHTS) != null) {
      var rawWeights = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().WEIGHTS));
      var weightCount = (rawWeights.length - vertexCount | 0) / 2 | 0;
      var weightOffset = get_length(this._intArray_9mqhtz$_0);
      var floatOffset = get_length_0(this._floatArray_brc40c$_0);
      var weightBoneCount = 0;
      var sortedBones = (tmp$_6 = this._armature) != null ? tmp$_6.sortedBones : null;
      var weight = this.pool.weightData.borrow();
      weight.count = weightCount;
      weight.offset = weightOffset;
      tmp$_7 = this._intArray_9mqhtz$_0;
      set_length(tmp$_7, get_length(tmp$_7) + (2 + weightBoneCount + vertexCount + weightCount) | 0);
      this._intArray_9mqhtz$_0.set_vux9f0$(weightOffset + 1 | 0, floatOffset);
      if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE_POSE) != null) {
        var rawSlotPose = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT_POSE));
        var rawBonePoses = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE_POSE));
        var weightBoneIndices = new IntArrayList();
        weightBoneCount = rawBonePoses.length / 7 | 0;
        set_length(weightBoneIndices, weightBoneCount);
        tmp$_8 = weightBoneCount;
        for (var i_2 = 0; i_2 < tmp$_8; i_2++) {
          var rawBoneIndex = numberToInt(rawBonePoses[i_2 * 7 | 0]);
          var bone = this._rawBones.get_za3lpa$(rawBoneIndex);
          weight.addBone_ejz9f2$(bone);
          weightBoneIndices.set_vux9f0$(i_2, rawBoneIndex);
          this._intArray_9mqhtz$_0.set_vux9f0$(weightOffset + 2 + i_2 | 0, ensureNotNull(sortedBones).indexOf_11rb$(bone));
        }
        tmp$_9 = this._floatArray_brc40c$_0;
        set_length_0(tmp$_9, get_length_0(tmp$_9) + (weightCount * 3 | 0) | 0);
        this._helpMatrixA_y87r8k$_0.copyFromArray_fcbbnx$(rawSlotPose, 0);
        var iW = 0;
        var iB = weightOffset + 2 + weightBoneCount | 0;
        var iV = floatOffset;
        for (var i_3 = 0; i_3 < vertexCount; i_3++) {
          var iD = i_3 * 2 | 0;
          var vertexBoneCount = numberToInt(rawWeights[tmp$_10 = iW, iW = tmp$_10 + 1 | 0, tmp$_10]);
          this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_11 = iB, iB = tmp$_11 + 1 | 0, tmp$_11), vertexBoneCount);
          var x = this._floatArray_brc40c$_0.get_za3lpa$(verticesOffset + iD | 0);
          var y = this._floatArray_brc40c$_0.get_za3lpa$(verticesOffset + iD + 1 | 0);
          this._helpMatrixA_y87r8k$_0.transformPoint_cck2st$(x, y, this._helpPoint_jjup10$_0);
          x = this._helpPoint_jjup10$_0.x;
          y = this._helpPoint_jjup10$_0.y;
          for (var j = 0; j < vertexBoneCount; j++) {
            var rawBoneIndex_0 = numberToInt(rawWeights[tmp$_12 = iW, iW = tmp$_12 + 1 | 0, tmp$_12]);
            var boneIndex = weightBoneIndices.indexOf_11rb$(rawBoneIndex_0);
            this._helpMatrixB_y87r9f$_0.copyFromArray_fcbbnx$(rawBonePoses, (boneIndex * 7 | 0) + 1 | 0);
            this._helpMatrixB_y87r9f$_0.invert();
            this._helpMatrixB_y87r9f$_0.transformPoint_cck2st$(x, y, this._helpPoint_jjup10$_0);
            this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_13 = iB, iB = tmp$_13 + 1 | 0, tmp$_13), boneIndex);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_15 = iV, iV = tmp$_15 + 1 | 0, tmp$_15), rawWeights[tmp$_14 = iW, iW = tmp$_14 + 1 | 0, tmp$_14]);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_16 = iV, iV = tmp$_16 + 1 | 0, tmp$_16), this._helpPoint_jjup10$_0.x);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_17 = iV, iV = tmp$_17 + 1 | 0, tmp$_17), this._helpPoint_jjup10$_0.y);
          }
        }
      } else {
        var rawBones = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().BONES));
        weightBoneCount = rawBones.length;
        tmp$_18 = weightBoneCount;
        for (var i_4 = 0; i_4 < tmp$_18; i_4++) {
          var rawBoneIndex_1 = numberToInt(rawBones[i_4]);
          var bone_0 = this._rawBones.get_za3lpa$(rawBoneIndex_1);
          weight.addBone_ejz9f2$(bone_0);
          this._intArray_9mqhtz$_0.set_vux9f0$(weightOffset + 2 + i_4 | 0, ensureNotNull(sortedBones).indexOf_11rb$(bone_0));
        }
        tmp$_19 = this._floatArray_brc40c$_0;
        set_length_0(tmp$_19, get_length_0(tmp$_19) + (weightCount * 3 | 0) | 0);
        var iW_0 = 0;
        var iV_0 = 0;
        var iB_0 = weightOffset + 2 + weightBoneCount | 0;
        var iF = floatOffset;
        for (var i_5 = 0; i_5 < weightCount; i_5++) {
          var vertexBoneCount_0 = numberToInt(rawWeights[tmp$_20 = iW_0, iW_0 = tmp$_20 + 1 | 0, tmp$_20]);
          this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_21 = iB_0, iB_0 = tmp$_21 + 1 | 0, tmp$_21), vertexBoneCount_0);
          for (var j_0 = 0; j_0 < vertexBoneCount_0; j_0++) {
            var boneIndex_0 = rawWeights[tmp$_22 = iW_0, iW_0 = tmp$_22 + 1 | 0, tmp$_22];
            var boneWeight = rawWeights[tmp$_23 = iW_0, iW_0 = tmp$_23 + 1 | 0, tmp$_23];
            var x_0 = rawVertices[tmp$_24 = iV_0, iV_0 = tmp$_24 + 1 | 0, tmp$_24];
            var y_0 = rawVertices[tmp$_25 = iV_0, iV_0 = tmp$_25 + 1 | 0, tmp$_25];
            this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_26 = iB_0, iB_0 = tmp$_26 + 1 | 0, tmp$_26), indexOf_1(rawBones, boneIndex_0));
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_27 = iF, iF = tmp$_27 + 1 | 0, tmp$_27), boneWeight);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_28 = iF, iF = tmp$_28 + 1 | 0, tmp$_28), x_0);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_29 = iF, iF = tmp$_29 + 1 | 0, tmp$_29), y_0);
          }
        }
      }
      geometry.weight = weight;
    }};
  ObjectDataParser.prototype._parseArray_s8jyv4$ = function (rawData) {
    set_length(this._intArray_9mqhtz$_0, 0);
    set_length_0(this._floatArray_brc40c$_0, 0);
    set_length(this._frameIntArray_4wyde4$_0, 0);
    set_length_0(this._frameFloatArray_204v09$_0, 0);
    set_length_0(this._frameArray_fpzfut$_0, 0);
    set_length_0(this._timelineArray_a4oiyd$_0, 0);
    set_length(this._colorArray_y9qg6z$_0, 0);
  };
  ObjectDataParser.prototype._modifyArray = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    if (get_length(this._intArray_9mqhtz$_0) % 2 !== 0) {
      push_1(this._intArray_9mqhtz$_0, 0);
    }if (get_length(this._frameIntArray_4wyde4$_0) % 2 !== 0) {
      push_1(this._frameIntArray_4wyde4$_0, 0);
    }if (get_length_0(this._frameArray_fpzfut$_0) % 2 !== 0) {
      push_0(this._frameArray_fpzfut$_0, 0.0);
    }if (get_length_0(this._timelineArray_a4oiyd$_0) % 2 !== 0) {
      push_0(this._timelineArray_a4oiyd$_0, 0.0);
    }if (get_length_0(this._timelineArray_a4oiyd$_0) % 2 !== 0) {
      push_1(this._colorArray_y9qg6z$_0, 0);
    }var l1 = get_length(this._intArray_9mqhtz$_0) * 2 | 0;
    var l2 = get_length_0(this._floatArray_brc40c$_0) * 4 | 0;
    var l3 = get_length(this._frameIntArray_4wyde4$_0) * 2 | 0;
    var l4 = get_length_0(this._frameFloatArray_204v09$_0) * 4 | 0;
    var l5 = get_length_0(this._frameArray_fpzfut$_0) * 2 | 0;
    var l6 = get_length_0(this._timelineArray_a4oiyd$_0) * 2 | 0;
    var l7 = get_length(this._colorArray_y9qg6z$_0) * 2 | 0;
    var lTotal = l1 + l2 + l3 + l4 + l5 + l6 + l7 | 0;
    var binary = new ArrayBuffer_init(lTotal);
    var intArray = sliceInt16BufferByteOffset(binary, 0, get_length(this._intArray_9mqhtz$_0));
    var floatArray = sliceFloat32BufferByteOffset(binary, l1, get_length_0(this._floatArray_brc40c$_0));
    var frameIntArray = sliceInt16BufferByteOffset(binary, l1 + l2 | 0, get_length(this._frameIntArray_4wyde4$_0));
    var frameFloatArray = sliceFloat32BufferByteOffset(binary, l1 + l2 + l3 | 0, get_length_0(this._frameFloatArray_204v09$_0));
    var frameArray = sliceInt16BufferByteOffset(binary, l1 + l2 + l3 + l4 | 0, get_length_0(this._frameArray_fpzfut$_0));
    var timelineArray = sliceUint16BufferByteOffset(binary, l1 + l2 + l3 + l4 + l5 | 0, get_length_0(this._timelineArray_a4oiyd$_0));
    var colorArray = sliceInt16BufferByteOffset(binary, l1 + l2 + l3 + l4 + l5 + l6 | 0, get_length(this._colorArray_y9qg6z$_0));
    tmp$ = get_length(this._intArray_9mqhtz$_0);
    for (var i = 0; i < tmp$; i++) {
      intArray[i] = toShort(this._intArray_9mqhtz$_0.get_za3lpa$(i));
    }
    tmp$_0 = get_length_0(this._floatArray_brc40c$_0);
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      floatArray[i_0] = this._floatArray_brc40c$_0.get_za3lpa$(i_0);
    }
    tmp$_1 = get_length(this._frameIntArray_4wyde4$_0);
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      frameIntArray[i_1] = toShort(this._frameIntArray_4wyde4$_0.get_za3lpa$(i_1));
    }
    tmp$_2 = get_length_0(this._frameFloatArray_204v09$_0);
    for (var i_2 = 0; i_2 < tmp$_2; i_2++) {
      frameFloatArray[i_2] = this._frameFloatArray_204v09$_0.get_za3lpa$(i_2);
    }
    tmp$_3 = get_length_0(this._frameArray_fpzfut$_0);
    for (var i_3 = 0; i_3 < tmp$_3; i_3++) {
      frameArray[i_3] = toShort(numberToInt(this._frameArray_fpzfut$_0.get_za3lpa$(i_3)));
    }
    tmp$_4 = get_length_0(this._timelineArray_a4oiyd$_0);
    for (var i_4 = 0; i_4 < tmp$_4; i_4++) {
      timelineArray.set_vux9f0$(i_4, numberToInt(this._timelineArray_a4oiyd$_0.get_za3lpa$(i_4)));
    }
    tmp$_5 = get_length(this._colorArray_y9qg6z$_0);
    for (var i_5 = 0; i_5 < tmp$_5; i_5++) {
      colorArray[i_5] = toShort(this._colorArray_y9qg6z$_0.get_za3lpa$(i_5));
    }
    (tmp$_6 = this._data) != null ? (tmp$_6.binary = binary) : null;
    (tmp$_7 = this._data) != null ? (tmp$_7.intArray = intArray) : null;
    (tmp$_8 = this._data) != null ? (tmp$_8.floatArray = floatArray) : null;
    (tmp$_9 = this._data) != null ? (tmp$_9.frameIntArray = toFloat(frameIntArray)) : null;
    (tmp$_10 = this._data) != null ? (tmp$_10.frameFloatArray = frameFloatArray) : null;
    (tmp$_11 = this._data) != null ? (tmp$_11.frameArray = frameArray) : null;
    (tmp$_12 = this._data) != null ? (tmp$_12.timelineArray = timelineArray) : null;
    (tmp$_13 = this._data) != null ? (tmp$_13.colorArray = colorArray) : null;
    this._defaultColorOffset_1uxjcs$_0 = -1;
  };
  ObjectDataParser.prototype.parseDragonBonesData_p20sj2$$default = function (rawData, scale) {
    var tmp$, tmp$_0, tmp$_1;
    var version = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().VERSION, '');
    var compatibleVersion = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().COMPATIBLE_VERSION, '');
    if (indexOf_0(DataParser$Companion_getInstance().DATA_VERSIONS, version) >= 0 || indexOf_0(DataParser$Companion_getInstance().DATA_VERSIONS, compatibleVersion) >= 0) {
      var data = this.pool.dragonBonesData.borrow();
      data.version = version;
      data.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
      data.frameRate = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().FRAME_RATE, 24);
      if (data.frameRate === 0) {
        data.frameRate = 24;
      }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ARMATURE) != null) {
        this._data = data;
        this._parseArray_s8jyv4$(rawData);
        var rawArmatures = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().ARMATURE), List) ? tmp$ : throwCCE();
        var tmp$_2;
        var n = 0;
        while (n < rawArmatures.size) {
          data.addArmature_ecf29l$(this._parseArmature_p20sj2$(rawArmatures.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2)), scale));
        }
        if (((tmp$_0 = this._data) != null ? tmp$_0.binary : null) == null) {
          this._modifyArray();
        }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().STAGE) != null) {
          data.stage = data.getArmature_61zpoe$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().STAGE, ''));
        } else if (get_length_1(data.armatureNames) > 0) {
          data.stage = data.getArmature_61zpoe$(data.armatureNames.get_za3lpa$(0));
        }this._data = null;
      }if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TEXTURE_ATLAS) != null) {
        this._rawTextureAtlases = (tmp$_1 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().TEXTURE_ATLAS)) == null || Kotlin.isType(tmp$_1, ArrayList) ? tmp$_1 : throwCCE();
      }return data;
    } else {
      console_getInstance().assert_8kj6y5$(false, 'Nonsupport data version: ' + version + '\n' + 'Please convert DragonBones data to support version.\n' + 'Read more: https://github.com/DragonBones/Tools/');
    }
    return null;
  };
  ObjectDataParser.prototype.parseTextureAtlasData_fec78$$default = function (rawData, textureAtlasData, scale) {
    var tmp$, tmp$_0, tmp$_1;
    if (rawData == null) {
      if (this._rawTextureAtlases == null || get_length_1(ensureNotNull(this._rawTextureAtlases)) === 0) {
        return false;
      }var rawTextureAtlas = ensureNotNull(this._rawTextureAtlases).get_za3lpa$((tmp$ = this._rawTextureAtlasIndex, this._rawTextureAtlasIndex = tmp$ + 1 | 0, tmp$));
      this.parseTextureAtlasData_fec78$(rawTextureAtlas, textureAtlasData, scale);
      if (this._rawTextureAtlasIndex >= get_length_1(ensureNotNull(this._rawTextureAtlases))) {
        this._rawTextureAtlasIndex = 0;
        this._rawTextureAtlases = null;
      }return true;
    }textureAtlasData.width = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().WIDTH, 0);
    textureAtlasData.height = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().HEIGHT, 0);
    textureAtlasData.scale = scale === 1.0 ? 1.0 / ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0) : scale;
    textureAtlasData.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    textureAtlasData.imagePath = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().IMAGE_PATH, '');
    if (ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TEXTURE) != null) {
      var rawTextures = Kotlin.isType(tmp$_0 = ObjectDataParser$Companion_getInstance().getDynamic_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TEXTURE), ArrayList) ? tmp$_0 : throwCCE();
      tmp$_1 = get_length_1(rawTextures);
      for (var i = 0; i < tmp$_1; i++) {
        var rawTexture = rawTextures.get_za3lpa$(i);
        var frameWidth = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_WIDTH, -1.0);
        var frameHeight = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_HEIGHT, -1.0);
        var textureData = textureAtlasData.createTexture();
        textureData.rotated = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawTexture, DataParser$Companion_getInstance().ROTATED, false);
        textureData.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTexture, DataParser$Companion_getInstance().NAME, '');
        textureData.region.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().X, 0.0);
        textureData.region.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().Y, 0.0);
        textureData.region.width = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().WIDTH, 0.0);
        textureData.region.height = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().HEIGHT, 0.0);
        if (frameWidth > 0.0 && frameHeight > 0.0) {
          textureData.frame = TextureData$Companion_getInstance().createRectangle();
          ensureNotNull(textureData.frame).x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_X, 0.0);
          ensureNotNull(textureData.frame).y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_Y, 0.0);
          ensureNotNull(textureData.frame).width = frameWidth;
          ensureNotNull(textureData.frame).height = frameHeight;
        }textureAtlasData.addTexture_w2prfj$(textureData);
      }
    }return true;
  };
  ObjectDataParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectDataParser',
    interfaces: [DataParser]
  };
  function ActionFrame() {
    this.frameStart = 0;
    this.actions = new IntArrayList();
  }
  ActionFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionFrame',
    interfaces: []
  };
  function get_lengthSet($receiver) {
    return $receiver.size;
  }
  function set_lengthSet($receiver, value) {
    $receiver.size = value;
  }
  function get_lengthSet_0($receiver) {
    return $receiver.size;
  }
  function set_lengthSet_0($receiver, value) {
    $receiver.size = value;
  }
  function get_length($receiver) {
    return $receiver.size;
  }
  function set_length($receiver, value) {
    $receiver.size = value;
  }
  function get_length_0($receiver) {
    return $receiver.size;
  }
  function set_length_0($receiver, value) {
    $receiver.size = value;
  }
  function get_lengthSet_1($receiver) {
    return $receiver.size;
  }
  function set_lengthSet_1($receiver, value) {
    var tmp$;
    if (value === 0)
      $receiver.clear();
    else {
      while ($receiver.size > value)
        $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
      while ($receiver.size < value)
        (Kotlin.isType(tmp$ = $receiver, ArrayList) ? tmp$ : throwCCE()).add_11rb$(null);
    }
  }
  function get_length_1($receiver) {
    return $receiver.size;
  }
  function set_length_1($receiver, value) {
    set_lengthSet_1($receiver, value);
  }
  function push($receiver, value) {
    $receiver.add_11rb$(value);
  }
  function unshift($receiver, value) {
    $receiver.add_wxm5ur$(0, value);
  }
  function push_0($receiver, value) {
    $receiver.add_14dthe$(value);
  }
  function push_1($receiver, value) {
    $receiver.add_za3lpa$(value);
  }
  function splice($receiver, removeOffset, removeCount, itemsToAdd) {
    for (var n = 0; n < removeCount; n++)
      $receiver.removeAt_za3lpa$(removeOffset);
    for (var n_0 = 0; n_0 < itemsToAdd.length; n_0++) {
      $receiver.add_wxm5ur$(removeOffset + n_0 | 0, itemsToAdd[n_0]);
    }
  }
  function toFloat($receiver) {
    var tmp$;
    var out = sliceFloat32Buffer(new ArrayBuffer_init($receiver.length * 4 | 0));
    tmp$ = out.length;
    for (var n = 0; n < tmp$; n++) {
      out[n] = $receiver[n];
    }
    return out;
  }
  function console() {
    console_instance = this;
  }
  console.prototype.warn_vqirvp$ = function (msg) {
    println(joinToString(msg, '\n'));
  };
  console.prototype.error_vqirvp$ = function (msg) {
    println(joinToString(msg, '\n'));
  };
  console.prototype.assert_8kj6y5$ = function (cond, msg) {
    if (cond)
      throw AssertionError_init(msg);
  };
  console.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'console',
    interfaces: []
  };
  var console_instance = null;
  function console_getInstance() {
    if (console_instance === null) {
      new console();
    }return console_instance;
  }
  function KorgeDbArmatureDisplay() {
    Container.call(this);
    this._events_0 = ArrayList_init();
    this._eventsReturnQueue_0 = ArrayList_init();
    this.debugDraw = false;
    this._debugDraw_0 = false;
    this._armature_0 = null;
    this._debugDrawer_0 = null;
    this.addUpdatable_b4k9x1$(KorgeDbArmatureDisplay_init$lambda(this));
    this.eventListeners_0 = LinkedHashMap_init_0();
  }
  KorgeDbArmatureDisplay.prototype.dbInit_9a3g6p$ = function (armature) {
    this._armature_0 = armature;
  };
  KorgeDbArmatureDisplay.prototype.dbClear = function () {
    this._armature_0 = null;
    this._debugDrawer_0 = null;
  };
  KorgeDbArmatureDisplay.prototype.dbUpdate = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    tmp$ = this._armature_0;
    if (tmp$ == null) {
      return;
    }var armature = tmp$;
    var drawed = DragonBones$Companion_getInstance().debugDraw || this.debugDraw;
    if (drawed || this._debugDraw_0) {
      this._debugDraw_0 = drawed;
      if (this._debugDraw_0) {
        if (this._debugDrawer_0 === null) {
          this._debugDrawer_0 = new Image(bitmap.Bitmaps.transparent);
          var boneDrawer = new Graphics();
          (tmp$_0 = this._debugDrawer_0) != null ? (tmp$_0.addChild_l5rad2$(boneDrawer), Unit) : null;
        }this.addChild_l5rad2$(ensureNotNull(this._debugDrawer_0));
        var boneDrawer_0 = Kotlin.isType(tmp$_2 = (tmp$_1 = this._debugDrawer_0) != null ? tmp$_1.getChildAt_za3lpa$(0) : null, Graphics) ? tmp$_2 : throwCCE();
        boneDrawer_0.clear();
        var bones = armature.getBones();
        tmp$_3 = get_length_1(bones);
        for (var i = 0; i < tmp$_3; i++) {
          var bone = bones.get_za3lpa$(i);
          var boneLength = bone.boneData.length;
          var startX = bone.globalTransformMatrix.tx;
          var startY = bone.globalTransformMatrix.ty;
          var endX = startX + bone.globalTransformMatrix.a * boneLength;
          var endY = startY + bone.globalTransformMatrix.b * boneLength;
          boneDrawer_0.lineStyle_881qbv$(2.0, color.Colors.PURPLE, 0.7);
          boneDrawer_0.moveTo_lu1900$(startX, startY);
          boneDrawer_0.lineTo_lu1900$(endX, endY);
          boneDrawer_0.lineStyle_881qbv$(0.0, color.Colors.BLACK, 0.0);
          boneDrawer_0.beginFill_kzd6w3$(color.Colors.PURPLE, 0.7);
          circle(boneDrawer_0, startX, startY, 3.0);
          boneDrawer_0.endFill();
        }
        var slots = armature.getSlots();
        tmp$_4 = get_length_1(slots);
        for (var i_0 = 0; i_0 < tmp$_4; i_0++) {
          var slot = slots.get_za3lpa$(i_0);
          var boundingBoxData = slot.boundingBoxData;
          if (boundingBoxData != null) {
            var child = (tmp$_6 = (tmp$_5 = this._debugDrawer_0) != null ? tmp$_5.getChildByName_61zpoe$(slot.name) : null) == null || Kotlin.isType(tmp$_6, Graphics) ? tmp$_6 : null;
            if (child == null) {
              child = new Graphics();
              child.name = slot.name;
              (tmp$_7 = this._debugDrawer_0) != null ? (tmp$_7.addChild_l5rad2$(child), Unit) : null;
            }child.clear();
            child.lineStyle_881qbv$(2.0, color.Colors.RED, 0.7);
            switch (boundingBoxData.type.name) {
              case 'Rectangle':
                rect(child, -boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                break;
              case 'Ellipse':
                rect(child, -boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                break;
              case 'Polygon':
                var vertices = (Kotlin.isType(tmp$_8 = boundingBoxData, PolygonBoundingBoxData) ? tmp$_8 : throwCCE()).vertices;
                for (var i_1 = 0; i_1 < vertices.length; i_1 += 2) {
                  var x = vertices[i_1];
                  var y = vertices[i_1 + 1 | 0];
                  if (i_1 === 0) {
                    child.moveTo_lu1900$(x, y);
                  } else {
                    child.lineTo_lu1900$(x, y);
                  }
                }

                child.lineTo_lu1900$(vertices[0], vertices[1]);
                break;
              default:break;
            }
            child.endFill();
            slot.updateTransformAndMatrix();
            slot.updateGlobalTransform();
            var transform = slot.global;
            var m = new Matrix();
            slot.globalTransformMatrix.toMatrix2d_1ktkmn$(m);
            child.setMatrix_1ktkmn$(m);
          } else {
            var child_0 = (tmp$_9 = this._debugDrawer_0) != null ? tmp$_9.getChildByName_61zpoe$(slot.name) : null;
            if (child_0 != null) {
              (tmp$_10 = this._debugDrawer_0) != null ? (tmp$_10.removeChild_gohfih$(child_0), Unit) : null;
            }}
        }
      } else if (this._debugDrawer_0 !== null && ((tmp$_11 = this._debugDrawer_0) != null ? tmp$_11.parent : null) === this) {
        this.removeChild_gohfih$(this._debugDrawer_0);
      }}};
  KorgeDbArmatureDisplay.prototype.dispose_6taknv$ = function (disposeProxy) {
    var tmp$;
    if (this._armature_0 != null) {
      (tmp$ = this._armature_0) != null ? (tmp$.dispose(), Unit) : null;
      this._armature_0 = null;
    }};
  KorgeDbArmatureDisplay.prototype.destroy = function () {
  };
  KorgeDbArmatureDisplay.prototype.dispatchDBEvent_tiu54o$ = function (type, eventObject) {
    var listeners = this.eventListeners_0.get_11rb$(type);
    if (listeners != null) {
      var tmp$;
      var n = 0;
      while (n < listeners.size) {
        listeners.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$))(eventObject);
      }
    }};
  KorgeDbArmatureDisplay.prototype.hasDBEventListener_61zpoe$ = function (type) {
    return this.eventListeners_0.containsKey_11rb$(type);
  };
  KorgeDbArmatureDisplay.prototype.addDBEventListener_x4mc7b$ = function (type, listener) {
    var $receiver = this.eventListeners_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    tmp$.add_11rb$(listener);
  };
  KorgeDbArmatureDisplay.prototype.removeDBEventListener_x4mc7b$ = function (type, listener) {
    var tmp$;
    (tmp$ = this.eventListeners_0.get_11rb$(type)) != null ? tmp$.remove_11rb$(listener) : null;
  };
  KorgeDbArmatureDisplay.prototype.queueEvent_vah34q$ = function (value) {
    if (!this._events_0.contains_11rb$(value)) {
      this._events_0.add_11rb$(value);
    }};
  KorgeDbArmatureDisplay.prototype.queueReturnEvent_0 = function (obj) {
    if (obj != null && !this._eventsReturnQueue_0.contains_11rb$(obj))
      this._eventsReturnQueue_0.add_11rb$(obj);
  };
  KorgeDbArmatureDisplay.prototype.dispatchQueuedEvents_0 = function () {
    var tmp$;
    if (this._events_0.size <= 0)
      return;
    tmp$ = this._events_0.size;
    for (var i = 0; i < tmp$; i++) {
      var eventObject = this._events_0.get_za3lpa$(i);
      var armature = eventObject.armature;
      if (armature._armatureData != null) {
        armature.eventDispatcher.dispatchDBEvent_tiu54o$(eventObject.type, eventObject);
        if (equals(eventObject.type, EventObject$Companion_getInstance().SOUND_EVENT)) {
          this.dispatchDBEvent_tiu54o$(eventObject.type, eventObject);
        }}this.queueReturnEvent_0(eventObject);
    }
    this._events_0.clear();
  };
  KorgeDbArmatureDisplay.prototype.returnEvents_0 = function () {
    if (this._eventsReturnQueue_0.size <= 0)
      return;
    var $receiver = this._eventsReturnQueue_0;
    var tmp$;
    var n = 0;
    while (n < $receiver.size) {
      $receiver.get_za3lpa$((tmp$ = n, n = tmp$ + 1 | 0, tmp$)).returnToPool();
    }
    this._eventsReturnQueue_0.clear();
  };
  KorgeDbArmatureDisplay.prototype.on_x4mc7b$ = function (type, listener) {
    this.addDBEventListener_x4mc7b$(type, listener);
  };
  Object.defineProperty(KorgeDbArmatureDisplay.prototype, 'armature', {
    get: function () {
      return ensureNotNull(this._armature_0);
    }
  });
  Object.defineProperty(KorgeDbArmatureDisplay.prototype, 'animation', {
    get: function () {
      return ensureNotNull(this._armature_0).animation;
    }
  });
  function KorgeDbArmatureDisplay_init$lambda(this$KorgeDbArmatureDisplay) {
    return function (it) {
      var tmp$;
      this$KorgeDbArmatureDisplay.returnEvents_0();
      (tmp$ = this$KorgeDbArmatureDisplay._armature_0) != null ? (tmp$.advanceTime_14dthe$(it / 1000.0), Unit) : null;
      this$KorgeDbArmatureDisplay.dispatchQueuedEvents_0();
      return Unit;
    };
  }
  KorgeDbArmatureDisplay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbArmatureDisplay',
    interfaces: [IArmatureProxy, Container]
  };
  function KorgeDbFactory(pool, dataParser) {
    if (pool === void 0)
      pool = new BaseObjectPool();
    if (dataParser === void 0)
      dataParser = new ObjectDataParser(pool);
    BaseFactory.call(this, pool, dataParser);
    this.eventManager = new KorgeDbArmatureDisplay();
    this._dragonBonesInstance_2jnee4$_0 = new DragonBones(this.eventManager);
    this._dragonBones = this._dragonBonesInstance_2jnee4$_0;
    println('@TODO: Dragonbones.ticker.shared.add(DragonbonesFactory._clockHandler, DragonbonesFactory)');
  }
  KorgeDbFactory.prototype._buildTextureAtlasData_dju0lx$ = function (textureAtlasData, textureAtlas) {
    var tmp$, tmp$_0;
    var textureAtlasData_0 = (tmp$ = textureAtlasData) == null || Kotlin.isType(tmp$, KorgeDbTextureAtlasData) ? tmp$ : null;
    var textureAtlas_0 = (tmp$_0 = textureAtlas) == null || Kotlin.isType(tmp$_0, Bitmap) ? tmp$_0 : null;
    if (textureAtlasData_0 != null) {
      textureAtlasData_0.renderTexture = textureAtlas_0;
    } else {
      textureAtlasData_0 = this.pool.textureAtlasData.borrow();
    }
    return textureAtlasData_0;
  };
  KorgeDbFactory.prototype._buildArmature_mgwu66$ = function (dataPackage) {
    var armature = this.pool.armature.borrow();
    var armatureDisplay = new KorgeDbArmatureDisplay();
    armature.init_ns4wie$(ensureNotNull(dataPackage.armature), armatureDisplay, armatureDisplay, this._dragonBones);
    return armature;
  };
  KorgeDbFactory.prototype._buildSlot_fs0k2h$ = function (dataPackage, slotData, armature) {
    var slot = this.pool.slot.borrow();
    slot.init_vpgcwf$(slotData, armature, new Image(bitmap.Bitmaps.transparent), new Mesh(void 0, void 0, void 0, void 0, Mesh$DrawModes.Triangles));
    return slot;
  };
  KorgeDbFactory.prototype.buildArmatureDisplay_w74nik$ = function (armatureName, dragonBonesName, skinName, textureAtlasName) {
    if (dragonBonesName === void 0)
      dragonBonesName = '';
    if (skinName === void 0)
      skinName = '';
    if (textureAtlasName === void 0)
      textureAtlasName = '';
    var tmp$;
    var armature = this.buildArmature_w74nik$(armatureName, dragonBonesName, skinName, textureAtlasName);
    if (armature !== null) {
      this._dragonBones.clock.add_tgyvsu$(armature);
      return Kotlin.isType(tmp$ = armature.display, KorgeDbArmatureDisplay) ? tmp$ : throwCCE();
    }return null;
  };
  KorgeDbFactory.prototype.getTextureDisplay_jyasbz$ = function (textureName, textureAtlasName) {
    if (textureAtlasName === void 0)
      textureAtlasName = null;
    var tmp$;
    var textureData = (tmp$ = this._getTextureData_puj7f4$(textureAtlasName !== null ? textureAtlasName : '', textureName)) == null || Kotlin.isType(tmp$, KorgeDbTextureData) ? tmp$ : null;
    if (textureData != null && textureData.renderTexture !== null) {
      return new Image(ensureNotNull(textureData.renderTexture));
    }return null;
  };
  Object.defineProperty(KorgeDbFactory.prototype, 'soundEventManager', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this._dragonBones.eventManager, KorgeDbArmatureDisplay) ? tmp$ : throwCCE();
    }
  });
  KorgeDbFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbFactory',
    interfaces: [BaseFactory]
  };
  function KorgeDbSlot(pool) {
    Slot.call(this, pool);
    this._textureScale_0 = 1.0;
    this._renderDisplay_0 = null;
    this.m_0 = new Matrix();
  }
  KorgeDbSlot.prototype.toString = function () {
    return '[class DragonbonesSlot]';
  };
  KorgeDbSlot.prototype._onClear = function () {
    Slot.prototype._onClear.call(this);
    this._textureScale_0 = 1.0;
    this._renderDisplay_0 = null;
  };
  KorgeDbSlot.prototype._initDisplay_j44yyw$ = function (value, isRetain) {
  };
  KorgeDbSlot.prototype._disposeDisplay_j44yyw$ = function (value, isRelease) {
  };
  KorgeDbSlot.prototype._onUpdateDisplay = function () {
    var tmp$;
    this._renderDisplay_0 = Kotlin.isType(tmp$ = this._display != null ? this._display : this._rawDisplay, View) ? tmp$ : throwCCE();
  };
  KorgeDbSlot.prototype._addDisplay = function () {
    var tmp$, tmp$_0;
    var container = Kotlin.isType(tmp$_0 = (tmp$ = this._armature) != null ? tmp$.display : null, KorgeDbArmatureDisplay) ? tmp$_0 : throwCCE();
    container.addChild_l5rad2$(ensureNotNull(this._renderDisplay_0));
  };
  KorgeDbSlot.prototype._replaceDisplay_za3rmp$ = function (value) {
    var tmp$, tmp$_0, tmp$_1;
    var container = Kotlin.isType(tmp$_0 = (tmp$ = this._armature) != null ? tmp$.display : null, KorgeDbArmatureDisplay) ? tmp$_0 : throwCCE();
    var prevDisplay = Kotlin.isType(tmp$_1 = value, View) ? tmp$_1 : throwCCE();
    container.addChild_l5rad2$(ensureNotNull(this._renderDisplay_0));
    container.swapChildren_1kpf2s$(ensureNotNull(this._renderDisplay_0), prevDisplay);
    container.removeChild_gohfih$(prevDisplay);
    this._textureScale_0 = 1.0;
  };
  KorgeDbSlot.prototype._removeDisplay = function () {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this._renderDisplay_0) != null ? tmp$.parent : null) != null ? (tmp$_0.removeChild_gohfih$(this._renderDisplay_0), Unit) : null;
  };
  KorgeDbSlot.prototype._updateZOrder = function () {
    var tmp$, tmp$_0;
    var container = Kotlin.isType(tmp$_0 = (tmp$ = this._armature) != null ? tmp$.display : null, KorgeDbArmatureDisplay) ? tmp$_0 : throwCCE();
    var index = container.getChildIndex_l5rad2$(ensureNotNull(this._renderDisplay_0));
    if (index === this._zOrder) {
      return;
    }container.addChildAt_pwlnko$(ensureNotNull(this._renderDisplay_0), this._zOrder);
  };
  KorgeDbSlot.prototype._updateVisible = function () {
    var tmp$;
    (tmp$ = this._renderDisplay_0) != null ? (tmp$.visible = (ensureNotNull(this._parent_8be2vx$).visible && this._visible)) : null;
  };
  KorgeDbSlot.prototype._updateBlendMode = function () {
    var tmp$;
    var renderDisplay = this._renderDisplay_0;
    if (renderDisplay != null && renderDisplay.isContainer) {
      switch (this._blendMode.name) {
        case 'Normal':
          tmp$ = BlendMode.INHERIT;
          break;
        case 'Add':
          tmp$ = BlendMode.ADD;
          break;
        case 'Darken':
          tmp$ = BlendMode.DARKEN;
          break;
        case 'Difference':
          tmp$ = BlendMode.DIFFERENCE;
          break;
        case 'HardLight':
          tmp$ = BlendMode.HARDLIGHT;
          break;
        case 'Lighten':
          tmp$ = BlendMode.LIGHTEN;
          break;
        case 'Multiply':
          tmp$ = BlendMode.MULTIPLY;
          break;
        case 'Overlay':
          tmp$ = BlendMode.Companion.OVERLAY;
          break;
        case 'Screen':
          tmp$ = BlendMode.SCREEN;
          break;
        default:tmp$ = renderDisplay.blendMode;
          break;
      }
      renderDisplay.blendMode = tmp$;
    }};
  KorgeDbSlot.prototype._updateColor = function () {
    var tmp$, tmp$_0;
    var alpha = this._colorTransform.alphaMultiplier * this._globalAlpha;
    if (Kotlin.isType(this._renderDisplay_0, Image) || Kotlin.isType(this._renderDisplay_0, Mesh)) {
      var color = (numberToInt(round(this._colorTransform.redMultiplier * 255)) << 16) + (numberToInt(round(this._colorTransform.greenMultiplier * 255)) << 8) + numberToInt(round(this._colorTransform.blueMultiplier * 255)) | 0;
      (tmp$ = this._renderDisplay_0) != null ? (tmp$.tint = RGBA.Companion.invoke_vux9f0$(color, numberToInt(alpha * 255.0))) : null;
    } else {
      (tmp$_0 = this._renderDisplay_0) != null ? (tmp$_0.alpha = alpha) : null;
    }
  };
  KorgeDbSlot.prototype._updateFrame = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    var currentTextureData = (tmp$ = this._textureData) == null || Kotlin.isType(tmp$, KorgeDbTextureData) ? tmp$ : throwCCE();
    if (this._displayIndex >= 0 && this._display !== null && currentTextureData !== null) {
      var currentTextureAtlasData = Kotlin.isType(tmp$_0 = currentTextureData.parent, KorgeDbTextureAtlasData) ? tmp$_0 : throwCCE();
      if (((tmp$_1 = this._armature) != null ? tmp$_1.replacedTexture : null) != null) {
        if (((tmp$_2 = this._armature) != null ? tmp$_2._replaceTextureAtlasData : null) === null) {
          currentTextureAtlasData = this.pool.textureAtlasData.borrow();
          currentTextureAtlasData.copyFrom_igjpxe$(Kotlin.isType(tmp$_3 = currentTextureData.parent, KorgeDbTextureAtlasData) ? tmp$_3 : throwCCE());
          currentTextureAtlasData.renderTexture = (tmp$_5 = (tmp$_4 = this._armature) != null ? tmp$_4.replacedTexture : null) == null || Kotlin.isType(tmp$_5, Bitmap) ? tmp$_5 : null;
          (tmp$_6 = this._armature) != null ? (tmp$_6._replaceTextureAtlasData = currentTextureAtlasData) : null;
        } else {
          currentTextureAtlasData = Kotlin.isType(tmp$_8 = (tmp$_7 = this._armature) != null ? tmp$_7._replaceTextureAtlasData : null, KorgeDbTextureAtlasData) ? tmp$_8 : throwCCE();
        }
        currentTextureData = Kotlin.isType(tmp$_9 = currentTextureAtlasData.getTexture_61zpoe$(currentTextureData.name), KorgeDbTextureData) ? tmp$_9 : throwCCE();
      }var renderTexture = currentTextureData.renderTexture;
      if (renderTexture !== null) {
        if (this._geometryData !== null) {
          var data = ensureNotNull(ensureNotNull(this._geometryData).data);
          var intArray = ensureNotNull(data.intArray);
          var floatArray = ensureNotNull(data.floatArray);
          var vertexCount = intArray[ensureNotNull(this._geometryData).offset + 0 | 0];
          var triangleCount = intArray[ensureNotNull(this._geometryData).offset + 1 | 0];
          var vertexOffset = intArray[ensureNotNull(this._geometryData).offset + 2 | 0];
          if (vertexOffset < 0) {
            vertexOffset = vertexOffset + 65536 | 0;
          }var uvOffset = vertexOffset + (vertexCount * 2 | 0) | 0;
          var scale = ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
          var meshDisplay = Kotlin.isType(tmp$_10 = this._renderDisplay_0, Mesh) ? tmp$_10 : throwCCE();
          var textureAtlasWidth = currentTextureAtlasData.width > 0.0 ? currentTextureAtlasData.width : renderTexture.bmp.width;
          var textureAtlasHeight = currentTextureAtlasData.height > 0.0 ? currentTextureAtlasData.height : renderTexture.bmp.height;
          var region = currentTextureData.region;
          meshDisplay.vertices = sliceFloat32Buffer(new ArrayBuffer_init((vertexCount * 2 | 0) * 4 | 0));
          meshDisplay.uvs = sliceFloat32Buffer(new ArrayBuffer_init((vertexCount * 2 | 0) * 4 | 0));
          meshDisplay.indices = Uint16BufferAlloc(triangleCount * 3 | 0);
          meshDisplay.name = this.name;
          tmp$_11 = vertexCount * 2 | 0;
          for (var i = 0; i < tmp$_11; i++) {
            meshDisplay.vertices[i] = floatArray[vertexOffset + i | 0] * scale;
          }
          tmp$_12 = triangleCount * 3 | 0;
          for (var i_0 = 0; i_0 < tmp$_12; i_0++) {
            meshDisplay.indices.set_vux9f0$(i_0, intArray[ensureNotNull(this._geometryData).offset + 4 + i_0 | 0]);
          }
          tmp$_13 = vertexCount * 2 | 0;
          for (var i_1 = 0; i_1 < tmp$_13; i_1 += 2) {
            var u = floatArray[uvOffset + i_1 | 0];
            var v = floatArray[uvOffset + i_1 + 1 | 0];
            if (currentTextureData.rotated) {
              meshDisplay.uvs[i_1] = (region.x + (1.0 - v) * region.width) / textureAtlasWidth;
              meshDisplay.uvs[i_1 + 1 | 0] = (region.y + u * region.height) / textureAtlasHeight;
            } else {
              meshDisplay.uvs[i_1] = (region.x + u * region.width) / textureAtlasWidth;
              meshDisplay.uvs[i_1 + 1 | 0] = (region.y + v * region.height) / textureAtlasHeight;
            }
          }
          this._textureScale_0 = 1.0;
          meshDisplay.texture = renderTexture;
          meshDisplay.dirty = meshDisplay.dirty + 1 | 0;
          meshDisplay.indexDirty = meshDisplay.indexDirty + 1 | 0;
          meshDisplay.name = this.name;
          var isSkinned = ensureNotNull(this._geometryData).weight !== null;
          var isSurface = (tmp$_16 = (tmp$_15 = (tmp$_14 = this._parent_8be2vx$) != null ? tmp$_14._boneData : null) != null ? tmp$_15.isSurface : null) != null ? tmp$_16 : false;
          if (isSkinned || isSurface) {
            this._identityTransform();
          }} else {
          this._textureScale_0 = ensureNotNull(currentTextureData.parent).scale * ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
          var normalDisplay = Kotlin.isType(tmp$_17 = this._renderDisplay_0, Image) ? tmp$_17 : throwCCE();
          normalDisplay.texture = renderTexture;
          normalDisplay.name = this.name;
        }
        this._visibleDirty = true;
        return;
      }}if (this._geometryData !== null) {
      var meshDisplay_0 = Kotlin.isType(tmp$_18 = this._renderDisplay_0, Mesh) ? tmp$_18 : throwCCE();
      meshDisplay_0.texture = null;
      meshDisplay_0.x = 0.0;
      meshDisplay_0.y = 0.0;
      meshDisplay_0.visible = false;
    } else {
      var normalDisplay_0 = Kotlin.isType(tmp$_19 = this._renderDisplay_0, Image) ? tmp$_19 : throwCCE();
      normalDisplay_0.bitmap = bitmap.Bitmaps.transparent;
      normalDisplay_0.x = 0.0;
      normalDisplay_0.y = 0.0;
      normalDisplay_0.visible = false;
    }
  };
  KorgeDbSlot.prototype._updateMesh = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16;
    var scale = ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
    var deformVertices = (Kotlin.isType(tmp$ = this._displayFrame, DisplayFrame) ? tmp$ : throwCCE()).deformVertices;
    var bones = this._geometryBones;
    var geometryData = Kotlin.isType(tmp$_0 = this._geometryData, GeometryData) ? tmp$_0 : throwCCE();
    var weightData = geometryData.weight;
    var hasDeform = deformVertices.length > 0 && geometryData.inheritDeform;
    var meshDisplay = Kotlin.isType(tmp$_1 = this._renderDisplay_0, Mesh) ? tmp$_1 : throwCCE();
    if (weightData !== null) {
      var data = ensureNotNull(geometryData.data);
      var intArray = ensureNotNull(data.intArray);
      var floatArray = ensureNotNull(data.floatArray);
      var vertexCount = intArray[geometryData.offset + 0 | 0];
      var weightFloatOffset = intArray[weightData.offset + 1 | 0];
      if (weightFloatOffset < 0) {
        weightFloatOffset = weightFloatOffset + 65536 | 0;
      }var iD = 0;
      var iB = weightData.offset + 2 + get_length_1(bones) | 0;
      var iV = weightFloatOffset;
      var iF = 0;
      for (var i = 0; i < vertexCount; i++) {
        if (iD >= meshDisplay.vertices.length)
          break;
        var boneCount = intArray[tmp$_2 = iB, iB = tmp$_2 + 1 | 0, tmp$_2];
        var xG = 0.0;
        var yG = 0.0;
        for (var j = 0; j < boneCount; j++) {
          var boneIndex = intArray[tmp$_3 = iB, iB = tmp$_3 + 1 | 0, tmp$_3];
          tmp$_4 = bones.get_za3lpa$(boneIndex);
          if (tmp$_4 == null) {
            continue;
          }var bone = tmp$_4;
          var matrix = bone.globalTransformMatrix;
          var weight = floatArray[tmp$_5 = iV, iV = tmp$_5 + 1 | 0, tmp$_5];
          var xL = floatArray[tmp$_6 = iV, iV = tmp$_6 + 1 | 0, tmp$_6] * scale;
          var yL = floatArray[tmp$_7 = iV, iV = tmp$_7 + 1 | 0, tmp$_7] * scale;
          if (hasDeform) {
            xL = xL + deformVertices[tmp$_8 = iF, iF = tmp$_8 + 1 | 0, tmp$_8];
            yL = yL + deformVertices[tmp$_9 = iF, iF = tmp$_9 + 1 | 0, tmp$_9];
          }xG += matrix.transformX_dleff0$(xL, yL) * weight;
          yG += matrix.transformY_dleff0$(xL, yL) * weight;
        }
        meshDisplay.vertices[tmp$_10 = iD, iD = tmp$_10 + 1 | 0, tmp$_10] = xG;
        meshDisplay.vertices[tmp$_11 = iD, iD = tmp$_11 + 1 | 0, tmp$_11] = yG;
      }
    } else {
      var isSurface = (tmp$_14 = (tmp$_13 = (tmp$_12 = this._parent_8be2vx$) != null ? tmp$_12._boneData : null) != null ? tmp$_13.isSurface : null) != null ? tmp$_14 : false;
      var data_0 = ensureNotNull(geometryData.data);
      var intArray_0 = ensureNotNull(data_0.intArray);
      var floatArray_0 = ensureNotNull(data_0.floatArray);
      var vertexCount_0 = intArray_0[geometryData.offset + 0 | 0];
      var vertexOffset = intArray_0[geometryData.offset + 2 | 0];
      if (vertexOffset < 0) {
        vertexOffset = vertexOffset + 65536 | 0;
      }tmp$_15 = vertexCount_0 * 2 | 0;
      for (var i_0 = 0; i_0 < tmp$_15; i_0 += 2) {
        if ((i_0 + 1 | 0) >= meshDisplay.vertices.length)
          break;
        var x = floatArray_0[vertexOffset + i_0 + 0 | 0] * scale;
        var y = floatArray_0[vertexOffset + i_0 + 1 | 0] * scale;
        if (hasDeform) {
          x += deformVertices[i_0 + 0 | 0];
          y += deformVertices[i_0 + 1 | 0];
        }if (isSurface) {
          var matrix_0 = (Kotlin.isType(tmp$_16 = this._parent_8be2vx$, Surface) ? tmp$_16 : throwCCE())._getGlobalTransformMatrix_dleff0$(x, y);
          meshDisplay.vertices[i_0 + 0 | 0] = matrix_0.transformX_dleff0$(x, y);
          meshDisplay.vertices[i_0 + 1 | 0] = matrix_0.transformY_dleff0$(x, y);
        } else {
          meshDisplay.vertices[i_0 + 0 | 0] = x;
          meshDisplay.vertices[i_0 + 1 | 0] = y;
        }
      }
    }
    meshDisplay.updatedVertices();
  };
  KorgeDbSlot.prototype._updateTransform = function () {
    this.updateGlobalTransform();
    var transform = this.global;
    var rd = this._renderDisplay_0;
    if (rd === this._rawDisplay || rd === this._meshDisplay) {
      var x = transform.x - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY);
      var y = transform.y - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY);
      if (rd != null) {
        position(rd, x, y);
        scale(rd, transform.scaleX * this._textureScale_0, transform.scaleY * this._textureScale_0);
      }} else {
      if (rd != null) {
        position(rd, transform.x, transform.y);
        scale(rd, transform.scaleX, transform.scaleY);
      }}
    if (rd != null) {
      rd.rotationRadians = transform.rotation;
      skew(rd, -transform.skew, 0.0);
    }};
  KorgeDbSlot.prototype._identityTransform = function () {
    var tmp$;
    this.m_0.identity();
    (tmp$ = this._renderDisplay_0) != null ? (tmp$.setMatrix_1ktkmn$(this.m_0), Unit) : null;
  };
  KorgeDbSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbSlot',
    interfaces: [Slot]
  };
  function KorgeDbTextureAtlasData(pool) {
    TextureAtlasData.call(this, pool);
    this._renderTexture_0 = null;
  }
  KorgeDbTextureAtlasData.prototype.toString = function () {
    return '[class DragonbonesTextureAtlasData]';
  };
  KorgeDbTextureAtlasData.prototype._onClear = function () {
    TextureAtlasData.prototype._onClear.call(this);
    this._renderTexture_0 = null;
  };
  KorgeDbTextureAtlasData.prototype.createTexture = function () {
    return this.pool.textureData.borrow();
  };
  Object.defineProperty(KorgeDbTextureAtlasData.prototype, 'renderTexture', {
    get: function () {
      return this._renderTexture_0;
    },
    set: function (value) {
      if (equals(this._renderTexture_0, value)) {
        return;
      }this._renderTexture_0 = value;
      if (this._renderTexture_0 !== null) {
        var mapIterator = this.textures.keys();
        while (true) {
          var v = mapIterator.next();
          if (v.done)
            break;
          var k = v.value;
          var tmp$;
          var textureData = Kotlin.isType(tmp$ = this.textures.get(k), KorgeDbTextureData) ? tmp$ : throwCCE();
          var tmp$_0 = ensureNotNull(this._renderTexture_0);
          var tmp$_1 = new Rectangle(textureData.region.x, textureData.region.y, textureData.region.width, textureData.region.height);
          var tmp$_2 = new Rectangle(textureData.region.x, textureData.region.y, textureData.region.width, textureData.region.height);
          var width = textureData.region.width;
          var height = textureData.region.height;
          textureData.renderTexture = BitmapSliceCompat(tmp$_0, tmp$_1, tmp$_2, new Rectangle(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height)), textureData.rotated, k);
        }
      } else {
        var mapIterator_0 = this.textures.keys();
        while (true) {
          var v_0 = mapIterator_0.next();
          if (v_0.done)
            break;
          var k_0 = v_0.value;
          var tmp$_3;
          var textureData_0 = Kotlin.isType(tmp$_3 = this.textures.get(k_0), KorgeDbTextureData) ? tmp$_3 : throwCCE();
          textureData_0.renderTexture = null;
        }
      }
    }
  });
  KorgeDbTextureAtlasData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbTextureAtlasData',
    interfaces: [TextureAtlasData]
  };
  function KorgeDbTextureData(pool) {
    TextureData.call(this, pool);
    this.renderTexture = null;
  }
  KorgeDbTextureData.prototype.toString = function () {
    return '[class DragonbonesTextureData]';
  };
  KorgeDbTextureData.prototype._onClear = function () {
    TextureData.prototype._onClear.call(this);
    this.renderTexture = null;
  };
  KorgeDbTextureData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbTextureData',
    interfaces: [TextureData]
  };
  function Coroutine$readDbAtlas($receiver_0, factory_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$jsonFile = void 0;
    this.local$tex = void 0;
    this.local$$receiver = $receiver_0;
    this.local$factory = factory_0;
  }
  Coroutine$readDbAtlas.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readDbAtlas.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readDbAtlas.prototype.constructor = Coroutine$readDbAtlas;
  Coroutine$readDbAtlas.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$jsonFile = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$jsonFile.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tex = this.result_0;
            var texInfo = ensureNotNull(json.Json.parse_61zpoe$(this.local$tex));
            var tmp$ = this.local$jsonFile.parent;
            var $receiver = KDynamic.Companion;
            var imageFile = tmp$.get_61zpoe$($receiver.get_str_mzud1t$($receiver.get_uozw8h$(texInfo, 'imagePath')));
            this.state_0 = 3;
            this.result_0 = readBitmapOptimized(imageFile, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var image = mipmaps(this.result_0);
            return this.local$factory.parseTextureAtlasData_go2jhv$(ensureNotNull(json.Json.parse_61zpoe$(this.local$tex)), image);
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
  function readDbAtlas($receiver_0, factory_0, continuation_0, suspended) {
    var instance = new Coroutine$readDbAtlas($receiver_0, factory_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readDbSkeleton($receiver_0, factory_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$factory = factory_0;
  }
  Coroutine$readDbSkeleton.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readDbSkeleton.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readDbSkeleton.prototype.constructor = Coroutine$readDbSkeleton;
  Coroutine$readDbSkeleton.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = json.Json;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var ske = ensureNotNull(this.local$tmp$.parse_61zpoe$(this.result_0));
            var tmp$_0;
            if ((tmp$ = this.local$factory.parseDragonBonesData_md6wsg$(ske)) != null)
              tmp$_0 = tmp$;
            else {
              throw IllegalStateException_init(("Can't load skeleton " + this.local$$receiver).toString());
            }

            return tmp$_0;
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
  function readDbSkeleton($receiver_0, factory_0, continuation_0, suspended) {
    var instance = new Coroutine$readDbSkeleton($receiver_0, factory_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readDbSkeletonAndAtlas($receiver_0, factory_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$factory = factory_0;
  }
  Coroutine$readDbSkeletonAndAtlas.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readDbSkeletonAndAtlas.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readDbSkeletonAndAtlas.prototype.constructor = Coroutine$readDbSkeletonAndAtlas;
  Coroutine$readDbSkeletonAndAtlas.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readDbAtlas(this.local$$receiver.parent.get_61zpoe$(replace(get_baseName(this.local$$receiver), '_ske', '_tex')), this.local$factory, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var atlas = this.result_0;
            this.state_0 = 3;
            this.result_0 = readDbSkeleton(this.local$$receiver, this.local$factory, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var skel = this.result_0;
            return skel;
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
  function readDbSkeletonAndAtlas($receiver_0, factory_0, continuation_0, suspended) {
    var instance = new Coroutine$readDbSkeletonAndAtlas($receiver_0, factory_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function buildFirstArmatureDisplay($receiver, factory) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = firstOrNull($receiver.armatureNames)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init("DbData doesn't have armatures".toString());
    }
    return factory.buildArmatureDisplay_w74nik$(tmp$_0);
  }
  $$importsForInline$$['korge-root-korge-dragonbones'] = _;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  var package$com = _.com || (_.com = {});
  var package$dragonbones = package$com.dragonbones || (package$com.dragonbones = {});
  var package$animation = package$dragonbones.animation || (package$dragonbones.animation = {});
  package$animation.Animation = Animation;
  package$animation.AnimationState = AnimationState;
  Object.defineProperty(BlendState, 'Companion', {
    get: BlendState$Companion_getInstance
  });
  package$animation.BlendState = BlendState;
  package$animation.TimelineState = TimelineState;
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  Object.defineProperty(TweenTimelineState, 'Companion', {
    get: TweenTimelineState$Companion_getInstance
  });
  package$animation.TweenTimelineState = TweenTimelineState;
  package$animation.SingleValueTimelineState = SingleValueTimelineState;
  package$animation.DoubleValueTimelineState = DoubleValueTimelineState;
  package$animation.MutilpleValueTimelineState = MutilpleValueTimelineState;
  package$animation.IAnimatable = IAnimatable;
  package$animation.ActionTimelineState = ActionTimelineState;
  package$animation.ZOrderTimelineState = ZOrderTimelineState;
  package$animation.BoneAllTimelineState = BoneAllTimelineState;
  package$animation.BoneTranslateTimelineState = BoneTranslateTimelineState;
  package$animation.BoneRotateTimelineState = BoneRotateTimelineState;
  package$animation.BoneScaleTimelineState = BoneScaleTimelineState;
  package$animation.SurfaceTimelineState = SurfaceTimelineState;
  package$animation.AlphaTimelineState = AlphaTimelineState;
  package$animation.SlotDisplayTimelineState = SlotDisplayTimelineState;
  package$animation.SlotColorTimelineState = SlotColorTimelineState;
  package$animation.SlotZIndexTimelineState = SlotZIndexTimelineState;
  package$animation.DeformTimelineState = DeformTimelineState;
  package$animation.IKConstraintTimelineState = IKConstraintTimelineState;
  package$animation.AnimationProgressTimelineState = AnimationProgressTimelineState;
  package$animation.AnimationWeightTimelineState = AnimationWeightTimelineState;
  package$animation.AnimationParametersTimelineState = AnimationParametersTimelineState;
  $$importsForInline$$['klock-root-klock'] = $module$klock_root_klock;
  package$animation.WorldClock_init_fv8bff$ = WorldClock_init;
  package$animation.WorldClock = WorldClock;
  Object.defineProperty(Armature, 'Companion', {
    get: Armature$Companion_getInstance
  });
  var package$armature = package$dragonbones.armature || (package$dragonbones.armature = {});
  package$armature.Armature = Armature;
  package$armature.Bone = Bone;
  package$armature.Constraint = Constraint;
  package$armature.IKConstraint = IKConstraint;
  package$armature.PathConstraint = PathConstraint;
  package$armature.IArmatureProxy = IArmatureProxy;
  package$armature.DisplayFrame = DisplayFrame;
  package$armature.Slot = Slot;
  package$armature.Surface = Surface;
  package$armature.TransformObject = TransformObject;
  var package$core = package$dragonbones.core || (package$dragonbones.core = {});
  package$core.BaseObject = BaseObject;
  package$core.SingleObjectPool = SingleObjectPool;
  package$core.BaseObjectPool = BaseObjectPool;
  package$core.IntEnum = IntEnum;
  package$core.IntEnumCompanion = IntEnumCompanion;
  Object.defineProperty(package$core, 'BinaryOffset', {
    get: BinaryOffset_getInstance
  });
  Object.defineProperty(ArmatureType, 'Armature', {
    get: ArmatureType$Armature_getInstance
  });
  Object.defineProperty(ArmatureType, 'MovieClip', {
    get: ArmatureType$MovieClip_getInstance
  });
  Object.defineProperty(ArmatureType, 'Stage', {
    get: ArmatureType$Stage_getInstance
  });
  Object.defineProperty(ArmatureType, 'Companion', {
    get: ArmatureType$Companion_getInstance
  });
  package$core.ArmatureType = ArmatureType;
  Object.defineProperty(DisplayType, 'None', {
    get: DisplayType$None_getInstance
  });
  Object.defineProperty(DisplayType, 'Image', {
    get: DisplayType$Image_getInstance
  });
  Object.defineProperty(DisplayType, 'Armature', {
    get: DisplayType$Armature_getInstance
  });
  Object.defineProperty(DisplayType, 'Mesh', {
    get: DisplayType$Mesh_getInstance
  });
  Object.defineProperty(DisplayType, 'BoundingBox', {
    get: DisplayType$BoundingBox_getInstance
  });
  Object.defineProperty(DisplayType, 'Path', {
    get: DisplayType$Path_getInstance
  });
  Object.defineProperty(DisplayType, 'Companion', {
    get: DisplayType$Companion_getInstance
  });
  package$core.DisplayType = DisplayType;
  Object.defineProperty(BoundingBoxType, 'None', {
    get: BoundingBoxType$None_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Rectangle', {
    get: BoundingBoxType$Rectangle_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Ellipse', {
    get: BoundingBoxType$Ellipse_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Polygon', {
    get: BoundingBoxType$Polygon_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Companion', {
    get: BoundingBoxType$Companion_getInstance
  });
  package$core.BoundingBoxType = BoundingBoxType;
  Object.defineProperty(ActionType, 'Play', {
    get: ActionType$Play_getInstance
  });
  Object.defineProperty(ActionType, 'Frame', {
    get: ActionType$Frame_getInstance
  });
  Object.defineProperty(ActionType, 'Sound', {
    get: ActionType$Sound_getInstance
  });
  Object.defineProperty(ActionType, 'Companion', {
    get: ActionType$Companion_getInstance
  });
  package$core.ActionType = ActionType;
  Object.defineProperty(BlendMode_0, 'Normal', {
    get: BlendMode$Normal_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Add', {
    get: BlendMode$Add_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Alpha', {
    get: BlendMode$Alpha_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Darken', {
    get: BlendMode$Darken_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Difference', {
    get: BlendMode$Difference_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Erase', {
    get: BlendMode$Erase_getInstance
  });
  Object.defineProperty(BlendMode_0, 'HardLight', {
    get: BlendMode$HardLight_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Invert', {
    get: BlendMode$Invert_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Layer', {
    get: BlendMode$Layer_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Lighten', {
    get: BlendMode$Lighten_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Multiply', {
    get: BlendMode$Multiply_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Overlay', {
    get: BlendMode$Overlay_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Screen', {
    get: BlendMode$Screen_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Subtract', {
    get: BlendMode$Subtract_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Companion', {
    get: BlendMode$Companion_getInstance
  });
  package$core.BlendMode = BlendMode_0;
  Object.defineProperty(TweenType, 'None', {
    get: TweenType$None_getInstance
  });
  Object.defineProperty(TweenType, 'Line', {
    get: TweenType$Line_getInstance
  });
  Object.defineProperty(TweenType, 'Curve', {
    get: TweenType$Curve_getInstance
  });
  Object.defineProperty(TweenType, 'QuadIn', {
    get: TweenType$QuadIn_getInstance
  });
  Object.defineProperty(TweenType, 'QuadOut', {
    get: TweenType$QuadOut_getInstance
  });
  Object.defineProperty(TweenType, 'QuadInOut', {
    get: TweenType$QuadInOut_getInstance
  });
  Object.defineProperty(TweenType, 'Companion', {
    get: TweenType$Companion_getInstance
  });
  package$core.TweenType = TweenType;
  Object.defineProperty(TimelineType, 'Action', {
    get: TimelineType$Action_getInstance
  });
  Object.defineProperty(TimelineType, 'ZOrder', {
    get: TimelineType$ZOrder_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneAll', {
    get: TimelineType$BoneAll_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneTranslate', {
    get: TimelineType$BoneTranslate_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneRotate', {
    get: TimelineType$BoneRotate_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneScale', {
    get: TimelineType$BoneScale_getInstance
  });
  Object.defineProperty(TimelineType, 'Surface', {
    get: TimelineType$Surface_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneAlpha', {
    get: TimelineType$BoneAlpha_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotDisplay', {
    get: TimelineType$SlotDisplay_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotColor', {
    get: TimelineType$SlotColor_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotDeform', {
    get: TimelineType$SlotDeform_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotZIndex', {
    get: TimelineType$SlotZIndex_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotAlpha', {
    get: TimelineType$SlotAlpha_getInstance
  });
  Object.defineProperty(TimelineType, 'IKConstraint', {
    get: TimelineType$IKConstraint_getInstance
  });
  Object.defineProperty(TimelineType, 'AnimationProgress', {
    get: TimelineType$AnimationProgress_getInstance
  });
  Object.defineProperty(TimelineType, 'AnimationWeight', {
    get: TimelineType$AnimationWeight_getInstance
  });
  Object.defineProperty(TimelineType, 'AnimationParameter', {
    get: TimelineType$AnimationParameter_getInstance
  });
  Object.defineProperty(TimelineType, 'Companion', {
    get: TimelineType$Companion_getInstance
  });
  package$core.TimelineType = TimelineType;
  Object.defineProperty(OffsetMode, 'None', {
    get: OffsetMode$None_getInstance
  });
  Object.defineProperty(OffsetMode, 'Additive', {
    get: OffsetMode$Additive_getInstance
  });
  Object.defineProperty(OffsetMode, 'Override', {
    get: OffsetMode$Override_getInstance
  });
  package$core.OffsetMode = OffsetMode;
  Object.defineProperty(AnimationFadeOutMode, 'SameLayer', {
    get: AnimationFadeOutMode$SameLayer_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'SameGroup', {
    get: AnimationFadeOutMode$SameGroup_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'SameLayerAndGroup', {
    get: AnimationFadeOutMode$SameLayerAndGroup_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'All', {
    get: AnimationFadeOutMode$All_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'Single', {
    get: AnimationFadeOutMode$Single_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'Companion', {
    get: AnimationFadeOutMode$Companion_getInstance
  });
  package$core.AnimationFadeOutMode = AnimationFadeOutMode;
  Object.defineProperty(AnimationBlendType, 'None', {
    get: AnimationBlendType$None_getInstance
  });
  Object.defineProperty(AnimationBlendType, 'E1D', {
    get: AnimationBlendType$E1D_getInstance
  });
  package$core.AnimationBlendType = AnimationBlendType;
  Object.defineProperty(AnimationBlendMode, 'Additive', {
    get: AnimationBlendMode$Additive_getInstance
  });
  Object.defineProperty(AnimationBlendMode, 'Override', {
    get: AnimationBlendMode$Override_getInstance
  });
  package$core.AnimationBlendMode = AnimationBlendMode;
  Object.defineProperty(ConstraintType, 'IK', {
    get: ConstraintType$IK_getInstance
  });
  Object.defineProperty(ConstraintType, 'Path', {
    get: ConstraintType$Path_getInstance
  });
  package$core.ConstraintType = ConstraintType;
  Object.defineProperty(PositionMode, 'Fixed', {
    get: PositionMode$Fixed_getInstance
  });
  Object.defineProperty(PositionMode, 'Percent', {
    get: PositionMode$Percent_getInstance
  });
  package$core.PositionMode = PositionMode;
  Object.defineProperty(SpacingMode, 'Length', {
    get: SpacingMode$Length_getInstance
  });
  Object.defineProperty(SpacingMode, 'Fixed', {
    get: SpacingMode$Fixed_getInstance
  });
  Object.defineProperty(SpacingMode, 'Percent', {
    get: SpacingMode$Percent_getInstance
  });
  package$core.SpacingMode = SpacingMode;
  Object.defineProperty(RotateMode, 'Tangent', {
    get: RotateMode$Tangent_getInstance
  });
  Object.defineProperty(RotateMode, 'Chain', {
    get: RotateMode$Chain_getInstance
  });
  Object.defineProperty(RotateMode, 'ChainScale', {
    get: RotateMode$ChainScale_getInstance
  });
  package$core.RotateMode = RotateMode;
  Object.defineProperty(DragonBones, 'Companion', {
    get: DragonBones$Companion_getInstance
  });
  package$core.DragonBones = DragonBones;
  Object.defineProperty(EventObject, 'Companion', {
    get: EventObject$Companion_getInstance
  });
  var package$event = package$dragonbones.event || (package$dragonbones.event = {});
  package$event.EventObject = EventObject;
  package$event.IEventDispatcher = IEventDispatcher;
  var package$factory = package$dragonbones.factory || (package$dragonbones.factory = {});
  package$factory.BaseFactory = BaseFactory;
  package$factory.BuildArmaturePackage = BuildArmaturePackage;
  var package$geom = package$dragonbones.geom || (package$dragonbones.geom = {});
  package$geom.ColorTransform = ColorTransform;
  package$geom.Matrix = Matrix_0;
  package$geom.Point = Point;
  package$geom.Rectangle = Rectangle_0;
  Object.defineProperty(Transform, 'Companion', {
    get: Transform$Companion_getInstance
  });
  package$geom.Transform = Transform;
  package$geom.XY = XY;
  var package$internal = package$dragonbones.internal || (package$dragonbones.internal = {});
  package$internal.fastForEach_qvzyjf$ = fastForEach;
  package$internal.fastForEach_5hcql4$ = fastForEach_0;
  var package$model = package$dragonbones.model || (package$dragonbones.model = {});
  package$model.AnimationConfig = AnimationConfig;
  package$model.AnimationData = AnimationData;
  package$model.TimelineData = TimelineData;
  package$model.AnimationTimelineData = AnimationTimelineData;
  package$model.ArmatureData = ArmatureData;
  package$model.BoneData = BoneData;
  package$model.SurfaceData = SurfaceData;
  Object.defineProperty(SlotData, 'Companion', {
    get: SlotData$Companion_getInstance
  });
  package$model.SlotData = SlotData;
  package$model.BoundingBoxData = BoundingBoxData;
  Object.defineProperty(package$model, 'OutCode', {
    get: OutCode_getInstance
  });
  Object.defineProperty(RectangleBoundingBoxData, 'Companion', {
    get: RectangleBoundingBoxData$Companion_getInstance
  });
  package$model.RectangleBoundingBoxData = RectangleBoundingBoxData;
  Object.defineProperty(EllipseBoundingBoxData, 'Companion', {
    get: EllipseBoundingBoxData$Companion_getInstance
  });
  package$model.EllipseBoundingBoxData = EllipseBoundingBoxData;
  package$model.PolygonBoundingBoxData = PolygonBoundingBoxData;
  package$model.CanvasData = CanvasData;
  package$model.ConstraintData = ConstraintData;
  package$model.IKConstraintData = IKConstraintData;
  package$model.PathConstraintData = PathConstraintData;
  package$model.GeometryData = GeometryData;
  package$model.DisplayData = DisplayData;
  package$model.GeometryDisplayData = GeometryDisplayData;
  package$model.ImageDisplayData = ImageDisplayData;
  package$model.ArmatureDisplayData = ArmatureDisplayData;
  package$model.MeshDisplayData = MeshDisplayData;
  package$model.BoundingBoxDisplayData = BoundingBoxDisplayData;
  package$model.PathDisplayData = PathDisplayData;
  package$model.WeightData = WeightData;
  package$model.DragonBonesData = DragonBonesData;
  package$model.SkinData = SkinData;
  package$model.TextureAtlasData = TextureAtlasData;
  Object.defineProperty(TextureData, 'Companion', {
    get: TextureData$Companion_getInstance
  });
  package$model.TextureData = TextureData;
  package$model.UserData = UserData;
  package$model.ActionData = ActionData;
  var package$parser = package$dragonbones.parser || (package$dragonbones.parser = {});
  package$parser.BinaryDataParser = BinaryDataParser;
  Object.defineProperty(DataParser, 'Companion', {
    get: DataParser$Companion_getInstance
  });
  package$parser.DataParser = DataParser;
  Object.defineProperty(FrameValueType, 'STEP', {
    get: FrameValueType$STEP_getInstance
  });
  Object.defineProperty(FrameValueType, 'INT', {
    get: FrameValueType$INT_getInstance
  });
  Object.defineProperty(FrameValueType, 'FLOAT', {
    get: FrameValueType$FLOAT_getInstance
  });
  package$parser.FrameValueType = FrameValueType;
  Object.defineProperty(ObjectDataParser, 'Companion', {
    get: ObjectDataParser$Companion_getInstance
  });
  package$parser.ObjectDataParser = ObjectDataParser;
  package$parser.ActionFrame = ActionFrame;
  var package$util = package$dragonbones.util || (package$dragonbones.util = {});
  package$util.get_lengthSet_tlvhdp$ = get_lengthSet;
  package$util.set_lengthSet_s1glwf$ = set_lengthSet;
  package$util.get_lengthSet_i5tfnx$ = get_lengthSet_0;
  package$util.set_lengthSet_nux0q3$ = set_lengthSet_0;
  package$util.get_length_tlvhdp$ = get_length;
  package$util.set_length_s1glwf$ = set_length;
  package$util.get_length_i5tfnx$ = get_length_0;
  package$util.set_length_nux0q3$ = set_length_0;
  package$util.get_lengthSet_m7d0ac$ = get_lengthSet_1;
  package$util.set_lengthSet_7k4s42$ = set_lengthSet_1;
  package$util.get_length_m7d0ac$ = get_length_1;
  package$util.set_length_7k4s42$ = set_length_1;
  package$util.push_fx3o58$ = push;
  package$util.unshift_fx3o58$ = unshift;
  package$util.push_q2gx63$ = push_0;
  package$util.push_s1glwf$ = push_1;
  package$util.splice_b7gcku$ = splice;
  package$util.toFloat_1qrwyz$ = toFloat;
  Object.defineProperty(package$util, 'console', {
    get: console_getInstance
  });
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  var package$dragonbones_0 = package$korge.dragonbones || (package$korge.dragonbones = {});
  package$dragonbones_0.KorgeDbArmatureDisplay = KorgeDbArmatureDisplay;
  package$dragonbones_0.KorgeDbFactory = KorgeDbFactory;
  package$dragonbones_0.KorgeDbSlot = KorgeDbSlot;
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  package$dragonbones_0.KorgeDbTextureAtlasData = KorgeDbTextureAtlasData;
  package$dragonbones_0.KorgeDbTextureData = KorgeDbTextureData;
  $$importsForInline$$['korio-root-korio'] = $module$korio_root_korio;
  package$dragonbones_0.readDbAtlas_qep9lk$ = readDbAtlas;
  package$dragonbones_0.readDbSkeleton_qep9lk$ = readDbSkeleton;
  package$dragonbones_0.readDbSkeletonAndAtlas_qep9lk$ = readDbSkeletonAndAtlas;
  package$dragonbones_0.buildFirstArmatureDisplay_3cqwub$ = buildFirstArmatureDisplay;
  Kotlin.defineModule('korge-root-korge-dragonbones', _);
  return _;
}));

//# sourceMappingURL=korge-root-korge-dragonbones.js.map
