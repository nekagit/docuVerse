import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function IndexComponent() {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

 useGSAP(
   () => {
     gsap.to("span", { x: 10, yoyo: true, repeat: 21, duration: 0.05 });
   },
   { scope: container }
 );


  // JSON-Daten mit den Angeboten
  const data = {
    offerings: [
      {
        category: "Software Development",
        links: [
          "https://docuverse.netlify.app/docs/category/software-development",
        ],
      },
      {
        category: "Cheap Contracts for Household-Electricity",
        links: [
          "https://docuverse.netlify.app/docs/category/software-development",
        ],
      },
      {
        category: "Collaboration on writing a book",
        links: ["https://docuverse.netlify.app/docs/category/docuverse---buch"],
      },
      {
        category: "German Classes",
        links: ["https://docuverse.netlify.app/docs/category/languages"],
      },
      {
        category: "English Classes",
        links: ["https://docuverse.netlify.app/docs/category/languages"],
      },
      {
        category: "Coding Classes",
        links: [
          "https://docuverse.netlify.app/docs/category/software-development",
        ],
      },
      {
        category: "Weekly Meeting regarding Spanish",
        links: ["https://docuverse.netlify.app/docs/category/languages"],
      },
      {
        category: "Monthly Meeting regarding Philosophy",
        links: ["https://docuverse.netlify.app/docs/category/philosophie"],
      },
      {
        category: "University Knowledgebase regarding Computer Science",
        links: [
          "https://docuverse.netlify.app/docs/category/software-development",
        ],
      },
      {
        category: "Coding Projects",
        links: ["https://github.com/nekagit?tab=repositories"],
      },
      {
        category: "Soon Functioning simple Apps here available!",
        links: ["https://github.com/nekagit?tab=repositories"],
      },
    ],
    contacts: [
      {
        platform: "Discord",
        username: "nenad6546",
        link: "https://discord.com/nenad6546",
      },
      {
        platform: "Instagram",
        username: "nenadkal",
        link: "https://instagram.com/nenadkal",
      },
      {
        platform: "Meta-Facebook",
        username: "Nenad Kalicanin",
        link: "https://www.facebook.com/nenad.kalicanin.3/",
      },
      {
        platform: "Telegram",
        username: "nenadkal",
        link: "https://t.me/nenadkal",
      },
    ],
  };

  const renderOfferings = () => {
    return data.offerings.map((offering, index) => (
      <span  key={index}>
        <a className="box" href={offering.links[0]} target="_blank" rel="noopener noreferrer">
          {offering.category}
        </a>
        <br />
      </span>
    ));
  };

  // Funktion zur Erstellung von JSX-Elementen für die Kontakte
  const renderContacts = () => {
    return data.contacts.map((contact, index) => (
      <span key={index}>
        <a className="box" href={contact.link} target="_blank" rel="noopener noreferrer">
          {contact.platform} - {contact.username}
        </a>
        <br />
      </span>
    ));
  };
  return (
    <div
      className="box bg-white w-full grid"
      style={{ width: "fit-content", margin: "auto", padding: "3rem" }}
      ref={container}
    >
      <Card className="w-[650px]">
        <CardHeader>
          <CardTitle>
            <u>
              <h1 style={{ textAlign: "center", color: "red" }}>
                Free Offering
              </h1>
            </u>
          </CardTitle>
          <CardDescription>
            <span
              ref={container}
              className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "3rem",
              }}
            >
              <span>{renderOfferings()}</span>
              <span>{renderContacts()}</span>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}
