/* eslint-disable camelcase */
const struct = require('../cppStruct')

const SrvCom_Signal_SignalState = new struct(undefined,
  [
    'state', struct.uint8_t(),
    'customPattern', struct.uint8_t(),
    'bulbA', struct.uint8_t(),
    'bulbB', struct.uint8_t(),
    'bulbC', struct.uint8_t(),
    'bulbD', struct.uint8_t(),
  ])

const SIGNAL_SIGNALCOUNT = 6

module.exports =
{
  SRVCOM_SYS_REPORT_PANELVERSION: 0x80 + 0x01,
  SRVCOM_SYS_REPORT_PANELUPTIME: 0x80 + 0x02,
  SRVCOM_SYS_CONTROL_INIT: 0x80 + 0x08,
  SRVCOM_SYS_CONTROL_RESET: 0x80 + 0x10,
  SRVCOM_SYS_CONTROL_RESET_ALL: 0x80 + 0x11,
  SrvCom_Sys_Report_PanelVersion: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'major', struct.uint8_t(),
      'minor', struct.uint8_t(),
      'patch', struct.uint8_t(),
    ]),
  SrvCom_Sys_Report_PanelUptime: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'uptime', struct.uint32_t(),
    ]),
  SrvCom_Sys_Control_Reset: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
    ]),
  SrvCom_Sys_Control_Init: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
    ]),



  I2C_ADDRESS_TURNOUT1: 10,
  I2C_ADDRESS_TURNOUT2: 11,
  I2C_ADDRESS_TURNOUT3: 12,
  I2C_ADDRESS_TURNOUT4: 13,
  SRVCOM_TURNOUT_REPORT_STATEALL: 0x01,
  SRVCOM_TURNOUT_REPORT_STATECHANGE: 0x02,
  SRVCOM_TURNOUT_CONTROL_STATE: 0x01,
  SRVCOM_TURNOUT_CONTROL_BYPERCENT: 0x02,
  SrvCom_Turnout_Report_StateAll: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'turnoutStates', struct.uint8_t(),
    ]),
  SrvCom_Turnout_Report_StateChange: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'turnoutIndex', struct.uint8_t(),
      'turnoutState', struct.uint8_t(),
    ]),
  SrvCom_Turnout_Control_State: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'turnoutIndex', struct.uint8_t(),
      'turnoutState', struct.uint8_t(),
    ]),
  SrvCom_Turnout_Control_ByPercent: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'turnoutIndex', struct.uint8_t(),
      'statePercent', struct.uint8_t(),
    ]),



  I2C_ADDRESS_SIGNAL1: 20,
  I2C_ADDRESS_SIGNAL2: 21,
  I2C_ADDRESS_SIGNAL3: 22,
  I2C_ADDRESS_SIGNAL4: 23,
  SIGNAL_SIGNALCOUNT,
  SRVCOM_SIGNAL_REPORT_STATEALL: 0x01,
  SRVCOM_SIGNAL_REPORT_STATECHANGE: 0x02,
  SRVCOM_SIGNAL_CONTROL_STATE: 0x01,
  SrvCom_Signal_SignalState: SrvCom_Signal_SignalState,
  SrvCom_Signal_Report_StateAll: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'states', struct.type(SrvCom_Signal_SignalState, SIGNAL_SIGNALCOUNT),
    ]),
  SrvCom_Signal_Report_StateChange: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'signalIndex', struct.uint8_t(),
      'signalState', struct.type(SrvCom_Signal_SignalState, 1),
    ]),
  SrvCom_Signal_Control_State: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'signalIndex', struct.uint8_t(),
      'signalState', struct.type(SrvCom_Signal_SignalState, 1),
    ]),



  I2C_ADDRESS_KEYPAD: 50,
  SRVCOM_KEYPAD_REPORT_STATEALL: 0x01,
  SRVCOM_KEYPAD_REPORT_SWITCHCHANGE: 0x02,
  SRVCOM_KEYPAD_REPORT_BUTTONPRESS: 0x03,
  SrvCom_Keypad_Report_StateAll: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'switchStates', struct.uint8_t(),
    ]),
  SrvCom_Keypad_Report_SwitchChange: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'switchIndex', struct.uint8_t(),
      'switchState', struct.uint8_t(),
    ]),
  SrvCom_Keypad_Report_ButtonPress: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'buttonIndex', struct.uint8_t(),
      'isLongPress', struct.uint8_t(),
    ]),



  I2C_ADDRESS_SOUND: 60,
  SRVCOM_SOUND_REPORT_STATUS: 0x01,
  SRVCOM_SOUND_CONTROL: 0x01,
  SrvCom_Sound_Report_Status: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'ready', struct.uint8_t(),
      'cardReady', struct.uint8_t(),
      'fileCount', struct.uint16_t(),
      'errorCode', struct.uint8_t(),
      'playedFolder', struct.uint8_t(),
      'playedFile', struct.uint8_t(),
      'playedVolume', struct.uint8_t(),
    ]),
  SrvCom_Sound_Control_Play: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'index', struct.uint8_t(),
    ]),



  I2C_ADDRESS_AMBIENTLIGHT1: 62,
  I2C_ADDRESS_AMBIENTLIGHT2: 63,
  I2C_ADDRESS_AMBIENTLIGHT3: 64,
  I2C_ADDRESS_AMBIENTLIGHT4: 65,
  SRVCOM_AMBIENTLIGHT_REPORT_STATEALL: 0x01,
  SRVCOM_AMBIENTLIGHT_REPORT_NIGHTSTATECHANGE: 0x02,
  SRVCOM_AMBIENTLIGHT_REPORT_LIGHTSTATECHANGE: 0x03,
  SRVCOM_AMBIENTLIGHT_REPORT_EFFECTSTATECHANGE: 0x04,
  SRVCOM_AMBIENTLIGHT_CONTROL_NIGHTSTATE: 0x01,
  SRVCOM_AMBIENTLIGHT_CONTROL_LIGHTSTATE: 0x02,
  SRVCOM_AMBIENTLIGHT_CONTROL_EFFECTSTATE: 0x03,
  SrvCom_AmbientLight_Report_StateAll: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'nightState', struct.uint8_t(),
      'lightStates', struct.uint8_t(),
      'effectStates', struct.type(struct.uint8_t(), 2),
    ]),
  SrvCom_AmbientLight_Report_NightStateChange: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'state', struct.uint8_t(),
    ]),
  SrvCom_AmbientLight_Report_LightStateChange: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'lightIndex', struct.uint8_t(),
      'state', struct.uint8_t(),
    ]),
  SrvCom_AmbientLight_Report_EffectStateChange: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'effectIndex', struct.uint8_t(),
      'effect', struct.uint8_t(),
    ]),
  SrvCom_AmbientLight_Control_NightState: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'state', struct.uint8_t(),
    ]),
  SrvCom_AmbientLight_Control_LightState: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'lightIndex', struct.uint8_t(),
      'state', struct.uint8_t(),
    ]),
  SrvCom_AmbientLight_Control_EffectState: new struct(undefined,
    [
      'address', struct.uint8_t(),
      'command', struct.uint8_t(),
      'effectIndex', struct.uint8_t(),
      'state', struct.uint8_t(),
    ]),

}