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
    }),

    selectedEdge: new fields.StringField({ initial: '' }),
    selectedEdgePerk: new fields.StringField({ initial: '' }),

    edges: new fields.SchemaField({
      arsenal: createEdgeSchema(),
      fleet: createEdgeSchema(),
      ordnance: createEdgeSchema(),
      library: createEdgeSchema(),
      improvisedgear: createEdgeSchema(),
      globalaccess: createEdgeSchema(),
      dronejockey: createEdgeSchema(),
      beastwhisperer: createEdgeSchema(),
      sensetheunnatural: createEdgeSchema(),
      repeltheunnatural: createEdgeSchema(),
      thwarttheunnatural: createEdgeSchema(),
      artifact: createEdgeSchema()
    })
  }
}

function createEdgeSchema() {
  return new fields.SchemaField({
    description: new fields.StringField({ initial: '' }),
    value: new fields.NumberField({ initial: 0 }),
    perks: new fields.ArrayField(new fields.ObjectField()),
    pools: new fields.ArrayField(new fields.ObjectField()),
    visible: new fields.BooleanField({ initial: false }),
    selected: new fields.BooleanField({ initial: false })
  })
}
