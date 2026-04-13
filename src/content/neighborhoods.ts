export interface Neighborhood {
  slug: string
  name: string
  metaDescription: string
  location: string
  medianPrice: string
  vibe: string
  content: string
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'brewery-district',
    name: 'Brewery District',
    metaDescription: 'Brewery District Columbus OH neighborhood guide. Former brewery district with converted lofts, nightlife, Scioto Audubon access, and German Village-adjacent living.',
    location: 'North and west of German Village, along the Scioto River',
    medianPrice: '$322,500',
    vibe: 'Urban industrial, nightlife-forward, young professional',
    content: `
      <p>The Brewery District sits where German Village meets the Scioto River, occupying the former industrial corridor that once housed Columbus's brewing industry. In 1836, G.M. Hernacourt, Louis Hoster, and Jacob Silbernagel opened the area's first brewery, launching an industry that would define the district for nearly a century. Prohibition shuttered every brewery in 1919 and scattered the German workforce that had sustained them.</p>
      <p>The district's second life began in the 1990s, when developers recognized that red-brick breweries and warehouses made excellent loft apartments and entertainment venues. Today, the Brewery District is a nightlife and dining destination anchored by the Worly Building complex, which houses a theater, bars, a winery, and a music venue.</p>
      <p>The residential market skews heavily rental, with 74.3% of residents renting. The median sale price of $322,500 represents a significant discount to German Village proper, making the district attractive to buyers who want proximity to the village's amenities at a lower entry price. Many of the converted factory buildings offer loft-style living with exposed brick, high ceilings, and industrial character.</p>
      <p>The district's western edge connects to the Scioto Audubon Metro Park, a 119-acre wildlife preserve with a boat ramp, dog park, rock-climbing structures, and access to the 10-mile Scioto Greenway Trail. That green space asset is a significant differentiator from German Village, which relies on the more intimate scale of Schiller Park and Frank Fetch Park.</p>
    `
  },
  {
    slug: 'schumacher-place',
    name: 'Schumacher Place',
    metaDescription: 'Schumacher Place Columbus OH neighborhood guide. German Village\'s quieter neighbor with brick streets, median home price $522K, and historic charm.',
    location: 'Directly east of German Village',
    medianPrice: '$522,450',
    vibe: 'Quiet residential, historic, German Village-adjacent',
    content: `
      <p>Schumacher Place offers what German Village delivers, at roughly 90% of the price with 50% of the foot traffic. Established as a historic district in 1983, the neighborhood shares German Village's brick-paved streets, Italianate architecture, and meticulous gardens while maintaining a quieter, more residential character.</p>
      <p>The median home price of $522,450 sits below German Village's $576,000, though the gap has narrowed as buyers priced out of the more famous neighborhood have discovered Schumacher Place's virtues. Homes range from $285,000 to $1,399,000, reflecting a similar spectrum of unrenovated cottages to fully-restored showpieces.</p>
      <p>The average household income of $120,861 and college graduation rate of 72.6% mirror German Village's demographics. The population skews young professional, with the same mix of singles, couples, and empty-nesters who are drawn to historic urban neighborhoods.</p>
      <p>Walking to German Village's commercial corridor on Third Street takes five to ten minutes from most Schumacher Place addresses. The neighborhood lacks its own commercial district, which is either a drawback or a feature depending on whether you value quiet residential streets over doorstep convenience.</p>
    `
  },
  {
    slug: 'merion-village',
    name: 'Merion Village',
    metaDescription: 'Merion Village Columbus OH neighborhood guide. Historic neighborhood south of German Village with median home price $339K, murals, and emerging dining scene.',
    location: 'Directly south of German Village',
    medianPrice: '$339,000',
    vibe: 'Up-and-coming, diverse, artist-friendly, value-oriented',
    content: `
      <p>William Merion acquired 1,800 acres near the Scioto River in 1809 and developed a port of entry that became the foundation of one of Columbus's oldest neighborhoods. Two centuries later, Merion Village operates as German Village's more affordable southern neighbor, with a median home price of $339,000 that represents 59% of German Village's median.</p>
      <p>That price gap has attracted a wave of young buyers and investors over the past decade. Homes sell in an average of 28 days, faster than the national average of 54, signaling strong demand at the current price point. The housing stock is primarily small to medium single-family homes from the early 20th century, with many showing recent renovations that have modernized interiors while preserving historic exteriors.</p>
      <p>Merion Village's character differs from German Village in important ways. The murals that decorate brick walls throughout the neighborhood give it a more artistic, less formal feel. Parsons Avenue, the eastern boundary, is developing its own commercial corridor with independent restaurants, bars, and shops that cater to the neighborhood's younger demographic.</p>
      <p>The neighborhood sits on the bank of the Scioto River with trail access and green space along the waterfront. Community events organized by the Merion Village Association bring residents together and have helped build the social infrastructure that supports rising property values.</p>
    `
  },
  {
    slug: 'hungarian-village',
    name: 'Hungarian Village',
    metaDescription: 'Hungarian Village Columbus OH neighborhood guide. Historic eastern European enclave south of German Village with affordable homes and community revitalization.',
    location: 'South of Merion Village, between Parsons Avenue and South High Street',
    medianPrice: '$150,000 - $250,000',
    vibe: 'Historic, working-class roots, revitalizing, affordable',
    content: `
      <p>In 1973, Reverend Zoltan Szabo looked at what preservation had accomplished in nearby German Village and proposed defining the community where his Hungarian Reformed Church had served for over a century as Hungarian Village. The name stuck, and the four-by-seven-block neighborhood between Parsons Avenue and South High Street has carried it since.</p>
      <p>Hungarian Village represents the next chapter of the immigration story that built German Village. As the 19th century turned to the 20th, eastern European immigrants settled south of the German enclave, establishing their own churches, shops, and community institutions. The Hungarian Reformed Church, built from the same red clay brick as the homes around it in traditional Hungarian style, remains the neighborhood's most prominent landmark.</p>
      <p>Real estate in Hungarian Village offers the most affordable entry point among German Village's neighboring communities. Home prices range from $150,000 to $250,000, making it accessible to buyers who cannot reach the $300,000+ price points of Merion Village, Schumacher Place, or German Village proper.</p>
      <p>The neighborhood is in the early stages of revitalization. Investment patterns suggest it may follow the trajectory that Merion Village traced a decade ago: gradual renovation of existing housing stock, growth of small commercial ventures, and steady appreciation driven by proximity to more established neighborhoods to the north.</p>
    `
  },
  {
    slug: 'old-oaks-historic-district',
    name: 'Old Oaks Historic District',
    metaDescription: 'Old Oaks Historic District Columbus OH neighborhood guide. Streetcar suburb from 1891 with grand homes, tree-lined streets, and German Village proximity.',
    location: 'Southeast of German Village and east of Schumacher Place',
    medianPrice: '$250,000 - $400,000',
    vibe: 'Grand streetcar suburb, tree-lined, stately, residential',
    content: `
      <p>Old Oaks exists because of electricity. When Columbus electrified its streetcar system in 1891, developers platted a new residential district along the lines, creating a suburb that middle and upper-class families could reach by rail. The result was a neighborhood of larger homes on wider lots than German Village, with mature oak trees that gave the district its name.</p>
      <p>The neighborhood became a historic district in 1986 after residents petitioned the city for the designation. Today, Old Oaks is considered the most intact of Columbus's turn-of-the-century streetcar-era neighborhoods, with homes that reflect the period's architectural ambition: larger footprints, wrap-around porches, and decorative woodwork that the more modest German Village cottages did not attempt.</p>
      <p>Home prices in Old Oaks range from $250,000 to $400,000, offering more house per dollar than German Village or Schumacher Place. The trade-off is location. Old Oaks sits further from German Village's commercial corridor and downtown Columbus, making it somewhat less walkable to the amenities that drive the Village's premium pricing.</p>
      <p>For buyers who prioritize interior space and architectural grandeur over walkability and nightlife access, Old Oaks represents one of the stronger values in Columbus's historic neighborhood inventory.</p>
    `
  },
  {
    slug: 'downtown-columbus',
    name: 'Downtown Columbus',
    metaDescription: 'Downtown Columbus OH neighborhood guide. Urban core with high-rise living, arts district, Scioto Mile, and walkable access north of German Village.',
    location: 'Directly north of German Village across Livingston Avenue',
    medianPrice: '$250,000 - $500,000+',
    vibe: 'Urban core, high-rise living, arts and government center',
    content: `
      <p>Downtown Columbus begins where German Village ends, separated by Livingston Avenue. The relationship between the two is symbiotic: German Village residents walk to downtown jobs, restaurants, and cultural venues, while downtown residents walk south to German Village for neighborhood-scale dining and shopping that the urban core lacks.</p>
      <p>The residential market downtown has expanded dramatically over the past decade. High-rise condominium and apartment buildings along the Scioto Mile riverfront offer a living experience fundamentally different from German Village's brick cottages. Floor-to-ceiling windows, rooftop pools, and concierge services replace brick streets and garden plots.</p>
      <p>Downtown's assets include the Columbus Museum of Art, the Ohio Theatre, COSI Science Center, the Scioto Mile park system, and the full range of state government offices. The Short North Arts District, Columbus's most commercially active neighborhood, extends north from downtown along High Street.</p>
      <p>For German Village residents, downtown is less a neighboring community than an extension of daily life. The ability to walk to work at a downtown office, catch a show at the Ohio Theatre, and return home to a brick cottage on a quiet street is the specific lifestyle proposition that makes German Village work.</p>
    `
  },
  {
    slug: 'livingston-park',
    name: 'Livingston Park & Southern Orchards',
    metaDescription: 'Livingston Park and Southern Orchards Columbus OH neighborhood guide. Affordable neighborhoods east of German Village with diverse community and growing investment.',
    location: 'East and southeast of German Village',
    medianPrice: '$150,000 - $275,000',
    vibe: 'Diverse, affordable, community-oriented, transitional',
    content: `
      <p>Livingston Park and Southern Orchards occupy the territory east of German Village where the brick streets give way to standard pavement and the architectural consistency loosens. These neighborhoods have not experienced the intensive preservation and investment that transformed German Village, but their proximity to the city's most valuable historic district creates both opportunity and tension.</p>
      <p>Home prices range from $150,000 to $275,000, making these neighborhoods among the most affordable options within walking distance of German Village's amenities. The housing stock includes a mix of early-to-mid 20th century homes, some with the brick construction common to the broader area and others showing later building periods and materials.</p>
      <p>The communities are more diverse than German Village in both demographics and income levels, reflecting their position outside the historic district's price premium. Community organizations in both neighborhoods are active in advocating for investment, safety improvements, and commercial development that serves existing residents.</p>
      <p>For investors and buyers with renovation experience, Livingston Park and Southern Orchards represent the kind of opportunity that German Village itself presented in the 1960s and 1970s: solid housing stock in walkable locations that has not yet been recognized by the broader market. Whether that potential materializes depends on continued development momentum and the expansion of the commercial corridor along Parsons Avenue.</p>
    `
  },
  {
    slug: 'vassor-village',
    name: 'Vassor Village & Reeb-Hosack',
    metaDescription: 'Vassor Village and Reeb-Hosack Columbus OH neighborhood guide. South side neighborhoods near German Village with affordable housing and community development.',
    location: 'South of German Village and Schumacher Place',
    medianPrice: '$125,000 - $225,000',
    vibe: 'Working-class, community-driven, emerging, affordable',
    content: `
      <p>Vassor Village and the Reeb-Hosack area represent the southern extension of the community network that radiates outward from German Village. These working-class neighborhoods share the broader area's brick building traditions and grid street patterns while operating at significantly lower price points.</p>
      <p>The Reeb-Hosack area has seen recent community development energy, with organizations working to create gathering spaces and programming that strengthen neighborhood identity. The Reeb Avenue Center, a community hub, has become a focal point for events, meetings, and services that serve the surrounding population.</p>
      <p>Home prices in these neighborhoods range from $125,000 to $225,000, the lowest among German Village's neighboring communities. The housing stock is modest but solid, with many homes offering renovation potential for buyers willing to invest sweat equity.</p>
      <p>The relationship to German Village is aspirational more than functional. Walking to Third Street from the southern reaches of these neighborhoods takes 20-30 minutes, placing them at the outer edge of practical walkability. However, the Parsons Avenue commercial corridor, which bisects the area, is developing its own identity with small restaurants, shops, and services that reduce the need to travel north for daily needs.</p>
    `
  }
]

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find(n => n.slug === slug)
}
