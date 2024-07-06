import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Community from "@/components/community/Community";
import Download from "@/components/download/Download";
import HomeFirst from "@/components/home pages/HomeFirst";
import HomeForth from "@/components/home pages/HomeForth";
import HomeSecond from "@/components/home pages/HomeSecond";
import HomeThird from "@/components/home pages/HomeThird";

export default function Home() {
  return (
    <div className="app relative overflow-hidden">
      <Section>
        <HomeFirst />
      </Section>
      <Section>
        <HomeSecond />
      </Section>
      <Section>
        <HomeThird />
      </Section>
      <Section>
        <HomeForth />
      </Section>
      <Section>
        <Community />
      </Section>
      <Section>
        <Download />
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
}
