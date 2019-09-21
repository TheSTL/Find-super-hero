Api : `http://localhost:8080/superhero/find`
request : {
  code : '0 787376216'
}

![Screenshot from 2019-09-22 02-35-44](https://user-images.githubusercontent.com/50075905/65379197-d755fd80-dce1-11e9-9ab4-94eade237974.png)

E.g :

4855 generates the following combination of words: [gvlj, htkl, itlj, hulk, gtjj, hvlk, …]

Out of the 81 combinations, only hulk is a valid name. This is arrived by mapping numbers
to letters in the following manner:

4 – h

8 – u

5 – l

5 – k

Write a program that asks for code and decodes the name of the correct super hero based
on the given list of names.

Summary:

Program Input

0 228626

0 4855

0 78737626

0 8467

Program Output

BATMAN

HULK

SUPERMAN

THOR

