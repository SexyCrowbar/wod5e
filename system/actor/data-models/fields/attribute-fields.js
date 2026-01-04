const fields = foundry.data.fields

export const attributeFields = {
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

export const standardDiceFields = {
  physical: createAttributeSchema(),
  social: createAttributeSchema(),
  mental: createAttributeSchema()
}

function createAttributeSchema() {
  return new fields.SchemaField({
    value: new fields.NumberField({ initial: 1 })
  })
}
