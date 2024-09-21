import Container from "@/components/Container";
import Header from "@/components/Header/Header";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <main>
      <NavigationBar />

      <div className="p-10">
        <Header />

        {/* Education Section */}
        <div id="education" className="text-lg">
          <div id="edu-header" className="mb-4">
            <h3 className="text-4xl font-bold">My Education 🏫</h3>
            <p>Pieces of paper that proves i&apos;m ✨somewhat qualified✨ that I know what i&apos;m doing</p>
          </div>

          <div id="edu-content">
            <Container />
          </div>
        </div>

        {/* Experience Section */}
      </div>
    </main>
  );
}
