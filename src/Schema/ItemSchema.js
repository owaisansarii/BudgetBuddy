const ItemSchema = {
  name: 'Item',
  properties: {
    _id: 'uuid',
    type: 'string',
    description: 'string',
    amount: 'int',
    date: 'date',
    time: 'string',
  },
  primaryKey: '_id',
};

export default ItemSchema;
