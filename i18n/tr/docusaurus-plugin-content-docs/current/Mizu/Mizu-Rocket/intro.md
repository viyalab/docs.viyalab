---
sidebar_position: 1
---

# Genel Bakış

## Pin Diyagram

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/10/MizuRocket.webp)

Mizu Rocket Board, model roketçilik için tasarlanmış, yalnızca barometre ile veri kaydedebilen ve çift ayrılmalı uçuş gerçekleştirebilen bir roket uçuş kontrol kartıdır. Mizu Roket Yapılandırıcı kullanılarak programlanabilir.

## Özellikler

### Ana Özellikler

- Altimetre veri csv dosyasını mikro SD karta kaydetme
- İkili ayrılmayı destekler (2 fırlatma patlayıcısı ateşleyebilir)
- 8 Mb harici flaş (program hafızası)

### Elektriksel Karakteristik

- Besleme Gerilimi – 1S LiPo pil (3,7-4,2V)
- MainBattery Pininde 500mA şarj akımı ile şarj desteği
- FireBattery Pininde batarya voltaj ölçümü yapılabilir

:::info

Her uçuş için iki batarya kullanmak zorunludur
:::

:::info

Şarj desteği sadece MainBattery pinide vardır

:::

### Donanım

- RP2040 ARM Cortex-M0 MCU
- 8 MB flash
- USB 2.0
- 10 bit analog giriş
- SPI, I2C
- Dijital I/0

### Sensorler

- BMP280 Barometre
- Programlanabilir LED
- Micro SD kart girişi

### Fiziksel

- Boyut: 58.5 x 28.6 mm
- Konnektör: 3.5 mm Terminal Blok

## 3D Dosyalar

[Download 3D .step file](https://drive.google.com/uc?export=download&id=1EVsfZztDgCUDWbBdR7DkGu5TjfIUvlWV)

## Mizu Rocket Configurator

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/10/RocketConfigurator.webp)

Mizu Rocket kartını, Mizu Rocket Configurator kullanarak programlayabilirsiniz. Bu arayüzü kullanarak zirve patlama geciklemesi ve patlama mühürlemesi gibi işlemleri gerçekleştirebilirsiniz. Aynı işlemleri ana paraşüt için de belirleyebilirsiniz. "Data" sekmesinde bulunan grafik aracı ile uçuş grafiğinizi oluşturabilir ve uçuşlarınızın analizini yapabilirsiniz.

## Yazılım

[Mizu Rocket Firmware İndir](https://drive.google.com/uc?export=download&id=1b3-KLXJns2_xXocUWiuENY63i8iQVafz)

[Mizu Rocket Configurator Windows için İndir](https://drive.google.com/uc?export=download&id=1H-7TrXKqwe0lfW6mbkoks-3t0lyMk9QR)