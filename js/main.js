


//Book class: Represent a Book
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
//UI class:Handle UI task
class UI{
    static displayBooks(){
      
        const storeBooks=[
            {
        title:'Book one',
        author:'john Doe',
        Isbn:'233432'
            },
            {
                title:'Book two',
                author:'jopjo Doe',
                Isbn:'233432'
                    },

                    {
                        title:'Book one',
                        author:'samha',
                        Isbn:'233432'
                            },
        ];

   const books=storeBooks;
    books.forEach((book)=>UI.addBookToList(book));

   
    }
     

     static addBookToList(book){
    const list=document.querySelector('#book-list');
    const row=document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td>  <a href="#" class="btn btn-danger btn-sm delete" > X  </a>   </td>

    `;
    list.appendChild(row);
  }

  static deleteBook(e){
      if(e.classList.contains('delete')){
        e.parentElement.parentElement.remove();

      }
  }
  static clearFields(){
      document.querySelector('#title').value='';
      document.querySelector('#author').value='';
      document.querySelector('#isbn').value='';

  }
  static showAlert(message,className){
      const div=document.createElement('div');
      const form=document.querySelector('#book-form');
      const container=document.querySelector('.container');
      div.className=`alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
     
    
      container.insertBefore(div,form);
      setTimeout(()=>document.querySelector('.alert').remove(),3000);

  }
    
} 
//Event:Add a Book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    //prevent Default
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;
    
//validate
if(title==='' ||author==='' ||isbn===''){
    UI.showAlert('please fill in all fielsds','danger');
}
else{
 //instinate book
 const book=new Book(title,author,isbn);
 UI.addBookToList(book);
//clear fields
UI.clearFields();
UI.showAlert('Book Added','succes');
}
   

});

//Event:Display Books
document.addEventListener("DomContentLoaded",UI.displayBooks);
//Event:Remove a Book
document.querySelector('#book-list').addEventListener('click',(e)=>{
 UI.deleteBook(e.target);
});