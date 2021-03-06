// Data-reducer
//
// For UI-state, see Reducers/character/ui

import { fromJS } from 'immutable';
import { isEqual } from 'lodash';
import uuid from 'uuid/v1';

const initial = fromJS({
    id: null,  // Used for storing the character

    name: '-',
    occupation: '-',
    age: '-',
    sex: '-',
    birthplace: '-',
    residence: '-',

    hp: {
        current: null,  // Current hit points
        today: null,  // Hit points at the start of the day
        // Max is calculated
        major_wound: false,
    },
    san: {
        current: null,  // Current sanity
        today: null,  // Sanity at the start of the day
        // Max is calculated
        status: 'sane',
    },
    luck: {
        current: 50,
        max: 99,
    },
    mp: {
        current: null,
        // Max is calculated
    },

    stats: {
        str: 45,
        con: 40,
        siz: 50,
        dex: 55,
        app: 60,
        edu: 60,
        int: 70,
        pow: 80,
    },

    // Skills start with a current value equivalent to the default
    skills: {
        accounting: {
            name: 'Accounting',
            current: 5,
            used: false,
        },

        acting: {
            name: 'Art & Craft',
            specialization: 'Acting',
            current: 5,
            used: false,
        },

        animal_handling: {
            name: 'Animal Handling',
            current: 5,
            used: false,
        },

        anthropology: {
            name: 'Anthropology',
            current: 1,
            used: false,
        },

        appraise: {
            name: 'Appraise',
            current: 5,
            used: false,
        },

        archaeology: {
            name: 'Archaeology',
            current: 1,
            used: false,
        },

        art_and_craft: {
            name: 'Art & Craft',
            specialization: '(Specify)',
            current: 5,
            used: false,
        },

        artillery: {
            name: 'Artillery',
            current: 1,
            used: false,
        },

        astronomy: {
            name: 'Science',
            specialization: 'Astronomy',
            current: 1,
            used: false,
        },

        axe: {
            name: 'Fighting',
            specialization: 'Axe',
            current: 15,
            used: false,
        },

        biology: {
            name: 'Science',
            specialization: 'Biology',
            current: 1,
            used: false,
        },

        botany: {
            name: 'Science',
            specialization: 'Botany',
            current: 1,
            used: false,
        },

        bow: {
            name: 'Firearms',
            specialization: 'Bow',
            current: 15,
            used: false,
        },

        brawl: {
            name: 'Fighting',
            specialization: 'Brawl',
            current: 25,
            used: false,
        },

        chainsaw: {
            name: 'Fighting',
            specialization: 'Chainsaw',
            current: 10,
            used: false,
        },

        charm: {
            name: 'Charm',
            current: 15,
            used: false,
        },

        chemistry: {
            name: 'Science',
            specialization: 'Chemistry',
            current: 1,
            used: false,
        },

        climb: {
            name: 'Climb',
            current: 20,
            used: false,
        },

        credit_rating: {
            name: 'Credit Rating',
            current: 0,
            used: null,
        },

        cryptography: {
            name: 'Science',
            specialization: 'Cryptography',
            current: 1,
            used: false,
        },
        
        mythos: {
            name: 'Cthulhu Mythos',
            current: 0,
            used: null,
        },

        demolitions: {
            name: 'Demolitions',
            current: 1,
            used: false,
        },

        disguise: {
            name: 'Disguise',
            current: 5,
            used: false,
        },

        diving: {
            name: 'Diving',
            current: 1,
            used: false,
        },

        dodge: {
            name: 'Dodge',
            current: null,  // half dex
            used: false,
        },

        drive_auto: {
            name: 'Drive Auto',
            current: 20,
            used: false,
        },

        electrical_repair: {
            name: 'Electrical Repair',
            current: 10,
            used: false,
        },

        engineering: {
            name: 'Science',
            specialization: 'Engineering',
            current: 1,
            used: false,
        },

        fast_talk: {
            name: 'Fast Talk',
            current: 5,
            used: false,
        },

        fine_art: {
            name: 'Art & Craft',
            specialization: 'Fine Art',
            current: 5,
            used: false,
        },

        first_aid: {
            name: 'First Aid',
            current: 30,
            used: false,
        },

        flail: {
            name: 'Fighting',
            specialization: 'Flail',
            current: 10,
            used: false,
        },

        flamethrower: {
            name: 'Firearms',
            specialization: 'Flamethrower',
            current: 10,
            used: false,
        },

        forensics: {
            name: 'Science',
            specialization: 'Forensics',
            current: 5,
            used: false,
        },

        forgery: {
            name: 'Art & Craft',
            specialization: 'Forgery',
            current: 1,
            used: false,
        },

        garrote: {
            name: 'Fighting',
            specialization: 'Garrote',
            current: 10,
            used: false,
        },

        geology: {
            name: 'Science',
            specialization: 'Geology',
            current: 1,
            used: false,
        },

        handgun: {
            name: 'Firearms',
            specialization: 'Handgun',
            current: 20,
            used: false,
        },

        heavy_weapons: {
            name: 'Firearms',
            specialization: 'Heavy Weapons',
            current: 10,
            used: false,
        },

        history: {
            name: 'History',
            current: 5,
            used: false,
        },

        hypnosis: {
            name: 'Hypnosis',
            current: 1,
            used: false,
        },

        intimidate: {
            name: 'Intimidate',
            current: 15,
            used: false,
        },

        jump: {
            name: 'Jump',
            current: 20,
            used: false,
        },

        language_other: {
            name: 'Language (Other)',
            specialization: '(Specify)',
            current: 1,
            used: false,
        },

        language_own: {
            name: 'Language (Own)',
            specialization: '(Specify)',
            current: null,  // EDU
            used: false,
        },

        law: {
            name: 'Law',
            current: 5,
            used: false,
        },

        library_use: {
            name: 'Library Use',
            current: 20,
            used: false,
        },

        listen: {
            name: 'Listen',
            current: 20,
            used: false,
        },

        locksmith: {
            name: 'Locksmith',
            current: 1,
            used: false,
        },

        lore: {
            name: 'Lore',
            specialization: '(Specify)',
            current: 1,
            used: false,
        },

        machine_gun: {
            name: 'Firearms',
            specialization: 'Machine Gun',
            current: 10,
            used: false,
        },

        mathematics: {
            name: 'Science',
            specialization: 'Mathematics',
            current: 10,
            used: false,
        },

        mech_repair: {
            name: 'Mechanical Repair',
            current: 10,
            used: false,
        },

        medicine: {
            name: 'Medicine',
            current: 1,
            used: false,
        },

        meteorology: {
            name: 'Science',
            specialization: 'Meteorology',
            current: 1,
            used: false,
        },

        natural_world: {
            name: 'Natural World',
            current: 10,
            used: false,
        },

        navigate: {
            name: 'Navigate',
            current: 10,
            used: false,
        },

        occult: {
            name: 'Occult',
            current: 5,
            used: false,
        },

        op_hv_machine: {
            name: 'Operate Heavy Machinery',
            current: 1,
            used: false,
        },

        persuade: {
            name: 'Persuade',
            current: 10,
            used: false,
        },

        pharmacy: {
            name: 'Science',
            specialization: 'Pharmacy',
            current: 1,
            used: false,
        },

        photography: {
            name: 'Art & Craft',
            specialization: 'Photography',
            current: 5,
            used: false,
        },

        physics: {
            name: 'Science',
            specialization: 'Physics',
            current: 1,
            used: false,
        },

        pilot: {
            name: 'Pilot',
            specialization: '(Specify)',
            current: 1,
            used: false,
        },

        psychology: {
            name: 'Psychology',
            current: 10,
            used: false,
        },

        psychoanalysis: {
            name: 'Psychoanalysis',
            current: 1,
            used: false,
        },

        read_lips: {
            name: 'Read Lips',
            current: 1,
            used: false,
        },

        ride: {
            name: 'Ride',
            current: 5,
            used: false,
        },

        longarm: {
            name: 'Firearms',
            specialization: 'Rifle/Shotgun',
            current: 25,
            used: false,
        },

        sleight_of_hand: {
            name: 'Sleight of Hand',
            current: 10,
            used: false,
        },

        spear: {
            name: 'Fighting',
            specialization: 'Spear',
            current: 20,
            used: false,
        },

        spot_hidden: {
            name: 'Spot Hidden',
            current: 25,
            used: false
        },

        stealth: {
            name: 'Stealth',
            current: 20,
            used: false,
        },

        submachinegun: {
            name: 'Firearms',
            specialization: 'Submachine Gun',
            current: 15,
            used: false,
        },

        survival: {
            name: 'Survival',
            specialization: '(Specify)',
            current: 10,
            used: false,
        },

        sword: {
            name: 'Fighting',
            specialization: 'Sword',
            current: 20,
            used: false,
        },

        swim: {
            name: 'Swim',
            current: 20,
            used: false,
        },

        throw: {
            name: 'Throw',
            current: 20,
            used: false,
        },

        track: {
            name: 'Track',
            current: 10,
            used: false,
        },

        whip: {
            name: 'Fighting',
            specialization: 'Whip',
            current: 5,
            used: false,
        },

        zoology: {
            name: 'Science',
            specialization: 'Zoology',
            current: 1,
            used: false,
        },
    }
});


// Actions
export const NEW_CHARACTER = 'character/NEW_CHARACTER';
export const newCharacter = (id) => ({
    type: NEW_CHARACTER,
    id,
});

export const DELETE_CHARACTER = 'character/DELETE_CHARACTER';
export const deleteCharacter = (id) => ({
    type: DELETE_CHARACTER,
    id,
});

export const TOGGLE_MAJOR_WOUND = 'character/TOGGLE_MAJOR_WOUND';
export const toggleMajorWound = () => ({
    type: TOGGLE_MAJOR_WOUND,
});

export const TOGGLE_SKILL_USED = 'character/TOGGLE_SKILL_USED';
export const toggleSkillUsed = (skill) => ({
    type: TOGGLE_SKILL_USED,
    skill,
});

export const ADD_SKILL = 'character/ADD_SKILL';
export const addSkill = (name, specialization) => ({
    type: ADD_SKILL,
    name,
    specialization,
});

export const EDIT_SKILL = 'character/EDIT_SKILL';
export const editSkill = (skill, name, specialization) => ({
    type: EDIT_SKILL,
    skill,
    name,
    specialization,
});

export const DELETE_SKILL = 'character/DELETE_SKILL';
export const deleteSkill = (skill) => ({
    type: DELETE_SKILL,
    skill,
});

export const SET_VALUE = 'character/SET_VALUE';
export const setValue = (key, value) => ({
    type: SET_VALUE,
    key,
    value,
});

export const LOAD_CHARACTER = 'character/LOAD_CHARACTER';
export const loadCharacter = (id) => ({
    type: LOAD_CHARACTER,
    id,
});

export const LOAD_CHARACTER_DONE = 'character/LOAD_CHARACTER_DONE';
export const loadCharacterDone = (data) => ({
    type: LOAD_CHARACTER_DONE,
    data,
});


export const ATTRIBUTES = [{
    key: 'occupation',
    name: 'Occupation',
}, {
    key: 'age',
    name: 'Age',
}, {
    key: 'sex',
    name: 'Sex',
}, {
    key: 'birthplace',
    name: 'Birthplace',
}, {
    key: 'residence',
    name: 'Residence',
}];

export const BARS = [{
    key: 'hp',
    name: 'Hit Points',
    color: 'darkred',
}, {
    key: 'san',
    name: 'Sanity',
    color: 'purple',
}, {
    key: 'luck',
    name: 'Luck',
    color: 'blue',
}, {
    key: 'mp',
    name: 'Magic Points',
    color: 'green',
}];

export const STATS = [{
    key: 'str',
    name: 'Strength',
}, {
    key: 'con',
    name: 'Constitution',
}, {
    key: 'siz',
    name: 'Size',
}, {
    key: 'dex',
    name: 'Dexterity',
}, {
    key: 'app',
    name: 'Appearance',
}, {
    key: 'edu',
    name: 'Education',
}, {
    key: 'pow',
    name: 'Power',
}];


// Reducer
export default (state = initial, action) => {
    switch (action.type) {
        case TOGGLE_MAJOR_WOUND:
            return state
                .setIn(['hp', 'major_wound'],
                    !state.getIn(['hp', 'major_wound']));

        case TOGGLE_SKILL_USED:
            return state
                .setIn(['skills', action.skill, 'used'],
                    !state.getIn(['skills', action.skill, 'used']));

        case ADD_SKILL:
            return state
                .setIn(['skills', uuid()], fromJS({
                    name: action.name,
                    specialization: action.specialization,
                    current: 0,
                    used: false,
                }));

        case EDIT_SKILL:
            return state
                .mergeIn(['skills', action.skill], fromJS({
                    name: action.name,
                    specialization: action.specialization,
                }));

        case DELETE_SKILL:
            return state
                .deleteIn(['skills', action.skill]);

        case SET_VALUE:
            if (isEqual(action.key, ['hp', 'current'])) {
                // We need to access the state with all of the calculated
                // values
                const _state = selectCharacter(state);
                const current = _state.getIn(['hp', 'current']);
                const max = _state.getIn(['hp', 'max']);

                const delta = current - action.value;

                if (delta >= max / 2) {
                    state = state.setIn(['hp', 'major_wound'], true);
                }
            } else if (isEqual(action.key, ['san', 'current'])) {
                // We need to access the state with all of the calculated
                // values
                const _state = selectCharacter(state);
                const today = _state.getIn(['san', 'today']);
                const threshold = _state.getIn(['san', 'threshold']);
                const delta = action.value - today;

                if (delta < 0 && Math.abs(delta) > threshold) {
                    state = state.setIn(['san', 'status'], 'indefinite');
                }
            }

            return state
                .setIn(action.key, action.value);

        // These actions reinitialize the store to a clean state
        case NEW_CHARACTER:
            return initial
                .set('id', action.id);

        case LOAD_CHARACTER_DONE:
            return initial
                .mergeDeep(action.data);

        default:
            return state
    }
}

export function selectCharacter(state) {
    const stats = state.get('stats').toJS();
    // Max HP is (CON + SIZ) / 10. pg 49.
    const maxHP = (stats.con + stats.siz) / 10;
    // POW / 5. pg 64
    const maxMP = Math.floor(stats.pow / 5);

    // Derive calculated values
    state = state
        // Max SAN is 99 - Cthulhu Mythos
        .setIn(['san', 'max'], 99 - state.getIn(['skills', 'mythos', 'current']))
        .setIn(['hp', 'max'], maxHP)
        .setIn(['mp', 'max'], maxMP);

    // Set current HP if required
    if (state.getIn(['hp', 'current']) === null) {
        state = state.setIn(['hp', 'current'], maxHP);
    }

    // Set today's HP if required
    if (state.getIn(['hp', 'today']) === null) {
        state = state.setIn(['hp', 'today'], maxHP);
    }

    // Set current SAN if required
    if (state.getIn(['san', 'current']) === null) {
        state = state.setIn(['san', 'current'], stats.pow);
    }

    // Set today's SAN if required
    if (state.getIn(['san', 'today']) === null) {
        state = state.setIn(['san', 'today'], stats.pow);
    }

    if (state.getIn(['mp', 'current']) === null) {
        state = state.setIn(['mp', 'current'], maxMP);
    }

    if (state.getIn(['skills', 'dodge', 'current']) === null) {
        state = state.setIn(['skills', 'dodge', 'current'],
            Math.floor(stats.dex / 2));
    }

    if (state.getIn(['skills', 'language_own', 'current']) === null) {
        state = state.setIn(['skills', 'language_own', 'current'], stats.edu);
    }

    // Set the SAN threshold
    const sanToday = state.getIn(['san', 'today']);
    const sanCurrent = state.getIn(['san', 'current']);
    state = state
        .setIn(['san', 'threshold'], Math.floor(sanToday / 5))
        .setIn(['san', 'delta'], sanCurrent - sanToday);

    return state;
}
