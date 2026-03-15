function init() {
  script.log("Madrix 5 module init");
}

function moduleParameterChanged(param) {}
function moduleValueChanged(value) {}

// ── Helpers ──────────────────────────────────────────────────────────────────

function b(val) { return val ? 1 : 0; }

function sendDeck(deck, path, val) {
  if (val === undefined) {
    local.send("/" + deck + "/" + path);
  } else {
    local.send("/" + deck + "/" + path, val);
  }
}

// ── Audio/Input ───────────────────────────────────────────────────────────────

function audioInputAgc(val)         { local.send("/Audio/Input/Agc",          b(val)); }
function audioInputLevel(val)       { local.send("/Audio/Input/Level",         val); }
function audioInputLevelOffset(val) { local.send("/Audio/Input/Level/Offset",  val); }
function audioInputMute(val)        { local.send("/Audio/Input/Mute",          b(val)); }

// ── Audio/Output ──────────────────────────────────────────────────────────────

function audioOutputLevel(val)       { local.send("/Audio/Output/Level",        val); }
function audioOutputLevelOffset(val) { local.send("/Audio/Output/Level/Offset", val); }
function audioOutputMute(val)        { local.send("/Audio/Output/Mute",         b(val)); }

// ── Deck A ────────────────────────────────────────────────────────────────────

function deckAPause(val)              { sendDeck("DeckA", "Pause",              b(val)); }
function deckASpeedMaster(val)        { sendDeck("DeckA", "SpeedMaster",        val); }
function deckASpeedMasterOffset(val)  { sendDeck("DeckA", "SpeedMaster/Offset", val); }
function deckASubmaster(val)          { sendDeck("DeckA", "Submaster",          val); }
function deckASubmasterOffset(val)    { sendDeck("DeckA", "Submaster/Offset",   val); }
function deckAFilter(val)             { sendDeck("DeckA", "Filter",             val); }
function deckAFilterUp()              { sendDeck("DeckA", "Filter/Up"); }
function deckAFilterDown()            { sendDeck("DeckA", "Filter/Down"); }
function deckAFilterColor()           { sendDeck("DeckA", "FilterColor"); }
function deckAMode(val)               { sendDeck("DeckA", "Mode",               val); }
function deckAModeUp()                { sendDeck("DeckA", "Mode/Up"); }
function deckAModeDown()              { sendDeck("DeckA", "Mode/Down"); }
function deckAGlobalId(val)           { sendDeck("DeckA", "GlobalId",           val); }
function deckAGlobalIdUp()            { sendDeck("DeckA", "GlobalId/Up"); }
function deckAGlobalIdDown()          { sendDeck("DeckA", "GlobalId/Down"); }
function deckARed(val)                { sendDeck("DeckA", "Red",                val); }
function deckARedOffset(val)          { sendDeck("DeckA", "Red/Offset",         val); }
function deckAGreen(val)              { sendDeck("DeckA", "Green",              val); }
function deckAGreenOffset(val)        { sendDeck("DeckA", "Green/Offset",       val); }
function deckABlue(val)               { sendDeck("DeckA", "Blue",               val); }
function deckABlueOffset(val)         { sendDeck("DeckA", "Blue/Offset",        val); }
function deckAWhite(val)              { sendDeck("DeckA", "White",              val); }
function deckAWhiteOffset(val)        { sendDeck("DeckA", "White/Offset",       val); }
function deckARgb(r, g, b)            { local.send("/DeckA/Rgb",                r, g, b); }

// ── Deck B ────────────────────────────────────────────────────────────────────

function deckBPause(val)              { sendDeck("DeckB", "Pause",              b(val)); }
function deckBSpeedMaster(val)        { sendDeck("DeckB", "SpeedMaster",        val); }
function deckBSpeedMasterOffset(val)  { sendDeck("DeckB", "SpeedMaster/Offset", val); }
function deckBSubmaster(val)          { sendDeck("DeckB", "Submaster",          val); }
function deckBSubmasterOffset(val)    { sendDeck("DeckB", "Submaster/Offset",   val); }
function deckBFilter(val)             { sendDeck("DeckB", "Filter",             val); }
function deckBFilterUp()              { sendDeck("DeckB", "Filter/Up"); }
function deckBFilterDown()            { sendDeck("DeckB", "Filter/Down"); }
function deckBFilterColor()           { sendDeck("DeckB", "FilterColor"); }
function deckBMode(val)               { sendDeck("DeckB", "Mode",               val); }
function deckBModeUp()                { sendDeck("DeckB", "Mode/Up"); }
function deckBModeDown()              { sendDeck("DeckB", "Mode/Down"); }
function deckBGlobalId(val)           { sendDeck("DeckB", "GlobalId",           val); }
function deckBGlobalIdUp()            { sendDeck("DeckB", "GlobalId/Up"); }
function deckBGlobalIdDown()          { sendDeck("DeckB", "GlobalId/Down"); }
function deckBRed(val)                { sendDeck("DeckB", "Red",                val); }
function deckBRedOffset(val)          { sendDeck("DeckB", "Red/Offset",         val); }
function deckBGreen(val)              { sendDeck("DeckB", "Green",              val); }
function deckBGreenOffset(val)        { sendDeck("DeckB", "Green/Offset",       val); }
function deckBBlue(val)               { sendDeck("DeckB", "Blue",               val); }
function deckBBlueOffset(val)         { sendDeck("DeckB", "Blue/Offset",        val); }
function deckBWhite(val)              { sendDeck("DeckB", "White",              val); }
function deckBWhiteOffset(val)        { sendDeck("DeckB", "White/Offset",       val); }
function deckBRgb(r, g, b)            { local.send("/DeckB/Rgb",                r, g, b); }

// ── Storages ──────────────────────────────────────────────────────────────────

function storagesIndex(val)              { local.send("/Storages/Index",                          val); }
function storagesIndexUp()               { local.send("/Storages/Index/Up"); }
function storagesIndexDown()             { local.send("/Storages/Index/Down"); }
function storagesPlacesIndex(val)        { local.send("/Storages/Places/Index",                   val); }
function storagesPlacesIndexUp()         { local.send("/Storages/Places/Index/Up"); }
function storagesPlacesIndexDown()       { local.send("/Storages/Places/Index/Down"); }
function storagesSpeedPitch(val)         { local.send("/Storages/StoragePlace/SpeedPitch",        val); }
function storagesSpeedPitchOffset(val)   { local.send("/Storages/StoragePlace/SpeedPitch/Offset", val); }
function storagesSubmaster(val)          { local.send("/Storages/StoragePlace/Submaster",         val); }
function storagesSubmasterOffset(val)    { local.send("/Storages/StoragePlace/Submaster/Offset",  val); }
function storagesFilter(val)             { local.send("/Storages/StoragePlace/Filter",            val); }
function storagesFilterUp()              { local.send("/Storages/StoragePlace/Filter/Up"); }
function storagesFilterDown()            { local.send("/Storages/StoragePlace/Filter/Down"); }

// ── Chaser ────────────────────────────────────────────────────────────────────

function chaserPlaybackState(val)      { local.send("/Chaser/PlaybackState",        val); }
function chaserSpeedPitch(val)         { local.send("/Chaser/SpeedPitch",           val); }
function chaserSpeedPitchOffset(val)   { local.send("/Chaser/SpeedPitch/Offset",    val); }
function chaserStepsIndex(val)         { local.send("/Chaser/Steps/Index",          val); }
function chaserStepsIndexUp()          { local.send("/Chaser/Steps/Index/Up"); }
function chaserStepsIndexDown()        { local.send("/Chaser/Steps/Index/Down"); }

// ── Layers ────────────────────────────────────────────────────────────────────

function layerSubmaster(idx, val)               { local.send("/Layers/" + idx + "/Submaster",                  val); }
function layerSubmasterOffset(idx, val)         { local.send("/Layers/" + idx + "/Submaster/Offset",           val); }
function layerOpacity(idx, val)                 { local.send("/Layers/" + idx + "/Opacity",                    val); }
function layerOpacityOffset(idx, val)           { local.send("/Layers/" + idx + "/Opacity/Offset",             val); }
function layerBlind(idx, val)                   { local.send("/Layers/" + idx + "/Blind",                      b(val)); }
function layerSolo(idx, val)                    { local.send("/Layers/" + idx + "/Solo",                       b(val)); }
function layerFilter(idx, val)                  { local.send("/Layers/" + idx + "/Filter",                     val); }
function layerFilterUp(idx)                     { local.send("/Layers/" + idx + "/Filter/Up"); }
function layerFilterDown(idx)                   { local.send("/Layers/" + idx + "/Filter/Down"); }
function layerMixMode(idx, val)                 { local.send("/Layers/" + idx + "/MixMode",                    val); }
function layerMixModeUp(idx)                    { local.send("/Layers/" + idx + "/MixMode/Up"); }
function layerMixModeDown(idx)                  { local.send("/Layers/" + idx + "/MixMode/Down"); }
function layerChaserPlaybackState(idx, val)     { local.send("/Layers/" + idx + "/Chaser/PlaybackState",       val); }
function layerChaserSpeedPitch(idx, val)        { local.send("/Layers/" + idx + "/Chaser/SpeedPitch",          val); }
function layerChaserSpeedPitchOffset(idx, val)  { local.send("/Layers/" + idx + "/Chaser/SpeedPitch/Offset",   val); }
function layerChaserStepsIndex(idx, val)        { local.send("/Layers/" + idx + "/Chaser/Steps/Index",         val); }
function layerChaserStepsIndexUp(idx)           { local.send("/Layers/" + idx + "/Chaser/Steps/Index/Up"); }
function layerChaserStepsIndexDown(idx)         { local.send("/Layers/" + idx + "/Chaser/Steps/Index/Down"); }

// ── Output ────────────────────────────────────────────────────────────────────

function outputFreeze(val)       { local.send("/Output/Freeze",        b(val)); }
function outputMaster(val)       { local.send("/Output/Master",        val); }
function outputMasterOffset(val) { local.send("/Output/Master/Offset", val); }
function outputBlackout(val)     { local.send("/Output/Blackout",      b(val)); }
function outputFilter(val)       { local.send("/Output/Filter",        val); }
function outputFilterUp()        { local.send("/Output/Filter/Up"); }
function outputFilterDown()      { local.send("/Output/Filter/Down"); }
function outputFilterColor()     { local.send("/Output/FilterColor"); }
function outputMode(val)         { local.send("/Output/Mode",          val); }
function outputModeUp()          { local.send("/Output/Mode/Up"); }
function outputModeDown()        { local.send("/Output/Mode/Down"); }
function outputGlobalId(val)     { local.send("/Output/GlobalId",      val); }
function outputGlobalIdUp()      { local.send("/Output/GlobalId/Up"); }
function outputGlobalIdDown()    { local.send("/Output/GlobalId/Down"); }
function outputRed(val)          { local.send("/Output/Red",           val); }
function outputRedOffset(val)    { local.send("/Output/Red/Offset",    val); }
function outputGreen(val)        { local.send("/Output/Green",         val); }
function outputGreenOffset(val)  { local.send("/Output/Green/Offset",  val); }
function outputBlue(val)         { local.send("/Output/Blue",          val); }
function outputBlueOffset(val)   { local.send("/Output/Blue/Offset",   val); }
function outputWhite(val)        { local.send("/Output/White",         val); }
function outputWhiteOffset(val)  { local.send("/Output/White/Offset",  val); }
function outputRgb(r, g, b)      { local.send("/Output/Rgb",           r, g, b); }

// ── StrobeColor ───────────────────────────────────────────────────────────────

function strobeColorMode(val)          { local.send("/StrobeColor/Mode",          val); }
function strobeColorModeUp()           { local.send("/StrobeColor/Mode/Up"); }
function strobeColorModeDown()         { local.send("/StrobeColor/Mode/Down"); }
function strobeColorGlobalId(val)      { local.send("/StrobeColor/GlobalId",      val); }
function strobeColorGlobalIdUp()       { local.send("/StrobeColor/GlobalId/Up"); }
function strobeColorGlobalIdDown()     { local.send("/StrobeColor/GlobalId/Down"); }
function strobeColorRed(val)           { local.send("/StrobeColor/Red",           val); }
function strobeColorRedOffset(val)     { local.send("/StrobeColor/Red/Offset",    val); }
function strobeColorGreen(val)         { local.send("/StrobeColor/Green",         val); }
function strobeColorGreenOffset(val)   { local.send("/StrobeColor/Green/Offset",  val); }
function strobeColorBlue(val)          { local.send("/StrobeColor/Blue",          val); }
function strobeColorBlueOffset(val)    { local.send("/StrobeColor/Blue/Offset",   val); }
function strobeColorWhite(val)         { local.send("/StrobeColor/White",         val); }
function strobeColorWhiteOffset(val)   { local.send("/StrobeColor/White/Offset",  val); }
function strobeColorRgb(r, g, b)       { local.send("/StrobeColor/Rgb",           r, g, b); }
function strobeColorStrobe(val)        { local.send("/StrobeColor/Strobe",        val); }
function strobeColorStrobeOffset(val)  { local.send("/StrobeColor/Strobe/Offset", val); }

// ── Fade ──────────────────────────────────────────────────────────────────────

function fadeTime(val)        { local.send("/Fade/Time",        val); }
function fadeTimeOffset(val)  { local.send("/Fade/Time/Offset", val); }
function fadeType(val)        { local.send("/Fade/Type",        val); }
function fadeTypeUp()         { local.send("/Fade/Type/Up"); }
function fadeTypeDown()       { local.send("/Fade/Type/Down"); }
function fadeValue(val)       { local.send("/Fade/Value",        val); }
function fadeValueOffset(val) { local.send("/Fade/Value/Offset", val); }
function fadeAutomatic()      { local.send("/Fade/Automatic"); }
function fadeToLeft()         { local.send("/Fade/ToLeft"); }
function fadeToRight()        { local.send("/Fade/ToRight"); }
function fadeToCenter()       { local.send("/Fade/ToCenter"); }

// ── ColorKit ──────────────────────────────────────────────────────────────────

function colorKitRed(idx, val)          { local.send("/ColorKit/GlobalColors/" + idx + "/Red",          val); }
function colorKitRedOffset(idx, val)    { local.send("/ColorKit/GlobalColors/" + idx + "/Red/Offset",   val); }
function colorKitGreen(idx, val)        { local.send("/ColorKit/GlobalColors/" + idx + "/Green",        val); }
function colorKitGreenOffset(idx, val)  { local.send("/ColorKit/GlobalColors/" + idx + "/Green/Offset", val); }
function colorKitBlue(idx, val)         { local.send("/ColorKit/GlobalColors/" + idx + "/Blue",         val); }
function colorKitBlueOffset(idx, val)   { local.send("/ColorKit/GlobalColors/" + idx + "/Blue/Offset",  val); }
function colorKitWhite(idx, val)        { local.send("/ColorKit/GlobalColors/" + idx + "/White",        val); }
function colorKitWhiteOffset(idx, val)  { local.send("/ColorKit/GlobalColors/" + idx + "/White/Offset", val); }
function colorKitAlpha(idx, val)        { local.send("/ColorKit/GlobalColors/" + idx + "/Alpha",        val); }
function colorKitAlphaOffset(idx, val)  { local.send("/ColorKit/GlobalColors/" + idx + "/Alpha/Offset", val); }
function colorKitRgb(idx, r, g, bv)    { local.send("/ColorKit/GlobalColors/" + idx + "/Rgb",          r, g, bv); }

// ── GroupControl ──────────────────────────────────────────────────────────────

function groupControlDefaults()                   { local.send("/GroupControl/Defaults"); }
function groupValue(idx, val)                     { local.send("/GroupControl/Groups/" + idx + "/Value",                    val); }
function groupValueOffset(idx, val)               { local.send("/GroupControl/Groups/" + idx + "/Value/Offset",             val); }
function groupFlash(idx, val)                     { local.send("/GroupControl/Groups/" + idx + "/Flash",                    b(val)); }
function groupChaserPlaybackState(idx, val)       { local.send("/GroupControl/Groups/" + idx + "/Chaser/PlaybackState",     val); }
function groupChaserSpeedPitch(idx, val)          { local.send("/GroupControl/Groups/" + idx + "/Chaser/SpeedPitch",        val); }
function groupChaserSpeedPitchOffset(idx, val)    { local.send("/GroupControl/Groups/" + idx + "/Chaser/SpeedPitch/Offset", val); }
function groupChaserStepsIndex(idx, val)          { local.send("/GroupControl/Groups/" + idx + "/Chaser/Steps/Index",       val); }
function groupChaserStepsIndexUp(idx)             { local.send("/GroupControl/Groups/" + idx + "/Chaser/Steps/Index/Up"); }
function groupChaserStepsIndexDown(idx)           { local.send("/GroupControl/Groups/" + idx + "/Chaser/Steps/Index/Down"); }
function groupFadeTime(idx, val)                  { local.send("/GroupControl/Groups/" + idx + "/FadeTime",                 val); }
function groupFadeTimeOffset(idx, val)            { local.send("/GroupControl/Groups/" + idx + "/FadeTime/Offset",          val); }

// ── Presets ───────────────────────────────────────────────────────────────────

function presetsIndex(val)  { local.send("/Presets/Index",      val); }
function presetsIndexUp()   { local.send("/Presets/Index/Up"); }
function presetsIndexDown() { local.send("/Presets/Index/Down"); }

// ── DmxFaderTool ──────────────────────────────────────────────────────────────

function dmxFaderState(idx, val)        { local.send("/DmxFaderTool/Faders/" + idx + "/State",        b(val)); }
function dmxFaderValue(idx, val)        { local.send("/DmxFaderTool/Faders/" + idx + "/Value",        val); }
function dmxFaderValueOffset(idx, val)  { local.send("/DmxFaderTool/Faders/" + idx + "/Value/Offset", val); }

// ── CueLists ──────────────────────────────────────────────────────────────────

function cueListsIndex(val)                              { local.send("/CueLists/Index",                                  val); }
function cueListsIndexUp()                               { local.send("/CueLists/Index/Up"); }
function cueListsIndexDown()                             { local.send("/CueLists/Index/Down"); }
function cueListsPlaybackState(val)                      { local.send("/CueLists/PlaybackState",                          val); }
function cueListsPlaybackMode(val)                       { local.send("/CueLists/PlaybackMode",                           b(val)); }
function cueListsTimeCodeSource(val)                     { local.send("/CueLists/TimeCodeSource",                         val); }
function cueListsTimeCodeSourceUp()                      { local.send("/CueLists/TimeCodeSource/Up"); }
function cueListsTimeCodeSourceDown()                    { local.send("/CueLists/TimeCodeSource/Down"); }
function cueListsCuesIndex(val)                          { local.send("/CueLists/Cues/Index",                             val); }
function cueListsCuesIndexUp()                           { local.send("/CueLists/Cues/Index/Up"); }
function cueListsCuesIndexDown()                         { local.send("/CueLists/Cues/Index/Down"); }
function cueListsTimelinesIndex(val)                     { local.send("/CueLists/Timelines/Index",                        val); }
function cueListsTimelinesIndexUp()                      { local.send("/CueLists/Timelines/Index/Up"); }
function cueListsTimelinesIndexDown()                    { local.send("/CueLists/Timelines/Index/Down"); }
function cueListsTimelinesPlaybackState(val)             { local.send("/CueLists/Timelines/PlaybackState",                val); }
function cueListsTimelinesAudioSegmentsIndex(val)        { local.send("/CueLists/Timelines/AudioSegments/Index",          val); }
function cueListsTimelinesAudioSegmentsIndexUp()         { local.send("/CueLists/Timelines/AudioSegments/Index/Up"); }
function cueListsTimelinesAudioSegmentsIndexDown()       { local.send("/CueLists/Timelines/AudioSegments/Index/Down"); }
function cueListsTimelinesCurrentSegmentsIndex(val)      { local.send("/CueLists/Timelines/CueSegments/Index",            val); }
function cueListsTimelinesCurrentSegmentsIndexUp()       { local.send("/CueLists/Timelines/CueSegments/Index/Up"); }
function cueListsTimelinesCurrentSegmentsIndexDown()     { local.send("/CueLists/Timelines/CueSegments/Index/Down"); }
function cueListsTimelinesMarkersId(val)                 { local.send("/CueLists/Timelines/Markers/Id",                   val); }
function cueListsTimelinesMarkersIdUp()                  { local.send("/CueLists/Timelines/Markers/Id/Up"); }
function cueListsTimelinesMarkersIdDown()                { local.send("/CueLists/Timelines/Markers/Id/Down"); }
function cueListsTimelinesSetupRegistersId(val)          { local.send("/CueLists/Timelines/SetupRegisters/Id",            val); }
function cueListsTimelinesSetupRegistersIdUp()           { local.send("/CueLists/Timelines/SetupRegisters/Id/Up"); }
function cueListsTimelinesSetupRegistersIdDown()         { local.send("/CueLists/Timelines/SetupRegisters/Id/Down"); }

// ── Trigger ───────────────────────────────────────────────────────────────────

function triggerPortPositionAndValue(portIdx, position, value, numSegments) {
  local.send("/Trigger/Ports/" + portIdx + "/PositionAndValue", position, value, numSegments);
}

// ── Main ──────────────────────────────────────────────────────────────────────

function mainView(val)       { local.send("/Main/View",        val); }
function mainViewUp()        { local.send("/Main/View/Up"); }
function mainViewDown()      { local.send("/Main/View/Down"); }
function mainFeedbackAll()   { local.send("/Main/FeedbackAll"); }
