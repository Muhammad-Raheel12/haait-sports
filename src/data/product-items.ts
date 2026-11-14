/**
 * Individual products shown as cards on each category page (/products/[slug]/)
 * and as their own item pages. Keyed by the category slug in products.ts.
 *
 * Every item needs a unique slug within its category, a one-line card detail,
 * a 140–160 character meta description, two description paragraphs and four
 * highlight bullets.
 *
 * Images: add a front-view photo at /public/images/products/[category-slug]/[item-slug].jpg
 * (any size) and run `npm run optimize-images`; it fits the photo to an 800×600 card. Until
 * you do, the card shows branded placeholder artwork.
 */
export type ProductItem = {
  slug: string;
  name: string;
  /** One short line for the card. */
  detail: string;
  /** Meta description for the item page, 140–160 characters, includes the item name once. */
  metaDescription: string;
  /** Two paragraphs (each 45–75 words) unique to this item: what it is, who it's for, how it's built/customised. */
  description: string[];
  /** Four short, concrete feature bullets (max ~12 words each). */
  highlights: string[];
};

export const productItems: Record<string, ProductItem[]> = {
  "american-football-uniforms": [
    {
      slug: "navy-gold-striped-game-uniform",
      name: "Navy & Gold Striped Game Uniform",
      detail: "Navy set with gold sleeve stripes and leg panels.",
      metaDescription:
        "Custom Navy & Gold Striped Game Uniform: navy jersey with gold sleeve stripes and white numbers, plus matching pants with gold leg panels. MOQ 25 sets.",
      description: [
        "The Navy & Gold Striped Game Uniform takes its cue from classic college football: a navy jersey with bold gold and white stripes on the sleeves, a white V-neck collar and white numbers outlined in gold. Matching navy pants carry a gold panel down each leg. It is a timeless home uniform for schools and clubs with navy and gold colors.",
        "Numbers can be sublimated or sewn on as tackle twill in one to three layers for a raised, stitched look. The jersey has a pro cut that sits over shoulder pads, with stretch side panels and a reinforced collar. Pants include internal pockets for thigh and knee pads and a belted waist. Stripe colors and widths can be changed to suit your program.",
      ],
      highlights: [
        "Gold and white sleeve stripes on navy",
        "Matching pants with gold leg panels",
        "Sublimated or tackle twill numbers",
        "Pro-cut jersey sits over shoulder pads",
      ],
    },
    {
      slug: "black-crimson-game-uniform",
      name: "Black Crimson Game Uniform",
      detail: "Black set with jagged crimson side panels.",
      metaDescription:
        "Custom Black Crimson Game Uniform: black sublimated jersey and pants with jagged crimson side panels and white numbers. Pro cut over pads, MOQ 25 sets.",
      description: [
        "The Black Crimson Game Uniform pairs a black body with crimson side panels that break into a jagged edge, running from the underarm down through the pants. White numbers with a crimson outline and a white collar give the front a sharp, high-contrast look. It works well as a primary uniform for black and red programs or as a night-game alternate.",
        "Both pieces are fully sublimated, so the jagged panels line up across the jersey and pants and nothing cracks or peels after a season of washing. The jersey uses a pro cut over shoulder pads with four-way stretch side panels that reduce grab points. Pants have internal pad pockets and a belted waist. Any accent color can replace the crimson.",
      ],
      highlights: [
        "Jagged crimson side panels on black",
        "Panels line up across jersey and pants",
        "Four-way stretch side panels reduce grab points",
        "Accent color can be changed to any shade",
      ],
    },
    {
      slug: "royal-yoke-game-uniform",
      name: "Royal Yoke Game Uniform",
      detail: "Royal blue set with a white shoulder yoke.",
      metaDescription:
        "Custom Royal Yoke Game Uniform: royal blue jersey with a white shoulder yoke and grey collar, plus matching pants with white side panels. MOQ 25 sets.",
      description: [
        "The Royal Yoke Game Uniform uses a bright royal blue body with a white yoke across the shoulders and a grey V-neck collar. White numbers stand out clearly against the blue, and white panels down the sides of the pants carry the shoulder color through the whole uniform. It is a clean, modern design for programs with royal blue and white colors.",
        "The yoke is sublimated, so it sits flat over shoulder pads without the extra seams of a sewn panel. The jersey is pro cut with stretch side panels and reinforced stitching at the neck and armholes. Pants use a four-way stretch knit with internal pad pockets and a belted waist. Swap the royal and white for any two team colors.",
      ],
      highlights: [
        "White shoulder yoke on royal blue",
        "Grey V-neck collar and white numbers",
        "Matching pants with white side panels",
        "Flat printed yoke with no extra seams",
      ],
    },
    {
      slug: "green-chevron-game-uniform",
      name: "Green Chevron Game Uniform",
      detail: "Forest green set with gold and white chevrons.",
      metaDescription:
        "Custom Green Chevron Game Uniform: forest green jersey with gold and white chevrons at the hem and matching striped pants. Sublimated, pro cut, MOQ 25 sets.",
      description: [
        "The Green Chevron Game Uniform features stacked gold and white chevrons across the lower front of a forest green jersey, pointing down toward the belt. White numbers with a gold outline sit above the stripes, and matching green pants carry gold and white bands below the knee. Schools with green and gold colors often choose it as their home uniform.",
        "The chevrons are sublimated, so there is no extra charge for the added colors and the stripes stay sharp across every seam. The jersey has a pro cut over shoulder pads with stretch side panels and a white collar. Pants include internal pad pockets and a belted waist. Chevron colors, angle and spacing can all be changed.",
      ],
      highlights: [
        "Gold and white chevrons on forest green",
        "Matching gold and white leg bands",
        "No extra charge for added stripe colors",
        "Chevron colors and spacing customizable",
      ],
    },
    {
      slug: "maroon-diamond-game-uniform",
      name: "Maroon Diamond Game Uniform",
      detail: "Maroon set with grey diamond side panels.",
      metaDescription:
        "Custom Maroon Diamond Game Uniform: maroon jersey and pants with grey diamond pattern side panels and white numbers. Fully sublimated, pro cut, MOQ 25 sets.",
      description: [
        "The Maroon Diamond Game Uniform has a deep maroon body with side panels made of stacked grey and white diamonds that run from the jersey down the outside of each leg. White numbers and a white V-neck collar keep the front clean. The geometric panels give the uniform a distinctive look that stands out on the field and in team photos.",
        "Because the diamonds are sublimated, the pattern stays crisp and lines up across the jersey and pants. The jersey is pro cut over shoulder pads with four-way stretch side panels that are harder to grab. Pants have internal pockets for thigh and knee pads and a belted waist. The pattern colors and the base color can be changed to suit any program.",
      ],
      highlights: [
        "Grey diamond side panels on maroon",
        "Pattern runs from jersey down each leg",
        "Pro cut with four-way stretch side panels",
        "Base and pattern colors can be changed",
      ],
    },
    {
      slug: "purple-fade-game-uniform",
      name: "Purple Fade Game Uniform",
      detail: "Purple set with gold numbers and a black fade.",
      metaDescription:
        "Custom Purple Fade Game Uniform: purple jersey with gold numbers and pants that fade to black in halftone dots below the knee. Sublimated, MOQ 25 sets.",
      description: [
        "The Purple Fade Game Uniform pairs a purple jersey with gold numbers, gold team name and a black collar, plus matching purple pants that fade to black below the knee in a halftone dot pattern. The fade adds movement to an otherwise clean design and helps hide wear at the knees. It suits schools and clubs with purple and gold colors.",
        "Gradients like this are only possible with sublimation, which also means the colors never crack, lift or fade in the wash. The jersey is pro cut over shoulder pads with stretch side panels, and the pants have internal pad pockets and a belted waist. The fade can use any two colors, and numbers can be printed or sewn as tackle twill.",
      ],
      highlights: [
        "Gold numbers on a purple jersey",
        "Pants fade to black in halftone dots",
        "Fade can use any two team colors",
        "Printed or tackle twill numbers",
      ],
    },
    {
      slug: "blackout-volt-game-uniform",
      name: "Blackout Volt Game Uniform",
      detail: "Black jersey and pants with volt green trim.",
      metaDescription:
        "Custom Blackout Volt Game Uniform: black sublimated jersey and integrated pants with volt green numbers and side stripes. Pro cut over pads, MOQ 25 sets.",
      description: [
        "The Blackout Volt Game Uniform pairs a black jersey and black pants with bright volt green numbers, shoulder stripes and leg piping. The dark base hides grass and turf stains, while the volt accents stay readable from the press box and on game film. It suits night games, alternate uniforms and programs that want an aggressive modern look.",
        "Both pieces are fully sublimated, so the trim, numbers, team name and sleeve logos are dyed into the fabric and never peel. The jersey uses a pro cut that sits over shoulder pads, with stretch side panels. Matching pants have a belted waist and internal pad pockets. Swap the volt for any accent color your team uses.",
      ],
      highlights: [
        "Black base with high-contrast volt green trim",
        "Matching jersey and pants sublimated together",
        "Pro-cut jersey sits cleanly over pads",
        "Accent color can be changed to any shade",
      ],
    },
    {
      slug: "blaze-orange-game-uniform",
      name: "Blaze Orange Game Uniform",
      detail: "Orange jersey and pants with navy side panels.",
      metaDescription:
        "Custom Blaze Orange Game Uniform: orange sublimated jersey and pants with navy side panels and white numbers. Pro cut over pads, made to order from 25 sets.",
      description: [
        "The Blaze Orange Game Uniform is built around a bold orange body with navy side panels running from the underarm down the leg. White numbers with a navy outline keep the front and back easy to read, and a white collar and belt give the set a clean finish. It is a strong choice for schools and clubs with orange and navy colors.",
        "Jersey and pants are sublimated in the same run, so the orange matches exactly across both pieces. The jersey is cut short in the sleeve to sit tight over pads, with four-way stretch side panels that reduce grab points. Pants include pockets for thigh and knee pads. Team names, numbers and logos are printed at no extra cost.",
      ],
      highlights: [
        "Orange body with navy side panels",
        "Jersey and pants color-matched in one run",
        "Stretch side panels reduce grab points",
        "Names, numbers and logos printed at no extra cost",
      ],
    },
    {
      slug: "sky-blue-panel-game-uniform",
      name: "Sky Blue Panel Game Uniform",
      detail: "Sky blue set with navy panels and piping.",
      metaDescription:
        "Custom Sky Blue Panel Game Uniform: sky blue sublimated jersey and pants with navy side panels, piping and numbers. Fits over pads, from 25 sets per order.",
      description: [
        "The Sky Blue Panel Game Uniform uses a light sky blue body with navy side panels, navy numbers and thin white piping that frames each panel. The lighter base works well for home games in warm weather and photographs clearly under stadium lights. Programs with powder blue, Carolina blue or columbia blue colors often start from this design.",
        "The whole set is sublimated, so the panels and piping line up across the jersey and pants without extra sewing. The jersey has a pro cut over shoulder pads and a V-neck collar, while the pants use a stretch knit with internal pad pockets and a belted waist. Any shade of blue, or a completely different color pair, can be used.",
      ],
      highlights: [
        "Sky blue body with navy panels and piping",
        "Panels line up across jersey and pants",
        "V-neck pro-cut jersey over shoulder pads",
        "Stretch pants with internal pad pockets",
      ],
    },
    {
      slug: "retro-chest-stripe-game-uniform",
      name: "Retro Chest-Stripe Game Uniform",
      detail: "White set with a classic red chest band.",
      metaDescription:
        "Custom Retro Chest-Stripe Game Uniform: white jersey with a red and navy chest band, matching pants with striped socks. Classic football look, MOQ 25 sets.",
      description: [
        "The Retro Chest-Stripe Game Uniform borrows from classic football jerseys: a white body, a wide red band across the chest and shoulders with navy edges, and red numbers that sit across the stripe. The matching white pants carry navy and red bands below the knee. It works well as a throwback alternate or as a road uniform for traditional programs.",
        "Even with the vintage styling, the jersey is a modern sublimated build with a pro cut over pads and stretch side panels. The chest band is printed rather than sewn, so it stays flat and never pulls at the seams. Pants include pockets for thigh and knee pads. Stripe colors and widths can be changed to match your school.",
      ],
      highlights: [
        "White body with a wide red chest band",
        "Navy and red leg stripes below the knee",
        "Printed stripes stay flat with no seam pull",
        "Stripe colors and widths can be customized",
      ],
    },
  ],
  "soccer-uniforms": [
    {
      slug: "navy-gold-stripe-soccer-kit",
      name: "Navy & Gold Stripe Soccer Kit",
      detail: "Navy kit with a gold center stripe.",
      metaDescription:
        "Custom Navy & Gold Stripe Soccer Kit: navy jersey with a gold center stripe, matching shorts and socks. Fully sublimated with names and numbers, MOQ 25 kits.",
      description: [
        "The Navy & Gold Stripe Soccer Kit runs a single gold stripe, edged in white, straight down the center of a navy jersey. White numbers with a gold outline sit across the stripe on the back, and a white V-neck collar keeps the front clean. Navy shorts carry gold side stripes, and matching socks finish the look. It suits clubs and schools with navy and gold colors.",
        "The jersey is fully sublimated, so the stripe stays perfectly straight and never cracks or peels after washing. It is cut from a lightweight, breathable knit with a regular athletic fit that moves freely through sprints and tackles. Stripe width and colors can be changed, and player names, numbers, crests and sponsor logos are printed in the same pass.",
      ],
      highlights: [
        "Gold center stripe on a navy jersey",
        "Shorts with matching gold side stripes",
        "Lightweight, breathable sublimated knit",
        "Names, numbers and sponsor logos included",
      ],
    },
    {
      slug: "red-black-stripe-soccer-kit",
      name: "Red & Black Stripe Soccer Kit",
      detail: "Classic vertical red and black stripes.",
      metaDescription:
        "Custom Red & Black Stripe Soccer Kit: classic vertical red and black striped jersey with black shorts and socks. Sublimated, any colors, made from 25 kits.",
      description: [
        "The Red & Black Stripe Soccer Kit uses the classic vertical stripe pattern seen on famous club shirts around the world. Alternating red and black stripes run from the shoulders to the hem, with a white V-neck collar and white numbers on the back. Black shorts with thin red side piping and black socks complete a bold, traditional look.",
        "Because the stripes are sublimated rather than sewn, they line up perfectly across the seams and the jersey stays light and flexible. The breathable knit wicks sweat and dries quickly between halves. Stripe widths and colors can be adjusted to match your club, and crests, sponsor logos, names and numbers are printed at no extra cost.",
      ],
      highlights: [
        "Classic vertical red and black stripes",
        "Black shorts with red side piping",
        "Stripes line up cleanly across seams",
        "Stripe widths and colors can be adjusted",
      ],
    },
    {
      slug: "royal-sash-soccer-kit",
      name: "Royal Sash Soccer Kit",
      detail: "Royal blue kit with a white diagonal sash.",
      metaDescription:
        "Custom Royal Sash Soccer Kit: royal blue jersey with a wide white diagonal sash, matching sash shorts and socks. Fully sublimated, made to order from 25 kits.",
      description: [
        "The Royal Sash Soccer Kit has a wide white sash that runs diagonally across a royal blue jersey, from the shoulder to the opposite hip, edged in light grey. The sash continues across the shorts, so the kit looks connected when a player is in motion. White numbers sit over the sash on the back, and a grey V-neck collar completes the design.",
        "The sash is sublimated, so it crosses the side seams without stitching, overlays or extra weight. The jersey is made from a breathable knit with a regular athletic fit for match play and training. Sash angle, width and colors can all be changed. Team crests, sponsor logos, names and numbers are printed in the same step at no extra charge.",
      ],
      highlights: [
        "White diagonal sash on royal blue",
        "Sash continues across the shorts",
        "Printed sash with no seams or overlays",
        "Sash angle, width and colors adjustable",
      ],
    },
    {
      slug: "green-gold-raglan-soccer-kit",
      name: "Green & Gold Raglan Soccer Kit",
      detail: "Forest green body with gold raglan sleeves.",
      metaDescription:
        "Custom Green & Gold Raglan Soccer Kit: forest green jersey with gold raglan sleeves, matching shorts with gold side panels and socks. Sublimated, MOQ 25 kits.",
      description: [
        "The Green & Gold Raglan Soccer Kit pairs a forest green body with gold raglan sleeves that run from the collar to the cuff. White numbers with a gold outline stand out on the back, and the white V-neck collar adds a clean finish. Green shorts with gold side panels and green socks with gold trim complete a classic two-color kit.",
        "Raglan sleeves give the shoulders extra freedom of movement for throw-ins, headers and long passes. The whole kit is sublimated in a lightweight, quick-dry knit, so colors stay bright and never peel after washing. Any two colors can be used in this layout, and crests, sponsors, names and numbers are included in the price.",
      ],
      highlights: [
        "Gold raglan sleeves on a forest green body",
        "Raglan cut for free shoulder movement",
        "Shorts with gold side panels",
        "Works with any two team colors",
      ],
    },
    {
      slug: "maroon-hoops-soccer-kit",
      name: "Maroon Hoops Soccer Kit",
      detail: "Maroon jersey with grey and white hoops.",
      metaDescription:
        "Custom Maroon Hoops Soccer Kit: maroon jersey with horizontal grey and white hoops, plus maroon shorts and socks. Fully sublimated, made to order from 25 kits.",
      description: [
        "The Maroon Hoops Soccer Kit features wide horizontal grey hoops, each edged with thin white lines, across a maroon jersey. The hoops run all the way around the body and sleeves, giving the kit a traditional club look. White numbers and team name sit across the hoops, and plain maroon shorts with white hems and maroon socks keep the outfit balanced.",
        "Hooped designs like this are sublimated, so the bands line up across seams and the jersey stays light and soft. The breathable knit wicks moisture and holds its shape through a full season of matches and washing. Hoop colors, widths and spacing can be changed, and names, numbers, crests and sponsor logos are printed at no extra cost.",
      ],
      highlights: [
        "Grey and white hoops on maroon",
        "Hoops wrap around body and sleeves",
        "Plain maroon shorts with white hems",
        "Hoop colors and widths customizable",
      ],
    },
    {
      slug: "purple-fade-soccer-kit",
      name: "Purple Fade Soccer Kit",
      detail: "Purple kit fading to black with gold numbers.",
      metaDescription:
        "Custom Purple Fade Soccer Kit: purple jersey and shorts fading to black in a halftone dot pattern, with gold numbers and crest. Sublimated, MOQ 25 kits.",
      description: [
        "The Purple Fade Soccer Kit starts with a deep purple chest and shoulders, then fades to black toward the hem through a halftone dot pattern. Gold numbers, team name and crest stand out against the purple. The matching shorts use the same fade from purple at the waist to black at the hem, and purple socks finish the kit.",
        "Gradients like this are only possible with sublimation, which also keeps the colors from cracking or fading in the wash. The jersey is made from a lightweight, breathable knit with a black V-neck collar. Any two colors can be used for the fade, and gold can be swapped for any accent. Names, numbers and sponsor logos are included.",
      ],
      highlights: [
        "Purple to black halftone fade",
        "Gold numbers, name and crest",
        "Matching fade on the shorts",
        "Fade and accent colors fully customizable",
      ],
    },
    {
      slug: "black-volt-shard-soccer-kit",
      name: "Black Volt Shard Soccer Kit",
      detail: "Black kit with volt green shard graphics.",
      metaDescription:
        "Custom Black Volt Shard Soccer Kit: black jersey and shorts with jagged volt green and grey shard graphics, plus volt numbers. Sublimated, made from 25 kits.",
      description: [
        "The Black Volt Shard Soccer Kit uses a black base with jagged volt green and grey shards along the sides and lower hem of the jersey. Volt green numbers and team name stand out clearly from the stands and on video. The shorts repeat the shard graphics down each leg, and black socks with volt trim complete an aggressive, modern kit.",
        "The shards are sublimated, so they wrap across seams and onto the shorts at no extra cost. The jersey is made from a quick-dry, breathable knit with a white V-neck collar and a regular athletic fit. The volt accent can be swapped for any color your club uses, and crests, names, numbers and sponsor logos are printed in the same pass.",
      ],
      highlights: [
        "Volt green and grey shards on black",
        "Shard graphics repeat on the shorts",
        "High-visibility volt numbers",
        "Accent color can be changed to any shade",
      ],
    },
    {
      slug: "orange-navy-band-soccer-kit",
      name: "Orange & Navy Band Soccer Kit",
      detail: "Orange kit with a navy chest band.",
      metaDescription:
        "Custom Orange & Navy Band Soccer Kit: orange jersey with a navy chest band and striped hem, plus orange shorts and socks. Fully sublimated, MOQ 25 kits.",
      description: [
        "The Orange & Navy Band Soccer Kit has a bright orange jersey with a wide navy band across the chest, edged in white, that carries the player name on the back. Thin navy and white stripes repeat at the hem and on the sleeve cuffs. Orange shorts with striped hems and orange socks with navy bands complete a bold, retro-inspired kit.",
        "Every band and stripe is sublimated, so the design stays flat and light with no sewn panels. The jersey uses a breathable knit with a white V-neck collar and a regular athletic fit. Band position and colors can be adjusted to suit your club, and crests, sponsor logos, names and numbers are printed in the same step.",
      ],
      highlights: [
        "Navy chest band on a bright orange jersey",
        "Matching striped hems and cuffs",
        "Player name sits in the band on the back",
        "Band position and colors adjustable",
      ],
    },
    {
      slug: "sky-blue-panel-soccer-kit",
      name: "Sky Blue Panel Soccer Kit",
      detail: "Sky blue kit with navy side panels.",
      metaDescription:
        "Custom Sky Blue Panel Soccer Kit: sky blue jersey with curved navy side panels, plus matching shorts and socks. Sublimated with names and numbers, MOQ 25 kits.",
      description: [
        "The Sky Blue Panel Soccer Kit pairs a light sky blue jersey with curved navy panels that sweep down each side from the underarm to the hem. Navy numbers and team name read clearly on the light base, and a white V-neck collar adds contrast. Sky blue shorts with navy side panels and sky blue socks complete a clean, classic kit.",
        "The curved panels give the jersey a slimmer, more athletic shape without changing the fit. Everything is sublimated in a breathable, quick-dry knit, so colors stay bright after many washes. Any two colors can replace the sky blue and navy, and team crests, sponsor logos, player names and numbers are included at no extra cost.",
      ],
      highlights: [
        "Curved navy side panels on sky blue",
        "Navy numbers that read clearly",
        "Matching shorts with navy side panels",
        "Any two team colors can be used",
      ],
    },
    {
      slug: "white-pinstripe-soccer-kit",
      name: "White Pinstripe Soccer Kit",
      detail: "White kit with thin red pinstripes.",
      metaDescription:
        "Custom White Pinstripe Soccer Kit: white jersey and shorts with thin red pinstripes, navy collar, cuffs and numbers. Fully sublimated, made from 25 kits.",
      description: [
        "The White Pinstripe Soccer Kit uses a white jersey with fine red vertical pinstripes, a navy V-neck collar and navy sleeve cuffs. Navy numbers and team name sit cleanly over the stripes. The matching white shorts continue the pinstripes with a navy hem, and white socks with red and navy bands finish a smart, classic kit that works well as an away strip.",
        "The pinstripes are sublimated, so they stay sharp and evenly spaced across every seam and never fade or peel. The jersey is cut from a lightweight, breathable knit with a regular athletic fit. Stripe color and spacing can be changed, and team crests, sponsor logos, player names and numbers are printed in the same pass.",
      ],
      highlights: [
        "Fine red pinstripes on a white jersey",
        "Navy collar, cuffs and numbers",
        "Pinstripes continue onto the shorts",
        "Stripe color and spacing customizable",
      ],
    },
  ],
  "baseball-uniforms": [
    {
      slug: "navy-pinstripe-baseball-uniform",
      name: "Navy Pinstripe Baseball Uniform",
      detail: "Navy pinstripes with gold piping and script lettering.",
      metaDescription:
        "Custom Navy Pinstripe Baseball Uniform: button-front jersey with gold pinstripes, gold piping and script team name, plus matching pinstripe pants. MOQ 25.",
      description: [
        "The Navy Pinstripe Baseball Uniform is a classic ballpark look: a navy button-front jersey with thin gold pinstripes, gold piping along the placket, collar and sleeves, and the team name in a flowing white script across the chest. The back carries the player name and a large white number. Matching navy pinstripe pants finish the set.",
        "The pinstripes are sublimated, so they stay perfectly aligned across the placket and seams and never fade in the wash. The jersey uses a breathable stretch knit with a full button front and set-in sleeves. Pants have a belted waist, reinforced knees and an elastic cuff. Stripe color, piping and lettering style can all be changed to match your team.",
      ],
      highlights: [
        "Gold pinstripes and piping on navy",
        "Script team name with player name and number",
        "Matching pinstripe pants with belted waist",
        "Sublimated stripes stay aligned across seams",
      ],
    },
    {
      slug: "black-red-raglan-baseball-uniform",
      name: "Black & Red Raglan Baseball Uniform",
      detail: "Black jersey with red raglan sleeves and piping.",
      metaDescription:
        "Custom Black & Red Raglan Baseball Uniform: black button-front jersey with red raglan sleeves and piping, plus black pants with red side stripes. MOQ 25.",
      description: [
        "The Black & Red Raglan Baseball Uniform pairs a black button-front jersey with bold red raglan sleeves and thin red piping down the placket. The team name runs across the chest in white script outlined in red, and the back shows the player name and number in white. Black pants with a red stripe down each leg complete the set.",
        "Raglan sleeves run from the collar to the cuff, giving more freedom through the throwing and swinging motion than a set-in sleeve. The jersey is fully sublimated in a lightweight stretch knit, so colors stay bright all season. Pants have a belted waist, reinforced knees and elastic cuffs. Swap the red for any accent color your team uses.",
      ],
      highlights: [
        "Red raglan sleeves on a black body",
        "Red piping on the placket and pant legs",
        "Raglan cut for free throwing motion",
        "Accent color can be changed to any shade",
      ],
    },
    {
      slug: "royal-blue-piped-baseball-uniform",
      name: "Royal Blue Piped Baseball Uniform",
      detail: "Royal blue set with crisp white piping.",
      metaDescription:
        "Custom Royal Blue Piped Baseball Uniform: royal blue button-front jersey with white piping and script lettering, plus matching royal blue pants. MOQ 25.",
      description: [
        "The Royal Blue Piped Baseball Uniform keeps things clean: a solid royal blue button-front jersey with white piping around the collar, down the placket and along the sleeve ends. The team name sits across the chest in white script, with the player name and a bold white number on the back. Matching royal blue pants complete the look.",
        "This is a versatile design for leagues, schools and travel teams that want a sharp traditional uniform without busy graphics. The jersey is made from a breathable stretch knit with sublimated or heat-applied lettering. Pants have a belted waist, reinforced knees and elastic cuffs. Piping, lettering and base colors can be matched to any team palette.",
      ],
      highlights: [
        "White piping on collar, placket and sleeves",
        "Solid royal blue jersey and pants",
        "Script team name with back name and number",
        "Base and piping colors fully customizable",
      ],
    },
    {
      slug: "green-gold-yoke-baseball-uniform",
      name: "Green & Gold Yoke Baseball Uniform",
      detail: "Forest green set with gold shoulder yokes.",
      metaDescription:
        "Custom Green & Gold Yoke Baseball Uniform: forest green button-front jersey with gold shoulder yokes and piping, plus pants with gold side panels. MOQ 25.",
      description: [
        "The Green & Gold Yoke Baseball Uniform uses a forest green button-front jersey with gold panels across the tops of the shoulders and gold piping down the placket. The team name runs across the chest in white script outlined in gold, and the back carries a white player name and number. Green pants with a gold side panel finish the set.",
        "The shoulder yokes are sublimated, so they sit flat with no extra seams and the colors stay bright through a full season. The jersey uses a breathable stretch knit with a full button front. Pants have a belted waist, reinforced knees and elastic cuffs. Made to order from 25 pieces, with any two colors in place of green and gold.",
      ],
      highlights: [
        "Gold shoulder yokes on forest green",
        "Gold placket piping and outlined script name",
        "Pants with matching gold side panels",
        "Flat sublimated yokes with no extra seams",
      ],
    },
    {
      slug: "maroon-grey-raglan-baseball-uniform",
      name: "Maroon & Grey Raglan Baseball Uniform",
      detail: "Maroon jersey with grey raglan sleeves.",
      metaDescription:
        "Custom Maroon & Grey Raglan Baseball Uniform: maroon button-front jersey with grey raglan sleeves and script lettering, plus matching maroon pants. MOQ 25.",
      description: [
        "The Maroon & Grey Raglan Baseball Uniform pairs a deep maroon button-front jersey with light grey raglan sleeves and white piping down the placket. The team name sits across the chest in white script, with the player name and a large white number on the back. Matching maroon pants keep the uniform clean and classic.",
        "Raglan sleeves allow a full range of motion for pitching and hitting, and the grey contrast gives the jersey a sporty, athletic look. The body is a breathable stretch knit, fully sublimated so colors never crack or fade. Pants have a belted waist, reinforced knees and elastic cuffs. Sleeve and body colors can be swapped for any team palette.",
      ],
      highlights: [
        "Grey raglan sleeves on a maroon body",
        "White placket piping and script team name",
        "Matching maroon pants with belted waist",
        "Sublimated colors that never crack or fade",
      ],
    },
    {
      slug: "purple-fade-baseball-uniform",
      name: "Purple Fade Baseball Uniform",
      detail: "Purple jersey fading to black, gold lettering.",
      metaDescription:
        "Custom Purple Fade Baseball Uniform: purple jersey that fades to black in halftone dots, with gold script and piping, plus matching faded pants. MOQ 25.",
      description: [
        "The Purple Fade Baseball Uniform starts with a purple button-front jersey that fades to black toward the hem in a halftone dot pattern. Gold piping runs down the placket, and the team name, player name and number are printed in gold. Matching purple pants fade to black below the knee, so the gradient carries through the whole uniform.",
        "Gradients like this are only possible with sublimation, which also means the colors stay sharp and never peel. The jersey uses a breathable stretch knit with a full button front, and the pants have a belted waist, reinforced knees and elastic cuffs. The fade can use any two colors. Made to order from 25 pieces per design.",
      ],
      highlights: [
        "Purple to black halftone fade",
        "Gold piping, script name and numbers",
        "Pants fade to black below the knee",
        "Fade can use any two team colors",
      ],
    },
    {
      slug: "black-lime-shard-baseball-uniform",
      name: "Black & Lime Shard Baseball Uniform",
      detail: "Black set with jagged lime green shards.",
      metaDescription:
        "Custom Black & Lime Shard Baseball Uniform: black button-front jersey and pants with jagged lime green shard graphics and lime lettering. MOQ 25 pieces.",
      description: [
        "The Black & Lime Shard Baseball Uniform has a charcoal black button-front jersey with jagged lime green shards climbing up the sides and lower body. The team name is printed across the chest in lime script, and the back carries a large lime number. Matching black pants repeat the shard graphic down the outside of each leg.",
        "The shards are sublimated, so they wrap across seams and onto the pants with no extra cost for the added color. This bold design suits travel ball teams and tournament squads that want to stand out. The jersey is a breathable stretch knit, and the pants have a belted waist, reinforced knees and elastic cuffs. Lime can be swapped for any accent color.",
      ],
      highlights: [
        "Jagged lime shards on a black body",
        "Shard graphic continues down the pant legs",
        "Lime script team name and numbers",
        "Accent color can be changed to any shade",
      ],
    },
    {
      slug: "orange-chevron-baseball-uniform",
      name: "Orange Chevron Baseball Uniform",
      detail: "Orange set with navy and white chevrons.",
      metaDescription:
        "Custom Orange Chevron Baseball Uniform: orange button-front jersey with navy piping and stacked navy and white chevrons, plus matching chevron pants. MOQ 25.",
      description: [
        "The Orange Chevron Baseball Uniform pairs an orange button-front jersey with navy piping and stacked navy and white chevrons across the lower back. The team name runs across the chest in white script outlined in navy, and the back shows a large white player number. Matching orange pants carry the same chevrons around the lower leg.",
        "The chevrons are sublimated, so there is no extra charge for the added colors and the stripes stay sharp across every seam. The jersey uses a breathable stretch knit with a full button front, and the pants have a belted waist, reinforced knees and elastic cuffs. Chevron colors, angle and spacing can all be changed to suit your team.",
      ],
      highlights: [
        "Navy and white chevrons on orange",
        "Matching chevrons around the pant legs",
        "Navy piping and outlined script name",
        "Chevron colors and spacing customizable",
      ],
    },
    {
      slug: "sky-blue-panel-baseball-uniform",
      name: "Sky Blue Panel Baseball Uniform",
      detail: "Sky blue set with navy side panels.",
      metaDescription:
        "Custom Sky Blue Panel Baseball Uniform: sky blue button-front jersey with navy side panels, piping and script lettering, plus matching paneled pants. MOQ 25.",
      description: [
        "The Sky Blue Panel Baseball Uniform uses a light sky blue button-front jersey with curved navy panels down each side and navy piping along the placket and collar. The team name runs across the chest in navy script, with the player name and number in navy on the back. Matching sky blue pants carry a navy panel down each leg.",
        "The light base keeps players cooler in summer sun, and the navy panels give the jersey a clean, athletic shape. Everything is sublimated, so the panels line up across the jersey and pants and the colors stay bright. Pants have a belted waist, reinforced knees and elastic cuffs. Any two colors can replace the sky blue and navy.",
      ],
      highlights: [
        "Curved navy side panels on sky blue",
        "Navy piping and script team name",
        "Matching pants with navy leg panels",
        "Light base that stays cooler in summer",
      ],
    },
    {
      slug: "powder-blue-pinstripe-baseball-uniform",
      name: "Powder Blue Pinstripe Baseball Uniform",
      detail: "Powder blue pinstripe jersey with white pants.",
      metaDescription:
        "Custom Powder Blue Pinstripe Baseball Uniform: powder blue pinstripe jersey with navy script and numbers, paired with white pinstripe pants. MOQ 25 pieces.",
      description: [
        "The Powder Blue Pinstripe Baseball Uniform pairs a powder blue button-front jersey with fine pinstripes and navy piping. The team name runs across the chest in navy script, with the player name and a large navy number on the back. White pinstripe pants with a navy belt complete a throwback look that works well as an alternate or road uniform.",
        "The pinstripes are sublimated, so they stay straight across the placket and never fade after repeated washing. The jersey is a breathable stretch knit with a full button front, and the pants have a belted waist, reinforced knees and elastic cuffs. Stripe color, spacing and lettering can be adjusted, and the pants can be made in any base color.",
      ],
      highlights: [
        "Powder blue pinstripe jersey with navy piping",
        "White pinstripe pants with navy belt",
        "Navy script name and numbers",
        "Stripe color and spacing adjustable",
      ],
    },
  ],
  "basketball-uniforms": [
    {
      slug: "navy-gold-flash-basketball-uniform",
      name: "Navy & Gold Flash Basketball Uniform",
      detail: "Navy set with jagged gold side panels.",
      metaDescription:
        "Custom Navy & Gold Flash Basketball Uniform: navy jersey and shorts with jagged gold side panels and white numbers. Fully sublimated, made to order from 25.",
      description: [
        "The Navy & Gold Flash Basketball Uniform pairs a deep navy jersey with gold side panels that break into a jagged lightning edge from the armhole to the hem. White numbers and team name sit cleanly on the chest, and a white V-neck trim frames the collar. The matching navy shorts carry the same gold flash down each leg for a complete look.",
        "Everything is fully sublimated, so the gold panels, numbers and logos are dyed into the fabric and never crack or peel. The jersey is cut from a lightweight, breathable knit with a wide armhole for free shooting movement. Shorts have an elastic waist with a drawcord. Swap navy and gold for any two colors your team uses.",
      ],
      highlights: [
        "Jagged gold flash panels on a navy base",
        "Matching shorts with gold flash down each leg",
        "Wide armholes for full shooting range",
        "Colors can be changed to any team palette",
      ],
    },
    {
      slug: "black-red-sash-basketball-uniform",
      name: "Black & Red Sash Basketball Uniform",
      detail: "Black set with a bold red diagonal sash.",
      metaDescription:
        "Custom Black & Red Sash Basketball Uniform: black jersey with a red diagonal sash edged in white, plus matching shorts. Sublimated, made to order from 25 sets.",
      description: [
        "The Black & Red Sash Basketball Uniform runs a wide red band, edged in white, diagonally from the shoulder across the body of a black jersey. White numbers and team name sit above the sash, and a red and white V-neck finishes the collar. The sash continues across the matching black shorts, so the design carries through the whole uniform.",
        "Because the sash is sublimated, it crosses the side seams cleanly with no stitching or overlays. The jersey uses a lightweight, moisture-wicking knit with wide armholes, and the shorts have an elastic waist with an internal drawcord. The angle, width and color of the sash can all be adjusted, and names, numbers and logos are included.",
      ],
      highlights: [
        "Red diagonal sash edged in white on black",
        "Sash continues across the matching shorts",
        "Moisture-wicking knit with wide armholes",
        "Sash angle, width and color adjustable",
      ],
    },
    {
      slug: "royal-chevron-basketball-uniform",
      name: "Royal Chevron Basketball Uniform",
      detail: "Royal blue set with white and grey chevrons.",
      metaDescription:
        "Custom Royal Chevron Basketball Uniform: royal blue jersey with stacked white and grey chevrons and matching shorts. Fully sublimated, MOQ 25 sets.",
      description: [
        "The Royal Chevron Basketball Uniform features stacked white and grey chevrons across the lower front of a royal blue jersey, pointing down toward the hem. White numbers and team name sit above the stripes, with a grey trim at the neck and armholes. The same chevrons repeat at the hem of the shorts, tying the set together on court.",
        "The chevrons are sublimated, so there is no extra charge for the added colors and the stripes stay sharp at every seam. The jersey is made from a breathable, lightweight knit with a classic tank cut, and the shorts have an elastic waistband with a drawcord. Chevron colors, spacing and angle can be changed to suit your program.",
      ],
      highlights: [
        "White and grey chevrons on royal blue",
        "Chevrons repeat at the hem of the shorts",
        "No extra charge for added stripe colors",
        "Chevron colors and spacing customizable",
      ],
    },
    {
      slug: "green-fade-basketball-uniform",
      name: "Green Fade Basketball Uniform",
      detail: "Forest green set fading to black in halftone.",
      metaDescription:
        "Custom Green Fade Basketball Uniform: forest green jersey and shorts that fade to black in a halftone dot pattern, with cream numbers. Sublimated, MOQ 25 sets.",
      description: [
        "The Green Fade Basketball Uniform starts with forest green across the chest and shoulders, then fades to black toward the hem through a halftone dot pattern. Cream numbers and team name stand out against the green, and white trim lines the collar and armholes. The matching shorts use the same fade, darkening toward the leg opening.",
        "Gradients like this are only possible with sublimation, which also means the colors never crack or wash out. The jersey is cut from a lightweight, breathable knit with a relaxed tank fit, and the shorts have an elastic waist and drawcord. Any two colors can be used for the fade, and player names, numbers and logos are printed in the same pass.",
      ],
      highlights: [
        "Forest green to black halftone fade",
        "Matching fade on the shorts",
        "Fade can use any two team colors",
        "Sublimated colors that never crack or peel",
      ],
    },
    {
      slug: "maroon-shard-basketball-uniform",
      name: "Maroon Shard Basketball Uniform",
      detail: "Maroon set with grey and white shard panels.",
      metaDescription:
        "Custom Maroon Shard Basketball Uniform: maroon jersey and shorts with angular grey and white shard panels on the sides. Fully sublimated, made to order from 25.",
      description: [
        "The Maroon Shard Basketball Uniform has a deep maroon body with angular grey and white shards cutting in from both sides of the jersey. White numbers and team name sit on a clean chest area, and white trim finishes the V-neck and armholes. The shard graphic repeats on the outside of each leg of the matching shorts.",
        "The shards are sublimated, so the sharp edges stay crisp and wrap across the side seams without extra stitching. The jersey uses a lightweight performance knit with wide armholes, and the shorts have an elastic waist with a drawcord. The base color and shard colors can be changed, and names, numbers and logos are included in the price.",
      ],
      highlights: [
        "Grey and white shard panels on maroon",
        "Shard graphic repeats on the shorts",
        "Crisp edges that wrap across side seams",
        "Base and accent colors can be changed",
      ],
    },
    {
      slug: "purple-pinstripe-basketball-uniform",
      name: "Purple Pinstripe Basketball Uniform",
      detail: "Purple pinstripe set with gold numbers.",
      metaDescription:
        "Custom Purple Pinstripe Basketball Uniform: purple jersey and shorts with thin vertical pinstripes, gold numbers and black trim. Sublimated, from 25 sets.",
      description: [
        "The Purple Pinstripe Basketball Uniform uses a rich purple body covered in thin vertical pinstripes, with gold numbers and team name across the chest and black trim around the neck and armholes. The matching purple shorts carry the same pinstripes and a gold number on the leg. It is a classic, throwback look suited to purple and gold programs.",
        "The pinstripes are sublimated, so they stay perfectly straight and line up between the jersey and shorts. The jersey is cut from a breathable, lightweight knit in a traditional tank shape, and the shorts have an elastic waistband with a drawcord. Stripe spacing and colors can be adjusted, and numbers can use any color or outline.",
      ],
      highlights: [
        "Thin vertical pinstripes on purple",
        "Gold numbers with black trim",
        "Pinstripes line up between jersey and shorts",
        "Stripe spacing and colors adjustable",
      ],
    },
    {
      slug: "black-lime-basketball-uniform",
      name: "Black & Lime Basketball Uniform",
      detail: "Black set with lime green side panels.",
      metaDescription:
        "Custom Black & Lime Basketball Uniform: black jersey and shorts with lime green side panels and lime numbers. Fully sublimated, made to order from 25 sets.",
      description: [
        "The Black & Lime Basketball Uniform keeps the design bold and simple: a black jersey with lime green side panels running from the armhole to the hem, lime green numbers and team name, and a white V-neck trim. The matching black shorts carry wide lime panels down each leg, so the accent color reads clearly from across the court.",
        "The set is fully sublimated, so the lime panels and numbers are dyed into the fabric and stay bright after many washes. The jersey uses a moisture-wicking knit with wide armholes, and the shorts have an elastic waist and drawcord. The lime can be swapped for any accent color at no extra cost, and names and logos are included.",
      ],
      highlights: [
        "Lime green side panels on black",
        "Wide lime panels down each leg of the shorts",
        "Bright accent that reads well across the court",
        "Accent color changeable at no extra cost",
      ],
    },
    {
      slug: "orange-chest-band-basketball-uniform",
      name: "Orange Chest-Band Basketball Uniform",
      detail: "Orange set with a navy chest band and striped hem.",
      metaDescription:
        "Custom Orange Chest-Band Basketball Uniform: orange jersey with a navy chest band and striped hem, plus matching striped shorts. Sublimated, MOQ 25 sets.",
      description: [
        "The Orange Chest-Band Basketball Uniform takes its cue from classic throwback jerseys: a bright orange body with a wide navy band across the chest, white numbers below, and navy and white stripes at the hem. The team name sits in white on the navy band. Matching orange shorts finish with the same striped trim at the leg openings.",
        "Even with the retro styling, the set is a modern sublimated build, so the bands and stripes lie flat and never pull at the seams. The jersey uses a breathable, lightweight knit with a classic tank cut, and the shorts have an elastic waist with a drawcord. Band and stripe colors can be changed to match any school palette.",
      ],
      highlights: [
        "Wide navy chest band on orange",
        "Navy and white striped hem on jersey and shorts",
        "Printed bands lie flat with no seam pull",
        "Band and stripe colors customizable",
      ],
    },
    {
      slug: "sky-blue-basketball-uniform",
      name: "Sky Blue Basketball Uniform",
      detail: "Sky blue set with navy piping and numbers.",
      metaDescription:
        "Custom Sky Blue Basketball Uniform: sky blue jersey and shorts with navy and white side piping and navy numbers. Fully sublimated, made to order from 25 sets.",
      description: [
        "The Sky Blue Basketball Uniform uses a light sky blue body with thin navy and white piping running down both sides, navy numbers and team name across the chest, and white trim at the neck and armholes. The matching shorts carry the same piping down each leg. Schools and clubs with Carolina or powder blue colors often start from this design.",
        "The set is sublimated, so the piping lines up neatly between the jersey and shorts and the colors stay bright after many washes. The jersey is cut from a breathable knit that keeps players cool in warm gyms, and the shorts have an elastic waistband with a drawcord. Any two colors can replace the sky blue and navy.",
      ],
      highlights: [
        "Navy and white side piping on sky blue",
        "Matching piping down each leg of the shorts",
        "Breathable knit for warm gyms",
        "Any two team colors can be used",
      ],
    },
    {
      slug: "white-classic-basketball-uniform",
      name: "White Classic Basketball Uniform",
      detail: "White set with red and navy side stripes.",
      metaDescription:
        "Custom White Classic Basketball Uniform: white jersey and shorts with red and navy side stripes, navy numbers and navy trim. Sublimated, made to order from 25.",
      description: [
        "The White Classic Basketball Uniform is a clean home or away set: a white jersey with red and navy stripes down each side, navy numbers and team name, and navy trim around the V-neck and armholes. A subtle tonal texture in the body adds depth up close. The matching white shorts carry the same red and navy stripes and a navy hem.",
        "The stripes are sublimated, so they stay straight and line up with the shorts without extra stitching. The jersey uses a lightweight, breathable knit in a traditional tank cut, and the shorts have an elastic waist with a drawcord. Stripe colors can be changed to suit any program, and names, numbers and logos are printed in the same pass.",
      ],
      highlights: [
        "Red and navy side stripes on white",
        "Navy numbers with navy neck and armhole trim",
        "Subtle tonal texture in the body",
        "Stripe colors can be changed for any team",
      ],
    },
  ],
  "ice-hockey-jerseys": [
    {
      slug: "white-cross-stripe-hockey-jersey",
      name: "White Cross Stripe Hockey Jersey",
      detail: "White jersey with a red and navy cross stripe.",
      metaDescription:
        "Custom White Cross Stripe Hockey Jersey: white body with a red and navy cross stripe, laced collar and matching socks. Sublimated, made to order, MOQ 25.",
      description: [
        "The White Cross Stripe Hockey Jersey runs a bold red stripe, edged in navy, straight down the center of a white body and across both sleeves. The crossing stripes frame the crest on the chest and the number on the back, giving the jersey a classic, almost heraldic look. It works well as an away jersey for teams with red, white and navy colors.",
        "The jersey has a laced V-neck collar, a generous hockey cut that fits over shoulder pads and elbow pads, and a fight strap sewn inside the back. Everything is sublimated, so the stripes stay flat and never crack. Matching socks repeat the red and navy bands. Stripe colors, crest and numbers can all be changed to suit your club.",
      ],
      highlights: [
        "Red and navy cross stripe on white",
        "Laced V-neck collar and fight strap",
        "Cut to fit over shoulder and elbow pads",
        "Matching socks with red and navy bands",
      ],
    },
    {
      slug: "green-gold-striped-hockey-jersey",
      name: "Green & Gold Striped Hockey Jersey",
      detail: "Forest green jersey with gold and white bands.",
      metaDescription:
        "Custom Green & Gold Striped Hockey Jersey: forest green body with gold and white sleeve and hem bands and a subtle fade. Sublimated, from 25 pieces.",
      description: [
        "The Green & Gold Striped Hockey Jersey pairs a forest green body with gold and white bands across the sleeves and hem, the traditional striping layout fans recognise from the stands. A subtle darker fade toward the hem adds depth, and white numbers with a gold outline stay easy to read from the bench and the press box.",
        "The jersey is sublimated, so the bands and fade are dyed into the fabric and stay sharp through a full season of washing. It has a laced collar, a roomy cut over pads, and mesh panels under the arms for airflow. A fight strap is sewn inside the back. Matching green socks with gold and white bands complete the set.",
      ],
      highlights: [
        "Gold and white sleeve and hem bands",
        "Subtle darker fade toward the hem",
        "Underarm mesh panels for airflow",
        "Matching socks in the same stripe pattern",
      ],
    },
    {
      slug: "sky-blue-navy-band-hockey-jersey",
      name: "Sky Blue Navy Band Hockey Jersey",
      detail: "Sky blue jersey with a wide navy chest band.",
      metaDescription:
        "Custom Sky Blue Navy Band Hockey Jersey: sky blue body with a wide navy and white band across the chest and sleeves, plus matching socks. MOQ 25 pieces.",
      description: [
        "The Sky Blue Navy Band Hockey Jersey uses a light sky blue body with a wide navy band, edged in white, running across the chest and both sleeves. The crest sits in the middle of the band on the front, and navy numbers stand out clearly on the back. Thinner navy and white stripes at the hem balance the design.",
        "The jersey has a laced collar, a hockey cut that clears shoulder and elbow pads, and a fight strap inside the back. Because it is sublimated, the band and stripes line up perfectly across seams and never peel. Matching socks repeat the navy and white stripes. Any two colors can replace the sky blue and navy for your team.",
      ],
      highlights: [
        "Wide navy chest and sleeve band",
        "Crest centered in the band on the front",
        "Navy and white hem stripes",
        "Matching socks with navy and white stripes",
      ],
    },
    {
      slug: "orange-navy-panel-hockey-jersey",
      name: "Orange & Navy Panel Hockey Jersey",
      detail: "Orange jersey with curved navy side panels.",
      metaDescription:
        "Custom Orange & Navy Panel Hockey Jersey: orange body with curved navy side panels and navy and white stripes. Sublimated with fight strap, MOQ 25 pieces.",
      description: [
        "The Orange & Navy Panel Hockey Jersey has a bright orange body with curved navy panels that run from the underarm down each side to the hem. Navy and white stripes cross the sleeves and the lower body, and white numbers with a navy outline sit on the back. It is a strong, modern look for clubs with orange and navy colors.",
        "The panels are sublimated rather than sewn, so the jersey stays light and the curves stay smooth through every wash. It has a laced collar, a roomy cut over shoulder and elbow pads, and a fight strap inside the back. Matching orange socks carry navy and white bands. Panel shape, stripe colors and the crest can all be customised.",
      ],
      highlights: [
        "Curved navy side panels on orange",
        "Navy and white sleeve and hem stripes",
        "Sublimated panels keep the jersey light",
        "Matching socks with navy and white bands",
      ],
    },
    {
      slug: "black-lime-sash-hockey-jersey",
      name: "Black & Lime Sash Hockey Jersey",
      detail: "Black jersey with a bold lime diagonal sash.",
      metaDescription:
        "Custom Black & Lime Sash Hockey Jersey: black body with a bold lime green diagonal sash and matching sleeve stripes. Sublimated, any colors, MOQ 25 pieces.",
      description: [
        "The Black & Lime Sash Hockey Jersey cuts a wide lime green sash, edged in white, diagonally across a black body from shoulder to hip. Lime and white stripes repeat on the sleeves, and lime numbers stand out sharply on the back. The bright accent shows up clearly on the ice and on video, making it a favorite for club and tournament teams.",
        "The sash is sublimated, so it crosses the side seams cleanly and never cracks or lifts. The jersey has a laced collar, a hockey cut that fits over pads, and a fight strap inside the back. Matching black socks carry lime stripes. The sash angle and the accent color can be changed to any shade your team uses.",
      ],
      highlights: [
        "Lime green diagonal sash on black",
        "Lime and white sleeve stripes",
        "Bright accent that reads well on video",
        "Sash angle and color can be changed",
      ],
    },
    {
      slug: "purple-gold-panel-hockey-jersey",
      name: "Purple & Gold Panel Hockey Jersey",
      detail: "Purple jersey with gold side panels and stripes.",
      metaDescription:
        "Custom Purple & Gold Panel Hockey Jersey: purple body with straight gold side panels and gold and black stripes. Sublimated with laced collar, MOQ 25.",
      description: [
        "The Purple & Gold Panel Hockey Jersey uses a purple body with straight gold panels down each side, plus gold and black stripes across the sleeves and the hem. A gold crest sits on the chest and gold numbers carry across the back. The layout is clean and traditional, and it suits clubs and schools with purple and gold colors.",
        "All panels and stripes are sublimated, so there is no extra cost for colors and nothing peels after washing. The jersey has a laced collar, a roomy cut over shoulder and elbow pads, underarm mesh for airflow and a fight strap inside the back. Matching purple socks carry the same gold and black stripes.",
      ],
      highlights: [
        "Gold side panels on a purple body",
        "Gold and black sleeve and hem stripes",
        "Underarm mesh and inside fight strap",
        "Matching socks in the same stripe pattern",
      ],
    },
    {
      slug: "maroon-shard-hockey-jersey",
      name: "Maroon Shard Hockey Jersey",
      detail: "Maroon jersey with angular grey side shards.",
      metaDescription:
        "Custom Maroon Shard Hockey Jersey: maroon body with angular grey shard panels on the sides and grey and white stripes. Sublimated, made to order, MOQ 25.",
      description: [
        "The Maroon Shard Hockey Jersey has a deep maroon body with angular grey shards that cut in from each side, giving the jersey a sharp, modern shape. Grey and white stripes cross the sleeves and hem, and white numbers with a maroon outline sit on the back. It is a distinctive design for clubs with maroon and grey colors.",
        "The shards are sublimated, so the sharp edges stay crisp and line up across the side seams. The jersey has a laced collar, a hockey cut that fits over pads, and a fight strap sewn inside the back. Matching maroon socks repeat the grey and white stripes. The shard shape, stripe colors and base color can all be changed.",
      ],
      highlights: [
        "Angular grey shard panels on maroon",
        "Grey and white sleeve and hem stripes",
        "Crisp edges that line up across seams",
        "Matching socks with grey and white stripes",
      ],
    },
    {
      slug: "navy-gold-classic-hockey-jersey",
      name: "Navy & Gold Classic Hockey Jersey",
      detail: "Navy jersey with gold and white classic stripes.",
      metaDescription:
        "Custom Navy & Gold Classic Hockey Jersey: navy body with gold and white sleeve and hem stripes and thin gold piping. Sublimated with fight strap, MOQ 25.",
      description: [
        "The Navy & Gold Classic Hockey Jersey follows the traditional hockey layout: a navy body with gold and white stripes across the sleeves and hem, plus thin gold piping over the shoulders. White numbers with a gold outline sit on the back. It is a timeless design that looks right on varsity, club and adult league teams with navy and gold colors.",
        "The jersey can be fully sublimated or made with sewn tackle twill numbers and crest for a raised, stitched finish. It has a laced collar, a roomy cut over shoulder and elbow pads, and a fight strap inside the back. Matching navy socks carry the same gold and white stripes. Stripe widths and colors can be adjusted.",
      ],
      highlights: [
        "Gold and white stripes on navy",
        "Thin gold piping over the shoulders",
        "Sublimated or sewn tackle twill numbers",
        "Matching socks with gold and white stripes",
      ],
    },
    {
      slug: "black-red-yoke-hockey-jersey",
      name: "Black & Red Yoke Hockey Jersey",
      detail: "Black jersey with a red shoulder yoke.",
      metaDescription:
        "Custom Black & Red Yoke Hockey Jersey: black body with a red shoulder yoke and red and white stripes on the sleeves and hem. Sublimated, from 25 pieces.",
      description: [
        "The Black & Red Yoke Hockey Jersey pairs a black body with a red yoke across the shoulders and laced collar. Red and white stripes cross the sleeves and the hem, and white numbers with a red outline sit on the back. The dark body and bright yoke give the jersey a strong, aggressive look that suits black and red clubs.",
        "The yoke and stripes are sublimated, so they sit flat over shoulder pads with no extra seams. The jersey has a hockey cut that clears shoulder and elbow pads, underarm mesh for airflow and a fight strap inside the back. Matching black socks carry red and white stripes. Swap the red for any accent color your team uses.",
      ],
      highlights: [
        "Red shoulder yoke on a black body",
        "Red and white sleeve and hem stripes",
        "Flat printed yoke with no extra seams",
        "Accent color can be changed to any shade",
      ],
    },
    {
      slug: "royal-chevron-hockey-jersey",
      name: "Royal Chevron Hockey Jersey",
      detail: "Royal blue jersey with white chevron stripes.",
      metaDescription:
        "Custom Royal Chevron Hockey Jersey: royal blue body with stacked white chevrons at the hem and white sleeve stripes. Sublimated, laced collar, MOQ 25 pieces.",
      description: [
        "The Royal Chevron Hockey Jersey features stacked white and light grey chevrons that point down across the lower front of a royal blue body. Matching chevron stripes run across the sleeves, and white numbers stand out clearly on the back. The design feels classic but energetic, and it suits clubs and schools with royal blue and white colors.",
        "The chevrons are sublimated, so the stripes stay sharp at the seams and there is no extra charge for added colors. The jersey has a laced collar, a roomy cut over pads, and a fight strap inside the back. Matching royal socks carry the same white stripes. Chevron colors, spacing and angle can all be changed to suit your team.",
      ],
      highlights: [
        "Stacked white chevrons on royal blue",
        "Matching chevron stripes on the sleeves",
        "No extra charge for added stripe colors",
        "Chevron colors and spacing customizable",
      ],
    },
  ],
  "volleyball-uniforms": [
    {
      slug: "navy-gold-volleyball-set",
      name: "Navy & Gold Volleyball Set",
      detail: "Navy jersey and shorts with curved gold side panels.",
      metaDescription:
        "Custom Navy & Gold Volleyball Set: sublimated short-sleeve jersey and shorts with curved gold side panels and white numbers. Women’s cut, MOQ 25 sets.",
      description: [
        "The Navy & Gold Volleyball Set pairs a deep navy jersey with curved gold panels that sweep up each side from the hem to the underarm. White numbers and a white crew collar keep the front clean and easy for officials to read. It is a popular design for school teams and clubs with navy and gold colors, and it looks sharp in team photos.",
        "The jersey is a women’s cut with short sleeves and a close athletic fit that stays tucked through jumps and dives. Matching navy shorts carry a gold side stripe so the set reads as one piece on court. Everything is sublimated, so names, numbers and sponsor logos are dyed into the fabric. A contrasting libero jersey can be made in the same run.",
      ],
      highlights: [
        "Curved gold side panels on a navy body",
        "Women’s cut jersey with short sleeves",
        "Matching shorts with gold side stripe",
        "Libero jersey available in the same design",
      ],
    },
    {
      slug: "black-shard-volleyball-set",
      name: "Black Shard Volleyball Set",
      detail: "Black set with jagged red shard graphics.",
      metaDescription:
        "Custom Black Shard Volleyball Set: black sublimated jersey and shorts with jagged red shard graphics down the sides. Women’s cut, any colors, from 25 sets.",
      description: [
        "The Black Shard Volleyball Set uses a black base broken up by jagged red shards that run down both sides of the jersey and across the hem. The center of the chest stays clear for the team name and number, so the graphics frame the player without hiding the print. Club teams and tournament squads pick this design when they want an aggressive, modern look.",
        "Because the shards are sublimated, the pattern can wrap across seams and onto the shorts without any extra cost. The jersey has a short-sleeve women’s cut in a lightweight stretch knit that dries quickly between sets. Plain black shorts keep the outfit balanced. The red can be swapped for any accent color, and names, numbers and logos are included.",
      ],
      highlights: [
        "Jagged red shard graphics on a black base",
        "Clear chest area for team name and number",
        "Quick-dry stretch knit in a women’s cut",
        "Accent color can be changed to any shade",
      ],
    },
    {
      slug: "royal-fade-volleyball-set",
      name: "Royal Fade Volleyball Set",
      detail: "Royal blue jersey fading to black in halftone.",
      metaDescription:
        "Custom Royal Fade Volleyball Set: royal blue jersey that fades to black in a halftone dot pattern, with matching shorts. Fully sublimated, MOQ 25 sets.",
      description: [
        "The Royal Fade Volleyball Set starts with a bright royal blue chest and shoulders, then fades to black toward the hem through a halftone dot pattern. White numbers and a grey collar stand out against the blue, and the darker lower half keeps the jersey looking clean through long tournament days. It suits clubs that want movement in the design without busy graphics.",
        "Gradients like this are only possible with sublimation, which also means the colors never crack or fade in the wash. The jersey is a short-sleeve women’s cut, and the matching shorts continue the halftone dots at the hem. Any two colors can be used for the fade. Player names, numbers and a sleeve logo are printed in the same step.",
      ],
      highlights: [
        "Royal blue to black halftone fade",
        "Dot pattern continues onto the shorts",
        "Gradient can use any two team colors",
        "Sublimated colors that never crack or peel",
      ],
    },
    {
      slug: "green-chevron-volleyball-set",
      name: "Green Chevron Volleyball Set",
      detail: "Forest green set with gold and white chevrons.",
      metaDescription:
        "Custom Green Chevron Volleyball Set: forest green jersey and shorts with stacked gold and white chevron stripes. Sublimated women’s cut, made from 25 sets.",
      description: [
        "The Green Chevron Volleyball Set features stacked gold and white chevrons that point across the lower half of a forest green jersey. The same chevrons repeat on the shorts, so the set looks continuous when a player is standing at the net. Gold numbers with a white outline sit above the stripes. Schools with green and gold colors often choose this as their home set.",
        "All stripes are sublimated, so the chevrons stay sharp at the seams and there is no extra charge for the added colors. The jersey is a short-sleeve women’s cut in a lightweight stretch knit, with a white crew collar. Chevron colors and spacing can be changed, and a matching libero jersey in contrasting colors can be added to any order.",
      ],
      highlights: [
        "Gold and white chevrons on forest green",
        "Chevrons continue onto the shorts",
        "No extra charge for added stripe colors",
        "Matching libero jersey can be added",
      ],
    },
    {
      slug: "maroon-sash-volleyball-set",
      name: "Maroon Sash Volleyball Set",
      detail: "Maroon jersey with a wide grey diagonal sash.",
      metaDescription:
        "Custom Maroon Sash Volleyball Set: maroon jersey with a wide grey diagonal sash and matching shorts. Fully sublimated with names and numbers, MOQ 25 sets.",
      description: [
        "The Maroon Sash Volleyball Set has a wide grey band that runs diagonally from the shoulder to the opposite hip, edged with thin white lines. The sash continues across the shorts, giving the set a sense of motion even when players are standing still. White numbers sit above the band, and the maroon base works well for schools with maroon and grey colors.",
        "The jersey is sublimated, so the sash crosses the side seam cleanly with no stitching or overlays. It has a short-sleeve women’s cut in a stretch knit that moves freely through hitting and blocking. The angle and width of the sash can be adjusted, and the colors can be changed to any team palette. Names, numbers and logos are included.",
      ],
      highlights: [
        "Wide grey diagonal sash on maroon",
        "Sash continues across the shorts",
        "Sublimated so it crosses seams cleanly",
        "Sash angle, width and colors adjustable",
      ],
    },
    {
      slug: "purple-gold-volleyball-set",
      name: "Purple & Gold Volleyball Set",
      detail: "Purple jersey with gold side panels and sleeves.",
      metaDescription:
        "Custom Purple & Gold Volleyball Set: purple jersey with gold sleeves and side panels, plus matching shorts. Sublimated, women’s cut, made to order from 25 sets.",
      description: [
        "The Purple & Gold Volleyball Set uses a purple body with gold sleeves and straight gold side panels that run down to the hem. Gold numbers and team name sit on the purple chest, and a subtle texture in the body fabric gives the jersey depth up close. It is a clean, classic layout that suits schools and clubs with purple and gold colors.",
        "Matching purple shorts carry gold side panels and a team logo on the leg, so the set looks complete from every angle. The jersey has a short-sleeve women’s cut in a lightweight stretch knit. Everything is sublimated, including names and numbers, so nothing peels after repeated washing. Any two colors can be used in this panel layout.",
      ],
      highlights: [
        "Gold sleeves and side panels on purple",
        "Subtle printed texture in the body",
        "Matching shorts with leg logo",
        "Panel layout works with any two colors",
      ],
    },
    {
      slug: "black-lime-volleyball-set",
      name: "Black & Lime Volleyball Set",
      detail: "Black set with lime green piping and numbers.",
      metaDescription:
        "Custom Black & Lime Volleyball Set: black sublimated jersey and shorts with lime green numbers and side piping. Women’s cut, any accent color, from 25 sets.",
      description: [
        "The Black & Lime Volleyball Set keeps the design simple: a black jersey with lime green numbers, team name and twin lines of piping down each side. A white collar adds contrast at the neck. The bright accent shows up clearly in gyms and on video, while the black base stays clean through long weekends of tournament play.",
        "The shorts match the jersey with lime piping and a small logo on the leg. The jersey is a short-sleeve women’s cut in a quick-dry stretch knit that holds its shape through every dive. Because the set is sublimated, the lime can be swapped for any other accent color at no extra cost. Names, numbers and sponsor logos are included.",
      ],
      highlights: [
        "Lime green numbers and side piping on black",
        "Bright accent that reads well on video",
        "Quick-dry stretch knit in a women’s cut",
        "Accent color changeable at no extra cost",
      ],
    },
    {
      slug: "orange-brushstroke-volleyball-set",
      name: "Orange Brushstroke Volleyball Set",
      detail: "Orange jersey with navy brushstroke sweeps.",
      metaDescription:
        "Custom Orange Brushstroke Volleyball Set: orange jersey with sweeping navy brushstroke graphics and matching navy shorts. Sublimated women’s cut, MOQ 25 sets.",
      description: [
        "The Orange Brushstroke Volleyball Set has a bright orange body with wide navy brushstrokes that sweep diagonally across the lower half of the jersey. The rough paint edges give it an energetic, hand-made look that stands out in tournament halls. White numbers with a navy outline stay easy to read above the graphic. It suits clubs with orange and navy colors.",
        "The brushstrokes are sublimated, so they cross the side seams and continue onto the navy shorts without any break. The jersey is a short-sleeve women’s cut in a lightweight stretch knit. You can change the stroke color, the base color or the angle of the sweep. Names, numbers and logos on the sleeve and leg are included in the price.",
      ],
      highlights: [
        "Navy brushstroke sweeps on an orange body",
        "Graphics cross seams onto the shorts",
        "Stroke color, base color and angle adjustable",
        "Names, numbers and logos included",
      ],
    },
    {
      slug: "sky-blue-volleyball-set",
      name: "Sky Blue Volleyball Set",
      detail: "Sky blue set with navy side panels.",
      metaDescription:
        "Custom Sky Blue Volleyball Set: sky blue jersey and shorts with navy side panels and navy numbers. Sublimated, women’s cut, made to order from 25 sets.",
      description: [
        "The Sky Blue Volleyball Set uses a light sky blue body with navy side panels framed by thin white piping, plus navy numbers and team name across the chest. The light base keeps the jersey feeling cool in warm gyms, and the navy panels give it a slimming, athletic shape. Schools and clubs with Carolina or powder blue colors often start here.",
        "The matching shorts carry the same navy panels and a team logo on the leg. The jersey is a short-sleeve women’s cut in a breathable stretch knit with a navy collar. All colors, numbers and logos are sublimated, so they stay bright after many washes. Any two colors can replace the sky blue and navy, and a libero jersey can be added.",
      ],
      highlights: [
        "Navy side panels with white piping",
        "Light base that stays cool in warm gyms",
        "Matching shorts with leg logo",
        "Libero jersey can be added in any quantity",
      ],
    },
    {
      slug: "white-center-stripe-volleyball-set",
      name: "White Center-Stripe Volleyball Set",
      detail: "White set with a red and navy center stripe.",
      metaDescription:
        "Custom White Center-Stripe Volleyball Set: white jersey with a bold red and navy vertical center stripe, plus matching shorts. Sublimated, MOQ 25 sets.",
      description: [
        "The White Center-Stripe Volleyball Set runs a bold red stripe, edged in navy, straight down the center of a white jersey. The team name and navy numbers sit across the stripe, and red side panels on the jersey and shorts tie the set together. It is a clean, classic look that works well as an away uniform or for teams with red, white and navy colors.",
        "Because the stripe is sublimated, it stays perfectly straight and lies flat with no seams down the front. The jersey is a short-sleeve women’s cut with a navy collar, made from a stretch knit that keeps its shape through every jump. Stripe width and colors can be changed. Names, numbers and logos are printed in the same pass.",
      ],
      highlights: [
        "Red and navy vertical stripe on white",
        "Red side panels on jersey and shorts",
        "Printed stripe lies flat with no front seam",
        "Stripe width and colors customizable",
      ],
    },
  ],
  "team-warm-ups-tracksuits": [
    {
      slug: "white-red-brushstroke-tracksuit",
      name: "White & Red Brushstroke Tracksuit",
      detail: "White tracksuit with red brushstroke sweeps.",
      metaDescription:
        "Custom White & Red Brushstroke Tracksuit: full-zip jacket, joggers and matching hoodie with sublimated red brushstrokes and team names. MOQ 25 sets.",
      description: [
        "The White & Red Brushstroke Tracksuit pairs a clean white full-zip jacket with bold red brushstrokes that sweep across the lower body and continue onto the joggers below the knee. A navy zip, team crest on the chest and a large team name across the back finish the set. A matching white hoodie with a red hood and cuffs completes the look.",
        "Every graphic is sublimated into a soft brushed polyester knit, so the strokes stay sharp after repeated washing and never crack or peel. The jacket has a stand-up collar, zip hand pockets and elastic cuffs, while the joggers use an elastic waist with drawcord and tapered ankles. Brushstroke colors can be changed to match any team kit.",
      ],
      highlights: [
        "Red brushstroke sweeps on a white base",
        "Jacket, joggers and hoodie in one design",
        "Large team name printed across the back",
        "Brushstroke color can match any team kit",
      ],
    },
    {
      slug: "sky-blue-panel-tracksuit",
      name: "Sky Blue Panel Tracksuit",
      detail: "Sky blue tracksuit with curved navy side panels.",
      metaDescription:
        "Custom Sky Blue Panel Tracksuit: sky blue full-zip jacket and joggers with curved navy side panels, plus a matching hoodie. Sublimated, from 25 sets.",
      description: [
        "The Sky Blue Panel Tracksuit uses a light sky blue body with curved navy panels that run down each side of the jacket and along the outside of the joggers. A white zip, small team name and crest on the chest and an arched team name across the back keep it smart for travel days. The matching hoodie adds navy cuffs and a navy hem band.",
        "The set is made from a brushed polyester knit that is warm before matches but light enough for travel. Panels are sublimated, so they sit flat without extra seams. The jacket has a stand-up collar, zip pockets and elastic cuffs, and the joggers have a drawcord waist and tapered legs. Any two team colors can replace the sky blue and navy.",
      ],
      highlights: [
        "Curved navy side panels on sky blue",
        "Arched team name across the jacket back",
        "Matching hoodie with navy cuffs and hem",
        "Drawcord joggers with tapered legs",
      ],
    },
    {
      slug: "orange-sash-tracksuit",
      name: "Orange Sash Tracksuit",
      detail: "Orange tracksuit with a bold navy diagonal sash.",
      metaDescription:
        "Custom Orange Sash Tracksuit: orange full-zip jacket with a wide navy diagonal sash, matching joggers and hoodie. Fully sublimated with logos, MOQ 25 sets.",
      description: [
        "The Orange Sash Tracksuit runs a wide navy sash diagonally across the front and back of a bright orange full-zip jacket, with the same band cutting across one leg of the joggers. The team crest sits on the sash at the chest, and the team name is printed along the sash on the back. A matching orange hoodie carries the sash on its sleeve.",
        "The sash is sublimated rather than sewn, so it crosses the zip and side seams cleanly and lies flat. The jacket is made from a brushed polyester knit with a stand-up collar, zip hand pockets and navy cuffs. Joggers have an elastic drawcord waist and tapered legs. The sash angle, width and colors can all be adjusted to suit your club.",
      ],
      highlights: [
        "Wide navy diagonal sash on orange",
        "Team name printed along the back sash",
        "Sash continues across one jogger leg",
        "Sash angle, width and colors adjustable",
      ],
    },
    {
      slug: "purple-shard-tracksuit",
      name: "Purple Shard Tracksuit",
      detail: "Purple tracksuit with gold and grey shard graphics.",
      metaDescription:
        "Custom Purple Shard Tracksuit: purple full-zip jacket, joggers and hoodie with angular gold and grey shard graphics. Sublimated team warm-up, MOQ 25 sets.",
      description: [
        "The Purple Shard Tracksuit breaks up a deep purple base with angular gold and grey shards that rise from the hem of the jacket and run down the sides of the joggers. Gold team names and a crest stand out on the chest and back. The matching purple hoodie repeats the shards at the hem and adds a gold hood lining and gold cuffs.",
        "Because the shards are sublimated, the pattern can wrap across seams and pockets at no extra cost and will not fade with washing. The jacket uses a brushed polyester knit with a stand-up collar, full-length zip and elastic cuffs. Joggers have a drawcord waist, zip pockets and tapered ankles. Shard colors can be swapped for any team palette.",
      ],
      highlights: [
        "Gold and grey shards on deep purple",
        "Pattern wraps across seams at no extra cost",
        "Hoodie with gold hood lining and cuffs",
        "Shard colors match any team palette",
      ],
    },
    {
      slug: "maroon-fade-tracksuit",
      name: "Maroon Fade Tracksuit",
      detail: "Maroon tracksuit fading to black in halftone dots.",
      metaDescription:
        "Custom Maroon Fade Tracksuit: maroon full-zip jacket and joggers that fade to black in halftone dots, with a matching hoodie. Sublimated, from 25 sets.",
      description: [
        "The Maroon Fade Tracksuit starts with a rich maroon chest and shoulders, then fades to black toward the hem through a halftone dot pattern. The joggers repeat the fade below the knee, so the whole set flows from top to bottom. White team names and a crest sit on the maroon, and a matching hoodie with a grey hood lining completes the range.",
        "Gradients like this are only possible with sublimation, and the colors stay bright through a full season of washing. The jacket is a brushed polyester knit with a stand-up collar, white zip and elastic cuffs, and the joggers have a drawcord waist with tapered legs. The fade can use any two colors, so it suits almost any club or school.",
      ],
      highlights: [
        "Maroon to black halftone fade",
        "Fade repeats on the joggers below the knee",
        "Matching hoodie with grey hood lining",
        "Fade can use any two team colors",
      ],
    },
    {
      slug: "royal-yoke-tracksuit",
      name: "Royal Yoke Tracksuit",
      detail: "Royal blue tracksuit with a white shoulder yoke.",
      metaDescription:
        "Custom Royal Yoke Tracksuit: royal blue full-zip jacket with a white shoulder yoke, joggers with white side panels and a matching hoodie. MOQ 25 sets.",
      description: [
        "The Royal Yoke Tracksuit uses a bright royal blue body with a white yoke across the shoulders that frames the team name on the back. White panels run down the sides of the joggers to carry the contrast through the set. A crest and small team name on the chest keep the front clean, and the matching hoodie has a white hood lining and hem band.",
        "The yoke is sublimated, so it sits flat without the bulk of a sewn panel. The jacket is cut from a brushed polyester knit with a stand-up collar, full-length zip, zip pockets and elastic cuffs. Joggers have a drawcord waist and tapered legs. It is a clean, classic warm-up that works with any two team colors.",
      ],
      highlights: [
        "White shoulder yoke on royal blue",
        "Joggers with matching white side panels",
        "Hoodie with white hood lining and hem",
        "Flat printed yoke with no bulky seams",
      ],
    },
    {
      slug: "green-chevron-tracksuit",
      name: "Green Chevron Tracksuit",
      detail: "Forest green tracksuit with gold and white chevrons.",
      metaDescription:
        "Custom Green Chevron Tracksuit: forest green full-zip jacket and joggers with gold and white chevron stripes, plus a matching hoodie. Sublimated, MOQ 25.",
      description: [
        "The Green Chevron Tracksuit features stacked gold and white chevrons across the lower front and back of a forest green full-zip jacket, with the same stripes repeated around the joggers below the knee. A team crest and name sit on the chest, and a large gold team name runs across the back. The matching hoodie adds gold cuffs and a gold hood lining.",
        "All stripes are sublimated, so there is no extra charge for added colors and the chevrons stay sharp at every seam. The jacket uses a brushed polyester knit with a stand-up collar, zip pockets and elastic cuffs. Joggers have a drawcord waist and tapered ankles. Chevron colors and spacing can be changed to match your playing kit.",
      ],
      highlights: [
        "Gold and white chevrons on forest green",
        "Chevrons repeat on the joggers below the knee",
        "No extra charge for added stripe colors",
        "Hoodie with gold cuffs and hood lining",
      ],
    },
    {
      slug: "navy-gold-raglan-tracksuit",
      name: "Navy & Gold Raglan Tracksuit",
      detail: "Navy tracksuit with gold raglan shoulders.",
      metaDescription:
        "Custom Navy & Gold Raglan Tracksuit: navy full-zip jacket with gold raglan shoulders, joggers with gold side stripes and a matching hoodie. MOQ 25 sets.",
      description: [
        "The Navy & Gold Raglan Tracksuit pairs a navy body with gold raglan shoulders edged in white, giving the jacket a classic sporty shape. Gold stripes run down the outside of the navy joggers, and a large team name sits across the shoulders on the back. The matching navy hoodie has a gold hood lining, gold cuffs and a gold hem band.",
        "The jacket is made from a brushed polyester knit with a stand-up collar, white full-length zip, zip hand pockets and elastic cuffs. Joggers have a drawcord waist and tapered legs. Shoulder and stripe colors are sublimated, so they never fade or peel. Crests can also be embroidered on the chest for a premium finish on staff and coach sets.",
      ],
      highlights: [
        "Gold raglan shoulders on a navy body",
        "Joggers with gold side stripes",
        "Hoodie with gold lining, cuffs and hem",
        "Optional embroidered crest on the chest",
      ],
    },
    {
      slug: "black-red-piping-tracksuit",
      name: "Black & Red Piping Tracksuit",
      detail: "Black tracksuit with fine red side piping.",
      metaDescription:
        "Custom Black & Red Piping Tracksuit: black full-zip jacket and joggers with fine red side piping and white team names, plus a matching hoodie. MOQ 25 sets.",
      description: [
        "The Black & Red Piping Tracksuit keeps things understated: a black full-zip jacket and joggers with a fine red line of piping down each side, a white zip, and a white team name across the back. The matching black hoodie adds a red hood lining and red cuffs. It is a smart choice for travel days, coaching staff and clubs that prefer a minimal look.",
        "The black base hides wear and stays sharp through a season of training. The jacket is a brushed polyester knit with a stand-up collar, zip hand pockets and elastic cuffs, and the joggers have a drawcord waist with tapered legs. Crests and names can be printed or embroidered, and the piping color can be changed to any team accent.",
      ],
      highlights: [
        "Fine red side piping on black",
        "Minimal look for travel and staff",
        "Hoodie with red hood lining and cuffs",
        "Printed or embroidered crests and names",
      ],
    },
    {
      slug: "charcoal-lime-tracksuit",
      name: "Charcoal & Lime Tracksuit",
      detail: "Charcoal tracksuit with lime green side panels.",
      metaDescription:
        "Custom Charcoal & Lime Tracksuit: charcoal full-zip jacket and joggers with lime green side panels and team names, plus a matching hoodie. From 25 sets.",
      description: [
        "The Charcoal & Lime Tracksuit uses a dark charcoal base with bright lime green panels down the sides of the jacket and joggers. A large lime team name runs across the back, with a smaller name and crest on the chest. The matching charcoal hoodie has a lime hood lining and lime hem band, so the whole range carries the same high-energy accent.",
        "The charcoal fabric hides dirt and wear, while the lime keeps players visible during evening warm-ups. The jacket is a brushed polyester knit with a stand-up collar, full-length zip, zip pockets and elastic cuffs. Joggers have a drawcord waist and tapered legs. The lime can be changed to any accent color, all sublimated at no extra cost.",
      ],
      highlights: [
        "Lime green side panels on charcoal",
        "Large lime team name across the back",
        "Hoodie with lime hood lining and hem",
        "Accent color changeable at no extra cost",
      ],
    },
  ],
};
