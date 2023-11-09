import Answer from "../../Answer/Answer";
import Paragraph from "../../Paragraph";
import Quiz from "../../Quiz/Quiz";
import Screen from "../../Screen/Screen";
import Image from "../../Image/Image";

const Chapter5 = ({ style }) => {
  return (
    <Screen id="Chapter5" style={style}>
      <div>
        <h2>Konsekvenser</h2>
        <Paragraph>
          Har du reflektert over ditt digitale fotspor? Mange tenker kanskje at
          det digitale fotsporet ditt kun er data du aktivt deler, som
          offentlige kontoer på sosiale medier og hvordan du interagerer med
          andre brukere. Dette er bare en liten del av ditt aktive fotspor, som
          også innebærer blant annet nedlastinger og transaksjoner på nett. Du
          har også et passivt digitalt fotspor, som er informasjon som genereres
          av helt vanlig internettbruk, og er blant annet IP-adresser,
          nettleserlogg, informasjonskapsler (Cookies) og posisjonsdata. Dette
          er informasjon som man ofte ikke tenker over at man deler, men som
          fremdeles enkelt kan brukes mot deg. Posisjonsdata, som du nå har
          blitt litt bedre kjent med, er et eksempel på informasjon som kan være
          lett å utnytte.
        </Paragraph>
        <Paragraph topSpacing={true}>
          Enheten din samler hele tiden inn data om hvor du oppholder og beveger
          deg. Vi har sett at tjenester som løpeapplikasjonen «Strava» tidligere
          har avslørt hvor soldater trener og beveger seg, både på militære
          baser i hjemlandene sine, men også på deployering. Såkalte «heatmaps»
          som her sammenfatter bevegelsesmønstre, kan avsløre både
          infrastrukturen på militære og begrensede områder, og er en nokså
          åpenbar sårbarhet. Tidligere har man også sett at soldater på øvelse
          som har brukt datingtjenesten «Tinder» har blitt avslørt av
          posisjonsstjenester, som gir andre brukere informasjon om hvor langt
          unna du befinner deg.
        </Paragraph>
        <Image src="/images/Bilde_6.jpg" alt="øvelse"/>
        <Paragraph topSpacing>
          Som privatperson inneholder posisjonsdataen din mer enn bare
          overfladisk informasjon om hvor du har oppholdt deg. Svært mye
          informasjon om for eksempel religion, seksuell legning og politiske
          affiliasjoner kan hentes og tolkes fra dataen som ligger tilgjengelig.
          Hvis man ser på hvor mye data fra én applikasjon eller tjeneste har å
          si, er det skremmende å tenke på hva slags informasjon man kan pusle
          sammen dersom man har mange nok brikker. Mye data assosieres med
          enheten din heller enn navnet. Dersom man først har for eksempel
          posisjonsdata, er det ikke vanskelig å matche den mot annen data som
          igjen gjør det enkelt å avsløre din identitet. Se for eksempel denne
          NRK-artikkelen som avslørte bevegelsene til flere militært ansatte
          (https://www.nrk.no/norge/xl/norske-offiserer-og-soldater-avslort-av-mobilen-1.14890424)
        </Paragraph>
        <Paragraph>
          Øyensynlig uskyldig informasjon kan bidra til å gi uønskede aktører et
          situasjonsbilde av bevegelser, planer og lokasjon, og kan i ytterste
          konsekvens bli fatalt i en krigssituasjon. Dette vil være relevant
          uansett om du sitter på leir, ute på skarpt oppdrag eller på et skip.
          I dag opplever vi i stadig økende grad at også cyberkrigføring er en
          reell trussel. For å minimere risiko er vi nødt til å forstå hva de
          tillatelsene vi gir enhetene våre kan ha å si for vår sikkerhet. Å
          være bevisst på det digitale fotsporet vårt er en vesentlig del av
          både egen sikkerhet og personvern, men også nasjonal sikkerhet.
        </Paragraph>
        <Quiz
          question="Hva er de viktigste praktiske forskjellene mellom aktivt og passivt digitalt fotspor?"
          answers={[
            {
              label: `Aktivt digitalt fotspor involverer frivillig deling av personlig 
                        informasjon, mens passivt digitalt fotspor er informasjon som samles inn uten 
                        aktiv deltakelse. Den praktiske forskjellen ligger i graden av kontroll en person har over 
                        dataene og hvordan de brukes.`,
                correct: true
            },
            {
              label: `Praktiske forskjeller mellom aktivt og passivt digitalt fotspor
              er ubetydelige, da begge former for datainnsamling har samme
              innvirkning på personvern og sikkerhet.`,
            },
            {
              label: `Aktivt digitalt fotspor involverer frivillig deling av personlig 
                          informasjon, mens passivt digitalt fotspor er informasjon som samles inn uten 
                          aktiv deltakelse. Den praktiske forskjellen ligger i graden av kontroll en person har over 
                          dataene og hvordan de brukes.`,
            },
          ]}
        />
      </div>
    </Screen>
  );
};

export default Chapter5;
