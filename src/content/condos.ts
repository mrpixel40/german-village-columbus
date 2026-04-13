export interface Condo {
  slug: string
  name: string
  metaDescription: string
  address: string
  priceRange: string
  units: string
  yearBuilt: string
  style: string
  content: string
}

export const condos: Condo[] = [
  {
    slug: 'jaeger-square',
    name: 'Jaeger Square',
    metaDescription: 'Jaeger Square German Village Columbus: 261 luxury apartments and townhomes at 850 Jaeger St. Studios, 1-bed, and 2-bed units with courtyards and modern amenities.',
    address: '850 Jaeger Street, Columbus, OH 43206',
    priceRange: '$1,400 - $2,800/mo (rental)',
    units: '261 residences',
    yearBuilt: 'Modern construction',
    style: 'Contemporary with neighborhood-appropriate design',
    content: `
      <p>Jaeger Square is the largest residential development in the German Village area, delivering 261 units across a mix of studios, one-bedrooms, two-bedrooms, and private walk-up townhomes. The development threads modern construction through the neighborhood's historic fabric, centering its design around two landscaped courtyards and expansive outdoor gathering areas.</p>
      <p>The unit mix serves German Village's primary demographic: young professionals and couples who want new-construction amenities without leaving the neighborhood. Studios start around $1,400 per month, with two-bedrooms reaching $2,800 depending on floor plan and finishes. The townhome units, with private street-level entrances, command the top of the price range.</p>
      <p>Jaeger Square's location on the eastern edge of German Village provides walkable access to Third Street's shops and restaurants while sitting slightly removed from the neighborhood's busiest blocks. Schiller Park is a short walk south, and downtown Columbus is accessible on foot in under 20 minutes.</p>
      <p>As a rental community, Jaeger Square serves a different market than the neighborhood's for-sale condos. It functions as an entry point for residents testing German Village before committing to a purchase, and as a long-term home for those who prefer the flexibility of renting in a neighborhood where buying requires significant capital.</p>
    `
  },
  {
    slug: 'waldheim-condominiums',
    name: 'Waldheim Condominiums',
    metaDescription: 'Waldheim Condominiums in German Village Columbus OH. Historic condo conversion with brick architecture, updated interiors, and walkable location in the heart of the village.',
    address: 'German Village, Columbus, OH 43206',
    priceRange: '$250,000 - $425,000',
    units: 'Small-scale conversion',
    yearBuilt: 'Historic building, converted',
    style: 'Historic brick conversion',
    content: `
      <p>The Waldheim condominiums represent the type of development most characteristic of German Village's condo market: a small-scale conversion of an existing historic structure into residential units. Rather than ground-up construction, which the German Village Commission's design review makes difficult, the Waldheim preserved its exterior brick facade while reconfiguring interior spaces into modern living units.</p>
      <p>Units in the Waldheim typically feature exposed brick walls, hardwood floors, and updated kitchens and bathrooms. The historic envelope provides character that new construction cannot replicate, though it also means the quirks that come with older buildings: varying ceiling heights, non-standard room dimensions, and mechanical systems that fit within existing structural constraints.</p>
      <p>Pricing for Waldheim units has historically ranged from the mid-$200s to the low $400s, positioning them as an entry point into German Village homeownership for buyers priced out of the single-family market.</p>
    `
  },
  {
    slug: 'mitoff-4th-condos',
    name: 'Mitoff 4th Condominiums',
    metaDescription: 'Mitoff 4th Condos in Merion Village / German Village Columbus OH. Condo complex near German Village with accessible pricing and neighborhood charm.',
    address: 'Merion Village / German Village border, Columbus, OH 43206',
    priceRange: '$200,000 - $350,000',
    units: 'Multiple units',
    yearBuilt: 'Converted',
    style: 'Traditional brick',
    content: `
      <p>The Mitoff 4th condominiums sit at the border of Merion Village and German Village, occupying a position that offers proximity to German Village's amenities at a price point that reflects the Merion Village address. For buyers who want to walk to Schiller Park and Third Street but cannot stretch to German Village's median price, Mitoff 4th presents a practical compromise.</p>
      <p>The complex features multi-bedroom units with traditional brick construction consistent with the surrounding neighborhood's character. Interior finishes vary by unit, with some showing recent updates and others offering renovation potential at a lower entry price.</p>
      <p>The location benefits from both neighborhoods' strengths. German Village's commercial corridor is accessible on foot, while Merion Village's own emerging restaurant and bar scene adds dining options to the south. Parsons Avenue, with its growing collection of independent businesses, is a short walk east.</p>
    `
  },
  {
    slug: 'beck-place-condominiums',
    name: 'Beck Place Condominiums',
    metaDescription: 'Beck Place Condominiums German Village Columbus. Historic condo building near Frank Fetch Park with brick architecture and central village location.',
    address: 'Near Beck Street, German Village, Columbus, OH 43206',
    priceRange: '$275,000 - $400,000',
    units: 'Boutique scale',
    yearBuilt: 'Historic conversion',
    style: 'Historic brick Italianate',
    content: `
      <p>Beck Place takes its name from Beck Street, home to Frank Fetch Memorial Park and one of German Village's most photographed blocks. The condominiums occupy a converted historic structure within steps of the park's gas-lit walkways and the Book Loft's 32 rooms of discounted books.</p>
      <p>The location is among the best in the neighborhood for walkability. Third Street's full commercial corridor is immediately accessible, and Schiller Park is a short walk south. Units feature the exposed brick and hardwood floors typical of German Village conversions, with individual unit sizes and configurations reflecting the original building's historic layout.</p>
      <p>Beck Place units rarely come to market, a function of both the small number of total units and the desirability of the location. When they do list, they tend to move quickly and at prices that reflect the premium central German Village commands.</p>
    `
  },
  {
    slug: 'renaissance-condominiums',
    name: 'Renaissance Condominiums',
    metaDescription: 'Renaissance Condominiums German Village area Columbus OH. Condo community with updated units, parking, and easy access to German Village shops and restaurants.',
    address: 'German Village area, Columbus, OH 43206',
    priceRange: '$225,000 - $375,000',
    units: 'Mid-size complex',
    yearBuilt: 'Late 20th century',
    style: 'Traditional with modern amenities',
    content: `
      <p>The Renaissance Condominiums offer a somewhat different proposition than German Village's historic conversions. Built later than many of the neighborhood's structures, the Renaissance provides more conventional condo amenities including dedicated parking, more uniform unit layouts, and mechanical systems that do not require the creative adaptation necessary in century-old buildings.</p>
      <p>Units range from one-bedroom to two-bedroom configurations with pricing that sits below the German Village single-family median. The complex appeals to buyers who want the neighborhood's location and lifestyle without the maintenance responsibilities and preservation constraints of a historic home.</p>
      <p>The trade-off is character. Renaissance units lack the exposed brick, original hardwood, and architectural detail that define German Village's converted properties. For some buyers, that is a fair exchange for lower maintenance costs and predictable building systems.</p>
    `
  },
  {
    slug: 'mohawk-street-condos',
    name: 'Mohawk Street Condominiums',
    metaDescription: 'Mohawk Street condos in German Village Columbus. Historic brick conversions on one of the village\'s most prestigious streets with Italianate architecture.',
    address: 'Mohawk Street, German Village, Columbus, OH 43206',
    priceRange: '$300,000 - $500,000+',
    units: 'Various small conversions',
    yearBuilt: '1870s-1890s buildings',
    style: 'Italianate brick',
    content: `
      <p>Mohawk Street is German Village's prestige address, lined with some of the neighborhood's finest Italianate homes. Several of these larger historic structures have been divided into condominium units, creating ownership opportunities on a street where single-family homes routinely sell above $700,000.</p>
      <p>Condo units on Mohawk tend to occupy portions of grand homes that were originally built with multiple parlors, formal dining rooms, and service areas. The conversions preserve original architectural details including plaster ceiling medallions, carved wood mantels, and stone lintels while carving out modern kitchens and bathrooms within the historic envelope.</p>
      <p>Pricing reflects the address. Mohawk Street condos trade at a premium to comparable units elsewhere in German Village, driven by the street's architectural quality, mature tree canopy, and proximity to Schiller Park.</p>
    `
  },
  {
    slug: 'city-park-avenue-townhomes',
    name: 'City Park Avenue Townhomes',
    metaDescription: 'City Park Avenue townhomes and condos in German Village Columbus. Schiller Park-adjacent living with historic brick architecture and garden-level units.',
    address: 'City Park Avenue, German Village, Columbus, OH 43206',
    priceRange: '$350,000 - $550,000',
    units: 'Various',
    yearBuilt: '1870s-1900s',
    style: 'Italianate and Queen Anne row houses',
    content: `
      <p>City Park Avenue runs along the western edge of Schiller Park, making it one of the most desirable addresses in German Village for buyers who prioritize green space. Several of the avenue's historic row houses and larger homes have been converted to multi-unit ownership, creating townhome and condo options with park views.</p>
      <p>The architectural quality along City Park Avenue is consistently high. Italianate and Queen Anne facades with decorative cornices, stone lintels, and wrought-iron fencing face the park's mature trees and walking paths. Interior spaces in converted units vary, but the best examples feature original hardwood floors, high ceilings, and natural light from tall period windows.</p>
      <p>Living on City Park Avenue means daily access to Schiller Park's 23 acres without crossing a street. Summer evenings bring Actors' Theatre performances visible from front stoops. The trade-off is that park-facing units sacrifice some privacy during events and busy summer weekends.</p>
    `
  },
  {
    slug: 'thurman-avenue-condos',
    name: 'Thurman Avenue Condominiums',
    metaDescription: 'Thurman Avenue condos in German Village Columbus. Live near the famous Thurman Cafe on one of German Village\'s most recognized streets.',
    address: 'Thurman Avenue, German Village, Columbus, OH 43206',
    priceRange: '$225,000 - $400,000',
    units: 'Various small conversions',
    yearBuilt: 'Late 1800s buildings',
    style: 'Historic brick residential',
    content: `
      <p>Thurman Avenue's fame extends beyond the neighborhood, thanks largely to the Thurman Cafe and its nationally-recognized burgers. But the street is also home to several small condo conversions that offer ownership at prices below the German Village single-family median.</p>
      <p>These conversions typically occupy two-story brick buildings that originally functioned as duplexes or small commercial spaces. Units range from compact one-bedrooms to spacious two-bedroom configurations, with finishes that span from original-condition to fully renovated.</p>
      <p>The Thurman Avenue location provides a different German Village experience than the quieter residential streets to the north. There is more foot traffic, more noise on weekends when the cafe draws crowds, and a livelier street-level energy. For buyers who want neighborhood activity rather than seclusion, that is a feature rather than a drawback.</p>
    `
  },
  {
    slug: 'south-third-street-lofts',
    name: 'South Third Street Lofts',
    metaDescription: 'South Third Street loft condos in German Village Columbus. Commercial-to-residential conversions above shops on German Village\'s main commercial street.',
    address: 'South Third Street, German Village, Columbus, OH 43206',
    priceRange: '$275,000 - $450,000',
    units: 'Various upper-floor conversions',
    yearBuilt: '1860s-1900s commercial buildings',
    style: 'Commercial brick with loft interiors',
    content: `
      <p>South Third Street is German Village's commercial artery, and several of its historic storefronts include upper-floor residential units that function as loft-style condominiums. Living above the Book Loft, next to Stauf's, or within steps of Pistacia Vera carries obvious lifestyle appeal.</p>
      <p>The loft conversions take advantage of the commercial buildings' larger floor plates and higher ceilings. Exposed brick, original timber beams, and industrial-scale windows create living spaces with character that purpose-built residential construction cannot replicate. The trade-off is noise. Third Street is the neighborhood's busiest corridor, and upper-floor residents hear the activity below.</p>
      <p>These units appeal to buyers who prioritize urban energy and walkability over quiet residential streets. The commute to coffee is measured in steps rather than blocks, and the neighborhood's full range of dining and shopping is literally at your doorstep.</p>
    `
  },
  {
    slug: 'brewery-district-adjacent-condos',
    name: 'Brewery District Adjacent Condominiums',
    metaDescription: 'Brewery District condos near German Village Columbus. Former brewery and warehouse conversions with industrial character, loft living, and village-adjacent location.',
    address: 'Brewery District / German Village border, Columbus, OH 43206',
    priceRange: '$200,000 - $400,000',
    units: 'Various complexes',
    yearBuilt: 'Late 1800s industrial conversions',
    style: 'Industrial brick warehouse conversion',
    content: `
      <p>The Brewery District, immediately north and west of German Village, offers a different flavor of historic condo living. Where German Village conversions occupy former homes and small commercial buildings, Brewery District condos tend to inhabit converted breweries and warehouses with dramatically different scale and character.</p>
      <p>These industrial conversions feature soaring ceilings, massive windows, and open floor plans that German Village's residential-scale buildings cannot accommodate. The red-brick brewery buildings carry the same material vocabulary as German Village proper, creating visual continuity between the neighborhoods even as the architectural scale shifts.</p>
      <p>The median sale price in the Brewery District sits around $322,500, representing a meaningful discount to German Village proper. For buyers who want the lifestyle benefits of the greater German Village area without the premium pricing, the Brewery District's condo stock represents the strongest value proposition in the immediate vicinity.</p>
      <p>The neighborhood continues to develop, with ongoing conversions of remaining industrial buildings and selective new construction. The Scioto Audubon Metro Park's 119 acres are accessible from the district's western edge, adding a green space asset that German Village proper cannot match in scale.</p>
    `
  }
]

export function getCondoBySlug(slug: string): Condo | undefined {
  return condos.find(c => c.slug === slug)
}
