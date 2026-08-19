import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Collection from "./components/Collection";
import About from "./components/About";
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
// Import Pages
import CollectionPage from "./pages/collectionPage";

function App() {
    const isCollectionPage = window.location.pathname.startsWith("/collection");
    if (isCollectionPage) {
        return <CollectionPage />;
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