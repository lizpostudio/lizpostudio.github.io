(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-root-korio', 'kds-root-kds', 'klock-root-klock', 'kmem-root-kmem', 'korma-root-korma', 'korim-root-korim', 'korge-root-korge'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-root-korio'), require('kds-root-kds'), require('klock-root-klock'), require('kmem-root-kmem'), require('korma-root-korma'), require('korim-root-korim'), require('korge-root-korge'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-root-korge-swf'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'korge-root-korge-swf'.");
    }if (typeof this['kds-root-kds'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'kds-root-kds' was not found. Please, check whether 'kds-root-kds' is loaded prior to 'korge-root-korge-swf'.");
    }if (typeof this['klock-root-klock'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'klock-root-klock' was not found. Please, check whether 'klock-root-klock' is loaded prior to 'korge-root-korge-swf'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'korge-root-korge-swf'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korge-root-korge-swf'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'korge-root-korge-swf'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-swf'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korge-root-korge-swf'.");
    }root['korge-root-korge-swf'] = factory(typeof this['korge-root-korge-swf'] === 'undefined' ? {} : this['korge-root-korge-swf'], kotlin, this['korio-root-korio'], this['kds-root-kds'], this['klock-root-klock'], this['kmem-root-kmem'], this['korma-root-korma'], this['korim-root-korim'], this['korge-root-korge']);
  }
}(this, function (_, Kotlin, $module$korio_root_korio, $module$kds_root_kds, $module$klock_root_klock, $module$kmem_root_kmem, $module$korma_root_korma, $module$korim_root_korim, $module$korge_root_korge) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var readU16LE = $module$korio_root_korio.com.soywiz.korio.stream.readU16LE_p2awyq$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var readBytes = $module$korio_root_korio.com.soywiz.korio.stream.readBytes_xpzb7k$;
  var Unit = Kotlin.kotlin.Unit;
  var openSync = $module$korio_root_korio.com.soywiz.korio.stream.openSync_m1iwyb$;
  var get_eof = $module$korio_root_korio.com.soywiz.korio.stream.get_eof_ucmi9i$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var throwCCE = Kotlin.throwCCE;
  var readU8 = $module$korio_root_korio.com.soywiz.korio.stream.readU8_p2awyq$;
  var invalidOp = $module$korio_root_korio.com.soywiz.korio.lang.invalidOp_61zpoe$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var readU16BE = $module$korio_root_korio.com.soywiz.korio.stream.readU16BE_p2awyq$;
  var readString = $module$korio_root_korio.com.soywiz.korio.stream.readString_6ey4ts$;
  var readF64BE = $module$korio_root_korio.com.soywiz.korio.stream.readF64BE_p2awyq$;
  var readStringz = $module$korio_root_korio.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readS32BE = $module$korio_root_korio.com.soywiz.korio.stream.readS32BE_p2awyq$;
  var DateTime = $module$klock_root_klock.com.soywiz.klock.DateTime;
  var L1000 = Kotlin.Long.fromInt(1000);
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var equals = Kotlin.equals;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Xml = $module$korio_root_korio.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var toString = Kotlin.toString;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var readF64LE = $module$korio_root_korio.com.soywiz.korio.stream.readF64LE_p2awyq$;
  var readS8 = $module$korio_root_korio.com.soywiz.korio.stream.readS8_p2awyq$;
  var readS32LE = $module$korio_root_korio.com.soywiz.korio.stream.readS32LE_p2awyq$;
  var readS24LE = $module$korio_root_korio.com.soywiz.korio.stream.readS24LE_p2awyq$;
  var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Math_0 = Math;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var toChar = Kotlin.toChar;
  var String_fromIntArray = $module$korio_root_korio.com.soywiz.korio.lang.String_fromIntArray_nd5v6f$;
  var Extra = $module$kds_root_kds.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_root_kds.com.soywiz.kds.Extra.Mixin;
  var substr = $module$korio_root_korio.com.soywiz.korio.lang.substr_qgyqat$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var numberToInt = Kotlin.numberToInt;
  var Float16 = $module$kmem_root_kmem.com.soywiz.kmem.Float16;
  var readStringz_0 = $module$korio_root_korio.com.soywiz.korio.stream.readStringz_4zsegu$;
  var throwUPAE = Kotlin.throwUPAE;
  var Error_0 = Kotlin.kotlin.Error;
  var toShort = Kotlin.toShort;
  var UShort_init = Kotlin.kotlin.UShort;
  var Map = Kotlin.kotlin.collections.Map;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var format = $module$korio_root_korio.com.soywiz.korio.lang.format_e33kwl$;
  var Matrix = $module$korma_root_korma.com.soywiz.korma.geom.Matrix;
  var math = Kotlin.kotlin.math;
  var get_y = $module$korma_root_korma.com.soywiz.korma.geom.get_y_qai0ns$;
  var get_x = $module$korma_root_korma.com.soywiz.korma.geom.get_x_qai0ns$;
  var Rectangle = $module$korma_root_korma.com.soywiz.korma.geom.Rectangle;
  var LineScaleMode = $module$korim_root_korim.com.soywiz.korim.vector.LineScaleMode;
  var sort = Kotlin.kotlin.collections.sort_4wi501$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var numberToDouble = Kotlin.numberToDouble;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var getCallableRef = Kotlin.getCallableRef;
  var BoundsBuilder = $module$korma_root_korma.com.soywiz.korma.geom.BoundsBuilder;
  var nextAlignedTo = $module$kmem_root_kmem.com.soywiz.kmem.nextAlignedTo_dqglrj$;
  var L0 = Kotlin.Long.ZERO;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var toByte = Kotlin.toByte;
  var readS16LE = $module$korio_root_korio.com.soywiz.korio.stream.readS16LE_p2awyq$;
  var readS16BE = $module$korio_root_korio.com.soywiz.korio.stream.readS16BE_p2awyq$;
  var readS64LE = $module$korio_root_korio.com.soywiz.korio.stream.readS64LE_p2awyq$;
  var readS64BE = $module$korio_root_korio.com.soywiz.korio.stream.readS64BE_p2awyq$;
  var copyOfRange = Kotlin.kotlin.collections.copyOfRange_ietg8x$;
  var lang = $module$korio_root_korio.com.soywiz.korio.lang;
  var toString_1 = $module$korio_root_korio.com.soywiz.korio.lang.toString_5kit73$;
  var write8 = $module$korio_root_korio.com.soywiz.korio.stream.write8_n5df9z$;
  var write16LE = $module$korio_root_korio.com.soywiz.korio.stream.write16LE_n5df9z$;
  var write16BE = $module$korio_root_korio.com.soywiz.korio.stream.write16BE_n5df9z$;
  var write32LE = $module$korio_root_korio.com.soywiz.korio.stream.write32LE_n5df9z$;
  var write32BE = $module$korio_root_korio.com.soywiz.korio.stream.write32BE_n5df9z$;
  var write64LE = $module$korio_root_korio.com.soywiz.korio.stream.write64LE_7bhjh0$;
  var write64BE = $module$korio_root_korio.com.soywiz.korio.stream.write64BE_7bhjh0$;
  var writeBytes = $module$korio_root_korio.com.soywiz.korio.stream.writeBytes_o1e1if$;
  var GZIP = $module$korio_root_korio.com.soywiz.korio.compression.deflate.GZIP;
  var ZLib = $module$korio_root_korio.com.soywiz.korio.compression.deflate.ZLib;
  var deflate = $module$korio_root_korio.com.soywiz.korio.compression.deflate;
  var lzma = $module$korio_root_korio.com.soywiz.korio.compression.lzma;
  var uncompress = $module$korio_root_korio.com.soywiz.korio.compression.uncompress_ms6xh0$;
  var compress = $module$korio_root_korio.com.soywiz.korio.compression.compress_t54tj5$;
  var MemorySyncStreamBase_init = $module$korio_root_korio.com.soywiz.korio.stream.MemorySyncStreamBase_init_za3lpa$;
  var SyncStream = $module$korio_root_korio.com.soywiz.korio.stream.SyncStream;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var toBits = Kotlin.floatToBits;
  var toBits_0 = Kotlin.doubleToBits;
  var openAsZip = $module$korio_root_korio.com.soywiz.korio.file.std.openAsZip_thwgyb$;
  var readXml = $module$korio_root_korio.com.soywiz.korio.serialization.xml.readXml_yirdke$;
  var atlas = $module$korge_root_korge.com.soywiz.korge.atlas;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var slice_0 = $module$korim_root_korim.com.soywiz.korim.bitmap.slice_umqjjl$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var TextureWithBitmapSlice = $module$korge_root_korge.com.soywiz.korge.render.TextureWithBitmapSlice;
  var CompoundShape = $module$korim_root_korim.com.soywiz.korim.vector.CompoundShape;
  var CycleMethod = $module$korim_root_korim.com.soywiz.korim.vector.CycleMethod;
  var ColorPaint = $module$korim_root_korim.com.soywiz.korim.vector.paint.ColorPaint;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var DoubleArrayList_init = $module$kds_root_kds.com.soywiz.kds.DoubleArrayList_init_yqxtqz$;
  var IntArrayList_init = $module$kds_root_kds.com.soywiz.kds.IntArrayList_init_pmhfmb$;
  var GradientInterpolationMethod = $module$korim_root_korim.com.soywiz.korim.vector.paint.GradientInterpolationMethod;
  var GradientKind = $module$korim_root_korim.com.soywiz.korim.vector.paint.GradientKind;
  var GradientPaint = $module$korim_root_korim.com.soywiz.korim.vector.paint.GradientPaint;
  var Bitmap32 = $module$korim_root_korim.com.soywiz.korim.bitmap.Bitmap32;
  var BitmapPaint_init = $module$korim_root_korim.com.soywiz.korim.vector.paint.BitmapPaint_init_wksi73$;
  var isEmpty = $module$korma_root_korma.com.soywiz.korma.geom.vector.isEmpty_6jcdf2$;
  var FillShape = $module$korim_root_korim.com.soywiz.korim.vector.FillShape;
  var GraphicsPath = $module$korim_root_korim.com.soywiz.korim.vector.GraphicsPath;
  var LineJoin = $module$korma_root_korma.com.soywiz.korma.geom.vector.LineJoin;
  var PolylineShape = $module$korim_root_korim.com.soywiz.korim.vector.PolylineShape;
  var LineCap = $module$korma_root_korma.com.soywiz.korma.geom.vector.LineCap;
  var toIntCeil = $module$kmem_root_kmem.com.soywiz.kmem.toIntCeil_yrwdxr$;
  var clamp = $module$kmem_root_kmem.com.soywiz.kmem.clamp_e4yvb3$;
  var NativeImage = $module$korim_root_korim.com.soywiz.korim.bitmap.NativeImage_vux9f0$;
  var paint = $module$korim_root_korim.com.soywiz.korim.vector.paint;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var ColorTransform = $module$korim_root_korim.com.soywiz.korim.color.ColorTransform;
  var RGBA = $module$korim_root_korim.com.soywiz.korim.color.RGBA;
  var extract8 = $module$kmem_root_kmem.com.soywiz.kmem.extract8_dqglrj$;
  var ShapeRasterizerMethod = $module$korim_root_korim.com.soywiz.korim.vector.ShapeRasterizerMethod;
  var AnLibrarySerializer$Config = $module$korge_root_korge.com.soywiz.korge.animate.serialization.AnLibrarySerializer.Config;
  var Extra$Property = $module$kds_root_kds.com.soywiz.kds.Extra.Property;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var yaml = $module$korio_root_korio.com.soywiz.korio.serialization.yaml;
  var getKClass = Kotlin.getKClass;
  var mapper = $module$korio_root_korio.com.soywiz.korio.dynamic.mapper;
  var decodeToType = $module$korio_root_korio.com.soywiz.korio.dynamic.serialization.decodeToType_u5picb$;
  var printStackTrace = $module$korio_root_korio.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var Any = Object;
  var setExtra = $module$kds_root_kds.com.soywiz.kds.setExtra_46skc7$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var AnLibrary = $module$korge_root_korge.com.soywiz.korge.animate.AnLibrary;
  var AnSymbolMovieClip = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolMovieClip;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var AnSymbolMovieClipSubTimeline = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolMovieClipSubTimeline;
  var AnSymbolMovieClipState = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolMovieClipState;
  var AnEventAction = $module$korge_root_korge.com.soywiz.korge.animate.AnEventAction;
  var AnPlaySoundAction = $module$korge_root_korge.com.soywiz.korge.animate.AnPlaySoundAction;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var substr_0 = $module$korio_root_korio.com.soywiz.korio.lang.substr_6ic1pp$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var AnSymbolLimits = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolLimits;
  var AnSymbolBitmap = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolBitmap;
  var BlendMode = $module$korge_root_korge.com.soywiz.korge.view.BlendMode;
  var AnSymbolTimelineFrame = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolTimelineFrame;
  var AnSymbolUidDef = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolUidDef;
  var BitSet = $module$kds_root_kds.com.soywiz.kds.BitSet;
  var AnTextFieldSymbol = $module$korge_root_korge.com.soywiz.korge.animate.AnTextFieldSymbol;
  var AnSymbolSound = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolSound;
  var openAsync = $module$korio_root_korio.com.soywiz.korio.stream.openAsync_m1iwyb$;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_ie8jgv$;
  var BitmapChannel = $module$korim_root_korim.com.soywiz.korim.bitmap.BitmapChannel;
  var Bitmap8 = $module$korim_root_korim.com.soywiz.korim.bitmap.Bitmap8;
  var FastByteArrayInputStream = $module$korio_root_korio.com.soywiz.korio.stream.FastByteArrayInputStream;
  var RgbaArray = $module$korim_root_korim.com.soywiz.korim.color.RgbaArray;
  var decode = $module$korim_root_korim.com.soywiz.korim.color.decode_8dn5f5$;
  var AnSymbolShape = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolShape;
  var add = $module$korma_root_korma.com.soywiz.korma.geom.add_wm3ouy$;
  var AnSymbolMorphShape = $module$korge_root_korge.com.soywiz.korge.animate.AnSymbolMorphShape;
  var json = $module$korio_root_korio.com.soywiz.korio.serialization.json;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var arrayfill = $module$kmem_root_kmem.com.soywiz.kmem.arrayfill_iv3oks$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var Array_0 = Array;
  var putAll = Kotlin.kotlin.collections.putAll_cweazw$;
  var get_animateLibraryLoaders = $module$korge_root_korge.com.soywiz.korge.animate.get_animateLibraryLoaders_jv80cy$;
  var KorgeFileLoader = $module$korge_root_korge.com.soywiz.korge.view.KorgeFileLoader;
  var KorgeFileLoaderTester = $module$korge_root_korge.com.soywiz.korge.view.KorgeFileLoaderTester;
  AbcOpcode$Kind.prototype = Object.create(Enum.prototype);
  AbcOpcode$Kind.prototype.constructor = AbcOpcode$Kind;
  AbcOpcode.prototype = Object.create(Enum.prototype);
  AbcOpcode.prototype.constructor = AbcOpcode;
  ActionUnknown.prototype = Object.create(Action.prototype);
  ActionUnknown.prototype.constructor = ActionUnknown;
  ActionGetURL.prototype = Object.create(Action.prototype);
  ActionGetURL.prototype.constructor = ActionGetURL;
  ActionGotoFrame.prototype = Object.create(Action.prototype);
  ActionGotoFrame.prototype.constructor = ActionGotoFrame;
  ActionGotoLabel.prototype = Object.create(Action.prototype);
  ActionGotoLabel.prototype.constructor = ActionGotoLabel;
  ActionNextFrame.prototype = Object.create(Action.prototype);
  ActionNextFrame.prototype.constructor = ActionNextFrame;
  ActionPlay.prototype = Object.create(Action.prototype);
  ActionPlay.prototype.constructor = ActionPlay;
  ActionPreviousFrame.prototype = Object.create(Action.prototype);
  ActionPreviousFrame.prototype.constructor = ActionPreviousFrame;
  ActionSetTarget.prototype = Object.create(Action.prototype);
  ActionSetTarget.prototype.constructor = ActionSetTarget;
  ActionStop.prototype = Object.create(Action.prototype);
  ActionStop.prototype.constructor = ActionStop;
  ActionStopSounds.prototype = Object.create(Action.prototype);
  ActionStopSounds.prototype.constructor = ActionStopSounds;
  ActionToggleQuality.prototype = Object.create(Action.prototype);
  ActionToggleQuality.prototype.constructor = ActionToggleQuality;
  ActionWaitForFrame.prototype = Object.create(Action.prototype);
  ActionWaitForFrame.prototype.constructor = ActionWaitForFrame;
  ActionAdd.prototype = Object.create(Action.prototype);
  ActionAdd.prototype.constructor = ActionAdd;
  ActionAnd.prototype = Object.create(Action.prototype);
  ActionAnd.prototype.constructor = ActionAnd;
  ActionAsciiToChar.prototype = Object.create(Action.prototype);
  ActionAsciiToChar.prototype.constructor = ActionAsciiToChar;
  ActionCall.prototype = Object.create(Action.prototype);
  ActionCall.prototype.constructor = ActionCall;
  ActionCharToAscii.prototype = Object.create(Action.prototype);
  ActionCharToAscii.prototype.constructor = ActionCharToAscii;
  ActionCloneSprite.prototype = Object.create(Action.prototype);
  ActionCloneSprite.prototype.constructor = ActionCloneSprite;
  ActionDivide.prototype = Object.create(Action.prototype);
  ActionDivide.prototype.constructor = ActionDivide;
  ActionEndDrag.prototype = Object.create(Action.prototype);
  ActionEndDrag.prototype.constructor = ActionEndDrag;
  ActionEquals.prototype = Object.create(Action.prototype);
  ActionEquals.prototype.constructor = ActionEquals;
  ActionGetProperty.prototype = Object.create(Action.prototype);
  ActionGetProperty.prototype.constructor = ActionGetProperty;
  ActionGetTime.prototype = Object.create(Action.prototype);
  ActionGetTime.prototype.constructor = ActionGetTime;
  ActionGetURL2.prototype = Object.create(Action.prototype);
  ActionGetURL2.prototype.constructor = ActionGetURL2;
  ActionGetVariable.prototype = Object.create(Action.prototype);
  ActionGetVariable.prototype.constructor = ActionGetVariable;
  ActionGotoFrame2.prototype = Object.create(Action.prototype);
  ActionGotoFrame2.prototype.constructor = ActionGotoFrame2;
  ActionIf.prototype = Object.create(Action.prototype);
  ActionIf.prototype.constructor = ActionIf;
  ActionJump.prototype = Object.create(Action.prototype);
  ActionJump.prototype.constructor = ActionJump;
  ActionLess.prototype = Object.create(Action.prototype);
  ActionLess.prototype.constructor = ActionLess;
  ActionMBAsciiToChar.prototype = Object.create(Action.prototype);
  ActionMBAsciiToChar.prototype.constructor = ActionMBAsciiToChar;
  ActionMBCharToAscii.prototype = Object.create(Action.prototype);
  ActionMBCharToAscii.prototype.constructor = ActionMBCharToAscii;
  ActionMBStringExtract.prototype = Object.create(Action.prototype);
  ActionMBStringExtract.prototype.constructor = ActionMBStringExtract;
  ActionMBStringLength.prototype = Object.create(Action.prototype);
  ActionMBStringLength.prototype.constructor = ActionMBStringLength;
  ActionMultiply.prototype = Object.create(Action.prototype);
  ActionMultiply.prototype.constructor = ActionMultiply;
  ActionNot.prototype = Object.create(Action.prototype);
  ActionNot.prototype.constructor = ActionNot;
  ActionOr.prototype = Object.create(Action.prototype);
  ActionOr.prototype.constructor = ActionOr;
  ActionPop.prototype = Object.create(Action.prototype);
  ActionPop.prototype.constructor = ActionPop;
  ActionPush.prototype = Object.create(Action.prototype);
  ActionPush.prototype.constructor = ActionPush;
  ActionRandomNumber.prototype = Object.create(Action.prototype);
  ActionRandomNumber.prototype.constructor = ActionRandomNumber;
  ActionRemoveSprite.prototype = Object.create(Action.prototype);
  ActionRemoveSprite.prototype.constructor = ActionRemoveSprite;
  ActionSetProperty.prototype = Object.create(Action.prototype);
  ActionSetProperty.prototype.constructor = ActionSetProperty;
  ActionSetTarget2.prototype = Object.create(Action.prototype);
  ActionSetTarget2.prototype.constructor = ActionSetTarget2;
  ActionSetVariable.prototype = Object.create(Action.prototype);
  ActionSetVariable.prototype.constructor = ActionSetVariable;
  ActionStartDrag.prototype = Object.create(Action.prototype);
  ActionStartDrag.prototype.constructor = ActionStartDrag;
  ActionStringAdd.prototype = Object.create(Action.prototype);
  ActionStringAdd.prototype.constructor = ActionStringAdd;
  ActionStringEquals.prototype = Object.create(Action.prototype);
  ActionStringEquals.prototype.constructor = ActionStringEquals;
  ActionStringExtract.prototype = Object.create(Action.prototype);
  ActionStringExtract.prototype.constructor = ActionStringExtract;
  ActionStringLength.prototype = Object.create(Action.prototype);
  ActionStringLength.prototype.constructor = ActionStringLength;
  ActionStringLess.prototype = Object.create(Action.prototype);
  ActionStringLess.prototype.constructor = ActionStringLess;
  ActionSubtract.prototype = Object.create(Action.prototype);
  ActionSubtract.prototype.constructor = ActionSubtract;
  ActionToInteger.prototype = Object.create(Action.prototype);
  ActionToInteger.prototype.constructor = ActionToInteger;
  ActionTrace.prototype = Object.create(Action.prototype);
  ActionTrace.prototype.constructor = ActionTrace;
  ActionWaitForFrame2.prototype = Object.create(Action.prototype);
  ActionWaitForFrame2.prototype.constructor = ActionWaitForFrame2;
  ActionAdd2.prototype = Object.create(Action.prototype);
  ActionAdd2.prototype.constructor = ActionAdd2;
  ActionBitAnd.prototype = Object.create(Action.prototype);
  ActionBitAnd.prototype.constructor = ActionBitAnd;
  ActionBitLShift.prototype = Object.create(Action.prototype);
  ActionBitLShift.prototype.constructor = ActionBitLShift;
  ActionBitOr.prototype = Object.create(Action.prototype);
  ActionBitOr.prototype.constructor = ActionBitOr;
  ActionBitRShift.prototype = Object.create(Action.prototype);
  ActionBitRShift.prototype.constructor = ActionBitRShift;
  ActionBitURShift.prototype = Object.create(Action.prototype);
  ActionBitURShift.prototype.constructor = ActionBitURShift;
  ActionBitXor.prototype = Object.create(Action.prototype);
  ActionBitXor.prototype.constructor = ActionBitXor;
  ActionCallFunction.prototype = Object.create(Action.prototype);
  ActionCallFunction.prototype.constructor = ActionCallFunction;
  ActionCallMethod.prototype = Object.create(Action.prototype);
  ActionCallMethod.prototype.constructor = ActionCallMethod;
  ActionConstantPool.prototype = Object.create(Action.prototype);
  ActionConstantPool.prototype.constructor = ActionConstantPool;
  ActionDecrement.prototype = Object.create(Action.prototype);
  ActionDecrement.prototype.constructor = ActionDecrement;
  ActionDefineFunction.prototype = Object.create(Action.prototype);
  ActionDefineFunction.prototype.constructor = ActionDefineFunction;
  ActionDefineLocal.prototype = Object.create(Action.prototype);
  ActionDefineLocal.prototype.constructor = ActionDefineLocal;
  ActionDefineLocal2.prototype = Object.create(Action.prototype);
  ActionDefineLocal2.prototype.constructor = ActionDefineLocal2;
  ActionDelete.prototype = Object.create(Action.prototype);
  ActionDelete.prototype.constructor = ActionDelete;
  ActionDelete2.prototype = Object.create(Action.prototype);
  ActionDelete2.prototype.constructor = ActionDelete2;
  ActionEnumerate.prototype = Object.create(Action.prototype);
  ActionEnumerate.prototype.constructor = ActionEnumerate;
  ActionEquals2.prototype = Object.create(Action.prototype);
  ActionEquals2.prototype.constructor = ActionEquals2;
  ActionGetMember.prototype = Object.create(Action.prototype);
  ActionGetMember.prototype.constructor = ActionGetMember;
  ActionIncrement.prototype = Object.create(Action.prototype);
  ActionIncrement.prototype.constructor = ActionIncrement;
  ActionInitArray.prototype = Object.create(Action.prototype);
  ActionInitArray.prototype.constructor = ActionInitArray;
  ActionInitObject.prototype = Object.create(Action.prototype);
  ActionInitObject.prototype.constructor = ActionInitObject;
  ActionLess2.prototype = Object.create(Action.prototype);
  ActionLess2.prototype.constructor = ActionLess2;
  ActionModulo.prototype = Object.create(Action.prototype);
  ActionModulo.prototype.constructor = ActionModulo;
  ActionNewMethod.prototype = Object.create(Action.prototype);
  ActionNewMethod.prototype.constructor = ActionNewMethod;
  ActionNewObject.prototype = Object.create(Action.prototype);
  ActionNewObject.prototype.constructor = ActionNewObject;
  ActionPushDuplicate.prototype = Object.create(Action.prototype);
  ActionPushDuplicate.prototype.constructor = ActionPushDuplicate;
  ActionReturn.prototype = Object.create(Action.prototype);
  ActionReturn.prototype.constructor = ActionReturn;
  ActionSetMember.prototype = Object.create(Action.prototype);
  ActionSetMember.prototype.constructor = ActionSetMember;
  ActionStackSwap.prototype = Object.create(Action.prototype);
  ActionStackSwap.prototype.constructor = ActionStackSwap;
  ActionStoreRegister.prototype = Object.create(Action.prototype);
  ActionStoreRegister.prototype.constructor = ActionStoreRegister;
  ActionTargetPath.prototype = Object.create(Action.prototype);
  ActionTargetPath.prototype.constructor = ActionTargetPath;
  ActionToNumber.prototype = Object.create(Action.prototype);
  ActionToNumber.prototype.constructor = ActionToNumber;
  ActionToString.prototype = Object.create(Action.prototype);
  ActionToString.prototype.constructor = ActionToString;
  ActionTypeOf.prototype = Object.create(Action.prototype);
  ActionTypeOf.prototype.constructor = ActionTypeOf;
  ActionWith.prototype = Object.create(Action.prototype);
  ActionWith.prototype.constructor = ActionWith;
  ActionEnumerate2.prototype = Object.create(Action.prototype);
  ActionEnumerate2.prototype.constructor = ActionEnumerate2;
  ActionGreater.prototype = Object.create(Action.prototype);
  ActionGreater.prototype.constructor = ActionGreater;
  ActionInstanceOf.prototype = Object.create(Action.prototype);
  ActionInstanceOf.prototype.constructor = ActionInstanceOf;
  ActionStrictEquals.prototype = Object.create(Action.prototype);
  ActionStrictEquals.prototype.constructor = ActionStrictEquals;
  ActionStringGreater.prototype = Object.create(Action.prototype);
  ActionStringGreater.prototype.constructor = ActionStringGreater;
  ActionCastOp.prototype = Object.create(Action.prototype);
  ActionCastOp.prototype.constructor = ActionCastOp;
  ActionDefineFunction2.prototype = Object.create(Action.prototype);
  ActionDefineFunction2.prototype.constructor = ActionDefineFunction2;
  ActionExtends.prototype = Object.create(Action.prototype);
  ActionExtends.prototype.constructor = ActionExtends;
  ActionImplementsOp.prototype = Object.create(Action.prototype);
  ActionImplementsOp.prototype.constructor = ActionImplementsOp;
  ActionThrow.prototype = Object.create(Action.prototype);
  ActionThrow.prototype.constructor = ActionThrow;
  ActionTry.prototype = Object.create(Action.prototype);
  ActionTry.prototype.constructor = ActionTry;
  SWF.prototype = Object.create(SWFTimelineContainer.prototype);
  SWF.prototype.constructor = SWF;
  BitArray.prototype = Object.create(FlashByteArray.prototype);
  BitArray.prototype.constructor = BitArray;
  SWFData.prototype = Object.create(BitArray.prototype);
  SWFData.prototype.constructor = SWFData;
  BitmapFormat.prototype = Object.create(Enum.prototype);
  BitmapFormat.prototype.constructor = BitmapFormat;
  GradientInterpolationMode.prototype = Object.create(Enum.prototype);
  GradientInterpolationMode.prototype.constructor = GradientInterpolationMode;
  GradientSpreadMode.prototype = Object.create(Enum.prototype);
  GradientSpreadMode.prototype.constructor = GradientSpreadMode;
  ScaleMode.prototype = Object.create(Enum.prototype);
  ScaleMode.prototype.constructor = ScaleMode;
  LineCapsStyle.prototype = Object.create(Enum.prototype);
  LineCapsStyle.prototype.constructor = LineCapsStyle;
  SWFColorTransformWithAlpha.prototype = Object.create(SWFColorTransform.prototype);
  SWFColorTransformWithAlpha.prototype.constructor = SWFColorTransformWithAlpha;
  SWFFocalGradient.prototype = Object.create(SWFGradient.prototype);
  SWFFocalGradient.prototype.constructor = SWFFocalGradient;
  SWFLineStyle2.prototype = Object.create(SWFLineStyle.prototype);
  SWFLineStyle2.prototype.constructor = SWFLineStyle2;
  SWFMorphFocalGradient.prototype = Object.create(SWFMorphGradient.prototype);
  SWFMorphFocalGradient.prototype.constructor = SWFMorphFocalGradient;
  SWFMorphLineStyle2.prototype = Object.create(SWFMorphLineStyle.prototype);
  SWFMorphLineStyle2.prototype.constructor = SWFMorphLineStyle2;
  SWFShapeRecordCurvedEdge.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordCurvedEdge.prototype.constructor = SWFShapeRecordCurvedEdge;
  SWFShapeRecordEnd.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordEnd.prototype.constructor = SWFShapeRecordEnd;
  SWFShapeRecordStraightEdge.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordStraightEdge.prototype.constructor = SWFShapeRecordStraightEdge;
  SWFShapeRecordStyleChange.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordStyleChange.prototype.constructor = SWFShapeRecordStyleChange;
  SWFShapeWithStyle.prototype = Object.create(SWFShape.prototype);
  SWFShapeWithStyle.prototype.constructor = SWFShapeWithStyle;
  GradientType.prototype = Object.create(Enum.prototype);
  GradientType.prototype.constructor = GradientType;
  CurvedEdge.prototype = Object.create(StraightEdge.prototype);
  CurvedEdge.prototype.constructor = CurvedEdge;
  LoggerShapeExporter.prototype = Object.create(ShapeExporter.prototype);
  LoggerShapeExporter.prototype.constructor = LoggerShapeExporter;
  ShapeExporterBoundsBuilder.prototype = Object.create(ShapeExporter.prototype);
  ShapeExporterBoundsBuilder.prototype.constructor = ShapeExporterBoundsBuilder;
  FilterType.prototype = Object.create(Enum.prototype);
  FilterType.prototype.constructor = FilterType;
  FilterBevel.prototype = Object.create(Filter.prototype);
  FilterBevel.prototype.constructor = FilterBevel;
  FilterBlur.prototype = Object.create(Filter.prototype);
  FilterBlur.prototype.constructor = FilterBlur;
  FilterColorMatrix.prototype = Object.create(Filter.prototype);
  FilterColorMatrix.prototype.constructor = FilterColorMatrix;
  FilterConvolution.prototype = Object.create(Filter.prototype);
  FilterConvolution.prototype.constructor = FilterConvolution;
  FilterDropShadow.prototype = Object.create(Filter.prototype);
  FilterDropShadow.prototype.constructor = FilterDropShadow;
  FilterGlow.prototype = Object.create(Filter.prototype);
  FilterGlow.prototype.constructor = FilterGlow;
  FilterGradientGlow.prototype = Object.create(Filter.prototype);
  FilterGradientGlow.prototype.constructor = FilterGradientGlow;
  FilterGradientBevel.prototype = Object.create(FilterGradientGlow.prototype);
  FilterGradientBevel.prototype.constructor = FilterGradientBevel;
  TagCSMTextSettings.prototype = Object.create(_BaseTag.prototype);
  TagCSMTextSettings.prototype.constructor = TagCSMTextSettings;
  TagDebugID.prototype = Object.create(_BaseTag.prototype);
  TagDebugID.prototype.constructor = TagDebugID;
  TagDefineBinaryData.prototype = Object.create(_BaseTag.prototype);
  TagDefineBinaryData.prototype.constructor = TagDefineBinaryData;
  TagDefineBits.prototype = Object.create(_BaseTag.prototype);
  TagDefineBits.prototype.constructor = TagDefineBits;
  TagDefineBitsJPEG2.prototype = Object.create(TagDefineBits.prototype);
  TagDefineBitsJPEG2.prototype.constructor = TagDefineBitsJPEG2;
  TagDefineBitsJPEG3.prototype = Object.create(TagDefineBitsJPEG2.prototype);
  TagDefineBitsJPEG3.prototype.constructor = TagDefineBitsJPEG3;
  TagDefineBitsJPEG4.prototype = Object.create(TagDefineBitsJPEG3.prototype);
  TagDefineBitsJPEG4.prototype.constructor = TagDefineBitsJPEG4;
  TagDefineBitsLossless.prototype = Object.create(_BaseTag.prototype);
  TagDefineBitsLossless.prototype.constructor = TagDefineBitsLossless;
  TagDefineBitsLossless2.prototype = Object.create(TagDefineBitsLossless.prototype);
  TagDefineBitsLossless2.prototype.constructor = TagDefineBitsLossless2;
  TagDefineButton.prototype = Object.create(_BaseTag.prototype);
  TagDefineButton.prototype.constructor = TagDefineButton;
  TagDefineButton2.prototype = Object.create(_BaseTag.prototype);
  TagDefineButton2.prototype.constructor = TagDefineButton2;
  TagDefineButtonCxform.prototype = Object.create(_BaseTag.prototype);
  TagDefineButtonCxform.prototype.constructor = TagDefineButtonCxform;
  TagDefineButtonSound.prototype = Object.create(_BaseTag.prototype);
  TagDefineButtonSound.prototype.constructor = TagDefineButtonSound;
  TagDefineEditText.prototype = Object.create(_BaseTag.prototype);
  TagDefineEditText.prototype.constructor = TagDefineEditText;
  TagDefineFont.prototype = Object.create(_BaseTag.prototype);
  TagDefineFont.prototype.constructor = TagDefineFont;
  TagDefineFont2.prototype = Object.create(TagDefineFont.prototype);
  TagDefineFont2.prototype.constructor = TagDefineFont2;
  TagDefineFont3.prototype = Object.create(TagDefineFont2.prototype);
  TagDefineFont3.prototype.constructor = TagDefineFont3;
  TagDefineFont4.prototype = Object.create(_BaseTag.prototype);
  TagDefineFont4.prototype.constructor = TagDefineFont4;
  TagDefineFontAlignZones.prototype = Object.create(_BaseTag.prototype);
  TagDefineFontAlignZones.prototype.constructor = TagDefineFontAlignZones;
  TagDefineFontInfo.prototype = Object.create(_BaseTag.prototype);
  TagDefineFontInfo.prototype.constructor = TagDefineFontInfo;
  TagDefineFontInfo2.prototype = Object.create(TagDefineFontInfo.prototype);
  TagDefineFontInfo2.prototype.constructor = TagDefineFontInfo2;
  TagDefineFontName.prototype = Object.create(_BaseTag.prototype);
  TagDefineFontName.prototype.constructor = TagDefineFontName;
  TagDefineMorphShape.prototype = Object.create(_BaseTag.prototype);
  TagDefineMorphShape.prototype.constructor = TagDefineMorphShape;
  TagDefineMorphShape2.prototype = Object.create(TagDefineMorphShape.prototype);
  TagDefineMorphShape2.prototype.constructor = TagDefineMorphShape2;
  TagDefineScalingGrid.prototype = Object.create(_BaseTag.prototype);
  TagDefineScalingGrid.prototype.constructor = TagDefineScalingGrid;
  TagDefineSceneAndFrameLabelData.prototype = Object.create(_BaseTag.prototype);
  TagDefineSceneAndFrameLabelData.prototype.constructor = TagDefineSceneAndFrameLabelData;
  TagDefineShape.prototype = Object.create(_BaseTag.prototype);
  TagDefineShape.prototype.constructor = TagDefineShape;
  TagDefineShape2.prototype = Object.create(TagDefineShape.prototype);
  TagDefineShape2.prototype.constructor = TagDefineShape2;
  TagDefineShape3.prototype = Object.create(TagDefineShape2.prototype);
  TagDefineShape3.prototype.constructor = TagDefineShape3;
  TagDefineShape4.prototype = Object.create(TagDefineShape3.prototype);
  TagDefineShape4.prototype.constructor = TagDefineShape4;
  TagDefineSound.prototype = Object.create(_BaseTag.prototype);
  TagDefineSound.prototype.constructor = TagDefineSound;
  TagDefineSprite.prototype = Object.create(SWFTimelineContainer.prototype);
  TagDefineSprite.prototype.constructor = TagDefineSprite;
  TagDefineText.prototype = Object.create(_BaseTag.prototype);
  TagDefineText.prototype.constructor = TagDefineText;
  TagDefineText2.prototype = Object.create(TagDefineText.prototype);
  TagDefineText2.prototype.constructor = TagDefineText2;
  TagDefineVideoStream.prototype = Object.create(_BaseTag.prototype);
  TagDefineVideoStream.prototype.constructor = TagDefineVideoStream;
  TagDoABC.prototype = Object.create(_BaseTag.prototype);
  TagDoABC.prototype.constructor = TagDoABC;
  TagDoABCDeprecated.prototype = Object.create(_BaseTag.prototype);
  TagDoABCDeprecated.prototype.constructor = TagDoABCDeprecated;
  TagDoAction.prototype = Object.create(_BaseTag.prototype);
  TagDoAction.prototype.constructor = TagDoAction;
  TagDoInitAction.prototype = Object.create(TagDoAction.prototype);
  TagDoInitAction.prototype.constructor = TagDoInitAction;
  TagEnableDebugger.prototype = Object.create(_BaseTag.prototype);
  TagEnableDebugger.prototype.constructor = TagEnableDebugger;
  TagEnableDebugger2.prototype = Object.create(TagEnableDebugger.prototype);
  TagEnableDebugger2.prototype.constructor = TagEnableDebugger2;
  TagEnableTelemetry.prototype = Object.create(_BaseTag.prototype);
  TagEnableTelemetry.prototype.constructor = TagEnableTelemetry;
  TagEnd.prototype = Object.create(_BaseTag.prototype);
  TagEnd.prototype.constructor = TagEnd;
  TagExportAssets.prototype = Object.create(_BaseTag.prototype);
  TagExportAssets.prototype.constructor = TagExportAssets;
  TagFileAttributes.prototype = Object.create(_BaseTag.prototype);
  TagFileAttributes.prototype.constructor = TagFileAttributes;
  TagFrameLabel.prototype = Object.create(_BaseTag.prototype);
  TagFrameLabel.prototype.constructor = TagFrameLabel;
  TagImportAssets.prototype = Object.create(_BaseTag.prototype);
  TagImportAssets.prototype.constructor = TagImportAssets;
  TagImportAssets2.prototype = Object.create(TagImportAssets.prototype);
  TagImportAssets2.prototype.constructor = TagImportAssets2;
  TagJPEGTables.prototype = Object.create(_BaseTag.prototype);
  TagJPEGTables.prototype.constructor = TagJPEGTables;
  TagMetadata.prototype = Object.create(_BaseTag.prototype);
  TagMetadata.prototype.constructor = TagMetadata;
  TagNameCharacter.prototype = Object.create(_BaseTag.prototype);
  TagNameCharacter.prototype.constructor = TagNameCharacter;
  TagPlaceObject.prototype = Object.create(_BaseTag.prototype);
  TagPlaceObject.prototype.constructor = TagPlaceObject;
  TagPlaceObject2.prototype = Object.create(TagPlaceObject.prototype);
  TagPlaceObject2.prototype.constructor = TagPlaceObject2;
  TagPlaceObject3.prototype = Object.create(TagPlaceObject2.prototype);
  TagPlaceObject3.prototype.constructor = TagPlaceObject3;
  TagPlaceObject4.prototype = Object.create(TagPlaceObject3.prototype);
  TagPlaceObject4.prototype.constructor = TagPlaceObject4;
  TagProductInfo.prototype = Object.create(_BaseTag.prototype);
  TagProductInfo.prototype.constructor = TagProductInfo;
  TagPathsArePostScript.prototype = Object.create(_BaseTag.prototype);
  TagPathsArePostScript.prototype.constructor = TagPathsArePostScript;
  TagProtect.prototype = Object.create(_BaseTag.prototype);
  TagProtect.prototype.constructor = TagProtect;
  TagRemoveObject.prototype = Object.create(_BaseTag.prototype);
  TagRemoveObject.prototype.constructor = TagRemoveObject;
  TagRemoveObject2.prototype = Object.create(TagRemoveObject.prototype);
  TagRemoveObject2.prototype.constructor = TagRemoveObject2;
  TagScriptLimits.prototype = Object.create(_BaseTag.prototype);
  TagScriptLimits.prototype.constructor = TagScriptLimits;
  TagSetBackgroundColor.prototype = Object.create(_BaseTag.prototype);
  TagSetBackgroundColor.prototype.constructor = TagSetBackgroundColor;
  TagSetTabIndex.prototype = Object.create(_BaseTag.prototype);
  TagSetTabIndex.prototype.constructor = TagSetTabIndex;
  TagShowFrame.prototype = Object.create(_BaseTag.prototype);
  TagShowFrame.prototype.constructor = TagShowFrame;
  TagSoundStreamBlock.prototype = Object.create(_BaseTag.prototype);
  TagSoundStreamBlock.prototype.constructor = TagSoundStreamBlock;
  TagSoundStreamHead.prototype = Object.create(_BaseTag.prototype);
  TagSoundStreamHead.prototype.constructor = TagSoundStreamHead;
  TagSoundStreamHead2.prototype = Object.create(TagSoundStreamHead.prototype);
  TagSoundStreamHead2.prototype.constructor = TagSoundStreamHead2;
  TagStartSound.prototype = Object.create(_BaseTag.prototype);
  TagStartSound.prototype.constructor = TagStartSound;
  TagStartSound2.prototype = Object.create(_BaseTag.prototype);
  TagStartSound2.prototype.constructor = TagStartSound2;
  TagSymbolClass.prototype = Object.create(_BaseTag.prototype);
  TagSymbolClass.prototype.constructor = TagSymbolClass;
  TagUnknown.prototype = Object.create(_BaseTag.prototype);
  TagUnknown.prototype.constructor = TagUnknown;
  TagVideoFrame.prototype = Object.create(_BaseTag.prototype);
  TagVideoFrame.prototype.constructor = TagVideoFrame;
  TagSWFEncryptActions.prototype = Object.create(TagUnknown.prototype);
  TagSWFEncryptActions.prototype.constructor = TagSWFEncryptActions;
  TagSWFEncryptSignature.prototype = Object.create(TagUnknown.prototype);
  TagSWFEncryptSignature.prototype.constructor = TagSWFEncryptSignature;
  Endian.prototype = Object.create(Enum.prototype);
  Endian.prototype.constructor = Endian;
  SWFShapeRasterizer.prototype = Object.create(ShapeExporter.prototype);
  SWFShapeRasterizer.prototype.constructor = SWFShapeRasterizer;
  function ABC() {
    this.methodsDesc = emptyList();
    this.instancesInfo = emptyList();
    this.classesInfo = emptyList();
    this.typesInfo = emptyList();
    this.scriptsInfo = emptyList();
    this.methodsBodies = emptyList();
    this.metadatas = emptyList();
    this.cpool = new AbcConstantPool();
  }
  function ABC$Namespace(kind, name) {
    ABC$Namespace$Companion_getInstance();
    this.kind = kind;
    this.name = name;
  }
  function ABC$Namespace$Companion() {
    ABC$Namespace$Companion_instance = this;
    this.NAMESPACE = 8;
    this.PACKAGE_NAMESPACE = 22;
    this.PACKAGE_INTERNAL_NAMESPACE = 23;
    this.PROTECTED_NAMESPACE = 24;
    this.EXPLICIT_NAMESPACE = 25;
    this.STATIC_PROTECTED_NAMESPACE = 26;
    this.PRIVATE_NAMESPACE = 5;
    this.EMPTY = new ABC$Namespace(0, '');
  }
  ABC$Namespace$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ABC$Namespace$Companion_instance = null;
  function ABC$Namespace$Companion_getInstance() {
    if (ABC$Namespace$Companion_instance === null) {
      new ABC$Namespace$Companion();
    }return ABC$Namespace$Companion_instance;
  }
  ABC$Namespace.prototype.toString = function () {
    return this.name;
  };
  ABC$Namespace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Namespace',
    interfaces: []
  };
  ABC$Namespace.prototype.component1 = function () {
    return this.kind;
  };
  ABC$Namespace.prototype.component2 = function () {
    return this.name;
  };
  ABC$Namespace.prototype.copy_19mbxw$ = function (kind, name) {
    return new ABC$Namespace(kind === void 0 ? this.kind : kind, name === void 0 ? this.name : name);
  };
  ABC$Namespace.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$Namespace.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.name, other.name)))));
  };
  function ABC$AbstractMultiname() {
  }
  ABC$AbstractMultiname.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AbstractMultiname',
    interfaces: []
  };
  function ABC$EmptyMultiname() {
    ABC$EmptyMultiname_instance = this;
    this.simpleName_fq728y$_0 = '';
  }
  Object.defineProperty(ABC$EmptyMultiname.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_fq728y$_0;
    }
  });
  ABC$EmptyMultiname.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyMultiname',
    interfaces: [ABC$AbstractMultiname]
  };
  var ABC$EmptyMultiname_instance = null;
  function ABC$EmptyMultiname_getInstance() {
    if (ABC$EmptyMultiname_instance === null) {
      new ABC$EmptyMultiname();
    }return ABC$EmptyMultiname_instance;
  }
  function ABC$ABCQName(namespace, name) {
    this.namespace = namespace;
    this.name = name;
    this.simpleName_39h091$_0 = this.name;
  }
  ABC$ABCQName.prototype.toString = function () {
    return this.namespace.toString() + '.' + this.name;
  };
  Object.defineProperty(ABC$ABCQName.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_39h091$_0;
    }
  });
  ABC$ABCQName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ABCQName',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$ABCQName.prototype.component1 = function () {
    return this.namespace;
  };
  ABC$ABCQName.prototype.component2 = function () {
    return this.name;
  };
  ABC$ABCQName.prototype.copy_msx75$ = function (namespace, name) {
    return new ABC$ABCQName(namespace === void 0 ? this.namespace : namespace, name === void 0 ? this.name : name);
  };
  ABC$ABCQName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespace) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$ABCQName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.namespace, other.namespace) && Kotlin.equals(this.name, other.name)))));
  };
  function ABC$QNameA(namespace, name) {
    this.namespace = namespace;
    this.name = name;
    this.simpleName_aukpbk$_0 = this.name;
  }
  Object.defineProperty(ABC$QNameA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_aukpbk$_0;
    }
  });
  ABC$QNameA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QNameA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$QNameA.prototype.component1 = function () {
    return this.namespace;
  };
  ABC$QNameA.prototype.component2 = function () {
    return this.name;
  };
  ABC$QNameA.prototype.copy_msx75$ = function (namespace, name) {
    return new ABC$QNameA(namespace === void 0 ? this.namespace : namespace, name === void 0 ? this.name : name);
  };
  ABC$QNameA.prototype.toString = function () {
    return 'QNameA(namespace=' + Kotlin.toString(this.namespace) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  ABC$QNameA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespace) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$QNameA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.namespace, other.namespace) && Kotlin.equals(this.name, other.name)))));
  };
  function ABC$RTQName(name) {
    this.name = name;
    this.simpleName_rctq8d$_0 = this.name;
  }
  Object.defineProperty(ABC$RTQName.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_rctq8d$_0;
    }
  });
  ABC$RTQName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RTQName',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$RTQName.prototype.component1 = function () {
    return this.name;
  };
  ABC$RTQName.prototype.copy_61zpoe$ = function (name) {
    return new ABC$RTQName(name === void 0 ? this.name : name);
  };
  ABC$RTQName.prototype.toString = function () {
    return 'RTQName(name=' + Kotlin.toString(this.name) + ')';
  };
  ABC$RTQName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$RTQName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function ABC$RTQNameA(name) {
    this.name = name;
    this.simpleName_3e5pqq$_0 = this.name;
  }
  Object.defineProperty(ABC$RTQNameA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_3e5pqq$_0;
    }
  });
  ABC$RTQNameA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RTQNameA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$RTQNameA.prototype.component1 = function () {
    return this.name;
  };
  ABC$RTQNameA.prototype.copy_61zpoe$ = function (name) {
    return new ABC$RTQNameA(name === void 0 ? this.name : name);
  };
  ABC$RTQNameA.prototype.toString = function () {
    return 'RTQNameA(name=' + Kotlin.toString(this.name) + ')';
  };
  ABC$RTQNameA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$RTQNameA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function ABC$RTQNameL() {
    ABC$RTQNameL_instance = this;
    this.simpleName_l1qof1$_0 = '';
  }
  Object.defineProperty(ABC$RTQNameL.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_l1qof1$_0;
    }
  });
  ABC$RTQNameL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RTQNameL',
    interfaces: [ABC$AbstractMultiname]
  };
  var ABC$RTQNameL_instance = null;
  function ABC$RTQNameL_getInstance() {
    if (ABC$RTQNameL_instance === null) {
      new ABC$RTQNameL();
    }return ABC$RTQNameL_instance;
  }
  function ABC$RTQNameLA() {
    ABC$RTQNameLA_instance = this;
    this.simpleName_kxvbeq$_0 = '';
  }
  Object.defineProperty(ABC$RTQNameLA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_kxvbeq$_0;
    }
  });
  ABC$RTQNameLA.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RTQNameLA',
    interfaces: [ABC$AbstractMultiname]
  };
  var ABC$RTQNameLA_instance = null;
  function ABC$RTQNameLA_getInstance() {
    if (ABC$RTQNameLA_instance === null) {
      new ABC$RTQNameLA();
    }return ABC$RTQNameLA_instance;
  }
  function ABC$Multiname(name, namespaceSet) {
    this.name = name;
    this.namespaceSet = namespaceSet;
    this.simpleName_un44on$_0 = this.name;
  }
  Object.defineProperty(ABC$Multiname.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_un44on$_0;
    }
  });
  ABC$Multiname.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Multiname',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$Multiname.prototype.component1 = function () {
    return this.name;
  };
  ABC$Multiname.prototype.component2 = function () {
    return this.namespaceSet;
  };
  ABC$Multiname.prototype.copy_o91ty$ = function (name, namespaceSet) {
    return new ABC$Multiname(name === void 0 ? this.name : name, namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$Multiname.prototype.toString = function () {
    return 'Multiname(name=' + Kotlin.toString(this.name) + (', namespaceSet=' + Kotlin.toString(this.namespaceSet)) + ')';
  };
  ABC$Multiname.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$Multiname.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.namespaceSet, other.namespaceSet)))));
  };
  function ABC$MultinameA(name, namespaceSet) {
    this.name = name;
    this.namespaceSet = namespaceSet;
    this.simpleName_y803s8$_0 = this.name;
  }
  Object.defineProperty(ABC$MultinameA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_y803s8$_0;
    }
  });
  ABC$MultinameA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultinameA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$MultinameA.prototype.component1 = function () {
    return this.name;
  };
  ABC$MultinameA.prototype.component2 = function () {
    return this.namespaceSet;
  };
  ABC$MultinameA.prototype.copy_o91ty$ = function (name, namespaceSet) {
    return new ABC$MultinameA(name === void 0 ? this.name : name, namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$MultinameA.prototype.toString = function () {
    return 'MultinameA(name=' + Kotlin.toString(this.name) + (', namespaceSet=' + Kotlin.toString(this.namespaceSet)) + ')';
  };
  ABC$MultinameA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$MultinameA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.namespaceSet, other.namespaceSet)))));
  };
  function ABC$MultinameL(namespaceSet) {
    this.namespaceSet = namespaceSet;
    this.simpleName_j5izil$_0 = '';
  }
  Object.defineProperty(ABC$MultinameL.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_j5izil$_0;
    }
  });
  ABC$MultinameL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultinameL',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$MultinameL.prototype.component1 = function () {
    return this.namespaceSet;
  };
  ABC$MultinameL.prototype.copy_ofikb0$ = function (namespaceSet) {
    return new ABC$MultinameL(namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$MultinameL.prototype.toString = function () {
    return 'MultinameL(namespaceSet=' + Kotlin.toString(this.namespaceSet) + ')';
  };
  ABC$MultinameL.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$MultinameL.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.namespaceSet, other.namespaceSet))));
  };
  function ABC$MultinameLA(namespaceSet) {
    this.namespaceSet = namespaceSet;
    this.simpleName_hsjcyc$_0 = '';
  }
  Object.defineProperty(ABC$MultinameLA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_hsjcyc$_0;
    }
  });
  ABC$MultinameLA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultinameLA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$MultinameLA.prototype.component1 = function () {
    return this.namespaceSet;
  };
  ABC$MultinameLA.prototype.copy_ofikb0$ = function (namespaceSet) {
    return new ABC$MultinameLA(namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$MultinameLA.prototype.toString = function () {
    return 'MultinameLA(namespaceSet=' + Kotlin.toString(this.namespaceSet) + ')';
  };
  ABC$MultinameLA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$MultinameLA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.namespaceSet, other.namespaceSet))));
  };
  function ABC$TypeName(qname, parameters) {
    this.qname = qname;
    this.parameters = parameters;
    this.simpleName_js439s$_0 = 'TypeName(' + this.qname + ')';
  }
  Object.defineProperty(ABC$TypeName.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_js439s$_0;
    }
  });
  ABC$TypeName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeName',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$TypeName.prototype.component1 = function () {
    return this.qname;
  };
  ABC$TypeName.prototype.component2 = function () {
    return this.parameters;
  };
  ABC$TypeName.prototype.copy_oku237$ = function (qname, parameters) {
    return new ABC$TypeName(qname === void 0 ? this.qname : qname, parameters === void 0 ? this.parameters : parameters);
  };
  ABC$TypeName.prototype.toString = function () {
    return 'TypeName(qname=' + Kotlin.toString(this.qname) + (', parameters=' + Kotlin.toString(this.parameters)) + ')';
  };
  ABC$TypeName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.qname) | 0;
    result = result * 31 + Kotlin.hashCode(this.parameters) | 0;
    return result;
  };
  ABC$TypeName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.qname, other.qname) && Kotlin.equals(this.parameters, other.parameters)))));
  };
  Object.defineProperty(ABC.prototype, 'ints', {
    get: function () {
      return this.cpool.ints;
    }
  });
  Object.defineProperty(ABC.prototype, 'uints', {
    get: function () {
      return this.cpool.uints;
    }
  });
  Object.defineProperty(ABC.prototype, 'doubles', {
    get: function () {
      return this.cpool.doubles;
    }
  });
  Object.defineProperty(ABC.prototype, 'strings', {
    get: function () {
      return this.cpool.strings;
    }
  });
  Object.defineProperty(ABC.prototype, 'namespaces', {
    get: function () {
      return this.cpool.namespaces;
    }
  });
  Object.defineProperty(ABC.prototype, 'namespaceSets', {
    get: function () {
      return this.cpool.namespaceSets;
    }
  });
  Object.defineProperty(ABC.prototype, 'multinames', {
    get: function () {
      return this.cpool.multinames;
    }
  });
  function ABC$Metadata(name, values) {
    this.name = name;
    this.values = values;
  }
  ABC$Metadata.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Metadata',
    interfaces: []
  };
  ABC$Metadata.prototype.component1 = function () {
    return this.name;
  };
  ABC$Metadata.prototype.component2 = function () {
    return this.values;
  };
  ABC$Metadata.prototype.copy_mvjluj$ = function (name, values) {
    return new ABC$Metadata(name === void 0 ? this.name : name, values === void 0 ? this.values : values);
  };
  ABC$Metadata.prototype.toString = function () {
    return 'Metadata(name=' + Kotlin.toString(this.name) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  ABC$Metadata.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  ABC$Metadata.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.values, other.values)))));
  };
  ABC.prototype.readFile_39qel5$ = function (s) {
    var minor = readU16LE(s);
    var major = readU16LE(s);
    this.cpool.readConstantPool_39qel5$(s);
    var $receiver = until(0, readU30(s));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.readMethod_39qel5$(s));
    }
    this.methodsDesc = destination;
    var $receiver_0 = until(0, readU30(s));
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var name = this.strings.get_za3lpa$(readU30(s));
      var $receiver_1 = until(0, readU30(s));
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        destination_1.add_11rb$(to(this.strings.get_za3lpa$(readU30(s)), this.strings.get_za3lpa$(readU30(s))));
      }
      var items = destination_1;
      tmp$_1.call(destination_0, new ABC$Metadata(name, toMap(items)));
    }
    this.metadatas = destination_0;
    var typeCount = readU30(s);
    var $receiver_2 = until(0, typeCount);
    var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_3;
    tmp$_3 = $receiver_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_2 = tmp$_3.next();
      destination_2.add_11rb$(this.readInstance_39qel5$(s));
    }
    this.instancesInfo = destination_2;
    var $receiver_3 = until(0, typeCount);
    var destination_3 = ArrayList_init(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_4;
    tmp$_4 = $receiver_3.iterator();
    while (tmp$_4.hasNext()) {
      var item_3 = tmp$_4.next();
      destination_3.add_11rb$(this.readClass_39qel5$(s));
    }
    this.classesInfo = destination_3;
    var $receiver_4 = zip(this.instancesInfo, this.classesInfo);
    var destination_4 = ArrayList_init(collectionSizeOrDefault($receiver_4, 10));
    var tmp$_5;
    tmp$_5 = $receiver_4.iterator();
    while (tmp$_5.hasNext()) {
      var item_4 = tmp$_5.next();
      destination_4.add_11rb$(new ABC$TypeInfo(this, item_4.first, item_4.second));
    }
    this.typesInfo = destination_4;
    var $receiver_5 = until(0, readU30(s));
    var destination_5 = ArrayList_init(collectionSizeOrDefault($receiver_5, 10));
    var tmp$_6;
    tmp$_6 = $receiver_5.iterator();
    while (tmp$_6.hasNext()) {
      var item_5 = tmp$_6.next();
      destination_5.add_11rb$(new ABC$ScriptInfo(this.methodsDesc.get_za3lpa$(readU30(s)), this.readTraits_39qel5$(s)));
    }
    this.scriptsInfo = destination_5;
    var $receiver_6 = until(0, readU30(s));
    var destination_6 = ArrayList_init(collectionSizeOrDefault($receiver_6, 10));
    var tmp$_7;
    tmp$_7 = $receiver_6.iterator();
    while (tmp$_7.hasNext()) {
      var item_6 = tmp$_7.next();
      var tmp$_8 = destination_6.add_11rb$;
      var method = this.methodsDesc.get_za3lpa$(readU30(s));
      var maxStack = readU30(s);
      var localCount = readU30(s);
      var initScopeDepth = readU30(s);
      var maxScopeDepth = readU30(s);
      var opcodes = readBytes(s, readU30(s));
      var $receiver_7 = until(0, readU30(s));
      var destination_7 = ArrayList_init(collectionSizeOrDefault($receiver_7, 10));
      var tmp$_9;
      tmp$_9 = $receiver_7.iterator();
      while (tmp$_9.hasNext()) {
        var item_7 = tmp$_9.next();
        destination_7.add_11rb$(new ABC$ExceptionInfo(readU30(s), readU30(s), readU30(s), this.multinames.get_za3lpa$(readU30(s)), this.multinames.get_za3lpa$(readU30(s))));
      }
      var exceptions = destination_7;
      var traits = this.readTraits_39qel5$(s);
      tmp$_8.call(destination_6, new ABC$MethodBody(method, maxStack, localCount, initScopeDepth, maxScopeDepth, opcodes, this.cpool, exceptions, traits));
    }
    this.methodsBodies = destination_6;
    return this;
  };
  function ABC$MethodBody(method, maxStack, localCount, initScopeDepth, maxScopeDepth, opcodes, cpool, exceptions, traits) {
    this.method = method;
    this.maxStack = maxStack;
    this.localCount = localCount;
    this.initScopeDepth = initScopeDepth;
    this.maxScopeDepth = maxScopeDepth;
    this.opcodes = opcodes;
    this.cpool = cpool;
    this.exceptions = exceptions;
    this.traits = traits;
    this.ops_5lp2mv$_0 = lazy(ABC$MethodBody$ops$lambda(this));
    this.method.body = this;
  }
  Object.defineProperty(ABC$MethodBody.prototype, 'ops', {
    get: function () {
      return this.ops_5lp2mv$_0.value;
    }
  });
  function ABC$MethodBody$ops$lambda$lambda$lambda(this$) {
    return function (it) {
      return !get_eof(this$);
    };
  }
  function ABC$MethodBody$ops$lambda$lambda$lambda_0(this$MethodBody, this$) {
    return function (it) {
      return AbcOperation$Companion_getInstance().read_s1rqul$(this$MethodBody.cpool, this$);
    };
  }
  function ABC$MethodBody$ops$lambda(this$MethodBody) {
    return function () {
      var $receiver = openSync(this$MethodBody.opcodes);
      var gen = ABC$MethodBody$ops$lambda$lambda$lambda_0(this$MethodBody, $receiver);
      var $receiver_0 = ArrayList_init_0();
      while (ABC$MethodBody$ops$lambda$lambda$lambda($receiver)($receiver_0.size)) {
        var element = gen($receiver_0.size);
        $receiver_0.add_11rb$(element);
      }
      return $receiver_0;
    };
  }
  ABC$MethodBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MethodBody',
    interfaces: []
  };
  function ABC$ExceptionInfo(from, to, target, type, variableName) {
    this.from = from;
    this.to = to;
    this.target = target;
    this.type = type;
    this.variableName = variableName;
  }
  ABC$ExceptionInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExceptionInfo',
    interfaces: []
  };
  ABC$ExceptionInfo.prototype.component1 = function () {
    return this.from;
  };
  ABC$ExceptionInfo.prototype.component2 = function () {
    return this.to;
  };
  ABC$ExceptionInfo.prototype.component3 = function () {
    return this.target;
  };
  ABC$ExceptionInfo.prototype.component4 = function () {
    return this.type;
  };
  ABC$ExceptionInfo.prototype.component5 = function () {
    return this.variableName;
  };
  ABC$ExceptionInfo.prototype.copy_cuk7z6$ = function (from, to, target, type, variableName) {
    return new ABC$ExceptionInfo(from === void 0 ? this.from : from, to === void 0 ? this.to : to, target === void 0 ? this.target : target, type === void 0 ? this.type : type, variableName === void 0 ? this.variableName : variableName);
  };
  ABC$ExceptionInfo.prototype.toString = function () {
    return 'ExceptionInfo(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + (', target=' + Kotlin.toString(this.target)) + (', type=' + Kotlin.toString(this.type)) + (', variableName=' + Kotlin.toString(this.variableName)) + ')';
  };
  ABC$ExceptionInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.variableName) | 0;
    return result;
  };
  ABC$ExceptionInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.target, other.target) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.variableName, other.variableName)))));
  };
  function ABC$Trait() {
  }
  ABC$Trait.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Trait',
    interfaces: []
  };
  function ABC$TraitSlot(name, slotIndex, type, value) {
    this.name_bozkc1$_0 = name;
    this.slotIndex = slotIndex;
    this.type = type;
    this.value = value;
  }
  Object.defineProperty(ABC$TraitSlot.prototype, 'name', {
    get: function () {
      return this.name_bozkc1$_0;
    }
  });
  ABC$TraitSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraitSlot',
    interfaces: [ABC$Trait]
  };
  ABC$TraitSlot.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitSlot.prototype.component2 = function () {
    return this.slotIndex;
  };
  ABC$TraitSlot.prototype.component3 = function () {
    return this.type;
  };
  ABC$TraitSlot.prototype.component4 = function () {
    return this.value;
  };
  ABC$TraitSlot.prototype.copy_4orq9q$ = function (name, slotIndex, type, value) {
    return new ABC$TraitSlot(name === void 0 ? this.name : name, slotIndex === void 0 ? this.slotIndex : slotIndex, type === void 0 ? this.type : type, value === void 0 ? this.value : value);
  };
  ABC$TraitSlot.prototype.toString = function () {
    return 'TraitSlot(name=' + Kotlin.toString(this.name) + (', slotIndex=' + Kotlin.toString(this.slotIndex)) + (', type=' + Kotlin.toString(this.type)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  ABC$TraitSlot.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slotIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  ABC$TraitSlot.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slotIndex, other.slotIndex) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value)))));
  };
  function ABC$TraitMethod(name, dispIndex, methodIndex) {
    this.name_hkyejw$_0 = name;
    this.dispIndex = dispIndex;
    this.methodIndex = methodIndex;
  }
  Object.defineProperty(ABC$TraitMethod.prototype, 'name', {
    get: function () {
      return this.name_hkyejw$_0;
    }
  });
  ABC$TraitMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraitMethod',
    interfaces: [ABC$Trait]
  };
  ABC$TraitMethod.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitMethod.prototype.component2 = function () {
    return this.dispIndex;
  };
  ABC$TraitMethod.prototype.component3 = function () {
    return this.methodIndex;
  };
  ABC$TraitMethod.prototype.copy_5yq8ey$ = function (name, dispIndex, methodIndex) {
    return new ABC$TraitMethod(name === void 0 ? this.name : name, dispIndex === void 0 ? this.dispIndex : dispIndex, methodIndex === void 0 ? this.methodIndex : methodIndex);
  };
  ABC$TraitMethod.prototype.toString = function () {
    return 'TraitMethod(name=' + Kotlin.toString(this.name) + (', dispIndex=' + Kotlin.toString(this.dispIndex)) + (', methodIndex=' + Kotlin.toString(this.methodIndex)) + ')';
  };
  ABC$TraitMethod.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.dispIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.methodIndex) | 0;
    return result;
  };
  ABC$TraitMethod.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.dispIndex, other.dispIndex) && Kotlin.equals(this.methodIndex, other.methodIndex)))));
  };
  function ABC$TraitClass(name, slotIndex, classIndex) {
    this.name_8d8qtj$_0 = name;
    this.slotIndex = slotIndex;
    this.classIndex = classIndex;
  }
  Object.defineProperty(ABC$TraitClass.prototype, 'name', {
    get: function () {
      return this.name_8d8qtj$_0;
    }
  });
  ABC$TraitClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraitClass',
    interfaces: [ABC$Trait]
  };
  ABC$TraitClass.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitClass.prototype.component2 = function () {
    return this.slotIndex;
  };
  ABC$TraitClass.prototype.component3 = function () {
    return this.classIndex;
  };
  ABC$TraitClass.prototype.copy_5yq8ey$ = function (name, slotIndex, classIndex) {
    return new ABC$TraitClass(name === void 0 ? this.name : name, slotIndex === void 0 ? this.slotIndex : slotIndex, classIndex === void 0 ? this.classIndex : classIndex);
  };
  ABC$TraitClass.prototype.toString = function () {
    return 'TraitClass(name=' + Kotlin.toString(this.name) + (', slotIndex=' + Kotlin.toString(this.slotIndex)) + (', classIndex=' + Kotlin.toString(this.classIndex)) + ')';
  };
  ABC$TraitClass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slotIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.classIndex) | 0;
    return result;
  };
  ABC$TraitClass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slotIndex, other.slotIndex) && Kotlin.equals(this.classIndex, other.classIndex)))));
  };
  function ABC$TraitFunction(name, slotIndex, functionIndex) {
    this.name_xi0wln$_0 = name;
    this.slotIndex = slotIndex;
    this.functionIndex = functionIndex;
  }
  Object.defineProperty(ABC$TraitFunction.prototype, 'name', {
    get: function () {
      return this.name_xi0wln$_0;
    }
  });
  ABC$TraitFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TraitFunction',
    interfaces: [ABC$Trait]
  };
  ABC$TraitFunction.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitFunction.prototype.component2 = function () {
    return this.slotIndex;
  };
  ABC$TraitFunction.prototype.component3 = function () {
    return this.functionIndex;
  };
  ABC$TraitFunction.prototype.copy_5yq8ey$ = function (name, slotIndex, functionIndex) {
    return new ABC$TraitFunction(name === void 0 ? this.name : name, slotIndex === void 0 ? this.slotIndex : slotIndex, functionIndex === void 0 ? this.functionIndex : functionIndex);
  };
  ABC$TraitFunction.prototype.toString = function () {
    return 'TraitFunction(name=' + Kotlin.toString(this.name) + (', slotIndex=' + Kotlin.toString(this.slotIndex)) + (', functionIndex=' + Kotlin.toString(this.functionIndex)) + ')';
  };
  ABC$TraitFunction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slotIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.functionIndex) | 0;
    return result;
  };
  ABC$TraitFunction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slotIndex, other.slotIndex) && Kotlin.equals(this.functionIndex, other.functionIndex)))));
  };
  function ABC$InstanceInfo(name, base, interfaces, instanceInitializer, traits) {
    this.name = name;
    this.base = base;
    this.interfaces = interfaces;
    this.instanceInitializer = instanceInitializer;
    this.traits = traits;
  }
  ABC$InstanceInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstanceInfo',
    interfaces: []
  };
  ABC$InstanceInfo.prototype.component1 = function () {
    return this.name;
  };
  ABC$InstanceInfo.prototype.component2 = function () {
    return this.base;
  };
  ABC$InstanceInfo.prototype.component3 = function () {
    return this.interfaces;
  };
  ABC$InstanceInfo.prototype.component4 = function () {
    return this.instanceInitializer;
  };
  ABC$InstanceInfo.prototype.component5 = function () {
    return this.traits;
  };
  ABC$InstanceInfo.prototype.copy_9jyk42$ = function (name, base, interfaces, instanceInitializer, traits) {
    return new ABC$InstanceInfo(name === void 0 ? this.name : name, base === void 0 ? this.base : base, interfaces === void 0 ? this.interfaces : interfaces, instanceInitializer === void 0 ? this.instanceInitializer : instanceInitializer, traits === void 0 ? this.traits : traits);
  };
  ABC$InstanceInfo.prototype.toString = function () {
    return 'InstanceInfo(name=' + Kotlin.toString(this.name) + (', base=' + Kotlin.toString(this.base)) + (', interfaces=' + Kotlin.toString(this.interfaces)) + (', instanceInitializer=' + Kotlin.toString(this.instanceInitializer)) + (', traits=' + Kotlin.toString(this.traits)) + ')';
  };
  ABC$InstanceInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    result = result * 31 + Kotlin.hashCode(this.interfaces) | 0;
    result = result * 31 + Kotlin.hashCode(this.instanceInitializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.traits) | 0;
    return result;
  };
  ABC$InstanceInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.base, other.base) && Kotlin.equals(this.interfaces, other.interfaces) && Kotlin.equals(this.instanceInitializer, other.instanceInitializer) && Kotlin.equals(this.traits, other.traits)))));
  };
  function ABC$ClassInfo(initializer, traits) {
    this.initializer = initializer;
    this.traits = traits;
  }
  ABC$ClassInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassInfo',
    interfaces: []
  };
  ABC$ClassInfo.prototype.component1 = function () {
    return this.initializer;
  };
  ABC$ClassInfo.prototype.component2 = function () {
    return this.traits;
  };
  ABC$ClassInfo.prototype.copy_faggc7$ = function (initializer, traits) {
    return new ABC$ClassInfo(initializer === void 0 ? this.initializer : initializer, traits === void 0 ? this.traits : traits);
  };
  ABC$ClassInfo.prototype.toString = function () {
    return 'ClassInfo(initializer=' + Kotlin.toString(this.initializer) + (', traits=' + Kotlin.toString(this.traits)) + ')';
  };
  ABC$ClassInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.traits) | 0;
    return result;
  };
  ABC$ClassInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.initializer, other.initializer) && Kotlin.equals(this.traits, other.traits)))));
  };
  function ABC$TypeInfo(abc, instanceInfo, classInfo) {
    this.abc = abc;
    this.instanceInfo = instanceInfo;
    this.classInfo = classInfo;
  }
  Object.defineProperty(ABC$TypeInfo.prototype, 'name', {
    get: function () {
      return this.instanceInfo.name;
    }
  });
  Object.defineProperty(ABC$TypeInfo.prototype, 'instanceTraits', {
    get: function () {
      return this.instanceInfo.traits;
    }
  });
  Object.defineProperty(ABC$TypeInfo.prototype, 'classTraits', {
    get: function () {
      return this.classInfo.traits;
    }
  });
  ABC$TypeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeInfo',
    interfaces: []
  };
  function ABC$ScriptInfo(initializer, traits) {
    this.initializer = initializer;
    this.traits = traits;
  }
  ABC$ScriptInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScriptInfo',
    interfaces: []
  };
  ABC$ScriptInfo.prototype.component1 = function () {
    return this.initializer;
  };
  ABC$ScriptInfo.prototype.component2 = function () {
    return this.traits;
  };
  ABC$ScriptInfo.prototype.copy_faggc7$ = function (initializer, traits) {
    return new ABC$ScriptInfo(initializer === void 0 ? this.initializer : initializer, traits === void 0 ? this.traits : traits);
  };
  ABC$ScriptInfo.prototype.toString = function () {
    return 'ScriptInfo(initializer=' + Kotlin.toString(this.initializer) + (', traits=' + Kotlin.toString(this.traits)) + ')';
  };
  ABC$ScriptInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.traits) | 0;
    return result;
  };
  ABC$ScriptInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.initializer, other.initializer) && Kotlin.equals(this.traits, other.traits)))));
  };
  ABC.prototype.readClass_39qel5$ = function (s) {
    return new ABC$ClassInfo(this.methodsDesc.get_za3lpa$(readU30(s)), this.readTraits_39qel5$(s));
  };
  ABC.prototype.readInstance_39qel5$ = function (s) {
    var tmp$;
    var name = Kotlin.isType(tmp$ = this.multinames.get_za3lpa$(readU30(s)), ABC$ABCQName) ? tmp$ : throwCCE();
    var base = this.multinames.get_za3lpa$(readU30(s));
    var flags = readU8(s);
    var isSealed = (flags & 1) !== 0;
    var isFinal = (flags & 2) !== 0;
    var isInterface = (flags & 4) !== 0;
    if ((flags & 8) !== 0) {
      var protectedNamespace = this.namespaces.get_za3lpa$(readU30(s));
    }var $receiver = until(0, readU30(s));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.multinames.get_za3lpa$(readU30(s)));
    }
    var interfaces = destination;
    var instanceInitializerIndex = readU30(s);
    var traits = this.readTraits_39qel5$(s);
    return new ABC$InstanceInfo(name, base, interfaces, this.methodsDesc.get_za3lpa$(instanceInitializerIndex), traits);
  };
  ABC.prototype.getConstantValue_vux9f0$ = function (type, index) {
    switch (type) {
      case 3:
        return this.ints.get_za3lpa$(index);
      case 4:
        return this.uints.get_za3lpa$(index);
      case 6:
        return this.doubles.get_za3lpa$(index);
      case 1:
        return this.strings.get_za3lpa$(index);
      case 11:
        return true;
      case 10:
        return false;
      case 12:
      case 0:
        return null;
      case 8:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 5:
        return this.namespaces.get_za3lpa$(index);
      default:return invalidOp('Unknown parameter type.');
    }
  };
  function ABC$readTraits$lambda$handleTraitSlot(closure$s, closure$name, this$ABC) {
    return function () {
      var $receiver = this$ABC;
      var closure$s_0 = closure$s;
      var closure$name_0 = closure$name;
      var tmp$;
      var slotIndex = readU30(closure$s_0);
      var type = $receiver.multinames.get_za3lpa$(readU30(closure$s_0));
      var valueIndex = readU30(closure$s_0);
      if (valueIndex !== 0) {
        var valueKind = readU8(closure$s_0);
        tmp$ = $receiver.getConstantValue_vux9f0$(valueKind, valueIndex);
      } else {
        tmp$ = null;
      }
      var value = tmp$;
      return new ABC$TraitSlot(closure$name_0, slotIndex, type, value);
    };
  }
  function ABC$readTraits$lambda$handleTraitMethod(closure$s, closure$info, closure$name, this$ABC) {
    return function () {
      var closure$s_0 = closure$s;
      var closure$info_0 = closure$info;
      var closure$name_0 = closure$name;
      var dispIndex = readU30(closure$s_0);
      var methodIndex = readU30(closure$s_0);
      var isFinal = (closure$info_0 & 1) !== 0;
      var isOverride = (closure$info_0 & 2) !== 0;
      return new ABC$TraitMethod(closure$name_0, dispIndex, methodIndex);
    };
  }
  ABC.prototype.readTraits_39qel5$ = function (s) {
    var $receiver = until(0, readU30(s));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var name = this.multinames.get_za3lpa$(readU30(s));
      var kind = readU8(s);
      var info = kind >>> 4;
      var hasMetadata = (info & 4) !== 0;
      var traitKind = kind & 15;
      var handleTraitSlot = ABC$readTraits$lambda$handleTraitSlot(s, name, this);
      var handleTraitMethod = ABC$readTraits$lambda$handleTraitMethod(s, info, name, this);
      switch (traitKind) {
        case 0:
          tmp$_1 = handleTraitSlot();
          break;
        case 6:
          tmp$_1 = handleTraitSlot();
          break;
        case 1:
          tmp$_1 = handleTraitMethod();
          break;
        case 2:
          tmp$_1 = handleTraitMethod();
          break;
        case 3:
          tmp$_1 = handleTraitMethod();
          break;
        case 4:
          tmp$_1 = new ABC$TraitClass(name, readU30(s), readU30(s));
          break;
        case 5:
          tmp$_1 = new ABC$TraitFunction(name, readU30(s), readU30(s));
          break;
        default:tmp$_1 = invalidOp('Unknown trait kind ' + traitKind);
          break;
      }
      var trait = tmp$_1;
      if (hasMetadata) {
        var $receiver_0 = until(0, readU30(s));
        var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_2;
        tmp$_2 = $receiver_0.iterator();
        while (tmp$_2.hasNext()) {
          var item_0 = tmp$_2.next();
          destination_0.add_11rb$(this.metadatas.get_za3lpa$(readU30(s)));
        }
        var metadatas = destination_0;
      }tmp$_0.call(destination, trait);
    }
    return destination;
  };
  function ABC$MethodDesc(name) {
    this.name = name;
    this.body = null;
  }
  ABC$MethodDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MethodDesc',
    interfaces: []
  };
  ABC$MethodDesc.prototype.component1 = function () {
    return this.name;
  };
  ABC$MethodDesc.prototype.copy_61zpoe$ = function (name) {
    return new ABC$MethodDesc(name === void 0 ? this.name : name);
  };
  ABC$MethodDesc.prototype.toString = function () {
    return 'MethodDesc(name=' + Kotlin.toString(this.name) + ')';
  };
  ABC$MethodDesc.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$MethodDesc.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  ABC.prototype.readMethod_39qel5$ = function (s) {
    var parameterCount = readU30(s);
    var returnType = this.multinames.get_za3lpa$(readU30(s));
    var $receiver = until(0, parameterCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.multinames.get_za3lpa$(readU30(s)));
    }
    var parameters = destination;
    var name = this.strings.get_za3lpa$(readU30(s));
    var flags = readU8(s);
    var needsArguments = (flags & 1) !== 0;
    var needsActivation = (flags & 2) !== 0;
    var needsRest = (flags & 4) !== 0;
    var hasOptionalParameters = (flags & 8) !== 0;
    var setsDXNS = (flags & 64) !== 0;
    var hasParameterNames = (flags & 128) !== 0;
    if (hasOptionalParameters) {
      var optionalCount = readU8(s);
      var $receiver_0 = until(0, optionalCount);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        var tmp$_1 = destination_0.add_11rb$;
        var valueIndex = readU30(s);
        var optionalType = readU8(s);
        var value = this.getConstantValue_vux9f0$(optionalType, valueIndex);
        tmp$_1.call(destination_0, Unit);
      }
      var optionalValues = destination_0;
    }if (hasParameterNames) {
      var $receiver_1 = until(0, parameterCount);
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        destination_1.add_11rb$(this.strings.get_za3lpa$(readU30(s)));
      }
      var parameterNames = destination_1;
    }return new ABC$MethodDesc(name);
  };
  ABC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ABC',
    interfaces: []
  };
  function AMF0() {
    AMF0_instance = this;
  }
  AMF0.prototype.decode_39qel5$ = function (s) {
    return (new AMF0$Reader(s)).read();
  };
  function AMF0$Reader(i) {
    this.i = i;
  }
  AMF0$Reader.prototype.readObject = function () {
    var h = HashMap_init();
    while (true) {
      var len = readU16BE(this.i);
      var name = readString(this.i, len);
      var k = readU8(this.i);
      if (k === 9)
        break;
      var value = this.readWithCode_za3lpa$(k);
      h.put_xwzc9p$(name, value);
    }
    return h;
  };
  AMF0$Reader.prototype.readWithCode_za3lpa$ = function (id) {
    switch (id) {
      case 0:
        return readF64BE(this.i);
      case 1:
        switch (readU8(this.i)) {
          case 0:
            return false;
          case 1:
            return true;
          default:throw IllegalStateException_init('Invalid AMF'.toString());
        }

      case 2:
        return readStringz(this.i, readU16BE(this.i));
      case 3:
        return this.readObject();
      case 8:
        var size = readS32BE(this.i);
        throw new NotImplementedError_init();
      case 5:
        return null;
      case 6:
        return Undefined_getInstance();
      case 7:
        throw IllegalStateException_init('Not supported : Reference'.toString());
      case 10:
        var count = readS32BE(this.i);
        var $receiver = until(0, count);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(this.read());
        }

        return destination;
      case 11:
        var time_ms = readF64BE(this.i);
        var tz_min = readU16BE(this.i);
        return DateTime.Companion.invoke_s8cxhz$(Kotlin.Long.fromNumber(time_ms).add(Kotlin.Long.fromInt(tz_min * 60 | 0).multiply(L1000)));
      case 12:
        return readString(this.i, readS32BE(this.i));
      default:throw IllegalStateException_init(('Unknown AMF ' + id).toString());
    }
  };
  AMF0$Reader.prototype.read = function () {
    return this.readWithCode_za3lpa$(readU8(this.i));
  };
  AMF0$Reader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reader',
    interfaces: []
  };
  AMF0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AMF0',
    interfaces: []
  };
  var AMF0_instance = null;
  function AMF0_getInstance() {
    if (AMF0_instance === null) {
      new AMF0();
    }return AMF0_instance;
  }
  function AMF3() {
    AMF3_instance = this;
  }
  AMF3.prototype.read_39qel5$ = function (s) {
    var out = (new AMF3$Reader(s)).read();
    return out;
  };
  function AMF3$Reader(i) {
    this.i = i;
  }
  AMF3$Reader.prototype.readObject = function () {
    var tmp$;
    var len = this.readInt_za3lpa$();
    var dyn = (len >>> 3 & 1) === 1;
    len = len >>> 4;
    readU8(this.i);
    var h = HashMap_init();
    if (dyn) {
      while (true) {
        var s = this.readString();
        if (equals(s, ''))
          break;
        var value = this.read();
        h.put_xwzc9p$(s, value);
      }
    } else {
      var $receiver = until(0, len);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(this.readString());
      }
      var keys = destination;
      tmp$ = len;
      for (var n = 0; n < tmp$; n++) {
        var key = keys.get_za3lpa$(n);
        var value_0 = this.read();
        h.put_xwzc9p$(key, value_0);
      }
    }
    return h;
  };
  AMF3$Reader.prototype.readMap_za3lpa$ = function (len) {
    var h = HashMap_init();
    readU8(this.i);
    for (var i = 0; i < len; i++) {
      var key = this.read();
      var value = this.read();
      h.put_xwzc9p$(key, value);
    }
    return h;
  };
  AMF3$Reader.prototype.readArray_za3lpa$ = function (n) {
    var a = ArrayList_init_0();
    this.read();
    for (var i = 0; i < n; i++)
      a.add_11rb$(this.read());
    return a;
  };
  AMF3$Reader.prototype.readBytes_za3lpa$ = function (size) {
    return readBytes(this.i, size);
  };
  AMF3$Reader.prototype.readInt_za3lpa$ = function (preShift) {
    if (preShift === void 0)
      preShift = 0;
    var ret = 0;
    var c = readU8(this.i);
    if (c > 191)
      ret = 896;
    var n = 0;
    while ((n = n + 1 | 0, n) < 4 && c > 127) {
      ret = ret | c & 127;
      ret = ret << 7;
      c = readU8(this.i);
    }
    if (n > 3)
      ret = ret << 1;
    ret = ret | c;
    return ret >>> preShift;
  };
  AMF3$Reader.prototype.readString = function () {
    return readString(this.i, this.readInt_za3lpa$(1));
  };
  AMF3$Reader.prototype.readWithCode_za3lpa$ = function (id) {
    switch (id) {
      case 0:
        return Undefined_getInstance();
      case 1:
        return null;
      case 2:
        return false;
      case 3:
        return true;
      case 4:
        return this.readInt_za3lpa$();
      case 5:
        return readF64BE(this.i);
      case 6:
        return this.readString();
      case 7:
        throw Error_init('XMLDocument unsupported');
      case 8:
        readU8(this.i);
        return DateTime.Companion.invoke_s8cxhz$(Kotlin.Long.fromNumber(readF64BE(this.i)));
      case 9:
        return this.readArray_za3lpa$(this.readInt_za3lpa$(1));
      case 10:
        return this.readObject();
      case 11:
        return Xml(this.readString());
      case 12:
        return this.readBytes_za3lpa$(this.readInt_za3lpa$(1));
      case 13:
      case 14:
      case 15:
        return this.readArray_za3lpa$(this.readInt_za3lpa$(1));
      case 16:
        var len = this.readInt_za3lpa$(1);
        this.readString();
        return this.readArray_za3lpa$(len);
      case 17:
        return this.readMap_za3lpa$(this.readInt_za3lpa$(1));
      default:throw Error_init('Unknown AMF ' + toString(id));
    }
  };
  AMF3$Reader.prototype.read = function () {
    return this.readWithCode_za3lpa$(readU8(this.i));
  };
  AMF3$Reader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reader',
    interfaces: []
  };
  AMF3.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AMF3',
    interfaces: []
  };
  var AMF3_instance = null;
  function AMF3_getInstance() {
    if (AMF3_instance === null) {
      new AMF3();
    }return AMF3_instance;
  }
  function AbcConstantPool() {
    this.ints = emptyList();
    this.uints = emptyList();
    this.doubles = emptyList();
    this.strings = emptyList();
    this.namespaces = emptyList();
    this.namespaceSets = emptyList();
    this.multinames = emptyList();
  }
  AbcConstantPool.prototype.readConstantPool_39qel5$ = function (s) {
    var intCount = readU30(s);
    var tmp$ = listOf(0);
    var $receiver = until(1, intCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(readU30(s));
    }
    this.ints = plus(tmp$, destination);
    var uintCount = readU30(s);
    var tmp$_1 = listOf(0);
    var $receiver_0 = until(1, uintCount);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(readU30(s));
    }
    this.uints = plus(tmp$_1, destination_0);
    var doubleCount = readU30(s);
    var tmp$_3 = listOf(0.0);
    var $receiver_1 = until(1, doubleCount);
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_4;
    tmp$_4 = $receiver_1.iterator();
    while (tmp$_4.hasNext()) {
      var item_1 = tmp$_4.next();
      destination_1.add_11rb$(readF64LE(s));
    }
    this.doubles = plus(tmp$_3, destination_1);
    var stringCount = readU30(s);
    var tmp$_5 = listOf('');
    var $receiver_2 = until(1, stringCount);
    var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_6;
    tmp$_6 = $receiver_2.iterator();
    while (tmp$_6.hasNext()) {
      var item_2 = tmp$_6.next();
      destination_2.add_11rb$(readStringz(s, readU30(s)));
    }
    this.strings = plus(tmp$_5, destination_2);
    var tmp$_7 = listOf(ABC$Namespace$Companion_getInstance().EMPTY);
    var $receiver_3 = until(1, readU30(s));
    var destination_3 = ArrayList_init(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_8;
    tmp$_8 = $receiver_3.iterator();
    while (tmp$_8.hasNext()) {
      var item_3 = tmp$_8.next();
      var tmp$_9 = destination_3.add_11rb$;
      var kind = readU8(s);
      var name = this.strings.get_za3lpa$(readU30(s));
      tmp$_9.call(destination_3, new ABC$Namespace(kind, name));
    }
    this.namespaces = plus(tmp$_7, destination_3);
    var tmp$_10 = listOf(emptyList());
    var $receiver_4 = until(1, readU30(s));
    var destination_4 = ArrayList_init(collectionSizeOrDefault($receiver_4, 10));
    var tmp$_11;
    tmp$_11 = $receiver_4.iterator();
    while (tmp$_11.hasNext()) {
      var item_4 = tmp$_11.next();
      var tmp$_12 = destination_4.add_11rb$;
      var $receiver_5 = until(0, readU30(s));
      var destination_5 = ArrayList_init(collectionSizeOrDefault($receiver_5, 10));
      var tmp$_13;
      tmp$_13 = $receiver_5.iterator();
      while (tmp$_13.hasNext()) {
        var item_5 = tmp$_13.next();
        destination_5.add_11rb$(this.namespaces.get_za3lpa$(readU30(s)));
      }
      tmp$_12.call(destination_4, destination_5);
    }
    this.namespaceSets = plus(tmp$_10, destination_4);
    var tmp$_14 = listOf(ABC$EmptyMultiname_getInstance());
    var $receiver_6 = until(1, readU30(s));
    var destination_6 = ArrayList_init(collectionSizeOrDefault($receiver_6, 10));
    var tmp$_15;
    tmp$_15 = $receiver_6.iterator();
    loop_label: while (tmp$_15.hasNext()) {
      var item_6 = tmp$_15.next();
      var tmp$_16 = destination_6.add_11rb$;
      var transform$result;
      transform$break: do {
        var kind_0 = readU8(s);
        switch (kind_0) {
          case 7:
            transform$result = new ABC$ABCQName(this.namespaces.get_za3lpa$(readU30(s)), this.strings.get_za3lpa$(readU30(s)));
            break transform$break;
          case 13:
            transform$result = new ABC$QNameA(this.namespaces.get_za3lpa$(readU30(s)), this.strings.get_za3lpa$(readU30(s)));
            break transform$break;
          case 15:
            transform$result = new ABC$RTQName(this.strings.get_za3lpa$(readU30(s)));
            break transform$break;
          case 16:
            transform$result = new ABC$RTQNameA(this.strings.get_za3lpa$(readU30(s)));
            break transform$break;
          case 17:
            transform$result = ABC$RTQNameL_getInstance();
            break transform$break;
          case 18:
            transform$result = ABC$RTQNameLA_getInstance();
            break transform$break;
          case 9:
            transform$result = new ABC$Multiname(this.strings.get_za3lpa$(readU30(s)), this.namespaceSets.get_za3lpa$(readU30(s)));
            break transform$break;
          case 14:
            transform$result = new ABC$MultinameA(this.strings.get_za3lpa$(readU30(s)), this.namespaceSets.get_za3lpa$(readU30(s)));
            break transform$break;
          case 27:
            transform$result = new ABC$MultinameL(this.namespaceSets.get_za3lpa$(readU30(s)));
            break transform$break;
          case 28:
            transform$result = new ABC$MultinameLA(this.namespaceSets.get_za3lpa$(readU30(s)));
            break transform$break;
          case 29:
            var tmp$_17 = readU30(s);
            var $receiver_7 = until(0, readU30(s));
            var destination_7 = ArrayList_init(collectionSizeOrDefault($receiver_7, 10));
            var tmp$_18;
            tmp$_18 = $receiver_7.iterator();
            while (tmp$_18.hasNext()) {
              var item_7 = tmp$_18.next();
              destination_7.add_11rb$(readU30(s));
            }

            transform$result = new ABC$TypeName(tmp$_17, destination_7);
            break transform$break;
          default:transform$result = invalidOp('Unsupported ' + kind_0);
            break transform$break;
        }
      }
       while (false);
      tmp$_16.call(destination_6, transform$result);
    }
    this.multinames = plus(tmp$_14, destination_6);
  };
  AbcConstantPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcConstantPool',
    interfaces: []
  };
  function AbcOpcode(name, ordinal, id, type) {
    Enum.call(this);
    this.id = id;
    this.type = type;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AbcOpcode_initFields() {
    AbcOpcode_initFields = function () {
    };
    AbcOpcode$Breakpoint_instance = new AbcOpcode('Breakpoint', 0, 1, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Nop_instance = new AbcOpcode('Nop', 1, 2, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Throw_instance = new AbcOpcode('Throw', 2, 3, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetSuper_instance = new AbcOpcode('GetSuper', 3, 4, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$SetSuper_instance = new AbcOpcode('SetSuper', 4, 5, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$DefaultXmlNamespace_instance = new AbcOpcode('DefaultXmlNamespace', 5, 6, AbcOpcode$Kind$StringOperation_getInstance());
    AbcOpcode$DefaultXmlNamespaceL_instance = new AbcOpcode('DefaultXmlNamespaceL', 6, 7, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Kill_instance = new AbcOpcode('Kill', 7, 8, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$Label_instance = new AbcOpcode('Label', 8, 9, AbcOpcode$Kind$LabelOperation_getInstance());
    AbcOpcode$IfNotLessThan_instance = new AbcOpcode('IfNotLessThan', 9, 12, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotLessEqual_instance = new AbcOpcode('IfNotLessEqual', 10, 13, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotGreaterThan_instance = new AbcOpcode('IfNotGreaterThan', 11, 14, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotGreaterEqual_instance = new AbcOpcode('IfNotGreaterEqual', 12, 15, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$Jump_instance = new AbcOpcode('Jump', 13, 16, AbcOpcode$Kind$JumpOperation_getInstance());
    AbcOpcode$IfTrue_instance = new AbcOpcode('IfTrue', 14, 17, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfFalse_instance = new AbcOpcode('IfFalse', 15, 18, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfEqual_instance = new AbcOpcode('IfEqual', 16, 19, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotEqual_instance = new AbcOpcode('IfNotEqual', 17, 20, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfLessThan_instance = new AbcOpcode('IfLessThan', 18, 21, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfLessEqual_instance = new AbcOpcode('IfLessEqual', 19, 22, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfGreaterThan_instance = new AbcOpcode('IfGreaterThan', 20, 23, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfGreaterEqual_instance = new AbcOpcode('IfGreaterEqual', 21, 24, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfStrictEqual_instance = new AbcOpcode('IfStrictEqual', 22, 25, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfStrictNotEqual_instance = new AbcOpcode('IfStrictNotEqual', 23, 26, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$LookupSwitch_instance = new AbcOpcode('LookupSwitch', 24, 27, AbcOpcode$Kind$LookupSwitchOperation_getInstance());
    AbcOpcode$PushWith_instance = new AbcOpcode('PushWith', 25, 28, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PopScope_instance = new AbcOpcode('PopScope', 26, 29, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NextName_instance = new AbcOpcode('NextName', 27, 30, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$HasNext_instance = new AbcOpcode('HasNext', 28, 31, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushNull_instance = new AbcOpcode('PushNull', 29, 32, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushUndefined_instance = new AbcOpcode('PushUndefined', 30, 33, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NextValue_instance = new AbcOpcode('NextValue', 31, 35, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushByte_instance = new AbcOpcode('PushByte', 32, 36, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$PushShort_instance = new AbcOpcode('PushShort', 33, 37, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$PushTrue_instance = new AbcOpcode('PushTrue', 34, 38, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushFalse_instance = new AbcOpcode('PushFalse', 35, 39, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushNaN_instance = new AbcOpcode('PushNaN', 36, 40, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Pop_instance = new AbcOpcode('Pop', 37, 41, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Dup_instance = new AbcOpcode('Dup', 38, 42, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Swap_instance = new AbcOpcode('Swap', 39, 43, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushString_instance = new AbcOpcode('PushString', 40, 44, AbcOpcode$Kind$StringOperation_getInstance());
    AbcOpcode$PushInt_instance = new AbcOpcode('PushInt', 41, 45, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$PushUInt_instance = new AbcOpcode('PushUInt', 42, 46, AbcOpcode$Kind$UIntOperation_getInstance());
    AbcOpcode$PushDouble_instance = new AbcOpcode('PushDouble', 43, 47, AbcOpcode$Kind$NumberOperation_getInstance());
    AbcOpcode$PushScope_instance = new AbcOpcode('PushScope', 44, 48, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushNamespace_instance = new AbcOpcode('PushNamespace', 45, 49, AbcOpcode$Kind$NamespaceOperation_getInstance());
    AbcOpcode$HasNext2_instance = new AbcOpcode('HasNext2', 46, 50, AbcOpcode$Kind$IntIntOperation_getInstance());
    AbcOpcode$PushDecimal_instance = new AbcOpcode('PushDecimal', 47, 51, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushDNaN_instance = new AbcOpcode('PushDNaN', 48, 52, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NewFunction_instance = new AbcOpcode('NewFunction', 49, 64, AbcOpcode$Kind$NewFunctionOperation_getInstance());
    AbcOpcode$Call_instance = new AbcOpcode('Call', 50, 65, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$Construct_instance = new AbcOpcode('Construct', 51, 66, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$CallMethod_instance = new AbcOpcode('CallMethod', 52, 67, AbcOpcode$Kind$MethodOperation_getInstance());
    AbcOpcode$CallStatic_instance = new AbcOpcode('CallStatic', 53, 68, AbcOpcode$Kind$MethodOperation_getInstance());
    AbcOpcode$CallSuper_instance = new AbcOpcode('CallSuper', 54, 69, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallProperty_instance = new AbcOpcode('CallProperty', 55, 70, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$ReturnVoid_instance = new AbcOpcode('ReturnVoid', 56, 71, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ReturnValue_instance = new AbcOpcode('ReturnValue', 57, 72, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConstructSuper_instance = new AbcOpcode('ConstructSuper', 58, 73, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$ConstructProp_instance = new AbcOpcode('ConstructProp', 59, 74, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallSuperId_instance = new AbcOpcode('CallSuperId', 60, 75, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CallPropLex_instance = new AbcOpcode('CallPropLex', 61, 76, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallInterface_instance = new AbcOpcode('CallInterface', 62, 77, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CallSuperVoid_instance = new AbcOpcode('CallSuperVoid', 63, 78, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallPropVoid_instance = new AbcOpcode('CallPropVoid', 64, 79, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$ApplyType_instance = new AbcOpcode('ApplyType', 65, 83, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NewObject_instance = new AbcOpcode('NewObject', 66, 85, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NewArray_instance = new AbcOpcode('NewArray', 67, 86, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NewActivation_instance = new AbcOpcode('NewActivation', 68, 87, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NewClass_instance = new AbcOpcode('NewClass', 69, 88, AbcOpcode$Kind$NewClassOperation_getInstance());
    AbcOpcode$GetDescendants_instance = new AbcOpcode('GetDescendants', 70, 89, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$NewCatch_instance = new AbcOpcode('NewCatch', 71, 90, AbcOpcode$Kind$NewCatchOperation_getInstance());
    AbcOpcode$FindPropGlobalStrict_instance = new AbcOpcode('FindPropGlobalStrict', 72, 91, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindPropGlobal_instance = new AbcOpcode('FindPropGlobal', 73, 92, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindPropStrict_instance = new AbcOpcode('FindPropStrict', 74, 93, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindProperty_instance = new AbcOpcode('FindProperty', 75, 94, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindDef_instance = new AbcOpcode('FindDef', 76, 95, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$GetLex_instance = new AbcOpcode('GetLex', 77, 96, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$SetProperty_instance = new AbcOpcode('SetProperty', 78, 97, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$GetLocal_instance = new AbcOpcode('GetLocal', 79, 98, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$SetLocal_instance = new AbcOpcode('SetLocal', 80, 99, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$GetGlobalScope_instance = new AbcOpcode('GetGlobalScope', 81, 100, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetScopeObject_instance = new AbcOpcode('GetScopeObject', 82, 101, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$GetProperty_instance = new AbcOpcode('GetProperty', 83, 102, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$GetPropertyLate_instance = new AbcOpcode('GetPropertyLate', 84, 103, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$InitProperty_instance = new AbcOpcode('InitProperty', 85, 104, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$SetPropertyLate_instance = new AbcOpcode('SetPropertyLate', 86, 105, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$DeleteProperty_instance = new AbcOpcode('DeleteProperty', 87, 106, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$DeletePropertyLate_instance = new AbcOpcode('DeletePropertyLate', 88, 107, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetSlot_instance = new AbcOpcode('GetSlot', 89, 108, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$SetSlot_instance = new AbcOpcode('SetSlot', 90, 109, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$GetGlobalSlot_instance = new AbcOpcode('GetGlobalSlot', 91, 110, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$SetGlobalSlot_instance = new AbcOpcode('SetGlobalSlot', 92, 111, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$ConvertString_instance = new AbcOpcode('ConvertString', 93, 112, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$EscXmlElem_instance = new AbcOpcode('EscXmlElem', 94, 113, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$EscXmlAttr_instance = new AbcOpcode('EscXmlAttr', 95, 114, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertInt_instance = new AbcOpcode('ConvertInt', 96, 115, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertUInt_instance = new AbcOpcode('ConvertUInt', 97, 116, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertDouble_instance = new AbcOpcode('ConvertDouble', 98, 117, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertBoolean_instance = new AbcOpcode('ConvertBoolean', 99, 118, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertObject_instance = new AbcOpcode('ConvertObject', 100, 119, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CheckFilter_instance = new AbcOpcode('CheckFilter', 101, 120, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Coerce_instance = new AbcOpcode('Coerce', 102, 128, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$CoerceBoolean_instance = new AbcOpcode('CoerceBoolean', 103, 129, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceAny_instance = new AbcOpcode('CoerceAny', 104, 130, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceInt_instance = new AbcOpcode('CoerceInt', 105, 131, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceDouble_instance = new AbcOpcode('CoerceDouble', 106, 132, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceString_instance = new AbcOpcode('CoerceString', 107, 133, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$AsType_instance = new AbcOpcode('AsType', 108, 134, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$AsTypeLate_instance = new AbcOpcode('AsTypeLate', 109, 135, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceUInt_instance = new AbcOpcode('CoerceUInt', 110, 136, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceObject_instance = new AbcOpcode('CoerceObject', 111, 137, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Negate_instance = new AbcOpcode('Negate', 112, 144, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Increment_instance = new AbcOpcode('Increment', 113, 145, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IncLocal_instance = new AbcOpcode('IncLocal', 114, 146, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$Decrement_instance = new AbcOpcode('Decrement', 115, 147, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$DecLocal_instance = new AbcOpcode('DecLocal', 116, 148, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$TypeOf_instance = new AbcOpcode('TypeOf', 117, 149, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Not_instance = new AbcOpcode('Not', 118, 150, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitNot_instance = new AbcOpcode('BitNot', 119, 151, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Concat_instance = new AbcOpcode('Concat', 120, 154, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$AddDouble_instance = new AbcOpcode('AddDouble', 121, 155, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Add_instance = new AbcOpcode('Add', 122, 160, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Subtract_instance = new AbcOpcode('Subtract', 123, 161, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Multiply_instance = new AbcOpcode('Multiply', 124, 162, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Divide_instance = new AbcOpcode('Divide', 125, 163, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Modulo_instance = new AbcOpcode('Modulo', 126, 164, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ShiftLeft_instance = new AbcOpcode('ShiftLeft', 127, 165, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ShiftRight_instance = new AbcOpcode('ShiftRight', 128, 166, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ShiftRightUnsigned_instance = new AbcOpcode('ShiftRightUnsigned', 129, 167, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitAnd_instance = new AbcOpcode('BitAnd', 130, 168, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitOr_instance = new AbcOpcode('BitOr', 131, 169, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitXor_instance = new AbcOpcode('BitXor', 132, 170, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Equals_instance = new AbcOpcode('Equals', 133, 171, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$StrictEquals_instance = new AbcOpcode('StrictEquals', 134, 172, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$LessThan_instance = new AbcOpcode('LessThan', 135, 173, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$LessEquals_instance = new AbcOpcode('LessEquals', 136, 174, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GreaterThan_instance = new AbcOpcode('GreaterThan', 137, 175, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GreaterEquals_instance = new AbcOpcode('GreaterEquals', 138, 176, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$InstanceOf_instance = new AbcOpcode('InstanceOf', 139, 177, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IsType_instance = new AbcOpcode('IsType', 140, 178, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$IsTypeLate_instance = new AbcOpcode('IsTypeLate', 141, 179, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$In_instance = new AbcOpcode('In', 142, 180, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IncrementInt_instance = new AbcOpcode('IncrementInt', 143, 192, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$DecrementInt_instance = new AbcOpcode('DecrementInt', 144, 193, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IncLocalInt_instance = new AbcOpcode('IncLocalInt', 145, 194, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$DecLocalInt_instance = new AbcOpcode('DecLocalInt', 146, 195, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NegateInt_instance = new AbcOpcode('NegateInt', 147, 196, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$AddInt_instance = new AbcOpcode('AddInt', 148, 197, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SubtractInt_instance = new AbcOpcode('SubtractInt', 149, 198, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$MultiplyInt_instance = new AbcOpcode('MultiplyInt', 150, 199, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal0_instance = new AbcOpcode('GetLocal0', 151, 208, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal1_instance = new AbcOpcode('GetLocal1', 152, 209, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal2_instance = new AbcOpcode('GetLocal2', 153, 210, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal3_instance = new AbcOpcode('GetLocal3', 154, 211, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal0_instance = new AbcOpcode('SetLocal0', 155, 212, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal1_instance = new AbcOpcode('SetLocal1', 156, 213, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal2_instance = new AbcOpcode('SetLocal2', 157, 214, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal3_instance = new AbcOpcode('SetLocal3', 158, 215, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Debug_instance = new AbcOpcode('Debug', 159, 239, AbcOpcode$Kind$IntStringIntIntOperation_getInstance());
    AbcOpcode$DebugLine_instance = new AbcOpcode('DebugLine', 160, 240, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$DebugFile_instance = new AbcOpcode('DebugFile', 161, 241, AbcOpcode$Kind$StringOperation_getInstance());
    AbcOpcode$BreakpointLine_instance = new AbcOpcode('BreakpointLine', 162, 242, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetByte_instance = new AbcOpcode('SetByte', 163, 58, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetShort_instance = new AbcOpcode('SetShort', 164, 59, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetInt_instance = new AbcOpcode('SetInt', 165, 60, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetFloat_instance = new AbcOpcode('SetFloat', 166, 61, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetDouble_instance = new AbcOpcode('SetDouble', 167, 62, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetByte_instance = new AbcOpcode('GetByte', 168, 53, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetShort_instance = new AbcOpcode('GetShort', 169, 54, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetInt_instance = new AbcOpcode('GetInt', 170, 55, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetFloat_instance = new AbcOpcode('GetFloat', 171, 56, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetDouble_instance = new AbcOpcode('GetDouble', 172, 57, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Sign1_instance = new AbcOpcode('Sign1', 173, 80, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Sign8_instance = new AbcOpcode('Sign8', 174, 81, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Sign16_instance = new AbcOpcode('Sign16', 175, 82, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Companion_getInstance();
  }
  var AbcOpcode$Breakpoint_instance;
  function AbcOpcode$Breakpoint_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Breakpoint_instance;
  }
  var AbcOpcode$Nop_instance;
  function AbcOpcode$Nop_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Nop_instance;
  }
  var AbcOpcode$Throw_instance;
  function AbcOpcode$Throw_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Throw_instance;
  }
  var AbcOpcode$GetSuper_instance;
  function AbcOpcode$GetSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetSuper_instance;
  }
  var AbcOpcode$SetSuper_instance;
  function AbcOpcode$SetSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetSuper_instance;
  }
  var AbcOpcode$DefaultXmlNamespace_instance;
  function AbcOpcode$DefaultXmlNamespace_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DefaultXmlNamespace_instance;
  }
  var AbcOpcode$DefaultXmlNamespaceL_instance;
  function AbcOpcode$DefaultXmlNamespaceL_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DefaultXmlNamespaceL_instance;
  }
  var AbcOpcode$Kill_instance;
  function AbcOpcode$Kill_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Kill_instance;
  }
  var AbcOpcode$Label_instance;
  function AbcOpcode$Label_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Label_instance;
  }
  var AbcOpcode$IfNotLessThan_instance;
  function AbcOpcode$IfNotLessThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotLessThan_instance;
  }
  var AbcOpcode$IfNotLessEqual_instance;
  function AbcOpcode$IfNotLessEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotLessEqual_instance;
  }
  var AbcOpcode$IfNotGreaterThan_instance;
  function AbcOpcode$IfNotGreaterThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotGreaterThan_instance;
  }
  var AbcOpcode$IfNotGreaterEqual_instance;
  function AbcOpcode$IfNotGreaterEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotGreaterEqual_instance;
  }
  var AbcOpcode$Jump_instance;
  function AbcOpcode$Jump_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Jump_instance;
  }
  var AbcOpcode$IfTrue_instance;
  function AbcOpcode$IfTrue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfTrue_instance;
  }
  var AbcOpcode$IfFalse_instance;
  function AbcOpcode$IfFalse_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfFalse_instance;
  }
  var AbcOpcode$IfEqual_instance;
  function AbcOpcode$IfEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfEqual_instance;
  }
  var AbcOpcode$IfNotEqual_instance;
  function AbcOpcode$IfNotEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotEqual_instance;
  }
  var AbcOpcode$IfLessThan_instance;
  function AbcOpcode$IfLessThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfLessThan_instance;
  }
  var AbcOpcode$IfLessEqual_instance;
  function AbcOpcode$IfLessEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfLessEqual_instance;
  }
  var AbcOpcode$IfGreaterThan_instance;
  function AbcOpcode$IfGreaterThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfGreaterThan_instance;
  }
  var AbcOpcode$IfGreaterEqual_instance;
  function AbcOpcode$IfGreaterEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfGreaterEqual_instance;
  }
  var AbcOpcode$IfStrictEqual_instance;
  function AbcOpcode$IfStrictEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfStrictEqual_instance;
  }
  var AbcOpcode$IfStrictNotEqual_instance;
  function AbcOpcode$IfStrictNotEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfStrictNotEqual_instance;
  }
  var AbcOpcode$LookupSwitch_instance;
  function AbcOpcode$LookupSwitch_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$LookupSwitch_instance;
  }
  var AbcOpcode$PushWith_instance;
  function AbcOpcode$PushWith_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushWith_instance;
  }
  var AbcOpcode$PopScope_instance;
  function AbcOpcode$PopScope_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PopScope_instance;
  }
  var AbcOpcode$NextName_instance;
  function AbcOpcode$NextName_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NextName_instance;
  }
  var AbcOpcode$HasNext_instance;
  function AbcOpcode$HasNext_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$HasNext_instance;
  }
  var AbcOpcode$PushNull_instance;
  function AbcOpcode$PushNull_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushNull_instance;
  }
  var AbcOpcode$PushUndefined_instance;
  function AbcOpcode$PushUndefined_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushUndefined_instance;
  }
  var AbcOpcode$NextValue_instance;
  function AbcOpcode$NextValue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NextValue_instance;
  }
  var AbcOpcode$PushByte_instance;
  function AbcOpcode$PushByte_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushByte_instance;
  }
  var AbcOpcode$PushShort_instance;
  function AbcOpcode$PushShort_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushShort_instance;
  }
  var AbcOpcode$PushTrue_instance;
  function AbcOpcode$PushTrue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushTrue_instance;
  }
  var AbcOpcode$PushFalse_instance;
  function AbcOpcode$PushFalse_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushFalse_instance;
  }
  var AbcOpcode$PushNaN_instance;
  function AbcOpcode$PushNaN_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushNaN_instance;
  }
  var AbcOpcode$Pop_instance;
  function AbcOpcode$Pop_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Pop_instance;
  }
  var AbcOpcode$Dup_instance;
  function AbcOpcode$Dup_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Dup_instance;
  }
  var AbcOpcode$Swap_instance;
  function AbcOpcode$Swap_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Swap_instance;
  }
  var AbcOpcode$PushString_instance;
  function AbcOpcode$PushString_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushString_instance;
  }
  var AbcOpcode$PushInt_instance;
  function AbcOpcode$PushInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushInt_instance;
  }
  var AbcOpcode$PushUInt_instance;
  function AbcOpcode$PushUInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushUInt_instance;
  }
  var AbcOpcode$PushDouble_instance;
  function AbcOpcode$PushDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushDouble_instance;
  }
  var AbcOpcode$PushScope_instance;
  function AbcOpcode$PushScope_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushScope_instance;
  }
  var AbcOpcode$PushNamespace_instance;
  function AbcOpcode$PushNamespace_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushNamespace_instance;
  }
  var AbcOpcode$HasNext2_instance;
  function AbcOpcode$HasNext2_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$HasNext2_instance;
  }
  var AbcOpcode$PushDecimal_instance;
  function AbcOpcode$PushDecimal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushDecimal_instance;
  }
  var AbcOpcode$PushDNaN_instance;
  function AbcOpcode$PushDNaN_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushDNaN_instance;
  }
  var AbcOpcode$NewFunction_instance;
  function AbcOpcode$NewFunction_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewFunction_instance;
  }
  var AbcOpcode$Call_instance;
  function AbcOpcode$Call_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Call_instance;
  }
  var AbcOpcode$Construct_instance;
  function AbcOpcode$Construct_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Construct_instance;
  }
  var AbcOpcode$CallMethod_instance;
  function AbcOpcode$CallMethod_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallMethod_instance;
  }
  var AbcOpcode$CallStatic_instance;
  function AbcOpcode$CallStatic_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallStatic_instance;
  }
  var AbcOpcode$CallSuper_instance;
  function AbcOpcode$CallSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallSuper_instance;
  }
  var AbcOpcode$CallProperty_instance;
  function AbcOpcode$CallProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallProperty_instance;
  }
  var AbcOpcode$ReturnVoid_instance;
  function AbcOpcode$ReturnVoid_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ReturnVoid_instance;
  }
  var AbcOpcode$ReturnValue_instance;
  function AbcOpcode$ReturnValue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ReturnValue_instance;
  }
  var AbcOpcode$ConstructSuper_instance;
  function AbcOpcode$ConstructSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConstructSuper_instance;
  }
  var AbcOpcode$ConstructProp_instance;
  function AbcOpcode$ConstructProp_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConstructProp_instance;
  }
  var AbcOpcode$CallSuperId_instance;
  function AbcOpcode$CallSuperId_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallSuperId_instance;
  }
  var AbcOpcode$CallPropLex_instance;
  function AbcOpcode$CallPropLex_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallPropLex_instance;
  }
  var AbcOpcode$CallInterface_instance;
  function AbcOpcode$CallInterface_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallInterface_instance;
  }
  var AbcOpcode$CallSuperVoid_instance;
  function AbcOpcode$CallSuperVoid_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallSuperVoid_instance;
  }
  var AbcOpcode$CallPropVoid_instance;
  function AbcOpcode$CallPropVoid_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallPropVoid_instance;
  }
  var AbcOpcode$ApplyType_instance;
  function AbcOpcode$ApplyType_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ApplyType_instance;
  }
  var AbcOpcode$NewObject_instance;
  function AbcOpcode$NewObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewObject_instance;
  }
  var AbcOpcode$NewArray_instance;
  function AbcOpcode$NewArray_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewArray_instance;
  }
  var AbcOpcode$NewActivation_instance;
  function AbcOpcode$NewActivation_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewActivation_instance;
  }
  var AbcOpcode$NewClass_instance;
  function AbcOpcode$NewClass_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewClass_instance;
  }
  var AbcOpcode$GetDescendants_instance;
  function AbcOpcode$GetDescendants_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetDescendants_instance;
  }
  var AbcOpcode$NewCatch_instance;
  function AbcOpcode$NewCatch_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewCatch_instance;
  }
  var AbcOpcode$FindPropGlobalStrict_instance;
  function AbcOpcode$FindPropGlobalStrict_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindPropGlobalStrict_instance;
  }
  var AbcOpcode$FindPropGlobal_instance;
  function AbcOpcode$FindPropGlobal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindPropGlobal_instance;
  }
  var AbcOpcode$FindPropStrict_instance;
  function AbcOpcode$FindPropStrict_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindPropStrict_instance;
  }
  var AbcOpcode$FindProperty_instance;
  function AbcOpcode$FindProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindProperty_instance;
  }
  var AbcOpcode$FindDef_instance;
  function AbcOpcode$FindDef_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindDef_instance;
  }
  var AbcOpcode$GetLex_instance;
  function AbcOpcode$GetLex_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLex_instance;
  }
  var AbcOpcode$SetProperty_instance;
  function AbcOpcode$SetProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetProperty_instance;
  }
  var AbcOpcode$GetLocal_instance;
  function AbcOpcode$GetLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal_instance;
  }
  var AbcOpcode$SetLocal_instance;
  function AbcOpcode$SetLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal_instance;
  }
  var AbcOpcode$GetGlobalScope_instance;
  function AbcOpcode$GetGlobalScope_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetGlobalScope_instance;
  }
  var AbcOpcode$GetScopeObject_instance;
  function AbcOpcode$GetScopeObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetScopeObject_instance;
  }
  var AbcOpcode$GetProperty_instance;
  function AbcOpcode$GetProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetProperty_instance;
  }
  var AbcOpcode$GetPropertyLate_instance;
  function AbcOpcode$GetPropertyLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetPropertyLate_instance;
  }
  var AbcOpcode$InitProperty_instance;
  function AbcOpcode$InitProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$InitProperty_instance;
  }
  var AbcOpcode$SetPropertyLate_instance;
  function AbcOpcode$SetPropertyLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetPropertyLate_instance;
  }
  var AbcOpcode$DeleteProperty_instance;
  function AbcOpcode$DeleteProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DeleteProperty_instance;
  }
  var AbcOpcode$DeletePropertyLate_instance;
  function AbcOpcode$DeletePropertyLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DeletePropertyLate_instance;
  }
  var AbcOpcode$GetSlot_instance;
  function AbcOpcode$GetSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetSlot_instance;
  }
  var AbcOpcode$SetSlot_instance;
  function AbcOpcode$SetSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetSlot_instance;
  }
  var AbcOpcode$GetGlobalSlot_instance;
  function AbcOpcode$GetGlobalSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetGlobalSlot_instance;
  }
  var AbcOpcode$SetGlobalSlot_instance;
  function AbcOpcode$SetGlobalSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetGlobalSlot_instance;
  }
  var AbcOpcode$ConvertString_instance;
  function AbcOpcode$ConvertString_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertString_instance;
  }
  var AbcOpcode$EscXmlElem_instance;
  function AbcOpcode$EscXmlElem_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$EscXmlElem_instance;
  }
  var AbcOpcode$EscXmlAttr_instance;
  function AbcOpcode$EscXmlAttr_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$EscXmlAttr_instance;
  }
  var AbcOpcode$ConvertInt_instance;
  function AbcOpcode$ConvertInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertInt_instance;
  }
  var AbcOpcode$ConvertUInt_instance;
  function AbcOpcode$ConvertUInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertUInt_instance;
  }
  var AbcOpcode$ConvertDouble_instance;
  function AbcOpcode$ConvertDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertDouble_instance;
  }
  var AbcOpcode$ConvertBoolean_instance;
  function AbcOpcode$ConvertBoolean_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertBoolean_instance;
  }
  var AbcOpcode$ConvertObject_instance;
  function AbcOpcode$ConvertObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertObject_instance;
  }
  var AbcOpcode$CheckFilter_instance;
  function AbcOpcode$CheckFilter_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CheckFilter_instance;
  }
  var AbcOpcode$Coerce_instance;
  function AbcOpcode$Coerce_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Coerce_instance;
  }
  var AbcOpcode$CoerceBoolean_instance;
  function AbcOpcode$CoerceBoolean_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceBoolean_instance;
  }
  var AbcOpcode$CoerceAny_instance;
  function AbcOpcode$CoerceAny_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceAny_instance;
  }
  var AbcOpcode$CoerceInt_instance;
  function AbcOpcode$CoerceInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceInt_instance;
  }
  var AbcOpcode$CoerceDouble_instance;
  function AbcOpcode$CoerceDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceDouble_instance;
  }
  var AbcOpcode$CoerceString_instance;
  function AbcOpcode$CoerceString_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceString_instance;
  }
  var AbcOpcode$AsType_instance;
  function AbcOpcode$AsType_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AsType_instance;
  }
  var AbcOpcode$AsTypeLate_instance;
  function AbcOpcode$AsTypeLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AsTypeLate_instance;
  }
  var AbcOpcode$CoerceUInt_instance;
  function AbcOpcode$CoerceUInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceUInt_instance;
  }
  var AbcOpcode$CoerceObject_instance;
  function AbcOpcode$CoerceObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceObject_instance;
  }
  var AbcOpcode$Negate_instance;
  function AbcOpcode$Negate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Negate_instance;
  }
  var AbcOpcode$Increment_instance;
  function AbcOpcode$Increment_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Increment_instance;
  }
  var AbcOpcode$IncLocal_instance;
  function AbcOpcode$IncLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IncLocal_instance;
  }
  var AbcOpcode$Decrement_instance;
  function AbcOpcode$Decrement_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Decrement_instance;
  }
  var AbcOpcode$DecLocal_instance;
  function AbcOpcode$DecLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DecLocal_instance;
  }
  var AbcOpcode$TypeOf_instance;
  function AbcOpcode$TypeOf_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$TypeOf_instance;
  }
  var AbcOpcode$Not_instance;
  function AbcOpcode$Not_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Not_instance;
  }
  var AbcOpcode$BitNot_instance;
  function AbcOpcode$BitNot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitNot_instance;
  }
  var AbcOpcode$Concat_instance;
  function AbcOpcode$Concat_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Concat_instance;
  }
  var AbcOpcode$AddDouble_instance;
  function AbcOpcode$AddDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AddDouble_instance;
  }
  var AbcOpcode$Add_instance;
  function AbcOpcode$Add_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Add_instance;
  }
  var AbcOpcode$Subtract_instance;
  function AbcOpcode$Subtract_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Subtract_instance;
  }
  var AbcOpcode$Multiply_instance;
  function AbcOpcode$Multiply_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Multiply_instance;
  }
  var AbcOpcode$Divide_instance;
  function AbcOpcode$Divide_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Divide_instance;
  }
  var AbcOpcode$Modulo_instance;
  function AbcOpcode$Modulo_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Modulo_instance;
  }
  var AbcOpcode$ShiftLeft_instance;
  function AbcOpcode$ShiftLeft_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ShiftLeft_instance;
  }
  var AbcOpcode$ShiftRight_instance;
  function AbcOpcode$ShiftRight_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ShiftRight_instance;
  }
  var AbcOpcode$ShiftRightUnsigned_instance;
  function AbcOpcode$ShiftRightUnsigned_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ShiftRightUnsigned_instance;
  }
  var AbcOpcode$BitAnd_instance;
  function AbcOpcode$BitAnd_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitAnd_instance;
  }
  var AbcOpcode$BitOr_instance;
  function AbcOpcode$BitOr_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitOr_instance;
  }
  var AbcOpcode$BitXor_instance;
  function AbcOpcode$BitXor_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitXor_instance;
  }
  var AbcOpcode$Equals_instance;
  function AbcOpcode$Equals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Equals_instance;
  }
  var AbcOpcode$StrictEquals_instance;
  function AbcOpcode$StrictEquals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$StrictEquals_instance;
  }
  var AbcOpcode$LessThan_instance;
  function AbcOpcode$LessThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$LessThan_instance;
  }
  var AbcOpcode$LessEquals_instance;
  function AbcOpcode$LessEquals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$LessEquals_instance;
  }
  var AbcOpcode$GreaterThan_instance;
  function AbcOpcode$GreaterThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GreaterThan_instance;
  }
  var AbcOpcode$GreaterEquals_instance;
  function AbcOpcode$GreaterEquals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GreaterEquals_instance;
  }
  var AbcOpcode$InstanceOf_instance;
  function AbcOpcode$InstanceOf_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$InstanceOf_instance;
  }
  var AbcOpcode$IsType_instance;
  function AbcOpcode$IsType_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IsType_instance;
  }
  var AbcOpcode$IsTypeLate_instance;
  function AbcOpcode$IsTypeLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IsTypeLate_instance;
  }
  var AbcOpcode$In_instance;
  function AbcOpcode$In_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$In_instance;
  }
  var AbcOpcode$IncrementInt_instance;
  function AbcOpcode$IncrementInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IncrementInt_instance;
  }
  var AbcOpcode$DecrementInt_instance;
  function AbcOpcode$DecrementInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DecrementInt_instance;
  }
  var AbcOpcode$IncLocalInt_instance;
  function AbcOpcode$IncLocalInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IncLocalInt_instance;
  }
  var AbcOpcode$DecLocalInt_instance;
  function AbcOpcode$DecLocalInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DecLocalInt_instance;
  }
  var AbcOpcode$NegateInt_instance;
  function AbcOpcode$NegateInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NegateInt_instance;
  }
  var AbcOpcode$AddInt_instance;
  function AbcOpcode$AddInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AddInt_instance;
  }
  var AbcOpcode$SubtractInt_instance;
  function AbcOpcode$SubtractInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SubtractInt_instance;
  }
  var AbcOpcode$MultiplyInt_instance;
  function AbcOpcode$MultiplyInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$MultiplyInt_instance;
  }
  var AbcOpcode$GetLocal0_instance;
  function AbcOpcode$GetLocal0_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal0_instance;
  }
  var AbcOpcode$GetLocal1_instance;
  function AbcOpcode$GetLocal1_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal1_instance;
  }
  var AbcOpcode$GetLocal2_instance;
  function AbcOpcode$GetLocal2_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal2_instance;
  }
  var AbcOpcode$GetLocal3_instance;
  function AbcOpcode$GetLocal3_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal3_instance;
  }
  var AbcOpcode$SetLocal0_instance;
  function AbcOpcode$SetLocal0_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal0_instance;
  }
  var AbcOpcode$SetLocal1_instance;
  function AbcOpcode$SetLocal1_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal1_instance;
  }
  var AbcOpcode$SetLocal2_instance;
  function AbcOpcode$SetLocal2_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal2_instance;
  }
  var AbcOpcode$SetLocal3_instance;
  function AbcOpcode$SetLocal3_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal3_instance;
  }
  var AbcOpcode$Debug_instance;
  function AbcOpcode$Debug_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Debug_instance;
  }
  var AbcOpcode$DebugLine_instance;
  function AbcOpcode$DebugLine_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DebugLine_instance;
  }
  var AbcOpcode$DebugFile_instance;
  function AbcOpcode$DebugFile_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DebugFile_instance;
  }
  var AbcOpcode$BreakpointLine_instance;
  function AbcOpcode$BreakpointLine_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BreakpointLine_instance;
  }
  var AbcOpcode$SetByte_instance;
  function AbcOpcode$SetByte_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetByte_instance;
  }
  var AbcOpcode$SetShort_instance;
  function AbcOpcode$SetShort_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetShort_instance;
  }
  var AbcOpcode$SetInt_instance;
  function AbcOpcode$SetInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetInt_instance;
  }
  var AbcOpcode$SetFloat_instance;
  function AbcOpcode$SetFloat_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetFloat_instance;
  }
  var AbcOpcode$SetDouble_instance;
  function AbcOpcode$SetDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetDouble_instance;
  }
  var AbcOpcode$GetByte_instance;
  function AbcOpcode$GetByte_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetByte_instance;
  }
  var AbcOpcode$GetShort_instance;
  function AbcOpcode$GetShort_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetShort_instance;
  }
  var AbcOpcode$GetInt_instance;
  function AbcOpcode$GetInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetInt_instance;
  }
  var AbcOpcode$GetFloat_instance;
  function AbcOpcode$GetFloat_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetFloat_instance;
  }
  var AbcOpcode$GetDouble_instance;
  function AbcOpcode$GetDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetDouble_instance;
  }
  var AbcOpcode$Sign1_instance;
  function AbcOpcode$Sign1_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Sign1_instance;
  }
  var AbcOpcode$Sign8_instance;
  function AbcOpcode$Sign8_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Sign8_instance;
  }
  var AbcOpcode$Sign16_instance;
  function AbcOpcode$Sign16_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Sign16_instance;
  }
  function AbcOpcode$KindContext(op, cpool, s) {
    this.op = op;
    this.cpool = cpool;
    this.s = s;
  }
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'ints', {
    get: function () {
      return this.cpool.ints;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'uints', {
    get: function () {
      return this.cpool.uints;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'doubles', {
    get: function () {
      return this.cpool.doubles;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'strings', {
    get: function () {
      return this.cpool.strings;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'namespaces', {
    get: function () {
      return this.cpool.namespaces;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'namespaceSets', {
    get: function () {
      return this.cpool.namespaceSets;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'multinames', {
    get: function () {
      return this.cpool.multinames;
    }
  });
  AbcOpcode$KindContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KindContext',
    interfaces: []
  };
  function AbcOpcode$Kind(name, ordinal, read) {
    if (read === void 0)
      read = AbcOpcode$AbcOpcode$Kind_init$lambda;
    Enum.call(this);
    this.read = read;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AbcOpcode$Kind_initFields() {
    AbcOpcode$Kind_initFields = function () {
    };
    AbcOpcode$Kind$BasicOperation_instance = new AbcOpcode$Kind('BasicOperation', 0, AbcOpcode$Kind$AbcOpcode$Kind$BasicOperation_init$lambda);
    AbcOpcode$Kind$LabelOperation_instance = new AbcOpcode$Kind('LabelOperation', 1, AbcOpcode$Kind$AbcOpcode$Kind$LabelOperation_init$lambda);
    AbcOpcode$Kind$IntOperation_instance = new AbcOpcode$Kind('IntOperation', 2, AbcOpcode$Kind$AbcOpcode$Kind$IntOperation_init$lambda);
    AbcOpcode$Kind$UIntOperation_instance = new AbcOpcode$Kind('UIntOperation', 3, AbcOpcode$Kind$AbcOpcode$Kind$UIntOperation_init$lambda);
    AbcOpcode$Kind$NumberOperation_instance = new AbcOpcode$Kind('NumberOperation', 4, AbcOpcode$Kind$AbcOpcode$Kind$NumberOperation_init$lambda);
    AbcOpcode$Kind$IntIntOperation_instance = new AbcOpcode$Kind('IntIntOperation', 5, AbcOpcode$Kind$AbcOpcode$Kind$IntIntOperation_init$lambda);
    AbcOpcode$Kind$IntStringIntIntOperation_instance = new AbcOpcode$Kind('IntStringIntIntOperation', 6, AbcOpcode$Kind$AbcOpcode$Kind$IntStringIntIntOperation_init$lambda);
    AbcOpcode$Kind$StringOperation_instance = new AbcOpcode$Kind('StringOperation', 7, AbcOpcode$Kind$AbcOpcode$Kind$StringOperation_init$lambda);
    AbcOpcode$Kind$MultinameOperation_instance = new AbcOpcode$Kind('MultinameOperation', 8, AbcOpcode$Kind$AbcOpcode$Kind$MultinameOperation_init$lambda);
    AbcOpcode$Kind$MultinameIntOperation_instance = new AbcOpcode$Kind('MultinameIntOperation', 9, AbcOpcode$Kind$AbcOpcode$Kind$MultinameIntOperation_init$lambda);
    AbcOpcode$Kind$ConditionalJumpOperation_instance = new AbcOpcode$Kind('ConditionalJumpOperation', 10, AbcOpcode$Kind$AbcOpcode$Kind$ConditionalJumpOperation_init$lambda);
    AbcOpcode$Kind$JumpOperation_instance = new AbcOpcode$Kind('JumpOperation', 11, AbcOpcode$Kind$AbcOpcode$Kind$JumpOperation_init$lambda);
    AbcOpcode$Kind$NewClassOperation_instance = new AbcOpcode$Kind('NewClassOperation', 12, AbcOpcode$Kind$AbcOpcode$Kind$NewClassOperation_init$lambda);
    AbcOpcode$Kind$LookupSwitchOperation_instance = new AbcOpcode$Kind('LookupSwitchOperation', 13, AbcOpcode$Kind$AbcOpcode$Kind$LookupSwitchOperation_init$lambda);
    AbcOpcode$Kind$NamespaceOperation_instance = new AbcOpcode$Kind('NamespaceOperation', 14, AbcOpcode$Kind$AbcOpcode$Kind$NamespaceOperation_init$lambda);
    AbcOpcode$Kind$NewFunctionOperation_instance = new AbcOpcode$Kind('NewFunctionOperation', 15, AbcOpcode$Kind$AbcOpcode$Kind$NewFunctionOperation_init$lambda);
    AbcOpcode$Kind$MethodOperation_instance = new AbcOpcode$Kind('MethodOperation', 16, AbcOpcode$Kind$AbcOpcode$Kind$MethodOperation_init$lambda);
    AbcOpcode$Kind$NewCatchOperation_instance = new AbcOpcode$Kind('NewCatchOperation', 17, AbcOpcode$Kind$AbcOpcode$Kind$NewCatchOperation_init$lambda);
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$BasicOperation_init$lambda($receiver) {
    return new AbcBasicOperation($receiver.op);
  }
  var AbcOpcode$Kind$BasicOperation_instance;
  function AbcOpcode$Kind$BasicOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$BasicOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$LabelOperation_init$lambda($receiver) {
    return new AbcLabelOperation($receiver.op, $receiver.s.position);
  }
  var AbcOpcode$Kind$LabelOperation_instance;
  function AbcOpcode$Kind$LabelOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$LabelOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$IntOperation_init$lambda($receiver) {
    var tmp$, tmp$_0;
    tmp$ = $receiver.op;
    switch ($receiver.op.name) {
      case 'GetScopeObject':
        tmp$_0 = readU8($receiver.s);
        break;
      case 'PushByte':
        tmp$_0 = readS8($receiver.s);
        break;
      case 'PushShort':
        tmp$_0 = readU30($receiver.s) << 2 >> 2;
        break;
      default:tmp$_0 = readU30($receiver.s);
        break;
    }
    return new AbcIntOperation(tmp$, tmp$_0);
  }
  var AbcOpcode$Kind$IntOperation_instance;
  function AbcOpcode$Kind$IntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$IntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$UIntOperation_init$lambda($receiver) {
    return new AbcIntOperation($receiver.op, $receiver.uints.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$UIntOperation_instance;
  function AbcOpcode$Kind$UIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$UIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NumberOperation_init$lambda($receiver) {
    return new AbcDoubleOperation($receiver.op, $receiver.doubles.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$NumberOperation_instance;
  function AbcOpcode$Kind$NumberOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NumberOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$IntIntOperation_init$lambda($receiver) {
    if ($receiver.op === AbcOpcode$HasNext2_getInstance()) {
      return new AbcIntIntOperation($receiver.op, readS32LE($receiver.s), readS32LE($receiver.s));
    } else {
      return new AbcIntIntOperation($receiver.op, readU30($receiver.s), readU30($receiver.s));
    }
  }
  var AbcOpcode$Kind$IntIntOperation_instance;
  function AbcOpcode$Kind$IntIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$IntIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$IntStringIntIntOperation_init$lambda($receiver) {
    return new AbcIntStringIntIntOperation($receiver.op, readU8($receiver.s), $receiver.strings.get_za3lpa$(readU30($receiver.s)), readU8($receiver.s), readU30($receiver.s));
  }
  var AbcOpcode$Kind$IntStringIntIntOperation_instance;
  function AbcOpcode$Kind$IntStringIntIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$IntStringIntIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$StringOperation_init$lambda($receiver) {
    return new AbcStringOperation($receiver.op, $receiver.strings.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$StringOperation_instance;
  function AbcOpcode$Kind$StringOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$StringOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$MultinameOperation_init$lambda($receiver) {
    return new AbcMultinameOperation($receiver.op, $receiver.multinames.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$MultinameOperation_instance;
  function AbcOpcode$Kind$MultinameOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$MultinameOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$MultinameIntOperation_init$lambda($receiver) {
    return new AbcMultinameIntOperation($receiver.op, $receiver.multinames.get_za3lpa$(readU30($receiver.s)), readU30($receiver.s));
  }
  var AbcOpcode$Kind$MultinameIntOperation_instance;
  function AbcOpcode$Kind$MultinameIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$MultinameIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$ConditionalJumpOperation_init$lambda($receiver) {
    return new AbcJumpOperation($receiver.op, $receiver.s.position.add(Kotlin.Long.fromInt(4)).add(Kotlin.Long.fromInt(readS24LE($receiver.s))));
  }
  var AbcOpcode$Kind$ConditionalJumpOperation_instance;
  function AbcOpcode$Kind$ConditionalJumpOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$ConditionalJumpOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$JumpOperation_init$lambda($receiver) {
    return new AbcJumpOperation($receiver.op, $receiver.s.position.add(Kotlin.Long.fromInt(4)).add(Kotlin.Long.fromInt(readS24LE($receiver.s))));
  }
  var AbcOpcode$Kind$JumpOperation_instance;
  function AbcOpcode$Kind$JumpOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$JumpOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NewClassOperation_init$lambda($receiver) {
    return new AbcNewClassOperation($receiver.op, readU30($receiver.s));
  }
  var AbcOpcode$Kind$NewClassOperation_instance;
  function AbcOpcode$Kind$NewClassOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NewClassOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$LookupSwitchOperation_init$lambda($receiver) {
    var defaultMarker = $receiver.s.position.add(Kotlin.Long.fromInt(readS24LE($receiver.s)));
    var $receiver_0 = until(0, readU30($receiver.s) + 1 | 0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$($receiver.s.position.add(Kotlin.Long.fromInt(readS24LE($receiver.s))));
    }
    var markers = toLongArray(destination);
    return new AbcLookupSwitchOperation($receiver.op, defaultMarker, markers);
  }
  var AbcOpcode$Kind$LookupSwitchOperation_instance;
  function AbcOpcode$Kind$LookupSwitchOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$LookupSwitchOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NamespaceOperation_init$lambda($receiver) {
    return new AbcNamespaceOperation($receiver.op, $receiver.namespaces.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$NamespaceOperation_instance;
  function AbcOpcode$Kind$NamespaceOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NamespaceOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NewFunctionOperation_init$lambda($receiver) {
    return new AbcIntOperation($receiver.op, readU30($receiver.s));
  }
  var AbcOpcode$Kind$NewFunctionOperation_instance;
  function AbcOpcode$Kind$NewFunctionOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NewFunctionOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$MethodOperation_init$lambda($receiver) {
    return new AbcIntIntOperation($receiver.op, readU30($receiver.s), readU30($receiver.s));
  }
  var AbcOpcode$Kind$MethodOperation_instance;
  function AbcOpcode$Kind$MethodOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$MethodOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NewCatchOperation_init$lambda($receiver) {
    return new AbcIntOperation($receiver.op, readU30($receiver.s));
  }
  var AbcOpcode$Kind$NewCatchOperation_instance;
  function AbcOpcode$Kind$NewCatchOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NewCatchOperation_instance;
  }
  function AbcOpcode$AbcOpcode$Kind_init$lambda($receiver) {
    return new AbcBasicOperation($receiver.op);
  }
  AbcOpcode$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function AbcOpcode$Kind$values() {
    return [AbcOpcode$Kind$BasicOperation_getInstance(), AbcOpcode$Kind$LabelOperation_getInstance(), AbcOpcode$Kind$IntOperation_getInstance(), AbcOpcode$Kind$UIntOperation_getInstance(), AbcOpcode$Kind$NumberOperation_getInstance(), AbcOpcode$Kind$IntIntOperation_getInstance(), AbcOpcode$Kind$IntStringIntIntOperation_getInstance(), AbcOpcode$Kind$StringOperation_getInstance(), AbcOpcode$Kind$MultinameOperation_getInstance(), AbcOpcode$Kind$MultinameIntOperation_getInstance(), AbcOpcode$Kind$ConditionalJumpOperation_getInstance(), AbcOpcode$Kind$JumpOperation_getInstance(), AbcOpcode$Kind$NewClassOperation_getInstance(), AbcOpcode$Kind$LookupSwitchOperation_getInstance(), AbcOpcode$Kind$NamespaceOperation_getInstance(), AbcOpcode$Kind$NewFunctionOperation_getInstance(), AbcOpcode$Kind$MethodOperation_getInstance(), AbcOpcode$Kind$NewCatchOperation_getInstance()];
  }
  AbcOpcode$Kind.values = AbcOpcode$Kind$values;
  function AbcOpcode$Kind$valueOf(name) {
    switch (name) {
      case 'BasicOperation':
        return AbcOpcode$Kind$BasicOperation_getInstance();
      case 'LabelOperation':
        return AbcOpcode$Kind$LabelOperation_getInstance();
      case 'IntOperation':
        return AbcOpcode$Kind$IntOperation_getInstance();
      case 'UIntOperation':
        return AbcOpcode$Kind$UIntOperation_getInstance();
      case 'NumberOperation':
        return AbcOpcode$Kind$NumberOperation_getInstance();
      case 'IntIntOperation':
        return AbcOpcode$Kind$IntIntOperation_getInstance();
      case 'IntStringIntIntOperation':
        return AbcOpcode$Kind$IntStringIntIntOperation_getInstance();
      case 'StringOperation':
        return AbcOpcode$Kind$StringOperation_getInstance();
      case 'MultinameOperation':
        return AbcOpcode$Kind$MultinameOperation_getInstance();
      case 'MultinameIntOperation':
        return AbcOpcode$Kind$MultinameIntOperation_getInstance();
      case 'ConditionalJumpOperation':
        return AbcOpcode$Kind$ConditionalJumpOperation_getInstance();
      case 'JumpOperation':
        return AbcOpcode$Kind$JumpOperation_getInstance();
      case 'NewClassOperation':
        return AbcOpcode$Kind$NewClassOperation_getInstance();
      case 'LookupSwitchOperation':
        return AbcOpcode$Kind$LookupSwitchOperation_getInstance();
      case 'NamespaceOperation':
        return AbcOpcode$Kind$NamespaceOperation_getInstance();
      case 'NewFunctionOperation':
        return AbcOpcode$Kind$NewFunctionOperation_getInstance();
      case 'MethodOperation':
        return AbcOpcode$Kind$MethodOperation_getInstance();
      case 'NewCatchOperation':
        return AbcOpcode$Kind$NewCatchOperation_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.AbcOpcode.Kind.' + name);
    }
  }
  AbcOpcode$Kind.valueOf_61zpoe$ = AbcOpcode$Kind$valueOf;
  function AbcOpcode$Companion() {
    AbcOpcode$Companion_instance = this;
    var $receiver = AbcOpcode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  AbcOpcode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbcOpcode$Companion_instance = null;
  function AbcOpcode$Companion_getInstance() {
    AbcOpcode_initFields();
    if (AbcOpcode$Companion_instance === null) {
      new AbcOpcode$Companion();
    }return AbcOpcode$Companion_instance;
  }
  AbcOpcode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcOpcode',
    interfaces: [Enum]
  };
  function AbcOpcode$values() {
    return [AbcOpcode$Breakpoint_getInstance(), AbcOpcode$Nop_getInstance(), AbcOpcode$Throw_getInstance(), AbcOpcode$GetSuper_getInstance(), AbcOpcode$SetSuper_getInstance(), AbcOpcode$DefaultXmlNamespace_getInstance(), AbcOpcode$DefaultXmlNamespaceL_getInstance(), AbcOpcode$Kill_getInstance(), AbcOpcode$Label_getInstance(), AbcOpcode$IfNotLessThan_getInstance(), AbcOpcode$IfNotLessEqual_getInstance(), AbcOpcode$IfNotGreaterThan_getInstance(), AbcOpcode$IfNotGreaterEqual_getInstance(), AbcOpcode$Jump_getInstance(), AbcOpcode$IfTrue_getInstance(), AbcOpcode$IfFalse_getInstance(), AbcOpcode$IfEqual_getInstance(), AbcOpcode$IfNotEqual_getInstance(), AbcOpcode$IfLessThan_getInstance(), AbcOpcode$IfLessEqual_getInstance(), AbcOpcode$IfGreaterThan_getInstance(), AbcOpcode$IfGreaterEqual_getInstance(), AbcOpcode$IfStrictEqual_getInstance(), AbcOpcode$IfStrictNotEqual_getInstance(), AbcOpcode$LookupSwitch_getInstance(), AbcOpcode$PushWith_getInstance(), AbcOpcode$PopScope_getInstance(), AbcOpcode$NextName_getInstance(), AbcOpcode$HasNext_getInstance(), AbcOpcode$PushNull_getInstance(), AbcOpcode$PushUndefined_getInstance(), AbcOpcode$NextValue_getInstance(), AbcOpcode$PushByte_getInstance(), AbcOpcode$PushShort_getInstance(), AbcOpcode$PushTrue_getInstance(), AbcOpcode$PushFalse_getInstance(), AbcOpcode$PushNaN_getInstance(), AbcOpcode$Pop_getInstance(), AbcOpcode$Dup_getInstance(), AbcOpcode$Swap_getInstance(), AbcOpcode$PushString_getInstance(), AbcOpcode$PushInt_getInstance(), AbcOpcode$PushUInt_getInstance(), AbcOpcode$PushDouble_getInstance(), AbcOpcode$PushScope_getInstance(), AbcOpcode$PushNamespace_getInstance(), AbcOpcode$HasNext2_getInstance(), AbcOpcode$PushDecimal_getInstance(), AbcOpcode$PushDNaN_getInstance(), AbcOpcode$NewFunction_getInstance(), AbcOpcode$Call_getInstance(), AbcOpcode$Construct_getInstance(), AbcOpcode$CallMethod_getInstance(), AbcOpcode$CallStatic_getInstance(), AbcOpcode$CallSuper_getInstance(), AbcOpcode$CallProperty_getInstance(), AbcOpcode$ReturnVoid_getInstance(), AbcOpcode$ReturnValue_getInstance(), AbcOpcode$ConstructSuper_getInstance(), AbcOpcode$ConstructProp_getInstance(), AbcOpcode$CallSuperId_getInstance(), AbcOpcode$CallPropLex_getInstance(), AbcOpcode$CallInterface_getInstance(), AbcOpcode$CallSuperVoid_getInstance(), AbcOpcode$CallPropVoid_getInstance(), AbcOpcode$ApplyType_getInstance(), AbcOpcode$NewObject_getInstance(), AbcOpcode$NewArray_getInstance(), AbcOpcode$NewActivation_getInstance(), AbcOpcode$NewClass_getInstance(), AbcOpcode$GetDescendants_getInstance(), AbcOpcode$NewCatch_getInstance(), AbcOpcode$FindPropGlobalStrict_getInstance(), AbcOpcode$FindPropGlobal_getInstance(), AbcOpcode$FindPropStrict_getInstance(), AbcOpcode$FindProperty_getInstance(), AbcOpcode$FindDef_getInstance(), AbcOpcode$GetLex_getInstance(), AbcOpcode$SetProperty_getInstance(), AbcOpcode$GetLocal_getInstance(), AbcOpcode$SetLocal_getInstance(), AbcOpcode$GetGlobalScope_getInstance(), AbcOpcode$GetScopeObject_getInstance(), AbcOpcode$GetProperty_getInstance(), AbcOpcode$GetPropertyLate_getInstance(), AbcOpcode$InitProperty_getInstance(), AbcOpcode$SetPropertyLate_getInstance(), AbcOpcode$DeleteProperty_getInstance(), AbcOpcode$DeletePropertyLate_getInstance(), AbcOpcode$GetSlot_getInstance(), AbcOpcode$SetSlot_getInstance(), AbcOpcode$GetGlobalSlot_getInstance(), AbcOpcode$SetGlobalSlot_getInstance(), AbcOpcode$ConvertString_getInstance(), AbcOpcode$EscXmlElem_getInstance(), AbcOpcode$EscXmlAttr_getInstance(), AbcOpcode$ConvertInt_getInstance(), AbcOpcode$ConvertUInt_getInstance(), AbcOpcode$ConvertDouble_getInstance(), AbcOpcode$ConvertBoolean_getInstance(), AbcOpcode$ConvertObject_getInstance(), AbcOpcode$CheckFilter_getInstance(), AbcOpcode$Coerce_getInstance(), AbcOpcode$CoerceBoolean_getInstance(), AbcOpcode$CoerceAny_getInstance(), AbcOpcode$CoerceInt_getInstance(), AbcOpcode$CoerceDouble_getInstance(), AbcOpcode$CoerceString_getInstance(), AbcOpcode$AsType_getInstance(), AbcOpcode$AsTypeLate_getInstance(), AbcOpcode$CoerceUInt_getInstance(), AbcOpcode$CoerceObject_getInstance(), AbcOpcode$Negate_getInstance(), AbcOpcode$Increment_getInstance(), AbcOpcode$IncLocal_getInstance(), AbcOpcode$Decrement_getInstance(), AbcOpcode$DecLocal_getInstance(), AbcOpcode$TypeOf_getInstance(), AbcOpcode$Not_getInstance(), AbcOpcode$BitNot_getInstance(), AbcOpcode$Concat_getInstance(), AbcOpcode$AddDouble_getInstance(), AbcOpcode$Add_getInstance(), AbcOpcode$Subtract_getInstance(), AbcOpcode$Multiply_getInstance(), AbcOpcode$Divide_getInstance(), AbcOpcode$Modulo_getInstance(), AbcOpcode$ShiftLeft_getInstance(), AbcOpcode$ShiftRight_getInstance(), AbcOpcode$ShiftRightUnsigned_getInstance(), AbcOpcode$BitAnd_getInstance(), AbcOpcode$BitOr_getInstance(), AbcOpcode$BitXor_getInstance(), AbcOpcode$Equals_getInstance(), AbcOpcode$StrictEquals_getInstance(), AbcOpcode$LessThan_getInstance(), AbcOpcode$LessEquals_getInstance(), AbcOpcode$GreaterThan_getInstance(), AbcOpcode$GreaterEquals_getInstance(), AbcOpcode$InstanceOf_getInstance(), AbcOpcode$IsType_getInstance(), AbcOpcode$IsTypeLate_getInstance(), AbcOpcode$In_getInstance(), AbcOpcode$IncrementInt_getInstance(), AbcOpcode$DecrementInt_getInstance(), AbcOpcode$IncLocalInt_getInstance(), AbcOpcode$DecLocalInt_getInstance(), AbcOpcode$NegateInt_getInstance(), AbcOpcode$AddInt_getInstance(), AbcOpcode$SubtractInt_getInstance(), AbcOpcode$MultiplyInt_getInstance(), AbcOpcode$GetLocal0_getInstance(), AbcOpcode$GetLocal1_getInstance(), AbcOpcode$GetLocal2_getInstance(), AbcOpcode$GetLocal3_getInstance(), AbcOpcode$SetLocal0_getInstance(), AbcOpcode$SetLocal1_getInstance(), AbcOpcode$SetLocal2_getInstance(), AbcOpcode$SetLocal3_getInstance(), AbcOpcode$Debug_getInstance(), AbcOpcode$DebugLine_getInstance(), AbcOpcode$DebugFile_getInstance(), AbcOpcode$BreakpointLine_getInstance(), AbcOpcode$SetByte_getInstance(), AbcOpcode$SetShort_getInstance(), AbcOpcode$SetInt_getInstance(), AbcOpcode$SetFloat_getInstance(), AbcOpcode$SetDouble_getInstance(), AbcOpcode$GetByte_getInstance(), AbcOpcode$GetShort_getInstance(), AbcOpcode$GetInt_getInstance(), AbcOpcode$GetFloat_getInstance(), AbcOpcode$GetDouble_getInstance(), AbcOpcode$Sign1_getInstance(), AbcOpcode$Sign8_getInstance(), AbcOpcode$Sign16_getInstance()];
  }
  AbcOpcode.values = AbcOpcode$values;
  function AbcOpcode$valueOf(name) {
    switch (name) {
      case 'Breakpoint':
        return AbcOpcode$Breakpoint_getInstance();
      case 'Nop':
        return AbcOpcode$Nop_getInstance();
      case 'Throw':
        return AbcOpcode$Throw_getInstance();
      case 'GetSuper':
        return AbcOpcode$GetSuper_getInstance();
      case 'SetSuper':
        return AbcOpcode$SetSuper_getInstance();
      case 'DefaultXmlNamespace':
        return AbcOpcode$DefaultXmlNamespace_getInstance();
      case 'DefaultXmlNamespaceL':
        return AbcOpcode$DefaultXmlNamespaceL_getInstance();
      case 'Kill':
        return AbcOpcode$Kill_getInstance();
      case 'Label':
        return AbcOpcode$Label_getInstance();
      case 'IfNotLessThan':
        return AbcOpcode$IfNotLessThan_getInstance();
      case 'IfNotLessEqual':
        return AbcOpcode$IfNotLessEqual_getInstance();
      case 'IfNotGreaterThan':
        return AbcOpcode$IfNotGreaterThan_getInstance();
      case 'IfNotGreaterEqual':
        return AbcOpcode$IfNotGreaterEqual_getInstance();
      case 'Jump':
        return AbcOpcode$Jump_getInstance();
      case 'IfTrue':
        return AbcOpcode$IfTrue_getInstance();
      case 'IfFalse':
        return AbcOpcode$IfFalse_getInstance();
      case 'IfEqual':
        return AbcOpcode$IfEqual_getInstance();
      case 'IfNotEqual':
        return AbcOpcode$IfNotEqual_getInstance();
      case 'IfLessThan':
        return AbcOpcode$IfLessThan_getInstance();
      case 'IfLessEqual':
        return AbcOpcode$IfLessEqual_getInstance();
      case 'IfGreaterThan':
        return AbcOpcode$IfGreaterThan_getInstance();
      case 'IfGreaterEqual':
        return AbcOpcode$IfGreaterEqual_getInstance();
      case 'IfStrictEqual':
        return AbcOpcode$IfStrictEqual_getInstance();
      case 'IfStrictNotEqual':
        return AbcOpcode$IfStrictNotEqual_getInstance();
      case 'LookupSwitch':
        return AbcOpcode$LookupSwitch_getInstance();
      case 'PushWith':
        return AbcOpcode$PushWith_getInstance();
      case 'PopScope':
        return AbcOpcode$PopScope_getInstance();
      case 'NextName':
        return AbcOpcode$NextName_getInstance();
      case 'HasNext':
        return AbcOpcode$HasNext_getInstance();
      case 'PushNull':
        return AbcOpcode$PushNull_getInstance();
      case 'PushUndefined':
        return AbcOpcode$PushUndefined_getInstance();
      case 'NextValue':
        return AbcOpcode$NextValue_getInstance();
      case 'PushByte':
        return AbcOpcode$PushByte_getInstance();
      case 'PushShort':
        return AbcOpcode$PushShort_getInstance();
      case 'PushTrue':
        return AbcOpcode$PushTrue_getInstance();
      case 'PushFalse':
        return AbcOpcode$PushFalse_getInstance();
      case 'PushNaN':
        return AbcOpcode$PushNaN_getInstance();
      case 'Pop':
        return AbcOpcode$Pop_getInstance();
      case 'Dup':
        return AbcOpcode$Dup_getInstance();
      case 'Swap':
        return AbcOpcode$Swap_getInstance();
      case 'PushString':
        return AbcOpcode$PushString_getInstance();
      case 'PushInt':
        return AbcOpcode$PushInt_getInstance();
      case 'PushUInt':
        return AbcOpcode$PushUInt_getInstance();
      case 'PushDouble':
        return AbcOpcode$PushDouble_getInstance();
      case 'PushScope':
        return AbcOpcode$PushScope_getInstance();
      case 'PushNamespace':
        return AbcOpcode$PushNamespace_getInstance();
      case 'HasNext2':
        return AbcOpcode$HasNext2_getInstance();
      case 'PushDecimal':
        return AbcOpcode$PushDecimal_getInstance();
      case 'PushDNaN':
        return AbcOpcode$PushDNaN_getInstance();
      case 'NewFunction':
        return AbcOpcode$NewFunction_getInstance();
      case 'Call':
        return AbcOpcode$Call_getInstance();
      case 'Construct':
        return AbcOpcode$Construct_getInstance();
      case 'CallMethod':
        return AbcOpcode$CallMethod_getInstance();
      case 'CallStatic':
        return AbcOpcode$CallStatic_getInstance();
      case 'CallSuper':
        return AbcOpcode$CallSuper_getInstance();
      case 'CallProperty':
        return AbcOpcode$CallProperty_getInstance();
      case 'ReturnVoid':
        return AbcOpcode$ReturnVoid_getInstance();
      case 'ReturnValue':
        return AbcOpcode$ReturnValue_getInstance();
      case 'ConstructSuper':
        return AbcOpcode$ConstructSuper_getInstance();
      case 'ConstructProp':
        return AbcOpcode$ConstructProp_getInstance();
      case 'CallSuperId':
        return AbcOpcode$CallSuperId_getInstance();
      case 'CallPropLex':
        return AbcOpcode$CallPropLex_getInstance();
      case 'CallInterface':
        return AbcOpcode$CallInterface_getInstance();
      case 'CallSuperVoid':
        return AbcOpcode$CallSuperVoid_getInstance();
      case 'CallPropVoid':
        return AbcOpcode$CallPropVoid_getInstance();
      case 'ApplyType':
        return AbcOpcode$ApplyType_getInstance();
      case 'NewObject':
        return AbcOpcode$NewObject_getInstance();
      case 'NewArray':
        return AbcOpcode$NewArray_getInstance();
      case 'NewActivation':
        return AbcOpcode$NewActivation_getInstance();
      case 'NewClass':
        return AbcOpcode$NewClass_getInstance();
      case 'GetDescendants':
        return AbcOpcode$GetDescendants_getInstance();
      case 'NewCatch':
        return AbcOpcode$NewCatch_getInstance();
      case 'FindPropGlobalStrict':
        return AbcOpcode$FindPropGlobalStrict_getInstance();
      case 'FindPropGlobal':
        return AbcOpcode$FindPropGlobal_getInstance();
      case 'FindPropStrict':
        return AbcOpcode$FindPropStrict_getInstance();
      case 'FindProperty':
        return AbcOpcode$FindProperty_getInstance();
      case 'FindDef':
        return AbcOpcode$FindDef_getInstance();
      case 'GetLex':
        return AbcOpcode$GetLex_getInstance();
      case 'SetProperty':
        return AbcOpcode$SetProperty_getInstance();
      case 'GetLocal':
        return AbcOpcode$GetLocal_getInstance();
      case 'SetLocal':
        return AbcOpcode$SetLocal_getInstance();
      case 'GetGlobalScope':
        return AbcOpcode$GetGlobalScope_getInstance();
      case 'GetScopeObject':
        return AbcOpcode$GetScopeObject_getInstance();
      case 'GetProperty':
        return AbcOpcode$GetProperty_getInstance();
      case 'GetPropertyLate':
        return AbcOpcode$GetPropertyLate_getInstance();
      case 'InitProperty':
        return AbcOpcode$InitProperty_getInstance();
      case 'SetPropertyLate':
        return AbcOpcode$SetPropertyLate_getInstance();
      case 'DeleteProperty':
        return AbcOpcode$DeleteProperty_getInstance();
      case 'DeletePropertyLate':
        return AbcOpcode$DeletePropertyLate_getInstance();
      case 'GetSlot':
        return AbcOpcode$GetSlot_getInstance();
      case 'SetSlot':
        return AbcOpcode$SetSlot_getInstance();
      case 'GetGlobalSlot':
        return AbcOpcode$GetGlobalSlot_getInstance();
      case 'SetGlobalSlot':
        return AbcOpcode$SetGlobalSlot_getInstance();
      case 'ConvertString':
        return AbcOpcode$ConvertString_getInstance();
      case 'EscXmlElem':
        return AbcOpcode$EscXmlElem_getInstance();
      case 'EscXmlAttr':
        return AbcOpcode$EscXmlAttr_getInstance();
      case 'ConvertInt':
        return AbcOpcode$ConvertInt_getInstance();
      case 'ConvertUInt':
        return AbcOpcode$ConvertUInt_getInstance();
      case 'ConvertDouble':
        return AbcOpcode$ConvertDouble_getInstance();
      case 'ConvertBoolean':
        return AbcOpcode$ConvertBoolean_getInstance();
      case 'ConvertObject':
        return AbcOpcode$ConvertObject_getInstance();
      case 'CheckFilter':
        return AbcOpcode$CheckFilter_getInstance();
      case 'Coerce':
        return AbcOpcode$Coerce_getInstance();
      case 'CoerceBoolean':
        return AbcOpcode$CoerceBoolean_getInstance();
      case 'CoerceAny':
        return AbcOpcode$CoerceAny_getInstance();
      case 'CoerceInt':
        return AbcOpcode$CoerceInt_getInstance();
      case 'CoerceDouble':
        return AbcOpcode$CoerceDouble_getInstance();
      case 'CoerceString':
        return AbcOpcode$CoerceString_getInstance();
      case 'AsType':
        return AbcOpcode$AsType_getInstance();
      case 'AsTypeLate':
        return AbcOpcode$AsTypeLate_getInstance();
      case 'CoerceUInt':
        return AbcOpcode$CoerceUInt_getInstance();
      case 'CoerceObject':
        return AbcOpcode$CoerceObject_getInstance();
      case 'Negate':
        return AbcOpcode$Negate_getInstance();
      case 'Increment':
        return AbcOpcode$Increment_getInstance();
      case 'IncLocal':
        return AbcOpcode$IncLocal_getInstance();
      case 'Decrement':
        return AbcOpcode$Decrement_getInstance();
      case 'DecLocal':
        return AbcOpcode$DecLocal_getInstance();
      case 'TypeOf':
        return AbcOpcode$TypeOf_getInstance();
      case 'Not':
        return AbcOpcode$Not_getInstance();
      case 'BitNot':
        return AbcOpcode$BitNot_getInstance();
      case 'Concat':
        return AbcOpcode$Concat_getInstance();
      case 'AddDouble':
        return AbcOpcode$AddDouble_getInstance();
      case 'Add':
        return AbcOpcode$Add_getInstance();
      case 'Subtract':
        return AbcOpcode$Subtract_getInstance();
      case 'Multiply':
        return AbcOpcode$Multiply_getInstance();
      case 'Divide':
        return AbcOpcode$Divide_getInstance();
      case 'Modulo':
        return AbcOpcode$Modulo_getInstance();
      case 'ShiftLeft':
        return AbcOpcode$ShiftLeft_getInstance();
      case 'ShiftRight':
        return AbcOpcode$ShiftRight_getInstance();
      case 'ShiftRightUnsigned':
        return AbcOpcode$ShiftRightUnsigned_getInstance();
      case 'BitAnd':
        return AbcOpcode$BitAnd_getInstance();
      case 'BitOr':
        return AbcOpcode$BitOr_getInstance();
      case 'BitXor':
        return AbcOpcode$BitXor_getInstance();
      case 'Equals':
        return AbcOpcode$Equals_getInstance();
      case 'StrictEquals':
        return AbcOpcode$StrictEquals_getInstance();
      case 'LessThan':
        return AbcOpcode$LessThan_getInstance();
      case 'LessEquals':
        return AbcOpcode$LessEquals_getInstance();
      case 'GreaterThan':
        return AbcOpcode$GreaterThan_getInstance();
      case 'GreaterEquals':
        return AbcOpcode$GreaterEquals_getInstance();
      case 'InstanceOf':
        return AbcOpcode$InstanceOf_getInstance();
      case 'IsType':
        return AbcOpcode$IsType_getInstance();
      case 'IsTypeLate':
        return AbcOpcode$IsTypeLate_getInstance();
      case 'In':
        return AbcOpcode$In_getInstance();
      case 'IncrementInt':
        return AbcOpcode$IncrementInt_getInstance();
      case 'DecrementInt':
        return AbcOpcode$DecrementInt_getInstance();
      case 'IncLocalInt':
        return AbcOpcode$IncLocalInt_getInstance();
      case 'DecLocalInt':
        return AbcOpcode$DecLocalInt_getInstance();
      case 'NegateInt':
        return AbcOpcode$NegateInt_getInstance();
      case 'AddInt':
        return AbcOpcode$AddInt_getInstance();
      case 'SubtractInt':
        return AbcOpcode$SubtractInt_getInstance();
      case 'MultiplyInt':
        return AbcOpcode$MultiplyInt_getInstance();
      case 'GetLocal0':
        return AbcOpcode$GetLocal0_getInstance();
      case 'GetLocal1':
        return AbcOpcode$GetLocal1_getInstance();
      case 'GetLocal2':
        return AbcOpcode$GetLocal2_getInstance();
      case 'GetLocal3':
        return AbcOpcode$GetLocal3_getInstance();
      case 'SetLocal0':
        return AbcOpcode$SetLocal0_getInstance();
      case 'SetLocal1':
        return AbcOpcode$SetLocal1_getInstance();
      case 'SetLocal2':
        return AbcOpcode$SetLocal2_getInstance();
      case 'SetLocal3':
        return AbcOpcode$SetLocal3_getInstance();
      case 'Debug':
        return AbcOpcode$Debug_getInstance();
      case 'DebugLine':
        return AbcOpcode$DebugLine_getInstance();
      case 'DebugFile':
        return AbcOpcode$DebugFile_getInstance();
      case 'BreakpointLine':
        return AbcOpcode$BreakpointLine_getInstance();
      case 'SetByte':
        return AbcOpcode$SetByte_getInstance();
      case 'SetShort':
        return AbcOpcode$SetShort_getInstance();
      case 'SetInt':
        return AbcOpcode$SetInt_getInstance();
      case 'SetFloat':
        return AbcOpcode$SetFloat_getInstance();
      case 'SetDouble':
        return AbcOpcode$SetDouble_getInstance();
      case 'GetByte':
        return AbcOpcode$GetByte_getInstance();
      case 'GetShort':
        return AbcOpcode$GetShort_getInstance();
      case 'GetInt':
        return AbcOpcode$GetInt_getInstance();
      case 'GetFloat':
        return AbcOpcode$GetFloat_getInstance();
      case 'GetDouble':
        return AbcOpcode$GetDouble_getInstance();
      case 'Sign1':
        return AbcOpcode$Sign1_getInstance();
      case 'Sign8':
        return AbcOpcode$Sign8_getInstance();
      case 'Sign16':
        return AbcOpcode$Sign16_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.AbcOpcode.' + name);
    }
  }
  AbcOpcode.valueOf_61zpoe$ = AbcOpcode$valueOf;
  function AbcOperation() {
    AbcOperation$Companion_getInstance();
  }
  function AbcOperation$Companion() {
    AbcOperation$Companion_instance = this;
  }
  AbcOperation$Companion.prototype.read_s1rqul$ = function (cpool, s) {
    var iop = readU8(s);
    var op = AbcOpcode$Companion_getInstance().BY_ID.get_11rb$(iop);
    return ensureNotNull(op).type.read(new AbcOpcode$KindContext(op, cpool, s));
  };
  AbcOperation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbcOperation$Companion_instance = null;
  function AbcOperation$Companion_getInstance() {
    if (AbcOperation$Companion_instance === null) {
      new AbcOperation$Companion();
    }return AbcOperation$Companion_instance;
  }
  AbcOperation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AbcOperation',
    interfaces: []
  };
  function AbcBasicOperation(opcode) {
    this.opcode_strmc7$_0 = opcode;
  }
  Object.defineProperty(AbcBasicOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_strmc7$_0;
    }
  });
  AbcBasicOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcBasicOperation',
    interfaces: [AbcOperation]
  };
  AbcBasicOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcBasicOperation.prototype.copy_9qkmow$ = function (opcode) {
    return new AbcBasicOperation(opcode === void 0 ? this.opcode : opcode);
  };
  AbcBasicOperation.prototype.toString = function () {
    return 'AbcBasicOperation(opcode=' + Kotlin.toString(this.opcode) + ')';
  };
  AbcBasicOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    return result;
  };
  AbcBasicOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.opcode, other.opcode))));
  };
  function AbcLabelOperation(opcode, position) {
    this.opcode_bo0p43$_0 = opcode;
    this.position = position;
  }
  Object.defineProperty(AbcLabelOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_bo0p43$_0;
    }
  });
  AbcLabelOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcLabelOperation',
    interfaces: [AbcOperation]
  };
  AbcLabelOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcLabelOperation.prototype.component2 = function () {
    return this.position;
  };
  AbcLabelOperation.prototype.copy_es32ar$ = function (opcode, position) {
    return new AbcLabelOperation(opcode === void 0 ? this.opcode : opcode, position === void 0 ? this.position : position);
  };
  AbcLabelOperation.prototype.toString = function () {
    return 'AbcLabelOperation(opcode=' + Kotlin.toString(this.opcode) + (', position=' + Kotlin.toString(this.position)) + ')';
  };
  AbcLabelOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    return result;
  };
  AbcLabelOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.position, other.position)))));
  };
  function AbcLookupSwitchOperation(opcode, defaultMarker, markers) {
    this.opcode_8klbqd$_0 = opcode;
    this.defaultMarker = defaultMarker;
    this.markers = markers;
  }
  Object.defineProperty(AbcLookupSwitchOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_8klbqd$_0;
    }
  });
  AbcLookupSwitchOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcLookupSwitchOperation',
    interfaces: [AbcOperation]
  };
  AbcLookupSwitchOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcLookupSwitchOperation.prototype.component2 = function () {
    return this.defaultMarker;
  };
  AbcLookupSwitchOperation.prototype.component3 = function () {
    return this.markers;
  };
  AbcLookupSwitchOperation.prototype.copy_wig869$ = function (opcode, defaultMarker, markers) {
    return new AbcLookupSwitchOperation(opcode === void 0 ? this.opcode : opcode, defaultMarker === void 0 ? this.defaultMarker : defaultMarker, markers === void 0 ? this.markers : markers);
  };
  AbcLookupSwitchOperation.prototype.toString = function () {
    return 'AbcLookupSwitchOperation(opcode=' + Kotlin.toString(this.opcode) + (', defaultMarker=' + Kotlin.toString(this.defaultMarker)) + (', markers=' + Kotlin.toString(this.markers)) + ')';
  };
  AbcLookupSwitchOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultMarker) | 0;
    result = result * 31 + Kotlin.hashCode(this.markers) | 0;
    return result;
  };
  AbcLookupSwitchOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.defaultMarker, other.defaultMarker) && Kotlin.equals(this.markers, other.markers)))));
  };
  function AbcIntStringIntIntOperation(opcode, int1, string, int2, int3) {
    this.opcode_da9jl5$_0 = opcode;
    this.int1 = int1;
    this.string = string;
    this.int2 = int2;
    this.int3 = int3;
  }
  Object.defineProperty(AbcIntStringIntIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_da9jl5$_0;
    }
  });
  AbcIntStringIntIntOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcIntStringIntIntOperation',
    interfaces: [AbcOperation]
  };
  AbcIntStringIntIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcIntStringIntIntOperation.prototype.component2 = function () {
    return this.int1;
  };
  AbcIntStringIntIntOperation.prototype.component3 = function () {
    return this.string;
  };
  AbcIntStringIntIntOperation.prototype.component4 = function () {
    return this.int2;
  };
  AbcIntStringIntIntOperation.prototype.component5 = function () {
    return this.int3;
  };
  AbcIntStringIntIntOperation.prototype.copy_y16hs0$ = function (opcode, int1, string, int2, int3) {
    return new AbcIntStringIntIntOperation(opcode === void 0 ? this.opcode : opcode, int1 === void 0 ? this.int1 : int1, string === void 0 ? this.string : string, int2 === void 0 ? this.int2 : int2, int3 === void 0 ? this.int3 : int3);
  };
  AbcIntStringIntIntOperation.prototype.toString = function () {
    return 'AbcIntStringIntIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', int1=' + Kotlin.toString(this.int1)) + (', string=' + Kotlin.toString(this.string)) + (', int2=' + Kotlin.toString(this.int2)) + (', int3=' + Kotlin.toString(this.int3)) + ')';
  };
  AbcIntStringIntIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.int1) | 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    result = result * 31 + Kotlin.hashCode(this.int2) | 0;
    result = result * 31 + Kotlin.hashCode(this.int3) | 0;
    return result;
  };
  AbcIntStringIntIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.int1, other.int1) && Kotlin.equals(this.string, other.string) && Kotlin.equals(this.int2, other.int2) && Kotlin.equals(this.int3, other.int3)))));
  };
  function AbcIntOperation(opcode, value) {
    this.opcode_dyz5e0$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_dyz5e0$_0;
    }
  });
  AbcIntOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcIntOperation',
    interfaces: [AbcOperation]
  };
  AbcIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcIntOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcIntOperation.prototype.copy_u9i4b6$ = function (opcode, value) {
    return new AbcIntOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcIntOperation.prototype.toString = function () {
    return 'AbcIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcJumpOperation(opcode, position) {
    this.opcode_t9jhvf$_0 = opcode;
    this.position = position;
  }
  Object.defineProperty(AbcJumpOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_t9jhvf$_0;
    }
  });
  AbcJumpOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcJumpOperation',
    interfaces: [AbcOperation]
  };
  AbcJumpOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcJumpOperation.prototype.component2 = function () {
    return this.position;
  };
  AbcJumpOperation.prototype.copy_es32ar$ = function (opcode, position) {
    return new AbcJumpOperation(opcode === void 0 ? this.opcode : opcode, position === void 0 ? this.position : position);
  };
  AbcJumpOperation.prototype.toString = function () {
    return 'AbcJumpOperation(opcode=' + Kotlin.toString(this.opcode) + (', position=' + Kotlin.toString(this.position)) + ')';
  };
  AbcJumpOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    return result;
  };
  AbcJumpOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.position, other.position)))));
  };
  function AbcStringOperation(opcode, value) {
    this.opcode_4d1e7y$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcStringOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_4d1e7y$_0;
    }
  });
  AbcStringOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcStringOperation',
    interfaces: [AbcOperation]
  };
  AbcStringOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcStringOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcStringOperation.prototype.copy_5uvlyq$ = function (opcode, value) {
    return new AbcStringOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcStringOperation.prototype.toString = function () {
    return 'AbcStringOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcStringOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcStringOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcIntIntOperation(opcode, value1, value2) {
    this.opcode_zre43$_0 = opcode;
    this.value1 = value1;
    this.value2 = value2;
  }
  Object.defineProperty(AbcIntIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_zre43$_0;
    }
  });
  AbcIntIntOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcIntIntOperation',
    interfaces: [AbcOperation]
  };
  AbcIntIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcIntIntOperation.prototype.component2 = function () {
    return this.value1;
  };
  AbcIntIntOperation.prototype.component3 = function () {
    return this.value2;
  };
  AbcIntIntOperation.prototype.copy_wqvzts$ = function (opcode, value1, value2) {
    return new AbcIntIntOperation(opcode === void 0 ? this.opcode : opcode, value1 === void 0 ? this.value1 : value1, value2 === void 0 ? this.value2 : value2);
  };
  AbcIntIntOperation.prototype.toString = function () {
    return 'AbcIntIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', value1=' + Kotlin.toString(this.value1)) + (', value2=' + Kotlin.toString(this.value2)) + ')';
  };
  AbcIntIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value1) | 0;
    result = result * 31 + Kotlin.hashCode(this.value2) | 0;
    return result;
  };
  AbcIntIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value1, other.value1) && Kotlin.equals(this.value2, other.value2)))));
  };
  function AbcDoubleOperation(opcode, value) {
    this.opcode_pwdo1q$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcDoubleOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_pwdo1q$_0;
    }
  });
  AbcDoubleOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcDoubleOperation',
    interfaces: [AbcOperation]
  };
  AbcDoubleOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcDoubleOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcDoubleOperation.prototype.copy_1bhx72$ = function (opcode, value) {
    return new AbcDoubleOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcDoubleOperation.prototype.toString = function () {
    return 'AbcDoubleOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcDoubleOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcDoubleOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcNewClassOperation(opcode, value) {
    this.opcode_ldjtz9$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcNewClassOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_ldjtz9$_0;
    }
  });
  AbcNewClassOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcNewClassOperation',
    interfaces: [AbcOperation]
  };
  AbcNewClassOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcNewClassOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcNewClassOperation.prototype.copy_u9i4b6$ = function (opcode, value) {
    return new AbcNewClassOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcNewClassOperation.prototype.toString = function () {
    return 'AbcNewClassOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcNewClassOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcNewClassOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcMultinameOperation(opcode, multiname) {
    this.opcode_wqdc19$_0 = opcode;
    this.multiname = multiname;
  }
  Object.defineProperty(AbcMultinameOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_wqdc19$_0;
    }
  });
  AbcMultinameOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcMultinameOperation',
    interfaces: [AbcOperation]
  };
  AbcMultinameOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcMultinameOperation.prototype.component2 = function () {
    return this.multiname;
  };
  AbcMultinameOperation.prototype.copy_5f0xe$ = function (opcode, multiname) {
    return new AbcMultinameOperation(opcode === void 0 ? this.opcode : opcode, multiname === void 0 ? this.multiname : multiname);
  };
  AbcMultinameOperation.prototype.toString = function () {
    return 'AbcMultinameOperation(opcode=' + Kotlin.toString(this.opcode) + (', multiname=' + Kotlin.toString(this.multiname)) + ')';
  };
  AbcMultinameOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.multiname) | 0;
    return result;
  };
  AbcMultinameOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.multiname, other.multiname)))));
  };
  function AbcMultinameIntOperation(opcode, multiname, value) {
    this.opcode_6rscc8$_0 = opcode;
    this.multiname = multiname;
    this.value = value;
  }
  Object.defineProperty(AbcMultinameIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_6rscc8$_0;
    }
  });
  AbcMultinameIntOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcMultinameIntOperation',
    interfaces: [AbcOperation]
  };
  AbcMultinameIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcMultinameIntOperation.prototype.component2 = function () {
    return this.multiname;
  };
  AbcMultinameIntOperation.prototype.component3 = function () {
    return this.value;
  };
  AbcMultinameIntOperation.prototype.copy_9w0bvo$ = function (opcode, multiname, value) {
    return new AbcMultinameIntOperation(opcode === void 0 ? this.opcode : opcode, multiname === void 0 ? this.multiname : multiname, value === void 0 ? this.value : value);
  };
  AbcMultinameIntOperation.prototype.toString = function () {
    return 'AbcMultinameIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', multiname=' + Kotlin.toString(this.multiname)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcMultinameIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.multiname) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcMultinameIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.multiname, other.multiname) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcNamespaceOperation(opcode, namespace) {
    this.opcode_ch6e8s$_0 = opcode;
    this.namespace = namespace;
  }
  Object.defineProperty(AbcNamespaceOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_ch6e8s$_0;
    }
  });
  AbcNamespaceOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbcNamespaceOperation',
    interfaces: [AbcOperation]
  };
  AbcNamespaceOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcNamespaceOperation.prototype.component2 = function () {
    return this.namespace;
  };
  AbcNamespaceOperation.prototype.copy_5cslfv$ = function (opcode, namespace) {
    return new AbcNamespaceOperation(opcode === void 0 ? this.opcode : opcode, namespace === void 0 ? this.namespace : namespace);
  };
  AbcNamespaceOperation.prototype.toString = function () {
    return 'AbcNamespaceOperation(opcode=' + Kotlin.toString(this.opcode) + (', namespace=' + Kotlin.toString(this.namespace)) + ')';
  };
  AbcNamespaceOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.namespace) | 0;
    return result;
  };
  AbcNamespaceOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.namespace, other.namespace)))));
  };
  function readU30($receiver) {
    var result = readU8($receiver);
    if ((result & 128) === 0)
      return result;
    result = result & 127 | readU8($receiver) << 7;
    if ((result & 16384) === 0)
      return result;
    result = result & 16383 | readU8($receiver) << 14;
    if ((result & 2097152) === 0)
      return result;
    result = result & 2097151 | readU8($receiver) << 21;
    if ((result & 268435456) === 0)
      return result;
    result = result & 268435455 | readU8($receiver) << 28;
    return result;
  }
  function Undefined() {
    Undefined_instance = this;
  }
  Undefined.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Undefined',
    interfaces: []
  };
  var Undefined_instance = null;
  function Undefined_getInstance() {
    if (Undefined_instance === null) {
      new Undefined();
    }return Undefined_instance;
  }
  function createGradientBox($receiver, width, height, rotation, tx, ty) {
    if (rotation === void 0)
      rotation = 0.0;
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = 0.0;
    createBox($receiver, width / 1638.4, height / 1638.4, rotation, tx + width / 2, ty + height / 2);
  }
  function createBox($receiver, scaleX, scaleY, rotation, tx, ty) {
    if (rotation === void 0)
      rotation = 0.0;
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = 0.0;
    var u = Math_0.cos(rotation);
    var v = Math_0.sin(rotation);
    $receiver.a = u * scaleX;
    $receiver.b = v * scaleY;
    $receiver.c = -v * scaleX;
    $receiver.d = u * scaleY;
    $receiver.tx = tx;
    $receiver.ty = ty;
  }
  var createBox_0 = defineInlineFunction('korge-root-korge-swf.com.soywiz.korfl.as3swf.createBox_i1ldsw$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var createBox = _.com.soywiz.korfl.as3swf.createBox_b857y0$;
    return function ($receiver, scaleX, scaleY, rotation, tx, ty) {
      if (rotation === void 0)
        rotation = 0.0;
      if (tx === void 0)
        tx = 0.0;
      if (ty === void 0)
        ty = 0.0;
      createBox($receiver, numberToDouble(scaleX), numberToDouble(scaleY), numberToDouble(rotation), numberToDouble(tx), numberToDouble(ty));
    };
  }));
  function Action(code, length, pos) {
    Action$Companion_getInstance();
    this.code_a6hwpa$_0 = code;
    this.length_49ybdl$_0 = length;
    this.pos_771y7z$_0 = pos;
    this.lbl_774rz5$_0 = null;
  }
  Object.defineProperty(Action.prototype, 'code', {
    get: function () {
      return this.code_a6hwpa$_0;
    }
  });
  Object.defineProperty(Action.prototype, 'length', {
    get: function () {
      return this.length_49ybdl$_0;
    },
    set: function (length) {
      this.length_49ybdl$_0 = length;
    }
  });
  Object.defineProperty(Action.prototype, 'pos', {
    get: function () {
      return this.pos_771y7z$_0;
    }
  });
  Object.defineProperty(Action.prototype, 'lbl', {
    get: function () {
      return this.lbl_774rz5$_0;
    },
    set: function (lbl) {
      this.lbl_774rz5$_0 = lbl;
    }
  });
  Object.defineProperty(Action.prototype, 'lengthWithHeader', {
    get: function () {
      return this.length + (this.code >= 128 ? 3 : 1) | 0;
    }
  });
  Action.prototype.parse_qq6jov$ = function (data) {
  };
  Action.prototype.write_3uvjg3$ = function (data, body) {
    if (body === void 0)
      body = null;
    data.writeUI8_za3lpa$(this.code);
    if (this.code >= 128) {
      if (body != null && body.length > 0) {
        this.length = body.length;
        data.writeUI16_za3lpa$(this.length);
        data.writeBytes_rihzz6$(body);
      } else {
        this.length = 0;
        throw Error_init('Action body null or empty.');
      }
    } else {
      this.length = 0;
    }
  };
  Action.prototype.toString_za3lpa$$default = function (indent) {
    return '[Action] Code: ' + toString_0(this.code, 16) + ', Length: ' + this.length;
  };
  Action.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'unknown (0x' + toString_0(this.code, 16) + ')';
  };
  Action.prototype.toBytecodeLabel_za3lpa$ = function (indent) {
    return this.lbl != null ? toString(this.lbl) + ':' + '\n' + repeat(' ', indent + 2 | 0) : repeat(' ', 2);
  };
  function Action$Companion() {
    Action$Companion_instance = this;
  }
  Action$Companion.prototype.resolveOffsets_p2ilo1$ = function (actions) {
    var labelNr = 1;
    var labelCount = 0;
    var action;
    var n = actions.size;
    for (var i = 0; i < n; i++) {
      action = actions.get_za3lpa$(i);
      if (Kotlin.isType(action, IActionBranch)) {
        var j = 0;
        var found = false;
        var actionBranch = action;
        var targetPos = actionBranch.pos + actionBranch.lengthWithHeader + actionBranch.branchOffset | 0;
        if (targetPos <= actionBranch.pos) {
          for (var _j = 0; _j <= i; _j++) {
            j = i - _j | 0;
            if (targetPos === actions.get_za3lpa$(j).pos) {
              labelCount = labelCount + 1 | 0;
              found = true;
              break;
            }}
        } else {
          for (var _j_0 = i + 1 | 0; _j_0 < n; _j_0++) {
            j = _j_0;
            if (targetPos === actions.get_za3lpa$(j).pos) {
              labelCount = labelCount + 1 | 0;
              found = true;
              break;
            }}
          if (!found) {
            action = actions.get_za3lpa$(j - 1 | 0);
            if (targetPos === (action.pos + action.lengthWithHeader | 0)) {
              j = -1;
              found = true;
            }}}
        if (found) {
          actionBranch.branchIndex = j;
          if (j >= 0) {
            action = actions.get_za3lpa$(j);
            action.lbl = 'L';
          }} else {
          actionBranch.branchIndex = -2;
        }
      }}
    for (var i_0 = 0; i_0 < n; i_0++) {
      action = actions.get_za3lpa$(i_0);
      if (action.lbl != null) {
        var tmp$;
        action.lbl = action.lbl + toString((tmp$ = labelNr, labelNr = tmp$ + 1 | 0, tmp$));
      }}
    return labelCount;
  };
  Action$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Action$Companion_instance = null;
  function Action$Companion_getInstance() {
    if (Action$Companion_instance === null) {
      new Action$Companion();
    }return Action$Companion_instance;
  }
  Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: [IAction]
  };
  function ActionExecutionContext(actions, cpool, labelCount) {
    this.actions = actions;
    this.cpool = cpool;
    this.labelCount = labelCount;
    var $receiver = this.actions;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, IActionBranch) && element.branchIndex === -1) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    this.endLabel = firstOrNull$result != null ? 'L' + toString(this.labelCount + 1 | 0) : null;
  }
  ActionExecutionContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionExecutionContext',
    interfaces: []
  };
  function ActionUnknown(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionUnknown.prototype.parse_qq6jov$ = function (data) {
    if (this.length > 0)
      data.skipBytes_za3lpa$(this.length);
  };
  ActionUnknown.prototype.toString_za3lpa$$default = function (indent) {
    return '[????] Code: ' + toString_0(this.code, 16) + ', Length: ' + toString(this.length);
  };
  ActionUnknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionUnknown',
    interfaces: [Action, IAction]
  };
  function IAction() {
  }
  IAction.prototype.toString_za3lpa$ = function (indent, callback$default) {
    if (indent === void 0)
      indent = 0;
    return callback$default ? callback$default(indent) : this.toString_za3lpa$$default(indent);
  };
  IAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IAction',
    interfaces: []
  };
  function IActionBranch() {
  }
  IActionBranch.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IActionBranch',
    interfaces: [IAction]
  };
  function ActionGetURL(code, length, pos) {
    Action.call(this, code, length, pos);
    this.urlString = null;
    this.targetString = null;
  }
  ActionGetURL.prototype.parse_qq6jov$ = function (data) {
    this.urlString = data.readString();
    this.targetString = data.readString();
  };
  ActionGetURL.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetURL] URL: ' + toString(this.urlString) + ', Target: ' + toString(this.targetString);
  };
  ActionGetURL.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getURL ' + '"' + toString(this.urlString) + '"' + ', ' + '"' + toString(this.targetString) + '"';
  };
  ActionGetURL.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGetURL',
    interfaces: [Action, IAction]
  };
  function ActionGotoFrame(code, length, pos) {
    Action.call(this, code, length, pos);
    this.frame = 0;
  }
  ActionGotoFrame.prototype.parse_qq6jov$ = function (data) {
    this.frame = data.readUI16();
  };
  ActionGotoFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGotoFrame] Frame: ' + this.frame;
  };
  ActionGotoFrame.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'gotoFrame ' + toString(this.frame);
  };
  ActionGotoFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGotoFrame',
    interfaces: [Action, IAction]
  };
  function ActionGotoLabel(code, length, pos) {
    Action.call(this, code, length, pos);
    this.label = null;
  }
  ActionGotoLabel.prototype.parse_qq6jov$ = function (data) {
    this.label = data.readString();
  };
  ActionGotoLabel.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGotoLabel] Label: ' + toString(this.label);
  };
  ActionGotoLabel.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'gotoLabel ' + '"' + toString(this.label) + '"';
  };
  ActionGotoLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGotoLabel',
    interfaces: [Action, IAction]
  };
  function ActionNextFrame(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNextFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNextFrame]';
  };
  ActionNextFrame.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'nextFrame';
  };
  ActionNextFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionNextFrame',
    interfaces: [Action]
  };
  function ActionPlay(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPlay.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPlay]';
  };
  ActionPlay.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'play';
  };
  ActionPlay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPlay',
    interfaces: [Action, IAction]
  };
  function ActionPreviousFrame(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPreviousFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPreviousFrame]';
  };
  ActionPreviousFrame.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'previousFrame';
  };
  ActionPreviousFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPreviousFrame',
    interfaces: [Action]
  };
  function ActionSetTarget(code, length, pos) {
    Action.call(this, code, length, pos);
    this.targetName = null;
  }
  ActionSetTarget.prototype.parse_qq6jov$ = function (data) {
    this.targetName = data.readString();
  };
  ActionSetTarget.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetTarget] TargetName: ' + toString(this.targetName);
  };
  ActionSetTarget.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setTarget ' + '"' + toString(this.targetName) + '"';
  };
  ActionSetTarget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSetTarget',
    interfaces: [Action, IAction]
  };
  function ActionStop(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStop.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStop]';
  };
  ActionStop.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stop';
  };
  ActionStop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStop',
    interfaces: [Action, IAction]
  };
  function ActionStopSounds(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStopSounds.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStopSounds]';
  };
  ActionStopSounds.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stopSounds';
  };
  ActionStopSounds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStopSounds',
    interfaces: [Action, IAction]
  };
  function ActionToggleQuality(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToggleQuality.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToggleQuality]';
  };
  ActionToggleQuality.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toggleQuality';
  };
  ActionToggleQuality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionToggleQuality',
    interfaces: [Action, IAction]
  };
  function ActionWaitForFrame(code, length, pos) {
    Action.call(this, code, length, pos);
    this.frame = 0;
    this.skipCount = 0;
  }
  ActionWaitForFrame.prototype.parse_qq6jov$ = function (data) {
    this.frame = data.readUI16();
    this.skipCount = data.readUI8();
  };
  ActionWaitForFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionWaitForFrame] Frame: ' + this.frame + ', SkipCount: ' + this.skipCount;
  };
  ActionWaitForFrame.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'waitForFrame ' + toString(this.frame) + (this.skipCount > 0 ? ', ' + toString(this.skipCount) : '');
  };
  ActionWaitForFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionWaitForFrame',
    interfaces: [Action, IAction]
  };
  function ActionAdd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAdd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAdd]';
  };
  ActionAdd.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'add';
  };
  ActionAdd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionAdd',
    interfaces: [Action, IAction]
  };
  function ActionAnd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAnd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAnd]';
  };
  ActionAnd.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'and';
  };
  ActionAnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionAnd',
    interfaces: [Action, IAction]
  };
  function ActionAsciiToChar(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAsciiToChar.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAsciiToChar]';
  };
  ActionAsciiToChar.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'asciiToChar';
  };
  ActionAsciiToChar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionAsciiToChar',
    interfaces: [Action, IAction]
  };
  function ActionCall(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCall.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCall]';
  };
  ActionCall.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'call';
  };
  ActionCall.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCall',
    interfaces: [Action, IAction]
  };
  function ActionCharToAscii(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCharToAscii.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCharToAscii]';
  };
  ActionCharToAscii.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'charToAscii';
  };
  ActionCharToAscii.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCharToAscii',
    interfaces: [Action, IAction]
  };
  function ActionCloneSprite(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCloneSprite.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCloneSprite]';
  };
  ActionCloneSprite.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'cloneSprite';
  };
  ActionCloneSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCloneSprite',
    interfaces: [Action, IAction]
  };
  function ActionDivide(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDivide.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDivide]';
  };
  ActionDivide.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'divide';
  };
  ActionDivide.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDivide',
    interfaces: [Action, IAction]
  };
  function ActionEndDrag(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEndDrag.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEndDrag]';
  };
  ActionEndDrag.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'endDrag';
  };
  ActionEndDrag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionEndDrag',
    interfaces: [Action, IAction]
  };
  function ActionEquals(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEquals.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEquals]';
  };
  ActionEquals.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'equals';
  };
  ActionEquals.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionEquals',
    interfaces: [Action, IAction]
  };
  function ActionGetProperty(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetProperty.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetProperty]';
  };
  ActionGetProperty.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getProperty';
  };
  ActionGetProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGetProperty',
    interfaces: [Action, IAction]
  };
  function ActionGetTime(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetTime.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetTime]';
  };
  ActionGetTime.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getTime';
  };
  ActionGetTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGetTime',
    interfaces: [Action, IAction]
  };
  function ActionGetURL2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.sendVarsMethod = 0;
    this.reserved = 0;
    this.loadTargetFlag = false;
    this.loadVariablesFlag = false;
  }
  ActionGetURL2.prototype.parse_qq6jov$ = function (data) {
    this.sendVarsMethod = data.readUB_za3lpa$(2);
    this.reserved = data.readUB_za3lpa$(4);
    this.loadTargetFlag = data.readUB_za3lpa$(1) === 1;
    this.loadVariablesFlag = data.readUB_za3lpa$(1) === 1;
  };
  ActionGetURL2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetURL2] SendVarsMethod: ' + this.sendVarsMethod + ' (' + this.sendVarsMethodToString() + '), Reserved: ' + this.reserved + ', LoadTargetFlag: ' + this.loadTargetFlag + ', LoadVariablesFlag: ' + this.loadVariablesFlag;
  };
  ActionGetURL2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getUrl2 (method: ' + this.sendVarsMethodToString() + ', target: ' + (!this.loadTargetFlag ? 'window' : 'sprite') + ', variables: ' + (!this.loadVariablesFlag ? 'no' : 'yes') + ')';
  };
  ActionGetURL2.prototype.sendVarsMethodToString = function () {
    switch (this.sendVarsMethod) {
      case 0:
        return 'None';
      case 1:
        return 'GET';
      case 2:
        return 'POST';
      default:throw IllegalStateException_init('sendVarsMethod is only defined for values of 0, 1, and 2.'.toString());
    }
  };
  ActionGetURL2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGetURL2',
    interfaces: [Action, IAction]
  };
  function ActionGetVariable(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetVariable.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetVariable]';
  };
  ActionGetVariable.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getVariable';
  };
  ActionGetVariable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGetVariable',
    interfaces: [Action, IAction]
  };
  function ActionGotoFrame2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.sceneBiasFlag = false;
    this.playFlag = false;
    this.sceneBias = 0;
  }
  ActionGotoFrame2.prototype.parse_qq6jov$ = function (data) {
    var flags = data.readUI8();
    this.sceneBiasFlag = (flags & 2) !== 0;
    this.playFlag = (flags & 1) !== 0;
    if (this.sceneBiasFlag) {
      this.sceneBias = data.readUI16();
    }};
  ActionGotoFrame2.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[ActionGotoFrame2] PlayFlag: ' + this.playFlag + ', SceneBiasFlag: ' + this.sceneBiasFlag;
    if (this.sceneBiasFlag)
      str += ', ' + this.sceneBias;
    return str;
  };
  ActionGotoFrame2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'gotoFrame2 (' + (!this.playFlag ? 'gotoAndStop' : 'gotoAndPlay') + (this.sceneBiasFlag ? ', sceneBias: ' + this.sceneBias : '') + ')';
  };
  ActionGotoFrame2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGotoFrame2',
    interfaces: [Action, IAction]
  };
  function ActionIf(code, length, pos) {
    Action.call(this, code, length, pos);
    this.branchOffset_no0649$_0 = 0;
    this.branchIndex_x6eg14$_0 = -2;
  }
  Object.defineProperty(ActionIf.prototype, 'branchOffset', {
    get: function () {
      return this.branchOffset_no0649$_0;
    },
    set: function (branchOffset) {
      this.branchOffset_no0649$_0 = branchOffset;
    }
  });
  Object.defineProperty(ActionIf.prototype, 'branchIndex', {
    get: function () {
      return this.branchIndex_x6eg14$_0;
    },
    set: function (branchIndex) {
      this.branchIndex_x6eg14$_0 = branchIndex;
    }
  });
  ActionIf.prototype.parse_qq6jov$ = function (data) {
    this.branchOffset = data.readSI16();
  };
  ActionIf.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    if (this.branchIndex >= 0)
      tmp$ = this.branchIndex.toString();
    else if (this.branchIndex === -1)
      tmp$ = 'EOB';
    else
      tmp$ = '???';
    var bi = '[' + tmp$ + ']';
    return '[ActionIf] BranchOffset: ' + this.branchOffset + bi;
  };
  ActionIf.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$, tmp$_0;
    if (this.branchIndex >= 0)
      tmp$_0 = (tmp$ = context.actions.get_za3lpa$(this.branchIndex)) != null ? tmp$.lbl : null;
    else if (this.branchIndex === -1)
      tmp$_0 = 'L' + toString(context.labelCount + 1 | 0);
    else
      tmp$_0 = 'ILLEGAL BRANCH';
    var ls = tmp$_0;
    return this.toBytecodeLabel_za3lpa$(indent) + 'if ' + ls;
  };
  ActionIf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionIf',
    interfaces: [IActionBranch, Action]
  };
  function ActionJump(code, length, pos) {
    Action.call(this, code, length, pos);
    this.branchOffset_78jl9k$_0 = 0;
    this.branchIndex_ug63nt$_0 = -2;
  }
  Object.defineProperty(ActionJump.prototype, 'branchOffset', {
    get: function () {
      return this.branchOffset_78jl9k$_0;
    },
    set: function (branchOffset) {
      this.branchOffset_78jl9k$_0 = branchOffset;
    }
  });
  Object.defineProperty(ActionJump.prototype, 'branchIndex', {
    get: function () {
      return this.branchIndex_ug63nt$_0;
    },
    set: function (branchIndex) {
      this.branchIndex_ug63nt$_0 = branchIndex;
    }
  });
  ActionJump.prototype.parse_qq6jov$ = function (data) {
    this.branchOffset = data.readSI16();
  };
  ActionJump.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    if (this.branchIndex >= 0)
      tmp$ = this.branchIndex.toString();
    else if (this.branchIndex === -1)
      tmp$ = 'EOB';
    else
      tmp$ = '???';
    var bi = ' [' + tmp$ + ']';
    return '[ActionJump] BranchOffset: ' + this.branchOffset + bi;
  };
  ActionJump.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$, tmp$_0;
    if (this.branchIndex >= 0)
      tmp$_0 = (tmp$ = context.actions.get_za3lpa$(this.branchIndex)) != null ? tmp$.lbl : null;
    else if (this.branchIndex === -1)
      tmp$_0 = 'L' + toString(context.labelCount + 1 | 0);
    else
      tmp$_0 = 'ILLEGAL BRANCH';
    var ls = tmp$_0;
    return this.toBytecodeLabel_za3lpa$(indent) + 'jump ' + ls;
  };
  ActionJump.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionJump',
    interfaces: [IActionBranch, Action]
  };
  function ActionLess(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionLess.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionLess]';
  };
  ActionLess.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'less';
  };
  ActionLess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionLess',
    interfaces: [Action, IAction]
  };
  function ActionMBAsciiToChar(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBAsciiToChar.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBAsciiToChar]';
  };
  ActionMBAsciiToChar.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbAsciiToChar';
  };
  ActionMBAsciiToChar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMBAsciiToChar',
    interfaces: [Action, IAction]
  };
  function ActionMBCharToAscii(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBCharToAscii.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBCharToAscii]';
  };
  ActionMBCharToAscii.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbCharToAscii';
  };
  ActionMBCharToAscii.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMBCharToAscii',
    interfaces: [Action, IAction]
  };
  function ActionMBStringExtract(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBStringExtract.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBStringExtract]';
  };
  ActionMBStringExtract.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbStringExtract';
  };
  ActionMBStringExtract.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMBStringExtract',
    interfaces: [Action, IAction]
  };
  function ActionMBStringLength(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBStringLength.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBStringLength]';
  };
  ActionMBStringLength.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbStringLength';
  };
  ActionMBStringLength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMBStringLength',
    interfaces: [Action, IAction]
  };
  function ActionMultiply(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMultiply.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMultiply]';
  };
  ActionMultiply.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'multiply';
  };
  ActionMultiply.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMultiply',
    interfaces: [Action, IAction]
  };
  function ActionNot(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNot.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNot]';
  };
  ActionNot.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'not';
  };
  ActionNot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionNot',
    interfaces: [Action, IAction]
  };
  function ActionOr(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionOr.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionOr]';
  };
  ActionOr.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'or';
  };
  ActionOr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionOr',
    interfaces: [Action, IAction]
  };
  function ActionPop(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPop.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPop]';
  };
  ActionPop.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'pop';
  };
  ActionPop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPop',
    interfaces: [Action, IAction]
  };
  function ActionPush(code, length, pos) {
    Action.call(this, code, length, pos);
    this.values = ArrayList_init_0();
  }
  ActionPush.prototype.parse_qq6jov$ = function (data) {
    var endPosition = data.position + this.length | 0;
    while (data.position !== endPosition) {
      this.values.add_11rb$(data.readACTIONVALUE());
    }
  };
  ActionPush.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPush] ' + joinToString(this.values, ', ');
  };
  ActionPush.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$;
    var str = this.toBytecodeLabel_za3lpa$(indent);
    tmp$ = this.values.size;
    for (var i = 0; i < tmp$; i++) {
      if (i > 0)
        str += '\n' + repeat(' ', indent + 2 | 0);
      str += 'push ' + this.values.get_za3lpa$(i).toBytecodeString_mhpeer$(context.cpool);
    }
    return str;
  };
  ActionPush.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPush',
    interfaces: [Action, IAction]
  };
  function ActionRandomNumber(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionRandomNumber.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionRandomNumber]';
  };
  ActionRandomNumber.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'randomNumber';
  };
  ActionRandomNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionRandomNumber',
    interfaces: [Action, IAction]
  };
  function ActionRemoveSprite(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionRemoveSprite.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionRemoveSprite]';
  };
  ActionRemoveSprite.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'removeSprite';
  };
  ActionRemoveSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionRemoveSprite',
    interfaces: [Action, IAction]
  };
  function ActionSetProperty(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetProperty.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetProperty]';
  };
  ActionSetProperty.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setProperty';
  };
  ActionSetProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSetProperty',
    interfaces: [Action, IAction]
  };
  function ActionSetTarget2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetTarget2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetTarget2]';
  };
  ActionSetTarget2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setTarget2';
  };
  ActionSetTarget2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSetTarget2',
    interfaces: [Action, IAction]
  };
  function ActionSetVariable(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetVariable.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetVariable]';
  };
  ActionSetVariable.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setVariable';
  };
  ActionSetVariable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSetVariable',
    interfaces: [Action, IAction]
  };
  function ActionStartDrag(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStartDrag.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStartDrag]';
  };
  ActionStartDrag.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'startDrag';
  };
  ActionStartDrag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStartDrag',
    interfaces: [Action, IAction]
  };
  function ActionStringAdd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringAdd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringAdd]';
  };
  ActionStringAdd.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringAdd';
  };
  ActionStringAdd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStringAdd',
    interfaces: [Action, IAction]
  };
  function ActionStringEquals(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringEquals.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringEquals]';
  };
  ActionStringEquals.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringEquals';
  };
  ActionStringEquals.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStringEquals',
    interfaces: [Action, IAction]
  };
  function ActionStringExtract(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringExtract.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringExtract]';
  };
  ActionStringExtract.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringExtract';
  };
  ActionStringExtract.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStringExtract',
    interfaces: [Action, IAction]
  };
  function ActionStringLength(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringLength.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringLength]';
  };
  ActionStringLength.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringLength';
  };
  ActionStringLength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStringLength',
    interfaces: [Action, IAction]
  };
  function ActionStringLess(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringLess.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringLess]';
  };
  ActionStringLess.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringLess';
  };
  ActionStringLess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStringLess',
    interfaces: [Action, IAction]
  };
  function ActionSubtract(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSubtract.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSubtract]';
  };
  ActionSubtract.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'subtract';
  };
  ActionSubtract.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSubtract',
    interfaces: [Action, IAction]
  };
  function ActionToInteger(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToInteger.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToInteger]';
  };
  ActionToInteger.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toInteger';
  };
  ActionToInteger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionToInteger',
    interfaces: [Action, IAction]
  };
  function ActionTrace(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionTrace.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionTrace]';
  };
  ActionTrace.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'trace';
  };
  ActionTrace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionTrace',
    interfaces: [Action, IAction]
  };
  function ActionWaitForFrame2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.skipCount = 0;
  }
  ActionWaitForFrame2.prototype.parse_qq6jov$ = function (data) {
    this.skipCount = data.readUI8();
  };
  ActionWaitForFrame2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionWaitForFrame2] SkipCount: ' + toString(this.skipCount);
  };
  ActionWaitForFrame2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'waitForFrame2 (' + toString(this.skipCount) + ')';
  };
  ActionWaitForFrame2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionWaitForFrame2',
    interfaces: [Action, IAction]
  };
  function ActionAdd2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAdd2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAdd2]';
  };
  ActionAdd2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'add2';
  };
  ActionAdd2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionAdd2',
    interfaces: [Action, IAction]
  };
  function ActionBitAnd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitAnd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitAnd]';
  };
  ActionBitAnd.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitAnd';
  };
  ActionBitAnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionBitAnd',
    interfaces: [Action, IAction]
  };
  function ActionBitLShift(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitLShift.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitLShift]';
  };
  ActionBitLShift.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitLShift';
  };
  ActionBitLShift.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionBitLShift',
    interfaces: [Action, IAction]
  };
  function ActionBitOr(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitOr.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitOr]';
  };
  ActionBitOr.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitOr';
  };
  ActionBitOr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionBitOr',
    interfaces: [Action, IAction]
  };
  function ActionBitRShift(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitRShift.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitRShift]';
  };
  ActionBitRShift.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitRShift';
  };
  ActionBitRShift.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionBitRShift',
    interfaces: [Action, IAction]
  };
  function ActionBitURShift(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitURShift.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitURShift]';
  };
  ActionBitURShift.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitURShift';
  };
  ActionBitURShift.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionBitURShift',
    interfaces: [Action, IAction]
  };
  function ActionBitXor(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitXor.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitXor]';
  };
  ActionBitXor.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitXor';
  };
  ActionBitXor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionBitXor',
    interfaces: [Action, IAction]
  };
  function ActionCallFunction(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCallFunction.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCallFunction]';
  };
  ActionCallFunction.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'callFunction';
  };
  ActionCallFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCallFunction',
    interfaces: [Action, IAction]
  };
  function ActionCallMethod(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCallMethod.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCallMethod]';
  };
  ActionCallMethod.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'callMethod';
  };
  ActionCallMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCallMethod',
    interfaces: [Action, IAction]
  };
  function ActionConstantPool(code, length, pos) {
    Action.call(this, code, length, pos);
    this.constants = ArrayList_init_0();
  }
  ActionConstantPool.prototype.parse_qq6jov$ = function (data) {
    var count = data.readUI16();
    for (var i = 0; i < count; i++) {
      this.constants.add_11rb$(data.readString());
    }
  };
  ActionConstantPool.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var str = '[ActionConstantPool] Values: ' + toString(this.constants.size);
    tmp$ = this.constants.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + toString(i) + ': ' + this.constants.get_za3lpa$(i);
    }
    return str;
  };
  ActionConstantPool.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$;
    var str = this.toBytecodeLabel_za3lpa$(indent) + 'constantPool';
    context.cpool.clear();
    tmp$ = this.constants.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + toString(i) + ': ' + this.constants.get_za3lpa$(i);
      context.cpool.add_11rb$(this.constants.get_za3lpa$(i));
    }
    return str;
  };
  ActionConstantPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionConstantPool',
    interfaces: [Action, IAction]
  };
  function ActionDecrement(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDecrement.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDecrement]';
  };
  ActionDecrement.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'decrement';
  };
  ActionDecrement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDecrement',
    interfaces: [Action, IAction]
  };
  function ActionDefineFunction(code, length, pos) {
    Action.call(this, code, length, pos);
    this.functionName = null;
    this.functionParams = ArrayList_init_0();
    this.functionBody = ArrayList_init_0();
    this.labelCount = 0;
  }
  ActionDefineFunction.prototype.parse_qq6jov$ = function (data) {
    this.functionName = data.readString();
    var count = data.readUI16();
    for (var i = 0; i < count; i++) {
      this.functionParams.add_11rb$(data.readString());
    }
    var codeSize = data.readUI16();
    var bodyEndPosition = data.position + codeSize | 0;
    while (data.position < bodyEndPosition) {
      this.functionBody.add_11rb$(ensureNotNull(data.readACTIONRECORD()));
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.functionBody);
  };
  ActionDefineFunction.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var tmp$_0 = this.functionName == null;
    if (!tmp$_0) {
      tmp$_0 = ensureNotNull(this.functionName).length === 0;
    }var str = '[ActionDefineFunction] ' + (tmp$_0 ? '<anonymous>' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + ')';
    tmp$ = this.functionBody.size;
    for (var i = 0; i < tmp$; i++)
      str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.functionBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    return str;
  };
  ActionDefineFunction.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$;
    var tmp$_0 = this.toBytecodeLabel_za3lpa$(indent) + 'defineFunction ';
    var tmp$_1 = this.functionName == null;
    if (!tmp$_1) {
      tmp$_1 = ensureNotNull(this.functionName).length === 0;
    }var str = tmp$_0 + (tmp$_1 ? '' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + ') {';
    var ctx = new ActionExecutionContext(this.functionBody, ArrayList_init_1(context.cpool), this.labelCount);
    tmp$ = this.functionBody.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + this.functionBody.get_za3lpa$(i).toBytecode_5s0s9g$(indent + 4 | 0, ctx);
    }
    if (ctx.endLabel != null) {
      str += '\n' + repeat(' ', indent + 4 | 0) + ctx.endLabel + ':';
    }str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    return str;
  };
  ActionDefineFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDefineFunction',
    interfaces: [Action, IAction]
  };
  function ActionDefineLocal(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDefineLocal.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDefineLocal]';
  };
  ActionDefineLocal.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'defineLocal';
  };
  ActionDefineLocal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDefineLocal',
    interfaces: [Action, IAction]
  };
  function ActionDefineLocal2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDefineLocal2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDefineLocal2]';
  };
  ActionDefineLocal2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'defineLocal2';
  };
  ActionDefineLocal2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDefineLocal2',
    interfaces: [Action, IAction]
  };
  function ActionDelete(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDelete.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDelete]';
  };
  ActionDelete.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'delete';
  };
  ActionDelete.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDelete',
    interfaces: [Action, IAction]
  };
  function ActionDelete2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDelete2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDelete2]';
  };
  ActionDelete2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'delete2';
  };
  ActionDelete2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDelete2',
    interfaces: [Action, IAction]
  };
  function ActionEnumerate(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEnumerate.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEnumerate]';
  };
  ActionEnumerate.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'enumerate';
  };
  ActionEnumerate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionEnumerate',
    interfaces: [Action, IAction]
  };
  function ActionEquals2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEquals2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEquals2]';
  };
  ActionEquals2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'equals2';
  };
  ActionEquals2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionEquals2',
    interfaces: [Action, IAction]
  };
  function ActionGetMember(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetMember.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetMember]';
  };
  ActionGetMember.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getMember';
  };
  ActionGetMember.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGetMember',
    interfaces: [Action, IAction]
  };
  function ActionIncrement(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionIncrement.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionIncrement]';
  };
  ActionIncrement.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'increment';
  };
  ActionIncrement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionIncrement',
    interfaces: [Action, IAction]
  };
  function ActionInitArray(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionInitArray.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionInitArray]';
  };
  ActionInitArray.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'initArray';
  };
  ActionInitArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionInitArray',
    interfaces: [Action, IAction]
  };
  function ActionInitObject(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionInitObject.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionInitObject]';
  };
  ActionInitObject.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'initObject';
  };
  ActionInitObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionInitObject',
    interfaces: [Action, IAction]
  };
  function ActionLess2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionLess2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionLess2]';
  };
  ActionLess2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'less2';
  };
  ActionLess2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionLess2',
    interfaces: [Action, IAction]
  };
  function ActionModulo(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionModulo.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionModulo]';
  };
  ActionModulo.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'modulo';
  };
  ActionModulo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionModulo',
    interfaces: [Action, IAction]
  };
  function ActionNewMethod(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNewMethod.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNewMethod]';
  };
  ActionNewMethod.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'newMethod';
  };
  ActionNewMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionNewMethod',
    interfaces: [Action, IAction]
  };
  function ActionNewObject(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNewObject.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNewObject]';
  };
  ActionNewObject.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'newObject';
  };
  ActionNewObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionNewObject',
    interfaces: [Action, IAction]
  };
  function ActionPushDuplicate(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPushDuplicate.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPushDuplicate]';
  };
  ActionPushDuplicate.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'pushDuplicate';
  };
  ActionPushDuplicate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPushDuplicate',
    interfaces: [Action, IAction]
  };
  function ActionReturn(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionReturn.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionReturn]';
  };
  ActionReturn.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'return';
  };
  ActionReturn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionReturn',
    interfaces: [Action, IAction]
  };
  function ActionSetMember(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetMember.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetMember]';
  };
  ActionSetMember.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setMember';
  };
  ActionSetMember.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSetMember',
    interfaces: [Action, IAction]
  };
  function ActionStackSwap(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStackSwap.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStackSwap]';
  };
  ActionStackSwap.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stackSwap';
  };
  ActionStackSwap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStackSwap',
    interfaces: [Action, IAction]
  };
  function ActionStoreRegister(code, length, pos) {
    Action.call(this, code, length, pos);
    this.registerNumber = 0;
  }
  ActionStoreRegister.prototype.parse_qq6jov$ = function (data) {
    this.registerNumber = data.readUI8();
  };
  ActionStoreRegister.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStoreRegister] RegisterNumber: ' + this.registerNumber;
  };
  ActionStoreRegister.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'store $' + toString(this.registerNumber);
  };
  ActionStoreRegister.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStoreRegister',
    interfaces: [Action, IAction]
  };
  function ActionTargetPath(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionTargetPath.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionTargetPath]';
  };
  ActionTargetPath.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'targetPath';
  };
  ActionTargetPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionTargetPath',
    interfaces: [Action, IAction]
  };
  function ActionToNumber(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToNumber.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToNumber]';
  };
  ActionToNumber.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toNumber';
  };
  ActionToNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionToNumber',
    interfaces: [Action, IAction]
  };
  function ActionToString(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToString.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToString]';
  };
  ActionToString.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toString';
  };
  ActionToString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionToString',
    interfaces: [Action, IAction]
  };
  function ActionTypeOf(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionTypeOf.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionTypeOf]';
  };
  ActionTypeOf.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'typeOf';
  };
  ActionTypeOf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionTypeOf',
    interfaces: [Action, IAction]
  };
  function ActionWith(code, length, pos) {
    Action.call(this, code, length, pos);
    this.withBody = ArrayList_init_0();
    this.labelCount_mpcikq$_0 = 0;
  }
  ActionWith.prototype.parse_qq6jov$ = function (data) {
    var codeSize = data.readUI16();
    var bodyEndPosition = data.position + codeSize | 0;
    while (data.position < bodyEndPosition) {
      this.withBody.add_11rb$(ensureNotNull(data.readACTIONRECORD()));
    }
    this.labelCount_mpcikq$_0 = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.withBody);
  };
  ActionWith.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var str = '[ActionWith]';
    tmp$ = this.withBody.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.withBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    }
    return str;
  };
  ActionWith.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$;
    var str = this.toBytecodeLabel_za3lpa$(indent) + 'with {';
    var ctx = new ActionExecutionContext(this.withBody, ArrayList_init_1(context.cpool), this.labelCount_mpcikq$_0);
    tmp$ = this.withBody.size;
    for (var i = 0; i < tmp$; i++)
      str += '\n' + repeat(' ', indent + 4 | 0) + this.withBody.get_za3lpa$(i).toBytecode_5s0s9g$(indent + 4 | 0, ctx);
    if (ctx.endLabel != null)
      str += '\n' + repeat(' ', indent + 4 | 0) + ctx.endLabel + ':';
    str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    return str;
  };
  ActionWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionWith',
    interfaces: [Action, IAction]
  };
  function ActionEnumerate2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEnumerate2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEnumerate2]';
  };
  ActionEnumerate2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'enumerate2';
  };
  ActionEnumerate2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionEnumerate2',
    interfaces: [Action]
  };
  function ActionGreater(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGreater.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGreater]';
  };
  ActionGreater.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'greater';
  };
  ActionGreater.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionGreater',
    interfaces: [Action, IAction]
  };
  function ActionInstanceOf(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionInstanceOf.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionInstanceOf]';
  };
  ActionInstanceOf.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'instanceOf';
  };
  ActionInstanceOf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionInstanceOf',
    interfaces: [Action, IAction]
  };
  function ActionStrictEquals(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStrictEquals.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStrictEquals]';
  };
  ActionStrictEquals.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'strictEquals';
  };
  ActionStrictEquals.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStrictEquals',
    interfaces: [Action, IAction]
  };
  function ActionStringGreater(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringGreater.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringGreater]';
  };
  ActionStringGreater.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringGreater';
  };
  ActionStringGreater.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionStringGreater',
    interfaces: [Action, IAction]
  };
  function ActionCastOp(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCastOp.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCastOp]';
  };
  ActionCastOp.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'castOp';
  };
  ActionCastOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCastOp',
    interfaces: [Action, IAction]
  };
  function ActionDefineFunction2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.functionName = null;
    this.functionParams = ArrayList_init_0();
    this.functionBody = ArrayList_init_0();
    this.labelCount_0 = 0;
    this.registerCount = 0;
    this.preloadParent = false;
    this.preloadRoot = false;
    this.preloadSuper = false;
    this.preloadArguments = false;
    this.preloadThis = false;
    this.preloadGlobal = false;
    this.suppressSuper = false;
    this.suppressArguments = false;
    this.suppressThis = false;
  }
  ActionDefineFunction2.prototype.parse_qq6jov$ = function (data) {
    this.functionName = data.readString();
    var numParams = data.readUI16();
    this.registerCount = data.readUI8();
    var flags1 = data.readUI8();
    this.preloadParent = (flags1 & 128) !== 0;
    this.preloadRoot = (flags1 & 64) !== 0;
    this.suppressSuper = (flags1 & 32) !== 0;
    this.preloadSuper = (flags1 & 16) !== 0;
    this.suppressArguments = (flags1 & 8) !== 0;
    this.preloadArguments = (flags1 & 4) !== 0;
    this.suppressThis = (flags1 & 2) !== 0;
    this.preloadThis = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.preloadGlobal = (flags2 & 1) !== 0;
    for (var i = 0; i < numParams; i++)
      this.functionParams.add_11rb$(data.readREGISTERPARAM());
    var codeSize = data.readUI16();
    var bodyEndPosition = data.position + codeSize | 0;
    while (data.position < bodyEndPosition)
      this.functionBody.add_11rb$(ensureNotNull(data.readACTIONRECORD()));
    this.labelCount_0 = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.functionBody);
  };
  ActionDefineFunction2.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var tmp$_0 = this.functionName == null;
    if (!tmp$_0) {
      tmp$_0 = ensureNotNull(this.functionName).length === 0;
    }var str = '[ActionDefineFunction2] ' + (tmp$_0 ? '<anonymous>' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + '), ';
    var a = ArrayList_init_0();
    if (this.preloadParent)
      a.add_11rb$('preloadParent');
    if (this.preloadRoot)
      a.add_11rb$('preloadRoot');
    if (this.preloadSuper)
      a.add_11rb$('preloadSuper');
    if (this.preloadArguments)
      a.add_11rb$('preloadArguments');
    if (this.preloadThis)
      a.add_11rb$('preloadThis');
    if (this.preloadGlobal)
      a.add_11rb$('preloadGlobal');
    if (this.suppressSuper)
      a.add_11rb$('suppressSuper');
    if (this.suppressArguments)
      a.add_11rb$('suppressArguments');
    if (this.suppressThis)
      a.add_11rb$('suppressThis');
    if (a.size === 0)
      a.add_11rb$('none');
    str += 'Flags: ' + joinToString(a, ',');
    tmp$ = this.functionBody.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.functionBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    }
    return str;
  };
  ActionDefineFunction2.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$;
    var tmp$_0 = this.toBytecodeLabel_za3lpa$(indent) + 'defineFunction2 ';
    var tmp$_1 = this.functionName == null;
    if (!tmp$_1) {
      tmp$_1 = ensureNotNull(this.functionName).length === 0;
    }var str = tmp$_0 + (tmp$_1 ? '' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + ') {';
    var preload = ArrayList_init_0();
    var suppress = ArrayList_init_0();
    if (this.preloadParent)
      preload.add_11rb$('parent');
    if (this.preloadRoot)
      preload.add_11rb$('root');
    if (this.preloadSuper)
      preload.add_11rb$('super');
    if (this.preloadArguments)
      preload.add_11rb$('arguments');
    if (this.preloadThis)
      preload.add_11rb$('this');
    if (this.preloadGlobal)
      preload.add_11rb$('global');
    if (this.suppressSuper)
      suppress.add_11rb$('super');
    if (this.suppressArguments)
      suppress.add_11rb$('arguments');
    if (this.suppressThis)
      suppress.add_11rb$('this');
    if (preload.size > 0)
      str += '\n' + repeat(' ', indent + 4 | 0) + '// preload: ' + joinToString(preload, ', ');
    if (suppress.size > 0) {
      str += '\n' + repeat(' ', indent + 4 | 0) + '// suppress: ' + joinToString(suppress, ', ');
    }var ctx = new ActionExecutionContext(this.functionBody, ArrayList_init_1(context.cpool), this.labelCount_0);
    tmp$ = this.functionBody.size;
    for (var i = 0; i < tmp$; i++)
      str += '\n' + repeat(' ', indent + 4 | 0) + this.functionBody.get_za3lpa$(i).toBytecode_5s0s9g$(indent + 4 | 0, ctx);
    if (ctx.endLabel != null)
      str += '\n' + repeat(' ', indent + 4 | 0) + ctx.endLabel + ':';
    str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    return str;
  };
  ActionDefineFunction2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDefineFunction2',
    interfaces: [Action, IAction]
  };
  function ActionExtends(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionExtends.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionExtends]';
  };
  ActionExtends.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'extends';
  };
  ActionExtends.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionExtends',
    interfaces: [Action, IAction]
  };
  function ActionImplementsOp(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionImplementsOp.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionImplementsOp]';
  };
  ActionImplementsOp.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'implementsOp';
  };
  ActionImplementsOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionImplementsOp',
    interfaces: [Action, IAction]
  };
  function ActionThrow(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionThrow.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionThrow]';
  };
  ActionThrow.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'throw';
  };
  ActionThrow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionThrow',
    interfaces: [Action, IAction]
  };
  function ActionTry(code, length, pos) {
    Action.call(this, code, length, pos);
    this.catchInRegisterFlag = false;
    this.finallyBlockFlag = false;
    this.catchBlockFlag = false;
    this.catchName = null;
    this.catchRegister = 0;
    this.tryBody = ArrayList_init_0();
    this.catchBody = ArrayList_init_0();
    this.finallyBody = ArrayList_init_0();
    this.labelCountTry_2qi4v4$_0 = 0;
    this.labelCountCatch_9o4674$_0 = 0;
    this.labelCountFinally_7tme0$_0 = 0;
  }
  ActionTry.prototype.parse_qq6jov$ = function (data) {
    var flags = data.readUI8();
    this.catchInRegisterFlag = (flags & 4) !== 0;
    this.finallyBlockFlag = (flags & 2) !== 0;
    this.catchBlockFlag = (flags & 1) !== 0;
    var trySize = data.readUI16();
    var catchSize = data.readUI16();
    var finallySize = data.readUI16();
    if (this.catchInRegisterFlag) {
      this.catchRegister = data.readUI8();
    } else {
      this.catchName = data.readString();
    }
    var tryEndPosition = data.position + trySize | 0;
    while (data.position < tryEndPosition)
      this.tryBody.add_11rb$(ensureNotNull(data.readACTIONRECORD()));
    var catchEndPosition = data.position + catchSize | 0;
    while (data.position < catchEndPosition)
      this.catchBody.add_11rb$(ensureNotNull(data.readACTIONRECORD()));
    var finallyEndPosition = data.position + finallySize | 0;
    while (data.position < finallyEndPosition)
      this.finallyBody.add_11rb$(ensureNotNull(data.readACTIONRECORD()));
    this.labelCountTry_2qi4v4$_0 = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.tryBody);
    this.labelCountCatch_9o4674$_0 = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.catchBody);
    this.labelCountFinally_7tme0$_0 = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.finallyBody);
  };
  ActionTry.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0, tmp$_1;
    var str = '[ActionTry] ';
    str += this.catchInRegisterFlag ? 'Register: ' + this.catchRegister : 'Name: ' + this.catchName;
    if (this.tryBody.size !== 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Try:';
      tmp$ = this.tryBody.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.tryBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }if (this.catchBody.size !== 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Catch:';
      tmp$_0 = this.catchBody.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_0) + '] ' + this.catchBody.get_za3lpa$(i_0).toString_za3lpa$(indent + 4 | 0);
      }
    }if (this.finallyBody.size !== 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Finally:';
      tmp$_1 = this.finallyBody.size;
      for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_1) + '] ' + this.finallyBody.get_za3lpa$(i_1).toString_za3lpa$(indent + 4 | 0);
      }
    }return str;
  };
  ActionTry.prototype.toBytecode_5s0s9g$ = function (indent, context) {
    var tmp$, tmp$_0, tmp$_1;
    var str = this.lbl != null ? this.lbl + ':\n' : '';
    var lf = '';
    if (this.tryBody.size !== 0) {
      str += lf + repeat(' ', indent + 2 | 0) + 'try {';
      var contextTry = new ActionExecutionContext(this.tryBody, ArrayList_init_1(context.cpool), this.labelCountTry_2qi4v4$_0);
      tmp$ = this.tryBody.size;
      for (var i = 0; i < tmp$; i++)
        str += '\n' + repeat(' ', indent + 4 | 0) + this.tryBody.get_za3lpa$(i).toBytecode_5s0s9g$(indent + 4 | 0, contextTry);
      if (contextTry.endLabel != null)
        str += '\n' + repeat(' ', indent + 4 | 0) + contextTry.endLabel + ':';
      str += '\n' + repeat(' ', indent + 2 | 0) + '}';
      lf = '\n';
    }if (this.catchBody.size !== 0) {
      str += lf + repeat(' ', indent + 2 | 0) + 'catch(' + (this.catchInRegisterFlag ? '$' + toString(this.catchRegister) : this.catchName) + ') {';
      var contextCatch = new ActionExecutionContext(this.catchBody, ArrayList_init_1(context.cpool), this.labelCountCatch_9o4674$_0);
      tmp$_0 = this.catchBody.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++)
        str += '\n' + repeat(' ', indent + 4 | 0) + this.catchBody.get_za3lpa$(i_0).toBytecode_5s0s9g$(indent + 4 | 0, contextCatch);
      if (contextCatch.endLabel != null)
        str += '\n' + repeat(' ', indent + 4 | 0) + contextCatch.endLabel + ':';
      str += '\n' + repeat(' ', indent + 2 | 0) + '}';
      lf = '\n';
    }if (this.finallyBody.size !== 0) {
      str += lf + repeat(' ', indent + 2 | 0) + 'finally {';
      var contextFinally = new ActionExecutionContext(this.finallyBody, ArrayList_init_1(context.cpool), this.labelCountFinally_7tme0$_0);
      tmp$_1 = this.finallyBody.size;
      for (var i_1 = 0; i_1 < tmp$_1; i_1++)
        str += '\n' + repeat(' ', indent + 4 | 0) + this.finallyBody.get_za3lpa$(i_1).toBytecode_5s0s9g$(indent + 4 | 0, contextFinally);
      if (contextFinally.endLabel != null)
        str += '\n' + repeat(' ', indent + 4 | 0) + contextFinally.endLabel + ':';
      str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    }return str;
  };
  ActionTry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionTry',
    interfaces: [Action, IAction]
  };
  function SWF() {
    SWF$Companion_getInstance();
    SWFTimelineContainer.call(this);
    this.$delegate_pk6j2z$_0 = new Extra$Mixin();
    this.bytes_8k6btk$_0 = new SWFData();
    this.signature = null;
    this.version = 0;
    this.fileLength = 0;
    this.fileLengthCompressed = 0;
    this.frameSize = new SWFRectangle();
    this.frameRate = 0.0;
    this.frameCount = 0;
    this.compressed = false;
    this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
    this.version = 10;
    this.fileLength = 0;
    this.fileLengthCompressed = 0;
    this.frameSize = new SWFRectangle();
    this.frameRate = 50.0;
    this.frameCount = 1;
    this.compressed = true;
    this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
  }
  function SWF$Companion() {
    SWF$Companion_instance = this;
    this.COMPRESSION_METHOD_ZLIB = 'zlib';
    this.COMPRESSION_METHOD_LZMA = 'lzma';
    this.TOSTRING_FLAG_TIMELINE_STRUCTURE = 1;
    this.TOSTRING_FLAG_AVM1_BYTECODE = 2;
    this.FILE_LENGTH_POS_0 = 4;
    this.COMPRESSION_START_POS_0 = 8;
  }
  SWF$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWF$Companion_instance = null;
  function SWF$Companion_getInstance() {
    if (SWF$Companion_instance === null) {
      new SWF$Companion();
    }return SWF$Companion_instance;
  }
  function Coroutine$loadBytes_fqrh44$($this, bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$bytes = bytes_0;
  }
  Coroutine$loadBytes_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadBytes_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadBytes_fqrh44$.prototype.constructor = Coroutine$loadBytes_fqrh44$;
  Coroutine$loadBytes_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var ba = toFlash(this.local$bytes);
            this.$this.bytes_8k6btk$_0.length = 0;
            ba.position = 0;
            ba.readBytes_14baam$(this.$this.bytes_8k6btk$_0);
            this.state_0 = 2;
            this.result_0 = this.$this.parse_qq6jov$(this.$this.bytes_8k6btk$_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this;
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
  SWF.prototype.loadBytes_fqrh44$ = function (bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$loadBytes_fqrh44$(this, bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_qq6jov$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$parse_qq6jov$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_qq6jov$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_qq6jov$.prototype.constructor = Coroutine$parse_qq6jov$;
  Coroutine$parse_qq6jov$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.bytes_8k6btk$_0 = this.local$data;
            this.state_0 = 2;
            this.result_0 = this.$this.parseHeader(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.parseTags_t54z5r$(this.local$data, this.$this.version, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return;
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
  SWF.prototype.parse_qq6jov$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_qq6jov$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parseHeader($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$parseHeader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseHeader.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseHeader.prototype.constructor = Coroutine$parseHeader;
  Coroutine$parseHeader.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.signature = '';
            this.$this.compressed = false;
            this.$this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
            this.$this.bytes_8k6btk$_0.position = 0;
            var signatureByte = this.$this.bytes_8k6btk$_0.readUI8();
            switch (toChar(signatureByte)) {
              case 67:
                this.$this.compressed = true;
                this.$this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
                break;
              case 90:
                this.$this.compressed = true;
                this.$this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_LZMA;
                break;
              case 70:
                this.$this.compressed = false;
                break;
              default:throw Error_init('Not a SWF. First signature byte is 0x' + toString_0(signatureByte, 16) + ' (expected: 0x43 or 0x5A or 0x46)');
            }

            this.$this.signature = this.$this.signature + String_fromIntArray(new Int32Array([toChar(signatureByte) | 0]));
            signatureByte = this.$this.bytes_8k6btk$_0.readUI8();
            if (signatureByte !== 87)
              throw Error_init('Not a SWF. Second signature byte is 0x' + toString_0(signatureByte, 16) + ' (expected: 0x57)');
            this.$this.signature = this.$this.signature + String_fromIntArray(new Int32Array([toChar(signatureByte) | 0]));
            signatureByte = this.$this.bytes_8k6btk$_0.readUI8();
            if (signatureByte !== 83)
              throw Error_init('Not a SWF. Third signature byte is 0x' + toString_0(signatureByte, 16) + ' (expected: 0x53)');
            this.$this.signature = this.$this.signature + String_fromIntArray(new Int32Array([toChar(signatureByte) | 0]));
            this.$this.version = this.$this.bytes_8k6btk$_0.readUI8();
            this.$this.fileLength = this.$this.bytes_8k6btk$_0.readUI32();
            this.$this.fileLengthCompressed = this.$this.bytes_8k6btk$_0.length;
            if (this.$this.fileLength >= (this.$this.fileLengthCompressed * 4 | 0))
              invalidOp('something went wrong! fileLength >= fileLengthCompressed * 4 : ' + this.$this.fileLength + ' >= ' + this.$this.fileLengthCompressed + ' * 4');
            if (this.$this.compressed) {
              this.state_0 = 2;
              this.result_0 = this.$this.bytes_8k6btk$_0.swfUncompress_bm4lxs$(this.$this.compressionMethod, this.$this.fileLength, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.$this.frameSize = this.$this.bytes_8k6btk$_0.readRECT();
            this.$this.frameRate = this.$this.bytes_8k6btk$_0.readFIXED8();
            this.$this.frameCount = this.$this.bytes_8k6btk$_0.readUI16();
            return;
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
  SWF.prototype.parseHeader = function (continuation_0, suspended) {
    var instance = new Coroutine$parseHeader(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SWF.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var indent0 = repeat(' ', indent);
    var indent2 = repeat(' ', indent + 2 | 0);
    var indent4 = repeat(' ', indent + 4 | 0);
    var s = indent0 + '[SWF]\n' + indent2 + 'Header:\n' + indent4 + 'Version: ' + toString(this.version) + '\n' + indent4 + 'Compression: ';
    tmp$_0 = s;
    if (this.compressed) {
      switch (this.compressionMethod) {
        case 'zlib':
          tmp$ = 'ZLIB';
          break;
        case 'lzma':
          tmp$ = 'LZMA';
          break;
        default:tmp$ = 'Unknown';
          break;
      }
    } else {
      tmp$ = 'None';
    }
    s = tmp$_0 + tmp$;
    return s + '\n' + indent4 + 'FileLength: ' + toString(this.fileLength) + '\n' + indent4 + 'FileLengthCompressed: ' + toString(this.fileLengthCompressed) + '\n' + indent4 + 'FrameSize: ' + this.frameSize.toStringSize() + '\n' + indent4 + 'FrameRate: ' + toString(this.frameRate) + '\n' + indent4 + 'FrameCount: ' + toString(this.frameCount) + this.toString_vux9f0$(indent, 0, SWFTimelineContainer.prototype.toString_vux9f0$$default.bind(this));
  };
  Object.defineProperty(SWF.prototype, 'extra', {
    get: function () {
      return this.$delegate_pk6j2z$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_pk6j2z$_0.extra = tmp$;
    }
  });
  SWF.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWF',
    interfaces: [Extra, SWFTimelineContainer]
  };
  function SWFData() {
    SWFData$Companion_getInstance();
    BitArray.call(this);
    this.endian = Endian$LITTLE_ENDIAN_getInstance();
  }
  function SWFData$Companion() {
    SWFData$Companion_instance = this;
  }
  SWFData$Companion.prototype.dump_rihzz6$ = function (ba, length, offset) {
    if (offset === void 0)
      offset = 0;
    var posOrig = ba.position;
    var a = posOrig + offset | 0;
    var a_0 = Math_0.max(a, 0);
    var b = ba.length - length | 0;
    var pos = Math_0.min(a_0, b);
    ba.position = pos;
    var str = '[Dump] total length: ' + toString(ba.length) + ', original position: ' + toString(posOrig);
    for (var i = 0; i < length; i++) {
      var b_0 = toString_0(ba.readUnsignedByte(), 16);
      if (b_0.length === 1) {
        b_0 = '0' + b_0;
      }if (i % 16 === 0) {
        var addr = toString_0(pos + i | 0, 16);
        addr = substr('00000000', 0, 8 - addr.length | 0) + addr;
        str += '\r' + addr + ': ';
      }b_0 += ' ';
      str += b_0;
    }
    ba.position = posOrig;
    println(str);
  };
  SWFData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFData$Companion_instance = null;
  function SWFData$Companion_getInstance() {
    if (SWFData$Companion_instance === null) {
      new SWFData$Companion();
    }return SWFData$Companion_instance;
  }
  SWFData.prototype.readSI8 = function () {
    return this.resetBitsPending().readByte();
  };
  SWFData.prototype.writeSI8_za3lpa$ = function (value) {
    this.resetBitsPending().writeByte_za3lpa$(value);
  };
  SWFData.prototype.readSI16 = function () {
    return this.resetBitsPending().readShort();
  };
  SWFData.prototype.writeSI16_za3lpa$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(value);
  };
  SWFData.prototype.readSI32 = function () {
    return this.resetBitsPending().readInt();
  };
  SWFData.prototype.writeSI32_za3lpa$ = function (value) {
    this.resetBitsPending().writeInt_za3lpa$(value);
  };
  SWFData.prototype.readUI8 = function () {
    return this.resetBitsPending().readUnsignedByte();
  };
  SWFData.prototype.writeUI8_za3lpa$ = function (value) {
    this.resetBitsPending().writeByte_za3lpa$(value);
  };
  SWFData.prototype.writeUI8_6taknv$ = function (value) {
    this.writeUI8_za3lpa$(value ? 1 : 0);
  };
  SWFData.prototype.readUI16 = function () {
    return this.resetBitsPending().readUnsignedShort();
  };
  SWFData.prototype.writeUI16_za3lpa$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(value);
  };
  SWFData.prototype.readUI24 = function () {
    this.resetBitsPending();
    var loWord = this.readUnsignedShort();
    var hiByte = this.readUnsignedByte();
    return hiByte << 16 | loWord;
  };
  SWFData.prototype.writeUI24_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeShort_za3lpa$(value & 65535);
    this.writeByte_za3lpa$(value >>> 16);
  };
  SWFData.prototype.readUI32 = function () {
    return this.resetBitsPending().readUnsignedInt();
  };
  SWFData.prototype.writeUI32_za3lpa$ = function (value) {
    this.resetBitsPending().writeUnsignedInt_za3lpa$(value);
  };
  SWFData.prototype.readFIXED = function () {
    return this.resetBitsPending().readInt() / 65536;
  };
  SWFData.prototype.writeFIXED_14dthe$ = function (value) {
    this.resetBitsPending().writeInt_za3lpa$(numberToInt(value * 65536));
  };
  SWFData.prototype.readFIXED8 = function () {
    return this.resetBitsPending().readShort() / 256.0;
  };
  SWFData.prototype.writeFIXED8_14dthe$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(numberToInt(value * 256));
  };
  SWFData.prototype.readFLOAT = function () {
    return this.resetBitsPending().readFloat();
  };
  SWFData.prototype.writeFLOAT_14dthe$ = function (value) {
    this.resetBitsPending().writeFloat_14dthe$(value);
  };
  SWFData.prototype.readDOUBLE = function () {
    return this.resetBitsPending().readDouble();
  };
  SWFData.prototype.writeDOUBLE_14dthe$ = function (value) {
    this.resetBitsPending().writeDouble_14dthe$(value);
  };
  SWFData.prototype.readFLOAT16 = function () {
    return Float16.Companion.intBitsToDouble_6hrhkk$(new UShort_init(toShort(this.resetBitsPending().readUnsignedShort())));
  };
  SWFData.prototype.writeFLOAT16_14dthe$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(Float16.Companion.doubleToIntBits_14dthe$(value).data & 65535);
  };
  SWFData.prototype.readEncodedU32 = function () {
    this.resetBitsPending();
    var result = this.readUnsignedByte();
    if ((result & 128) !== 0) {
      result = result & 127 | this.readUnsignedByte() << 7;
      if ((result & 16384) !== 0) {
        result = result & 16383 | this.readUnsignedByte() << 14;
        if ((result & 2097152) !== 0) {
          result = result & 2097151 | this.readUnsignedByte() << 21;
          if ((result & 268435456) !== 0) {
            result = result & 268435455 | this.readUnsignedByte() << 28;
          }}}}return result;
  };
  SWFData.prototype.writeEncodedU32_za3lpa$ = function (_value) {
    var value = _value;
    while (true) {
      var v = value & 127;
      value = value >>> 7;
      if (value === 0) {
        this.writeUI8_za3lpa$(v);
        break;
      }this.writeUI8_za3lpa$(v | 128);
    }
  };
  SWFData.prototype.readUB_za3lpa$ = function (bits) {
    return this.readBits_vux9f0$(bits);
  };
  SWFData.prototype.writeUB_vux9f0$ = function (bits, value) {
    this.writeBits_vux9f0$(bits, value);
  };
  SWFData.prototype.writeUB_fzusl$ = function (bits, value) {
    this.writeUB_vux9f0$(bits, value ? 1 : 0);
  };
  SWFData.prototype.readSB_za3lpa$ = function (bits) {
    var shift = 32 - bits | 0;
    return this.readBits_vux9f0$(bits) << shift >> shift;
  };
  SWFData.prototype.writeSB_vux9f0$ = function (bits, value) {
    this.writeBits_vux9f0$(bits, value);
  };
  SWFData.prototype.readFB_za3lpa$ = function (bits) {
    return this.readSB_za3lpa$(bits) / 65536;
  };
  SWFData.prototype.writeFB_5wr77w$ = function (bits, value) {
    this.writeSB_vux9f0$(bits, numberToInt(value * 65536));
  };
  SWFData.prototype.readString = function () {
    this.resetBitsPending();
    return readStringz_0(this.data);
  };
  SWFData.prototype.writeString_pdl1vj$ = function (value) {
    var tmp$ = value != null;
    if (tmp$) {
      tmp$ = value.length > 0;
    }if (tmp$)
      this.writeUTFBytes_3m52m6$(value);
    this.writeByte_za3lpa$(0);
  };
  SWFData.prototype.readLANGCODE = function () {
    this.resetBitsPending();
    return this.readUnsignedByte();
  };
  SWFData.prototype.writeLANGCODE_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeByte_za3lpa$(value);
  };
  SWFData.prototype.readRGB = function () {
    this.resetBitsPending();
    var r = this.readUnsignedByte();
    var g = this.readUnsignedByte();
    var b = this.readUnsignedByte();
    return -16777216 | r << 16 | g << 8 | b;
  };
  SWFData.prototype.writeRGB_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeByte_za3lpa$(value >>> 16 & 255);
    this.writeByte_za3lpa$(value >>> 8 & 255);
    this.writeByte_za3lpa$(value >>> 0 & 255);
  };
  SWFData.prototype.readRGBA = function () {
    this.resetBitsPending();
    var rgb = this.readRGB() & 16777215;
    var a = this.readUnsignedByte();
    return a << 24 | rgb;
  };
  SWFData.prototype.writeRGBA_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeRGB_za3lpa$(value);
    this.writeByte_za3lpa$(value >>> 24 & 255);
  };
  SWFData.prototype.readARGB = function () {
    this.resetBitsPending();
    var a = this.readUnsignedByte();
    var rgb = this.readRGB() & 16777215;
    return a << 24 | rgb;
  };
  SWFData.prototype.writeARGB_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeByte_za3lpa$(value >>> 24 & 255);
    this.writeRGB_za3lpa$(value);
  };
  SWFData.prototype.readRECT = function () {
    var $receiver = new SWFRectangle();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readMATRIX = function () {
    var $receiver = new SWFMatrix();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readCXFORM = function () {
    var $receiver = new SWFColorTransform();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readCXFORMWITHALPHA = function () {
    var $receiver = new SWFColorTransformWithAlpha();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readSHAPE_14dthe$ = function (unitDivisor) {
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    var $receiver = new SWFShape(unitDivisor);
    $receiver.parse_t54z5r$(this);
    return $receiver;
  };
  SWFData.prototype.readSHAPEWITHSTYLE_5wr77w$ = function (level, unitDivisor) {
    if (level === void 0)
      level = 1;
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    var $receiver = new SWFShapeWithStyle(unitDivisor);
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readSTRAIGHTEDGERECORD_za3lpa$ = function (numBits) {
    var $receiver = new SWFShapeRecordStraightEdge(numBits);
    $receiver.parse_t54z5r$(this);
    return $receiver;
  };
  SWFData.prototype.readCURVEDEDGERECORD_za3lpa$ = function (numBits) {
    var $receiver = new SWFShapeRecordCurvedEdge(numBits);
    $receiver.parse_t54z5r$(this);
    return $receiver;
  };
  SWFData.prototype.readSTYLECHANGERECORD_tjonv8$ = function (states, fillBits, lineBits, level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFShapeRecordStyleChange(states, fillBits, lineBits);
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readFILLSTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFFillStyle();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readLINESTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFLineStyle();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readLINESTYLE2_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFLineStyle2();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readBUTTONRECORD_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    if (this.readUI8() === 0) {
      return null;
    } else {
      this.position = this.position - 1 | 0;
      var $receiver = new SWFButtonRecord();
      $receiver.parse_t54z5r$(this, level);
      return $receiver;
    }
  };
  SWFData.prototype.readBUTTONCONDACTION = function () {
    var $receiver = new SWFButtonCondAction();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readFILTER = function () {
    var filterId = this.readUI8();
    var filter = SWFFilterFactory_getInstance().create_za3lpa$(filterId);
    filter.parse_qq6jov$(this);
    return filter;
  };
  SWFData.prototype.readTEXTRECORD_1z3cmm$ = function (glyphBits, advanceBits, previousRecord, level) {
    if (previousRecord === void 0)
      previousRecord = null;
    if (level === void 0)
      level = 1;
    if (this.readUI8() === 0) {
      return null;
    } else {
      this.position = this.position - 1 | 0;
      var $receiver = new SWFTextRecord();
      $receiver.parse_9az7x1$(this, glyphBits, advanceBits, previousRecord, level);
      return $receiver;
    }
  };
  SWFData.prototype.readGLYPHENTRY_vux9f0$ = function (glyphBits, advanceBits) {
    var $receiver = new SWFGlyphEntry();
    $receiver.parse_rag2zz$(this, glyphBits, advanceBits);
    return $receiver;
  };
  SWFData.prototype.readZONERECORD = function () {
    return SWFZoneRecord_init(this);
  };
  SWFData.prototype.readZONEDATA = function () {
    return SWFZoneData_init(this);
  };
  SWFData.prototype.readKERNINGRECORD_6taknv$ = function (wideCodes) {
    var $receiver = new SWFKerningRecord();
    $receiver.parse_3qbgso$(this, wideCodes);
    return $receiver;
  };
  SWFData.prototype.readGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFGradient();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readFOCALGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFFocalGradient();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readGRADIENTRECORD_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFGradientRecord();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHFILLSTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphFillStyle();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHLINESTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphLineStyle();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHLINESTYLE2_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphLineStyle2();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphGradient();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHFOCALGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphFocalGradient();
    $receiver.parse_t54z5r$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHGRADIENTRECORD = function () {
    var $receiver = new SWFMorphGradientRecord();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readACTIONRECORD = function () {
    var pos = this.position;
    var action = null;
    var actionCode = this.readUI8();
    if (actionCode !== 0) {
      var actionLength = actionCode >= 128 ? this.readUI16() : 0;
      action = SWFActionFactory_getInstance().create_qt1dr2$(actionCode, actionLength, pos);
      action.parse_qq6jov$(this);
    }return action;
  };
  SWFData.prototype.readACTIONVALUE = function () {
    var $receiver = new SWFActionValue();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readREGISTERPARAM = function () {
    var $receiver = new SWFRegisterParam();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readSYMBOL = function () {
    return SWFSymbol_init(this);
  };
  SWFData.prototype.readSOUNDINFO = function () {
    var $receiver = new SWFSoundInfo();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.readSOUNDENVELOPE = function () {
    return SWFSoundEnvelope_init(this);
  };
  SWFData.prototype.readCLIPACTIONS_za3lpa$ = function (version) {
    var $receiver = new SWFClipActions();
    $receiver.parse_t54z5r$(this, version);
    return $receiver;
  };
  SWFData.prototype.readCLIPACTIONRECORD_za3lpa$ = function (version) {
    var pos = this.position;
    var flags = version >= 6 ? this.readUI32() : this.readUI16();
    if (flags === 0) {
      return null;
    } else {
      this.position = pos;
      var $receiver = new SWFClipActionRecord();
      $receiver.parse_t54z5r$(this, version);
      return $receiver;
    }
  };
  SWFData.prototype.readCLIPEVENTFLAGS_za3lpa$ = function (version) {
    var $receiver = new SWFClipEventFlags();
    $receiver.parse_t54z5r$(this, version);
    return $receiver;
  };
  SWFData.prototype.readTagHeader = function () {
    var pos = this.position;
    var tagTypeAndLength = this.readUI16();
    var tagLength = tagTypeAndLength & 63;
    if (tagLength === 63) {
      tagLength = this.readSI32();
    }return new SWFRecordHeader(tagTypeAndLength >>> 6, tagLength, this.position - pos | 0);
  };
  function Coroutine$swfUncompress_bm4lxs$($this, compressionMethod_0, uncompressedLength_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$pos = void 0;
    this.local$ba = void 0;
    this.local$compressionMethod = compressionMethod_0;
    this.local$uncompressedLength = uncompressedLength_0;
  }
  Coroutine$swfUncompress_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$swfUncompress_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$swfUncompress_bm4lxs$.prototype.constructor = Coroutine$swfUncompress_bm4lxs$;
  Coroutine$swfUncompress_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$uncompressedLength === void 0)
              this.local$uncompressedLength = 0;
            this.local$pos = this.$this.position;
            this.local$ba = new FlashByteArray();
            switch (this.local$compressionMethod) {
              case 'zlib':
                this.$this.readBytes_14baam$(this.local$ba);
                this.local$ba.position = 0;
                this.state_0 = 3;
                this.result_0 = this.local$ba.uncompressInWorker_61zpoe$(void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 'lzma':
                for (var i = 0; i < 5; i++)
                  this.local$ba.writeByte_za3lpa$(this.$this.get_za3lpa$(i + 12 | 0));
                this.local$ba.endian = Endian$LITTLE_ENDIAN_getInstance();
                this.local$ba.writeUnsignedInt_za3lpa$(this.local$uncompressedLength - 8 | 0);
                this.local$ba.writeUnsignedInt_za3lpa$(0);
                this.$this.position = 17;
                this.local$ba.position = 13;
                this.local$ba.writeBytes_fqrh44$(this.$this.readBytes_za3lpa$(this.$this.bytesAvailable));
                this.local$ba.position = 13;
                this.local$ba.position = 0;
                this.state_0 = 2;
                this.result_0 = this.local$ba.uncompressInWorker_61zpoe$(this.local$compressionMethod, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:throw IllegalStateException_init(('Unknown compression method: ' + this.local$compressionMethod).toString());
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 4;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.$this.length = this.local$pos;
            this.$this.position = this.local$pos;
            this.$this.writeBytes_rihzz6$(this.local$ba);
            this.$this.position = this.local$pos;
            return;
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
  SWFData.prototype.swfUncompress_bm4lxs$ = function (compressionMethod_0, uncompressedLength_0, continuation_0, suspended) {
    var instance = new Coroutine$swfUncompress_bm4lxs$(this, compressionMethod_0, uncompressedLength_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SWFData.prototype.readRawTag = function () {
    var $receiver = new SWFRawTag();
    $receiver.parse_qq6jov$(this);
    return $receiver;
  };
  SWFData.prototype.skipBytes_za3lpa$ = function (length) {
    this.position = this.position + length | 0;
  };
  SWFData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFData',
    interfaces: [BitArray]
  };
  function SWFTimelineContainer() {
    SWFTimelineContainer$Companion_getInstance();
    this.tags = ArrayList_init_0();
    this.tagsRaw = ArrayList_init_0();
    this.dictionary = HashMap_init();
    this.scenes = ArrayList_init_0();
    this.frames = ArrayList_init_0();
    this.layers = ArrayList_init_0();
    this.soundStream = null;
    this.currentFrame_nseagj$_0 = this.currentFrame_nseagj$_0;
    this.frameLabels = HashMap_init();
    this.hasSoundStream = false;
    this.eof = false;
    this._tmpData = null;
    this._tmpVersion = 0;
    this._tmpTagIterator = 0;
    this.tagFactory = new SWFTagFactory();
    this.rootTimelineContainer_8be2vx$ = this;
    this.backgroundColor = 16777215;
    this.jpegTablesTag = null;
  }
  function SWFTimelineContainer$Companion() {
    SWFTimelineContainer$Companion_instance = this;
    this.EXTRACT_SOUND_STREAM = true;
  }
  SWFTimelineContainer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFTimelineContainer$Companion_instance = null;
  function SWFTimelineContainer$Companion_getInstance() {
    if (SWFTimelineContainer$Companion_instance === null) {
      new SWFTimelineContainer$Companion();
    }return SWFTimelineContainer$Companion_instance;
  }
  Object.defineProperty(SWFTimelineContainer.prototype, 'currentFrame', {
    get: function () {
      if (this.currentFrame_nseagj$_0 == null)
        return throwUPAE('currentFrame');
      return this.currentFrame_nseagj$_0;
    },
    set: function (currentFrame) {
      this.currentFrame_nseagj$_0 = currentFrame;
    }
  });
  SWFTimelineContainer.prototype.getCharacter_za3lpa$ = function (characterId) {
    var tmp$, tmp$_0;
    var tagIndex = (tmp$ = this.rootTimelineContainer_8be2vx$.dictionary.get_11rb$(characterId)) != null ? tmp$ : 0;
    if (tagIndex >= 0 && tagIndex < this.rootTimelineContainer_8be2vx$.tags.size) {
      return Kotlin.isType(tmp$_0 = this.rootTimelineContainer_8be2vx$.tags.get_za3lpa$(tagIndex), IDefinitionTag) ? tmp$_0 : throwCCE();
    }return null;
  };
  function Coroutine$parseTags_t54z5r$($this, data_0, version_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$data = data_0;
    this.local$version = version_0;
  }
  Coroutine$parseTags_t54z5r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseTags_t54z5r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseTags_t54z5r$.prototype.constructor = Coroutine$parseTags_t54z5r$;
  Coroutine$parseTags_t54z5r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.parseTagsInit_feuf1s$_0(this.local$data, this.local$version);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$data.bytesAvailable <= 0) {
              this.state_0 = 6;
              continue;
            }
            this.$this.dispatchProgress_4ei57w$_0(ensureNotNull(this.$this._tmpData).position, ensureNotNull(this.$this._tmpData).length);
            this.state_0 = 3;
            this.result_0 = this.$this.parseTag_3qbgso$(ensureNotNull(this.$this._tmpData), true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            if (this.local$tmp$ == null) {
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            var tag = this.local$tmp$;
            if (tag.type === 0) {
              this.state_0 = 6;
              continue;
            } else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            this.$this.parseTagsFinalize_b3q5s3$_0();
            return;
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
  SWFTimelineContainer.prototype.parseTags_t54z5r$ = function (data_0, version_0, continuation_0, suspended) {
    var instance = new Coroutine$parseTags_t54z5r$(this, data_0, version_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SWFTimelineContainer.prototype.dispatchProgress_4ei57w$_0 = function (position, length) {
  };
  SWFTimelineContainer.prototype.dispatchWarning_eg29xp$_0 = function (msg) {
  };
  SWFTimelineContainer.prototype.parseTagsInit_feuf1s$_0 = function (data, version) {
    this.tags.clear();
    this.frames.clear();
    this.layers.clear();
    this.dictionary = HashMap_init();
    this.currentFrame = new Frame();
    this.frameLabels = HashMap_init();
    this.hasSoundStream = false;
    this._tmpData = data;
    this._tmpVersion = version;
  };
  function Coroutine$parseTag_3qbgso$($this, data_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$pos = void 0;
    this.local$tagRaw = void 0;
    this.local$tagHeader = void 0;
    this.local$tag = void 0;
    this.local$data = data_0;
    this.local$async = async_0;
  }
  Coroutine$parseTag_3qbgso$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseTag_3qbgso$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseTag_3qbgso$.prototype.constructor = Coroutine$parseTag_3qbgso$;
  Coroutine$parseTag_3qbgso$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$async === void 0)
              this.local$async = false;
            this.local$pos = this.local$data.position;
            this.$this.eof = this.local$pos >= this.local$data.length;
            if (this.$this.eof) {
              println('WARNING: end of file encountered, no end tag.');
              return null;
            } else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            this.local$tagRaw = this.local$data.readRawTag();
            this.local$tagHeader = this.local$tagRaw.header;
            this.local$tag = this.$this.tagFactory.create_za3lpa$(this.local$tagHeader.type);
            this.exceptionState_0 = 3;
            if (Kotlin.isType(this.local$tag, SWFTimelineContainer)) {
              var timelineContainer = this.local$tag;
              timelineContainer.tagFactory = this.$this.tagFactory;
              timelineContainer.rootTimelineContainer_8be2vx$ = this.$this;
            }
            this.state_0 = 2;
            this.result_0 = this.local$tag.parse_mi9vlk$(this.local$data, this.local$tagHeader.contentLength, this.$this._tmpVersion, this.local$async, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Error_0)) {
              println('WARNING: parse error: ' + e.message + ', Tag: ' + this.local$tag.name + ', Index: ' + toString(this.$this.tags.size));
              throw e;
            } else
              throw e;
          case 4:
            this.$this.tags.add_11rb$(this.local$tag);
            this.$this.tagsRaw.add_11rb$(this.local$tagRaw);
            this.$this.processTag_p5hzuy$_0(this.local$tag);
            if (this.local$data.position !== (this.local$pos + this.local$tagHeader.tagLength | 0)) {
              var index = this.$this.tags.size - 1 | 0;
              var excessBytes = this.local$data.position - (this.local$pos + this.local$tagHeader.tagLength) | 0;
              if (equals(this.$this.rootTimelineContainer_8be2vx$, this.$this)) {
                println('WARNING: excess bytes: ' + toString(excessBytes) + ', ' + 'Tag: ' + this.local$tag.name + ', ' + 'Index: ' + toString(index));
              } else {
                println('WARNING: excess bytes: ' + toString(excessBytes) + ', ' + 'Tag: ' + this.local$tag.name + ', ' + 'Index: ' + toString(index) + ', ' + 'IndexRoot: ' + toString(this.$this.rootTimelineContainer_8be2vx$.tags.size));
              }
              this.local$data.position = this.local$pos + this.local$tagHeader.tagLength | 0;
            }
            return this.local$tag;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SWFTimelineContainer.prototype.parseTag_3qbgso$ = function (data_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parseTag_3qbgso$(this, data_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SWFTimelineContainer.prototype.parseTagsFinalize_b3q5s3$_0 = function () {
    var soundStream = this.soundStream;
    if (soundStream != null && soundStream.data.length === 0)
      this.soundStream = null;
  };
  SWFTimelineContainer.prototype.processTag_p5hzuy$_0 = function (tag) {
    var tmp$, tmp$_0;
    var currentTagIndex = this.tags.size - 1 | 0;
    if (Kotlin.isType(tag, IDefinitionTag)) {
      this.processDefinitionTag_ohww10$_0(tag, currentTagIndex);
      return;
    } else if (Kotlin.isType(tag, IDisplayListTag)) {
      this.processDisplayListTag_wwpz8s$_0(tag, currentTagIndex);
      return;
    }switch (tag.type) {
      case 43:
      case 86:
        this.processFrameLabelTag_q188eb$_0(tag, currentTagIndex);
        break;
      case 18:
      case 45:
      case 19:
        if (SWFTimelineContainer$Companion_getInstance().EXTRACT_SOUND_STREAM)
          this.processSoundStreamTag_ij9l3h$_0(tag, currentTagIndex);
        break;
      case 9:
        this.processBackgroundColorTag_rj6u1q$(Kotlin.isType(tmp$ = tag, TagSetBackgroundColor) ? tmp$ : throwCCE(), currentTagIndex);
        break;
      case 8:
        this.processJPEGTablesTag_bdpi1w$(Kotlin.isType(tmp$_0 = tag, TagJPEGTables) ? tmp$_0 : throwCCE(), currentTagIndex);
        break;
    }
  };
  SWFTimelineContainer.prototype.processDefinitionTag_ohww10$_0 = function (tag, currentTagIndex) {
    if (tag.characterId > 0) {
      var $receiver = this.dictionary;
      var key = tag.characterId;
      $receiver.put_xwzc9p$(key, currentTagIndex);
      this.currentFrame.characters.add_11rb$(tag.characterId);
    }};
  SWFTimelineContainer.prototype.processDisplayListTag_wwpz8s$_0 = function (tag, currentTagIndex) {
    var tmp$, tmp$_0;
    switch (tag.type) {
      case 1:
        this.currentFrame.tagIndexEnd = currentTagIndex;
        var tmp$_1 = this.currentFrame.label == null;
        if (tmp$_1) {
          var $receiver = this.frameLabels;
          var key = this.currentFrame.frameNumber;
          var tmp$_2;
          tmp$_1 = (Kotlin.isType(tmp$_2 = $receiver, Map) ? tmp$_2 : throwCCE()).containsKey_11rb$(key);
        }
        if (tmp$_1) {
          this.currentFrame.label = this.frameLabels.get_11rb$(this.currentFrame.frameNumber);
        }
        this.frames.add_11rb$(this.currentFrame);
        this.currentFrame = this.currentFrame.clone();
        this.currentFrame.frameNumber = this.frames.size;
        this.currentFrame.tagIndexStart = currentTagIndex + 1 | 0;
        break;
      case 4:
      case 26:
      case 70:
        this.currentFrame.placeObject_d0468d$(currentTagIndex, Kotlin.isType(tmp$ = tag, TagPlaceObject) ? tmp$ : throwCCE());
        break;
      case 5:
      case 28:
        this.currentFrame.removeObject_ls7hc0$(Kotlin.isType(tmp$_0 = tag, TagRemoveObject) ? tmp$_0 : throwCCE());
        break;
    }
  };
  SWFTimelineContainer.prototype.processFrameLabelTag_q188eb$_0 = function (tag, currentTagIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    switch (tag.type) {
      case 86:
        var tagSceneAndFrameLabelData = Kotlin.isType(tmp$ = tag, TagDefineSceneAndFrameLabelData) ? tmp$ : throwCCE();
        tmp$_0 = tagSceneAndFrameLabelData.frameLabels.size;
        for (var i = 0; i < tmp$_0; i++) {
          var frameLabel = tagSceneAndFrameLabelData.frameLabels.get_za3lpa$(i);
          var $receiver = this.frameLabels;
          var key = frameLabel.frameNumber;
          var value = frameLabel.name;
          $receiver.put_xwzc9p$(key, value);
        }

        tmp$_1 = tagSceneAndFrameLabelData.scenes.size;
        for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
          var scene = tagSceneAndFrameLabelData.scenes.get_za3lpa$(i_0);
          this.scenes.add_11rb$(new Scene(scene.offset, scene.name));
        }

        break;
      case 43:
        var tagFrameLabel = Kotlin.isType(tmp$_2 = tag, TagFrameLabel) ? tmp$_2 : throwCCE();
        this.currentFrame.label = tagFrameLabel.frameName;
        break;
    }
  };
  SWFTimelineContainer.prototype.processSoundStreamTag_ij9l3h$_0 = function (tag, currentTagIndex) {
    var tmp$, tmp$_0;
    switch (tag.type) {
      case 18:
      case 45:
        var tagSoundStreamHead = Kotlin.isType(tmp$ = tag, TagSoundStreamHead) ? tmp$ : throwCCE();
        this.soundStream = new SoundStream();
        var soundStream = ensureNotNull(this.soundStream);
        soundStream.compression = tagSoundStreamHead.streamSoundCompression;
        soundStream.rate = tagSoundStreamHead.streamSoundRate;
        soundStream.size = tagSoundStreamHead.streamSoundSize;
        soundStream.type = tagSoundStreamHead.streamSoundType;
        soundStream.numFrames = 0;
        soundStream.numSamples = 0;
        break;
      case 19:
        if (this.soundStream != null) {
          var soundStream_0 = ensureNotNull(this.soundStream);
          if (!this.hasSoundStream) {
            this.hasSoundStream = true;
            soundStream_0.startFrame = this.currentFrame.frameNumber;
          }var tagSoundStreamBlock = Kotlin.isType(tmp$_0 = tag, TagSoundStreamBlock) ? tmp$_0 : throwCCE();
          var soundData = tagSoundStreamBlock.soundData;
          soundData.endian = Endian$LITTLE_ENDIAN_getInstance();
          soundData.position = 0;
          switch (soundStream_0.compression) {
            case 1:
              break;
            case 2:
              var numSamples = soundData.readUnsignedShort();
              var seekSamples = soundData.readShort();
              if (numSamples > 0) {
                soundStream_0.numSamples = soundStream_0.numSamples + numSamples | 0;
                soundStream_0.data.writeBytes_rihzz6$(soundData, 4);
              }
              break;
          }
          soundStream_0.numFrames = soundStream_0.numFrames + 1 | 0;
        }
        break;
    }
  };
  SWFTimelineContainer.prototype.processBackgroundColorTag_rj6u1q$ = function (tag, currentTagIndex) {
    this.backgroundColor = tag.color;
  };
  SWFTimelineContainer.prototype.processJPEGTablesTag_bdpi1w$ = function (tag, currentTagIndex) {
    this.jpegTablesTag = tag;
  };
  SWFTimelineContainer.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var str = '';
    if (this.tags.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Tags:';
      tmp$ = this.tags.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + this.tags.get_za3lpa$(i).toString_vux9f0$(indent + 4 | 0);
      }
    }if ((flags & 1) !== 0) {
      if (this.scenes.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'Scenes:';
        tmp$_0 = this.scenes.size;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          str += '\n' + this.scenes.get_za3lpa$(i_0).toString_za3lpa$(indent + 4 | 0);
        }
      }if (this.frames.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'Frames:';
        tmp$_1 = this.frames.size;
        for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
          str += '\n' + this.frames.get_za3lpa$(i_1).toString_za3lpa$(indent + 4 | 0);
        }
      }if (this.layers.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'Layers:';
        tmp$_2 = this.layers.size;
        for (var i_2 = 0; i_2 < tmp$_2; i_2++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_2) + '] ' + this.layers.get_za3lpa$(i_2).toString_za3lpa$(indent + 4 | 0);
        }
      }}return str;
  };
  SWFTimelineContainer.prototype.toString_vux9f0$ = function (indent, flags, callback$default) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    return callback$default ? callback$default(indent, flags) : this.toString_vux9f0$$default(indent, flags);
  };
  SWFTimelineContainer.prototype.toString = function () {
    return this.toString_vux9f0$(0, 0);
  };
  SWFTimelineContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFTimelineContainer',
    interfaces: []
  };
  function ActionValueType() {
    ActionValueType_instance = this;
    this.STRING = 0;
    this.FLOAT = 1;
    this.NULL = 2;
    this.UNDEFINED = 3;
    this.REGISTER = 4;
    this.BOOLEAN = 5;
    this.DOUBLE = 6;
    this.INTEGER = 7;
    this.CONSTANT_8 = 8;
    this.CONSTANT_16 = 9;
  }
  ActionValueType.prototype.toString_za3lpa$ = function (bitmapFormat) {
    switch (bitmapFormat) {
      case 0:
        return 'string';
      case 1:
        return 'float';
      case 2:
        return 'null';
      case 3:
        return 'undefined';
      case 4:
        return 'register';
      case 5:
        return 'boolean';
      case 6:
        return 'double';
      case 7:
        return 'integer';
      case 8:
        return 'constant8';
      case 9:
        return 'constant16';
      default:return 'unknown';
    }
  };
  ActionValueType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ActionValueType',
    interfaces: []
  };
  var ActionValueType_instance = null;
  function ActionValueType_getInstance() {
    if (ActionValueType_instance === null) {
      new ActionValueType();
    }return ActionValueType_instance;
  }
  function BitmapFormat(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BitmapFormat_initFields() {
    BitmapFormat_initFields = function () {
    };
    BitmapFormat$BIT_8_instance = new BitmapFormat('BIT_8', 0, 3);
    BitmapFormat$BIT_15_instance = new BitmapFormat('BIT_15', 1, 4);
    BitmapFormat$BIT_24_32_instance = new BitmapFormat('BIT_24_32', 2, 5);
    BitmapFormat$UNKNOWN_instance = new BitmapFormat('UNKNOWN', 3, -1);
    BitmapFormat$Companion_getInstance();
  }
  var BitmapFormat$BIT_8_instance;
  function BitmapFormat$BIT_8_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$BIT_8_instance;
  }
  var BitmapFormat$BIT_15_instance;
  function BitmapFormat$BIT_15_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$BIT_15_instance;
  }
  var BitmapFormat$BIT_24_32_instance;
  function BitmapFormat$BIT_24_32_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$BIT_24_32_instance;
  }
  var BitmapFormat$UNKNOWN_instance;
  function BitmapFormat$UNKNOWN_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$UNKNOWN_instance;
  }
  function BitmapFormat$Companion() {
    BitmapFormat$Companion_instance = this;
    var $receiver = BitmapFormat$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  BitmapFormat$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : BitmapFormat$UNKNOWN_getInstance();
  };
  BitmapFormat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFormat$Companion_instance = null;
  function BitmapFormat$Companion_getInstance() {
    BitmapFormat_initFields();
    if (BitmapFormat$Companion_instance === null) {
      new BitmapFormat$Companion();
    }return BitmapFormat$Companion_instance;
  }
  BitmapFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFormat',
    interfaces: [Enum]
  };
  function BitmapFormat$values() {
    return [BitmapFormat$BIT_8_getInstance(), BitmapFormat$BIT_15_getInstance(), BitmapFormat$BIT_24_32_getInstance(), BitmapFormat$UNKNOWN_getInstance()];
  }
  BitmapFormat.values = BitmapFormat$values;
  function BitmapFormat$valueOf(name) {
    switch (name) {
      case 'BIT_8':
        return BitmapFormat$BIT_8_getInstance();
      case 'BIT_15':
        return BitmapFormat$BIT_15_getInstance();
      case 'BIT_24_32':
        return BitmapFormat$BIT_24_32_getInstance();
      case 'UNKNOWN':
        return BitmapFormat$UNKNOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.BitmapFormat.' + name);
    }
  }
  BitmapFormat.valueOf_61zpoe$ = BitmapFormat$valueOf;
  function BitmapType() {
    BitmapType_instance = this;
    this.JPEG = 1;
    this.GIF89A = 2;
    this.PNG = 3;
  }
  BitmapType.prototype.toString_za3lpa$ = function (bitmapFormat) {
    switch (bitmapFormat) {
      case 1:
        return 'JPEG';
      case 2:
        return 'GIF89a';
      case 3:
        return 'PNG';
      default:return 'unknown';
    }
  };
  BitmapType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BitmapType',
    interfaces: []
  };
  var BitmapType_instance = null;
  function BitmapType_getInstance() {
    if (BitmapType_instance === null) {
      new BitmapType();
    }return BitmapType_instance;
  }
  function BlendMode_0() {
    BlendMode_instance = this;
    this.NORMAL_0 = 0;
    this.NORMAL_1 = 1;
    this.LAYER = 2;
    this.MULTIPLY = 3;
    this.SCREEN = 4;
    this.LIGHTEN = 5;
    this.DARKEN = 6;
    this.DIFFERENCE = 7;
    this.ADD = 8;
    this.SUBTRACT = 9;
    this.INVERT = 10;
    this.ALPHA = 11;
    this.ERASE = 12;
    this.OVERLAY = 13;
    this.HARDLIGHT = 14;
  }
  BlendMode_0.prototype.toString_za3lpa$ = function (blendMode) {
    switch (blendMode) {
      case 0:
      case 1:
        return 'normal';
      case 2:
        return 'layer';
      case 3:
        return 'multiply';
      case 4:
        return 'screen';
      case 5:
        return 'lighten';
      case 6:
        return 'darken';
      case 7:
        return 'difference';
      case 8:
        return 'add';
      case 9:
        return 'subtract';
      case 10:
        return 'invert';
      case 11:
        return 'alpha';
      case 12:
        return 'erase';
      case 13:
        return 'overlay';
      case 14:
        return 'hardlight';
      default:return 'unknown';
    }
  };
  BlendMode_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BlendMode',
    interfaces: []
  };
  var BlendMode_instance = null;
  function BlendMode_getInstance() {
    if (BlendMode_instance === null) {
      new BlendMode_0();
    }return BlendMode_instance;
  }
  function CSMTableHint() {
    CSMTableHint_instance = this;
    this.THIN = 0;
    this.MEDIUM = 1;
    this.THICK = 2;
  }
  CSMTableHint.prototype.toString_za3lpa$ = function (csmTableHint) {
    switch (csmTableHint) {
      case 0:
        return 'thin';
      case 1:
        return 'medium';
      case 2:
        return 'thick';
      default:return 'unknown';
    }
  };
  CSMTableHint.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CSMTableHint',
    interfaces: []
  };
  var CSMTableHint_instance = null;
  function CSMTableHint_getInstance() {
    if (CSMTableHint_instance === null) {
      new CSMTableHint();
    }return CSMTableHint_instance;
  }
  function GradientInterpolationMode(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientInterpolationMode_initFields() {
    GradientInterpolationMode_initFields = function () {
    };
    GradientInterpolationMode$NORMAL_instance = new GradientInterpolationMode('NORMAL', 0, 0);
    GradientInterpolationMode$LINEAR_instance = new GradientInterpolationMode('LINEAR', 1, 1);
    GradientInterpolationMode$Companion_getInstance();
  }
  var GradientInterpolationMode$NORMAL_instance;
  function GradientInterpolationMode$NORMAL_getInstance() {
    GradientInterpolationMode_initFields();
    return GradientInterpolationMode$NORMAL_instance;
  }
  var GradientInterpolationMode$LINEAR_instance;
  function GradientInterpolationMode$LINEAR_getInstance() {
    GradientInterpolationMode_initFields();
    return GradientInterpolationMode$LINEAR_instance;
  }
  function GradientInterpolationMode$Companion() {
    GradientInterpolationMode$Companion_instance = this;
    var $receiver = GradientInterpolationMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  GradientInterpolationMode$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : GradientInterpolationMode$NORMAL_getInstance();
  };
  GradientInterpolationMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GradientInterpolationMode$Companion_instance = null;
  function GradientInterpolationMode$Companion_getInstance() {
    GradientInterpolationMode_initFields();
    if (GradientInterpolationMode$Companion_instance === null) {
      new GradientInterpolationMode$Companion();
    }return GradientInterpolationMode$Companion_instance;
  }
  GradientInterpolationMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientInterpolationMode',
    interfaces: [Enum]
  };
  function GradientInterpolationMode$values() {
    return [GradientInterpolationMode$NORMAL_getInstance(), GradientInterpolationMode$LINEAR_getInstance()];
  }
  GradientInterpolationMode.values = GradientInterpolationMode$values;
  function GradientInterpolationMode$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return GradientInterpolationMode$NORMAL_getInstance();
      case 'LINEAR':
        return GradientInterpolationMode$LINEAR_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.GradientInterpolationMode.' + name);
    }
  }
  GradientInterpolationMode.valueOf_61zpoe$ = GradientInterpolationMode$valueOf;
  function GradientSpreadMode(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientSpreadMode_initFields() {
    GradientSpreadMode_initFields = function () {
    };
    GradientSpreadMode$PAD_instance = new GradientSpreadMode('PAD', 0, 0);
    GradientSpreadMode$REFLECT_instance = new GradientSpreadMode('REFLECT', 1, 1);
    GradientSpreadMode$REPEAT_instance = new GradientSpreadMode('REPEAT', 2, 2);
    GradientSpreadMode$Companion_getInstance();
  }
  var GradientSpreadMode$PAD_instance;
  function GradientSpreadMode$PAD_getInstance() {
    GradientSpreadMode_initFields();
    return GradientSpreadMode$PAD_instance;
  }
  var GradientSpreadMode$REFLECT_instance;
  function GradientSpreadMode$REFLECT_getInstance() {
    GradientSpreadMode_initFields();
    return GradientSpreadMode$REFLECT_instance;
  }
  var GradientSpreadMode$REPEAT_instance;
  function GradientSpreadMode$REPEAT_getInstance() {
    GradientSpreadMode_initFields();
    return GradientSpreadMode$REPEAT_instance;
  }
  function GradientSpreadMode$Companion() {
    GradientSpreadMode$Companion_instance = this;
    var $receiver = GradientSpreadMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  GradientSpreadMode$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : GradientSpreadMode$PAD_getInstance();
  };
  GradientSpreadMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GradientSpreadMode$Companion_instance = null;
  function GradientSpreadMode$Companion_getInstance() {
    GradientSpreadMode_initFields();
    if (GradientSpreadMode$Companion_instance === null) {
      new GradientSpreadMode$Companion();
    }return GradientSpreadMode$Companion_instance;
  }
  GradientSpreadMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientSpreadMode',
    interfaces: [Enum]
  };
  function GradientSpreadMode$values() {
    return [GradientSpreadMode$PAD_getInstance(), GradientSpreadMode$REFLECT_getInstance(), GradientSpreadMode$REPEAT_getInstance()];
  }
  GradientSpreadMode.values = GradientSpreadMode$values;
  function GradientSpreadMode$valueOf(name) {
    switch (name) {
      case 'PAD':
        return GradientSpreadMode$PAD_getInstance();
      case 'REFLECT':
        return GradientSpreadMode$REFLECT_getInstance();
      case 'REPEAT':
        return GradientSpreadMode$REPEAT_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.GradientSpreadMode.' + name);
    }
  }
  GradientSpreadMode.valueOf_61zpoe$ = GradientSpreadMode$valueOf;
  function ScaleMode(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScaleMode_initFields() {
    ScaleMode_initFields = function () {
    };
    ScaleMode$NONE_instance = new ScaleMode('NONE', 0, 0);
    ScaleMode$HORIZONTAL_instance = new ScaleMode('HORIZONTAL', 1, 1);
    ScaleMode$VERTICAL_instance = new ScaleMode('VERTICAL', 2, 2);
    ScaleMode$NORMAL_instance = new ScaleMode('NORMAL', 3, 3);
    ScaleMode$Companion_getInstance();
  }
  var ScaleMode$NONE_instance;
  function ScaleMode$NONE_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$NONE_instance;
  }
  var ScaleMode$HORIZONTAL_instance;
  function ScaleMode$HORIZONTAL_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$HORIZONTAL_instance;
  }
  var ScaleMode$VERTICAL_instance;
  function ScaleMode$VERTICAL_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$VERTICAL_instance;
  }
  var ScaleMode$NORMAL_instance;
  function ScaleMode$NORMAL_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$NORMAL_instance;
  }
  function ScaleMode$Companion() {
    ScaleMode$Companion_instance = this;
    var $receiver = ScaleMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ScaleMode$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : ScaleMode$NORMAL_getInstance();
  };
  ScaleMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScaleMode$Companion_instance = null;
  function ScaleMode$Companion_getInstance() {
    ScaleMode_initFields();
    if (ScaleMode$Companion_instance === null) {
      new ScaleMode$Companion();
    }return ScaleMode$Companion_instance;
  }
  ScaleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleMode',
    interfaces: [Enum]
  };
  function ScaleMode$values() {
    return [ScaleMode$NONE_getInstance(), ScaleMode$HORIZONTAL_getInstance(), ScaleMode$VERTICAL_getInstance(), ScaleMode$NORMAL_getInstance()];
  }
  ScaleMode.values = ScaleMode$values;
  function ScaleMode$valueOf(name) {
    switch (name) {
      case 'NONE':
        return ScaleMode$NONE_getInstance();
      case 'HORIZONTAL':
        return ScaleMode$HORIZONTAL_getInstance();
      case 'VERTICAL':
        return ScaleMode$VERTICAL_getInstance();
      case 'NORMAL':
        return ScaleMode$NORMAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.ScaleMode.' + name);
    }
  }
  ScaleMode.valueOf_61zpoe$ = ScaleMode$valueOf;
  function LineCapsStyle(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LineCapsStyle_initFields() {
    LineCapsStyle_initFields = function () {
    };
    LineCapsStyle$ROUND_instance = new LineCapsStyle('ROUND', 0, 0);
    LineCapsStyle$NO_instance = new LineCapsStyle('NO', 1, 1);
    LineCapsStyle$SQUARE_instance = new LineCapsStyle('SQUARE', 2, 2);
    LineCapsStyle$Companion_getInstance();
  }
  var LineCapsStyle$ROUND_instance;
  function LineCapsStyle$ROUND_getInstance() {
    LineCapsStyle_initFields();
    return LineCapsStyle$ROUND_instance;
  }
  var LineCapsStyle$NO_instance;
  function LineCapsStyle$NO_getInstance() {
    LineCapsStyle_initFields();
    return LineCapsStyle$NO_instance;
  }
  var LineCapsStyle$SQUARE_instance;
  function LineCapsStyle$SQUARE_getInstance() {
    LineCapsStyle_initFields();
    return LineCapsStyle$SQUARE_instance;
  }
  function LineCapsStyle$Companion() {
    LineCapsStyle$Companion_instance = this;
    var $receiver = LineCapsStyle$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  LineCapsStyle$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : LineCapsStyle$ROUND_getInstance();
  };
  LineCapsStyle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LineCapsStyle$Companion_instance = null;
  function LineCapsStyle$Companion_getInstance() {
    LineCapsStyle_initFields();
    if (LineCapsStyle$Companion_instance === null) {
      new LineCapsStyle$Companion();
    }return LineCapsStyle$Companion_instance;
  }
  LineCapsStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineCapsStyle',
    interfaces: [Enum]
  };
  function LineCapsStyle$values() {
    return [LineCapsStyle$ROUND_getInstance(), LineCapsStyle$NO_getInstance(), LineCapsStyle$SQUARE_getInstance()];
  }
  LineCapsStyle.values = LineCapsStyle$values;
  function LineCapsStyle$valueOf(name) {
    switch (name) {
      case 'ROUND':
        return LineCapsStyle$ROUND_getInstance();
      case 'NO':
        return LineCapsStyle$NO_getInstance();
      case 'SQUARE':
        return LineCapsStyle$SQUARE_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.LineCapsStyle.' + name);
    }
  }
  LineCapsStyle.valueOf_61zpoe$ = LineCapsStyle$valueOf;
  function LineJointStyle() {
    LineJointStyle_instance = this;
    this.ROUND = 0;
    this.BEVEL = 1;
    this.MITER = 2;
  }
  LineJointStyle.prototype.toString_za3lpa$ = function (lineJointStyle) {
    switch (lineJointStyle) {
      case 0:
        return 'round';
      case 1:
        return 'bevel';
      case 2:
        return 'miter';
      default:return 'null';
    }
  };
  LineJointStyle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LineJointStyle',
    interfaces: []
  };
  var LineJointStyle_instance = null;
  function LineJointStyle_getInstance() {
    if (LineJointStyle_instance === null) {
      new LineJointStyle();
    }return LineJointStyle_instance;
  }
  function SoundCompression() {
    SoundCompression_instance = this;
    this.UNCOMPRESSED_NATIVE_ENDIAN = 0;
    this.ADPCM = 1;
    this.MP3 = 2;
    this.UNCOMPRESSED_LITTLE_ENDIAN = 3;
    this.NELLYMOSER_16_KHZ = 4;
    this.NELLYMOSER_8_KHZ = 5;
    this.NELLYMOSER = 6;
    this.SPEEX = 11;
  }
  SoundCompression.prototype.toString_za3lpa$ = function (soundCompression) {
    var tmp$;
    switch (soundCompression) {
      case 0:
        tmp$ = 'Uncompressed Native Endian';
        break;
      case 1:
        tmp$ = 'ADPCM';
        break;
      case 2:
        tmp$ = 'MP3';
        break;
      case 3:
        tmp$ = 'Uncompressed Little Endian';
        break;
      case 4:
        tmp$ = 'Nellymoser 16kHz';
        break;
      case 5:
        tmp$ = 'Nellymoser 8kHz';
        break;
      case 6:
        tmp$ = 'Nellymoser';
        break;
      case 11:
        tmp$ = 'Speex';
        break;
      default:return 'unknown';
    }
    return tmp$;
  };
  SoundCompression.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundCompression',
    interfaces: []
  };
  var SoundCompression_instance = null;
  function SoundCompression_getInstance() {
    if (SoundCompression_instance === null) {
      new SoundCompression();
    }return SoundCompression_instance;
  }
  function SoundRate() {
    SoundRate_instance = this;
    this.KHZ_5 = 0;
    this.KHZ_11 = 1;
    this.KHZ_22 = 2;
    this.KHZ_44 = 3;
  }
  SoundRate.prototype.toString_za3lpa$ = function (soundRate) {
    var tmp$;
    switch (soundRate) {
      case 0:
        tmp$ = '5.5kHz';
        break;
      case 1:
        tmp$ = '11kHz';
        break;
      case 2:
        tmp$ = '22kHz';
        break;
      case 3:
        tmp$ = '44kHz';
        break;
      default:tmp$ = 'unknown';
        break;
    }
    return tmp$;
  };
  SoundRate.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundRate',
    interfaces: []
  };
  var SoundRate_instance = null;
  function SoundRate_getInstance() {
    if (SoundRate_instance === null) {
      new SoundRate();
    }return SoundRate_instance;
  }
  function SoundSize() {
    SoundSize_instance = this;
    this.BIT_8 = 0;
    this.BIT_16 = 1;
  }
  SoundSize.prototype.toString_za3lpa$ = function (soundSize) {
    var tmp$;
    switch (soundSize) {
      case 0:
        tmp$ = '8bit';
        break;
      case 1:
        tmp$ = '16bit';
        break;
      default:tmp$ = 'unknown';
        break;
    }
    return tmp$;
  };
  SoundSize.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundSize',
    interfaces: []
  };
  var SoundSize_instance = null;
  function SoundSize_getInstance() {
    if (SoundSize_instance === null) {
      new SoundSize();
    }return SoundSize_instance;
  }
  function SoundType() {
    SoundType_instance = this;
    this.MONO = 0;
    this.STEREO = 1;
  }
  SoundType.prototype.toString_za3lpa$ = function (soundType) {
    var tmp$;
    switch (soundType) {
      case 0:
        tmp$ = 'mono';
        break;
      case 1:
        tmp$ = 'stereo';
        break;
      default:tmp$ = 'unknown';
        break;
    }
    return tmp$;
  };
  SoundType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundType',
    interfaces: []
  };
  var SoundType_instance = null;
  function SoundType_getInstance() {
    if (SoundType_instance === null) {
      new SoundType();
    }return SoundType_instance;
  }
  function VideoCodecID() {
    VideoCodecID_instance = this;
    this.H263 = 2;
    this.SCREEN = 3;
    this.VP6 = 4;
    this.VP6ALPHA = 5;
    this.SCREENV2 = 6;
  }
  VideoCodecID.prototype.toString_za3lpa$ = function (codecId) {
    var tmp$;
    switch (codecId) {
      case 2:
        tmp$ = 'H.263';
        break;
      case 3:
        tmp$ = 'Screen Video';
        break;
      case 4:
        tmp$ = 'VP6';
        break;
      case 5:
        tmp$ = 'VP6 With Alpha';
        break;
      case 6:
        tmp$ = 'Screen Video V2';
        break;
      default:tmp$ = 'unknown';
        break;
    }
    return tmp$;
  };
  VideoCodecID.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VideoCodecID',
    interfaces: []
  };
  var VideoCodecID_instance = null;
  function VideoCodecID_getInstance() {
    if (VideoCodecID_instance === null) {
      new VideoCodecID();
    }return VideoCodecID_instance;
  }
  function VideoDeblockingType() {
    VideoDeblockingType_instance = this;
    this.VIDEOPACKET = 0;
    this.OFF = 1;
    this.LEVEL1 = 2;
    this.LEVEL2 = 3;
    this.LEVEL3 = 4;
    this.LEVEL4 = 5;
  }
  VideoDeblockingType.prototype.toString_za3lpa$ = function (deblockingType) {
    var tmp$;
    switch (deblockingType) {
      case 0:
        tmp$ = 'videopacket';
        break;
      case 1:
        tmp$ = 'off';
        break;
      case 2:
        tmp$ = 'level 1';
        break;
      case 3:
        tmp$ = 'level 2';
        break;
      case 4:
        tmp$ = 'level 3';
        break;
      case 5:
        tmp$ = 'level 4';
        break;
      default:tmp$ = 'unknown';
        break;
    }
    return tmp$;
  };
  VideoDeblockingType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VideoDeblockingType',
    interfaces: []
  };
  var VideoDeblockingType_instance = null;
  function VideoDeblockingType_getInstance() {
    if (VideoDeblockingType_instance === null) {
      new VideoDeblockingType();
    }return VideoDeblockingType_instance;
  }
  function SWFActionValue() {
    SWFActionValue$Companion_getInstance();
    this.type = 0;
    this.string = null;
    this.number = 0.0;
    this.register = 0;
    this.boolean = false;
    this.integer = 0;
    this.constant = 0;
  }
  function SWFActionValue$Companion() {
    SWFActionValue$Companion_instance = this;
    this.ba_0 = SWFActionValue$Companion_getInstance().initTmpBuffer_0();
  }
  SWFActionValue$Companion.prototype.initTmpBuffer_0 = function () {
    var baTmp = new FlashByteArray();
    baTmp.endian = Endian$LITTLE_ENDIAN_getInstance();
    baTmp.length = 8;
    return baTmp;
  };
  SWFActionValue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFActionValue$Companion_instance = null;
  function SWFActionValue$Companion_getInstance() {
    if (SWFActionValue$Companion_instance === null) {
      new SWFActionValue$Companion();
    }return SWFActionValue$Companion_instance;
  }
  SWFActionValue.prototype.parse_qq6jov$ = function (data) {
    this.type = data.readUI8();
    switch (this.type) {
      case 0:
        this.string = data.readString();
        break;
      case 1:
        this.number = data.readFLOAT();
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        this.register = data.readUI8();
        break;
      case 5:
        this.boolean = data.readUI8() !== 0;
        break;
      case 6:
        SWFActionValue$Companion_getInstance().ba_0.position = 0;
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(4, data.readUI8());
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(5, data.readUI8());
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(6, data.readUI8());
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(7, data.readUI8());
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(0, data.readUI8());
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(1, data.readUI8());
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(2, data.readUI8());
        SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(3, data.readUI8());
        this.number = SWFActionValue$Companion_getInstance().ba_0.readDouble();
        break;
      case 7:
        this.integer = data.readUI32();
        break;
      case 8:
        this.constant = data.readUI8();
        break;
      case 9:
        this.constant = data.readUI16();
        break;
      default:throw Error_init('Unknown ActionValueType: ' + toString(this.type));
    }
  };
  SWFActionValue.prototype.toString = function () {
    var tmp$;
    switch (this.type) {
      case 0:
        tmp$ = toString(this.string) + ' (string)';
        break;
      case 1:
        tmp$ = this.number.toString() + ' (float)';
        break;
      case 2:
        tmp$ = 'null';
        break;
      case 3:
        tmp$ = 'undefined';
        break;
      case 4:
        tmp$ = this.register.toString() + ' (register)';
        break;
      case 5:
        tmp$ = this.boolean.toString() + ' (boolean)';
        break;
      case 6:
        tmp$ = this.number.toString() + ' (double)';
        break;
      case 7:
        tmp$ = this.integer.toString() + ' (integer)';
        break;
      case 8:
        tmp$ = this.constant.toString() + ' (constant8)';
        break;
      case 9:
        tmp$ = this.constant.toString() + ' (constant16)';
        break;
      default:tmp$ = 'unknown';
        break;
    }
    return tmp$;
  };
  SWFActionValue.prototype.toBytecodeString_mhpeer$ = function (cpool) {
    var tmp$;
    switch (this.type) {
      case 0:
        tmp$ = '"' + this.string + '"';
        break;
      case 1:
      case 6:
        var str = this.number.toString();
        if (indexOf(str, '.') === -1) {
          tmp$ = str + '.0';
        } else {
          tmp$ = str;
        }

        break;
      case 2:
        tmp$ = 'null';
        break;
      case 3:
        tmp$ = 'undefined';
        break;
      case 4:
        tmp$ = '$' + toString(this.register);
        break;
      case 5:
        tmp$ = this.boolean.toString();
        break;
      case 7:
        tmp$ = this.integer.toString();
        break;
      case 8:
      case 9:
        tmp$ = '"' + cpool.get_za3lpa$(this.constant) + '"';
        break;
      default:tmp$ = 'UNKNOWN';
        break;
    }
    return tmp$;
  };
  SWFActionValue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFActionValue',
    interfaces: []
  };
  function SWFButtonCondAction() {
    this.condActionSize = 0;
    this.condIdleToOverDown = false;
    this.condOutDownToIdle = false;
    this.condOutDownToOverDown = false;
    this.condOverDownToOutDown = false;
    this.condOverDownToOverUp = false;
    this.condOverUpToOverDown = false;
    this.condOverUpToIdle = false;
    this.condIdleToOverUp = false;
    this.condOverDownToIdle = false;
    this.condKeyPress = 0;
    this.actions_0 = ArrayList_init_0();
    this.labelCount_0 = 0;
  }
  SWFButtonCondAction.prototype.parse_qq6jov$ = function (data) {
    var flags = data.readUI8() << 8 | data.readUI8();
    this.condIdleToOverDown = (flags & 32768) !== 0;
    this.condOutDownToIdle = (flags & 16384) !== 0;
    this.condOutDownToOverDown = (flags & 8192) !== 0;
    this.condOverDownToOutDown = (flags & 4096) !== 0;
    this.condOverDownToOverUp = (flags & 2048) !== 0;
    this.condOverUpToOverDown = (flags & 1024) !== 0;
    this.condOverUpToIdle = (flags & 512) !== 0;
    this.condIdleToOverUp = (flags & 256) !== 0;
    this.condOverDownToIdle = (flags & 1) !== 0;
    this.condKeyPress = (flags & 255) >>> 1;
    var action;
    while (true) {
      action = data.readACTIONRECORD();
      if (action == null)
        break;
      this.actions_0.add_11rb$(action);
    }
    this.labelCount_0 = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.actions_0);
  };
  SWFButtonCondAction.prototype.toString_vux9f0$ = function (indent, flags) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    var tmp$, tmp$_0;
    var a = ArrayList_init_0();
    if (this.condIdleToOverDown)
      a.add_11rb$('idleToOverDown');
    if (this.condOutDownToIdle)
      a.add_11rb$('outDownToIdle');
    if (this.condOutDownToOverDown)
      a.add_11rb$('outDownToOverDown');
    if (this.condOverDownToOutDown)
      a.add_11rb$('overDownToOutDown');
    if (this.condOverDownToOverUp)
      a.add_11rb$('overDownToOverUp');
    if (this.condOverUpToOverDown)
      a.add_11rb$('overUpToOverDown');
    if (this.condOverUpToIdle)
      a.add_11rb$('overUpToIdle');
    if (this.condIdleToOverUp)
      a.add_11rb$('idleToOverUp');
    if (this.condOverDownToIdle)
      a.add_11rb$('overDownToIdle');
    var str = 'CondActionRecord (' + joinToString(a, ', ') + ')';
    if (this.condKeyPress > 0)
      str += ', KeyPress: ' + toString(this.condKeyPress);
    if ((flags & 2) === 0) {
      tmp$ = this.actions_0.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this.actions_0.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    } else {
      var context = new ActionExecutionContext(this.actions_0, ArrayList_init_0(), this.labelCount_0);
      tmp$_0 = this.actions_0.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + this.actions_0.get_za3lpa$(i_0).toBytecode_5s0s9g$(indent + 4 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }}
    return str;
  };
  SWFButtonCondAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFButtonCondAction',
    interfaces: []
  };
  function SWFButtonRecord() {
    this.hasBlendMode = false;
    this.hasFilterList = false;
    this.stateHitTest = false;
    this.stateDown = false;
    this.stateOver = false;
    this.stateUp = false;
    this.characterId = 0;
    this.placeDepth = 0;
    this.placeMatrix = null;
    this.colorTransform = null;
    this.blendMode = 0;
    this.filterList_0 = ArrayList_init_0();
  }
  SWFButtonRecord.prototype.parse_t54z5r$ = function (data, level) {
    if (level === void 0)
      level = 1;
    var flags = data.readUI8();
    this.stateHitTest = (flags & 8) !== 0;
    this.stateDown = (flags & 4) !== 0;
    this.stateOver = (flags & 2) !== 0;
    this.stateUp = (flags & 1) !== 0;
    this.characterId = data.readUI16();
    this.placeDepth = data.readUI16();
    this.placeMatrix = data.readMATRIX();
    if (level >= 2) {
      this.colorTransform = data.readCXFORMWITHALPHA();
      this.hasFilterList = (flags & 16) !== 0;
      if (this.hasFilterList) {
        var numberOfFilters = data.readUI8();
        for (var i = 0; i < numberOfFilters; i++) {
          this.filterList_0.add_11rb$(data.readFILTER());
        }
      }this.hasBlendMode = (flags & 32) !== 0;
      if (this.hasBlendMode) {
        this.blendMode = data.readUI8();
      }}};
  SWFButtonRecord.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$;
    var str = 'Depth: ' + this.placeDepth + ', CharacterID: ' + this.characterId + ', States: ';
    var states = ArrayList_init_0();
    if (this.stateUp)
      states.add_11rb$('up');
    if (this.stateOver)
      states.add_11rb$('over');
    if (this.stateDown)
      states.add_11rb$('down');
    if (this.stateHitTest)
      states.add_11rb$('hit');
    str += joinToString(states, ',');
    if (this.hasBlendMode)
      str += ', BlendMode: ' + BlendMode_getInstance().toString_za3lpa$(this.blendMode);
    if (this.placeMatrix != null && !ensureNotNull(this.placeMatrix).isIdentity())
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Matrix: ' + toString(this.placeMatrix);
    if (this.colorTransform != null && !ensureNotNull(this.colorTransform).isIdentity())
      str += '\n' + repeat(' ', indent + 2 | 0) + 'ColorTransform: ' + toString(this.colorTransform);
    if (this.hasFilterList) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Filters:';
      tmp$ = this.filterList_0.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.filterList_0.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }return str;
  };
  SWFButtonRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFButtonRecord',
    interfaces: []
  };
  function SWFClipActionRecord() {
    this.eventFlags_jzh9xh$_0 = this.eventFlags_jzh9xh$_0;
    this.keyCode = 0;
    this.actions = ArrayList_init_0();
    this.labelCount = 0;
  }
  Object.defineProperty(SWFClipActionRecord.prototype, 'eventFlags', {
    get: function () {
      if (this.eventFlags_jzh9xh$_0 == null)
        return throwUPAE('eventFlags');
      return this.eventFlags_jzh9xh$_0;
    },
    set: function (eventFlags) {
      this.eventFlags_jzh9xh$_0 = eventFlags;
    }
  });
  SWFClipActionRecord.prototype.parse_t54z5r$ = function (data, version) {
    var tmp$, tmp$_0;
    this.eventFlags = data.readCLIPEVENTFLAGS_za3lpa$(version);
    data.readUI32();
    if (this.eventFlags.keyPressEvent) {
      this.keyCode = data.readUI8();
    }while (true) {
      tmp$_0 = this.actions;
      tmp$ = data.readACTIONRECORD();
      if (tmp$ == null) {
        break;
      }tmp$_0.add_11rb$(tmp$);
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.actions);
  };
  SWFClipActionRecord.prototype.toString_vux9f0$ = function (indent, flags) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    var tmp$, tmp$_0;
    var str = 'ClipActionRecord (' + this.eventFlags.toString() + ')';
    if (this.keyCode > 0) {
      str += ', KeyCode: ' + toString(this.keyCode);
    }if ((flags & 2) === 0) {
      tmp$ = this.actions.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this.actions.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    } else {
      var context = new ActionExecutionContext(this.actions, ArrayList_init_0(), this.labelCount);
      tmp$_0 = this.actions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + this.actions.get_za3lpa$(i_0).toBytecode_5s0s9g$(indent + 4 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }}
    return str;
  };
  SWFClipActionRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFClipActionRecord',
    interfaces: []
  };
  function SWFClipActions() {
    this.eventFlags_4br7ev$_0 = this.eventFlags_4br7ev$_0;
    this.records_0 = ArrayList_init_0();
  }
  Object.defineProperty(SWFClipActions.prototype, 'eventFlags', {
    get: function () {
      if (this.eventFlags_4br7ev$_0 == null)
        return throwUPAE('eventFlags');
      return this.eventFlags_4br7ev$_0;
    },
    set: function (eventFlags) {
      this.eventFlags_4br7ev$_0 = eventFlags;
    }
  });
  SWFClipActions.prototype.parse_t54z5r$ = function (data, version) {
    var tmp$, tmp$_0;
    data.readUI16();
    this.eventFlags = data.readCLIPEVENTFLAGS_za3lpa$(version);
    while (true) {
      tmp$_0 = this.records_0;
      tmp$ = data.readCLIPACTIONRECORD_za3lpa$(version);
      if (tmp$ == null) {
        break;
      }tmp$_0.add_11rb$(tmp$);
    }
  };
  SWFClipActions.prototype.toString_vux9f0$ = function (indent, flags) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    var tmp$;
    var str = 'ClipActions (' + this.eventFlags.toString() + '):';
    tmp$ = this.records_0.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this.records_0.get_za3lpa$(i).toString_vux9f0$(indent + 2 | 0, flags);
    }
    return str;
  };
  SWFClipActions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFClipActions',
    interfaces: []
  };
  function SWFClipEventFlags() {
    this.keyUpEvent = false;
    this.keyDownEvent = false;
    this.mouseUpEvent = false;
    this.mouseDownEvent = false;
    this.mouseMoveEvent = false;
    this.unloadEvent = false;
    this.enterFrameEvent = false;
    this.loadEvent = false;
    this.dragOverEvent = false;
    this.rollOutEvent = false;
    this.rollOverEvent = false;
    this.releaseOutsideEvent = false;
    this.releaseEvent = false;
    this.pressEvent = false;
    this.initializeEvent = false;
    this.dataEvent = false;
    this.constructEvent = false;
    this.keyPressEvent = false;
    this.dragOutEvent = false;
  }
  SWFClipEventFlags.prototype.parse_t54z5r$ = function (data, version) {
    var flags1 = data.readUI8();
    this.keyUpEvent = (flags1 & 128) !== 0;
    this.keyDownEvent = (flags1 & 64) !== 0;
    this.mouseUpEvent = (flags1 & 32) !== 0;
    this.mouseDownEvent = (flags1 & 16) !== 0;
    this.mouseMoveEvent = (flags1 & 8) !== 0;
    this.unloadEvent = (flags1 & 4) !== 0;
    this.enterFrameEvent = (flags1 & 2) !== 0;
    this.loadEvent = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.dragOverEvent = (flags2 & 128) !== 0;
    this.rollOutEvent = (flags2 & 64) !== 0;
    this.rollOverEvent = (flags2 & 32) !== 0;
    this.releaseOutsideEvent = (flags2 & 16) !== 0;
    this.releaseEvent = (flags2 & 8) !== 0;
    this.pressEvent = (flags2 & 4) !== 0;
    this.initializeEvent = (flags2 & 2) !== 0;
    this.dataEvent = (flags2 & 1) !== 0;
    if (version >= 6) {
      var flags3 = data.readUI8();
      this.constructEvent = (flags3 & 4) !== 0;
      this.keyPressEvent = (flags3 & 2) !== 0;
      this.dragOutEvent = (flags3 & 1) !== 0;
      data.readUI8();
    }};
  SWFClipEventFlags.prototype.toString = function () {
    var a = ArrayList_init_0();
    if (this.keyUpEvent)
      a.add_11rb$('keyup');
    if (this.keyDownEvent)
      a.add_11rb$('keydown');
    if (this.mouseUpEvent)
      a.add_11rb$('mouseup');
    if (this.mouseDownEvent)
      a.add_11rb$('mousedown');
    if (this.mouseMoveEvent)
      a.add_11rb$('mousemove');
    if (this.unloadEvent)
      a.add_11rb$('unload');
    if (this.enterFrameEvent)
      a.add_11rb$('enterframe');
    if (this.loadEvent)
      a.add_11rb$('load');
    if (this.dragOverEvent)
      a.add_11rb$('dragover');
    if (this.rollOutEvent)
      a.add_11rb$('rollout');
    if (this.rollOverEvent)
      a.add_11rb$('rollover');
    if (this.releaseOutsideEvent)
      a.add_11rb$('releaseoutside');
    if (this.releaseEvent)
      a.add_11rb$('release');
    if (this.pressEvent)
      a.add_11rb$('press');
    if (this.initializeEvent)
      a.add_11rb$('initialize');
    if (this.dataEvent)
      a.add_11rb$('data');
    if (this.constructEvent)
      a.add_11rb$('construct');
    if (this.keyPressEvent)
      a.add_11rb$('keypress');
    if (this.dragOutEvent)
      a.add_11rb$('dragout');
    return joinToString(a, ',');
  };
  SWFClipEventFlags.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFClipEventFlags',
    interfaces: []
  };
  function SWFColorTransform() {
    this._rMult = 256;
    this._gMult = 256;
    this._bMult = 256;
    this._aMult = 256;
    this._rAdd = 0;
    this._gAdd = 0;
    this._bAdd = 0;
    this._aAdd = 0;
    this.hasMultTerms = false;
    this.hasAddTerms = false;
  }
  Object.defineProperty(SWFColorTransform.prototype, 'rMult', {
    get: function () {
      return this._rMult / 256;
    },
    set: function (value) {
      this._rMult = this.clamp_za3lpa$(numberToInt(value * 256));
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'gMult', {
    get: function () {
      return this._gMult / 256;
    },
    set: function (value) {
      this._gMult = this.clamp_za3lpa$(numberToInt(value * 256));
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'bMult', {
    get: function () {
      return this._bMult / 256;
    },
    set: function (value) {
      this._bMult = this.clamp_za3lpa$(numberToInt(value * 256));
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'aMult', {
    get: function () {
      return this._aMult / 256;
    },
    set: function (value) {
      this._aMult = this.clamp_za3lpa$(numberToInt(value * 256));
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'rAdd', {
    get: function () {
      return this._rAdd;
    },
    set: function (value) {
      this._rAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'gAdd', {
    get: function () {
      return this._gAdd;
    },
    set: function (value) {
      this._gAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'bAdd', {
    get: function () {
      return this._bAdd;
    },
    set: function (value) {
      this._bAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'aAdd', {
    get: function () {
      return this._aAdd;
    },
    set: function (value) {
      this._aAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  SWFColorTransform.prototype.parse_qq6jov$ = function (data) {
    data.resetBitsPending();
    this.hasAddTerms = data.readUB_za3lpa$(1) === 1;
    this.hasMultTerms = data.readUB_za3lpa$(1) === 1;
    var bits = data.readUB_za3lpa$(4);
    if (this.hasMultTerms) {
      this._rMult = data.readSB_za3lpa$(bits);
      this._gMult = data.readSB_za3lpa$(bits);
      this._bMult = data.readSB_za3lpa$(bits);
    } else {
      this._rMult = 256;
      this._gMult = 256;
      this._bMult = 256;
    }
    if (this.hasAddTerms) {
      this._rAdd = data.readSB_za3lpa$(bits);
      this._gAdd = data.readSB_za3lpa$(bits);
      this._bAdd = data.readSB_za3lpa$(bits);
    } else {
      this._rAdd = 0;
      this._gAdd = 0;
      this._bAdd = 0;
    }
  };
  SWFColorTransform.prototype.updateHasMultTerms = function () {
    this.hasMultTerms = this._rMult !== 256 || this._gMult !== 256 || this._bMult !== 256;
  };
  SWFColorTransform.prototype.updateHasAddTerms = function () {
    this.hasAddTerms = this._rAdd !== 0 || this._gAdd !== 0 || this._bAdd !== 0;
  };
  SWFColorTransform.prototype.clamp_za3lpa$ = function (value) {
    var a = Math_0.max(value, -32768);
    return Math_0.min(a, 32767);
  };
  SWFColorTransform.prototype.isIdentity = function () {
    return !this.hasMultTerms && !this.hasAddTerms;
  };
  SWFColorTransform.prototype.toString = function () {
    return '(' + this.rMult + ',' + this.gMult + ',' + this.bMult + ',' + this.rAdd + ',' + this.gAdd + ',' + this.bAdd + ')';
  };
  SWFColorTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFColorTransform',
    interfaces: []
  };
  function SWFColorTransformWithAlpha() {
    SWFColorTransform.call(this);
  }
  SWFColorTransformWithAlpha.prototype.parse_qq6jov$ = function (data) {
    data.resetBitsPending();
    this.hasAddTerms = data.readUB_za3lpa$(1) === 1;
    this.hasMultTerms = data.readUB_za3lpa$(1) === 1;
    var bits = data.readUB_za3lpa$(4);
    if (this.hasMultTerms) {
      this._rMult = data.readSB_za3lpa$(bits);
      this._gMult = data.readSB_za3lpa$(bits);
      this._bMult = data.readSB_za3lpa$(bits);
      this._aMult = data.readSB_za3lpa$(bits);
    } else {
      this._rMult = 256;
      this._gMult = 256;
      this._bMult = 256;
      this._aMult = 256;
    }
    if (this.hasAddTerms) {
      this._rAdd = data.readSB_za3lpa$(bits);
      this._gAdd = data.readSB_za3lpa$(bits);
      this._bAdd = data.readSB_za3lpa$(bits);
      this._aAdd = data.readSB_za3lpa$(bits);
    } else {
      this._rAdd = 0;
      this._gAdd = 0;
      this._bAdd = 0;
      this._aAdd = 0;
    }
  };
  SWFColorTransformWithAlpha.prototype.updateHasMultTerms = function () {
    this.hasMultTerms = this._rMult !== 256 || this._gMult !== 256 || this._bMult !== 256 || this._aMult !== 256;
  };
  SWFColorTransformWithAlpha.prototype.updateHasAddTerms = function () {
    this.hasAddTerms = this._rAdd !== 0 || this._gAdd !== 0 || this._bAdd !== 0 || this._aAdd !== 0;
  };
  SWFColorTransformWithAlpha.prototype.toString = function () {
    return '(' + this.rMult + ',' + this.gMult + ',' + this.bMult + ',' + this.aMult + ',' + this.rAdd + ',' + this.gAdd + ',' + this.bAdd + ',' + this.aAdd + ')';
  };
  SWFColorTransformWithAlpha.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFColorTransformWithAlpha',
    interfaces: [SWFColorTransform]
  };
  function SWFFillStyle() {
    this.type = 0;
    this.rgb = 0;
    this.gradient = null;
    this.gradientMatrix = null;
    this.bitmapId = 0;
    this.bitmapMatrix = null;
    this._level_0 = 0;
  }
  SWFFillStyle.prototype.parse_t54z5r$ = function (data, level) {
    if (level === void 0)
      level = 1;
    this._level_0 = level;
    this.type = data.readUI8();
    switch (this.type) {
      case 0:
        this.rgb = level <= 2 ? data.readRGB() : data.readRGBA();
        break;
      case 16:
      case 18:
      case 19:
        this.gradientMatrix = data.readMATRIX();
        this.gradient = this.type === 19 ? data.readFOCALGRADIENT_za3lpa$(level) : data.readGRADIENT_za3lpa$(level);
        break;
      case 64:
      case 65:
      case 66:
      case 67:
        this.bitmapId = data.readUI16();
        this.bitmapMatrix = data.readMATRIX();
        break;
      default:throw Error_init('Unknown fill style type: 0x' + toString_0(this.type, 16));
    }
  };
  SWFFillStyle.prototype.toString = function () {
    var tmp$;
    var str = '[SWFFillStyle] Type: ' + format('%02x', [this.type]);
    switch (this.type) {
      case 0:
        str += ' (solid), Color: ' + (this._level_0 <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.rgb) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.rgb));
        break;
      case 16:
        str += ' (linear gradient), Gradient: ' + toString(this.gradient) + ', Matrix: ' + toString(this.gradientMatrix);
        break;
      case 18:
        str += ' (radial gradient), Gradient: ' + toString(this.gradient) + ', Matrix: ' + toString(this.gradientMatrix);
        break;
      case 19:
        str += ' (focal radial gradient), Gradient: ' + toString(this.gradient) + ', Matrix: ' + toString(this.gradientMatrix) + ', FocalPoint: ' + toString((tmp$ = this.gradient) != null ? tmp$.focalPoint : null);
        break;
      case 64:
        str += ' (repeating bitmap), BitmapID: ' + this.bitmapId;
        break;
      case 65:
        str += ' (clipped bitmap), BitmapID: ' + this.bitmapId;
        break;
      case 66:
        str += ' (non-smoothed repeating bitmap), BitmapID: ' + this.bitmapId;
        break;
      case 67:
        str += ' (non-smoothed clipped bitmap), BitmapID: ' + this.bitmapId;
        break;
    }
    return str;
  };
  SWFFillStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFFillStyle',
    interfaces: []
  };
  function SWFFocalGradient() {
    SWFGradient.call(this);
  }
  SWFFocalGradient.prototype.parse_t54z5r$ = function (data, level) {
    SWFGradient.prototype.parse_t54z5r$.call(this, data, level);
    this.focalPoint = data.readFIXED8();
  };
  SWFFocalGradient.prototype.toString = function () {
    return '(' + joinToString(this.records, ',') + ')';
  };
  SWFFocalGradient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFFocalGradient',
    interfaces: [SWFGradient]
  };
  function SWFFrameLabel(frameNumber, name) {
    this.frameNumber = frameNumber;
    this.name = name;
  }
  SWFFrameLabel.prototype.toString = function () {
    return 'Frame: ' + this.frameNumber + ', Name: ' + this.name;
  };
  SWFFrameLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFFrameLabel',
    interfaces: []
  };
  function SWFGlyphEntry() {
    this.index = 0;
    this.advance = 0;
  }
  SWFGlyphEntry.prototype.parse_rag2zz$ = function (data, glyphBits, advanceBits) {
    this.index = data.readUB_za3lpa$(glyphBits);
    this.advance = data.readSB_za3lpa$(advanceBits);
  };
  SWFGlyphEntry.prototype.toString = function () {
    return '[SWFGlyphEntry] Index: ' + this.index.toString() + ', Advance: ' + this.advance.toString();
  };
  SWFGlyphEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFGlyphEntry',
    interfaces: []
  };
  function SWFGradient() {
    this.spreadMode = GradientSpreadMode$PAD_getInstance();
    this.interpolationMode = GradientInterpolationMode$NORMAL_getInstance();
    this.focalPoint = 0.0;
    this.records = ArrayList_init_0();
  }
  SWFGradient.prototype.parse_t54z5r$ = function (data, level) {
    data.resetBitsPending();
    this.spreadMode = GradientSpreadMode$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    this.interpolationMode = GradientInterpolationMode$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    var numGradients = data.readUB_za3lpa$(4);
    for (var i = 0; i < numGradients; i++)
      this.records.add_11rb$(data.readGRADIENTRECORD_za3lpa$(level));
  };
  SWFGradient.prototype.toString = function () {
    return '(' + joinToString(this.records, ',') + '), SpreadMode: ' + this.spreadMode + ', InterpolationMode: ' + this.interpolationMode;
  };
  SWFGradient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFGradient',
    interfaces: []
  };
  function SWFGradientRecord() {
    this.ratio = 0;
    this.color = 0;
    this._level_0 = 0;
  }
  SWFGradientRecord.prototype.parse_t54z5r$ = function (data, level) {
    this._level_0 = level;
    this.ratio = data.readUI8();
    this.color = level <= 2 ? data.readRGB() : data.readRGBA();
  };
  SWFGradientRecord.prototype.toString = function () {
    return '[' + toString(this.ratio) + ',' + (this._level_0 <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.color) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.color)) + ']';
  };
  SWFGradientRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFGradientRecord',
    interfaces: []
  };
  function SWFKerningRecord() {
    this.code1 = 0;
    this.code2 = 0;
    this.adjustment = 0;
  }
  SWFKerningRecord.prototype.parse_3qbgso$ = function (data, wideCodes) {
    this.code1 = wideCodes ? data.readUI16() : data.readUI8();
    this.code2 = wideCodes ? data.readUI16() : data.readUI8();
    this.adjustment = data.readSI16();
  };
  SWFKerningRecord.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    return 'Code1: ' + this.code1 + ', Code2: ' + this.code2 + ', Adjustment: ' + this.adjustment;
  };
  SWFKerningRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFKerningRecord',
    interfaces: []
  };
  function SWFLineStyle() {
    this.width = 0;
    this.color = 0;
    this._level = 0;
    this.startCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.endCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.jointStyle = 0;
    this.hasFillFlag = false;
    this.noHScaleFlag = false;
    this.noVScaleFlag = false;
    this.pixelHintingFlag = false;
    this.noClose = false;
    this.miterLimitFactor = 3.0;
    this.fillType = null;
  }
  SWFLineStyle.prototype.parse_t54z5r$$default = function (data, level) {
    this._level = level;
    this.width = data.readUI16();
    this.color = level <= 2 ? data.readRGB() : data.readRGBA();
  };
  SWFLineStyle.prototype.parse_t54z5r$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_t54z5r$$default(data, level);
  };
  SWFLineStyle.prototype.toString = function () {
    return '[SWFLineStyle] Width: ' + this.width + ' Color: ' + (this._level <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.color) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.color));
  };
  SWFLineStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFLineStyle',
    interfaces: []
  };
  function SWFLineStyle2() {
    SWFLineStyle.call(this);
  }
  SWFLineStyle2.prototype.parse_t54z5r$$default = function (data, level) {
    this.width = data.readUI16();
    this.startCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    this.jointStyle = data.readUB_za3lpa$(2);
    this.hasFillFlag = data.readUB_za3lpa$(1) === 1;
    this.noHScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.noVScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.pixelHintingFlag = data.readUB_za3lpa$(1) === 1;
    data.readUB_za3lpa$(5);
    this.noClose = data.readUB_za3lpa$(1) === 1;
    this.endCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    if (this.jointStyle === 2)
      this.miterLimitFactor = data.readFIXED8();
    if (this.hasFillFlag) {
      this.fillType = data.readFILLSTYLE_za3lpa$(level);
    } else {
      this.color = data.readRGBA();
    }
  };
  SWFLineStyle2.prototype.toString = function () {
    var str = '[SWFLineStyle2] Width: ' + toString(this.width) + ', ' + 'StartCaps: ' + toString(this.startCapsStyle) + ', ' + 'EndCaps: ' + toString(this.endCapsStyle) + ', ' + 'Joint: ' + LineJointStyle_getInstance().toString_za3lpa$(this.jointStyle) + ', ';
    if (this.noClose)
      str += 'NoClose, ';
    if (this.noHScaleFlag)
      str += 'NoHScale, ';
    if (this.noVScaleFlag)
      str += 'NoVScale, ';
    if (this.pixelHintingFlag)
      str += 'PixelHinting, ';
    if (this.hasFillFlag) {
      str += 'Fill: ' + toString(this.fillType);
    } else {
      str += 'Color: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.color);
    }
    return str;
  };
  SWFLineStyle2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFLineStyle2',
    interfaces: [SWFLineStyle]
  };
  function SWFMatrix() {
    this.scaleX = 1.0;
    this.scaleY = 1.0;
    this.rotateSkew0 = 0.0;
    this.rotateSkew1 = 0.0;
    this.translateX = 0;
    this.translateY = 0;
    this.xscale = 0.0;
    this.yscale = 0.0;
    this.rotation = 0.0;
  }
  Object.defineProperty(SWFMatrix.prototype, 'matrix', {
    get: function () {
      return new Matrix(this.scaleX, this.rotateSkew0, this.rotateSkew1, this.scaleY, this.translateX / 20.0, this.translateY / 20.0);
    }
  });
  SWFMatrix.prototype.parse_qq6jov$ = function (data) {
    data.resetBitsPending();
    this.scaleX = 1.0;
    this.scaleY = 1.0;
    if (data.readUB_za3lpa$(1) === 1) {
      var scaleBits = data.readUB_za3lpa$(5);
      this.scaleX = data.readFB_za3lpa$(scaleBits);
      this.scaleY = data.readFB_za3lpa$(scaleBits);
    }this.rotateSkew0 = 0.0;
    this.rotateSkew1 = 0.0;
    if (data.readUB_za3lpa$(1) === 1) {
      var rotateBits = data.readUB_za3lpa$(5);
      this.rotateSkew0 = data.readFB_za3lpa$(rotateBits);
      this.rotateSkew1 = data.readFB_za3lpa$(rotateBits);
    }var translateBits = data.readUB_za3lpa$(5);
    this.translateX = data.readSB_za3lpa$(translateBits);
    this.translateY = data.readSB_za3lpa$(translateBits);
    var px = this.matrix.deltaTransformPoint_3qfxs9$(new Point(numberToDouble(0.0), numberToDouble(1.0)));
    var tmp$ = 180 / math.PI;
    var y = get_y(px);
    var x = get_x(px);
    this.rotation = tmp$ * Math_0.atan2(y, x) - 90;
    if (this.rotation < 0)
      this.rotation += 360;
    var x_0 = this.scaleX * this.scaleX + this.rotateSkew0 * this.rotateSkew0;
    this.xscale = Math_0.sqrt(x_0);
    var x_1 = this.rotateSkew1 * this.rotateSkew1 + this.scaleY * this.scaleY;
    this.yscale = Math_0.sqrt(x_1);
  };
  SWFMatrix.prototype.isIdentity = function () {
    return this.scaleX === 1.0 && this.scaleY === 1.0 && this.rotateSkew0 === 0.0 && this.rotateSkew1 === 0.0 && this.translateX === 0 && this.translateY === 0;
  };
  SWFMatrix.prototype.toString = function () {
    return '(' + this.scaleX + ',' + this.rotateSkew0 + ',' + this.rotateSkew1 + ',' + this.scaleY + ',' + this.translateX + ',' + this.translateY + ')';
  };
  SWFMatrix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFMatrix',
    interfaces: []
  };
  function SWFMorphFillStyle() {
    this.type = 0;
    this.startColor = 0;
    this.endColor = 0;
    this.startGradientMatrix_k2hqie$_0 = this.startGradientMatrix_k2hqie$_0;
    this.endGradientMatrix_hygr4f$_0 = this.endGradientMatrix_hygr4f$_0;
    this.gradient = null;
    this.bitmapId = 0;
    this.startBitmapMatrix_hss2s5$_0 = this.startBitmapMatrix_hss2s5$_0;
    this.endBitmapMatrix_ch47ji$_0 = this.endBitmapMatrix_ch47ji$_0;
  }
  Object.defineProperty(SWFMorphFillStyle.prototype, 'startGradientMatrix', {
    get: function () {
      if (this.startGradientMatrix_k2hqie$_0 == null)
        return throwUPAE('startGradientMatrix');
      return this.startGradientMatrix_k2hqie$_0;
    },
    set: function (startGradientMatrix) {
      this.startGradientMatrix_k2hqie$_0 = startGradientMatrix;
    }
  });
  Object.defineProperty(SWFMorphFillStyle.prototype, 'endGradientMatrix', {
    get: function () {
      if (this.endGradientMatrix_hygr4f$_0 == null)
        return throwUPAE('endGradientMatrix');
      return this.endGradientMatrix_hygr4f$_0;
    },
    set: function (endGradientMatrix) {
      this.endGradientMatrix_hygr4f$_0 = endGradientMatrix;
    }
  });
  Object.defineProperty(SWFMorphFillStyle.prototype, 'startBitmapMatrix', {
    get: function () {
      if (this.startBitmapMatrix_hss2s5$_0 == null)
        return throwUPAE('startBitmapMatrix');
      return this.startBitmapMatrix_hss2s5$_0;
    },
    set: function (startBitmapMatrix) {
      this.startBitmapMatrix_hss2s5$_0 = startBitmapMatrix;
    }
  });
  Object.defineProperty(SWFMorphFillStyle.prototype, 'endBitmapMatrix', {
    get: function () {
      if (this.endBitmapMatrix_ch47ji$_0 == null)
        return throwUPAE('endBitmapMatrix');
      return this.endBitmapMatrix_ch47ji$_0;
    },
    set: function (endBitmapMatrix) {
      this.endBitmapMatrix_ch47ji$_0 = endBitmapMatrix;
    }
  });
  SWFMorphFillStyle.prototype.parse_t54z5r$ = function (data, level) {
    if (level === void 0)
      level = 1;
    this.type = data.readUI8();
    switch (this.type) {
      case 0:
        this.startColor = data.readRGBA();
        this.endColor = data.readRGBA();
        break;
      case 16:
      case 18:
      case 19:
        this.startGradientMatrix = data.readMATRIX();
        this.endGradientMatrix = data.readMATRIX();
        this.gradient = this.type === 19 ? data.readMORPHFOCALGRADIENT_za3lpa$(level) : data.readMORPHGRADIENT_za3lpa$(level);
        break;
      case 64:
      case 65:
      case 66:
      case 67:
        this.bitmapId = data.readUI16();
        this.startBitmapMatrix = data.readMATRIX();
        this.endBitmapMatrix = data.readMATRIX();
        break;
      default:throw Error_init('Unknown fill style type: 0x' + toString_0(this.type, 16));
    }
  };
  SWFMorphFillStyle.prototype.getMorphedFillStyle_14dthe$ = function (ratio) {
    var fillStyle = new SWFFillStyle();
    fillStyle.type = this.type;
    switch (this.type) {
      case 0:
        fillStyle.rgb = ColorUtils_getInstance().interpolate_224j3y$(this.startColor, this.endColor, ratio);
        break;
      case 16:
      case 18:
        fillStyle.gradientMatrix = MatrixUtils_getInstance().interpolate_b9vhrm$(this.startGradientMatrix, this.endGradientMatrix, ratio);
        fillStyle.gradient = ensureNotNull(this.gradient).getMorphedGradient_14dthe$(ratio);
        break;
      case 64:
      case 65:
      case 66:
      case 67:
        fillStyle.bitmapId = this.bitmapId;
        fillStyle.bitmapMatrix = MatrixUtils_getInstance().interpolate_b9vhrm$(this.startBitmapMatrix, this.endBitmapMatrix, ratio);
        break;
    }
    return fillStyle;
  };
  SWFMorphFillStyle.prototype.toString = function () {
    var tmp$, tmp$_0;
    tmp$_0 = '[SWFMorphFillStyle] Type: ' + toString_0(this.type, 16);
    switch (this.type) {
      case 0:
        tmp$ = ' (solid), StartColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor) + ', EndColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor);
        break;
      case 16:
        tmp$ = ' (linear gradient), Gradient: ' + toString(this.gradient);
        break;
      case 18:
        tmp$ = ' (radial gradient), Gradient: ' + toString(this.gradient);
        break;
      case 19:
        tmp$ = ' (focal radial gradient), Gradient: ' + toString(this.gradient);
        break;
      case 64:
        tmp$ = ' (repeating bitmap), BitmapID: ' + this.bitmapId;
        break;
      case 65:
        tmp$ = ' (clipped bitmap), BitmapID: ' + this.bitmapId;
        break;
      case 66:
        tmp$ = ' (non-smoothed repeating bitmap), BitmapID: ' + this.bitmapId;
        break;
      case 67:
        tmp$ = ' (non-smoothed clipped bitmap), BitmapID: ' + this.bitmapId;
        break;
      default:tmp$ = '';
        break;
    }
    return tmp$_0 + tmp$;
  };
  SWFMorphFillStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFMorphFillStyle',
    interfaces: []
  };
  function SWFMorphFocalGradient() {
    SWFMorphGradient.call(this);
  }
  SWFMorphFocalGradient.prototype.parse_t54z5r$ = function (data, level) {
    SWFMorphGradient.prototype.parse_t54z5r$.call(this, data, level);
    this.startFocalPoint = data.readFIXED8();
    this.endFocalPoint = data.readFIXED8();
  };
  SWFMorphFocalGradient.prototype.getMorphedGradient_14dthe$$default = function (ratio) {
    var tmp$;
    var gradient = new SWFGradient();
    tmp$ = this.records.size;
    for (var i = 0; i < tmp$; i++) {
      gradient.records.add_11rb$(this.records.get_za3lpa$(i).getMorphedGradientRecord_14dthe$(ratio));
    }
    return gradient;
  };
  SWFMorphFocalGradient.prototype.toString = function () {
    return 'FocalPoint: ' + toString(this.startFocalPoint) + ',' + toString(this.endFocalPoint) + ' (' + joinToString(this.records, ',') + ')';
  };
  SWFMorphFocalGradient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFMorphFocalGradient',
    interfaces: [SWFMorphGradient]
  };
  function SWFMorphGradient() {
    this.spreadMode = 0;
    this.interpolationMode = 0;
    this.startFocalPoint = 0.0;
    this.endFocalPoint = 0.0;
    this.records = ArrayList_init_0();
  }
  SWFMorphGradient.prototype.parse_t54z5r$ = function (data, level) {
    data.resetBitsPending();
    this.spreadMode = data.readUB_za3lpa$(2);
    this.interpolationMode = data.readUB_za3lpa$(2);
    var numGradients = data.readUB_za3lpa$(4);
    for (var i = 0; i < numGradients; i++) {
      this.records.add_11rb$(data.readMORPHGRADIENTRECORD());
    }
  };
  SWFMorphGradient.prototype.getMorphedGradient_14dthe$$default = function (ratio) {
    var tmp$;
    var gradient = new SWFGradient();
    tmp$ = this.records.size;
    for (var i = 0; i < tmp$; i++) {
      gradient.records.add_11rb$(this.records.get_za3lpa$(i).getMorphedGradientRecord_14dthe$(ratio));
    }
    return gradient;
  };
  SWFMorphGradient.prototype.getMorphedGradient_14dthe$ = function (ratio, callback$default) {
    if (ratio === void 0)
      ratio = 0.0;
    return callback$default ? callback$default(ratio) : this.getMorphedGradient_14dthe$$default(ratio);
  };
  SWFMorphGradient.prototype.toString = function () {
    return '(' + joinToString(this.records, ',') + '), spread:' + toString(this.spreadMode) + ', interpolation:' + toString(this.interpolationMode);
  };
  SWFMorphGradient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFMorphGradient',
    interfaces: []
  };
  function SWFMorphGradientRecord() {
    this.startRatio = 0;
    this.startColor = 0;
    this.endRatio = 0;
    this.endColor = 0;
  }
  SWFMorphGradientRecord.prototype.parse_qq6jov$ = function (data) {
    this.startRatio = data.readUI8();
    this.startColor = data.readRGBA();
    this.endRatio = data.readUI8();
    this.endColor = data.readRGBA();
  };
  SWFMorphGradientRecord.prototype.getMorphedGradientRecord_14dthe$ = function (ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var gradientRecord = new SWFGradientRecord();
    gradientRecord.color = ColorUtils_getInstance().interpolate_224j3y$(this.startColor, this.endColor, ratio);
    gradientRecord.ratio = numberToInt(this.startRatio + (this.endRatio - this.startRatio | 0) * ratio);
    return gradientRecord;
  };
  SWFMorphGradientRecord.prototype.toString = function () {
    return '[' + this.startRatio + ',' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor) + ',' + this.endRatio + ',' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor) + ']';
  };
  SWFMorphGradientRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFMorphGradientRecord',
    interfaces: []
  };
  function SWFMorphLineStyle() {
    this.startWidth = 0;
    this.endWidth = 0;
    this.startColor = 0;
    this.endColor = 0;
    this.startCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.endCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.jointStyle = 0;
    this.hasFillFlag = false;
    this.noHScaleFlag = false;
    this.noVScaleFlag = false;
    this.pixelHintingFlag = false;
    this.noClose = false;
    this.miterLimitFactor = 3.0;
    this.fillType = null;
  }
  SWFMorphLineStyle.prototype.parse_t54z5r$$default = function (data, level) {
    this.startWidth = data.readUI16();
    this.endWidth = data.readUI16();
    this.startColor = data.readRGBA();
    this.endColor = data.readRGBA();
  };
  SWFMorphLineStyle.prototype.parse_t54z5r$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_t54z5r$$default(data, level);
  };
  SWFMorphLineStyle.prototype.getMorphedLineStyle_14dthe$ = function (ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var lineStyle = new SWFLineStyle();
    if (this.hasFillFlag) {
      lineStyle.fillType = ensureNotNull(this.fillType).getMorphedFillStyle_14dthe$(ratio);
    } else {
      lineStyle.color = ColorUtils_getInstance().interpolate_224j3y$(this.startColor, this.endColor, ratio);
      lineStyle.width = numberToInt(this.startWidth + (this.endWidth - this.startWidth | 0) * ratio);
    }
    lineStyle.startCapsStyle = this.startCapsStyle;
    lineStyle.endCapsStyle = this.endCapsStyle;
    lineStyle.jointStyle = this.jointStyle;
    lineStyle.hasFillFlag = this.hasFillFlag;
    lineStyle.noHScaleFlag = this.noHScaleFlag;
    lineStyle.noVScaleFlag = this.noVScaleFlag;
    lineStyle.pixelHintingFlag = this.pixelHintingFlag;
    lineStyle.noClose = this.noClose;
    lineStyle.miterLimitFactor = this.miterLimitFactor;
    return lineStyle;
  };
  SWFMorphLineStyle.prototype.toString = function () {
    return '[SWFMorphLineStyle] StartWidth: ' + this.startWidth + ', EndWidth: ' + this.endWidth + ', StartColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor) + ', EndColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor);
  };
  SWFMorphLineStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFMorphLineStyle',
    interfaces: []
  };
  function SWFMorphLineStyle2() {
    SWFMorphLineStyle.call(this);
  }
  SWFMorphLineStyle2.prototype.parse_t54z5r$$default = function (data, level) {
    this.startWidth = data.readUI16();
    this.endWidth = data.readUI16();
    this.startCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    this.jointStyle = data.readUB_za3lpa$(2);
    this.hasFillFlag = data.readUB_za3lpa$(1) === 1;
    this.noHScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.noVScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.pixelHintingFlag = data.readUB_za3lpa$(1) === 1;
    var reserved = data.readUB_za3lpa$(5);
    this.noClose = data.readUB_za3lpa$(1) === 1;
    this.endCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    if (this.jointStyle === 2)
      this.miterLimitFactor = data.readFIXED8();
    if (this.hasFillFlag) {
      this.fillType = data.readMORPHFILLSTYLE_za3lpa$(level);
    } else {
      this.startColor = data.readRGBA();
      this.endColor = data.readRGBA();
    }
  };
  SWFMorphLineStyle2.prototype.toString = function () {
    var str = '[SWFMorphLineStyle2] ' + 'StartWidth: ' + toString(this.startWidth) + ', ' + 'EndWidth: ' + toString(this.endWidth) + ', ' + 'StartCaps: ' + toString(this.startCapsStyle) + ', ' + 'EndCaps: ' + toString(this.endCapsStyle) + ', ' + 'Joint: ' + toString(this.jointStyle);
    if (this.hasFillFlag) {
      str += ', Fill: ' + toString(this.fillType);
    } else {
      str += ', StartColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor);
      str += ', EndColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor);
    }
    return str;
  };
  SWFMorphLineStyle2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFMorphLineStyle2',
    interfaces: [SWFMorphLineStyle]
  };
  function SWFRawTag() {
    this.header_qus9h2$_0 = this.header_qus9h2$_0;
    this.bytes_hp5ti2$_0 = this.bytes_hp5ti2$_0;
  }
  Object.defineProperty(SWFRawTag.prototype, 'header', {
    get: function () {
      if (this.header_qus9h2$_0 == null)
        return throwUPAE('header');
      return this.header_qus9h2$_0;
    },
    set: function (header) {
      this.header_qus9h2$_0 = header;
    }
  });
  Object.defineProperty(SWFRawTag.prototype, 'bytes', {
    get: function () {
      if (this.bytes_hp5ti2$_0 == null)
        return throwUPAE('bytes');
      return this.bytes_hp5ti2$_0;
    },
    set: function (bytes) {
      this.bytes_hp5ti2$_0 = bytes;
    }
  });
  SWFRawTag.prototype.parse_qq6jov$ = function (data) {
    var pos = data.position;
    this.header = data.readTagHeader();
    this.bytes = new SWFData();
    var posContent = data.position;
    data.position = pos;
    this.bytes.writeBytes_fqrh44$(data.readBytes_za3lpa$(this.header.tagLength));
    data.position = posContent;
  };
  SWFRawTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFRawTag',
    interfaces: []
  };
  function SWFRecordHeader(type, contentLength, headerLength) {
    this.type = type;
    this.contentLength = contentLength;
    this.headerLength = headerLength;
  }
  Object.defineProperty(SWFRecordHeader.prototype, 'tagLength', {
    get: function () {
      return this.headerLength + this.contentLength | 0;
    }
  });
  SWFRecordHeader.prototype.toString = function () {
    return '[SWFRecordHeader] type: ' + this.type + ', headerLength: ' + this.headerLength + ', contentlength: ' + this.contentLength;
  };
  SWFRecordHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFRecordHeader',
    interfaces: []
  };
  function SWFRectangle(xmin, xmax, ymin, ymax) {
    if (xmin === void 0)
      xmin = 0;
    if (xmax === void 0)
      xmax = 11000;
    if (ymin === void 0)
      ymin = 0;
    if (ymax === void 0)
      ymax = 8000;
    this.xmin = xmin;
    this.xmax = xmax;
    this.ymin = ymin;
    this.ymax = ymax;
    this._rectangle_0 = Rectangle.Companion.invoke();
  }
  SWFRectangle.prototype.parse_qq6jov$ = function (data) {
    data.resetBitsPending();
    var bits = data.readUB_za3lpa$(5);
    this.xmin = data.readSB_za3lpa$(bits);
    this.xmax = data.readSB_za3lpa$(bits);
    this.ymin = data.readSB_za3lpa$(bits);
    this.ymax = data.readSB_za3lpa$(bits);
  };
  Object.defineProperty(SWFRectangle.prototype, 'rect', {
    get: function () {
      this._rectangle_0.left = NumberUtils_getInstance().roundPixels20_14dthe$(this.xmin / 20);
      this._rectangle_0.right = NumberUtils_getInstance().roundPixels20_14dthe$(this.xmax / 20);
      this._rectangle_0.top = NumberUtils_getInstance().roundPixels20_14dthe$(this.ymin / 20);
      this._rectangle_0.bottom = NumberUtils_getInstance().roundPixels20_14dthe$(this.ymax / 20);
      return this._rectangle_0;
    }
  });
  SWFRectangle.prototype.toString = function () {
    return '(' + this.xmin + ',' + this.xmax + ',' + this.ymin + ',' + this.ymax + ')';
  };
  SWFRectangle.prototype.toStringSize = function () {
    return '(' + toString((this.xmax - this.xmin | 0) / 20) + ',' + toString((this.ymax - this.ymin | 0) / 20) + ')';
  };
  SWFRectangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFRectangle',
    interfaces: []
  };
  function SWFRegisterParam() {
    this.register = 0;
    this.name = null;
  }
  SWFRegisterParam.prototype.parse_qq6jov$ = function (data) {
    this.register = data.readUI8();
    this.name = data.readString();
  };
  SWFRegisterParam.prototype.toString = function () {
    return '$' + this.register + ':' + toString(this.name);
  };
  SWFRegisterParam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFRegisterParam',
    interfaces: []
  };
  function SWFScene(offset, name) {
    this.offset = offset;
    this.name = name;
  }
  SWFScene.prototype.toString = function () {
    return 'Frame: ' + this.offset + ', Name: ' + this.name;
  };
  SWFScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFScene',
    interfaces: []
  };
  function SWFShape(unitDivisor) {
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    this.unitDivisor = unitDivisor;
    this.records = ArrayList_init_0();
    this.fillStyles = ArrayList_init_0();
    this.lineStyles = ArrayList_init_0();
    this.referencePoint = new Point(0, 0);
    this.fillEdgeMaps_n1jxv3$_0 = ArrayList_init_0();
    this.lineEdgeMaps_ht9sow$_0 = ArrayList_init_0();
    this.currentFillEdgeMap_gmoabp$_0 = HashMap_init();
    this.currentLineEdgeMap_j38hiu$_0 = HashMap_init();
    this.numGroups_85sgsu$_0 = 0;
    this.coordMap_h7g6kh$_0 = HashMap_init();
    this.edgeMapsCreated_yvu5p4$_0 = false;
  }
  SWFShape.prototype.parse_t54z5r$$default = function (data, level) {
    data.resetBitsPending();
    var numFillBits = data.readUB_za3lpa$(4);
    var numLineBits = data.readUB_za3lpa$(4);
    this.readShapeRecords_6u77y9$(data, numFillBits, numLineBits, level);
    this.determineReferencePoint();
  };
  SWFShape.prototype.parse_t54z5r$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_t54z5r$$default(data, level);
  };
  SWFShape.prototype.readShapeRecords_6u77y9$ = function (data, _fillBits, _lineBits, level) {
    if (level === void 0)
      level = 1;
    var fillBits = _fillBits;
    var lineBits = _lineBits;
    var shapeRecord = null;
    while (!Kotlin.isType(shapeRecord, SWFShapeRecordEnd)) {
      var edgeRecord = data.readUB_za3lpa$(1) === 1;
      if (edgeRecord) {
        var straightFlag = data.readUB_za3lpa$(1) === 1;
        var numBits = data.readUB_za3lpa$(4) + 2 | 0;
        if (straightFlag) {
          shapeRecord = data.readSTRAIGHTEDGERECORD_za3lpa$(numBits);
        } else {
          shapeRecord = data.readCURVEDEDGERECORD_za3lpa$(numBits);
        }
      } else {
        var states = data.readUB_za3lpa$(5);
        if (states === 0) {
          shapeRecord = SWFShapeRecordEnd_getInstance();
        } else {
          var styleChangeRecord = data.readSTYLECHANGERECORD_tjonv8$(states, fillBits, lineBits, level);
          if (styleChangeRecord.stateNewStyles) {
            fillBits = styleChangeRecord.numFillBits;
            lineBits = styleChangeRecord.numLineBits;
          }shapeRecord = styleChangeRecord;
        }
      }
      this.records.add_11rb$(shapeRecord);
    }
  };
  SWFShape.prototype.determineReferencePoint = function () {
    var tmp$;
    var styleChangeRecord = (tmp$ = this.records.get_za3lpa$(0)) == null || Kotlin.isType(tmp$, SWFShapeRecordStyleChange) ? tmp$ : null;
    if (styleChangeRecord != null && styleChangeRecord.stateMoveTo) {
      this.referencePoint.x = NumberUtils_getInstance().roundPixels400_14dthe$(styleChangeRecord.moveDeltaX / this.unitDivisor);
      this.referencePoint.y = NumberUtils_getInstance().roundPixels400_14dthe$(styleChangeRecord.moveDeltaY / this.unitDivisor);
    }};
  SWFShape.prototype.export_3yzzr9$ = function (_handler) {
    var tmp$;
    var handler = _handler;
    this.edgeMapsCreated_yvu5p4$_0 = false;
    this.createEdgeMaps();
    handler.beginShape();
    tmp$ = this.numGroups_85sgsu$_0;
    for (var i = 0; i < tmp$; i++) {
      this.exportFillPath_ovf5bd$(handler, i);
      this.exportLinePath_ovf5bd$(handler, i);
    }
    handler.endShape();
  };
  SWFShape.prototype.createEdgeMaps = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!this.edgeMapsCreated_yvu5p4$_0) {
      var xPos = 0.0;
      var yPos = 0.0;
      var from;
      var to;
      var control;
      var fillStyleIdxOffset = 0;
      var lineStyleIdxOffset = 0;
      var currentFillStyleIdx0 = 0;
      var currentFillStyleIdx1 = 0;
      var currentLineStyleIdx = 0;
      var subPath = ArrayList_init_0();
      this.numGroups_85sgsu$_0 = 0;
      this.fillEdgeMaps_n1jxv3$_0 = ArrayList_init_0();
      this.lineEdgeMaps_ht9sow$_0 = ArrayList_init_0();
      this.currentFillEdgeMap_gmoabp$_0 = HashMap_init();
      this.currentLineEdgeMap_j38hiu$_0 = HashMap_init();
      tmp$ = this.records.size;
      for (var i = 0; i < tmp$; i++) {
        var shapeRecord = this.records.get_za3lpa$(i);
        switch (shapeRecord.type) {
          case 2:
            var styleChangeRecord = Kotlin.isType(tmp$_0 = shapeRecord, SWFShapeRecordStyleChange) ? tmp$_0 : throwCCE();
            if (styleChangeRecord.stateLineStyle || styleChangeRecord.stateFillStyle0 || styleChangeRecord.stateFillStyle1) {
              this.processSubPath_o2e3de$(subPath, currentLineStyleIdx, currentFillStyleIdx0, currentFillStyleIdx1);
              subPath = ArrayList_init_0();
            }
            if (styleChangeRecord.stateNewStyles) {
              fillStyleIdxOffset = this.fillStyles.size;
              lineStyleIdxOffset = this.lineStyles.size;
              this.fillStyles.addAll_brywnq$(styleChangeRecord.fillStyles);
              this.lineStyles.addAll_brywnq$(styleChangeRecord.lineStyles);
            }
            if (styleChangeRecord.stateLineStyle && styleChangeRecord.lineStyle === 0 && styleChangeRecord.stateFillStyle0 && styleChangeRecord.fillStyle0 === 0 && styleChangeRecord.stateFillStyle1 && styleChangeRecord.fillStyle1 === 0) {
              this.cleanEdgeMap_eco158$(this.currentFillEdgeMap_gmoabp$_0);
              this.cleanEdgeMap_eco158$(this.currentLineEdgeMap_j38hiu$_0);
              this.fillEdgeMaps_n1jxv3$_0.add_11rb$(this.currentFillEdgeMap_gmoabp$_0);
              this.lineEdgeMaps_ht9sow$_0.add_11rb$(this.currentLineEdgeMap_j38hiu$_0);
              this.currentFillEdgeMap_gmoabp$_0 = HashMap_init();
              this.currentLineEdgeMap_j38hiu$_0 = HashMap_init();
              currentLineStyleIdx = 0;
              currentFillStyleIdx0 = 0;
              currentFillStyleIdx1 = 0;
              this.numGroups_85sgsu$_0 = this.numGroups_85sgsu$_0 + 1 | 0;
            } else {
              if (styleChangeRecord.stateLineStyle) {
                currentLineStyleIdx = styleChangeRecord.lineStyle;
                if (currentLineStyleIdx > 0)
                  currentLineStyleIdx = currentLineStyleIdx + lineStyleIdxOffset | 0;
              }if (styleChangeRecord.stateFillStyle0) {
                currentFillStyleIdx0 = styleChangeRecord.fillStyle0;
                if (currentFillStyleIdx0 > 0)
                  currentFillStyleIdx0 = currentFillStyleIdx0 + fillStyleIdxOffset | 0;
              }if (styleChangeRecord.stateFillStyle1) {
                currentFillStyleIdx1 = styleChangeRecord.fillStyle1;
                if (currentFillStyleIdx1 > 0)
                  currentFillStyleIdx1 = currentFillStyleIdx1 + fillStyleIdxOffset | 0;
              }}

            if (styleChangeRecord.stateMoveTo) {
              xPos = styleChangeRecord.moveDeltaX / this.unitDivisor;
              yPos = styleChangeRecord.moveDeltaY / this.unitDivisor;
            }
            break;
          case 3:
            var straightEdgeRecord = Kotlin.isType(tmp$_1 = shapeRecord, SWFShapeRecordStraightEdge) ? tmp$_1 : throwCCE();
            var x = NumberUtils_getInstance().roundPixels400_14dthe$(xPos);
            var y = NumberUtils_getInstance().roundPixels400_14dthe$(yPos);
            from = new Point(numberToDouble(x), numberToDouble(y));
            if (straightEdgeRecord.generalLineFlag) {
              xPos += straightEdgeRecord.deltaX / this.unitDivisor;
              yPos += straightEdgeRecord.deltaY / this.unitDivisor;
            } else {
              if (straightEdgeRecord.vertLineFlag) {
                yPos += straightEdgeRecord.deltaY / this.unitDivisor;
              } else {
                xPos += straightEdgeRecord.deltaX / this.unitDivisor;
              }
            }

            var x_0 = NumberUtils_getInstance().roundPixels400_14dthe$(xPos);
            var y_0 = NumberUtils_getInstance().roundPixels400_14dthe$(yPos);
            to = new Point(numberToDouble(x_0), numberToDouble(y_0));
            subPath.add_11rb$(new StraightEdge(from, to, currentLineStyleIdx, currentFillStyleIdx1));
            break;
          case 4:
            var curvedEdgeRecord = Kotlin.isType(tmp$_2 = shapeRecord, SWFShapeRecordCurvedEdge) ? tmp$_2 : throwCCE();
            var x_1 = NumberUtils_getInstance().roundPixels400_14dthe$(xPos);
            var y_1 = NumberUtils_getInstance().roundPixels400_14dthe$(yPos);
            from = new Point(numberToDouble(x_1), numberToDouble(y_1));
            var xPosControl = xPos + curvedEdgeRecord.controlDeltaX / this.unitDivisor;
            var yPosControl = yPos + curvedEdgeRecord.controlDeltaY / this.unitDivisor;
            xPos = xPosControl + curvedEdgeRecord.anchorDeltaX / this.unitDivisor;
            yPos = yPosControl + curvedEdgeRecord.anchorDeltaY / this.unitDivisor;
            control = new Point(numberToDouble(xPosControl), numberToDouble(yPosControl));
            var x_2 = NumberUtils_getInstance().roundPixels400_14dthe$(xPos);
            var y_2 = NumberUtils_getInstance().roundPixels400_14dthe$(yPos);
            to = new Point(numberToDouble(x_2), numberToDouble(y_2));
            subPath.add_11rb$(new CurvedEdge(from, control, to, currentLineStyleIdx, currentFillStyleIdx1));
            break;
          case 1:
            this.processSubPath_o2e3de$(subPath, currentLineStyleIdx, currentFillStyleIdx0, currentFillStyleIdx1);
            this.cleanEdgeMap_eco158$(this.currentFillEdgeMap_gmoabp$_0);
            this.cleanEdgeMap_eco158$(this.currentLineEdgeMap_j38hiu$_0);
            this.fillEdgeMaps_n1jxv3$_0.add_11rb$(this.currentFillEdgeMap_gmoabp$_0);
            this.lineEdgeMaps_ht9sow$_0.add_11rb$(this.currentLineEdgeMap_j38hiu$_0);
            this.numGroups_85sgsu$_0 = this.numGroups_85sgsu$_0 + 1 | 0;
            break;
        }
      }
      this.edgeMapsCreated_yvu5p4$_0 = true;
    }};
  SWFShape.prototype.processSubPath_o2e3de$ = function (subPath, lineStyleIdx, fillStyleIdx0, fillStyleIdx1) {
    var tmp$;
    if (fillStyleIdx0 !== 0) {
      var path = this.currentFillEdgeMap_gmoabp$_0.get_11rb$(fillStyleIdx0);
      if (path == null) {
        path = ArrayList_init_0();
        var $receiver = this.currentFillEdgeMap_gmoabp$_0;
        var value = path;
        $receiver.put_xwzc9p$(fillStyleIdx0, value);
      }tmp$ = subPath.size;
      for (var _j = 0; _j < tmp$; _j++) {
        var j = subPath.size - 1 - _j | 0;
        path.add_11rb$(subPath.get_za3lpa$(j).reverseWithNewFillStyle_za3lpa$(fillStyleIdx0));
      }
    }if (fillStyleIdx1 !== 0) {
      var path_0 = this.currentFillEdgeMap_gmoabp$_0.get_11rb$(fillStyleIdx1);
      if (path_0 == null) {
        path_0 = ArrayList_init_0();
        var $receiver_0 = this.currentFillEdgeMap_gmoabp$_0;
        var value_0 = path_0;
        $receiver_0.put_xwzc9p$(fillStyleIdx1, value_0);
      }path_0.addAll_brywnq$(subPath);
    }if (lineStyleIdx !== 0) {
      var path_1 = this.currentLineEdgeMap_j38hiu$_0.get_11rb$(lineStyleIdx);
      if (path_1 == null) {
        path_1 = ArrayList_init_0();
        var $receiver_1 = this.currentLineEdgeMap_j38hiu$_0;
        var value_1 = path_1;
        $receiver_1.put_xwzc9p$(lineStyleIdx, value_1);
      }path_1.addAll_brywnq$(subPath);
    }};
  SWFShape.prototype.exportFillPath_ovf5bd$ = function (handler, groupIndex) {
    var tmp$, tmp$_0;
    var path = this.createPathFromEdgeMap_eco158$(this.fillEdgeMaps_n1jxv3$_0.get_za3lpa$(groupIndex));
    var x = 2147483647;
    var y = 2147483647;
    var pos = new Point(numberToDouble(x), numberToDouble(y));
    var fillStyleIdx = 2147483647;
    if (path.size > 0) {
      handler.beginFills();
      tmp$ = path.size;
      for (var i = 0; i < tmp$; i++) {
        var e_0 = path.get_za3lpa$(i);
        if (fillStyleIdx !== e_0.fillStyleIdx) {
          if (fillStyleIdx !== 2147483647)
            handler.endFill();
          fillStyleIdx = e_0.fillStyleIdx;
          var x_0 = 2147483647;
          var y_0 = 2147483647;
          pos = new Point(numberToDouble(x_0), numberToDouble(y_0));
          try {
            var matrix;
            var fillStyle = this.fillStyles.get_za3lpa$(fillStyleIdx - 1 | 0);
            switch (fillStyle.type) {
              case 0:
                handler.beginFill_5wr77w$(ColorUtils_getInstance().rgb_za3lpa$(fillStyle.rgb), ColorUtils_getInstance().alpha_za3lpa$(fillStyle.rgb));
                break;
              case 16:
              case 18:
              case 19:
                var colors = ArrayList_init_0();
                var alphas = ArrayList_init_0();
                var ratios = ArrayList_init_0();
                matrix = ensureNotNull(fillStyle.gradientMatrix).matrix.clone();
                tmp$_0 = ensureNotNull(fillStyle.gradient).records.size;
                for (var gri = 0; gri < tmp$_0; gri++) {
                  var gradientRecord = ensureNotNull(fillStyle.gradient).records.get_za3lpa$(gri);
                  colors.add_11rb$(ColorUtils_getInstance().rgb_za3lpa$(gradientRecord.color));
                  alphas.add_11rb$(ColorUtils_getInstance().alpha_za3lpa$(gradientRecord.color));
                  ratios.add_11rb$(gradientRecord.ratio);
                }

                handler.beginGradientFill_xi6ci6$(fillStyle.type === 16 ? GradientType$LINEAR_getInstance() : GradientType$RADIAL_getInstance(), colors, alphas, ratios, matrix, ensureNotNull(fillStyle.gradient).spreadMode, ensureNotNull(fillStyle.gradient).interpolationMode, ensureNotNull(fillStyle.gradient).focalPoint);
                break;
              case 64:
              case 65:
              case 66:
              case 67:
                var m = ensureNotNull(fillStyle.bitmapMatrix);
                matrix = new Matrix();
                createBox(matrix, m.xscale / 20, m.yscale / 20, m.rotation, m.translateX / 20.0, m.translateY / 20.0);
                handler.beginBitmapFill_o7mpmj$(fillStyle.bitmapId, matrix, fillStyle.type === 64 || fillStyle.type === 66, fillStyle.type === 64 || fillStyle.type === 65);
                break;
            }
          } catch (e) {
            if (Kotlin.isType(e, Error_0)) {
              handler.beginFill_5wr77w$(0);
            } else
              throw e;
          }
        }if (!equals(pos, e_0.from))
          handler.moveTo_lu1900$(get_x(e_0.from), get_y(e_0.from));
        if (Kotlin.isType(e_0, CurvedEdge)) {
          var c = e_0;
          handler.curveTo_6y0v78$(get_x(c.control), get_y(c.control), get_x(c.to), get_y(c.to));
        } else {
          handler.lineTo_lu1900$(get_x(e_0.to), get_y(e_0.to));
        }
        pos = e_0.to;
      }
      if (fillStyleIdx !== 2147483647) {
        handler.endFill();
      }handler.endFills();
    }};
  SWFShape.prototype.exportLinePath_ovf5bd$ = function (handler, groupIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var path = this.createPathFromEdgeMap_eco158$(this.lineEdgeMaps_ht9sow$_0.get_za3lpa$(groupIndex));
    var x = 2147483647;
    var y = 2147483647;
    var pos = new Point(numberToDouble(x), numberToDouble(y));
    var lineStyleIdx = 2147483647;
    if (path.size > 0) {
      handler.beginLines();
      var basePoint = null;
      tmp$ = path.size;
      for (var i = 0; i < tmp$; i++) {
        var e_0 = path.get_za3lpa$(i);
        if (lineStyleIdx !== e_0.lineStyleIdx) {
          lineStyleIdx = e_0.lineStyleIdx;
          var x_0 = 2147483647;
          var y_0 = 2147483647;
          pos = new Point(numberToDouble(x_0), numberToDouble(y_0));
          try {
            tmp$_0 = this.lineStyles.get_za3lpa$(lineStyleIdx - 1 | 0);
          } catch (e) {
            if (Kotlin.isType(e, Error_0)) {
              tmp$_0 = null;
            } else
              throw e;
          }
          var lineStyle = tmp$_0;
          if (lineStyle != null) {
            if (lineStyle.noHScaleFlag && lineStyle.noVScaleFlag)
              tmp$_1 = LineScaleMode.NONE;
            else if (lineStyle.noHScaleFlag)
              tmp$_1 = LineScaleMode.HORIZONTAL;
            else if (lineStyle.noVScaleFlag)
              tmp$_1 = LineScaleMode.VERTICAL;
            else
              tmp$_1 = LineScaleMode.NORMAL;
            var scaleMode = tmp$_1;
            handler.lineStyle_ghxx5s$(lineStyle.width / 20, ColorUtils_getInstance().rgb_za3lpa$(lineStyle.color), ColorUtils_getInstance().alpha_za3lpa$(lineStyle.color), lineStyle.pixelHintingFlag, scaleMode, lineStyle.startCapsStyle, lineStyle.endCapsStyle, LineJointStyle_getInstance().toString_za3lpa$(lineStyle.jointStyle), lineStyle.miterLimitFactor);
            if (lineStyle.hasFillFlag) {
              var fillStyle = ensureNotNull(lineStyle.fillType);
              switch (fillStyle.type) {
                case 16:
                case 18:
                case 19:
                  var colors = ArrayList_init_0();
                  var alphas = ArrayList_init_0();
                  var ratios = ArrayList_init_0();
                  var gradientRecord;
                  var matrix = ensureNotNull(fillStyle.gradientMatrix).matrix.clone();
                  tmp$_2 = ensureNotNull(fillStyle.gradient).records.size;
                  for (var gri = 0; gri < tmp$_2; gri++) {
                    gradientRecord = ensureNotNull(fillStyle.gradient).records.get_za3lpa$(gri);
                    colors.add_11rb$(ColorUtils_getInstance().rgb_za3lpa$(gradientRecord.color));
                    alphas.add_11rb$(ColorUtils_getInstance().alpha_za3lpa$(gradientRecord.color));
                    ratios.add_11rb$(gradientRecord.ratio);
                  }

                  handler.lineGradientStyle_xi6ci6$(fillStyle.type === 16 ? GradientType$LINEAR_getInstance() : GradientType$RADIAL_getInstance(), colors, alphas, ratios, matrix, ensureNotNull(fillStyle.gradient).spreadMode, ensureNotNull(fillStyle.gradient).interpolationMode, ensureNotNull(fillStyle.gradient).focalPoint);
                  break;
              }
            }} else {
            handler.lineStyle_ghxx5s$(0.0);
          }
        }if (!equals(e_0.from, pos)) {
          basePoint = e_0.from;
          handler.moveTo_lu1900$(get_x(e_0.from), get_y(e_0.from));
        }if (Kotlin.isType(e_0, CurvedEdge)) {
          handler.curveTo_6y0v78$(get_x(e_0.control), get_y(e_0.control), get_x(e_0.to), get_y(e_0.to));
        } else {
          handler.lineTo_lu1900$(get_x(e_0.to), get_y(e_0.to));
        }
        if (equals(e_0.to, basePoint)) {
          handler.closePath();
        }pos = e_0.to;
      }
      handler.endLines();
    }};
  SWFShape.prototype.createPathFromEdgeMap_eco158$ = function (edgeMap) {
    var tmp$, tmp$_0, tmp$_1;
    var newPath = ArrayList_init_0();
    var styleIdxArray = ArrayList_init_0();
    tmp$ = edgeMap.keys.iterator();
    while (tmp$.hasNext()) {
      var styleIdx = tmp$.next();
      styleIdxArray.add_11rb$(styleIdx);
    }
    sort(styleIdxArray);
    tmp$_0 = styleIdxArray.size;
    for (var i = 0; i < tmp$_0; i++) {
      newPath.addAll_brywnq$(Kotlin.isType(tmp$_1 = edgeMap.get_11rb$(styleIdxArray.get_za3lpa$(i)), ArrayList) ? tmp$_1 : throwCCE());
    }
    return newPath;
  };
  SWFShape.prototype.cleanEdgeMap_eco158$ = function (edgeMap) {
    var tmp$;
    tmp$ = edgeMap.keys.iterator();
    while (tmp$.hasNext()) {
      var styleIdx = tmp$.next();
      var subPath = edgeMap.get_11rb$(styleIdx);
      if (subPath != null && subPath.size > 0) {
        var prevEdge = null;
        var tmpPath = ArrayList_init_0();
        this.createCoordMap_3n60bk$(subPath);
        while (subPath.size > 0) {
          var idx = 0;
          while (idx < subPath.size) {
            if (prevEdge == null || equals(prevEdge.to, subPath.get_za3lpa$(idx).from)) {
              var edge = subPath.removeAt_za3lpa$(idx);
              tmpPath.add_11rb$(edge);
              this.removeEdgeFromCoordMap_csuu7d$(edge);
              prevEdge = edge;
            } else {
              var edge_0 = this.findNextEdgeInCoordMap_csuu7d$(prevEdge);
              if (edge_0 != null) {
                idx = subPath.indexOf_11rb$(edge_0);
              } else {
                idx = 0;
                prevEdge = null;
              }
            }
          }
        }
        edgeMap.put_xwzc9p$(styleIdx, tmpPath);
      }}
  };
  SWFShape.prototype.createCoordMap_3n60bk$ = function (path) {
    var tmp$;
    this.coordMap_h7g6kh$_0 = HashMap_init();
    tmp$ = path.size;
    for (var i = 0; i < tmp$; i++) {
      var from = path.get_za3lpa$(i).from;
      var key = get_x(from).toString() + '_' + get_y(from);
      var coordMapArray = this.coordMap_h7g6kh$_0.get_11rb$(key);
      if (coordMapArray == null) {
        var $receiver = this.coordMap_h7g6kh$_0;
        var value = arrayListOf([path.get_za3lpa$(i)]);
        $receiver.put_xwzc9p$(key, value);
      } else {
        coordMapArray.add_11rb$(path.get_za3lpa$(i));
      }
    }
  };
  SWFShape.prototype.removeEdgeFromCoordMap_csuu7d$ = function (edge) {
    var key = '' + toString(get_x(edge.from)) + '_' + toString(get_y(edge.from));
    var coordMapArray = this.coordMap_h7g6kh$_0.get_11rb$(key);
    if (coordMapArray != null) {
      if (coordMapArray.size === 1) {
        this.coordMap_h7g6kh$_0.remove_11rb$(key);
      } else {
        var i = coordMapArray.indexOf_11rb$(edge);
        if (i > -1)
          coordMapArray.removeAt_za3lpa$(i);
      }
    }};
  SWFShape.prototype.findNextEdgeInCoordMap_csuu7d$ = function (edge) {
    var coordMapArray = this.coordMap_h7g6kh$_0.get_11rb$(get_x(edge.to).toString() + '_' + get_y(edge.to));
    var tmp$ = coordMapArray != null;
    if (tmp$) {
      tmp$ = !coordMapArray.isEmpty();
    }return tmp$ ? coordMapArray.get_za3lpa$(0) : null;
  };
  SWFShape.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var str = '\n' + repeat(' ', indent) + 'ShapeRecords:';
    tmp$ = this.records.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this.records.get_za3lpa$(i).toString();
    }
    return str;
  };
  SWFShape.prototype.toString_za3lpa$ = function (indent, callback$default) {
    if (indent === void 0)
      indent = 0;
    return callback$default ? callback$default(indent) : this.toString_za3lpa$$default(indent);
  };
  SWFShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShape',
    interfaces: []
  };
  function SWFShapeRecord() {
    SWFShapeRecord$Companion_getInstance();
    this.type_roxy67$_0 = 0;
  }
  function SWFShapeRecord$Companion() {
    SWFShapeRecord$Companion_instance = this;
    this.TYPE_UNKNOWN = 0;
    this.TYPE_END = 1;
    this.TYPE_STYLECHANGE = 2;
    this.TYPE_STRAIGHTEDGE = 3;
    this.TYPE_CURVEDEDGE = 4;
  }
  SWFShapeRecord$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFShapeRecord$Companion_instance = null;
  function SWFShapeRecord$Companion_getInstance() {
    if (SWFShapeRecord$Companion_instance === null) {
      new SWFShapeRecord$Companion();
    }return SWFShapeRecord$Companion_instance;
  }
  Object.defineProperty(SWFShapeRecord.prototype, 'type', {
    get: function () {
      return this.type_roxy67$_0;
    }
  });
  Object.defineProperty(SWFShapeRecord.prototype, 'isEdgeRecord', {
    get: function () {
      return this.type === 3 || this.type === 4;
    }
  });
  SWFShapeRecord.prototype.parse_t54z5r$$default = function (data, level) {
  };
  SWFShapeRecord.prototype.parse_t54z5r$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_t54z5r$$default(data, level);
  };
  SWFShapeRecord.prototype.toString = function () {
    return '[SWFShapeRecord]';
  };
  SWFShapeRecord.prototype.clone = function () {
    return new SWFShapeRecord();
  };
  SWFShapeRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShapeRecord',
    interfaces: []
  };
  function SWFShapeRecordCurvedEdge(numBits, controlDeltaX, controlDeltaY, anchorDeltaX, anchorDeltaY) {
    if (numBits === void 0)
      numBits = 0;
    if (controlDeltaX === void 0)
      controlDeltaX = 0;
    if (controlDeltaY === void 0)
      controlDeltaY = 0;
    if (anchorDeltaX === void 0)
      anchorDeltaX = 0;
    if (anchorDeltaY === void 0)
      anchorDeltaY = 0;
    SWFShapeRecord.call(this);
    this.numBits = numBits;
    this.controlDeltaX = controlDeltaX;
    this.controlDeltaY = controlDeltaY;
    this.anchorDeltaX = anchorDeltaX;
    this.anchorDeltaY = anchorDeltaY;
    this.type_mzjf4h$_0 = 4;
  }
  SWFShapeRecordCurvedEdge.prototype.parse_t54z5r$$default = function (data, level) {
    this.controlDeltaX = data.readSB_za3lpa$(this.numBits);
    this.controlDeltaY = data.readSB_za3lpa$(this.numBits);
    this.anchorDeltaX = data.readSB_za3lpa$(this.numBits);
    this.anchorDeltaY = data.readSB_za3lpa$(this.numBits);
  };
  Object.defineProperty(SWFShapeRecordCurvedEdge.prototype, 'type', {
    get: function () {
      return this.type_mzjf4h$_0;
    }
  });
  SWFShapeRecordCurvedEdge.prototype.toString = function () {
    return '[SWFShapeRecordCurvedEdge] ControlDelta: ' + this.controlDeltaX + ',' + this.controlDeltaY + ', AnchorDelta: ' + this.anchorDeltaX + ',' + this.anchorDeltaY;
  };
  SWFShapeRecordCurvedEdge.prototype.clone = function () {
    return this.copy_4qozqa$();
  };
  SWFShapeRecordCurvedEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShapeRecordCurvedEdge',
    interfaces: [SWFShapeRecord]
  };
  SWFShapeRecordCurvedEdge.prototype.component1 = function () {
    return this.numBits;
  };
  SWFShapeRecordCurvedEdge.prototype.component2 = function () {
    return this.controlDeltaX;
  };
  SWFShapeRecordCurvedEdge.prototype.component3 = function () {
    return this.controlDeltaY;
  };
  SWFShapeRecordCurvedEdge.prototype.component4 = function () {
    return this.anchorDeltaX;
  };
  SWFShapeRecordCurvedEdge.prototype.component5 = function () {
    return this.anchorDeltaY;
  };
  SWFShapeRecordCurvedEdge.prototype.copy_4qozqa$ = function (numBits, controlDeltaX, controlDeltaY, anchorDeltaX, anchorDeltaY) {
    return new SWFShapeRecordCurvedEdge(numBits === void 0 ? this.numBits : numBits, controlDeltaX === void 0 ? this.controlDeltaX : controlDeltaX, controlDeltaY === void 0 ? this.controlDeltaY : controlDeltaY, anchorDeltaX === void 0 ? this.anchorDeltaX : anchorDeltaX, anchorDeltaY === void 0 ? this.anchorDeltaY : anchorDeltaY);
  };
  SWFShapeRecordCurvedEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.numBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.controlDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.controlDeltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.anchorDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.anchorDeltaY) | 0;
    return result;
  };
  SWFShapeRecordCurvedEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.numBits, other.numBits) && Kotlin.equals(this.controlDeltaX, other.controlDeltaX) && Kotlin.equals(this.controlDeltaY, other.controlDeltaY) && Kotlin.equals(this.anchorDeltaX, other.anchorDeltaX) && Kotlin.equals(this.anchorDeltaY, other.anchorDeltaY)))));
  };
  function SWFShapeRecordEnd() {
    SWFShapeRecordEnd_instance = this;
    SWFShapeRecord.call(this);
    this.type_i2lw74$_0 = 1;
  }
  Object.defineProperty(SWFShapeRecordEnd.prototype, 'type', {
    get: function () {
      return this.type_i2lw74$_0;
    }
  });
  SWFShapeRecordEnd.prototype.toString = function () {
    return '[SWFShapeRecordEnd]';
  };
  SWFShapeRecordEnd.prototype.clone = function () {
    return this;
  };
  SWFShapeRecordEnd.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SWFShapeRecordEnd',
    interfaces: [SWFShapeRecord]
  };
  var SWFShapeRecordEnd_instance = null;
  function SWFShapeRecordEnd_getInstance() {
    if (SWFShapeRecordEnd_instance === null) {
      new SWFShapeRecordEnd();
    }return SWFShapeRecordEnd_instance;
  }
  function SWFShapeRecordStraightEdge(numBits, generalLineFlag, vertLineFlag, deltaY, deltaX) {
    if (numBits === void 0)
      numBits = 0;
    if (generalLineFlag === void 0)
      generalLineFlag = false;
    if (vertLineFlag === void 0)
      vertLineFlag = false;
    if (deltaY === void 0)
      deltaY = 0;
    if (deltaX === void 0)
      deltaX = 0;
    SWFShapeRecord.call(this);
    this.numBits = numBits;
    this.generalLineFlag = generalLineFlag;
    this.vertLineFlag = vertLineFlag;
    this.deltaY = deltaY;
    this.deltaX = deltaX;
    this.type_ewm8p6$_0 = 3;
  }
  SWFShapeRecordStraightEdge.prototype.parse_t54z5r$$default = function (data, level) {
    this.generalLineFlag = data.readUB_za3lpa$(1) === 1;
    this.vertLineFlag = !this.generalLineFlag ? data.readUB_za3lpa$(1) === 1 : false;
    this.deltaX = this.generalLineFlag || !this.vertLineFlag ? data.readSB_za3lpa$(this.numBits) : 0;
    this.deltaY = this.generalLineFlag || this.vertLineFlag ? data.readSB_za3lpa$(this.numBits) : 0;
  };
  Object.defineProperty(SWFShapeRecordStraightEdge.prototype, 'type', {
    get: function () {
      return this.type_ewm8p6$_0;
    }
  });
  SWFShapeRecordStraightEdge.prototype.toString = function () {
    var tmp$, tmp$_0;
    var str = '[SWFShapeRecordStraightEdge] ';
    tmp$_0 = str;
    if (this.generalLineFlag)
      tmp$ = 'General: ' + this.deltaX + ',' + this.deltaY;
    else if (this.vertLineFlag)
      tmp$ = 'Vertical: ' + this.deltaY;
    else
      tmp$ = 'Horizontal: ' + this.deltaX;
    str = tmp$_0 + tmp$;
    return str;
  };
  SWFShapeRecordStraightEdge.prototype.clone = function () {
    return this.copy_86ktky$();
  };
  SWFShapeRecordStraightEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShapeRecordStraightEdge',
    interfaces: [SWFShapeRecord]
  };
  SWFShapeRecordStraightEdge.prototype.component1 = function () {
    return this.numBits;
  };
  SWFShapeRecordStraightEdge.prototype.component2 = function () {
    return this.generalLineFlag;
  };
  SWFShapeRecordStraightEdge.prototype.component3 = function () {
    return this.vertLineFlag;
  };
  SWFShapeRecordStraightEdge.prototype.component4 = function () {
    return this.deltaY;
  };
  SWFShapeRecordStraightEdge.prototype.component5 = function () {
    return this.deltaX;
  };
  SWFShapeRecordStraightEdge.prototype.copy_86ktky$ = function (numBits, generalLineFlag, vertLineFlag, deltaY, deltaX) {
    return new SWFShapeRecordStraightEdge(numBits === void 0 ? this.numBits : numBits, generalLineFlag === void 0 ? this.generalLineFlag : generalLineFlag, vertLineFlag === void 0 ? this.vertLineFlag : vertLineFlag, deltaY === void 0 ? this.deltaY : deltaY, deltaX === void 0 ? this.deltaX : deltaX);
  };
  SWFShapeRecordStraightEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.numBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.generalLineFlag) | 0;
    result = result * 31 + Kotlin.hashCode(this.vertLineFlag) | 0;
    result = result * 31 + Kotlin.hashCode(this.deltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.deltaX) | 0;
    return result;
  };
  SWFShapeRecordStraightEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.numBits, other.numBits) && Kotlin.equals(this.generalLineFlag, other.generalLineFlag) && Kotlin.equals(this.vertLineFlag, other.vertLineFlag) && Kotlin.equals(this.deltaY, other.deltaY) && Kotlin.equals(this.deltaX, other.deltaX)))));
  };
  function SWFShapeRecordStyleChange(states, numFillBits, numLineBits, moveDeltaX, moveDeltaY, fillStyle0, fillStyle1, lineStyle, fillStyles, lineStyles) {
    if (states === void 0)
      states = 0;
    if (numFillBits === void 0)
      numFillBits = 0;
    if (numLineBits === void 0)
      numLineBits = 0;
    if (moveDeltaX === void 0)
      moveDeltaX = 0;
    if (moveDeltaY === void 0)
      moveDeltaY = 0;
    if (fillStyle0 === void 0)
      fillStyle0 = 0;
    if (fillStyle1 === void 0)
      fillStyle1 = 0;
    if (lineStyle === void 0)
      lineStyle = 0;
    if (fillStyles === void 0)
      fillStyles = ArrayList_init_0();
    if (lineStyles === void 0)
      lineStyles = ArrayList_init_0();
    SWFShapeRecord.call(this);
    this.states = states;
    this.numFillBits = numFillBits;
    this.numLineBits = numLineBits;
    this.moveDeltaX = moveDeltaX;
    this.moveDeltaY = moveDeltaY;
    this.fillStyle0 = fillStyle0;
    this.fillStyle1 = fillStyle1;
    this.lineStyle = lineStyle;
    this.fillStyles = fillStyles;
    this.lineStyles = lineStyles;
    this.type_6j6giu$_0 = 2;
  }
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateNewStyles', {
    get: function () {
      return (this.states & 16) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateLineStyle', {
    get: function () {
      return (this.states & 8) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateFillStyle1', {
    get: function () {
      return (this.states & 4) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateFillStyle0', {
    get: function () {
      return (this.states & 2) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateMoveTo', {
    get: function () {
      return (this.states & 1) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'type', {
    get: function () {
      return this.type_6j6giu$_0;
    }
  });
  SWFShapeRecordStyleChange.prototype.parse_t54z5r$$default = function (data, level) {
    if (this.stateMoveTo) {
      var moveBits = data.readUB_za3lpa$(5);
      this.moveDeltaX = data.readSB_za3lpa$(moveBits);
      this.moveDeltaY = data.readSB_za3lpa$(moveBits);
    }this.fillStyle0 = this.stateFillStyle0 ? data.readUB_za3lpa$(this.numFillBits) : 0;
    this.fillStyle1 = this.stateFillStyle1 ? data.readUB_za3lpa$(this.numFillBits) : 0;
    this.lineStyle = this.stateLineStyle ? data.readUB_za3lpa$(this.numLineBits) : 0;
    if (this.stateNewStyles) {
      data.resetBitsPending();
      var fillStylesLen = this.readStyleArrayLength_0(data, level);
      for (var i = 0; i < fillStylesLen; i++) {
        this.fillStyles.add_11rb$(data.readFILLSTYLE_za3lpa$(level));
      }
      var lineStylesLen = this.readStyleArrayLength_0(data, level);
      for (var i_0 = 0; i_0 < lineStylesLen; i_0++) {
        this.lineStyles.add_11rb$(level <= 3 ? data.readLINESTYLE_za3lpa$(level) : data.readLINESTYLE2_za3lpa$(level));
      }
      data.resetBitsPending();
      this.numFillBits = data.readUB_za3lpa$(4);
      this.numLineBits = data.readUB_za3lpa$(4);
    }};
  SWFShapeRecordStyleChange.prototype.readStyleArrayLength_0 = function (data, level) {
    if (level === void 0)
      level = 1;
    var len = data.readUI8();
    if (level >= 2 && len === 255) {
      len = data.readUI16();
    }return len;
  };
  SWFShapeRecordStyleChange.prototype.toString = function () {
    var tmp$, tmp$_0;
    var indent = 0;
    var str = '[SWFShapeRecordStyleChange] ';
    var cmds = ArrayList_init_0();
    if (this.stateMoveTo)
      cmds.add_11rb$('MoveTo: ' + this.moveDeltaX + ',' + this.moveDeltaY);
    if (this.stateFillStyle0)
      cmds.add_11rb$('FillStyle0: ' + this.fillStyle0);
    if (this.stateFillStyle1)
      cmds.add_11rb$('FillStyle1: ' + this.fillStyle1);
    if (this.stateLineStyle)
      cmds.add_11rb$('LineStyle: ' + this.lineStyle);
    if (cmds.size > 0)
      str += joinToString(cmds, ', ');
    if (this.stateNewStyles) {
      if (this.fillStyles.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'New FillStyles:';
        tmp$ = this.fillStyles.size;
        for (var i = 0; i < tmp$; i++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i + 1 | 0) + '] ' + this.fillStyles.get_za3lpa$(i).toString();
        }
      }if (this.lineStyles.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'New LineStyles:';
        tmp$_0 = this.lineStyles.size;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_0 + 1 | 0) + '] ' + this.lineStyles.get_za3lpa$(i_0).toString();
        }
      }}return str;
  };
  SWFShapeRecordStyleChange.prototype.clone = function () {
    return this.copy_2kf3j1$();
  };
  SWFShapeRecordStyleChange.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShapeRecordStyleChange',
    interfaces: [SWFShapeRecord]
  };
  SWFShapeRecordStyleChange.prototype.component1 = function () {
    return this.states;
  };
  SWFShapeRecordStyleChange.prototype.component2 = function () {
    return this.numFillBits;
  };
  SWFShapeRecordStyleChange.prototype.component3 = function () {
    return this.numLineBits;
  };
  SWFShapeRecordStyleChange.prototype.component4 = function () {
    return this.moveDeltaX;
  };
  SWFShapeRecordStyleChange.prototype.component5 = function () {
    return this.moveDeltaY;
  };
  SWFShapeRecordStyleChange.prototype.component6 = function () {
    return this.fillStyle0;
  };
  SWFShapeRecordStyleChange.prototype.component7 = function () {
    return this.fillStyle1;
  };
  SWFShapeRecordStyleChange.prototype.component8 = function () {
    return this.lineStyle;
  };
  SWFShapeRecordStyleChange.prototype.component9 = function () {
    return this.fillStyles;
  };
  SWFShapeRecordStyleChange.prototype.component10 = function () {
    return this.lineStyles;
  };
  SWFShapeRecordStyleChange.prototype.copy_2kf3j1$ = function (states, numFillBits, numLineBits, moveDeltaX, moveDeltaY, fillStyle0, fillStyle1, lineStyle, fillStyles, lineStyles) {
    return new SWFShapeRecordStyleChange(states === void 0 ? this.states : states, numFillBits === void 0 ? this.numFillBits : numFillBits, numLineBits === void 0 ? this.numLineBits : numLineBits, moveDeltaX === void 0 ? this.moveDeltaX : moveDeltaX, moveDeltaY === void 0 ? this.moveDeltaY : moveDeltaY, fillStyle0 === void 0 ? this.fillStyle0 : fillStyle0, fillStyle1 === void 0 ? this.fillStyle1 : fillStyle1, lineStyle === void 0 ? this.lineStyle : lineStyle, fillStyles === void 0 ? this.fillStyles : fillStyles, lineStyles === void 0 ? this.lineStyles : lineStyles);
  };
  SWFShapeRecordStyleChange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.numFillBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.numLineBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveDeltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle0) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle1) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyles) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineStyles) | 0;
    return result;
  };
  SWFShapeRecordStyleChange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.states, other.states) && Kotlin.equals(this.numFillBits, other.numFillBits) && Kotlin.equals(this.numLineBits, other.numLineBits) && Kotlin.equals(this.moveDeltaX, other.moveDeltaX) && Kotlin.equals(this.moveDeltaY, other.moveDeltaY) && Kotlin.equals(this.fillStyle0, other.fillStyle0) && Kotlin.equals(this.fillStyle1, other.fillStyle1) && Kotlin.equals(this.lineStyle, other.lineStyle) && Kotlin.equals(this.fillStyles, other.fillStyles) && Kotlin.equals(this.lineStyles, other.lineStyles)))));
  };
  function SWFShapeWithStyle(unitDivisor) {
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    SWFShape.call(this, unitDivisor);
    this.initialFillStyles = ArrayList_init_0();
    this.initialLineStyles = ArrayList_init_0();
  }
  SWFShapeWithStyle.prototype.parse_t54z5r$$default = function (data, level) {
    var tmp$, tmp$_0;
    data.resetBitsPending();
    tmp$ = this.readStyleArrayLength_0(data, level);
    for (var i = 0; i < tmp$; i++)
      this.initialFillStyles.add_11rb$(data.readFILLSTYLE_za3lpa$(level));
    tmp$_0 = this.readStyleArrayLength_0(data, level);
    for (var i_0 = 0; i_0 < tmp$_0; i_0++)
      this.initialLineStyles.add_11rb$(level <= 3 ? data.readLINESTYLE_za3lpa$(level) : data.readLINESTYLE2_za3lpa$(level));
    data.resetBitsPending();
    var numFillBits = data.readUB_za3lpa$(4);
    var numLineBits = data.readUB_za3lpa$(4);
    this.readShapeRecords_6u77y9$(data, numFillBits, numLineBits, level);
  };
  SWFShapeWithStyle.prototype.export_3yzzr9$ = function (_handler) {
    this.fillStyles = ArrayList_init_1(this.initialFillStyles);
    this.lineStyles = ArrayList_init_1(this.initialLineStyles);
    SWFShape.prototype.export_3yzzr9$.call(this, _handler);
  };
  SWFShapeWithStyle.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var str = '';
    if (this.initialFillStyles.size > 0) {
      str += '\n' + repeat(' ', indent) + 'FillStyles:';
      tmp$ = this.initialFillStyles.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i + 1 | 0) + '] ' + this.initialFillStyles.get_za3lpa$(i).toString();
      }
    }if (this.initialLineStyles.size > 0) {
      str += '\n' + repeat(' ', indent) + 'LineStyles:';
      tmp$_0 = this.initialLineStyles.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i_0 + 1 | 0) + '] ' + this.initialLineStyles.get_za3lpa$(i_0).toString();
      }
    }return str + this.toString_za3lpa$(indent, SWFShape.prototype.toString_za3lpa$$default.bind(this));
  };
  SWFShapeWithStyle.prototype.readStyleArrayLength_0 = function (data, level) {
    if (level === void 0)
      level = 1;
    var len = data.readUI8();
    if (level >= 2 && len === 255)
      len = data.readUI16();
    return len;
  };
  SWFShapeWithStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShapeWithStyle',
    interfaces: [SWFShape]
  };
  function SWFSoundEnvelope(pos44, leftLevel, rightLevel) {
    if (pos44 === void 0)
      pos44 = 0;
    if (leftLevel === void 0)
      leftLevel = 0;
    if (rightLevel === void 0)
      rightLevel = 0;
    this.pos44 = pos44;
    this.leftLevel = leftLevel;
    this.rightLevel = rightLevel;
  }
  SWFSoundEnvelope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFSoundEnvelope',
    interfaces: []
  };
  function SWFSoundEnvelope_init(data, $this) {
    $this = $this || Object.create(SWFSoundEnvelope.prototype);
    SWFSoundEnvelope.call($this, data.readUI32(), data.readUI16(), data.readUI16());
    return $this;
  }
  SWFSoundEnvelope.prototype.component1 = function () {
    return this.pos44;
  };
  SWFSoundEnvelope.prototype.component2 = function () {
    return this.leftLevel;
  };
  SWFSoundEnvelope.prototype.component3 = function () {
    return this.rightLevel;
  };
  SWFSoundEnvelope.prototype.copy_qt1dr2$ = function (pos44, leftLevel, rightLevel) {
    return new SWFSoundEnvelope(pos44 === void 0 ? this.pos44 : pos44, leftLevel === void 0 ? this.leftLevel : leftLevel, rightLevel === void 0 ? this.rightLevel : rightLevel);
  };
  SWFSoundEnvelope.prototype.toString = function () {
    return 'SWFSoundEnvelope(pos44=' + Kotlin.toString(this.pos44) + (', leftLevel=' + Kotlin.toString(this.leftLevel)) + (', rightLevel=' + Kotlin.toString(this.rightLevel)) + ')';
  };
  SWFSoundEnvelope.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos44) | 0;
    result = result * 31 + Kotlin.hashCode(this.leftLevel) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightLevel) | 0;
    return result;
  };
  SWFSoundEnvelope.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pos44, other.pos44) && Kotlin.equals(this.leftLevel, other.leftLevel) && Kotlin.equals(this.rightLevel, other.rightLevel)))));
  };
  function SWFSoundInfo() {
    this.syncStop = false;
    this.syncNoMultiple = false;
    this.hasEnvelope = false;
    this.hasLoops = false;
    this.hasOutPoint = false;
    this.hasInPoint = false;
    this.outPoint = 0;
    this.inPoint = 0;
    this.loopCount = 0;
    this.envelopeRecords = ArrayList_init_0();
  }
  SWFSoundInfo.prototype.parse_qq6jov$ = function (data) {
    var flags = data.readUI8();
    this.syncStop = (flags & 32) !== 0;
    this.syncNoMultiple = (flags & 16) !== 0;
    this.hasEnvelope = (flags & 8) !== 0;
    this.hasLoops = (flags & 4) !== 0;
    this.hasOutPoint = (flags & 2) !== 0;
    this.hasInPoint = (flags & 1) !== 0;
    if (this.hasInPoint)
      this.inPoint = data.readUI32();
    if (this.hasOutPoint)
      this.outPoint = data.readUI32();
    if (this.hasLoops)
      this.loopCount = data.readUI16();
    if (this.hasEnvelope) {
      var envPoints = data.readUI8();
      for (var i = 0; i < envPoints; i++)
        this.envelopeRecords.add_11rb$(data.readSOUNDENVELOPE());
    }};
  SWFSoundInfo.prototype.toString = function () {
    return '[SWFSoundInfo]';
  };
  SWFSoundInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFSoundInfo',
    interfaces: []
  };
  function SWFSymbol(tagId, name) {
    if (tagId === void 0)
      tagId = 0;
    if (name === void 0)
      name = null;
    this.tagId = tagId;
    this.name = name;
  }
  SWFSymbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFSymbol',
    interfaces: []
  };
  function SWFSymbol_init(data, $this) {
    $this = $this || Object.create(SWFSymbol.prototype);
    SWFSymbol.call($this, data.readUI16(), data.readString());
    return $this;
  }
  SWFSymbol.prototype.component1 = function () {
    return this.tagId;
  };
  SWFSymbol.prototype.component2 = function () {
    return this.name;
  };
  SWFSymbol.prototype.copy_vqvrqt$ = function (tagId, name) {
    return new SWFSymbol(tagId === void 0 ? this.tagId : tagId, name === void 0 ? this.name : name);
  };
  SWFSymbol.prototype.toString = function () {
    return 'SWFSymbol(tagId=' + Kotlin.toString(this.tagId) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  SWFSymbol.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tagId) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  SWFSymbol.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tagId, other.tagId) && Kotlin.equals(this.name, other.name)))));
  };
  function SWFTextRecord() {
    this.type = 0;
    this.hasFont = false;
    this.hasColor = false;
    this.hasXOffset = false;
    this.hasYOffset = false;
    this.fontId = 0;
    this.textColor = 0;
    this.textHeight = 0;
    this.xOffset = 0;
    this.yOffset = 0;
    this.glyphEntries = ArrayList_init_0();
    this._level_0 = 0;
  }
  SWFTextRecord.prototype.parse_9az7x1$ = function (data, glyphBits, advanceBits, previousRecord, level) {
    if (previousRecord === void 0)
      previousRecord = null;
    if (level === void 0)
      level = 1;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this._level_0 = level;
    var styles = data.readUI8();
    this.type = styles >>> 7;
    this.hasFont = (styles & 8) !== 0;
    this.hasColor = (styles & 4) !== 0;
    this.hasYOffset = (styles & 2) !== 0;
    this.hasXOffset = (styles & 1) !== 0;
    this.fontId = this.hasFont ? data.readUI16() : (tmp$ = previousRecord != null ? previousRecord.fontId : null) != null ? tmp$ : this.fontId;
    this.textColor = this.hasColor ? level < 2 ? data.readRGB() : data.readRGBA() : (tmp$_0 = previousRecord != null ? previousRecord.textColor : null) != null ? tmp$_0 : this.textColor;
    this.xOffset = this.hasXOffset ? data.readSI16() : (tmp$_1 = previousRecord != null ? previousRecord.xOffset : null) != null ? tmp$_1 : this.xOffset;
    this.yOffset = this.hasYOffset ? data.readSI16() : (tmp$_2 = previousRecord != null ? previousRecord.yOffset : null) != null ? tmp$_2 : this.yOffset;
    this.textHeight = this.hasFont ? data.readUI16() : (tmp$_3 = previousRecord != null ? previousRecord.textHeight : null) != null ? tmp$_3 : this.textHeight;
    tmp$_4 = data.readUI8();
    for (var i = 0; i < tmp$_4; i++)
      this.glyphEntries.add_11rb$(data.readGLYPHENTRY_vux9f0$(glyphBits, advanceBits));
  };
  SWFTextRecord.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$;
    var params = arrayListOf(['Glyphs: ' + this.glyphEntries.size.toString()]);
    if (this.hasFont)
      params.add_11rb$('FontID: ' + this.fontId);
    params.add_11rb$('Height: ' + this.textHeight);
    if (this.hasColor)
      params.add_11rb$('Color: ' + (this._level_0 <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.textColor) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.textColor)));
    if (this.hasXOffset)
      params.add_11rb$('XOffset: ' + this.xOffset);
    if (this.hasYOffset)
      params.add_11rb$('YOffset: ' + this.yOffset);
    var str = joinToString(params, ', ');
    tmp$ = this.glyphEntries.size;
    for (var i = 0; i < tmp$; i++)
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this.glyphEntries.get_za3lpa$(i).toString();
    return str;
  };
  SWFTextRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFTextRecord',
    interfaces: []
  };
  function SWFZoneData(alignmentCoordinate, range) {
    this.alignmentCoordinate = alignmentCoordinate;
    this.range = range;
  }
  SWFZoneData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFZoneData',
    interfaces: []
  };
  function SWFZoneData_init(data, $this) {
    $this = $this || Object.create(SWFZoneData.prototype);
    SWFZoneData.call($this, data.readFLOAT16(), data.readFLOAT16());
    return $this;
  }
  SWFZoneData.prototype.component1 = function () {
    return this.alignmentCoordinate;
  };
  SWFZoneData.prototype.component2 = function () {
    return this.range;
  };
  SWFZoneData.prototype.copy_lu1900$ = function (alignmentCoordinate, range) {
    return new SWFZoneData(alignmentCoordinate === void 0 ? this.alignmentCoordinate : alignmentCoordinate, range === void 0 ? this.range : range);
  };
  SWFZoneData.prototype.toString = function () {
    return 'SWFZoneData(alignmentCoordinate=' + Kotlin.toString(this.alignmentCoordinate) + (', range=' + Kotlin.toString(this.range)) + ')';
  };
  SWFZoneData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.alignmentCoordinate) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    return result;
  };
  SWFZoneData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.alignmentCoordinate, other.alignmentCoordinate) && Kotlin.equals(this.range, other.range)))));
  };
  function SWFZoneRecord(zoneData, mask) {
    this.zoneData = zoneData;
    this.mask = mask;
  }
  Object.defineProperty(SWFZoneRecord.prototype, 'maskX', {
    get: function () {
      return (this.mask & 1) !== 0;
    }
  });
  Object.defineProperty(SWFZoneRecord.prototype, 'maskY', {
    get: function () {
      return (this.mask & 2) !== 0;
    }
  });
  SWFZoneRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFZoneRecord',
    interfaces: []
  };
  function SWFZoneRecord_init(data, $this) {
    $this = $this || Object.create(SWFZoneRecord.prototype);
    var $receiver = until(0, data.readUI8());
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(data.readZONEDATA());
    }
    SWFZoneRecord.call($this, destination, data.readUI8());
    return $this;
  }
  function GradientType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientType_initFields() {
    GradientType_initFields = function () {
    };
    GradientType$LINEAR_instance = new GradientType('LINEAR', 0);
    GradientType$RADIAL_instance = new GradientType('RADIAL', 1);
  }
  var GradientType$LINEAR_instance;
  function GradientType$LINEAR_getInstance() {
    GradientType_initFields();
    return GradientType$LINEAR_instance;
  }
  var GradientType$RADIAL_instance;
  function GradientType$RADIAL_getInstance() {
    GradientType_initFields();
    return GradientType$RADIAL_instance;
  }
  GradientType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientType',
    interfaces: [Enum]
  };
  function GradientType$values() {
    return [GradientType$LINEAR_getInstance(), GradientType$RADIAL_getInstance()];
  }
  GradientType.values = GradientType$values;
  function GradientType$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return GradientType$LINEAR_getInstance();
      case 'RADIAL':
        return GradientType$RADIAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.GradientType.' + name);
    }
  }
  GradientType.valueOf_61zpoe$ = GradientType$valueOf;
  function CurvedEdge(aFrom, control, aTo, aLineStyleIdx, aFillStyleIdx) {
    if (aLineStyleIdx === void 0)
      aLineStyleIdx = 0;
    if (aFillStyleIdx === void 0)
      aFillStyleIdx = 0;
    StraightEdge.call(this, aFrom, aTo, aLineStyleIdx, aFillStyleIdx);
    this.control = control;
  }
  CurvedEdge.prototype.reverseWithNewFillStyle_za3lpa$ = function (newFillStyleIdx) {
    return new CurvedEdge(this.to, this.control, this.from, this.lineStyleIdx, newFillStyleIdx);
  };
  CurvedEdge.prototype.toString = function () {
    return 'stroke:' + this.lineStyleIdx + ', fill:' + this.fillStyleIdx + ', start:' + this.from + ', control:' + this.control + ', end:' + this.to;
  };
  CurvedEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CurvedEdge',
    interfaces: [StraightEdge, IEdge]
  };
  function StraightEdge(from, to, lineStyleIdx, fillStyleIdx) {
    if (lineStyleIdx === void 0)
      lineStyleIdx = 0;
    if (fillStyleIdx === void 0)
      fillStyleIdx = 0;
    this.from_fihdje$_0 = from;
    this.to_9yn9xh$_0 = to;
    this.lineStyleIdx_b0jxds$_0 = lineStyleIdx;
    this.fillStyleIdx_g8u2jz$_0 = fillStyleIdx;
  }
  Object.defineProperty(StraightEdge.prototype, 'from', {
    get: function () {
      return this.from_fihdje$_0;
    },
    set: function (from) {
      this.from_fihdje$_0 = from;
    }
  });
  Object.defineProperty(StraightEdge.prototype, 'to', {
    get: function () {
      return this.to_9yn9xh$_0;
    },
    set: function (to) {
      this.to_9yn9xh$_0 = to;
    }
  });
  Object.defineProperty(StraightEdge.prototype, 'lineStyleIdx', {
    get: function () {
      return this.lineStyleIdx_b0jxds$_0;
    },
    set: function (lineStyleIdx) {
      this.lineStyleIdx_b0jxds$_0 = lineStyleIdx;
    }
  });
  Object.defineProperty(StraightEdge.prototype, 'fillStyleIdx', {
    get: function () {
      return this.fillStyleIdx_g8u2jz$_0;
    },
    set: function (fillStyleIdx) {
      this.fillStyleIdx_g8u2jz$_0 = fillStyleIdx;
    }
  });
  StraightEdge.prototype.reverseWithNewFillStyle_za3lpa$ = function (newFillStyleIdx) {
    return new StraightEdge(this.to, this.from, this.lineStyleIdx, newFillStyleIdx);
  };
  StraightEdge.prototype.toString = function () {
    return 'stroke:' + this.lineStyleIdx + ', fill:' + this.fillStyleIdx + ', start:' + this.from + ', end:' + this.to;
  };
  StraightEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StraightEdge',
    interfaces: [IEdge]
  };
  function IEdge() {
  }
  IEdge.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IEdge',
    interfaces: []
  };
  function MPEGFrame(data) {
    MPEGFrame$Companion_getInstance();
    if (data === void 0)
      data = new FlashByteArray();
    this.data = data;
    this.version = 0;
    this.layer = 0;
    this.bitrate = 0;
    this.samplingrate = 0;
    this.padding = false;
    this.channelMode = 0;
    this.channelModeExt = 0;
    this.copyright = false;
    this.original = false;
    this.emphasis = 0;
    this._header = new FlashByteArray();
    this._crc = null;
    this.hasCRC = false;
    this.samples = 1152;
    this._header.writeByte_za3lpa$(0);
    this._header.writeByte_za3lpa$(0);
    this._header.writeByte_za3lpa$(0);
    this._header.writeByte_za3lpa$(0);
    this._crc = new FlashByteArray();
    this._crc.writeByte_za3lpa$(0);
    this._crc.writeByte_za3lpa$(0);
  }
  function MPEGFrame$Companion() {
    MPEGFrame$Companion_instance = this;
    this.MPEG_VERSION_1_0 = 0;
    this.MPEG_VERSION_2_0 = 1;
    this.MPEG_VERSION_2_5 = 2;
    this.MPEG_LAYER_I = 0;
    this.MPEG_LAYER_II = 1;
    this.MPEG_LAYER_III = 2;
    this.CHANNEL_MODE_STEREO = 0;
    this.CHANNEL_MODE_JOINT_STEREO = 1;
    this.CHANNEL_MODE_DUAL = 2;
    this.CHANNEL_MODE_MONO = 3;
    this.mpegBitrates_0 = listOf_0([listOf_0([listOf_0([0, 32, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1]), listOf_0([0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1]), listOf_0([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1])]), listOf_0([listOf_0([0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, -1]), listOf_0([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1]), listOf_0([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1])])]);
    this.mpegSamplingRates_0 = listOf_0([listOf_0([44100, 48000, 32000]), listOf_0([22050, 24000, 16000]), listOf_0([11025, 12000, 8000])]);
  }
  MPEGFrame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MPEGFrame$Companion_instance = null;
  function MPEGFrame$Companion_getInstance() {
    if (MPEGFrame$Companion_instance === null) {
      new MPEGFrame$Companion();
    }return MPEGFrame$Companion_instance;
  }
  Object.defineProperty(MPEGFrame.prototype, 'crc', {
    get: function () {
      this._crc.position = 0;
      return this._crc.readUnsignedShort();
    }
  });
  Object.defineProperty(MPEGFrame.prototype, 'size', {
    get: function () {
      var ret;
      if (this.layer === MPEGFrame$Companion_getInstance().MPEG_LAYER_I) {
        var x = 12000.0 * this.bitrate / this.samplingrate;
        ret = numberToInt(Math_0.floor(x));
        if (this.padding) {
          ret = ret + 1 | 0;
        }ret = ret << 2;
      } else {
        var x_0 = (this.version === MPEGFrame$Companion_getInstance().MPEG_VERSION_1_0 ? 144000.0 : 72000.0) * this.bitrate / this.samplingrate;
        ret = numberToInt(Math_0.floor(x_0));
        if (this.padding) {
          ret = ret + 1 | 0;
        }}
      return ret - 4 - (this.hasCRC ? 2 : 0) | 0;
    }
  });
  MPEGFrame.prototype.setHeaderByteAt_vux9f0$ = function (index, value) {
    switch (index) {
      case 0:
        if (value !== 255)
          throw Error_init('Not a MPEG header.');
        break;
      case 1:
        if ((value & 224) !== 224)
          throw Error_init('Not a MPEG header.');
        var mpegVersionBits = (value & 24) >>> 3;
        switch (mpegVersionBits) {
          case 3:
            this.version = MPEGFrame$Companion_getInstance().MPEG_VERSION_1_0;
            break;
          case 2:
            this.version = MPEGFrame$Companion_getInstance().MPEG_VERSION_2_0;
            break;
          default:throw Error_init('Unsupported MPEG version.');
        }

        var mpegLayerBits = (value & 6) >>> 1;
        if (mpegLayerBits === 1)
          this.layer = MPEGFrame$Companion_getInstance().MPEG_LAYER_III;
        else
          throw Error_init('Unsupported MPEG layer.');
        this.hasCRC = (value & 1) === 0;
        break;
      case 2:
        var bitrateIndex = (value & 240) >>> 4;
        if (bitrateIndex === 0 || bitrateIndex === 15) {
          throw Error_init('Unsupported bitrate index.');
        }
        this.bitrate = MPEGFrame$Companion_getInstance().mpegBitrates_0.get_za3lpa$(this.version).get_za3lpa$(this.layer).get_za3lpa$(bitrateIndex);
        var samplingrateIndex = (value & 12) >>> 2;
        if (samplingrateIndex === 3) {
          throw Error_init('Unsupported samplingrate index.');
        }
        this.samplingrate = MPEGFrame$Companion_getInstance().mpegSamplingRates_0.get_za3lpa$(this.version).get_za3lpa$(samplingrateIndex);
        this.padding = (value & 2) === 2;
        break;
      case 3:
        this.channelMode = (value & 192) >>> 6;
        this.channelModeExt = (value & 48) >>> 4;
        this.copyright = (value & 8) === 8;
        this.original = (value & 4) === 4;
        this.emphasis = value & 2;
        break;
      default:throw Error_init('Index out of bounds.');
    }
    this._header.set_vux9f0$(index, value);
  };
  MPEGFrame.prototype.setCRCByteAt_vux9f0$ = function (index, value) {
    if (index > 1) {
      throw IllegalStateException_init('Index out of bounds.'.toString());
    }this._crc.set_vux9f0$(index, value);
  };
  MPEGFrame.prototype.getFrame = function () {
    var ba = new FlashByteArray();
    ba.writeBytes_rihzz6$(this._header, 0, 4);
    if (this.hasCRC) {
      ba.writeBytes_rihzz6$(this._crc, 0, 2);
    }ba.writeBytes_rihzz6$(this.data);
    return ba;
  };
  MPEGFrame.prototype.toString = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var str = 'MPEG ';
    tmp$_0 = str;
    switch (this.version) {
      case 0:
        tmp$ = '1.0 ';
        break;
      case 1:
        tmp$ = '2.0 ';
        break;
      case 2:
        tmp$ = '2.5 ';
        break;
      default:tmp$ = '?.? ';
        break;
    }
    str = tmp$_0 + tmp$;
    tmp$_2 = str;
    switch (this.layer) {
      case 0:
        tmp$_1 = 'Layer I';
        break;
      case 1:
        tmp$_1 = 'Layer II';
        break;
      case 2:
        tmp$_1 = 'Layer III';
        break;
      default:tmp$_1 = 'Layer ?';
        break;
    }
    str = tmp$_2 + tmp$_1;
    switch (this.channelMode) {
      case 0:
        tmp$_3 = 'Stereo';
        break;
      case 1:
        tmp$_3 = 'Joint stereo';
        break;
      case 2:
        tmp$_3 = 'Dual channel';
        break;
      case 3:
        tmp$_3 = 'Mono';
        break;
      default:tmp$_3 = 'unknown';
        break;
    }
    var channel = tmp$_3;
    return str + ', ' + this.bitrate + ' kbit/s, ' + this.samplingrate + ' Hz, ' + channel + ', ' + this.size + ' bytes';
  };
  MPEGFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MPEGFrame',
    interfaces: []
  };
  function ShapeExporter() {
  }
  ShapeExporter.prototype.beginShape = function () {
  };
  ShapeExporter.prototype.endShape = function () {
  };
  ShapeExporter.prototype.beginFills = function () {
  };
  ShapeExporter.prototype.beginFill_5wr77w$$default = function (color, alpha) {
  };
  ShapeExporter.prototype.beginFill_5wr77w$ = function (color, alpha, callback$default) {
    if (alpha === void 0)
      alpha = 1.0;
    callback$default ? callback$default(color, alpha) : this.beginFill_5wr77w$$default(color, alpha);
  };
  ShapeExporter.prototype.beginGradientFill_xi6ci6$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
  };
  ShapeExporter.prototype.beginGradientFill_xi6ci6$ = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio, callback$default) {
    if (matrix === void 0)
      matrix = new Matrix();
    if (spreadMethod === void 0)
      spreadMethod = GradientSpreadMode$PAD_getInstance();
    if (interpolationMethod === void 0)
      interpolationMethod = GradientInterpolationMode$NORMAL_getInstance();
    if (focalPointRatio === void 0)
      focalPointRatio = 0.0;
    callback$default ? callback$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) : this.beginGradientFill_xi6ci6$$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  ShapeExporter.prototype.beginBitmapFill_o7mpmj$$default = function (bitmapId, matrix, repeat, smooth) {
  };
  ShapeExporter.prototype.beginBitmapFill_o7mpmj$ = function (bitmapId, matrix, repeat, smooth, callback$default) {
    if (matrix === void 0)
      matrix = new Matrix();
    if (repeat === void 0)
      repeat = true;
    if (smooth === void 0)
      smooth = false;
    callback$default ? callback$default(bitmapId, matrix, repeat, smooth) : this.beginBitmapFill_o7mpmj$$default(bitmapId, matrix, repeat, smooth);
  };
  ShapeExporter.prototype.endFill = function () {
  };
  ShapeExporter.prototype.endFills = function () {
  };
  ShapeExporter.prototype.beginLines = function () {
  };
  ShapeExporter.prototype.lineStyle_ghxx5s$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
  };
  ShapeExporter.prototype.lineStyle_ghxx5s$ = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit, callback$default) {
    if (thickness === void 0)
      thickness = kotlin_js_internal_DoubleCompanionObject.NaN;
    if (color === void 0)
      color = 0;
    if (alpha === void 0)
      alpha = 1.0;
    if (pixelHinting === void 0)
      pixelHinting = false;
    if (scaleMode === void 0)
      scaleMode = LineScaleMode.NORMAL;
    if (startCaps === void 0)
      startCaps = LineCapsStyle$ROUND_getInstance();
    if (endCaps === void 0)
      endCaps = LineCapsStyle$ROUND_getInstance();
    if (joints === void 0)
      joints = null;
    if (miterLimit === void 0)
      miterLimit = 3.0;
    callback$default ? callback$default(thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) : this.lineStyle_ghxx5s$$default(thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit);
  };
  ShapeExporter.prototype.lineGradientStyle_xi6ci6$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
  };
  ShapeExporter.prototype.lineGradientStyle_xi6ci6$ = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio, callback$default) {
    if (matrix === void 0)
      matrix = new Matrix();
    if (spreadMethod === void 0)
      spreadMethod = GradientSpreadMode$PAD_getInstance();
    if (interpolationMethod === void 0)
      interpolationMethod = GradientInterpolationMode$NORMAL_getInstance();
    if (focalPointRatio === void 0)
      focalPointRatio = 0.0;
    callback$default ? callback$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) : this.lineGradientStyle_xi6ci6$$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  ShapeExporter.prototype.endLines = function () {
  };
  ShapeExporter.prototype.moveTo_lu1900$ = function (x, y) {
  };
  ShapeExporter.prototype.lineTo_lu1900$ = function (x, y) {
  };
  ShapeExporter.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
  };
  ShapeExporter.prototype.closePath = function () {
  };
  ShapeExporter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeExporter',
    interfaces: []
  };
  function LoggerShapeExporter(parent, logger) {
    if (logger === void 0)
      logger = getCallableRef('println', function (message) {
        return println(message), Unit;
      });
    ShapeExporter.call(this);
    this.parent = parent;
    this.logger = logger;
  }
  LoggerShapeExporter.prototype.log_61zpoe$ = function (msg) {
    this.logger(msg);
    return this;
  };
  LoggerShapeExporter.prototype.beginShape = function () {
    this.log_61zpoe$('beginShape()').parent.beginShape();
  };
  LoggerShapeExporter.prototype.endShape = function () {
    this.log_61zpoe$('endShape()').parent.endShape();
  };
  LoggerShapeExporter.prototype.beginFills = function () {
    this.log_61zpoe$('beginFills()').parent.beginFills();
  };
  LoggerShapeExporter.prototype.endFills = function () {
    this.log_61zpoe$('endFills()').parent.endFills();
  };
  LoggerShapeExporter.prototype.beginLines = function () {
    this.log_61zpoe$('beginLines()').parent.beginLines();
  };
  LoggerShapeExporter.prototype.endLines = function () {
    this.log_61zpoe$('endLines()').parent.endLines();
  };
  LoggerShapeExporter.prototype.closePath = function () {
    this.log_61zpoe$('closePath()').parent.closePath();
  };
  LoggerShapeExporter.prototype.beginFill_5wr77w$$default = function (color, alpha) {
    this.log_61zpoe$('beginFill(' + format('%06X', [color]) + ', ' + alpha + ')').parent.beginFill_5wr77w$(color, alpha);
  };
  LoggerShapeExporter.prototype.beginGradientFill_xi6ci6$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.log_61zpoe$('beginGradientFill(' + type + ', ' + colors + ', ' + alphas + ', ' + ratios + ', ' + matrix + ', ' + spreadMethod + ', ' + interpolationMethod + ', ' + focalPointRatio + ')').parent.beginGradientFill_xi6ci6$(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  LoggerShapeExporter.prototype.beginBitmapFill_o7mpmj$$default = function (bitmapId, matrix, repeat, smooth) {
    this.log_61zpoe$('beginBitmapFill(' + bitmapId + ', ' + matrix + ', ' + repeat + ', ' + smooth + ')').parent.beginBitmapFill_o7mpmj$(bitmapId, matrix, repeat, smooth);
  };
  LoggerShapeExporter.prototype.endFill = function () {
    this.log_61zpoe$('endFill()').parent.endFill();
  };
  LoggerShapeExporter.prototype.lineStyle_ghxx5s$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    this.log_61zpoe$('lineStyle(' + thickness + ', ' + color + ', ' + alpha + ', ' + pixelHinting + ', ' + scaleMode + ', ' + startCaps + ', ' + endCaps + ', ' + toString(joints) + ', ' + miterLimit + ')').parent.lineStyle_ghxx5s$(thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit);
  };
  LoggerShapeExporter.prototype.lineGradientStyle_xi6ci6$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.log_61zpoe$('lineGradientStyle(' + type + ', ' + colors + ', ' + alphas + ', ' + ratios + ', ' + matrix + ', ' + spreadMethod + ', ' + interpolationMethod + ', ' + focalPointRatio + ')').parent.lineGradientStyle_xi6ci6$(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  LoggerShapeExporter.prototype.moveTo_lu1900$ = function (x, y) {
    this.log_61zpoe$('moveTo(' + x + ', ' + y + ')').parent.moveTo_lu1900$(x, y);
  };
  LoggerShapeExporter.prototype.lineTo_lu1900$ = function (x, y) {
    this.log_61zpoe$('lineTo(' + x + ', ' + y + ')').parent.lineTo_lu1900$(x, y);
  };
  LoggerShapeExporter.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
    this.log_61zpoe$('curveTo(' + controlX + ', ' + controlY + ', ' + anchorX + ', ' + anchorY + ')').parent.curveTo_6y0v78$(controlX, controlY, anchorX, anchorY);
  };
  LoggerShapeExporter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggerShapeExporter',
    interfaces: [ShapeExporter]
  };
  function ShapeExporterBoundsBuilder() {
    ShapeExporter.call(this);
    this.bb = new BoundsBuilder();
    this.lineWidth = 1.0;
    this.lastX = 0.0;
    this.lastY = 0.0;
    this.tempRect_0 = Rectangle.Companion.invoke();
  }
  ShapeExporterBoundsBuilder.prototype.lineStyle_ghxx5s$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    this.lineWidth = thickness;
  };
  ShapeExporterBoundsBuilder.prototype.beginFills = function () {
    this.lineWidth = 0.0;
  };
  ShapeExporterBoundsBuilder.prototype.beginLines = function () {
    this.lineWidth = 1.0;
  };
  ShapeExporterBoundsBuilder.prototype.addPoint_0 = function (x, y) {
    this.bb.add_lu1900$(x - this.lineWidth, y - this.lineWidth);
    this.bb.add_lu1900$(x + this.lineWidth, y + this.lineWidth);
  };
  ShapeExporterBoundsBuilder.prototype.addRect_0 = function (rect) {
    this.addPoint_0(rect.left, rect.top);
    this.addPoint_0(rect.right, rect.bottom);
  };
  ShapeExporterBoundsBuilder.prototype.moveTo_lu1900$ = function (x, y) {
    this.addPoint_0(x, y);
    this.lastX = x;
    this.lastY = y;
  };
  ShapeExporterBoundsBuilder.prototype.lineTo_lu1900$ = function (x, y) {
    this.addPoint_0(x, y);
    this.lastX = x;
    this.lastY = y;
  };
  ShapeExporterBoundsBuilder.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
    this.addPoint_0(controlX, controlY);
    this.addPoint_0(anchorX, anchorY);
    this.lastX = anchorX;
    this.lastY = anchorY;
  };
  ShapeExporterBoundsBuilder.prototype.closePath = function () {
  };
  ShapeExporterBoundsBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeExporterBoundsBuilder',
    interfaces: [ShapeExporter]
  };
  function ISWFTagFactory() {
  }
  ISWFTagFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ISWFTagFactory',
    interfaces: []
  };
  function SWFActionFactory() {
    SWFActionFactory_instance = this;
  }
  SWFActionFactory.prototype.create_qt1dr2$ = function (code, length, pos) {
    switch (code) {
      case 4:
        return new ActionNextFrame(code, length, pos);
      case 5:
        return new ActionPreviousFrame(code, length, pos);
      case 6:
        return new ActionPlay(code, length, pos);
      case 7:
        return new ActionStop(code, length, pos);
      case 8:
        return new ActionToggleQuality(code, length, pos);
      case 9:
        return new ActionStopSounds(code, length, pos);
      case 10:
        return new ActionAdd(code, length, pos);
      case 11:
        return new ActionSubtract(code, length, pos);
      case 12:
        return new ActionMultiply(code, length, pos);
      case 13:
        return new ActionDivide(code, length, pos);
      case 14:
        return new ActionEquals(code, length, pos);
      case 15:
        return new ActionLess(code, length, pos);
      case 16:
        return new ActionAnd(code, length, pos);
      case 17:
        return new ActionOr(code, length, pos);
      case 18:
        return new ActionNot(code, length, pos);
      case 19:
        return new ActionStringEquals(code, length, pos);
      case 20:
        return new ActionStringLength(code, length, pos);
      case 21:
        return new ActionStringExtract(code, length, pos);
      case 23:
        return new ActionPop(code, length, pos);
      case 24:
        return new ActionToInteger(code, length, pos);
      case 28:
        return new ActionGetVariable(code, length, pos);
      case 29:
        return new ActionSetVariable(code, length, pos);
      case 32:
        return new ActionSetTarget2(code, length, pos);
      case 33:
        return new ActionStringAdd(code, length, pos);
      case 34:
        return new ActionGetProperty(code, length, pos);
      case 35:
        return new ActionSetProperty(code, length, pos);
      case 36:
        return new ActionCloneSprite(code, length, pos);
      case 37:
        return new ActionRemoveSprite(code, length, pos);
      case 38:
        return new ActionTrace(code, length, pos);
      case 39:
        return new ActionStartDrag(code, length, pos);
      case 40:
        return new ActionEndDrag(code, length, pos);
      case 41:
        return new ActionStringLess(code, length, pos);
      case 42:
        return new ActionThrow(code, length, pos);
      case 43:
        return new ActionCastOp(code, length, pos);
      case 44:
        return new ActionImplementsOp(code, length, pos);
      case 48:
        return new ActionRandomNumber(code, length, pos);
      case 49:
        return new ActionMBStringLength(code, length, pos);
      case 50:
        return new ActionCharToAscii(code, length, pos);
      case 51:
        return new ActionAsciiToChar(code, length, pos);
      case 52:
        return new ActionGetTime(code, length, pos);
      case 53:
        return new ActionMBStringExtract(code, length, pos);
      case 54:
        return new ActionMBCharToAscii(code, length, pos);
      case 55:
        return new ActionMBAsciiToChar(code, length, pos);
      case 58:
        return new ActionDelete(code, length, pos);
      case 59:
        return new ActionDelete2(code, length, pos);
      case 60:
        return new ActionDefineLocal(code, length, pos);
      case 61:
        return new ActionCallFunction(code, length, pos);
      case 62:
        return new ActionReturn(code, length, pos);
      case 63:
        return new ActionModulo(code, length, pos);
      case 64:
        return new ActionNewObject(code, length, pos);
      case 65:
        return new ActionDefineLocal2(code, length, pos);
      case 66:
        return new ActionInitArray(code, length, pos);
      case 67:
        return new ActionInitObject(code, length, pos);
      case 68:
        return new ActionTypeOf(code, length, pos);
      case 69:
        return new ActionTargetPath(code, length, pos);
      case 70:
        return new ActionEnumerate(code, length, pos);
      case 71:
        return new ActionAdd2(code, length, pos);
      case 72:
        return new ActionLess2(code, length, pos);
      case 73:
        return new ActionEquals2(code, length, pos);
      case 74:
        return new ActionToNumber(code, length, pos);
      case 75:
        return new ActionToString(code, length, pos);
      case 76:
        return new ActionPushDuplicate(code, length, pos);
      case 77:
        return new ActionStackSwap(code, length, pos);
      case 78:
        return new ActionGetMember(code, length, pos);
      case 79:
        return new ActionSetMember(code, length, pos);
      case 80:
        return new ActionIncrement(code, length, pos);
      case 81:
        return new ActionDecrement(code, length, pos);
      case 82:
        return new ActionCallMethod(code, length, pos);
      case 83:
        return new ActionNewMethod(code, length, pos);
      case 84:
        return new ActionInstanceOf(code, length, pos);
      case 85:
        return new ActionEnumerate2(code, length, pos);
      case 96:
        return new ActionBitAnd(code, length, pos);
      case 97:
        return new ActionBitOr(code, length, pos);
      case 98:
        return new ActionBitXor(code, length, pos);
      case 99:
        return new ActionBitLShift(code, length, pos);
      case 100:
        return new ActionBitRShift(code, length, pos);
      case 101:
        return new ActionBitURShift(code, length, pos);
      case 102:
        return new ActionStrictEquals(code, length, pos);
      case 103:
        return new ActionGreater(code, length, pos);
      case 104:
        return new ActionStringGreater(code, length, pos);
      case 105:
        return new ActionExtends(code, length, pos);
      case 129:
        return new ActionGotoFrame(code, length, pos);
      case 131:
        return new ActionGetURL(code, length, pos);
      case 135:
        return new ActionStoreRegister(code, length, pos);
      case 136:
        return new ActionConstantPool(code, length, pos);
      case 138:
        return new ActionWaitForFrame(code, length, pos);
      case 139:
        return new ActionSetTarget(code, length, pos);
      case 140:
        return new ActionGotoLabel(code, length, pos);
      case 141:
        return new ActionWaitForFrame2(code, length, pos);
      case 142:
        return new ActionDefineFunction2(code, length, pos);
      case 143:
        return new ActionTry(code, length, pos);
      case 148:
        return new ActionWith(code, length, pos);
      case 150:
        return new ActionPush(code, length, pos);
      case 153:
        return new ActionJump(code, length, pos);
      case 154:
        return new ActionGetURL2(code, length, pos);
      case 155:
        return new ActionDefineFunction(code, length, pos);
      case 157:
        return new ActionIf(code, length, pos);
      case 158:
        return new ActionCall(code, length, pos);
      case 159:
        return new ActionGotoFrame2(code, length, pos);
      default:return new ActionUnknown(code, length, pos);
    }
  };
  SWFActionFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SWFActionFactory',
    interfaces: []
  };
  var SWFActionFactory_instance = null;
  function SWFActionFactory_getInstance() {
    if (SWFActionFactory_instance === null) {
      new SWFActionFactory();
    }return SWFActionFactory_instance;
  }
  function SWFFilterFactory() {
    SWFFilterFactory_instance = this;
  }
  SWFFilterFactory.prototype.create_za3lpa$ = function (id) {
    switch (id) {
      case 0:
        return new FilterDropShadow(id);
      case 1:
        return new FilterBlur(id);
      case 2:
        return new FilterGlow(id);
      case 3:
        return new FilterBevel(id);
      case 4:
        return new FilterGradientGlow(id);
      case 5:
        return new FilterConvolution(id);
      case 6:
        return new FilterColorMatrix(id);
      case 7:
        return new FilterGradientBevel(id);
      default:throw IllegalStateException_init(('Unknown filter ID: ' + id).toString());
    }
  };
  SWFFilterFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SWFFilterFactory',
    interfaces: []
  };
  var SWFFilterFactory_instance = null;
  function SWFFilterFactory_getInstance() {
    if (SWFFilterFactory_instance === null) {
      new SWFFilterFactory();
    }return SWFFilterFactory_instance;
  }
  function SWFTagFactory() {
  }
  SWFTagFactory.prototype.create_za3lpa$ = function (type) {
    switch (type) {
      case 0:
        return new TagEnd();
      case 1:
        return new TagShowFrame();
      case 2:
        return new TagDefineShape();
      case 4:
        return new TagPlaceObject();
      case 5:
        return new TagRemoveObject();
      case 6:
        return new TagDefineBits();
      case 7:
        return new TagDefineButton();
      case 8:
        return new TagJPEGTables();
      case 9:
        return new TagSetBackgroundColor();
      case 10:
        return new TagDefineFont();
      case 11:
        return new TagDefineText();
      case 12:
        return new TagDoAction();
      case 13:
        return new TagDefineFontInfo();
      case 14:
        return new TagDefineSound();
      case 15:
        return new TagStartSound();
      case 17:
        return new TagDefineButtonSound();
      case 18:
        return new TagSoundStreamHead();
      case 19:
        return new TagSoundStreamBlock();
      case 20:
        return new TagDefineBitsLossless();
      case 21:
        return new TagDefineBitsJPEG2();
      case 22:
        return new TagDefineShape2();
      case 23:
        return new TagDefineButtonCxform();
      case 24:
        return new TagProtect();
      case 25:
        return new TagPathsArePostScript();
      case 26:
        return new TagPlaceObject2();
      case 28:
        return new TagRemoveObject2();
      case 32:
        return new TagDefineShape3();
      case 33:
        return new TagDefineText2();
      case 34:
        return new TagDefineButton2();
      case 35:
        return new TagDefineBitsJPEG3();
      case 36:
        return new TagDefineBitsLossless2();
      case 37:
        return new TagDefineEditText();
      case 39:
        return new TagDefineSprite();
      case 40:
        return new TagNameCharacter();
      case 41:
        return new TagProductInfo();
      case 43:
        return new TagFrameLabel();
      case 45:
        return new TagSoundStreamHead2();
      case 46:
        return new TagDefineMorphShape();
      case 48:
        return new TagDefineFont2();
      case 56:
        return new TagExportAssets();
      case 57:
        return new TagImportAssets();
      case 58:
        return new TagEnableDebugger();
      case 59:
        return new TagDoInitAction();
      case 60:
        return new TagDefineVideoStream();
      case 61:
        return new TagVideoFrame();
      case 62:
        return new TagDefineFontInfo2();
      case 63:
        return new TagDebugID();
      case 64:
        return new TagEnableDebugger2();
      case 65:
        return new TagScriptLimits();
      case 66:
        return new TagSetTabIndex();
      case 69:
        return new TagFileAttributes();
      case 70:
        return new TagPlaceObject3();
      case 71:
        return new TagImportAssets2();
      case 72:
        return new TagDoABCDeprecated();
      case 73:
        return new TagDefineFontAlignZones();
      case 74:
        return new TagCSMTextSettings();
      case 75:
        return new TagDefineFont3();
      case 76:
        return new TagSymbolClass();
      case 77:
        return new TagMetadata();
      case 78:
        return new TagDefineScalingGrid();
      case 82:
        return new TagDoABC();
      case 83:
        return new TagDefineShape4();
      case 84:
        return new TagDefineMorphShape2();
      case 86:
        return new TagDefineSceneAndFrameLabelData();
      case 87:
        return new TagDefineBinaryData();
      case 88:
        return new TagDefineFontName();
      case 89:
        return new TagStartSound2();
      case 90:
        return new TagDefineBitsJPEG4();
      case 91:
        return new TagDefineFont4();
      case 93:
        return new TagEnableTelemetry();
      case 94:
        return new TagPlaceObject4();
      case 253:
        return new TagSWFEncryptActions();
      case 255:
        return new TagSWFEncryptSignature();
      default:return new TagUnknown(type);
    }
  };
  SWFTagFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFTagFactory',
    interfaces: [ISWFTagFactory]
  };
  function IFilter() {
  }
  IFilter.prototype.toString_za3lpa$ = function (indent, callback$default) {
    if (indent === void 0)
      indent = 0;
    return callback$default ? callback$default(indent) : this.toString_za3lpa$$default(indent);
  };
  IFilter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IFilter',
    interfaces: []
  };
  function Filter(id) {
    this.id_313sxy$_0 = id;
  }
  Object.defineProperty(Filter.prototype, 'id', {
    get: function () {
      return this.id_313sxy$_0;
    }
  });
  Filter.prototype.parse_qq6jov$ = function (data) {
    throw Error_init('Implement in subclasses!');
  };
  Filter.prototype.toString_za3lpa$$default = function (indent) {
    return '[Filter]';
  };
  Filter.prototype.toString = function () {
    return this.toString_za3lpa$(0);
  };
  Filter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Filter',
    interfaces: [IFilter]
  };
  function FilterType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FilterType_initFields() {
    FilterType_initFields = function () {
    };
    FilterType$FULL_instance = new FilterType('FULL', 0);
    FilterType$INNER_instance = new FilterType('INNER', 1);
    FilterType$OUTER_instance = new FilterType('OUTER', 2);
  }
  var FilterType$FULL_instance;
  function FilterType$FULL_getInstance() {
    FilterType_initFields();
    return FilterType$FULL_instance;
  }
  var FilterType$INNER_instance;
  function FilterType$INNER_getInstance() {
    FilterType_initFields();
    return FilterType$INNER_instance;
  }
  var FilterType$OUTER_instance;
  function FilterType$OUTER_getInstance() {
    FilterType_initFields();
    return FilterType$OUTER_instance;
  }
  FilterType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterType',
    interfaces: [Enum]
  };
  function FilterType$values() {
    return [FilterType$FULL_getInstance(), FilterType$INNER_getInstance(), FilterType$OUTER_getInstance()];
  }
  FilterType.values = FilterType$values;
  function FilterType$valueOf(name) {
    switch (name) {
      case 'FULL':
        return FilterType$FULL_getInstance();
      case 'INNER':
        return FilterType$INNER_getInstance();
      case 'OUTER':
        return FilterType$OUTER_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.FilterType.' + name);
    }
  }
  FilterType.valueOf_61zpoe$ = FilterType$valueOf;
  function FilterBevel(id) {
    Filter.call(this, id);
    this.shadowColor = 0;
    this.highlightColor = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.angle = 0.0;
    this.distance = 0.0;
    this.strength = 0.0;
    this.innerShadow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.onTop = false;
    this.passes = 0;
  }
  Object.defineProperty(FilterBevel.prototype, 'filterType', {
    get: function () {
      return this.onTop ? FilterType$FULL_getInstance() : this.innerShadow ? FilterType$INNER_getInstance() : FilterType$OUTER_getInstance();
    }
  });
  Object.defineProperty(FilterBevel.prototype, 'angleDegrees', {
    get: function () {
      return this.angle * 180 / math.PI;
    }
  });
  FilterBevel.prototype.parse_qq6jov$ = function (data) {
    this.shadowColor = data.readRGBA();
    this.highlightColor = data.readRGBA();
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.angle = data.readFIXED();
    this.distance = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerShadow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.onTop = (flags & 16) !== 0;
    this.passes = flags & 15;
  };
  FilterBevel.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[BevelFilter] ' + 'ShadowColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.shadowColor) + ', ' + 'HighlightColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.highlightColor) + ', ' + 'BlurX: ' + toString(this.blurX) + ', ' + 'BlurY: ' + toString(this.blurY) + ', ' + 'Angle: ' + toString(this.angle) + ', ' + 'Distance: ' + toString(this.distance) + ', ' + 'Strength: ' + toString(this.strength) + ', ' + 'Passes: ' + toString(this.passes);
    var flags = ArrayList_init_0();
    if (this.innerShadow)
      flags.add_11rb$('InnerShadow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (this.onTop)
      flags.add_11rb$('OnTop');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    return str;
  };
  FilterBevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterBevel',
    interfaces: [Filter]
  };
  function FilterBlur(id) {
    Filter.call(this, id);
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.passes = 0;
  }
  FilterBlur.prototype.parse_qq6jov$ = function (data) {
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.passes = data.readUI8() >>> 3;
  };
  FilterBlur.prototype.toString_za3lpa$$default = function (indent) {
    return '[BlurFilter] BlurX: ' + this.blurX + ', BlurY: ' + this.blurY + ', Passes: ' + this.passes;
  };
  FilterBlur.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterBlur',
    interfaces: [Filter]
  };
  function FilterColorMatrix(id) {
    Filter.call(this, id);
    this.colorMatrix = ArrayList_init_0();
  }
  FilterColorMatrix.prototype.parse_qq6jov$ = function (data) {
    for (var i = 0; i < 20; i++) {
      this.colorMatrix.add_11rb$(data.readFLOAT());
    }
  };
  FilterColorMatrix.prototype.toString_za3lpa$$default = function (indent) {
    var si = repeat(' ', indent + 2 | 0);
    return '[ColorMatrixFilter]' + '\n' + si + '[R] ' + toString(this.colorMatrix.get_za3lpa$(0)) + ', ' + toString(this.colorMatrix.get_za3lpa$(1)) + ', ' + toString(this.colorMatrix.get_za3lpa$(2)) + ', ' + toString(this.colorMatrix.get_za3lpa$(3)) + ', ' + toString(this.colorMatrix.get_za3lpa$(4)) + '\n' + si + '[G] ' + toString(this.colorMatrix.get_za3lpa$(5)) + ', ' + toString(this.colorMatrix.get_za3lpa$(6)) + ', ' + toString(this.colorMatrix.get_za3lpa$(7)) + ', ' + toString(this.colorMatrix.get_za3lpa$(8)) + ', ' + toString(this.colorMatrix.get_za3lpa$(9)) + '\n' + si + '[B] ' + toString(this.colorMatrix.get_za3lpa$(10)) + ', ' + toString(this.colorMatrix.get_za3lpa$(11)) + ', ' + toString(this.colorMatrix.get_za3lpa$(12)) + ', ' + toString(this.colorMatrix.get_za3lpa$(13)) + ', ' + toString(this.colorMatrix.get_za3lpa$(14)) + '\n' + si + '[A] ' + toString(this.colorMatrix.get_za3lpa$(15)) + ', ' + toString(this.colorMatrix.get_za3lpa$(16)) + ', ' + toString(this.colorMatrix.get_za3lpa$(17)) + ', ' + toString(this.colorMatrix.get_za3lpa$(18)) + ', ' + toString(this.colorMatrix.get_za3lpa$(19));
  };
  FilterColorMatrix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterColorMatrix',
    interfaces: [Filter]
  };
  function FilterConvolution(id) {
    Filter.call(this, id);
    this.matrixX = 0;
    this.matrixY = 0;
    this.divisor = 0.0;
    this.bias = 0.0;
    this.defaultColor = 0;
    this.clamp = false;
    this.preserveAlpha = false;
    this.matrix = ArrayList_init_0();
  }
  FilterConvolution.prototype.parse_qq6jov$ = function (data) {
    this.matrixX = data.readUI8();
    this.matrixY = data.readUI8();
    this.divisor = data.readFLOAT();
    this.bias = data.readFLOAT();
    var len = Kotlin.imul(this.matrixX, this.matrixY);
    for (var i = 0; i < len; i++) {
      this.matrix.add_11rb$(data.readFLOAT());
    }
    this.defaultColor = data.readRGBA();
    var flags = data.readUI8();
    this.clamp = (flags & 2) !== 0;
    this.preserveAlpha = (flags & 1) !== 0;
  };
  FilterConvolution.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var str = '[ConvolutionFilter] ' + 'DefaultColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.defaultColor) + ', ' + 'Divisor: ' + toString(this.divisor) + ', ' + 'Bias: ' + toString(this.bias);
    var flags = ArrayList_init_0();
    if (this.clamp)
      flags.add_11rb$('Clamp');
    if (this.preserveAlpha)
      flags.add_11rb$('PreserveAlpha');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    if (this.matrix.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Matrix:';
      tmp$ = this.matrixY;
      for (var y = 0; y < tmp$; y++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(y) + ']';
        tmp$_0 = this.matrixX;
        for (var x = 0; x < tmp$_0; x++) {
          str += (x > 0 ? ', ' : ' ') + toString(this.matrix.get_za3lpa$(Kotlin.imul(this.matrixX, y) + x | 0));
        }
      }
    }return str;
  };
  FilterConvolution.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterConvolution',
    interfaces: [Filter, IFilter]
  };
  function FilterDropShadow(id) {
    Filter.call(this, id);
    this.dropShadowColor = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.angle = 0.0;
    this.distance = 0.0;
    this.strength = 0.0;
    this.innerShadow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.passes = 0;
  }
  FilterDropShadow.prototype.parse_qq6jov$ = function (data) {
    this.dropShadowColor = data.readRGBA();
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.angle = data.readFIXED();
    this.distance = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerShadow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.passes = flags & 31;
  };
  FilterDropShadow.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[DropShadowFilter] ' + 'DropShadowColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.dropShadowColor) + ', ' + 'BlurX: ' + toString(this.blurX) + ', ' + 'BlurY: ' + toString(this.blurY) + ', ' + 'Angle: ' + toString(this.angle) + ', ' + 'Distance: ' + toString(this.distance) + ', ' + 'Strength: ' + toString(this.strength) + ', ' + 'Passes: ' + toString(this.passes);
    var flags = ArrayList_init_0();
    if (this.innerShadow)
      flags.add_11rb$('InnerShadow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    return str;
  };
  FilterDropShadow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterDropShadow',
    interfaces: [Filter, IFilter]
  };
  function FilterGlow(id) {
    Filter.call(this, id);
    this.glowColor = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.strength = 0.0;
    this.innerGlow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.passes = 0;
  }
  FilterGlow.prototype.parse_qq6jov$ = function (data) {
    this.glowColor = data.readRGBA();
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerGlow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.passes = flags & 31;
  };
  FilterGlow.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[GlowFilter] ' + 'GlowColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.glowColor) + ', ' + 'BlurX: ' + toString(this.blurX) + ', ' + 'BlurY: ' + toString(this.blurY) + ', ' + 'Strength: ' + toString(this.strength) + ', ' + 'Passes: ' + toString(this.passes);
    var flags = ArrayList_init_0();
    if (this.innerGlow)
      flags.add_11rb$('InnerGlow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    return str;
  };
  FilterGlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterGlow',
    interfaces: [Filter, IFilter]
  };
  function FilterGradientBevel(id) {
    FilterGradientGlow.call(this, id);
    this.filterName_t09v5u$_0 = 'GradientBevelFilter';
  }
  Object.defineProperty(FilterGradientBevel.prototype, 'filterName', {
    get: function () {
      return this.filterName_t09v5u$_0;
    }
  });
  FilterGradientBevel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterGradientBevel',
    interfaces: [FilterGradientGlow, IFilter]
  };
  function FilterGradientGlow(id) {
    Filter.call(this, id);
    this.numColors = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.angle = 0.0;
    this.distance = 0.0;
    this.strength = 0.0;
    this.innerShadow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.onTop = false;
    this.passes = 0;
    this.gradientColors = ArrayList_init_0();
    this.gradientRatios = ArrayList_init_0();
    this.filterName_vfj3d1$_0 = 'GradientGlowFilter';
  }
  FilterGradientGlow.prototype.parse_qq6jov$ = function (data) {
    var tmp$, tmp$_0;
    this.numColors = data.readUI8();
    tmp$ = this.numColors;
    for (var i = 0; i < tmp$; i++) {
      this.gradientColors.add_11rb$(data.readRGBA());
    }
    tmp$_0 = this.numColors;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      this.gradientRatios.add_11rb$(data.readUI8());
    }
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.angle = data.readFIXED();
    this.distance = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerShadow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.onTop = (flags & 16) !== 0;
    this.passes = flags & 15;
  };
  FilterGradientGlow.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var str = '[' + this.filterName + '] BlurX: ' + this.blurX + ', BlurY: ' + this.blurY + ', Angle: ' + this.angle + ', Distance: ' + this.distance + ', Strength: ' + this.strength + ', Passes: ' + this.passes;
    var flags = ArrayList_init_0();
    if (this.innerShadow)
      flags.add_11rb$('InnerShadow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (this.onTop)
      flags.add_11rb$('OnTop');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    if (this.gradientColors.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'GradientColors:';
      tmp$ = this.gradientColors.size;
      for (var i = 0; i < tmp$; i++) {
        str += (i > 0 ? ', ' : ' ') + ColorUtils_getInstance().rgbToString_za3lpa$(this.gradientColors.get_za3lpa$(i));
      }
    }if (this.gradientRatios.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'GradientRatios:';
      tmp$_0 = this.gradientRatios.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += (i_0 > 0 ? ', ' : ' ') + toString(this.gradientRatios.get_za3lpa$(i_0));
      }
    }return str;
  };
  Object.defineProperty(FilterGradientGlow.prototype, 'filterName', {
    get: function () {
      return this.filterName_vfj3d1$_0;
    }
  });
  FilterGradientGlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterGradientGlow',
    interfaces: [Filter, IFilter]
  };
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function ITag() {
  }
  ITag.prototype.parse_mi9vlk$ = function (data, length, version, async, continuation, callback$default) {
    if (async === void 0)
      async = false;
    return callback$default ? callback$default(data, length, version, async, continuation) : this.parse_mi9vlk$$default(data, length, version, async, continuation);
  };
  ITag.prototype.toString_vux9f0$ = function (indent, flags, callback$default) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    return callback$default ? callback$default(indent, flags) : this.toString_vux9f0$$default(indent, flags);
  };
  ITag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ITag',
    interfaces: []
  };
  function _BaseTag() {
  }
  _BaseTag.prototype.toString = function () {
    return this.toString_vux9f0$(0, 0);
  };
  _BaseTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: '_BaseTag',
    interfaces: [ITag]
  };
  function IDefinitionTag() {
  }
  IDefinitionTag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IDefinitionTag',
    interfaces: [ITag]
  };
  function IDisplayListTag() {
  }
  IDisplayListTag.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IDisplayListTag',
    interfaces: [ITag]
  };
  function Tag() {
    Tag$Companion_getInstance();
  }
  function Tag$Companion() {
    Tag$Companion_instance = this;
  }
  Tag$Companion.prototype.toStringCommon_jl0c9m$ = function (type, name, indent) {
    if (indent === void 0)
      indent = 0;
    return repeat(' ', indent) + '[' + format('%02d', [type]) + ':' + name + '] ';
  };
  Tag$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tag$Companion_instance = null;
  function Tag$Companion_getInstance() {
    if (Tag$Companion_instance === null) {
      new Tag$Companion();
    }return Tag$Companion_instance;
  }
  Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: []
  };
  function TagCSMTextSettings() {
    TagCSMTextSettings$Companion_getInstance();
    _BaseTag.call(this);
    this.textId = 0;
    this.useFlashType = 0;
    this.gridFit = 0;
    this.thickness = 0.0;
    this.sharpness = 0.0;
    this.type_1ibuw2$_0 = 74;
    this.name_1elpf5$_0 = 'CSMTextSettings';
    this.version_p42vgg$_0 = 8;
    this.level_sc5g8c$_0 = 1;
  }
  function TagCSMTextSettings$Companion() {
    TagCSMTextSettings$Companion_instance = this;
    this.TYPE = 74;
  }
  TagCSMTextSettings$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagCSMTextSettings$Companion_instance = null;
  function TagCSMTextSettings$Companion_getInstance() {
    if (TagCSMTextSettings$Companion_instance === null) {
      new TagCSMTextSettings$Companion();
    }return TagCSMTextSettings$Companion_instance;
  }
  TagCSMTextSettings.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.textId = data.readUI16();
    this.useFlashType = data.readUB_za3lpa$(2);
    this.gridFit = data.readUB_za3lpa$(3);
    data.readUB_za3lpa$(3);
    this.thickness = data.readFIXED();
    this.sharpness = data.readFIXED();
    data.readUI8();
  };
  Object.defineProperty(TagCSMTextSettings.prototype, 'type', {
    get: function () {
      return this.type_1ibuw2$_0;
    }
  });
  Object.defineProperty(TagCSMTextSettings.prototype, 'name', {
    get: function () {
      return this.name_1elpf5$_0;
    }
  });
  Object.defineProperty(TagCSMTextSettings.prototype, 'version', {
    get: function () {
      return this.version_p42vgg$_0;
    }
  });
  Object.defineProperty(TagCSMTextSettings.prototype, 'level', {
    get: function () {
      return this.level_sc5g8c$_0;
    }
  });
  TagCSMTextSettings.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'TextID: ' + toString(this.textId) + ', ' + 'UseFlashType: ' + toString(this.useFlashType) + ', ' + 'GridFit: ' + toString(this.gridFit) + ', ' + 'Thickness: ' + toString(this.thickness) + ', ' + 'Sharpness: ' + toString(this.sharpness);
  };
  TagCSMTextSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagCSMTextSettings',
    interfaces: [_BaseTag]
  };
  function TagDebugID() {
    TagDebugID$Companion_getInstance();
    _BaseTag.call(this);
    this.uuid_0 = new Int8Array(0);
    this.type_7uagoz$_0 = 63;
    this.name_7qkb82$_0 = 'DebugID';
    this.version_w408fz$_0 = 6;
    this.level_pwf7pv$_0 = 1;
  }
  function TagDebugID$Companion() {
    TagDebugID$Companion_instance = this;
    this.TYPE = 63;
  }
  TagDebugID$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDebugID$Companion_instance = null;
  function TagDebugID$Companion_getInstance() {
    if (TagDebugID$Companion_instance === null) {
      new TagDebugID$Companion();
    }return TagDebugID$Companion_instance;
  }
  TagDebugID.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    if (length > 0)
      this.uuid_0 = readBytes(data.data, length);
  };
  Object.defineProperty(TagDebugID.prototype, 'type', {
    get: function () {
      return this.type_7uagoz$_0;
    }
  });
  Object.defineProperty(TagDebugID.prototype, 'name', {
    get: function () {
      return this.name_7qkb82$_0;
    }
  });
  Object.defineProperty(TagDebugID.prototype, 'version', {
    get: function () {
      return this.version_w408fz$_0;
    }
  });
  Object.defineProperty(TagDebugID.prototype, 'level', {
    get: function () {
      return this.level_pwf7pv$_0;
    }
  });
  TagDebugID.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'UUID: ';
    if (this.uuid_0.length === 16) {
      str += format('%02x%02x%02x%02x-', [this.uuid_0[0], this.uuid_0[1], this.uuid_0[2], this.uuid_0[3]]);
      str += format('%02x%02x-', [this.uuid_0[4], this.uuid_0[5]]);
      str += format('%02x%02x-', [this.uuid_0[6], this.uuid_0[7]]);
      str += format('%02x%02x-', [this.uuid_0[8], this.uuid_0[9]]);
      str += format('%02x%02x%02x%02x%02x%02x', [this.uuid_0[10], this.uuid_0[11], this.uuid_0[12], this.uuid_0[13], this.uuid_0[14], this.uuid_0[15]]);
    } else {
      str += '(invalid length: ' + toString(this.uuid_0.length) + ')';
    }
    return str;
  };
  TagDebugID.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDebugID',
    interfaces: [_BaseTag]
  };
  function TagDefineBinaryData() {
    TagDefineBinaryData$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_8khyqp$_0 = 0;
    this.binaryData = new Int8Array(0);
    this.type_vdisbv$_0 = 87;
    this.name_vh8xss$_0 = 'DefineBinaryData';
    this.version_ydwtpp$_0 = 9;
    this.level_hp5dkx$_0 = 1;
  }
  function TagDefineBinaryData$Companion() {
    TagDefineBinaryData$Companion_instance = this;
    this.TYPE = 87;
  }
  TagDefineBinaryData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBinaryData$Companion_instance = null;
  function TagDefineBinaryData$Companion_getInstance() {
    if (TagDefineBinaryData$Companion_instance === null) {
      new TagDefineBinaryData$Companion();
    }return TagDefineBinaryData$Companion_instance;
  }
  Object.defineProperty(TagDefineBinaryData.prototype, 'characterId', {
    get: function () {
      return this.characterId_8khyqp$_0;
    },
    set: function (characterId) {
      this.characterId_8khyqp$_0 = characterId;
    }
  });
  TagDefineBinaryData.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    data.readUI32();
    if (length > 6)
      this.binaryData = data.readBytes_za3lpa$(length - 6 | 0);
  };
  Object.defineProperty(TagDefineBinaryData.prototype, 'type', {
    get: function () {
      return this.type_vdisbv$_0;
    }
  });
  Object.defineProperty(TagDefineBinaryData.prototype, 'name', {
    get: function () {
      return this.name_vh8xss$_0;
    }
  });
  Object.defineProperty(TagDefineBinaryData.prototype, 'version', {
    get: function () {
      return this.version_ydwtpp$_0;
    }
  });
  Object.defineProperty(TagDefineBinaryData.prototype, 'level', {
    get: function () {
      return this.level_hp5dkx$_0;
    }
  });
  TagDefineBinaryData.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Length: ' + toString(this.binaryData.length);
  };
  TagDefineBinaryData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineBinaryData',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineBits() {
    TagDefineBits$Companion_getInstance();
    _BaseTag.call(this);
    this.bitmapType = 1;
    this.characterId_duzwm$_0 = 0;
    this.bitmapData = new FlashByteArray();
    this.type_dbh8y8$_0 = 6;
    this.name_d7r3hb$_0 = 'DefineBits';
    this.version_hz4g6m$_0 = 1;
    this.level_he2m8q$_0 = 1;
  }
  function TagDefineBits$Companion() {
    TagDefineBits$Companion_instance = this;
    this.TYPE = 6;
  }
  TagDefineBits$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBits$Companion_instance = null;
  function TagDefineBits$Companion_getInstance() {
    if (TagDefineBits$Companion_instance === null) {
      new TagDefineBits$Companion();
    }return TagDefineBits$Companion_instance;
  }
  Object.defineProperty(TagDefineBits.prototype, 'characterId', {
    get: function () {
      return this.characterId_duzwm$_0;
    },
    set: function (characterId) {
      this.characterId_duzwm$_0 = characterId;
    }
  });
  TagDefineBits.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    if (length > 2)
      this.bitmapData = FlashByteArray_init(data.readBytes_za3lpa$(length - 2 | 0));
  };
  Object.defineProperty(TagDefineBits.prototype, 'type', {
    get: function () {
      return this.type_dbh8y8$_0;
    }
  });
  Object.defineProperty(TagDefineBits.prototype, 'name', {
    get: function () {
      return this.name_d7r3hb$_0;
    }
  });
  Object.defineProperty(TagDefineBits.prototype, 'version', {
    get: function () {
      return this.version_hz4g6m$_0;
    }
  });
  Object.defineProperty(TagDefineBits.prototype, 'level', {
    get: function () {
      return this.level_he2m8q$_0;
    }
  });
  TagDefineBits.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'BitmapLength: ' + toString(this.bitmapData.length);
  };
  TagDefineBits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineBits',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineBitsJPEG2() {
    TagDefineBitsJPEG2$Companion_getInstance();
    TagDefineBits.call(this);
    this.type_1exlwe$_0 = 21;
    this.name_1b7gfh$_0 = 'DefineBitsJPEG2';
    this.version_5zd8ec$_0 = this.bitmapType === 1 ? 2 : 8;
    this.level_v9f6y0$_0 = 2;
  }
  function TagDefineBitsJPEG2$Companion() {
    TagDefineBitsJPEG2$Companion_instance = this;
    this.TYPE = 21;
  }
  TagDefineBitsJPEG2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsJPEG2$Companion_instance = null;
  function TagDefineBitsJPEG2$Companion_getInstance() {
    if (TagDefineBitsJPEG2$Companion_instance === null) {
      new TagDefineBitsJPEG2$Companion();
    }return TagDefineBitsJPEG2$Companion_instance;
  }
  function Coroutine$parse_mi9vlk$$default($this, data_0, length_0, version_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$length = length_0;
    this.local$version = version_0;
    this.local$async = async_0;
  }
  Coroutine$parse_mi9vlk$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_mi9vlk$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_mi9vlk$$default.prototype.constructor = Coroutine$parse_mi9vlk$$default;
  Coroutine$parse_mi9vlk$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.parse_mi9vlk$(this.local$data, this.local$length, this.local$version, this.local$async, this, TagDefineBits.prototype.parse_mi9vlk$$default.bind(this.$this));
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.bitmapData.get_za3lpa$(0) === 255 && (this.$this.bitmapData.get_za3lpa$(1) === 216 || this.$this.bitmapData.get_za3lpa$(1) === 217)) {
              this.$this.bitmapType = 1;
            } else if (this.$this.bitmapData.get_za3lpa$(0) === 137 && this.$this.bitmapData.get_za3lpa$(1) === 80 && this.$this.bitmapData.get_za3lpa$(2) === 78 && this.$this.bitmapData.get_za3lpa$(3) === 71 && this.$this.bitmapData.get_za3lpa$(4) === 13 && this.$this.bitmapData.get_za3lpa$(5) === 10 && this.$this.bitmapData.get_za3lpa$(6) === 26 && this.$this.bitmapData.get_za3lpa$(7) === 10) {
              this.$this.bitmapType = 3;
            } else if (this.$this.bitmapData.get_za3lpa$(0) === 71 && this.$this.bitmapData.get_za3lpa$(1) === 73 && this.$this.bitmapData.get_za3lpa$(2) === 70 && this.$this.bitmapData.get_za3lpa$(3) === 56 && this.$this.bitmapData.get_za3lpa$(4) === 57 && this.$this.bitmapData.get_za3lpa$(5) === 97) {
              this.$this.bitmapType = 2;
            }
            return;
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
  TagDefineBitsJPEG2.prototype.parse_mi9vlk$$default = function (data_0, length_0, version_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_mi9vlk$$default(this, data_0, length_0, version_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'type', {
    get: function () {
      return this.type_1exlwe$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'name', {
    get: function () {
      return this.name_1b7gfh$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'version', {
    get: function () {
      return this.version_5zd8ec$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'level', {
    get: function () {
      return this.level_v9f6y0$_0;
    }
  });
  TagDefineBitsJPEG2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Type: ' + BitmapType_getInstance().toString_za3lpa$(this.bitmapType) + ', ' + 'BitmapLength: ' + toString(this.bitmapData.length);
  };
  TagDefineBitsJPEG2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineBitsJPEG2',
    interfaces: [TagDefineBits, IDefinitionTag]
  };
  function TagDefineBitsJPEG3() {
    TagDefineBitsJPEG3$Companion_getInstance();
    TagDefineBitsJPEG2.call(this);
    this.bitmapAlphaData = new FlashByteArray();
    this.type_g3bw4f$_0 = 35;
    this.name_fzlqni$_0 = 'DefineBitsJPEG3';
    this.version_2qd9lv$_0 = this.bitmapType === 1 ? 3 : 8;
    this.level_2fspvt$_0 = 3;
  }
  function TagDefineBitsJPEG3$Companion() {
    TagDefineBitsJPEG3$Companion_instance = this;
    this.TYPE = 35;
  }
  TagDefineBitsJPEG3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsJPEG3$Companion_instance = null;
  function TagDefineBitsJPEG3$Companion_getInstance() {
    if (TagDefineBitsJPEG3$Companion_instance === null) {
      new TagDefineBitsJPEG3$Companion();
    }return TagDefineBitsJPEG3$Companion_instance;
  }
  TagDefineBitsJPEG3.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var alphaDataOffset = data.readUI32();
    this.bitmapData = toFlash(data.readBytes_za3lpa$(alphaDataOffset));
    if (this.bitmapData.get_za3lpa$(0) === 255 && (this.bitmapData.get_za3lpa$(1) === 216 || this.bitmapData.get_za3lpa$(1) === 217)) {
      this.bitmapType = 1;
    } else if (this.bitmapData.get_za3lpa$(0) === 137 && this.bitmapData.get_za3lpa$(1) === 80 && this.bitmapData.get_za3lpa$(2) === 78 && this.bitmapData.get_za3lpa$(3) === 71 && this.bitmapData.get_za3lpa$(4) === 13 && this.bitmapData.get_za3lpa$(5) === 10 && this.bitmapData.get_za3lpa$(6) === 26 && this.bitmapData.get_za3lpa$(7) === 10) {
      this.bitmapType = 3;
    } else if (this.bitmapData.get_za3lpa$(0) === 71 && this.bitmapData.get_za3lpa$(1) === 73 && this.bitmapData.get_za3lpa$(2) === 70 && this.bitmapData.get_za3lpa$(3) === 56 && this.bitmapData.get_za3lpa$(4) === 57 && this.bitmapData.get_za3lpa$(5) === 97) {
      this.bitmapType = 2;
    }var alphaDataSize = length - alphaDataOffset - 6 | 0;
    if (alphaDataSize > 0) {
      this.bitmapAlphaData = toFlash(data.readBytes_za3lpa$(alphaDataSize));
    }};
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'type', {
    get: function () {
      return this.type_g3bw4f$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'name', {
    get: function () {
      return this.name_fzlqni$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'version', {
    get: function () {
      return this.version_2qd9lv$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'level', {
    get: function () {
      return this.level_2fspvt$_0;
    }
  });
  TagDefineBitsJPEG3.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Type: ' + BitmapType_getInstance().toString_za3lpa$(this.bitmapType) + ', ' + 'HasAlphaData: ' + toString(this.bitmapAlphaData.length > 0) + ', ' + (this.bitmapAlphaData.length > 0 ? 'BitmapAlphaLength: ' + toString(this.bitmapAlphaData.length) + ', ' : '') + 'BitmapLength: ' + toString(this.bitmapData.length);
  };
  TagDefineBitsJPEG3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineBitsJPEG3',
    interfaces: [TagDefineBitsJPEG2, IDefinitionTag]
  };
  function TagDefineBitsJPEG4() {
    TagDefineBitsJPEG4$Companion_getInstance();
    TagDefineBitsJPEG3.call(this);
    this.deblockParam = 0.0;
    this.type_urq6cg$_0 = 90;
    this.name_uo00vj$_0 = 'DefineBitsJPEG4';
    this.version_imp6m$_0 = 10;
    this.level_qdtr6e$_0 = 4;
  }
  function TagDefineBitsJPEG4$Companion() {
    TagDefineBitsJPEG4$Companion_instance = this;
    this.TYPE = 90;
  }
  TagDefineBitsJPEG4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsJPEG4$Companion_instance = null;
  function TagDefineBitsJPEG4$Companion_getInstance() {
    if (TagDefineBitsJPEG4$Companion_instance === null) {
      new TagDefineBitsJPEG4$Companion();
    }return TagDefineBitsJPEG4$Companion_instance;
  }
  TagDefineBitsJPEG4.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var alphaDataOffset = data.readUI32();
    this.deblockParam = data.readFIXED8();
    this.bitmapData = toFlash(data.readBytes_za3lpa$(alphaDataOffset));
    if (this.bitmapData.get_za3lpa$(0) === 255 && (this.bitmapData.get_za3lpa$(1) === 216 || this.bitmapData.get_za3lpa$(1) === 217)) {
      this.bitmapType = 1;
    } else if (this.bitmapData.get_za3lpa$(0) === 137 && this.bitmapData.get_za3lpa$(1) === 80 && this.bitmapData.get_za3lpa$(2) === 78 && this.bitmapData.get_za3lpa$(3) === 71 && this.bitmapData.get_za3lpa$(4) === 13 && this.bitmapData.get_za3lpa$(5) === 10 && this.bitmapData.get_za3lpa$(6) === 26 && this.bitmapData.get_za3lpa$(7) === 10) {
      this.bitmapType = 3;
    } else if (this.bitmapData.get_za3lpa$(0) === 71 && this.bitmapData.get_za3lpa$(1) === 73 && this.bitmapData.get_za3lpa$(2) === 70 && this.bitmapData.get_za3lpa$(3) === 56 && this.bitmapData.get_za3lpa$(4) === 57 && this.bitmapData.get_za3lpa$(5) === 97) {
      this.bitmapType = 2;
    }var alphaDataSize = length - alphaDataOffset - 6 | 0;
    if (alphaDataSize > 0) {
      this.bitmapAlphaData = toFlash(data.readBytes_za3lpa$(alphaDataSize));
    }};
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'type', {
    get: function () {
      return this.type_urq6cg$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'name', {
    get: function () {
      return this.name_uo00vj$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'version', {
    get: function () {
      return this.version_imp6m$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'level', {
    get: function () {
      return this.level_qdtr6e$_0;
    }
  });
  TagDefineBitsJPEG4.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + this.characterId + ', Type: ' + BitmapType_getInstance().toString_za3lpa$(this.bitmapType) + ', DeblockParam: ' + this.deblockParam + ', HasAlphaData: ' + (this.bitmapAlphaData.length > 0) + ', ' + (this.bitmapAlphaData.length > 0 ? 'BitmapAlphaLength: ' + toString(this.bitmapAlphaData.length) + ', ' : '') + 'BitmapLength: ' + this.bitmapData.length;
  };
  TagDefineBitsJPEG4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineBitsJPEG4',
    interfaces: [TagDefineBitsJPEG3, IDefinitionTag]
  };
  function TagDefineBitsLossless() {
    TagDefineBitsLossless$Companion_getInstance();
    _BaseTag.call(this);
    this.hasAlpha_w19oqq$_0 = false;
    this.bitmapFormat = BitmapFormat$UNKNOWN_getInstance();
    this.bitmapWidth = 0;
    this.bitmapHeight = 0;
    this.bitmapColorTableSizeM1 = 0;
    this.characterId_54i1sm$_0 = 0;
    this.zlibBitmapData = new FlashByteArray();
    this.type_92wxd8$_0 = 20;
    this.name_8z6rwb$_0 = 'DefineBitsLossless';
    this.version_nmbkty$_0 = 2;
    this.level_6pchdi$_0 = 1;
  }
  function TagDefineBitsLossless$Companion() {
    TagDefineBitsLossless$Companion_instance = this;
    this.TYPE = 20;
  }
  TagDefineBitsLossless$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsLossless$Companion_instance = null;
  function TagDefineBitsLossless$Companion_getInstance() {
    if (TagDefineBitsLossless$Companion_instance === null) {
      new TagDefineBitsLossless$Companion();
    }return TagDefineBitsLossless$Companion_instance;
  }
  Object.defineProperty(TagDefineBitsLossless.prototype, 'hasAlpha', {
    get: function () {
      return this.hasAlpha_w19oqq$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'bitmapColorTableSize', {
    get: function () {
      return this.bitmapColorTableSizeM1 + 1 | 0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'bytesPerPixel', {
    get: function () {
      switch (this.bitmapFormat.name) {
        case 'BIT_8':
          return 1;
        case 'BIT_15':
          return 2;
        case 'BIT_24_32':
          return 4;
        case 'UNKNOWN':
          return 1;
        default:return Kotlin.noWhenBranchMatched();
      }
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'alignment', {
    get: function () {
      switch (this.bitmapFormat.name) {
        case 'BIT_8':
          return 4;
        case 'BIT_15':
          return 2;
        case 'BIT_24_32':
          return 1;
        case 'UNKNOWN':
          return 1;
        default:return Kotlin.noWhenBranchMatched();
      }
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'actualWidth', {
    get: function () {
      return nextAlignedTo(this.bitmapWidth, this.alignment);
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'actualHeight', {
    get: function () {
      return nextAlignedTo(this.bitmapHeight, this.alignment);
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'characterId', {
    get: function () {
      return this.characterId_54i1sm$_0;
    },
    set: function (characterId) {
      this.characterId_54i1sm$_0 = characterId;
    }
  });
  TagDefineBitsLossless.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var rawFormat = data.readUI8();
    this.bitmapFormat = BitmapFormat$Companion_getInstance().get_za3lpa$(rawFormat);
    this.bitmapWidth = data.readUI16();
    this.bitmapHeight = data.readUI16();
    if (this.bitmapFormat === BitmapFormat$BIT_8_getInstance())
      this.bitmapColorTableSizeM1 = data.readUI8();
    this.zlibBitmapData = toFlash(data.readBytes_za3lpa$(length - (this.bitmapFormat === BitmapFormat$BIT_8_getInstance() ? 8 : 7) | 0));
  };
  Object.defineProperty(TagDefineBitsLossless.prototype, 'type', {
    get: function () {
      return this.type_92wxd8$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'name', {
    get: function () {
      return this.name_8z6rwb$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'version', {
    get: function () {
      return this.version_nmbkty$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'level', {
    get: function () {
      return this.level_6pchdi$_0;
    }
  });
  TagDefineBitsLossless.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + this.characterId + ', Format: ' + this.bitmapFormat + ', Size: (' + this.bitmapWidth + ',' + this.bitmapHeight + ')';
  };
  TagDefineBitsLossless.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineBitsLossless',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineBitsLossless2() {
    TagDefineBitsLossless2$Companion_getInstance();
    TagDefineBitsLossless.call(this);
    this.hasAlpha_hc07nk$_0 = true;
    this.type_mvr4x6$_0 = 36;
    this.name_ms0zg9$_0 = 'DefineBitsLossless2';
    this.version_q38wnc$_0 = 3;
    this.level_520b1w$_0 = 2;
  }
  function TagDefineBitsLossless2$Companion() {
    TagDefineBitsLossless2$Companion_instance = this;
    this.TYPE = 36;
  }
  TagDefineBitsLossless2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsLossless2$Companion_instance = null;
  function TagDefineBitsLossless2$Companion_getInstance() {
    if (TagDefineBitsLossless2$Companion_instance === null) {
      new TagDefineBitsLossless2$Companion();
    }return TagDefineBitsLossless2$Companion_instance;
  }
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'hasAlpha', {
    get: function () {
      return this.hasAlpha_hc07nk$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'type', {
    get: function () {
      return this.type_mvr4x6$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'name', {
    get: function () {
      return this.name_ms0zg9$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'version', {
    get: function () {
      return this.version_q38wnc$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'level', {
    get: function () {
      return this.level_520b1w$_0;
    }
  });
  TagDefineBitsLossless2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + this.characterId + ', Format: ' + this.bitmapFormat + ', Size: (' + this.bitmapWidth + ',' + this.bitmapHeight + ')';
  };
  TagDefineBitsLossless2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineBitsLossless2',
    interfaces: [TagDefineBitsLossless, IDefinitionTag]
  };
  function TagDefineButton() {
    TagDefineButton$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_rcf812$_0 = 0;
    this.characters = ArrayList_init_0();
    this.actions = ArrayList_init_0();
    this.frames = HashMap_init();
    this.labelCount = 0;
    this.type_rr0pto$_0 = 7;
    this.name_rnakcr$_0 = 'DefineButton';
    this.version_xm0bkq$_0 = 1;
    this.level_3t0kze$_0 = 1;
  }
  function TagDefineButton$Companion() {
    TagDefineButton$Companion_instance = this;
    this.TYPE = 7;
    this.STATE_UP = 'up';
    this.STATE_OVER = 'over';
    this.STATE_DOWN = 'down';
    this.STATE_HIT = 'hit';
  }
  TagDefineButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButton$Companion_instance = null;
  function TagDefineButton$Companion_getInstance() {
    if (TagDefineButton$Companion_instance === null) {
      new TagDefineButton$Companion();
    }return TagDefineButton$Companion_instance;
  }
  Object.defineProperty(TagDefineButton.prototype, 'characterId', {
    get: function () {
      return this.characterId_rcf812$_0;
    },
    set: function (characterId) {
      this.characterId_rcf812$_0 = characterId;
    }
  });
  TagDefineButton.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var record;
    while (true) {
      record = data.readBUTTONRECORD_za3lpa$();
      if (record == null)
        break;
      this.characters.add_11rb$(record);
    }
    var action;
    while (true) {
      action = data.readACTIONRECORD();
      if (action == null)
        break;
      this.actions.add_11rb$(action);
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.actions);
    this.processRecords();
  };
  TagDefineButton.prototype.getRecordsByState_61zpoe$ = function (state) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.frames.get_11rb$(state), ArrayList) ? tmp$ : throwCCE();
  };
  Object.defineProperty(TagDefineButton.prototype, 'type', {
    get: function () {
      return this.type_rr0pto$_0;
    }
  });
  Object.defineProperty(TagDefineButton.prototype, 'name', {
    get: function () {
      return this.name_rnakcr$_0;
    }
  });
  Object.defineProperty(TagDefineButton.prototype, 'version', {
    get: function () {
      return this.version_xm0bkq$_0;
    }
  });
  Object.defineProperty(TagDefineButton.prototype, 'level', {
    get: function () {
      return this.level_3t0kze$_0;
    }
  });
  function TagDefineButton$processRecords$lambda(it) {
    return it.placeDepth;
  }
  function TagDefineButton$processRecords$lambda_0(it) {
    return it.placeDepth;
  }
  function TagDefineButton$processRecords$lambda_1(it) {
    return it.placeDepth;
  }
  function TagDefineButton$processRecords$lambda_2(it) {
    return it.placeDepth;
  }
  TagDefineButton.prototype.processRecords = function () {
    var tmp$;
    var upState = ArrayList_init_0();
    var overState = ArrayList_init_0();
    var downState = ArrayList_init_0();
    var hitState = ArrayList_init_0();
    tmp$ = this.characters.size;
    for (var i = 0; i < tmp$; i++) {
      var record = this.characters.get_za3lpa$(i);
      if (record.stateUp)
        upState.add_11rb$(record);
      if (record.stateOver)
        overState.add_11rb$(record);
      if (record.stateDown)
        downState.add_11rb$(record);
      if (record.stateHitTest)
        hitState.add_11rb$(record);
    }
    var tmp$_0 = this.frames;
    var tmp$_1 = TagDefineButton$Companion_getInstance().STATE_UP;
    var value = ArrayList_init_1(sortedWith(upState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton$processRecords$lambda))));
    tmp$_0.put_xwzc9p$(tmp$_1, value);
    var tmp$_2 = this.frames;
    var tmp$_3 = TagDefineButton$Companion_getInstance().STATE_OVER;
    var value_0 = ArrayList_init_1(sortedWith(overState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton$processRecords$lambda_0))));
    tmp$_2.put_xwzc9p$(tmp$_3, value_0);
    var tmp$_4 = this.frames;
    var tmp$_5 = TagDefineButton$Companion_getInstance().STATE_DOWN;
    var value_1 = ArrayList_init_1(sortedWith(downState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton$processRecords$lambda_1))));
    tmp$_4.put_xwzc9p$(tmp$_5, value_1);
    var tmp$_6 = this.frames;
    var tmp$_7 = TagDefineButton$Companion_getInstance().STATE_HIT;
    var value_2 = ArrayList_init_1(sortedWith(hitState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton$processRecords$lambda_2))));
    tmp$_6.put_xwzc9p$(tmp$_7, value_2);
  };
  TagDefineButton.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0, tmp$_1;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId);
    if (this.characters.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Characters:';
      tmp$ = this.characters.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.characters.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }if (this.actions.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Actions:';
      if ((flags & 2) === 0) {
        tmp$_0 = this.actions.size;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_0) + '] ' + this.actions.get_za3lpa$(i_0).toString_za3lpa$(indent + 4 | 0);
        }
      } else {
        var context = new ActionExecutionContext(this.actions, ArrayList_init_0(), this.labelCount);
        tmp$_1 = this.actions.size;
        for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + this.actions.get_za3lpa$(i_1).toBytecode_5s0s9g$(indent + 4 | 0, context);
        }
        if (context.endLabel != null) {
          str += '\n' + repeat(' ', indent + 6 | 0) + context.endLabel + ':';
        }}
    }return str;
  };
  TagDefineButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineButton',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineButton2() {
    TagDefineButton2$Companion_getInstance();
    _BaseTag.call(this);
    this.trackAsMenu = false;
    this.characterId_x59vt0$_0 = 0;
    this.characters = ArrayList_init_0();
    this.condActions = ArrayList_init_0();
    this.frames = HashMap_init();
    this.type_xe47a2$_0 = 34;
    this.name_xae1t5$_0 = 'DefineButton2';
    this.version_ohofw8$_0 = 3;
    this.level_yebjtw$_0 = 2;
  }
  function TagDefineButton2$Companion() {
    TagDefineButton2$Companion_instance = this;
    this.TYPE = 34;
  }
  TagDefineButton2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButton2$Companion_instance = null;
  function TagDefineButton2$Companion_getInstance() {
    if (TagDefineButton2$Companion_instance === null) {
      new TagDefineButton2$Companion();
    }return TagDefineButton2$Companion_instance;
  }
  Object.defineProperty(TagDefineButton2.prototype, 'characterId', {
    get: function () {
      return this.characterId_x59vt0$_0;
    },
    set: function (characterId) {
      this.characterId_x59vt0$_0 = characterId;
    }
  });
  TagDefineButton2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.trackAsMenu = (data.readUI8() & 1) !== 0;
    var actionOffset = data.readUI16();
    var record;
    while (true) {
      record = data.readBUTTONRECORD_za3lpa$(2);
      if (record == null)
        break;
      this.characters.add_11rb$(record);
    }
    if (actionOffset !== 0) {
      var condActionSize = 0;
      do {
        condActionSize = data.readUI16();
        this.condActions.add_11rb$(data.readBUTTONCONDACTION());
      }
       while (condActionSize !== 0);
    }this.processRecords();
  };
  TagDefineButton2.prototype.getRecordsByState_61zpoe$ = function (state) {
    return ensureNotNull(this.frames.get_11rb$(state));
  };
  Object.defineProperty(TagDefineButton2.prototype, 'type', {
    get: function () {
      return this.type_xe47a2$_0;
    }
  });
  Object.defineProperty(TagDefineButton2.prototype, 'name', {
    get: function () {
      return this.name_xae1t5$_0;
    }
  });
  Object.defineProperty(TagDefineButton2.prototype, 'version', {
    get: function () {
      return this.version_ohofw8$_0;
    }
  });
  Object.defineProperty(TagDefineButton2.prototype, 'level', {
    get: function () {
      return this.level_yebjtw$_0;
    }
  });
  function TagDefineButton2$processRecords$lambda(it) {
    return it.placeDepth;
  }
  function TagDefineButton2$processRecords$lambda_0(it) {
    return it.placeDepth;
  }
  function TagDefineButton2$processRecords$lambda_1(it) {
    return it.placeDepth;
  }
  function TagDefineButton2$processRecords$lambda_2(it) {
    return it.placeDepth;
  }
  TagDefineButton2.prototype.processRecords = function () {
    var tmp$;
    var upState = ArrayList_init_0();
    var overState = ArrayList_init_0();
    var downState = ArrayList_init_0();
    var hitState = ArrayList_init_0();
    tmp$ = this.characters.size;
    for (var i = 0; i < tmp$; i++) {
      var record = this.characters.get_za3lpa$(i);
      if (record.stateUp)
        upState.add_11rb$(record);
      if (record.stateOver)
        overState.add_11rb$(record);
      if (record.stateDown)
        downState.add_11rb$(record);
      if (record.stateHitTest)
        hitState.add_11rb$(record);
    }
    var tmp$_0 = this.frames;
    var tmp$_1 = TagDefineButton$Companion_getInstance().STATE_UP;
    var value = ArrayList_init_1(sortedWith(upState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton2$processRecords$lambda))));
    tmp$_0.put_xwzc9p$(tmp$_1, value);
    var tmp$_2 = this.frames;
    var tmp$_3 = TagDefineButton$Companion_getInstance().STATE_OVER;
    var value_0 = ArrayList_init_1(sortedWith(overState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton2$processRecords$lambda_0))));
    tmp$_2.put_xwzc9p$(tmp$_3, value_0);
    var tmp$_4 = this.frames;
    var tmp$_5 = TagDefineButton$Companion_getInstance().STATE_DOWN;
    var value_1 = ArrayList_init_1(sortedWith(downState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton2$processRecords$lambda_1))));
    tmp$_4.put_xwzc9p$(tmp$_5, value_1);
    var tmp$_6 = this.frames;
    var tmp$_7 = TagDefineButton$Companion_getInstance().STATE_HIT;
    var value_2 = ArrayList_init_1(sortedWith(hitState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton2$processRecords$lambda_2))));
    tmp$_6.put_xwzc9p$(tmp$_7, value_2);
  };
  TagDefineButton2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', TrackAsMenu: ' + toString(this.trackAsMenu);
    if (this.characters.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Characters:';
      tmp$ = this.characters.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.characters.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }if (this.condActions.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'CondActions:';
      tmp$_0 = this.condActions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_0) + '] ' + this.condActions.get_za3lpa$(i_0).toString_vux9f0$(indent + 4 | 0, flags);
      }
    }return str;
  };
  TagDefineButton2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineButton2',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineButtonCxform() {
    TagDefineButtonCxform$Companion_getInstance();
    _BaseTag.call(this);
    this.buttonColorTransform_109a3w$_0 = this.buttonColorTransform_109a3w$_0;
    this.characterId_pt9hcv$_0 = 0;
    this.type_6pnot1$_0 = 23;
    this.name_6lxjc4$_0 = 'DefineButtonCxform';
    this.version_53mmul$_0 = 2;
    this.level_936ssf$_0 = 1;
  }
  function TagDefineButtonCxform$Companion() {
    TagDefineButtonCxform$Companion_instance = this;
    this.TYPE = 23;
  }
  TagDefineButtonCxform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButtonCxform$Companion_instance = null;
  function TagDefineButtonCxform$Companion_getInstance() {
    if (TagDefineButtonCxform$Companion_instance === null) {
      new TagDefineButtonCxform$Companion();
    }return TagDefineButtonCxform$Companion_instance;
  }
  Object.defineProperty(TagDefineButtonCxform.prototype, 'buttonColorTransform', {
    get: function () {
      if (this.buttonColorTransform_109a3w$_0 == null)
        return throwUPAE('buttonColorTransform');
      return this.buttonColorTransform_109a3w$_0;
    },
    set: function (buttonColorTransform) {
      this.buttonColorTransform_109a3w$_0 = buttonColorTransform;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'characterId', {
    get: function () {
      return this.characterId_pt9hcv$_0;
    },
    set: function (characterId) {
      this.characterId_pt9hcv$_0 = characterId;
    }
  });
  TagDefineButtonCxform.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.buttonColorTransform = data.readCXFORM();
  };
  Object.defineProperty(TagDefineButtonCxform.prototype, 'type', {
    get: function () {
      return this.type_6pnot1$_0;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'name', {
    get: function () {
      return this.name_6lxjc4$_0;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'version', {
    get: function () {
      return this.version_53mmul$_0;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'level', {
    get: function () {
      return this.level_936ssf$_0;
    }
  });
  TagDefineButtonCxform.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'ColorTransform: ' + toString(this.buttonColorTransform);
  };
  TagDefineButtonCxform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineButtonCxform',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineButtonSound() {
    TagDefineButtonSound$Companion_getInstance();
    _BaseTag.call(this);
    this.buttonSoundChar0 = 0;
    this.buttonSoundChar1 = 0;
    this.buttonSoundChar2 = 0;
    this.buttonSoundChar3 = 0;
    this.buttonSoundInfo0_i0vvzg$_0 = this.buttonSoundInfo0_i0vvzg$_0;
    this.buttonSoundInfo1_i0vw0b$_0 = this.buttonSoundInfo1_i0vw0b$_0;
    this.buttonSoundInfo2_i0vw16$_0 = this.buttonSoundInfo2_i0vw16$_0;
    this.buttonSoundInfo3_i0vw21$_0 = this.buttonSoundInfo3_i0vw21$_0;
    this.characterId_knc0kh$_0 = 0;
    this.type_hz0q8n$_0 = 17;
    this.name_hvakrq$_0 = 'DefineButtonSound';
    this.version_pdj4wl$_0 = 2;
    this.level_f6iu81$_0 = 1;
  }
  function TagDefineButtonSound$Companion() {
    TagDefineButtonSound$Companion_instance = this;
    this.TYPE = 17;
  }
  TagDefineButtonSound$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButtonSound$Companion_instance = null;
  function TagDefineButtonSound$Companion_getInstance() {
    if (TagDefineButtonSound$Companion_instance === null) {
      new TagDefineButtonSound$Companion();
    }return TagDefineButtonSound$Companion_instance;
  }
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo0', {
    get: function () {
      if (this.buttonSoundInfo0_i0vvzg$_0 == null)
        return throwUPAE('buttonSoundInfo0');
      return this.buttonSoundInfo0_i0vvzg$_0;
    },
    set: function (buttonSoundInfo0) {
      this.buttonSoundInfo0_i0vvzg$_0 = buttonSoundInfo0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo1', {
    get: function () {
      if (this.buttonSoundInfo1_i0vw0b$_0 == null)
        return throwUPAE('buttonSoundInfo1');
      return this.buttonSoundInfo1_i0vw0b$_0;
    },
    set: function (buttonSoundInfo1) {
      this.buttonSoundInfo1_i0vw0b$_0 = buttonSoundInfo1;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo2', {
    get: function () {
      if (this.buttonSoundInfo2_i0vw16$_0 == null)
        return throwUPAE('buttonSoundInfo2');
      return this.buttonSoundInfo2_i0vw16$_0;
    },
    set: function (buttonSoundInfo2) {
      this.buttonSoundInfo2_i0vw16$_0 = buttonSoundInfo2;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo3', {
    get: function () {
      if (this.buttonSoundInfo3_i0vw21$_0 == null)
        return throwUPAE('buttonSoundInfo3');
      return this.buttonSoundInfo3_i0vw21$_0;
    },
    set: function (buttonSoundInfo3) {
      this.buttonSoundInfo3_i0vw21$_0 = buttonSoundInfo3;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'characterId', {
    get: function () {
      return this.characterId_knc0kh$_0;
    },
    set: function (characterId) {
      this.characterId_knc0kh$_0 = characterId;
    }
  });
  TagDefineButtonSound.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.buttonSoundChar0 = data.readUI16();
    if (this.buttonSoundChar0 !== 0)
      this.buttonSoundInfo0 = data.readSOUNDINFO();
    this.buttonSoundChar1 = data.readUI16();
    if (this.buttonSoundChar1 !== 0)
      this.buttonSoundInfo1 = data.readSOUNDINFO();
    this.buttonSoundChar2 = data.readUI16();
    if (this.buttonSoundChar2 !== 0)
      this.buttonSoundInfo2 = data.readSOUNDINFO();
    this.buttonSoundChar3 = data.readUI16();
    if (this.buttonSoundChar3 !== 0)
      this.buttonSoundInfo3 = data.readSOUNDINFO();
  };
  Object.defineProperty(TagDefineButtonSound.prototype, 'type', {
    get: function () {
      return this.type_hz0q8n$_0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'name', {
    get: function () {
      return this.name_hvakrq$_0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'version', {
    get: function () {
      return this.version_pdj4wl$_0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'level', {
    get: function () {
      return this.level_f6iu81$_0;
    }
  });
  TagDefineButtonSound.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ButtonID: ' + toString(this.characterId) + ', ' + 'ButtonSoundChars: ' + toString(this.buttonSoundChar0) + ',' + toString(this.buttonSoundChar1) + ',' + toString(this.buttonSoundChar2) + ',' + toString(this.buttonSoundChar3);
  };
  TagDefineButtonSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineButtonSound',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineEditText() {
    TagDefineEditText$Companion_getInstance();
    _BaseTag.call(this);
    this.bounds_4j42x2$_0 = this.bounds_4j42x2$_0;
    this.variableName = null;
    this.hasText = false;
    this.wordWrap = false;
    this.multiline = false;
    this.password = false;
    this.readOnly = false;
    this.hasTextColor = false;
    this.hasMaxLength = false;
    this.hasFont = false;
    this.hasFontClass = false;
    this.autoSize = false;
    this.hasLayout = false;
    this.noSelect = false;
    this.border = false;
    this.wasStatic = false;
    this.html = false;
    this.useOutlines = false;
    this.fontId = 0;
    this.fontClass = null;
    this.fontHeight = 0;
    this.textColor = 0;
    this.maxLength = 0;
    this.align = 0;
    this.leftMargin = 0;
    this.rightMargin = 0;
    this.indent = 0;
    this.leading = 0;
    this.initialText = null;
    this.characterId_kvdqxh$_0 = 0;
    this.type_xrmfj5$_0 = 37;
    this.name_xnwa28$_0 = 'DefineEditText';
    this.version_jtyox$_0 = 4;
    this.level_mrmg0b$_0 = 1;
  }
  function TagDefineEditText$Companion() {
    TagDefineEditText$Companion_instance = this;
    this.TYPE = 37;
  }
  TagDefineEditText$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineEditText$Companion_instance = null;
  function TagDefineEditText$Companion_getInstance() {
    if (TagDefineEditText$Companion_instance === null) {
      new TagDefineEditText$Companion();
    }return TagDefineEditText$Companion_instance;
  }
  Object.defineProperty(TagDefineEditText.prototype, 'bounds', {
    get: function () {
      if (this.bounds_4j42x2$_0 == null)
        return throwUPAE('bounds');
      return this.bounds_4j42x2$_0;
    },
    set: function (bounds) {
      this.bounds_4j42x2$_0 = bounds;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'characterId', {
    get: function () {
      return this.characterId_kvdqxh$_0;
    },
    set: function (characterId) {
      this.characterId_kvdqxh$_0 = characterId;
    }
  });
  TagDefineEditText.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.bounds = data.readRECT();
    var flags1 = data.readUI8();
    this.hasText = (flags1 & 128) !== 0;
    this.wordWrap = (flags1 & 64) !== 0;
    this.multiline = (flags1 & 32) !== 0;
    this.password = (flags1 & 16) !== 0;
    this.readOnly = (flags1 & 8) !== 0;
    this.hasTextColor = (flags1 & 4) !== 0;
    this.hasMaxLength = (flags1 & 2) !== 0;
    this.hasFont = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.hasFontClass = (flags2 & 128) !== 0;
    this.autoSize = (flags2 & 64) !== 0;
    this.hasLayout = (flags2 & 32) !== 0;
    this.noSelect = (flags2 & 16) !== 0;
    this.border = (flags2 & 8) !== 0;
    this.wasStatic = (flags2 & 4) !== 0;
    this.html = (flags2 & 2) !== 0;
    this.useOutlines = (flags2 & 1) !== 0;
    if (this.hasFont)
      this.fontId = data.readUI16();
    if (this.hasFontClass)
      this.fontClass = data.readString();
    if (this.hasFont || this.hasFontClass)
      this.fontHeight = data.readUI16();
    if (this.hasTextColor)
      this.textColor = data.readRGBA();
    if (this.hasMaxLength)
      this.maxLength = data.readUI16();
    if (this.hasLayout) {
      this.align = data.readUI8();
      this.leftMargin = data.readUI16();
      this.rightMargin = data.readUI16();
      this.indent = data.readUI16();
      this.leading = data.readSI16();
    }this.variableName = data.readString();
    if (this.hasText) {
      this.initialText = data.readString();
    }};
  Object.defineProperty(TagDefineEditText.prototype, 'type', {
    get: function () {
      return this.type_xrmfj5$_0;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'name', {
    get: function () {
      return this.name_xnwa28$_0;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'version', {
    get: function () {
      return this.version_jtyox$_0;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'level', {
    get: function () {
      return this.level_mrmg0b$_0;
    }
  });
  TagDefineEditText.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$ = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ';
    var tmp$_0 = this.hasText;
    if (tmp$_0) {
      tmp$_0 = ensureNotNull(this.initialText).length > 0;
    }return tmp$ + (tmp$_0 ? 'Text: ' + toString(this.initialText) + ', ' : '') + (ensureNotNull(this.variableName).length > 0 ? 'VariableName: ' + toString(this.variableName) + ', ' : '') + 'Bounds: ' + toString(this.bounds);
  };
  TagDefineEditText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineEditText',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineFont() {
    TagDefineFont$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_ncw7fh$_0 = 0;
    this.glyphShapeTable = ArrayList_init_0();
    this.type_hv0ys9$_0 = 10;
    this.name_hratbc$_0 = 'DefineFont';
    this.version_8f6go9$_0 = 1;
    this.level_imbhc3$_0 = 1;
    this.unitDivisor_pp21a1$_0 = 1.0;
  }
  function TagDefineFont$Companion() {
    TagDefineFont$Companion_instance = this;
    this.TYPE = 10;
  }
  TagDefineFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont$Companion_instance = null;
  function TagDefineFont$Companion_getInstance() {
    if (TagDefineFont$Companion_instance === null) {
      new TagDefineFont$Companion();
    }return TagDefineFont$Companion_instance;
  }
  Object.defineProperty(TagDefineFont.prototype, 'characterId', {
    get: function () {
      return this.characterId_ncw7fh$_0;
    },
    set: function (characterId) {
      this.characterId_ncw7fh$_0 = characterId;
    }
  });
  TagDefineFont.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var numGlyphs = data.readUI16() >>> 1;
    data.skipBytes_za3lpa$(numGlyphs - 1 << 1);
    for (var i = 0; i < numGlyphs; i++) {
      this.glyphShapeTable.add_11rb$(data.readSHAPE_14dthe$(this.unitDivisor));
    }
  };
  TagDefineFont.prototype.export_ovf5bd$ = function (handler, glyphIndex) {
    this.glyphShapeTable.get_za3lpa$(glyphIndex).export_3yzzr9$(handler);
  };
  Object.defineProperty(TagDefineFont.prototype, 'type', {
    get: function () {
      return this.type_hv0ys9$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'name', {
    get: function () {
      return this.name_hratbc$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'version', {
    get: function () {
      return this.version_8f6go9$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'level', {
    get: function () {
      return this.level_imbhc3$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'unitDivisor', {
    get: function () {
      return this.unitDivisor_pp21a1$_0;
    }
  });
  TagDefineFont.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Glyphs: ' + toString(this.glyphShapeTable.size);
    return str + this.toStringCommon_za3lpa$(indent);
  };
  TagDefineFont.prototype.toStringCommon_za3lpa$ = function (indent) {
    var tmp$;
    var str = '';
    tmp$ = this.glyphShapeTable.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] GlyphShapes:';
      str += this.glyphShapeTable.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    }
    return str;
  };
  TagDefineFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFont',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineFont2() {
    TagDefineFont2$Companion_getInstance();
    TagDefineFont.call(this);
    this.hasLayout = false;
    this.shiftJIS = false;
    this.smallText = false;
    this.ansi = false;
    this.wideOffsets = false;
    this.wideCodes = false;
    this.italic = false;
    this.bold = false;
    this.languageCode = 0;
    this.fontName_37ijz7$_0 = this.fontName_37ijz7$_0;
    this.ascent = 0;
    this.descent = 0;
    this.leading = 0;
    this.codeTable = ArrayList_init_0();
    this.fontAdvanceTable = ArrayList_init_0();
    this.fontBoundsTable = ArrayList_init_0();
    this.fontKerningTable = ArrayList_init_0();
    this.type_ays4yl$_0 = 48;
    this.name_av1zho$_0 = 'DefineFont2';
    this.version_v3q3$_0 = 3;
    this.level_jakzyf$_0 = 2;
  }
  function TagDefineFont2$Companion() {
    TagDefineFont2$Companion_instance = this;
    this.TYPE = 48;
  }
  TagDefineFont2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont2$Companion_instance = null;
  function TagDefineFont2$Companion_getInstance() {
    if (TagDefineFont2$Companion_instance === null) {
      new TagDefineFont2$Companion();
    }return TagDefineFont2$Companion_instance;
  }
  Object.defineProperty(TagDefineFont2.prototype, 'fontName', {
    get: function () {
      if (this.fontName_37ijz7$_0 == null)
        return throwUPAE('fontName');
      return this.fontName_37ijz7$_0;
    },
    set: function (fontName) {
      this.fontName_37ijz7$_0 = fontName;
    }
  });
  TagDefineFont2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var flags = data.readUI8();
    this.hasLayout = (flags & 128) !== 0;
    this.shiftJIS = (flags & 64) !== 0;
    this.smallText = (flags & 32) !== 0;
    this.ansi = (flags & 16) !== 0;
    this.wideOffsets = (flags & 8) !== 0;
    this.wideCodes = (flags & 4) !== 0;
    this.italic = (flags & 2) !== 0;
    this.bold = (flags & 1) !== 0;
    this.languageCode = data.readLANGCODE();
    var fontNameLen = data.readUI8();
    this.fontName = data.readUTFBytes_za3lpa$(fontNameLen);
    var numGlyphs = data.readUI16();
    if (numGlyphs > 0) {
      data.skipBytes_za3lpa$(numGlyphs << (this.wideOffsets ? 2 : 1));
      var codeTableOffset = this.wideOffsets ? data.readUI32() : data.readUI16();
      for (var i = 0; i < numGlyphs; i++) {
        this.glyphShapeTable.add_11rb$(data.readSHAPE_14dthe$());
      }
      for (var i_0 = 0; i_0 < numGlyphs; i_0++) {
        this.codeTable.add_11rb$(this.wideCodes ? data.readUI16() : data.readUI8());
      }
    }if (this.hasLayout) {
      this.ascent = data.readUI16();
      this.descent = data.readUI16();
      this.leading = data.readSI16();
      for (var i_1 = 0; i_1 < numGlyphs; i_1++) {
        this.fontAdvanceTable.add_11rb$(data.readSI16());
      }
      for (var i_2 = 0; i_2 < numGlyphs; i_2++) {
        this.fontBoundsTable.add_11rb$(data.readRECT());
      }
      var kerningCount = data.readUI16();
      for (var i_3 = 0; i_3 < kerningCount; i_3++) {
        this.fontKerningTable.add_11rb$(data.readKERNINGRECORD_6taknv$(this.wideCodes));
      }
    }};
  Object.defineProperty(TagDefineFont2.prototype, 'type', {
    get: function () {
      return this.type_ays4yl$_0;
    }
  });
  Object.defineProperty(TagDefineFont2.prototype, 'name', {
    get: function () {
      return this.name_av1zho$_0;
    }
  });
  Object.defineProperty(TagDefineFont2.prototype, 'version', {
    get: function () {
      return this.version_v3q3$_0;
    }
  });
  Object.defineProperty(TagDefineFont2.prototype, 'level', {
    get: function () {
      return this.level_jakzyf$_0;
    }
  });
  TagDefineFont2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + toString(this.italic) + ', ' + 'Bold: ' + toString(this.bold) + ', ' + 'Glyphs: ' + toString(this.glyphShapeTable.size);
    return str + this.toStringCommon_za3lpa$(indent);
  };
  TagDefineFont2.prototype.toStringCommon_za3lpa$ = function (indent) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var str = TagDefineFont.prototype.toStringCommon_za3lpa$.call(this, indent);
    if (this.hasLayout) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Ascent: ' + toString(this.ascent);
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Descent: ' + toString(this.descent);
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Leading: ' + toString(this.leading);
    }if (this.codeTable.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'CodeTable:';
      tmp$ = this.codeTable.size;
      for (var i = 0; i < tmp$; i++) {
        tmp$_1 = str;
        if ((i & 15) === 0) {
          tmp$_0 = '\n' + repeat(' ', indent + 4 | 0) + this.codeTable.get_za3lpa$(i).toString();
        } else {
          tmp$_0 = ', ' + this.codeTable.get_za3lpa$(i).toString();
        }
        str = tmp$_1 + tmp$_0;
      }
    }if (this.fontAdvanceTable.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'FontAdvanceTable:';
      tmp$_2 = this.fontAdvanceTable.size;
      for (var i_0 = 0; i_0 < tmp$_2; i_0++) {
        tmp$_4 = str;
        if ((i_0 & 7) === 0) {
          tmp$_3 = '\n' + repeat(' ', indent + 4 | 0) + this.fontAdvanceTable.get_za3lpa$(i_0).toString();
        } else {
          tmp$_3 = ', ' + this.fontAdvanceTable.get_za3lpa$(i_0).toString();
        }
        str = tmp$_4 + tmp$_3;
      }
    }if (this.fontBoundsTable.size > 0) {
      var hasNonNullBounds = false;
      tmp$_5 = this.fontBoundsTable.size;
      for (var i_1 = 0; i_1 < tmp$_5; i_1++) {
        var rect = this.fontBoundsTable.get_za3lpa$(i_1);
        if (rect.xmin !== 0 || rect.xmax !== 0 || rect.ymin !== 0 || rect.ymax !== 0) {
          hasNonNullBounds = true;
          break;
        }}
      if (hasNonNullBounds) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'FontBoundsTable:';
        tmp$_6 = this.fontBoundsTable.size;
        for (var i_2 = 0; i_2 < tmp$_6; i_2++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_2) + '] ' + this.fontBoundsTable.get_za3lpa$(i_2).toString();
        }
      }}if (this.fontKerningTable.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'KerningTable:';
      tmp$_7 = this.fontKerningTable.size;
      for (var i_3 = 0; i_3 < tmp$_7; i_3++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_3) + '] ' + this.fontKerningTable.get_za3lpa$(i_3).toString();
      }
    }return str;
  };
  TagDefineFont2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFont2',
    interfaces: [TagDefineFont, IDefinitionTag]
  };
  function TagDefineFont3() {
    TagDefineFont3$Companion_getInstance();
    TagDefineFont2.call(this);
    this.type_pn6f6m$_0 = 75;
    this.name_pjg9pp$_0 = 'DefineFont3';
    this.version_39v2ik$_0 = 8;
    this.level_9j1h3s$_0 = 2;
    this.unitDivisor_aequam$_0 = 20.0;
  }
  function TagDefineFont3$Companion() {
    TagDefineFont3$Companion_instance = this;
    this.TYPE = 75;
  }
  TagDefineFont3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont3$Companion_instance = null;
  function TagDefineFont3$Companion_getInstance() {
    if (TagDefineFont3$Companion_instance === null) {
      new TagDefineFont3$Companion();
    }return TagDefineFont3$Companion_instance;
  }
  Object.defineProperty(TagDefineFont3.prototype, 'type', {
    get: function () {
      return this.type_pn6f6m$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'name', {
    get: function () {
      return this.name_pjg9pp$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'version', {
    get: function () {
      return this.version_39v2ik$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'level', {
    get: function () {
      return this.level_9j1h3s$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'unitDivisor', {
    get: function () {
      return this.unitDivisor_aequam$_0;
    }
  });
  TagDefineFont3.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + toString(this.italic) + ', ' + 'Bold: ' + toString(this.bold) + ', ' + 'Glyphs: ' + toString(this.glyphShapeTable.size);
    return str + this.toStringCommon_za3lpa$(indent);
  };
  TagDefineFont3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFont3',
    interfaces: [TagDefineFont2, IDefinitionTag]
  };
  function TagDefineFont4() {
    TagDefineFont4$Companion_getInstance();
    _BaseTag.call(this);
    this.hasFontData = false;
    this.italic = false;
    this.bold = false;
    this.fontName_8dvowv$_0 = this.fontName_8dvowv$_0;
    this.characterId_ua7ivr$_0 = 0;
    this.fontData_0 = new FlashByteArray();
    this.type_upjckh$_0 = 91;
    this.name_ut9i1e$_0 = 'DefineFont4';
    this.version_6iv1b1$_0 = 10;
    this.level_wog3t5$_0 = 1;
  }
  function TagDefineFont4$Companion() {
    TagDefineFont4$Companion_instance = this;
    this.TYPE = 91;
  }
  TagDefineFont4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont4$Companion_instance = null;
  function TagDefineFont4$Companion_getInstance() {
    if (TagDefineFont4$Companion_instance === null) {
      new TagDefineFont4$Companion();
    }return TagDefineFont4$Companion_instance;
  }
  Object.defineProperty(TagDefineFont4.prototype, 'fontName', {
    get: function () {
      if (this.fontName_8dvowv$_0 == null)
        return throwUPAE('fontName');
      return this.fontName_8dvowv$_0;
    },
    set: function (fontName) {
      this.fontName_8dvowv$_0 = fontName;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'characterId', {
    get: function () {
      return this.characterId_ua7ivr$_0;
    },
    set: function (characterId) {
      this.characterId_ua7ivr$_0 = characterId;
    }
  });
  TagDefineFont4.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    this.characterId = data.readUI16();
    var flags = data.readUI8();
    this.hasFontData = (flags & 4) !== 0;
    this.italic = (flags & 2) !== 0;
    this.bold = (flags & 1) !== 0;
    this.fontName = data.readString();
    if (this.hasFontData && length > (data.position - pos | 0)) {
      this.fontData_0 = toFlash(data.readBytes_za3lpa$(length - (data.position - pos) | 0));
    }};
  Object.defineProperty(TagDefineFont4.prototype, 'type', {
    get: function () {
      return this.type_upjckh$_0;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'name', {
    get: function () {
      return this.name_ut9i1e$_0;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'version', {
    get: function () {
      return this.version_6iv1b1$_0;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'level', {
    get: function () {
      return this.level_wog3t5$_0;
    }
  });
  TagDefineFont4.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'HasFontData: ' + toString(this.hasFontData) + ', ' + 'Italic: ' + toString(this.italic) + ', ' + 'Bold: ' + toString(this.bold);
  };
  TagDefineFont4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFont4',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineFontAlignZones() {
    TagDefineFontAlignZones$Companion_getInstance();
    _BaseTag.call(this);
    this.fontId = 0;
    this.csmTableHint = 0;
    this._zoneTable_0 = ArrayList_init_0();
    this.type_cs8l39$_0 = 73;
    this.name_cvyqk6$_0 = 'DefineFontAlignZones';
    this.version_e1qet5$_0 = 8;
    this.level_ps166z$_0 = 1;
  }
  function TagDefineFontAlignZones$Companion() {
    TagDefineFontAlignZones$Companion_instance = this;
    this.TYPE = 73;
  }
  TagDefineFontAlignZones$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontAlignZones$Companion_instance = null;
  function TagDefineFontAlignZones$Companion_getInstance() {
    if (TagDefineFontAlignZones$Companion_instance === null) {
      new TagDefineFontAlignZones$Companion();
    }return TagDefineFontAlignZones$Companion_instance;
  }
  TagDefineFontAlignZones.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.fontId = data.readUI16();
    this.csmTableHint = data.readUI8() >>> 6;
    var recordsEndPos = data.position + length - 3 | 0;
    while (data.position < recordsEndPos) {
      this._zoneTable_0.add_11rb$(data.readZONERECORD());
    }
  };
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'type', {
    get: function () {
      return this.type_cs8l39$_0;
    }
  });
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'name', {
    get: function () {
      return this.name_cvyqk6$_0;
    }
  });
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'version', {
    get: function () {
      return this.version_e1qet5$_0;
    }
  });
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'level', {
    get: function () {
      return this.level_ps166z$_0;
    }
  });
  TagDefineFontAlignZones.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + toString(this.fontId) + ', ' + 'CSMTableHint: ' + CSMTableHint_getInstance().toString_za3lpa$(this.csmTableHint) + ', ' + 'Records: ' + toString(this._zoneTable_0.size);
    tmp$ = this._zoneTable_0.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this._zoneTable_0.get_za3lpa$(i).toString();
    }
    return str;
  };
  TagDefineFontAlignZones.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFontAlignZones',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineFontInfo() {
    TagDefineFontInfo$Companion_getInstance();
    _BaseTag.call(this);
    this.fontId = 0;
    this.fontName_5et7on$_0 = this.fontName_5et7on$_0;
    this.smallText = false;
    this.shiftJIS = false;
    this.ansi = false;
    this.italic = false;
    this.bold = false;
    this.wideCodes = false;
    this.langCode = 0;
    this._codeTable = ArrayList_init_0();
    this.langCodeLength = 0;
    this.type_9lh23r$_0 = 13;
    this.name_9hqwmu$_0 = 'DefineFontInfo';
    this.version_vtofc5$_0 = 1;
    this.level_99zlgv$_0 = 1;
  }
  function TagDefineFontInfo$Companion() {
    TagDefineFontInfo$Companion_instance = this;
    this.TYPE = 13;
  }
  TagDefineFontInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontInfo$Companion_instance = null;
  function TagDefineFontInfo$Companion_getInstance() {
    if (TagDefineFontInfo$Companion_instance === null) {
      new TagDefineFontInfo$Companion();
    }return TagDefineFontInfo$Companion_instance;
  }
  Object.defineProperty(TagDefineFontInfo.prototype, 'fontName', {
    get: function () {
      if (this.fontName_5et7on$_0 == null)
        return throwUPAE('fontName');
      return this.fontName_5et7on$_0;
    },
    set: function (fontName) {
      this.fontName_5et7on$_0 = fontName;
    }
  });
  TagDefineFontInfo.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.fontId = data.readUI16();
    var fontNameLen = data.readUI8();
    this.fontName = data.readUTFBytes_za3lpa$(fontNameLen);
    var flags = data.readUI8();
    this.smallText = (flags & 32) !== 0;
    this.shiftJIS = (flags & 16) !== 0;
    this.ansi = (flags & 8) !== 0;
    this.italic = (flags & 4) !== 0;
    this.bold = (flags & 2) !== 0;
    this.wideCodes = (flags & 1) !== 0;
    this.parseLangCode_qq6jov$(data);
    var numGlyphs = length - fontNameLen - this.langCodeLength - 4 | 0;
    for (var i = 0; i < numGlyphs; i++) {
      this._codeTable.add_11rb$(this.wideCodes ? data.readUI16() : data.readUI8());
    }
  };
  TagDefineFontInfo.prototype.parseLangCode_qq6jov$ = function (data) {
  };
  Object.defineProperty(TagDefineFontInfo.prototype, 'type', {
    get: function () {
      return this.type_9lh23r$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo.prototype, 'name', {
    get: function () {
      return this.name_9hqwmu$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo.prototype, 'version', {
    get: function () {
      return this.version_vtofc5$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo.prototype, 'level', {
    get: function () {
      return this.level_99zlgv$_0;
    }
  });
  TagDefineFontInfo.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + toString(this.fontId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + toString(this.italic) + ', ' + 'Bold: ' + toString(this.bold) + ', ' + 'Codes: ' + toString(this._codeTable.size);
  };
  TagDefineFontInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFontInfo',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineFontInfo2() {
    TagDefineFontInfo2$Companion_getInstance();
    TagDefineFontInfo.call(this);
    this.type_w60u7l$_0 = 62;
    this.name_w9qzoi$_0 = 'DefineFontInfo2';
    this.version_uwkbhv$_0 = 6;
    this.level_6ue8qh$_0 = 2;
  }
  function TagDefineFontInfo2$Companion() {
    TagDefineFontInfo2$Companion_instance = this;
    this.TYPE = 62;
  }
  TagDefineFontInfo2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontInfo2$Companion_instance = null;
  function TagDefineFontInfo2$Companion_getInstance() {
    if (TagDefineFontInfo2$Companion_instance === null) {
      new TagDefineFontInfo2$Companion();
    }return TagDefineFontInfo2$Companion_instance;
  }
  TagDefineFontInfo2.prototype.parseLangCode_qq6jov$ = function (data) {
    this.langCode = data.readUI8();
    this.langCodeLength = 1;
  };
  Object.defineProperty(TagDefineFontInfo2.prototype, 'type', {
    get: function () {
      return this.type_w60u7l$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo2.prototype, 'name', {
    get: function () {
      return this.name_w9qzoi$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo2.prototype, 'version', {
    get: function () {
      return this.version_uwkbhv$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo2.prototype, 'level', {
    get: function () {
      return this.level_6ue8qh$_0;
    }
  });
  TagDefineFontInfo2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + toString(this.fontId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + toString(this.italic) + ', ' + 'Bold: ' + toString(this.bold) + ', ' + 'LanguageCode: ' + toString(this.langCode) + ', ' + 'Codes: ' + toString(this._codeTable.size);
  };
  TagDefineFontInfo2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFontInfo2',
    interfaces: [TagDefineFontInfo, ITag]
  };
  function TagDefineFontName() {
    TagDefineFontName$Companion_getInstance();
    _BaseTag.call(this);
    this.fontId = 0;
    this.fontName_gca6nw$_0 = this.fontName_gca6nw$_0;
    this.fontCopyright_mhdjr6$_0 = this.fontCopyright_mhdjr6$_0;
    this.type_aqnnr8$_0 = 88;
    this.name_amxiab$_0 = 'DefineFontName';
    this.version_or8xem$_0 = 9;
    this.level_qaftam$_0 = 1;
  }
  function TagDefineFontName$Companion() {
    TagDefineFontName$Companion_instance = this;
    this.TYPE = 88;
  }
  TagDefineFontName$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontName$Companion_instance = null;
  function TagDefineFontName$Companion_getInstance() {
    if (TagDefineFontName$Companion_instance === null) {
      new TagDefineFontName$Companion();
    }return TagDefineFontName$Companion_instance;
  }
  Object.defineProperty(TagDefineFontName.prototype, 'fontName', {
    get: function () {
      if (this.fontName_gca6nw$_0 == null)
        return throwUPAE('fontName');
      return this.fontName_gca6nw$_0;
    },
    set: function (fontName) {
      this.fontName_gca6nw$_0 = fontName;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'fontCopyright', {
    get: function () {
      if (this.fontCopyright_mhdjr6$_0 == null)
        return throwUPAE('fontCopyright');
      return this.fontCopyright_mhdjr6$_0;
    },
    set: function (fontCopyright) {
      this.fontCopyright_mhdjr6$_0 = fontCopyright;
    }
  });
  TagDefineFontName.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.fontId = data.readUI16();
    this.fontName = data.readString();
    this.fontCopyright = data.readString();
  };
  Object.defineProperty(TagDefineFontName.prototype, 'type', {
    get: function () {
      return this.type_aqnnr8$_0;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'name', {
    get: function () {
      return this.name_amxiab$_0;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'version', {
    get: function () {
      return this.version_or8xem$_0;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'level', {
    get: function () {
      return this.level_qaftam$_0;
    }
  });
  TagDefineFontName.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + toString(this.fontId) + ', ' + 'Name: ' + this.fontName + ', ' + 'Copyright: ' + this.fontCopyright;
  };
  TagDefineFontName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineFontName',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineMorphShape() {
    TagDefineMorphShape$Companion_getInstance();
    _BaseTag.call(this);
    this.startBounds_dn2j5s$_0 = this.startBounds_dn2j5s$_0;
    this.endBounds_w49hax$_0 = this.endBounds_w49hax$_0;
    this.startEdges_lfdotl$_0 = this.startEdges_lfdotl$_0;
    this.endEdges_7j97m$_0 = this.endEdges_7j97m$_0;
    this.startEdgeBounds = new SWFRectangle();
    this.endEdgeBounds = new SWFRectangle();
    this.characterId_ykyuur$_0 = 0;
    this.morphFillStyles = ArrayList_init_0();
    this.morphLineStyles = ArrayList_init_0();
    this.type_13vyrn$_0 = 46;
    this.name_105taq$_0 = 'DefineMorphShape';
    this.version_semzgf$_0 = 3;
    this.level_u99xxv$_0 = 1;
  }
  function TagDefineMorphShape$Companion() {
    TagDefineMorphShape$Companion_instance = this;
    this.TYPE = 46;
  }
  TagDefineMorphShape$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineMorphShape$Companion_instance = null;
  function TagDefineMorphShape$Companion_getInstance() {
    if (TagDefineMorphShape$Companion_instance === null) {
      new TagDefineMorphShape$Companion();
    }return TagDefineMorphShape$Companion_instance;
  }
  Object.defineProperty(TagDefineMorphShape.prototype, 'startBounds', {
    get: function () {
      if (this.startBounds_dn2j5s$_0 == null)
        return throwUPAE('startBounds');
      return this.startBounds_dn2j5s$_0;
    },
    set: function (startBounds) {
      this.startBounds_dn2j5s$_0 = startBounds;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'endBounds', {
    get: function () {
      if (this.endBounds_w49hax$_0 == null)
        return throwUPAE('endBounds');
      return this.endBounds_w49hax$_0;
    },
    set: function (endBounds) {
      this.endBounds_w49hax$_0 = endBounds;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'startEdges', {
    get: function () {
      if (this.startEdges_lfdotl$_0 == null)
        return throwUPAE('startEdges');
      return this.startEdges_lfdotl$_0;
    },
    set: function (startEdges) {
      this.startEdges_lfdotl$_0 = startEdges;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'endEdges', {
    get: function () {
      if (this.endEdges_7j97m$_0 == null)
        return throwUPAE('endEdges');
      return this.endEdges_7j97m$_0;
    },
    set: function (endEdges) {
      this.endEdges_7j97m$_0 = endEdges;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'characterId', {
    get: function () {
      return this.characterId_ykyuur$_0;
    },
    set: function (characterId) {
      this.characterId_ykyuur$_0 = characterId;
    }
  });
  TagDefineMorphShape.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var tmp$, tmp$_0;
    this.characterId = data.readUI16();
    this.startBounds = data.readRECT();
    this.endBounds = data.readRECT();
    var offset = data.readUI32();
    var fillStyleCount = data.readUI8();
    if (fillStyleCount === 255)
      fillStyleCount = data.readUI16();
    tmp$ = fillStyleCount;
    for (var i = 0; i < tmp$; i++) {
      this.morphFillStyles.add_11rb$(data.readMORPHFILLSTYLE_za3lpa$());
    }
    var lineStyleCount = data.readUI8();
    if (lineStyleCount === 255)
      lineStyleCount = data.readUI16();
    tmp$_0 = lineStyleCount;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++)
      this.morphLineStyles.add_11rb$(data.readMORPHLINESTYLE_za3lpa$());
    this.startEdges = data.readSHAPE_14dthe$();
    this.endEdges = data.readSHAPE_14dthe$();
  };
  TagDefineMorphShape.prototype.export_b7i6uh$ = function (handler, ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var j = 0;
    var exportShape = new SWFShape();
    var numEdges = this.startEdges.records.size;
    if (this.startEdges.records.size !== this.endEdges.records.size) {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Not implemented different startEdges.records.size(' + this.startEdges.records.size + ') != endEdges.records.size(' + this.endEdges.records.size + ')'));
    }for (var i = 0; i < numEdges; i++) {
      var startRecord = this.startEdges.records.get_za3lpa$(i);
      if (startRecord.type === 2 && !(Kotlin.isType(tmp$ = startRecord, SWFShapeRecordStyleChange) ? tmp$ : throwCCE()).stateMoveTo) {
        exportShape.records.add_11rb$(startRecord.clone());
        continue;
      }var endRecord = this.endEdges.records.get_za3lpa$((tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0));
      var exportRecord = null;
      if (startRecord.type === 4 && endRecord.type === 3) {
        endRecord = this.convertToCurvedEdge_calbh8$(Kotlin.isType(tmp$_1 = endRecord, SWFShapeRecordStraightEdge) ? tmp$_1 : throwCCE());
      } else if (startRecord.type === 3 && endRecord.type === 4) {
        startRecord = this.convertToCurvedEdge_calbh8$(Kotlin.isType(tmp$_2 = startRecord, SWFShapeRecordStraightEdge) ? tmp$_2 : throwCCE());
      }switch (startRecord.type) {
        case 2:
          var startStyleChange = Kotlin.isType(tmp$_3 = startRecord.clone(), SWFShapeRecordStyleChange) ? tmp$_3 : throwCCE();
          var endStyleChange = Kotlin.isType(tmp$_4 = endRecord, SWFShapeRecordStyleChange) ? tmp$_4 : throwCCE();
          startStyleChange.moveDeltaX = startStyleChange.moveDeltaX + numberToInt((endStyleChange.moveDeltaX - startStyleChange.moveDeltaX | 0) * ratio) | 0;
          startStyleChange.moveDeltaY = startStyleChange.moveDeltaY + numberToInt((endStyleChange.moveDeltaY - startStyleChange.moveDeltaY | 0) * ratio) | 0;
          exportRecord = startStyleChange;
          break;
        case 3:
          var startStraightEdge = Kotlin.isType(tmp$_5 = startRecord.clone(), SWFShapeRecordStraightEdge) ? tmp$_5 : throwCCE();
          var endStraightEdge = Kotlin.isType(tmp$_6 = endRecord, SWFShapeRecordStraightEdge) ? tmp$_6 : throwCCE();
          startStraightEdge.deltaX = startStraightEdge.deltaX + numberToInt((endStraightEdge.deltaX - startStraightEdge.deltaX | 0) * ratio) | 0;
          startStraightEdge.deltaY = startStraightEdge.deltaY + numberToInt((endStraightEdge.deltaY - startStraightEdge.deltaY | 0) * ratio) | 0;
          if (startStraightEdge.deltaX !== 0 && startStraightEdge.deltaY !== 0) {
            startStraightEdge.generalLineFlag = true;
            startStraightEdge.vertLineFlag = false;
          } else {
            startStraightEdge.generalLineFlag = false;
            startStraightEdge.vertLineFlag = startStraightEdge.deltaX === 0;
          }

          exportRecord = startStraightEdge;
          break;
        case 4:
          var startCurvedEdge = Kotlin.isType(tmp$_7 = startRecord.clone(), SWFShapeRecordCurvedEdge) ? tmp$_7 : throwCCE();
          var endCurvedEdge = Kotlin.isType(tmp$_8 = endRecord, SWFShapeRecordCurvedEdge) ? tmp$_8 : throwCCE();
          startCurvedEdge.controlDeltaX = startCurvedEdge.controlDeltaX + numberToInt((endCurvedEdge.controlDeltaX - startCurvedEdge.controlDeltaX | 0) * ratio) | 0;
          startCurvedEdge.controlDeltaY = startCurvedEdge.controlDeltaY + numberToInt((endCurvedEdge.controlDeltaY - startCurvedEdge.controlDeltaY | 0) * ratio) | 0;
          startCurvedEdge.anchorDeltaX = startCurvedEdge.anchorDeltaX + numberToInt((endCurvedEdge.anchorDeltaX - startCurvedEdge.anchorDeltaX | 0) * ratio) | 0;
          startCurvedEdge.anchorDeltaY = startCurvedEdge.anchorDeltaY + numberToInt((endCurvedEdge.anchorDeltaY - startCurvedEdge.anchorDeltaY | 0) * ratio) | 0;
          exportRecord = startCurvedEdge;
          break;
        case 1:
          exportRecord = startRecord.clone();
          break;
      }
      exportShape.records.add_11rb$(ensureNotNull(exportRecord));
    }
    tmp$_9 = this.morphFillStyles.size;
    for (var i_0 = 0; i_0 < tmp$_9; i_0++) {
      exportShape.fillStyles.add_11rb$(this.morphFillStyles.get_za3lpa$(i_0).getMorphedFillStyle_14dthe$(ratio));
    }
    tmp$_10 = this.morphLineStyles.size;
    for (var i_1 = 0; i_1 < tmp$_10; i_1++) {
      exportShape.lineStyles.add_11rb$(this.morphLineStyles.get_za3lpa$(i_1).getMorphedLineStyle_14dthe$(ratio));
    }
    exportShape.export_3yzzr9$(handler);
  };
  TagDefineMorphShape.prototype.convertToCurvedEdge_calbh8$ = function (straightEdge) {
    var curvedEdge = new SWFShapeRecordCurvedEdge();
    curvedEdge.controlDeltaX = straightEdge.deltaX / 2 | 0;
    curvedEdge.controlDeltaY = straightEdge.deltaY / 2 | 0;
    curvedEdge.anchorDeltaX = straightEdge.deltaX;
    curvedEdge.anchorDeltaY = straightEdge.deltaY;
    return curvedEdge;
  };
  Object.defineProperty(TagDefineMorphShape.prototype, 'type', {
    get: function () {
      return this.type_13vyrn$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'name', {
    get: function () {
      return this.name_105taq$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'version', {
    get: function () {
      return this.version_semzgf$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'level', {
    get: function () {
      return this.level_u99xxv$_0;
    }
  });
  TagDefineMorphShape.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var indent2 = repeat(' ', indent + 2 | 0);
    var indent4 = repeat(' ', indent + 4 | 0);
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId);
    str += '\n' + indent2 + 'Bounds:';
    str += '\n' + indent4 + 'StartBounds: ' + this.startBounds.toString();
    str += '\n' + indent4 + 'EndBounds: ' + this.endBounds.toString();
    if (this.morphFillStyles.size > 0) {
      str += '\n' + indent2 + 'FillStyles:';
      tmp$ = this.morphFillStyles.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + indent4 + '[' + toString(i + 1 | 0) + '] ' + this.morphFillStyles.get_za3lpa$(i).toString();
      }
    }if (this.morphLineStyles.size > 0) {
      str += '\n' + indent2 + 'LineStyles:';
      tmp$_0 = this.morphLineStyles.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + indent4 + '[' + toString(i_0 + 1 | 0) + '] ' + this.morphLineStyles.get_za3lpa$(i_0).toString();
      }
    }str += this.startEdges.toString_za3lpa$(indent + 2 | 0);
    str += this.endEdges.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineMorphShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineMorphShape',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineMorphShape2() {
    TagDefineMorphShape2$Companion_getInstance();
    TagDefineMorphShape.call(this);
    this.usesNonScalingStrokes = false;
    this.usesScalingStrokes = false;
    this.type_b6qhql$_0 = 84;
    this.name_bagn7i$_0 = 'DefineMorphShape2';
    this.version_jrnf8x$_0 = 8;
    this.level_49i04j$_0 = 2;
  }
  function TagDefineMorphShape2$Companion() {
    TagDefineMorphShape2$Companion_instance = this;
    this.TYPE = 84;
  }
  TagDefineMorphShape2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineMorphShape2$Companion_instance = null;
  function TagDefineMorphShape2$Companion_getInstance() {
    if (TagDefineMorphShape2$Companion_instance === null) {
      new TagDefineMorphShape2$Companion();
    }return TagDefineMorphShape2$Companion_instance;
  }
  TagDefineMorphShape2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var tmp$, tmp$_0;
    this.characterId = data.readUI16();
    this.startBounds = data.readRECT();
    this.endBounds = data.readRECT();
    this.startEdgeBounds = data.readRECT();
    this.endEdgeBounds = data.readRECT();
    var flags = data.readUI8();
    this.usesNonScalingStrokes = (flags & 2) !== 0;
    this.usesScalingStrokes = (flags & 1) !== 0;
    var offset = data.readUI32();
    var fillStyleCount = data.readUI8();
    if (fillStyleCount === 255) {
      fillStyleCount = data.readUI16();
    }tmp$ = fillStyleCount;
    for (var i = 0; i < tmp$; i++) {
      this.morphFillStyles.add_11rb$(data.readMORPHFILLSTYLE_za3lpa$());
    }
    var lineStyleCount = data.readUI8();
    if (lineStyleCount === 255) {
      lineStyleCount = data.readUI16();
    }tmp$_0 = lineStyleCount;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      this.morphLineStyles.add_11rb$(data.readMORPHLINESTYLE2_za3lpa$());
    }
    this.startEdges = data.readSHAPE_14dthe$();
    this.endEdges = data.readSHAPE_14dthe$();
  };
  Object.defineProperty(TagDefineMorphShape2.prototype, 'type', {
    get: function () {
      return this.type_b6qhql$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape2.prototype, 'name', {
    get: function () {
      return this.name_bagn7i$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape2.prototype, 'version', {
    get: function () {
      return this.version_jrnf8x$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape2.prototype, 'level', {
    get: function () {
      return this.level_49i04j$_0;
    }
  });
  TagDefineMorphShape2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var indent2 = repeat(' ', indent + 2 | 0);
    var indent4 = repeat(' ', indent + 4 | 0);
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId);
    str += '\n' + indent2 + 'Bounds:';
    str += '\n' + indent4 + 'StartBounds: ' + this.startBounds.toString();
    str += '\n' + indent4 + 'EndBounds: ' + this.endBounds.toString();
    str += '\n' + indent4 + 'StartEdgeBounds: ' + this.startEdgeBounds.toString();
    str += '\n' + indent4 + 'EndEdgeBounds: ' + this.endEdgeBounds.toString();
    if (this.morphFillStyles.size > 0) {
      str += '\n' + indent2 + 'FillStyles:';
      tmp$ = this.morphFillStyles.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + indent4 + '[' + toString(i + 1 | 0) + '] ' + this.morphFillStyles.get_za3lpa$(i).toString();
      }
    }if (this.morphLineStyles.size > 0) {
      str += '\n' + indent2 + 'LineStyles:';
      tmp$_0 = this.morphLineStyles.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + indent4 + '[' + toString(i_0 + 1 | 0) + '] ' + this.morphLineStyles.get_za3lpa$(i_0).toString();
      }
    }str += this.startEdges.toString_za3lpa$(indent + 2 | 0);
    str += this.endEdges.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineMorphShape2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineMorphShape2',
    interfaces: [TagDefineMorphShape, ITag]
  };
  function TagDefineScalingGrid() {
    TagDefineScalingGrid$Companion_getInstance();
    _BaseTag.call(this);
    this.splitter_r6glwa$_0 = this.splitter_r6glwa$_0;
    this.characterId_fxqoup$_0 = 0;
    this.type_92obif$_0 = 78;
    this.name_8yy61i$_0 = 'DefineScalingGrid';
    this.version_w62io5$_0 = 8;
    this.level_6wrawh$_0 = 1;
  }
  function TagDefineScalingGrid$Companion() {
    TagDefineScalingGrid$Companion_instance = this;
    this.TYPE = 78;
  }
  TagDefineScalingGrid$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineScalingGrid$Companion_instance = null;
  function TagDefineScalingGrid$Companion_getInstance() {
    if (TagDefineScalingGrid$Companion_instance === null) {
      new TagDefineScalingGrid$Companion();
    }return TagDefineScalingGrid$Companion_instance;
  }
  Object.defineProperty(TagDefineScalingGrid.prototype, 'splitter', {
    get: function () {
      if (this.splitter_r6glwa$_0 == null)
        return throwUPAE('splitter');
      return this.splitter_r6glwa$_0;
    },
    set: function (splitter) {
      this.splitter_r6glwa$_0 = splitter;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'characterId', {
    get: function () {
      return this.characterId_fxqoup$_0;
    },
    set: function (characterId) {
      this.characterId_fxqoup$_0 = characterId;
    }
  });
  TagDefineScalingGrid.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.splitter = data.readRECT();
  };
  Object.defineProperty(TagDefineScalingGrid.prototype, 'type', {
    get: function () {
      return this.type_92obif$_0;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'name', {
    get: function () {
      return this.name_8yy61i$_0;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'version', {
    get: function () {
      return this.version_w62io5$_0;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'level', {
    get: function () {
      return this.level_6wrawh$_0;
    }
  });
  TagDefineScalingGrid.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'CharacterID: ' + toString(this.characterId) + ', ' + 'Splitter: ' + toString(this.splitter);
  };
  TagDefineScalingGrid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineScalingGrid',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineSceneAndFrameLabelData() {
    TagDefineSceneAndFrameLabelData$Companion_getInstance();
    _BaseTag.call(this);
    this.scenes = ArrayList_init_0();
    this.frameLabels = ArrayList_init_0();
    this.type_lj9kt6$_0 = 86;
    this.name_lmzqa3$_0 = 'DefineSceneAndFrameLabelData';
    this.version_oog96s$_0 = 9;
    this.level_wehf74$_0 = 1;
  }
  function TagDefineSceneAndFrameLabelData$Companion() {
    TagDefineSceneAndFrameLabelData$Companion_instance = this;
    this.TYPE = 86;
  }
  TagDefineSceneAndFrameLabelData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineSceneAndFrameLabelData$Companion_instance = null;
  function TagDefineSceneAndFrameLabelData$Companion_getInstance() {
    if (TagDefineSceneAndFrameLabelData$Companion_instance === null) {
      new TagDefineSceneAndFrameLabelData$Companion();
    }return TagDefineSceneAndFrameLabelData$Companion_instance;
  }
  TagDefineSceneAndFrameLabelData.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var sceneCount = data.readEncodedU32();
    for (var i = 0; i < sceneCount; i++) {
      var sceneOffset = data.readEncodedU32();
      var sceneName = data.readString();
      this.scenes.add_11rb$(new SWFScene(sceneOffset, sceneName));
    }
    var frameLabelCount = data.readEncodedU32();
    for (var i_0 = 0; i_0 < frameLabelCount; i_0++) {
      var frameNumber = data.readEncodedU32();
      var frameLabel = data.readString();
      this.frameLabels.add_11rb$(new SWFFrameLabel(frameNumber, frameLabel));
    }
  };
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'type', {
    get: function () {
      return this.type_lj9kt6$_0;
    }
  });
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'name', {
    get: function () {
      return this.name_lmzqa3$_0;
    }
  });
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'version', {
    get: function () {
      return this.version_oog96s$_0;
    }
  });
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'level', {
    get: function () {
      return this.level_wehf74$_0;
    }
  });
  TagDefineSceneAndFrameLabelData.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.scenes.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Scenes:';
      tmp$ = this.scenes.size;
      for (var i = 0; i < tmp$; i++)
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.scenes.get_za3lpa$(i).toString();
    }if (this.frameLabels.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'FrameLabels:';
      tmp$_0 = this.frameLabels.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++)
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i_0) + '] ' + this.frameLabels.get_za3lpa$(i_0).toString();
    }return str;
  };
  TagDefineSceneAndFrameLabelData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineSceneAndFrameLabelData',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineShape() {
    TagDefineShape$Companion_getInstance();
    _BaseTag.call(this);
    this.shapeBounds_n8b5g7$_0 = this.shapeBounds_n8b5g7$_0;
    this.shapes_7arqbn$_0 = this.shapes_7arqbn$_0;
    this.characterId_u3jll1$_0 = 0;
    this.type_tysj23$_0 = 2;
    this.name_tv2dl6$_0 = 'DefineShape';
    this.version_7beim1$_0 = 1;
    this.level_1gup97$_0 = 1;
  }
  function TagDefineShape$Companion() {
    TagDefineShape$Companion_instance = this;
    this.TYPE = 2;
  }
  TagDefineShape$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape$Companion_instance = null;
  function TagDefineShape$Companion_getInstance() {
    if (TagDefineShape$Companion_instance === null) {
      new TagDefineShape$Companion();
    }return TagDefineShape$Companion_instance;
  }
  Object.defineProperty(TagDefineShape.prototype, 'shapeBounds', {
    get: function () {
      if (this.shapeBounds_n8b5g7$_0 == null)
        return throwUPAE('shapeBounds');
      return this.shapeBounds_n8b5g7$_0;
    },
    set: function (shapeBounds) {
      this.shapeBounds_n8b5g7$_0 = shapeBounds;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'shapes', {
    get: function () {
      if (this.shapes_7arqbn$_0 == null)
        return throwUPAE('shapes');
      return this.shapes_7arqbn$_0;
    },
    set: function (shapes) {
      this.shapes_7arqbn$_0 = shapes;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'characterId', {
    get: function () {
      return this.characterId_u3jll1$_0;
    },
    set: function (characterId) {
      this.characterId_u3jll1$_0 = characterId;
    }
  });
  TagDefineShape.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.shapeBounds = data.readRECT();
    this.shapes = data.readSHAPEWITHSTYLE_5wr77w$(this.level);
  };
  TagDefineShape.prototype.export_3yzzr9$ = function (handler) {
    this.shapes.export_3yzzr9$(handler);
  };
  Object.defineProperty(TagDefineShape.prototype, 'type', {
    get: function () {
      return this.type_tysj23$_0;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'name', {
    get: function () {
      return this.name_tv2dl6$_0;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'version', {
    get: function () {
      return this.version_7beim1$_0;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'level', {
    get: function () {
      return this.level_1gup97$_0;
    }
  });
  TagDefineShape.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Bounds: ' + toString(this.shapeBounds);
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineShape',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineShape2() {
    TagDefineShape2$Companion_getInstance();
    TagDefineShape.call(this);
    this.type_v1ybjv$_0 = 22;
    this.name_uy862y$_0 = 'DefineShape2';
    this.version_9auw93$_0 = 2;
    this.level_z6u8kb$_0 = 2;
  }
  function TagDefineShape2$Companion() {
    TagDefineShape2$Companion_instance = this;
    this.TYPE = 22;
  }
  TagDefineShape2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape2$Companion_instance = null;
  function TagDefineShape2$Companion_getInstance() {
    if (TagDefineShape2$Companion_instance === null) {
      new TagDefineShape2$Companion();
    }return TagDefineShape2$Companion_instance;
  }
  Object.defineProperty(TagDefineShape2.prototype, 'type', {
    get: function () {
      return this.type_v1ybjv$_0;
    }
  });
  Object.defineProperty(TagDefineShape2.prototype, 'name', {
    get: function () {
      return this.name_uy862y$_0;
    }
  });
  Object.defineProperty(TagDefineShape2.prototype, 'version', {
    get: function () {
      return this.version_9auw93$_0;
    }
  });
  Object.defineProperty(TagDefineShape2.prototype, 'level', {
    get: function () {
      return this.level_z6u8kb$_0;
    }
  });
  TagDefineShape2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Bounds: ' + toString(this.shapeBounds);
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineShape2',
    interfaces: [TagDefineShape, IDefinitionTag]
  };
  function TagDefineShape3() {
    TagDefineShape3$Companion_getInstance();
    TagDefineShape2.call(this);
    this.type_parg78$_0 = 32;
    this.name_pehlo5$_0 = 'DefineShape3';
    this.version_61uxgm$_0 = 3;
    this.level_70nccm$_0 = 3;
  }
  function TagDefineShape3$Companion() {
    TagDefineShape3$Companion_instance = this;
    this.TYPE = 32;
  }
  TagDefineShape3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape3$Companion_instance = null;
  function TagDefineShape3$Companion_getInstance() {
    if (TagDefineShape3$Companion_instance === null) {
      new TagDefineShape3$Companion();
    }return TagDefineShape3$Companion_instance;
  }
  Object.defineProperty(TagDefineShape3.prototype, 'type', {
    get: function () {
      return this.type_parg78$_0;
    }
  });
  Object.defineProperty(TagDefineShape3.prototype, 'name', {
    get: function () {
      return this.name_pehlo5$_0;
    }
  });
  Object.defineProperty(TagDefineShape3.prototype, 'version', {
    get: function () {
      return this.version_61uxgm$_0;
    }
  });
  Object.defineProperty(TagDefineShape3.prototype, 'level', {
    get: function () {
      return this.level_70nccm$_0;
    }
  });
  TagDefineShape3.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Bounds: ' + toString(this.shapeBounds);
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineShape3',
    interfaces: [TagDefineShape2, IDefinitionTag]
  };
  function TagDefineShape4() {
    TagDefineShape4$Companion_getInstance();
    TagDefineShape3.call(this);
    this.edgeBounds_6q484l$_0 = this.edgeBounds_6q484l$_0;
    this.usesFillWindingRule = false;
    this.usesNonScalingStrokes = false;
    this.usesScalingStrokes = false;
    this.type_amd5z7$_0 = 83;
    this.name_aq3bg4$_0 = 'DefineShape4';
    this.version_2suyo5$_0 = 8;
    this.level_lsz4pl$_0 = 4;
  }
  function TagDefineShape4$Companion() {
    TagDefineShape4$Companion_instance = this;
    this.TYPE = 83;
  }
  TagDefineShape4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape4$Companion_instance = null;
  function TagDefineShape4$Companion_getInstance() {
    if (TagDefineShape4$Companion_instance === null) {
      new TagDefineShape4$Companion();
    }return TagDefineShape4$Companion_instance;
  }
  Object.defineProperty(TagDefineShape4.prototype, 'edgeBounds', {
    get: function () {
      if (this.edgeBounds_6q484l$_0 == null)
        return throwUPAE('edgeBounds');
      return this.edgeBounds_6q484l$_0;
    },
    set: function (edgeBounds) {
      this.edgeBounds_6q484l$_0 = edgeBounds;
    }
  });
  TagDefineShape4.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.shapeBounds = data.readRECT();
    this.edgeBounds = data.readRECT();
    var flags = data.readUI8();
    this.usesFillWindingRule = (flags & 4) !== 0;
    this.usesNonScalingStrokes = (flags & 2) !== 0;
    this.usesScalingStrokes = (flags & 1) !== 0;
    this.shapes = data.readSHAPEWITHSTYLE_5wr77w$(this.level);
  };
  Object.defineProperty(TagDefineShape4.prototype, 'type', {
    get: function () {
      return this.type_amd5z7$_0;
    }
  });
  Object.defineProperty(TagDefineShape4.prototype, 'name', {
    get: function () {
      return this.name_aq3bg4$_0;
    }
  });
  Object.defineProperty(TagDefineShape4.prototype, 'version', {
    get: function () {
      return this.version_2suyo5$_0;
    }
  });
  Object.defineProperty(TagDefineShape4.prototype, 'level', {
    get: function () {
      return this.level_lsz4pl$_0;
    }
  });
  TagDefineShape4.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ';
    if (this.usesFillWindingRule)
      str += 'UsesFillWindingRule, ';
    if (this.usesNonScalingStrokes)
      str += 'UsesNonScalingStrokes, ';
    if (this.usesScalingStrokes)
      str += 'UsesScalingStrokes, ';
    str += 'ShapeBounds: ' + this.shapeBounds + ', EdgeBounds: ' + this.edgeBounds;
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineShape4',
    interfaces: [TagDefineShape3, IDefinitionTag]
  };
  function TagDefineSound() {
    TagDefineSound$Companion_getInstance();
    _BaseTag.call(this);
    this.soundFormat = 0;
    this.soundRate = 0;
    this.soundSize = 0;
    this.soundType = 0;
    this.soundSampleCount = 0;
    this.characterId_crnbn7$_0 = 0;
    this.soundData = new FlashByteArray();
    this.type_no2etz$_0 = 14;
    this.name_nrskaw$_0 = 'DefineSound';
    this.version_6xjhwn$_0 = 1;
    this.level_ri77wz$_0 = 1;
  }
  function TagDefineSound$Companion() {
    TagDefineSound$Companion_instance = this;
    this.TYPE = 14;
  }
  TagDefineSound$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineSound$Companion_instance = null;
  function TagDefineSound$Companion_getInstance() {
    if (TagDefineSound$Companion_instance === null) {
      new TagDefineSound$Companion();
    }return TagDefineSound$Companion_instance;
  }
  Object.defineProperty(TagDefineSound.prototype, 'characterId', {
    get: function () {
      return this.characterId_crnbn7$_0;
    },
    set: function (characterId) {
      this.characterId_crnbn7$_0 = characterId;
    }
  });
  TagDefineSound.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.soundFormat = data.readUB_za3lpa$(4);
    this.soundRate = data.readUB_za3lpa$(2);
    this.soundSize = data.readUB_za3lpa$(1);
    this.soundType = data.readUB_za3lpa$(1);
    this.soundSampleCount = data.readUI32();
    this.soundData = toFlash(data.readBytes_za3lpa$(length - 7 | 0));
  };
  Object.defineProperty(TagDefineSound.prototype, 'type', {
    get: function () {
      return this.type_no2etz$_0;
    }
  });
  Object.defineProperty(TagDefineSound.prototype, 'name', {
    get: function () {
      return this.name_nrskaw$_0;
    }
  });
  Object.defineProperty(TagDefineSound.prototype, 'version', {
    get: function () {
      return this.version_6xjhwn$_0;
    }
  });
  Object.defineProperty(TagDefineSound.prototype, 'level', {
    get: function () {
      return this.level_ri77wz$_0;
    }
  });
  TagDefineSound.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SoundID: ' + this.characterId + ', Format: ' + SoundCompression_getInstance().toString_za3lpa$(this.soundFormat) + ', Rate: ' + SoundRate_getInstance().toString_za3lpa$(this.soundRate) + ', Size: ' + SoundSize_getInstance().toString_za3lpa$(this.soundSize) + ', Type: ' + SoundType_getInstance().toString_za3lpa$(this.soundType) + ', Samples: ' + this.soundSampleCount;
  };
  TagDefineSound.prototype.processMP3_kva2th$ = function (mp3) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var i = 0;
    var beginIdx = 0;
    var endIdx = mp3.length;
    var samples = 0;
    var firstFrame = true;
    var samplingrate = 0;
    var channelmode = 0;
    var frame = new MPEGFrame();
    var state = 'id3v2';
    while (i < mp3.length) {
      switch (state) {
        case 'id3v2':
          if (mp3.get_za3lpa$(i) === 73 && mp3.get_za3lpa$(i + 1 | 0) === 68 && mp3.get_za3lpa$(i + 2 | 0) === 51) {
            i = i + (10 + (mp3.get_za3lpa$(i + 6 | 0) << 21 | mp3.get_za3lpa$(i + 7 | 0) << 14 | mp3.get_za3lpa$(i + 8 | 0) << 7 | mp3.get_za3lpa$(i + 9 | 0))) | 0;
          }
          beginIdx = i;
          state = 'sync';
          break;
        case 'sync':
          if (mp3.get_za3lpa$(i) === 255 && (mp3.get_za3lpa$(i + 1 | 0) & 224) === 224) {
            state = 'frame';
          } else if (mp3.get_za3lpa$(i) === 84 && mp3.get_za3lpa$(i + 1 | 0) === 65 && mp3.get_za3lpa$(i + 2 | 0) === 71) {
            endIdx = i;
            i = mp3.length;
          } else {
            i = i + 1 | 0;
          }

          break;
        case 'frame':
          frame.setHeaderByteAt_vux9f0$(0, mp3.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$)));
          frame.setHeaderByteAt_vux9f0$(1, mp3.get_za3lpa$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)));
          frame.setHeaderByteAt_vux9f0$(2, mp3.get_za3lpa$((tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1)));
          frame.setHeaderByteAt_vux9f0$(3, mp3.get_za3lpa$((tmp$_2 = i, i = tmp$_2 + 1 | 0, tmp$_2)));
          if (frame.hasCRC) {
            frame.setCRCByteAt_vux9f0$(0, mp3.get_za3lpa$((tmp$_3 = i, i = tmp$_3 + 1 | 0, tmp$_3)));
            frame.setCRCByteAt_vux9f0$(1, mp3.get_za3lpa$((tmp$_4 = i, i = tmp$_4 + 1 | 0, tmp$_4)));
          }
          if (firstFrame) {
            firstFrame = false;
            samplingrate = frame.samplingrate;
            channelmode = frame.channelMode;
          }
          samples = samples + frame.samples | 0;
          i = i + frame.size | 0;
          state = 'sync';
          break;
      }
    }
    this.soundSampleCount = samples;
    this.soundFormat = 2;
    this.soundSize = 1;
    this.soundType = channelmode === MPEGFrame$Companion_getInstance().CHANNEL_MODE_MONO ? 0 : 1;
    switch (samplingrate) {
      case 44100:
        tmp$_5 = 3;
        break;
      case 22050:
        tmp$_5 = 2;
        break;
      case 11025:
        tmp$_5 = 1;
        break;
      default:throw Error_init('Unsupported sampling rate: ' + samplingrate + ' Hz');
    }
    this.soundRate = tmp$_5;
    this.soundData.length = 0;
    this.soundData.writeShort_za3lpa$(0);
    this.soundData.writeBytes_rihzz6$(mp3, beginIdx, endIdx - beginIdx | 0);
  };
  TagDefineSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineSound',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineSprite() {
    TagDefineSprite$Companion_getInstance();
    SWFTimelineContainer.call(this);
    this.frameCount = 0;
    this.characterId_5bqcyh$_0 = 0;
    this.type_8abh0x$_0 = 39;
    this.name_8e1mhu$_0 = 'DefineSprite';
    this.version_esounn$_0 = 3;
    this.level_n5bk93$_0 = 1;
  }
  function TagDefineSprite$Companion() {
    TagDefineSprite$Companion_instance = this;
    this.TYPE = 39;
  }
  TagDefineSprite$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineSprite$Companion_instance = null;
  function TagDefineSprite$Companion_getInstance() {
    if (TagDefineSprite$Companion_instance === null) {
      new TagDefineSprite$Companion();
    }return TagDefineSprite$Companion_instance;
  }
  Object.defineProperty(TagDefineSprite.prototype, 'characterId', {
    get: function () {
      return this.characterId_5bqcyh$_0;
    },
    set: function (characterId) {
      this.characterId_5bqcyh$_0 = characterId;
    }
  });
  function Coroutine$parse_mi9vlk$$default_0($this, data_0, length_0, version_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$version = version_0;
  }
  Coroutine$parse_mi9vlk$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_mi9vlk$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_mi9vlk$$default_0.prototype.constructor = Coroutine$parse_mi9vlk$$default_0;
  Coroutine$parse_mi9vlk$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.characterId = this.local$data.readUI16();
            this.$this.frameCount = this.local$data.readUI16();
            this.state_0 = 2;
            this.result_0 = this.$this.parseTags_t54z5r$(this.local$data, this.local$version, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  TagDefineSprite.prototype.parse_mi9vlk$$default = function (data_0, length_0, version_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_mi9vlk$$default_0(this, data_0, length_0, version_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(TagDefineSprite.prototype, 'type', {
    get: function () {
      return this.type_8abh0x$_0;
    }
  });
  Object.defineProperty(TagDefineSprite.prototype, 'name', {
    get: function () {
      return this.name_8e1mhu$_0;
    }
  });
  Object.defineProperty(TagDefineSprite.prototype, 'version', {
    get: function () {
      return this.version_esounn$_0;
    }
  });
  Object.defineProperty(TagDefineSprite.prototype, 'level', {
    get: function () {
      return this.level_n5bk93$_0;
    }
  });
  TagDefineSprite.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + this.characterId + ', FrameCount: ' + this.frameCount + this.toString_vux9f0$(indent, flags, SWFTimelineContainer.prototype.toString_vux9f0$$default.bind(this));
  };
  TagDefineSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineSprite',
    interfaces: [IDefinitionTag, SWFTimelineContainer]
  };
  function TagDefineText() {
    TagDefineText$Companion_getInstance();
    _BaseTag.call(this);
    this.textBounds_uah8a7$_0 = this.textBounds_uah8a7$_0;
    this.textMatrix_rzlnj1$_0 = this.textMatrix_rzlnj1$_0;
    this.characterId_v67b0f$_0 = 0;
    this.records = ArrayList_init_0();
    this.type_8qi1l5$_0 = 11;
    this.name_8u8722$_0 = 'DefineText';
    this.version_mvy8fp$_0 = 1;
    this.level_97nuu7$_0 = 1;
  }
  function TagDefineText$Companion() {
    TagDefineText$Companion_instance = this;
    this.TYPE = 11;
  }
  TagDefineText$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineText$Companion_instance = null;
  function TagDefineText$Companion_getInstance() {
    if (TagDefineText$Companion_instance === null) {
      new TagDefineText$Companion();
    }return TagDefineText$Companion_instance;
  }
  Object.defineProperty(TagDefineText.prototype, 'textBounds', {
    get: function () {
      if (this.textBounds_uah8a7$_0 == null)
        return throwUPAE('textBounds');
      return this.textBounds_uah8a7$_0;
    },
    set: function (textBounds) {
      this.textBounds_uah8a7$_0 = textBounds;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'textMatrix', {
    get: function () {
      if (this.textMatrix_rzlnj1$_0 == null)
        return throwUPAE('textMatrix');
      return this.textMatrix_rzlnj1$_0;
    },
    set: function (textMatrix) {
      this.textMatrix_rzlnj1$_0 = textMatrix;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'characterId', {
    get: function () {
      return this.characterId_v67b0f$_0;
    },
    set: function (characterId) {
      this.characterId_v67b0f$_0 = characterId;
    }
  });
  TagDefineText.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.textBounds = data.readRECT();
    this.textMatrix = data.readMATRIX();
    var glyphBits = data.readUI8();
    var advanceBits = data.readUI8();
    var record = null;
    while (true) {
      record = data.readTEXTRECORD_1z3cmm$(glyphBits, advanceBits, record, this.level);
      if (record == null)
        break;
      this.records.add_11rb$(record);
    }
  };
  Object.defineProperty(TagDefineText.prototype, 'type', {
    get: function () {
      return this.type_8qi1l5$_0;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'name', {
    get: function () {
      return this.name_8u8722$_0;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'version', {
    get: function () {
      return this.version_mvy8fp$_0;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'level', {
    get: function () {
      return this.level_97nuu7$_0;
    }
  });
  TagDefineText.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Bounds: ' + toString(this.textBounds) + ', ' + 'Matrix: ' + toString(this.textMatrix);
    if (this.records.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'TextRecords:';
      tmp$ = this.records.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.records.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }return str;
  };
  TagDefineText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineText',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineText2() {
    TagDefineText2$Companion_getInstance();
    TagDefineText.call(this);
    this.type_w8cku9$_0 = 33;
    this.name_wc2qb6$_0 = 'DefineText2';
    this.version_nto1j7$_0 = 3;
    this.level_8ui695$_0 = 2;
  }
  function TagDefineText2$Companion() {
    TagDefineText2$Companion_instance = this;
    this.TYPE = 33;
  }
  TagDefineText2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineText2$Companion_instance = null;
  function TagDefineText2$Companion_getInstance() {
    if (TagDefineText2$Companion_instance === null) {
      new TagDefineText2$Companion();
    }return TagDefineText2$Companion_instance;
  }
  Object.defineProperty(TagDefineText2.prototype, 'type', {
    get: function () {
      return this.type_w8cku9$_0;
    }
  });
  Object.defineProperty(TagDefineText2.prototype, 'name', {
    get: function () {
      return this.name_wc2qb6$_0;
    }
  });
  Object.defineProperty(TagDefineText2.prototype, 'version', {
    get: function () {
      return this.version_nto1j7$_0;
    }
  });
  Object.defineProperty(TagDefineText2.prototype, 'level', {
    get: function () {
      return this.level_8ui695$_0;
    }
  });
  TagDefineText2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Bounds: ' + toString(this.textBounds) + ', ' + 'Matrix: ' + toString(this.textMatrix);
    if (this.records.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'TextRecords:';
      tmp$ = this.records.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.records.get_za3lpa$(i).toString();
      }
    }return str;
  };
  TagDefineText2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineText2',
    interfaces: [TagDefineText, IDefinitionTag]
  };
  function TagDefineVideoStream() {
    TagDefineVideoStream$Companion_getInstance();
    _BaseTag.call(this);
    this.numFrames = 0;
    this.width = 0;
    this.height = 0;
    this.deblocking = 0;
    this.smoothing = false;
    this.codecId = 0;
    this.characterId_p4qu4f$_0 = 0;
    this.type_ls8r7v$_0 = 60;
    this.name_lvywos$_0 = 'DefineVideoStream';
    this.version_4plk5p$_0 = 6;
    this.level_uwc44h$_0 = 1;
  }
  function TagDefineVideoStream$Companion() {
    TagDefineVideoStream$Companion_instance = this;
    this.TYPE = 60;
  }
  TagDefineVideoStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineVideoStream$Companion_instance = null;
  function TagDefineVideoStream$Companion_getInstance() {
    if (TagDefineVideoStream$Companion_instance === null) {
      new TagDefineVideoStream$Companion();
    }return TagDefineVideoStream$Companion_instance;
  }
  Object.defineProperty(TagDefineVideoStream.prototype, 'characterId', {
    get: function () {
      return this.characterId_p4qu4f$_0;
    },
    set: function (characterId) {
      this.characterId_p4qu4f$_0 = characterId;
    }
  });
  TagDefineVideoStream.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.numFrames = data.readUI16();
    this.width = data.readUI16();
    this.height = data.readUI16();
    data.readUB_za3lpa$(4);
    this.deblocking = data.readUB_za3lpa$(3);
    this.smoothing = data.readUB_za3lpa$(1) === 1;
    this.codecId = data.readUI8();
  };
  Object.defineProperty(TagDefineVideoStream.prototype, 'type', {
    get: function () {
      return this.type_ls8r7v$_0;
    }
  });
  Object.defineProperty(TagDefineVideoStream.prototype, 'name', {
    get: function () {
      return this.name_lvywos$_0;
    }
  });
  Object.defineProperty(TagDefineVideoStream.prototype, 'version', {
    get: function () {
      return this.version_4plk5p$_0;
    }
  });
  Object.defineProperty(TagDefineVideoStream.prototype, 'level', {
    get: function () {
      return this.level_uwc44h$_0;
    }
  });
  TagDefineVideoStream.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId) + ', ' + 'Frames: ' + toString(this.numFrames) + ', ' + 'Width: ' + toString(this.width) + ', ' + 'Height: ' + toString(this.height) + ', ' + 'Deblocking: ' + VideoDeblockingType_getInstance().toString_za3lpa$(this.deblocking) + ', ' + 'Smoothing: ' + toString(this.smoothing) + ', ' + 'Codec: ' + VideoCodecID_getInstance().toString_za3lpa$(this.codecId);
  };
  TagDefineVideoStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDefineVideoStream',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDoABC() {
    TagDoABC$Companion_getInstance();
    _BaseTag.call(this);
    this.lazyInitializeFlag = false;
    this.abcName = '';
    this.bytes = new FlashByteArray();
    this._abc_0 = null;
    this.type_iuyii4$_0 = 82;
    this.name_ir8d17$_0 = 'DoABC';
    this.version_iwc16y$_0 = 9;
    this.level_cbkhxm$_0 = 1;
  }
  function TagDoABC$Companion() {
    TagDoABC$Companion_instance = this;
    this.TYPE = 82;
  }
  TagDoABC$Companion.prototype.create_bozslo$ = function (abcData, aName, aLazyInitializeFlag) {
    if (abcData === void 0)
      abcData = null;
    if (aName === void 0)
      aName = '';
    if (aLazyInitializeFlag === void 0)
      aLazyInitializeFlag = true;
    var doABC = new TagDoABC();
    if (abcData != null && abcData.length > 0) {
      doABC.bytes.writeBytes_rihzz6$(abcData);
    }doABC.abcName = aName;
    doABC.lazyInitializeFlag = aLazyInitializeFlag;
    return doABC;
  };
  TagDoABC$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoABC$Companion_instance = null;
  function TagDoABC$Companion_getInstance() {
    if (TagDoABC$Companion_instance === null) {
      new TagDoABC$Companion();
    }return TagDoABC$Companion_instance;
  }
  Object.defineProperty(TagDoABC.prototype, 'abc', {
    get: function () {
      var tmp$;
      if (this._abc_0 == null) {
        this._abc_0 = new ABC();
        (tmp$ = this._abc_0) != null ? tmp$.readFile_39qel5$(openSync(this.bytes.cloneToNewByteArray())) : null;
      }return ensureNotNull(this._abc_0);
    }
  });
  TagDoABC.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    var flags = data.readUI32();
    this.lazyInitializeFlag = (flags & 1) !== 0;
    this.abcName = data.readString();
    this.bytes = toFlash(data.readBytes_za3lpa$(length - (data.position - pos) | 0));
    this._abc_0 = null;
  };
  Object.defineProperty(TagDoABC.prototype, 'type', {
    get: function () {
      return this.type_iuyii4$_0;
    }
  });
  Object.defineProperty(TagDoABC.prototype, 'name', {
    get: function () {
      return this.name_ir8d17$_0;
    }
  });
  Object.defineProperty(TagDoABC.prototype, 'version', {
    get: function () {
      return this.version_iwc16y$_0;
    }
  });
  Object.defineProperty(TagDoABC.prototype, 'level', {
    get: function () {
      return this.level_cbkhxm$_0;
    }
  });
  TagDoABC.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Lazy: ' + toString(this.lazyInitializeFlag) + ', ' + (this.abcName.length > 0 ? 'Name: ' + this.abcName + ', ' : '') + 'Length: ' + toString(this.bytes.length);
  };
  TagDoABC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDoABC',
    interfaces: [_BaseTag, ITag]
  };
  function TagDoABCDeprecated() {
    TagDoABCDeprecated$Companion_getInstance();
    _BaseTag.call(this);
    this.bytes_0 = new FlashByteArray();
    this.type_uzmptr$_0 = 72;
    this.name_uvwkcu$_0 = 'DoABCDeprecated';
    this.version_5cp2wz$_0 = 9;
    this.level_x6uj2v$_0 = 1;
  }
  function TagDoABCDeprecated$Companion() {
    TagDoABCDeprecated$Companion_instance = this;
    this.TYPE = 72;
  }
  TagDoABCDeprecated$Companion.prototype.create_yppv6p$ = function (abcData) {
    if (abcData === void 0)
      abcData = null;
    var doABC = new TagDoABCDeprecated();
    if (abcData != null && abcData.length > 0) {
      doABC.bytes_0.writeBytes_rihzz6$(abcData);
    }return doABC;
  };
  TagDoABCDeprecated$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoABCDeprecated$Companion_instance = null;
  function TagDoABCDeprecated$Companion_getInstance() {
    if (TagDoABCDeprecated$Companion_instance === null) {
      new TagDoABCDeprecated$Companion();
    }return TagDoABCDeprecated$Companion_instance;
  }
  TagDoABCDeprecated.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    this.bytes_0 = FlashByteArray_init(data.readBytes_za3lpa$(length - (data.position - pos) | 0));
  };
  Object.defineProperty(TagDoABCDeprecated.prototype, 'type', {
    get: function () {
      return this.type_uzmptr$_0;
    }
  });
  Object.defineProperty(TagDoABCDeprecated.prototype, 'name', {
    get: function () {
      return this.name_uvwkcu$_0;
    }
  });
  Object.defineProperty(TagDoABCDeprecated.prototype, 'version', {
    get: function () {
      return this.version_5cp2wz$_0;
    }
  });
  Object.defineProperty(TagDoABCDeprecated.prototype, 'level', {
    get: function () {
      return this.level_x6uj2v$_0;
    }
  });
  TagDoABCDeprecated.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Length: ' + toString(this.bytes_0.length);
  };
  TagDoABCDeprecated.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDoABCDeprecated',
    interfaces: [_BaseTag, ITag]
  };
  function TagDoAction() {
    TagDoAction$Companion_getInstance();
    _BaseTag.call(this);
    this.actions = ArrayList_init_0();
    this.labelCount = 0;
    this.type_u0lt74$_0 = 12;
    this.name_twvnq7$_0 = 'DoAction';
    this.version_1nm6j6$_0 = 3;
    this.level_312fl2$_0 = 1;
  }
  function TagDoAction$Companion() {
    TagDoAction$Companion_instance = this;
    this.TYPE = 12;
  }
  TagDoAction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoAction$Companion_instance = null;
  function TagDoAction$Companion_getInstance() {
    if (TagDoAction$Companion_instance === null) {
      new TagDoAction$Companion();
    }return TagDoAction$Companion_instance;
  }
  TagDoAction.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var action;
    while (true) {
      action = data.readACTIONRECORD();
      if (action == null)
        break;
      this.actions.add_11rb$(action);
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.actions);
  };
  Object.defineProperty(TagDoAction.prototype, 'type', {
    get: function () {
      return this.type_u0lt74$_0;
    }
  });
  Object.defineProperty(TagDoAction.prototype, 'name', {
    get: function () {
      return this.name_twvnq7$_0;
    }
  });
  Object.defineProperty(TagDoAction.prototype, 'version', {
    get: function () {
      return this.version_1nm6j6$_0;
    }
  });
  Object.defineProperty(TagDoAction.prototype, 'level', {
    get: function () {
      return this.level_312fl2$_0;
    }
  });
  TagDoAction.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Records: ' + toString(this.actions.size);
    if ((flags & 2) === 0) {
      tmp$ = this.actions.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this.actions.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    } else {
      var context = new ActionExecutionContext(this.actions, ArrayList_init_0(), this.labelCount);
      tmp$_0 = this.actions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + this.actions.get_za3lpa$(i_0).toBytecode_5s0s9g$(indent + 2 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }}
    return str;
  };
  TagDoAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDoAction',
    interfaces: [_BaseTag, ITag]
  };
  function TagDoInitAction() {
    TagDoInitAction$Companion_getInstance();
    TagDoAction.call(this);
    this.spriteId = 0;
    this.type_v35s1s$_0 = 59;
    this.name_uzfmkv$_0 = 'DoInitAction';
    this.version_du7f4y$_0 = 6;
    this.level_ysulze$_0 = 1;
  }
  function TagDoInitAction$Companion() {
    TagDoInitAction$Companion_instance = this;
    this.TYPE = 59;
  }
  TagDoInitAction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoInitAction$Companion_instance = null;
  function TagDoInitAction$Companion_getInstance() {
    if (TagDoInitAction$Companion_instance === null) {
      new TagDoInitAction$Companion();
    }return TagDoInitAction$Companion_instance;
  }
  TagDoInitAction.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var tmp$, tmp$_0;
    this.spriteId = data.readUI16();
    while (true) {
      tmp$_0 = this.actions;
      tmp$ = data.readACTIONRECORD();
      if (tmp$ == null) {
        break;
      }tmp$_0.add_11rb$(tmp$);
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_p2ilo1$(this.actions);
  };
  Object.defineProperty(TagDoInitAction.prototype, 'type', {
    get: function () {
      return this.type_v35s1s$_0;
    }
  });
  Object.defineProperty(TagDoInitAction.prototype, 'name', {
    get: function () {
      return this.name_uzfmkv$_0;
    }
  });
  Object.defineProperty(TagDoInitAction.prototype, 'version', {
    get: function () {
      return this.version_du7f4y$_0;
    }
  });
  Object.defineProperty(TagDoInitAction.prototype, 'level', {
    get: function () {
      return this.level_ysulze$_0;
    }
  });
  TagDoInitAction.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SpriteID: ' + toString(this.spriteId) + ', ' + 'Records: ' + toString(this.actions.size);
    if ((flags & 2) === 0) {
      tmp$ = this.actions.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + toString(i) + '] ' + this.actions.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    } else {
      var context = new ActionExecutionContext(this.actions, ArrayList_init_0(), this.labelCount);
      tmp$_0 = this.actions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + this.actions.get_za3lpa$(i_0).toBytecode_5s0s9g$(indent + 2 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }}
    return str;
  };
  TagDoInitAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagDoInitAction',
    interfaces: [TagDoAction, ITag]
  };
  function TagEnableDebugger() {
    TagEnableDebugger$Companion_getInstance();
    _BaseTag.call(this);
    this.password = new FlashByteArray();
    this.type_rpb8z7$_0 = 58;
    this.name_rll3ia$_0 = 'EnableDebugger';
    this.version_py74oh$_0 = 5;
    this.level_2c32qr$_0 = 1;
  }
  function TagEnableDebugger$Companion() {
    TagEnableDebugger$Companion_instance = this;
    this.TYPE = 58;
  }
  TagEnableDebugger$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnableDebugger$Companion_instance = null;
  function TagEnableDebugger$Companion_getInstance() {
    if (TagEnableDebugger$Companion_instance === null) {
      new TagEnableDebugger$Companion();
    }return TagEnableDebugger$Companion_instance;
  }
  TagEnableDebugger.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    if (length > 0) {
      this.password = FlashByteArray_init(data.readBytes_za3lpa$(length));
    }};
  Object.defineProperty(TagEnableDebugger.prototype, 'type', {
    get: function () {
      return this.type_rpb8z7$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger.prototype, 'name', {
    get: function () {
      return this.name_rll3ia$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger.prototype, 'version', {
    get: function () {
      return this.version_py74oh$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger.prototype, 'level', {
    get: function () {
      return this.level_2c32qr$_0;
    }
  });
  TagEnableDebugger.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagEnableDebugger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagEnableDebugger',
    interfaces: [_BaseTag, ITag]
  };
  function TagEnableDebugger2() {
    TagEnableDebugger2$Companion_getInstance();
    TagEnableDebugger.call(this);
    this.reserved_0 = 0;
    this.type_vx6p1f$_0 = 64;
    this.name_vtgjki$_0 = 'EnableDebugger2';
    this.version_2vo1t$_0 = 6;
    this.level_8y27al$_0 = 2;
  }
  function TagEnableDebugger2$Companion() {
    TagEnableDebugger2$Companion_instance = this;
    this.TYPE = 64;
  }
  TagEnableDebugger2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnableDebugger2$Companion_instance = null;
  function TagEnableDebugger2$Companion_getInstance() {
    if (TagEnableDebugger2$Companion_instance === null) {
      new TagEnableDebugger2$Companion();
    }return TagEnableDebugger2$Companion_instance;
  }
  TagEnableDebugger2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.reserved_0 = data.readUI16();
    if (length > 2) {
      this.password = toFlash(data.readBytes_za3lpa$(length - 2 | 0));
    }};
  Object.defineProperty(TagEnableDebugger2.prototype, 'type', {
    get: function () {
      return this.type_vx6p1f$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger2.prototype, 'name', {
    get: function () {
      return this.name_vtgjki$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger2.prototype, 'version', {
    get: function () {
      return this.version_2vo1t$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger2.prototype, 'level', {
    get: function () {
      return this.level_8y27al$_0;
    }
  });
  TagEnableDebugger2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Password: ' + (this.password.length === 0 ? 'null' : this.password.readUTF()) + ', ' + 'Reserved: 0x' + toString_0(this.reserved_0, 16);
  };
  TagEnableDebugger2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagEnableDebugger2',
    interfaces: [TagEnableDebugger, ITag]
  };
  function TagEnableTelemetry() {
    TagEnableTelemetry$Companion_getInstance();
    _BaseTag.call(this);
    this.password_0 = new FlashByteArray();
    this.type_b99zjp$_0 = 93;
    this.name_bd050m$_0 = 'EnableTelemetry';
    this.version_7zc2rb$_0 = 19;
    this.level_22po23$_0 = 1;
  }
  function TagEnableTelemetry$Companion() {
    TagEnableTelemetry$Companion_instance = this;
    this.TYPE = 93;
  }
  TagEnableTelemetry$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnableTelemetry$Companion_instance = null;
  function TagEnableTelemetry$Companion_getInstance() {
    if (TagEnableTelemetry$Companion_instance === null) {
      new TagEnableTelemetry$Companion();
    }return TagEnableTelemetry$Companion_instance;
  }
  TagEnableTelemetry.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    if (length > 2) {
      data.readByte();
      data.readByte();
      this.password_0 = toFlash(data.readBytes_za3lpa$(length - 2 | 0));
    }};
  Object.defineProperty(TagEnableTelemetry.prototype, 'type', {
    get: function () {
      return this.type_b99zjp$_0;
    }
  });
  Object.defineProperty(TagEnableTelemetry.prototype, 'name', {
    get: function () {
      return this.name_bd050m$_0;
    }
  });
  Object.defineProperty(TagEnableTelemetry.prototype, 'version', {
    get: function () {
      return this.version_7zc2rb$_0;
    }
  });
  Object.defineProperty(TagEnableTelemetry.prototype, 'level', {
    get: function () {
      return this.level_22po23$_0;
    }
  });
  TagEnableTelemetry.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagEnableTelemetry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagEnableTelemetry',
    interfaces: [_BaseTag, ITag]
  };
  function TagEnd() {
    TagEnd$Companion_getInstance();
    _BaseTag.call(this);
    this.type_wmbmkw$_0 = 0;
    this.name_wq1s1t$_0 = 'End';
    this.version_wojxvy$_0 = 1;
    this.level_kvoo6y$_0 = 1;
  }
  function TagEnd$Companion() {
    TagEnd$Companion_instance = this;
    this.TYPE = 0;
  }
  TagEnd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnd$Companion_instance = null;
  function TagEnd$Companion_getInstance() {
    if (TagEnd$Companion_instance === null) {
      new TagEnd$Companion();
    }return TagEnd$Companion_instance;
  }
  TagEnd.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
  };
  Object.defineProperty(TagEnd.prototype, 'type', {
    get: function () {
      return this.type_wmbmkw$_0;
    }
  });
  Object.defineProperty(TagEnd.prototype, 'name', {
    get: function () {
      return this.name_wq1s1t$_0;
    }
  });
  Object.defineProperty(TagEnd.prototype, 'version', {
    get: function () {
      return this.version_wojxvy$_0;
    }
  });
  Object.defineProperty(TagEnd.prototype, 'level', {
    get: function () {
      return this.level_kvoo6y$_0;
    }
  });
  TagEnd.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagEnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagEnd',
    interfaces: [_BaseTag, ITag]
  };
  function TagExportAssets() {
    TagExportAssets$Companion_getInstance();
    _BaseTag.call(this);
    this.symbols = ArrayList_init_0();
    this.type_emhanu$_0 = 56;
    this.name_eq7g4r$_0 = 'ExportAssets';
    this.version_4r6luk$_0 = 5;
    this.level_v9guj4$_0 = 1;
  }
  function TagExportAssets$Companion() {
    TagExportAssets$Companion_instance = this;
    this.TYPE = 56;
  }
  TagExportAssets$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagExportAssets$Companion_instance = null;
  function TagExportAssets$Companion_getInstance() {
    if (TagExportAssets$Companion_instance === null) {
      new TagExportAssets$Companion();
    }return TagExportAssets$Companion_instance;
  }
  TagExportAssets.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var numSymbols = data.readUI16();
    for (var i = 0; i < numSymbols; i++) {
      this.symbols.add_11rb$(data.readSYMBOL());
    }
  };
  Object.defineProperty(TagExportAssets.prototype, 'type', {
    get: function () {
      return this.type_emhanu$_0;
    }
  });
  Object.defineProperty(TagExportAssets.prototype, 'name', {
    get: function () {
      return this.name_eq7g4r$_0;
    }
  });
  Object.defineProperty(TagExportAssets.prototype, 'version', {
    get: function () {
      return this.version_4r6luk$_0;
    }
  });
  Object.defineProperty(TagExportAssets.prototype, 'level', {
    get: function () {
      return this.level_v9guj4$_0;
    }
  });
  TagExportAssets.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.symbols.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Assets:';
      tmp$ = this.symbols.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.symbols.get_za3lpa$(i).toString();
      }
    }return str;
  };
  TagExportAssets.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagExportAssets',
    interfaces: [_BaseTag, ITag]
  };
  function TagFileAttributes() {
    TagFileAttributes$Companion_getInstance();
    _BaseTag.call(this);
    this.useDirectBlit = false;
    this.useGPU = false;
    this.hasMetadata = false;
    this.actionscript3 = true;
    this.useNetwork = false;
    this.type_gujye6$_0 = 69;
    this.name_gya3v3$_0 = 'FileAttributes';
    this.version_d8pc8w$_0 = 8;
    this.level_t6n88c$_0 = 1;
  }
  function TagFileAttributes$Companion() {
    TagFileAttributes$Companion_instance = this;
    this.TYPE = 69;
  }
  TagFileAttributes$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagFileAttributes$Companion_instance = null;
  function TagFileAttributes$Companion_getInstance() {
    if (TagFileAttributes$Companion_instance === null) {
      new TagFileAttributes$Companion();
    }return TagFileAttributes$Companion_instance;
  }
  TagFileAttributes.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var flags = data.readUI8();
    this.useDirectBlit = (flags & 64) !== 0;
    this.useGPU = (flags & 32) !== 0;
    this.hasMetadata = (flags & 16) !== 0;
    this.actionscript3 = (flags & 8) !== 0;
    this.useNetwork = (flags & 1) !== 0;
    data.skipBytes_za3lpa$(3);
  };
  Object.defineProperty(TagFileAttributes.prototype, 'type', {
    get: function () {
      return this.type_gujye6$_0;
    }
  });
  Object.defineProperty(TagFileAttributes.prototype, 'name', {
    get: function () {
      return this.name_gya3v3$_0;
    }
  });
  Object.defineProperty(TagFileAttributes.prototype, 'version', {
    get: function () {
      return this.version_d8pc8w$_0;
    }
  });
  Object.defineProperty(TagFileAttributes.prototype, 'level', {
    get: function () {
      return this.level_t6n88c$_0;
    }
  });
  TagFileAttributes.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'AS3: ' + toString(this.actionscript3) + ', ' + 'HasMetadata: ' + toString(this.hasMetadata) + ', ' + 'UseDirectBlit: ' + toString(this.useDirectBlit) + ', ' + 'UseGPU: ' + toString(this.useGPU) + ', ' + 'UseNetwork: ' + toString(this.useNetwork);
  };
  TagFileAttributes.prototype.toString = function () {
    return this.toString_vux9f0$(0, 0);
  };
  TagFileAttributes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagFileAttributes',
    interfaces: [_BaseTag, ITag]
  };
  function TagFrameLabel() {
    TagFrameLabel$Companion_getInstance();
    _BaseTag.call(this);
    this.frameName_wslzzg$_0 = this.frameName_wslzzg$_0;
    this.namedAnchorFlag = false;
    this.type_thvee$_0 = 43;
    this.name_prpxh$_0 = 'FrameLabel';
    this.version_nwggq4$_0 = 3;
    this.level_lb51j4$_0 = 1;
  }
  function TagFrameLabel$Companion() {
    TagFrameLabel$Companion_instance = this;
    this.TYPE = 43;
  }
  TagFrameLabel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagFrameLabel$Companion_instance = null;
  function TagFrameLabel$Companion_getInstance() {
    if (TagFrameLabel$Companion_instance === null) {
      new TagFrameLabel$Companion();
    }return TagFrameLabel$Companion_instance;
  }
  Object.defineProperty(TagFrameLabel.prototype, 'frameName', {
    get: function () {
      if (this.frameName_wslzzg$_0 == null)
        return throwUPAE('frameName');
      return this.frameName_wslzzg$_0;
    },
    set: function (frameName) {
      this.frameName_wslzzg$_0 = frameName;
    }
  });
  TagFrameLabel.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var start = data.position;
    this.frameName = data.readString();
    if ((data.position - start | 0) < length) {
      data.readUI8();
      this.namedAnchorFlag = true;
    }};
  Object.defineProperty(TagFrameLabel.prototype, 'type', {
    get: function () {
      return this.type_thvee$_0;
    }
  });
  Object.defineProperty(TagFrameLabel.prototype, 'name', {
    get: function () {
      return this.name_prpxh$_0;
    }
  });
  Object.defineProperty(TagFrameLabel.prototype, 'version', {
    get: function () {
      return this.version_nwggq4$_0;
    }
  });
  Object.defineProperty(TagFrameLabel.prototype, 'level', {
    get: function () {
      return this.level_lb51j4$_0;
    }
  });
  TagFrameLabel.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = 'Name: ' + this.frameName;
    if (this.namedAnchorFlag) {
      str += ', NamedAnchor = true';
    }return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + str;
  };
  TagFrameLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagFrameLabel',
    interfaces: [_BaseTag, ITag]
  };
  function TagImportAssets() {
    TagImportAssets$Companion_getInstance();
    _BaseTag.call(this);
    this.url_v5uv58$_0 = this.url_v5uv58$_0;
    this.symbols = ArrayList_init_0();
    this.type_sdkqif$_0 = 57;
    this.name_s9ul1i$_0 = 'ImportAssets';
    this.version_m2u87f$_0 = 5;
    this.level_n896an$_0 = 1;
  }
  function TagImportAssets$Companion() {
    TagImportAssets$Companion_instance = this;
    this.TYPE = 57;
  }
  TagImportAssets$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagImportAssets$Companion_instance = null;
  function TagImportAssets$Companion_getInstance() {
    if (TagImportAssets$Companion_instance === null) {
      new TagImportAssets$Companion();
    }return TagImportAssets$Companion_instance;
  }
  Object.defineProperty(TagImportAssets.prototype, 'url', {
    get: function () {
      if (this.url_v5uv58$_0 == null)
        return throwUPAE('url');
      return this.url_v5uv58$_0;
    },
    set: function (url) {
      this.url_v5uv58$_0 = url;
    }
  });
  TagImportAssets.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.url = data.readString();
    var numSymbols = data.readUI16();
    for (var i = 0; i < numSymbols; i++) {
      this.symbols.add_11rb$(data.readSYMBOL());
    }
  };
  Object.defineProperty(TagImportAssets.prototype, 'type', {
    get: function () {
      return this.type_sdkqif$_0;
    }
  });
  Object.defineProperty(TagImportAssets.prototype, 'name', {
    get: function () {
      return this.name_s9ul1i$_0;
    }
  });
  Object.defineProperty(TagImportAssets.prototype, 'version', {
    get: function () {
      return this.version_m2u87f$_0;
    }
  });
  Object.defineProperty(TagImportAssets.prototype, 'level', {
    get: function () {
      return this.level_n896an$_0;
    }
  });
  TagImportAssets.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.symbols.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Assets:';
      tmp$ = this.symbols.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.symbols.get_za3lpa$(i).toString();
      }
    }return str;
  };
  TagImportAssets.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagImportAssets',
    interfaces: [_BaseTag, ITag]
  };
  function TagImportAssets2() {
    TagImportAssets2$Companion_getInstance();
    TagImportAssets.call(this);
    this.type_i7r9dt$_0 = 71;
    this.name_ibheuq$_0 = 'ImportAssets2';
    this.version_2u2q2l$_0 = 8;
    this.level_itmy1$_0 = 2;
  }
  function TagImportAssets2$Companion() {
    TagImportAssets2$Companion_instance = this;
    this.TYPE = 71;
  }
  TagImportAssets2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagImportAssets2$Companion_instance = null;
  function TagImportAssets2$Companion_getInstance() {
    if (TagImportAssets2$Companion_instance === null) {
      new TagImportAssets2$Companion();
    }return TagImportAssets2$Companion_instance;
  }
  TagImportAssets2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.url = data.readString();
    data.readUI8();
    data.readUI8();
    var numSymbols = data.readUI16();
    for (var i = 0; i < numSymbols; i++) {
      this.symbols.add_11rb$(data.readSYMBOL());
    }
  };
  Object.defineProperty(TagImportAssets2.prototype, 'type', {
    get: function () {
      return this.type_i7r9dt$_0;
    }
  });
  Object.defineProperty(TagImportAssets2.prototype, 'name', {
    get: function () {
      return this.name_ibheuq$_0;
    }
  });
  Object.defineProperty(TagImportAssets2.prototype, 'version', {
    get: function () {
      return this.version_2u2q2l$_0;
    }
  });
  Object.defineProperty(TagImportAssets2.prototype, 'level', {
    get: function () {
      return this.level_itmy1$_0;
    }
  });
  TagImportAssets2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagImportAssets2',
    interfaces: [TagImportAssets, ITag]
  };
  function TagJPEGTables() {
    TagJPEGTables$Companion_getInstance();
    _BaseTag.call(this);
    this.jpegTables = new FlashByteArray();
    this.type_rmwni4$_0 = 8;
    this.name_rj6i17$_0 = 'JPEGTables';
    this.version_ro2day$_0 = 1;
    this.level_9il16$_0 = 1;
  }
  function TagJPEGTables$Companion() {
    TagJPEGTables$Companion_instance = this;
    this.TYPE = 8;
  }
  TagJPEGTables$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagJPEGTables$Companion_instance = null;
  function TagJPEGTables$Companion_getInstance() {
    if (TagJPEGTables$Companion_instance === null) {
      new TagJPEGTables$Companion();
    }return TagJPEGTables$Companion_instance;
  }
  TagJPEGTables.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    if (length > 0) {
      this.jpegTables = toFlash(data.readBytes_za3lpa$(length));
    }};
  Object.defineProperty(TagJPEGTables.prototype, 'type', {
    get: function () {
      return this.type_rmwni4$_0;
    }
  });
  Object.defineProperty(TagJPEGTables.prototype, 'name', {
    get: function () {
      return this.name_rj6i17$_0;
    }
  });
  Object.defineProperty(TagJPEGTables.prototype, 'version', {
    get: function () {
      return this.version_ro2day$_0;
    }
  });
  Object.defineProperty(TagJPEGTables.prototype, 'level', {
    get: function () {
      return this.level_9il16$_0;
    }
  });
  TagJPEGTables.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Length: ' + toString(this.jpegTables.length);
  };
  TagJPEGTables.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagJPEGTables',
    interfaces: [_BaseTag, ITag]
  };
  function TagMetadata() {
    TagMetadata$Companion_getInstance();
    _BaseTag.call(this);
    this.xmlString_u9ayvo$_0 = this.xmlString_u9ayvo$_0;
    this.type_a55luq$_0 = 77;
    this.name_a8vrbn$_0 = 'Metadata';
    this.version_wohph8$_0 = 1;
    this.level_yemlew$_0 = 1;
  }
  function TagMetadata$Companion() {
    TagMetadata$Companion_instance = this;
    this.TYPE = 77;
  }
  TagMetadata$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagMetadata$Companion_instance = null;
  function TagMetadata$Companion_getInstance() {
    if (TagMetadata$Companion_instance === null) {
      new TagMetadata$Companion();
    }return TagMetadata$Companion_instance;
  }
  Object.defineProperty(TagMetadata.prototype, 'xmlString', {
    get: function () {
      if (this.xmlString_u9ayvo$_0 == null)
        return throwUPAE('xmlString');
      return this.xmlString_u9ayvo$_0;
    },
    set: function (xmlString) {
      this.xmlString_u9ayvo$_0 = xmlString;
    }
  });
  TagMetadata.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.xmlString = data.readString();
  };
  Object.defineProperty(TagMetadata.prototype, 'type', {
    get: function () {
      return this.type_a55luq$_0;
    }
  });
  Object.defineProperty(TagMetadata.prototype, 'name', {
    get: function () {
      return this.name_a8vrbn$_0;
    }
  });
  Object.defineProperty(TagMetadata.prototype, 'version', {
    get: function () {
      return this.version_wohph8$_0;
    }
  });
  Object.defineProperty(TagMetadata.prototype, 'level', {
    get: function () {
      return this.level_yemlew$_0;
    }
  });
  TagMetadata.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    str += ' ' + this.xmlString;
    return str;
  };
  TagMetadata.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagMetadata',
    interfaces: [_BaseTag, ITag]
  };
  function TagNameCharacter() {
    TagNameCharacter$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_0 = 0;
    this.binaryData_0 = new FlashByteArray();
    this.type_ohjtvx$_0 = 40;
    this.name_ol9zcu$_0 = 'NameCharacter';
    this.version_t06rin$_0 = 3;
    this.level_i4wvdv$_0 = 1;
  }
  function TagNameCharacter$Companion() {
    TagNameCharacter$Companion_instance = this;
    this.TYPE = 40;
  }
  TagNameCharacter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagNameCharacter$Companion_instance = null;
  function TagNameCharacter$Companion_getInstance() {
    if (TagNameCharacter$Companion_instance === null) {
      new TagNameCharacter$Companion();
    }return TagNameCharacter$Companion_instance;
  }
  TagNameCharacter.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId_0 = data.readUI16();
    if (length > 2) {
      this.binaryData_0 = toFlash(data.readBytes_za3lpa$(length - 2 | 0));
    }};
  Object.defineProperty(TagNameCharacter.prototype, 'type', {
    get: function () {
      return this.type_ohjtvx$_0;
    }
  });
  Object.defineProperty(TagNameCharacter.prototype, 'name', {
    get: function () {
      return this.name_ol9zcu$_0;
    }
  });
  Object.defineProperty(TagNameCharacter.prototype, 'version', {
    get: function () {
      return this.version_t06rin$_0;
    }
  });
  Object.defineProperty(TagNameCharacter.prototype, 'level', {
    get: function () {
      return this.level_i4wvdv$_0;
    }
  });
  TagNameCharacter.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + toString(this.characterId_0);
    if (this.binaryData_0.length > 0) {
      this.binaryData_0.position = 0;
      str += ', Name: ' + this.binaryData_0.readUTFBytes_za3lpa$(this.binaryData_0.length - 1 | 0);
      this.binaryData_0.position = 0;
    }return str;
  };
  TagNameCharacter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagNameCharacter',
    interfaces: [_BaseTag, ITag]
  };
  function TagPlaceObject() {
    TagPlaceObject$Companion_getInstance();
    _BaseTag.call(this);
    this.hasClipActions = false;
    this.hasClipDepth = false;
    this.hasName = false;
    this.hasRatio = false;
    this.hasColorTransform = false;
    this.hasMatrix = false;
    this.hasCharacter = false;
    this.hasMove = false;
    this.hasOpaqueBackground = false;
    this.hasVisible = false;
    this.hasImage = false;
    this.hasClassName = false;
    this.hasCacheAsBitmap = false;
    this.hasBlendMode = false;
    this.hasFilterList = false;
    this.characterId = 0;
    this.depth = 0;
    this.matrix = null;
    this.colorTransform = null;
    this.ratio = 0;
    this.instanceName = null;
    this.clipDepth = 0;
    this.clipActions = null;
    this.className = null;
    this.blendMode = 0;
    this.bitmapCache = 0;
    this.bitmapBackgroundColor = 0;
    this.visible = 0;
    this.metaData = null;
    this.surfaceFilterList = ArrayList_init_0();
    this.type_3isv0b$_0 = 4;
    this.name_3f2pje$_0 = 'PlaceObject';
    this.version_2cghmh$_0 = 1;
    this.level_y2hnff$_0 = 1;
  }
  function TagPlaceObject$Companion() {
    TagPlaceObject$Companion_instance = this;
    this.TYPE = 4;
  }
  TagPlaceObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject$Companion_instance = null;
  function TagPlaceObject$Companion_getInstance() {
    if (TagPlaceObject$Companion_instance === null) {
      new TagPlaceObject$Companion();
    }return TagPlaceObject$Companion_instance;
  }
  Object.defineProperty(TagPlaceObject.prototype, 'ratiod', {
    get: function () {
      return this.ratio / 65536.0;
    }
  });
  TagPlaceObject.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    this.characterId = data.readUI16();
    this.depth = data.readUI16();
    this.matrix = data.readMATRIX();
    this.hasCharacter = true;
    this.hasMatrix = true;
    if ((data.position - pos | 0) < length) {
      this.colorTransform = data.readCXFORM();
      this.hasColorTransform = true;
    }};
  Object.defineProperty(TagPlaceObject.prototype, 'type', {
    get: function () {
      return this.type_3isv0b$_0;
    }
  });
  Object.defineProperty(TagPlaceObject.prototype, 'name', {
    get: function () {
      return this.name_3f2pje$_0;
    }
  });
  Object.defineProperty(TagPlaceObject.prototype, 'version', {
    get: function () {
      return this.version_2cghmh$_0;
    }
  });
  Object.defineProperty(TagPlaceObject.prototype, 'level', {
    get: function () {
      return this.level_y2hnff$_0;
    }
  });
  TagPlaceObject.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + toString(this.depth);
    if (this.hasCharacter)
      str += ', CharacterID: ' + this.characterId;
    if (this.hasMatrix)
      str += ', Matrix: ' + toString(this.matrix);
    if (this.hasColorTransform)
      str += ', ColorTransform: ' + toString(this.colorTransform);
    return str;
  };
  TagPlaceObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagPlaceObject',
    interfaces: [IDisplayListTag, _BaseTag]
  };
  function TagPlaceObject2() {
    TagPlaceObject2$Companion_getInstance();
    TagPlaceObject.call(this);
    this.type_7dis91$_0 = 26;
    this.name_7h8xpy$_0 = 'PlaceObject2';
    this.version_lbxmx3$_0 = 3;
    this.level_jn35ph$_0 = 2;
  }
  function TagPlaceObject2$Companion() {
    TagPlaceObject2$Companion_instance = this;
    this.TYPE = 26;
  }
  TagPlaceObject2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject2$Companion_instance = null;
  function TagPlaceObject2$Companion_getInstance() {
    if (TagPlaceObject2$Companion_instance === null) {
      new TagPlaceObject2$Companion();
    }return TagPlaceObject2$Companion_instance;
  }
  TagPlaceObject2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var flags = data.readUI8();
    this.hasClipActions = (flags & 128) !== 0;
    this.hasClipDepth = (flags & 64) !== 0;
    this.hasName = (flags & 32) !== 0;
    this.hasRatio = (flags & 16) !== 0;
    this.hasColorTransform = (flags & 8) !== 0;
    this.hasMatrix = (flags & 4) !== 0;
    this.hasCharacter = (flags & 2) !== 0;
    this.hasMove = (flags & 1) !== 0;
    this.depth = data.readUI16();
    if (this.hasCharacter) {
      this.characterId = data.readUI16();
    }if (this.hasMatrix) {
      this.matrix = data.readMATRIX();
    }if (this.hasColorTransform) {
      this.colorTransform = data.readCXFORMWITHALPHA();
    }if (this.hasRatio) {
      this.ratio = data.readUI16();
    }if (this.hasName) {
      this.instanceName = data.readString();
    }if (this.hasClipDepth) {
      this.clipDepth = data.readUI16();
    }if (this.hasClipActions) {
      this.clipActions = data.readCLIPACTIONS_za3lpa$(version);
    }};
  Object.defineProperty(TagPlaceObject2.prototype, 'type', {
    get: function () {
      return this.type_7dis91$_0;
    }
  });
  Object.defineProperty(TagPlaceObject2.prototype, 'name', {
    get: function () {
      return this.name_7h8xpy$_0;
    }
  });
  Object.defineProperty(TagPlaceObject2.prototype, 'version', {
    get: function () {
      return this.version_lbxmx3$_0;
    }
  });
  Object.defineProperty(TagPlaceObject2.prototype, 'level', {
    get: function () {
      return this.level_jn35ph$_0;
    }
  });
  TagPlaceObject2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + toString(this.depth);
    if (this.hasCharacter)
      str += ', CharacterID: ' + this.characterId;
    if (this.hasMatrix)
      str += ', Matrix: ' + toString(this.matrix);
    if (this.hasColorTransform)
      str += ', ColorTransform: ' + toString(this.colorTransform);
    if (this.hasRatio)
      str += ', Ratio: ' + this.ratio;
    if (this.hasName)
      str += ', Name: ' + toString(this.instanceName);
    if (this.hasClipDepth)
      str += ', ClipDepth: ' + this.clipDepth;
    if (this.hasClipActions && this.clipActions != null)
      str += '\n' + repeat(' ', indent + 2 | 0) + ensureNotNull(this.clipActions).toString_vux9f0$(indent + 2 | 0, flags);
    return str;
  };
  TagPlaceObject2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagPlaceObject2',
    interfaces: [TagPlaceObject, IDisplayListTag]
  };
  function TagPlaceObject3() {
    TagPlaceObject3$Companion_getInstance();
    TagPlaceObject2.call(this);
    this.type_7avhz0$_0 = 70;
    this.name_775ci3$_0 = 'PlaceObject3';
    this.version_i2xo4m$_0 = 8;
    this.level_96jbcq$_0 = 3;
  }
  function TagPlaceObject3$Companion() {
    TagPlaceObject3$Companion_instance = this;
    this.TYPE = 70;
  }
  TagPlaceObject3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject3$Companion_instance = null;
  function TagPlaceObject3$Companion_getInstance() {
    if (TagPlaceObject3$Companion_instance === null) {
      new TagPlaceObject3$Companion();
    }return TagPlaceObject3$Companion_instance;
  }
  TagPlaceObject3.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var tmp$;
    var flags1 = data.readUI8();
    this.hasClipActions = (flags1 & 128) !== 0;
    this.hasClipDepth = (flags1 & 64) !== 0;
    this.hasName = (flags1 & 32) !== 0;
    this.hasRatio = (flags1 & 16) !== 0;
    this.hasColorTransform = (flags1 & 8) !== 0;
    this.hasMatrix = (flags1 & 4) !== 0;
    this.hasCharacter = (flags1 & 2) !== 0;
    this.hasMove = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.hasOpaqueBackground = (flags2 & 64) !== 0;
    this.hasVisible = (flags2 & 32) !== 0;
    this.hasImage = (flags2 & 16) !== 0;
    this.hasClassName = (flags2 & 8) !== 0;
    this.hasCacheAsBitmap = (flags2 & 4) !== 0;
    this.hasBlendMode = (flags2 & 2) !== 0;
    this.hasFilterList = (flags2 & 1) !== 0;
    this.depth = data.readUI16();
    if (this.hasClassName)
      this.className = data.readString();
    if (this.hasCharacter)
      this.characterId = data.readUI16();
    if (this.hasMatrix)
      this.matrix = data.readMATRIX();
    if (this.hasColorTransform)
      this.colorTransform = data.readCXFORMWITHALPHA();
    if (this.hasRatio)
      this.ratio = data.readUI16();
    if (this.hasName)
      this.instanceName = data.readString();
    if (this.hasClipDepth)
      this.clipDepth = data.readUI16();
    if (this.hasFilterList) {
      tmp$ = data.readUI8();
      for (var i = 0; i < tmp$; i++)
        this.surfaceFilterList.add_11rb$(data.readFILTER());
    }if (this.hasBlendMode)
      this.blendMode = data.readUI8();
    if (this.hasCacheAsBitmap)
      this.bitmapCache = data.readUI8();
    if (this.hasVisible)
      this.visible = data.readUI8();
    if (this.hasOpaqueBackground)
      this.bitmapBackgroundColor = data.readRGBA();
    if (this.hasClipActions)
      this.clipActions = data.readCLIPACTIONS_za3lpa$(version);
  };
  Object.defineProperty(TagPlaceObject3.prototype, 'type', {
    get: function () {
      return this.type_7avhz0$_0;
    }
  });
  Object.defineProperty(TagPlaceObject3.prototype, 'name', {
    get: function () {
      return this.name_775ci3$_0;
    }
  });
  Object.defineProperty(TagPlaceObject3.prototype, 'version', {
    get: function () {
      return this.version_i2xo4m$_0;
    }
  });
  Object.defineProperty(TagPlaceObject3.prototype, 'level', {
    get: function () {
      return this.level_96jbcq$_0;
    }
  });
  TagPlaceObject3.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + toString(this.depth);
    if (this.hasClassName)
      str += ', ClassName: ' + toString(this.className);
    if (this.hasCharacter)
      str += ', CharacterID: ' + this.characterId;
    if (this.hasMatrix)
      str += ', Matrix: ' + toString(this.matrix);
    if (this.hasColorTransform)
      str += ', ColorTransform: ' + toString(this.colorTransform);
    if (this.hasRatio)
      str += ', Ratio: ' + this.ratio;
    if (this.hasName)
      str += ', Name: ' + toString(this.instanceName);
    if (this.hasClipDepth)
      str += ', ClipDepth: ' + this.clipDepth;
    if (this.hasBlendMode)
      str += ', BlendMode: ' + BlendMode_getInstance().toString_za3lpa$(this.blendMode);
    if (this.hasCacheAsBitmap)
      str += ', CacheAsBitmap: ' + this.bitmapCache;
    if (this.hasVisible)
      str += ', Visible: ' + this.visible;
    if (this.hasOpaqueBackground)
      str += ', BackgroundColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.bitmapBackgroundColor);
    if (this.hasFilterList) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Filters:';
      tmp$ = this.surfaceFilterList.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.surfaceFilterList.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }if (this.hasClipActions) {
      str += '\n' + repeat(' ', indent + 2 | 0) + ensureNotNull(this.clipActions).toString_vux9f0$(indent + 2 | 0);
    }return str;
  };
  TagPlaceObject3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagPlaceObject3',
    interfaces: [TagPlaceObject2, IDisplayListTag]
  };
  function TagPlaceObject4() {
    TagPlaceObject4$Companion_getInstance();
    TagPlaceObject3.call(this);
    this.type_lz9s71$_0 = 94;
    this.name_lvjmq4$_0 = 'PlaceObject4';
    this.version_etxpc5$_0 = 19;
    this.level_x0y9k7$_0 = 4;
  }
  function TagPlaceObject4$Companion() {
    TagPlaceObject4$Companion_instance = this;
    this.TYPE = 94;
  }
  TagPlaceObject4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject4$Companion_instance = null;
  function TagPlaceObject4$Companion_getInstance() {
    if (TagPlaceObject4$Companion_instance === null) {
      new TagPlaceObject4$Companion();
    }return TagPlaceObject4$Companion_instance;
  }
  function Coroutine$parse_mi9vlk$$default_1($this, data_0, length_0, version_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$length = length_0;
    this.local$version = version_0;
    this.local$async = async_0;
  }
  Coroutine$parse_mi9vlk$$default_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_mi9vlk$$default_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_mi9vlk$$default_1.prototype.constructor = Coroutine$parse_mi9vlk$$default_1;
  Coroutine$parse_mi9vlk$$default_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.parse_mi9vlk$(this.local$data, this.local$length, this.local$version, this.local$async, this, TagPlaceObject3.prototype.parse_mi9vlk$$default.bind(this.$this));
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$data.bytesAvailable > 0) {
              this.$this.metaData = this.local$data.readObject();
            }
            return;
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
  TagPlaceObject4.prototype.parse_mi9vlk$$default = function (data_0, length_0, version_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_mi9vlk$$default_1(this, data_0, length_0, version_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(TagPlaceObject4.prototype, 'type', {
    get: function () {
      return this.type_lz9s71$_0;
    }
  });
  Object.defineProperty(TagPlaceObject4.prototype, 'name', {
    get: function () {
      return this.name_lvjmq4$_0;
    }
  });
  Object.defineProperty(TagPlaceObject4.prototype, 'version', {
    get: function () {
      return this.version_etxpc5$_0;
    }
  });
  Object.defineProperty(TagPlaceObject4.prototype, 'level', {
    get: function () {
      return this.level_x0y9k7$_0;
    }
  });
  TagPlaceObject4.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = this.toString_vux9f0$(indent, 0, TagPlaceObject3.prototype.toString_vux9f0$$default.bind(this));
    if (this.metaData != null) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'MetaData: yes';
    }return str;
  };
  TagPlaceObject4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagPlaceObject4',
    interfaces: [TagPlaceObject3, IDisplayListTag]
  };
  function TagProductInfo() {
    TagProductInfo$Companion_getInstance();
    _BaseTag.call(this);
    this.productId = 0;
    this.edition = 0;
    this.majorVersion = 0;
    this.minorVersion = 0;
    this.build = L0;
    this.compileDate = DateTime.Companion.EPOCH;
    this.type_1612aa$_0 = 41;
    this.name_12awtd$_0 = 'ProductInfo';
    this.version_ovbn9s$_0 = 3;
    this.level_w3nyzo$_0 = 1;
  }
  function TagProductInfo$Companion() {
    TagProductInfo$Companion_instance = this;
    this.TYPE = 41;
  }
  TagProductInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagProductInfo$Companion_instance = null;
  function TagProductInfo$Companion_getInstance() {
    if (TagProductInfo$Companion_instance === null) {
      new TagProductInfo$Companion();
    }return TagProductInfo$Companion_instance;
  }
  TagProductInfo.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.productId = data.readUI32();
    this.edition = data.readUI32();
    this.majorVersion = data.readUI8();
    this.minorVersion = data.readUI8();
    this.build = Kotlin.Long.fromInt(data.readUI32()).add(Kotlin.Long.fromInt(data.readUI32())).shiftLeft(32);
    var sec = Kotlin.Long.fromInt(data.readUI32()).add(Kotlin.Long.fromInt(data.readUI32())).shiftLeft(32);
    this.compileDate = DateTime.Companion.invoke_s8cxhz$(sec);
  };
  Object.defineProperty(TagProductInfo.prototype, 'type', {
    get: function () {
      return this.type_1612aa$_0;
    }
  });
  Object.defineProperty(TagProductInfo.prototype, 'name', {
    get: function () {
      return this.name_12awtd$_0;
    }
  });
  Object.defineProperty(TagProductInfo.prototype, 'version', {
    get: function () {
      return this.version_ovbn9s$_0;
    }
  });
  Object.defineProperty(TagProductInfo.prototype, 'level', {
    get: function () {
      return this.level_w3nyzo$_0;
    }
  });
  TagProductInfo.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ProductID: ' + toString(this.productId) + ', ' + 'Edition: ' + toString(this.edition) + ', ' + 'Version: ' + toString(this.majorVersion) + '.' + toString(this.minorVersion) + ' r' + toString(this.build) + ', ' + 'CompileDate: ' + this.compileDate.toString();
  };
  TagProductInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagProductInfo',
    interfaces: [_BaseTag, ITag]
  };
  function TagPathsArePostScript() {
    TagPathsArePostScript$Companion_getInstance();
    _BaseTag.call(this);
    this.type_dzew0$_0 = 25;
    this.name_hpkcx$_0 = 'PathsArePostScript';
    this.version_fi0uv2$_0 = 2;
    this.level_g4qtey$_0 = 1;
  }
  function TagPathsArePostScript$Companion() {
    TagPathsArePostScript$Companion_instance = this;
    this.TYPE = 25;
  }
  TagPathsArePostScript$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPathsArePostScript$Companion_instance = null;
  function TagPathsArePostScript$Companion_getInstance() {
    if (TagPathsArePostScript$Companion_instance === null) {
      new TagPathsArePostScript$Companion();
    }return TagPathsArePostScript$Companion_instance;
  }
  TagPathsArePostScript.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
  };
  Object.defineProperty(TagPathsArePostScript.prototype, 'type', {
    get: function () {
      return this.type_dzew0$_0;
    }
  });
  Object.defineProperty(TagPathsArePostScript.prototype, 'name', {
    get: function () {
      return this.name_hpkcx$_0;
    }
  });
  Object.defineProperty(TagPathsArePostScript.prototype, 'version', {
    get: function () {
      return this.version_fi0uv2$_0;
    }
  });
  Object.defineProperty(TagPathsArePostScript.prototype, 'level', {
    get: function () {
      return this.level_g4qtey$_0;
    }
  });
  TagPathsArePostScript.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagPathsArePostScript.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagPathsArePostScript',
    interfaces: [_BaseTag, ITag]
  };
  function TagProtect() {
    TagProtect$Companion_getInstance();
    _BaseTag.call(this);
    this.password_0 = new FlashByteArray();
    this.type_siayl8$_0 = 24;
    this.name_sm1425$_0 = 'Protect';
    this.version_j9j5u$_0 = 2;
    this.level_zhc4fi$_0 = 1;
  }
  function TagProtect$Companion() {
    TagProtect$Companion_instance = this;
    this.TYPE = 24;
  }
  TagProtect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagProtect$Companion_instance = null;
  function TagProtect$Companion_getInstance() {
    if (TagProtect$Companion_instance === null) {
      new TagProtect$Companion();
    }return TagProtect$Companion_instance;
  }
  TagProtect.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    if (length > 0) {
      this.password_0 = toFlash(data.readBytes_za3lpa$(length));
    }};
  Object.defineProperty(TagProtect.prototype, 'type', {
    get: function () {
      return this.type_siayl8$_0;
    }
  });
  Object.defineProperty(TagProtect.prototype, 'name', {
    get: function () {
      return this.name_sm1425$_0;
    }
  });
  Object.defineProperty(TagProtect.prototype, 'version', {
    get: function () {
      return this.version_j9j5u$_0;
    }
  });
  Object.defineProperty(TagProtect.prototype, 'level', {
    get: function () {
      return this.level_zhc4fi$_0;
    }
  });
  TagProtect.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagProtect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagProtect',
    interfaces: [_BaseTag, ITag]
  };
  function TagRemoveObject() {
    TagRemoveObject$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId = 0;
    this.depth = 0;
    this.type_3b7xym$_0 = 5;
    this.name_3ey3fj$_0 = 'RemoveObject';
    this.version_i3kmwg$_0 = 1;
    this.level_zb4vac$_0 = 1;
  }
  function TagRemoveObject$Companion() {
    TagRemoveObject$Companion_instance = this;
    this.TYPE = 5;
  }
  TagRemoveObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagRemoveObject$Companion_instance = null;
  function TagRemoveObject$Companion_getInstance() {
    if (TagRemoveObject$Companion_instance === null) {
      new TagRemoveObject$Companion();
    }return TagRemoveObject$Companion_instance;
  }
  TagRemoveObject.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.depth = data.readUI16();
  };
  Object.defineProperty(TagRemoveObject.prototype, 'type', {
    get: function () {
      return this.type_3b7xym$_0;
    }
  });
  Object.defineProperty(TagRemoveObject.prototype, 'name', {
    get: function () {
      return this.name_3ey3fj$_0;
    }
  });
  Object.defineProperty(TagRemoveObject.prototype, 'version', {
    get: function () {
      return this.version_i3kmwg$_0;
    }
  });
  Object.defineProperty(TagRemoveObject.prototype, 'level', {
    get: function () {
      return this.level_zb4vac$_0;
    }
  });
  TagRemoveObject.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'CharacterID: ' + toString(this.characterId) + ', ' + 'Depth: ' + toString(this.depth);
  };
  TagRemoveObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagRemoveObject',
    interfaces: [IDisplayListTag, _BaseTag]
  };
  function TagRemoveObject2() {
    TagRemoveObject2$Companion_getInstance();
    TagRemoveObject.call(this);
    this.type_64vke4$_0 = 28;
    this.name_68lpv1$_0 = 'RemoveObject2';
    this.version_u75h5q$_0 = 3;
    this.level_iswlwy$_0 = 2;
  }
  function TagRemoveObject2$Companion() {
    TagRemoveObject2$Companion_instance = this;
    this.TYPE = 28;
  }
  TagRemoveObject2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagRemoveObject2$Companion_instance = null;
  function TagRemoveObject2$Companion_getInstance() {
    if (TagRemoveObject2$Companion_instance === null) {
      new TagRemoveObject2$Companion();
    }return TagRemoveObject2$Companion_instance;
  }
  TagRemoveObject2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.depth = data.readUI16();
  };
  Object.defineProperty(TagRemoveObject2.prototype, 'type', {
    get: function () {
      return this.type_64vke4$_0;
    }
  });
  Object.defineProperty(TagRemoveObject2.prototype, 'name', {
    get: function () {
      return this.name_68lpv1$_0;
    }
  });
  Object.defineProperty(TagRemoveObject2.prototype, 'version', {
    get: function () {
      return this.version_u75h5q$_0;
    }
  });
  Object.defineProperty(TagRemoveObject2.prototype, 'level', {
    get: function () {
      return this.level_iswlwy$_0;
    }
  });
  TagRemoveObject2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + toString(this.depth);
  };
  TagRemoveObject2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagRemoveObject2',
    interfaces: [TagRemoveObject, IDisplayListTag]
  };
  function TagScriptLimits() {
    TagScriptLimits$Companion_getInstance();
    _BaseTag.call(this);
    this.maxRecursionDepth = 0;
    this.scriptTimeoutSeconds = 0;
    this.type_5datvy$_0 = 65;
    this.name_5h0zcv$_0 = 'ScriptLimits';
    this.version_luavgw$_0 = 7;
    this.level_shcmf0$_0 = 1;
  }
  function TagScriptLimits$Companion() {
    TagScriptLimits$Companion_instance = this;
    this.TYPE = 65;
  }
  TagScriptLimits$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagScriptLimits$Companion_instance = null;
  function TagScriptLimits$Companion_getInstance() {
    if (TagScriptLimits$Companion_instance === null) {
      new TagScriptLimits$Companion();
    }return TagScriptLimits$Companion_instance;
  }
  TagScriptLimits.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.maxRecursionDepth = data.readUI16();
    this.scriptTimeoutSeconds = data.readUI16();
  };
  Object.defineProperty(TagScriptLimits.prototype, 'type', {
    get: function () {
      return this.type_5datvy$_0;
    }
  });
  Object.defineProperty(TagScriptLimits.prototype, 'name', {
    get: function () {
      return this.name_5h0zcv$_0;
    }
  });
  Object.defineProperty(TagScriptLimits.prototype, 'version', {
    get: function () {
      return this.version_luavgw$_0;
    }
  });
  Object.defineProperty(TagScriptLimits.prototype, 'level', {
    get: function () {
      return this.level_shcmf0$_0;
    }
  });
  TagScriptLimits.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'MaxRecursionDepth: ' + toString(this.maxRecursionDepth) + ', ' + 'ScriptTimeoutSeconds: ' + toString(this.scriptTimeoutSeconds);
  };
  TagScriptLimits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagScriptLimits',
    interfaces: [_BaseTag, ITag]
  };
  function TagSetBackgroundColor() {
    TagSetBackgroundColor$Companion_getInstance();
    _BaseTag.call(this);
    this.color = 16777215;
    this.type_rt19ha$_0 = 9;
    this.name_rwrey7$_0 = 'SetBackgroundColor';
    this.version_rhk78g$_0 = 1;
    this.level_dpzi18$_0 = 1;
  }
  function TagSetBackgroundColor$Companion() {
    TagSetBackgroundColor$Companion_instance = this;
    this.TYPE = 9;
  }
  TagSetBackgroundColor$Companion.prototype.create_za3lpa$ = function (aColor) {
    if (aColor === void 0)
      aColor = 16777215;
    var setBackgroundColor = new TagSetBackgroundColor();
    setBackgroundColor.color = aColor;
    return setBackgroundColor;
  };
  TagSetBackgroundColor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSetBackgroundColor$Companion_instance = null;
  function TagSetBackgroundColor$Companion_getInstance() {
    if (TagSetBackgroundColor$Companion_instance === null) {
      new TagSetBackgroundColor$Companion();
    }return TagSetBackgroundColor$Companion_instance;
  }
  TagSetBackgroundColor.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.color = data.readRGB();
  };
  Object.defineProperty(TagSetBackgroundColor.prototype, 'type', {
    get: function () {
      return this.type_rt19ha$_0;
    }
  });
  Object.defineProperty(TagSetBackgroundColor.prototype, 'name', {
    get: function () {
      return this.name_rwrey7$_0;
    }
  });
  Object.defineProperty(TagSetBackgroundColor.prototype, 'version', {
    get: function () {
      return this.version_rhk78g$_0;
    }
  });
  Object.defineProperty(TagSetBackgroundColor.prototype, 'level', {
    get: function () {
      return this.level_dpzi18$_0;
    }
  });
  TagSetBackgroundColor.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Color: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.color);
  };
  TagSetBackgroundColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSetBackgroundColor',
    interfaces: [_BaseTag, ITag]
  };
  function TagSetTabIndex() {
    TagSetTabIndex$Companion_getInstance();
    _BaseTag.call(this);
    this.depth = 0;
    this.tabIndex = 0;
    this.type_vczk5w$_0 = 66;
    this.name_v99eoz$_0 = 'SetTabIndex';
    this.version_me6lyq$_0 = 7;
    this.level_qc7efy$_0 = 1;
  }
  function TagSetTabIndex$Companion() {
    TagSetTabIndex$Companion_instance = this;
    this.TYPE = 66;
  }
  TagSetTabIndex$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSetTabIndex$Companion_instance = null;
  function TagSetTabIndex$Companion_getInstance() {
    if (TagSetTabIndex$Companion_instance === null) {
      new TagSetTabIndex$Companion();
    }return TagSetTabIndex$Companion_instance;
  }
  TagSetTabIndex.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.depth = data.readUI16();
    this.tabIndex = data.readUI16();
  };
  Object.defineProperty(TagSetTabIndex.prototype, 'type', {
    get: function () {
      return this.type_vczk5w$_0;
    }
  });
  Object.defineProperty(TagSetTabIndex.prototype, 'name', {
    get: function () {
      return this.name_v99eoz$_0;
    }
  });
  Object.defineProperty(TagSetTabIndex.prototype, 'version', {
    get: function () {
      return this.version_me6lyq$_0;
    }
  });
  Object.defineProperty(TagSetTabIndex.prototype, 'level', {
    get: function () {
      return this.level_qc7efy$_0;
    }
  });
  TagSetTabIndex.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + toString(this.depth) + ', ' + 'TabIndex: ' + toString(this.tabIndex);
  };
  TagSetTabIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSetTabIndex',
    interfaces: [_BaseTag, ITag]
  };
  function TagShowFrame() {
    TagShowFrame$Companion_getInstance();
    _BaseTag.call(this);
    this.type_9knla3$_0 = 1;
    this.name_9odqr0$_0 = 'ShowFrame';
    this.version_qndnnh$_0 = 1;
    this.level_gr43n3$_0 = 1;
  }
  function TagShowFrame$Companion() {
    TagShowFrame$Companion_instance = this;
    this.TYPE = 1;
  }
  TagShowFrame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagShowFrame$Companion_instance = null;
  function TagShowFrame$Companion_getInstance() {
    if (TagShowFrame$Companion_instance === null) {
      new TagShowFrame$Companion();
    }return TagShowFrame$Companion_instance;
  }
  TagShowFrame.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
  };
  Object.defineProperty(TagShowFrame.prototype, 'type', {
    get: function () {
      return this.type_9knla3$_0;
    }
  });
  Object.defineProperty(TagShowFrame.prototype, 'name', {
    get: function () {
      return this.name_9odqr0$_0;
    }
  });
  Object.defineProperty(TagShowFrame.prototype, 'version', {
    get: function () {
      return this.version_qndnnh$_0;
    }
  });
  Object.defineProperty(TagShowFrame.prototype, 'level', {
    get: function () {
      return this.level_gr43n3$_0;
    }
  });
  TagShowFrame.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagShowFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagShowFrame',
    interfaces: [IDisplayListTag, _BaseTag]
  };
  function TagSoundStreamBlock() {
    TagSoundStreamBlock$Companion_getInstance();
    _BaseTag.call(this);
    this.soundData = new FlashByteArray();
    this.type_hhp2ib$_0 = 19;
    this.name_hlf7z8$_0 = 'SoundStreamBlock';
    this.version_u585fv$_0 = 1;
    this.level_lx2a6h$_0 = 1;
  }
  function TagSoundStreamBlock$Companion() {
    TagSoundStreamBlock$Companion_instance = this;
    this.TYPE = 19;
  }
  TagSoundStreamBlock$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSoundStreamBlock$Companion_instance = null;
  function TagSoundStreamBlock$Companion_getInstance() {
    if (TagSoundStreamBlock$Companion_instance === null) {
      new TagSoundStreamBlock$Companion();
    }return TagSoundStreamBlock$Companion_instance;
  }
  TagSoundStreamBlock.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.soundData = toFlash(data.readBytes_za3lpa$(length));
  };
  Object.defineProperty(TagSoundStreamBlock.prototype, 'type', {
    get: function () {
      return this.type_hhp2ib$_0;
    }
  });
  Object.defineProperty(TagSoundStreamBlock.prototype, 'name', {
    get: function () {
      return this.name_hlf7z8$_0;
    }
  });
  Object.defineProperty(TagSoundStreamBlock.prototype, 'version', {
    get: function () {
      return this.version_u585fv$_0;
    }
  });
  Object.defineProperty(TagSoundStreamBlock.prototype, 'level', {
    get: function () {
      return this.level_lx2a6h$_0;
    }
  });
  TagSoundStreamBlock.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Length: ' + toString(this.soundData.length);
  };
  TagSoundStreamBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSoundStreamBlock',
    interfaces: [_BaseTag, ITag]
  };
  function TagSoundStreamHead() {
    TagSoundStreamHead$Companion_getInstance();
    _BaseTag.call(this);
    this.playbackSoundRate = 0;
    this.playbackSoundSize = 0;
    this.playbackSoundType = 0;
    this.streamSoundCompression = 0;
    this.streamSoundRate = 0;
    this.streamSoundSize = 0;
    this.streamSoundType = 0;
    this.streamSoundSampleCount = 0;
    this.latencySeek = 0;
    this.type_edpfuk$_0 = 18;
    this.name_ehflbh$_0 = 'SoundStreamHead';
    this.version_k58uji$_0 = 1;
    this.level_nphbbi$_0 = 1;
  }
  function TagSoundStreamHead$Companion() {
    TagSoundStreamHead$Companion_instance = this;
    this.TYPE = 18;
  }
  TagSoundStreamHead$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSoundStreamHead$Companion_instance = null;
  function TagSoundStreamHead$Companion_getInstance() {
    if (TagSoundStreamHead$Companion_instance === null) {
      new TagSoundStreamHead$Companion();
    }return TagSoundStreamHead$Companion_instance;
  }
  TagSoundStreamHead.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    data.readUB_za3lpa$(4);
    this.playbackSoundRate = data.readUB_za3lpa$(2);
    this.playbackSoundSize = data.readUB_za3lpa$(1);
    this.playbackSoundType = data.readUB_za3lpa$(1);
    this.streamSoundCompression = data.readUB_za3lpa$(4);
    this.streamSoundRate = data.readUB_za3lpa$(2);
    this.streamSoundSize = data.readUB_za3lpa$(1);
    this.streamSoundType = data.readUB_za3lpa$(1);
    this.streamSoundSampleCount = data.readUI16();
    if (this.streamSoundCompression === 2)
      this.latencySeek = data.readSI16();
  };
  Object.defineProperty(TagSoundStreamHead.prototype, 'type', {
    get: function () {
      return this.type_edpfuk$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead.prototype, 'name', {
    get: function () {
      return this.name_ehflbh$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead.prototype, 'version', {
    get: function () {
      return this.version_k58uji$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead.prototype, 'level', {
    get: function () {
      return this.level_nphbbi$_0;
    }
  });
  TagSoundStreamHead.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.streamSoundSampleCount > 0) {
      str += 'Format: ' + SoundCompression_getInstance().toString_za3lpa$(this.streamSoundCompression) + ', ' + 'Rate: ' + SoundRate_getInstance().toString_za3lpa$(this.streamSoundRate) + ', ' + 'Size: ' + SoundSize_getInstance().toString_za3lpa$(this.streamSoundSize) + ', ' + 'Type: ' + SoundType_getInstance().toString_za3lpa$(this.streamSoundType) + ', ';
    }str += 'Samples: ' + this.streamSoundSampleCount + ', ';
    str += 'LatencySeek: ' + this.latencySeek;
    return str;
  };
  TagSoundStreamHead.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSoundStreamHead',
    interfaces: [_BaseTag, ITag]
  };
  function TagSoundStreamHead2() {
    TagSoundStreamHead2$Companion_getInstance();
    TagSoundStreamHead.call(this);
    this.type_5vmaz6$_0 = 45;
    this.name_5rw5i9$_0 = 'SoundStreamHead2';
    this.version_89mkb4$_0 = 3;
    this.level_yydpi4$_0 = 2;
  }
  function TagSoundStreamHead2$Companion() {
    TagSoundStreamHead2$Companion_instance = this;
    this.TYPE = 45;
  }
  TagSoundStreamHead2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSoundStreamHead2$Companion_instance = null;
  function TagSoundStreamHead2$Companion_getInstance() {
    if (TagSoundStreamHead2$Companion_instance === null) {
      new TagSoundStreamHead2$Companion();
    }return TagSoundStreamHead2$Companion_instance;
  }
  Object.defineProperty(TagSoundStreamHead2.prototype, 'type', {
    get: function () {
      return this.type_5vmaz6$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead2.prototype, 'name', {
    get: function () {
      return this.name_5rw5i9$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead2.prototype, 'version', {
    get: function () {
      return this.version_89mkb4$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead2.prototype, 'level', {
    get: function () {
      return this.level_yydpi4$_0;
    }
  });
  TagSoundStreamHead2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.streamSoundSampleCount > 0) {
      str += 'Format: ' + SoundCompression_getInstance().toString_za3lpa$(this.streamSoundCompression) + ', ' + 'Rate: ' + SoundRate_getInstance().toString_za3lpa$(this.streamSoundRate) + ', ' + 'Size: ' + SoundSize_getInstance().toString_za3lpa$(this.streamSoundSize) + ', ' + 'Type: ' + SoundType_getInstance().toString_za3lpa$(this.streamSoundType) + ', ';
    }str += 'Samples: ' + this.streamSoundSampleCount;
    return str;
  };
  TagSoundStreamHead2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSoundStreamHead2',
    interfaces: [TagSoundStreamHead, ITag]
  };
  function TagStartSound() {
    TagStartSound$Companion_getInstance();
    _BaseTag.call(this);
    this.soundId = 0;
    this.soundInfo_vwme69$_0 = this.soundInfo_vwme69$_0;
    this.type_ki1c78$_0 = 15;
    this.name_klrho5$_0 = 'StartSound';
    this.version_quwn52$_0 = 1;
    this.level_ce0au$_0 = 1;
  }
  function TagStartSound$Companion() {
    TagStartSound$Companion_instance = this;
    this.TYPE = 15;
  }
  TagStartSound$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagStartSound$Companion_instance = null;
  function TagStartSound$Companion_getInstance() {
    if (TagStartSound$Companion_instance === null) {
      new TagStartSound$Companion();
    }return TagStartSound$Companion_instance;
  }
  Object.defineProperty(TagStartSound.prototype, 'soundInfo', {
    get: function () {
      if (this.soundInfo_vwme69$_0 == null)
        return throwUPAE('soundInfo');
      return this.soundInfo_vwme69$_0;
    },
    set: function (soundInfo) {
      this.soundInfo_vwme69$_0 = soundInfo;
    }
  });
  TagStartSound.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.soundId = data.readUI16();
    this.soundInfo = data.readSOUNDINFO();
  };
  Object.defineProperty(TagStartSound.prototype, 'type', {
    get: function () {
      return this.type_ki1c78$_0;
    }
  });
  Object.defineProperty(TagStartSound.prototype, 'name', {
    get: function () {
      return this.name_klrho5$_0;
    }
  });
  Object.defineProperty(TagStartSound.prototype, 'version', {
    get: function () {
      return this.version_quwn52$_0;
    }
  });
  Object.defineProperty(TagStartSound.prototype, 'level', {
    get: function () {
      return this.level_ce0au$_0;
    }
  });
  TagStartSound.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SoundID: ' + toString(this.soundId) + ', ' + 'SoundInfo: ' + toString(this.soundInfo);
  };
  TagStartSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagStartSound',
    interfaces: [_BaseTag, ITag]
  };
  function TagStartSound2() {
    TagStartSound2$Companion_getInstance();
    _BaseTag.call(this);
    this.soundClassName_zbnl8g$_0 = this.soundClassName_zbnl8g$_0;
    this.soundInfo_nrbdyb$_0 = this.soundInfo_nrbdyb$_0;
    this.type_t8plzu$_0 = 89;
    this.name_t4zgix$_0 = 'StartSound2';
    this.version_39s0y0$_0 = 9;
    this.level_kznrok$_0 = 2;
  }
  function TagStartSound2$Companion() {
    TagStartSound2$Companion_instance = this;
    this.TYPE = 89;
  }
  TagStartSound2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagStartSound2$Companion_instance = null;
  function TagStartSound2$Companion_getInstance() {
    if (TagStartSound2$Companion_instance === null) {
      new TagStartSound2$Companion();
    }return TagStartSound2$Companion_instance;
  }
  Object.defineProperty(TagStartSound2.prototype, 'soundClassName', {
    get: function () {
      if (this.soundClassName_zbnl8g$_0 == null)
        return throwUPAE('soundClassName');
      return this.soundClassName_zbnl8g$_0;
    },
    set: function (soundClassName) {
      this.soundClassName_zbnl8g$_0 = soundClassName;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'soundInfo', {
    get: function () {
      if (this.soundInfo_nrbdyb$_0 == null)
        return throwUPAE('soundInfo');
      return this.soundInfo_nrbdyb$_0;
    },
    set: function (soundInfo) {
      this.soundInfo_nrbdyb$_0 = soundInfo;
    }
  });
  TagStartSound2.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.soundClassName = data.readString();
    this.soundInfo = data.readSOUNDINFO();
  };
  Object.defineProperty(TagStartSound2.prototype, 'type', {
    get: function () {
      return this.type_t8plzu$_0;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'name', {
    get: function () {
      return this.name_t4zgix$_0;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'version', {
    get: function () {
      return this.version_39s0y0$_0;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'level', {
    get: function () {
      return this.level_kznrok$_0;
    }
  });
  TagStartSound2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SoundClassName: ' + this.soundClassName + ', ' + 'SoundInfo: ' + toString(this.soundInfo);
  };
  TagStartSound2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagStartSound2',
    interfaces: [_BaseTag, ITag]
  };
  function TagSymbolClass() {
    TagSymbolClass$Companion_getInstance();
    _BaseTag.call(this);
    this.symbols = ArrayList_init_0();
    this.type_d435d7$_0 = 76;
    this.name_d7tau4$_0 = 'SymbolClass';
    this.version_h53zir$_0 = 9;
    this.level_fkppmp$_0 = 1;
  }
  function TagSymbolClass$Companion() {
    TagSymbolClass$Companion_instance = this;
    this.TYPE = 76;
  }
  TagSymbolClass$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSymbolClass$Companion_instance = null;
  function TagSymbolClass$Companion_getInstance() {
    if (TagSymbolClass$Companion_instance === null) {
      new TagSymbolClass$Companion();
    }return TagSymbolClass$Companion_instance;
  }
  TagSymbolClass.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    var tmp$;
    tmp$ = data.readUI16();
    for (var i = 0; i < tmp$; i++)
      this.symbols.add_11rb$(data.readSYMBOL());
  };
  Object.defineProperty(TagSymbolClass.prototype, 'type', {
    get: function () {
      return this.type_d435d7$_0;
    }
  });
  Object.defineProperty(TagSymbolClass.prototype, 'name', {
    get: function () {
      return this.name_d7tau4$_0;
    }
  });
  Object.defineProperty(TagSymbolClass.prototype, 'version', {
    get: function () {
      return this.version_h53zir$_0;
    }
  });
  Object.defineProperty(TagSymbolClass.prototype, 'level', {
    get: function () {
      return this.level_fkppmp$_0;
    }
  });
  TagSymbolClass.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.symbols.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Symbols:';
      tmp$ = this.symbols.size;
      for (var i = 0; i < tmp$; i++)
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + this.symbols.get_za3lpa$(i).toString();
    }return str;
  };
  TagSymbolClass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSymbolClass',
    interfaces: [_BaseTag, ITag]
  };
  function TagUnknown(type) {
    if (type === void 0)
      type = 0;
    _BaseTag.call(this);
    this.type_hl6735$_0 = type;
    this.name_howck2$_0 = '????';
    this.version_5u63dv$_0 = 0;
    this.level_ixbc8n$_0 = 1;
  }
  Object.defineProperty(TagUnknown.prototype, 'type', {
    get: function () {
      return this.type_hl6735$_0;
    }
  });
  TagUnknown.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    return data.skipBytes_za3lpa$(length);
  };
  Object.defineProperty(TagUnknown.prototype, 'name', {
    get: function () {
      return this.name_howck2$_0;
    }
  });
  Object.defineProperty(TagUnknown.prototype, 'version', {
    get: function () {
      return this.version_5u63dv$_0;
    }
  });
  Object.defineProperty(TagUnknown.prototype, 'level', {
    get: function () {
      return this.level_ixbc8n$_0;
    }
  });
  TagUnknown.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagUnknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagUnknown',
    interfaces: [_BaseTag, ITag]
  };
  function TagVideoFrame() {
    TagVideoFrame$Companion_getInstance();
    _BaseTag.call(this);
    this.streamId = 0;
    this.frameNum = 0;
    this._videoData_0 = new FlashByteArray();
    this.type_s8r9r5$_0 = 61;
    this.name_s514a8$_0 = 'VideoFrame';
    this.version_cdmtpd$_0 = 6;
    this.level_j2vqt1$_0 = 1;
  }
  function TagVideoFrame$Companion() {
    TagVideoFrame$Companion_instance = this;
    this.TYPE = 61;
  }
  TagVideoFrame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagVideoFrame$Companion_instance = null;
  function TagVideoFrame$Companion_getInstance() {
    if (TagVideoFrame$Companion_instance === null) {
      new TagVideoFrame$Companion();
    }return TagVideoFrame$Companion_instance;
  }
  TagVideoFrame.prototype.parse_mi9vlk$$default = function (data, length, version, async, continuation) {
    this.streamId = data.readUI16();
    this.frameNum = data.readUI16();
    this._videoData_0 = toFlash(data.readBytes_za3lpa$(length - 4 | 0));
  };
  Object.defineProperty(TagVideoFrame.prototype, 'type', {
    get: function () {
      return this.type_s8r9r5$_0;
    }
  });
  Object.defineProperty(TagVideoFrame.prototype, 'name', {
    get: function () {
      return this.name_s514a8$_0;
    }
  });
  Object.defineProperty(TagVideoFrame.prototype, 'version', {
    get: function () {
      return this.version_cdmtpd$_0;
    }
  });
  Object.defineProperty(TagVideoFrame.prototype, 'level', {
    get: function () {
      return this.level_j2vqt1$_0;
    }
  });
  TagVideoFrame.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'StreamID: ' + toString(this.streamId) + ', ' + 'Frame: ' + toString(this.frameNum);
  };
  TagVideoFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagVideoFrame',
    interfaces: [_BaseTag, ITag]
  };
  function TagSWFEncryptActions(type) {
    TagSWFEncryptActions$Companion_getInstance();
    if (type === void 0)
      type = 0;
    TagUnknown.call(this);
    this.type_knypgx$_0 = 253;
    this.name_krouxu$_0 = 'SWFEncryptActions';
  }
  function TagSWFEncryptActions$Companion() {
    TagSWFEncryptActions$Companion_instance = this;
    this.TYPE = 253;
  }
  TagSWFEncryptActions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSWFEncryptActions$Companion_instance = null;
  function TagSWFEncryptActions$Companion_getInstance() {
    if (TagSWFEncryptActions$Companion_instance === null) {
      new TagSWFEncryptActions$Companion();
    }return TagSWFEncryptActions$Companion_instance;
  }
  Object.defineProperty(TagSWFEncryptActions.prototype, 'type', {
    get: function () {
      return this.type_knypgx$_0;
    }
  });
  Object.defineProperty(TagSWFEncryptActions.prototype, 'name', {
    get: function () {
      return this.name_krouxu$_0;
    }
  });
  TagSWFEncryptActions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSWFEncryptActions',
    interfaces: [TagUnknown, ITag]
  };
  function TagSWFEncryptSignature(type) {
    TagSWFEncryptSignature$Companion_getInstance();
    if (type === void 0)
      type = 0;
    TagUnknown.call(this);
    this.type_eoah2u$_0 = 255;
    this.name_es0mjr$_0 = 'SWFEncryptSignature';
  }
  function TagSWFEncryptSignature$Companion() {
    TagSWFEncryptSignature$Companion_instance = this;
    this.TYPE = 255;
  }
  TagSWFEncryptSignature$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSWFEncryptSignature$Companion_instance = null;
  function TagSWFEncryptSignature$Companion_getInstance() {
    if (TagSWFEncryptSignature$Companion_instance === null) {
      new TagSWFEncryptSignature$Companion();
    }return TagSWFEncryptSignature$Companion_instance;
  }
  Object.defineProperty(TagSWFEncryptSignature.prototype, 'type', {
    get: function () {
      return this.type_eoah2u$_0;
    }
  });
  Object.defineProperty(TagSWFEncryptSignature.prototype, 'name', {
    get: function () {
      return this.name_es0mjr$_0;
    }
  });
  TagSWFEncryptSignature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagSWFEncryptSignature',
    interfaces: [TagUnknown, ITag]
  };
  function Frame(frameNumber, tagIndexStart) {
    if (frameNumber === void 0)
      frameNumber = 0;
    if (tagIndexStart === void 0)
      tagIndexStart = 0;
    this.frameNumber = frameNumber;
    this.tagIndexStart = tagIndexStart;
    this.tagIndexEnd = 0;
    this.label = null;
    this.objects = HashMap_init();
    this._objectsSortedByDepth = null;
    this.characters = ArrayList_init_0();
  }
  Frame.prototype.getObjectsSortedByDepth = function () {
    var tmp$;
    var depths = ArrayList_init_0();
    if (this._objectsSortedByDepth == null) {
      addAll(depths, this.objects.keys);
      sort(depths);
      this._objectsSortedByDepth = ArrayList_init_0();
      tmp$ = depths.size;
      for (var i = 0; i < tmp$; i++)
        ensureNotNull(this._objectsSortedByDepth).add_11rb$(ensureNotNull(this.objects.get_11rb$(depths.get_za3lpa$(i))));
    }return ensureNotNull(this._objectsSortedByDepth);
  };
  Object.defineProperty(Frame.prototype, 'tagCount', {
    get: function () {
      return this.tagIndexEnd - this.tagIndexStart + 1 | 0;
    }
  });
  Frame.prototype.placeObject_d0468d$ = function (tagIndex, tag) {
    var frameObject = this.objects.get_11rb$(tag.depth);
    if (frameObject != null) {
      if (tag.characterId === 0) {
        frameObject.lastModifiedAtIndex = tagIndex;
        frameObject.isKeyframe = false;
      } else {
        frameObject.lastModifiedAtIndex = 0;
        frameObject.placedAtIndex = tagIndex;
        frameObject.isKeyframe = true;
        if (tag.characterId !== frameObject.characterId) {
          frameObject.characterId = tag.characterId;
        }}
    } else {
      var $receiver = this.objects;
      var key = tag.depth;
      var value = new FrameObject(tag.depth, tag.characterId, tag.className, tagIndex, 0, true);
      $receiver.put_xwzc9p$(key, value);
    }
    this._objectsSortedByDepth = null;
  };
  Frame.prototype.removeObject_ls7hc0$ = function (tag) {
    this.objects.remove_11rb$(tag.depth);
    this._objectsSortedByDepth = null;
  };
  Frame.prototype.clone = function () {
    var tmp$, tmp$_0;
    var frame = new Frame();
    tmp$ = this.objects.keys.iterator();
    while (tmp$.hasNext()) {
      var depth = tmp$.next();
      var $receiver = frame.objects;
      var value = (Kotlin.isType(tmp$_0 = this.objects.get_11rb$(depth), FrameObject) ? tmp$_0 : throwCCE()).copy_gyap22$();
      $receiver.put_xwzc9p$(depth, value);
    }
    return frame;
  };
  Frame.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$, tmp$_0;
    var str = repeat(' ', indent) + '[' + toString(this.frameNumber) + '] ' + 'Start: ' + toString(this.tagIndexStart) + ', ' + 'Length: ' + toString(this.tagCount);
    if (this.label != null && !equals(this.label, '')) {
      str += ', Label: ' + this.label;
    }if (this.characters.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Defined CharacterIDs: ' + joinToString(this.characters, ', ');
    }tmp$ = this.objects.keys.iterator();
    while (tmp$.hasNext()) {
      var depth = tmp$.next();
      str += (Kotlin.isType(tmp$_0 = this.objects.get_11rb$(depth), FrameObject) ? tmp$_0 : throwCCE()).toString_za3lpa$(indent);
    }
    return str;
  };
  Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function FrameObject(depth, characterId, className, placedAtIndex, lastModifiedAtIndex, isKeyframe) {
    if (lastModifiedAtIndex === void 0)
      lastModifiedAtIndex = 0;
    if (isKeyframe === void 0)
      isKeyframe = false;
    this.depth = depth;
    this.characterId = characterId;
    this.className = className;
    this.placedAtIndex = placedAtIndex;
    this.lastModifiedAtIndex = lastModifiedAtIndex;
    this.isKeyframe = isKeyframe;
    this.layer = -1;
  }
  FrameObject.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var str = '\n' + repeat(' ', indent + 2 | 0) + 'Depth: ' + toString(this.depth) + (this.layer > -1 ? ' (Layer ' + this.layer + ')' : '') + ', ' + 'CharacterId: ' + toString(this.characterId) + ', ';
    if (this.className != null) {
      str += 'ClassName: ' + toString(this.className) + ', ';
    }str += 'PlacedAt: ' + this.placedAtIndex;
    if (this.lastModifiedAtIndex !== 0) {
      str += ', LastModifiedAt: ' + this.lastModifiedAtIndex;
    }if (this.isKeyframe) {
      str += ', IsKeyframe';
    }return str;
  };
  FrameObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameObject',
    interfaces: []
  };
  FrameObject.prototype.component1 = function () {
    return this.depth;
  };
  FrameObject.prototype.component2 = function () {
    return this.characterId;
  };
  FrameObject.prototype.component3 = function () {
    return this.className;
  };
  FrameObject.prototype.component4 = function () {
    return this.placedAtIndex;
  };
  FrameObject.prototype.component5 = function () {
    return this.lastModifiedAtIndex;
  };
  FrameObject.prototype.component6 = function () {
    return this.isKeyframe;
  };
  FrameObject.prototype.copy_gyap22$ = function (depth, characterId, className, placedAtIndex, lastModifiedAtIndex, isKeyframe) {
    return new FrameObject(depth === void 0 ? this.depth : depth, characterId === void 0 ? this.characterId : characterId, className === void 0 ? this.className : className, placedAtIndex === void 0 ? this.placedAtIndex : placedAtIndex, lastModifiedAtIndex === void 0 ? this.lastModifiedAtIndex : lastModifiedAtIndex, isKeyframe === void 0 ? this.isKeyframe : isKeyframe);
  };
  FrameObject.prototype.toString = function () {
    return 'FrameObject(depth=' + Kotlin.toString(this.depth) + (', characterId=' + Kotlin.toString(this.characterId)) + (', className=' + Kotlin.toString(this.className)) + (', placedAtIndex=' + Kotlin.toString(this.placedAtIndex)) + (', lastModifiedAtIndex=' + Kotlin.toString(this.lastModifiedAtIndex)) + (', isKeyframe=' + Kotlin.toString(this.isKeyframe)) + ')';
  };
  FrameObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depth) | 0;
    result = result * 31 + Kotlin.hashCode(this.characterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.className) | 0;
    result = result * 31 + Kotlin.hashCode(this.placedAtIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastModifiedAtIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.isKeyframe) | 0;
    return result;
  };
  FrameObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depth, other.depth) && Kotlin.equals(this.characterId, other.characterId) && Kotlin.equals(this.className, other.className) && Kotlin.equals(this.placedAtIndex, other.placedAtIndex) && Kotlin.equals(this.lastModifiedAtIndex, other.lastModifiedAtIndex) && Kotlin.equals(this.isKeyframe, other.isKeyframe)))));
  };
  function Layer(depth, frameCount) {
    this.depth = depth;
    this.frameCount = frameCount;
    this.frameStripMap = ArrayList_init_0();
    this.strips = ArrayList_init_0();
  }
  Layer.prototype.appendStrip_qt1dr2$ = function (type, start, end) {
    var tmp$, tmp$_0;
    if (type !== 0) {
      var stripIndex = this.strips.size;
      if (stripIndex === 0 && start > 0) {
        for (var i = 0; i < start; i++) {
          this.frameStripMap.set_wxm5ur$(i, stripIndex);
        }
        this.strips.set_wxm5ur$((tmp$ = stripIndex, stripIndex = tmp$ + 1 | 0, tmp$), new LayerStrip(1, 0, start - 1 | 0));
      } else if (stripIndex > 0) {
        var prevStrip = this.strips.get_za3lpa$(stripIndex - 1 | 0);
        if ((prevStrip.endFrameIndex + 1 | 0) < start) {
          for (var i_0 = prevStrip.endFrameIndex + 1 | 0; i_0 < start; i_0++) {
            this.frameStripMap.set_wxm5ur$(i_0, stripIndex);
          }
          this.strips.set_wxm5ur$((tmp$_0 = stripIndex, stripIndex = tmp$_0 + 1 | 0, tmp$_0), new LayerStrip(1, prevStrip.endFrameIndex + 1 | 0, start - 1 | 0));
        }}for (var i_1 = start; i_1 <= end; i_1++) {
        this.frameStripMap.set_wxm5ur$(i_1, stripIndex);
      }
      this.strips.set_wxm5ur$(stripIndex, new LayerStrip(type, start, end));
    }};
  Layer.prototype.getStripsForFrameRegion_vux9f0$ = function (start, end) {
    if (start >= this.frameStripMap.size || end < start) {
      return emptyList();
    }var startStripIndex = this.frameStripMap.get_za3lpa$(start);
    var endStripIndex = end >= this.frameStripMap.size ? this.strips.size - 1 | 0 : this.frameStripMap.get_za3lpa$(end);
    return slice(this.strips, until(startStripIndex, endStripIndex + 1 | 0));
  };
  Layer.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$;
    var str = 'Depth: ' + this.depth + ', Frames: ' + this.frameCount;
    if (this.strips.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Strips:';
      tmp$ = this.strips.size;
      for (var i = 0; i < tmp$; i++) {
        var strip = this.strips.get_za3lpa$(i);
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + toString(i) + '] ' + strip.toString();
      }
    }return str;
  };
  Layer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Layer',
    interfaces: []
  };
  function LayerStrip(type, startFrameIndex, endFrameIndex) {
    LayerStrip$Companion_getInstance();
    if (type === void 0)
      type = 0;
    if (startFrameIndex === void 0)
      startFrameIndex = 0;
    if (endFrameIndex === void 0)
      endFrameIndex = 0;
    this.type = type;
    this.startFrameIndex = startFrameIndex;
    this.endFrameIndex = endFrameIndex;
  }
  function LayerStrip$Companion() {
    LayerStrip$Companion_instance = this;
    this.TYPE_EMPTY = 0;
    this.TYPE_SPACER = 1;
    this.TYPE_STATIC = 2;
    this.TYPE_MOTIONTWEEN = 3;
    this.TYPE_SHAPETWEEN = 4;
  }
  LayerStrip$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LayerStrip$Companion_instance = null;
  function LayerStrip$Companion_getInstance() {
    if (LayerStrip$Companion_instance === null) {
      new LayerStrip$Companion();
    }return LayerStrip$Companion_instance;
  }
  LayerStrip.prototype.toString = function () {
    var tmp$, tmp$_0;
    var str = this.startFrameIndex === this.endFrameIndex ? 'Frame: ' + this.startFrameIndex : 'Frames: ' + this.startFrameIndex + '-' + this.endFrameIndex;
    str += ', Type: ';
    tmp$_0 = str;
    switch (this.type) {
      case 0:
        tmp$ = 'EMPTY';
        break;
      case 1:
        tmp$ = 'SPACER';
        break;
      case 2:
        tmp$ = 'STATIC';
        break;
      case 3:
        tmp$ = 'MOTIONTWEEN';
        break;
      case 4:
        tmp$ = 'SHAPETWEEN';
        break;
      default:tmp$ = 'unknown';
        break;
    }
    str = tmp$_0 + tmp$;
    return str;
  };
  LayerStrip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LayerStrip',
    interfaces: []
  };
  function Scene(frameNumber, name) {
    this.frameNumber = frameNumber;
    this.name = name;
  }
  Scene.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    return repeat(' ', indent) + 'Name: ' + this.name + ', Frame: ' + this.frameNumber;
  };
  Scene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scene',
    interfaces: []
  };
  function SoundStream() {
    this.startFrame = 0;
    this.numFrames = 0;
    this.numSamples = 0;
    this.compression = 0;
    this.rate = 0;
    this.size = 0;
    this.type = 0;
    this.data_xw4jas$_0 = new FlashByteArray();
  }
  Object.defineProperty(SoundStream.prototype, 'data', {
    get: function () {
      return this.data_xw4jas$_0;
    },
    set: function (data) {
      this.data_xw4jas$_0 = data;
    }
  });
  SoundStream.prototype.toString = function () {
    return '[SoundStream] StartFrame: ' + this.startFrame + ', Frames: ' + this.numFrames + ', Samples: ' + this.numSamples + ', Bytes: ' + this.data.length;
  };
  SoundStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundStream',
    interfaces: []
  };
  function ColorUtils() {
    ColorUtils_instance = this;
  }
  ColorUtils.prototype.alpha_za3lpa$ = function (color) {
    return (color >>> 24) / 255;
  };
  ColorUtils.prototype.rgb_za3lpa$ = function (color) {
    return color & 16777215;
  };
  ColorUtils.prototype.r_za3lpa$ = function (color) {
    return (this.rgb_za3lpa$(color) >>> 16 & 255) / 255;
  };
  ColorUtils.prototype.g_za3lpa$ = function (color) {
    return (this.rgb_za3lpa$(color) >>> 8 & 255) / 255;
  };
  ColorUtils.prototype.b_za3lpa$ = function (color) {
    return (this.rgb_za3lpa$(color) >>> 0 & 255) / 255;
  };
  ColorUtils.prototype.interpolate_224j3y$ = function (color1, color2, ratio) {
    var r1 = this.r_za3lpa$(color1);
    var g1 = this.g_za3lpa$(color1);
    var b1 = this.b_za3lpa$(color1);
    var alpha1 = this.alpha_za3lpa$(color1);
    var ri = numberToInt((r1 + (this.r_za3lpa$(color2) - r1) * ratio) * 255);
    var gi = numberToInt((g1 + (this.g_za3lpa$(color2) - g1) * ratio) * 255);
    var bi = numberToInt((b1 + (this.b_za3lpa$(color2) - b1) * ratio) * 255);
    var alphai = numberToInt((alpha1 + (this.alpha_za3lpa$(color2) - alpha1) * ratio) * 255);
    return bi | gi << 8 | ri << 16 | alphai << 24;
  };
  ColorUtils.prototype.rgbToString_za3lpa$ = function (color) {
    return format('#%06x', [color & 16777215]);
  };
  ColorUtils.prototype.rgbaToString_za3lpa$ = function (color) {
    return format('#%06x(%02x)', [color & 16777215, color >>> 24]);
  };
  ColorUtils.prototype.argbToString_za3lpa$ = function (color) {
    return format('#(%02x)%06x', [color >>> 24, color & 16777215]);
  };
  ColorUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ColorUtils',
    interfaces: []
  };
  var ColorUtils_instance = null;
  function ColorUtils_getInstance() {
    if (ColorUtils_instance === null) {
      new ColorUtils();
    }return ColorUtils_instance;
  }
  function MatrixUtils() {
    MatrixUtils_instance = this;
  }
  MatrixUtils.prototype.interpolate_b9vhrm$ = function (matrix1, matrix2, ratio) {
    var matrix = new SWFMatrix();
    matrix.scaleX = matrix1.scaleX + (matrix2.scaleX - matrix1.scaleX) * ratio;
    matrix.scaleY = matrix1.scaleY + (matrix2.scaleY - matrix1.scaleY) * ratio;
    matrix.rotateSkew0 = matrix1.rotateSkew0 + (matrix2.rotateSkew0 - matrix1.rotateSkew0) * ratio;
    matrix.rotateSkew1 = matrix1.rotateSkew1 + (matrix2.rotateSkew1 - matrix1.rotateSkew1) * ratio;
    matrix.translateX = numberToInt(matrix1.translateX + (matrix2.translateX - matrix1.translateX | 0) * ratio);
    matrix.translateY = numberToInt(matrix1.translateY + (matrix2.translateY - matrix1.translateY | 0) * ratio);
    return matrix;
  };
  MatrixUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MatrixUtils',
    interfaces: []
  };
  var MatrixUtils_instance = null;
  function MatrixUtils_getInstance() {
    if (MatrixUtils_instance === null) {
      new MatrixUtils();
    }return MatrixUtils_instance;
  }
  function NumberUtils() {
    NumberUtils_instance = this;
  }
  NumberUtils.prototype.roundPixels20_14dthe$ = function (pixels) {
    return round(pixels * 100) / 100;
  };
  NumberUtils.prototype.roundPixels400_14dthe$ = function (pixels) {
    return round(pixels * 10000) / 10000;
  };
  NumberUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NumberUtils',
    interfaces: []
  };
  var NumberUtils_instance = null;
  function NumberUtils_getInstance() {
    if (NumberUtils_instance === null) {
      new NumberUtils();
    }return NumberUtils_instance;
  }
  function toFlash($receiver) {
    return FlashByteArray_init($receiver);
  }
  function FlashByteArray() {
    this.content = MemorySyncStreamBase_init();
    this.data = new SyncStream(this.content);
    this.endian = Endian$BIG_ENDIAN_getInstance();
  }
  Object.defineProperty(FlashByteArray.prototype, 'position', {
    get: function () {
      return this.data.position.toInt();
    },
    set: function (value) {
      this.data.position = Kotlin.Long.fromInt(value);
    }
  });
  Object.defineProperty(FlashByteArray.prototype, 'length', {
    get: function () {
      return this.data.length.toInt();
    },
    set: function (value) {
      this.data.length = Kotlin.Long.fromInt(value);
    }
  });
  FlashByteArray.prototype.ensureIndex_nke5jc$_0 = function (index) {
    var tmp$ = this.content.data;
    var a = this.content.data.size;
    var b = index + 1 | 0;
    tmp$.size = Math_0.max(a, b);
    return this;
  };
  FlashByteArray.prototype.get_za3lpa$ = function (index) {
    return this.ensureIndex_nke5jc$_0(index).content.data.data[index] & 255;
  };
  FlashByteArray.prototype.set_vux9f0$ = function (index, value) {
    this.ensureIndex_nke5jc$_0(index).content.data.data[index] = toByte(value);
    return value;
  };
  Object.defineProperty(FlashByteArray.prototype, 'little', {
    get: function () {
      return this.endian === Endian$LITTLE_ENDIAN_getInstance();
    }
  });
  FlashByteArray.prototype.readByte = function () {
    return readU8(this.data);
  };
  FlashByteArray.prototype.readShort = function () {
    return this.little ? readS16LE(this.data) : readS16BE(this.data);
  };
  FlashByteArray.prototype.readInt = function () {
    return this.little ? readS32LE(this.data) : readS32BE(this.data);
  };
  FlashByteArray.prototype.readLong = function () {
    return this.little ? readS64LE(this.data) : readS64BE(this.data);
  };
  FlashByteArray.prototype.readUnsignedByte = function () {
    return this.readByte() & 255;
  };
  FlashByteArray.prototype.readUnsignedShort = function () {
    return this.readShort() & 65535;
  };
  FlashByteArray.prototype.readUnsignedInt = function () {
    return this.readInt();
  };
  FlashByteArray.prototype.readFloat = function () {
    var $receiver = this.readInt();
    return Kotlin.floatFromBits($receiver);
  };
  FlashByteArray.prototype.readDouble = function () {
    var $receiver = this.readLong();
    return Kotlin.doubleFromBits($receiver);
  };
  FlashByteArray.prototype.readUTFBytes_za3lpa$ = function (len) {
    var dd = copyOfRange(this.content.data.toByteArray(), this.position, this.position + len | 0);
    var $receiver = toString_1(dd, lang.UTF8);
    this.position = this.position + len | 0;
    return $receiver;
  };
  FlashByteArray.prototype.writeByte_za3lpa$ = function (i) {
    write8(this.data, i);
  };
  FlashByteArray.prototype.writeShort_za3lpa$ = function (i) {
    this.little ? write16LE(this.data, i) : write16BE(this.data, i);
  };
  FlashByteArray.prototype.writeInt_za3lpa$ = function (i) {
    this.little ? write32LE(this.data, i) : write32BE(this.data, i);
  };
  FlashByteArray.prototype.writeLong_s8cxhz$ = function (i) {
    if (this.little)
      write64LE(this.data, i);
    else
      write64BE(this.data, i);
  };
  FlashByteArray.prototype.writeUnsignedByte_za3lpa$ = function (i) {
    this.writeByte_za3lpa$(i);
  };
  FlashByteArray.prototype.writeUnsignedShort_za3lpa$ = function (i) {
    this.writeShort_za3lpa$(i);
  };
  FlashByteArray.prototype.writeUnsignedInt_za3lpa$ = function (i) {
    this.writeInt_za3lpa$(i);
  };
  FlashByteArray.prototype.writeFloat_14dthe$ = function (v) {
    this.writeInt_za3lpa$(toBits(v));
  };
  FlashByteArray.prototype.writeDouble_14dthe$ = function (v) {
    this.writeLong_s8cxhz$(toBits_0(v));
  };
  FlashByteArray.prototype.writeUTF_61zpoe$ = function (value) {
    throw new NotImplementedError_init();
  };
  FlashByteArray.prototype.writeUTFBytes_3m52m6$ = function (str, position, length) {
    if (position === void 0)
      position = 0;
    if (length === void 0)
      length = -1;
    throw Error_init('');
  };
  FlashByteArray.prototype.writeBytes_fqrh44$ = function (bytes) {
    writeBytes(this.data, bytes);
  };
  FlashByteArray.prototype.writeBytes_rihzz6$ = function (bytes, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = -1;
    var len = length >= 0 ? length : bytes.length;
    bytes.position = offset;
    writeBytes(this.data, readBytes(bytes.data, len));
  };
  FlashByteArray.prototype.getCompressionMethod_77yzb9$_0 = function (method) {
    switch (method) {
      case 'gzip':
        return GZIP.Companion;
      case 'zlib':
        return ZLib.Companion;
      case 'deflate':
        return deflate.Deflate;
      case 'lzma':
        return lzma.Lzma;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported compression method ' + method));
    }
  };
  FlashByteArray.prototype._uncompress_qn5vty$_0 = function (data, method) {
    if (method === void 0)
      method = 'zlib';
    return uncompress(data, this.getCompressionMethod_77yzb9$_0(method));
  };
  FlashByteArray.prototype._compress_y27vz5$_0 = function (data, method) {
    if (method === void 0)
      method = 'zlib';
    return compress(data, this.getCompressionMethod_77yzb9$_0(method));
  };
  FlashByteArray.prototype.replaceBytes_fqrh44$ = function (content) {
    this.data.position = L0;
    this.data.length = L0;
    writeBytes(this.data, content);
    this.position = 0;
  };
  FlashByteArray.prototype.uncompress_61zpoe$ = function (method) {
    if (method === void 0)
      method = 'zlib';
    this.replaceBytes_fqrh44$(this._uncompress_qn5vty$_0(this.cloneToNewByteArray(), method));
  };
  FlashByteArray.prototype.compress_61zpoe$ = function (method) {
    if (method === void 0)
      method = 'zlib';
    this.replaceBytes_fqrh44$(this._compress_y27vz5$_0(this.cloneToNewByteArray(), method));
  };
  FlashByteArray.prototype.uncompressInWorker_61zpoe$ = function (method, continuation) {
    if (method === void 0)
      method = 'zlib';
    return this.replaceBytes_fqrh44$(this._uncompress_qn5vty$_0(this.cloneToNewByteArray(), method));
  };
  FlashByteArray.prototype.compressInWorker_61zpoe$ = function (method, continuation) {
    if (method === void 0)
      method = 'zlib';
    return this.replaceBytes_fqrh44$(this._compress_y27vz5$_0(this.cloneToNewByteArray(), method));
  };
  FlashByteArray.prototype.readBytes_za3lpa$ = function (len) {
    return readBytes(this.data, len);
  };
  FlashByteArray.prototype.readBytes_14baam$ = function (bytes) {
    this.readBytes_rihzz6$(bytes, bytes.position, this.bytesAvailable);
  };
  FlashByteArray.prototype.readBytes_rihzz6$ = function (bytes, position, length) {
    if (length === void 0)
      length = -1;
    var len = length >= 0 ? length : this.bytesAvailable;
    bytes.position = position;
    writeBytes(bytes.data, readBytes(this.data, len));
    bytes.position = position;
  };
  FlashByteArray.prototype.readUTF = function () {
    throw new NotImplementedError_init();
  };
  Object.defineProperty(FlashByteArray.prototype, 'bytesAvailable', {
    get: function () {
      return this.length - this.position | 0;
    }
  });
  FlashByteArray.prototype.resetBitsPending = function () {
    return this;
  };
  FlashByteArray.prototype.readObject = function () {
    this.resetBitsPending();
    return AMF3_getInstance().read_39qel5$(this.data);
  };
  FlashByteArray.prototype.writeObject_s8jyv4$ = function (metaData) {
    throw new NotImplementedError_init();
  };
  FlashByteArray.prototype.cloneToNewFlashByteArray = function () {
    return toFlash(this.cloneToNewByteArray());
  };
  FlashByteArray.prototype.cloneToNewByteArray = function () {
    return this.content.data.toByteArray();
  };
  FlashByteArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlashByteArray',
    interfaces: []
  };
  function FlashByteArray_init(data, $this) {
    $this = $this || Object.create(FlashByteArray.prototype);
    FlashByteArray.call($this);
    writeBytes($this.data, data);
    $this.length = $this.data.length.toInt();
    return $this;
  }
  function BitArray() {
    FlashByteArray.call(this);
    this.bitsPending = 0;
  }
  BitArray.prototype.readBits_vux9f0$ = function (_bits, _bitBuffer) {
    if (_bitBuffer === void 0)
      _bitBuffer = 0;
    var bits = _bits;
    var bitBuffer = _bitBuffer;
    if (bits === 0) {
      return bitBuffer;
    }var partial;
    var bitsConsumed;
    if (this.bitsPending > 0) {
      var byte = this.get_za3lpa$(this.position - 1 | 0) & 255 >>> 8 - this.bitsPending;
      var a = this.bitsPending;
      var b = bits;
      bitsConsumed = Math_0.min(a, b);
      this.bitsPending = this.bitsPending - bitsConsumed | 0;
      partial = byte >>> this.bitsPending;
    } else {
      var b_0 = bits;
      bitsConsumed = Math_0.min(8, b_0);
      this.bitsPending = 8 - bitsConsumed | 0;
      partial = this.readUnsignedByte() >>> this.bitsPending;
    }
    bits = bits - bitsConsumed | 0;
    bitBuffer = bitBuffer << bitsConsumed | partial;
    return bits > 0 ? this.readBits_vux9f0$(bits, bitBuffer) : bitBuffer;
  };
  BitArray.prototype.writeBits_vux9f0$ = function (_bits, _value) {
    var bits = _bits;
    var value = _value;
    if (bits === 0) {
      return;
    }value = value & L4294967295.shiftRightUnsigned(32 - bits | 0).toInt();
    var bitsConsumed;
    if (this.bitsPending > 0) {
      if (this.bitsPending > bits) {
        this.set_vux9f0$(this.position - 1 | 0, this.get_za3lpa$(this.position - 1 | 0) | value << this.bitsPending - bits);
        bitsConsumed = bits;
        this.bitsPending = this.bitsPending - bits | 0;
      } else if (this.bitsPending === bits) {
        this.set_vux9f0$(this.position - 1 | 0, this.get_za3lpa$(this.position - 1 | 0) | value);
        bitsConsumed = bits;
        this.bitsPending = 0;
      } else {
        this.set_vux9f0$(this.position - 1 | 0, (this.get_za3lpa$(this.position - 1 | 0) | value) >>> bits - this.bitsPending);
        bitsConsumed = this.bitsPending;
        this.bitsPending = 0;
      }
    } else {
      var b = bits;
      bitsConsumed = Math_0.min(8, b);
      this.bitsPending = 8 - bitsConsumed | 0;
      this.writeByte_za3lpa$(value >>> bits - bitsConsumed << this.bitsPending);
    }
    bits = bits - bitsConsumed | 0;
    if (bits > 0) {
      this.writeBits_vux9f0$(bits, value);
    }};
  BitArray.prototype.writeSingleBit_6taknv$ = function (value) {
    this.writeBits_vux9f0$(1, value ? 1 : 0);
  };
  BitArray.prototype.resetBitsPending = function () {
    this.bitsPending = 0;
    return this;
  };
  BitArray.prototype.calculateMaxBits_95b856$ = function (signed, values) {
    return this.calculateMaxBits_x2ttsu$(signed, toIntArray(values).slice());
  };
  BitArray.prototype.calculateMaxBits_x2ttsu$ = function (signed, values) {
    var tmp$, tmp$_0;
    var b = 0;
    var vmax = -2147483648;
    if (!signed) {
      for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
        var usvalue = values[tmp$];
        b = b | usvalue;
      }
    } else {
      for (tmp$_0 = 0; tmp$_0 !== values.length; ++tmp$_0) {
        var svalue = values[tmp$_0];
        b = svalue >= 0 ? b | svalue : b | ~svalue << 1;
        if (vmax < svalue)
          vmax = svalue;
      }
    }
    var bits = 0;
    if (b > 0) {
      bits = toString_0(b, 2).length;
      if (signed && vmax > 0 && toString_0(vmax, 2).length >= bits) {
        bits = bits + 1 | 0;
      }}return bits;
  };
  BitArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitArray',
    interfaces: [FlashByteArray]
  };
  function Endian(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Endian_initFields() {
    Endian_initFields = function () {
    };
    Endian$LITTLE_ENDIAN_instance = new Endian('LITTLE_ENDIAN', 0);
    Endian$BIG_ENDIAN_instance = new Endian('BIG_ENDIAN', 1);
  }
  var Endian$LITTLE_ENDIAN_instance;
  function Endian$LITTLE_ENDIAN_getInstance() {
    Endian_initFields();
    return Endian$LITTLE_ENDIAN_instance;
  }
  var Endian$BIG_ENDIAN_instance;
  function Endian$BIG_ENDIAN_getInstance() {
    Endian_initFields();
    return Endian$BIG_ENDIAN_instance;
  }
  Endian.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Endian',
    interfaces: [Enum]
  };
  function Endian$values() {
    return [Endian$LITTLE_ENDIAN_getInstance(), Endian$BIG_ENDIAN_getInstance()];
  }
  Endian.values = Endian$values;
  function Endian$valueOf(name) {
    switch (name) {
      case 'LITTLE_ENDIAN':
        return Endian$LITTLE_ENDIAN_getInstance();
      case 'BIG_ENDIAN':
        return Endian$BIG_ENDIAN_getInstance();
      default:throwISE('No enum constant com.soywiz.korfl.as3swf.Endian.' + name);
    }
  }
  Endian.valueOf_61zpoe$ = Endian$valueOf;
  function Fla() {
    Fla_instance = this;
  }
  function Coroutine$read_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$file = file_0;
  }
  Coroutine$read_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_3ekr7n$.prototype.constructor = Coroutine$read_3ekr7n$;
  Coroutine$read_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$file.isDirectory(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.result_0) {
              this.local$tmp$ = this.local$file;
              this.state_0 = 4;
              continue;
            } else {
              this.state_0 = 3;
              this.result_0 = openAsZip(this.local$file, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            var zip = this.local$tmp$;
            this.state_0 = 5;
            this.result_0 = readXml(zip.get_61zpoe$('DOMDocument.xml'), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var xml = this.result_0;
            var $receiver = xml.descendants;
            var destination = ArrayList_init_0();
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              if (equals(element.nameLC, 'layers'))
                destination.add_11rb$(element);
            }

            tmp$ = destination.iterator();
            while (tmp$.hasNext()) {
              var x = tmp$.next();
              println(x);
            }

            return;
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
  Fla.prototype.read_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$read_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Fla.prototype.parseTimeline_473e7m$ = function (timelineXml) {
  };
  Fla.prototype.parseMotionObjectXml_473e7m$ = function (moXml) {
  };
  Fla.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Fla',
    interfaces: []
  };
  var Fla_instance = null;
  function Fla_getInstance() {
    if (Fla_instance === null) {
      new Fla();
    }return Fla_instance;
  }
  function BitmapWithScale(bitmap, scale, bounds) {
    this.bitmap = bitmap;
    this.scale = scale;
    this.bounds = bounds;
    this.$delegate_usexy4$_0 = new Extra$Mixin();
    this.width = this.bitmap.width;
    this.height = this.bitmap.height;
  }
  Object.defineProperty(BitmapWithScale.prototype, 'extra', {
    get: function () {
      return this.$delegate_usexy4$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_usexy4$_0.extra = tmp$;
    }
  });
  BitmapWithScale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapWithScale',
    interfaces: [Extra]
  };
  BitmapWithScale.prototype.component1 = function () {
    return this.bitmap;
  };
  BitmapWithScale.prototype.component2 = function () {
    return this.scale;
  };
  BitmapWithScale.prototype.component3 = function () {
    return this.bounds;
  };
  BitmapWithScale.prototype.copy_st96dd$ = function (bitmap, scale, bounds) {
    return new BitmapWithScale(bitmap === void 0 ? this.bitmap : bitmap, scale === void 0 ? this.scale : scale, bounds === void 0 ? this.bounds : bounds);
  };
  BitmapWithScale.prototype.toString = function () {
    return 'BitmapWithScale(bitmap=' + Kotlin.toString(this.bitmap) + (', scale=' + Kotlin.toString(this.scale)) + (', bounds=' + Kotlin.toString(this.bounds)) + ')';
  };
  BitmapWithScale.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bitmap) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  BitmapWithScale.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bitmap, other.bitmap) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.bounds, other.bounds)))));
  };
  function toAtlas($receiver, views, maxTextureSide, mipmaps, continuation) {
    var tmp$, tmp$_0;
    var tmp$_1 = atlas.AtlasPacker;
    var $receiver_0 = toList($receiver.entries);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(to(item, slice_0(item.value.bitmap)));
    }
    var atlas_0 = tmp$_1.pack_dqbr2m$(destination, maxTextureSide);
    var out = LinkedHashMap_init();
    tmp$ = atlas_0.atlases.iterator();
    while (tmp$.hasNext()) {
      var at = tmp$.next();
      var texture = slice_0(at.tex);
      tmp$_0 = at.packedItems.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        var ibmp = item_0.item.value;
        var rect2 = item_0.rect;
        var key = item_0.item.key;
        var value = new TextureWithBitmapSlice(texture.slice_2da8yn$(rect2), item_0.slice, ibmp.scale, ibmp.bounds);
        out.put_xwzc9p$(key, value);
      }
    }
    return out;
  }
  function SWFShapeRasterizer(swf, debug, bounds, export_0, rasterizerMethod, antialiasing, requestScale, minSide, maxSide, path, charId) {
    if (requestScale === void 0)
      requestScale = 2.0;
    if (minSide === void 0)
      minSide = 16;
    if (maxSide === void 0)
      maxSide = 512;
    if (path === void 0)
      path = new GraphicsPath();
    if (charId === void 0)
      charId = -1;
    ShapeExporter.call(this);
    this.swf = swf;
    this.debug = debug;
    this.bounds = bounds;
    this.export = export_0;
    this.rasterizerMethod = rasterizerMethod;
    this.antialiasing = antialiasing;
    this.requestScale = requestScale;
    this.minSide = minSide;
    this.maxSide = maxSide;
    this.path = path;
    this.charId = charId;
    var b = toIntCeil(this.bounds.width);
    this.realBoundsWidth = Math_0.max(1, b);
    var b_0 = toIntCeil(this.bounds.height);
    this.realBoundsHeight = Math_0.max(1, b_0);
    this.desiredBoundsWidth = numberToInt(this.realBoundsWidth * this.requestScale);
    this.desiredBoundsHeight = numberToInt(this.realBoundsHeight * this.requestScale);
    this.limitBoundsWidth = clamp(this.desiredBoundsWidth, this.minSide, this.maxSide);
    this.limitBoundsHeight = clamp(this.desiredBoundsHeight, this.minSide, this.maxSide);
    var a = this.limitBoundsWidth / this.realBoundsWidth;
    var b_1 = this.limitBoundsHeight / this.realBoundsHeight;
    this.actualScale = Math_0.min(a, b_1);
    this.actualBoundsWidth = numberToInt(this.realBoundsWidth * this.actualScale);
    this.actualBoundsHeight = numberToInt(this.realBoundsHeight * this.actualScale);
    this.cshape = new CompoundShape(emptyList());
    this.shapes = ArrayList_init_0();
    this.actualShape_t28buy$_0 = lazy(SWFShapeRasterizer$actualShape$lambda(this));
    this.image_r1df8e$_0 = lazy(SWFShapeRasterizer$image$lambda(this));
    this.imageWithScale_ydotyq$_0 = lazy(SWFShapeRasterizer$imageWithScale$lambda(this));
    this.drawingFill = true;
    this.apath = new GraphicsPath();
    this.fillStyle = paint.NonePaint;
    this.lineWidth_0 = 1.0;
    this.lineScaleMode_0 = LineScaleMode.NORMAL;
    this.miterLimit_0 = 1.0;
    this.lineCap_0 = LineCap.ROUND;
    this.strokeStyle_0 = new ColorPaint(color.Colors.BLACK);
  }
  Object.defineProperty(SWFShapeRasterizer.prototype, 'actualShape', {
    get: function () {
      return this.actualShape_t28buy$_0.value;
    }
  });
  Object.defineProperty(SWFShapeRasterizer.prototype, 'image', {
    get: function () {
      return this.image_r1df8e$_0.value;
    }
  });
  Object.defineProperty(SWFShapeRasterizer.prototype, 'imageWithScale', {
    get: function () {
      return this.imageWithScale_ydotyq$_0.value;
    }
  });
  SWFShapeRasterizer.prototype.beginShape = function () {
  };
  SWFShapeRasterizer.prototype.endShape = function () {
    this.cshape = new CompoundShape(this.shapes);
  };
  SWFShapeRasterizer.prototype.beginFills = function () {
    this.flush_0();
    this.drawingFill = true;
  };
  SWFShapeRasterizer.prototype.endFills = function () {
    this.flush_0();
  };
  SWFShapeRasterizer.prototype.beginLines = function () {
    this.flush_0();
    this.drawingFill = false;
  };
  SWFShapeRasterizer.prototype.endLines = function () {
    this.flush_0();
  };
  SWFShapeRasterizer.prototype.toCtx_p20oms$ = function ($receiver) {
    switch ($receiver.name) {
      case 'PAD':
        return CycleMethod.NO_CYCLE;
      case 'REFLECT':
        return CycleMethod.REFLECT;
      case 'REPEAT':
        return CycleMethod.REPEAT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  SWFShapeRasterizer.prototype.beginFill_5wr77w$$default = function (color, alpha) {
    this.flush_0();
    this.drawingFill = true;
    this.fillStyle = new ColorPaint(decodeSWFColor(color, alpha));
  };
  SWFShapeRasterizer.prototype.createGradientPaint_0 = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    var tmp$, tmp$_0;
    var destination = ArrayList_init(collectionSizeOrDefault(ratios, 10));
    var tmp$_1;
    tmp$_1 = ratios.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item / 255.0);
    }
    var aratios = DoubleArrayList_init(toDoubleArray(destination).slice());
    var $receiver = zip(colors, alphas);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(decodeSWFColor(item_0.first, item_0.second).value);
    }
    var acolors = IntArrayList_init(toIntArray(destination_0).slice());
    var m2 = new Matrix();
    m2.copyFrom_1ktkmn$(matrix);
    m2.pretranslate_lu1900$(-0.5, -0.5);
    m2.prescale_lu1900$(1638.4 / 2.0, 1638.4 / 2.0);
    m2.scale_lu1900$(20.0, 20.0);
    switch (interpolationMethod.name) {
      case 'NORMAL':
        tmp$ = GradientInterpolationMethod.NORMAL;
        break;
      case 'LINEAR':
        tmp$ = GradientInterpolationMethod.LINEAR;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var imethod = tmp$;
    switch (type.name) {
      case 'LINEAR':
        tmp$_0 = new GradientPaint(GradientKind.LINEAR, -1.0, 0.0, 0.0, +1.0, 0.0, 0.0, aratios, acolors, this.toCtx_p20oms$(spreadMethod), m2, imethod);
        break;
      case 'RADIAL':
        tmp$_0 = new GradientPaint(GradientKind.RADIAL, focalPointRatio, 0.0, 0.0, 0.0, 0.0, 1.0, aratios, acolors, this.toCtx_p20oms$(spreadMethod), m2, imethod);
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$_0;
  };
  SWFShapeRasterizer.prototype.beginGradientFill_xi6ci6$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.flush_0();
    this.drawingFill = true;
    this.fillStyle = this.createGradientPaint_0(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  SWFShapeRasterizer.prototype.beginBitmapFill_o7mpmj$$default = function (bitmapId, matrix, repeat, smooth) {
    var tmp$;
    this.flush_0();
    this.drawingFill = true;
    var bmp = (tmp$ = get_bitmaps(this.swf).get_11rb$(bitmapId)) != null ? tmp$ : new Bitmap32(1, 1);
    this.fillStyle = BitmapPaint_init(bmp, matrix.clone().scale_lu1900$(20.0, 20.0), repeat, smooth);
  };
  SWFShapeRasterizer.prototype.endFill = function () {
    this.flush_0();
  };
  SWFShapeRasterizer.prototype.__flushFill_0 = function () {
    if (isEmpty(this.apath))
      return;
    var $receiver = this.shapes;
    var element = new FillShape(this.apath, null, this.fillStyle, (new Matrix()).prescale_lu1900$(1.0 / 20.0, 1.0 / 20.0));
    $receiver.add_11rb$(element);
    this.apath = new GraphicsPath();
  };
  SWFShapeRasterizer.prototype.__flushStroke_0 = function () {
    if (isEmpty(this.apath))
      return;
    var $receiver = this.shapes;
    var element = new PolylineShape(this.apath, null, this.strokeStyle_0, (new Matrix()).prescale_lu1900$(1.0 / 20.0, 1.0 / 20.0), this.lineWidth_0, true, LineScaleMode.NORMAL, this.lineCap_0, this.lineCap_0, LineJoin.MITER, this.miterLimit_0);
    $receiver.add_11rb$(element);
    this.apath = new GraphicsPath();
  };
  SWFShapeRasterizer.prototype.flush_0 = function () {
    if (this.drawingFill) {
      this.__flushFill_0();
    } else {
      this.__flushStroke_0();
    }
  };
  SWFShapeRasterizer.prototype.lineStyle_ghxx5s$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    var tmp$;
    this.flush_0();
    this.drawingFill = false;
    this.lineWidth_0 = thickness * 20.0;
    this.lineScaleMode_0 = scaleMode;
    this.miterLimit_0 = miterLimit;
    this.strokeStyle_0 = new ColorPaint(decodeSWFColor(color, alpha));
    switch (startCaps.name) {
      case 'NO':
        tmp$ = LineCap.BUTT;
        break;
      case 'ROUND':
        tmp$ = LineCap.ROUND;
        break;
      case 'SQUARE':
        tmp$ = LineCap.SQUARE;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    this.lineCap_0 = tmp$;
  };
  SWFShapeRasterizer.prototype.lineGradientStyle_xi6ci6$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.flush_0();
    this.drawingFill = false;
    this.strokeStyle_0 = this.createGradientPaint_0(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  SWFShapeRasterizer.prototype.fix_0 = function ($receiver) {
    return numberToInt($receiver * 20);
  };
  SWFShapeRasterizer.prototype.moveTo_lu1900$ = function (x, y) {
    this.apath.moveTo_lu1900$(this.fix_0(x), this.fix_0(y));
    if (this.drawingFill)
      this.path.moveTo_lu1900$(x, y);
  };
  SWFShapeRasterizer.prototype.lineTo_lu1900$ = function (x, y) {
    this.apath.lineTo_lu1900$(this.fix_0(x), this.fix_0(y));
    if (this.drawingFill)
      this.path.lineTo_lu1900$(x, y);
  };
  SWFShapeRasterizer.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
    this.apath.quadTo_6y0v78$(this.fix_0(controlX), this.fix_0(controlY), this.fix_0(anchorX), this.fix_0(anchorY));
    if (this.drawingFill)
      this.path.quadTo_6y0v78$(controlX, controlY, anchorX, anchorY);
  };
  SWFShapeRasterizer.prototype.closePath = function () {
    this.apath.close();
    if (this.drawingFill)
      this.path.close();
  };
  function SWFShapeRasterizer$actualShape$lambda(this$SWFShapeRasterizer) {
    return function () {
      this$SWFShapeRasterizer.export(this$SWFShapeRasterizer.debug ? new LoggerShapeExporter(this$SWFShapeRasterizer) : this$SWFShapeRasterizer);
      return this$SWFShapeRasterizer.cshape;
    };
  }
  function SWFShapeRasterizer$image$lambda(this$SWFShapeRasterizer) {
    return function () {
      var image = NativeImage(this$SWFShapeRasterizer.actualBoundsWidth, this$SWFShapeRasterizer.actualBoundsHeight);
      var ctx = image.getContext2d_6taknv$(this$SWFShapeRasterizer.antialiasing);
      ctx.scale_lu1900$(this$SWFShapeRasterizer.actualScale, this$SWFShapeRasterizer.actualScale);
      ctx.translate_lu1900$(-this$SWFShapeRasterizer.bounds.x, -this$SWFShapeRasterizer.bounds.y);
      ctx.drawShape_mkazj4$(this$SWFShapeRasterizer.actualShape, this$SWFShapeRasterizer.rasterizerMethod);
      return image;
    };
  }
  function SWFShapeRasterizer$imageWithScale$lambda(this$SWFShapeRasterizer) {
    return function () {
      return new BitmapWithScale(this$SWFShapeRasterizer.image, this$SWFShapeRasterizer.actualScale, this$SWFShapeRasterizer.bounds);
    };
  }
  SWFShapeRasterizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShapeRasterizer',
    interfaces: [ShapeExporter]
  };
  function toColorTransform($receiver) {
    return new ColorTransform($receiver.rMult, $receiver.gMult, $receiver.bMult, $receiver.aMult, $receiver.rAdd, $receiver.gAdd, $receiver.bAdd, $receiver.aAdd);
  }
  function decodeSWFColor(color, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    return RGBA.Companion.invoke_tjonv8$(extract8(color, 16), extract8(color, 8), extract8(color, 0), numberToInt(alpha * 255));
  }
  function SWFExportConfig(debug, mipmaps, antialiasing, rasterizerMethod, exportScale, minShapeSide, maxShapeSide, minMorphShapeSide, maxMorphShapeSide, maxTextureSide, exportPaths, adaptiveScaling, smoothInterpolation) {
    if (debug === void 0)
      debug = false;
    if (mipmaps === void 0)
      mipmaps = true;
    if (antialiasing === void 0)
      antialiasing = true;
    if (rasterizerMethod === void 0)
      rasterizerMethod = ShapeRasterizerMethod.X4;
    if (exportScale === void 0)
      exportScale = 1.0;
    if (minShapeSide === void 0)
      minShapeSide = 64;
    if (maxShapeSide === void 0)
      maxShapeSide = 512;
    if (minMorphShapeSide === void 0)
      minMorphShapeSide = 16;
    if (maxMorphShapeSide === void 0)
      maxMorphShapeSide = 128;
    if (maxTextureSide === void 0)
      maxTextureSide = 4096;
    if (exportPaths === void 0)
      exportPaths = false;
    if (adaptiveScaling === void 0)
      adaptiveScaling = true;
    if (smoothInterpolation === void 0)
      smoothInterpolation = true;
    this.debug = debug;
    this.mipmaps = mipmaps;
    this.antialiasing = antialiasing;
    this.rasterizerMethod = rasterizerMethod;
    this.exportScale = exportScale;
    this.minShapeSide = minShapeSide;
    this.maxShapeSide = maxShapeSide;
    this.minMorphShapeSide = minMorphShapeSide;
    this.maxMorphShapeSide = maxMorphShapeSide;
    this.maxTextureSide = maxTextureSide;
    this.exportPaths = exportPaths;
    this.adaptiveScaling = adaptiveScaling;
    this.smoothInterpolation = smoothInterpolation;
  }
  SWFExportConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFExportConfig',
    interfaces: []
  };
  SWFExportConfig.prototype.component1 = function () {
    return this.debug;
  };
  SWFExportConfig.prototype.component2 = function () {
    return this.mipmaps;
  };
  SWFExportConfig.prototype.component3 = function () {
    return this.antialiasing;
  };
  SWFExportConfig.prototype.component4 = function () {
    return this.rasterizerMethod;
  };
  SWFExportConfig.prototype.component5 = function () {
    return this.exportScale;
  };
  SWFExportConfig.prototype.component6 = function () {
    return this.minShapeSide;
  };
  SWFExportConfig.prototype.component7 = function () {
    return this.maxShapeSide;
  };
  SWFExportConfig.prototype.component8 = function () {
    return this.minMorphShapeSide;
  };
  SWFExportConfig.prototype.component9 = function () {
    return this.maxMorphShapeSide;
  };
  SWFExportConfig.prototype.component10 = function () {
    return this.maxTextureSide;
  };
  SWFExportConfig.prototype.component11 = function () {
    return this.exportPaths;
  };
  SWFExportConfig.prototype.component12 = function () {
    return this.adaptiveScaling;
  };
  SWFExportConfig.prototype.component13 = function () {
    return this.smoothInterpolation;
  };
  SWFExportConfig.prototype.copy_fjq7um$ = function (debug, mipmaps, antialiasing, rasterizerMethod, exportScale, minShapeSide, maxShapeSide, minMorphShapeSide, maxMorphShapeSide, maxTextureSide, exportPaths, adaptiveScaling, smoothInterpolation) {
    return new SWFExportConfig(debug === void 0 ? this.debug : debug, mipmaps === void 0 ? this.mipmaps : mipmaps, antialiasing === void 0 ? this.antialiasing : antialiasing, rasterizerMethod === void 0 ? this.rasterizerMethod : rasterizerMethod, exportScale === void 0 ? this.exportScale : exportScale, minShapeSide === void 0 ? this.minShapeSide : minShapeSide, maxShapeSide === void 0 ? this.maxShapeSide : maxShapeSide, minMorphShapeSide === void 0 ? this.minMorphShapeSide : minMorphShapeSide, maxMorphShapeSide === void 0 ? this.maxMorphShapeSide : maxMorphShapeSide, maxTextureSide === void 0 ? this.maxTextureSide : maxTextureSide, exportPaths === void 0 ? this.exportPaths : exportPaths, adaptiveScaling === void 0 ? this.adaptiveScaling : adaptiveScaling, smoothInterpolation === void 0 ? this.smoothInterpolation : smoothInterpolation);
  };
  SWFExportConfig.prototype.toString = function () {
    return 'SWFExportConfig(debug=' + Kotlin.toString(this.debug) + (', mipmaps=' + Kotlin.toString(this.mipmaps)) + (', antialiasing=' + Kotlin.toString(this.antialiasing)) + (', rasterizerMethod=' + Kotlin.toString(this.rasterizerMethod)) + (', exportScale=' + Kotlin.toString(this.exportScale)) + (', minShapeSide=' + Kotlin.toString(this.minShapeSide)) + (', maxShapeSide=' + Kotlin.toString(this.maxShapeSide)) + (', minMorphShapeSide=' + Kotlin.toString(this.minMorphShapeSide)) + (', maxMorphShapeSide=' + Kotlin.toString(this.maxMorphShapeSide)) + (', maxTextureSide=' + Kotlin.toString(this.maxTextureSide)) + (', exportPaths=' + Kotlin.toString(this.exportPaths)) + (', adaptiveScaling=' + Kotlin.toString(this.adaptiveScaling)) + (', smoothInterpolation=' + Kotlin.toString(this.smoothInterpolation)) + ')';
  };
  SWFExportConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.debug) | 0;
    result = result * 31 + Kotlin.hashCode(this.mipmaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.antialiasing) | 0;
    result = result * 31 + Kotlin.hashCode(this.rasterizerMethod) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportScale) | 0;
    result = result * 31 + Kotlin.hashCode(this.minShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.minMorphShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxMorphShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxTextureSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportPaths) | 0;
    result = result * 31 + Kotlin.hashCode(this.adaptiveScaling) | 0;
    result = result * 31 + Kotlin.hashCode(this.smoothInterpolation) | 0;
    return result;
  };
  SWFExportConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.debug, other.debug) && Kotlin.equals(this.mipmaps, other.mipmaps) && Kotlin.equals(this.antialiasing, other.antialiasing) && Kotlin.equals(this.rasterizerMethod, other.rasterizerMethod) && Kotlin.equals(this.exportScale, other.exportScale) && Kotlin.equals(this.minShapeSide, other.minShapeSide) && Kotlin.equals(this.maxShapeSide, other.maxShapeSide) && Kotlin.equals(this.minMorphShapeSide, other.minMorphShapeSide) && Kotlin.equals(this.maxMorphShapeSide, other.maxMorphShapeSide) && Kotlin.equals(this.maxTextureSide, other.maxTextureSide) && Kotlin.equals(this.exportPaths, other.exportPaths) && Kotlin.equals(this.adaptiveScaling, other.adaptiveScaling) && Kotlin.equals(this.smoothInterpolation, other.smoothInterpolation)))));
  };
  function toAnLibrarySerializerConfig($receiver, compression) {
    if (compression === void 0)
      compression = 1.0;
    return new AnLibrarySerializer$Config(compression, $receiver.exportPaths, $receiver.mipmaps);
  }
  function Coroutine$readSWF($receiver_0, views_0, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$config = config_0;
  }
  Coroutine$readSWF.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSWF.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSWF.prototype.constructor = Coroutine$readSWF;
  Coroutine$readSWF.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$config != null) {
              this.state_0 = 3;
              this.result_0 = readSWF_1(this.local$$receiver, this.local$views, this.local$config, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 2;
              this.result_0 = readSWF_0(this.local$$receiver, this.local$views, void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$;
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
  function readSWF($receiver_0, views_0, config_0, continuation_0, suspended) {
    var instance = new Coroutine$readSWF($receiver_0, views_0, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function swfExportConfig$lambda() {
    return new SWFExportConfig();
  }
  var swfExportConfig;
  var swfExportConfig_metadata = new PropertyMetadata('swfExportConfig');
  function get_swfExportConfig($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = swfExportConfig.name) != null ? tmp$ : swfExportConfig_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = swfExportConfig.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = swfExportConfig.name) != null ? tmp$_3 : swfExportConfig_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_swfExportConfig($receiver, swfExportConfig_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = swfExportConfig.name) != null ? tmp$ : swfExportConfig_metadata.callableName, (tmp$_0 = swfExportConfig_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function Coroutine$readSWF_0($receiver_0, views_0, content_0, defaultConfig_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$configFile = void 0;
    this.local$config = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$content = content_0;
    this.local$defaultConfig = defaultConfig_0;
  }
  Coroutine$readSWF_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSWF_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSWF_0.prototype.constructor = Coroutine$readSWF_0;
  Coroutine$readSWF_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$content === void 0)
              this.local$content = null;
            if (this.local$defaultConfig === void 0)
              this.local$defaultConfig = new SWFExportConfig();
            this.local$configFile = this.local$$receiver.appendExtension_61zpoe$('config');
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.local$configFile.exists(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            if (this.result_0) {
              this.local$tmp$ = yaml.Yaml;
              this.state_0 = 2;
              this.result_0 = this.local$configFile.readString_qa9gbo$(void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.local$tmp$_0 = this.local$defaultConfig;
              this.state_0 = 3;
              continue;
            }

          case 2:
            this.local$tmp$_0 = decodeToType(this.local$tmp$, this.result_0, getKClass(SWFExportConfig), mapper.Mapper);
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
              this.local$tmp$_0 = new SWFExportConfig();
            } else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            this.local$config = this.local$tmp$_0;
            this.state_0 = 6;
            this.result_0 = readSWF_1(this.local$$receiver, this.local$views, this.local$config, this.local$content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var lib = this.result_0;
            set_swfExportConfig(lib, this.local$config);
            return lib;
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 7) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readSWF_0($receiver_0, views_0, content_0, defaultConfig_0, continuation_0, suspended) {
    var instance = new Coroutine$readSWF_0($receiver_0, views_0, content_0, defaultConfig_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readSWF_1($receiver_0, views_0, config_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$config = config_0;
    this.local$content = content_0;
  }
  Coroutine$readSWF_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSWF_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSWF_1.prototype.constructor = Coroutine$readSWF_1;
  Coroutine$readSWF_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$content === void 0)
              this.local$content = null;
            this.local$tmp$ = new SwfLoaderMethod(this.local$views, this.local$config);
            if (this.local$content == null) {
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.readAll(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$content = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.load_fqrh44$(this.local$content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function readSWF_1($receiver_0, views_0, config_0, content_0, continuation_0, suspended) {
    var instance = new Coroutine$readSWF_1($receiver_0, views_0, config_0, content_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  var get_depth0 = defineInlineFunction('korge-root-korge-swf.com.soywiz.korge.ext.swf.get_depth0_vr6vu$', function ($receiver) {
    return $receiver.depth - 1 | 0;
  });
  var get_clipDepth0 = defineInlineFunction('korge-root-korge-swf.com.soywiz.korge.ext.swf.get_clipDepth0_vr6vu$', function ($receiver) {
    return $receiver.clipDepth - 1 | 0;
  });
  var get_depth0_0 = defineInlineFunction('korge-root-korge-swf.com.soywiz.korge.ext.swf.get_depth0_z0omgf$', function ($receiver) {
    return $receiver.depth - 1 | 0;
  });
  function bitmaps$lambda() {
    return HashMap_init();
  }
  var bitmaps;
  var bitmaps_metadata = new PropertyMetadata('bitmaps');
  function get_bitmaps($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = bitmaps.name) != null ? tmp$ : bitmaps_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = bitmaps.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = bitmaps.name) != null ? tmp$_3 : bitmaps_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function MySwfFrame(index0, maxDepths) {
    this.index0 = index0;
    this.name = null;
    this.depths = ArrayList_init_0();
    this.actions = ArrayList_init_0();
  }
  function MySwfFrame$Action() {
  }
  function MySwfFrame$Action$Stop() {
    MySwfFrame$Action$Stop_instance = this;
  }
  MySwfFrame$Action$Stop.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Stop',
    interfaces: [MySwfFrame$Action]
  };
  var MySwfFrame$Action$Stop_instance = null;
  function MySwfFrame$Action$Stop_getInstance() {
    if (MySwfFrame$Action$Stop_instance === null) {
      new MySwfFrame$Action$Stop();
    }return MySwfFrame$Action$Stop_instance;
  }
  function MySwfFrame$Action$Play() {
    MySwfFrame$Action$Play_instance = this;
  }
  MySwfFrame$Action$Play.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Play',
    interfaces: [MySwfFrame$Action]
  };
  var MySwfFrame$Action$Play_instance = null;
  function MySwfFrame$Action$Play_getInstance() {
    if (MySwfFrame$Action$Play_instance === null) {
      new MySwfFrame$Action$Play();
    }return MySwfFrame$Action$Play_instance;
  }
  function MySwfFrame$Action$Goto(frame0) {
    this.frame0 = frame0;
  }
  MySwfFrame$Action$Goto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Goto',
    interfaces: [MySwfFrame$Action]
  };
  function MySwfFrame$Action$PlaySound(soundId) {
    this.soundId = soundId;
  }
  MySwfFrame$Action$PlaySound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlaySound',
    interfaces: [MySwfFrame$Action]
  };
  MySwfFrame$Action.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Action',
    interfaces: []
  };
  Object.defineProperty(MySwfFrame.prototype, 'isFirst', {
    get: function () {
      return this.index0 === 0;
    }
  });
  Object.defineProperty(MySwfFrame.prototype, 'hasStop', {
    get: function () {
      return this.actions.contains_11rb$(MySwfFrame$Action$Stop_getInstance());
    }
  });
  Object.defineProperty(MySwfFrame.prototype, 'hasGoto', {
    get: function () {
      var $receiver = this.actions;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (Kotlin.isType(element, MySwfFrame$Action$Goto)) {
            any$result = true;
            break any$break;
          }}
        any$result = false;
      }
       while (false);
      return any$result;
    }
  });
  Object.defineProperty(MySwfFrame.prototype, 'hasFlow', {
    get: function () {
      return this.hasStop || this.hasGoto;
    }
  });
  MySwfFrame.prototype.stop = function () {
    var $receiver = this.actions;
    var element = MySwfFrame$Action$Stop_getInstance();
    $receiver.add_11rb$(element);
  };
  MySwfFrame.prototype.play = function () {
    var $receiver = this.actions;
    var element = MySwfFrame$Action$Play_getInstance();
    $receiver.add_11rb$(element);
  };
  MySwfFrame.prototype.goto_za3lpa$ = function (frame) {
    var $receiver = this.actions;
    var element = new MySwfFrame$Action$Goto(frame);
    $receiver.add_11rb$(element);
  };
  MySwfFrame.prototype.gotoAndStop_za3lpa$ = function (frame) {
    this.goto_za3lpa$(frame);
    this.stop();
  };
  MySwfFrame.prototype.gotoAndPlay_za3lpa$ = function (frame) {
    this.goto_za3lpa$(frame);
    this.play();
  };
  MySwfFrame.prototype.playSound_za3lpa$ = function (soundId) {
    var $receiver = this.actions;
    var element = new MySwfFrame$Action$PlaySound(soundId);
    $receiver.add_11rb$(element);
  };
  MySwfFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MySwfFrame',
    interfaces: []
  };
  function MySwfTimeline() {
    this.frames = ArrayList_init_0();
  }
  MySwfTimeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MySwfTimeline',
    interfaces: []
  };
  function swfTimeline$lambda() {
    return new MySwfTimeline();
  }
  var swfTimeline;
  var swfTimeline_metadata = new PropertyMetadata('swfTimeline');
  function get_swfTimeline($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = swfTimeline.name) != null ? tmp$ : swfTimeline_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = swfTimeline.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = swfTimeline.name) != null ? tmp$_3 : swfTimeline_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function labelsToFrame0$lambda() {
    return HashMap_init();
  }
  var labelsToFrame0;
  var labelsToFrame0_metadata = new PropertyMetadata('labelsToFrame0');
  function get_labelsToFrame0($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = labelsToFrame0.name) != null ? tmp$ : labelsToFrame0_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = labelsToFrame0.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = labelsToFrame0.name) != null ? tmp$_3 : labelsToFrame0_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function tagDefineMorphShape$lambda() {
    return null;
  }
  var tagDefineMorphShape;
  var tagDefineMorphShape_metadata = new PropertyMetadata('tagDefineMorphShape');
  function get_tagDefineMorphShape($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = tagDefineMorphShape.name) != null ? tmp$ : tagDefineMorphShape_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = tagDefineMorphShape.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = tagDefineMorphShape.name) != null ? tmp$_3 : tagDefineMorphShape_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_tagDefineMorphShape($receiver, tagDefineMorphShape_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = tagDefineMorphShape.name) != null ? tmp$ : tagDefineMorphShape_metadata.callableName, (tmp$_0 = tagDefineMorphShape_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function tagDefineShape$lambda() {
    return null;
  }
  var tagDefineShape;
  var tagDefineShape_metadata = new PropertyMetadata('tagDefineShape');
  function get_tagDefineShape($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = tagDefineShape.name) != null ? tmp$ : tagDefineShape_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = tagDefineShape.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = tagDefineShape.name) != null ? tmp$_3 : tagDefineShape_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_tagDefineShape($receiver, tagDefineShape_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = tagDefineShape.name) != null ? tmp$ : tagDefineShape_metadata.callableName, (tmp$_0 = tagDefineShape_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function MinMaxDouble(count, min, max) {
    if (count === void 0)
      count = 0;
    if (min === void 0)
      min = 0.0;
    if (max === void 0)
      max = 0.0;
    this.count = count;
    this.min = min;
    this.max = max;
  }
  Object.defineProperty(MinMaxDouble.prototype, 'isEmpty', {
    get: function () {
      return this.count === 0;
    }
  });
  Object.defineProperty(MinMaxDouble.prototype, 'isNotEmpty', {
    get: function () {
      return this.count > 0;
    }
  });
  MinMaxDouble.prototype.register_14dthe$ = function (value) {
    if (this.isEmpty) {
      this.min = value;
      this.max = value;
    } else {
      var a = this.min;
      this.min = Math_0.min(a, value);
      var a_0 = this.max;
      this.max = Math_0.max(a_0, value);
    }
    this.count = this.count + 1 | 0;
  };
  MinMaxDouble.prototype.register_3dsga4$ = function (value) {
    if (value.isNotEmpty) {
      this.register_14dthe$(value.min);
      this.register_14dthe$(value.max);
    }};
  MinMaxDouble.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinMaxDouble',
    interfaces: []
  };
  MinMaxDouble.prototype.component1 = function () {
    return this.count;
  };
  MinMaxDouble.prototype.component2 = function () {
    return this.min;
  };
  MinMaxDouble.prototype.component3 = function () {
    return this.max;
  };
  MinMaxDouble.prototype.copy_w4xg1m$ = function (count, min, max) {
    return new MinMaxDouble(count === void 0 ? this.count : count, min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  MinMaxDouble.prototype.toString = function () {
    return 'MinMaxDouble(count=' + Kotlin.toString(this.count) + (', min=' + Kotlin.toString(this.min)) + (', max=' + Kotlin.toString(this.max)) + ')';
  };
  MinMaxDouble.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  MinMaxDouble.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.count, other.count) && Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  function SymbolAnalyzeInfo(characterId) {
    this.characterId = characterId;
    this.hasNinePatch = false;
    this.parents = LinkedHashSet_init();
    this.scaleBounds = new MinMaxDouble();
    this.globalScaleBounds_ibmyij$_0 = lazy(SymbolAnalyzeInfo$globalScaleBounds$lambda(this));
  }
  Object.defineProperty(SymbolAnalyzeInfo.prototype, 'globalScaleBounds', {
    get: function () {
      return this.globalScaleBounds_ibmyij$_0.value;
    }
  });
  SymbolAnalyzeInfo.prototype.registerParent_ic6ump$ = function (characterId) {
    this.parents.add_11rb$(characterId);
  };
  SymbolAnalyzeInfo.prototype.registerScale_lu1900$ = function (scaleX, scaleY) {
    this.scaleBounds.register_14dthe$(Math_0.max(scaleX, scaleY));
  };
  SymbolAnalyzeInfo.prototype.registerMatrix_1ktkmn$ = function (matrix) {
    var x = matrix.a;
    var tmp$ = Math_0.abs(x);
    var x_0 = matrix.d;
    this.registerScale_lu1900$(tmp$, Math_0.abs(x_0));
  };
  function SymbolAnalyzeInfo$globalScaleBounds$lambda(this$SymbolAnalyzeInfo) {
    return function () {
      var tmp$;
      var out = new MinMaxDouble();
      if (this$SymbolAnalyzeInfo.parents.isEmpty()) {
        if (this$SymbolAnalyzeInfo.scaleBounds.isNotEmpty) {
          out.register_3dsga4$(this$SymbolAnalyzeInfo.scaleBounds);
        } else {
          out.register_14dthe$(1.0);
        }
      } else {
        tmp$ = this$SymbolAnalyzeInfo.parents.iterator();
        while (tmp$.hasNext()) {
          var parent = tmp$.next();
          if (parent.hasNinePatch)
            continue;
          out.register_14dthe$(this$SymbolAnalyzeInfo.scaleBounds.min * parent.globalScaleBounds.min);
          out.register_14dthe$(this$SymbolAnalyzeInfo.scaleBounds.max * parent.globalScaleBounds.max);
        }
      }
      return out;
    };
  }
  SymbolAnalyzeInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SymbolAnalyzeInfo',
    interfaces: []
  };
  function SWFShapeRasterizerRequest(swf, charId, shapeBounds, export_0, config) {
    this.swf = swf;
    this.charId = charId;
    this.shapeBounds = shapeBounds;
    this.export = export_0;
    this.config = config;
    this.path = new GraphicsPath();
  }
  SWFShapeRasterizerRequest.prototype.getRasterizer_14dthe$ = function (maxScale) {
    var adaptiveScaling = this.config.adaptiveScaling ? maxScale : 1.0;
    return new SWFShapeRasterizer(this.swf, this.config.debug, this.shapeBounds, this.export, this.config.rasterizerMethod, this.config.antialiasing, this.config.exportScale * adaptiveScaling, this.config.minShapeSide, this.config.maxShapeSide, this.path, this.charId);
  };
  SWFShapeRasterizerRequest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SWFShapeRasterizerRequest',
    interfaces: []
  };
  function SwfLoaderMethod(views, config) {
    this.views = views;
    this.config = config;
    this.swf_z67kx$_0 = this.swf_z67kx$_0;
    this.lib_z1g72$_0 = this.lib_z1g72$_0;
    this.classNameToTypes = HashMap_init();
    this.classNameToTagId = HashMap_init();
    this.shapesToPopulate = LinkedHashMap_init();
    this.morphShapesToPopulate = ArrayList_init_0();
    this.morphShapeRatios = HashMap_init();
    this.analyzerInfos_0 = HashMap_init();
    this.symbols = ArrayList_init_0();
    this.totalPlaceObject = 0;
    this.globalTotalShowFrame = 0;
    this.spritesById = HashMap_init();
  }
  Object.defineProperty(SwfLoaderMethod.prototype, 'swf', {
    get: function () {
      if (this.swf_z67kx$_0 == null)
        return throwUPAE('swf');
      return this.swf_z67kx$_0;
    },
    set: function (swf) {
      this.swf_z67kx$_0 = swf;
    }
  });
  Object.defineProperty(SwfLoaderMethod.prototype, 'lib', {
    get: function () {
      if (this.lib_z1g72$_0 == null)
        return throwUPAE('lib');
      return this.lib_z1g72$_0;
    },
    set: function (lib) {
      this.lib_z1g72$_0 = lib;
    }
  });
  SwfLoaderMethod.prototype.analyzerInfo_za3lpa$ = function (id) {
    var $receiver = this.analyzerInfos_0;
    var tmp$;
    var value = $receiver.get_11rb$(id);
    if (value == null) {
      var answer = new SymbolAnalyzeInfo(id);
      $receiver.put_xwzc9p$(id, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  function Coroutine$load_fqrh44$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$load_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_fqrh44$.prototype.constructor = Coroutine$load_fqrh44$;
  Coroutine$load_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = (new SWF()).loadBytes_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.swf = this.result_0;
            var bounds = this.$this.swf.frameSize.rect;
            this.$this.lib = new AnLibrary(this.$this.views, numberToInt(bounds.width), numberToInt(bounds.height), this.$this.swf.frameRate);
            this.state_0 = 3;
            this.result_0 = this.$this.parseMovieClip_37csjd$(this.$this.swf.tags, new AnSymbolMovieClip(0, 'MainTimeLine', this.$this.findLimits_k5okyf$(this.$this.swf.tags)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$ = this.$this.symbols.iterator();
            while (tmp$.hasNext()) {
              var symbol = tmp$.next();
              this.$this.lib.addSymbol_lvjwfe$(symbol);
            }

            this.state_0 = 4;
            this.result_0 = this.$this.processAs3Actions_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.generateActualTimelines_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.$this.lib.processSymbolNames();
            this.state_0 = 6;
            this.result_0 = this.$this.generateTextures_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.$this.finalProcessing_0();
            return this.$this.lib;
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
  SwfLoaderMethod.prototype.load_fqrh44$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$load_fqrh44$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SwfLoaderMethod.prototype.finalProcessing_0 = function () {
  };
  SwfLoaderMethod.prototype.getFrameTime_za3lpa$ = function (index0) {
    return numberToInt(index0 * this.lib.msPerFrameDouble) * 1000 | 0;
  };
  function SwfLoaderMethod$generateActualTimelines$Subtimeline(this$SwfLoaderMethod, index, totalFrames, nextState, nextStatePlay) {
    this.this$SwfLoaderMethod = this$SwfLoaderMethod;
    if (totalFrames === void 0)
      totalFrames = 0;
    if (nextState === void 0)
      nextState = null;
    if (nextStatePlay === void 0)
      nextStatePlay = true;
    this.index = index;
    this.totalFrames = totalFrames;
    this.nextState = nextState;
    this.nextStatePlay = nextStatePlay;
  }
  Object.defineProperty(SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype, 'totalTime', {
    get: function () {
      return this.this$SwfLoaderMethod.getFrameTime_za3lpa$(this.totalFrames);
    }
  });
  SwfLoaderMethod$generateActualTimelines$Subtimeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Subtimeline',
    interfaces: []
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component1 = function () {
    return this.index;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component2 = function () {
    return this.totalFrames;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component3 = function () {
    return this.nextState;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component4 = function () {
    return this.nextStatePlay;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.copy_nj6m92$ = function (index, totalFrames, nextState, nextStatePlay) {
    return new SwfLoaderMethod$generateActualTimelines$Subtimeline(this.this$SwfLoaderMethod, index === void 0 ? this.index : index, totalFrames === void 0 ? this.totalFrames : totalFrames, nextState === void 0 ? this.nextState : nextState, nextStatePlay === void 0 ? this.nextStatePlay : nextStatePlay);
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.toString = function () {
    return 'Subtimeline(index=' + Kotlin.toString(this.index) + (', totalFrames=' + Kotlin.toString(this.totalFrames)) + (', nextState=' + Kotlin.toString(this.nextState)) + (', nextStatePlay=' + Kotlin.toString(this.nextStatePlay)) + ')';
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalFrames) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextState) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextStatePlay) | 0;
    return result;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.totalFrames, other.totalFrames) && Kotlin.equals(this.nextState, other.nextState) && Kotlin.equals(this.nextStatePlay, other.nextStatePlay)))));
  };
  function SwfLoaderMethod$generateActualTimelines$FrameInfo(this$SwfLoaderMethod, subtimeline, frameInSubTimeline, stateName, startSubtimeline, startNamedState) {
    this.this$SwfLoaderMethod = this$SwfLoaderMethod;
    this.subtimeline = subtimeline;
    this.frameInSubTimeline = frameInSubTimeline;
    this.stateName = stateName;
    this.startSubtimeline = startSubtimeline;
    this.startNamedState = startNamedState;
    this.timeInSubTimeline = this$SwfLoaderMethod.getFrameTime_za3lpa$(this.frameInSubTimeline);
  }
  SwfLoaderMethod$generateActualTimelines$FrameInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameInfo',
    interfaces: []
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component1 = function () {
    return this.subtimeline;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component2 = function () {
    return this.frameInSubTimeline;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component3 = function () {
    return this.stateName;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component4 = function () {
    return this.startSubtimeline;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component5 = function () {
    return this.startNamedState;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.copy_xk48av$ = function (subtimeline, frameInSubTimeline, stateName, startSubtimeline, startNamedState) {
    return new SwfLoaderMethod$generateActualTimelines$FrameInfo(this.this$SwfLoaderMethod, subtimeline === void 0 ? this.subtimeline : subtimeline, frameInSubTimeline === void 0 ? this.frameInSubTimeline : frameInSubTimeline, stateName === void 0 ? this.stateName : stateName, startSubtimeline === void 0 ? this.startSubtimeline : startSubtimeline, startNamedState === void 0 ? this.startNamedState : startNamedState);
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.toString = function () {
    return 'FrameInfo(subtimeline=' + Kotlin.toString(this.subtimeline) + (', frameInSubTimeline=' + Kotlin.toString(this.frameInSubTimeline)) + (', stateName=' + Kotlin.toString(this.stateName)) + (', startSubtimeline=' + Kotlin.toString(this.startSubtimeline)) + (', startNamedState=' + Kotlin.toString(this.startNamedState)) + ')';
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.subtimeline) | 0;
    result = result * 31 + Kotlin.hashCode(this.frameInSubTimeline) | 0;
    result = result * 31 + Kotlin.hashCode(this.stateName) | 0;
    result = result * 31 + Kotlin.hashCode(this.startSubtimeline) | 0;
    result = result * 31 + Kotlin.hashCode(this.startNamedState) | 0;
    return result;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.subtimeline, other.subtimeline) && Kotlin.equals(this.frameInSubTimeline, other.frameInSubTimeline) && Kotlin.equals(this.stateName, other.stateName) && Kotlin.equals(this.startSubtimeline, other.startSubtimeline) && Kotlin.equals(this.startNamedState, other.startNamedState)))));
  };
  SwfLoaderMethod.prototype.generateActualTimelines_0 = function (continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var $receiver = this.lib.symbolsById;
    var destination = ArrayList_init_0();
    var tmp$_8;
    tmp$_8 = $receiver.iterator();
    while (tmp$_8.hasNext()) {
      var element = tmp$_8.next();
      if (Kotlin.isType(element, AnSymbolMovieClip))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var symbol = tmp$.next();
      var swfTimeline = get_swfTimeline(symbol);
      var justAfterStopOrStart = true;
      var stateStartFrame = 0;
      var frameInfos = ArrayList_init(swfTimeline.frames.size);
      var referencedFrames = HashSet_init();
      tmp$_0 = swfTimeline.frames.iterator();
      while (tmp$_0.hasNext()) {
        var frame = tmp$_0.next();
        if (frame.hasGoto) {
          var $receiver_0 = frame.actions;
          var destination_0 = ArrayList_init_0();
          var tmp$_9;
          tmp$_9 = $receiver_0.iterator();
          while (tmp$_9.hasNext()) {
            var element_0 = tmp$_9.next();
            if (Kotlin.isType(element_0, MySwfFrame$Action$Goto))
              destination_0.add_11rb$(element_0);
          }
          var goto = first(destination_0);
          var element_1 = goto.frame0;
          referencedFrames.add_11rb$(element_1);
        }}
      var flow = true;
      var stateName = 'default';
      var frameIndex = 0;
      var subtimelineIndex = -1;
      var subtimelines = ArrayList_init_0();
      tmp$_1 = swfTimeline.frames.iterator();
      while (tmp$_1.hasNext()) {
        var frame_0 = tmp$_1.next();
        var startNamedState = false;
        var startSubtimeline = false;
        if (flow) {
          if (frame_0.isFirst)
            tmp$_2 = 'default';
          else if (frame_0.name != null)
            tmp$_2 = ensureNotNull(frame_0.name);
          else
            tmp$_2 = 'frame' + frame_0.index0;
          stateName = tmp$_2;
          frameIndex = 0;
          subtimelineIndex = subtimelineIndex + 1 | 0;
          var element_2 = new SwfLoaderMethod$generateActualTimelines$Subtimeline(this, subtimelineIndex);
          subtimelines.add_11rb$(element_2);
          startNamedState = true;
          startSubtimeline = true;
        }if (frame_0.name != null) {
          stateName = ensureNotNull(frame_0.name);
          startNamedState = true;
        } else if (referencedFrames.contains_11rb$(frame_0.index0)) {
          stateName = 'frame' + frame_0.index0;
          startNamedState = true;
        }var subtimeline = subtimelines.get_za3lpa$(subtimelineIndex);
        subtimeline.totalFrames = subtimeline.totalFrames + 1 | 0;
        flow = frame_0.hasFlow;
        var element_3 = new SwfLoaderMethod$generateActualTimelines$FrameInfo(this, subtimeline, frameIndex, stateName, startSubtimeline, startNamedState);
        frameInfos.add_11rb$(element_3);
        frameIndex = frameIndex + 1 | 0;
      }
      tmp$_3 = swfTimeline.frames.iterator();
      while (tmp$_3.hasNext()) {
        var frame_1 = tmp$_3.next();
        var info = frameInfos.get_za3lpa$(frame_1.index0);
        var isLast = frame_1.index0 === last(swfTimeline.frames).index0;
        if (frame_1.hasFlow) {
          tmp$_4 = frame_1.actions.iterator();
          while (tmp$_4.hasNext()) {
            var action = tmp$_4.next();
            if (Kotlin.isType(action, MySwfFrame$Action$Goto))
              info.subtimeline.nextState = frameInfos.get_za3lpa$(action.frame0).stateName;
            else if (Kotlin.isType(action, MySwfFrame$Action$Stop))
              info.subtimeline.nextStatePlay = false;
            else if (Kotlin.isType(action, MySwfFrame$Action$Play))
              info.subtimeline.nextStatePlay = true;
          }
        } else {
          if (isLast) {
            info.subtimeline.nextState = 'default';
            info.subtimeline.nextStatePlay = true;
          }}
      }
      var totalDepths = symbol.limits.totalDepths;
      var currentSubTimeline = new AnSymbolMovieClipSubTimeline(totalDepths);
      var lastDepths = Kotlin.newArray(totalDepths, null);
      tmp$_5 = swfTimeline.frames.iterator();
      while (tmp$_5.hasNext()) {
        var frame_2 = tmp$_5.next();
        var info_0 = frameInfos.get_za3lpa$(frame_2.index0);
        var currentTime = info_0.timeInSubTimeline;
        if (info_0.startSubtimeline) {
          currentSubTimeline = new AnSymbolMovieClipSubTimeline(totalDepths);
          arrayfill(lastDepths, null, 0, lastDepths.length);
          var subtimeline_0 = info_0.subtimeline;
          currentSubTimeline.totalTime = subtimeline_0.totalTime;
          currentSubTimeline.nextState = subtimeline_0.nextState;
          currentSubTimeline.nextStatePlay = subtimeline_0.nextStatePlay;
          if (frame_2.isFirst) {
            var $receiver_1 = symbol.states;
            var value = new AnSymbolMovieClipState('default', currentSubTimeline, 0);
            $receiver_1.put_xwzc9p$('default', value);
            var $receiver_2 = symbol.states;
            var value_0 = new AnSymbolMovieClipState('frame0', currentSubTimeline, 0);
            $receiver_2.put_xwzc9p$('frame0', value_0);
          }}if (info_0.startNamedState) {
          currentSubTimeline.actions.add_wxm5ur$(info_0.timeInSubTimeline, new AnEventAction(info_0.stateName));
          var $receiver_3 = symbol.states;
          var key = info_0.stateName;
          var value_1 = new AnSymbolMovieClipState(info_0.stateName, currentSubTimeline, info_0.timeInSubTimeline);
          $receiver_3.put_xwzc9p$(key, value_1);
        }tmp$_6 = frame_2.depths.iterator();
        while (tmp$_6.hasNext()) {
          var depth = tmp$_6.next();
          var n = depth.depth;
          var lastDepth = lastDepths[n];
          if (!equals(depth, lastDepth)) {
            currentSubTimeline.timelines[depth.depth].add_wxm5ur$(info_0.timeInSubTimeline, depth);
            lastDepths[n] = depth;
          }}
        tmp$_7 = frame_2.actions.iterator();
        while (tmp$_7.hasNext()) {
          var it = tmp$_7.next();
          if (Kotlin.isType(it, MySwfFrame$Action$PlaySound))
            currentSubTimeline.actions.add_wxm5ur$(currentTime, new AnPlaySoundAction(it.soundId));
        }
      }
    }
  };
  SwfLoaderMethod.prototype.processAs3Actions_0 = function (continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17;
    tmp$ = this.classNameToTagId.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_18 = tmp$.next();
      var className = tmp$_18.key;
      var tagId = tmp$_18.value;
      this.lib.symbolsById.get_za3lpa$(tagId).name = className;
      tmp$_0 = this.classNameToTypes.get_11rb$(className);
      if (tmp$_0 == null) {
        continue;
      }var type = tmp$_0;
      tmp$_2 = (tmp$_1 = this.lib.symbolsById.get_za3lpa$(tagId)) == null || Kotlin.isType(tmp$_1, AnSymbolMovieClip) ? tmp$_1 : null;
      if (tmp$_2 == null) {
        continue;
      }var symbol = tmp$_2;
      var abc = type.abc;
      var labelsToFrame0 = get_labelsToFrame0(symbol);
      tmp$_3 = type.instanceTraits.iterator();
      loop_label: while (tmp$_3.hasNext()) {
        var trait = tmp$_3.next();
        var simpleName = trait.name.simpleName;
        if (startsWith(simpleName, 'frame')) {
          var runIgnoringExceptions$result;
          runIgnoringExceptions$break: do {
            try {
              runIgnoringExceptions$result = toInt(substr_0(simpleName, 5));
            } catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                if (false)
                  printStackTrace(e);
                runIgnoringExceptions$result = null;
                break runIgnoringExceptions$break;
              } else
                throw e;
            }
          }
           while (false);
          tmp$_4 = runIgnoringExceptions$result;
          if (tmp$_4 == null) {
            continue loop_label;
          }var frame = tmp$_4;
          var frame0 = frame - 1 | 0;
          tmp$_6 = (tmp$_5 = trait) == null || Kotlin.isType(tmp$_5, ABC$TraitMethod) ? tmp$_5 : throwCCE();
          if (tmp$_6 == null) {
            continue loop_label;
          }var traitMethod = tmp$_6;
          var methodDesc = abc.methodsDesc.get_za3lpa$(traitMethod.methodIndex);
          tmp$_7 = methodDesc.body;
          if (tmp$_7 == null) {
            continue loop_label;
          }var body = tmp$_7;
          var lastValue = null;
          tmp$_8 = body.ops.iterator();
          while (tmp$_8.hasNext()) {
            var op = tmp$_8.next();
            switch (op.opcode.name) {
              case 'PushByte':
                lastValue = (Kotlin.isType(tmp$_9 = op, AbcIntOperation) ? tmp$_9 : throwCCE()).value;
                break;
              case 'PushShort':
                lastValue = (Kotlin.isType(tmp$_10 = op, AbcIntOperation) ? tmp$_10 : throwCCE()).value;
                break;
              case 'PushInt':
                lastValue = (Kotlin.isType(tmp$_11 = op, AbcIntOperation) ? tmp$_11 : throwCCE()).value;
                break;
              case 'PushUInt':
                lastValue = (Kotlin.isType(tmp$_12 = op, AbcIntOperation) ? tmp$_12 : throwCCE()).value;
                break;
              case 'PushString':
                lastValue = (Kotlin.isType(tmp$_13 = op, AbcStringOperation) ? tmp$_13 : throwCCE()).value;
                break;
              case 'CallPropVoid':
                var call = Kotlin.isType(tmp$_14 = op, AbcMultinameIntOperation) ? tmp$_14 : throwCCE();
                var callMethodName = call.multiname.simpleName;
                var frameData = get_swfTimeline(symbol).frames.get_za3lpa$(frame0);
                switch (callMethodName) {
                  case 'gotoAndPlay':
                  case 'gotoAndStop':
                    tmp$_15 = lastValue;
                    if (typeof tmp$_15 === 'string')
                      tmp$_17 = (tmp$_16 = labelsToFrame0.get_11rb$(lastValue)) != null ? tmp$_16 : 0;
                    else if (typeof tmp$_15 === 'number')
                      tmp$_17 = lastValue - 1 | 0;
                    else
                      tmp$_17 = 0;
                    var gotoFrame0 = tmp$_17;
                    if (equals(callMethodName, 'gotoAndStop')) {
                      frameData.gotoAndStop_za3lpa$(gotoFrame0);
                    } else {
                      frameData.gotoAndPlay_za3lpa$(gotoFrame0);
                    }

                    break;
                  case 'play':
                    frameData.play();
                    break;
                  case 'stop':
                    frameData.stop();
                    break;
                  default:break;
                }

                lastValue = null;
                break;
              default:break;
            }
          }
        }}
    }
  };
  function SwfLoaderMethod$generateTextures$lambda(closure$shape) {
    return function (texture) {
      closure$shape.textureWithBitmap = texture;
      return Unit;
    };
  }
  function SwfLoaderMethod$generateTextures$lambda_0(closure$tag, closure$ratio) {
    return function (it) {
      try {
        closure$tag.export_b7i6uh$(it, closure$ratio);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          printStackTrace(e);
        } else
          throw e;
      }
      return Unit;
    };
  }
  function SwfLoaderMethod$generateTextures$lambda_1(closure$morph, closure$ratio) {
    return function (texture) {
      closure$morph.texturesWithBitmap.add_wxm5ur$(numberToInt(closure$ratio * 1000), texture);
      return Unit;
    };
  }
  function Coroutine$generateTextures_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$generateTextures_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$generateTextures_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$generateTextures_0.prototype.constructor = Coroutine$generateTextures_0;
  Coroutine$generateTextures_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            var itemsInAtlas = LinkedHashMap_init();
            tmp$ = this.$this.shapesToPopulate.entries.iterator();
            while (tmp$.hasNext()) {
              var tmp$_4 = tmp$.next();
              var shape = tmp$_4.key;
              var rasterizerRequest = tmp$_4.value;
              var info = this.$this.analyzerInfo_za3lpa$(rasterizerRequest.charId);
              var rasterizer = rasterizerRequest.getRasterizer_14dthe$(info.globalScaleBounds.max);
              itemsInAtlas.put_xwzc9p$(SwfLoaderMethod$generateTextures$lambda(shape), rasterizer.imageWithScale);
            }

            tmp$_0 = this.$this.morphShapesToPopulate.iterator();
            while (tmp$_0.hasNext()) {
              var morph = tmp$_0.next();
              var tag = ensureNotNull(get_tagDefineMorphShape(morph));
              var ratios = sorted((tmp$_1 = this.$this.morphShapeRatios.get_11rb$(tag.characterId)) != null ? tmp$_1 : emptySet());
              var MAX_RATIOS = 24;
              var tmp$_5;
              if (ratios.size > MAX_RATIOS) {
                var $receiver = until(0, MAX_RATIOS);
                var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
                var tmp$_6;
                tmp$_6 = $receiver.iterator();
                while (tmp$_6.hasNext()) {
                  var item = tmp$_6.next();
                  destination.add_11rb$(item / (MAX_RATIOS - 1 | 0));
                }
                tmp$_5 = destination;
              } else
                tmp$_5 = ratios;
              var aratios = tmp$_5;
              tmp$_2 = aratios.iterator();
              while (tmp$_2.hasNext()) {
                var ratio = tmp$_2.next();
                var bb = new ShapeExporterBoundsBuilder();
                try {
                  tag.export_b7i6uh$(bb, ratio);
                } catch (e) {
                  if (Kotlin.isType(e, Throwable)) {
                    printStackTrace(e);
                  } else
                    throw e;
                }
                var bounds = bb.bb.getBounds_2da8yn$();
                var rasterizer_0 = new SWFShapeRasterizer(this.$this.swf, this.$this.config.debug, bounds, SwfLoaderMethod$generateTextures$lambda_0(tag, ratio), this.$this.config.rasterizerMethod, this.$this.config.antialiasing, this.$this.config.exportScale, this.$this.config.minMorphShapeSide, this.$this.config.maxMorphShapeSide, void 0, morph.id);
                itemsInAtlas.put_xwzc9p$(SwfLoaderMethod$generateTextures$lambda_1(morph, ratio), rasterizer_0.imageWithScale);
              }
            }

            this.state_0 = 2;
            this.result_0 = toAtlas(itemsInAtlas, this.$this.views, this.$this.config.maxTextureSide, this.$this.config.mipmaps, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$_3 = this.result_0.entries.iterator();
            while (tmp$_3.hasNext()) {
              var tmp$_7 = tmp$_3.next();
              var processor = tmp$_7.key;
              var texture = tmp$_7.value;
              processor(texture);
            }

            return;
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
  SwfLoaderMethod.prototype.generateTextures_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$generateTextures_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SwfLoaderMethod.prototype.findLimits_k5okyf$ = function (tags) {
    var tmp$;
    var maxDepth = -1;
    var totalFrames = 0;
    var items = HashSet_init();
    tmp$ = tags.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      if (Kotlin.isType(it, TagPlaceObject)) {
        if (it.hasCharacter) {
          var element = to(it.depth - 1 | 0, it.characterId);
          items.add_11rb$(element);
        }var tmp$_0 = maxDepth;
        var b = it.depth - 1 | 0;
        maxDepth = Math_0.max(tmp$_0, b);
        if (it.hasClipDepth) {
          var tmp$_1 = maxDepth;
          var b_0 = (it.clipDepth - 1 | 0) + 1 | 0;
          maxDepth = Math_0.max(tmp$_1, b_0);
        }} else if (Kotlin.isType(it, TagShowFrame)) {
        totalFrames = totalFrames + 1 | 0;
      }}
    return new AnSymbolLimits(maxDepth + 1 | 0, totalFrames, items.size, numberToInt(totalFrames * this.lib.msPerFrameDouble));
  };
  SwfLoaderMethod.prototype.registerBitmap_i0lgm1$ = function (charId, bmp, name) {
    if (name === void 0)
      name = null;
    get_bitmaps(this.swf).put_xwzc9p$(charId, bmp);
    var $receiver = this.symbols;
    var element = new AnSymbolBitmap(charId, name, bmp);
    $receiver.add_11rb$(element);
  };
  function SwfLoaderMethod$parseMovieClip$DepthInfo(depth, uid, charId, clipDepth, name, colorTransform, ratio, matrix, blendMode) {
    if (uid === void 0)
      uid = -1;
    if (charId === void 0)
      charId = -1;
    if (clipDepth === void 0)
      clipDepth = -1;
    if (name === void 0)
      name = null;
    if (colorTransform === void 0)
      colorTransform = ColorTransform.Companion.identity;
    if (ratio === void 0)
      ratio = 0.0;
    if (matrix === void 0)
      matrix = new Matrix();
    if (blendMode === void 0)
      blendMode = BlendMode.INHERIT;
    this.depth = depth;
    this.uid = uid;
    this.charId = charId;
    this.clipDepth = clipDepth;
    this.name = name;
    this.colorTransform = colorTransform;
    this.ratio = ratio;
    this.matrix = matrix;
    this.blendMode = blendMode;
  }
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.reset = function () {
    this.uid = -1;
    this.ratio = 0.0;
    this.charId = -1;
    this.clipDepth = -1;
    this.colorTransform = ColorTransform.Companion.identity;
    this.name = null;
    this.matrix = new Matrix();
    this.blendMode = BlendMode.INHERIT;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.createFrameElement = function () {
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.toFrameElement = function () {
    return new AnSymbolTimelineFrame(this.depth, this.uid, this.clipDepth, this.ratio, this.matrix, this.name, this.colorTransform, this.blendMode);
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DepthInfo',
    interfaces: []
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component1 = function () {
    return this.depth;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component2 = function () {
    return this.uid;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component3 = function () {
    return this.charId;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component4 = function () {
    return this.clipDepth;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component5 = function () {
    return this.name;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component6 = function () {
    return this.colorTransform;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component7 = function () {
    return this.ratio;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component8 = function () {
    return this.matrix;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component9 = function () {
    return this.blendMode;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.copy_9prpgn$ = function (depth, uid, charId, clipDepth, name, colorTransform, ratio, matrix, blendMode) {
    return new SwfLoaderMethod$parseMovieClip$DepthInfo(depth === void 0 ? this.depth : depth, uid === void 0 ? this.uid : uid, charId === void 0 ? this.charId : charId, clipDepth === void 0 ? this.clipDepth : clipDepth, name === void 0 ? this.name : name, colorTransform === void 0 ? this.colorTransform : colorTransform, ratio === void 0 ? this.ratio : ratio, matrix === void 0 ? this.matrix : matrix, blendMode === void 0 ? this.blendMode : blendMode);
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.toString = function () {
    return 'DepthInfo(depth=' + Kotlin.toString(this.depth) + (', uid=' + Kotlin.toString(this.uid)) + (', charId=' + Kotlin.toString(this.charId)) + (', clipDepth=' + Kotlin.toString(this.clipDepth)) + (', name=' + Kotlin.toString(this.name)) + (', colorTransform=' + Kotlin.toString(this.colorTransform)) + (', ratio=' + Kotlin.toString(this.ratio)) + (', matrix=' + Kotlin.toString(this.matrix)) + (', blendMode=' + Kotlin.toString(this.blendMode)) + ')';
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depth) | 0;
    result = result * 31 + Kotlin.hashCode(this.uid) | 0;
    result = result * 31 + Kotlin.hashCode(this.charId) | 0;
    result = result * 31 + Kotlin.hashCode(this.clipDepth) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorTransform) | 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    result = result * 31 + Kotlin.hashCode(this.matrix) | 0;
    result = result * 31 + Kotlin.hashCode(this.blendMode) | 0;
    return result;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depth, other.depth) && Kotlin.equals(this.uid, other.uid) && Kotlin.equals(this.charId, other.charId) && Kotlin.equals(this.clipDepth, other.clipDepth) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.colorTransform, other.colorTransform) && Kotlin.equals(this.ratio, other.ratio) && Kotlin.equals(this.matrix, other.matrix) && Kotlin.equals(this.blendMode, other.blendMode)))));
  };
  function SwfLoaderMethod$parseMovieClip$getUid(closure$depths, closure$uniqueIds, closure$mc) {
    return function (depth) {
      var charId = {v: closure$depths[depth].charId};
      var $receiver = closure$uniqueIds;
      var key = to(depth, charId.v);
      var tmp$;
      var value = $receiver.get_11rb$(key);
      if (value == null) {
        var closure$uniqueIds_0 = closure$uniqueIds;
        var closure$mc_0 = closure$mc;
        var uid = closure$uniqueIds_0.size;
        closure$mc_0.uidInfo[uid] = new AnSymbolUidDef(charId.v);
        var answer = uid;
        $receiver.put_xwzc9p$(key, answer);
        tmp$ = answer;
      } else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function SwfLoaderMethod$parseMovieClip$lambda(closure$mc, closure$currentFrame) {
    return function () {
      return get_swfTimeline(closure$mc).frames.get_za3lpa$(closure$currentFrame.v);
    };
  }
  function SwfLoaderMethod$parseMovieClip$lambda_0(closure$tag) {
    return function (it) {
      closure$tag.export_3yzzr9$(it);
      return Unit;
    };
  }
  function Coroutine$parseMovieClip_37csjd$($this, tags_0, mc_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 17;
    this.$this = $this;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$depths = void 0;
    this.local$getUid = void 0;
    this.local$depthsChanged = void 0;
    this.local$currentFrame = void 0;
    this.local$it = void 0;
    this.local$fbmp = void 0;
    this.local$bmp = void 0;
    this.local$fmaskinfo = void 0;
    this.local$funcompressedData = void 0;
    this.local$tags = tags_0;
    this.local$mc = mc_0;
  }
  Coroutine$parseMovieClip_37csjd$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseMovieClip_37csjd$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseMovieClip_37csjd$.prototype.constructor = Coroutine$parseMovieClip_37csjd$;
  Coroutine$parseMovieClip_37csjd$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            var tmp$_1, tmp$_2;
            var tmp$_3, tmp$_4, tmp$_5, tmp$_6;
            this.$this.symbols.add_11rb$(this.local$mc);
            var swfTimeline = get_swfTimeline(this.local$mc);
            var labelsToFrame0 = get_labelsToFrame0(this.local$mc);
            var uniqueIds = HashMap_init();
            var array = Array_0(this.local$mc.limits.totalDepths);
            var tmp$_7;
            tmp$_7 = array.length - 1 | 0;
            for (var i = 0; i <= tmp$_7; i++) {
              array[i] = new SwfLoaderMethod$parseMovieClip$DepthInfo(i);
            }

            this.local$depths = array;
            this.local$getUid = SwfLoaderMethod$parseMovieClip$getUid(this.local$depths, uniqueIds, this.local$mc);
            var totalShowFramesInMc = 0;
            tmp$ = this.local$tags.iterator();
            while (tmp$.hasNext()) {
              var it = tmp$.next();
              var currentFrame = swfTimeline.frames.size;
              if (Kotlin.isType(it, TagDefineSceneAndFrameLabelData)) {
                var tmp$_8 = get_labelsToFrame0(this.local$mc);
                var $receiver = it.frameLabels;
                var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
                var tmp$_9;
                tmp$_9 = $receiver.iterator();
                while (tmp$_9.hasNext()) {
                  var item = tmp$_9.next();
                  destination.add_11rb$(to(item.name, item.frameNumber - 1 | 0));
                }
                putAll(tmp$_8, destination);
              } else if (Kotlin.isType(it, TagFrameLabel)) {
                var $receiver_0 = get_labelsToFrame0(this.local$mc);
                var key = it.frameName;
                $receiver_0.put_xwzc9p$(key, currentFrame);
              } else if (Kotlin.isType(it, TagShowFrame)) {
                var $receiver_1 = swfTimeline.frames;
                var element = new MySwfFrame(currentFrame, this.local$mc.limits.totalDepths);
                $receiver_1.add_11rb$(element);
                totalShowFramesInMc = totalShowFramesInMc + 1 | 0;
              }}

            tmp$_0 = get_labelsToFrame0(this.local$mc).entries.iterator();
            while (tmp$_0.hasNext()) {
              var tmp$_10 = tmp$_0.next();
              var name = tmp$_10.key;
              var index = tmp$_10.value;
              swfTimeline.frames.get_za3lpa$(index).name = name;
            }

            this.local$depthsChanged = new BitSet(this.local$depths.length);
            this.local$currentFrame = {v: 0};
            this.local$tmp$_1 = this.local$tags.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 33;
              continue;
            }
            this.local$it = this.local$tmp$_1.next();
            var currentTime = this.$this.getFrameTime_za3lpa$(this.local$currentFrame.v);
            var swfCurrentFrame = lazy(SwfLoaderMethod$parseMovieClip$lambda(this.local$mc, this.local$currentFrame));
            if (!Kotlin.isType(this.local$it, TagDefineSceneAndFrameLabelData)) {
              if (!Kotlin.isType(this.local$it, TagFrameLabel)) {
                if (!Kotlin.isType(this.local$it, TagFileAttributes)) {
                  if (Kotlin.isType(this.local$it, TagSetBackgroundColor)) {
                    this.$this.lib.bgcolor = decodeSWFColor(this.local$it.color);
                    this.state_0 = 29;
                    continue;
                  } else {
                    if (!Kotlin.isType(this.local$it, TagProtect)) {
                      if (!Kotlin.isType(this.local$it, TagDefineFont)) {
                        if (!Kotlin.isType(this.local$it, TagDefineFontName)) {
                          if (!Kotlin.isType(this.local$it, TagDefineFontAlignZones)) {
                            if (Kotlin.isType(this.local$it, TagDefineEditText)) {
                              var tmp$_11;
                              tmp$_11 = this.$this.symbols;
                              var tmp$_12;
                              var element_0 = new AnTextFieldSymbol(this.local$it.characterId, null, (tmp$_12 = this.local$it.initialText) != null ? tmp$_12 : '', this.local$it.bounds.rect);
                              tmp$_11.add_11rb$(element_0);
                              this.state_0 = 24;
                              continue;
                            } else {
                              if (!Kotlin.isType(this.local$it, TagCSMTextSettings)) {
                                if (Kotlin.isType(this.local$it, TagDoAction)) {
                                  tmp$_1 = this.local$it.actions.iterator();
                                  while (tmp$_1.hasNext()) {
                                    var action = tmp$_1.next();
                                    if (Kotlin.isType(action, ActionStop)) {
                                      swfCurrentFrame.value.stop();
                                    } else if (Kotlin.isType(action, ActionPlay)) {
                                      swfCurrentFrame.value.play();
                                    } else if (Kotlin.isType(action, ActionGotoFrame)) {
                                      swfCurrentFrame.value.goto_za3lpa$(action.frame);
                                    }}
                                  this.state_0 = 22;
                                  continue;
                                } else {
                                  if (!Kotlin.isType(this.local$it, TagSoundStreamHead)) {
                                    if (Kotlin.isType(this.local$it, TagDefineSound)) {
                                      var soundBytes = this.local$it.soundData.cloneToNewByteArray();
                                      var $receiver_2 = this.$this.symbols;
                                      var element_1 = new AnSymbolSound(this.local$it.characterId, null, null, soundBytes);
                                      $receiver_2.add_11rb$(element_1);
                                      this.state_0 = 20;
                                      continue;
                                    } else {
                                      if (Kotlin.isType(this.local$it, TagStartSound)) {
                                        swfCurrentFrame.value.playSound_za3lpa$(this.local$it.soundId);
                                        this.state_0 = 19;
                                        continue;
                                      } else {
                                        if (Kotlin.isType(this.local$it, TagJPEGTables)) {
                                          println('Unhandled tag: ' + this.local$it);
                                          this.state_0 = 18;
                                          continue;
                                        } else {
                                          if (Kotlin.isType(this.local$it, TagDefineBits) || Kotlin.isType(this.local$it, TagDefineBitsLossless)) {
                                            this.local$fbmp = new Bitmap32(1, 1);
                                            Kotlin.isType(tmp$_2 = this.local$it, IDefinitionTag) ? tmp$_2 : throwCCE();
                                            if (Kotlin.isType(this.local$it, TagDefineBitsJPEG2)) {
                                              var bitsData = this.local$it.bitmapData.cloneToNewByteArray();
                                              this.exceptionState_0 = 11;
                                              this.state_0 = 10;
                                              this.result_0 = readBitmap(openAsync(bitsData), this.$this.views.imageFormats, void 0, this);
                                              if (this.result_0 === COROUTINE_SUSPENDED)
                                                return COROUTINE_SUSPENDED;
                                              continue;
                                            } else {
                                              if (Kotlin.isType(this.local$it, TagDefineBitsLossless)) {
                                                this.local$funcompressedData = this.local$it.zlibBitmapData.cloneToNewFlashByteArray();
                                                this.state_0 = 8;
                                                this.result_0 = this.local$funcompressedData.uncompressInWorker_61zpoe$('zlib', this);
                                                if (this.result_0 === COROUTINE_SUSPENDED)
                                                  return COROUTINE_SUSPENDED;
                                                continue;
                                              } else {
                                                this.state_0 = 9;
                                                continue;
                                              }
                                            }
                                          } else {
                                            if (Kotlin.isType(this.local$it, TagDefineShape)) {
                                              var tag = this.local$it;
                                              var rasterizerRequest = new SWFShapeRasterizerRequest(this.$this.swf, tag.characterId, tag.shapeBounds.rect, SwfLoaderMethod$parseMovieClip$lambda_0(tag), this.$this.config);
                                              var symbol = new AnSymbolShape(this.local$it.characterId, null, rasterizerRequest.shapeBounds, null, rasterizerRequest.path);
                                              set_tagDefineShape(symbol, this.local$it);
                                              this.$this.symbols.add_11rb$(symbol);
                                              var $receiver_3 = this.$this.shapesToPopulate;
                                              var pair = to(symbol, rasterizerRequest);
                                              $receiver_3.put_xwzc9p$(pair.first, pair.second);
                                              this.state_0 = 7;
                                              continue;
                                            } else {
                                              if (Kotlin.isType(this.local$it, TagDefineMorphShape)) {
                                                var startBounds = this.local$it.startBounds.rect;
                                                var endBounds = this.local$it.endBounds.rect;
                                                var bounds = add(add(add(add(new BoundsBuilder(), startBounds), endBounds), this.local$it.startEdgeBounds.rect), this.local$it.endEdgeBounds.rect).getBounds_2da8yn$();
                                                var bounds2 = bounds.copy_6y0v78$(void 0, void 0, bounds.width + 100, bounds.height + 100);
                                                var symbol_0 = new AnSymbolMorphShape(this.local$it.characterId, null, bounds2);
                                                set_tagDefineMorphShape(symbol_0, this.local$it);
                                                this.$this.symbols.add_11rb$(symbol_0);
                                                this.$this.morphShapesToPopulate.add_11rb$(symbol_0);
                                                this.state_0 = 6;
                                                continue;
                                              } else {
                                                if (Kotlin.isType(this.local$it, TagDoABC)) {
                                                  var tmp$_13 = this.$this.classNameToTypes;
                                                  var $receiver_4 = this.local$it.abc.typesInfo;
                                                  var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_4, 10));
                                                  var tmp$_14;
                                                  tmp$_14 = $receiver_4.iterator();
                                                  while (tmp$_14.hasNext()) {
                                                    var item_0 = tmp$_14.next();
                                                    destination_0.add_11rb$(to(item_0.name.toString(), item_0));
                                                  }
                                                  var map = toMap(destination_0);
                                                  tmp$_13.putAll_a2k3zr$(map);
                                                  this.state_0 = 5;
                                                  continue;
                                                } else {
                                                  if (Kotlin.isType(this.local$it, TagSymbolClass)) {
                                                    var tmp$_15 = this.$this.classNameToTagId;
                                                    var $receiver_5 = this.local$it.symbols;
                                                    var destination_1 = ArrayList_init_0();
                                                    var tmp$_16;
                                                    tmp$_16 = $receiver_5.iterator();
                                                    while (tmp$_16.hasNext()) {
                                                      var element_2 = tmp$_16.next();
                                                      if (element_2.name != null)
                                                        destination_1.add_11rb$(element_2);
                                                    }
                                                    var destination_2 = ArrayList_init(collectionSizeOrDefault(destination_1, 10));
                                                    var tmp$_17;
                                                    tmp$_17 = destination_1.iterator();
                                                    while (tmp$_17.hasNext()) {
                                                      var item_1 = tmp$_17.next();
                                                      destination_2.add_11rb$(to(ensureNotNull(item_1.name), item_1.tagId));
                                                    }
                                                    var map_0 = toMap(destination_2);
                                                    tmp$_15.putAll_a2k3zr$(map_0);
                                                    this.state_0 = 4;
                                                    continue;
                                                  } else {
                                                    if (Kotlin.isType(this.local$it, TagDefineSprite)) {
                                                      var childMc = new AnSymbolMovieClip(this.local$it.characterId, null, this.$this.findLimits_k5okyf$(this.local$it.tags));
                                                      var $receiver_6 = this.$this.spritesById;
                                                      var key_0 = this.local$it.characterId;
                                                      $receiver_6.put_xwzc9p$(key_0, childMc);
                                                      this.state_0 = 2;
                                                      this.result_0 = this.$this.parseMovieClip_37csjd$(this.local$it.tags, childMc, this);
                                                      if (this.result_0 === COROUTINE_SUSPENDED)
                                                        return COROUTINE_SUSPENDED;
                                                      continue;
                                                    } else {
                                                      if (Kotlin.isType(this.local$it, TagDefineScalingGrid)) {
                                                        var childMc_0 = this.$this.spritesById.get_11rb$(this.local$it.characterId);
                                                        if (childMc_0 != null) {
                                                          childMc_0.ninePatch = this.local$it.splitter.rect;
                                                        }this.$this.analyzerInfo_za3lpa$(this.local$it.characterId).hasNinePatch = true;
                                                      } else if (Kotlin.isType(this.local$it, TagPlaceObject)) {
                                                        this.$this.totalPlaceObject = this.$this.totalPlaceObject + 1 | 0;
                                                        var depthId = this.local$it.depth - 1 | 0;
                                                        var clipDepthId = this.local$it.hasClipDepth ? (this.local$it.clipDepth - 1 | 0) - 1 | 0 : -1;
                                                        var depth = this.local$depths[depthId];
                                                        if (this.local$it.hasCharacter)
                                                          depth.charId = this.local$it.characterId;
                                                        if (this.local$it.hasClipDepth)
                                                          depth.clipDepth = clipDepthId;
                                                        if (this.local$it.hasName)
                                                          depth.name = this.local$it.instanceName;
                                                        if (this.local$it.hasColorTransform) {
                                                          var ct = toColorTransform(ensureNotNull(this.local$it.colorTransform));
                                                          depth.colorTransform = ct;
                                                        }if (this.local$it.hasMatrix) {
                                                          var m = ensureNotNull(this.local$it.matrix).matrix;
                                                          depth.matrix = m;
                                                        }if (this.local$it.hasBlendMode) {
                                                          switch (this.local$it.blendMode) {
                                                            case 0:
                                                              tmp$_5 = BlendMode.NORMAL;
                                                              break;
                                                            case 1:
                                                              tmp$_5 = BlendMode.NORMAL;
                                                              break;
                                                            case 2:
                                                              tmp$_5 = BlendMode.INHERIT;
                                                              break;
                                                            case 3:
                                                              tmp$_5 = BlendMode.MULTIPLY;
                                                              break;
                                                            case 4:
                                                              tmp$_5 = BlendMode.SCREEN;
                                                              break;
                                                            case 5:
                                                              tmp$_5 = BlendMode.LIGHTEN;
                                                              break;
                                                            case 6:
                                                              tmp$_5 = BlendMode.DARKEN;
                                                              break;
                                                            case 7:
                                                              tmp$_5 = BlendMode.DIFFERENCE;
                                                              break;
                                                            case 8:
                                                              tmp$_5 = BlendMode.ADD;
                                                              break;
                                                            case 9:
                                                              tmp$_5 = BlendMode.SUBTRACT;
                                                              break;
                                                            case 10:
                                                              tmp$_5 = BlendMode.INVERT;
                                                              break;
                                                            case 11:
                                                              tmp$_5 = BlendMode.ALPHA;
                                                              break;
                                                            case 12:
                                                              tmp$_5 = BlendMode.ERASE;
                                                              break;
                                                            case 13:
                                                              tmp$_5 = BlendMode.INHERIT;
                                                              break;
                                                            case 14:
                                                              tmp$_5 = BlendMode.HARDLIGHT;
                                                              break;
                                                            default:tmp$_5 = BlendMode.INHERIT;
                                                              break;
                                                          }
                                                          depth.blendMode = tmp$_5;
                                                        }var uid = this.local$getUid(depthId);
                                                        var metaData = this.local$it.metaData;
                                                        var tmp$_18 = metaData != null && Kotlin.isType(metaData, Map);
                                                        if (tmp$_18) {
                                                          var tmp$_19;
                                                          tmp$_18 = (Kotlin.isType(tmp$_19 = metaData, Map) ? tmp$_19 : throwCCE()).containsKey_11rb$('props');
                                                        }if (tmp$_18) {
                                                          var uidInfo = this.local$mc.uidInfo[uid];
                                                          var runIgnoringExceptions$result;
                                                          runIgnoringExceptions$break: do {
                                                            try {
                                                              var tmp$_20;
                                                              var tmp$_21;
                                                              runIgnoringExceptions$result = Kotlin.isType(tmp$_20 = json.Json.parse_61zpoe$(toString((Kotlin.isType(tmp$_21 = metaData, Map) ? tmp$_21 : throwCCE()).get_11rb$('props'))), Map) ? tmp$_20 : throwCCE();
                                                            } catch (e_0) {
                                                              if (Kotlin.isType(e_0, Throwable)) {
                                                                if (false)
                                                                  printStackTrace(e_0);
                                                                runIgnoringExceptions$result = null;
                                                                break runIgnoringExceptions$break;
                                                              } else
                                                                throw e_0;
                                                            }
                                                          }
                                                           while (false);
                                                          var eprops = runIgnoringExceptions$result;
                                                          if (eprops != null) {
                                                            uidInfo.extraProps.putAll_a2k3zr$(eprops);
                                                          }}if (this.local$it.hasRatio) {
                                                          depth.ratio = this.local$it.ratiod;
                                                          var $receiver_7 = this.$this.morphShapeRatios;
                                                          var key_1 = depth.charId;
                                                          var tmp$_22;
                                                          var value = $receiver_7.get_11rb$(key_1);
                                                          if (value == null) {
                                                            var answer = HashSet_init();
                                                            $receiver_7.put_xwzc9p$(key_1, answer);
                                                            tmp$_22 = answer;
                                                          } else {
                                                            tmp$_22 = value;
                                                          }
                                                          var ratios = tmp$_22;
                                                          var element_3 = this.local$it.ratiod;
                                                          ratios.add_11rb$(element_3);
                                                        }this.$this.analyzerInfo_za3lpa$(depth.charId).registerParent_ic6ump$(this.$this.analyzerInfo_za3lpa$(this.local$mc.id));
                                                        this.$this.analyzerInfo_za3lpa$(depth.charId).registerMatrix_1ktkmn$(depth.matrix);
                                                        depth.uid = uid;
                                                        this.local$depthsChanged.set_fzusl$(depthId, true);
                                                      } else if (Kotlin.isType(this.local$it, TagRemoveObject)) {
                                                        this.local$depths[this.local$it.depth - 1 | 0].reset();
                                                        this.local$depthsChanged.set_fzusl$(this.local$it.depth - 1 | 0, true);
                                                      } else if (Kotlin.isType(this.local$it, TagShowFrame)) {
                                                        this.$this.globalTotalShowFrame = this.$this.globalTotalShowFrame + 1 | 0;
                                                        for (tmp$_6 = 0; tmp$_6 !== this.local$depths.length; ++tmp$_6) {
                                                          var depth_0 = this.local$depths[tmp$_6];
                                                          var $receiver_8 = swfCurrentFrame.value.depths;
                                                          var element_4 = depth_0.toFrameElement();
                                                          $receiver_8.add_11rb$(element_4);
                                                        }
                                                        this.local$depthsChanged.clear();
                                                        this.local$currentFrame.v = this.local$currentFrame.v + 1 | 0;
                                                      } else if (!Kotlin.isType(this.local$it, TagEnd)) {
                                                        println('Unhandled tag ' + this.local$it);
                                                      }this.state_0 = 3;
                                                      continue;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    this.state_0 = 21;
                                    continue;
                                  }
                                }
                              } else {
                                this.state_0 = 23;
                                continue;
                              }
                            }
                          } else {
                            this.state_0 = 25;
                            continue;
                          }
                        } else {
                          this.state_0 = 26;
                          continue;
                        }
                      } else {
                        this.state_0 = 27;
                        continue;
                      }
                    } else {
                      this.state_0 = 28;
                      continue;
                    }
                  }
                } else {
                  this.state_0 = 30;
                  continue;
                }
              } else {
                this.state_0 = 31;
                continue;
              }
            } else {
              this.state_0 = 32;
              continue;
            }

          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 16;
            continue;
          case 8:
            var uncompressedData = this.local$funcompressedData.cloneToNewByteArray();
            switch (this.local$it.bitmapFormat.name) {
              case 'BIT_8':
                var ncolors = this.local$it.bitmapColorTableSize;
                var s = new FastByteArrayInputStream(uncompressedData);
                if (this.local$it.hasAlpha) {
                  var $receiver_9 = until(0, ncolors);
                  var destination_3 = ArrayList_init(collectionSizeOrDefault($receiver_9, 10));
                  var tmp$_23;
                  tmp$_23 = $receiver_9.iterator();
                  while (tmp$_23.hasNext()) {
                    var item_2 = tmp$_23.next();
                    destination_3.add_11rb$(s.readS32LE());
                  }
                  tmp$_3 = toIntArray(destination_3);
                } else {
                  var $receiver_10 = until(0, ncolors);
                  var destination_4 = ArrayList_init(collectionSizeOrDefault($receiver_10, 10));
                  var tmp$_24;
                  tmp$_24 = $receiver_10.iterator();
                  while (tmp$_24.hasNext()) {
                    var item_3 = tmp$_24.next();
                    destination_4.add_11rb$(-16777216 | s.readU24LE());
                  }
                  tmp$_3 = toIntArray(destination_4);
                }

                var clut = tmp$_3;
                var pixels = s.readBytes_za3lpa$(Kotlin.imul(this.local$it.actualWidth, this.local$it.actualHeight));
                var bmp = new Bitmap8(this.local$it.actualWidth, this.local$it.actualHeight, pixels, new RgbaArray(clut));
                this.local$fbmp = bmp;
                break;
              case 'BIT_15':
                this.local$fbmp = new Bitmap32(this.local$it.actualWidth, this.local$it.actualHeight, decode(color.BGRA_5551, uncompressedData));
                break;
              case 'BIT_24_32':
                var components = uncompressedData.length / Kotlin.imul(this.local$it.bitmapWidth, this.local$it.bitmapHeight) | 0;
                var colorFormat = color.BGRA;
                this.local$fbmp = new Bitmap32(this.local$it.bitmapWidth, this.local$it.bitmapHeight, decode(colorFormat, uncompressedData, void 0, void 0, false));
                if (!this.local$it.hasAlpha) {
                  tmp$_4 = this.local$fbmp.data.size;
                  for (var n = 0; n < tmp$_4; n++)
                    this.local$fbmp.data.set_vlvk8p$(n, RGBA.Companion.invoke_vux9f0$(this.local$fbmp.data.get_za3lpa$(n).rgb, 255));
                }
                break;
              default:break;
            }

            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 15;
            continue;
          case 10:
            this.local$tmp$_4 = this.result_0;
            this.exceptionState_0 = 17;
            this.state_0 = 12;
            continue;
          case 11:
            this.exceptionState_0 = 17;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
              this.local$tmp$_4 = new Bitmap32(1, 1);
            } else
              throw e;
            this.state_0 = 12;
            continue;
          case 12:
            var nativeBitmap = this.local$tmp$_4;
            this.local$bmp = nativeBitmap.toBMP32();
            this.local$fbmp = this.local$bmp;
            if (Kotlin.isType(this.local$it, TagDefineBitsJPEG3)) {
              this.local$fmaskinfo = this.local$it.bitmapAlphaData.cloneToNewFlashByteArray();
              this.state_0 = 13;
              this.result_0 = this.local$fmaskinfo.uncompressInWorker_61zpoe$('zlib', this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 14;
              continue;
            }

          case 13:
            var maskinfo = this.local$fmaskinfo.cloneToNewByteArray();
            this.local$bmp.writeChannel_z3s5mf$(BitmapChannel.ALPHA, new Bitmap8(this.local$bmp.width, this.local$bmp.height, maskinfo));
            this.state_0 = 14;
            continue;
          case 14:
            this.state_0 = 15;
            continue;
          case 15:
            this.$this.registerBitmap_i0lgm1$(this.local$it.characterId, this.local$fbmp, null);
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 18;
            continue;
          case 17:
            throw this.exception_0;
          case 18:
            this.state_0 = 19;
            continue;
          case 19:
            this.state_0 = 20;
            continue;
          case 20:
            this.state_0 = 21;
            continue;
          case 21:
            this.state_0 = 22;
            continue;
          case 22:
            this.state_0 = 23;
            continue;
          case 23:
            this.state_0 = 24;
            continue;
          case 24:
            this.state_0 = 25;
            continue;
          case 25:
            this.state_0 = 26;
            continue;
          case 26:
            this.state_0 = 27;
            continue;
          case 27:
            this.state_0 = 28;
            continue;
          case 28:
            this.state_0 = 29;
            continue;
          case 29:
            this.state_0 = 30;
            continue;
          case 30:
            this.state_0 = 31;
            continue;
          case 31:
            this.state_0 = 32;
            continue;
          case 32:
            this.state_0 = 1;
            continue;
          case 33:
            return;
          default:this.state_0 = 17;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 17) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SwfLoaderMethod.prototype.parseMovieClip_37csjd$ = function (tags_0, mc_0, continuation_0, suspended) {
    var instance = new Coroutine$parseMovieClip_37csjd$(this, tags_0, mc_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  SwfLoaderMethod.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwfLoaderMethod',
    interfaces: []
  };
  function Coroutine$registerSwfLoading$lambda$lambda($receiver_0, content_0, views_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
    this.local$views = views_0;
  }
  Coroutine$registerSwfLoading$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$registerSwfLoading$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$registerSwfLoading$lambda$lambda.prototype.constructor = Coroutine$registerSwfLoading$lambda$lambda;
  Coroutine$registerSwfLoading$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readSWF_0(this.local$$receiver, this.local$views, this.local$content.ba, void 0, this);
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
  function registerSwfLoading$lambda$lambda($receiver_0, content_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$registerSwfLoading$lambda$lambda($receiver_0, content_0, views_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$registerSwfLoading$lambda(s_0, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$s = s_0;
  }
  Coroutine$registerSwfLoading$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$registerSwfLoading$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$registerSwfLoading$lambda.prototype.constructor = Coroutine$registerSwfLoading$lambda;
  Coroutine$registerSwfLoading$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var MAGIC = this.local$s.readString_uyw3ma$(3);
            switch (MAGIC) {
              case 'FWS':
              case 'CWS':
              case 'ZWS':
                return new KorgeFileLoader('swf', registerSwfLoading$lambda$lambda);
              default:return null;
            }

            return;
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
  function registerSwfLoading$lambda(s_0, injector_0, continuation_0, suspended) {
    var instance = new Coroutine$registerSwfLoading$lambda(s_0, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function registerSwfLoading($receiver) {
    var $receiver_0 = get_animateLibraryLoaders($receiver.views);
    var element = new KorgeFileLoaderTester('swf', registerSwfLoading$lambda);
    $receiver_0.add_11rb$(element);
  }
  Object.defineProperty(ABC$Namespace, 'Companion', {
    get: ABC$Namespace$Companion_getInstance
  });
  ABC.Namespace = ABC$Namespace;
  ABC.AbstractMultiname = ABC$AbstractMultiname;
  Object.defineProperty(ABC, 'EmptyMultiname', {
    get: ABC$EmptyMultiname_getInstance
  });
  ABC.ABCQName = ABC$ABCQName;
  ABC.QNameA = ABC$QNameA;
  ABC.RTQName = ABC$RTQName;
  ABC.RTQNameA = ABC$RTQNameA;
  Object.defineProperty(ABC, 'RTQNameL', {
    get: ABC$RTQNameL_getInstance
  });
  Object.defineProperty(ABC, 'RTQNameLA', {
    get: ABC$RTQNameLA_getInstance
  });
  ABC.Multiname = ABC$Multiname;
  ABC.MultinameA = ABC$MultinameA;
  ABC.MultinameL = ABC$MultinameL;
  ABC.MultinameLA = ABC$MultinameLA;
  ABC.TypeName = ABC$TypeName;
  ABC.Metadata = ABC$Metadata;
  $$importsForInline$$['kds-root-kds'] = $module$kds_root_kds;
  ABC.MethodBody = ABC$MethodBody;
  ABC.ExceptionInfo = ABC$ExceptionInfo;
  ABC.Trait = ABC$Trait;
  ABC.TraitSlot = ABC$TraitSlot;
  ABC.TraitMethod = ABC$TraitMethod;
  ABC.TraitClass = ABC$TraitClass;
  ABC.TraitFunction = ABC$TraitFunction;
  ABC.InstanceInfo = ABC$InstanceInfo;
  ABC.ClassInfo = ABC$ClassInfo;
  ABC.TypeInfo = ABC$TypeInfo;
  ABC.ScriptInfo = ABC$ScriptInfo;
  ABC.MethodDesc = ABC$MethodDesc;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korfl = package$soywiz.korfl || (package$soywiz.korfl = {});
  package$korfl.ABC = ABC;
  AMF0.prototype.Reader = AMF0$Reader;
  Object.defineProperty(package$korfl, 'AMF0', {
    get: AMF0_getInstance
  });
  AMF3.prototype.Reader = AMF3$Reader;
  Object.defineProperty(package$korfl, 'AMF3', {
    get: AMF3_getInstance
  });
  package$korfl.AbcConstantPool = AbcConstantPool;
  Object.defineProperty(AbcOpcode, 'Breakpoint', {
    get: AbcOpcode$Breakpoint_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Nop', {
    get: AbcOpcode$Nop_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Throw', {
    get: AbcOpcode$Throw_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetSuper', {
    get: AbcOpcode$GetSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetSuper', {
    get: AbcOpcode$SetSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DefaultXmlNamespace', {
    get: AbcOpcode$DefaultXmlNamespace_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DefaultXmlNamespaceL', {
    get: AbcOpcode$DefaultXmlNamespaceL_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Kill', {
    get: AbcOpcode$Kill_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Label', {
    get: AbcOpcode$Label_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotLessThan', {
    get: AbcOpcode$IfNotLessThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotLessEqual', {
    get: AbcOpcode$IfNotLessEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotGreaterThan', {
    get: AbcOpcode$IfNotGreaterThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotGreaterEqual', {
    get: AbcOpcode$IfNotGreaterEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Jump', {
    get: AbcOpcode$Jump_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfTrue', {
    get: AbcOpcode$IfTrue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfFalse', {
    get: AbcOpcode$IfFalse_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfEqual', {
    get: AbcOpcode$IfEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotEqual', {
    get: AbcOpcode$IfNotEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfLessThan', {
    get: AbcOpcode$IfLessThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfLessEqual', {
    get: AbcOpcode$IfLessEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfGreaterThan', {
    get: AbcOpcode$IfGreaterThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfGreaterEqual', {
    get: AbcOpcode$IfGreaterEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfStrictEqual', {
    get: AbcOpcode$IfStrictEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfStrictNotEqual', {
    get: AbcOpcode$IfStrictNotEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'LookupSwitch', {
    get: AbcOpcode$LookupSwitch_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushWith', {
    get: AbcOpcode$PushWith_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PopScope', {
    get: AbcOpcode$PopScope_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NextName', {
    get: AbcOpcode$NextName_getInstance
  });
  Object.defineProperty(AbcOpcode, 'HasNext', {
    get: AbcOpcode$HasNext_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushNull', {
    get: AbcOpcode$PushNull_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushUndefined', {
    get: AbcOpcode$PushUndefined_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NextValue', {
    get: AbcOpcode$NextValue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushByte', {
    get: AbcOpcode$PushByte_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushShort', {
    get: AbcOpcode$PushShort_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushTrue', {
    get: AbcOpcode$PushTrue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushFalse', {
    get: AbcOpcode$PushFalse_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushNaN', {
    get: AbcOpcode$PushNaN_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Pop', {
    get: AbcOpcode$Pop_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Dup', {
    get: AbcOpcode$Dup_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Swap', {
    get: AbcOpcode$Swap_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushString', {
    get: AbcOpcode$PushString_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushInt', {
    get: AbcOpcode$PushInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushUInt', {
    get: AbcOpcode$PushUInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushDouble', {
    get: AbcOpcode$PushDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushScope', {
    get: AbcOpcode$PushScope_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushNamespace', {
    get: AbcOpcode$PushNamespace_getInstance
  });
  Object.defineProperty(AbcOpcode, 'HasNext2', {
    get: AbcOpcode$HasNext2_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushDecimal', {
    get: AbcOpcode$PushDecimal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushDNaN', {
    get: AbcOpcode$PushDNaN_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewFunction', {
    get: AbcOpcode$NewFunction_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Call', {
    get: AbcOpcode$Call_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Construct', {
    get: AbcOpcode$Construct_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallMethod', {
    get: AbcOpcode$CallMethod_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallStatic', {
    get: AbcOpcode$CallStatic_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallSuper', {
    get: AbcOpcode$CallSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallProperty', {
    get: AbcOpcode$CallProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ReturnVoid', {
    get: AbcOpcode$ReturnVoid_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ReturnValue', {
    get: AbcOpcode$ReturnValue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConstructSuper', {
    get: AbcOpcode$ConstructSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConstructProp', {
    get: AbcOpcode$ConstructProp_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallSuperId', {
    get: AbcOpcode$CallSuperId_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallPropLex', {
    get: AbcOpcode$CallPropLex_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallInterface', {
    get: AbcOpcode$CallInterface_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallSuperVoid', {
    get: AbcOpcode$CallSuperVoid_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallPropVoid', {
    get: AbcOpcode$CallPropVoid_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ApplyType', {
    get: AbcOpcode$ApplyType_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewObject', {
    get: AbcOpcode$NewObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewArray', {
    get: AbcOpcode$NewArray_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewActivation', {
    get: AbcOpcode$NewActivation_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewClass', {
    get: AbcOpcode$NewClass_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetDescendants', {
    get: AbcOpcode$GetDescendants_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewCatch', {
    get: AbcOpcode$NewCatch_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindPropGlobalStrict', {
    get: AbcOpcode$FindPropGlobalStrict_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindPropGlobal', {
    get: AbcOpcode$FindPropGlobal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindPropStrict', {
    get: AbcOpcode$FindPropStrict_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindProperty', {
    get: AbcOpcode$FindProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindDef', {
    get: AbcOpcode$FindDef_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLex', {
    get: AbcOpcode$GetLex_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetProperty', {
    get: AbcOpcode$SetProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal', {
    get: AbcOpcode$GetLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal', {
    get: AbcOpcode$SetLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetGlobalScope', {
    get: AbcOpcode$GetGlobalScope_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetScopeObject', {
    get: AbcOpcode$GetScopeObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetProperty', {
    get: AbcOpcode$GetProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetPropertyLate', {
    get: AbcOpcode$GetPropertyLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'InitProperty', {
    get: AbcOpcode$InitProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetPropertyLate', {
    get: AbcOpcode$SetPropertyLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DeleteProperty', {
    get: AbcOpcode$DeleteProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DeletePropertyLate', {
    get: AbcOpcode$DeletePropertyLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetSlot', {
    get: AbcOpcode$GetSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetSlot', {
    get: AbcOpcode$SetSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetGlobalSlot', {
    get: AbcOpcode$GetGlobalSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetGlobalSlot', {
    get: AbcOpcode$SetGlobalSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertString', {
    get: AbcOpcode$ConvertString_getInstance
  });
  Object.defineProperty(AbcOpcode, 'EscXmlElem', {
    get: AbcOpcode$EscXmlElem_getInstance
  });
  Object.defineProperty(AbcOpcode, 'EscXmlAttr', {
    get: AbcOpcode$EscXmlAttr_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertInt', {
    get: AbcOpcode$ConvertInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertUInt', {
    get: AbcOpcode$ConvertUInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertDouble', {
    get: AbcOpcode$ConvertDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertBoolean', {
    get: AbcOpcode$ConvertBoolean_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertObject', {
    get: AbcOpcode$ConvertObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CheckFilter', {
    get: AbcOpcode$CheckFilter_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Coerce', {
    get: AbcOpcode$Coerce_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceBoolean', {
    get: AbcOpcode$CoerceBoolean_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceAny', {
    get: AbcOpcode$CoerceAny_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceInt', {
    get: AbcOpcode$CoerceInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceDouble', {
    get: AbcOpcode$CoerceDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceString', {
    get: AbcOpcode$CoerceString_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AsType', {
    get: AbcOpcode$AsType_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AsTypeLate', {
    get: AbcOpcode$AsTypeLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceUInt', {
    get: AbcOpcode$CoerceUInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceObject', {
    get: AbcOpcode$CoerceObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Negate', {
    get: AbcOpcode$Negate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Increment', {
    get: AbcOpcode$Increment_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IncLocal', {
    get: AbcOpcode$IncLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Decrement', {
    get: AbcOpcode$Decrement_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DecLocal', {
    get: AbcOpcode$DecLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'TypeOf', {
    get: AbcOpcode$TypeOf_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Not', {
    get: AbcOpcode$Not_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitNot', {
    get: AbcOpcode$BitNot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Concat', {
    get: AbcOpcode$Concat_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AddDouble', {
    get: AbcOpcode$AddDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Add', {
    get: AbcOpcode$Add_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Subtract', {
    get: AbcOpcode$Subtract_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Multiply', {
    get: AbcOpcode$Multiply_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Divide', {
    get: AbcOpcode$Divide_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Modulo', {
    get: AbcOpcode$Modulo_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ShiftLeft', {
    get: AbcOpcode$ShiftLeft_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ShiftRight', {
    get: AbcOpcode$ShiftRight_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ShiftRightUnsigned', {
    get: AbcOpcode$ShiftRightUnsigned_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitAnd', {
    get: AbcOpcode$BitAnd_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitOr', {
    get: AbcOpcode$BitOr_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitXor', {
    get: AbcOpcode$BitXor_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Equals', {
    get: AbcOpcode$Equals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'StrictEquals', {
    get: AbcOpcode$StrictEquals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'LessThan', {
    get: AbcOpcode$LessThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'LessEquals', {
    get: AbcOpcode$LessEquals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GreaterThan', {
    get: AbcOpcode$GreaterThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GreaterEquals', {
    get: AbcOpcode$GreaterEquals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'InstanceOf', {
    get: AbcOpcode$InstanceOf_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IsType', {
    get: AbcOpcode$IsType_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IsTypeLate', {
    get: AbcOpcode$IsTypeLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'In', {
    get: AbcOpcode$In_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IncrementInt', {
    get: AbcOpcode$IncrementInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DecrementInt', {
    get: AbcOpcode$DecrementInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IncLocalInt', {
    get: AbcOpcode$IncLocalInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DecLocalInt', {
    get: AbcOpcode$DecLocalInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NegateInt', {
    get: AbcOpcode$NegateInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AddInt', {
    get: AbcOpcode$AddInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SubtractInt', {
    get: AbcOpcode$SubtractInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'MultiplyInt', {
    get: AbcOpcode$MultiplyInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal0', {
    get: AbcOpcode$GetLocal0_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal1', {
    get: AbcOpcode$GetLocal1_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal2', {
    get: AbcOpcode$GetLocal2_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal3', {
    get: AbcOpcode$GetLocal3_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal0', {
    get: AbcOpcode$SetLocal0_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal1', {
    get: AbcOpcode$SetLocal1_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal2', {
    get: AbcOpcode$SetLocal2_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal3', {
    get: AbcOpcode$SetLocal3_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Debug', {
    get: AbcOpcode$Debug_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DebugLine', {
    get: AbcOpcode$DebugLine_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DebugFile', {
    get: AbcOpcode$DebugFile_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BreakpointLine', {
    get: AbcOpcode$BreakpointLine_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetByte', {
    get: AbcOpcode$SetByte_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetShort', {
    get: AbcOpcode$SetShort_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetInt', {
    get: AbcOpcode$SetInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetFloat', {
    get: AbcOpcode$SetFloat_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetDouble', {
    get: AbcOpcode$SetDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetByte', {
    get: AbcOpcode$GetByte_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetShort', {
    get: AbcOpcode$GetShort_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetInt', {
    get: AbcOpcode$GetInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetFloat', {
    get: AbcOpcode$GetFloat_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetDouble', {
    get: AbcOpcode$GetDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Sign1', {
    get: AbcOpcode$Sign1_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Sign8', {
    get: AbcOpcode$Sign8_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Sign16', {
    get: AbcOpcode$Sign16_getInstance
  });
  AbcOpcode.KindContext = AbcOpcode$KindContext;
  Object.defineProperty(AbcOpcode$Kind, 'BasicOperation', {
    get: AbcOpcode$Kind$BasicOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'LabelOperation', {
    get: AbcOpcode$Kind$LabelOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'IntOperation', {
    get: AbcOpcode$Kind$IntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'UIntOperation', {
    get: AbcOpcode$Kind$UIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NumberOperation', {
    get: AbcOpcode$Kind$NumberOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'IntIntOperation', {
    get: AbcOpcode$Kind$IntIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'IntStringIntIntOperation', {
    get: AbcOpcode$Kind$IntStringIntIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'StringOperation', {
    get: AbcOpcode$Kind$StringOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'MultinameOperation', {
    get: AbcOpcode$Kind$MultinameOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'MultinameIntOperation', {
    get: AbcOpcode$Kind$MultinameIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'ConditionalJumpOperation', {
    get: AbcOpcode$Kind$ConditionalJumpOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'JumpOperation', {
    get: AbcOpcode$Kind$JumpOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NewClassOperation', {
    get: AbcOpcode$Kind$NewClassOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'LookupSwitchOperation', {
    get: AbcOpcode$Kind$LookupSwitchOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NamespaceOperation', {
    get: AbcOpcode$Kind$NamespaceOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NewFunctionOperation', {
    get: AbcOpcode$Kind$NewFunctionOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'MethodOperation', {
    get: AbcOpcode$Kind$MethodOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NewCatchOperation', {
    get: AbcOpcode$Kind$NewCatchOperation_getInstance
  });
  AbcOpcode.Kind = AbcOpcode$Kind;
  Object.defineProperty(AbcOpcode, 'Companion', {
    get: AbcOpcode$Companion_getInstance
  });
  package$korfl.AbcOpcode = AbcOpcode;
  Object.defineProperty(AbcOperation, 'Companion', {
    get: AbcOperation$Companion_getInstance
  });
  package$korfl.AbcOperation = AbcOperation;
  package$korfl.AbcBasicOperation = AbcBasicOperation;
  package$korfl.AbcLabelOperation = AbcLabelOperation;
  package$korfl.AbcLookupSwitchOperation = AbcLookupSwitchOperation;
  package$korfl.AbcIntStringIntIntOperation = AbcIntStringIntIntOperation;
  package$korfl.AbcIntOperation = AbcIntOperation;
  package$korfl.AbcJumpOperation = AbcJumpOperation;
  package$korfl.AbcStringOperation = AbcStringOperation;
  package$korfl.AbcIntIntOperation = AbcIntIntOperation;
  package$korfl.AbcDoubleOperation = AbcDoubleOperation;
  package$korfl.AbcNewClassOperation = AbcNewClassOperation;
  package$korfl.AbcMultinameOperation = AbcMultinameOperation;
  package$korfl.AbcMultinameIntOperation = AbcMultinameIntOperation;
  package$korfl.AbcNamespaceOperation = AbcNamespaceOperation;
  package$korfl.readU30_ucmi9i$ = readU30;
  Object.defineProperty(package$korfl, 'Undefined', {
    get: Undefined_getInstance
  });
  var package$as3swf = package$korfl.as3swf || (package$korfl.as3swf = {});
  package$as3swf.createGradientBox_b857y0$ = createGradientBox;
  package$as3swf.createBox_b857y0$ = createBox;
  package$as3swf.createBox_i1ldsw$ = createBox_0;
  Object.defineProperty(Action, 'Companion', {
    get: Action$Companion_getInstance
  });
  package$as3swf.Action = Action;
  package$as3swf.ActionExecutionContext = ActionExecutionContext;
  package$as3swf.ActionUnknown = ActionUnknown;
  package$as3swf.IAction = IAction;
  package$as3swf.IActionBranch = IActionBranch;
  package$as3swf.ActionGetURL = ActionGetURL;
  package$as3swf.ActionGotoFrame = ActionGotoFrame;
  package$as3swf.ActionGotoLabel = ActionGotoLabel;
  package$as3swf.ActionNextFrame = ActionNextFrame;
  package$as3swf.ActionPlay = ActionPlay;
  package$as3swf.ActionPreviousFrame = ActionPreviousFrame;
  package$as3swf.ActionSetTarget = ActionSetTarget;
  package$as3swf.ActionStop = ActionStop;
  package$as3swf.ActionStopSounds = ActionStopSounds;
  package$as3swf.ActionToggleQuality = ActionToggleQuality;
  package$as3swf.ActionWaitForFrame = ActionWaitForFrame;
  package$as3swf.ActionAdd = ActionAdd;
  package$as3swf.ActionAnd = ActionAnd;
  package$as3swf.ActionAsciiToChar = ActionAsciiToChar;
  package$as3swf.ActionCall = ActionCall;
  package$as3swf.ActionCharToAscii = ActionCharToAscii;
  package$as3swf.ActionCloneSprite = ActionCloneSprite;
  package$as3swf.ActionDivide = ActionDivide;
  package$as3swf.ActionEndDrag = ActionEndDrag;
  package$as3swf.ActionEquals = ActionEquals;
  package$as3swf.ActionGetProperty = ActionGetProperty;
  package$as3swf.ActionGetTime = ActionGetTime;
  package$as3swf.ActionGetURL2 = ActionGetURL2;
  package$as3swf.ActionGetVariable = ActionGetVariable;
  package$as3swf.ActionGotoFrame2 = ActionGotoFrame2;
  package$as3swf.ActionIf = ActionIf;
  package$as3swf.ActionJump = ActionJump;
  package$as3swf.ActionLess = ActionLess;
  package$as3swf.ActionMBAsciiToChar = ActionMBAsciiToChar;
  package$as3swf.ActionMBCharToAscii = ActionMBCharToAscii;
  package$as3swf.ActionMBStringExtract = ActionMBStringExtract;
  package$as3swf.ActionMBStringLength = ActionMBStringLength;
  package$as3swf.ActionMultiply = ActionMultiply;
  package$as3swf.ActionNot = ActionNot;
  package$as3swf.ActionOr = ActionOr;
  package$as3swf.ActionPop = ActionPop;
  package$as3swf.ActionPush = ActionPush;
  package$as3swf.ActionRandomNumber = ActionRandomNumber;
  package$as3swf.ActionRemoveSprite = ActionRemoveSprite;
  package$as3swf.ActionSetProperty = ActionSetProperty;
  package$as3swf.ActionSetTarget2 = ActionSetTarget2;
  package$as3swf.ActionSetVariable = ActionSetVariable;
  package$as3swf.ActionStartDrag = ActionStartDrag;
  package$as3swf.ActionStringAdd = ActionStringAdd;
  package$as3swf.ActionStringEquals = ActionStringEquals;
  package$as3swf.ActionStringExtract = ActionStringExtract;
  package$as3swf.ActionStringLength = ActionStringLength;
  package$as3swf.ActionStringLess = ActionStringLess;
  package$as3swf.ActionSubtract = ActionSubtract;
  package$as3swf.ActionToInteger = ActionToInteger;
  package$as3swf.ActionTrace = ActionTrace;
  package$as3swf.ActionWaitForFrame2 = ActionWaitForFrame2;
  package$as3swf.ActionAdd2 = ActionAdd2;
  package$as3swf.ActionBitAnd = ActionBitAnd;
  package$as3swf.ActionBitLShift = ActionBitLShift;
  package$as3swf.ActionBitOr = ActionBitOr;
  package$as3swf.ActionBitRShift = ActionBitRShift;
  package$as3swf.ActionBitURShift = ActionBitURShift;
  package$as3swf.ActionBitXor = ActionBitXor;
  package$as3swf.ActionCallFunction = ActionCallFunction;
  package$as3swf.ActionCallMethod = ActionCallMethod;
  package$as3swf.ActionConstantPool = ActionConstantPool;
  package$as3swf.ActionDecrement = ActionDecrement;
  package$as3swf.ActionDefineFunction = ActionDefineFunction;
  package$as3swf.ActionDefineLocal = ActionDefineLocal;
  package$as3swf.ActionDefineLocal2 = ActionDefineLocal2;
  package$as3swf.ActionDelete = ActionDelete;
  package$as3swf.ActionDelete2 = ActionDelete2;
  package$as3swf.ActionEnumerate = ActionEnumerate;
  package$as3swf.ActionEquals2 = ActionEquals2;
  package$as3swf.ActionGetMember = ActionGetMember;
  package$as3swf.ActionIncrement = ActionIncrement;
  package$as3swf.ActionInitArray = ActionInitArray;
  package$as3swf.ActionInitObject = ActionInitObject;
  package$as3swf.ActionLess2 = ActionLess2;
  package$as3swf.ActionModulo = ActionModulo;
  package$as3swf.ActionNewMethod = ActionNewMethod;
  package$as3swf.ActionNewObject = ActionNewObject;
  package$as3swf.ActionPushDuplicate = ActionPushDuplicate;
  package$as3swf.ActionReturn = ActionReturn;
  package$as3swf.ActionSetMember = ActionSetMember;
  package$as3swf.ActionStackSwap = ActionStackSwap;
  package$as3swf.ActionStoreRegister = ActionStoreRegister;
  package$as3swf.ActionTargetPath = ActionTargetPath;
  package$as3swf.ActionToNumber = ActionToNumber;
  package$as3swf.ActionToString = ActionToString;
  package$as3swf.ActionTypeOf = ActionTypeOf;
  package$as3swf.ActionWith = ActionWith;
  package$as3swf.ActionEnumerate2 = ActionEnumerate2;
  package$as3swf.ActionGreater = ActionGreater;
  package$as3swf.ActionInstanceOf = ActionInstanceOf;
  package$as3swf.ActionStrictEquals = ActionStrictEquals;
  package$as3swf.ActionStringGreater = ActionStringGreater;
  package$as3swf.ActionCastOp = ActionCastOp;
  package$as3swf.ActionDefineFunction2 = ActionDefineFunction2;
  package$as3swf.ActionExtends = ActionExtends;
  package$as3swf.ActionImplementsOp = ActionImplementsOp;
  package$as3swf.ActionThrow = ActionThrow;
  package$as3swf.ActionTry = ActionTry;
  Object.defineProperty(SWF, 'Companion', {
    get: SWF$Companion_getInstance
  });
  package$as3swf.SWF = SWF;
  Object.defineProperty(SWFData, 'Companion', {
    get: SWFData$Companion_getInstance
  });
  package$as3swf.SWFData = SWFData;
  Object.defineProperty(SWFTimelineContainer, 'Companion', {
    get: SWFTimelineContainer$Companion_getInstance
  });
  package$as3swf.SWFTimelineContainer = SWFTimelineContainer;
  Object.defineProperty(package$as3swf, 'ActionValueType', {
    get: ActionValueType_getInstance
  });
  Object.defineProperty(BitmapFormat, 'BIT_8', {
    get: BitmapFormat$BIT_8_getInstance
  });
  Object.defineProperty(BitmapFormat, 'BIT_15', {
    get: BitmapFormat$BIT_15_getInstance
  });
  Object.defineProperty(BitmapFormat, 'BIT_24_32', {
    get: BitmapFormat$BIT_24_32_getInstance
  });
  Object.defineProperty(BitmapFormat, 'UNKNOWN', {
    get: BitmapFormat$UNKNOWN_getInstance
  });
  Object.defineProperty(BitmapFormat, 'Companion', {
    get: BitmapFormat$Companion_getInstance
  });
  package$as3swf.BitmapFormat = BitmapFormat;
  Object.defineProperty(package$as3swf, 'BitmapType', {
    get: BitmapType_getInstance
  });
  Object.defineProperty(package$as3swf, 'BlendMode', {
    get: BlendMode_getInstance
  });
  Object.defineProperty(package$as3swf, 'CSMTableHint', {
    get: CSMTableHint_getInstance
  });
  Object.defineProperty(GradientInterpolationMode, 'NORMAL', {
    get: GradientInterpolationMode$NORMAL_getInstance
  });
  Object.defineProperty(GradientInterpolationMode, 'LINEAR', {
    get: GradientInterpolationMode$LINEAR_getInstance
  });
  Object.defineProperty(GradientInterpolationMode, 'Companion', {
    get: GradientInterpolationMode$Companion_getInstance
  });
  package$as3swf.GradientInterpolationMode = GradientInterpolationMode;
  Object.defineProperty(GradientSpreadMode, 'PAD', {
    get: GradientSpreadMode$PAD_getInstance
  });
  Object.defineProperty(GradientSpreadMode, 'REFLECT', {
    get: GradientSpreadMode$REFLECT_getInstance
  });
  Object.defineProperty(GradientSpreadMode, 'REPEAT', {
    get: GradientSpreadMode$REPEAT_getInstance
  });
  Object.defineProperty(GradientSpreadMode, 'Companion', {
    get: GradientSpreadMode$Companion_getInstance
  });
  package$as3swf.GradientSpreadMode = GradientSpreadMode;
  Object.defineProperty(ScaleMode, 'NONE', {
    get: ScaleMode$NONE_getInstance
  });
  Object.defineProperty(ScaleMode, 'HORIZONTAL', {
    get: ScaleMode$HORIZONTAL_getInstance
  });
  Object.defineProperty(ScaleMode, 'VERTICAL', {
    get: ScaleMode$VERTICAL_getInstance
  });
  Object.defineProperty(ScaleMode, 'NORMAL', {
    get: ScaleMode$NORMAL_getInstance
  });
  Object.defineProperty(ScaleMode, 'Companion', {
    get: ScaleMode$Companion_getInstance
  });
  package$as3swf.ScaleMode = ScaleMode;
  Object.defineProperty(LineCapsStyle, 'ROUND', {
    get: LineCapsStyle$ROUND_getInstance
  });
  Object.defineProperty(LineCapsStyle, 'NO', {
    get: LineCapsStyle$NO_getInstance
  });
  Object.defineProperty(LineCapsStyle, 'SQUARE', {
    get: LineCapsStyle$SQUARE_getInstance
  });
  Object.defineProperty(LineCapsStyle, 'Companion', {
    get: LineCapsStyle$Companion_getInstance
  });
  package$as3swf.LineCapsStyle = LineCapsStyle;
  Object.defineProperty(package$as3swf, 'LineJointStyle', {
    get: LineJointStyle_getInstance
  });
  Object.defineProperty(package$as3swf, 'SoundCompression', {
    get: SoundCompression_getInstance
  });
  Object.defineProperty(package$as3swf, 'SoundRate', {
    get: SoundRate_getInstance
  });
  Object.defineProperty(package$as3swf, 'SoundSize', {
    get: SoundSize_getInstance
  });
  Object.defineProperty(package$as3swf, 'SoundType', {
    get: SoundType_getInstance
  });
  Object.defineProperty(package$as3swf, 'VideoCodecID', {
    get: VideoCodecID_getInstance
  });
  Object.defineProperty(package$as3swf, 'VideoDeblockingType', {
    get: VideoDeblockingType_getInstance
  });
  Object.defineProperty(SWFActionValue, 'Companion', {
    get: SWFActionValue$Companion_getInstance
  });
  package$as3swf.SWFActionValue = SWFActionValue;
  package$as3swf.SWFButtonCondAction = SWFButtonCondAction;
  package$as3swf.SWFButtonRecord = SWFButtonRecord;
  package$as3swf.SWFClipActionRecord = SWFClipActionRecord;
  package$as3swf.SWFClipActions = SWFClipActions;
  package$as3swf.SWFClipEventFlags = SWFClipEventFlags;
  package$as3swf.SWFColorTransform = SWFColorTransform;
  package$as3swf.SWFColorTransformWithAlpha = SWFColorTransformWithAlpha;
  package$as3swf.SWFFillStyle = SWFFillStyle;
  package$as3swf.SWFFocalGradient = SWFFocalGradient;
  package$as3swf.SWFFrameLabel = SWFFrameLabel;
  package$as3swf.SWFGlyphEntry = SWFGlyphEntry;
  package$as3swf.SWFGradient = SWFGradient;
  package$as3swf.SWFGradientRecord = SWFGradientRecord;
  package$as3swf.SWFKerningRecord = SWFKerningRecord;
  package$as3swf.SWFLineStyle = SWFLineStyle;
  package$as3swf.SWFLineStyle2 = SWFLineStyle2;
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  package$as3swf.SWFMatrix = SWFMatrix;
  package$as3swf.SWFMorphFillStyle = SWFMorphFillStyle;
  package$as3swf.SWFMorphFocalGradient = SWFMorphFocalGradient;
  package$as3swf.SWFMorphGradient = SWFMorphGradient;
  package$as3swf.SWFMorphGradientRecord = SWFMorphGradientRecord;
  package$as3swf.SWFMorphLineStyle = SWFMorphLineStyle;
  package$as3swf.SWFMorphLineStyle2 = SWFMorphLineStyle2;
  package$as3swf.SWFRawTag = SWFRawTag;
  package$as3swf.SWFRecordHeader = SWFRecordHeader;
  package$as3swf.SWFRectangle = SWFRectangle;
  package$as3swf.SWFRegisterParam = SWFRegisterParam;
  package$as3swf.SWFScene = SWFScene;
  package$as3swf.SWFShape = SWFShape;
  Object.defineProperty(SWFShapeRecord, 'Companion', {
    get: SWFShapeRecord$Companion_getInstance
  });
  package$as3swf.SWFShapeRecord = SWFShapeRecord;
  package$as3swf.SWFShapeRecordCurvedEdge = SWFShapeRecordCurvedEdge;
  Object.defineProperty(package$as3swf, 'SWFShapeRecordEnd', {
    get: SWFShapeRecordEnd_getInstance
  });
  package$as3swf.SWFShapeRecordStraightEdge = SWFShapeRecordStraightEdge;
  package$as3swf.SWFShapeRecordStyleChange = SWFShapeRecordStyleChange;
  package$as3swf.SWFShapeWithStyle = SWFShapeWithStyle;
  package$as3swf.SWFSoundEnvelope_init_qq6jov$ = SWFSoundEnvelope_init;
  package$as3swf.SWFSoundEnvelope = SWFSoundEnvelope;
  package$as3swf.SWFSoundInfo = SWFSoundInfo;
  package$as3swf.SWFSymbol_init_qq6jov$ = SWFSymbol_init;
  package$as3swf.SWFSymbol = SWFSymbol;
  package$as3swf.SWFTextRecord = SWFTextRecord;
  package$as3swf.SWFZoneData_init_qq6jov$ = SWFZoneData_init;
  package$as3swf.SWFZoneData = SWFZoneData;
  package$as3swf.SWFZoneRecord_init_qq6jov$ = SWFZoneRecord_init;
  package$as3swf.SWFZoneRecord = SWFZoneRecord;
  Object.defineProperty(GradientType, 'LINEAR', {
    get: GradientType$LINEAR_getInstance
  });
  Object.defineProperty(GradientType, 'RADIAL', {
    get: GradientType$RADIAL_getInstance
  });
  package$as3swf.GradientType = GradientType;
  package$as3swf.CurvedEdge = CurvedEdge;
  package$as3swf.StraightEdge = StraightEdge;
  package$as3swf.IEdge = IEdge;
  Object.defineProperty(MPEGFrame, 'Companion', {
    get: MPEGFrame$Companion_getInstance
  });
  package$as3swf.MPEGFrame = MPEGFrame;
  package$as3swf.ShapeExporter = ShapeExporter;
  package$as3swf.LoggerShapeExporter = LoggerShapeExporter;
  package$as3swf.ShapeExporterBoundsBuilder = ShapeExporterBoundsBuilder;
  package$as3swf.ISWFTagFactory = ISWFTagFactory;
  Object.defineProperty(package$as3swf, 'SWFActionFactory', {
    get: SWFActionFactory_getInstance
  });
  Object.defineProperty(package$as3swf, 'SWFFilterFactory', {
    get: SWFFilterFactory_getInstance
  });
  package$as3swf.SWFTagFactory = SWFTagFactory;
  package$as3swf.IFilter = IFilter;
  package$as3swf.Filter = Filter;
  Object.defineProperty(FilterType, 'FULL', {
    get: FilterType$FULL_getInstance
  });
  Object.defineProperty(FilterType, 'INNER', {
    get: FilterType$INNER_getInstance
  });
  Object.defineProperty(FilterType, 'OUTER', {
    get: FilterType$OUTER_getInstance
  });
  package$as3swf.FilterType = FilterType;
  package$as3swf.FilterBevel = FilterBevel;
  package$as3swf.FilterBlur = FilterBlur;
  package$as3swf.FilterColorMatrix = FilterColorMatrix;
  package$as3swf.FilterConvolution = FilterConvolution;
  package$as3swf.FilterDropShadow = FilterDropShadow;
  package$as3swf.FilterGlow = FilterGlow;
  package$as3swf.FilterGradientBevel = FilterGradientBevel;
  package$as3swf.FilterGradientGlow = FilterGradientGlow;
  package$as3swf.ITag = ITag;
  package$as3swf._BaseTag = _BaseTag;
  package$as3swf.IDefinitionTag = IDefinitionTag;
  package$as3swf.IDisplayListTag = IDisplayListTag;
  Object.defineProperty(Tag, 'Companion', {
    get: Tag$Companion_getInstance
  });
  package$as3swf.Tag = Tag;
  Object.defineProperty(TagCSMTextSettings, 'Companion', {
    get: TagCSMTextSettings$Companion_getInstance
  });
  package$as3swf.TagCSMTextSettings = TagCSMTextSettings;
  Object.defineProperty(TagDebugID, 'Companion', {
    get: TagDebugID$Companion_getInstance
  });
  package$as3swf.TagDebugID = TagDebugID;
  Object.defineProperty(TagDefineBinaryData, 'Companion', {
    get: TagDefineBinaryData$Companion_getInstance
  });
  package$as3swf.TagDefineBinaryData = TagDefineBinaryData;
  Object.defineProperty(TagDefineBits, 'Companion', {
    get: TagDefineBits$Companion_getInstance
  });
  package$as3swf.TagDefineBits = TagDefineBits;
  Object.defineProperty(TagDefineBitsJPEG2, 'Companion', {
    get: TagDefineBitsJPEG2$Companion_getInstance
  });
  package$as3swf.TagDefineBitsJPEG2 = TagDefineBitsJPEG2;
  Object.defineProperty(TagDefineBitsJPEG3, 'Companion', {
    get: TagDefineBitsJPEG3$Companion_getInstance
  });
  package$as3swf.TagDefineBitsJPEG3 = TagDefineBitsJPEG3;
  Object.defineProperty(TagDefineBitsJPEG4, 'Companion', {
    get: TagDefineBitsJPEG4$Companion_getInstance
  });
  package$as3swf.TagDefineBitsJPEG4 = TagDefineBitsJPEG4;
  Object.defineProperty(TagDefineBitsLossless, 'Companion', {
    get: TagDefineBitsLossless$Companion_getInstance
  });
  package$as3swf.TagDefineBitsLossless = TagDefineBitsLossless;
  Object.defineProperty(TagDefineBitsLossless2, 'Companion', {
    get: TagDefineBitsLossless2$Companion_getInstance
  });
  package$as3swf.TagDefineBitsLossless2 = TagDefineBitsLossless2;
  Object.defineProperty(TagDefineButton, 'Companion', {
    get: TagDefineButton$Companion_getInstance
  });
  package$as3swf.TagDefineButton = TagDefineButton;
  Object.defineProperty(TagDefineButton2, 'Companion', {
    get: TagDefineButton2$Companion_getInstance
  });
  package$as3swf.TagDefineButton2 = TagDefineButton2;
  Object.defineProperty(TagDefineButtonCxform, 'Companion', {
    get: TagDefineButtonCxform$Companion_getInstance
  });
  package$as3swf.TagDefineButtonCxform = TagDefineButtonCxform;
  Object.defineProperty(TagDefineButtonSound, 'Companion', {
    get: TagDefineButtonSound$Companion_getInstance
  });
  package$as3swf.TagDefineButtonSound = TagDefineButtonSound;
  Object.defineProperty(TagDefineEditText, 'Companion', {
    get: TagDefineEditText$Companion_getInstance
  });
  package$as3swf.TagDefineEditText = TagDefineEditText;
  Object.defineProperty(TagDefineFont, 'Companion', {
    get: TagDefineFont$Companion_getInstance
  });
  package$as3swf.TagDefineFont = TagDefineFont;
  Object.defineProperty(TagDefineFont2, 'Companion', {
    get: TagDefineFont2$Companion_getInstance
  });
  package$as3swf.TagDefineFont2 = TagDefineFont2;
  Object.defineProperty(TagDefineFont3, 'Companion', {
    get: TagDefineFont3$Companion_getInstance
  });
  package$as3swf.TagDefineFont3 = TagDefineFont3;
  Object.defineProperty(TagDefineFont4, 'Companion', {
    get: TagDefineFont4$Companion_getInstance
  });
  package$as3swf.TagDefineFont4 = TagDefineFont4;
  Object.defineProperty(TagDefineFontAlignZones, 'Companion', {
    get: TagDefineFontAlignZones$Companion_getInstance
  });
  package$as3swf.TagDefineFontAlignZones = TagDefineFontAlignZones;
  Object.defineProperty(TagDefineFontInfo, 'Companion', {
    get: TagDefineFontInfo$Companion_getInstance
  });
  package$as3swf.TagDefineFontInfo = TagDefineFontInfo;
  Object.defineProperty(TagDefineFontInfo2, 'Companion', {
    get: TagDefineFontInfo2$Companion_getInstance
  });
  package$as3swf.TagDefineFontInfo2 = TagDefineFontInfo2;
  Object.defineProperty(TagDefineFontName, 'Companion', {
    get: TagDefineFontName$Companion_getInstance
  });
  package$as3swf.TagDefineFontName = TagDefineFontName;
  Object.defineProperty(TagDefineMorphShape, 'Companion', {
    get: TagDefineMorphShape$Companion_getInstance
  });
  package$as3swf.TagDefineMorphShape = TagDefineMorphShape;
  Object.defineProperty(TagDefineMorphShape2, 'Companion', {
    get: TagDefineMorphShape2$Companion_getInstance
  });
  package$as3swf.TagDefineMorphShape2 = TagDefineMorphShape2;
  Object.defineProperty(TagDefineScalingGrid, 'Companion', {
    get: TagDefineScalingGrid$Companion_getInstance
  });
  package$as3swf.TagDefineScalingGrid = TagDefineScalingGrid;
  Object.defineProperty(TagDefineSceneAndFrameLabelData, 'Companion', {
    get: TagDefineSceneAndFrameLabelData$Companion_getInstance
  });
  package$as3swf.TagDefineSceneAndFrameLabelData = TagDefineSceneAndFrameLabelData;
  Object.defineProperty(TagDefineShape, 'Companion', {
    get: TagDefineShape$Companion_getInstance
  });
  package$as3swf.TagDefineShape = TagDefineShape;
  Object.defineProperty(TagDefineShape2, 'Companion', {
    get: TagDefineShape2$Companion_getInstance
  });
  package$as3swf.TagDefineShape2 = TagDefineShape2;
  Object.defineProperty(TagDefineShape3, 'Companion', {
    get: TagDefineShape3$Companion_getInstance
  });
  package$as3swf.TagDefineShape3 = TagDefineShape3;
  Object.defineProperty(TagDefineShape4, 'Companion', {
    get: TagDefineShape4$Companion_getInstance
  });
  package$as3swf.TagDefineShape4 = TagDefineShape4;
  Object.defineProperty(TagDefineSound, 'Companion', {
    get: TagDefineSound$Companion_getInstance
  });
  package$as3swf.TagDefineSound = TagDefineSound;
  Object.defineProperty(TagDefineSprite, 'Companion', {
    get: TagDefineSprite$Companion_getInstance
  });
  package$as3swf.TagDefineSprite = TagDefineSprite;
  Object.defineProperty(TagDefineText, 'Companion', {
    get: TagDefineText$Companion_getInstance
  });
  package$as3swf.TagDefineText = TagDefineText;
  Object.defineProperty(TagDefineText2, 'Companion', {
    get: TagDefineText2$Companion_getInstance
  });
  package$as3swf.TagDefineText2 = TagDefineText2;
  Object.defineProperty(TagDefineVideoStream, 'Companion', {
    get: TagDefineVideoStream$Companion_getInstance
  });
  package$as3swf.TagDefineVideoStream = TagDefineVideoStream;
  Object.defineProperty(TagDoABC, 'Companion', {
    get: TagDoABC$Companion_getInstance
  });
  package$as3swf.TagDoABC = TagDoABC;
  Object.defineProperty(TagDoABCDeprecated, 'Companion', {
    get: TagDoABCDeprecated$Companion_getInstance
  });
  package$as3swf.TagDoABCDeprecated = TagDoABCDeprecated;
  Object.defineProperty(TagDoAction, 'Companion', {
    get: TagDoAction$Companion_getInstance
  });
  package$as3swf.TagDoAction = TagDoAction;
  Object.defineProperty(TagDoInitAction, 'Companion', {
    get: TagDoInitAction$Companion_getInstance
  });
  package$as3swf.TagDoInitAction = TagDoInitAction;
  Object.defineProperty(TagEnableDebugger, 'Companion', {
    get: TagEnableDebugger$Companion_getInstance
  });
  package$as3swf.TagEnableDebugger = TagEnableDebugger;
  Object.defineProperty(TagEnableDebugger2, 'Companion', {
    get: TagEnableDebugger2$Companion_getInstance
  });
  package$as3swf.TagEnableDebugger2 = TagEnableDebugger2;
  Object.defineProperty(TagEnableTelemetry, 'Companion', {
    get: TagEnableTelemetry$Companion_getInstance
  });
  package$as3swf.TagEnableTelemetry = TagEnableTelemetry;
  Object.defineProperty(TagEnd, 'Companion', {
    get: TagEnd$Companion_getInstance
  });
  package$as3swf.TagEnd = TagEnd;
  Object.defineProperty(TagExportAssets, 'Companion', {
    get: TagExportAssets$Companion_getInstance
  });
  package$as3swf.TagExportAssets = TagExportAssets;
  Object.defineProperty(TagFileAttributes, 'Companion', {
    get: TagFileAttributes$Companion_getInstance
  });
  package$as3swf.TagFileAttributes = TagFileAttributes;
  Object.defineProperty(TagFrameLabel, 'Companion', {
    get: TagFrameLabel$Companion_getInstance
  });
  package$as3swf.TagFrameLabel = TagFrameLabel;
  Object.defineProperty(TagImportAssets, 'Companion', {
    get: TagImportAssets$Companion_getInstance
  });
  package$as3swf.TagImportAssets = TagImportAssets;
  Object.defineProperty(TagImportAssets2, 'Companion', {
    get: TagImportAssets2$Companion_getInstance
  });
  package$as3swf.TagImportAssets2 = TagImportAssets2;
  Object.defineProperty(TagJPEGTables, 'Companion', {
    get: TagJPEGTables$Companion_getInstance
  });
  package$as3swf.TagJPEGTables = TagJPEGTables;
  Object.defineProperty(TagMetadata, 'Companion', {
    get: TagMetadata$Companion_getInstance
  });
  package$as3swf.TagMetadata = TagMetadata;
  Object.defineProperty(TagNameCharacter, 'Companion', {
    get: TagNameCharacter$Companion_getInstance
  });
  package$as3swf.TagNameCharacter = TagNameCharacter;
  Object.defineProperty(TagPlaceObject, 'Companion', {
    get: TagPlaceObject$Companion_getInstance
  });
  package$as3swf.TagPlaceObject = TagPlaceObject;
  Object.defineProperty(TagPlaceObject2, 'Companion', {
    get: TagPlaceObject2$Companion_getInstance
  });
  package$as3swf.TagPlaceObject2 = TagPlaceObject2;
  Object.defineProperty(TagPlaceObject3, 'Companion', {
    get: TagPlaceObject3$Companion_getInstance
  });
  package$as3swf.TagPlaceObject3 = TagPlaceObject3;
  Object.defineProperty(TagPlaceObject4, 'Companion', {
    get: TagPlaceObject4$Companion_getInstance
  });
  package$as3swf.TagPlaceObject4 = TagPlaceObject4;
  Object.defineProperty(TagProductInfo, 'Companion', {
    get: TagProductInfo$Companion_getInstance
  });
  package$as3swf.TagProductInfo = TagProductInfo;
  Object.defineProperty(TagPathsArePostScript, 'Companion', {
    get: TagPathsArePostScript$Companion_getInstance
  });
  package$as3swf.TagPathsArePostScript = TagPathsArePostScript;
  Object.defineProperty(TagProtect, 'Companion', {
    get: TagProtect$Companion_getInstance
  });
  package$as3swf.TagProtect = TagProtect;
  Object.defineProperty(TagRemoveObject, 'Companion', {
    get: TagRemoveObject$Companion_getInstance
  });
  package$as3swf.TagRemoveObject = TagRemoveObject;
  Object.defineProperty(TagRemoveObject2, 'Companion', {
    get: TagRemoveObject2$Companion_getInstance
  });
  package$as3swf.TagRemoveObject2 = TagRemoveObject2;
  Object.defineProperty(TagScriptLimits, 'Companion', {
    get: TagScriptLimits$Companion_getInstance
  });
  package$as3swf.TagScriptLimits = TagScriptLimits;
  Object.defineProperty(TagSetBackgroundColor, 'Companion', {
    get: TagSetBackgroundColor$Companion_getInstance
  });
  package$as3swf.TagSetBackgroundColor = TagSetBackgroundColor;
  Object.defineProperty(TagSetTabIndex, 'Companion', {
    get: TagSetTabIndex$Companion_getInstance
  });
  package$as3swf.TagSetTabIndex = TagSetTabIndex;
  Object.defineProperty(TagShowFrame, 'Companion', {
    get: TagShowFrame$Companion_getInstance
  });
  package$as3swf.TagShowFrame = TagShowFrame;
  Object.defineProperty(TagSoundStreamBlock, 'Companion', {
    get: TagSoundStreamBlock$Companion_getInstance
  });
  package$as3swf.TagSoundStreamBlock = TagSoundStreamBlock;
  Object.defineProperty(TagSoundStreamHead, 'Companion', {
    get: TagSoundStreamHead$Companion_getInstance
  });
  package$as3swf.TagSoundStreamHead = TagSoundStreamHead;
  Object.defineProperty(TagSoundStreamHead2, 'Companion', {
    get: TagSoundStreamHead2$Companion_getInstance
  });
  package$as3swf.TagSoundStreamHead2 = TagSoundStreamHead2;
  Object.defineProperty(TagStartSound, 'Companion', {
    get: TagStartSound$Companion_getInstance
  });
  package$as3swf.TagStartSound = TagStartSound;
  Object.defineProperty(TagStartSound2, 'Companion', {
    get: TagStartSound2$Companion_getInstance
  });
  package$as3swf.TagStartSound2 = TagStartSound2;
  Object.defineProperty(TagSymbolClass, 'Companion', {
    get: TagSymbolClass$Companion_getInstance
  });
  package$as3swf.TagSymbolClass = TagSymbolClass;
  package$as3swf.TagUnknown = TagUnknown;
  Object.defineProperty(TagVideoFrame, 'Companion', {
    get: TagVideoFrame$Companion_getInstance
  });
  package$as3swf.TagVideoFrame = TagVideoFrame;
  Object.defineProperty(TagSWFEncryptActions, 'Companion', {
    get: TagSWFEncryptActions$Companion_getInstance
  });
  package$as3swf.TagSWFEncryptActions = TagSWFEncryptActions;
  Object.defineProperty(TagSWFEncryptSignature, 'Companion', {
    get: TagSWFEncryptSignature$Companion_getInstance
  });
  package$as3swf.TagSWFEncryptSignature = TagSWFEncryptSignature;
  package$as3swf.Frame = Frame;
  package$as3swf.FrameObject = FrameObject;
  package$as3swf.Layer = Layer;
  Object.defineProperty(LayerStrip, 'Companion', {
    get: LayerStrip$Companion_getInstance
  });
  package$as3swf.LayerStrip = LayerStrip;
  package$as3swf.Scene = Scene;
  package$as3swf.SoundStream = SoundStream;
  Object.defineProperty(package$as3swf, 'ColorUtils', {
    get: ColorUtils_getInstance
  });
  Object.defineProperty(package$as3swf, 'MatrixUtils', {
    get: MatrixUtils_getInstance
  });
  Object.defineProperty(package$as3swf, 'NumberUtils', {
    get: NumberUtils_getInstance
  });
  package$as3swf.toFlash_964n91$ = toFlash;
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  package$as3swf.FlashByteArray_init_fqrh44$ = FlashByteArray_init;
  package$as3swf.FlashByteArray = FlashByteArray;
  package$as3swf.BitArray = BitArray;
  Object.defineProperty(Endian, 'LITTLE_ENDIAN', {
    get: Endian$LITTLE_ENDIAN_getInstance
  });
  Object.defineProperty(Endian, 'BIG_ENDIAN', {
    get: Endian$BIG_ENDIAN_getInstance
  });
  package$as3swf.Endian = Endian;
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  var package$ext = package$korge.ext || (package$korge.ext = {});
  var package$fla = package$ext.fla || (package$ext.fla = {});
  Object.defineProperty(package$fla, 'Fla', {
    get: Fla_getInstance
  });
  var package$swf = package$ext.swf || (package$ext.swf = {});
  package$swf.BitmapWithScale = BitmapWithScale;
  package$swf.toAtlas_g1rcz0$ = toAtlas;
  package$swf.SWFShapeRasterizer = SWFShapeRasterizer;
  package$swf.toColorTransform_ou2u1r$ = toColorTransform;
  package$swf.decodeSWFColor_5wr77w$ = decodeSWFColor;
  package$swf.SWFExportConfig = SWFExportConfig;
  package$swf.toAnLibrarySerializerConfig_shk0ru$ = toAnLibrarySerializerConfig;
  package$swf.readSWF_rzzmbt$ = readSWF;
  package$swf.get_swfExportConfig_h930be$ = get_swfExportConfig;
  package$swf.set_swfExportConfig_lb291p$ = set_swfExportConfig;
  package$swf.readSWF_1c0hzb$ = readSWF_0;
  package$swf.readSWF_avmyev$ = readSWF_1;
  package$swf.get_depth0_vr6vu$ = get_depth0;
  package$swf.get_clipDepth0_vr6vu$ = get_clipDepth0;
  package$swf.get_depth0_z0omgf$ = get_depth0_0;
  package$swf.get_bitmaps_b1dtsm$ = get_bitmaps;
  Object.defineProperty(MySwfFrame$Action, 'Stop', {
    get: MySwfFrame$Action$Stop_getInstance
  });
  Object.defineProperty(MySwfFrame$Action, 'Play', {
    get: MySwfFrame$Action$Play_getInstance
  });
  MySwfFrame$Action.Goto = MySwfFrame$Action$Goto;
  MySwfFrame$Action.PlaySound = MySwfFrame$Action$PlaySound;
  MySwfFrame.Action = MySwfFrame$Action;
  package$swf.MySwfFrame = MySwfFrame;
  package$swf.MySwfTimeline = MySwfTimeline;
  package$swf.get_swfTimeline_lhqk9w$ = get_swfTimeline;
  package$swf.get_labelsToFrame0_lhqk9w$ = get_labelsToFrame0;
  package$swf.get_tagDefineMorphShape_8m292s$ = get_tagDefineMorphShape;
  package$swf.set_tagDefineMorphShape_rqiz7q$ = set_tagDefineMorphShape;
  package$swf.get_tagDefineShape_dg24so$ = get_tagDefineShape;
  package$swf.set_tagDefineShape_dor7sy$ = set_tagDefineShape;
  package$swf.MinMaxDouble = MinMaxDouble;
  package$swf.SymbolAnalyzeInfo = SymbolAnalyzeInfo;
  package$swf.SWFShapeRasterizerRequest = SWFShapeRasterizerRequest;
  $$importsForInline$$['korio-root-korio'] = $module$korio_root_korio;
  $$importsForInline$$['korge-root-korge-swf'] = _;
  package$swf.SwfLoaderMethod = SwfLoaderMethod;
  package$swf.registerSwfLoading_jv80cy$ = registerSwfLoading;
  Action.prototype.toString_za3lpa$ = IAction.prototype.toString_za3lpa$;
  IActionBranch.prototype.toString_za3lpa$ = IAction.prototype.toString_za3lpa$;
  Filter.prototype.toString_za3lpa$ = IFilter.prototype.toString_za3lpa$;
  _BaseTag.prototype.toString_vux9f0$ = ITag.prototype.toString_vux9f0$;
  _BaseTag.prototype.parse_mi9vlk$ = ITag.prototype.parse_mi9vlk$;
  IDefinitionTag.prototype.parse_mi9vlk$ = ITag.prototype.parse_mi9vlk$;
  IDefinitionTag.prototype.toString_vux9f0$ = ITag.prototype.toString_vux9f0$;
  IDisplayListTag.prototype.parse_mi9vlk$ = ITag.prototype.parse_mi9vlk$;
  IDisplayListTag.prototype.toString_vux9f0$ = ITag.prototype.toString_vux9f0$;
  TagDefineSprite.prototype.parse_mi9vlk$ = IDefinitionTag.prototype.parse_mi9vlk$;
  swfExportConfig = new Extra$Property(void 0, swfExportConfig$lambda);
  bitmaps = new Extra$Property(void 0, bitmaps$lambda);
  swfTimeline = new Extra$Property(void 0, swfTimeline$lambda);
  labelsToFrame0 = new Extra$Property(void 0, labelsToFrame0$lambda);
  tagDefineMorphShape = new Extra$Property(void 0, tagDefineMorphShape$lambda);
  tagDefineShape = new Extra$Property(void 0, tagDefineShape$lambda);
  Kotlin.defineModule('korge-root-korge-swf', _);
  return _;
}));

//# sourceMappingURL=korge-root-korge-swf.js.map
