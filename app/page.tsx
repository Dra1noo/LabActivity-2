import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main style={{ padding: "1.5rem", maxWidth: 800, margin: "0 auto" }}>
      <Header />
      <MainContent
        title="Why Components are Nice"
        content="They keep your code tidy and reusable. Props let you pass data into them so one component can show different stuff."
      />
    </main>
  );
}
