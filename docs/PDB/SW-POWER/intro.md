---
sidebar_position: 1
---

# Overview

## Pin Diagram

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/09/swPower.webp)

The SW Power Module provides a safe switching solution that allows you to quickly disconnect the battery from the system in emergency situations, making it suitable for many of your projects. As you may know, events like Technofest and similar competitions often require emergency buttons for safety, and mechanical buttons commonly used in such cases may have limitations. These mechanical buttons may not handle the desired high amperage values, take up significant space, or may not operate at the battery voltage. As a solution to these issues, the SW Power Module becomes suitable for use in various projects, including land vehicles, large drones, underwater vehicles, or, in other words, in projects used in conjunction with Pixhawk. Additionally, the system can read current values up to 90A and voltage values up to 48V, making it compatible with Pixhawk.

## Features

### Key Features

- Real-time current, voltage, and power monitoring through Pixhawk.
- Magnetic switching.
- External switch.
- Emergency stop functionality.
- Solder-filled circuit traces (recommended for high-amperage applications).

### Electrical Characteristic

- Input Voltage: 12-48V (3S – 10S)
- Output Voltage: 12-48V (3S – 10S)
- Maximum Current: 100A
- Maximum Readable Current: 90A

### Physically

- Dimension: 48.75 x 43 mm

## Using with Pixhawk

For the usage of the SW Power Module with Pixhawk, you need to start by soldering the Pixhawk Power input pins in sequence under the SW Power Module. The table below lists the Pixhawk Power pins in order. The VCC and GND pins from these should be used to power the Pixhawk with 5V. The Current, Voltage, and GND pins should be connected to the pins under the Power Module.

**Pixhawk pins:**

| Pin     | Signal | Volt |
| ------- | ------ | ---- |
| 1 (red) | VCC    |  +5V |
| 2 (blc) | VCC    |  +5V |
| 3 (blc) | CURRENT| +3V3 |
| 4 (blc) | VOLTAGE| +3V3 |
| 5 (blc) | GND    |  GND |
| 6 (blc) | GND    |  GND |

**SW Power Module Pixhawk pins:**

| Pin     | Signal | Volt |
| ------- | ------ | ---- |
| 1 (red) | NC     |  -   |
| 2 (blc) | NC     |  -   |
| 3 (blc) | CURRENT| +3V3 |
| 4 (blc) | VOLTAGE| +3V3 |
| 5 (blc) | GND    |  GND |
| 6 (blc) | GND    |  GND |

**SW Power Module Buton(SW) pins(JST-2pin):**

It can be used with a 2-pin JST connector by attaching a button.

**SW Power Module Hall pins(JST-3pin):**

It can be used with a 3-pin JST connector by attaching a Hall sensor.

## 3D Files

[Download 3D .step file](https://drive.google.com/uc?export=download&id=1bY4fgTP47rQbO_fdmB8bGM7wcd6ezx7D)