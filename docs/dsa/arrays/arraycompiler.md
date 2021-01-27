---
sidebar_label: Array representation by compiler
title:    
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

## Array Representation by Compiler

When we create a variable or an array in C, its address gets allocated in the memory
during execution. When the program gets compiled into machine code, variables or
arrays in machine code must represent the address of the variable/array. But
address can be only known when the memory is allocated during execution in
stack/heap.

So the issue arises that how compiler can represent the address of that
variable/array at compile time?

Consider we have an array **A** of size 5 and assume its memory addresses as below
and base address **Lo** of first element having address **200.**

Let us suppose we have a statement A[3] = 10; this statement will get converted into
machine code by compiler which is referring to the address 206. So compiler has to
refer to that location 206.

Since at compile time, the address cannot be known to the compiler, so compiler
has a formula for obtaining the address as below.

**Add(A[3]) =** <C color="red">200 + 3 * 2 **=** 206 </C>  

**Add(A[i]) = Lo + i * w** (size of data type) //Logical/Relative address based on base address

In some languages, the index starts from 1, so it becomes:

**Add(A[i])** = **Lo + (i-1) * w**

Therefore, the address can be calculated as **<Cp>Base address</Cp>** + **<Cg>index of array</Cg>** + **<C color="red">size of
datatype</C>**. The base address is known during runtime when the memory for array is
allocated and its updated in runtime and it is called as **<Co>data binding</Co>**.

## Why C/C++ have indices starting strictly from 0?

Lets take the formula for obtaining the address with indices starting from 1 and 0.

**Add(A[i])** = **Lo + (i-1) * w** //Indices starting from 1  
**Add(A[i]) = Lo + i * w //** Indices starting from 0

If you compare both these formulae you will see that indices from 1 has an extra
arithmetic operator **(-)** to perform in total three operations for each calculation
while indices which start from 0 has only two operations.

So while accessing the elements, if there are N locations or elements, then that
extra operation has to get executed N times. Though it is only one operation extra,
but it will be slower to access all the elements depending on the size of the array.

If the size is really large then accessing the elements will be really slow. That is the
reason most of the languages have array indices starting from 0.