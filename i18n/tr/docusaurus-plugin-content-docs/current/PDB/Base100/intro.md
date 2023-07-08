---
sidebar_position: 1
---

# Genel Bakış

## Pin Diyagramı

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/01/Base100Diagram.webp)

Base100, manyetik anahtar veya harici mekanik anahtar kullanarak güvenli şekilde açma-kapatma işlemlerini gerçekleştirebilirsiniz. Aynı zamanda üzerinde bulunan INA219 amper/güç monitör sensörü ile projenizin güç tüketimini anlık olarak takip edebilirisiniz. Ayrıca batarya voltaj değerlerinide anlık okuyarak daha güvenli şekilde bataryanızı kullanabilirsiniz.

## Özellikler

### Ana Özellikler

- Anlık akım voltaj ve güç izleme
- Manyetik anahtarlama
- Extra 2 adet 5A mosfet (M1 - M2)
- Harici anahtar

### Elektriksel Karakteristik

- Azami Akım: 200 Amper
- Sürekli Akım:  100 Amper
- Giriş Gerilimi: 6-26 Vdc
- Pil Türleri: 2s – 6s

### Sensörler

- INA219 Akım sensörü

### Fiziksel

- Boyut: 36 x 36 mm

## Arduino ile Kullanımı

Base100 ile sistemin çektiği anlık akım, voltaj ve güç parametrelerini takip edebilirsiniz. Bu özelliği kullanmak için SDA ve SCL pinlerini Mizu kartınıza doğru bağladığınıza emin olun. Kütüphaneyi indirmek için [bu adrese](https://github.com/viyalab/Base100) giderek Arduino kütüphanesini indirin ve örnek kodu çalıştırın. 
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

## 3D Dosyalar

[Download 3D .step file](https://drive.google.com/uc?export=download&id=11ZWXWRGygS61QGfRZoafaax8lh3cJFrf)