import React, { createContext } from 'react'

const RecitersExtraDetails = createContext()

function ReciterExtraDetailsContext({children}) {


    const ReciterExtraDetails = ([
        {
            id: 49,
            img: 'https://www.flyharam.com/wp-content/uploads/2019/08/AbdulBari-ath-Thubaity.jpg',
            arabicName: 'عبدالبارئ الثبيتي'
        },
        {
            id: 55,
            img: 'http://www.assajda.com/media/person/square/abdel-aziz-al-ahmed.jpg',
            arabicName: 'عبد العزيز الأحمد'
        },
        {
            id: 263,
            img: 'https://i.postimg.cc/prH7r6b0/quran.jpg',
            arabicName: 'عبد العزيز عسيري'
        },
        {
            id: 282,
            img: 'https://i.postimg.cc/prH7r6b0/quran.jpg',
            arabicName: 'عبد العزيز آل تركي'
        },
        {
            id: 56,
            img: 'https://alqurrafoundation.com/wp-content/uploads/2020/11/Shaykh-Abdul-Aziz-al-Zahrani-500x433.jpg',
            arabicName: 'عبدالعزيز الزهراني'
        },
        {
            id: 169,
            img: 'http://www.assabile.com/media/person/200x256/abdul-bari-mohamed.png',
            arabicName: 'عبد البارئ محمد'
        },
        {
            id: 50,
            img: 'http://www.assabile.com/media/person/200x256/abdul-bari-mohamed.png',
            arabicName: 'عبد البارئ محمد'
        },
        {
            id: 52,
            img: 'https://i1.sndcdn.com/artworks-7JEImlWbkMfQWvzS-CzzmpQ-t500x500.jpg',
            arabicName: 'عبـدُ الباسِـط مُحـمّـد عبـدُ ٱلصّـمـد'
        },
        {
            id: 51,
            img: 'https://i1.sndcdn.com/artworks-7JEImlWbkMfQWvzS-CzzmpQ-t500x500.jpg',
            arabicName: 'عبـدُ الباسِـط مُحـمّـد عبـدُ ٱلصّـمـد'
        },
        {
            id: 53,
            img: 'https://i1.sndcdn.com/artworks-7JEImlWbkMfQWvzS-CzzmpQ-t500x500.jpg',
            arabicName: 'عبـدُ الباسِـط مُحـمّـد عبـدُ ٱلصّـمـد'
        },
        {
            id: 188,
            img: 'https://i.postimg.cc/prH7r6b0/quran.jpg',
            arabicName: 'القرآن الكريم'
        },
        {
            id: 70,
            img: 'http://www.assabile.com/media/person/200x256/abdulhadi-kanakeri.png',
            arabicName: 'عبد الهادي كناكري'
        },
        {
            id: 284,
            img: 'https://i.postimg.cc/prH7r6b0/quran.jpg',
            arabicName: 'القرآن الكريم'
        },
        {
            id: 57,
            img: 'https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D9%85%D9%8A.jpg',
            arabicName: 'عبدالله البريمي'
        },
        {
            id: 62,
            img: 'https://scontent.fcok15-1.fna.fbcdn.net/v/t1.6435-9/89109218_4167188706640462_7719306989813104640_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=138onIsefKwAX-5yQIu&_nc_ht=scontent.fcok15-1.fna&oh=00_AT9QovaJbmhR17Qi9Ud8bO_9SYa7mYviC8B8Dj5FU6ogeA&oe=6273CC96',
            arabicName: 'عبد الله عواد الجهني'
        },
        {
            id: 202,
            img: 'https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D9%83%D9%86%D8%AF%D8%B1%D9%8A.jpg',
            arabicName: 'عبدالله الكندري'
        },
        {
            id: 244,
            img: 'https://tvquran.com/uploads/authors/images/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%84%D9%87%20%D8%AE%D9%84%D9%81.jpg',
            arabicName: 'عبد الله بن خلف بن أسعد'
        },
        {
            id: 59,
            img: 'https://static.suratmp3.com/pics/reciters/thumbs/60_160_160.jpg',
            arabicName: 'عبد الله مطرود'
        },
        {
            id: 243,
            img: 'https://image.winudf.com/v2/image1/Y29tLmd1cmFuLmFiZF9pY29uXzE2MTI0OTU3NjdfMDk2/icon.png?w=340&fakeurl=1',
            arabicName: 'عبد الله موسى'
        },
        {
            id: 286,
            img: 'https://image.winudf.com/v2/image1/Y29tLmd1cmFuLmFiZF9pY29uXzE2MTI0OTU3NjdfMDk2/icon.png?w=340&fakeurl=1',
            arabicName: 'عبد الله موسى'
        }
    ])

  return (
    <RecitersExtraDetails.Provider value={ReciterExtraDetails}>
        {children}
    </RecitersExtraDetails.Provider>
  )
}

export {ReciterExtraDetailsContext,RecitersExtraDetails}