import React, { createContext } from "react";

const RecitersExtraDetails = createContext();

function ReciterExtraDetailsContext({ children }) {
  const ReciterExtraDetails = [
    {
      id: 49,
      img: "https://www.flyharam.com/wp-content/uploads/2019/08/AbdulBari-ath-Thubaity.jpg",
      arabicName: "عبدالبارئ الثبيتي",
    },
    {
      id: 55,
      img: "https://i.postimg.cc/8k6ZbRVj/abdel-aziz-al-ahmed.jpg",
      arabicName: "عبد العزيز الأحمد",
    },
    {
      id: 263,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "عبد العزيز عسيري",
    },
    {
      id: 282,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "عبد العزيز آل تركي",
    },
    {
      id: 56,
      img: "https://alqurrafoundation.com/wp-content/uploads/2020/11/Shaykh-Abdul-Aziz-al-Zahrani-500x433.jpg",
      arabicName: "عبدالعزيز الزهراني",
    },
    {
      id: 169,
      img: "http://www.assabile.com/media/person/200x256/abdul-bari-mohamed.png",
      arabicName: "عبد البارئ محمد",
    },
    {
      id: 50,
      img: "http://www.assabile.com/media/person/200x256/abdul-bari-mohamed.png",
      arabicName: "عبد البارئ محمد",
    },
    {
      id: 52,
      img: "https://i1.sndcdn.com/artworks-7JEImlWbkMfQWvzS-CzzmpQ-t500x500.jpg",
      arabicName: "عبـدُ الباسِـط مُحـمّـد عبـدُ ٱلصّـمـد",
    },
    {
      id: 51,
      img: "https://i1.sndcdn.com/artworks-7JEImlWbkMfQWvzS-CzzmpQ-t500x500.jpg",
      arabicName: "عبـدُ الباسِـط مُحـمّـد عبـدُ ٱلصّـمـد",
    },
    {
      id: 53,
      img: "https://i1.sndcdn.com/artworks-7JEImlWbkMfQWvzS-CzzmpQ-t500x500.jpg",
      arabicName: "عبـدُ الباسِـط مُحـمّـد عبـدُ ٱلصّـمـد",
    },
    {
      id: 136,
      img: "https://i.postimg.cc/dQX1CR0D/Screenshot-2022-04-06-at-3-41-12-PM.png",
      arabicName: "القرآن الكريم",
    },
    {
      id: 188,
      img: "http://www.assabile.com/media/person/280x219/abdulghani-abdullah.png",
      arabicName: "عبدالغني عبدالله",
    },
    {
      id: 70,
      img: "http://www.assabile.com/media/person/200x256/abdulhadi-kanakeri.png",
      arabicName: "عبد الهادي كناكري",
    },
    {
      id: 284,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 57,
      img: "http://www.assabile.com/media/person/280x219/abdullah-al-buraimi.png",
      arabicName: "عبدالله البريمي",
    },
    {
      id: 62,
      img: "https://scontent.fcok15-1.fna.fbcdn.net/v/t1.6435-9/89109218_4167188706640462_7719306989813104640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=138onIsefKwAX-5yQIu&_nc_ht=scontent.fcok15-1.fna&oh=00_AT9QovaJbmhR17Qi9Ud8bO_9SYa7mYviC8B8Dj5FU6ogeA&oe=6273CC96",
      arabicName: "عبد الله عواد الجهني",
    },
    {
      id: 202,
      img: "https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D9%83%D9%86%D8%AF%D8%B1%D9%8A.jpg",
      arabicName: "عبدالله الكندري",
    },
    {
      id: 244,
      img: "https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%84%D9%87%20%D8%AE%D9%84%D9%81.jpg",
      arabicName: "عبد الله بن خلف بن أسعد",
    },
    {
      id: 59,
      img: "https://static.suratmp3.com/pics/reciters/thumbs/60_160_160.jpg",
      arabicName: "عبد الله مطرود",
    },
    {
      id: 243,
      img: "https://image.winudf.com/v2/image1/Y29tLmd1cmFuLmFiZF9pY29uXzE2MTI0OTU3NjdfMDk2/icon.png?w=340&fakeurl=1",
      arabicName: "عبد الله موسى",
    },
    {
      id: 286,
      img: "https://image.winudf.com/v2/image1/Y29tLmd1cmFuLmFiZF9pY29uXzE2MTI0OTU3NjdfMDk2/icon.png?w=340&fakeurl=1",
      arabicName: "عبد الله موسى",
    },
    {
      id: 58,
      img: "https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D8%A8%D8%B9%D9%8A%D8%AC%D8%A7%D9%86.jpg",
      arabicName: "عبدالله البعيجان",
    },
    {
      id: 60,
      img: "https://maeeshat.in/wp-content/uploads/2021/05/Quran-reciter-Sheikh-Abdullah-Basfar.jpg",
      arabicName: "عبد الله بن علي بصفر",
    },
    {
      id: 281,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 189,
      img: "http://www.assabile.com/media/person/280x219/abdullah-fahmi.png",
      arabicName: "عبدالله فهمي",
    },
    {
      id: 267,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 61,
      img: "http://www.assabile.com/media/person/280x219/usama-bin-abdullah-al-khayyat.jpg",
      arabicName: "أسامة بن عبد الله خياط",
    },
    {
      id: 63,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 228,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 67,
      img: "http://www.assabile.com/media/person/200x256/abdulmohsen-al-qasim.png",
      arabicName: "عبد المحسن القاسم",
    },
    {
      id: 68,
      img: "http://www.assabile.com/media/person/280x219/abdulmohsin-al-askar.png",
      arabicName: "عبدالمحسن العسكر",
    },
    {
      id: 66,
      img: "http://www.assabile.com/media/person/280x219/abdulmohsen-al-harthy.png",
      arabicName: "عبد المحسن الحارثي",
    },
    {
      id: 69,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 236,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 225,
      img: "http://www.assabile.com/media/person/280x219/abdelrahman-jamal-aloosi.jpg",
      arabicName: "عبد الرحمن جمال العوسي ",
    },
    {
      id: 54,
      img: "https://i.postimg.cc/SKgvwkZR/sudais-Img.png",
      arabicName: "عَبْدُ ٱلرَّحْمَٰنِ بْنُ عَبْدِ ٱلْعَزِيزِ ٱلسُّدَيْسِ",
    },
    {
      id: 135,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 65,
      img: "http://www.assabile.com/media/person/200x256/abdul-rashid-ali-sufi.png",
      arabicName: "عبد الرشيد علي صوفي",
    },
    {
      id: 258,
      img: "http://www.assabile.com/media/person/200x256/abdul-rashid-ali-sufi.png",
      arabicName: "عبد الرشيد علي صوفي",
    },
    {
      id: 64,
      img: "http://www.assabile.com/media/person/200x256/abdul-rashid-ali-sufi.png",
      arabicName: "عبد الرشيد علي صوفي",
    },
    {
      id: 71,
      img: "http://www.assabile.com/media/person/280x219/abdul-wadud-haneef.png",
      arabicName: "عبد الودود حنيف",
    },
    {
      id: 72,
      img: "http://www.assabile.com/media/person/280x219/abdul-wali-al-arkani.png",
      arabicName: "عبد الولي الأركاني",
    },
    {
      id: 208,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "القرآن الكريم",
    },
    {
      id: 103,
      img: "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2019/06/maher-al-mueaqly.png&w=350&h=350",
      arabicName: "ماهر المعيقلي",
    },
    {
      id: 133,
      img: "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2019/06/maher-al-mueaqly.png&w=350&h=350",
      arabicName: "ماهر المعيقلي",
    },
    {
      id: 102,
      img: "https://www.islamicity.org/wp-content/plugins/blueprint-timthumb/timthumb.php?src=http://media.islamicity.org/wp-content/uploads/2019/06/maher-al-mueaqly.png&w=350&h=350",
      arabicName: "ماهر المعيقلي",
    },
    {
      id: 123,
      img: "https://i.postimg.cc/kGdZKGr3/Mishary-Img.jpg",
      arabicName: "مشاري بن راشد العفاسي",
    },
    {
      id: 124,
      img: "https://i.postimg.cc/kGdZKGr3/Mishary-Img.jpg",
      arabicName: "مشاري بن راشد العفاسي",
    },
    {
      id: 30,
      img: "https://i.scdn.co/image/ab67616d0000b273765b5c09e7a94ca061d96dcb",
      arabicName: "سعد الغامدي",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/cJRbXGQG/ahmed-al-ajmi.jpg",
      arabicName: "أحمد بن علي العجمي",
    },
    {
      id: 89,
      img: "https://static.qurancdn.com/images/reciters/4/hani-ar-rifai-profile.jpeg?v=1",
      arabicName: "هاني الرفاعي",
    },
    {
      id: 31,
      img: "https://i.pinimg.com/564x/41/75/00/4175004b89851b4d92d9ba543deba383.jpg",
      arabicName: "سعود بن ابراهيم بن محمد الشريم",
    },
    {
      id: 260,
      img: "https://i.postimg.cc/prH7r6b0/quran.jpg",
      arabicName: "عمر الدريويز",
    },
    {
      id: 112,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Elminshwey.jpg/220px-Elminshwey.jpg",
      arabicName: "مُحَـمّـد صِـدّيْـق المِـنـشَـاوي",
    },
    {
      id: 113,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Elminshwey.jpg/220px-Elminshwey.jpg",
      arabicName: "مُحَـمّـد صِـدّيْـق المِـنـشَـاوي",
    },
    {
      id: 114,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Elminshwey.jpg/220px-Elminshwey.jpg",
      arabicName: "مُحَـمّـد صِـدّيْـق المِـنـشَـاوي",
    },
    {
      id: 4,
      img: "https://tvquran.com/uploads/authors/images/%D8%B4%D9%8A%D8%AE%20%D8%A3%D8%A8%D9%88%20%D8%A8%D9%83%D8%B1%20%D8%A7%D9%84%D8%B4%D8%A7%D8%B7%D8%B1%D9%8A.jpg",
      arabicName: "أبو بكر الشاطري",
    },
    {
      id: 106,
      img: "http://en.quran.com.kw/wp-content/uploads/altablawy.jpg",
      arabicName: "محمد الطبلاوي",
    },
    {
      id: 231,
      img: "https://i.scdn.co/image/ab6761610000e5ebe08dc8ea5cf98a8a96db795c",
      arabicName: "هزاع البلوشي",
    },
  ];

  return (
    <RecitersExtraDetails.Provider value={ReciterExtraDetails}>
      {children}
    </RecitersExtraDetails.Provider>
  );
}

export { ReciterExtraDetailsContext, RecitersExtraDetails };
