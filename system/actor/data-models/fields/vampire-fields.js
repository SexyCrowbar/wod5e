const fields = foundry.data.fields

export const vampireFields = {
  hunger: new fields.SchemaField({
    value: new fields.NumberField({ initial: 1 }),
    max: new fields.NumberField({ initial: 5 })
  }),

  humanity: new fields.SchemaField({
    value: new fields.NumberField({ initial: 7 }),
    stains: new fields.NumberField({ initial: 0 })
  })
}
