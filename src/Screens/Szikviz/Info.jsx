import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Info.css';

const Info = () => {
  return (
    <div className='box'>
      <Container>
        <Row>
          <Col className='paragraph'>
            <h4 className='title'>Tájékoztató</h4>
            <p className='description'>
              A szikvíz olyan, az egészségügyi követelményeknek megfelelő, szén-dioxiddal dúsított víz, amely nyomás
              alatti szifonfejes műanyag palackban vagy rozsdamentes fémből készült 25 literes speciális csapteleppel
              ellátott szikvízpalackban (szikvízballonban) kerül forgalomba. Magyar találmány, amely hazai tisztított
              víz és Magyarországon bányászott szén-dioxid felhasználásával készül. Szikvizet csak a szikvízüzem
              nyitásának engedélyezésekor előírt, az egészségügyi hatóság által engedélyezett minőségű vízből és szén-
              dioxidból, az élelmiszer-ellenőrző hatóság és a munkavédelmi hatóság által vizsgált, és engedélyezett
              berendezésekkel és technológiával szabad előállítani, melyeknek üzemünk teljes mértékben megfelel. A HACCP
              alapelveken alapuló eljárások betartásával működünk.
            </p>
            <h5 className='card-title'>Technológia leírása:</h5>
            <p className='description'>
              A vizet az alkalmazott vízkezelő berendezéseken át a kiegyenlítő (napi) tartályba vezetik, ahonnan már a
              szaturálógép szivattyúja továbbítja a gyártáshoz szükséges vízmennyiséget az üzemi nyomás alatt lévő
              szén-dioxiddal folyamatosan ellátott szaturáló hengerbe. A CO2- ellátást speciális lefejtő biztosítja. A
              szaturáló gép feladata az ivóvíz szén-dioxiddal való telítése. Ennek megtörténte után már a kész szikvizet
              csővezetékkel a letöltő berendezésekhez vezetik, mely segítségével szifonfejes flakonokba, illetve
              szikvízballonokba történik a palackozás.
            </p>
            <p className='description' style={{ fontWeight: 'bold' }}>
              A zárt rendszerű palackozásnak köszönhetően a szén-dioxid tartalmát az utolsó cseppjéig megtartja,
              meggátolja a víz oxidációját, és a minőségromlását.
            </p>
            <p className='description'>Miért igyunk szikvizet inkább, mint cukros üdítőt?</p>
            <p className='description'>
              A szénsavas víz létrehozásához a vízben széndioxidot oldanak fel - így kerülnek a vízbe a buborélkok.
              Azonban semmilyen más hatása nincs a vízre , nem lesz tőle magasabb a kalória- vagy cukortartalma, nem
              kerül az italokba koffein, vitamin vagy éppen ízesítés. A legtöbb szénsavas üdítőital nem azért lehet
              rossz hatással az egészségünkre, mert buborékokat tartalmaz, hanem azért, mert meglehetősen sok plusz
              kalória és adalékanyag van bennük.
            </p>
            <ul className='list'>
              <li className='ul'>nem tartalmaz tartósítószert</li>
              <li>nem tartalmaz adalékanyagot</li>
              <li>fontos a szervezet számára a megfelelő folyadékbevitel</li>
              <li>az élelmiszeriperi szén-dioxid jótékony hatással van a szervezetünkre, segíti az emésztést</li>
              <li>egészséges</li>
              <li>nem hizlal</li>
              <li>szomjat olt</li>
            </ul>
            <p className='description'>
              Napi 1,5 liter folyadék? A víz az oxigén mellett a legfontosabb feltétele az életnek. Az emberi szervezet
              akár heteket is kibír étel nélkül, víz nélkül azonban csak néhány napot. Az elvesztett vízmennyiséget
              pótolnunk kell.  A szénsavas vízzel kapcsolatban számos egészségügyi problémát szoktak felsorolni, többek
              között azt, hogy vesekövet okoz, tönkreteszi a fogzománcot vagy &quot;kioldja&quot; a kalciumot a
              csontokból, de ezekre nincsenek tudományosan alátámasztott bizonyítékok. A szénsavas víz valóban egy
              kicsit savasabb, mint az egyszerű víz, de közel sem annyira, mint a szénsavas üdítők (a legtöbb kutatás
              ugyanis ezekkel foglalkozik). A szénsavas víz önmagában sem a csontoknak, sem a fogaknak nem árt.
            </p>
            <p className='description' style={{ fontWeight: 'bold' }}>
              Az újratölthető palackoknak köszönhetően minden kiszerelés környezetbarát, nem szennyezzük a természetet a
              sok eldobott csomagolással, nem terheljük pénztárcánkat a szemétdíjjal, energiánkat a szelektív gyűjtéssel
              és a visszaváltás gyötrelmeivel!
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

export default Info;
