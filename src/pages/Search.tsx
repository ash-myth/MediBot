
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import EnhancedSearch from "@/components/EnhancedSearch";

const Search = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-primary">Smart</span> Medicine Search
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Find detailed information about medications with intelligent AI-powered search or browse our comprehensive database.
            </p>
          </div>
        </div>
        <EnhancedSearch />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Search;
