const ItemSchema = {
  name: 'Item',
  properties: {
    _id: 'string',
    type: 'string',
    description: 'string',
    amount: 'float',
    date: 'date',
  },
  primaryKey: '_id',
};

export default ItemSchema;
