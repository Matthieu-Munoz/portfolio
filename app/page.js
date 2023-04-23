import HomeLayout from "./components/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <section id="accueil" className="h-screen snap-start bg-beige-100">
        test 1
      </section>
      <section
        id="competences"
        className="h-screen snap-start bg-beige-200"
      ></section>
      <section id="projets" className="h-screen snap-start bg-beige-100">
        test 1
      </section>
      <section id="contact" className="h-screen snap-start bg-beige-200">
        test 1
      </section>
    </HomeLayout>
  );
};
