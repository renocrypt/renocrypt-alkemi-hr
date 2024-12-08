import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Users, Shield, BarChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Transform Human Potential into <span className="text-primary">Organizational Gold</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            At Alkemi HR, we're rewriting the ancient art of transformation for the digital age. Our intelligent platform seamlessly blends cutting-edge AI with human-centered design, turning the complexity of workforce management into pure organizational value.
          </p>
          <div className="mt-10">
            <Button size="lg" className="mr-4">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="AI-Powered Insights"
                description="Harness the power of AI to gain deep insights into your workforce and make data-driven decisions."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Talent Management"
                description="Streamline your recruitment, onboarding, and employee development processes with our integrated tools."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Compliance & Security"
                description="Stay compliant with GDPR, CCPA, and other regulations while ensuring the highest level of data security."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10 text-primary" />}
                title="Performance Analytics"
                description="Track and optimize employee performance with advanced analytics and customizable KPIs."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the ranks of forward-thinking organizations that have already unlocked their full potential with Alkemi HR.
          </p>
          <Button size="lg">
            Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        © 2023 Alkemi HR. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-background rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
