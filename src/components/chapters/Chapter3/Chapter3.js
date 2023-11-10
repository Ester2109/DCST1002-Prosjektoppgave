import Paragraph from "../../Paragraph";
import Screen from "../../Screen/Screen";
import Quiz from "../../Quiz/Quiz";
import Quote from "../../Quote/Quote";
import Answer from "../../Answer/Answer";

const Chapter3 = ({ style }) => {
  return (
    <Screen id="Chapter3" style={style}>
      <h2>Hva er posisjonsdeling?</h2>
      <Paragraph topSpacing={true}>
        De fleste vet hva posisjonsdeling er, og hva det å gi sin posisjonsdata
        innebærer. Posisjonsdeling er en funksjon som alle moderne mobilenheter
        bruker for å beregne hvor enheten din er geografisk. Du kan skru det av
        og på i innstillinger, og de fleste applikasjoner spør om du vil skru
        det på første gang man åpner dem. Posisjonsdata er data som samles inn
        av et nettverk eller tjeneste for å fastslå hvor brukerens mobiltelefon
        eller andre enheter befinner seg, i henhold til definisjonen fra
        Information Commissioners Office (ICO, 2023). Posisjonsdata hentes
        vanligvis fra mobiltelefoner, mobiltårn, internett, biler og andre
        enheter som har posisjonsdeling. Med andre ord, fungerer det som et
        digitalt fotspor hvor dataen fremstilles gjennom bevegelsen av personer
        og enheter.
      </Paragraph>
      <Paragraph topSpacing={true}>
        Det er mange positive og praktiske grunner til å bruke posisjonsdeling
        og posisjonsdata, som blant annet økt brukeropplevelse og sikkerhet i
        private sammenhenger. Et eksempel kan være når man skal finne fram til
        et sted man ikke er kjent med. Da kan man bruke en applikasjon som
        Google Maps til å finne destinasjonen for deg. Et annet nyttig verktøy
        som «Find My iPhone» gjør det enklere å finne igjen dine Apple-enheter
        (Apple Inc., 2023). Dette bidrar med å forbedre brukeropplevelsen for
        sluttbrukeren.
      </Paragraph>
      <Paragraph topSpacing={true}>
        Hvordan funker dette i praksis? Posisjonsdeling og posisjonsdata bruker
        GNSS (Global Navigation Satellite System), som er et satellittbasert
        system. Dette systemet har forskjellige inndelinger ut ifra hvor i
        verden man er. Eksempelvis heter Europa sitt satellittsystem Galileo, og
        Nord-Amerika sitt GPS (Global Positioning System), som flere kanskje er
        kjent med fra før av (EUSPA, 2023). Posisjonsdataen samles via signaler
        fra flere satellitt systemer som blir samlet og lest inn for å gi
        innsikt i dataen. Vi kan prøve å visualisere prosessen i Google Maps:
        <br />
        <br /> 
        1. Brukeren skrur på posisjonsdeling. 
        <br />
        <br />
        2. Breddegrad, lengdegrad, retning,
        tidspunkt og beliggenhet (posisjonsdata) til enheten beregnes via GNSS.
        <br />
        <br />
        3. Data/posisjon tilbakesendes til brukerens enhet.
      </Paragraph>
      <Paragraph topSpacing={true}>
        Selv om posisjonsdeling er et veldig nyttig verktøy å ha, finnes det
        noen ulemper i henhold til brukernes personvern. Ved å tillatte
        posisjonsdeling på applikasjoner samles inn posisjonsdataen din som
        videre kan analyseres, kjøpes og selges av en tredjepart. Under visse
        omstendigheter kan dette utgjøre en alvorlig sårbarhet for sikkerheten.
      </Paragraph>
      <Paragraph topSpacing={true}>
        Posisjonen på mobilenheten kan fortsett spores, selv om du har
        deaktivert funksjonen, uavhengig om du bruker en iPhone- eller en
        Android-enhet. Dette skyldes at mobiltelefoner kontinuerlig sender og
        mottar radiosignaler til og fra nærliggende mobiltårn (McAfee, 2023).
        Mobiloperatører kan bruke disse signalene til å finne den generelle
        posisjonen til enheten.
      </Paragraph>
      <Paragraph topSpacing={true}>
        Mobiltelefoner med aktivert Wi-Fi søker etter lokale datanettverk selv
        når de ikke er tilkoblet et nettverk. Disse enhetene skanner automatisk
        etter Wi-Fi-nettverk i området og viser signalstyrken, noe som også kan
        avsløre din stedsinformasjon. Signalene kan bli sporet av andre erfarne
        trusselaktører, og dette er fordi du gir dem muligheten til det ved
        hjelp av mobilen. For å forsikre seg om at man ikke blir sporet, er det
        beste å ikke ha med mobilen eller andre mobile enheter på vakt, i felt
        eller på øvelser.
      </Paragraph>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        {/*         <Quote>
          I den daglige tjenesten er det ikke lov å ta den med - både av
          taktiske hensyn og fordi den lett kan bli skadet
        </Quote> */}
        <Quiz
          question="Hva er posisjonsdata?"
          answers={[
            {
              label:
                "Data som innsamles av et nettverk eller tjenester for å fastslå hvor brukerens mobiltelefon eller andre enheter befinner seg.",
              correct: true,
            },
            {
              label: "Dine GPS-koordinater når du bruker en mobil enhet.",
            },
            {
              label: "WIFI-tilkobling mellom telemaster.",
            },
          ]}
        />
        <Quiz
          question="Hvis du har skrudd av posisjonsdeling på mobilen, er det fremdeles
          lurt å ha med mobilen på vakt eller øvelse?"
          answers={[
            {
              label:
                "Ja, fordi posisjonsdeling er av og jeg kan derfor ikke bli sporet",
            },
            {
              label:
                "Ja, fordi mobilen er et taktisk hjelpemiddel i tjenesten.",
            },
            {
              label:
                "Nei, fordi mobilenheten kan fortsatt spores via mobiltårn.",
              correct: true,
            },
            {
              label:
                "Nei, fordi mobilenheten er ikke et taktisk hjelpemiddel i tjenesten.",
            },
          ]}
        />
      </div>
    </Screen>
  );
};

export default Chapter3;
