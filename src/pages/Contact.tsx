
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-prevented-blue-dark text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl opacity-0 animate-fade-in delay-100">
              We're here to help. Reach out to us with any questions or concerns about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card className="p-6 flex flex-col items-center text-center opacity-0 animate-fade-in">
              <div className="h-12 w-12 rounded-full bg-prevented-blue-light/20 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-prevented-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Mon-Fri, 9am-5pm</p>
              <Button asChild variant="link" className="text-prevented-blue">
                <a href="tel:+441234567890">+44 1234 567890</a>
              </Button>
            </Card>
            
            {/* Email */}
            <Card className="p-6 flex flex-col items-center text-center opacity-0 animate-fade-in delay-100">
              <div className="h-12 w-12 rounded-full bg-prevented-blue-light/20 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-prevented-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
              <Button asChild variant="link" className="text-prevented-blue">
                <a href="mailto:info@prevented.org.uk">info@prevented.org.uk</a>
              </Button>
            </Card>
            
            {/* Visit */}
            <Card className="p-6 flex flex-col items-center text-center opacity-0 animate-fade-in delay-200">
              <div className="h-12 w-12 rounded-full bg-prevented-blue-light/20 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-prevented-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">By appointment only</p>
              <address className="not-italic">
                123 Prevention Street<br />
                London, W1 1AA<br />
                United Kingdom
              </address>
            </Card>
          </div>
          
          {/* Map */}
          <SectionHeading 
            title="Find Us"
            subtitle="Our office is located in central London, easily accessible by public transport."
          />
          
          <div className="rounded-lg overflow-hidden shadow-md h-[400px] opacity-0 animate-fade-in">
            <iframe
              title="PreventED Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.659186096041!2d-0.12058735!3d51.5074456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1713817583405!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Emergency Help */}
      <section className="py-16 bg-prevented-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 opacity-0 animate-fade-in">Need Immediate Help?</h2>
            <p className="text-lg mb-8 opacity-0 animate-fade-in delay-100">
              If you or a child is in immediate danger, please contact:
            </p>
            <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in delay-200">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Emergency Services</h3>
                <p className="text-muted-foreground mb-4">For immediate danger</p>
                <Button asChild className="w-full">
                  <a href="tel:999">Call 999</a>
                </Button>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-2">Childline</h3>
                <p className="text-muted-foreground mb-4">For children who need to talk</p>
                <Button asChild className="w-full">
                  <a href="tel:08001111">Call 0800 1111</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
