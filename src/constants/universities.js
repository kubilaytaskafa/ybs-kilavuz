// --- 1. ADIM: Temel Ders Havuzu (Değişiklik Yok) ---
export const temelYBSDersleri = [
  "Yönetim Bilişim Sistemlerine Giriş",
  "Algoritma ve Programlamaya Giriş",
  "Genel İşletme",
  "Genel Muhasebe",
  "İktisada Giriş (Mikro/Makro)",
  "Temel Matematik ve İstatistik",
  "Nesne Yönelimli Programlama (Java/C#)",
  "Veri Tabanı Yönetim Sistemleri (SQL)",
  "Web Tabanlı Uygulama Geliştirme",
  "Veri Yapıları ve Algoritmalar",
  "Bilgisayar Ağları ve Güvenlik",
  "Mobil Uygulama Geliştirme",
  "Sistem Analizi ve Tasarımı",
  "Proje Yönetimi",
  "Veri Madenciliği ve İş Zekası",
  "Kurumsal Kaynak Planlama (ERP)",
  "Karar Destek Sistemleri",
  "Yöneylem Araştırması",
  "Bilişim Hukuku ve Etik",
  "Dijital Pazarlama ve E-Ticaret",
];

// --- 2. ADIM: Adresleri Güncellenmiş Üniversite Listesi ---
const detayliYBSListesi = [
  // ================= MARMARA BÖLGESİ =================
  {
    id: 1,
    universite: "Boğaziçi Üniversitesi",
    fakulte: "Yönetim Bilimleri Fakültesi",
    fakulte_adresi: "Hisar Kampüsü, Rumeli Hisarı Mah., 34470 Sarıyer/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri, "MIS 463 - Supply Chain Management"],
  },
  {
    id: 2,
    universite: "Marmara Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Recep Tayyip Erdoğan Külliyesi, Aydınevler Mah. 34854 Maltepe/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri, "YBS 444 - Büyük Veri Analitiği"],
  },
  {
    id: 3,
    universite: "Sakarya Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Esentepe Kampüsü, Kemalpaşa Mah. Üniversite Cad. 54050 Serdivan/Sakarya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri, "YBS 322 - İş Zekası"],
  },
  {
    id: 4,
    universite: "İstanbul Üniversitesi",
    fakulte: "İktisat Fakültesi",
    fakulte_adresi: "Beyazıt Kampüsü, 34452 Fatih/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri, "YBS 314 - Yapay Zeka"],
  },
  {
    id: 5,
    universite: "Yıldız Teknik Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Davutpaşa Kampüsü, Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. 34220 Esenler/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 6,
    universite: "Yeditepe Üniversitesi",
    fakulte: "Ticari Bilimler Fakültesi",
    fakulte_adresi:
      "26 Ağustos Yerleşimi, İnönü Mah. Kayışdağı Cad. 34755 Ataşehir/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri, "YBS 434 - Oyun Geliştirme"],
  },
  {
    id: 7,
    universite: "Özyeğin Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Çekmeköy Kampüsü, Nişantepe Mah. Orman Sok. No:34-36, 34794 Çekmeköy/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 8,
    universite: "İstanbul Bilgi Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Santralistanbul Kampüsü, Emniyettepe Mah. Kazım Karabekir Cad. No:2/13, 34060 Eyüpsultan/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 9,
    universite: "Kadir Has Üniversitesi",
    fakulte: "Yönetim Bilimleri Fakültesi",
    fakulte_adresi:
      "Cibali Kampüsü, Cibali Mah. Kadir Has Cad. 34083 Fatih/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 10,
    universite: "İstanbul Medipol Üniversitesi",
    fakulte: "İşletme ve Yönetim Bilimleri Fakültesi",
    fakulte_adresi:
      "Kavacık Güney Yerleşkesi, Göztepe Mah. Atatürk Cad. No:40, 34810 Beykoz/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 11,
    universite: "Beykent Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Ayazağa - Maslak Yerleşkesi, Ayazağa Mah. Hadımkoru Yolu Cad. No:19, 34396 Sarıyer/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 12,
    universite: "İstanbul Aydın Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Halit Aydın Yerleşkesi, Beşyol Mah. İnönü Cad. No:38, 34295 Küçükçekmece/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 13,
    universite: "Bursa Uludağ Üniversitesi",
    fakulte: "İnegöl İşletme Fakültesi",
    fakulte_adresi:
      "Cerrah Mah. Kalburt Mevkii, 4004. Sk. No:2, 16400 İnegöl/Bursa",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 14,
    universite: "Kocaeli Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Umuttepe Yerleşkesi, Kabaoğlu Mah. Baki Komsuoğlu Bulvarı No:515, 41380 İzmit/Kocaeli",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 15,
    universite: "Bandırma Onyedi Eylül Üniversitesi",
    fakulte: "Ömer Seyfettin Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Merkez Yerleşke, Yeni Mah. Şehit Astsubay Mehmetçik Cad. No:77, 10200 Bandırma/Balıkesir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= İÇ ANADOLU BÖLGESİ =================
  {
    id: 16,
    universite: "Gazi Üniversitesi",
    fakulte: "Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Emniyet Mah. Abant 1 Cad. No:10/2C, 06560 Yenimahalle/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri, "YBS 315 - Veri Madenciliği"],
  },
  {
    id: 17,
    universite: "Ankara Yıldırım Beyazıt Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi: "Esenboğa Külliyesi, Dumlupınar Mah. 06760 Çubuk/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 18,
    universite: "Başkent Üniversitesi",
    fakulte: "Ticari Bilimler Fakültesi",
    fakulte_adresi:
      "Bağlıca Kampüsü, Fatih Sultan Mah. Eskişehir Yolu 18.km, 06790 Etimesgut/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 19,
    universite: "Atılım Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi: "Kızılcaşar Mah. İncek Bulvarı No:5, 06830 Gölbaşı/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 20,
    universite: "Anadolu Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Yunus Emre Kampüsü, Yeşiltepe Mah. 26470 Tepebaşı/Eskişehir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 21,
    universite: "Eskişehir Osmangazi Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Meşelik Kampüsü, Büyükdere Mah. Prof. Dr. Nabi Avcı Bulvarı No:4, 26480 Odunpazarı/Eskişehir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 22,
    universite: "Selçuk Üniversitesi",
    fakulte: "Beyşehir Ali Akkanat İşletme Fakültesi",
    fakulte_adresi: "Dalyan Mah. 41604. Sok. No:2, 42700 Beyşehir/Konya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 23,
    universite: "Necmettin Erbakan Üniversitesi",
    fakulte: "Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Köyceğiz Yerleşkesi, Dere Aşıklar Mah. Demeç Sok. No:42, 42090 Meram/Konya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 24,
    universite: "KTO Karatay Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Akabe Mah. Alaaddin Kap Cad. No:130, 42020 Karatay/Konya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 25,
    universite: "Aksaray Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Bahçesaray Mah. Kampüs Yolu, 68100 Merkez/Aksaray",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 26,
    universite: "Sivas Cumhuriyet Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Kampüs Yerleşkesi, Kayseri Cad. 58140 Merkez/Sivas",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= EGE BÖLGESİ =================
  {
    id: 27,
    universite: "Dokuz Eylül Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Dokuzçeşmeler Kampüsü, Adatepe Mah. Doğuş Cad. No:207, 35160 Buca/İzmir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 28,
    universite: "İzmir Ekonomi Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi: "Sakarya Cad. No:156, 35330 Balçova/İzmir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 29,
    universite: "İzmir Bakırçay Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Gazi Mustafa Kemal Mah. Kaynaklar Cad. Seyrek Yerleşkesi, 35665 Menemen/İzmir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 30,
    universite: "Yaşar Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Selçuk Yaşar Kampüsü, Üniversite Cad. No:37-39, 35100 Bornova/İzmir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 31,
    universite: "Pamukkale Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Kınıklı Kampüsü, Çamlaraltı Mah. Üniversite Cad. No:11, 20070 Pamukkale/Denizli",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 32,
    universite: "Muğla Sıtkı Koçman Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Kötekli Kampüsü, 48000 Menteşe/Muğla",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 33,
    universite: "Aydın Adnan Menderes Üniversitesi",
    fakulte: "Söke İşletme Fakültesi",
    fakulte_adresi: "Yenicami Mah. Yüksel Yalova Cad. No:57, 09200 Söke/Aydın",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 34,
    universite: "Manisa Celal Bayar Üniversitesi",
    fakulte: "Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Şehit Prof. Dr. İlhan Varank Yerleşkesi, Muradiye Mah. 45140 Yunusemre/Manisa",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 35,
    universite: "Kütahya Dumlupınar Üniversitesi",
    fakulte: "Kütahya Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Evliya Çelebi Yerleşkesi, Tavşanlı Yolu 10.km, 43100 Merkez/Kütahya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= AKDENİZ BÖLGESİ =================
  {
    id: 36,
    universite: "Akdeniz Üniversitesi",
    fakulte: "Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Akdeniz Üniversitesi Kampüsü, Dumlupınar Bulvarı, 07058 Konyaaltı/Antalya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri, "YBS 315 - Mobil Programlama"],
  },
  {
    id: 37,
    universite: "Antalya Bilim Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Çıplaklı Mah. Akdeniz Bulvarı No:290, 07190 Döşemealtı/Antalya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 38,
    universite: "Burdur Mehmet Akif Ersoy Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "İstiklal Yerleşkesi, 15030 Merkez/Burdur",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 39,
    universite: "Adana Alparslan Türkeş Bilim ve Teknoloji Üni.",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi: "Balcalı Mah. Çatalan Cad. No:201/1, 01250 Sarıçam/Adana",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 40,
    universite: "Mersin Üniversitesi",
    fakulte: "Erdemli Uygulamalı Teknoloji ve İşletmecilik YO",
    fakulte_adresi: "Alata Mah. Erdemli Yerleşkesi, 33730 Erdemli/Mersin",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 41,
    universite: "Hatay Mustafa Kemal Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Tayfur Sökmen Kampüsü, 31060 Alahan/Antakya/Hatay",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 42,
    universite: "Osmaniye Korkut Ata Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Karacaoğlan Yerleşkesi, Fakıuşağı Mah. 80000 Merkez/Osmaniye",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 43,
    universite: "Isparta Uygulamalı Bilimler Üniversitesi",
    fakulte: "Büyükkutlu Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Yalvaç Kılıçarslan Yerleşkesi, Müderris Mah. 32400 Yalvaç/Isparta",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= KARADENİZ BÖLGESİ =================
  {
    id: 44,
    universite: "Karadeniz Teknik Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Kanuni Kampüsü, 61080 Ortahisar/Trabzon",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 45,
    universite: "Giresun Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Güre Yerleşkesi, Ahmet Taner Kışlalı Cad. 28200 Merkez/Giresun",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 46,
    universite: "Düzce Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi: "Konuralp Yerleşkesi, 81620 Merkez/Düzce",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 47,
    universite: "Bartın Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Ağdacı Kampüsü, 74100 Merkez/Bartın",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 48,
    universite: "Zonguldak Bülent Ecevit Üniversitesi",
    fakulte: "Uygulamalı Bilimler Yüksekokulu",
    fakulte_adresi: "Çaycuma Kampüsü, 67900 Çaycuma/Zonguldak",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 49,
    universite: "Kastamonu Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Kuzeykent Kampüsü, Orgel Cad. 37150 Merkez/Kastamonu",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 50,
    universite: "Tokat Gaziosmanpaşa Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Taşlıçiftlik Yerleşkesi, 60250 Merkez/Tokat",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 51,
    universite: "Ordu Üniversitesi",
    fakulte: "Ünye İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Gölevi Mah. Devlet Sahil Yolu Cad. 52300 Ünye/Ordu",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= DOĞU & GÜNEYDOĞU ANADOLU =================
  {
    id: 52,
    universite: "Atatürk Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Atatürk Üniversitesi Kampüsü, 25240 Yakutiye/Erzurum",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 53,
    universite: "Kafkas Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Paşaçayırı Kampüsü, 36100 Merkez/Kars",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 54,
    universite: "Gaziantep Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Merkez Kampüs, Üniversite Bulvarı, 27310 Şehitkamil/Gaziantep",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 55,
    universite: "Hasan Kalyoncu Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Yeşilkent Mah. Havalimanı Yolu 8.km, 27410 Şahinbey/Gaziantep",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 56,
    universite: "Gümüşhane Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Bağlarbaşı Mah. Gümüşhane Üni. Kampüsü, 29100 Merkez/Gümüşhane",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 57,
    universite: "Batman Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Batı Raman Kampüsü, 72060 Merkez/Batman",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= DİĞER ÖNEMLİ VAKIFLAR =================
  {
    id: 58,
    universite: "İstanbul Topkapı Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Kazlıçeşme Yerleşkesi, Kazlıçeşme Mah. Abay Cad. No:12, 34020 Zeytinburnu/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 59,
    universite: "İstanbul Gelişim Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Gelişim Tower, Cihangir Mah. Petrol Ofisi Cad. No:5, 34310 Avcılar/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 60,
    universite: "Ostim Teknik Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Ostim OSB Mah. 100. Yıl Bulvarı No:55, 06374 Yenimahalle/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 61,
    universite: "Ankara Bilim Üniversitesi",
    fakulte: "İnsan ve Toplum Bilimleri Fakültesi",
    fakulte_adresi:
      "Merkez Kampüs, Çamlıca Mah. Anadolu Bulvarı No:16A, 06200 Yenimahalle/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 62,
    universite: "Konya Gıda ve Tarım Üniversitesi",
    fakulte: "Sosyal ve Beşeri Bilimler Fakültesi",
    fakulte_adresi: "Melikşah Mah. Beyşehir Cad. No:9, 42080 Meram/Konya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 63,
    universite: "Uşak Üniversitesi",
    fakulte: "Uygulamalı Bilimler Fakültesi",
    fakulte_adresi: "Bir Eylül Kampüsü, İzmir Yolu 8.km, 64200 Merkez/Uşak",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 64,
    universite: "Kırıkkale Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Merkez Yerleşke, Ankara Yolu 7. Km, 71450 Yahşihan/Kırıkkale",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 65,
    universite: "İstanbul Ticaret Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Sütlüce Yerleşkesi, Örnektepe Mah. İmrahor Cad. No:88/2, 34445 Beyoğlu/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
];

const kalanYBSDersleri = [
  // ================= MARMARA & TRAKYA (Kalanlar) =================
  {
    id: 66,
    universite: "Trakya Üniversitesi",
    fakulte: "Uygulamalı Bilimler Fakültesi",
    fakulte_adresi:
      "Ayşekadın Yerleşkesi, Talatpaşa Asfaltı, 22030 Merkez/Edirne",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 67,
    universite: "Çanakkale Onsekiz Mart Üniversitesi",
    fakulte: "Biga İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Ağaköy Kampüsü, Kıbrıs Şehitleri Cad. 17200 Biga/Çanakkale",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 68,
    universite: "Kırklareli Üniversitesi",
    fakulte: "Uygulamalı Bilimler Fakültesi",
    fakulte_adresi: "Kayalı Kampüsü, 39100 Merkez/Kırklareli",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 69,
    universite: "Bilecik Şeyh Edebali Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Gülümbe Kampüsü, İstanbul-Eskişehir Yolu, 11230 Merkez/Bilecik",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= İSTANBUL VAKIF (Kalanlar) =================
  {
    id: 70,
    universite: "İstanbul Nişantaşı Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "NeoTech Kampüs, Maslak Mah. Taşyoncası Sok. No: 1V ve No:1Y, 34398 Sarıyer/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 71,
    universite: "İstanbul Arel Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Kemal Gözükara Yerleşkesi, Türkoba Mah. Erguvan Sk. No:26, 34537 Tepekent-Büyükçekmece/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 72,
    universite: "Doğuş Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Dudullu Yerleşkesi, Esenkent Mah. Nato Yolu Cad. No:265, 34775 Ümraniye/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 73,
    universite: "Işık Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Şile Kampüsü, Meşrutiyet Mah. Üniversite Sok. No:2, 34980 Şile/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 74,
    universite: "Maltepe Üniversitesi",
    fakulte: "İşletme ve Yönetim Bilimleri Fakültesi",
    fakulte_adresi: "Marmara Eğitim Köyü, 34857 Maltepe/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 75,
    universite: "Üsküdar Üniversitesi",
    fakulte: "Mühendislik ve Doğa Bilimleri Fakültesi",
    fakulte_adresi:
      "Merkez Yerleşke, Altunizade Mah. Haluk Türksoy Sk. No:14, 34662 Üsküdar/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 76,
    universite: "Altınbaş Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Gayrettepe Yerleşkesi, Büyükdere Cad. No:147 Esentepe, 34394 Şişli/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 77,
    universite: "Fenerbahçe Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Metropol İstanbul, Atatürk Mah. Ataşehir Bulvarı, 34758 Ataşehir/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 78,
    universite: "Haliç Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "5. Levent Kampüsü, Güzeltepe Mah. 15 Temmuz Şehitler Cad. No:14/12, 34060 Eyüpsultan/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 79,
    universite: "Biruni Üniversitesi",
    fakulte: "Mühendislik ve Doğa Bilimleri Fakültesi",
    fakulte_adresi:
      "Merkez Kampüs, Kazlıçeşme Mah. 10. Yıl Cad. Protokol Yolu No:45, 34010 Zeytinburnu/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 80,
    universite: "Piri Reis Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Tuzla Sahil Kampüsü, Postane Mah. Eflatun Sk. No:8, 34940 Tuzla/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 81,
    universite: "İstanbul Esenyurt Üniversitesi",
    fakulte: "İşletme ve Yönetim Bilimleri Fakültesi",
    fakulte_adresi:
      "Zafer Mah. Adile Naşit Bulvarı No:1, 34513 Esenyurt/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 82,
    universite: "İstanbul Kent Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Taksim Kampüsü, Cihangir Mah. Sıraselviler Cad. No:71, 34433 Beyoğlu/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 83,
    universite: "İstanbul Rumeli Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Mehmet Balcı Yerleşkesi, Yeni Mah. Mehmet Silivrili Cad. No:38, 34570 Silivri/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 84,
    universite: "İstanbul Atlas Üniversitesi",
    fakulte: "İnsan ve Toplum Bilimleri Fakültesi",
    fakulte_adresi:
      "Vadi Kampüs, Hamidiye Mah. Anadolu Cad. No:40, 34408 Kağıthane/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 85,
    universite: "İstanbul Gedik Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Kartal Yerleşkesi, Cumhuriyet Mah. E-5 Yanyol No:29, 34876 Kartal/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 86,
    universite: "İstanbul Yeni Yüzyıl Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Dr. Azmi Ofluoğlu Yerleşkesi, Maltepe Mah. Yılanlı Ayazma Cad. No:26, 34010 Cevizlibağ/Zeytinburnu/İstanbul",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= İÇ ANADOLU & KARADENİZ (Gelişmekte Olanlar) =================
  {
    id: 87,
    universite: "Nevşehir Hacı Bektaş Veli Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "2000 Evler Mah. Zübeyde Hanım Cad. No:111/1, 50300 Merkez/Nevşehir",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 88,
    universite: "Niğde Ömer Halisdemir Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Merkez Yerleşke, Bor Yolu Üzeri, 51240 Merkez/Niğde",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 89,
    universite: "Karamanoğlu Mehmetbey Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Yunus Emre Yerleşkesi, İbrahim Hakkı Konyalı Mah. 70100 Merkez/Karaman",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 90,
    universite: "Yozgat Bozok Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Erdoğan Akdağ Kampüsü, Atatürk Yolu 7.km, 66100 Merkez/Yozgat",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 91,
    universite: "Çankırı Karatekin Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Uluyazı Kampüsü, Kastamonu Yolu 10.km, 18100 Merkez/Çankırı",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 92,
    universite: "Hitit Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Kuzey Kampüsü, Çevre Yolu Bulvarı, 19030 Merkez/Çorum",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 93,
    universite: "Amasya Üniversitesi",
    fakulte: "Merzifon İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Merzifon Yerleşkesi, Hacı Hasan Mah. Paşa Sk. 05300 Merzifon/Amasya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 94,
    universite: "Sinop Üniversitesi",
    fakulte: "Boyabat İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Esentepe Mah. Fakülte Cad. No:8, 57200 Boyabat/Sinop",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 95,
    universite: "Artvin Çoruh Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi:
      "Hopa Yerleşkesi, Sundura Mah. Lise Cad. No:61, 08600 Hopa/Artvin",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 96,
    universite: "Bayburt Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Babasultan Yerleşkesi, İmaret Tepe Mevkii, 69000 Merkez/Bayburt",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 97,
    universite: "Erzincan Binali Yıldırım Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Yalnızbağ Yerleşkesi, 24100 Merkez/Erzincan",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= DİĞER VAKIFLAR (Anadolu & Akdeniz) =================
  {
    id: 98,
    universite: "Çankaya Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Merkez Kampüs, Yukarıyurtçu Mah. Mimar Sinan Cad. No:4, 06790 Etimesgut/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 99,
    universite: "Lokman Hekim Üniversitesi",
    fakulte: "Sağlık Bilimleri Fakültesi",
    fakulte_adresi: "Söğütözü Mah. 2179. Cad. No:6, 06510 Çankaya/Ankara",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 100,
    universite: "Toros Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi:
      "Bahçelievler Kampüsü, 1857 Sok. No:12, 33140 Yenişehir/Mersin",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 101,
    universite: "Çağ Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Adana-Mersin Karayolu Üzeri, Yaşar Bayboğan Kampüsü, 33800 Yenice/Tarsus/Mersin",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 102,
    universite: "Avrasya Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Pelitli Yerleşkesi, Rize Cad. No:224, 61080 Yomra/Trabzon",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 103,
    universite: "Antalya Akev Üniversitesi",
    fakulte: "İktisadi, İdari ve Sosyal Bilimler Fakültesi",
    fakulte_adresi: "Kadriye Mah. Celal Bayar Cad. No:5-6, 07525 Serik/Antalya",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= DOĞU & GÜNEYDOĞU (Gelişmekte Olanlar) =================
  {
    id: 104,
    universite: "Adıyaman Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Altınşehir Mah. 3005 Sok. No:13, 02040 Merkez/Adıyaman",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 105,
    universite: "Harran Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Osmanbey Yerleşkesi, Mardin Yolu 18.km, 63300 Haliliye/Şanlıurfa",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 106,
    universite: "Dicle Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Dicle Üniversitesi Kampüsü, 21280 Sur/Diyarbakır",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 107,
    universite: "Van Yüzüncü Yıl Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Zeve Kampüsü, 65080 Tuşba/Van",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 108,
    universite: "Mardin Artuklu Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Artuklu Yerleşkesi, Diyarbakır Yolu 5.km, 47200 Artuklu/Mardin",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 109,
    universite: "Ağrı İbrahim Çeçen Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Erzurum Yolu 4. Km, Kampüs, 04100 Merkez/Ağrı",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 110,
    universite: "Kilis 7 Aralık Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi:
      "Mehmet Sanlı Mah. Doğan Güreş Paşa Bulv. No:134, 79000 Merkez/Kilis",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },

  // ================= KKTC (KIBRIS) ÜNİVERSİTELERİ =================
  {
    id: 111,
    universite: "Doğu Akdeniz Üniversitesi",
    fakulte: "İşletme ve Ekonomi Fakültesi",
    fakulte_adresi: "Doğu Akdeniz Üniversitesi Kampüsü, 99628 Gazimağusa, KKTC",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 112,
    universite: "Lefke Avrupa Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Lefke Avrupa Üniversitesi Kampüsü, 99780 Lefke, KKTC",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 113,
    universite: "Uluslararası Kıbrıs Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Haspolat Yerleşkesi, 99258 Lefkoşa, KKTC",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 114,
    universite: "Yakın Doğu Üniversitesi",
    fakulte: "İktisadi ve İdari Bilimler Fakültesi",
    fakulte_adresi: "Yakın Doğu Bulvarı, 99138 Lefkoşa, KKTC",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
  {
    id: 115,
    universite: "Girne Amerikan Üniversitesi",
    fakulte: "İşletme Fakültesi",
    fakulte_adresi: "Üniversite Yolu Sk, Karmi Kampüsü, 99428 Girne, KKTC",
    bolum: "Yönetim Bilişim Sistemleri",
    dersler: [...temelYBSDersleri],
  },
];

// Listeleri birleştir
export const tumTurkiyeYBS = [...detayliYBSListesi, ...kalanYBSDersleri];

console.log(`Toplam Üniversite Sayısı: ${tumTurkiyeYBS.length}`);
