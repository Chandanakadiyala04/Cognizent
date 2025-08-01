import React from 'react';

const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const BookDetails = () => {
  return (
    <>
      <h3><strong>Book Details</strong></h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.bname} - ₹{book.price}</li>
        ))}
      </ul>
    </>
  );
};

export default BookDetails;
