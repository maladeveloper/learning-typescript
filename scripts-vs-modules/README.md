# Scripts vs Modules 

In this directory files _a.ts_ and _c.ts_ are considered modules since they contain
either a `export` or `import` statement.

Files _b.ts_ and _d.ts_ are considered scripts because they contain neither of these statements.
Scripts are globally scoped such that `sharedVariable` that is declared in _b.ts_ is defined in _d.ts_.

`sharedVariable` can be redeclared in _b.ts_ after being declared in _a.ts_ since _a.ts_ is considered a 
module and modules have their variables scoped to only their file which can only be accessed by an `import` statement 
(which in turn makes the file using the `import` statement into a module itself).
