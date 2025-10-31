"use client"

export default function PhotoGallerySection() {
  // Gallery images from Unsplash - professional event/conference photography
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      alt: "Event planning documents",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      alt: "Hands holding event materials",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      alt: "Business professionals at event",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      alt: "Conference room overview",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      alt: "Modern event venue",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
      alt: "Crowd at event" ,  hasOverlay: true,
    },
 
  ]

  return (
    <section className="w-full px-6 py-20 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content Section */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="rounded-3xl p-8 lg:p-12 max-w-sm  shadow-lg  backdrop-blur-sm">
              {/* blue hashtag label */}
            

              {/* Main heading */}
              <h2 className="text-4xl md:text-6xl font-medium text-black">It was an amazing crowd</h2>
            </div>
          </div>

          {/* Right Grid Section */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square"
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />

                  {/* Instagram overlay on last image */}
                  {image.hasOverlay && (
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-end justify-end p-4">
                      <div className="text-right">
                        <div className="text-red-500 font-semibold text-xs tracking-wide mb-1"># Instagram</div>
                        <div className="text-white font-bold text-sm lg:text-base">@Gdas</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
