## Vef2-2024-h2

Þetta er hópverkefni 2 í vefforitun 2 vor önn 2024.
Verkefnið er framendi ofaná bakenda sem var gerður í hópverkefni 1,
bakendinn er mjöf einnfaldur vefþjónn sem við náðum ekki allveg að klára
svo við þurfum að uppfæra hann. í grunninn er þetta einhverskonar "ámingarsíða"
hægt er að búa til verkefni sem þurfa að klárast á ákveðnum tíma, hugsað til að einfalda skipulag.
Bakendi var ókláraður og kemur verkefni hja öllum users upp sama hvað user er loggaður inn höfðum ekki tíma í að laga það
en flest öll önnur virkni ætti að vera í lagi fyrir utan myndavirkni þar sem hún var ekki til staðar í bakenda

###
yfirferð notið

Username: admin
Password: 123

### Nemendur

Gísli Már Guðmundsson
Ísak loftsson
Lilja Örk

## Vefsíðan

### Header

mjög einfaldur header með Titli hjá síðunni og nav til að komast á milli mismundani síða.
allar síður innihalda header líka 404.

### Footer

Footer með staðsetningu
Sama með header þá innihalda alla síður footer lika 404.

### Forsíðan

bara mjög einföld forsíða með href á næstu skref

### Verkefni

Hér er kallað í vefþjóninn og öll verkefni sótt með get method á bakenda og birt

#### Slug/id

ferð inn í ákveðið verkefni hægt að uppfæra og eyða með patch og delete gegnum bakenda

### Nýtt Verkefni

Hér er hægt að bæta við verkefnum gegnum post method í gegnum bakenda

### Flokkar 

Hér eru allir flokkar birtir með get request frá bakenda

#### Slug/id

ferð inn í ákveðið flokk hægt að uppfæra og eyða með patch og delete gegnum bakenda

### Notendur

Basic notenda síða ef þú ert ekki skráður inn tekið þig á innskráningu

### Innskráning

post request til að skrá inn user eða búa til user

### css

Gert með sass configureað í package.json 
margar sass skrár sem kallað er í frá globals.scss
þegar npm run sass er keyrt er allt í globas.scss skrifað í globals.css
