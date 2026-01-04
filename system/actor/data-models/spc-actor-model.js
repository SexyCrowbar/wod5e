import { WoDActorModel } from './base-actor-model.js'
import { standardDiceFields } from './fields/attribute-fields.js'
import { hunterFields } from './fields/hunter-fields.js'
import { skillFields } from './fields/skill-fields.js'
import { vampireFields } from './fields/vampire-fields.js'
import { werewolfFields } from './fields/werewolf-fields.js'

export class SPCActorModel extends WoDActorModel {
  static defineSchema() {
    const fields = foundry.data.fields

    const schema = {}

    // The type of group
    schema.spcType = new fields.StringField({ initial: 'mortal' })

    // Manifestation
    schema.manifestation = new fields.HTMLField({ initial: '' })

    // Power
    schema.power = new fields.SchemaField({
      value: new fields.NumberField({ initial: 0 })
    })

    // General Difficulty
    schema.generaldifficulty = new fields.SchemaField({
      normal: new fields.NumberField({ initial: 0 }),
      strongest: new fields.NumberField({ initial: 0 })
    })

    // Header fields
    schema.headers = new fields.SchemaField({
      concept: new fields.StringField({ initial: '' })
    })

    // Standard Dice fields
    schema.standarddicepools = new fields.SchemaField(standardDiceFields())

    // Exceptional Dice fields
    schema.exceptionaldicepools = new fields.SchemaField(skillFields())

    // Settings
    schema.settings = new fields.SchemaField({
      enableGifts: new fields.BooleanField({ initial: false }),
      enableDisciplines: new fields.BooleanField({ initial: false }),
      enableEdges: new fields.BooleanField({ initial: false }),
      generalDifficultyEnabled: new fields.BooleanField({ initial: true })
    })

    // Splat-specific fields
    Object.assign(schema, vampireFields())
    Object.assign(schema, werewolfFields())
    Object.assign(schema, hunterFields())

    return schema
  }
}
