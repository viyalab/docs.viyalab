---
sidebar_position: 1
---

# Overview

## Pin Diagram

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/10/MizuRocket.webp)

The Mizu Rocket Board is a rocket flight control card designed for model rocketry, capable of recording data with a barometer only and performing dual-deploy flights. It can be programmed using the Mizu Rocket Configurator.

## Features

### Key Features

- Altimeter data can be saved to a micro SD card in CSV format.
- Supports dual deployment (can trigger 2 ejection charges).
- 8 MB external flash (program memory).

### Electrical Characteristics

- Supply Voltage – 1S LiPo battery (3.7-4.2V).
- Charging support with a 500mA charging current at the MainBattery pin.
- Battery voltage measurement can be performed at the FireBattery pin.

:::info

It is mandatory to use two batteries for each flight.
:::

:::info

Charging support is only available at the MainBattery pin.

:::

### Hardware

- RP2040 ARM Cortex-M0 MCU.
- 8 MB flash.
- USB 2.0.
- 10-bit analog input.
- SPI, I2C.
- Digital I/O.

### Sensors

- BMP280 Barometer.
- Programmable LED.
- Micro SD card slot.

### Physical

- Size: 58.5 x 28.6 mm.
- Connector: 3.5 mm Terminal Block.

## 3D Files

[Download 3D .step file](https://drive.google.com/uc?export=download&id=1EVsfZztDgCUDWbBdR7DkGu5TjfIUvlWV)

## Mizu Rocket Configurator

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/10/RocketConfigurator.webp)

You can program the Mizu Rocket card using the Mizu Rocket Configurator. Using this interface, you can configure tasks such as apogee burst delay and burst sealing. You can also configure the same tasks for the main parachute. You can create your flight graph and analyze your flights using the graphical tool in the "Data" tab.

## Software

[Download Mizu Rocket Firmware](https://drive.google.com/uc?export=download&id=1b3-KLXJns2_xXocUWiuENY63i8iQVafz)

[Download Mizu Rocket Configurator for Windows](https://drive.google.com/uc?export=download&id=1H-7TrXKqwe0lfW6mbkoks-3t0lyMk9QR)