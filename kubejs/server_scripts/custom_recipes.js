onEvent("recipes", (event) => {
  event.recipes.createCrushing(
    [
      "forbidden_arcanus:arcane_crystal",
      Item.of("forbidden_arcanus:arcane_crystal").withChance(0.2),
      Item.of("minecraft:cobblestone").withChance(0.34),
    ],
    "forbidden_arcanus:arcane_crystal_ore"
  );
});

onEvent("recipes", (event) => {
  event.recipes.createCrushing(
    [
      "forbidden_arcanus:arcane_crystal",
      Item.of("forbidden_arcanus:arcane_crystal").withChance(0.2),
      Item.of("minecraft:cobbled_deepslate").withChance(0.25),
    ],
    "forbidden_arcanus:deepslate_arcane_crystal_ore"
  );
});

onEvent("recipes", (event) => {
  event.recipes.createCrushing(
    [
      "forbidden_arcanus:xpetrified_orb",
      Item.of("forbidden_arcanus:xpetrified_orb").withChance(0.2),
      Item.of("minecraft:cobblestone").withChance(0.12),
    ],
    "forbidden_arcanus:xpetrified_ore"
  );
});

onEvent("recipes", (event) => {
  event.recipes.createCrushing(
    ["forbidden_arcanus:stella_arcanum"],
    "forbidden_arcanus:stella_arcanum"
  );
});

onEvent("recipes", (event) => {
  event.recipes.createCrushing(
    [
      "forbidden_arcanus:rune",
      Item.of("forbidden_arcanus:rune").withChance(0.4),
      Item.of("forbidden_arcanus:darkstone").withChance(0.25),
    ],
    "forbidden_arcanus:runic_darkstone"
  );
});

onEvent("recipes", (event) => {
  event.recipes.createCrushing(
    [
      "forbidden_arcanus:rune",
      Item.of("forbidden_arcanus:rune").withChance(0.4),
      Item.of("minecraft:cobbled_deepslate").withChance(0.25),
    ],
    "forbidden_arcanus:runic_deepslate"
  );
});

onEvent("recipes", (event) => {
  event.recipes.createCrushing(
    [
      "forbidden_arcanus:rune",
      Item.of("forbidden_arcanus:rune").withChance(0.4),
      Item.of("minecraft:cobblestone").withChance(0.25),
    ],
    "forbidden_arcanus:runic_stone"
  );
});
