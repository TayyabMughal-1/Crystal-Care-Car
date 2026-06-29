export const serviceCategories = [
  {
    title: 'Car Wash Essentials',
    key: 'wash',
    services: [
      'exterior-car-wash',
      'interior-cleaning-vacuuming',
      'full-car-wash',
      'tire-rim-cleaning'
    ]
  },
  {
    title: 'Premium Detailing Services',
    key: 'detail',
    services: [
      'interior-deep-cleaning',
      'seat-shampooing',
      'leather-seat-cleaning-conditioning',
      'dashboard-interior-detailing',
      'complete-car-detailing'
    ]
  },
  {
    title: 'Paint Protection Services',
    key: 'paint',
    services: [
      'spray-ceramic-protection',
      'paint-sealant-application',
      'wax-polish',
      'paint-enhancement-polish'
    ]
  },
  {
    title: 'Restoration Services',
    key: 'restore',
    services: ['headlight-restoration']
  },
  {
    title: 'Subscription Packages',
    key: 'packages',
    services: [
      'weekly-car-wash-package',
      'monthly-car-wash-package',
      'family-multiple-vehicle-package'
    ]
  },
  {
    title: 'Corporate Services',
    key: 'corporate',
    services: ['fleet-washing', 'corporate-office-car-wash-contracts']
  },
  {
    title: 'Priority Services for Advertising',
    key: 'priority',
    services: [
      'doorstep-car-wash',
      'mobile-car-wash',
      'full-interior-exterior-car-cleaning',
      'car-detailing'
    ]
  }
]

export const services = [
  {
    slug: 'exterior-car-wash',
    title: 'Exterior Car Wash',
    category: 'Car Wash Essentials',
    short: 'A clean, glossy exterior wash for daily driven cars in Islamabad and Rawalpindi.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Our exterior car wash service removes road dust, mud, bird marks, and daily grime while protecting your paint finish. It is made for busy drivers who want their vehicle to look fresh without wasting time at a crowded wash bay.',
    benefits: ['High pressure pre rinse', 'Safe shampoo wash', 'Wheel arch rinse', 'Microfibre drying', 'Gloss finish check'],
    process: ['Vehicle inspection', 'Foam and shampoo wash', 'Rinse and hand dry', 'Final glass and trim check']
  },
  {
    slug: 'interior-cleaning-vacuuming',
    title: 'Interior Cleaning & Vacuuming',
    category: 'Car Wash Essentials',
    short: 'Fast interior cleaning for seats, mats, carpets, cup holders, and daily dust.',
    image: 'https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'This service is ideal for cars that need a clean and comfortable cabin. We vacuum the main interior areas, wipe common touch points, and refresh the cabin so it feels tidy again.',
    benefits: ['Seat and carpet vacuuming', 'Floor mat cleaning', 'Dashboard wipe down', 'Door pocket cleaning', 'Cabin dust removal'],
    process: ['Remove loose items', 'Vacuum seats and carpets', 'Clean mats and panels', 'Final cabin check']
  },
  {
    slug: 'full-car-wash',
    title: 'Full Car Wash',
    category: 'Car Wash Essentials',
    short: 'A complete interior and exterior wash for a cleaner car inside and outside.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Full Car Wash combines exterior washing with interior vacuuming and basic cabin cleaning. It is the best choice for weekly upkeep and before meetings, family travel, or weekend plans.',
    benefits: ['Exterior foam wash', 'Interior vacuuming', 'Glass cleaning', 'Tire rinse', 'Quick cabin refresh'],
    process: ['Exterior pre wash', 'Interior vacuuming', 'Glass and trim cleaning', 'Quality check before handover']
  },
  {
    slug: 'tire-rim-cleaning',
    title: 'Tire & Rim Cleaning',
    category: 'Car Wash Essentials',
    short: 'Detailed wheel cleaning to remove brake dust, road dirt, and dull tire marks.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Your wheels collect some of the toughest dirt on the road. Our tire and rim cleaning service focuses on brake dust, wheel face dirt, tire walls, and rim edges for a sharper look.',
    benefits: ['Brake dust removal', 'Rim face cleaning', 'Tire wall wash', 'Wheel arch rinse', 'Optional tire shine'],
    process: ['Rinse wheels', 'Apply safe wheel cleaner', 'Brush detailed areas', 'Rinse and dry finish']
  },
  {
    slug: 'interior-deep-cleaning',
    title: 'Interior Deep Cleaning',
    category: 'Premium Detailing Services',
    short: 'Deep cabin cleaning for stains, odour, hidden dirt, and neglected interiors.',
    image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Interior Deep Cleaning is designed for cars that need more than a basic vacuum. We clean the hard to reach areas, fabric surfaces, carpets, panels, and touch points to restore a fresh cabin feel.',
    benefits: ['Deep vacuuming', 'Steam style cleaning approach', 'Panel and vent detail', 'Carpet refresh', 'Odour reduction'],
    process: ['Inspect cabin condition', 'Vacuum and dust removal', 'Deep clean panels and carpets', 'Final interior dressing']
  },
  {
    slug: 'seat-shampooing',
    title: 'Seat Shampooing',
    category: 'Premium Detailing Services',
    short: 'Fabric seat shampooing for stains, spills, sweat marks, and trapped dirt.',
    image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ff?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Seat Shampooing helps clean fabric seats that have collected dust, stains, drink marks, or daily use odour. We use a careful cleaning process so the seats look fresher and feel cleaner.',
    benefits: ['Fabric seat cleaning', 'Spot treatment', 'Dirt extraction approach', 'Odour reduction', 'Neat fabric finish'],
    process: ['Fabric inspection', 'Vacuum seats', 'Apply shampoo treatment', 'Extract dirt and allow drying']
  },
  {
    slug: 'leather-seat-cleaning-conditioning',
    title: 'Leather Seat Cleaning & Conditioning',
    category: 'Premium Detailing Services',
    short: 'Leather seat cleaning and conditioning for a softer, richer cabin finish.',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Leather needs careful handling. This service cleans body oils, surface dirt, and dull marks, then conditions the leather so it feels smoother and looks refined.',
    benefits: ['Leather safe cleaning', 'Surface dirt removal', 'Conditioning treatment', 'Soft matte finish', 'Premium cabin feel'],
    process: ['Check leather condition', 'Clean seat panels', 'Apply conditioner', 'Buff and finish']
  },
  {
    slug: 'dashboard-interior-detailing',
    title: 'Dashboard & Interior Detailing',
    category: 'Premium Detailing Services',
    short: 'Detailing for dashboard, vents, console, doors, trims, and touch areas.',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Dashboard and Interior Detailing focuses on the areas people notice first when they sit in the car. We clean and dress panels, vents, steering area, console, switches, and trims.',
    benefits: ['Dashboard cleaning', 'AC vent detailing', 'Console cleaning', 'Door panel wipe down', 'Clean touch points'],
    process: ['Dust removal', 'Detail small gaps', 'Clean plastic and trim', 'Dress and inspect finish']
  },
  {
    slug: 'complete-car-detailing',
    title: 'Complete Car Detailing',
    category: 'Premium Detailing Services',
    short: 'Full interior and exterior detailing for a premium vehicle refresh.',
    image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Complete Car Detailing is the full service choice for clients who want a serious transformation. We combine deep cleaning, exterior care, interior detailing, glass cleaning, wheels, and finishing touches.',
    benefits: ['Full exterior detail', 'Full interior detail', 'Wheel and tire care', 'Glass polish effect', 'Premium handover finish'],
    process: ['Full car inspection', 'Exterior and wheels clean', 'Interior deep detail', 'Final quality inspection']
  },
  {
    slug: 'spray-ceramic-protection',
    title: 'Spray Ceramic Protection',
    category: 'Paint Protection Services',
    short: 'A slick protective layer that improves shine and makes future washing easier.',
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Spray Ceramic Protection adds a glossy, water repellent layer to your paintwork. It helps the car stay cleaner for longer and gives the exterior a crisp shine after washing.',
    benefits: ['Gloss boost', 'Water beading effect', 'Easier future washing', 'Paint slickness', 'Quick protection upgrade'],
    process: ['Wash and dry car', 'Prepare paint surface', 'Apply spray ceramic', 'Buff and inspect finish']
  },
  {
    slug: 'paint-sealant-application',
    title: 'Paint Sealant Application',
    category: 'Paint Protection Services',
    short: 'Paint sealant protection for shine, weather resistance, and cleaner paintwork.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Paint Sealant Application gives your vehicle an added layer of protection against daily road film, weather marks, and dullness. It is a strong choice for clients who want shine and protection together.',
    benefits: ['Paint surface protection', 'Longer lasting shine', 'Weather resistance', 'Smooth finish', 'Improved gloss depth'],
    process: ['Exterior wash', 'Surface preparation', 'Sealant application', 'Cure and final buff']
  },
  {
    slug: 'wax-polish',
    title: 'Wax Polish',
    category: 'Paint Protection Services',
    short: 'Classic wax polish service for gloss, smoothness, and a fresh clean look.',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Wax Polish enhances paint shine and creates a smoother surface finish. It is perfect before events, sale photos, weekend drives, or when your car needs a polished appearance.',
    benefits: ['Gloss enhancement', 'Smooth paint touch', 'Light protection', 'Fresh exterior finish', 'Premium hand polish look'],
    process: ['Wash and dry exterior', 'Apply wax polish', 'Buff paint panels', 'Final gloss check']
  },
  {
    slug: 'paint-enhancement-polish',
    title: 'Paint Enhancement Polish',
    category: 'Paint Protection Services',
    short: 'Paint enhancement for dull paint, light swirl marks, and deeper gloss.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Paint Enhancement Polish improves clarity and shine on tired paintwork. It is a smart upgrade when your vehicle looks dull and needs a better finish without a full correction job.',
    benefits: ['Dull paint improvement', 'Light swirl reduction', 'Gloss clarity', 'Smoother panels', 'Better reflection finish'],
    process: ['Inspect paint condition', 'Wash and prepare panels', 'Machine or hand polish', 'Final wipe and inspect']
  },
  {
    slug: 'headlight-restoration',
    title: 'Headlight Restoration',
    category: 'Restoration Services',
    short: 'Restores cloudy headlights for a cleaner front look and better light clarity.',
    image: 'https://images.unsplash.com/photo-1617814076668-cc1e9f5fc955?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Cloudy headlights make a clean car look old. Our Headlight Restoration service improves the lens appearance by reducing haze and dullness so the front end looks sharper.',
    benefits: ['Cloudy lens improvement', 'Yellow haze reduction', 'Cleaner front appearance', 'Better lens clarity', 'Restored premium look'],
    process: ['Inspect lens condition', 'Clean and mask area', 'Restore lens surface', 'Final polish and protection']
  },
  {
    slug: 'weekly-car-wash-package',
    title: 'Weekly Car Wash Package',
    category: 'Subscription Packages',
    short: 'A weekly wash plan for clients who want their car clean all month.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'The Weekly Car Wash Package is ideal for daily drivers, office commuters, and families who want regular car care without booking again and again.',
    benefits: ['Scheduled weekly service', 'Cleaner car all month', 'Priority booking', 'Consistent care', 'Flexible timing options'],
    process: ['Select weekly slot', 'Confirm service type', 'Wash each week', 'Monthly plan review']
  },
  {
    slug: 'monthly-car-wash-package',
    title: 'Monthly Car Wash Package',
    category: 'Subscription Packages',
    short: 'Monthly car wash planning for simple, consistent, and cost friendly upkeep.',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Our Monthly Car Wash Package helps you keep your car presentable through the month with a simple plan. It works well for office staff, shop owners, and residential clients.',
    benefits: ['Monthly plan option', 'Regular cleaning cycle', 'Easy scheduling', 'Better value', 'Priority reminders'],
    process: ['Choose monthly plan', 'Set preferred schedule', 'Complete regular washes', 'Adjust plan when needed']
  },
  {
    slug: 'family-multiple-vehicle-package',
    title: 'Family / Multiple Vehicle Package',
    category: 'Subscription Packages',
    short: 'A package for homes with more than one car and family vehicle needs.',
    image: 'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'This package is made for families and households with multiple vehicles. We plan the cleaning together so every car receives regular care with easier scheduling.',
    benefits: ['Multiple vehicle planning', 'Home friendly scheduling', 'Better package value', 'Consistent cleaning quality', 'Flexible service mix'],
    process: ['Count vehicles', 'Choose services for each car', 'Set shared schedule', 'Complete service visits']
  },
  {
    slug: 'fleet-washing',
    title: 'Fleet Washing',
    category: 'Corporate Services',
    short: 'Fleet washing for company cars, vans, staff vehicles, and brand vehicles.',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Fleet Washing helps companies keep their vehicles clean and presentable. We can plan repeat visits for business cars, service vehicles, delivery fleets, and staff parking areas.',
    benefits: ['Fleet cleaning schedule', 'On site service option', 'Consistent brand image', 'Multiple vehicle handling', 'Corporate billing option'],
    process: ['Review fleet size', 'Create service plan', 'Clean vehicles on schedule', 'Provide service summary']
  },
  {
    slug: 'corporate-office-car-wash-contracts',
    title: 'Corporate Office Car Wash Contracts',
    category: 'Corporate Services',
    short: 'Office car wash contracts for staff, managers, executives, and visitors.',
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Corporate Office Car Wash Contracts make car care convenient for offices. We can provide scheduled car wash visits at office locations in Islamabad and Rawalpindi.',
    benefits: ['Office location service', 'Staff convenience', 'Executive car care', 'Repeat contract options', 'Professional service setup'],
    process: ['Discuss office location', 'Agree service slots', 'Wash vehicles on site', 'Share service record']
  },
  {
    slug: 'doorstep-car-wash',
    title: 'Doorstep Car Wash',
    category: 'Priority Services for Advertising',
    short: 'Car wash at your home or office without visiting a wash station.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Doorstep Car Wash is made for clients who want convenience. Book the service and we come to your home or office location for professional car cleaning.',
    benefits: ['Home or office visit', 'Time saving service', 'No queue waiting', 'Convenient booking', 'Professional hand wash'],
    process: ['Share location', 'Confirm car and service', 'Team arrives on slot', 'Wash and final check']
  },
  {
    slug: 'mobile-car-wash',
    title: 'Mobile Car Wash',
    category: 'Priority Services for Advertising',
    short: 'Mobile car wash service for busy clients across Islamabad and Rawalpindi.',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Our Mobile Car Wash service brings car cleaning to your preferred location. It is ideal for professionals, offices, homes, and clients who need a reliable service on schedule.',
    benefits: ['Mobile service team', 'Flexible location', 'Quick booking', 'Professional cleaning', 'Ideal for regular clients'],
    process: ['Book mobile slot', 'Confirm vehicle condition', 'Clean at location', 'Final walkaround']
  },
  {
    slug: 'full-interior-exterior-car-cleaning',
    title: 'Full Interior & Exterior Car Cleaning',
    category: 'Priority Services for Advertising',
    short: 'Complete cleaning package for a clean cabin and polished exterior look.',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'This service gives your car a complete cleaning experience inside and outside. It is a strong option before travel, meetings, events, or when the car needs a proper reset.',
    benefits: ['Interior cleaning', 'Exterior wash', 'Glass cleaning', 'Tire and rim care', 'Neat handover finish'],
    process: ['Inspect full car', 'Clean exterior', 'Clean interior', 'Final presentation check']
  },
  {
    slug: 'car-detailing',
    title: 'Car Detailing',
    category: 'Priority Services for Advertising',
    short: 'Professional car detailing for clients who care about finish, comfort, and image.',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80',
    price: 'Custom Quote',
    intro: 'Car Detailing is a premium service for clients who want more than a regular wash. We focus on presentation, paint appearance, interior feel, wheels, glass, and small details.',
    benefits: ['Premium clean finish', 'Interior and exterior focus', 'Detailing level care', 'Improved vehicle appearance', 'Great for personal and business cars'],
    process: ['Consult and inspect', 'Detail cleaning stage', 'Finish and protect', 'Final quality handover']
  }
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}

export function getServicesByCategory(category) {
  return services.filter((service) => service.category === category)
}

export const areas = ['Islamabad', 'Rawalpindi', 'DHA', 'Bahria Town', 'Blue Area', 'Gulberg Greens', 'Saddar', 'Satellite Town']
