export type OrderedBookData = {
  bookId: string;
  quantity: number;
};

export type IOrderData = {
  orderedBooks: OrderedBookData[];
};
