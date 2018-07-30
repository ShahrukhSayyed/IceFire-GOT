# Angular Application - Game of Thrones 

Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop

Th following API documentation contains all information about a popular TV Series Game of
Thrones and its related book series.

https://anapioficeandfire.com/

“An API of Ice And Fire is the world's greatest source for quantified and structured data
from the universe of Ice and Fire (and the HBO series Game of Thrones)”


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Note : You can skip this steps if you have Node ,npm and angularCLI installed on your system.


1) To start with this, install node and npm

* [NodeJs](https://nodejs.org/en/) - How to install node?

2) Install git 


* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - How to install Git?

3) Use npm to install Angular CLI . Exceute this command

```
>npm install -g @angular/cli
```

 
### Installing/ Running locally


1) Create a folder named as got-app at any local drive

2) change directory to got-app

```
>cd got-app
```

3) Fetch the source code from my github library
 
```
>git init
```

```
>git remote add origin https://github.com/ShahrukhSayyed/IceFire-GOT.git
```

```
>git pull origin master
```

4) Install all the modules required to run the given application with following command

```
>npm install
```

5) Run the application by using following command

```
>ng serve --open
```

6) Visit to address http://localhost:4200/ via browser . You will see the application is running.


* [Demo](http://gotapp.shahrukhsayyed.tech) - Application is up and running here

## More about the application

Application is having following views -

View 1 - A view to list all books, characters and houses
​
The view is using bootstrap cards to display the information. One type of card (for example a card displaying a book) is looking different from
another type of card(for example a card displaying a house). The view difference of the card are as simple as change of border color according to the category(red for
books, blue for characters and green for houses). The data is sorted in alphabetical order.

View 2 - On clicking the card, a view containing the detail of that book/character/house will open containing all the information about it in details.



## Built With

* [Angular](https://angular.io/) - The web framework used for Frontend Design
* [NPM](https://www.npmjs.com/) - Most of the modules are used

## Authors

* **Shahrukh Sayyed** - *Initial work* - [ShahrukhSayyed](https://github.com/ShahrukhSayyed)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detailsg

## Acknowledgments

* Thanks for Edwisor to review this application.
* I would like to thank my friends for supporting me to complete this Application.

