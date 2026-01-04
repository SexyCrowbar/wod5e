const fields = foundry.data.fields

export const settingFields = {
  settings: new fields.SchemaField({
    headerbg: new fields.StringField({ initial: '' }),
    background: new fields.StringField({ initial: '' }),

    limited: new fields.SchemaField({
      biography: new fields.BooleanField({ initial: true }),
      appearance: new fields.BooleanField({ initial: true }),
      touchstones: new fields.BooleanField({ initial: false }),
      tenets: new fields.BooleanField({ initial: false })
    }),

    skillAttributeInputs: new fields.BooleanField({ initial: false })
  })
}
