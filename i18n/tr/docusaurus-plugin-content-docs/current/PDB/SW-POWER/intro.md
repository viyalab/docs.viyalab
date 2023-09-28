---
sidebar_position: 2
---

# Genel Bakış

## Pin Diyagramı

![Docs Version Dropdown](https://viyalab.com/wp-content/uploads/2023/09/swPower.webp)

SW Power Modül, bir çok projenizde acil durumlarda hızlı bir şekilde bataryayı sistemden ayırabileceğiniz güvenli bir anahtarlama çözümü sunmaktadır. Bildiğiniz gibi teknofest ve benzer yarışmalarda özellikle bataryalı sistemlerde güvenlik için acil durum butonları istiyorlar genellikle kullanılan mekanik butonların ayakları istenilen yüksek amper değerlerinde çalışmıyor veya role kullanımında hem çok yer kaplıyor hemde kullanılan role batarya voltajında çalışmayabiliyor bu sorunlara çözüm olarak SW power modül kara araçlarında büyük dronelarda su altı araçlarında veya diğer bir deyişle pixhawk ile birlikte kullanılan her projede kullanıma uygun hale geliyor aynı zamanda sistem 90A’e kadar akım değeri ve 48V’a kadar da voltaj değerini pixhawk ile okunabilmektedir.

## Özellikler

### Ana Özellikler

- Pixhawk üzerinden anlık akım voltaj ve güç izleme.
- Manyetik anahtarlama.
- Harici anahtar.
- Acil stop olarak kullanım özelliği.
- Lehimle doldurulabilen devre yolları(Yüksek amperli uygulamalar için önerilir).

### Elektriksel Karakteristik

- Giriş Voltajı: 12-48V (3S – 10S)
- Çıkış Voltajı: 12-48V (3S – 10S)
- Azami Akım: 100A
- Okunabilecek Maksimum Akım: 90A

### Fiziksel

- Boyut: 48.75 x 43 mm

## Pixhawk ile Kullanımı

SW Power Modülü Pixhawk üzerinden kullanımı için öncelikle Pixhawk Power girişlerindeki pin girişlerine sırasına göre SW Power Modül altına lehimlemek gerekmektedir. Aşağıdaki tabloda Pixhawk Power pinleri sırası ile verilmiştir. Bunlardan VCC ve GND pinleri Pixhawk'ı 5V ile beslemek için kullanılmalıdır. Current, Voltage ve GND pinleri ise Power Modulün altındaki pinlere bağlanmalıdır.

**Pixhawk pinler:**

| Pin     | Signal | Volt |
| ------- | ------ | ---- |
| 1 (red) | VCC    |  +5V |
| 2 (blc) | VCC    |  +5V |
| 3 (blc) | CURRENT| +3V3 |
| 4 (blc) | VOLTAGE| +3V3 |
| 5 (blc) | GND    |  GND |
| 6 (blc) | GND    |  GND |

**SW Power Modül Pixhawk pinleri:**

| Pin     | Signal | Volt |
| ------- | ------ | ---- |
| 1 (red) | NC     |  -   |
| 2 (blc) | NC     |  -   |
| 3 (blc) | CURRENT| +3V3 |
| 4 (blc) | VOLTAGE| +3V3 |
| 5 (blc) | GND    |  GND |
| 6 (blc) | GND    |  GND |

**SW Power Modül Buton(SW) pinleri(JST-2pin):**

2 pinli Jst konnektöre buton takılarak kullanılabilir.

**SW Power Modül Hall pinleri(JST-3pin):**

3 pinli JST konnektöre hall sensör takılark kullanılabilir.

## 3D Dosyalar

[Download 3D .step file](https://drive.google.com/uc?export=download&id=1bY4fgTP47rQbO_fdmB8bGM7wcd6ezx7D)