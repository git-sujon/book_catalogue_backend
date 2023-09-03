export type IOrderData ={
    userId: string;
    status: "pending" | "shipped" | "delivered"; 
    orderedBooks: OrderedBookData[];
  }
  
 export type OrderedBookData = {
    bookId: string;
    quantity: number;
  }
  