(function () {
  'use strict';

  var active = (function () {
    try { return localStorage.getItem('fishfull-language') || localStorage.getItem('scm-language') || 'zh'; }
    catch (error) { return 'zh'; }
  })();
  active = active === 'en' ? 'en' : 'zh';

  var translating = false;
  var decorateTimer = 0;
  var observer = null;

  var english = {
    fish: {
      title: 'FishFull | Featured Fish | Fourfinger Threadfin',
      description: 'Meet FishFull’s featured seafood pick: fourfinger threadfin (午仔魚), with flavor notes, freshness cues, serving-size questions, and easy cooking ideas for shoppers and fishmongers.',
      hero: {
        eyebrow: 'TODAY’S SEAFOOD PICK',
        headline: 'Start with one easy win: fourfinger threadfin',
        lead: 'No need to stare at the seafood case and guess. Start with one approachable fish, learn what it tastes like, what to ask the fishmonger, and how to cook it tonight—then find a nearby seafood spot when you are ready.',
        badges: ['Tender, clean flavor', 'Steam or pan-fry', 'Weeknight friendly', 'Easy to explain at the counter']
      },
      spotlight: {
        status: 'TODAY’S PICK',
        fish: 'Fourfinger threadfin (午仔魚)',
        tagline: 'Tender flesh, a gentle richness, and flexible cooking options make this a friendly first pick for people who do not buy whole fish often.',
        notes: [
          'A practical choice for 2–4 people: steam it, pan-fry it, or use it in soup.',
          'At the counter, ask: “Would you steam this batch or pan-fry it today?” That gives the fishmonger an easy place to start.',
          'Look for clear origin information, good chilling, an intact body, and no strong off-odors.'
        ],
        facts: [
          ['Flavor', 'Tender, mildly sweet, pleasantly rich'],
          ['Cooking level', 'Beginner friendly'],
          ['Ask at the counter', 'Is this enough for two? How long should I steam it?'],
          ['Next step', 'Buy Nearby + Easy Fish Recipes']
        ]
      },
      sections: [
        {
          eyebrow: '30 SECONDS BEFORE YOU BUY',
          title: 'Check three things and shop with less guesswork',
          body: 'Shoppers do not need a seafood textbook, and fishmongers do not need a long speech. Keep it visual, practical, and easy to ask about.',
          cards: [
            ['Freshness', 'Check the chill and the body', 'Look for an intact, resilient fish kept properly chilled, without a harsh smell. If you are unsure, simply ask which batch is freshest today.'],
            ['Portion', 'Ask how much you need', 'For two people, ask whether one fish is enough. For a family meal, ask whether it should be portioned. A clear serving size makes the price easier to understand.'],
            ['Cooking', 'Pick the cooking style first', 'Steam for clean flavor, pan-fry for aroma, or make soup for an easy comfort meal. Knowing the plan makes the purchase feel simpler.']
          ]
        },
        {
          eyebrow: 'FISHMONGER SHORT VERSION',
          title: 'Easy to explain, easy to understand',
          body: 'A featured fish is not about a hard sell. It is about making one good choice easier.',
          steps: [
            ['Start', 'Try the fourfinger threadfin today', '“This batch is tender and a good size for two.”'],
            ['Flavor', 'Describe the dinner, not the jargon', '“It is sweet when steamed and smells great pan-fried, so you do not need heavy seasoning.”'],
            ['Cooking', 'Give one low-stress option', '“Steam it with ginger and scallion once the water is boiling, and dinner is almost done.”'],
            ['Feedback', 'Ask one real question', '“What made this fish feel easier to buy today?”']
          ]
        },
        {
          eyebrow: 'KEEP GOING',
          title: 'Pair the fish with a place to buy it and a recipe',
          body: 'Do not stop at knowing the fish. Find a nearby seafood spot, choose a cooking plan, and share one quick note after the meal.',
          links: [
            ['Buy Seafood Nearby', 'Find markets, restaurants, fish markets, and fishing harbors.'],
            ['Easy Fish Recipes', 'Try steaming, pan-frying, or soup.'],
            ['Quick Feedback', 'Bought it or skipped it? Share what helped.'],
            ['Field Notes', 'See the kinds of questions shoppers can ask at the counter.']
          ]
        }
      ]
    },

    map: {
      title: 'FishFull | Buy Seafood Nearby in Taiwan',
      description: 'Find seafood markets, fish markets, restaurants, and fishing harbors on FishFull’s Taiwan map, with real addresses, navigation links, and practical seafood-shopping tips.',
      hero: {
        eyebrow: 'SEAFOOD SPOTS',
        headline: 'Find a good seafood stop near you',
        lead: 'Use the map to move from “that fish looks good” to an actual place to buy or eat it. Open a real address, bring an easy recipe, and ask the seafood seller a couple of practical questions when you arrive.',
        badges: ['Real addresses', 'Easy mobile directions', 'Pairs with Featured Fish', 'Share feedback after your visit']
      },
      mapHeading: ['REAL PLACES TO BUY SEAFOOD', 'Pick a place, then bring a recipe with you', 'Tap a place card to center the map. Tap its address to open directions in a new tab.'],
      filters: ['All', 'Market', 'Restaurant', 'Fishing harbor', 'Fish market'],
      mapNote: 'Map data © OpenStreetMap contributors. Use the address link to open directions and head to the seafood spot.',
      locations: [
        ['Banqiao Huangshi Market', 'Market · Banqiao, New Taipei', 'Fresh seafood, sashimi, and everyday cooking ingredients', 'A friendly market stop for learning species, seasonality, and simple cooking ideas.'],
        ['Yuantong Seafood', 'Restaurant · Zhonghe, New Taipei', 'Fresh seafood, sashimi, cooked dishes, and seafood meals', 'A good place to connect a featured fish with a dish people can actually taste.'],
        ['Bisha Fishing Harbor', 'Fishing harbor · Keelung', 'Seasonal local catch, cutlassfish, squid, and seafood dishes', 'A useful stop for connecting seafood with harbor life, origin, season, and local fishing stories.'],
        ['Taipei Fish Market', 'Fish market · Zhongshan, Taipei', 'Traceable seafood, frozen seafood, and household seafood shopping', 'A place to compare origin information, product labels, and cooking options in plain language.'],
        ['Wanda Fish Wholesale Market', 'Fish market · Wanhua, Taipei', 'Greater Taipei seafood supply, wholesale catch, and retail buying', 'A look at how seafood moves through the city—from fish traders and restaurants to everyday shoppers.']
      ],
      sections: [
        {
          eyebrow: 'AT THE SEAFOOD COUNTER',
          title: 'The map gets you there; these three cues help you buy',
          body: 'Pair each seafood stop with a featured fish, an easy recipe, and one quick follow-up question so the trip feels complete.',
          cards: [
            ['Featured fish', 'Give shoppers one approachable fish to start with.'],
            ['Cooking idea', 'Know how you want to cook it before you buy, so bringing seafood home feels easier.'],
            ['Quick feedback', 'Share which detail helped most, so the next seafood conversation can be even clearer.']
          ]
        },
        {
          eyebrow: 'COMPLETE THE ROUTE',
          title: 'After choosing a seafood spot, pick the fish and the recipe',
          body: 'The map works best together with the featured fish, an easy cooking plan, and a quick note after the meal.',
          links: [
            ['Featured Fish', 'See today’s approachable pick first.'],
            ['Easy Fish Recipes', 'Know how to cook it before you shop.'],
            ['Quick Feedback', 'Bought it or skipped it? Share one real note.']
          ]
        }
      ]
    },

    recipes: {
      title: 'FishFull | Easy Fish Recipes for Weeknight Seafood',
      description: 'Easy seafood recipes for steaming, pan-frying, and soup, with short steps, clear timing, and rescue tips for first-time fish buyers and busy home cooks.',
      hero: {
        eyebrow: 'COOK IT TONIGHT',
        headline: 'Pick the recipe before you buy the fish',
        lead: 'These are not chef-show recipes. They are practical seafood dinners for people who want a clear plan before they reach the fish counter. Short steps, useful timing, and a rescue tip help first-time buyers come back for seafood again.',
        badges: ['About 15–20 minutes', 'Short steps', 'Rescue tips included', 'Pairs with Featured Fish']
      },
      recipeHeading: ['RECIPE CARDS', 'Three low-stress ways to cook fish', 'Each card gives you timing, ingredients, clear steps, and a rescue tip that reads well on a phone.'],
      recipes: [
        {
          head: ['About 15 min', 'Best first try'],
          title: 'Steamed fourfinger threadfin with ginger & scallion',
          best: 'Clean flavor, family dinner, first whole-fish purchase',
          ingredients: ['1 fourfinger threadfin', '4–6 ginger slices', '2 scallions', '1 tsp rice wine', '1½ tbsp soy sauce', 'A little hot oil'],
          steps: ['Pat the fish dry and score each side twice.', 'Place ginger under the fish and rub on a little rice wine.', 'Once the steamer is boiling, steam 8–10 minutes, until the flesh flakes easily.', 'Pour off excess liquid, add scallion, soy sauce, and a small splash of hot oil.'],
          rescue: 'Fish a little dry? Add a spoonful of hot water or light stock and serve it with the juices.'
        },
        {
          head: ['About 18 min', 'Big aroma'],
          title: 'Crisp pan-fried fourfinger threadfin',
          best: 'Rice bowls, lunch boxes, and anyone craving a golden sear',
          ingredients: ['1 whole fish or fish fillet', 'A little salt', 'A little white pepper', '1 tbsp cooking oil', 'Optional lemon or garlic'],
          steps: ['Pat the fish very dry, season lightly, and rest 5 minutes.', 'Heat the pan first, add oil, then place the skin side down over medium heat.', 'Do not rush the flip. Wait until the edges turn golden and release more easily.', 'Cook the second side, turn off the heat, and let residual heat finish the fish for about a minute.'],
          rescue: 'Skin sticking? Lower the heat and give it more time to set before trying to lift it.'
        },
        {
          head: ['About 20 min', 'Easy comfort bowl'],
          title: 'Miso fish soup',
          best: 'Smaller fish, soup night, kids, or older family members',
          ingredients: ['Fish pieces or bones', '1½ tbsp miso', '½ block tofu', '3 ginger slices', 'Chopped scallion', '700 ml water'],
          steps: ['Bring water to a boil, add ginger and fish bones, then simmer 8 minutes.', 'Add tofu and fish meat and cook until the fish turns opaque.', 'Lower the heat, dissolve miso in a ladle of broth, then stir it back into the pot.', 'Add scallion and taste. Add a little more miso only if needed.'],
          rescue: 'Do not boil miso hard for long. If the soup is too salty, add hot water.'
        }
      ],
      sections: [
        {
          eyebrow: 'ASK BEFORE YOU BUY',
          title: 'A recipe can make the seafood decision easier',
          body: 'Fishmongers do not need to recite a full recipe. Three practical answers are often enough to help a shopper picture dinner.',
          cards: [
            ['Steam', 'Is this fish good for steaming?', 'If the fish is fresh and tender, steaming is a simple way to keep the natural flavor front and center.'],
            ['Pan-fry', 'How do I keep the skin from sticking?', 'Pat the fish dry, heat the pan first, and do not keep flipping it.'],
            ['Soup', 'How do I keep fish soup from smelling too strong?', 'Use ginger, start with properly heated water, and finish with miso or scallion for a balanced bowl.']
          ]
        },
        {
          eyebrow: 'PAIR IT UP',
          title: 'Connect the recipe back to the fish and the place to buy it',
          body: 'Once dinner sounds doable, check the featured fish, find a seafood spot, and share a quick note after cooking.',
          links: [
            ['Featured Fish', 'See which fish is a friendly pick today.'],
            ['Buy Seafood Nearby', 'Find a seafood market, fish market, restaurant, or harbor.'],
            ['Quick Feedback', 'Tell us which recipe made seafood feel easier to buy.']
          ]
        }
      ]
    },

    feedback: {
      title: 'FishFull | Quick Seafood Shopping Feedback',
      description: 'A quick seafood feedback card for shoppers, fishmongers, restaurants, community events, and schools: note what helped, what got in the way, and whether you would buy again.',
      hero: {
        eyebrow: 'QUICK FEEDBACK',
        headline: 'Bought it or skipped it? Three quick questions are enough',
        lead: 'Feedback should not feel like homework. Tell us whether you bought, which detail helped, and whether you would come back—then add one honest line from the seafood counter if you want.',
        badges: ['Three quick questions', 'Easy on mobile', 'Copy a short summary', 'Useful for seafood sellers']
      },
      sections: [
        {
          eyebrow: 'KEEP IT SHORT',
          title: 'Ask only what can improve the next seafood conversation',
          body: 'A few practical signals can show whether the fish recommendation, cooking idea, and seafood spot actually helped someone decide.',
          metrics: [
            ['Bought or not', 'Did the information help turn interest into a real purchase?'],
            ['What helped', 'Which detail made the shopper feel more confident?'],
            ['Would you return?', 'Is there repeat-purchase potential, or does the shopper need clearer cooking or price information?']
          ]
        },
        {
          eyebrow: 'BACK TO THE SEAFOOD ROUTE',
          title: 'Use the feedback to improve the next fish, place, and recipe',
          body: 'One honest note can help make the next featured fish, seafood-stop description, and cooking suggestion more useful.',
          links: [
            ['Featured Fish', 'See the next approachable seafood pick.'],
            ['Buy Seafood Nearby', 'Check which places need clearer information.'],
            ['Easy Fish Recipes', 'See which recipe lowers the most cooking stress.'],
            ['Field Notes', 'Turn real questions into better seafood guidance.']
          ]
        }
      ],
      form: {
        eyebrow: 'QUICK CARD',
        title: 'Save one note right now',
        body: 'Three small questions plus one optional quote make this quick enough to use at a seafood counter, restaurant, school, or community event.',
        formTitle: 'Seafood feedback card',
        formBody: 'For fishmongers, restaurants, community groups, and schools: notes stay on this device so you can copy a short summary later.',
        place: 'Place / shop', placePh: 'Example: Huangshi Market, Stall A',
        fish: 'Fish or dish', fishPh: 'Example: fourfinger threadfin, steamed fish',
        bought: 'Did you buy today?',
        reason: 'What made the choice easier?',
        revisit: 'Would you buy again?',
        quote: 'Shopper’s own words', quotePh: 'Example: Is this easy to cook? Does it have many bones? Will kids like it?',
        save: 'Save feedback', export: 'Copy summary'
      }
    },

    field: {
      title: 'FishFull | Seafood Market Field Notes',
      description: 'Practical seafood market field notes for shoppers, fishmongers, fishing partners, schools, and community groups: scan, ask, buy, cook, and share quick feedback.',
      hero: {
        eyebrow: 'FIELD NOTES',
        headline: 'Good seafood should make it all the way home',
        lead: 'Keep the market routine short: scan the catch, check the featured fish, ask a couple of clear questions, choose a cooking plan, bring one home, and leave a quick note after dinner.',
        badges: ['Seafood sellers', 'Fishmonger stories', 'Shopping feedback', 'Tasting activities']
      }
    },

    sustainability: {
      title: 'FishFull | Responsible Seafood Labels',
      description: 'Understand seafood origin, season, catch methods, species cues, cooking ideas, and responsible seafood choices in clear language that works at the seafood counter.',
      hero: {
        eyebrow: 'RESPONSIBLE SEAFOOD',
        headline: 'Turn seafood labels into choices you can actually use',
        lead: 'Origin, season, fishing method, and species information matter most when people can understand them quickly and connect them to a real purchase or meal.',
        badges: ['Clear labels', 'Origin first', 'Cooking ideas', 'Made for real shopping']
      }
    }
  };

  function current() { return active; }
  function escapeHtml(value) { return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;'); }

  function text(node, value) {
    if (!node || value === undefined || value === null) return;
    value = String(value);
    if (node.textContent !== value) node.textContent = value;
  }

  function texts(nodes, values) {
    if (!nodes || !values) return;
    Array.prototype.forEach.call(nodes, function (node, index) {
      if (index < values.length) text(node, values[index]);
    });
  }

  function setMeta(page) {
    if (!page) return;
    document.title = page.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', page.description);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', page.title);
    if (ogDesc) ogDesc.setAttribute('content', page.description);
  }

  function translateHero(page) {
    if (!page || !page.hero) return;
    var hero = document.querySelector('.page-hero');
    if (!hero) return;
    text(hero.querySelector('.hero-text .eyebrow'), page.hero.eyebrow);
    text(hero.querySelector('.hero-text h1'), page.hero.headline);
    text(hero.querySelector('.hero-text > p:not(.eyebrow)'), page.hero.lead);
    texts(hero.querySelectorAll('.badge-row span'), page.hero.badges || []);
  }

  function translateHeading(section, data) {
    if (!section || !data) return;
    var heading = section.querySelector('.section-heading');
    if (!heading) return;
    text(heading.querySelector('.eyebrow'), data.eyebrow);
    text(heading.querySelector('h2'), data.title);
    text(heading.querySelector('p:not(.eyebrow)'), data.body);
  }

  function translateInfoCards(section, cards) {
    if (!section || !cards) return;
    var nodes = section.querySelectorAll('.info-card');
    Array.prototype.forEach.call(nodes, function (card, index) {
      var data = cards[index];
      if (!data) return;
      text(card.querySelector('.card-icon'), data[0]);
      text(card.querySelector('h3'), data[1]);
      text(card.querySelector('p'), data[2]);
    });
  }

  function translateFlow(section, steps) {
    if (!section || !steps) return;
    var nodes = section.querySelectorAll('.flow-step');
    Array.prototype.forEach.call(nodes, function (step, index) {
      var data = steps[index];
      if (!data) return;
      text(step.querySelector('span'), data[0]);
      text(step.querySelector('h3'), data[1]);
      text(step.querySelector('p'), data[2]);
    });
  }

  function translateLinks(section, links) {
    if (!section || !links) return;
    var nodes = section.querySelectorAll('.action-card');
    Array.prototype.forEach.call(nodes, function (card, index) {
      var data = links[index];
      if (!data) return;
      text(card.querySelector('h3'), data[0]);
      text(card.querySelector('p'), data[1]);
      text(card.querySelector('strong'), 'Open →');
    });
  }

  function translateMetrics(section, metrics) {
    if (!section || !metrics) return;
    var nodes = section.querySelectorAll('.metric-card');
    Array.prototype.forEach.call(nodes, function (card, index) {
      var data = metrics[index];
      if (!data) return;
      text(card.querySelector('strong'), data[0]);
      text(card.querySelector('span'), data[1]);
    });
  }

  function translateFish(page) {
    var spotlight = document.querySelector('.fish-spotlight');
    if (spotlight && page.spotlight) {
      var main = spotlight.querySelector('.spotlight-main');
      text(main && main.querySelector('.eyebrow'), page.spotlight.status);
      text(main && main.querySelector('h2'), page.spotlight.fish);
      text(main && main.querySelector('p'), page.spotlight.tagline);
      texts(main && main.querySelectorAll('li'), page.spotlight.notes);
      var facts = spotlight.querySelectorAll('.spotlight-facts article');
      Array.prototype.forEach.call(facts, function (fact, index) {
        var data = page.spotlight.facts[index];
        if (!data) return;
        text(fact.querySelector('span'), data[0]);
        text(fact.querySelector('strong'), data[1]);
      });
    }
    var sections = document.querySelectorAll('.page-fish .content-section');
    page.sections.forEach(function (data, index) {
      var section = sections[index + 1];
      if (!section) return;
      translateHeading(section, data);
      if (data.cards) translateInfoCards(section, data.cards);
      if (data.steps) translateFlow(section, data.steps);
      if (data.links) translateLinks(section, data.links);
    });
  }

  function translateMap(page) {
    var sections = document.querySelectorAll('.page-map .content-section');
    var mapSection = document.querySelector('.map-section');
    if (mapSection) {
      var heading = mapSection.querySelector('.section-heading');
      if (heading) {
        text(heading.querySelector('.eyebrow'), page.mapHeading[0]);
        text(heading.querySelector('h2'), page.mapHeading[1]);
        text(heading.querySelector('p:not(.eyebrow)'), page.mapHeading[2]);
      }
      texts(mapSection.querySelectorAll('.filter-chip'), page.filters);
      text(mapSection.querySelector('.map-note'), page.mapNote);
      var locations = mapSection.querySelectorAll('.location-card');
      Array.prototype.forEach.call(locations, function (card, index) {
        var data = page.locations[index];
        if (!data) return;
        var head = card.querySelector('div');
        text(head && head.querySelector('strong'), data[0]);
        text(head && head.querySelector('span'), data[1]);
        text(card.querySelector('p'), data[2]);
        text(card.querySelector('small'), 'Seafood stop');
        text(card.querySelector('em'), data[3]);
        text(card.querySelector('.map-action'), 'Center on map');
        var mini = card.querySelectorAll('.mini-link');
        if (mini[0]) text(mini[0], 'Featured Fish');
        if (mini[1]) text(mini[1], 'Recipes');
      });
    }
    page.sections.forEach(function (data, index) {
      var section = sections[index + 1];
      if (!section) return;
      translateHeading(section, data);
      if (data.cards) translateInfoCards(section, data.cards);
      if (data.links) translateLinks(section, data.links);
    });
    Array.prototype.forEach.call(document.querySelectorAll('.map-popup'), function (popup) {
      var link = popup.querySelector('a');
      if (link) text(link, 'Open directions');
    });
  }

  function translateRecipes(page) {
    var recipeSection = document.querySelector('.recipe-section');
    if (recipeSection) {
      var heading = recipeSection.querySelector('.section-heading');
      if (heading) {
        text(heading.querySelector('.eyebrow'), page.recipeHeading[0]);
        text(heading.querySelector('h2'), page.recipeHeading[1]);
        text(heading.querySelector('p:not(.eyebrow)'), page.recipeHeading[2]);
      }
      var cards = recipeSection.querySelectorAll('.recipe-card');
      Array.prototype.forEach.call(cards, function (card, index) {
        var data = page.recipes[index];
        if (!data) return;
        texts(card.querySelectorAll('.recipe-card__head span'), data.head);
        text(card.querySelector('h3'), data.title);
        var intro = card.querySelector('p');
        if (intro) intro.innerHTML = '<strong>Best for:</strong> ' + escapeHtml(data.best);
        var heads = card.querySelectorAll('h4');
        if (heads[0]) text(heads[0], 'Ingredients');
        if (heads[1]) text(heads[1], 'Steps');
        texts(card.querySelectorAll('ul li'), data.ingredients);
        texts(card.querySelectorAll('ol li'), data.steps);
        var rescue = card.querySelector('.rescue-tip');
        if (rescue) {
          text(rescue.querySelector('strong'), 'Rescue tip');
          text(rescue.querySelector('span'), data.rescue);
        }
      });
    }
    var sections = document.querySelectorAll('.page-recipes .content-section');
    page.sections.forEach(function (data, index) {
      var section = sections[index + 1];
      if (!section) return;
      translateHeading(section, data);
      if (data.cards) translateInfoCards(section, data.cards);
      if (data.links) translateLinks(section, data.links);
    });
  }

  function translateFeedback(page) {
    var sections = document.querySelectorAll('.page-feedback .content-section');
    page.sections.forEach(function (data, index) {
      var section = sections[index];
      if (!section) return;
      translateHeading(section, data);
      if (data.metrics) translateMetrics(section, data.metrics);
      if (data.links) translateLinks(section, data.links);
    });
    var panel = document.querySelector('.feedback-panel');
    if (!panel) return;
    var panelHeading = panel.querySelector('.section-heading');
    if (panelHeading) {
      text(panelHeading.querySelector('.eyebrow'), page.form.eyebrow);
      text(panelHeading.querySelector('h2'), page.form.title);
      text(panelHeading.querySelector('p:not(.eyebrow)'), page.form.body);
    }
    var form = panel.querySelector('.feedback-form');
    if (!form) return;
    text(form.querySelector('h3'), page.form.formTitle);
    text(form.querySelector(':scope > p'), page.form.formBody);
    var labels = form.querySelectorAll('.feedback-grid > label');
    if (labels[0]) {
      var input0 = labels[0].querySelector('input');
      labels[0].childNodes[0].nodeValue = page.form.place;
      if (input0) input0.placeholder = page.form.placePh;
    }
    if (labels[1]) {
      var input1 = labels[1].querySelector('input');
      labels[1].childNodes[0].nodeValue = page.form.fish;
      if (input1) input1.placeholder = page.form.fishPh;
    }
    var groups = form.querySelectorAll('.feedback-group');
    var groupTitles = [page.form.bought, page.form.reason, page.form.revisit, page.form.quote];
    Array.prototype.forEach.call(groups, function (group, index) {
      var label = group.querySelector(':scope > label');
      if (label && index < groupTitles.length) {
        if (index === 3) {
          var textarea = label.querySelector('textarea');
          label.childNodes[0].nodeValue = groupTitles[index];
          if (textarea) textarea.placeholder = page.form.quotePh;
        } else {
          text(label, groupTitles[index]);
        }
      }
    });
    text(form.querySelector('.feedback-save'), page.form.save);
    text(form.querySelector('[data-feedback-export]'), page.form.export);
  }

  function translateGenericSections(page, pageClass) {
    var sections = document.querySelectorAll(pageClass + ' .content-section');
    if (!page.sections) return;
    page.sections.forEach(function (data, index) {
      var section = sections[index];
      if (!section) return;
      translateHeading(section, data);
      if (data.cards) translateInfoCards(section, data.cards);
      if (data.links) translateLinks(section, data.links);
      if (data.metrics) translateMetrics(section, data.metrics);
    });
  }

  function translateContentPage() {
    if (active !== 'en' || translating) return;
    var key = document.body && document.body.dataset ? document.body.dataset.page : '';
    var page = english[key];
    if (!page || key === 'ar-game') return;
    translating = true;
    try {
      document.documentElement.lang = 'en';
      setMeta(page);
      translateHero(page);
      if (key === 'fish') translateFish(page);
      else if (key === 'map') translateMap(page);
      else if (key === 'recipes') translateRecipes(page);
      else if (key === 'feedback') translateFeedback(page);
      else if (key === 'field') translateGenericSections(page, '.page-field');
      else if (key === 'sustainability') translateGenericSections(page, '.page-sustainability');
      var footer = document.querySelector('.page-shell > .site-footer span');
      if (footer) text(footer, 'Choose seafood with confidence, cook it well, and keep good local catch in the story.');
    } finally {
      translating = false;
    }
  }

  function polishVisibleChineseCopy() {
    if (active !== 'zh') return;
    var replacements = {
      '不重複出現在每頁': '三題就完成',
      '這張表單只放在十秒回饋獨立頁，不再每個頁面重複出現。': '三個小問題加一句話，魚攤、餐廳、校園或活動現場都能很快填完。',
      '買之前知道今晚怎麼煮，購買率更有機會上升。': '買之前知道今晚怎麼煮，客人更容易放心帶一份回家。'
    };
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var value = (node.nodeValue || '').trim();
      if (replacements[value] && node.nodeValue !== replacements[value]) node.nodeValue = replacements[value];
    });
  }

  function updateButtons() {
    var nextLabel = active === 'en' ? '中文' : 'EN';
    var title = active === 'en' ? '切換成中文' : 'Switch to English';
    document.querySelectorAll('.language-toggle').forEach(function (button) {
      button.setAttribute('aria-label', title);
      button.setAttribute('title', title);
      var icon = button.querySelector('[data-lang-icon]');
      if (icon) text(icon, nextLabel);
      else text(button, nextLabel);
    });
  }

  function injectTheme() {
    if (document.getElementById('fishfull-blue-green-theme')) return;
    var style = document.createElement('style');
    style.id = 'fishfull-blue-green-theme';
    style.textContent = [
      ':root{--fishfull-blue:#006d77;--fishfull-green:#168a49;--fishfull-white:#fff;--fishfull-mint:#e8fbf8;--fishfull-ink:#0b3034;--ink:var(--fishfull-ink)!important;--sea:var(--fishfull-blue)!important;--sea-deep:#005b63!important;--sun:var(--fishfull-green)!important;--paper:rgba(255,255,255,.9)!important;--line:rgba(0,109,119,.14)!important;}',
      'body{background:#f6fffd!important;color:var(--fishfull-ink)!important}',
      '.site-nav,.topbar{background:rgba(255,255,255,.88)!important;border-color:rgba(0,109,119,.16)!important;box-shadow:0 18px 46px rgba(0,109,119,.14)!important}',
      '.brand-sun,.brand-symbol>.generated-logo{display:none!important}',
      '.nav-links a,.topnav a{color:#0c545c!important}',
      '.hero-copy,.coast-panel,.route-panel,.page-hero,.content-section,.hero-card,.info-card,.action-card,.recipe-card,.location-card,.spotlight-main,.spotlight-facts article,.feedback-form{border-color:rgba(0,109,119,.14)!important}',
      '.route-badge,.coast-tags span,.badge-row span,.filter-chip,.card-icon,.mini-link{border-color:rgba(0,109,119,.14)!important}',
      '.fishfull-en-page .info-grid,.fishfull-en-page .link-grid{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}'
    ].join('');
    document.head.appendChild(style);
  }

  function enhanceBrandNodes() {
    document.querySelectorAll('.brand-mark,.brand').forEach(function (brand) {
      var small = brand.querySelector('.brand-kicker,.brand small');
      if (small && small.textContent !== 'Green Seafood') small.textContent = 'Green Seafood';
    });
  }

  function decorate() {
    injectTheme();
    if (active === 'en') translateContentPage();
    else polishVisibleChineseCopy();
    enhanceBrandNodes();
    updateButtons();
  }

  function decorateSoon() {
    window.clearTimeout(decorateTimer);
    decorateTimer = window.setTimeout(decorate, 0);
  }

  function watchRenderedPage() {
    if (!window.MutationObserver || !document.getElementById('root') || observer) return;
    observer = new MutationObserver(function () {
      if (!translating) decorateSoon();
    });
    observer.observe(document.getElementById('root'), { childList: true, subtree: true });
  }

  function set(next) {
    active = next === 'en' ? 'en' : 'zh';
    try {
      localStorage.setItem('fishfull-language', active);
      localStorage.setItem('scm-language', active);
    } catch (error) {}
    document.documentElement.lang = active === 'en' ? 'en' : 'zh-Hant';
    updateButtons();
    document.dispatchEvent(new Event('fishfull-language-change'));
    document.dispatchEvent(new Event('scm-language-change'));
    decorateSoon();
  }

  function toggle() { set(active === 'en' ? 'zh' : 'en'); }

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('.language-toggle');
    if (!button) return;
    event.preventDefault();
    toggle();
  });

  window.FishFullLanguage = { current: current, set: set, toggle: toggle, escapeHtml: escapeHtml };
  window.SCMLanguage = window.FishFullLanguage;

  function start() {
    set(active);
    watchRenderedPage();
    decorateSoon();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
