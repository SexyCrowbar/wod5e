const fields = foundry.data.fields

export const skillFields = {
  athletics: createSkillSchema(),
  animalken: createSkillSchema(),
  academics: createSkillSchema(),
  brawl: createSkillSchema(),
  etiquette: createSkillSchema(),
  awareness: createSkillSchema(),
  craft: createSkillSchema(),
  insight: createSkillSchema(),
  finance: createSkillSchema(),
  drive: createSkillSchema(),
  intimidation: createSkillSchema(),
  investigation: createSkillSchema(),
  firearms: createSkillSchema(),
  leadership: createSkillSchema(),
  medicine: createSkillSchema(),
  larceny: createSkillSchema(),
  performance: createSkillSchema(),
  occult: createSkillSchema(),
  melee: createSkillSchema(),
  persuasion: createSkillSchema(),
  politics: createSkillSchema(),
  stealth: createSkillSchema(),
  streetwise: createSkillSchema(),
  science: createSkillSchema(),
  survival: createSkillSchema(),
  subterfuge: createSkillSchema(),
  technology: createSkillSchema()
}

function createSkillSchema() {
  return new fields.SchemaField({
    value: new fields.NumberField({ initial: 1 })
  })
}
