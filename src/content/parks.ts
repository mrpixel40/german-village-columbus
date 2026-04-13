export interface Park {
  name: string
  address: string
  acres: string
  established: string
  highlights: string[]
  description: string
}

export const parks: Park[] = [
  {
    name: "Schiller Park",
    address: "1069 Jaeger St, Columbus, OH 43206",
    acres: "23.45",
    established: "1867",
    highlights: [
      "Columbus's second-oldest park (after Goodale Park)",
      "Friedrich von Schiller bronze statue dedicated July 4, 1891",
      "Umbrella Girl fountain",
      "Actors' Theatre of Columbus summer Shakespeare performances",
      "Fishing pond, playground, basketball and tennis courts",
      "Performance amphitheater and gazebo",
      "Gardens maintained in partnership with German Village Garten Club"
    ],
    description: `Schiller Park is the heart of German Village in every sense that matters. Its 23.45 acres occupy the neighborhood's center, providing the green space, gathering ground, and cultural venue that anchors community life.

The park's history mirrors the neighborhood's. Originally called Stewart's Grove and then simply City Park, it became the social center for the German immigrant community that settled the surrounding blocks. On July 4, 1891, German-born residents dedicated a bronze statue of the poet Friedrich von Schiller during a Fourth of July celebration. The Columbus City Council formally renamed the park in his honor in 1905.

Today the park serves multiple functions simultaneously. The fishing pond draws anglers. The playground fills with families on weekends. The basketball and tennis courts host pickup games year-round. The amphitheater becomes an open-air theater each summer when Actors' Theatre of Columbus stages free Shakespeare performances and other productions under the trees.

The Umbrella Girl fountain has become one of the most photographed spots in Columbus, a charming bronze sculpture that captures the park's blend of European sensibility and Midwestern warmth. Gardens throughout the park are maintained through a partnership between the Columbus Recreation and Parks Department and volunteers from the German Village Garten Club.

For residents, Schiller Park is not a destination but a daily part of life. Morning dog walks loop the perimeter. Evening strolls end at the gazebo. Summer weekends bring picnic blankets and Actors' Theatre performances. The park's proximity to residential streets on all sides means it functions as a shared backyard for the neighborhood's 2,577 residents.`
  },
  {
    name: "Frank Fetch Memorial Park",
    address: "228 E Beck St, Columbus, OH 43206",
    acres: "0.2",
    established: "1966 (renamed 1985)",
    highlights: [
      "Named for Frank Fetch, 'The Father of German Village'",
      "Designed as a 19th-century German Bier Garten",
      "Gas-lit walkways and decorative pergola",
      "Maintained by German Village Garten Club volunteers",
      "One of the most used 0.2 acres in Franklin County",
      "Adjacent to the Book Loft and Third Street shops"
    ],
    description: `Frank Fetch Memorial Park proves that size is irrelevant when design and location are right. At 0.2 acres, it is one of the smallest parks in Columbus and one of the most beloved.

The park exists because Frank Fetch made it exist. In 1962, Fetch and other members of the German Village Society acquired the Beck Street lot, razed the house that stood on it, and worked with city parks staff to develop the space. Park landscape architects designed it along the lines of a 19th-century German Bier Garten, with brick walls, decorative pavements, flower planters, extensive landscaping, and gas lights that glow amber at dusk.

The city renamed the park in Frank Fetch's honor on January 23, 1985, recognizing his role not just in creating this particular green space but in founding the preservation movement that saved the entire neighborhood. Fetch is remembered as 'The Father of German Village,' and this park is his most tangible memorial.

Today the park functions as a pocket oasis on one of German Village's busiest blocks. It sits adjacent to the Book Loft and within steps of Third Street's restaurants and shops. The pergola provides shade for readers. The benches fill with coffee drinkers from nearby Stauf's. The garden plantings, maintained by German Village Garten Club volunteers, change with the seasons.

The German Village Society describes it as one of the most used 0.2 acres in Franklin County, a claim that anyone who has tried to find an empty bench on a Saturday afternoon can verify.`
  },
  {
    name: "Scioto Audubon Metro Park",
    address: "400 W Whittier St, Columbus, OH 43215",
    acres: "119",
    established: "2009",
    highlights: [
      "119 acres of reclaimed land along the Scioto River",
      "Connects to the 10-mile Scioto Greenway Trail",
      "Free-standing climbing wall (largest in the Midwest)",
      "Off-leash dog park",
      "Boat ramp and fishing access",
      "Bird watching with 100+ species documented",
      "Accessible from German Village via Brewery District"
    ],
    description: `Scioto Audubon Metro Park is not technically in German Village, but it is the neighborhood's most accessible large-scale green space. The 119-acre park occupies reclaimed land along the Scioto River, immediately west of the Brewery District and reachable from German Village by foot or bike in 15-20 minutes.

The park was developed by Columbus and Franklin County Metro Parks and opened in 2009 on land that had previously served as a municipal composting facility. The transformation from industrial waste site to wildlife preserve is one of Columbus's most impressive environmental reclamation stories.

The amenities serve a broader range of activities than Schiller Park's more traditional offerings. The free-standing climbing wall, the largest outdoor climbing wall in the Midwest, draws climbers from across the region. The off-leash dog park provides space that German Village's compact lots cannot. The boat ramp offers river access for kayakers and canoeists. Over 100 bird species have been documented on the property, making it a significant urban birding destination.

The Scioto Greenway Trail passes through the park, providing a paved multi-use path that extends north to downtown Columbus and beyond. Cyclists and runners from German Village use the trail as a transportation corridor and fitness route, connecting the historic neighborhood to the city's growing trail network.

For German Village residents, Scioto Audubon functions as the neighborhood's extended backyard — the place to go when 23 acres of Schiller Park feels too small or when you need to let a dog run.`
  },
  {
    name: "Livingston Park",
    address: "Livingston Avenue, Columbus, OH 43206",
    acres: "5+",
    established: "Early 20th century",
    highlights: [
      "Neighborhood park on German Village's eastern edge",
      "Playground and open green space",
      "Community gathering area",
      "Connects residential streets to Livingston Avenue corridor"
    ],
    description: `Livingston Park occupies the transitional space between German Village and the neighborhoods to its east. The park provides a green buffer along Livingston Avenue, one of the neighborhood's busier traffic corridors, and serves the residential community on both sides of the street.

The park includes playground equipment, open lawn areas, and mature trees that provide shade in summer months. It lacks the historic character and intensive landscaping of Schiller Park or Frank Fetch Park but serves the practical purpose of providing recreation space on the eastern side of the neighborhood where parkland is otherwise limited.

For German Village residents on the eastern and northeastern edges of the neighborhood, Livingston Park offers a closer alternative to the longer walk to Schiller Park. The park also serves residents of adjacent communities who may not have neighborhood parks of their own.`
  }
]
