---
sidebar_label: Pointer and Arrays
title: Pointers and Arrays
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



The concept of arrays is very much bound to the concept of pointers. Array notation
is a form of pointer notation.

The name of the array is the starting address or base address of the array in
memory. In other words, base address is the address of the first element in the array
or address of **arr[0].**

Consider below example:

```c
main()
{
    int arr[] = {1, 2, 3, 4, 5};
    int *ptr = &arr[0];
    printf("\n Address of array = %p %p %p", arr, &arr[0], &arr);
}
```
 

Here, you will see that address of the pointer variable and array will be the same as
`&arr[0]`, `&arr`, and `arr`.

If pointer variable ptr holds the address of the first element inthe array, then the
address of successive elements can be calculated by writing `ptr++` and its value can
be obtained by dereferencing the pointer `*ptr`.

`++ptr` and `ptr+`+ are both equivalent to `ptr+1`, incrementing a pointer using the unary
`++` operator, increments the address it stores by the amount given by sizeof(type)
where type is the data type of the variable it points to (i.e., 4 for an integer).

Many beginners get confused by thinking of array name as a pointer.
For example, while we can write

```ptr = arr; // ptr = &arr[0]```

we cannot write
```arr = ptr;```

This is because while ptr is a variable, arr is a constant. the location at which the
first element of arr will be stored cannot be changed once **`arr[]`** has been declared.
Therefore, an array name is often known to be a **<Highlight color="green">constant pointer.</Highlight>**

:::note
To summarize, the name of an array is equivalent to the address of its first element,
as a pointer is equivalent to the address of the element that it points to. Therefore,
arrays and pointers use the same concept.
:::