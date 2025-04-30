import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ImpactStat } from "@/components/ui/impact-stat";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProgramCard } from "@/components/ui/program-card";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-prevented-blue-dark text-white h-[90vh] min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-black/40 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in">
              Protecting Children Through Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in delay-100">
              We work to safeguard children and young people from harm through education, support, and advocacy.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in delay-200">
              <Button asChild size="lg" className="bg-prevented-accent hover:bg-prevented-accent/90 text-white font-medium">
                <a href="/donate">Donate Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white">
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ImpactStat number="5,000+" label="Children Protected" className="opacity-0 animate-fade-in" />
            <ImpactStat number="200+" label="Schools Partnered" className="opacity-0 animate-fade-in delay-100" />
            <ImpactStat number="15+" label="Years of Experience" className="opacity-0 animate-fade-in delay-200" />
            <ImpactStat number="98%" label="Positive Feedback" className="opacity-0 animate-fade-in delay-300" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-prevented-blue-light/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionHeading 
                title="Who We Are" 
                subtitle="PreventED is a UK charity dedicated to keeping children and young people safe from harm through educational programs, resources and direct support." 
                className="mb-6"
              />
              <p className="mb-6 opacity-0 animate-fade-in delay-200">
                Since our founding, we have been developing and delivering high-quality educational 
                materials and workshops designed to protect children from harm by increasing awareness, 
                fostering healthy relationships, and building resilience.
              </p>
              <Button asChild className="opacity-0 animate-fade-in delay-300">
                <a href="/about">Read Our Story</a>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg opacity-0 animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Team members working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading 
            title="Our Programs" 
            subtitle="We deliver targeted educational programs to protect children and young people across different age groups and contexts."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Digital Safety Program"
              description="Helping children navigate the online world safely and responsibly."
              image="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              categories={["Ages 7-11", "Online Safety"]}
              link="/programs/digital-safety"
            />
            <ProgramCard
              title="Healthy Relationships"
              description="Building skills for developing positive, respectful relationships."
              image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
              categories={["Ages 12-16", "Relationships"]}
              link="/programs/healthy-relationships"
            />
            <ProgramCard
              title="School Safety Workshops"
              description="Empowering school communities to create safer environments."
              image="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
              categories={["Educators", "School Safety"]}
              link="/programs/school-safety"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="opacity-0 animate-fade-in">
              <a href="/programs">View All Programs</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-prevented-green text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg mb-8 opacity-0 animate-fade-in delay-100">
              Whether through volunteering, donations, or spreading awareness, 
              your support helps us protect more children from harm.
            </p>
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in delay-200">
              <Button asChild size="lg" className="bg-white text-prevented-green hover:bg-white/90">
                <a href="/get-involved">Get Involved</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/20">
                <a href="/donate">Donate</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
