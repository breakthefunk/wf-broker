let items = [
    "akbronco_prime_blueprint",
    "akbronco_prime_link",
    "aklex_prime_blueprint",
    "aklex_prime_link",
    "akstiletto_prime_barrel",
    "akstiletto_prime_blueprint",
    "akstiletto_prime_link",
    "akstiletto_prime_receiver",
    "ankyros_prime_blade",
    "ankyros_prime_blueprint",
    "ankyros_prime_gauntlet",
    "ash_prime_blueprint",
    "ash_prime_chassis",
    "ash_prime_neuroptics",
    "ash_prime_systems",
    "ballistica_prime_blueprint",
    "ballistica_prime_lower_limb",
    "ballistica_prime_receiver",
    "ballistica_prime_string",
    "ballistica_prime_upper_limb",
    "banshee_prime_blueprint",
    "banshee_prime_chassis",
    "banshee_prime_neuroptics",
    "banshee_prime_systems",
    "boar_prime_barrel",
    "boar_prime_blueprint",
    "boar_prime_receiver",
    "boar_prime_stock",
    "boltor_prime_barrel",
    "boltor_prime_blueprint",
    "boltor_prime_receiver",
    "boltor_prime_stock",
    "braton_prime_barrel",
    "braton_prime_blueprint",
    "braton_prime_receiver",
    "braton_prime_stock",
    "bronco_prime_barrel",
    "bronco_prime_blueprint",
    "bronco_prime_receiver",
    "burston_prime_barrel",
    "burston_prime_blueprint",
    "burston_prime_receiver",
    "burston_prime_stock",

    if(ddId.includes('category')){
        console.log(ddId);
    }
    let typeId = ddId.replace('dd_category', 'dd_type');
    typeElement = document.getElementById(typeId);
    typeBtn = typeElement.firstElementChild;
    typeContent = typeElement.children[1];
    if(typeElement.classList.contains('dropdown--hidden')){
        typeElement.classList.remove('dropdown--hidden');
    };


    "carrier_prime_blueprint",
    "carrier_prime_carapace",
    "carrier_prime_cerebrum",
    "carrier_prime_systems",
    "cernos_prime_blueprint",
    "cernos_prime_grip",
    "cernos_prime_lower_limb",
    "cernos_prime_string",
    "cernos_prime_upper_limb",
    "dakra_prime_blade",
    "dakra_prime_blueprint",
    "dakra_prime_handle",
    "dual_kamas_prime_blade",
    "dual_kamas_prime_blueprint",
    "dual_kamas_prime_handle",
    "ember_prime_blueprint",
    "ember_prime_chassis",
    "ember_prime_neuroptics",
    "ember_prime_systems",
    "euphona_prime_barrel",
    "euphona_prime_blueprint",
    "euphona_prime_receiver",
    "fang_prime_blade",
    "fang_prime_blueprint",
    "fang_prime_handle",
    "fragor_prime_blueprint",
    "fragor_prime_handle",
    "fragor_prime_head",
    "frost_prime_blueprint",
    "frost_prime_chassis",
    "frost_prime_neuroptics",
    "frost_prime_systems",
    "galatine_prime_blade",
    "galatine_prime_blueprint",
    "galatine_prime_handle",
    "glaive_prime_blade",
    "glaive_prime_blueprint",
    "glaive_prime_disc",
    "helios_prime_blueprint",
    "helios_prime_carapace",
    "helios_prime_cerebrum",
    "helios_prime_systems",
    "hikou_prime_blueprint",
    "hikou_prime_pouch",
    "hikou_prime_stars",
    "hydroid_prime_blueprint",
    "hydroid_prime_chassis",
    "hydroid_prime_neuroptics",
    "hydroid_prime_systems",
    "kavasa_prime_collar_band",
    "kavasa_prime_collar_buckle",
    "kavasa_prime_collar_blueprint",
    "latron_prime_barrel",
    "latron_prime_blueprint",
    "latron_prime_receiver",
    "latron_prime_stock",
    "lex_prime_barrel",
    "lex_prime_blueprint",
    "lex_prime_receiver",
    "mag_prime_blueprint",
    "mag_prime_chassis",
    "mag_prime_neuroptics",
    "mag_prime_systems",
    "nami_skyla_prime_blade",
    "nami_skyla_prime_blueprint",
    "nami_skyla_prime_handle",
    "nekros_prime_blueprint",
    "nekros_prime_chassis",
    "nekros_prime_neuroptics",
    "nekros_prime_systems",
    "nikana_prime_blade",
    "nikana_prime_blueprint",
    "nikana_prime_hilt",
    "nova_prime_blueprint",
    "nova_prime_chassis",
    "nova_prime_neuroptics",
    "nova_prime_systems",
    "nyx_prime_blueprint",
    "nyx_prime_chassis",
    "nyx_prime_neuroptics",
    "nyx_prime_systems",
    "oberon_prime_blueprint",
    "oberon_prime_chassis",
    "oberon_prime_neuroptics",
    "oberon_prime_systems",
    "odonata_prime_blueprint",
    "odonata_prime_harness",
    "odonata_prime_systems",
    "odonata_prime_wings",
    "orthos_prime_blade",
    "orthos_prime_blueprint",
    "orthos_prime_handle",
    "paris_prime_blueprint",
    "paris_prime_grip",
    "paris_prime_lower_limb",
    "paris_prime_string",
    "paris_prime_upper_limb",
    "reaper_prime_blade",
    "reaper_prime_blueprint",
    "reaper_prime_handle",
    "rhino_prime_blueprint",
    "rhino_prime_chassis",
    "rhino_prime_neuroptics",
    "rhino_prime_systems",
    "saryn_prime_blueprint",
    "saryn_prime_chassis",
    "saryn_prime_neuroptics",
    "saryn_prime_systems",
    "scindo_prime_blade",
    "scindo_prime_blueprint",
    "scindo_prime_handle",
    "sicarus_prime_barrel",
    "sicarus_prime_blueprint",
    "sicarus_prime_receiver",
    "silva_and_aegis_prime_blade",
    "silva_and_aegis_prime_blueprint",
    "silva_and_aegis_prime_guard",
    "silva_and_aegis_prime_hilt",
    "soma_prime_barrel",
    "soma_prime_blueprint",
    "soma_prime_receiver",
    "soma_prime_stock",
    "spira_prime_blade",
    "spira_prime_blueprint",
    "spira_prime_pouch",
    "sybaris_prime_barrel",
    "sybaris_prime_blueprint",
    "sybaris_prime_receiver",
    "sybaris_prime_stock",
    "tigris_prime_barrel",
    "tigris_prime_blueprint",
    "tigris_prime_receiver",
    "tigris_prime_stock",
    "trinity_prime_blueprint",
    "trinity_prime_chassis",
    "trinity_prime_neuroptics",
    "trinity_prime_systems",
    "valkyr_prime_blueprint",
    "valkyr_prime_chassis",
    "valkyr_prime_neuroptics",
    "valkyr_prime_systems",
    "vasto_prime_barrel",
    "vasto_prime_blueprint",
    "vasto_prime_receiver",
    "vauban_prime_blueprint",
    "vauban_prime_chassis",
    "vauban_prime_neuroptics",
    "vauban_prime_systems",
    "vectis_prime_barrel",
    "vectis_prime_blueprint",
    "vectis_prime_receiver",
    "vectis_prime_stock",
    "venka_prime_blades",
    "venka_prime_blueprint",
    "venka_prime_gauntlet",
    "volt_prime_blueprint",
    "volt_prime_chassis",
    "volt_prime_neuroptics",
    "volt_prime_systems",
];

let mods_db = [
    "armored_agility",
    "antitoxin",
    "aviator",
    "blind_rage",
    "constitution",
    "continuity",
    "diamond_skin",
    "enemy_sense",
    "equilibrium",
    "fast_deflection",
    "flame_repellent",
    "fleeting_expertise",
    "flow",
    "fortitude",
    "handspring",
    "heavy_impact",
    "insulation",
    "intensify",
    "intruder",
    "lightning_rod",
    "maglev",
    "master_thief",
    "narrow_minded",
    "natural_talent",
    "overextended",
    "primed_continuity",
    "primed_flow",
    //"primed_vigor",
    "provoked",
    "quick_thinking",
    "rage",
    "rapid_resilience",
    "redirection",
    "reflection",
    "reflex_guard",
    "retribution",
    "rush",
    "shock_absorbers",
    "steel_fiber",
    "streamline",
    "streamlined_form",
    "stretch",
    "sure_footed",
    "thiefs_wit",
    "transient_fortitude",
    "undying_will",
    "vigor",
    "vitality",
    "warm_coat",
    "agile_aim",
    "ammo_drum",
    "argon_scope",
    "apex_predator",
    "bane_of_corpus",
    "bane_of_grineer",
    "bane_of_infested",
    "bladed_rounds",
    "catalyzer_link",
    "combustion_beam",
    "comet_rounds",
    "continuous_misery",
    "crash_course",
    "critical_delay",
    "cryo_rounds",
    "eagle_eye",
    "fanged_fusillade",
    "fast_hands",
    "firestorm",
    "hammer_shot",
    "heavy_caliber",
    "hellfire",
    "high_voltage",
    "hush",
    "infected_clip",
    "lucky_shot",
    "magazine_warp",
    "malignant_force",
    "metal_auger",
    "piercing_caliber",
    "piercing_hit",
    "point_strike",
    "primed_bane_of_corpus",
    "primed_bane_of_grineer",
    "primed_bane_of_infested",
    "primed_cryo_rounds",
    "primed_fast_hands",
    "recover",
    "rifle_aptitude",
    "rime_rounds",
    "ripper_rounds",
    "rupture",
    "sawtooth_clip",
    "serrated_rounds",
    "serration",
    "shred",
    "sinister_reach",
    "speed_trigger",
    "split_chamber",
    "stabilizer",
    "stormbringer",
    "terminal_velocity",
    "thermite_rounds",
    "twitch",
    "vanquished_prey",
    "vile_acceleration",
    "vile_precision",
    "vital_sense",
    "wildfire",
    "accelerated_blast",
    "ammo_stock",
    "blaze",
    "blunderbuss",
    "bounty_hunter",
    "breach_loader",
    "broad_eye",
    "burdened_magazine",
    "charged_shell",
    "chilling_grasp",
    "chilling_reload",
    "cleanse_corpus",
    "cleanse_grineer",
    "cleanse_infested",
    "contagious_spread",
    "crash_shot",
    "critical_deceleration",
    "disruptor",
    "double_barrel_drift",
    "fatal_acceleration",
    "flak_shot",
    "flechette",
    "frail_momentum",
    "frigid_blast",
    "full_contact",
    "hells_chamber",
    "hydraulic_chamber",
    "incendiary_coat",
    "kill_switch",
    "laser_sight",
    "lingering_torment",
    "loaded_capacity",
    "lock_and_load",
    "loose_chamber",
    "momentary_pause",
    "nano_applicator",
    "narrow_barrel",
    "point_blank",
    "primed_point_blank",
    "primed_ravage",
    "primed_shotgun_ammo_mutation",
    "prize_kill",
    "ravage",
    "repeater_clip",
    "scattering_inferno",
    "seeking_force",
    "seeking_fury",
    "shell_compression",
    "shell_shock",
    "shotgun_ammo_mutation",
    "shotgun_savvy",
    "shotgun_spazz",
    "shrapnel_shot",
    "shred_shot",
    "shredder",
    "silent_battery",
    "snap_shot",
    "soft_hands",
    "sweeping_serration",
    "tactical_pump",
    "tainted_shell",
    "toxic_barrage",
    "vicious_spread",
    "air_recon",
    "anemic_agility",
    "barrel_diffusion",
    "blind_shot",
    "bore",
    "calculated_victory",
    "concussion_rounds",
    "convulsion",
    "creeping_bullseye",
    "deep_freeze",
    "eject_magazine",
    "embedded_catalyzer",
    "expel_corpus",
    "expel_grineer",
    "expel_infested",
    "frostbite",
    "full_capacity",
    "gunslinger",
    "hawk_eye",
    "heated_charge",
    "heavy_warhead",
    "hollow_point",
    "hornet_strike",
    "hydraulic_barrel",
    "hydraulic_crosshairs",
    "ice_storm",
    "impaler_munitions",
    "jolt",
    "lethal_momentum",
    "lethal_torrent",
    "loose_magazine",
    "magnum_force",
    "maim",
    "meteor_munitions",
    "night_stalker",
    "no_return",
    "pathogen_rounds",
    "perpetual_agony",
    "pistol_ammo_mutation",
    "pistol_gambit",
    "pistol_pestilence",
    "pressurized_magazine",
    "primed_heated_charge",
    "primed_pistol_gambit",
    "primed_pistol_mutation",
    "primed_slip_magazine",
    "primed_target_cracker",
    "pummel",
    "quickdraw",
    "razor_shot",
    "razor_munitions",
    "recuperate",
    "reflex_draw",
    "ruinous_extension",
    "scorch",
    "secondary_wind",
    "seeker",
    "sharpened_bullets",
    "slip_magazine",
    "spry_sights",
    "steady_hands",
    "strafing_slide",
    "stunning_speed",
    "suppress",
    "sure_shot",
    "tainted_clip",
    "target_cracker",
    "targeting_subsystem",
    "trick_mag",
    "auger_strike",
    "berserker",
    "blood_rush",
    "body_count",
    "buzz_kill",
    "collision_force",
    "condition_overload",
    "corrupt_charge",
    "dispatch_overdrive",
    "drifting_contact",
    "enduring_affliction",
    "enduring_strike",
    "energy_channel",
    "fever_strike",
    "finishing_touch",
    "focus_energy",
    "focused_defense",
    "fury",
    "guardian_derision",
    "healing_return",
    "heavy_trauma",
    "jagged_edge",
    "killing_blow",
    "lasting_sting",
    "life_strike",
    "maiming_strike",
    "melee_prowess",
    "molten_impact",
    "north_wind",
    "organ_shatter",
    "parry",
    "power_throw",
    "pressure_point",
    "primed_heavy_trauma",
    "primed_pressure_point",
    "primed_reach",
    "relentless_combination",
    "quick_return",
    "quickening",
    "reach",
    "rebound",
    "reflex_coil",
    "rending_strike",
    "shocking_touch",
    "smite_corpus",
    "smite_grineer",
    "smite_infested",
    "spoiled_strike",
    "sundering_strike",
    "seismic_wave",
    "true_punishment",
    "true_steel",
    "vicious_frost",
    "virulent_scourge",
    "volcanic_edge",
    "voltaic_strike",
    "weeping_wounds",
    "whirlwind",
    "accelerated_deflection",
    "ammo_case",
    "animal_instinct",
    "arc_coil",
    "calculated_redirection",
    "calculated_shot",
    "coolant_leak",
    "crowd_dispersion",
    "detect_vulnerability",
    "electro_pulse",
    "enhanced_vitality",
    "fatal_attraction",
    "fired_up",
    "ghost",
    "guardian",
    "investigator",
    "looter",
    "medi_ray",
    "metal_fiber",
    "molecular_conversion",
    "primed_regen",
    "regen",
    //"retarget",
    "revenge",
    "sacrifice",
    "sanctuary",
    "shield_charger",
    "self_destruct",
    "spare_parts",
    "striker",
    "swift_deth",
    "targeting_receptor",
    "thumper",
    "vaporize",
    "vacuum",
    "warrior",
    "animal_instinct",
    "bite",
    "dig",
    "hastened_deflection",
    "ferocity",
    "howl",
    "hunt",
    "link_armor",
    "link_health",
    "link_shields",
    "loyal_companion",
    "maul",
    "neutralize",
    "pack_leader",
    "protect",
    "retrieve",
    "savagery",
    "shelter",
    "scavenge",
    "stalk",
    "unleashed",
    "medi_pet_kit",
    "brief_respite",
    "corrosive_projection",
    "dead_eye",
    "emp_aura",
    "empowered_blades",
    "enemy_radar",
    "energy_siphon",
    "growing_power",
    "infested_impedance",
    "loot_detector",
    "physique",
    "pistol_amp",
    "pistol_scavenger",
    "rejuvenation",
    "rifle_amp",
    "rifle_scavenger",
    "shield_disruption",
    "shotgun_amp",
    "shotgun_scavenger",
    "sniper_scavenger",
    "speed_holster",
    "sprint_boost",
    "stand_united",
    "steel_charge",
    "astral_twilight",
    "atlantis_vulcan",
    "bleeding_willow",
    "blind_justice",
    "brutal_tide",
    "bullet_dance",
    "burning_wasp",
    "carving_mantis",
    "clashing_forest",
    "cleaving_whirlwind",
    "coiling_viper",
    "crimson_dervish",
    "crossing_snakes",
    "crushing_ruin",
    "cyclone_kraken",
    "decisive_judgement",
    "defiled_snapdragon",
    "eleventh_storm",
    "fateful_truth",
    "final_harbinger",
    "flailing_branch",
    "four_riders",
    "fracturing_wind",
    "gaias_tragedy",
    "gemini_cross",
    "gleaming_talon",
    "gnashing_payara",
    "grim_fury",
    "high_noon",
    "homing_fang",
    "iron_phoenix",
    "malicious_raptor",
    "pointed_wind",
    "reaping_spiral",
    "rending_crane",
    "seismic_palm",
    "shattering_storm",
    "shimmering_blight",
    "sinking_talon",
    "sovereign_outcast",
    "spinning_needle",
    "stalking_fan",
    "stinging_thorn",
    "sundering_weave",
    "swirling_tiger",
    "swooping_falcon",
    "tempo_royale",
    "tranquil_cleave",
    "twirling_spire",
    "vengeful_revenant",
    "vermilion_storm",
    "vulpine_mask",
    "argon_plating",
    "auxiliary_power",
    "efficient_transferral",
    "energy_amplifier",
    "energy_inversion",
    "enhanced_durability",
    "hyperion_thrusters",
    "morphic_transformer",
    "primed_morphic_transformer",
    "superior_defenses",
    "system_reroute",
    "automatic_trigger",
    "combustion_rounds",
    "comet_blast",
    "dual_rounds",
    "electrified_barrel",
    "hollowed_bullets",
    "magazine_extension",
    "magma_chamber",
    "modified_munitions",
    "parallax_scope",
    "polar_magazine",
    "quasar_drill",
    "rubedo_lined_barrel",
    "shell_rush",
    "venomous_clip",
    "zodiac_shred",
    "astral_slash",
    "blazing_steel",
    "bleeding_edge",
    "cutting_edge",
    "extend",
    "furor",
    "galvanized_blade",
    "glacial_edge",
    "meteor_crash",
    "nebula_bore",
    "poisonous_sting",
    "searing_steel",
    "sudden_impact",
    "tempered_blade",
    "venomous_clip",
    "zodiac_shred",
    "primed_chamber",
    "augur_accord",
    "augur_message",
    "augur_pact",
    "augur_reach",
    "augur_secrets",
    "augur_seeker",
    "gladiator_aegis",
    "gladiator_finesse",
    "gladiator_might",
    "gladiator_resolve",
    "gladiator_rush",
    "gladiator_vice",
    "hunter_adrenaline",
    "hunter_command",
    "hunter_munitions",
    "hunter_recovery",
    "hunter_synergy",
    "hunter_track",
    "vigilante_armaments",
    "vigilante_fervor",
    "vigilante_offense",
    "vigilante_pursuit",
    "vigilante_vigor",
    "vigilante_supplies",
];

exports.item_db = item_db;
exports.mod_db = mod_db;