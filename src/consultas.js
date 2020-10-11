/** Realizaremos diferentes consultas en función de los campos añadidos y se mostrarán los resultados, utlizaremos diferentes query selectors */

/**Selector %eq */
db.peliculas.find ({"director": {$eq: "Neil Marshall"}}).pretty()
{
    "_id" : ObjectId("5f8306939dcbae23b4b0f68d"),
    "titulo" : "Hellboy",
    "año" : 2019,
    "director" : "Neil Marshall",
    "puntuacion" : 4.7,
    "genero" : "Acción/Fantasia"
}
{
    "_id" : ObjectId("5f8306939dcbae23b4b0f68e"),
    "titulo" : "Doomsday",
    "año" : 2008,
    "director" : "Neil Marshall",
    "puntuacion" : 4.6,
    "genero" : "Acción/Ciencia ficción"
}
{
    "_id" : ObjectId("5f8306939dcbae23b4b0f68f"),
    "titulo" : "The Descent",
    "año" : 2005,
    "director" : "Neil Marshall",
    "puntuacion" : 6,
    "genero" : "Terror/Suspenso"
}
/**Selector $gt */
db.peliculas.find ({"puntuacion": {$gt: 6.5}}).pretty()
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f68c"),    
        "titulo" : "Resident Evil",
        "año" : 2002,
        "director" : "Paul W. S. Anderson",
        "puntuacion" : 6.7,
        "genero" : "Terror/Acción"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f695"),    
        "titulo" : "28 días después",
        "año" : 2002,
        "director" : "Danny Boyle",
        "puntuacion" : 6.7,
        "genero" : "Terror/Ciencia ficción"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f699"),    
        "titulo" : "Deadpool",
        "año" : 2016,
        "director" : "Tim Miller",
        "puntuacion" : 6.8,
        "genero" : "Comedia/Acción"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f69c"),
        "titulo" : "Mad Max: Fury Road",
        "año" : 2015,
        "director" : "George Miller",
        "puntuacion" : 7.1,
        "genero" : "Acción/Aventura"
}
/**Selector $gte */
db.peliculas.find ({"año": {$gte: 2019}}).pretty() 
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f68d"),
        "titulo" : "Hellboy",
        "año" : 2019,
        "director" : "Neil Marshall",
        "puntuacion" : 4.7,
        "genero" : "Acción/Fantasia"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f69b"),
        "titulo" : "Shazam",
        "año" : 2019,
        "director" : "David F. Sandberg",
        "puntuacion" : 5.9,
        "genero" : "Comedia/Acción"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f69e"),
        "titulo" : "Proyect Power",
        "año" : 2020,
        "director" : "Henry Joost",
        "puntuacion" : 4.9,
        "genero" : "Acción/Fantasía"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f69f"),
        "titulo" : "Alita: Battle Angel",
        "año" : 2019,
        "director" : "Robert Rodriguez",
        "puntuacion" : 6.4,
        "genero" : "Acción/Ciencia ficción"
}
/**Selector $lt */
db.peliculas.find ({"puntuacion": {$lt: 4.7}}).pretty()
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f68e"),    
        "titulo" : "Doomsday",
        "año" : 2008,
        "director" : "Neil Marshall",
        "puntuacion" : 4.6,
        "genero" : "Acción/Ciencia ficción"
}
/**Selector $ne  */
db.peliculas.find ({"genero": {$ne: "Terror/Suspenso"}}).pretty()
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f68c"),
        "titulo" : "Resident Evil",
        "año" : 2002,
        "director" : "Paul W. S. Anderson",
        "puntuacion" : 6.7,
        "genero" : "Terror/Acción"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f68d"),
        "titulo" : "Hellboy",
        "año" : 2019,
        "director" : "Neil Marshall",
        "puntuacion" : 4.7,
        "genero" : "Acción/Fantasia"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f68e"),
        "titulo" : "Doomsday",
        "año" : 2008,
        "director" : "Neil Marshall",
        "puntuacion" : 4.6,
        "genero" : "Acción/Ciencia ficción"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f690"),
        "titulo" : "Resident Evil: Apocalipsis",
        "año" : 2004,
        "director" : "Alexander Witt",
        "puntuacion" : 5.2,
        "genero" : "Terror/Acción"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f691"),
        "titulo" : "Invasión a la Tierra",
        "año" : 2011,
        "director" : "Jonathan Liebesman",
        "puntuacion" : 5,
        "genero" : "Acción/Bélico"
}
{
        "_id" : ObjectId("5f8306939dcbae23b4b0f692"),
        "titulo" : "Rings",
        "año" : 2005,
        "director" : "Jonathan Liebesman",
        "puntuacion" : 5,
        "genero" : "Terror"
}