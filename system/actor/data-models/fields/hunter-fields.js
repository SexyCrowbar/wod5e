const fields = foundry.data.fields

export function hunterFields() {
  return {
    despair: new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 })
    }),

    desperation: new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 })
    }),

    danger: new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 }),
      max: new fields.NumberField({ initial: 0 })
    })
  }
}
