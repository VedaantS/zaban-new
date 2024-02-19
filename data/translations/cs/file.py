import json
import datetime
import time
import re, string; pattern = re.compile('[\W_]+')
dic = [
    {
      "main": "V chaloupce spolu žili dědeček, babička a vnučka.",
      "uk": "Жили собі разом в хатинці дідусь, бабуся та онука.",
      "start_cs": 13.971,
      "end_cs": 19.383,
      "start_uk": 14.021,
      "end_uk": 19.208
    },
    {
      "main": "Měli malé pole a několik zvířat – husy, králíky, slepice, pejska, kočku a myšku.",
      "uk": "Було у них невелике поле і кілька домашніх тварин – гуси, кролики, кури, песик, кішка та мишка.",
      "start_cs": 19.383,
      "end_cs": 28.746,
      "start_uk": 19.208,
      "end_uk": 28.358
    },
    {
      "main": "Jednoho dne šel dědeček na pole, udělal jamku a do ní zasel řepu.",
      "uk": "Одного разу дідусь пішов у поле, зробив ямку і посіяв у неї ріпку.",
      "start_cs": 28.746,
      "end_cs": 35.096,
      "start_uk": 28.358,
      "end_uk": 34.796
    },
    {
      "main": "Dobře se o ni staral a zaléval ji.",
      "uk": "Дбайливо доглядав її та поливав.",
      "start_cs": 35.096,
      "end_cs": 39.383,
      "start_uk": 34.796,
      "end_uk": 38.796
    },
    {
      "main": "Řepa rychle rostla. Až vyrostla veliká jako půl pole, bylo potřeba ji vytáhnout.",
      "uk": "Ріпка швидко росла. Коли вона стала завбільшки з півполя, треба було її висмикнути.",
      "start_cs": 39.383,
      "end_cs": 47.458,
      "start_uk": 38.796,
      "end_uk": 46.996
    },
    {
      "main": "Dědeček to zpočátku zkoušel sám. Chytil se řepy. Táhl, táhl, ale nevytáhl ji.",
      "uk": "Дідусь спочатку спробував сам. Вхопив ріпку. Тягнув, тягнув, але не витягнув.",
      "start_cs": 47.458,
      "end_cs": 57.833,
      "start_uk": 46.996,
      "end_uk": 56.146
    },
    {
      "main": "Zavolal na pomoc babičku. Babička se chytla dědečka a dědeček řepy. Táhli, táhli, ale řepu nevytáhli.",
      "uk": "Покликав на допомогу бабусю. Бабуся вхопилася за дідуся, а дідусь за ріпку. Тягнули, тягнули, але ріпку не витягли.",
      "start_cs": 57.833,
      "end_cs": 69.146,
      "start_uk": 56.146,
      "end_uk": 67.708
    },
    {
      "main": "Babička zavolala vnučku. Vnučka se chytla babičky, babička dědečka a dědeček řepy. Táhli, táhli, ale řepu nevytáhli.",
      "uk": "Бабуся покликала онуку. Онука вхопилася за бабусю, бабуся за дідуся, дідусь за ріпку. Тягнули, тягнули, але ріпку не витягли.",
      "start_cs": 69.146,
      "end_cs": 81.721,
      "start_uk": 67.708,
      "end_uk": 80.358
    },
    {
      "main": "Vnučka zavolala pejska. Pejsek se chytl vnučky, vnučka babičky, babička dědečka a dědeček řepy. Táhli, táhli, ale vytáhnout nemohli.",
      "uk": "Онука покликала песика. Песик вхопився за онуку, онука за бабусю, бабуся за дідуся, дідусь за ріпку. Тягнули, тягнули, але не витягли.",
      "start_cs": 81.721,
      "end_cs": 95.546,
      "start_uk": 80.358,
      "end_uk": 93.733
    },
    {
      "main": "Pejsek zavolal na kočičku. Kočička se chytla pejska, pejsek vnučky, vnučka babičky, babička dědečka a dědeček řepy. Táhli, táhli, ale řepu nevytáhli.",
      "uk": "Песик покликав кішку. Кішка вхопилася за песика, песик за онуку, онука за бабусю, бабуся за дідуся, дідусь за ріпку. Тягнули, тягнули, але ріпку не витягли.",
      "start_cs": 95.546,
      "end_cs": 110.783,
      "start_uk": 93.733,
      "end_uk": 108.833
    },
    {
      "main": "Kočička zavolala myšku. Myška chytla kočičku, kočička pejska, pejsek vnučku, vnučka babičku, babička dědečka a dědeček řepu. Táhli, táhli -  a najednou byla řepa venku!",
      "uk": "Кішка покликала мишку. Мишка вхопилася за кішку, кішка за песика, песик за онуку, онука за бабусю, бабуся за дідуся, дідусь за ріпку. Тягнули, тягнули аж раптом ріпка вилізла! ",
      "start_cs": 110.783,
      "end_cs": 127.233,
      "start_uk": 108.833,
      "end_uk": 125.296
    },
    {
      "main": "Všichni spadli na jednu hromadu. Řepa na dědečka, dědeček na babičku, babička na vnučku, vnučka na pejska, pejsek na kočičku a kočička na zem.",
      "uk": "Всі попадали в одну купу. Ріпка на дідуся, дідусь на бабусю, бабуся на онуку, онука на песика, песик на кішку, а кішка на землю.",
      "start_cs": 127.233,
      "end_cs": 140.221,
      "start_uk": 125.296,
      "end_uk": 137.383
    },
    {
      "main": "Myška stihla rychle utéct a schovat se.",
      "uk": "Мишці вдалося швидко втекти та сховатися.",
      "start_cs": 140.221,
      "end_cs": 144.733,
      "start_uk": 137.383,
      "end_uk": 141.833
    },
        {
      "main": "Myška stihla rychle utéct a schovat se.",
      "uk": "Мишці вдалося швидко втекти та сховатися.",
      "start_cs": 140.221,
      "end_cs": 144.733,
      "start_uk": 137.383,
      "end_uk": 141.833
    },
    {
      "main": "Myška stihla rychle utéct a schovat se.",
      "uk": "Мишці вдалося швидко втекти та сховатися.",
      "start_cs": 140.221,
      "end_cs": 144.733,
      "start_uk": 137.383,
      "end_uk": 141.833
    },
    {
      "main": "Myška stihla rychle utéct a schovat se.",
      "uk": "Мишці вдалося швидко втекти та сховатися.",
      "start_cs": 140.221,
      "end_cs": 144.733,
      "start_uk": 137.383,
      "end_uk": 141.833
    },
    {
      "main": "Myška stihla rychle utéct a schovat se.",
      "uk": "Мишці вдалося швидко втекти та сховатися.",
      "start_cs": 140.221,
      "end_cs": 144.733,
      "start_uk": 137.383,
      "end_uk": 141.833
    },
    {
      "main": "Myška stihla rychle utéct a schovat se.",
      "uk": "Мишці вдалося швидко втекти та сховатися.",
      "start_cs": 140.221,
      "end_cs": 144.733,
      "start_uk": 137.383,
      "end_uk": 141.833
    },
    {
      "main": "Myška stihla rychle utéct a schovat se.",
      "uk": "Мишці вдалося швидко втекти та сховатися.",
      "start_cs": 140.221,
      "end_cs": 144.733,
      "start_uk": 137.383,
      "end_uk": 141.833
    }

  ]

lines = [i.strip() for i in open("file.txt").readlines()]
lines2 = [i.strip() for i in open("file2.txt").readlines()]
lines3 = open("file3.txt").read().split("\n\n")
lines4 = open("file4.txt").read().split("\n\n")

ts_old = 0
ts_new = 0

ts_old_en = 0
ts_new_en = 0


for i in dic:
    wrd = lines2[0].split(" ")[-1]
    for k, j in enumerate(lines3):
        if j.endswith(wrd):
            ts = j.split(" --> ")[1].split("\n")[0]
            t = time.strptime(ts,'%H:%M:%S.%f')
            ts_new = datetime.timedelta(hours=t.tm_hour,minutes=t.tm_min,seconds=t.tm_sec).total_seconds()
            lines3 = lines3[k+1:]
            break
    
    wrd = lines[0].split(" ")[-1]
    for k, j in enumerate(lines4):
        if j.endswith(wrd):
            ts = j.split(" --> ")[1].split("\n")[0]
            t = time.strptime(ts,'%H:%M:%S.%f')
            ts_new_en = datetime.timedelta(hours=t.tm_hour,minutes=t.tm_min,seconds=t.tm_sec).total_seconds()
            lines4 = lines4[k+1:]
            break


    i['main'] = lines[0]
    i['uk'] = lines2[0]
    i['start_uk'] = ts_old
    i['end_uk'] = ts_new
    i['start_cs'] = ts_old_en
    i['end_cs'] = ts_new_en

    lines = lines[1:]
    lines2 = lines2[1:]
    ts_old = ts_new
    ts_old_en = ts_new_en

print(json.dumps(dic, indent=4, ensure_ascii=False))