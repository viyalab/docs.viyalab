---
sidebar_position: 1
---

# Overview

## Pin Diagram

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/01/Base100Diagram.webp)

You can perform safe on-off operations using the Base100, magnetic switch or external mechanical switch. At the same time, you can instantly monitor the power consumption of your project with the INA219 amp/power monitor sensor on it. You can also use your battery more safely by reading the battery voltage values instantly.

## Features

### Key Features

- Instant current voltage and power monitoring
- Magnetic switching
- Extra 2 x 5A mosfets (M1 - M2)
- External switch

### Electrical Characteristic

- Maximum Current: 200 Amps
- Continuous Current: 100 Amps
- Input Voltage: 6-26 Vdc
- Battery Types: 2s – 6s

### Sensors

- INA219 Current Sensor

### Physically

- Size: 36 x 36 mm

## Using with Arduino

With Base100, you can monitor the instantaneous current, voltage and power parameters drawn by the system. To use this feature, make sure you have correctly connected the SDA and SCL pins to your Mizu card. To download the library, go to [this address](https://github.com/viyalab/Base100) to download the Arduino library and run the sample code.
``` cpp
#include "Wire.h"
#include <Base.h>

Base base;

void setup() {
Serial.begin(115200);
base.begin();
base.currentOffset(-1.48);

}

void loop() {
Serial.print("Monitor: ");
Serial.print(base.busVoltage(),4);
Serial.print(" ");
Serial.print(base.shuntCurrent(),4);
Serial.print(" ");
Serial.println(base.busPower(),4);
delay(100);

}
```

## 3D Files

[Download 3D .step file](https://drive.google.com/uc?export=download&id=11ZWXWRGygS61QGfRZoafaax8lh3cJFrf)