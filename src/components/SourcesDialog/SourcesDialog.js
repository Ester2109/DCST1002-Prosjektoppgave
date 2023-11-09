import Modal from "../Modal/Modal";
import Paragraph from "../Paragraph";

const SourcesDialog = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      Bergsjø, H., & Windvik, R. (2020). Digital Sikkerhet: En innføring (Vol.
      2020). (L. Øverlier, Ed.) UNIVERSITETSFORLAGET.
      <br />
      <Paragraph topSpacing={true}>
        Forsvaret. (2023, mars 23). Forsvaret. Retrieved from
        <a href="https://www.forsvaret.no/forstegangstjeneste/tips-myter-og-fakta/fakta">
          {" "}
          Fakta
        </a>
      </Paragraph>
      <Paragraph topSpacing={true}>
        Information Comissioner's Office. (2023). ico.org. Retrieved from
        Location
        <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/communications-networks-and-services/location-data/">
          data:
        </a>
      </Paragraph>
      <Paragraph topSpacing={true}>
        McAfee. (2023). McAfee. Retrieved from Can My Phone Be Tracked If
        Location Services Are Off?:
        <a href="https://www.mcafee.com/learn/can-my-phone-be-tracked-if-location-services-are-off/">
          Off?
        </a>
      </Paragraph>
      <Paragraph topSpacing={true}>
        Pinola, M. (2018, Januar 28). Consumer Reports. Retrieved from How to
        Limit Location Tracking on Your
        <a href="https://www.consumerreports.org/electronics/privacy/how-to-turn-off-location-services-on-your-smartphone-a8219252827/">
          Phone:
        </a>
      </Paragraph>
      <Paragraph topSpacing={true}>
        Apple Inc. (2023). Apple.com. Hentet fra Find My iPhone:
        https://apps.apple.com/us/app/find-my-iphone/id376101648
      </Paragraph>
      <Paragraph topSpacing={true}>
        NAV. (u.d.). NAV KUNNSKAPSBANKEN. (L. Johansen, & M. Flatebø,
        Redaktører) Hentet fra Posisjonsdeling og sporing av mobile enheter:
        https://www.kunnskapsbanken.net/kognisjon/allmennteknologi/posisjonsdeling-og-sporing-av-mobile-enheter/
      </Paragraph>
      <Paragraph topSpacing={true}>
        Gundersen, M., Skille, Ø., Lied, H., Grafsrønningen, M., & Jansson, H.
        (2020, Mai 18). NRK. Hentet fra Norske offiserer og soldater avslørt av
        mobilen:
        https://www.nrk.no/norge/xl/norske-offiserer-og-soldater-avslort-av-mobilen-1.14890424#intro-authors--expand
      </Paragraph>
      <Paragraph topSpacing={true}>
        unacast. (2023). unacast. Hentet fra The Comprehensive Location Data
        Knowledge Base: https://www.unacast.com/what-is-location-data
      </Paragraph>
      <Paragraph topSpacing={true}>
        Sherman, J. (2023, Juni 26). Duke, Sanford School of Public Policy.
        Hentet fra The Location Data Market, Data Brokers, and Threats to
        Americans’ Freedoms,:
        https://techpolicy.sanford.duke.edu/wp-content/uploads/sites/4/2023/07/Sherman-Justin_WrittenTestimony_MA_Legislature.pdf
      </Paragraph>
      <Paragraph topSpacing={true}>
        Grand View Research. (2023). Grand View Research. Hentet fra Location
        Intelligence Market Size, Share & Trends Analysis Report By Vertical
        (BFSI, IT & Telecom), By Application (Remote Monitoring, Risk
        Management), By Service (System Integration, Consulting), And Segment
        Forecasts, 2023 - 2030:
        https://www.grandviewresearch.com/industry-analysis/location-intelligence-market#
      </Paragraph>
      <Paragraph topSpacing={true}>
        Sly, L. (2018, Januar 29). The Washington Post. Hentet fra U.S. soldiers
        are revealing sensitive and dangerous information by jogging:
        https://www.washingtonpost.com/world/a-map-showing-the-users-of-fitness-devices-lets-the-world-see-where-us-soldiers-are-and-what-they-are-doing/2018/01/28/86915662-0441-11e8-aa61-f3391373867e_story.html
      </Paragraph>
      <Paragraph topSpacing={true}>
        EUSPA. (2023). euspa.europa.eu. Hentet fra What is GNSS?:
        https://www.euspa.europa.eu/european-space/eu-space-programme/what-gnss
      </Paragraph>
    </Modal>
  );
};

export default SourcesDialog;
