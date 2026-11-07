/**
 * Individual products shown as cards on each category page (/products/[slug]/)
 * and as their own item pages. Keyed by the category slug in products.ts.
 *
 * Every item needs a unique slug within its category, a one-line card detail,
 * a 140–160 character meta description, two description paragraphs and four
 * highlight bullets.
 *
 * Images: add a photo at /public/images/products/[category-slug]/[item-slug].jpg
 * (1200×900 recommended). Until you do, the card shows the category image.
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
      slug: "sublimated-soccer-kit",
      name: "Sublimated Soccer Kit",
      detail: "Jersey, shorts and socks in your full design.",
      metaDescription:
        "Custom sublimated soccer kit with jersey, shorts and socks printed in your full design. Lightweight quick-dry knit, player names and numbers, MOQ 25 kits.",
      description: [
        "This is our complete match kit: jersey, shorts and socks produced together so every color lines up. The jersey and shorts are sublimated on a lightweight micro-interlock, which takes gradients, fine patterns and sponsor logos without any extra charge per color. Socks are knitted or sublimated to match, with your crest or a stripe band at the top.",
        "Clubs, academies and tournament organizers order this kit because it arrives ready for match day, with each player’s name and number already applied and packed by roster. Necklines can be crew, V-neck or a wrap collar, and the jersey comes in regular, slim and women’s cuts. Brands use the same base for private-label replica kits.",
      ],
      highlights: [
        "Jersey, shorts and socks color-matched in one run",
        "Sublimated micro-interlock with no per-color cost",
        "Crew, V-neck or wrap collar options",
        "Packed per player with names and numbers",
      ],
    },
    {
      slug: "classic-crew-neck-jersey",
      name: "Classic Crew-Neck Jersey",
      detail: "Lightweight interlock with a ribbed collar.",
      metaDescription:
        "Custom classic crew-neck jersey for soccer in lightweight interlock with a ribbed collar and set-in sleeves. Sublimated or solid with printed numbers, MOQ 25.",
      description: [
        "The crew-neck jersey is the simplest soccer shirt we make, and for many clubs it is the right one. A ribbed knit collar sits close to the neck without scratching, and set-in sleeves give a clean, traditional shoulder line. The body is a light interlock that keeps its shape after washing and dries quickly between games.",
        "It works as a full sublimated design or as a solid color with contrast trim on the collar and cuffs. Solid versions are popular with schools and recreational leagues that want a budget-friendly kit, with numbers screen-printed or heat-applied on the back. Add an embroidered crest or a silicone badge for a more finished look.",
      ],
      highlights: [
        "Soft ribbed crew collar",
        "Set-in sleeves for a traditional shoulder line",
        "Solid with contrast trim or fully sublimated",
        "Embroidered crest or silicone badge options",
      ],
    },
    {
      slug: "polo-collar-jersey",
      name: "Polo-Collar Jersey",
      detail: "Retro collared look for clubs and academies.",
      metaDescription:
        "Custom polo-collar jersey for soccer with a knitted or self-fabric collar and button or open placket. Retro club look in sublimated interlock, from 25 pieces.",
      description: [
        "Collared jerseys bring back the look of classic club shirts, and they are popular for anniversary kits, academies and teams that want to stand out from the usual crew neck. We offer a flat-knit collar with contrast tipping or a self-fabric collar cut from the same printed material, with a short button placket or an open V placket.",
        "The body is the same breathable interlock as our match jerseys, so it still performs on the field. Collars are interfaced lightly so they don’t curl after washing. Clubs often pair this jersey with an embroidered crest and retro-style numbers, and brands use it for heritage replica lines sold to supporters.",
      ],
      highlights: [
        "Flat-knit or self-fabric collar",
        "Button placket or open V placket",
        "Lightly interfaced collar resists curling",
        "Suited to anniversary and retro kits",
      ],
    },
    {
      slug: "goalkeeper-kit",
      name: "Goalkeeper Kit",
      detail: "Padded long-sleeve shirt with matching shorts.",
      metaDescription:
        "Custom goalkeeper kit with a long-sleeve shirt, padded elbows and matching padded shorts or pants. Contrasting colors to meet league rules, MOQ 25.",
      description: [
        "Keepers dive on hard ground and need a kit that protects without slowing them down. Our goalkeeper shirt has long sleeves with foam padding stitched in at the elbows and forearms, and comes with shorts or full-length pants padded at the hips. The fabric is a slightly heavier interlock that resists abrasion from turf and dirt.",
        "Because league rules require keepers to wear colors that contrast with both teams, clubs usually order two or three keeper kits in different colorways. We print them in the same design language as the outfield kit so the squad still looks unified. Keeper kits can be added to a team order in small numbers.",
      ],
      highlights: [
        "Foam padding at elbows and forearms",
        "Padded shorts or full-length pants",
        "Abrasion-resistant interlock body",
        "Several colorways to meet contrast rules",
      ],
    },
    {
      slug: "training-bib",
      name: "Training Bib",
      detail: "Mesh pinnies in bright, numbered sets.",
      metaDescription:
        "Custom soccer training bibs in open polyester mesh with bound edges and printed numbers. Bright, high-visibility sets for clubs, schools and coaches.",
      description: [
        "Training bibs, also called pinnies, split a squad into teams in a few seconds. Ours are made from open polyester mesh in bright colors like neon yellow, orange and green, with bound edges at the neck and armholes so they hold up to being pulled on and off every session. Wide side openings fit over a jersey or a jacket.",
        "Order them blank or printed with numbers, the club crest or a sponsor logo on the chest. Coaches like numbered sets because players can be called by number during drills. We pack bibs in sets per color so equipment managers can store them easily. They are also a common add-on for camps, schools and tournament organizers.",
      ],
      highlights: [
        "Open mesh in high-visibility colors",
        "Bound neck and armhole edges",
        "Wide cut fits over jerseys and jackets",
        "Blank, numbered or printed with logos",
      ],
    },
    {
      slug: "soccer-shorts",
      name: "Soccer Shorts",
      detail: "Elastic-waist shorts with inner drawcord.",
      metaDescription:
        "Custom soccer shorts with an elastic waist, inner drawcord and side vents in lightweight quick-dry fabric. Sublimated designs or solid colors with numbers.",
      description: [
        "A good pair of soccer shorts should stay put through sprints and slide tackles without feeling tight. We use a wide elastic waistband with an inner drawcord, side vents at the hem for stride and a gusset that reduces strain when players stretch. The fabric is a light, quick-dry polyester that matches the hand feel of our jerseys.",
        "Shorts can be sublimated to continue a jersey design or made in a solid color with contrast piping. Player numbers on the front leg and a small crest are common additions. We offer regular and women’s cuts, plus several leg lengths. Clubs often order an extra pair per player because shorts wear out faster than jerseys.",
      ],
      highlights: [
        "Wide elastic waist with inner drawcord",
        "Side vents and a gusset for stride",
        "Sublimated or solid with piping",
        "Regular and women’s cuts, several lengths",
      ],
    },
    {
      slug: "soccer-socks",
      name: "Soccer Socks",
      detail: "Knitted socks with cushioned foot and team stripes.",
      metaDescription:
        "Custom soccer socks knitted with a cushioned terry foot, arch support band and team stripes or logos. Knee-high fit over shin guards, made to order.",
      description: [
        "Match socks need to hold shin guards in place for ninety minutes and stay comfortable inside a boot. We knit them knee-high with a cushioned terry foot, an elastic arch band and a ribbed leg that grips without cutting off circulation. The top cuff folds over cleanly and holds its shape after many washes.",
        "Team stripes, hoops or a crest can be knitted directly into the leg, and sublimated socks are available for more complex designs. We match sock colors to your jersey and shorts during sampling. Clubs also order grip-sole training socks and cut-off sleeve socks for players who prefer their own grip socks underneath.",
      ],
      highlights: [
        "Cushioned terry foot and arch band",
        "Knee-high ribbed leg holds shin guards",
        "Knitted-in stripes, hoops or crest",
        "Sublimated and sleeve-only versions available",
      ],
    },
    {
      slug: "training-top",
      name: "Quarter-Zip Training Top",
      detail: "Slim-fit warm-up top for pre-match and travel.",
      metaDescription:
        "Custom quarter-zip training top for soccer in slim-fit stretch knit with thumbholes and a zip collar. Embroidered or sublimated club branding, MOQ 25 pieces.",
      description: [
        "The quarter-zip training top is what players wear in the warm-up, on the bench and on the team bus. We cut it slim from a brushed-back stretch knit that keeps players warm without bulk, with a short zip to vent heat and thumbholes in the cuffs. The collar stands up to cover the neck on cold mornings.",
        "Club crests and sponsor logos can be embroidered or sublimated, and panels can be colored to match the match kit. Academies often give one to every player as part of a season pack, and the style sells well in club shops. A matching pair of tapered training pants turns it into a full warm-up set.",
      ],
      highlights: [
        "Slim-fit brushed-back stretch knit",
        "Quarter-length zip with stand-up collar",
        "Thumbholes in the cuffs",
        "Embroidered or sublimated branding",
      ],
    },
    {
      slug: "youth-academy-kit",
      name: "Youth Academy Kit",
      detail: "Durable kits sized from 4 years upward.",
      metaDescription:
        "Custom soccer youth academy kit sized from age 4 upward: durable jersey, shorts and socks with reinforced seams plus names and numbers. Made to order.",
      description: [
        "Youth kits get more wear than adult ones: grass stains, playground use and weekly washing at high temperatures. Our academy kit uses the same sublimated fabrics as our senior kits but adds reinforced seams at the shoulders and hem, plus slightly heavier shorts. Sizes start at age four and step up in small increments so younger players aren’t swimming in their shirts.",
        "Academies and grassroots clubs usually order the full set of jersey, shorts and socks with player names and numbers, so parents receive a ready-to-wear kit. Matching training tops, bibs and backpacks can be produced in the same order. We pack each kit individually labeled by name, which makes distribution at registration day much easier.",
      ],
      highlights: [
        "Sizes from age 4 in small steps",
        "Reinforced shoulder and hem seams",
        "Full set with names and numbers",
        "Individually packed and labeled per player",
      ],
    },
    {
      slug: "referee-kit",
      name: "Referee Kit",
      detail: "Shirt with pockets, shorts and socks in referee colors.",
      metaDescription:
        "Custom soccer referee kit: shirt with chest pockets and badge loop, shorts with card pockets and matching socks in standard referee colors. Order from 25.",
      description: [
        "Referees need specific details that a player’s jersey doesn’t have. Our referee shirt has two chest pockets with secure closures for cards and a notebook, a loop or patch area for the official badge, and a collar that stays neat through a match. Short and long sleeves are available in the standard colors used by most associations.",
        "Shorts include rear pockets for cards and a whistle, and socks come with horizontal stripes to match. Referee associations, league organizers and sports retailers order full sets in multiple colors so officials can avoid clashing with either team. Association logos can be embroidered, and we can produce assistant referee sets in the same order.",
      ],
      highlights: [
        "Two secure chest pockets for cards",
        "Badge loop or patch area on the chest",
        "Shorts with rear card and whistle pockets",
        "Multiple standard referee colors",
      ],
    },
  ],
  "baseball-uniforms": [
    {
      slug: "button-front-jersey",
      name: "Full Button-Front Jersey",
      detail: "Classic placket jersey with sewn lettering.",
      metaDescription:
        "Custom full button-front jersey for baseball with a reinforced placket, piping options and sewn tackle twill script lettering. Pro-weight knit, MOQ 25.",
      description: [
        "The full button-front jersey is the classic baseball top, and getting the details right is what makes it look professional. The placket is interfaced so it lies flat and doesn’t gap between buttons, and the buttons are sewn with a lock stitch that won’t loosen during a slide. Piping can run down the placket, around the collar and along the sleeve ends.",
        "Script lettering across the chest is cut from tackle twill and stitched by hand, with the placket opening worked into the lettering so it reads cleanly when buttoned. We make the body in a pro-weight double knit or a lighter performance knit. High school varsity teams, college club programs and adult leagues are the main buyers.",
      ],
      highlights: [
        "Interfaced placket that lies flat",
        "Lock-stitched buttons resist loosening",
        "Optional piping on placket, collar and sleeves",
        "Tackle twill script lettering across the chest",
      ],
    },
    {
      slug: "two-button-jersey",
      name: "Two-Button Jersey",
      detail: "Henley-style jersey for a lighter, faster fit.",
      metaDescription:
        "Custom two-button jersey for baseball with a henley-style placket in lightweight performance knit. Sublimated or twill decoration, ideal for travel ball teams.",
      description: [
        "A two-button jersey gives the look of a placket without a full button-down front, so it pulls on over the head and stays neat under a catcher’s gear or a sliding mitt. The short placket opens enough to get through the neck easily, and the body is one continuous piece, which leaves more room for front graphics.",
        "We make it in a lightweight performance knit that wicks sweat in summer tournaments. Decoration can be full sublimation, sewn twill numbers or a mix of both. Travel ball organizations, softball programs and rec leagues pick this style because it costs a little less than a full-button jersey and needs no buttoning on game day.",
      ],
      highlights: [
        "Short two-button henley placket",
        "Pullover construction with no gaps",
        "Lightweight moisture-wicking knit",
        "Uninterrupted front for larger graphics",
      ],
    },
    {
      slug: "sublimated-crew-jersey",
      name: "Sublimated Crew Jersey",
      detail: "Pullover jersey with unlimited color designs.",
      metaDescription:
        "Custom baseball sublimated crew jersey printed with unlimited colors, gradients and patterns. Lightweight pullover style for travel and tournament teams.",
      description: [
        "Tournament baseball has moved toward bold graphics, and the sublimated crew jersey is the best canvas for them. Distressed textures, flag patterns, gradients and team mascots are dyed into the fabric across the whole shirt, including the sleeves and collar. There is no extra charge for more colors, and names and numbers print at the same time.",
        "The crew neck and raglan or set-in sleeves keep the build simple and light. We use a soft interlock with a slight stretch so the jersey moves easily through a throwing motion. Travel teams, showcase programs and brands that sell team packages order this style, often alongside matching sublimated pants and caps.",
      ],
      highlights: [
        "Unlimited colors and graphics at one price",
        "Raglan or set-in sleeve options",
        "Soft interlock with slight stretch",
        "Names and numbers printed in the same step",
      ],
    },
    {
      slug: "pinstripe-jersey",
      name: "Pinstripe Jersey",
      detail: "Woven pinstripes in any color combination.",
      metaDescription:
        "Custom baseball pinstripe jersey with stripes matched across the placket and seams. Any stripe and base color, with sewn twill lettering and numbers.",
      description: [
        "Pinstripes look sharp only when they line up, and that takes care at the cutting table. We align the stripes across the placket, side seams and sleeves before cutting so they continue unbroken across the jersey. Stripe width and spacing can be fine or bold, and the stripe color can be any shade from your palette on a white, gray or cream base.",
        "Lettering and numbers are usually tackle twill, sewn over the stripes for the traditional ballpark look. Stripes can be knitted into the fabric or sublimated, which allows two-color stripes and fade effects. Adult leagues, high school programs and brands producing heritage-style replicas order pinstripes, often with matching pinstripe pants.",
      ],
      highlights: [
        "Stripes aligned across placket and seams",
        "Any stripe color on white, gray or cream",
        "Knitted or sublimated stripe options",
        "Matching pinstripe pants available",
      ],
    },
    {
      slug: "baseball-pants",
      name: "Baseball Pants",
      detail: "Full-length, knicker or open-bottom cuts.",
      metaDescription:
        "Custom baseball pants in full-length, knicker or open-bottom cuts with reinforced knees, belt loops and optional piping or braid. Pro-weight double knit.",
      description: [
        "Baseball pants take a beating from sliding, so the knees and seat get a second layer of fabric on our pro styles. The waistband has belt loops spaced to hold a standard baseball belt, the fly uses a heavy-duty zipper and the back pockets are bartacked. We knit the fabric from polyester double knit with stretch so pants recover after squatting and running.",
        "Choose knicker length with elastic cuffs for high socks, open-bottom for a relaxed look, or full-length with a hemmed or elastic ankle. Piping or braid down the side is common, and pants can be sublimated with stripes or patterns. Colors include gray, white and any team color you want dyed.",
      ],
      highlights: [
        "Double-layered knees on pro styles",
        "Knicker, open-bottom or full-length cuts",
        "Heavy-duty zipper and bartacked pockets",
        "Optional side piping or braid",
      ],
    },
    {
      slug: "softball-uniform",
      name: "Softball Uniform",
      detail: "Women’s cut jerseys with matching shorts or pants.",
      metaDescription:
        "Custom softball uniform with a women’s cut jersey and matching shorts or pants. Sleeveless, short-sleeve and button-front styles, sublimated or twill.",
      description: [
        "Fastpitch and slowpitch players need a uniform that fits a woman’s frame and lets the arm swing freely. Our softball jerseys are cut from a women’s pattern with a shaped waist and longer back hem, and come in sleeveless, short-sleeve, two-button and full-button styles. Armholes on sleeveless versions are bound so they lie flat during the pitching motion.",
        "Bottoms include slider-friendly shorts, low-rise pants and knicker cuts with reinforced knees. Sublimated designs are most popular for travel teams, while school programs often prefer twill numbers on a solid body. Matching visors, headbands and socks complete the set. We also make relaxed-fit versions for coed and adult recreational leagues.",
      ],
      highlights: [
        "Women’s pattern with shaped waist",
        "Sleeveless, two-button and full-button styles",
        "Bound armholes for the pitching motion",
        "Shorts, pants or knicker bottoms",
      ],
    },
    {
      slug: "raglan-undershirt",
      name: "Raglan Undershirt",
      detail: "Three-quarter sleeve base layer in team colors.",
      metaDescription:
        "Custom baseball raglan undershirt with three-quarter sleeves in moisture-wicking stretch fabric. Team-colored sleeves under any jersey, from 25 pieces.",
      description: [
        "The three-quarter sleeve undershirt is worn under a baseball jersey to add color at the arms and keep the throwing arm warm. We cut it with raglan sleeves so the seam runs from the collar to the underarm, which means nothing presses on the top of the shoulder during a throw. The fabric is a polyester and spandex blend that wicks sweat.",
        "Most teams order the sleeves in their main color with a white or gray body, so the shirt also works on its own for practice. A small logo or number on the sleeve is optional. Tagless printed labels avoid scratching, and the neckline is a soft rib. Long-sleeve and short-sleeve versions are also available.",
      ],
      highlights: [
        "Raglan seams clear the throwing shoulder",
        "Moisture-wicking polyester and spandex blend",
        "Contrast sleeves in team colors",
        "Tagless printed neck labels",
      ],
    },
    {
      slug: "batting-practice-jersey",
      name: "Batting Practice Jersey",
      detail: "Breathable mesh BP top for warm-ups.",
      metaDescription:
        "Custom batting practice jersey in breathable mesh with raglan sleeves and sublimated or printed graphics. Worn for BP, warm-ups and dugout wear, MOQ 25.",
      description: [
        "A batting practice jersey takes the pressure off game uniforms. Players wear it in the cage, during pre-game warm-ups and for practice, so the game jerseys stay clean for when it counts. We make it from a breathable mesh with a slightly looser fit than a game jersey, and raglan sleeves for an easy swing.",
        "Batting practice tops are where teams experiment with design, so most are fully sublimated with alternate logos, camo or color-block patterns. Pullover and button-front versions are available, and a small number on the back helps coaches during drills. Pro-style shops, travel organizations and brands use this jersey as a merchandise item too.",
      ],
      highlights: [
        "Breathable mesh with a relaxed fit",
        "Raglan sleeves for a free swing",
        "Pullover or button-front styles",
        "Full sublimation for alternate designs",
      ],
    },
    {
      slug: "baseball-cap",
      name: "Fitted Baseball Cap",
      detail: "Structured caps with 3D embroidered logos.",
      metaDescription:
        "Custom fitted baseball cap with a structured six-panel crown, sweatband and 3D puff embroidered logo. Fitted, flex-fit or snapback, team colors to match.",
      description: [
        "A team cap finishes the uniform and is a staple of any team store. Ours have a structured six-panel crown with buckram reinforcement at the front, a curved or flat visor and a moisture-wicking sweatband. The front logo is raised 3D puff embroidery, and side and back hits can be flat embroidered.",
        "Choose fitted sizes for a classic on-field look, a stretch-fit band or an adjustable snapback for retail sales. Crown, visor, button and eyelets can be different colors, and the undervisor can be green, gray or printed. Custom inside tape and labels are available for brands. We match cap colors to your jersey during sampling.",
      ],
      highlights: [
        "Six-panel structured crown with buckram front",
        "3D puff embroidered front logo",
        "Fitted, stretch-fit or snapback closures",
        "Custom taping and labels for brands",
      ],
    },
    {
      slug: "baseball-belt-socks",
      name: "Belts & Socks",
      detail: "Matching belts and stirrup or crew socks.",
      metaDescription:
        "Custom baseball belts & socks in team colors: elastic or leather belts with metal buckles, plus stirrup, crew and knee-high socks with knitted logos.",
      description: [
        "Belts and socks are small items, but they make a uniform look complete. Our baseball belts come in elastic webbing or bonded leather with a metal buckle and loop, cut to fit the loop spacing on our pants. Webbing belts can be dyed to any team color, and youth sizes are available for younger players.",
        "For socks, choose classic stirrups worn over a white sanitary sock, solid knee-highs for knicker cuts, or crew socks for full-length pants. All are knitted with a cushioned foot and a ribbed leg, and team stripes or a small logo can be knitted in. Socks and belts can be added to a uniform order in any color mix.",
      ],
      highlights: [
        "Elastic webbing or bonded leather belts",
        "Stirrup, knee-high and crew socks",
        "Cushioned foot with knitted-in stripes",
        "Dyed to match your jersey and pants",
      ],
    },
  ],
  "basketball-uniforms": [
    {
      slug: "sublimated-basketball-set",
      name: "Sublimated Basketball Set",
      detail: "Jersey and shorts printed edge to edge.",
      metaDescription:
        "Custom sublimated basketball set: jersey and shorts printed edge to edge on smooth interlock or mesh, with bound armholes and names. MOQ 25 sets.",
      description: [
        "Our sublimated basketball set pairs a sleeveless jersey with matching shorts, both printed edge to edge so side panels, waistbands and trim carry the design without a break. Because the ink becomes part of the fabric, fine pinstripes, gradients and photographic textures stay sharp under gym lights and never crack after washing.",
        "The jersey uses flat bound neck and armhole trim that lies smooth against the skin, and the shorts have a wide elastic waistband with an inner drawcord. Choose a smooth interlock for crisp graphics or a performance mesh for airflow. School teams, AAU programs and brands launching a basketball line order this set as their main uniform.",
      ],
      highlights: [
        "Jersey and shorts printed edge to edge",
        "Flat bound neck and armhole trim",
        "Wide elastic waist with inner drawcord",
        "Interlock or performance mesh options",
      ],
    },
    {
      slug: "reversible-basketball-set",
      name: "Reversible Basketball Set",
      detail: "Two-color uniform for home, away and practice.",
      metaDescription:
        "Custom reversible basketball set with two finished faces in contrasting colors, numbers on both sides and matching reversible shorts. Built for leagues.",
      description: [
        "A reversible set gives a team two uniforms for the price of slightly more than one. Two layers of fabric in contrasting colors are sewn so both faces are fully finished, with clean bound edges and no exposed seams. Numbers are printed on each face in a color that reads well, so the jersey works as home, away or practice wear.",
        "Matching reversible shorts follow the same construction, with a waistband that sits comfortably whichever side faces out. Recreational leagues, camps and schools like this set because it handles scrimmages without buying a second uniform. We use a lighter mesh on each layer so the double-layer garment stays comfortable during a full game.",
      ],
      highlights: [
        "Two fully finished faces",
        "Numbers printed on both sides",
        "Matching reversible shorts",
        "Lightweight mesh layers keep it breathable",
      ],
    },
    {
      slug: "tackle-twill-basketball-jersey",
      name: "Tackle Twill Jersey",
      detail: "Stitched numbers on breathable dazzle mesh.",
      metaDescription:
        "Custom basketball tackle twill jersey with stitched numbers and lettering on breathable dazzle mesh. Bound trim and side inserts, sold with matching shorts.",
      description: [
        "Stitched twill numbers give a basketball jersey a weighty, traditional look that many school programs still prefer. We cut each number and letter from polyester tackle twill and sew it down with a tight zigzag stitch, adding a second or third layer for outlines. The body is a breathable dazzle mesh with a subtle sheen under lights.",
        "Side inserts in a contrast color, piping at the neck and armholes, and a sewn team name across the chest are typical choices. The jersey pairs with dazzle shorts that carry a twill logo on the leg. Varsity programs, alumni teams and brands producing throwback-style jerseys order this build for its classic finish.",
      ],
      highlights: [
        "Hand-cut twill numbers and lettering",
        "Up to three twill layers for outlines",
        "Breathable dazzle mesh body",
        "Contrast side inserts and piping",
      ],
    },
    {
      slug: "womens-basketball-uniform",
      name: "Women’s Basketball Uniform",
      detail: "Tapered women’s cut with shorter inseam shorts.",
      metaDescription:
        "Custom women’s basketball uniform with a tapered jersey, narrower armholes and shorter-inseam shorts. Sublimated or twill, sized for school and club teams.",
      description: [
        "Women’s basketball jerseys need narrower shoulders, a tapered waist and armholes that sit closer to the body, otherwise sports bras show and fabric flaps during play. We build this uniform from a separate women’s pattern, not a scaled-down men’s jersey. The back is cut slightly longer so the jersey stays tucked during rebounds and drives.",
        "Shorts come with a shorter inseam and a contoured waistband that sits flat on the hips. Both pieces can be sublimated or decorated with twill numbers, and inseam lengths can be mixed within one order. High school girls’ programs, women’s club teams and college intramurals use this uniform, and it is a common addition to a brand’s women’s range.",
      ],
      highlights: [
        "Separate women’s pattern with tapered waist",
        "Narrower armholes and shoulders",
        "Longer back hem stays tucked",
        "Shorter-inseam shorts with contoured waist",
      ],
    },
    {
      slug: "youth-basketball-uniform",
      name: "Youth Basketball Uniform",
      detail: "Hard-wearing sets for leagues and camps.",
      metaDescription:
        "Custom youth basketball uniform sets for leagues and camps: hard-wearing jersey and shorts in youth sizes with reinforced seams and printed numbers.",
      description: [
        "Youth leagues need uniforms that survive a season of games, weekly washing and being handed down to next year’s players. This set uses a durable mesh with reinforced shoulder and side seams, plus a heavier waistband in the shorts that resists twisting. Sizes run from youth extra small, with graded lengths so shorts stay at the knee.",
        "Numbers can be screen-printed for a budget-friendly order or sublimated for a full design, and the league logo can be added on the chest or leg. Rec departments, camps and clinics often order several team colors at once. We sort and pack sets by team, making it simple to hand out uniforms on the first day.",
      ],
      highlights: [
        "Reinforced shoulder and side seams",
        "Heavier waistband that resists twisting",
        "Youth sizes with graded short lengths",
        "Packed and sorted by team",
      ],
    },
    {
      slug: "basketball-shorts",
      name: "Basketball Shorts",
      detail: "Long-cut shorts with side panels and pockets.",
      metaDescription:
        "Custom basketball shorts in a long cut with contrast side panels, optional pockets and a wide drawcord waistband. Sublimated or solid, 7 to 11 inch inseams.",
      description: [
        "Basketball shorts are cut long and loose, and the waistband does most of the work. Ours use a wide, flat elastic band with an inner drawcord so the shorts don’t roll or slip during a game. Contrast side panels make room for color, logos or stripes, and side seam pockets are available for practice and lifestyle versions.",
        "Inseams run from 7 to 11 inches, and you can mix lengths within one order to suit each player’s preference. The fabric can be dazzle, mesh or interlock to match your jersey. Shorts are sold with our jerseys or on their own, and many brands use them as a stand-alone retail product with a custom waistband print.",
      ],
      highlights: [
        "Wide flat waistband with inner drawcord",
        "Contrast side panels for logos",
        "Optional side seam pockets",
        "Inseams from 7 to 11 inches",
      ],
    },
    {
      slug: "shooting-shirt",
      name: "Shooting Shirt",
      detail: "Warm-up tee for pre-game shootarounds.",
      metaDescription:
        "Custom basketball shooting shirt in lightweight performance knit for pre-game warm-ups. Short or long sleeves, sublimated designs and player names or numbers.",
      description: [
        "Teams wear shooting shirts over their game jerseys during warm-ups, so they need to be light, loose enough to pull over a jersey and quick to take off before tip-off. We use a smooth performance knit that wicks sweat, with a slightly dropped shoulder for an easy shooting motion and a relaxed body.",
        "Shooting shirts are often used for team messages, alternate logos, awareness themes or sponsor recognition, so sublimation is the usual choice. Player names or numbers on the back help fans identify players during warm-ups. Short and long sleeves are available, and the same shirt sells well in school stores and team shops.",
      ],
      highlights: [
        "Relaxed fit to wear over a jersey",
        "Dropped shoulder for a free shooting motion",
        "Moisture-wicking smooth knit",
        "Short or long sleeves",
      ],
    },
    {
      slug: "warm-up-hoodie",
      name: "Warm-Up Hoodie",
      detail: "Lightweight hoodie for bench and travel.",
      metaDescription:
        "Custom basketball warm-up hoodie in lightweight performance fleece with a lined hood and kangaroo pocket. Embroidered or sublimated team branding.",
      description: [
        "This hoodie is lighter than a cotton sweatshirt, so players can warm up in it and stay comfortable on the bench without overheating. The fabric is a thin performance fleece with a smooth face and a soft brushed back. A lined hood, rib cuffs and a kangaroo pocket give it the familiar hoodie shape.",
        "The smooth face takes full sublimation, so the hoodie can match the uniform design exactly, or you can keep it solid with an embroidered logo on the chest and a number on the sleeve. Teams wear it for travel and pre-game, and it is a reliable seller in team stores and for brands building lifestyle lines.",
      ],
      highlights: [
        "Lightweight performance fleece",
        "Lined hood and kangaroo pocket",
        "Sublimated or embroidered branding",
        "Rib cuffs and hem keep shape",
      ],
    },
    {
      slug: "3x3-basketball-uniform",
      name: "3x3 Basketball Uniform",
      detail: "Fitted sets made for streetball tournaments.",
      metaDescription:
        "Custom 3x3 basketball uniform with a fitted jersey and shorter shorts for outdoor streetball tournaments. Quick-dry fabric and bold sublimated designs.",
      description: [
        "The 3x3 format is played outdoors on a half court, often in summer heat, with fast possessions and plenty of contact. This uniform is cut closer to the body than a traditional basketball set, with a fitted jersey that is harder to grab and shorts with a shorter, modern inseam. The quick-dry fabric handles sun and sweat.",
        "Bold sublimated graphics suit the streetball look, and numbers are printed small enough to fit the fitted cut. Tournament organizers, 3x3 leagues and streetwear brands order these sets, often with a matching cap or headband. Women’s and men’s cuts are made from separate patterns so each fits properly.",
      ],
      highlights: [
        "Fitted jersey that is harder to grab",
        "Shorter, modern short inseam",
        "Quick-dry fabric for outdoor courts",
        "Separate women’s and men’s patterns",
      ],
    },
    {
      slug: "basketball-compression-tights",
      name: "Compression Tights",
      detail: "Three-quarter tights in matching team colors.",
      metaDescription:
        "Custom basketball compression tights in three-quarter or full length with flatlock seams and a gusset. Dyed to match team colors under game shorts.",
      description: [
        "Many players wear compression tights under their shorts for muscle support and to keep knees warm. Ours are knitted from a polyester and spandex blend with firm compression and good recovery, so they don’t slide down during play. Flatlock seams prevent chafing, and a diamond gusset gives a full range of movement for defensive slides.",
        "Most teams choose three-quarter length to sit just below the knee, but full-length versions are available. We dye them to match your uniform colors or the shorts trim, and add a small logo at the hip or calf. A wide waistband sits flat under game shorts, and tagless labels keep them comfortable.",
      ],
      highlights: [
        "Firm compression with strong recovery",
        "Flatlock seams and diamond gusset",
        "Three-quarter or full length",
        "Dyed to match team colors",
      ],
    },
  ],
  "ice-hockey-jerseys": [
    {
      slug: "sublimated-hockey-jersey",
      name: "Sublimated Hockey Jersey",
      detail: "Full-color designs on durable air-knit.",
      metaDescription:
        "Custom sublimated hockey jersey on durable air-knit with full-color designs, reinforced elbows and optional fight strap. For clubs and leagues, MOQ 25.",
      description: [
        "Sublimation lets a hockey jersey carry striping, crests, gradients and sponsor marks in any number of colors, all dyed into the fabric so nothing lifts after hits along the boards. We print on a durable air-knit that breathes well under pads and recovers its shape after being stretched over shoulder caps and elbow guards.",
        "The pattern is cut roomy for gear, with gussets under the arms and a longer back. Elbows can be double-layered, and a fight strap can be sewn in for leagues that require one. Adult rec leagues, junior clubs and hockey brands order this jersey for its flexibility, and the same design can be sublimated onto matching socks.",
      ],
      highlights: [
        "Unlimited colors dyed into air-knit fabric",
        "Underarm gussets and longer back",
        "Optional double-layer elbows and fight strap",
        "Socks sublimated in the same design",
      ],
    },
    {
      slug: "twill-hockey-jersey",
      name: "Twill Hockey Jersey",
      detail: "Classic sewn crest, numbers and names.",
      metaDescription:
        "Custom twill hockey jersey with a sewn tackle twill crest, numbers and name bar, plus knitted or sewn striping. Classic pro look for clubs and leagues.",
      description: [
        "The twill hockey jersey follows the traditional build: a solid body with sewn striping at the arms and hem, a crest cut from tackle twill and stitched to the chest, and numbers on the back and sleeves. Multi-layer twill crests give depth and a premium feel that many teams prefer to a printed look.",
        "Striping can be knitted into the body fabric or sewn on as separate panels. Name bars are stitched across the shoulders, and captain letters can be added later in the season. We use a pro-weight knit body that takes the weight of sewn decoration without puckering. Alumni teams, junior programs and replica brands choose this build.",
      ],
      highlights: [
        "Multi-layer sewn tackle twill crest",
        "Knitted or sewn-on striping",
        "Stitched name bar and sleeve numbers",
        "Pro-weight body supports heavy decoration",
      ],
    },
    {
      slug: "pro-hockey-jersey",
      name: "Pro-Weight Game Jersey",
      detail: "Heavy mesh with fight strap and elbow patches.",
      metaDescription:
        "Custom pro-weight game jersey for ice hockey in heavy mesh with a fight strap, reinforced elbow patches and a lace-up or V-neck collar. Built for contact.",
      description: [
        "This is our heaviest hockey jersey, made for competitive teams that play a physical game. The body is a pro-weight knit with heavy mesh panels at the back and underarms, and the elbows carry a reinforcing patch where jerseys wear through on the boards. A fight strap with a snap closure is sewn into the back lining.",
        "Choose a lace-up collar with a contrast insert or a classic V-neck. Shoulders are double-stitched, and the hem has a wide cover-stitched band that resists fraying. The jersey can be fully sublimated or decorated with twill crests and numbers. Junior A, college club and senior teams order this build when standard jerseys don’t last.",
      ],
      highlights: [
        "Pro-weight knit with heavy mesh panels",
        "Reinforced elbow patches",
        "Sewn-in fight strap with snap",
        "Lace-up or V-neck collar",
      ],
    },
    {
      slug: "practice-hockey-jersey",
      name: "Practice Jersey",
      detail: "Reversible and single-color practice tops.",
      metaDescription:
        "Custom hockey practice jersey in single-color or reversible versions. Lightweight air-knit, roomy cut over gear and printed numbers for drills, MOQ 25.",
      description: [
        "Practice jerseys keep game sweaters fresh and help coaches split players into lines. We make single-color practice jerseys in a lighter air-knit than our game jerseys, plus reversible versions with contrasting colors on each side. Both are cut with the same roomy pattern that fits over shoulder pads and elbow guards.",
        "Numbers are printed or heat-applied on the back, and a small crest can be added to the chest. Clubs often order practice jerseys in four or five colors to represent forward lines, defense pairs and goalies. Reversible jerseys suit learn-to-play programs and camps, where one garment covers two teams in scrimmages.",
      ],
      highlights: [
        "Lighter air-knit for practice use",
        "Single-color or reversible options",
        "Roomy cut fits over full gear",
        "Several colors for lines and pairs",
      ],
    },
    {
      slug: "goalie-cut-jersey",
      name: "Goalie-Cut Jersey",
      detail: "Oversized cut to fit over goalie gear.",
      metaDescription:
        "Custom hockey goalie-cut jersey with a wider body, longer sleeves and larger neck opening to fit over chest protector and arm pads. Matches team design.",
      description: [
        "A goalie’s chest protector and arm pads are much bulkier than a skater’s gear, so a regular jersey in a bigger size usually fits badly. Our goalie-cut jersey uses its own pattern: a wider chest and body, longer and fuller sleeves, and a bigger neck opening that pulls over a mask-ready setup without stretching.",
        "It is made in exactly the same design and fabric as the team’s skater jerseys, so the goalie matches the rest of the roster. Elbows and forearms are reinforced, and the hem is long enough to cover the top of the pants. Goalie cuts can be added to any team order, even for one or two players.",
      ],
      highlights: [
        "Dedicated pattern for goalie equipment",
        "Wider chest and fuller sleeves",
        "Larger neck opening",
        "Matches skater jerseys in design and fabric",
      ],
    },
    {
      slug: "hockey-socks",
      name: "Hockey Socks",
      detail: "Knit or sublimated socks matched to jerseys.",
      metaDescription:
        "Custom hockey socks in classic knit stripes or full sublimation, matched to your jerseys. Open-foot design over shin guards with a stretch top band.",
      description: [
        "Hockey socks are worn over shin guards and held up with a garter belt or tape, so they need to stretch without losing shape. We make two kinds. Knit socks have stripes knitted directly into a heavy ribbed yarn, giving the traditional look. Sublimated socks use a stretch mesh printed to match the jersey stripe for stripe.",
        "Both are open at the foot to fit over skates and come in youth, junior and senior lengths. A wide stretch band at the top grips the leg, and the back panel of sublimated socks can be a lighter mesh for airflow. Socks are dyed and sampled alongside your jerseys so colors line up on the ice.",
      ],
      highlights: [
        "Knitted stripes or full sublimation",
        "Open foot fits over skates",
        "Youth, junior and senior lengths",
        "Color-matched with your jerseys",
      ],
    },
    {
      slug: "hockey-pant-shells",
      name: "Hockey Pant Shells",
      detail: "Nylon shells to refresh existing pants.",
      metaDescription:
        "Custom hockey pant shells in durable nylon that zip or lace over existing padded pants. Team colors, side stripes and logos for a uniform look on ice.",
      description: [
        "Pant shells are an affordable way to make a team look uniform without buying new padded pants for every player. The shell slips over existing hockey pants and closes with a zipper or laces down the side, so players keep the protection they already own. It is a practical choice for adult leagues and clubs with mixed equipment.",
        "We cut shells from a durable nylon with some stretch, in sizes that cover common pant brands. Side stripes can be sewn on or sublimated, and the team logo or numbers can go on the leg. Belt loops at the waist hold the shell in place. Dealers and clubs often reorder shells season after season.",
      ],
      highlights: [
        "Fits over existing padded pants",
        "Durable stretch nylon shell",
        "Zipper or lace-up side closure",
        "Sewn or sublimated side stripes",
      ],
    },
    {
      slug: "womens-hockey-jersey",
      name: "Women’s Hockey Jersey",
      detail: "Shaped women’s cut for a cleaner fit.",
      metaDescription:
        "Custom women’s hockey jersey with a shaped cut, narrower shoulders and adjusted sleeve length that still fits over pads. Sublimated or twill decoration.",
      description: [
        "Women’s hockey is played at every level, yet many teams still wear jerseys cut for men. Our women’s jersey uses its own pattern with narrower shoulders, an adjusted sleeve length and a shaped body that still has room for pads. The result is a jersey that doesn’t bunch at the wrists or hang too long over the pants.",
        "Construction matches our men’s jerseys: reinforced elbows, underarm gussets and an optional fight strap. Choose sublimated designs or sewn twill crests and numbers. Women’s club teams, university programs and rec leagues order this cut, and it can be produced in the same design as a club’s men’s team.",
      ],
      highlights: [
        "Separate women’s pattern with shaped body",
        "Narrower shoulders and shorter sleeves",
        "Reinforced elbows and underarm gussets",
        "Matches men’s team designs",
      ],
    },
    {
      slug: "youth-hockey-jersey",
      name: "Youth Hockey Jersey",
      detail: "Durable jerseys for minor hockey leagues.",
      metaDescription:
        "Custom youth hockey jersey for minor hockey leagues, cut over youth gear with reinforced seams and sublimated or printed numbers. Durable for every season.",
      description: [
        "Minor hockey jerseys are passed between players, thrown in hockey bags wet and washed often, so durability matters more than anything. Our youth jersey uses an air-knit that resists snags from skate blades and sticks, with double-stitched shoulders and side seams. The cut is graded for youth gear, so younger players aren’t lost in an adult small.",
        "Associations usually order home and away sets in one run, with numbers and the league crest sublimated or printed. Initiation and learn-to-skate programs often choose reversible versions. We pack jerseys by team with a roster list so association volunteers can distribute them quickly at the start of the season.",
      ],
      highlights: [
        "Snag-resistant air-knit fabric",
        "Double-stitched shoulders and side seams",
        "Cut graded for youth equipment",
        "Packed by team with a roster list",
      ],
    },
    {
      slug: "hockey-jacket",
      name: "Team Jacket",
      detail: "Insulated rink-side jacket with your crest.",
      metaDescription:
        "Custom insulated hockey team jacket with a water-resistant shell, quilted lining and embroidered crest. Warm rink-side and travel wear for players and staff.",
      description: [
        "Rinks are cold, and so are early-morning parking lots. This team jacket has a water-resistant woven shell with a quilted insulated lining, a full zipper with a storm flap and knit or elastic cuffs that keep drafts out. It is sized to wear over a hoodie, which is how most players and coaches use it at the rink.",
        "The team crest is embroidered on the chest, with the player’s name or number on the sleeve or back. Interior pockets hold phones and keys, and zippered hand pockets are fleece-lined. Clubs order jackets for players, coaches and parents, and hockey brands use the style for retail outerwear with custom labels.",
      ],
      highlights: [
        "Water-resistant shell with quilted insulation",
        "Full zipper with storm flap",
        "Embroidered crest and player name",
        "Fleece-lined hand pockets",
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
  "rugby-uniforms": [
    {
      slug: "sublimated-rugby-jersey",
      name: "Sublimated Rugby Jersey",
      detail: "Tight-fit jersey with grip-resistant fabric.",
      metaDescription:
        "Custom sublimated rugby jersey in a tight-fit, grip-resistant stretch knit with triple-stitched seams. Unlimited colors for clubs and schools, MOQ 25.",
      description: [
        "Modern rugby jerseys are cut tight so there is less fabric for an opponent to grab, and this one follows that approach. The body is a dense stretch knit with a smooth face that is hard to grip, and the shoulders and side seams are triple-stitched to handle tackles and mauls. Short sleeves sit close to the upper arm.",
        "Full sublimation means hoops, crests and sponsor logos are dyed into the fabric, with no extra cost for more colors and nothing to peel off in the scrum. Necklines are a low crew or a short V with a reinforced binding. Clubs, schools, touring sides and rugby brands order this jersey as their main match shirt.",
      ],
      highlights: [
        "Tight fit with a smooth, hard-to-grip face",
        "Triple-stitched shoulder and side seams",
        "Reinforced crew or short V neckline",
        "Sublimated hoops, crests and sponsors",
      ],
    },
    {
      slug: "classic-rugby-jersey",
      name: "Classic Collared Jersey",
      detail: "Heavy cotton-blend jersey with a rubber-button collar.",
      metaDescription:
        "Custom rugby classic collared jersey in heavy cotton-blend knit with a woven collar, rubber buttons and knitted or sewn hoops. Club and supporter wear.",
      description: [
        "Before stretch synthetics, rugby jerseys were heavy cotton knits with a white twill collar, and many clubs still want that look for heritage kits, veterans’ sides and supporter wear. We make it in a heavy cotton and polyester blend with a woven collar, a three-button placket with rubber buttons and reinforced twill tape across the shoulders.",
        "Hoops and stripes are knitted or sewn as panels rather than printed, which gives the classic texture. The crest is embroidered on the chest, and numbers can be stitched or printed on the back. The fit is regular, not tight, which makes it a common choice for club shops and lifestyle brands selling rugby-inspired shirts.",
      ],
      highlights: [
        "Heavy cotton and polyester blend",
        "Woven collar with rubber buttons",
        "Knitted or sewn hoops and stripes",
        "Embroidered crest on the chest",
      ],
    },
    {
      slug: "rugby-sevens-jersey",
      name: "Rugby Sevens Jersey",
      detail: "Lightweight stretch jersey for fast play.",
      metaDescription:
        "Custom rugby sevens jersey in lightweight stretch fabric with a body-hugging cut and quick-dry finish. Sublimated designs for tournaments and clubs.",
      description: [
        "Sevens is a faster, more open game than fifteens, often played over a full tournament day in warm weather. The jersey needs to be lighter, cooler and close to the body. Ours uses a lightweight stretch fabric with high recovery and a quick-dry finish, so it stays fitted even when wet with sweat late in the day.",
        "Seams are still reinforced where tackles pull hardest, but the overall build is lighter than a fifteens jersey. Sublimation suits the bold tournament designs that sevens teams favor. Clubs entering festival tournaments, school sevens squads and brands with a summer rugby range order this jersey, often with matching lightweight shorts.",
      ],
      highlights: [
        "Lightweight stretch with high recovery",
        "Quick-dry finish for tournament days",
        "Body-hugging cut for open play",
        "Reinforced seams at high-stress points",
      ],
    },
    {
      slug: "rugby-shorts",
      name: "Rugby Shorts",
      detail: "Reinforced twill shorts that survive the ruck.",
      metaDescription:
        "Custom rugby shorts in heavy-duty twill or stretch fabric with a reinforced seat, double-stitched seams and an elastic drawcord waist. Club colors, MOQ 25.",
      description: [
        "Rugby shorts are pulled in rucks and mauls and dragged across wet ground, so the fabric has to resist tearing. We make them from a heavy-duty polyester twill or a stretch fabric with a tight weave, with the seat reinforced and every seam double-stitched. The waist uses broad elastic and a strong drawcord that holds when grabbed.",
        "Players often tape their thighs or wear compression underneath, so the leg opening is cut short with a slight taper. Shorts come in club colors with a printed or embroidered crest on the leg, and player numbers can be added. Clubs commonly order a second pair per player because shorts are replaced more often than jerseys.",
      ],
      highlights: [
        "Heavy-duty twill or tight-weave stretch fabric",
        "Reinforced seat and double-stitched seams",
        "Strong elastic waist with drawcord",
        "Short, tapered leg opening",
      ],
    },
    {
      slug: "rugby-socks",
      name: "Rugby Socks",
      detail: "Hooped knit socks in your club colors.",
      metaDescription:
        "Custom rugby socks knitted with club hoops, a cushioned foot and a ribbed leg that holds up over shin pads. Knee-length fit in your club colors, MOQ 25.",
      description: [
        "Rugby socks are one of the clearest signs of a club’s colors on the pitch, with hoops running around the leg and a turned-over top. We knit ours from a durable polyester and nylon blend with a cushioned foot to protect against long days in boots, and a ribbed leg that stays up over the calf and shin pads.",
        "Hoops can be any width and any combination of your colors, and a small crest or club initials can be knitted into the turnover. Socks are sampled together with the jersey and shorts so color shades match. Clubs order them for senior, junior and mini sections, and supporters often buy them as part of a fan kit.",
      ],
      highlights: [
        "Knitted hoops in any club colors",
        "Cushioned foot for long days in boots",
        "Ribbed leg stays up over shin pads",
        "Crest or initials in the turnover",
      ],
    },
    {
      slug: "training-rugby-jersey",
      name: "Training Jersey",
      detail: "Durable practice jersey for contact sessions.",
      metaDescription:
        "Custom rugby training jersey for contact sessions, made from heavy-gauge knit with reinforced seams and a simple club design. Durable practice wear.",
      description: [
        "Contact training is harder on clothing than most matches, with repeated tackling drills, scrummaging practice and rucking on wet grass. This training jersey is built for that. It uses a heavy-gauge knit with reinforced shoulders, side seams and neck binding, and a slightly more relaxed fit than a match jersey so it pulls over pads or layers.",
        "Most clubs use a simplified version of their match design, often in a darker color that hides mud stains, with the crest and a sponsor logo. It can be sublimated or made in solid colors with a printed crest. Squads usually receive two each so one can be washed while the other is in use.",
      ],
      highlights: [
        "Heavy-gauge knit for contact drills",
        "Reinforced shoulders, sides and neck",
        "Relaxed fit for layering",
        "Simplified designs in darker colors",
      ],
    },
    {
      slug: "womens-rugby-jersey",
      name: "Women’s Rugby Jersey",
      detail: "Women’s cut with the same reinforced seams.",
      metaDescription:
        "Custom women’s rugby jersey on a dedicated women’s pattern, with the same triple-stitched seams and grip-resistant fabric as our men’s match jerseys.",
      description: [
        "Women’s rugby teams deserve a jersey cut for them, not a smaller men’s version. This jersey uses a dedicated women’s pattern with adjusted shoulder width, a shaped waist and a sleeve that sits properly on the upper arm. The fit is still tight, so there is little to grab in the tackle, but it doesn’t gape or bunch.",
        "Construction is identical to our men’s match jersey: grip-resistant stretch knit, triple-stitched seams and a reinforced neckline. It can be produced in the same design as the club’s men’s kit or in its own colorway. Women’s clubs, university teams and school girls’ squads order it, with matching women’s cut shorts.",
      ],
      highlights: [
        "Dedicated women’s pattern",
        "Shaped waist and adjusted shoulders",
        "Triple-stitched seams and reinforced neck",
        "Matching women’s cut shorts",
      ],
    },
    {
      slug: "rugby-league-jersey",
      name: "Rugby League Jersey",
      detail: "V-neck league jersey with taped seams.",
      metaDescription:
        "Custom rugby league jersey with a classic V-neck, taped seams and a fitted stretch body. Sublimated chevrons and sponsors for league clubs, MOQ 25.",
      description: [
        "Rugby league jerseys have their own look, most often a deep V-neck and the chevron designs that league fans recognize instantly. We make this jersey with a fitted body in a strong stretch knit, and tape the shoulder and side seams on the inside so they stay smooth against the skin and resist splitting in tackles.",
        "Chevrons, sponsor panels and numbers are sublimated, which keeps the jersey light and means designs can change each season without new tooling. The V-neck is bound with a reinforced trim that holds its shape. League clubs, junior league programs and brands selling replica and heritage jerseys order this style.",
      ],
      highlights: [
        "Classic V-neck with reinforced trim",
        "Internally taped shoulder and side seams",
        "Fitted body in strong stretch knit",
        "Sublimated chevrons and sponsor panels",
      ],
    },
    {
      slug: "rugby-training-vest",
      name: "Training Vest",
      detail: "Sleeveless mesh vest for conditioning.",
      metaDescription:
        "Custom rugby training vest in breathable sleeveless mesh for conditioning, gym and warm weather sessions. Club colors with sublimated or printed crest.",
      description: [
        "The training vest, or singlet, is what rugby players wear for conditioning runs, gym sessions and warm-weather training. Without sleeves and made from a breathable mesh, it keeps players cool while still showing club colors. The armholes are cut deep for full shoulder movement during weights and passing drills.",
        "Edges are bound to resist stretching, and the hem is cut slightly longer so the vest stays tucked during lifting. It can be fully sublimated or made in a solid color with a printed crest and sponsor. Clubs include it in pre-season training packs, and it is a practical club shop item alongside training shorts.",
      ],
      highlights: [
        "Sleeveless breathable mesh",
        "Deep armholes for full shoulder movement",
        "Bound edges resist stretching",
        "Longer hem stays tucked during lifts",
      ],
    },
    {
      slug: "rugby-hoodie",
      name: "Club Hoodie",
      detail: "Heavy fleece hoodie for players and supporters.",
      metaDescription:
        "Custom rugby club hoodie in heavy brushed fleece with a double-layer hood and embroidered crest. Warm wear for players, coaches and supporters.",
      description: [
        "A heavy hoodie is part of rugby club life, worn after training, on the sideline and around the clubhouse. We make this one in a thick brushed fleece with a double-layer hood, a kangaroo pocket and ribbed cuffs and hem that keep their shape. It is cut with a relaxed fit so it layers easily over training gear.",
        "The club crest is embroidered on the chest, and players can add initials or a squad number on the sleeve. Clubs often sell the same hoodie to supporters and families, so we can supply it in a full size range from juniors upward. Brands also order it with custom labels for rugby lifestyle lines.",
      ],
      highlights: [
        "Thick brushed fleece",
        "Double-layer hood and kangaroo pocket",
        "Embroidered crest and initials",
        "Junior to adult size range",
      ],
    },
  ],
  "team-warm-ups-tracksuits": [
    {
      slug: "full-zip-tracksuit",
      name: "Full-Zip Tracksuit",
      detail: "Jacket and pants set in polyester tricot.",
      metaDescription:
        "Custom full-zip tracksuit in polyester tricot: jacket with stand collar and zip pockets plus tapered pants. Embroidered team logos, MOQ 25 sets.",
      description: [
        "The full-zip tracksuit is the standard travel and warm-up set for teams in almost every sport. We make it in polyester tricot, a smooth knit with a slight sheen that resists pilling and keeps its shape through many washes. The jacket has a stand collar, a full-length zipper with a chin guard and zippered side pockets.",
        "Matching pants are tapered with an elastic and drawcord waist, zip pockets and ankle zips so they come off easily over shoes. Sleeves and legs can carry contrast panels or piping in your colors. Clubs and schools add an embroidered crest on the chest and initials on the sleeve, and brands use this set as a core retail item.",
      ],
      highlights: [
        "Pill-resistant polyester tricot",
        "Stand collar with chin guard",
        "Zip pockets on jacket and pants",
        "Ankle zips for easy removal",
      ],
    },
    {
      slug: "sublimated-tracksuit",
      name: "Sublimated Tracksuit",
      detail: "Full-color tracksuit printed with your design.",
      metaDescription:
        "Custom sublimated tracksuit printed with your full design on smooth polyester knit. Jacket and pants matched to your uniform, any colors or patterns.",
      description: [
        "Sublimated tracksuits let the warm-up gear carry the same graphics as the match kit. The jacket and pants are printed edge to edge on a smooth polyester knit before cutting, so stripes, patterns, gradients and sponsor logos continue across seams, sleeves and pockets with no limit on colors.",
        "This makes it easy to match an existing uniform exactly, or to create a bold team look that tricot panels can’t achieve. The jacket can be full-zip or half-zip, with or without a hood, and the pants are tapered with zip pockets. Clubs, academies and representative teams use sublimated tracksuits for travel, presentations and media days.",
      ],
      highlights: [
        "Printed edge to edge before cutting",
        "No limit on colors or patterns",
        "Full-zip or half-zip jacket options",
        "Tapered pants with zip pockets",
      ],
    },
    {
      slug: "quarter-zip-top",
      name: "Quarter-Zip Top",
      detail: "Slim training top with thumb holes.",
      metaDescription:
        "Custom quarter-zip top in slim-fit stretch knit with thumbholes, a stand collar and a zip chest pocket. Training and travel wear with your team logo.",
      description: [
        "The quarter-zip is the most versatile layer in a team wardrobe, worn for training, warm-ups and as a smart top for travel. Ours is cut slim from a soft stretch knit with a brushed inside, so it is warm without being bulky. A stand collar zips up to cover the neck, and the cuffs have thumbholes.",
        "A small zip pocket on the chest or sleeve holds a key or card. Logos can be embroidered, heat-applied or sublimated, and side panels can be colored to match the team kit. Coaches favor it because it looks tidy on the sideline, and brands find it an easy item to sell to individual athletes.",
      ],
      highlights: [
        "Slim fit in brushed stretch knit",
        "Stand collar and thumbholes",
        "Zip chest or sleeve pocket",
        "Color-blocked side panels",
      ],
    },
    {
      slug: "team-hoodie",
      name: "Team Hoodie",
      detail: "Fleece hoodie with embroidered or printed logo.",
      metaDescription:
        "Custom team hoodie in cotton-blend or polyester fleece with a lined hood, kangaroo pocket and embroidered or printed logo. For clubs, schools and brands.",
      description: [
        "Every team needs a hoodie, and the right fabric depends on how it will be used. We offer a cotton-rich fleece for a soft, classic hand feel and a polyester fleece that dries faster and accepts full sublimation. Both have a lined hood with a flat drawcord, a kangaroo pocket and rib cuffs and hem.",
        "Logos can be embroidered, screen-printed or sublimated, and names or numbers can go on the back or sleeve. Pullover and full-zip versions are available. Schools use the hoodie for spirit wear, clubs give it to players and staff, and brands order it with custom neck labels and hang tags for retail.",
      ],
      highlights: [
        "Cotton-rich or polyester fleece",
        "Lined hood with flat drawcord",
        "Pullover or full-zip styles",
        "Embroidered, printed or sublimated logos",
      ],
    },
    {
      slug: "sideline-rain-jacket",
      name: "Sideline Rain Jacket",
      detail: "Waterproof shell with taped seams.",
      metaDescription:
        "Custom sideline rain jacket with a waterproof coated shell, taped seams and a stowable hood. Embroidered or printed team logos for coaches and players.",
      description: [
        "A rain jacket is only as good as its seams, so ours are taped on the inside to stop water seeping through the stitch holes. The shell is a woven polyester with a waterproof coating and a water-repellent face, lined with light mesh so it doesn’t feel clammy. A stowable hood packs into the collar.",
        "The front zipper has a storm flap, the cuffs adjust with hook-and-loop tabs, and the hem has a drawcord to block wind. Logos are embroidered on the chest or heat-applied to keep the waterproof layer intact. Coaches and staff of outdoor sports wear it all season, and it fits over a hoodie or tracksuit top.",
      ],
      highlights: [
        "Taped seams and waterproof coating",
        "Light mesh lining",
        "Stowable hood and storm-flap zipper",
        "Adjustable cuffs and drawcord hem",
      ],
    },
    {
      slug: "padded-bench-jacket",
      name: "Padded Bench Jacket",
      detail: "Long insulated coat for cold-weather sidelines.",
      metaDescription:
        "Custom padded bench jacket: a long insulated coat with a water-resistant shell, hood and two-way zipper for cold sidelines. Embroidered club branding.",
      description: [
        "The padded bench jacket, sometimes called a stadium coat, is the long insulated coat substitutes and coaches wear on cold match days. It reaches below the knee, with a water-resistant shell, a thick synthetic fill and a quilted lining. A two-way zipper lets the wearer sit down comfortably, and the hood is lined with fleece.",
        "Fleece-lined hand pockets and an inside pocket keep hands and phones warm. Club crests and sponsor logos are embroidered or applied as patches. Football, soccer and rugby clubs in colder climates order these for squads and staff, and parents often buy them for the long hours spent watching from the sideline.",
      ],
      highlights: [
        "Below-the-knee length with synthetic fill",
        "Two-way zipper for sitting",
        "Fleece-lined hood and pockets",
        "Embroidered crest or sponsor patches",
      ],
    },
    {
      slug: "warm-up-pants",
      name: "Warm-Up Pants",
      detail: "Tapered pants with zip ankles.",
      metaDescription:
        "Custom warm-up pants in tapered tricot or stretch knit with zip ankles, zip pockets and an elastic drawcord waist. Match your team jackets and hoodies.",
      description: [
        "Warm-up pants need to come off quickly before a game without removing shoes, which is why ours have zips at the ankle. The leg is tapered for a modern look, and the fabric can be tricot to match a tracksuit jacket or a stretch knit for a more athletic fit during dynamic warm-ups.",
        "The waist uses elastic with an inner drawcord, and side pockets close with zippers so phones and keys stay put. A small logo on the thigh and contrast piping down the side are common touches. These pants can be ordered on their own to pair with hoodies or quarter-zips, or as part of a full tracksuit.",
      ],
      highlights: [
        "Tapered leg with ankle zips",
        "Tricot or stretch knit options",
        "Zippered side pockets",
        "Optional side piping and thigh logo",
      ],
    },
    {
      slug: "windbreaker",
      name: "Windbreaker",
      detail: "Lightweight packable jacket for travel.",
      metaDescription:
        "Custom windbreaker in lightweight packable nylon or polyester with a hood, half or full zip and team logos. Easy travel layer for teams and staff.",
      description: [
        "A windbreaker is the lightest jacket a team can carry. Ours is made from a thin, tightly woven nylon or polyester that blocks wind and sheds light showers, and it folds into its own pocket for travel. Choose a half-zip pullover or a full-zip jacket, both with a hood and elastic cuffs.",
        "Because the fabric is so light, logos are usually screen-printed or heat-applied, though small embroidery works well too. Color-block panels give a retro look that many brands like. Teams wear windbreakers for travel days, outdoor warm-ups and team photos, and the packable design makes it an easy item for staff to keep in a bag.",
      ],
      highlights: [
        "Tightly woven wind-resistant fabric",
        "Packs into its own pocket",
        "Half-zip or full-zip with hood",
        "Color-block panel options",
      ],
    },
    {
      slug: "polo-shirt",
      name: "Team Polo Shirt",
      detail: "Coach and staff polos in performance piqué.",
      metaDescription:
        "Custom team polo shirt in moisture-wicking performance piqué with a knit collar and embroidered logo. Coach, staff and travel wear in your team colors.",
      description: [
        "Coaches, managers and staff need something smarter than a training top for match days, meetings and travel. Our team polo is made from a performance piqué, a textured knit that looks like a classic polo but wicks sweat and dries fast. The knit collar holds its shape, and the placket has three buttons on a reinforced band.",
        "The club crest is usually embroidered on the chest, with a sponsor or title on the sleeve. Contrast tipping on the collar and cuffs adds team color. We make men’s and women’s cuts, and the polo can be fully sublimated if the club wants a pattern. Schools, clubs and corporate teams order polos alongside uniforms.",
      ],
      highlights: [
        "Moisture-wicking performance piqué",
        "Knit collar with contrast tipping",
        "Three-button reinforced placket",
        "Men’s and women’s cuts",
      ],
    },
    {
      slug: "training-shorts",
      name: "Training Shorts",
      detail: "Quick-dry shorts with zip pockets.",
      metaDescription:
        "Custom training shorts in quick-dry woven or knit fabric with zip pockets, an elastic drawcord waist and team logo. Gym, practice and travel wear.",
      description: [
        "Training shorts are worn for gym sessions, practice and travel, so they need to be comfortable all day. We make them in a quick-dry woven fabric with mechanical stretch or a lightweight knit, both with an elastic drawcord waist and side zip pockets that keep phones from falling out during a run.",
        "An optional inner liner adds support, and a rear pocket is available on longer styles. Logos are printed or heat-applied on the leg, and side panels can be colored to match the team kit. Inseams range from short running lengths to longer gym styles. Teams pair them with training tees and quarter-zips for a full practice set.",
      ],
      highlights: [
        "Quick-dry woven or knit fabric",
        "Zippered side pockets",
        "Optional inner liner",
        "Short to long inseam options",
      ],
    },
  ],
};
