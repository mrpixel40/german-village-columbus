export interface Favorite {
  name: string
  type: string
  address: string
  knownFor: string
  description: string
}

export const favorites: Favorite[] = [
  {
    name: "Stauf's Coffee Roasters",
    type: "Coffee Roaster & Cafe",
    address: "1277 Grandview Ave / German Village location on S 3rd St",
    knownFor: "Columbus's original specialty roaster. Small-batch Arabica beans, fantastic outdoor seating.",
    description: "Stauf's has been roasting coffee in Columbus since before specialty coffee was a category. Their German Village location, adjacent to the Book Loft on South Third Street, draws a mix of neighborhood regulars and Book Loft browsers. The outdoor patio is one of the best people-watching spots in the neighborhood. The beans are small-batch roasted from specialty grade green Arabica, and the baristas know their way around a pour-over."
  },
  {
    name: "Fox in the Snow Cafe",
    type: "Bakery & Coffee Shop",
    address: "1031 N 4th St (original) / German Village area",
    knownFor: "Hand-poured coffee, exceptional pastries, and the best egg sandwich in Columbus.",
    description: "Fox in the Snow built its reputation on the combination of serious coffee and serious baking. The hand-poured drinks range from clean drip to layered chai, and the pastry case is filled with items that look as good as they taste. The egg sandwich, built on a house-made biscuit, has achieved something approaching cult status. Lines on weekend mornings confirm its popularity."
  },
  {
    name: "German Village Coffee Shop",
    type: "Coffee Shop & Deli",
    address: "193 Thurman Avenue, Columbus, OH 43206",
    knownFor: "The Village Addiction sandwich (smoked turkey, havarti, cranberry mayo on grilled sourdough).",
    description: "This is the neighborhood's grab-and-go workhorse. The coffee is solid, the sandwich menu is better than it needs to be, and the Village Addiction has earned its name. Located on Thurman Avenue, it serves the morning commuter crowd and the lunch regulars with equal efficiency. No pretense, no Instagram aesthetic, just good food and coffee at a fair price."
  },
  {
    name: "Winans Chocolates + Coffees",
    type: "Coffee & Chocolate Shop",
    address: "German Village, Columbus, OH 43206",
    knownFor: "Family chocolate tradition since 1961, paired with specialty coffee roasting.",
    description: "The Winans family has been making chocolate since 1961, and when they added specialty coffee to the operation, the combination became irresistible. The handcrafted confections come from the Winans Chocolate Factory in Piqua, Ohio, and the coffee program takes the beans as seriously as the bonbons. The German Village shop is warm, welcoming, and perpetually fragrant."
  },
  {
    name: "Sycamore",
    type: "New American Bistro",
    address: "Italian Village / German Village area",
    knownFor: "Seasonal, locally-sourced menu by chefs Jackie Heaphy and Ben Perez. Best patio in the village.",
    description: "Sycamore operates at the intersection of neighborhood restaurant and destination dining. The menu changes with the seasons because the sourcing is genuinely local, not just labeled that way. Chefs Heaphy and Perez cook with the kind of quiet confidence that lets ingredients lead. The streetside patio, canopied by mature trees, is where German Village residents spend summer evenings when they want a meal that matches the setting."
  },
  {
    name: "Schmidt's Restaurant und Sausage Haus",
    type: "German Restaurant & Heritage Dining",
    address: "240 E Kossuth St, Columbus, OH 43206",
    knownFor: "Bahama mama sausages, half-pound cream puffs, and live polka music in a historic livery stable.",
    description: "The Schmidt family has been part of Columbus for over 130 years, and this restaurant, housed in a converted livery stable, is their most visible legacy. The menu leans into German tradition: sausage platters, sauerkraut, red cabbage, and potato salad. The cream puffs, split and filled with fresh whipped cream, are legitimately excellent and justifiably famous. Live polka music on weekends completes the experience. It is the one German Village restaurant that every visitor should try at least once."
  },
  {
    name: "Barcelona",
    type: "Spanish Tapas & Wine Bar",
    address: "German Village, Columbus, OH 43206",
    knownFor: "Spanish-inspired tapas, deep wine list, weekend brunch, and European atmosphere.",
    description: "Barcelona brings a Mediterranean sensibility to German Village's brick-lined streets. The tapas format encourages sharing and exploration, and the wine list is deep enough that the staff's recommendations genuinely add value. The space splits the difference between date-night destination and comfortable neighborhood spot. Weekend brunch is particularly popular and benefits from the same kitchen quality as dinner service."
  },
  {
    name: "The Thurman Cafe",
    type: "Burger Bar & Neighborhood Tavern",
    address: "183 Thurman Ave, Columbus, OH 43206",
    knownFor: "The Thurminator burger. Featured on national food shows. Operating since 1942.",
    description: "The Thurman Cafe has served burgers and bar food from its Thurman Avenue location since 1942. The Thurminator, a towering multi-patty construction that has appeared on national food television, is the draw. The bar itself is unremarkable in the best possible way: wood paneling, sports on the TV, and a crowd that includes both tourists who came for the burger and regulars who come for the comfortable routine. Weekend lines extend out the door and down the block."
  },
  {
    name: "Pistacia Vera",
    type: "French Bakery & Cafe",
    address: "541 S 3rd St, Columbus, OH 43215",
    knownFor: "Macarons, croissants, seasonal tarts, and European-caliber pastry technique.",
    description: "Pistacia Vera operates at a level of pastry craftsmanship that most American bakeries do not attempt. The macarons are technically precise, the croissants are properly laminated, and the seasonal tarts demonstrate a kitchen that understands both flavor and structure. The cafe space is bright and inviting, and the Third Street location puts it in the heart of German Village's commercial corridor. It is the neighborhood's answer to the question of where to take someone you want to impress."
  },
  {
    name: "Cobra",
    type: "Late-Night Bar & Asian-American Kitchen",
    address: "German Village, Columbus, OH 43206",
    knownFor: "Creative cocktails, Asian-American small plates, and the neighborhood's best late-night option.",
    description: "Cobra fills a specific gap in German Village's dining scene: it stays open late. The Asian-American-inspired food menu is thoughtful rather than token, with small plates that pair well with the creative cocktail program. The atmosphere is relaxed and upbeat without tipping into loud, making it the spot where dinner elsewhere in the neighborhood naturally continues into the evening. For residents who want one more drink and something to eat after 10 PM, Cobra is effectively the only game in the village."
  }
]
