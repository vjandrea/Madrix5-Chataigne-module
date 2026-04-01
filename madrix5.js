function init() {
  script.log("Madrix 5 module init");
}

function moduleParameterChanged(param) {}
function moduleValueChanged(value) {}

// ── Helpers ───────────────────────────────────────────────────────────────────

function b(val) { return val ? 1 : 0; }

function sendDeck(deck, path, val) {
  if (val === undefined) {
    local.send("/" + deck + "/" + path);
  } else {
    local.send("/" + deck + "/" + path, val);
  }
}

// ── Audio/Input ───────────────────────────────────────────────────────────────

function audioInputAgc(val)                                     { local.send("/Audio/Input/Agc",          b(val)); }
function audioInputLevel(val)                                   { local.send("/Audio/Input/Level",         val); }
function audioInputLevelOffset(val)                             { local.send("/Audio/Input/Level/Offset",  val); }
function audioInputMute(val)                                    { local.send("/Audio/Input/Mute",          b(val)); }

// ── Audio/Output ──────────────────────────────────────────────────────────────

function audioOutputLevel(val)                                   { local.send("/Audio/Output/Level",        val); }
function audioOutputLevelOffset(val)                             { local.send("/Audio/Output/Level/Offset", val); }
function audioOutputMute(val)                                    { local.send("/Audio/Output/Mute",         b(val)); }

// ── Deck A ────────────────────────────────────────────────────────────────────

function deckAPause(val)                                         { sendDeck("DeckA", "Pause",              b(val)); }
function deckASpeedMaster(val)                                   { sendDeck("DeckA", "SpeedMaster",        val); }
function deckASpeedMasterOffset(val)                             { sendDeck("DeckA", "SpeedMaster/Offset", val); }
function deckASubmaster(val)                                     { sendDeck("DeckA", "Submaster",          val); }
function deckASubmasterOffset(val)                               { sendDeck("DeckA", "Submaster/Offset",   val); }

// ── Deck A ─ Filter ───────────────────────────────────────────────────────────

function deckAFilter(val)                                        { sendDeck("DeckA", "Filter",             val); }
function deckAFilterUp()                                         { sendDeck("DeckA", "Filter/Up"); }
function deckAFilterDown()                                       { sendDeck("DeckA", "Filter/Down"); }

// ── Deck A ─ FilterColor ──────────────────────────────────────────────────────

function deckAFilterColorMode(val)                               { sendDeck("DeckA", "FilterColor/Mode",               val); }
function deckAFilterColorModeUp()                                { sendDeck("DeckA", "FilterColor/Mode/Up"); }
function deckAFilterColorModeDown()                              { sendDeck("DeckA", "FilterColor/Mode/Down"); }
function deckAFilterColorGlobalId(val)                           { sendDeck("DeckA", "FilterColor/GlobalId",           val); }
function deckAFilterColorGlobalIdUp()                            { sendDeck("DeckA", "FilterColor/GlobalId/Up"); }
function deckAFilterColorGlobalIdDown()                          { sendDeck("DeckA", "FilterColor/GlobalId/Down"); }
function deckAFilterColorRed(val)                                { sendDeck("DeckA", "FilterColor/Red",                val); }
function deckAFilterColorRedOffset(val)                          { sendDeck("DeckA", "FilterColor/Red/Offset",         val); }
function deckAFilterColorGreen(val)                              { sendDeck("DeckA", "FilterColor/Green",              val); }
function deckAFilterColorGreenOffset(val)                        { sendDeck("DeckA", "FilterColor/Green/Offset",       val); }
function deckAFilterColorBlue(val)                               { sendDeck("DeckA", "FilterColor/Blue",               val); }
function deckAFilterColorBlueOffset(val)                         { sendDeck("DeckA", "FilterColor/Blue/Offset",        val); }
function deckAFilterColorWhite(val)                              { sendDeck("DeckA", "FilterColor/White",              val); }
function deckAFilterColorWhiteOffset(val)                        { sendDeck("DeckA", "FilterColor/White/Offset",       val); }
function deckAFilterColorRgb(r, g, b)                            { local.send("/DeckA/FilterColor/Rgb",                r, g, b); }

// ── Deck A ─ Storages ─────────────────────────────────────────────────────────

function deckAStoragesIndex(val)                                 { sendDeck("DeckA", "Storages/Index",       val); }
function deckAStoragesIndexUp()                                  { sendDeck("DeckA", "Storages/Index/Up"); }
function deckAStoragesIndexDown()                                { sendDeck("DeckA", "Storages/Index/Down"); }

// ── Deck A ─ Places ───────────────────────────────────────────────────────────

function deckAPlacesIndex(val)                                   { sendDeck("DeckA", "Places/Index",         val); }
function deckAPlacesIndexUp()                                    { sendDeck("DeckA", "Places/Index/Up"); }
function deckAPlacesIndexDown()                                  { sendDeck("DeckA", "Places/Index/Down"); }

// ── Deck A ─ StoragePlace ─────────────────────────────────────────────────────

function deckAStoragePlaceSpeedPitch(val)                        { sendDeck("DeckA", "StoragePlace/SpeedPitch",        val); }
function deckAStoragePlaceSpeedPitchOffset(val)                  { sendDeck("DeckA", "StoragePlace/SpeedPitch/Offset", val); }
function deckAStoragePlaceSubmaster(val)                         { sendDeck("DeckA", "StoragePlace/Submaster",         val); }
function deckAStoragePlaceSubmasterOffset(val)                   { sendDeck("DeckA", "StoragePlace/Submaster/Offset",  val); }
function deckAStorageFilter(val)                                 { sendDeck("DeckA", "StoragePlace/Filter",            val); }
function deckAStorageFilterUp()                                  { sendDeck("DeckA", "StoragePlace/Filter/Up"); }
function deckAStorageFilterDown()                                { sendDeck("DeckA", "StoragePlace/Filter/Down"); }

// ── Deck A ─ StoragePlace ─ Chaser ────────────────────────────────────────────

function deckAStoragePlaceChaserPlaybackState(val)               { sendDeck("DeckA", "StoragePlace/Chaser/PlaybackState",        val); }
function deckAStoragePlaceChaserSpeedPitch(val)                  { sendDeck("DeckA", "StoragePlace/Chaser/SpeedPitch",           val); }
function deckAStoragePlaceChaserSpeedPitchOffset(val)            { sendDeck("DeckA", "StoragePlace/Chaser/SpeedPitch/Offset",    val); }
function deckAStoragePlaceChaserStepsIndex(val)                  { sendDeck("DeckA", "StoragePlace/Chaser/Steps/Index",          val); }
function deckAStoragePlaceChaserStepsIndexUp()                   { sendDeck("DeckA", "StoragePlace/Chaser/Steps/Index/Up"); }
function deckAStoragePlaceChaserStepsIndexDown()                 { sendDeck("DeckA", "StoragePlace/Chaser/Steps/Index/Down"); }

// ── Deck A ─ StoragePlace ─ Layers ────────────────────────────────────────────

function deckAStoragePlaceLayersSubmaster(idx, val)              { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Submaster",                  val); }
function deckAStoragePlaceLayersSubmasterOffset(idx, val)        { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Submaster/Offset",           val); }
function deckAStoragePlaceLayersOpacity(idx, val)                { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Opacity",                    val); }
function deckAStoragePlaceLayersOpacityOffset(idx, val)          { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Opacity/Offset",             val); }
function deckAStoragePlaceLayersBlind(idx, val)                  { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Blind",                      b(val)); }
function deckAStoragePlaceLayersSolo(idx, val)                   { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Solo",                       b(val)); }
function deckAStoragePlaceLayersFilter(idx, val)                 { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Filter",                     val); }
function deckAStoragePlaceLayersFilterUp(idx)                    { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Filter/Up"); }
function deckAStoragePlaceLayersFilterDown(idx)                  { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Filter/Down"); }
function deckAStoragePlaceLayersMixMode(idx, val)                { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/MixMode",                    val); }
function deckAStoragePlaceLayersMixModeUp(idx)                   { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/MixMode/Up"); }
function deckAStoragePlaceLayersMixModeDown(idx)                 { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/MixMode/Down"); }
function deckAStoragePlaceLayersChaserPlaybackState(idx, val)    { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Chaser/PlaybackState",       val); }
function deckAStoragePlaceLayersChaserSpeedPitch(idx, val)       { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Chaser/SpeedPitch",          val); }
function deckAStoragePlaceLayersChaserSpeedPitchOffset(idx, val) { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Chaser/SpeedPitch/Offset",   val); }
function deckAStoragePlaceLayersChaserStepsIndex(idx, val)       { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Chaser/Steps/Index",         val); }
function deckAStoragePlaceLayersChaserStepsIndexUp(idx)          { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Chaser/Steps/Index/Up"); }
function deckAStoragePlaceLayersChaserStepsIndexDown(idx)        { sendDeck("DeckA", "StoragePlace/Layers/" + idx + "/Chaser/Steps/Index/Down"); }

// ── Deck B ────────────────────────────────────────────────────────────────────

function deckBPause(val)                                         { sendDeck("DeckB", "Pause",              b(val)); }
function deckBSpeedMaster(val)                                   { sendDeck("DeckB", "SpeedMaster",        val); }
function deckBSpeedMasterOffset(val)                             { sendDeck("DeckB", "SpeedMaster/Offset", val); }
function deckBSubmaster(val)                                     { sendDeck("DeckB", "Submaster",          val); }
function deckBSubmasterOffset(val)                               { sendDeck("DeckB", "Submaster/Offset",   val); }

// ── Deck B ─ Filter ───────────────────────────────────────────────────────────

function deckBFilter(val)                                        { sendDeck("DeckB", "Filter",             val); }
function deckBFilterUp()                                         { sendDeck("DeckB", "Filter/Up"); }
function deckBFilterDown()                                       { sendDeck("DeckB", "Filter/Down"); }

// ── Deck B ─ FilterColor ──────────────────────────────────────────────────────

function deckBFilterColorMode(val)                               { sendDeck("DeckB", "FilterColor/Mode",               val); }
function deckBFilterColorModeUp()                                { sendDeck("DeckB", "FilterColor/Mode/Up"); }
function deckBFilterColorModeDown()                              { sendDeck("DeckB", "FilterColor/Mode/Down"); }
function deckBFilterColorGlobalId(val)                           { sendDeck("DeckB", "FilterColor/GlobalId",           val); }
function deckBFilterColorGlobalIdUp()                            { sendDeck("DeckB", "FilterColor/GlobalId/Up"); }
function deckBFilterColorGlobalIdDown()                          { sendDeck("DeckB", "FilterColor/GlobalId/Down"); }
function deckBFilterColorRed(val)                                { sendDeck("DeckB", "FilterColor/Red",                val); }
function deckBFilterColorRedOffset(val)                          { sendDeck("DeckB", "FilterColor/Red/Offset",         val); }
function deckBFilterColorGreen(val)                              { sendDeck("DeckB", "FilterColor/Green",              val); }
function deckBFilterColorGreenOffset(val)                        { sendDeck("DeckB", "FilterColor/Green/Offset",       val); }
function deckBFilterColorBlue(val)                               { sendDeck("DeckB", "FilterColor/Blue",               val); }
function deckBFilterColorBlueOffset(val)                         { sendDeck("DeckB", "FilterColor/Blue/Offset",        val); }
function deckBFilterColorWhite(val)                              { sendDeck("DeckB", "FilterColor/White",              val); }
function deckBFilterColorWhiteOffset(val)                        { sendDeck("DeckB", "FilterColor/White/Offset",       val); }
function deckBFilterColorRgb(r, g, b)                            { local.send("/DeckB/FilterColor/Rgb",                r, g, b); }

// ── Deck B ─ Storages ─────────────────────────────────────────────────────────

function deckBStoragesIndex(val)                                 { sendDeck("DeckB", "Storages/Index",       val); }
function deckBStoragesIndexUp()                                  { sendDeck("DeckB", "Storages/Index/Up"); }
function deckBStoragesIndexDown()                                { sendDeck("DeckB", "Storages/Index/Down"); }

// ── Deck B ─ Places ───────────────────────────────────────────────────────────

function deckBPlacesIndex(val)                                   { sendDeck("DeckB", "Places/Index",         val); }
function deckBPlacesIndexUp()                                    { sendDeck("DeckB", "Places/Index/Up"); }
function deckBPlacesIndexDown()                                  { sendDeck("DeckB", "Places/Index/Down"); }

// ── Deck B ─ StoragePlace ─────────────────────────────────────────────────────

function deckBStoragePlaceSpeedPitch(val)                        { sendDeck("DeckB", "StoragePlace/SpeedPitch",        val); }
function deckBStoragePlaceSpeedPitchOffset(val)                  { sendDeck("DeckB", "StoragePlace/SpeedPitch/Offset", val); }
function deckBStoragePlaceSubmaster(val)                         { sendDeck("DeckB", "StoragePlace/Submaster",         val); }
function deckBStoragePlaceSubmasterOffset(val)                   { sendDeck("DeckB", "StoragePlace/Submaster/Offset",  val); }
function deckBStorageFilter(val)                                 { sendDeck("DeckB", "StoragePlace/Filter",            val); }
function deckBStorageFilterUp()                                  { sendDeck("DeckB", "StoragePlace/Filter/Up"); }
function deckBStorageFilterDown()                                { sendDeck("DeckB", "StoragePlace/Filter/Down"); }

// ── Deck B ─ StoragePlace ─ Chaser ────────────────────────────────────────────

function deckBStoragePlaceChaserPlaybackState(val)               { sendDeck("DeckB", "StoragePlace/Chaser/PlaybackState",        val); }
function deckBStoragePlaceChaserSpeedPitch(val)                  { sendDeck("DeckB", "StoragePlace/Chaser/SpeedPitch",           val); }
function deckBStoragePlaceChaserSpeedPitchOffset(val)            { sendDeck("DeckB", "StoragePlace/Chaser/SpeedPitch/Offset",    val); }
function deckBStoragePlaceChaserStepsIndex(val)                  { sendDeck("DeckB", "StoragePlace/Chaser/Steps/Index",          val); }
function deckBStoragePlaceChaserStepsIndexUp()                   { sendDeck("DeckB", "StoragePlace/Chaser/Steps/Index/Up"); }
function deckBStoragePlaceChaserStepsIndexDown()                 { sendDeck("DeckB", "StoragePlace/Chaser/Steps/Index/Down"); }

// ── Deck B ─ StoragePlace ─ Layers ────────────────────────────────────────────

function deckBStoragePlaceLayersSubmaster(idx, val)              { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Submaster",                  val); }
function deckBStoragePlaceLayersSubmasterOffset(idx, val)        { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Submaster/Offset",           val); }
function deckBStoragePlaceLayersOpacity(idx, val)                { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Opacity",                    val); }
function deckBStoragePlaceLayersOpacityOffset(idx, val)          { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Opacity/Offset",             val); }
function deckBStoragePlaceLayersBlind(idx, val)                  { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Blind",                      b(val)); }
function deckBStoragePlaceLayersSolo(idx, val)                   { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Solo",                       b(val)); }
function deckBStoragePlaceLayersFilter(idx, val)                 { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Filter",                     val); }
function deckBStoragePlaceLayersFilterUp(idx)                    { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Filter/Up"); }
function deckBStoragePlaceLayersFilterDown(idx)                  { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Filter/Down"); }
function deckBStoragePlaceLayersMixMode(idx, val)                { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/MixMode",                    val); }
function deckBStoragePlaceLayersMixModeUp(idx)                   { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/MixMode/Up"); }
function deckBStoragePlaceLayersMixModeDown(idx)                 { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/MixMode/Down"); }
function deckBStoragePlaceLayersChaserPlaybackState(idx, val)    { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Chaser/PlaybackState",       val); }
function deckBStoragePlaceLayersChaserSpeedPitch(idx, val)       { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Chaser/SpeedPitch",          val); }
function deckBStoragePlaceLayersChaserSpeedPitchOffset(idx, val) { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Chaser/SpeedPitch/Offset",   val); }
function deckBStoragePlaceLayersChaserStepsIndex(idx, val)       { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Chaser/Steps/Index",         val); }
function deckBStoragePlaceLayersChaserStepsIndexUp(idx)          { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Chaser/Steps/Index/Up"); }
function deckBStoragePlaceLayersChaserStepsIndexDown(idx)        { sendDeck("DeckB", "StoragePlace/Layers/" + idx + "/Chaser/Steps/Index/Down"); }

// ── Output ────────────────────────────────────────────────────────────────────

function outputFreeze(val)                                       { local.send("/Output/Freeze",        b(val)); }
function outputMaster(val)                                       { local.send("/Output/Master",        val); }
function outputMasterOffset(val)                                 { local.send("/Output/Master/Offset", val); }
function outputBlackout(val)                                     { local.send("/Output/Blackout",      b(val)); }

// ── Output ─ Filter ──────────────────────────────────────────────────────

function outputFilter(val)                                       { local.send("/Output/Filter",        val); }
function outputFilterUp()                                        { local.send("/Output/Filter/Up"); }
function outputFilterDown()                                      { local.send("/Output/Filter/Down"); }

// ── Output ─ FilterColor ──────────────────────────────────────────────────────

function outputFilterColorMode(val)                              { local.send("/Output/FilterColor/Mode",          val); }
function outputFilterColorModeUp()                               { local.send("/Output/FilterColor/Mode/Up"); }
function outputFilterColorModeDown()                             { local.send("/Output/FilterColor/Mode/Down"); }
function outputFilterColorGlobalId(val)                          { local.send("/Output/FilterColor/GlobalId",      val); }
function outputFilterColorGlobalIdUp()                           { local.send("/Output/FilterColor/GlobalId/Up"); }
function outputFilterColorGlobalIdDown()                         { local.send("/Output/FilterColor/GlobalId/Down"); }
function outputFilterColorRed(val)                               { local.send("/Output/FilterColor/Red",           val); }
function outputFilterColorRedOffset(val)                         { local.send("/Output/FilterColor/Red/Offset",    val); }
function outputFilterColorGreen(val)                             { local.send("/Output/FilterColor/Green",         val); }
function outputFilterColorGreenOffset(val)                       { local.send("/Output/FilterColor/Green/Offset",  val); }
function outputFilterColorBlue(val)                              { local.send("/Output/FilterColor/Blue",          val); }
function outputFilterColorBlueOffset(val)                        { local.send("/Output/FilterColor/Blue/Offset",   val); }
function outputFilterColorWhite(val)                             { local.send("/Output/FilterColor/White",         val); }
function outputFilterColorWhiteOffset(val)                       { local.send("/Output/FilterColor/White/Offset",  val); }
function outputFilterColorRgb(r, g, b)                           { local.send("/Output/FilterColor/Rgb",           r, g, b); }

// ── Output ─ StrobeColor ──────────────────────────────────────────────────────

function outputStrobeColorMode(val)                              { local.send("/Output/StrobeColor/Mode",          val); }
function outputStrobeColorModeUp()                               { local.send("/Output/StrobeColor/Mode/Up"); }
function outputStrobeColorModeDown()                             { local.send("/Output/StrobeColor/Mode/Down"); }
function outputStrobeColorGlobalId(val)                          { local.send("/Output/StrobeColor/GlobalId",      val); }
function outputStrobeColorGlobalIdUp()                           { local.send("/Output/StrobeColor/GlobalId/Up"); }
function outputStrobeColorGlobalIdDown()                         { local.send("/Output/StrobeColor/GlobalId/Down"); }
function outputStrobeColorRed(val)                               { local.send("/Output/StrobeColor/Red",           val); }
function outputStrobeColorRedOffset(val)                         { local.send("/Output/StrobeColor/Red/Offset",    val); }
function outputStrobeColorGreen(val)                             { local.send("/Output/StrobeColor/Green",         val); }
function outputStrobeColorGreenOffset(val)                       { local.send("/Output/StrobeColor/Green/Offset",  val); }
function outputStrobeColorBlue(val)                              { local.send("/Output/StrobeColor/Blue",          val); }
function outputStrobeColorBlueOffset(val)                        { local.send("/Output/StrobeColor/Blue/Offset",   val); }
function outputStrobeColorWhite(val)                             { local.send("/Output/StrobeColor/White",         val); }
function outputStrobeColorWhiteOffset(val)                       { local.send("/Output/StrobeColor/White/Offset",  val); }
function outputStrobeColorRgb(r, g, b)                           { local.send("/Output/StrobeColor/Rgb",           r, g, b); }

// ── Output ─ Strobe ───────────────────────────────────────────────────────────

function outputStrobe(val)                                       { local.send("/Output/Strobe",        val); }
function outputStrobeOffset(val)                                 { local.send("/Output/Strobe/Offset", val); }

// ── Fade ──────────────────────────────────────────────────────────────────────

function fadeTime(val)                                           { local.send("/Fade/Time",        val);  }
function fadeTimeOffset(val)                                     { local.send("/Fade/Time/Offset", val);  }
function fadeType(val)                                           { local.send("/Fade/Type",        val);  }
function fadeTypeUp()                                            { local.send("/Fade/Type/Up");           }
function fadeTypeDown()                                          { local.send("/Fade/Type/Down");         }
function fadeValue(val)                                          { local.send("/Fade/Value",        val); }
function fadeValueOffset(val)                                    { local.send("/Fade/Value/Offset", val); }
function fadeAutomatic()                                         { local.send("/Fade/Automatic"); }
function fadeToLeft()                                            { local.send("/Fade/ToLeft"); }
function fadeToRight()                                           { local.send("/Fade/ToRight"); }
function fadeToCenter()                                          { local.send("/Fade/ToCenter"); }

// ── ColorKit ──────────────────────────────────────────────────────────────────

function colorKitRed(idx, val)                                   { local.send("/ColorKit/GlobalColors/" + idx + "/Red",          val); }
function colorKitRedOffset(idx, val)                             { local.send("/ColorKit/GlobalColors/" + idx + "/Red/Offset",   val); }
function colorKitGreen(idx, val)                                 { local.send("/ColorKit/GlobalColors/" + idx + "/Green",        val); }
function colorKitGreenOffset(idx, val)                           { local.send("/ColorKit/GlobalColors/" + idx + "/Green/Offset", val); }
function colorKitBlue(idx, val)                                  { local.send("/ColorKit/GlobalColors/" + idx + "/Blue",         val); }
function colorKitBlueOffset(idx, val)                            { local.send("/ColorKit/GlobalColors/" + idx + "/Blue/Offset",  val); }
function colorKitWhite(idx, val)                                 { local.send("/ColorKit/GlobalColors/" + idx + "/White",        val); }
function colorKitWhiteOffset(idx, val)                           { local.send("/ColorKit/GlobalColors/" + idx + "/White/Offset", val); }
function colorKitAlpha(idx, val)                                 { local.send("/ColorKit/GlobalColors/" + idx + "/Alpha",        val); }
function colorKitAlphaOffset(idx, val)                           { local.send("/ColorKit/GlobalColors/" + idx + "/Alpha/Offset", val); }
function colorKitRgb(idx, r, g, bv)                              { local.send("/ColorKit/GlobalColors/" + idx + "/Rgb",     r, g, bv); }

// ── GroupControl ───────────────────────────────────────────────────────────────

function groupControlDefaults()                                  { local.send("/GroupControl/Defaults"); }
function groupControlGroupsValue(idx, val)                       { local.send("/GroupControl/Groups/" + idx + "/Value",                    val); }
function groupControlGroupsValueOffset(idx, val)                 { local.send("/GroupControl/Groups/" + idx + "/Value/Offset",             val); }
function groupControlGroupsFlash(idx, val)                       { local.send("/GroupControl/Groups/" + idx + "/Flash",                 b(val)); }

function groupControlChaserPlaybackState(val)                    { local.send("/GroupControl/Chaser/PlaybackState",     val); }
function groupControlChaserSpeedPitch(val)                       { local.send("/GroupControl/Chaser/SpeedPitch",        val); }
function groupControlChaserSpeedPitchOffset(val)                 { local.send("/GroupControl/Chaser/SpeedPitch/Offset", val); }
function groupControlChaserStepsIndex(val)                       { local.send("/GroupControl/Chaser/Steps/Index",       val); }
function groupControlChaserStepsIndexUp()                        { local.send("/GroupControl/Chaser/Steps/Index/Up");         }
function groupControlChaserStepsIndexDown()                      { local.send("/GroupControl/Chaser/Steps/Index/Down");       }

function groupControlFadeTime(val)                               { local.send("/GroupControl/FadeTime",                 val); }
function groupControlFadeTimeOffset(val)                         { local.send("/GroupControl/FadeTime/Offset",          val); }

// ── GroupControl ─ Presets ────────────────────────────────────────────────────────

function groupControlPresetsIndex(val)                           { local.send("/GroupControl/Presets/Index",      val); }
function groupControlPresetsIndexUp()                            { local.send("/GroupControl/Presets/Index/Up"); }
function groupControlPresetsIndexDown()                          { local.send("/GroupControl/Presets/Index/Down"); }

// ── DmxFaderTool ──────────────────────────────────────────────────────────────

function dmxFaderToolState(idx, val)                             { local.send("/DmxFaderTool/Faders/" + idx + "/State",        b(val)); }
function dmxFaderToolValue(idx, val)                             { local.send("/DmxFaderTool/Faders/" + idx + "/Value",        val); }
function dmxFaderToolValueOffset(idx, val)                       { local.send("/DmxFaderTool/Faders/" + idx + "/Value/Offset", val); }

// ── CueLists ──────────────────────────────────────────────────────────────────

function cueListsIndex(val)                                      { local.send("/CueLists/Index",                                  val); }
function cueListsIndexUp()                                       { local.send("/CueLists/Index/Up"); }
function cueListsIndexDown()                                     { local.send("/CueLists/Index/Down"); }
function cueListsPlaybackState(val)                              { local.send("/CueLists/PlaybackState",                          val); }
function cueListsPlaybackMode(val)                               { local.send("/CueLists/PlaybackMode",                           b(val)); }
function cueListsTimeCodeSource(val)                             { local.send("/CueLists/TimeCodeSource",                         val); }
function cueListsTimeCodeSourceUp()                              { local.send("/CueLists/TimeCodeSource/Up"); }
function cueListsTimeCodeSourceDown()                            { local.send("/CueLists/TimeCodeSource/Down"); }
function cueListsCuesIndex(val)                                  { local.send("/CueLists/Cues/Index",                             val); }
function cueListsCuesIndexUp()                                   { local.send("/CueLists/Cues/Index/Up"); }
function cueListsCuesIndexDown()                                 { local.send("/CueLists/Cues/Index/Down"); }

// ── Timelines ─────────────────────────────────────────────────────────────────

function timelinesIndex(val)                                     { local.send("/Timelines/Index",                        val); }
function timelinesIndexUp()                                      { local.send("/Timelines/Index/Up"); }
function timelinesIndexDown()                                    { local.send("/Timelines/Index/Down"); }
function timelinesPlaybackState(val)                             { local.send("/Timelines/PlaybackState",                val); }
function timelinesAudioSegmentsIndex(val)                        { local.send("/Timelines/AudioSegments/Index",          val); }
function timelinesAudioSegmentsIndexUp()                         { local.send("/Timelines/AudioSegments/Index/Up"); }
function timelinesAudioSegmentsIndexDown()                       { local.send("/Timelines/AudioSegments/Index/Down"); }
function timelinesCurrentSegmentsIndex(val)                      { local.send("/Timelines/CueSegments/Index",            val); }
function timelinesCurrentSegmentsIndexUp()                       { local.send("/Timelines/CueSegments/Index/Up"); }
function timelinesCurrentSegmentsIndexDown()                     { local.send("/Timelines/CueSegments/Index/Down"); }
function timelinesMarkersId(val)                                 { local.send("/Timelines/Markers/Id",                   val); }
function timelinesMarkersIdUp()                                  { local.send("/Timelines/Markers/Id/Up"); }
function timelinesMarkersIdDown()                                { local.send("/Timelines/Markers/Id/Down"); }

// ── Setup Registers ───────────────────────────────────────────────────────────

function setupRegistersId(val)                                   { local.send("/SetupRegisters/Id", val); }
function setupRegistersIdUp()                                    { local.send("/SetupRegisters/Id/Up"); }
function setupRegistersIdDown()                                  { local.send("/SetupRegisters/Id/Down"); }

// ── Trigger ───────────────────────────────────────────────────────────────────

function triggerPortPositionAndValue(portIdx, position, value, numSegments) {
  local.send("/Trigger/Ports/" + portIdx + "/PositionAndValue", position, value, numSegments);
}

// ── Main ──────────────────────────────────────────────────────────────────────

function mainView(val)                                           { local.send("/Main/View",        val); }
function mainViewUp()                                            { local.send("/Main/View/Up"); }
function mainViewDown()                                          { local.send("/Main/View/Down"); }
function mainFeedbackAll()                                       { local.send("/Main/FeedbackAll"); }
