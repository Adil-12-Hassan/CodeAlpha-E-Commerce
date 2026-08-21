// Import Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Collection from "./components/Collection";
import About from "./components/About";
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
// Import Pages
import CollectionPage from "./pages/collectionPage";
import AboutPage from "./pages/aboutPage";
import Journals from "./pages/journalsPage";

function App() {
    const isCollectionPage = window.location.pathname.startsWith("/collection");
    if (isCollectionPage) {
        return <CollectionPage />;
    }
    const isAboutPage = window.location.pathname.startsWith('/about');
    if (isAboutPage) {
        return <AboutPage />
    }
    const isJournalPage = window.location.pathname.startsWith("/journals")
    if (isJournalPage) {
        return <Journals />
    }

    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Collection />
            <About />
            <Newsletter />
            <Footer />
        </>
    )
}
export default App;