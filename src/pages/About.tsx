
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-prevented-blue-dark text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in">
              About PreventED
            </h1>
            <p className="text-xl opacity-0 animate-fade-in delay-100">
              Dedicated to safeguarding children and young people through education, 
              support and advocacy for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-prevented-blue">Our Mission</h2>
              <p className="text-lg">
                To protect children and young people from harm by providing education, 
                resources, and support that empowers them, their families, and communities.
              </p>
            </div>
            <div className="opacity-0 animate-fade-in delay-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-prevented-green">Our Vision</h2>
              <p className="text-lg">
                A world where all children and young people grow up safe, respected, 
                and able to fulfill their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-prevented-blue-light/10">
        <div className="container">
          <SectionHeading 
            title="Our Story"
            subtitle="PreventED was founded in 2008 by a group of education and child protection experts committed to making a difference."
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="mb-4 opacity-0 animate-fade-in">
                What began as a small initiative in London schools has grown into a national charity 
                reaching thousands of children and young people across the UK each year.
              </p>
              <p className="mb-4 opacity-0 animate-fade-in delay-100">
                Our founders recognized that education was a powerful tool in preventing harm to children, 
                and set out to develop high-quality programs that would engage, inform, and empower.
              </p>
              <p className="opacity-0 animate-fade-in delay-200">
                Today, we work with schools, community organizations, and families to deliver 
                evidence-based programs that help keep children and young people safe.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden opacity-0 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Our journey through the years" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in">
              <h3 className="text-xl font-bold mb-3 text-prevented-blue">2008</h3>
              <p>PreventED is founded with a focus on school-based prevention programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in delay-100">
              <h3 className="text-xl font-bold mb-3 text-prevented-blue">2015</h3>
              <p>Expanded to offer national programs and resources for children of all ages.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in delay-200">
              <h3 className="text-xl font-bold mb-3 text-prevented-blue">Today</h3>
              <p>Reaching over 5,000 children annually with our prevention programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container">
          <SectionHeading 
            title="Our Team"
            subtitle="Meet the dedicated professionals behind PreventED's work."
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center opacity-0 animate-fade-in">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-prevented-blue mb-3">Chief Executive Officer</p>
              <p className="text-muted-foreground">
                With over 20 years in child protection, Sarah leads our organization with vision and dedication.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center opacity-0 animate-fade-in delay-100">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="David Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">David Thompson</h3>
              <p className="text-prevented-blue mb-3">Education Director</p>
              <p className="text-muted-foreground">
                David oversees our educational programs, ensuring they're engaging and effective.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center opacity-0 animate-fade-in delay-200">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                  alt="Michelle Garcia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michelle Garcia</h3>
              <p className="text-prevented-blue mb-3">Program Manager</p>
              <p className="text-muted-foreground">
                Michelle ensures our programs are delivered with quality and reach those who need them most.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center opacity-0 animate-fade-in delay-300">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
                  alt="James Wilson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">James Wilson</h3>
              <p className="text-prevented-blue mb-3">Outreach Coordinator</p>
              <p className="text-muted-foreground">
                James builds partnerships with schools and communities to expand our impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-prevented-blue-light/10">
        <div className="container">
          <SectionHeading 
            title="Our Certifications"
            subtitle="We maintain the highest standards in child protection and educational quality."
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm h-32 w-32 md:h-40 md:w-40 flex items-center justify-center opacity-0 animate-fade-in">
              <div className="text-center">
                <div className="font-bold text-prevented-blue text-lg mb-1">NSPCC</div>
                <div className="text-sm text-muted-foreground">Certified Partner</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm h-32 w-32 md:h-40 md:w-40 flex items-center justify-center opacity-0 animate-fade-in delay-100">
              <div className="text-center">
                <div className="font-bold text-prevented-blue text-lg mb-1">Ofsted</div>
                <div className="text-sm text-muted-foreground">Approved Provider</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm h-32 w-32 md:h-40 md:w-40 flex items-center justify-center opacity-0 animate-fade-in delay-200">
              <div className="text-center">
                <div className="font-bold text-prevented-blue text-lg mb-1">DBS</div>
                <div className="text-sm text-muted-foreground">Fully Checked</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm h-32 w-32 md:h-40 md:w-40 flex items-center justify-center opacity-0 animate-fade-in delay-300">
              <div className="text-center">
                <div className="font-bold text-prevented-blue text-lg mb-1">Charity Commission</div>
                <div className="text-sm text-muted-foreground">Registered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
