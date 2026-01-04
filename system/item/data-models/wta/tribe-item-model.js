import { WoDItemModel } from '../base-item-model.js'

export class TribeItemModel extends WoDItemModel {
  static defineSchema() {
    const fields = foundry.data.fields

    const schema = super.defineSchema()

    return schema
  }
}
