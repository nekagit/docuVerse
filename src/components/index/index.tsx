import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
export default function IndexComponent() {
  return (
    <div
      className="bg-white w-full grid"
      style={{
        border: "1px solid white",
        width: "fit-content",
        margin: "auto",
        padding: "3rem",
      }}
    >
      <Card className="w-[650px] ">
        <CardHeader>
          <CardTitle>
            <u>
              <h1 style={{ textAlign: "center", color: "red" }}>Free Offering</h1>
            </u>
          </CardTitle>
          <CardDescription>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "3rem",
              }}
            >
              <div>
                <h2>
                  <a
                    href="/spanish/weekly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Software Development
                  </a>
                </h2>
                <h2>
                  <a
                    href="/contracts/household-electricity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cheap Contracts for Household-Electricity
                  </a>
                </h2>
                <h3>
                  <a
                    href="/writing/collaboration"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Collaboration on writing a book
                  </a>
                </h3>
                <h3>
                  <a
                    href="/classes/german"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    German Classes
                  </a>
                </h3>
                <h3>
                  <a
                    href="/classes/english"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    English Classes
                  </a>
                </h3>
                <h2>
                  <a
                    href="/classes/coding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coding Classes
                  </a>
                </h2>
                <h5>
                  <a
                    href="/meetings/spanish-weekly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Weekly Meeting regarding Spanish
                  </a>
                </h5>
                <h3>
                  <a
                    href="/meetings/philosophy-monthly"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Monthly Meeting regarding Philosophy
                  </a>
                </h3>
              </div>
              <div>
                <h4>
                  <a
                    href="/knowledgebase/computer-science"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University Knowledgebase regarding Computer Science
                  </a>
                </h4>
                <h4>
                  <a
                    href="/blogs/history-philosophy-coding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Personal History, Philosophy, Coding Blogs
                  </a>
                </h4>
                <h4>
                  <a
                    href="/projects/coding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coding Projects
                  </a>
                </h4>
                <h2>
                  <a href="/apps" target="_blank" rel="noopener noreferrer">
                    Soon Functioning simple Apps here available!
                  </a>
                </h2>
              </div>
              <div>
                <div>
                  <a
                    href="https://discord.com/nenad6546"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord - Server - CodeBoat - nenad6546
                  </a>
                </div>
                <div>
                  <a
                    href="https://instagram.com/nenadkal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram - nenadkal
                  </a>
                </div>
                <div>
                  <a
                    href="https://facebook.com/NenadKalicanin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Meta-Facebook - Nenad Kalicanin
                  </a>
                </div>
                <div>
                  <a
                    href="https://t.me/nenadkal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram - nenadkal
                  </a>
                </div>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}
