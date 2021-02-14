---
sidebar_label: Pointers
title: Pointers
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

## Address of Operator (&)

The address of a variable can be obtained by preceding the name of a variable with an ampersand sign `&` known as <Co> address-of </Co> operator. For example:

``cout << &var``

## What are pointers ?


Pointers are another type of variables in CPP and these variables store addresses of other variables.

While creating a pointer variable, we need to mention the type of data whose address is stored in the pointer, in order to create a pointer which stores address of an integer, we need to write `

int *p;`

This means that `p` will contain address of an integer. 

Ex: 
```cpp
int i = 10;
int *p = &i;
```

## Dereference Operator

This operator is used to derefence the pointer variable i.e it is used to get the value of the data type which it points to.

This is done by preceding the pointer name with the dereference operator `(*)`. It can be read as <Cb>Value pointed to by</Cb>

## NULL Pointer

Consider `int *p;`
Here we have a pointer variable `p` that contains garbage value. If we try to read out the garbage value, this will lead to unexpectedresults or segmentation faults. Hence we should never leave a pointer uninitialized and instead initialize it to `NULL` to avoid such behavior.

```cpp
int *p = NULL;
int *q = 0;
```

## Pointer Arithmetic

- **`++p` or `p=p+1`** - will point to the next memory block of respective data type. Ex: int takes 4 bytes, assume address is `2000` if we do `++p` or `p=p+1` then it will point to `2004` address in the memory

- **`--p` or `p=p-1`** - same as above 

- **`++*p`** - same as `++(*p)`, derefence pointer, and increment the value it points to.

- **`(*p)++`** - Deference pointer and post-increment the value it points to.


## Pointer and arrays.

```cpp
int a[10]
int *b = &a[0];
```

- The variable of the array contains the address of the first element. The name of the array is itself a pointer to the first element but no separate space is allocated for array variable in the memory. The memory is allocated as a whole.

- Pointer variables have specific space allocated in the memory, most of the time the size of the pointer variable for any data type is the same. i.e 8 bytes in most of the cases.

- `a`, `&a`, &a[0] all will have same address that points to the first element.

- `b` will also have the same address as of the above three.

- `&b` will have different address because it is a pointer variable which will have some memory to it also.

- In arrays `a[i]` is same as `*(a+i)`

- `sizeof(a)` will return the total size of the array, in this case its `40 bytes`;

- Pointer variable can be assigned a value , where as array variable cannot be assigned.

```cpp
int a[10];
int *p;
p=a; //legal
a=p; //illegal
```

- Arithmetic on pointers are allowed, but not on array variable.


