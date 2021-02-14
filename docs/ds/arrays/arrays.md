---
sidebar_label: Arrays
title: Arrays
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
 

export const C= ({children,color}) => ( <span style={{
      color: color,
    }}>{children}</span> );

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

export const Cg = ({children}) => ( <span style={{
      color: "#60d394",
    }}>{children}</span> );

export const Cp = ({children}) => ( <span style={{
      color: "#892cdc",
    }}>{children}</span> );

export const Co = ({children}) => ( <span style={{
      color: "#ff7c38",
    }}>{children}</span> );

export const Cb = ({children}) => ( <span style={{
      color: "#1877F2",
    }}>{children}</span> );


## 👋 Introduction

An array is a collection of homogeneous (same type) data items stored in contiguous
(side by side or in order) memory locations. For example if an array is of type “int”,
it can only store integer elements and cannot allow the elements of other types such
as double, float, char etc.
So if all you need is to store some data or iterate over it i.e go one by one or step by
step <C color="#ff7c38">**Arrays**</C> are the best choice of data structure.

An array is a data structure for storing more than one data item that has a similar
data type. The items of an array are allocated at adjacent memory locations. These
memory locations are called <C color="#ff7c38">**elements**</C> of that array.


The total number of elements in an array is called <Cg>**length**</Cg>. The details of an array are
accessed about its position. This reference is called <C color="#892cdc">**index**</C> or <C color="#892cdc">**subscript**</C>.

** Array Declaration and initialization ** 

Syntax for declaring and initializing an 1-D array  
:::important Syntax
&nbsp<Cp>
**data_type**</Cp>&nbsp<C color="red">**array_name**</C>[**size**] = {element1, element2, ... size};
:::
## 📘 Concept of Arrays

![picture 4](https://i.imgur.com/0MV5QLc.png)  


## 📒 Types of Array

- **Static Array:** Arrays in C/C++ or in general are only static arrays. Meaning we cannot
change the array size during runtime.  

- **Dynamic Array:** Now there are arrays which are dynamic which can change their
size during runtime automatically. We have vectors in C++ STL library which can do
that.


## Representation of Array in Memory.

The following diagram represents an integer array that has 12 elements. <Highlight color="blue">**The index
of the array starts with 0**</Highlight> , so the array having 12 elements has indexes from 0 to 11.

![picture 5](https://i.imgur.com/WtMcAvG.png)  


In the above image, we have shown the memory allocation of an array of size **12**.
The array follows 0-based indexing approach. The base address of the array is **200th**
byte. This will be the address of <Co>**arr[0]**</Co>. Here, the size of int is 4 bytes therefore each
element will take 4 bytes in the memory so address is increasing by 4 for every
element.




## 2-D Arrays

The 2D array is organized as matrices which can be represented as the collection of
rows and columns. However, 2D arrays are created to implement a relational
database look alike data structure. It provides ease of holding bulk of data at once
which can be passed to any number of functions wherever required.

The syntax declaration of 2-D array is similar to that of 1-D array. 
:::important syntax
&nbsp<Cp>
**data_type**</Cp>&nbsp<C color="red">**array_name**</C>[**rowsize**][columnsize] = {element1, element2, ... size};
:::

**Initialization of 2-D arrays:**
2-D arrays can be initialized in similar way to that of 1-D arrays.

```cpp
int arr[4][3] = {11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22};
```

The values are assigned to the elements row-wise, and we can also group the
elements row-wise using inner braces.

```cpp
int arr[4][3] = {{11,12, 13} ,{14, 15, 16} ,{17, 18, 19} ,{20, 21, 22}};
```
```cpp
int arr[4][3] = {{11,12, 13} , //Row 0
{14, 15, 16} , //Row 1
{17, 18, 19} , //Row 2
{20, 21, 22}}; //Row 3
```
![picture 6](https://i.imgur.com/NlfEKaM.png)  


## Processing 2-D arrays

For processing 2-D arrays we use two nested <Cg>**for loops.**</Cg> The <Cp>outer</Cp> **for loop**
corresponds to the row and the <Co>inner</Co> **for loop** corresponds to the column.
ex: int arr[4][5];  

&nbsp<C color="#ffbd39">**Printing the values of array:**</C>
```cpp 
for(int i=0; i<4; i++){
    for(int j=0; j<5; j++){
        printf("%d", arr[i][j]);
    }
        printf("\n");
}
```
 


## 🕧 Array operations and their time complexities

Following are the basic operations supported by an array.

- **Insertion** − Adds or inserts an element at the given index.
- **Deletion** − Deletes an element at the given index.
- **Search** − Searches an element using the given index or by the value.
- **Access** − Access or read an element at a given index.
- **Traverse** – Traverse or loop through all the elements of array one by one.
- **Update –** Updates an element at the given index.

| Operation        |      Average Case      |   Worst Case |
| :-----------: | :-----------: | :-----: |
| Insert     | O(n) | O(n) |
| Delete      |  O(n)    |   O(n) |
| Search |   O(n)    |    O(n) |
| Access | O(1) | O(1) |
| Traverse | O(n) | O(n) | 
| Update | O(1) | O(1) | 

## ✔️ Advantages

- Arrays are best for storing multiple values in a single variable
- Arrays are better at processing many values easily and quickly
- Sorting and searching the values is easier in arrays

## ❌ Disadvantages

- While using array, we must need to make the decision of the size of the array
    in the beginning, so if we are not aware how many elements we are going to
    store in array, it would make the task difficult.
- The size of the array is fixed so if at later point, if we need to store more
    elements in it then it can’t be done. On the other hand, if we store less
    number of elements than the declared size, the remaining allocated memory
    is wasted.
 

