# UMFS

[English (US)](README.md) | Türkçe

UMFS, amassivus veri merkezi paketi için geliştirilen Evrensel Devasa Dosya Sistemi'dir (Universal Massive File System).

Bu depo, UMFS'nin herkese açık web sitesini içerir: projeyi tanıtan, amassivus platformundaki yerini açıklayan, belirtilen kapsamını bilinen dosya sistemleriyle karşılaştıran ve proje lisansını yayımlayan odaklı ve duyarlı (responsive) bir sayfa. Sayfa, burada nelerin bilindiği ile nelerin UMFS kaynak koduna ve teknik belgelerine ait olduğu konusunda açık olacak şekilde yazılmıştır.

## Burada neler var

- Universal Massive File System için duyarlı bir açılış sayfası.
- Mobilde daralma davranışına sahip Bootstrap 5.3.3 gezinme çubuğu.
- Komut satırı tarzında UMFS sunumu içeren bir hero bölümü.
- UMFS'ye amassivus veri merkezi paketinin bir dosya sistemi bileşeni olarak genel bakış.
- Windows, Apple, Google, Linux ve BSD depolama sistemlerini kapsayan bir karşılaştırma tablosu.
- GNU Affero Genel Kamu Lisansı v3.0 veya sonrası bilgileri.
- JavaScript lisanslarını listeleyen ve `main.js` kaynak kodunu gömülü sunan bir LibreJS sayfası (`jslicense.html`).
- UMFS kaynak projesine bağlantılar: [source.masscollabs.xyz/umfs](https://source.masscollabs.xyz/umfs).

Bu web sitesi bir dosya sistemi, depolama hizmeti, API veya veri merkezi kontrol düzlemi uygulamaz. Dağıtım veya uyumluluk iddialarında bulunmadan önce bu yeteneklerin proje kaynak kodunda ve teknik belgelerde doğrulanması gerekir.

## Yerelde çalıştırma

Derleme adımı gerekmez. Bu dizini herhangi bir statik web sunucusuyla sunun veya `index.html` dosyasını doğrudan bir tarayıcıda açın.

Python yüklüyse hızlı bir yerel sunucu için:

```bash
python3 -m http.server 8000
```

Ardından [http://localhost:8000](http://localhost:8000) adresini açın.

Sayfa Bootstrap 5.3.3'ü jsDelivr üzerinden yüklediği için gezinme denetimleri, sayfa bir tarayıcıda açıldığında ağ erişimi gerektirir. Sayfa şu anda Bootstrap CSS'ine `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` adresinden, Bootstrap paketine ise `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` adresinden başvurur. Yerel CSS ve JavaScript dosyaları `assets/css/styles.css` ve `assets/js/main.js` içinde tutulur.

## Proje yapısı

```text
.
├── index.html
├── jslicense.html
├── LICENSE
├── ChangeLog
├── README.md
├── README.tr.md
└── assets
    ├── css
    │   └── styles.css
    └── js
        └── main.js
```

## Geliştirme notları

Site anlamsal HTML, Bootstrap yerleşim araçları ve [assets/css/styles.css](assets/css/styles.css) içindeki küçük bir özel stil dosyası kullanır. [assets/js/main.js](assets/js/main.js) içindeki JavaScript şu anda tek bir etkileşimi yönetir: bir gezinme bağlantısı seçildikten sonra duyarlı gezinme menüsünü kapatır.

Sayfayı güncellerken:

1. Proje adını **Universal Massive File System (UMFS)** olarak koruyun.
2. Mimari, performans, birlikte çalışabilirlik ve dağıtım hakkındaki ifadeleri gerçek UMFS kaynak koduyla ve belgeleriyle uyumlu tutun.
3. Telif hakkı veya lisans koşulları resmen değişmedikçe mevcut AGPL-3.0-or-later bildirimlerini koruyun.
4. Kullanıcıya görünen değişiklikleri `ChangeLog` dosyasına kaydedin.
5. Yerleşim veya içerik değişikliklerinden sonra sayfayı masaüstü ve mobil genişliklerde kontrol edin.

## Lisans

Copyright (C) 2026-2027 UMFS Authors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

Web sitesi altbilgisi; orijinal GNU AGPL-3.0-or-later metnine, JavaScript kaynak kodunu gömülü olarak sunan LibreJS sayfasına (`jslicense.html`) ve [kaynak koda](https://codeberg.org/umfstr/webfs) bağlantı verir.
