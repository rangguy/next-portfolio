export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rangga Dwi Mahendra",
    url: "https://ranggadwimah.vercel.app",
    jobTitle: "Backend Developer & Machine Learning Enthusiast",
    description: "Informatika graduate specializing in Backend Development and Machine Learning",
    image: "https://ranggadwimah.vercel.app/og-image.jpg",
    sameAs: ["https://www.linkedin.com/in/ranggadwimahendra", "https://github.com/rangguy"],
    email: "your-email@example.com",
    telephone: "+62-xxx-xxxx-xxxx",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Your City",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ranggadwimah.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://ranggadwimah.vercel.app#portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://ranggadwimah.vercel.app#about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://ranggadwimah.vercel.app#contact",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
