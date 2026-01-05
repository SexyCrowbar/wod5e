const fields = foundry.data.fields

export function attributeFields() {
  return {
    strength: createAttributeSchema(),
    charisma: createAttributeSchema(),
    intelligence: createAttributeSchema(),
    dexterity: createAttributeSchema(),
    manipulation: createAttributeSchema(),
    wits: createAttributeSchema(),
    stamina: createAttributeSchema(),
    composure: createAttributeSchema(),
    resolve: createAttributeSchema()
  }
}

export function standardDiceFields() {
  return {
    physical: createAttributeSchema(),
    social: createAttributeSchema(),
    mental: createAttributeSchema()
  }
}

function createAttributeSchema() {
  return new fields.SchemaField({
    value: new fields.NumberField({ initial: 1 })
  })
}
