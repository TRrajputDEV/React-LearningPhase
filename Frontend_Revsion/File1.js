class Polygon{

    constructor(height, Width){
        this.area = height * Width
    }
}

console.log(new Polygon(4,3).area)
/*

    1. Class declaration are scoped to blocks and functions both. - [Non-Hoisted]
    2. class declaration - can be only accessed from the place of declaration,

    ***(temporal dead Zone) -dexter meme
    == JS knows that the variable [class, let, const] exists but can't use because the code hasn't reached upto the line and it hasn' been executed.
    -that period is called TDZ.

    Why Var are not included in the Temporal Dead Zone.
    - because var are hoisted and they are at the top of the fncn or global scope.

    **Elite ball knowledge 
    == class names are taken as constant and const cant be re declared so if you will try something funny it will give you error : [TypeError: Assignment to constant variable. ]
    eg:  class Foo {
            static {
                Foo = 1; // TypeError: Assignment to constant variable.
                }
            }

    **super() = can only be used before "this" and it can be only be used in constructor - but what does super do.
    - it calls that parent's constructor and sets up this (current object) so you can start using it.

*/