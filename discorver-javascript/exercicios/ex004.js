const booksByCategory = [
    {
        category: 'Riqueza',
        books:[
            { 
                title:"Os segredos da mente milionária",
                author: "T. Harv Eker",
            },

            {
                title:"O Homen mais rico da Babilonia",
                author: "George S. Classon",
            },

            { 
                title:"Pai Rico, Pai probre",
                author: "Robert George S. Classon",
            },
        ],
    },

    {

        category: 'Inteligência Emocional',
        books:[
            {
                title: "A Alegria de Ser",
                author: "Everaldo"
            },

            {
                title: "Sou Rico",
                author: "Everaldo Nascimento"
            },

            {
                title: "Dinheiro Venha",
                author: "Everaldo"
            },
        ],

    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)
for(let category of booksByCategory){
    console.log("Total de livros", category.category)
    console.log(category.books.length)
}


function countAuthors(){

    let authors = []

    for(let category of booksByCategory){

        for(let book of category.books){

            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }


        }

    }

    console.log("Total de Authors: ", authors.length)

}

countAuthors()


function booksOfAuthors(author){

    let books = []

    for(let category of booksByCategory){

        for(let book of category.books){

            if(book.author === author){
                books.push(book.title)
            }


        }

    }

    console.log(`Livros do autor ${author} : , ${books.join(",")}`)

}

booksOfAuthors("Everaldo")