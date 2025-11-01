import React from 'react';
import { Globe, Target, Users, CheckCircle, Award, TrendingUp, ArrowRight, Building2 } from 'lucide-react';
import Image from 'next/image';

const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg ${className}`}>{children}</div>
);

const Button = ({ children, size = 'md', className = '', ...props }) => {
  const sizeClasses = {
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  };
  
  return (
    <button 
      className={`rounded-lg font-medium transition-all ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Link = ({ children, href }) => (
  <a href={href} className="inline-block">{children}</a>
);

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* About Organizations Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-medium  text-gray-900 mb-6 ">About the Organizers</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Two premier organizations joining forces to advance scientific knowledge, technological innovation, 
              and create platforms for global collaboration and excellence.
            </p>
          </div>

          {/* Two Organizations Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Zep Research */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              {/* Logo Placeholder */}
              <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                 <Image src={'/assets/zepresearch.png'} height={300} width={300} className='w-auto h-24 '  alt='zep-research'/>
                </div>
              </div>

              {/* <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4 text-center font-serif">Zep Research</h3> */}
              
              <p className="text-gray-600 leading-relaxed mb-6">
                ZEP RESEARCH OPC PRIVATE LIMITED is a premier research organization dedicated to advance scientific knowledge and
                technological innovation. Since our founding, we have been at the forefront of organizing world-class
                conferences, symposiums, and research initiatives that bring together the brightest minds from academia
                and industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
                    <p className="text-sm text-gray-600">Connecting researchers and innovators across 50+ countries worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Focused Excellence</h4>
                    <p className="text-sm text-gray-600">Specialized expertise in AI, robotics, and emerging technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Community Building</h4>
                    <p className="text-sm text-gray-600">Fostering collaboration between academia, industry, and government</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* DSAK Group */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              {/* Logo Placeholder */}
              <div className="w-full h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                                  <Image src={'/assets/dsak-logo.jpg'} height={300} width={300} className='w-auto h-30 rounded-full bg-white pl-1 object-contain '  alt='Dsak'/>

                </div>
              </div>

              
              <p className="text-gray-600 leading-relaxed mb-6">
                Initially established in 2019 as a commodity wholesaler, DSAK is a Bumiputera-owned company that 
                supplies various provisions from oil & gas to food products in Malaysia and internationally. We supply 
                to Government-funded boarding schools, Malaysian Armed Forces' retail network, and various cooperatives.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Vision</h4>
                    <p className="text-sm text-gray-600">Strive to meet our clients' requirements and exceed expectations to preserve long-term business relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Mission</h4>
                    <p className="text-sm text-gray-600">Create close coalitions with clients to complement and be a pivotal part of their business aspirations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Our Aspiration</h4>
                    <p className="text-sm text-gray-600">To be a leading and reputable trade, services, and property company in the region and globally</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Highlights Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Platform</h3>
              <p className="text-gray-600">Connecting diverse industries and research communities worldwide</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Target className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Collaboration</h3>
              <p className="text-gray-600">Combining research excellence with business acumen for impactful outcomes</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Network</h3>
              <p className="text-gray-600">Bridging academia, industry, and government sectors</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Combined Mission Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-medium text-gray-900 mb-6 ">Our Shared Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To accelerate scientific progress and technological advancement by creating platforms for knowledge
                exchange, collaboration, and innovation. We believe that breakthrough discoveries happen when diverse
                minds come together to tackle humanity's greatest challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Facilitate groundbreaking research collaborations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Bridge the gap between research and application</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Nurture the next generation of innovators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Promote ethical and responsible innovation</span>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="w-full h-48  rounded-lg mb-6 flex items-center justify-center">
<Image src={'https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'} alt='image-organizer ' height={500} width={550} className=' h-52 w-full object-cover rounded-2xl'/>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Driving Innovation Together</h3>
                <p className="text-gray-600 mb-6">
                  Through our carefully curated events and research initiatives, we create environments where
                  breakthrough ideas flourish and transformative partnerships are born.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Events Organized</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-medium text-gray-900 text-center mb-16 ">Our Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">25+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-sm text-gray-600">Conferences and research initiatives spanning 25+ countries across 5 continents</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">10,000+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Academic Network</h3>
              <p className="text-sm text-gray-600">Connected network of researchers, academics, and industry professionals</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">5,000+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Research Excellence</h3>
              <p className="text-sm text-gray-600">Facilitated publication of peer-reviewed research papers in prestigious journals</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">200+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry Impact</h3>
              <p className="text-sm text-gray-600">Partnerships with organizations driving real-world implementation of research findings</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Recognition & Awards</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Best Conference Organizer 2023 - Tech Innovation Awards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Excellence in Research Facilitation - Global Research Council</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Outstanding Contribution to AI Community - IEEE</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impact & Growth</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Research Collaborations</span>
                    <span className="text-sm font-semibold text-gray-900">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Attendee Satisfaction</span>
                    <span className="text-sm font-semibold text-gray-900">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Industry Partnerships</span>
                    <span className="text-sm font-semibold text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Partner with Us</h2>
              <p className="text-xl mb-8 opacity-90">
                Join forces with Zep Research and DSAK Group to create impactful research initiatives, organize world-class 
                conferences, and drive innovation in your field. Together, we can shape the future of scientific discovery 
                and technological advancement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Globe className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Global Platform</h3>
                  <p className="text-sm opacity-90">Access our worldwide network of researchers and institutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Target className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Targeted Reach</h3>
                  <p className="text-sm opacity-90">Connect with your specific audience and research community</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Award className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Proven Excellence</h3>
                  <p className="text-sm opacity-90">Leverage our 5+ years of successful event organization</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/exhibit-and-sponsor">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8"
                  >
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}