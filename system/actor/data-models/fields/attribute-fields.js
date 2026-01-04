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

function createAttributeSchema() {
  return new fields.SchemaField({
    value: new fields.NumberField({ initial: 1 })
  })
}
