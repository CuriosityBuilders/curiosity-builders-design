import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  organization: string;
  email: string;
  interest?: string;
  brochure: boolean;
  bookExtract: boolean;
}

export const ContactFormEmail = ({
  name,
  organization,
  email,
  interest,
  brochure,
  bookExtract,
}: ContactFormEmailProps) => {
  const documents = [];
  if (brochure) documents.push("Brochure Curiosity.Builders");
  if (bookExtract)
    documents.push(
      "Extrait du livre \"Changer l'Immobilier : de l'Utopie à la Réalité\""
    );

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const logoUrl = `${baseUrl}/Logo%20Curiosity%20Builders%20V2.png`;

  return (
    <Html>
      <Head />
      <Preview>
        {name} ({organization}) souhaite recevoir : {documents.join(" et ")}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Top decorative line */}
          <div style={topLine} />

          <Section style={logoSection}>
            <Img
              src={logoUrl}
              alt="Curiosity.Builders"
              width="200"
              height="68"
              style={logo}
            />
          </Section>

          <Heading style={heading}>Nouvelle demande de documentation</Heading>

          <Section style={introSection}>
            <Text style={paragraph}>
              <strong>{name}</strong>
              {organization && ` de ${organization}`} souhaite recevoir :
            </Text>
          </Section>

          <Section style={documentsCard}>
            {documents.map((doc) => (
              <Text key={doc} style={listItem}>
                ✓ {doc}
              </Text>
            ))}
          </Section>

          <Hr style={hr} />

          <Section style={detailsSection}>
            <Text style={sectionTitle}>Informations du contact</Text>

            <Section style={infoSection}>
              <Text style={label}>Nom</Text>
              <Text style={value}>{name}</Text>
            </Section>

            {organization && (
              <Section style={infoSection}>
                <Text style={label}>Organisation</Text>
                <Text style={value}>{organization}</Text>
              </Section>
            )}

            <Section style={infoSection}>
              <Text style={label}>Email professionnel</Text>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Section>

            {interest && (
              <Section style={infoSection}>
                <Text style={label}>Sujet d'intérêt</Text>
                <Text style={value}>{interest}</Text>
              </Section>
            )}
          </Section>

          {/* Bottom decorative line */}
          <div style={bottomLine} />
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 24px 48px",
  maxWidth: "600px",
  position: "relative" as const,
};

const topLine = {
  width: "100%",
  height: "1px",
  backgroundColor: "#000000",
  opacity: 0.2,
  margin: "0 0 40px",
};

const bottomLine = {
  width: "100%",
  height: "1px",
  backgroundColor: "#000000",
  opacity: 0.2,
  margin: "40px 0 0",
};

const logoSection = {
  margin: "0 0 40px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 24px",
  letterSpacing: "-0.5px",
};

const introSection = {
  margin: "0 0 24px",
};

const paragraph = {
  fontSize: "17px",
  lineHeight: "1.6",
  color: "#000000",
  margin: "0",
};

const documentsCard = {
  margin: "24px 0",
  padding: "20px 24px",
  backgroundColor: "#F9F9F9",
  borderRadius: "4px",
  border: "1px solid #E5E5E5",
};

const listItem = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#000000",
  margin: "8px 0",
  paddingLeft: "4px",
};

const hr = {
  borderColor: "#000000",
  borderWidth: "1px",
  borderStyle: "solid",
  opacity: 0.15,
  margin: "32px 0",
};

const detailsSection = {
  margin: "32px 0 0",
};

const sectionTitle = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#000000",
  fontWeight: "700",
  margin: "0 0 20px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const infoSection = {
  margin: "0 0 20px",
  paddingBottom: "16px",
  borderBottom: "1px solid #F0F0F0",
};

const label = {
  fontSize: "12px",
  lineHeight: "1.5",
  color: "#666666",
  fontWeight: "600",
  margin: "0 0 6px",
  textTransform: "uppercase",
  letterSpacing: "0.8px",
};

const value = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#000000",
  margin: "0",
};

const link = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#000000",
  textDecoration: "underline",
  margin: "0",
};

export default ContactFormEmail;
