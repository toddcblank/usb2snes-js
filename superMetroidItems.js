/**
Useful constants for SM item locations, memory addresses, routes, etc
*/

class SuperMetroidItem
{
    constructor(area, name, address, itemType, value, id)
    {
        this.Area = area;
        this.Name = name;
        this.Address = address;
        this.ItemType = itemType;
        this.Value = value;
        this.id = id;
    }
}

//majors
var MORPH_BALL = new SuperMetroidItem("Brinstar", "Morphing Ball", "d873", "MAJOR", 0x04, 0);
var BOMBS = new SuperMetroidItem("Crateria", "Bomb", "d870", "MAJOR", 0x80, 1);
var CHARGE_BEAM = new SuperMetroidItem("Brinstar", "Charge Beam", "d872", "MAJOR", 0x80, 2);
var X_RAY = new SuperMetroidItem("Brinstar", "X-Ray Scope", "d874", "MAJOR", 0x40, 3);
var SPAZER = new SuperMetroidItem("Brinstar", "Spazer", "d875", "MAJOR", 0x04, 4);
var VARIA = new SuperMetroidItem("Brinstar", "Varia Suit", "d876", "MAJOR", 0x01, 5);
var ICE_BEAM = new SuperMetroidItem("Norfair", "Ice Beam", "d876", "MAJOR", 0x04, 6);
var HI_JUMP_BOOTS = new SuperMetroidItem("Norfair", "Hi-Jump Boots", "d876", "MAJOR", 0x20, 7);
var GRAPPLE_BEAM = new SuperMetroidItem("Norfair", "Grapple Beam", "d877", "MAJOR", 0x10, 8);
var SPEED_BOOSTER = new SuperMetroidItem("Norfair", "Speed Booster", "d878", "MAJOR", 0x04, 9);
var WAVE_BEAM = new SuperMetroidItem("Norfair", "Wave Beam", "d878", "MAJOR", 0x10, 10);
var SCREW_ATTACK = new SuperMetroidItem("Norfair", "Screw Attack", "d879", "MAJOR", 0x80, 11);
var GRAVITY_SUIT = new SuperMetroidItem("WreckedShip", "Gravity Suit", "d880", "MAJOR", 0x80, 12);
var PLASMA_BEAM = new SuperMetroidItem("Maridia", "Plasma Beam", "d881", "MAJOR", 0x80, 13);
var SPRING_BALL = new SuperMetroidItem("Maridia", "Spring Ball", "d882", "MAJOR", 0x40, 14);
var SPACE_JUMP = new SuperMetroidItem("Maridia", "Space Jump", "d883", "MAJOR", 0x04, 15);

//Cratria
var PBS_CRATERIA = new SuperMetroidItem("Crateria", "Power Bomb (Crateria surface)", "d870", "POWER_BOMB", 0x01, 16);
var MISSILES_OCEAN_BOTTOM = new SuperMetroidItem("Crateria", "Missile (outside Wrecked Ship bottom)", "d870", "MISSILE", 0x02, 17);
var MISSILES_OCEAN_TOP = new SuperMetroidItem("Crateria", "Missile (outside Wrecked Ship top)", "d870", "MISSILE", 0x04, 18);
var MISSILES_OCEAN_MID = new SuperMetroidItem("Crateria", "Missile (outside Wrecked Ship middle)", "d870", "MISSILE", 0x08, 19);
var MISSILES_MOAT = new SuperMetroidItem("Crateria", "Missile (Crateria moat)", "d870", "MISSILE", 0x10, 20);
var ET_GAUNTLET = new SuperMetroidItem("Crateria", "Energy Tank, Gauntlet", "d870", "ENERGY_TANK", 0x20, 21);
var MISSILES_MOTHER_BRAIN = new SuperMetroidItem("Crateria", "Missile (Mother Brain)", "d870", "MISSILE", 0x40, 22);
var ET_TERMINATOR = new SuperMetroidItem("Crateria", "Energy Tank, Terminator", "d871", "ENERGY_TANK", 0x01, 23);
var MISSILES_GAUNTLET_RIGHT = new SuperMetroidItem("Crateria", "Missile (Crateria gauntlet right)", "d871", "MISSILE", 0x02, 24);
var MISSILES_GAUNTLET_LEFT = new SuperMetroidItem("Crateria", "Missile (Crateria gauntlet left)", "d871", "MISSILE", 0x04, 25);
var SUPER_CRATERIA = new SuperMetroidItem("Crateria", "Super Missile (Crateria)", "d871", "SUPER", 0x08, 26);
var MISSILES_DENTAL_PLAN = new SuperMetroidItem("Crateria", "Missile (Dental Plan)", "d871", "MISSILE", 0x10, 27);

//Brintar
var PB_ETECOON = new SuperMetroidItem("Brinstar", "Power Bomb (etecoon)", "d871", "POWER_BOMB", 0x20, 28);
var SUPER_SPO_SPO = new SuperMetroidItem("Brinstar", "Super Missile (Spore Spawn)", "d871", "SUPER", 0x40, 29);
var MISSILE_BELOW_EARLY_SUPER = new SuperMetroidItem("Brinstar", "Missile (below super missile)", "d871", "MISSILE", 0x80, 30);
var SUPER_EARLY_SUPER = new SuperMetroidItem("Brinstar", "Super Missile (green Brinstar top)", "d872", "SUPER", 0x01, 31);
var RESERVE_BRINSTAR = new SuperMetroidItem("Brinstar", "Reserve Tank, Brinstar", "d872", "RESERVE", 0x02, 32);
var MISSILE_BEHIND_MISSILE = new SuperMetroidItem("Brinstar", "Missile (green Brinstar behind missile)", "d872", "MISSILE", 0x04, 33);
var MISSILE_BEHIND_BR_RESERVE = new SuperMetroidItem("Brinstar", "Missile (green Brinstar behind reserve tank)", "d872", "MISSILE", 0x08, 34);
var MISSILE_PINK_BRIN_TOP = new SuperMetroidItem("Brinstar", "Missile (pink Brinstar top)", "d872", "MISSILE", 0x20, 35);
var MISSILE_CHARGE = new SuperMetroidItem("Brinstar", "Missile (pink Brinstar bottom)", "d872", "MISSILE", 0x40, 36);
var PB_MISSION_IMPOSSIBLE = new SuperMetroidItem("Brinstar", "Power Bomb (pink Brinstar)", "d873", "POWER_BOMB", 0x01, 37);
var MISSILE_GREEN_HILLS = new SuperMetroidItem("Brinstar", "Missile (green Brinstar pipe)", "d873", "MISSILE", 0x02, 38);
var PB_RETRO_BRINSTAR = new SuperMetroidItem("Brinstar", "Power Bomb (blue Brinstar)", "d873", "POWER_BOMB", 0x08, 39);
var MISSILE_RETRO_BRINSTAR = new SuperMetroidItem("Brinstar", "Missile (blue Brinstar middle)", "d873", "MISSILE", 0x10, 40);
var ET_CEILING = new SuperMetroidItem("Brinstar", "Energy Tank, Brinstar Ceiling", "d873", "ENERGY_TANK", 0x20, 41);
var ET_ETECOON = new SuperMetroidItem("Brinstar", "Energy Tank, Etecoons", "d873", "ENERGY_TANK", 0x40, 42);
var SUPER_ETECOON = new SuperMetroidItem("Brinstar", "Super Missile (green Brinstar bottom)", "d873", "SUPER", 0x80, 43);
var ET_WATERWAY = new SuperMetroidItem("Brinstar", "Energy Tank, Waterway", "d874", "ENERGY_TANK", 0x02, 44);
var MISSILE_FIRST_MISSILES = new SuperMetroidItem("Brinstar", "Missile (blue Brinstar bottom)", "d874", "MISSILE", 0x04, 45);
var ET_WAVE_GATE = new SuperMetroidItem("Brinstar", "Energy Tank, Brinstar Gate", "d874", "ENERGY_TANK", 0x08, 46);
var MISSILE_BILLY_MAYS_1 = new SuperMetroidItem("Brinstar", "Missile (blue Brinstar top)", "d874", "MISSILE", 0x10, 47);
var MISSILE_BILLY_MAYS_2 = new SuperMetroidItem("Brinstar", "Missile (blue Brinstar behind missile)", "d874", "MISSILE", 0x20, 48);
var PB_BETA = new SuperMetroidItem("Brinstar", "Power Bomb (red Brinstar sidehopper room)", "d874", "POWER_BOMB", 0x80, 49);
var PB_ALPHA = new SuperMetroidItem("Brinstar", "Power Bomb (red Brinstar spike room)", "d875", "POWER_BOMB", 0x01, 50);
var MISSILE_ALPHA_PB = new SuperMetroidItem("Brinstar", "Missile (red Brinstar spike room)", "d875", "MISSILE", 0x02, 51);
var ET_KRAID = new SuperMetroidItem("Brinstar", "Energy Tank, Kraid", "d875", "ENERGY_TANK", 0x08, 52);
var MISSILE_KRAID = new SuperMetroidItem("Brinstar", "Missile (Kraid)", "d875", "MISSILE", 0x10, 53);

//Norfir
var MISSILE_CATHEDRAL = new SuperMetroidItem("Norfair", "Missile (cathedral)", "d876", "MISSILE", 0x02, 54);
var MISSILE_CRUMBLE_SHAFT = new SuperMetroidItem("Norfair", "Missile (crumble shaft)", "d876", "MISSILE", 0x08, 55);
var ET_CROC = new SuperMetroidItem("Norfair", "Energy Tank, Crocomire", "d876", "ENERGY_TANK", 0x10, 56);
var MISSILE_CROC_ESCAPE = new SuperMetroidItem("Norfair", "Missile (Crocomire escape)", "d876", "MISSILE", 0x40, 57);
var MISSILE_HJ = new SuperMetroidItem("Norfair", "Missile (Hi-Jump Boots)", "d876", "MISSILE", 0x80, 58);
var ET_HJ = new SuperMetroidItem("Norfair", "Energy Tank (Hi-Jump Boots)", "d877", "ENERGY_TANK", 0x01, 59);
var PB_CROC = new SuperMetroidItem("Norfair", "Power Bomb (Crocomire)", "d877", "POWER_BOMB", 0x02, 60);
var MISSILE_BELOW_CROC = new SuperMetroidItem("Norfair", "Missile (below Crocomire)", "d877", "MISSILE", 0x04, 61);
var MISSILE_GRAPPLE = new SuperMetroidItem("Norfair", "Missile (Grapple Beam)", "d877", "MISSILE", 0x08, 62);
var RESERVE_NORFAIR = new SuperMetroidItem("Norfair", "Reserve Tank, Norfair", "d877", "RESERVE", 0x20, 63);
var MISSILE_NORFAIR_RESERVE = new SuperMetroidItem("Norfair", "Missile (Norfair Reserve Tank)", "d877", "MISSILE", 0x40, 64);
var MISSILE_GREEN_BUBBLES = new SuperMetroidItem("Norfair", "Missile (bubble Norfair green door)", "d877", "MISSILE", 0x80, 65);
var MISSILE_BUBBLE_MTN = new SuperMetroidItem("Norfair", "Missile (bubble Norfair)", "d878", "MISSILE", 0x01, 66);
var MISSILE_SPEED_BOOSTER = new SuperMetroidItem("Norfair", "Missile (Speed Booster)", "d878", "MISSILE", 0x02, 67);
var MISSILE_WAVE = new SuperMetroidItem("Norfair", "Missile (Wave Beam)", "d878", "MISSILE", 0x08, 68);
var MISSILE_GT = new SuperMetroidItem("Norfair", "Missile (Gold Torizo)", "d878", "MISSILE", 0x40, 69);
var SUPER_GT = new SuperMetroidItem("Norfair", "Super Missile (Gold Torizo)", "d878", "SUPER", 0x80, 70);
var MISSILE_MICKEY_MOUSE = new SuperMetroidItem("Norfair", "Missile (Mickey Mouse room)", "d879", "MISSILE", 0x02, 71);
var MISSILE_SPRINGBALL_MAZE = new SuperMetroidItem("Norfair", "Missile (lower Norfair above fire flea room)", "d879", "MISSILE", 0x04, 72);
var PB_SPRINGBALL_MAZE = new SuperMetroidItem("Norfair", "Power Bomb (lower Norfair above fire flea room)", "d879", "POWER_BOMB", 0x08, 73);
var PB_OF_SHAME = new SuperMetroidItem("Norfair", "Power Bomb (Power Bombs of shame)", "d879", "POWER_BOMB", 0x10, 74);
var MISSILE_FRANKER_Z = new SuperMetroidItem("Norfair", "Missile (lower Norfair near Wave Beam)", "d879", "MISSILE", 0x20, 75);
var ET_RIDLEY = new SuperMetroidItem("Norfair", "Energy Tank, Ridley", "d879", "ENERGY_TANK", 0x40, 76);
var ET_FIREFLEA = new SuperMetroidItem("Norfair", "Energy Tank, Firefleas", "d87a", "ENERGY_TANK", 0x01, 77);

//Wreced Ship
var MISSILE_MAIN_SHAFT = new SuperMetroidItem("WreckedShip", "Missile (Wrecked Ship middle)", "d880", "MISSILE", 0x01, 78);
var RESERVE_WRECKED_SHIP = new SuperMetroidItem("WreckedShip", "Reserve Tank, Wrecked Ship", "d880", "RESERVE", 0x02, 79);
var MISSILE_GRAVITY = new SuperMetroidItem("WreckedShip", "Missile (Gravity Suit)", "d880", "MISSILE", 0x04, 80);
var MISSILE_ROBOT_ROOM = new SuperMetroidItem("WreckedShip", "Missile (Wrecked Ship top)", "d880", "MISSILE", 0x08, 81);
var ET_WS = new SuperMetroidItem("WreckedShip", "Energy Tank, Wrecked Ship", "d880", "ENERGY_TANK", 0x10, 82);
var SUPER_WS_LEFT = new SuperMetroidItem("WreckedShip", "Left Super, Wrecked Ship", "d880", "SUPER", 0x20, 83);
var SUPER_WS_RIGHT = new SuperMetroidItem("WreckedShip", "Right Super, Wrecked Ship", "d880", "SUPER", 0x40, 84);

//Maridia
var MISSILE_MAIN_ST = new SuperMetroidItem("Maridia", "Missile (green Maridia shinespark)", "d881", "MISSILE", 0x01, 85);
var SUPER_CRABS = new SuperMetroidItem("Maridia", "Super Missile (green Maridia)", "d881", "SUPER", 0x02, 86);
var ET_MAMA_TURTLE = new SuperMetroidItem("Maridia", "Energy Tank, Mama turtle", "d881", "ENERGY_TANK", 0x04, 87);
var MISSILE_MAMA_TURTLE = new SuperMetroidItem("Maridia", "Missile (green Maridia tatori)", "d881", "MISSILE", 0x08, 88);
var SUPER_BEACH = new SuperMetroidItem("Maridia", "Super Missile (yellow Maridia)", "d881", "SUPER", 0x10, 89);
var MISSILE_BEACH = new SuperMetroidItem("Maridia", "Missile (yellow Maridia super missile)", "d881", "MISSILE", 0x20, 90);
var MISSILE_MARIDIA_FALSE_WALL = new SuperMetroidItem("Maridia", "Missile (yellow Maridia false wall)", "d881", "MISSILE", 0x40, 91);
var MISSILE_LEFT_SAND_PIT = new SuperMetroidItem("Maridia", "Missile (left Maridia sand pit room)", "d882", "MISSILE", 0x01, 92);
var RESERVE_MARIDIA = new SuperMetroidItem("Maridia", "Reserve Tank, Maridia", "d882", "RESERVE", 0x02, 93);
var MISSILE_RIGHT_SAND_PIT = new SuperMetroidItem("Maridia", "Missile (right Maridia sand pit room)", "d882", "MISSILE", 0x04, 94);
var PB_RIGHT_SAND_PIT = new SuperMetroidItem("Maridia", "Power Bomb (right Maridia sand pit room)", "d882", "POWER_BOMB", 0x08, 95);
var MISSILE_AQUADUCT = new SuperMetroidItem("Maridia", "Missile (Aquaduct)", "d882", "MISSILE", 0x10, 96);
var SUPER_AQUADUCT = new SuperMetroidItem("Maridia", "Super Missile (Aquaduct )", "d882", "SUPER", 0x20, 97);
var MISSILE_PRECIOUS_ROOM = new SuperMetroidItem("Maridia", "Missile (Precious Room)", "d882", "MISSILE", 0x80, 98);
var ET_BOTWOON = new SuperMetroidItem("Maridia", "Energy Tank, Botwoon", "d883", "ENERGY_TANK", 0x01, 99);

var ALL_ITEMS = [
    MORPH_BALL,
    BOMBS,
    CHARGE_BEAM,
    X_RAY,
    SPAZER,
    VARIA,
    ICE_BEAM,
    HI_JUMP_BOOTS,
    GRAPPLE_BEAM,
    SPEED_BOOSTER,
    WAVE_BEAM,
    SCREW_ATTACK,
    GRAVITY_SUIT,
    PLASMA_BEAM,
    SPRING_BALL,
    SPACE_JUMP,
    PBS_CRATERIA,
    MISSILES_OCEAN_BOTTOM,
    MISSILES_OCEAN_TOP,
    MISSILES_OCEAN_MID,
    MISSILES_MOAT,
    ET_GAUNTLET,
    MISSILES_MOTHER_BRAIN,
    ET_TERMINATOR,
    MISSILES_GAUNTLET_RIGHT,
    MISSILES_GAUNTLET_LEFT,
    SUPER_CRATERIA,
    MISSILES_DENTAL_PLAN,
    PB_ETECOON,
    SUPER_SPO_SPO,
    MISSILE_BELOW_EARLY_SUPER,
    SUPER_EARLY_SUPER,
    RESERVE_BRINSTAR,
    MISSILE_BEHIND_MISSILE,
    MISSILE_BEHIND_BR_RESERVE,
    MISSILE_PINK_BRIN_TOP,
    MISSILE_CHARGE,
    PB_MISSION_IMPOSSIBLE,
    MISSILE_GREEN_HILLS,
    PB_RETRO_BRINSTAR,
    MISSILE_RETRO_BRINSTAR,
    ET_CEILING,
    ET_ETECOON,
    SUPER_ETECOON,
    ET_WATERWAY,
    MISSILE_FIRST_MISSILES,
    ET_WAVE_GATE,
    MISSILE_BILLY_MAYS_1,
    MISSILE_BILLY_MAYS_2,
    PB_BETA,
    PB_ALPHA,
    MISSILE_ALPHA_PB,
    ET_KRAID,
    MISSILE_KRAID,
    MISSILE_CATHEDRAL,
    MISSILE_CRUMBLE_SHAFT,
    ET_CROC,
    MISSILE_CROC_ESCAPE,
    MISSILE_HJ,
    ET_HJ,
    PB_CROC,
    MISSILE_BELOW_CROC,
    MISSILE_GRAPPLE,
    RESERVE_NORFAIR,
    MISSILE_NORFAIR_RESERVE,
    MISSILE_GREEN_BUBBLES,
    MISSILE_BUBBLE_MTN,
    MISSILE_SPEED_BOOSTER,
    MISSILE_WAVE,
    MISSILE_GT,
    SUPER_GT,
    MISSILE_MICKEY_MOUSE,
    MISSILE_SPRINGBALL_MAZE,
    PB_SPRINGBALL_MAZE,
    PB_OF_SHAME,
    MISSILE_FRANKER_Z,
    ET_RIDLEY,
    ET_FIREFLEA,
    MISSILE_MAIN_SHAFT,
    RESERVE_WRECKED_SHIP,
    MISSILE_GRAVITY,
    MISSILE_ROBOT_ROOM,
    ET_WS,
    SUPER_WS_LEFT,
    SUPER_WS_RIGHT,
    MISSILE_MAIN_ST,
    SUPER_CRABS,
    ET_MAMA_TURTLE,
    MISSILE_MAMA_TURTLE,
    SUPER_BEACH,
    MISSILE_BEACH,
    MISSILE_MARIDIA_FALSE_WALL,
    MISSILE_LEFT_SAND_PIT,
    RESERVE_MARIDIA,
    MISSILE_RIGHT_SAND_PIT,
    PB_RIGHT_SAND_PIT,
    MISSILE_AQUADUCT,
    SUPER_AQUADUCT,
    MISSILE_PRECIOUS_ROOM,
    ET_BOTWOON,
];

let ROUTE_100_EARLY_CROC = [
    MORPH_BALL.id,
    MISSILE_FIRST_MISSILES.id,
    BOMBS.id,
    ET_TERMINATOR.id,
    SUPER_EARLY_SUPER.id,
    RESERVE_BRINSTAR.id,
    MISSILE_BEHIND_BR_RESERVE.id,
    MISSILE_BEHIND_MISSILE.id,
    MISSILE_BELOW_EARLY_SUPER.id,
    CHARGE_BEAM.id,
    SPAZER.id,
    VARIA.id,
    ET_KRAID.id,
    ET_HJ.id,
    HI_JUMP_BOOTS.id,
    MISSILE_HJ.id,
    MISSILE_CATHEDRAL.id,
    MISSILE_SPEED_BOOSTER.id,
    SPEED_BOOSTER.id,
    MISSILE_WAVE.id,
    WAVE_BEAM.id,
    ET_CROC.id,
    PB_CROC.id,
    GRAPPLE_BEAM.id,
    MISSILE_GRAPPLE.id,
    MISSILE_BELOW_CROC.id,
    MISSILE_CROC_ESCAPE.id,
    PB_ALPHA.id,
    MISSILE_ALPHA_PB.id,
    PB_BETA.id,
    MISSILES_MOAT.id,
    MISSILE_MAIN_SHAFT.id,
    SUPER_WS_RIGHT.id,
    SUPER_WS_LEFT.id,
    ET_WS.id,
    MISSILE_ROBOT_ROOM.id,
    MISSILES_OCEAN_TOP.id,
    MISSILES_OCEAN_MID.id,
    MISSILE_GRAVITY.id,
    RESERVE_WRECKED_SHIP.id,
    GRAVITY_SUIT.id,
    MISSILES_OCEAN_BOTTOM.id,
    PBS_CRATERIA.id,
    ET_GAUNTLET.id,
    MISSILES_GAUNTLET_RIGHT.id,
    MISSILES_GAUNTLET_LEFT.id,
    ET_ETECOON.id,
    SUPER_ETECOON.id,
    PB_ETECOON.id,
    MISSILE_PINK_BRIN_TOP.id,
    PB_MISSION_IMPOSSIBLE.id,
    SUPER_SPO_SPO.id,
    ET_WAVE_GATE.id,
    MISSILE_CHARGE.id,
    ET_WATERWAY.id,
    MISSILE_GREEN_HILLS.id,
    MISSILE_MAIN_ST.id,
    ET_MAMA_TURTLE.id,
    MISSILE_MAMA_TURTLE.id,
    SUPER_CRABS.id,
    MISSILE_MARIDIA_FALSE_WALL.id,
    SUPER_BEACH.id,
    MISSILE_BEACH.id,
    MISSILE_PRECIOUS_ROOM.id,
    SPACE_JUMP.id,
    MISSILE_AQUADUCT.id,
    SUPER_AQUADUCT.id,
    MISSILE_RIGHT_SAND_PIT.id,
    PB_RIGHT_SAND_PIT.id,
    SPRING_BALL.id,
    PLASMA_BEAM.id,
    ET_BOTWOON.id,
    MISSILE_LEFT_SAND_PIT.id,
    RESERVE_MARIDIA.id,
    MISSILE_KRAID.id,
    ICE_BEAM.id,
    MISSILE_CRUMBLE_SHAFT.id,
    MISSILE_GT.id,
    SUPER_GT.id,
    SCREW_ATTACK.id,
    MISSILE_MICKEY_MOUSE.id,
    PB_OF_SHAME.id,
    ET_RIDLEY.id,
    ET_FIREFLEA.id,
    MISSILE_SPRINGBALL_MAZE.id,
    PB_SPRINGBALL_MAZE.id,
    MISSILE_FRANKER_Z.id,
    MISSILE_GREEN_BUBBLES.id,
    RESERVE_NORFAIR.id,
    MISSILE_NORFAIR_RESERVE.id,
    MISSILE_BUBBLE_MTN.id,
    X_RAY.id,
    PB_RETRO_BRINSTAR.id,
    ET_CEILING.id,
    MISSILE_BILLY_MAYS_1.id,
    MISSILE_BILLY_MAYS_2.id,
    MISSILE_RETRO_BRINSTAR.id,
    MISSILES_MOTHER_BRAIN.id,            
    SUPER_CRATERIA.id,
    MISSILES_DENTAL_PLAN.id,
];
