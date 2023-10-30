import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";

const EmailConfirmation = () => {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi there!</Text>
          <Button
            href="https://example.com"
            style={{ color: "#61dafb", padding: "10px 20px" }}>
            Confirm email
          </Button>
        </Container>
      </Section>
    </Html>
  );
};

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

export default EmailConfirmation;
