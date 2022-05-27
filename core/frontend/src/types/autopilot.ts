import { SemVer } from 'semver'

export interface Firmware {
    name: string
    url: URL
}

export enum Vehicle {
    Sub = 'Sub',
    Rover = 'Rover',
    Plane = 'Plane',
    Copter = 'Copter',
}

export enum Platform {
  Pixhawk1 = 'Pixhawk1',
  Pixhawk4 = 'Pixhawk4',
  GenericSerial = 'GenericSerial',
  Navigator = 'navigator',
  SITL_X86 = 'SITL_x86_64_linux_gnu',
  SITL_ARM = 'SITL_arm_linux_gnueabihf',
}

export enum EndpointType {
    udpin = 'udpin',
    udpout = 'udpout',
    tcpin = 'tcpin',
    tcpout = 'tcpout',
    serial = 'serial',
}

export function userFriendlyEndpointType(type: EndpointType): string {
  switch (type) {
    case EndpointType.udpin: return 'UDP Server'
    case EndpointType.udpout: return 'UDP Client'
    case EndpointType.tcpin: return 'TCP Server'
    case EndpointType.tcpout: return 'TCP Client'
    case EndpointType.serial: return 'Serial'
    default: return 'Undefined type'
  }
}
export interface AutopilotEndpoint {
    name: string
    owner: string
    connection_type: EndpointType
    place: string
    argument: number
    persistent: boolean
    protected: boolean
    enabled: boolean
}

export enum FlightControllerFlags {
  is_bootloader = 'is_bootloader',
}

export interface FlightController {
  name: string
  manufacturer: string
  platform: Platform
  path: string
  flags: FlightControllerFlags[]
}

export enum FirmwareType {
  DEV = 'DEV',
  ALPHA = 'ALPHA',
  BETA = 'BETA',
  RC = 'RC',
  STABLE = 'STABLE',
}

export interface FirmwareInfo {
  version: SemVer
  type: FirmwareType
}
