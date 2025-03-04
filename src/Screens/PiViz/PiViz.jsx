import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import piviz1 from '../../img/piViz19.png';

const PiViz = () => {
  return (
    <div className='box'>
      <Container>
        <Row>
          <Col md={8} className='paragraph'>
            <h4 className='title'>Mi a PI víz?</h4>
            <p className='description'>
              A víz az élet. Tiszta folyadék nélkül nem léteznénk. Ennek ellenére a mai nyugati világban kihasználjuk a
              vizeinket, mérgezzük azt. Ám a természet még mindig képes arra, hogy életben tartson minket, sőt,
              gyógyítson. A 60-as években a japán Nagoyai Egyetem kutatója, Shoi Yamashita professzor felfedezte, hogy
              az "élővíz", mely a növényekben található, biológiai és fizikai szempontból jelentősen különbözik az
              általánosan felhasznált ivó- és forrásvizektől, és nagyon hasonlít testünk saját sejtvízének
              összetételére. Kutatásai ezt követően arra irányultak, hogyan lehetséges az ivóvizet élő vízzé alakítani.
              Shoi Yamashita és Shinji Makino 1964-ben először állítottak elő egy olyan szerkezetet, ami a vizet az
              eredeti, élő állapotába képes visszaállítani. Ezt az élő vizet nevezzük PI víznek. A PI-folyadék nem
              mesterségesen előállított anyag és nem is új keletű csodaszer. A természetben élő összes szövetben
              találunk PI vizet, mivel ez az élővilág fő alkotóeleme. Szerkezeti felépítése tehát megegyezik a
              növényekben található víz szerkezetével.
            </p>
          </Col>
          <Col md={4}>
            <img src={piviz1} alt='Illustration of PI water concept' className='img-fluid rounded' />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className='card-title'>Mitől "élő" a Pivíz?</h5>
            <p className='description'>
              A víznek van élő (rendezett, tudatos) és holt (kaotikus) állapota, attól élő, hogy folyamatosan,
              rendezett, egységes állapotot tart fenn. A strukturált vizeknek megváltozik a felületi feszültsége,
              viszkozitása, dielektromos állandója, elektromos vezetőképessége. A szervezetben a mérhető biológiai,
              kémiai és fizikai folyamatokon kívül bioenergetikai folyamatok is zajlanak. Ha a PI vízen kívül másfajta
              folyadékot viszünk szervezetünkbe, akkor többletenergiát használunk fel arra, hogy a rendezetlen
              molekulákat a szervezetünk biológiai, fizikai és kémiai folyamatai számára felhasználható, “rendezett”
              molekulákká alakítsa. Minél egységesebb – tömörebb – a vízszerkezet, annál kevesebb energia-ráfordítással
              lehet beilleszteni egy meglévő rendszerbe. Minél „tragikusabb” emlékképekkel érkezik az élőbe egy
              beilleszkedni vágyó vízszerkezet, annál nehezebb – ha nem lehetetlen – a beillesztése.
            </p>

            <h5 className='card-title'>A PI víz kedvező hatásai</h5>
            <p className='description'>
              Érdekes módon ugyanaz a folyadék, amely – az alap kémiai tulajdonságoktól eltérően – rossz szigetelő, jól
              vezető, kevésbé nedvesítő tulajdonságú, korlátozottan oldékony, az élő szervezetbe kerülve aktivizálja az
              élettevékenységet, fokozza az anyagcserét, javítja a közérzetet, kedvezően hat a vér és a sejtközötti
              állomány vízkészleteire. Segíti a sérült sejtek, szövetek regenerálódását. Javítja az élő test funkcióit:
              emésztést, kiválasztást, mozgást, növekedést, valamint erősíti az immunrendszert. Naponta mintegy 3 liter
              sejten belüli víz alakul újjá többé vagy kevésbé terhelt ivóvízből. Ez az átalakítás sok energiájába kerül
              szervezetednek. A PI víz tulajdonságai megközelítik a sejten belüli folyadék tulajdonságait, a rendezett
              szerkezet és az optimális energiaszint megkönnyítik a sejtfalon való áthatolást. A PI víz, azaz az élet
              vize képes az emberi szervezet a legjobb teljesítményre késztetni. Fogyaszthatják csecsemők, gyermekek,
              felnőttek, sportolók, fogyókúrázók, idős emberek, egészségesek és betegek egyaránt.
            </p>
            <h5 className='card-title'>Mire használhatod a PI vizet?</h5>
            <p className='description'>
              Használhatod főzéshez, italok alapjaként. Az ebből készült kávé vagy tea íze nem hasonlítható a szűretlen
              vezetékes vízből készült italokéhoz. A PI víz semleges ízhatása miatt az ételek természetes ízei
              fokozottan előtérbe kerülnek. A PI víz fogyasztása kellemes az ízlelőbimbóknak, egyben a legegyszerűbb út
              a tisztuláshoz, az egészséghez, a legjobb folyadék a sportoláshoz. Ezt az interneten találtam
            </p>
          </Col>
          <Link to='/'>
            <Button className='btn shadow-primary' type='button'>
              Vissza
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default PiViz;
