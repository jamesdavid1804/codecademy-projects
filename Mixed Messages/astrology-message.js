function  random_astro_sign (astro_sign) {
    const rand_index = Math.floor(Math.random() * astro_sign.length);
    return astro_sign[rand_index];
};

function  random_life_area (life_area) {
    const rand_index = Math.floor(Math.random() * life_area.length);
    return life_area[rand_index];
};

function  random_outcome (outcomes) {
    const rand_index = Math.floor(Math.random() * outcomes.length);
    return outcomes[rand_index];
};

const astro_signs = [
    'Capricorn',
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagitarius'
];

const life_area = [
    'love life',
    'relationships',
    'work and education',
    'family',
    'health and wellbeing'
];

const outcomes = [
    'great things',
    'an unexpected surprise',
    'content',
    'frustration',
    'clarity',
    'fulfillment'
];

console.log(`${random_astro_sign(astro_signs)}: The stars show that today you will experience ${random_outcome(outcomes)} in your ${random_life_area(life_area)}.`);